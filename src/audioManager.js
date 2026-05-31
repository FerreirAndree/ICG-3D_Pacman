const SOUND_STORAGE_KEY = 'icg-3d-pacman-sound-enabled';
const SOUND_BASE_URL = `${import.meta.env.BASE_URL}sounds/`;

const SOUND_DEFINITIONS = {
  death: { src: `${SOUND_BASE_URL}death.mp3`, volume: 0.8 },
  ghostEaten: { src: `${SOUND_BASE_URL}ghost-eaten.mp3`, volume: 0.75 },
  pelletA: { src: `${SOUND_BASE_URL}pellet.wav`, volume: 0.5 },
  pelletB: { src: `${SOUND_BASE_URL}pellet.wav`, volume: 0.5 },
  powerPellet: { src: `${SOUND_BASE_URL}power-pellet.mp3`, volume: 0.65 },
  startMusic: { src: `${SOUND_BASE_URL}start-music.mp3`, volume: 0.7 }
};

export class AudioManager {
  constructor() {
    this.enabled = this.loadEnabledPreference();
    this.context = null;
    this.masterGain = null;
    this.buffers = new Map();
    this.loading = new Map();
    this.activeSources = new Map();
    this.loopSources = new Map();
    this.playVersions = new Map();
    this.didPlayUnlockPulse = false;
  }

  loadEnabledPreference() {
    try {
      return localStorage.getItem(SOUND_STORAGE_KEY) !== 'false';
    } catch {
      return true;
    }
  }

  persistEnabledPreference() {
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, this.enabled ? 'true' : 'false');
    } catch {
      // Sound preference is non-critical.
    }
  }

  isEnabled() {
    return this.enabled;
  }

  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    this.persistEnabledPreference();

    if (this.masterGain) {
      this.masterGain.gain.value = this.enabled ? 1 : 0;
    }

    if (this.enabled) {
      this.unlock();
    }

    return this.enabled;
  }

  toggle() {
    return this.setEnabled(!this.enabled);
  }

  suspend() {
    if (!this.context || this.context.state !== 'running') return;
    this.context.suspend().catch(() => {});
  }

  resume() {
    if (!this.enabled) return;

    const context = this.ensureContext();
    if (!context || context.state !== 'suspended') return;
    context.resume().catch(() => {});
  }

  ensureContext() {
    if (this.context) return this.context;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    this.context = new AudioContextClass();
    this.masterGain = this.context.createGain();
    this.masterGain.gain.value = this.enabled ? 1 : 0;
    this.masterGain.connect(this.context.destination);

    return this.context;
  }

  unlock() {
    const context = this.ensureContext();
    if (!context) return;

    if (context.state === 'suspended') {
      context.resume().catch(() => {});
    }

    this.playUnlockPulse();

    Object.keys(SOUND_DEFINITIONS).forEach((id) => {
      this.loadBuffer(id);
    });
  }

  playUnlockPulse() {
    if (!this.context || this.didPlayUnlockPulse) return;

    const buffer = this.context.createBuffer(1, 1, this.context.sampleRate);
    const source = this.context.createBufferSource();
    const gain = this.context.createGain();
    gain.gain.value = 0;
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(this.masterGain);
    source.start(0);
    this.didPlayUnlockPulse = true;
  }

  async loadBuffer(id) {
    if (this.buffers.has(id)) return this.buffers.get(id);
    if (this.loading.has(id)) return this.loading.get(id);

    const context = this.ensureContext();
    const definition = SOUND_DEFINITIONS[id];
    if (!context || !definition) return null;

    const request = fetch(definition.src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load sound ${id}`);
        }
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((buffer) => {
        this.buffers.set(id, buffer);
        this.loading.delete(id);
        return buffer;
      })
      .catch((error) => {
        this.loading.delete(id);
        console.warn(error);
        return null;
      });

    this.loading.set(id, request);
    return request;
  }

  async play(id, options = {}) {
    if (!this.enabled) return null;

    if (options.loop) {
      return this.playLoop(id, options);
    }

    const context = this.ensureContext();
    if (!context) return null;

    if (context.state === 'suspended') {
      await context.resume().catch(() => {});
    }

    const definition = SOUND_DEFINITIONS[id];
    const playVersion = this.getPlayVersion(id);
    const buffer = await this.loadBuffer(id);
    if (!buffer || !this.enabled || this.getPlayVersion(id) !== playVersion) return null;

    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = buffer;
    source.loop = false;
    gain.gain.value = options.volume ?? definition.volume;
    source.connect(gain);
    gain.connect(this.masterGain);

    const activeForId = this.activeSources.get(id) || new Set();
    activeForId.add(source);
    this.activeSources.set(id, activeForId);

    source.onended = () => {
      activeForId.delete(source);
      if (activeForId.size === 0) {
        this.activeSources.delete(id);
      }
    };

    source.start(0);
    return source;
  }

  async playLoop(id, options = {}) {
    if (!this.enabled) return null;

    this.stop(id);

    const context = this.ensureContext();
    if (!context) return null;

    if (context.state === 'suspended') {
      await context.resume().catch(() => {});
    }

    const definition = SOUND_DEFINITIONS[id];
    const playVersion = this.getPlayVersion(id);
    const buffer = await this.loadBuffer(id);
    if (!buffer || !this.enabled || this.getPlayVersion(id) !== playVersion) return null;

    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = buffer;
    source.loop = true;
    gain.gain.value = options.volume ?? definition.volume;
    source.connect(gain);
    gain.connect(this.masterGain);

    const loopHandle = { source, gain };
    this.loopSources.set(id, loopHandle);

    source.onended = () => {
      if (this.loopSources.get(id) === loopHandle) {
        this.loopSources.delete(id);
      }
    };

    source.start(0);
    return source;
  }

  restart(id, options = {}) {
    this.stop(id);
    return this.play(id, options);
  }

  stop(id) {
    this.bumpPlayVersion(id);
    const loopHandle = this.loopSources.get(id);
    if (loopHandle) {
      loopHandle.gain.disconnect();
      try {
        loopHandle.source.stop(0);
      } catch {
        // Already stopped.
      }
      this.loopSources.delete(id);
    }

    const sources = this.activeSources.get(id);
    sources?.forEach((source) => {
      try {
        source.stop(0);
      } catch {
        // Already stopped.
      }
    });
    this.activeSources.delete(id);
  }

  stopAll() {
    Object.keys(SOUND_DEFINITIONS).forEach((id) => this.bumpPlayVersion(id));
    Array.from(this.loopSources.keys()).forEach((id) => {
      const loopHandle = this.loopSources.get(id);
      if (!loopHandle) return;
      loopHandle.gain.disconnect();
      try {
        loopHandle.source.stop(0);
      } catch {
        // Already stopped.
      }
      this.loopSources.delete(id);
    });

    Array.from(this.activeSources.keys()).forEach((id) => {
      const sources = this.activeSources.get(id);
      sources?.forEach((source) => {
        try {
          source.stop(0);
        } catch {
          // Already stopped.
        }
      });
      this.activeSources.delete(id);
    });
  }

  getPlayVersion(id) {
    return this.playVersions.get(id) || 0;
  }

  isPlaying(id) {
    return this.loopSources.has(id) || this.activeSources.has(id);
  }

  bumpPlayVersion(id) {
    this.playVersions.set(id, this.getPlayVersion(id) + 1);
  }
}
