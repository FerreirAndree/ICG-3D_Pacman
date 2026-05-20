/**
 * OpenAI. (2026). ChatGPT (GPT-5.4) [Large language model]. https://chat.openai.com
 * Google. (2026). Gemini [Large language model]. https://gemini.google.com
 * 
 * Parts of the code in this file were co-authored with AI assistants to refine 
 * the 3D logic, architectural layout, and high-fidelity entity designs.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildShowcase, showcaseLayout, createMazePiece, createPedestal, TILE_SIZE, PIECE_CONNECTORS } from './mazePieces.js';
import { createPacman, createGhost, createPellet, createStandardPellet } from './entities.js';
import { buildMazeGraph, EXPERIMENTAL_GAME_MAP, getAbsoluteDirections as getGraphAbsoluteDirections } from './mazeGraph.js';
import { EntityController } from './pacmanController.js';
import { PelletManager, PELLET_TYPES } from './pelletManager.js';
import { GhostAIController } from './ghostAIController.js';
import './style.css';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010204);
scene.fog = new THREE.FogExp2(0x010204, 0.009);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 500);
const DEFAULT_CAMERA_FOV = 48;
const GAME_CAMERA_FOV = 82;

// --- Camera Profiles ---
const GALLERY_VIEW = {
  pos: [-52.15, 34.87, 81.20], // Shifted camera back too
  target: [13.69, 0.00, 46.19]  // Pushed target back
};

const EDITOR_VIEW = {
  pos: [0, 65, 120],  // Centered build view
  target: [0, 0, 0]
};

camera.position.set(...GALLERY_VIEW.pos);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.autoClear = false;
renderer.shadowMap.enabled = false;
const appContainer = document.querySelector('#app');
appContainer.appendChild(renderer.domElement);

const solidDepthMaterial = new THREE.MeshBasicMaterial({
  colorWrite: false,
  depthWrite: true,
  depthTest: true
});

// --- UI Injection ---
const uiHtml = `
  <div id="mode-status">Showcase</div>
  
  <div class="command-deck" id="command-deck">
    <div class="deck-header" id="deck-header">
      <div class="deck-title">Command Deck</div>
      <div class="collapse-icon">▼</div>
    </div>
    
    <div class="deck-body">
      <button class="btn btn-primary" id="btn-toggle-mode">Open Editor</button>
      <button class="btn" id="btn-toggle-game">Start Game</button>

      <div class="game-only-controls" id="game-only-controls" style="display: none; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 10px; margin-bottom: 5px;">
          <div class="control-label" style="flex: 1; align-self: center;">Pellets: <span id="pellet-counter" style="color: #ffaa00; font-weight: bold;">0</span></div>
          <div class="control-label" style="flex: 1; align-self: center;">Lives: <span id="lives-counter" style="color: #ff4444; font-weight: bold;">3</span></div>
        </div>
        <div class="control-label" style="text-align: center;">Score: <span id="score-counter" style="color: #00ffaa; font-weight: bold;">0</span></div>
        <div id="game-state-label" class="control-label" style="display: none; color: #ff4444; font-weight: bold; text-align: center;">Game Over</div>
        <div style="display: flex; gap: 10px; margin-top: -5px;">
          <button class="btn" id="btn-reset-pellets" style="flex: 1; padding: 6px;">Reset Pellets</button>
          <button class="btn" id="btn-reset-run" style="flex: 1; padding: 6px;">Restart Run</button>
        </div>
        <button class="btn" id="btn-swap-puppet" style="margin-top: -5px; padding: 6px; background: rgba(255, 204, 0, 0.2); border-color: rgba(255, 204, 0, 0.3); color: #ffcc00;">Control: Pacman</button>
        <button class="btn" id="btn-cycle-ghost-count" style="margin-top: -5px; padding: 6px;">Ghosts: 4</button>
        <button class="btn" id="btn-toggle-ghost-ai" style="margin-top: -5px; padding: 6px;">Ghost AI: Off</button>
        <button class="btn" id="btn-toggle-collisions" style="margin-top: -5px; padding: 6px;">Collisions: On</button>
        <button class="btn" id="btn-toggle-jumpscare" style="margin-top: -5px; padding: 6px;">Jumpscare: Off</button>
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>Look Back</span> <span class="hotkey-key">Hold Space</span></div>
          <div class="hotkey-item"><span>Swap</span> <span class="hotkey-key">Tab</span></div>
          <div class="hotkey-item"><span>Exit</span> <span class="hotkey-key">Esc</span></div>
        </div>
      </div>
      
      <div class="editor-only-controls" id="editor-only-controls" style="display: none; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 10px;">
          <button class="btn" id="btn-export" style="flex: 1;">Export</button>
          <button class="btn" id="btn-import" style="flex: 1;">Import</button>
        </div>
        <div style="display: flex; gap: 10px; margin-top: -10px;">
          <button class="btn" id="btn-apply-shift" style="flex: 1; display: none; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-color: rgba(0, 255, 136, 0.3);">Apply</button>
          <button class="btn" id="btn-shift-map" style="flex: 1;">Shift Map</button>
        </div>

        <div class="control-group">
          <div class="control-label">Zoom Level</div>
          <input type="range" id="zoom-slider" min="10" max="300" value="60">
        </div>

        <div class="segmented-toggle">
          <div class="toggle-slider" id="view-slider"></div>
          <div class="toggle-option active" data-view="3d">3D View</div>
          <div class="toggle-option" data-view="2d">Bird's Eye</div>
        </div>
        
        <div class="hotkey-list" id="hotkey-list">
          <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
          <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
          <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
          <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
          <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="editor-ui" id="editor-ui">
    <div class="left-bar">
      <div class="separator-label">Items</div>
      <div class="item-card" data-type="powerpellet">
        <span class="key-hint">P</span>
        Power
      </div>
      <div class="item-card" data-type="pacmanspawn">
        <span class="key-hint">S</span>
        Spawn
      </div>
    </div>
    <div class="bottom-bar">
      <div class="piece-card active" data-type="straight">
        <span class="key-hint">1</span>
        Straight
      </div>
      <div class="piece-card" data-type="corner">
        <span class="key-hint">2</span>
        Corner
      </div>
      <div class="piece-card" data-type="tjunction">
        <span class="key-hint">3</span>
        T-Junc
      </div>
      <div class="piece-card" data-type="crossroad">
        <span class="key-hint">4</span>
        Cross
      </div>
      <div class="piece-card" data-type="teleport">
        <span class="key-hint">5</span>
        Teleport
      </div>
      <div class="piece-card" data-type="ghostchamber">
        <span class="key-hint">6</span>
        Chamber
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="export-modal">
    <div class="modal-content">
      <h3 class="modal-title">Export Maze</h3>
      <div class="modal-buttons">
        <button class="btn" id="btn-modal-copy">Copy to Clipboard</button>
        <button class="btn" id="btn-modal-download">Download File</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-close">Close</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="import-modal">
    <div class="modal-content" style="width: 400px;">
      <h3 class="modal-title">Import Maze</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <textarea id="import-textarea" placeholder="Paste your exported maze JSON here..." rows="6" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 8px; padding: 12px; font-family: monospace; resize: vertical; outline: none;"></textarea>
        <div style="text-align: center; color: rgba(255,255,255,0.4); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">- OR -</div>
        <div class="file-drop-zone" id="import-file-zone">
          <div class="content-wrapper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <span id="import-file-name">Import File</span>
          </div>
          <input type="file" id="import-file" accept=".json">
        </div>
      </div>
      <div class="modal-buttons">
        <button class="btn btn-primary" id="btn-modal-import">Import Maze</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-import-close">Cancel</button>
      </div>
    </div>
  </div>

`;
appContainer.insertAdjacentHTML('beforeend', uiHtml);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);
controls.minDistance = 10;
controls.maxDistance = 300;
controls.maxPolarAngle = Math.PI / 2.12;
controls.screenSpacePanning = false;

const ambient = new THREE.HemisphereLight(0x89adff, 0x010103, 1.4);
scene.add(ambient);

const moonlight = new THREE.DirectionalLight(0xc3deff, 1.1);
moonlight.position.set(28, 34, 16);
scene.add(moonlight);

const cyanFill = new THREE.PointLight(0x3b7cff, 10, 90, 2.2);
cyanFill.position.set(6, 9, 3);
scene.add(cyanFill);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(115, 64),
  new THREE.MeshStandardMaterial({
    color: 0x04070c,
    emissive: 0x010206,
    roughness: 0.96,
    metalness: 0.04
  })
);
floor.rotation.x = -Math.PI / 2;

const floorInnerGlow = new THREE.Mesh(
  new THREE.CircleGeometry(72, 64),
  new THREE.MeshBasicMaterial({
    color: 0x06184a,
    transparent: true,
    opacity: 0.14,
    side: THREE.DoubleSide
  })
);
floorInnerGlow.rotation.x = -Math.PI / 2;
floorInnerGlow.position.y = 0.03;

const farRing = new THREE.Mesh(
  new THREE.RingGeometry(88, 106, 72),
  new THREE.MeshBasicMaterial({
    color: 0x0c1f57,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide
  })
);
farRing.rotation.x = -Math.PI / 2;
farRing.position.y = 0.02;

function createGroundGlow(radius, color, opacity) {
  const glow = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 28),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.DoubleSide
    })
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.05;
  return glow;
}

const showcase = buildShowcase(showcaseLayout);
const editorMaze = new THREE.Group();
const gameMaze = new THREE.Group();
let gamePacman = null;
let pacmanController = null;
let gameGhosts = [];
let activeController = null;
let activePuppet = 'pacman';
let pacmanSpawnState = null;
let pelletManager = new PelletManager(gameMaze);
let isGameMode = false;
let isGameLookBackActive = false;
let previousGameLookBackState = false;
let isJumpscareMode = false;
let areCaptureCollisionsEnabled = true;
let captureResolveTimer = 0;
let livesRemaining = 3;
let isGameOver = false;
let isLevelComplete = false;
let score = 0;
let powerPelletTimer = 0;
let activePowerPelletDuration = 0;
let ghostsEatenThisPower = 0;
let activeGhostCount = 4;
let currentGameGraph = null;
const gameCameraState = {
  forward: new THREE.Vector3(1, 0, 0),
  reverseHoldForward: new THREE.Vector3(1, 0, 0),
  target: new THREE.Vector3(),
  position: new THREE.Vector3(),
  isReversing: false,
  reversalTimer: 0,
  reverseSnapFramesRemaining: 0
};
const GAME_CAMERA_DIRECTION_DAMPING = 7.5;
const GAME_CAMERA_POSITION_DAMPING = 7.0;
const GAME_CAMERA_TARGET_DAMPING = 8.5;
const GAME_CAMERA_TURN_SPEED = 8.5;
const GAME_CAMERA_REVERSE_TURN_SPEED = 11.5;
const GAME_CAMERA_DISTANCE = 4.5;
const GAME_CAMERA_HEIGHT = 2;
const GAME_CAMERA_LOOK_AHEAD = 4.25;
const GAME_CAMERA_TARGET_HEIGHT = 0.5;
const GAME_CAMERA_CENTERED_LOOK_AHEAD = 0.75;
const PACMAN_BODY_RADIUS = 3.5;
const GHOST_BODY_RADIUS = 2.1;
const PACMAN_CAPTURE_RESOLVE_DURATION = 2.0;
const STARTING_LIVES = 3;
const STANDARD_PELLET_SCORE = 10;
const POWER_PELLET_SCORE = 50;
const POWER_PELLET_BASE_DURATION = 6.0;
const POWER_PELLET_DURATION_PER_TILE = 0.14;
const POWER_PELLET_MIN_DURATION = 7.0;
const POWER_PELLET_MAX_DURATION = 22.0;
const POWER_PELLET_FLASH_RATIO = 0.25;
const POWER_PELLET_MIN_FLASH_DURATION = 1.5;
const POWER_PELLET_MAX_FLASH_DURATION = 4.0;
const GHOST_RESPAWN_DELAY = 1.25;
const GHOST_NORMAL_SPEED = 12.5;
const GHOST_VULNERABLE_SPEED = 8.0;
const GHOST_SCORE_CHAIN = [200, 400, 800, 1600];
const DEFAULT_GHOST_SETTINGS = {
  blinky: {
    enabled: true,
    releaseDelay: 0
  },
  pinky: {
    enabled: true,
    releaseDelay: 3
  },
  inky: {
    enabled: true,
    releaseDelay: 6
  },
  clyde: {
    enabled: true,
    releaseDelay: 9
  }
};
const GHOST_DEFINITIONS = [
  {
    id: 'blinky',
    label: 'Blinky',
    color: 0xff0044,
    uiColor: '#ff0044',
    uiRgb: '255, 0, 68',
    spawnConnector: 'center_front',
    aiProfile: 'direct'
  },
  {
    id: 'pinky',
    label: 'Pinky',
    color: 0xff44bb,
    uiColor: '#ff44bb',
    uiRgb: '255, 68, 187',
    spawnConnector: 'center_back',
    aiProfile: 'ambush'
  },
  {
    id: 'inky',
    label: 'Inky',
    color: 0x00ccff,
    uiColor: '#00ccff',
    uiRgb: '0, 204, 255',
    spawnConnector: 'left_back',
    aiProfile: 'vector'
  },
  {
    id: 'clyde',
    label: 'Clyde',
    color: 0xffaa00,
    uiColor: '#ffaa00',
    uiRgb: '255, 170, 0',
    spawnConnector: 'right_back',
    aiProfile: 'shy'
  }
];

function getGhostSetting(ghostId, key, fallback = null) {
  return DEFAULT_GHOST_SETTINGS[ghostId]?.[key] ?? fallback;
}

function getActiveGhostDefinitions() {
  return GHOST_DEFINITIONS.slice(0, activeGhostCount).filter((definition) => (
    getGhostSetting(definition.id, 'enabled', true)
  ));
}

function getPrimaryGhostEntry() {
  return gameGhosts[0] || null;
}

function getPrimaryGhostController() {
  return getPrimaryGhostEntry()?.controller || null;
}

function getGhostEntryById(id) {
  return gameGhosts.find((entry) => entry.id === id) || null;
}

function resolveGhostEntry(ghostOrEntry = getPrimaryGhostEntry()) {
  if (!ghostOrEntry) return null;
  if (typeof ghostOrEntry === 'string') return getGhostEntryById(ghostOrEntry);
  if (gameGhosts.includes(ghostOrEntry)) return ghostOrEntry;

  return gameGhosts.find((entry) => (
    entry.model === ghostOrEntry
    || entry.controller === ghostOrEntry
    || entry.ai === ghostOrEntry
  )) || null;
}

function forEachGhost(callback) {
  gameGhosts.forEach(callback);
}

function isGhostAiEnabled() {
  return Boolean(gameGhosts.some((entry) => entry.ai.enabled));
}

function getActivePuppetController() {
  if (activePuppet === 'pacman') return pacmanController;
  return getGhostEntryById(activePuppet)?.controller || getPrimaryGhostController();
}

function updateSwapPuppetButton() {
  const btn = document.querySelector('#btn-swap-puppet');
  if (!btn) return;

  const ghostEntry = getGhostEntryById(activePuppet);

  if (!ghostEntry) {
    btn.textContent = 'Control: Pacman';
    btn.style.background = 'rgba(255, 204, 0, 0.2)';
    btn.style.borderColor = 'rgba(255, 204, 0, 0.3)';
    btn.style.color = '#ffcc00';
    return;
  }

  btn.textContent = `Control: ${ghostEntry.definition.label}`;
  btn.style.background = `rgba(${ghostEntry.definition.uiRgb}, 0.2)`;
  btn.style.borderColor = `rgba(${ghostEntry.definition.uiRgb}, 0.3)`;
  btn.style.color = ghostEntry.definition.uiColor;
}

function cycleActivePuppet() {
  if (activePuppet === 'pacman') {
    activePuppet = getPrimaryGhostEntry()?.id || 'pacman';
  } else {
    const currentIndex = gameGhosts.findIndex((entry) => entry.id === activePuppet);
    activePuppet = currentIndex >= 0 && currentIndex < gameGhosts.length - 1
      ? gameGhosts[currentIndex + 1].id
      : 'pacman';
  }

  activeController = getActivePuppetController();
  updateSwapPuppetButton();
}

function rotateFlatVectorToward(current, desired, maxRadians) {
  const from = current.clone().setY(0).normalize();
  const to = desired.clone().setY(0).normalize();
  const dot = THREE.MathUtils.clamp(from.dot(to), -1, 1);
  const crossY = from.x * to.z - from.z * to.x;
  const angle = Math.atan2(-crossY, dot);
  const step = THREE.MathUtils.clamp(angle, -maxRadians, maxRadians);

  return from.applyAxisAngle(new THREE.Vector3(0, 1, 0), step).normalize();
}

function getGameCameraRailPoint(distanceBehind, fallbackForward, lookBack = false) {
  if (lookBack) {
    // Project forward along the rail. If it exceeds the current pipe piece, fallback.
    const routePoint = activeController.getRouteCameraPoint(distanceBehind, false);
    if (routePoint) return routePoint;
    
    // Fallback if we reach the end of the route:
    // fallbackForward points BACKWARDS, so we subtract distanceBehind to place the camera IN FRONT
    return activeController.getCameraTarget().addScaledVector(fallbackForward, -distanceBehind);
  }
  return activeController.getCameraTrailPoint(distanceBehind, fallbackForward);
}

function makeGhostVisibleThroughGlass(ghost) {
  ghost.traverse((object) => {
    if (!object.material) return;

    object.material.depthTest = true;
  });
}

function updateJumpscareButton() {
  const btn = document.querySelector('#btn-toggle-jumpscare');
  if (!btn) return;

  btn.textContent = isJumpscareMode ? 'Jumpscare: On' : 'Jumpscare: Off';
  btn.style.background = isJumpscareMode ? 'rgba(255, 34, 34, 0.2)' : 'rgba(12, 22, 45, 0.84)';
  btn.style.borderColor = isJumpscareMode ? 'rgba(255, 34, 34, 0.4)' : 'rgba(136, 178, 255, 0.2)';
  btn.style.color = isJumpscareMode ? '#ff5555' : '#ffffff';
}

function updateCollisionsButton() {
  const btn = document.querySelector('#btn-toggle-collisions');
  if (!btn) return;

  btn.textContent = areCaptureCollisionsEnabled ? 'Collisions: On' : 'Collisions: Off';
  btn.style.background = areCaptureCollisionsEnabled ? 'rgba(255, 170, 0, 0.18)' : 'rgba(12, 22, 45, 0.84)';
  btn.style.borderColor = areCaptureCollisionsEnabled ? 'rgba(255, 170, 0, 0.35)' : 'rgba(136, 178, 255, 0.2)';
  btn.style.color = areCaptureCollisionsEnabled ? '#ffaa00' : '#ffffff';
}

function updateGhostAiButton() {
  const btn = document.querySelector('#btn-toggle-ghost-ai');
  if (!btn) return;

  const enabled = isGhostAiEnabled();
  btn.textContent = enabled ? 'Ghost AI: On' : 'Ghost AI: Off';
  btn.style.background = enabled ? 'rgba(0, 255, 170, 0.16)' : 'rgba(12, 22, 45, 0.84)';
  btn.style.borderColor = enabled ? 'rgba(0, 255, 170, 0.35)' : 'rgba(136, 178, 255, 0.2)';
  btn.style.color = enabled ? '#00ffaa' : '#ffffff';
}

function updateGhostCountButton() {
  const btn = document.querySelector('#btn-cycle-ghost-count');
  if (!btn) return;

  btn.textContent = `Ghosts: ${activeGhostCount}`;
}

function updateLivesUi() {
  const livesCounter = document.querySelector('#lives-counter');
  const gameStateLabel = document.querySelector('#game-state-label');

  if (livesCounter) {
    livesCounter.textContent = livesRemaining;
  }

  if (gameStateLabel) {
    gameStateLabel.style.display = (isGameOver || isLevelComplete) ? 'block' : 'none';
    gameStateLabel.textContent = isLevelComplete ? 'Level Complete' : 'Game Over';
    gameStateLabel.style.color = isLevelComplete ? '#00ffaa' : '#ff4444';
  }
}

function updateScoreUi() {
  const scoreCounter = document.querySelector('#score-counter');
  if (scoreCounter) {
    scoreCounter.textContent = score;
  }
}

function getPelletScore(pelletType) {
  if (pelletType === PELLET_TYPES.POWER) return POWER_PELLET_SCORE;
  return STANDARD_PELLET_SCORE;
}

function addPelletScore(eatenPellets) {
  if (eatenPellets.length === 0) return;

  score += eatenPellets.reduce((total, pellet) => total + getPelletScore(pellet.type), 0);
  updateScoreUi();
}

function getNextGhostScore() {
  const scoreIndex = Math.min(ghostsEatenThisPower, GHOST_SCORE_CHAIN.length - 1);
  return GHOST_SCORE_CHAIN[scoreIndex];
}

function addGhostScore() {
  score += getNextGhostScore();
  ghostsEatenThisPower += 1;
  updateScoreUi();
}

function getPowerPelletDuration() {
  const tileCount = currentGameGraph?.tiles?.size ?? 0;
  return THREE.MathUtils.clamp(
    POWER_PELLET_BASE_DURATION + tileCount * POWER_PELLET_DURATION_PER_TILE,
    POWER_PELLET_MIN_DURATION,
    POWER_PELLET_MAX_DURATION
  );
}

function getPowerPelletFlashDuration(powerDuration = activePowerPelletDuration || getPowerPelletDuration()) {
  return THREE.MathUtils.clamp(
    powerDuration * POWER_PELLET_FLASH_RATIO,
    POWER_PELLET_MIN_FLASH_DURATION,
    POWER_PELLET_MAX_FLASH_DURATION
  );
}

function getGhostPowerState(ghostOrEntry = getPrimaryGhostEntry()) {
  return resolveGhostEntry(ghostOrEntry)?.powerState || null;
}

function setGhostVulnerableVisual(ghost, state) {
  if (ghost?.setVulnerable) {
    ghost.setVulnerable(state);
  }
}

function setPacmanPowerVisual(state) {
  if (gamePacman?.setPowerMode) {
    gamePacman.setPowerMode(state);
  }
}

function canGhostBeEaten(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (entry?.powerState.recoveringFromEaten) return false;

  const state = getGhostPowerState(ghostOrEntry);
  return Boolean(isPowerPelletActive() && state && !state.eatenDuringCurrentPower);
}

function getActivePowerVisualState() {
  if (!isPowerPelletActive()) return false;
  return powerPelletTimer <= getPowerPelletFlashDuration() ? 'flashing' : true;
}

function applyPowerVisualsToGhosts() {
  forEachGhost((entry) => {
    setGhostVulnerableVisual(
      entry.model,
      canGhostBeEaten(entry) ? getActivePowerVisualState() : false
    );
    updateGhostMovementSpeed(entry);
  });
}

function updateGhostMovementSpeed(ghostOrEntry = null) {
  const entries = ghostOrEntry ? [resolveGhostEntry(ghostOrEntry)].filter(Boolean) : gameGhosts;

  entries.forEach((entry) => {
    entry.controller.speed = canGhostBeEaten(entry)
      ? GHOST_VULNERABLE_SPEED
      : GHOST_NORMAL_SPEED;
  });
}

function getGhostHouseState(ghostOrEntry = getPrimaryGhostEntry()) {
  return resolveGhostEntry(ghostOrEntry)?.houseState || null;
}

function initializeGhostHouseState(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry) return;

  entry.houseState.houseState = entry.spawnState?.tile?.type === 'ghostchamber' ? 'inside' : 'active';
  entry.houseState.releaseTimer = entry.powerState.recoveringFromEaten
    ? 0
    : getGhostSetting(entry.id, 'releaseDelay', 0);
  entry.houseState.releaseDirection = entry.spawnState?.direction || null;
}

function isGhostInsideHouse(ghostOrEntry = getPrimaryGhostEntry()) {
  const state = getGhostHouseState(ghostOrEntry);
  return Boolean(state && state.houseState !== 'active');
}

function prepareGhostHouseRelease(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  const state = getGhostHouseState(entry);
  if (!entry || !state || !isGhostControllerInHouse(entry.controller)) return;

  state.houseState = 'inside';
  state.releaseTimer = getGhostSetting(entry.id, 'releaseDelay', 0);
  state.releaseDirection = getGhostHouseReleaseDirection(entry) || entry.spawnState?.direction || entry.controller.currentDirection || null;
  entry.ai.reset();
}

function getGhostHouseReleaseDirection(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  const targetNode = entry?.controller.activeEdge?.to || entry?.controller.currentNode;
  if (targetNode?.tile?.type !== 'ghostchamber') return null;

  const connectorRoute = {
    left_back: 'east',
    right_back: 'west',
    center_back: 'north',
    left_front: 'east',
    right_front: 'west',
    center_front: 'north'
  };
  const localDirection = connectorRoute[targetNode.connector];
  if (!localDirection) return null;

  return getGraphAbsoluteDirections([localDirection], targetNode.tile.rotation)[0] || null;
}

function steerGhostThroughHouseRelease(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  const direction = getGhostHouseReleaseDirection(entry);
  if (!entry || !direction) return;

  entry.houseState.releaseDirection = direction;
  steerGhostInHouse(entry, direction);
}

function getGhostHouseWaitingDirection(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  const targetNode = entry?.controller.activeEdge?.to || entry?.controller.currentNode;
  if (targetNode?.tile?.type !== 'ghostchamber') return null;

  const connectorRoute = {
    left_back: 'north',
    center_back: 'north',
    right_back: 'north',
    left_front: 'south',
    center_front: 'south',
    right_front: 'south'
  };
  const localDirection = connectorRoute[targetNode.connector];
  if (!localDirection) return null;

  return getGraphAbsoluteDirections([localDirection], targetNode.tile.rotation)[0] || null;
}

function steerGhostThroughHouseWaiting(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  const direction = getGhostHouseWaitingDirection(entry);
  if (!entry || !direction) return;

  steerGhostInHouse(entry, direction);
}

function steerGhostInHouse(ghostOrEntry, direction) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry || !direction) return;

  if (entry.controller.isMoving) {
    entry.controller.desiredDirection = direction;
  } else {
    entry.controller.setDesiredDirection(direction);
  }
  entry.controller.desiredIntent = null;
}

function isGhostControllerInHouse(controller = getPrimaryGhostController()) {
  if (!controller) return false;

  return (
    controller.currentNode?.tile?.type === 'ghostchamber'
    || controller.activeEdge?.from?.tile?.type === 'ghostchamber'
    || controller.activeEdge?.to?.tile?.type === 'ghostchamber'
  );
}

function isGhostControllerAtHouseNode(controller = getPrimaryGhostController()) {
  return Boolean(controller?.currentNode?.tile?.type === 'ghostchamber' && !controller.route);
}

function isGhostApproachingHouseExit(controller = getPrimaryGhostController()) {
  if (!controller?.route || !controller.activeEdge) return false;

  return (
    controller.activeEdge.from?.tile?.type === 'ghostchamber'
    && controller.activeEdge.to?.tile?.type !== 'ghostchamber'
    && controller.route.totalLength - controller.route.progress <= 4.5
  );
}

function shouldSuppressGhostCollision(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry) return true;
  if (isGhostRespawning(entry)) return true;
  if (isGhostControllerAtHouseNode(entry.controller)) return true;
  if (!isGhostControllerInHouse(entry.controller)) return false;

  return !isGhostApproachingHouseExit(entry.controller);
}

function updateGhostHouseState(deltaTime) {
  forEachGhost((entry) => {
    updateGhostEatenRecoveryState(entry);

    if (!entry.ai.enabled) return;

    const state = getGhostHouseState(entry);
    if (!state || state.houseState === 'active' || isGhostRespawning(entry)) return;

    if (state.houseState === 'inside') {
      state.releaseTimer = Math.max(0, state.releaseTimer - deltaTime);
      if (state.releaseTimer === 0) {
        state.houseState = 'releasing';
        steerGhostThroughHouseRelease(entry);
        entry.ai.reset();
      } else {
        steerGhostThroughHouseWaiting(entry);
      }
      return;
    }

    if (state.houseState === 'releasing') {
      if (!isGhostControllerInHouse(entry.controller) || isGhostApproachingHouseExit(entry.controller)) {
        state.houseState = 'active';
        updateGhostEatenRecoveryState(entry);
        entry.ai.reset();
      } else {
        steerGhostThroughHouseRelease(entry);
      }
    }
  });
}

function startPowerPelletState() {
  activePowerPelletDuration = getPowerPelletDuration();
  powerPelletTimer = activePowerPelletDuration;
  ghostsEatenThisPower = 0;
  setPacmanPowerVisual(true);
  forEachGhost((entry) => {
    entry.powerState.eatenDuringCurrentPower = (
      isGhostRespawning(entry)
      || entry.powerState.recoveringFromEaten
    );
  });
  applyPowerVisualsToGhosts();
  forEachGhost((entry) => {
    if (
      canGhostBeEaten(entry)
      && !isGhostRespawning(entry)
      && !isGhostControllerInHouse(entry.controller)
    ) {
      entry.ai.queueFrightenedReverse();
    }
  });
}

function clearPowerPelletState() {
  powerPelletTimer = 0;
  activePowerPelletDuration = 0;
  ghostsEatenThisPower = 0;
  setPacmanPowerVisual(false);
  forEachGhost((entry) => {
    entry.powerState.eatenDuringCurrentPower = false;
  });
  applyPowerVisualsToGhosts();
}

function updatePowerPelletState(deltaTime) {
  if (powerPelletTimer <= 0) return;

  powerPelletTimer = Math.max(0, powerPelletTimer - deltaTime);
  if (powerPelletTimer === 0) {
    activePowerPelletDuration = 0;
    ghostsEatenThisPower = 0;
    setPacmanPowerVisual(false);
    forEachGhost((entry) => {
      entry.powerState.eatenDuringCurrentPower = false;
    });
  }
  applyPowerVisualsToGhosts();
}

function didEatPowerPellet(eatenPellets) {
  return eatenPellets.some((pellet) => pellet.type === PELLET_TYPES.POWER);
}

function isPowerPelletActive() {
  return powerPelletTimer > 0;
}

function isGhostRespawning(ghostOrEntry = getPrimaryGhostEntry()) {
  return (resolveGhostEntry(ghostOrEntry)?.respawnTimer || 0) > 0;
}

function updateGhostEatenRecoveryState(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry?.powerState.recoveringFromEaten) return;
  if (isGhostRespawning(entry) || isGhostControllerInHouse(entry.controller)) return;

  entry.powerState.recoveringFromEaten = false;
}

function resetGhostToSpawn(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry?.controller || !entry.spawnState) return;

  entry.controller.reset(entry.spawnState.tile, entry.spawnState.direction, entry.spawnState.connector);
  initializeGhostHouseState(entry);
  entry.model.visible = true;
  applyPowerVisualsToGhosts();
}

function startGhostRespawnDelay(ghostOrEntry = getPrimaryGhostEntry()) {
  const entry = resolveGhostEntry(ghostOrEntry);
  if (!entry || isGhostRespawning(entry)) return;

  const state = getGhostPowerState(entry);
  if (state) state.eatenDuringCurrentPower = true;
  if (state) state.recoveringFromEaten = true;
  addGhostScore();
  setGhostVulnerableVisual(entry.model, false);
  updateGhostMovementSpeed(entry);
  entry.respawnTimer = GHOST_RESPAWN_DELAY;
  entry.model.visible = false;
}

function updateGhostRespawn(deltaTime) {
  forEachGhost((entry) => {
    if (!isGhostRespawning(entry)) return;

    entry.respawnTimer = Math.max(0, entry.respawnTimer - deltaTime);
    if (!isGhostRespawning(entry)) {
      resetGhostToSpawn(entry);
    }
  });
}

function updateGhostAi() {
  forEachGhost((entry) => {
    if (entry.ai.enabled && isGhostControllerAtHouseNode(entry.controller) && !isGhostInsideHouse(entry)) {
      prepareGhostHouseRelease(entry);
    }

    if (isGhostInsideHouse(entry)) return;

    entry.ai.update({
      ghostController: entry.controller,
      pacman: gamePacman,
      ghost: entry.model,
      ghosts: gameGhosts,
      canGhostBeEaten,
      isGhostRespawning: isGhostRespawning(entry)
    });
  });
}

function asMaterialList(material) {
  return Array.isArray(material) ? material : [material];
}

function isSolidDepthOccluder(object) {
  if (!object.isMesh || !object.visible || !object.material) return false;

  return asMaterialList(object.material).every((material) => (
    material &&
    material.visible !== false &&
    material.transparent !== true &&
    material.opacity !== 0 &&
    material.depthWrite !== false
  ));
}

function renderSolidDepthOnly() {
  const meshVisibility = [];
  const previousBackground = scene.background;
  const previousOverrideMaterial = scene.overrideMaterial;

  scene.traverse((object) => {
    if (!object.isMesh) return;
    if (isSolidDepthOccluder(object)) return;

    meshVisibility.push([object, object.visible]);
    object.visible = false;
  });

  scene.background = null;
  scene.overrideMaterial = solidDepthMaterial;
  try {
    renderer.render(scene, camera);
  } finally {
    scene.overrideMaterial = previousOverrideMaterial;
    scene.background = previousBackground;
    meshVisibility.forEach(([object, visible]) => {
      object.visible = visible;
    });
  }
}

function renderFrame() {
  renderer.clear();
  const visibleGhosts = gameGhosts
    .map((entry) => entry.model)
    .filter((ghost) => ghost?.visible);

  if (!isGameMode || isJumpscareMode || visibleGhosts.length === 0) {
    renderer.render(scene, camera);
    return;
  }

  visibleGhosts.forEach((ghost) => {
    ghost.visible = false;
  });
  renderer.render(scene, camera);
  visibleGhosts.forEach((ghost) => {
    ghost.visible = true;
  });

  renderer.clearDepth();
  renderSolidDepthOnly();
  visibleGhosts.forEach((ghost) => {
    renderer.render(ghost, camera);
  });
}


// Move floor meshes into showcase group
showcase.add(floor);
showcase.add(floorInnerGlow);
showcase.add(farRing);

// Invisible plane for editor raycasting
const raycastPlane = new THREE.Mesh(
  new THREE.PlaneGeometry(TILE_SIZE * 20, TILE_SIZE * 20),
  new THREE.MeshBasicMaterial({ visible: false })
);
raycastPlane.rotation.x = -Math.PI / 2;
scene.add(raycastPlane);

scene.add(showcase);
scene.add(editorMaze);
scene.add(gameMaze);
gameMaze.visible = false;

function createGameGhostEntry(definition, graph) {
  const model = createGhost(definition.color);
  model.scale.setScalar(0.32);
  model.userData.ghostId = definition.id;
  makeGhostVisibleThroughGlass(model);
  gameMaze.add(model);

  return {
    id: definition.id,
    definition,
    model,
    controller: new EntityController(model, graph, {
      speed: GHOST_NORMAL_SPEED,
      entityType: 'ghost'
    }),
    ai: new GhostAIController({
      profile: definition.aiProfile,
      randomSeed: definition.id.split('').reduce((seed, char) => (
        ((seed * 31) + char.charCodeAt(0)) >>> 0
      ), 0x9e3779b9)
    }),
    powerState: {
      eatenDuringCurrentPower: false,
      recoveringFromEaten: false
    },
    houseState: {
      houseState: 'active',
      releaseTimer: 0,
      releaseDirection: null
    },
    spawnState: null,
    respawnTimer: 0
  };
}

function buildGameMaze() {
  gameMaze.clear();
  gameGhosts = [];

  // If the editor has pieces, use the editor's map instead of the experimental one
  let mapSource = [];
  if (editorMaze.children.length > 0) {
    mapSource = editorMaze.children.map(c => ({
      type: c.userData.type,
      position: [c.position.x, c.position.y, c.position.z],
      rotation: c.userData.rotation,
      hasPowerPellet: c.userData.hasPowerPellet || false,
      hasPacmanSpawn: c.userData.hasPacmanSpawn || false,
      pacmanSpawnRotation: c.userData.pacmanSpawnRotation || 0
    }));
  } else {
    mapSource = EXPERIMENTAL_GAME_MAP;
  }

  mapSource.forEach((item) => {
    const piece = createMazePiece(item.type);
    piece.position.set(...item.position);
    piece.rotation.y = item.rotation;
    piece.userData = { 
      type: item.type, 
      rotation: item.rotation,
      hasPowerPellet: item.hasPowerPellet || false,
      hasPacmanSpawn: item.hasPacmanSpawn || false,
      pacmanSpawnRotation: item.pacmanSpawnRotation || 0
    };
    gameMaze.add(piece);
  });

  // Rebuild the graph to ensure it captures the exact state of what was loaded
  const gamePiecesForGraph = mapSource.map(item => ({
    type: item.type,
    position: item.position,
    rotation: item.rotation,
    hasPowerPellet: item.hasPowerPellet || false,
    hasPacmanSpawn: item.hasPacmanSpawn || false,
    pacmanSpawnRotation: item.pacmanSpawnRotation || 0
  }));
  
  const currentGraph = buildMazeGraph(gamePiecesForGraph);
  currentGameGraph = currentGraph;

  gamePacman = createPacman();
  gamePacman.scale.setScalar(0.32);
  gameMaze.add(gamePacman);

  pacmanController = new EntityController(gamePacman, currentGraph, { entityType: 'pacman' });
  gamePacman.userData.controller = pacmanController;
  gameGhosts = getActiveGhostDefinitions().map((definition) => createGameGhostEntry(definition, currentGraph));
  clearPowerPelletState();
  
  activeController = pacmanController;
  activePuppet = 'pacman';
  updateSwapPuppetButton();
  
  // Find a suitable spawn point for Pacman
  let spawnTile = null;
  let spawnDirection = null;
  let ghostSpawnTile = null;
  pacmanSpawnState = null;

  for (const tile of currentGraph.tiles.values()) {
    if (tile.hasPacmanSpawn) {
      spawnTile = tile;
      const rot = ((tile.pacmanSpawnRotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      if (Math.abs(rot - 0) < 0.1) spawnDirection = 'south';
      else if (Math.abs(rot - Math.PI/2) < 0.1) spawnDirection = 'east';
      else if (Math.abs(rot - Math.PI) < 0.1) spawnDirection = 'north';
      else if (Math.abs(rot - (Math.PI * 1.5)) < 0.1) spawnDirection = 'west';
    }
    if (tile.type === 'ghostchamber') {
      ghostSpawnTile = tile;
    }
  }

  if (!spawnTile) {
    const validTypes = ['straight', 'corner', 'tjunction', 'crossroad', 'teleport'];
    spawnTile = Array.from(currentGraph.tiles.values()).find(t => validTypes.includes(t.type));
    if (!spawnTile) {
      spawnTile = Array.from(currentGraph.tiles.values())[0];
    }
  }

  if (spawnTile) {
    pacmanSpawnState = {
      tile: spawnTile,
      direction: spawnDirection,
      connector: null
    };
    pacmanController.reset(pacmanSpawnState.tile, pacmanSpawnState.direction, pacmanSpawnState.connector);
  }

  if (ghostSpawnTile) {
    const ghostSpawnDirection = getGraphAbsoluteDirections(['north'], ghostSpawnTile.rotation)[0];
    forEachGhost((entry) => {
      entry.spawnState = {
        tile: ghostSpawnTile,
        direction: ghostSpawnDirection,
        connector: entry.definition.spawnConnector
      };
    });
  } else if (spawnTile) {
    forEachGhost((entry) => {
      entry.spawnState = {
        tile: spawnTile,
        direction: spawnDirection,
        connector: null
      };
    });
  } else {
    forEachGhost((entry) => {
      entry.spawnState = null;
    });
  }

  forEachGhost((entry) => {
    if (!entry.spawnState) return;

    entry.controller.reset(entry.spawnState.tile, entry.spawnState.direction, entry.spawnState.connector);
    initializeGhostHouseState(entry);
  });

  pelletManager.buildFromMap(currentGraph);
}

function resetGameCharactersToSpawn(snapCamera = true) {
  if (!pacmanController || gameGhosts.length === 0 || !pacmanSpawnState) return;

  if (gamePacman?.resetDeathAnimation) {
    gamePacman.resetDeathAnimation();
  }
  pacmanController.reset(pacmanSpawnState.tile, pacmanSpawnState.direction, pacmanSpawnState.connector);
  forEachGhost((entry) => {
    if (!entry.spawnState) return;

    entry.controller.reset(entry.spawnState.tile, entry.spawnState.direction, entry.spawnState.connector);
    initializeGhostHouseState(entry);
    entry.respawnTimer = 0;
    entry.model.visible = true;
    entry.ai.reset();
    entry.powerState.eatenDuringCurrentPower = false;
    entry.powerState.recoveringFromEaten = false;
  });

  isGameLookBackActive = false;
  previousGameLookBackState = false;
  gameCameraState.isReversing = false;
  gameCameraState.reversalTimer = 0;
  gameCameraState.reverseSnapFramesRemaining = 0;

  activeController = getActivePuppetController();

  if (snapCamera && activeController) {
    gameCameraState.forward.copy(activeController.getFollowDirection()).normalize();
    gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
    gameCameraState.target.copy(activeController.getCameraTarget());
    updateGameCamera(1, true);
  }
}

function getCapturingGhostEntry() {
  if (!gamePacman) return null;

  const pacmanRadius = PACMAN_BODY_RADIUS * gamePacman.scale.x;

  return gameGhosts.find((entry) => {
    if (!entry.model.visible || shouldSuppressGhostCollision(entry)) return false;

    const ghostRadius = GHOST_BODY_RADIUS * entry.model.scale.x;
    const captureRadius = pacmanRadius + ghostRadius;

    return gamePacman.position.distanceToSquared(entry.model.position) <= captureRadius * captureRadius;
  }) || null;
}

function isCaptureResolving() {
  return captureResolveTimer > 0;
}

function startPacmanCaptureResolve() {
  if (isCaptureResolving()) return;

  clearPowerPelletState();
  captureResolveTimer = PACMAN_CAPTURE_RESOLVE_DURATION;
  if (gamePacman?.playDeathAnimation) {
    gamePacman.playDeathAnimation(PACMAN_CAPTURE_RESOLVE_DURATION);
  }
  isGameLookBackActive = false;
  previousGameLookBackState = false;
  gameCameraState.isReversing = false;
  gameCameraState.reversalTimer = 0;
  gameCameraState.reverseSnapFramesRemaining = 0;
}

function finishPacmanCaptureResolve() {
  livesRemaining = Math.max(0, livesRemaining - 1);
  isGameOver = livesRemaining === 0;
  updateLivesUi();

  if (!isGameOver) {
    resetGameCharactersToSpawn(true);
  }
}

function completeLevel() {
  isLevelComplete = true;
  captureResolveTimer = 0;
  updateLivesUi();
}

function restartGameRun() {
  livesRemaining = STARTING_LIVES;
  isGameOver = false;
  isLevelComplete = false;
  score = 0;
  captureResolveTimer = 0;
  forEachGhost((entry) => {
    entry.respawnTimer = 0;
  });
  clearPowerPelletState();
  pelletManager.reset();
  document.querySelector('#pellet-counter').textContent = pelletManager.getEatenCount();
  updateLivesUi();
  updateScoreUi();
  resetGameCharactersToSpawn(true);
}

function rebuildGameRun() {
  const wasGhostAiEnabled = isGhostAiEnabled();

  captureResolveTimer = 0;
  isGameOver = false;
  isLevelComplete = false;
  score = 0;
  livesRemaining = STARTING_LIVES;
  clearPowerPelletState();
  buildGameMaze();
  forEachGhost((entry) => {
    entry.ai.setEnabled(wasGhostAiEnabled);
    if (wasGhostAiEnabled) {
      prepareGhostHouseRelease(entry);
    }
  });
  document.querySelector('#pellet-counter').textContent = pelletManager.getEatenCount();
  updateGhostAiButton();
  updateGhostCountButton();
  updateLivesUi();
  updateScoreUi();

  if (activeController) {
    gameCameraState.forward.copy(activeController.getFollowDirection()).normalize();
    gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
    gameCameraState.target.copy(activeController.getCameraTarget());
    gameCameraState.isReversing = false;
    gameCameraState.reversalTimer = 0;
    gameCameraState.reverseSnapFramesRemaining = 0;
    updateGameCamera(1, true);
  }
}

// buildGameMaze(); // We wait for "Start Game" to build it now

// --- Hero Wing (Characters) ---
// Pushed further back for monumental separation (Row 5 equivalent)
const HERO_X = 0; 
const HERO_Z = 96; 

// Floating Podium for Pac-man
const heroPodium = createPedestal();
heroPodium.position.set(HERO_X, 3.5, HERO_Z); 
showcase.add(heroPodium);

const pacman = createPacman();
pacman.position.set(HERO_X, 7.5, HERO_Z);
pacman.rotation.y = Math.PI / 1.4 + Math.PI / 2 + Math.PI / 12; // Extra 15 deg left
showcase.add(pacman);

const deathPacmanPodium = createPedestal();
deathPacmanPodium.position.set(HERO_X - 24, 3.5, HERO_Z);
showcase.add(deathPacmanPodium);

const deathPacman = createPacman();
deathPacman.position.set(HERO_X - 24, 7.5, HERO_Z);
deathPacman.rotation.y = pacman.rotation.y;
showcase.add(deathPacman);

let lastDeathDemoTime = -Infinity;
const DEATH_DEMO_INTERVAL = 5;
const DEATH_DEMO_DURATION = 1.45;
let wasDeathDemoAnimating = false;
let deathDemoResetTimer = 0;

// Pellet Wing (Row 2 of the 2x2 Character Grid)
const PELLET_X = HERO_X; // Back to column 1
const PELLET_Z = HERO_Z + 24; // Next grid row
const pelletPodium = createPedestal();
pelletPodium.position.set(PELLET_X, 3.5, PELLET_Z);
showcase.add(pelletPodium);

const pellet = createPellet();
pellet.position.set(PELLET_X, 7.5, PELLET_Z);
showcase.add(pellet);

// Standard Pellet (Column 1.5, Front Row)
const STD_PELLET_X = 12; // Centered between Power Pellet and Inky
const STD_PELLET_Z = 144; // Front row, same as Scared Ghost
const stdPelletPodium = createPedestal();
stdPelletPodium.position.set(STD_PELLET_X, 3.5, STD_PELLET_Z);
showcase.add(stdPelletPodium);

const stdPellet = createStandardPellet();
stdPellet.position.set(STD_PELLET_X, 5.5, STD_PELLET_Z); // Slightly lower hover than characters
showcase.add(stdPellet);

// --- Ghost Wing (2x2 Grid of the Classic Ghosts) ---
const GHOST_X = HERO_X + 24; // Column 2
const GHOST_X2 = GHOST_X + 24; // Column 3

// Blinky (Red)
const blinkyPodium = createPedestal();
blinkyPodium.position.set(GHOST_X, 3.5, HERO_Z); 
showcase.add(blinkyPodium);
const blinky = createGhost(0xff0044); // Neon Red
blinky.position.set(GHOST_X, 4.8, HERO_Z);
blinky.rotation.y = -Math.PI / 4; 
showcase.add(blinky);

// Pinky (Pink)
const pinkyPodium = createPedestal();
pinkyPodium.position.set(GHOST_X2, 3.5, HERO_Z); 
showcase.add(pinkyPodium);
const pinky = createGhost(0xff44bb); // Neon Pink
pinky.position.set(GHOST_X2, 4.8, HERO_Z);
pinky.rotation.y = -Math.PI / 4; 
showcase.add(pinky);

// Inky (Cyan)
const inkyPodium = createPedestal();
inkyPodium.position.set(GHOST_X, 3.5, PELLET_Z); 
showcase.add(inkyPodium);
const inky = createGhost(0x00ccff); // Neon Cyan
inky.position.set(GHOST_X, 4.8, PELLET_Z);
inky.rotation.y = -Math.PI / 4; 
showcase.add(inky);

// Clyde (Orange)
const clydePodium = createPedestal();
clydePodium.position.set(GHOST_X2, 3.5, PELLET_Z); 
showcase.add(clydePodium);
const clyde = createGhost(0xffaa00); // Neon Orange
clyde.position.set(GHOST_X2, 4.8, PELLET_Z);
clyde.rotation.y = -Math.PI / 4; 
showcase.add(clyde);

// --- Scared Ghost (Vulnerable State Demonstration) ---
const SCARED_X = GHOST_X + 12; // Centered behind the grid
const SCARED_Z = PELLET_Z + 24; // Row 3

const scaredPodium = createPedestal();
scaredPodium.position.set(SCARED_X, 3.5, SCARED_Z); 
showcase.add(scaredPodium);

const scaredGhost = createGhost(0xffffff); // Base color is overridden
scaredGhost.position.set(SCARED_X, 4.8, SCARED_Z);
scaredGhost.rotation.y = -Math.PI / 4; 
scaredGhost.setVulnerable('flashing'); // Activate the terrifying flashing state!
showcase.add(scaredGhost);

// Initialize starting view
controls.target.set(...GALLERY_VIEW.target);
camera.position.set(...GALLERY_VIEW.pos);

// --- View Capture Tool (Helper) ---
window.getCameraConfig = () => {
  const pos = camera.position;
  const tar = controls.target;
  console.log('%c --- View Captured ---', 'color: #2462ff; font-weight: bold;');
  console.log(`Position: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}]`);
  console.log(`Target: [${tar.x.toFixed(2)}, ${tar.y.toFixed(2)}, ${tar.z.toFixed(2)}]`);
  console.log('----------------------');
};

// --- Editor State ---
let isEditorMode = false;
let isBirdseye = false;
let isShiftMode = false;
let savedView = null;
let currentPieceType = 'straight';
let currentRotation = 0;
let ghostPiece = null;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const gridHelper = new THREE.GridHelper(TILE_SIZE * 20, 20, 0x2462ff, 0x152545);
gridHelper.position.y = 0.06;
gridHelper.visible = false;
scene.add(gridHelper);

// --- Mode Management ---
function toggleMode() {
  if (isGameMode) {
    exitGameMode();
  }

  isEditorMode = !isEditorMode;
  
  const statusTab = document.querySelector('#mode-status');
  const toggleBtn = document.querySelector('#btn-toggle-mode');
  const gameBtn = document.querySelector('#btn-toggle-game');
  const editorUi = document.querySelector('#editor-ui');
  const editorControls = document.querySelector('#editor-only-controls');

  isEditorMode ? appContainer.classList.add('editor-active') : appContainer.classList.remove('editor-active');
  
  statusTab.textContent = isEditorMode ? 'Editor' : 'Showcase';
  toggleBtn.textContent = isEditorMode ? 'Close Editor' : 'Open Editor';
  editorUi.classList.toggle('active', isEditorMode);
  editorControls.style.display = isEditorMode ? 'flex' : 'none';
  gameBtn.style.display = isEditorMode ? 'none' : 'block';
  
  gridHelper.visible = isEditorMode;
  showcase.visible = !isEditorMode;
  editorMaze.visible = isEditorMode;

  // Studio Lighting Boost
  scene.fog.density = isEditorMode ? 0 : 0.009;
  ambient.intensity = isEditorMode ? 2.8 : 1.4;

  if (isEditorMode) {
    updateGhostPiece();
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 5;
    
    // Switch to Editor Camera
    camera.position.set(...EDITOR_VIEW.pos);
    controls.target.set(...EDITOR_VIEW.target);
  } else {
    removeGhostPiece();
    if (isBirdseye) toggleCamera(); 
    controls.maxPolarAngle = Math.PI / 2.12;
    controls.minDistance = 18;

    // Return to Gallery Camera
    camera.position.set(...GALLERY_VIEW.pos);
    controls.target.set(...GALLERY_VIEW.target);
  }
}

function enterGameMode() {
  if (isEditorMode) {
    toggleMode();
  }

  isGameMode = true;
  isGameLookBackActive = false;
  previousGameLookBackState = false;
  isJumpscareMode = false;
  forEachGhost((entry) => entry.ai.setEnabled(false));
  areCaptureCollisionsEnabled = true;
  captureResolveTimer = 0;
  powerPelletTimer = 0;
  activePowerPelletDuration = 0;
  forEachGhost((entry) => {
    entry.respawnTimer = 0;
  });
  livesRemaining = STARTING_LIVES;
  isGameOver = false;
  isLevelComplete = false;
  score = 0;
  appContainer.classList.add('game-active');

  const statusTab = document.querySelector('#mode-status');
  const gameBtn = document.querySelector('#btn-toggle-game');
  const editorBtn = document.querySelector('#btn-toggle-mode');
  const gameControls = document.querySelector('#game-only-controls');

  statusTab.textContent = 'Game';
  gameBtn.textContent = 'End Game';
  editorBtn.style.display = 'none';
  gameControls.style.display = 'flex';
  updateJumpscareButton();
  updateCollisionsButton();
  updateGhostAiButton();
  updateGhostCountButton();
  updateLivesUi();
  updateScoreUi();

  showcase.visible = false;
  editorMaze.visible = false;
  gameMaze.visible = true;
  gridHelper.visible = false;
  removeGhostPiece();

  scene.fog.density = 0.004;
  ambient.intensity = 2.2;
  camera.fov = GAME_CAMERA_FOV;
  camera.updateProjectionMatrix();

  controls.enabled = false;
  controls.enableRotate = false;

  buildGameMaze();

  gameCameraState.forward.copy(activeController.getFollowDirection());
  gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
  gameCameraState.target.copy(activeController.getCameraTarget());
  gameCameraState.position.copy(camera.position);
  gameCameraState.isReversing = false;
  gameCameraState.reversalTimer = 0;
  gameCameraState.reverseSnapFramesRemaining = 0;
  updateGameCamera(1, true);
}

function exitGameMode() {
  isGameMode = false;
  isGameLookBackActive = false;
  previousGameLookBackState = false;
  isJumpscareMode = false;
  forEachGhost((entry) => entry.ai.setEnabled(false));
  captureResolveTimer = 0;
  forEachGhost((entry) => {
    entry.respawnTimer = 0;
  });
  clearPowerPelletState();
  isGameOver = false;
  isLevelComplete = false;
  appContainer.classList.remove('game-active');

  const statusTab = document.querySelector('#mode-status');
  const gameBtn = document.querySelector('#btn-toggle-game');
  const editorBtn = document.querySelector('#btn-toggle-mode');
  const gameControls = document.querySelector('#game-only-controls');

  statusTab.textContent = 'Showcase';
  gameBtn.textContent = 'Start Game';
  editorBtn.style.display = '';
  gameControls.style.display = 'none';

  showcase.visible = true;
  editorMaze.visible = false;
  gameMaze.visible = false;

  scene.fog.density = 0.009;
  ambient.intensity = 1.4;
  camera.fov = DEFAULT_CAMERA_FOV;
  camera.updateProjectionMatrix();

  controls.enabled = true;
  controls.enableRotate = true;
  controls.maxPolarAngle = Math.PI / 2.12;
  controls.minDistance = 18;
  camera.position.set(...GALLERY_VIEW.pos);
  controls.target.set(...GALLERY_VIEW.target);
}

function toggleGameMode() {
  if (isGameMode) {
    exitGameMode();
  } else {
    enterGameMode();
  }
}

function getGameInputIntent(key) {
  if (key === 'arrowup' || key === 'w') return 'forward';
  if (key === 'arrowright' || key === 'd') return 'right';
  if (key === 'arrowdown' || key === 's') return 'reverse';
  if (key === 'arrowleft' || key === 'a') return 'left';

  return null;
}

function beginGameCameraReverseDelay() {
  if (isGameLookBackActive || gameCameraState.isReversing) return;

  gameCameraState.isReversing = true;
  gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
  gameCameraState.reversalTimer = 0.35;
}

function updateGameCamera(deltaTime, snap = false) {
  if (!activeController) return;

  const target = activeController.getCameraTarget();

  const desiredForward = activeController.getFollowDirection()
    .multiplyScalar(isGameLookBackActive ? -1 : 1);
  const lookBackChanged = isGameLookBackActive !== previousGameLookBackState;
  
  let isCameraInReverseState = false;
  let forceSnapThisFrame = snap || lookBackChanged;

  if (forceSnapThisFrame) {
    gameCameraState.isReversing = false;
    gameCameraState.reversalTimer = 0;
    gameCameraState.forward.copy(desiredForward).normalize();
  } else {
    // Determine dot product against actual desired forward
    const dot = THREE.MathUtils.clamp(gameCameraState.forward.dot(desiredForward), -1, 1);

    if (gameCameraState.isReversing && dot > 0.45) {
      // User reversed twice quickly, abort the reversal delay
      gameCameraState.isReversing = false;
      gameCameraState.reversalTimer = 0;
      // When aborting, we must ensure we snap back to standard tracking immediately
      // rather than carrying any corrupted delayed state forward.
      forceSnapThisFrame = true;
      gameCameraState.forward.copy(desiredForward).normalize();
    }

    if (gameCameraState.isReversing) {
      gameCameraState.reversalTimer -= deltaTime;
      // Abort the delay instantly if the timer expires OR if Pacman hits a wall and stops
      if (gameCameraState.reversalTimer <= 0 || !activeController.isMoving) {
        // Time's up or we hit a wall: snap to correct behind view
        gameCameraState.isReversing = false;
        gameCameraState.forward.copy(desiredForward).normalize();
        forceSnapThisFrame = true; // Snap position/target
      } else {
        // Keep old forward direction
        isCameraInReverseState = true;
      }
    } else {
      const maxTurn = GAME_CAMERA_TURN_SPEED * deltaTime;
      const rotatedForward = rotateFlatVectorToward(gameCameraState.forward, desiredForward, maxTurn);
      const directionBlend = 1 - Math.exp(-GAME_CAMERA_DIRECTION_DAMPING * deltaTime);
      gameCameraState.forward.copy(rotatedForward.lerp(desiredForward, directionBlend * 0.2).normalize());
    }
  }

  previousGameLookBackState = isGameLookBackActive;

  // If we are looking back OR we are in the middle of a reversal delay, we want the camera IN FRONT of Pacman
  const effectivelyLookingBack = isGameLookBackActive || isCameraInReverseState;

  const desiredPosition = isCameraInReverseState
    ? target.clone()
      .addScaledVector(gameCameraState.reverseHoldForward, -GAME_CAMERA_DISTANCE)
      .add(new THREE.Vector3(0, GAME_CAMERA_HEIGHT, 0))
    : effectivelyLookingBack
      ? getGameCameraRailPoint(GAME_CAMERA_DISTANCE, gameCameraState.forward, true)
        .add(new THREE.Vector3(0, GAME_CAMERA_HEIGHT, 0))
      : getGameCameraRailPoint(GAME_CAMERA_DISTANCE, gameCameraState.forward, false)
        .add(new THREE.Vector3(0, GAME_CAMERA_HEIGHT, 0));

  const anchoredTarget = target.clone().add(new THREE.Vector3(0, GAME_CAMERA_TARGET_HEIGHT, 0));
  const centeredForward = anchoredTarget.clone().sub(desiredPosition).setY(0);
  if (centeredForward.lengthSq() > 0.0001) {
    centeredForward.normalize();
  } else {
    centeredForward.copy(gameCameraState.forward);
  }

  const desiredTarget = effectivelyLookingBack
    ? target.clone().add(new THREE.Vector3(0, GAME_CAMERA_TARGET_HEIGHT, 0))
    : anchoredTarget.clone().addScaledVector(centeredForward, GAME_CAMERA_CENTERED_LOOK_AHEAD);

  if (forceSnapThisFrame) {
    gameCameraState.position.copy(desiredPosition);
    gameCameraState.target.copy(desiredTarget);
  } else {
    if (isCameraInReverseState) {
      gameCameraState.position.copy(desiredPosition);
      gameCameraState.target.copy(desiredTarget);
    } else if (effectivelyLookingBack) {
      const positionBlend = 1 - Math.exp(-GAME_CAMERA_POSITION_DAMPING * deltaTime);
      const targetBlend = 1 - Math.exp(-GAME_CAMERA_TARGET_DAMPING * deltaTime);
      gameCameraState.position.lerp(desiredPosition, positionBlend);
      gameCameraState.target.lerp(desiredTarget, targetBlend);
    } else {
      // Rigid tracking prevents the camera from "settling" or pitching upward when velocity stops
      gameCameraState.position.copy(desiredPosition);
      gameCameraState.target.copy(desiredTarget);
    }
  }

  camera.position.copy(gameCameraState.position);
  controls.target.copy(gameCameraState.target);
  camera.lookAt(controls.target);

  if (gameCameraState.reverseSnapFramesRemaining > 0) {
    gameCameraState.reverseSnapFramesRemaining -= 1;
  }
}

function toggleCamera(type) {
  isBirdseye = (type === '2d');
  const slider = document.querySelector('#view-slider');
  const options = document.querySelectorAll('.toggle-option');
  
  options.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.view === type);
  });
  
  if (isBirdseye) {
    slider.classList.add('right');
    camera.position.set(0, 160, 0);
    controls.target.set(0, 0, 0);
    controls.enableRotate = false;
  } else {
    slider.classList.remove('right');
    camera.position.set(...EDITOR_VIEW.pos);
    controls.target.set(...EDITOR_VIEW.target);
    controls.enableRotate = true;
  }
}

// --- Collapse Logic ---
const deck = document.querySelector('#command-deck');
const zoomSlider = document.querySelector('#zoom-slider');

document.querySelector('#deck-header').addEventListener('click', () => {
  deck.classList.toggle('collapsed');
});

zoomSlider.addEventListener('input', (e) => {
  const dist = parseFloat(e.target.value);
  const direction = camera.position.clone().sub(controls.target).normalize();
  camera.position.copy(controls.target).add(direction.multiplyScalar(dist));
});

document.querySelector('#btn-toggle-mode').addEventListener('click', toggleMode);
document.querySelector('#btn-toggle-game').addEventListener('click', toggleGameMode);
document.querySelector('#btn-reset-pellets').addEventListener('click', () => {
  if (pelletManager) {
    pelletManager.reset();
    isLevelComplete = false;
    updateLivesUi();
    document.querySelector('#pellet-counter').textContent = pelletManager.getEatenCount();
  }
});

document.querySelector('#btn-reset-run').addEventListener('click', () => {
  if (!isGameMode) return;
  restartGameRun();
});

document.querySelector('#btn-cycle-ghost-count').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode) return;

  activeGhostCount = activeGhostCount >= GHOST_DEFINITIONS.length
    ? 1
    : activeGhostCount + 1;
  rebuildGameRun();
});

document.querySelector('#btn-swap-puppet').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode) return;
  cycleActivePuppet();
  
  gameCameraState.forward.copy(activeController.getFollowDirection());
  gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
  gameCameraState.target.copy(activeController.getCameraTarget());
  gameCameraState.isReversing = false;
  gameCameraState.reversalTimer = 0;
  gameCameraState.reverseSnapFramesRemaining = 0;
  updateGameCamera(0.016, true);
});

document.querySelector('#btn-toggle-jumpscare').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode) return;

  isJumpscareMode = !isJumpscareMode;
  updateJumpscareButton();
});

document.querySelector('#btn-toggle-collisions').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode) return;

  areCaptureCollisionsEnabled = !areCaptureCollisionsEnabled;
  updateCollisionsButton();
});

document.querySelector('#btn-toggle-ghost-ai').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode) return;

  const nextEnabled = !isGhostAiEnabled();
  forEachGhost((entry) => {
    entry.ai.setEnabled(nextEnabled);
  });
  if (nextEnabled) {
    forEachGhost((entry) => prepareGhostHouseRelease(entry));
  }
  updateGhostAiButton();
});

document.querySelectorAll('.toggle-option').forEach(opt => {
  opt.addEventListener('click', () => toggleCamera(opt.dataset.view));
});

// --- Piece Selection ---
function selectPiece(type) {
  const cards = document.querySelectorAll('.piece-card, .item-card');
  const activeCard = document.querySelector('.piece-card.active, .item-card.active');
  if (activeCard) activeCard.classList.remove('active');
  
  if (type === null) {
    currentPieceType = null;
    removeGhostPiece();
    return;
  }

  const targetCard = Array.from(cards).find(c => c.dataset.type === type);
  if (targetCard) targetCard.classList.add('active');
  
  currentPieceType = type;
  updateGhostPiece();
}

document.querySelectorAll('.piece-card, .item-card').forEach(card => {
  card.addEventListener('click', () => {
    selectPiece(card.dataset.type);
  });
});

// --- Validation Helpers ---
function getAbsoluteDirections(relDirs, rotation) {
  return relDirs.map(dir => {
    let vec;
    if (dir === 'north') vec = {x: 0, z: -1};
    else if (dir === 'south') vec = {x: 0, z: 1};
    else if (dir === 'east') vec = {x: 1, z: 0};
    else if (dir === 'west') vec = {x: -1, z: 0};
    
    const x = vec.x * Math.cos(rotation) + vec.z * Math.sin(rotation);
    const z = -vec.x * Math.sin(rotation) + vec.z * Math.cos(rotation);
    
    return {x: Math.round(x), z: Math.round(z)};
  });
}

function isPlacementLegal(type, position, rotation) {
  if (!position) return true;
  
  const existing = editorMaze.children.find(c => c.position.x === position.x && c.position.z === position.z);
  if (existing) return false;
  
  const chambers = editorMaze.children.filter(c => c.userData.type === 'ghostchamber');
  
  // Rule: Max 1 Ghost Chamber
  if (type === 'ghostchamber' && chambers.length > 0) return false;
  
  if (type === 'ghostchamber') {
    for (const piece of editorMaze.children) {
      if (!isCompatibleWithChamber({position, rotation, type}, piece)) return false;
    }
  } else {
    for (const chamber of chambers) {
      if (!isCompatibleWithChamber(chamber, {position, rotation, type})) return false;
    }
  }
  
  // Portal Piece rules
  const teleports = editorMaze.children.filter(c => c.userData.type === 'teleport');
  
  // Check if new piece is compatible with existing teleports
  for (const teleport of teleports) {
    if (!isCompatibleWithTeleport(teleport, {position, rotation, type})) return false;
  }
  
  // If the new piece is a teleport, check if it's compatible with all existing pieces
  if (type === 'teleport') {
    for (const piece of editorMaze.children) {
      if (!isCompatibleWithTeleport({position, rotation, type}, piece)) return false;
    }
  }
  
  return true;
}

function isCompatibleWithChamber(chamber, piece) {
  const dist = Math.sqrt(Math.pow(chamber.position.x - piece.position.x, 2) + Math.pow(chamber.position.z - piece.position.z, 2));
  if (Math.abs(dist - TILE_SIZE) > 1) return true;
  
  const dx = Math.round((piece.position.x - chamber.position.x) / TILE_SIZE);
  const dz = Math.round((piece.position.z - chamber.position.z) / TILE_SIZE);
  
  const chamberOpening = getAbsoluteDirections(['north'], chamber.userData ? chamber.userData.rotation : chamber.rotation)[0];
  
  if (dx === chamberOpening.x && dz === chamberOpening.z) return true;
  
  const pieceType = piece.userData ? piece.userData.type : piece.type;
  const pieceRotation = piece.userData ? piece.userData.rotation : piece.rotation;
  
  const pieceConnectors = getAbsoluteDirections(PIECE_CONNECTORS[pieceType], pieceRotation);
  
  for (const conn of pieceConnectors) {
    if (conn.x === -dx && conn.z === -dz) {
      return false;
    }
  }
  
  return true;
}

function isCompatibleWithTeleport(teleport, piece) {
  const dist = Math.sqrt(Math.pow(teleport.position.x - piece.position.x, 2) + Math.pow(teleport.position.z - piece.position.z, 2));
  if (Math.abs(dist - TILE_SIZE) > 1) return true;
  
  const dx = Math.round((piece.position.x - teleport.position.x) / TILE_SIZE);
  const dz = Math.round((piece.position.z - teleport.position.z) / TILE_SIZE);
  
  const portalDir = getAbsoluteDirections(['west'], teleport.userData ? teleport.userData.rotation : teleport.rotation)[0];
  
  if (dx === portalDir.x && dz === portalDir.z) {
    const pieceType = piece.userData ? piece.userData.type : piece.type;
    const pieceRotation = piece.userData ? piece.userData.rotation : piece.rotation;
    const pieceConnectors = getAbsoluteDirections(PIECE_CONNECTORS[pieceType], pieceRotation);
    
    for (const conn of pieceConnectors) {
      if (conn.x === -dx && conn.z === -dz) {
        return false;
      }
    }
  }
  
  return true;
}

// --- Ghost Piece ---
function updateGhostPiece() {
  removeGhostPiece();
  if (currentPieceType === null) return;
  
  if (currentPieceType === 'powerpellet' || currentPieceType === 'pacmanspawn') {
    if (currentPieceType === 'powerpellet') {
      ghostPiece = createPellet();
      ghostPiece.scale.set(0.4, 0.4, 0.4); // Scale it down for the editor preview
    } else {
      ghostPiece = createPacman();
      ghostPiece.scale.setScalar(0.32);
    }
    
    ghostPiece.traverse(obj => {
      if (obj.isLight) {
        obj.intensity = 0; // Disable light so ghost doesn't light up the scene
      }
      if (obj.material) {
        obj.material = obj.material.clone();
        
        if (currentPieceType === 'powerpellet') {
          obj.material.transparent = true;
          obj.material.opacity = 0.8;
          obj.material.depthTest = false;
          obj.renderOrder = 999;
        } else {
          // For Pacman, we must keep it opaque. The glass tubes use MeshPhysicalMaterial 
          // with transmission, which only refracts opaque objects rendered before it.
          // If we make Pacman transparent, he won't show up through the glass!
          
          // Instead, we make it a wireframe! This makes it look like a distinct 
          // "holographic blueprint" while hovering, without breaking the glass refraction.
          obj.material.wireframe = true;
        }
        
        if (obj.material.color) obj.userData.originalColor = obj.material.color.clone();
        if (obj.material.emissive) obj.userData.originalEmissive = obj.material.emissive.clone();
        if (obj.material.emissiveIntensity !== undefined) obj.userData.originalEmissiveIntensity = obj.material.emissiveIntensity;
      }
    });
  } else {
    ghostPiece = createMazePiece(currentPieceType);
    ghostPiece.rotation.y = currentRotation;
    ghostPiece.traverse(obj => {
      if (obj.material) {
        obj.material = obj.material.clone();
        obj.material.transparent = true;
        obj.material.opacity = 0.4;
        if (obj.material.color) obj.userData.originalColor = obj.material.color.clone();
        if (obj.material.emissive) obj.userData.originalEmissive = obj.material.emissive.clone();
      }
    });
  }
  scene.add(ghostPiece);
}

function removeGhostPiece() {
  if (ghostPiece) {
    scene.remove(ghostPiece);
    ghostPiece = null;
  }
}

// --- Interaction Events ---
// Remove focus from UI elements after clicking so keyboard controls work properly
window.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (btn) btn.blur();
  
  if (e.target.tagName === 'INPUT') {
    // For range sliders, we might want to keep focus while dragging, 
    // but blur on mouseup/click to restore game controls
    e.target.blur();
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isEditorMode) return;
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('keydown', (e) => {
  // Block all hotkeys if a modal is open
  if (document.querySelector('#export-modal').classList.contains('active') || 
      document.querySelector('#import-modal').classList.contains('active')) return;

  const key = e.key.toLowerCase();

  // --- Capture Tool ---
  if (key === 'c') {
    window.getCameraConfig();
  }

  if (isGameMode) {
    if (isGameOver || isLevelComplete) {
      if (key === 'escape') {
        exitGameMode();
      }
      return;
    }

    if (isCaptureResolving()) {
      if (key === 'escape') {
        exitGameMode();
      }
      return;
    }

    if (key === ' ') {
      e.preventDefault();
      isGameLookBackActive = true;
      return;
    }

    const gameIntent = getGameInputIntent(key);

    if (gameIntent) {
      e.preventDefault();
      const activeGhostEntry = resolveGhostEntry(activeController);
      if (activeGhostEntry?.ai.enabled) return;
      if (gameIntent === 'reverse' && e.repeat) return;

      const inputResult = activeController.setDesiredIntent(gameIntent);
      if (inputResult?.started && inputResult.reverseIntent) {
        beginGameCameraReverseDelay();
      }
    }

    if (key === 'tab') {
      e.preventDefault();
      document.querySelector('#btn-swap-puppet')?.click();
      return;
    }

    if (key === 'escape') {
      exitGameMode();
    }

    return;
  }

  if (!isEditorMode) return;

  if (key === 'tab') {
    e.preventDefault();
    toggleCamera(isBirdseye ? '3d' : '2d');
  }

  // --- Shift Mode ---
  if (isShiftMode) {
    const shiftSpeed = TILE_SIZE;
    if (key === 'arrowup' || key === 'w') {
      editorMaze.position.z -= shiftSpeed;
    }
    if (key === 'arrowdown' || key === 's') {
      editorMaze.position.z += shiftSpeed;
    }
    if (key === 'arrowleft' || key === 'a') {
      editorMaze.position.x -= shiftSpeed;
    }
    if (key === 'arrowright' || key === 'd') {
      editorMaze.position.x += shiftSpeed;
    }
    if (key === 'enter') {
      const offset = editorMaze.position.clone();
      editorMaze.children.forEach(c => {
        c.position.add(offset);
      });
      editorMaze.position.set(0, 0, 0);
      exitShiftMode();
    }
    if (key === 'escape') {
      editorMaze.position.set(0, 0, 0);
      exitShiftMode();
    }
    return; // Block other inputs in shift mode
  }
  
  // --- Piece Selection Hotkeys ---
  const pieceKeys = {
    '1': 'straight',
    '2': 'corner',
    '3': 'tjunction',
    '4': 'crossroad',
    '5': 'teleport',
    '6': 'ghostchamber',
    'p': 'powerpellet',
    's': 'pacmanspawn'
  };
  if (pieceKeys[key]) {
    selectPiece(pieceKeys[key]);
  }
  
  // --- Free Mode ---
  if (key === 'v') {
    selectPiece(null);
  }

  if (key === ' ') {
    e.preventDefault();
    placePiece();
  }

  // --- Piece Controls ---
  if (key === 'r') {
    currentRotation += Math.PI / 2;
    if (ghostPiece) ghostPiece.rotation.y = currentRotation;
  }
  if (key === 'x') {
    deletePieceAtCursor();
  }

  // --- Keyboard Panning ---
  const panSpeed = isBirdseye ? 5.5 : 2.8;
  if (key === 'arrowup' || key === 'w') {
    controls.target.z -= panSpeed;
    camera.position.z -= panSpeed;
  }
  if (key === 'arrowdown' || key === 's') {
    controls.target.z += panSpeed;
    camera.position.z += panSpeed;
  }
  if (key === 'arrowleft' || key === 'a') {
    controls.target.x -= panSpeed;
    camera.position.x -= panSpeed;
  }
  if (key === 'arrowright' || key === 'd') {
    controls.target.x += panSpeed;
    camera.position.x += panSpeed;
  }
});

window.addEventListener('keyup', (e) => {
  if (!isGameMode) return;

  if (e.key === ' ') {
    isGameLookBackActive = false;
  }
});

window.addEventListener('mousedown', (e) => {
  if (!isEditorMode || isShiftMode || e.button !== 0) return;
  
  // Block placement if a modal is open
  if (document.querySelector('#export-modal').classList.contains('active') || 
      document.querySelector('#import-modal').classList.contains('active')) return;
  
  // Prevent placing pieces when clicking UI elements
  if (e.target.closest('.bottom-bar') || 
      e.target.closest('.left-bar') || 
      e.target.closest('.top-controls') || 
      e.target.closest('#command-deck') || 
      e.target.closest('#export-modal') ||
      e.target.closest('#import-modal')) {
    return;
  }
  
  placePiece();
});

function getGridIntersection() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(raycastPlane);
  if (intersects.length > 0) {
    const p = intersects[0].point;
    return {
      x: Math.round(p.x / TILE_SIZE) * TILE_SIZE,
      z: Math.round(p.z / TILE_SIZE) * TILE_SIZE
    };
  }
  return null;
}

function placePiece() {
  if (currentPieceType === null) return;
  const pos = getGridIntersection();
  if (!pos) return;

  const existing = editorMaze.children.find(c => c.position.x === pos.x && c.position.z === pos.z);

  if (currentPieceType === 'powerpellet' || currentPieceType === 'pacmanspawn') {
    const validTypes = ['straight', 'corner', 'tjunction', 'crossroad'];
    if (currentPieceType === 'pacmanspawn') validTypes.push('teleport');
    
    if (existing && validTypes.includes(existing.userData.type)) {
      if (currentPieceType === 'powerpellet') {
        if (!existing.userData.hasPowerPellet && existing.userData.hasPacmanSpawn) {
          existing.userData.hasPacmanSpawn = false;
          const oldSpawn = existing.getObjectByName('pacmanSpawnIndicator');
          if (oldSpawn) existing.remove(oldSpawn);
        }
        // Toggle it
        existing.userData.hasPowerPellet = !existing.userData.hasPowerPellet;
        
        // Update visual indicator
        let indicator = existing.getObjectByName('powerPelletIndicator');
        if (existing.userData.hasPowerPellet) {
          if (!indicator) {
            indicator = createPellet();
            indicator.name = 'powerPelletIndicator';
            
            let localX = 0;
            let localZ = 0;
            if (existing.userData.type === 'corner') {
              const cornerOffset = 3.57 * (1 - Math.SQRT1_2);
              localX = cornerOffset;
              localZ = -cornerOffset;
            }
            
            indicator.position.set(localX, 2.5, localZ); // Hover centered inside tube
            indicator.scale.set(0.4, 0.4, 0.4);
            
            // Make it visible through the glass in the editor
            indicator.traverse(obj => {
              if (obj.material) {
                obj.material = obj.material.clone();
                obj.material.depthTest = false;
                obj.renderOrder = 998;
              }
            });
            
            existing.add(indicator);
          }
        } else if (indicator) {
          existing.remove(indicator);
        }
      } else {
        // Pacman Spawn
        if (!existing.userData.hasPacmanSpawn && existing.userData.hasPowerPellet) {
          existing.userData.hasPowerPellet = false;
          const oldPellet = existing.getObjectByName('powerPelletIndicator');
          if (oldPellet) existing.remove(oldPellet);
        }

        if (existing.userData.hasPacmanSpawn) {
          const normalizeAngle = (a) => ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
          const currentRotNorm = normalizeAngle(currentRotation);
          const existingRotNorm = normalizeAngle(existing.userData.pacmanSpawnRotation);

          if (Math.abs(currentRotNorm - existingRotNorm) < 0.01) {
            // Toggle off if clicking with the exact same rotation
            existing.userData.hasPacmanSpawn = false;
            const oldIndicator = existing.getObjectByName('pacmanSpawnIndicator');
            if (oldIndicator) existing.remove(oldIndicator);
          } else {
            // Update rotation if clicking with a different rotation
            existing.userData.pacmanSpawnRotation = currentRotation;
            const indicator = existing.getObjectByName('pacmanSpawnIndicator');
            if (indicator) {
              indicator.rotation.y = currentRotation - existing.rotation.y;
            }
          }
        } else {
          // Remove existing spawn from anywhere else
          editorMaze.children.forEach(c => {
            if (c.userData.hasPacmanSpawn) {
              c.userData.hasPacmanSpawn = false;
              const oldIndicator = c.getObjectByName('pacmanSpawnIndicator');
              if (oldIndicator) c.remove(oldIndicator);
            }
          });

          existing.userData.hasPacmanSpawn = true;
          existing.userData.pacmanSpawnRotation = currentRotation;
          
          const indicator = createPacman();
          indicator.name = 'pacmanSpawnIndicator';
          
          let localX = 0;
          let localZ = 0;
          if (existing.userData.type === 'corner') {
            const cornerOffset = 3.57 * (1 - Math.SQRT1_2);
            localX = cornerOffset;
            localZ = -cornerOffset;
          }
          
          indicator.position.set(localX, 2.5, localZ);
          indicator.scale.setScalar(0.32);
          indicator.rotation.y = currentRotation - existing.rotation.y;
          
          existing.add(indicator);
        }
      }
    }
    return;
  }

  // Prevent overlap for normal pieces
  if (existing) return;

  // Check legality
  if (!isPlacementLegal(currentPieceType, pos, currentRotation)) return;

  const piece = createMazePiece(currentPieceType);
  piece.position.set(pos.x, 0, pos.z);
  piece.rotation.y = currentRotation;
  piece.userData = { type: currentPieceType, rotation: currentRotation };
  editorMaze.add(piece);
}

function deletePieceAtCursor() {
  const pos = getGridIntersection();
  if (!pos) return;
  const existing = editorMaze.children.find(c => c.position.x === pos.x && c.position.z === pos.z);
  if (existing) editorMaze.remove(existing);
}

// --- Export ---
document.querySelector('#btn-export').addEventListener('click', (e) => {
  e.target.blur();
  document.querySelector('#export-modal').classList.add('active');
});

// --- Modal Buttons ---
document.querySelector('#btn-modal-close').addEventListener('click', () => {
  document.querySelector('#export-modal').classList.remove('active');
});

// Close on backdrop click
document.querySelector('#export-modal').addEventListener('click', (e) => {
  if (e.target === document.querySelector('#export-modal')) {
    document.querySelector('#export-modal').classList.remove('active');
  }
});

document.querySelector('#btn-modal-copy').addEventListener('click', () => {
  const data = editorMaze.children.map(c => ({
    type: c.userData.type,
    position: [c.position.x, c.position.y, c.position.z],
    rotation: c.userData.rotation,
    hasPowerPellet: c.userData.hasPowerPellet || false,
    hasPacmanSpawn: c.userData.hasPacmanSpawn || false,
    pacmanSpawnRotation: c.userData.pacmanSpawnRotation || 0
  }));
  const json = JSON.stringify(data, null, 2);
  
  navigator.clipboard.writeText(json).then(() => {
    const btn = document.querySelector('#btn-modal-copy');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  }).catch(err => {
    alert("Failed to copy to clipboard. Check console.");
    console.error('Could not copy text: ', err);
  });
});

document.querySelector('#btn-modal-download').addEventListener('click', () => {
  const data = editorMaze.children.map(c => ({
    type: c.userData.type,
    position: [c.position.x, c.position.y, c.position.z],
    rotation: c.userData.rotation,
    hasPowerPellet: c.userData.hasPowerPellet || false,
    hasPacmanSpawn: c.userData.hasPacmanSpawn || false,
    pacmanSpawnRotation: c.userData.pacmanSpawnRotation || 0
  }));
  const json = JSON.stringify(data, null, 2);
  
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'maze.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// --- Import ---
document.querySelector('#btn-import').addEventListener('click', (e) => {
  e.target.blur();
  document.querySelector('#import-textarea').value = '';
  document.querySelector('#import-file').value = '';
  document.querySelector('#import-file-zone').classList.remove('has-file');
  document.querySelector('#import-file-name').textContent = 'Import From File';
  document.querySelector('#import-modal').classList.add('active');
});

document.querySelector('#btn-modal-import-close').addEventListener('click', () => {
  document.querySelector('#import-modal').classList.remove('active');
});

document.querySelector('#import-modal').addEventListener('click', (e) => {
  if (e.target === document.querySelector('#import-modal')) {
    document.querySelector('#import-modal').classList.remove('active');
  }
});

// Handle file selection to auto-fill textarea
document.querySelector('#import-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const zone = document.querySelector('#import-file-zone');
  const nameSpan = document.querySelector('#import-file-name');
  
  if (!file) {
    zone.classList.remove('has-file');
    nameSpan.textContent = 'Import From File';
    return;
  }
  
  zone.classList.add('has-file');
  nameSpan.textContent = file.name;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    document.querySelector('#import-textarea').value = event.target.result;
  };
  reader.readAsText(file);
});

document.querySelector('#btn-modal-import').addEventListener('click', () => {
  const json = document.querySelector('#import-textarea').value.trim();
  if (!json) {
    alert("Please paste JSON or select a file first.");
    return;
  }
  
  try {
    const data = JSON.parse(json);
    
    // --- Validation Step ---
    if (!Array.isArray(data)) {
      throw new Error("Imported data must be an array of pieces.");
    }
    
    const validTypes = ['straight', 'corner', 'tjunction', 'crossroad', 'teleport', 'ghostchamber'];
    let pacmanSpawnCount = 0;
    let ghostChamberCount = 0;
    
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (!item.type || !validTypes.includes(item.type)) {
        throw new Error(`Invalid or missing piece type at index ${i}: ${item.type}`);
      }
      if (!Array.isArray(item.position) || item.position.length !== 3) {
        throw new Error(`Invalid position array at index ${i}. Must have 3 coordinates.`);
      }
      
      const expectedX = Math.round(item.position[0] / TILE_SIZE) * TILE_SIZE;
      const expectedZ = Math.round(item.position[2] / TILE_SIZE) * TILE_SIZE;
      if (Math.abs(item.position[0] - expectedX) > 0.1 || Math.abs(item.position[1]) > 0.1 || Math.abs(item.position[2] - expectedZ) > 0.1) {
        throw new Error(`Invalid position at index ${i}. Must be aligned to the grid (multiples of ${TILE_SIZE}) at Y=0.`);
      }

      if (typeof item.rotation !== 'number') {
        throw new Error(`Invalid rotation at index ${i}. Must be a number.`);
      }
      
      const checkOrthogonal = (rot) => {
        const normalized = ((rot % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const remainder = normalized % (Math.PI / 2);
        return remainder < 0.01 || Math.abs(remainder - (Math.PI / 2)) < 0.01;
      };

      if (!checkOrthogonal(item.rotation)) {
        throw new Error(`Invalid rotation at index ${i}. Must be a multiple of 90 degrees (PI/2).`);
      }

      if (item.hasPacmanSpawn) {
        pacmanSpawnCount++;
        if (pacmanSpawnCount > 1) {
          throw new Error("Multiple Pacman spawns detected. Only one is allowed.");
        }
        if (typeof item.pacmanSpawnRotation === 'number' && !checkOrthogonal(item.pacmanSpawnRotation)) {
          throw new Error(`Invalid Pacman spawn rotation at index ${i}. Must be a multiple of 90 degrees.`);
        }
        if (item.hasPowerPellet) {
          throw new Error(`Conflict at index ${i}: A tile cannot have both a Pacman spawn and a Power Pellet.`);
        }
      }

      if (item.type === 'ghostchamber') {
        ghostChamberCount++;
        if (ghostChamberCount > 1) {
          throw new Error("Multiple Ghost Chambers detected. Only one is allowed.");
        }
      }
    }
    
    // Clear current maze ONLY after validation passes
    while(editorMaze.children.length > 0) {
      editorMaze.remove(editorMaze.children[0]);
    }
    
    // Rebuild
    data.forEach(item => {
      const piece = createMazePiece(item.type);
      piece.position.set(item.position[0], item.position[1], item.position[2]);
      piece.rotation.y = item.rotation;
      piece.userData = { 
        type: item.type, 
        rotation: item.rotation,
        hasPowerPellet: item.hasPowerPellet || false,
        hasPacmanSpawn: item.hasPacmanSpawn || false,
        pacmanSpawnRotation: item.pacmanSpawnRotation || 0
      };
      
      if (piece.userData.hasPowerPellet) {
        const indicator = createPellet();
        indicator.name = 'powerPelletIndicator';
        
        let localX = 0;
        let localZ = 0;
        if (piece.userData.type === 'corner') {
          const cornerOffset = 3.57 * (1 - Math.SQRT1_2);
          localX = cornerOffset;
          localZ = -cornerOffset;
        }
        
        indicator.position.set(localX, 2.5, localZ);
        indicator.scale.set(0.4, 0.4, 0.4);
        
        // Make it visible through the glass in the editor
        indicator.traverse(obj => {
          if (obj.material) {
            obj.material = obj.material.clone();
            obj.material.depthTest = false;
            obj.renderOrder = 998;
          }
        });
        
        piece.add(indicator);
      }

      if (piece.userData.hasPacmanSpawn) {
        const indicator = createPacman();
        indicator.name = 'pacmanSpawnIndicator';
        
        let localX = 0;
        let localZ = 0;
        if (piece.userData.type === 'corner') {
          const cornerOffset = 3.57 * (1 - Math.SQRT1_2);
          localX = cornerOffset;
          localZ = -cornerOffset;
        }
        
        indicator.position.set(localX, 2.5, localZ);
        indicator.scale.setScalar(0.32);
        indicator.rotation.y = piece.userData.pacmanSpawnRotation - piece.rotation.y;
        
        piece.add(indicator);
      }
      
      editorMaze.add(piece);
    });
    
    document.querySelector('#import-modal').classList.remove('active');
    
    // Brief success feedback on the button
    const btn = document.querySelector('#btn-modal-import');
    const originalText = btn.textContent;
    btn.textContent = 'Success!';
    btn.style.background = '#00ff88';
    btn.style.color = '#000';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
    
  } catch (e) {
    alert(`Import failed: ${e.message}`);
    console.error('Import validation error:', e);
  }
});

// --- Shift Map ---
document.querySelector('#btn-shift-map').addEventListener('click', () => {
  if (!isEditorMode) return;
  
  isShiftMode = !isShiftMode;
  const btn = document.querySelector('#btn-shift-map');
  const applyBtn = document.querySelector('#btn-apply-shift');
  btn.blur(); // Remove focus to prevent Enter key from triggering click
  
  const bottomBar = document.querySelector('.bottom-bar');
  const hotkeyList = document.querySelector('#hotkey-list');
  const cameraToggle = document.querySelector('.segmented-toggle');
  const zoomSlider = document.querySelector('#zoom-slider').parentElement;
  const exportImportContainer = document.querySelector('#btn-export').parentElement;
  
  if (isShiftMode) {
    btn.textContent = 'Cancel';
    btn.style.background = 'rgba(255, 68, 68, 0.2)';
    btn.style.color = '#ff4444';
    btn.style.borderColor = 'rgba(255, 68, 68, 0.3)';
    
    if (applyBtn) applyBtn.style.display = 'block';
    if (bottomBar) bottomBar.style.display = 'none';
    if (cameraToggle) cameraToggle.style.display = 'none';
    if (zoomSlider) zoomSlider.style.display = 'none';
    if (exportImportContainer) exportImportContainer.style.display = 'none';
    
    if (hotkeyList) {
      hotkeyList.innerHTML = `
        <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">Arrows / WASD</span></div>
        <div class="hotkey-item"><span>Apply</span> <span class="hotkey-key" style="background: rgba(0, 255, 136, 0.2); color: #00ff88;">Enter</span></div>
        <div class="hotkey-item"><span>Cancel</span> <span class="hotkey-key" style="background: rgba(255, 68, 68, 0.2); color: #ff4444;">Esc</span></div>
      `;
    }
    
    // Save view
    savedView = {
      pos: camera.position.clone(),
      target: controls.target.clone()
    };
    
    // Switch to Bird's Eye
    controls.target.set(0, 0, 0);
    camera.position.set(0, 300, 0);
    controls.update();
    
    // Hide ghost piece if active
    if (ghostPiece) ghostPiece.visible = false;
  } else {
    editorMaze.position.set(0, 0, 0);
    exitShiftMode();
  }
});

document.querySelector('#btn-apply-shift').addEventListener('click', () => {
  if (!isShiftMode) return;
  
  const offset = editorMaze.position.clone();
  editorMaze.children.forEach(c => {
    c.position.add(offset);
  });
  editorMaze.position.set(0, 0, 0);
  exitShiftMode();
});

function exitShiftMode() {
  isShiftMode = false;
  const btn = document.querySelector('#btn-shift-map');
  btn.textContent = 'Shift Map';
  btn.classList.remove('btn-primary');
  btn.style.background = '';
  btn.style.color = '';
  btn.style.borderColor = '';
  
  const applyBtn = document.querySelector('#btn-apply-shift');
  if (applyBtn) applyBtn.style.display = 'none';
  
  const bottomBar = document.querySelector('.bottom-bar');
  const hotkeyList = document.querySelector('#hotkey-list');
  const cameraToggle = document.querySelector('.segmented-toggle');
  const zoomSlider = document.querySelector('#zoom-slider').parentElement;
  const exportImportContainer = document.querySelector('#btn-export').parentElement;
  
  if (bottomBar) bottomBar.style.display = 'flex';
  if (cameraToggle) cameraToggle.style.display = 'flex';
  if (zoomSlider) zoomSlider.style.display = 'flex';
  if (exportImportContainer) exportImportContainer.style.display = 'flex';
  
  if (hotkeyList) {
    hotkeyList.innerHTML = `
      <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
      <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
      <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
      <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
      <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
      <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
    `;
  }
  
  // Restore view
  if (savedView) {
    camera.position.copy(savedView.pos);
    controls.target.copy(savedView.target);
    controls.update();
  }
  
  // Show ghost piece
  if (ghostPiece) ghostPiece.visible = true;
}

const floatingDust = createDustField();
scene.add(floatingDust);

const pulseMeshes = [];
showcase.traverse((object) => {
  if (object.userData.pulse) {
    pulseMeshes.push(object);
  }
});

const clock = new THREE.Clock();

function createDustField() {
  const points = [];
  const count = 120;

  for (let index = 0; index < count; index += 1) {
    const radius = 18 + Math.random() * 68;
    const angle = Math.random() * Math.PI * 2;
    const height = 1.5 + Math.random() * 18;
    points.push(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: 0xa6c6ff,
      size: 0.18,
      transparent: true,
      opacity: 0.36,
      sizeAttenuation: true
    })
  );
}

function updatePulseMeshes(elapsedTime) {
  pulseMeshes.forEach((mesh) => {
    const { base, amplitude, speed, phase } = mesh.userData.pulse;
    mesh.material.emissiveIntensity = base + Math.sin(elapsedTime * speed + phase) * amplitude;
  });
}

function animate() {
  const deltaTime = Math.min(clock.getDelta(), 0.05);
  const elapsedTime = clock.elapsedTime;

  updatePulseMeshes(elapsedTime);
  
  // Update Entities
  if (pacman && pacman.userData.update) {
    pacman.userData.update(elapsedTime, deltaTime);
  }
  if (deathPacman && deathPacman.userData.update) {
    if (deathDemoResetTimer > 0) {
      deathDemoResetTimer = Math.max(0, deathDemoResetTimer - deltaTime);
      if (deathDemoResetTimer === 0) {
        deathPacman.resetDeathAnimation();
      }
    }

    if (
      deathDemoResetTimer === 0
      && !deathPacman.isDeathAnimationActive?.()
      && elapsedTime - lastDeathDemoTime >= DEATH_DEMO_INTERVAL
    ) {
      deathPacman.playDeathAnimation(DEATH_DEMO_DURATION);
      lastDeathDemoTime = elapsedTime;
    }
    deathPacman.userData.update(elapsedTime, deltaTime);
    if (wasDeathDemoAnimating && !deathPacman.isDeathAnimationActive?.()) {
      deathDemoResetTimer = 0.85;
    }
    wasDeathDemoAnimating = deathPacman.isDeathAnimationActive?.() || false;
  }
  if (blinky && blinky.userData.update) {
    blinky.userData.update(elapsedTime, deltaTime);
  }
  if (pinky && pinky.userData.update) {
    pinky.userData.update(elapsedTime);
  }
  if (inky && inky.userData.update) {
    inky.userData.update(elapsedTime);
  }
  if (clyde && clyde.userData.update) {
    clyde.userData.update(elapsedTime);
  }
  if (scaredGhost && scaredGhost.userData.update) {
    scaredGhost.userData.update(elapsedTime);
  }
  if (pellet && pellet.userData.update) {
    pellet.userData.update(elapsedTime);
  }
  if (stdPellet && stdPellet.userData.update) {
    stdPellet.userData.update(elapsedTime);
  }

  if (isGameMode && activeController) {
    if (isGameOver || isLevelComplete) {
      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });
      pelletManager.update(elapsedTime);
      updatePowerPelletState(deltaTime);
      updateGhostRespawn(deltaTime);
      updateGameCamera(deltaTime, false);
    } else if (isCaptureResolving()) {
      captureResolveTimer = Math.max(0, captureResolveTimer - deltaTime);

      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });

      pelletManager.update(elapsedTime);
      updatePowerPelletState(deltaTime);
      updateGhostRespawn(deltaTime);
      updateGameCamera(deltaTime, false);

      if (!isCaptureResolving()) {
        finishPacmanCaptureResolve();
      }
    } else {
      if (pacmanController) pacmanController.update(deltaTime, elapsedTime);
      updateGhostHouseState(deltaTime);
      updateGhostAi();
      forEachGhost((entry) => {
        if (!isGhostRespawning(entry)) {
          entry.controller.update(deltaTime, elapsedTime);
        } else if (entry.model.visible && entry.model.userData.update) {
          entry.model.userData.update(elapsedTime);
        }
      });
      updateGhostRespawn(deltaTime);

      let forceSnap = false;
      let startedIntent = activeController.consumeStartedIntent();
      while (startedIntent) {
        if (startedIntent === 'reverse') {
          beginGameCameraReverseDelay();
        } else if (startedIntent === 'reverse_instant') {
          gameCameraState.isReversing = false;
          gameCameraState.reversalTimer = 0;
          gameCameraState.forward.copy(activeController.getFollowDirection()).normalize();
          forceSnap = true;
        }
        startedIntent = activeController.consumeStartedIntent();
      }
      
      const inactiveControllers = activePuppet === 'pacman'
        ? gameGhosts.map((entry) => entry.controller)
        : [pacmanController, ...gameGhosts
          .map((entry) => entry.controller)
          .filter((controller) => controller !== activeController)];

      inactiveControllers.filter(Boolean).forEach((inactiveController) => {
        while(inactiveController.consumeStartedIntent()) {}
      });

      updateGameCamera(deltaTime, forceSnap);

      // Update and check pellets
      pelletManager.update(elapsedTime);
      updatePowerPelletState(deltaTime);
      const eatenPelletsThisFrame = pelletManager.checkCollisions(gamePacman.position);
      if (eatenPelletsThisFrame.length > 0) {
        addPelletScore(eatenPelletsThisFrame);
        if (didEatPowerPellet(eatenPelletsThisFrame)) {
          startPowerPelletState();
        }
        document.querySelector('#pellet-counter').textContent = pelletManager.getEatenCount();
        if (pelletManager.getTotalCount() > 0 && pelletManager.getEatenCount() >= pelletManager.getTotalCount()) {
          completeLevel();
        }
      }

      const capturingGhost = areCaptureCollisionsEnabled && !isLevelComplete
        ? getCapturingGhostEntry()
        : null;
      if (capturingGhost) {
        if (canGhostBeEaten(capturingGhost)) {
          startGhostRespawnDelay(capturingGhost);
        } else {
          startPacmanCaptureResolve();
        }
      }
    }
  }

  if (isEditorMode) {
    // Sync slider with camera
    zoomSlider.value = camera.position.distanceTo(controls.target);

    // Update any item indicators (like power pellets) so they animate in the editor
    editorMaze.children.forEach(c => {
      const indicator = c.getObjectByName('powerPelletIndicator');
      if (indicator && indicator.userData.update) {
        indicator.userData.update(elapsedTime);
      }
      const spawnIndicator = c.getObjectByName('pacmanSpawnIndicator');
      if (spawnIndicator && spawnIndicator.userData.update) {
        spawnIndicator.userData.update(elapsedTime);
      }
    });

    if (ghostPiece) {
      const pos = getGridIntersection();
      if (pos) {
        if (currentPieceType === 'powerpellet' || currentPieceType === 'pacmanspawn') {
          const existing = editorMaze.children.find(c => c.position.x === pos.x && c.position.z === pos.z);
          const validTypes = ['straight', 'corner', 'tjunction', 'crossroad'];
          if (currentPieceType === 'pacmanspawn') validTypes.push('teleport');
          
          if (existing && validTypes.includes(existing.userData.type)) {
            let px = pos.x;
            let pz = pos.z;
            
            if (existing.userData.type === 'corner') {
              const cornerOffset = 3.57 * (1 - Math.SQRT1_2);
              const rot = existing.userData.rotation;
              px += cornerOffset * Math.cos(rot) + (-cornerOffset) * Math.sin(rot);
              pz += -cornerOffset * Math.sin(rot) + (-cornerOffset) * Math.cos(rot);
            }
            
            ghostPiece.position.set(px, 2.5, pz);
            ghostPiece.visible = true;
            if (currentPieceType === 'pacmanspawn') {
              ghostPiece.rotation.y = currentRotation;
            }
            
            ghostPiece.traverse(obj => {
              if (obj.material && obj.userData.originalColor) {
                if (currentPieceType === 'pacmanspawn') {
                  obj.material.color.set(0x00ffaa); // Mint green hologram
                  if (obj.material.emissive) {
                    obj.material.emissive.set(0x00ffaa);
                    obj.material.emissiveIntensity = 1.0;
                  }
                } else {
                  obj.material.color.copy(obj.userData.originalColor);
                  if (obj.material.emissive) {
                    obj.material.emissive.copy(obj.userData.originalEmissive);
                    if (obj.userData.originalEmissiveIntensity !== undefined) {
                      obj.material.emissiveIntensity = obj.userData.originalEmissiveIntensity;
                    }
                  }
                }
              }
            });
            
            // Keep floating animation for power pellet ghost
            if (ghostPiece.userData.update) {
              ghostPiece.userData.update(elapsedTime);
            }
          } else {
            ghostPiece.position.set(pos.x, 2.5, pos.z);
            ghostPiece.visible = true;
            if (currentPieceType === 'pacmanspawn') {
              ghostPiece.rotation.y = currentRotation;
            }
            
            ghostPiece.traverse(obj => {
              if (obj.material && obj.userData.originalColor) {
                obj.material.color.set(0xff0000);
                if (obj.material.emissive) {
                  obj.material.emissive.set(0xff0000);
                  obj.material.emissiveIntensity = 2.0; // Lower intensity to avoid blowing out to white in ACESFilmic tone mapping
                }
              }
            });
            
            if (ghostPiece.userData.update) {
              ghostPiece.userData.update(elapsedTime);
            }
          }
        } else {
          ghostPiece.position.set(pos.x, 0, pos.z);
          ghostPiece.visible = true;

          const legal = isPlacementLegal(currentPieceType, pos, currentRotation);
          ghostPiece.traverse(obj => {
            if (obj.material && obj.userData.originalColor) {
              if (!legal) {
                obj.material.color.set(0xff0000);
                if (obj.material.emissive) obj.material.emissive.set(0xaa0000);
              } else {
                obj.material.color.copy(obj.userData.originalColor);
                if (obj.material.emissive) obj.material.emissive.copy(obj.userData.originalEmissive);
              }
            }
          });
        }
      } else {
        ghostPiece.visible = false;
      }
    }
  }

  floatingDust.rotation.y = elapsedTime * 0.01;
  if (!isGameMode) {
    controls.update();
  }
  renderFrame();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  renderer.setSize(window.innerWidth, window.innerHeight);
});
