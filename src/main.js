/**
 * OpenAI. (2026). ChatGPT (GPT-5.4) [Large language model]. https://chat.openai.com
 * Google. (2026). Gemini [Large language model]. https://gemini.google.com
 * 
 * Parts of the code in this file were co-authored with AI assistants to refine 
 * the 3D logic, architectural layout, and high-fidelity entity designs.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildShowcase, showcaseLayout, createMazePiece, createPedestal, TILE_SIZE } from './mazePieces.js';
import { createPacman, createGhost, createPellet, createStandardPellet } from './entities.js';
import './style.css';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010204);
scene.fog = new THREE.FogExp2(0x010204, 0.009);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 500);

// --- Camera Profiles ---
const GALLERY_VIEW = {
  pos: [-52.15, 34.87, 81.20], // Shifted camera back too
  target: [13.69, 0.00, 46.19]  // Pushed target back
};

const EDITOR_VIEW = {
  pos: [50, 65, 120],  // Standard top-down-ish build view
  target: [50, 0, 50]
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
renderer.shadowMap.enabled = false;
const appContainer = document.querySelector('#app');
appContainer.appendChild(renderer.domElement);

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
      
      <div class="editor-only-controls" id="editor-only-controls" style="display: none; flex-direction: column; gap: 20px;">
        <button class="btn" id="btn-export">Export JSON</button>

        <div class="control-group">
          <div class="control-label">Zoom Level</div>
          <input type="range" id="zoom-slider" min="10" max="300" value="60">
        </div>

        <div class="segmented-toggle">
          <div class="toggle-slider" id="view-slider"></div>
          <div class="toggle-option active" data-view="3d">3D View</div>
          <div class="toggle-option" data-view="2d">Bird's Eye</div>
        </div>
        
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
          <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
          <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
          <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
          <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="editor-ui" id="editor-ui">
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
scene.add(floor);

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
scene.add(floorInnerGlow);

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
scene.add(farRing);

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
scene.add(showcase);
scene.add(editorMaze);

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
  isEditorMode = !isEditorMode;
  
  const statusTab = document.querySelector('#mode-status');
  const toggleBtn = document.querySelector('#btn-toggle-mode');
  const editorUi = document.querySelector('#editor-ui');
  const editorControls = document.querySelector('#editor-only-controls');

  isEditorMode ? appContainer.classList.add('editor-active') : appContainer.classList.remove('editor-active');
  
  statusTab.textContent = isEditorMode ? 'Editor' : 'Showcase';
  toggleBtn.textContent = isEditorMode ? 'Close Editor' : 'Open Editor';
  editorUi.classList.toggle('active', isEditorMode);
  editorControls.style.display = isEditorMode ? 'flex' : 'none';
  
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

function toggleCamera(type) {
  isBirdseye = (type === '2d');
  const slider = document.querySelector('#view-slider');
  const options = document.querySelectorAll('.toggle-option');
  
  options.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.view === type);
  });
  
  if (isBirdseye) {
    slider.classList.add('right');
    camera.position.set(0, 100, 0);
    controls.target.set(0, 0, 0);
    controls.enableRotate = false;
  } else {
    slider.classList.remove('right');
    camera.position.set(36, 40, 49);
    controls.target.set(0, 0, 0);
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

document.querySelectorAll('.toggle-option').forEach(opt => {
  opt.addEventListener('click', () => toggleCamera(opt.dataset.view));
});

// --- Piece Selection ---
function selectPiece(type) {
  const cards = document.querySelectorAll('.piece-card');
  const activeCard = document.querySelector('.piece-card.active');
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

document.querySelectorAll('.piece-card').forEach(card => {
  card.addEventListener('click', () => {
    selectPiece(card.dataset.type);
  });
});

// --- Ghost Piece ---
function updateGhostPiece() {
  removeGhostPiece();
  if (currentPieceType === null) return;
  ghostPiece = createMazePiece(currentPieceType);
  ghostPiece.rotation.y = currentRotation;
  ghostPiece.traverse(obj => {
    if (obj.material) {
      obj.material = obj.material.clone();
      obj.material.transparent = true;
      obj.material.opacity = 0.4;
    }
  });
  scene.add(ghostPiece);
}

function removeGhostPiece() {
  if (ghostPiece) {
    scene.remove(ghostPiece);
    ghostPiece = null;
  }
}

// --- Interaction Events ---
window.addEventListener('mousemove', (e) => {
  if (!isEditorMode) return;
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  // --- Capture Tool ---
  if (key === 'c') {
    window.getCameraConfig();
  }

  if (!isEditorMode) return;
  
  // --- Piece Selection Hotkeys ---
  const pieceKeys = {
    '1': 'straight',
    '2': 'corner',
    '3': 'tjunction',
    '4': 'crossroad',
    '5': 'teleport',
    '6': 'ghostchamber'
  };
  if (pieceKeys[key]) {
    selectPiece(pieceKeys[key]);
  }
  
  // --- Free Mode ---
  if (key === 'v') {
    selectPiece(null);
  }

  if (key === ' ') {
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

window.addEventListener('mousedown', (e) => {
  if (!isEditorMode || e.button !== 0) return;
  if (e.target.closest('.bottom-bar') || e.target.closest('.top-controls')) return;
  placePiece();
});

function getGridIntersection() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(floor);
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

  // Prevent overlap
  const existing = editorMaze.children.find(c => c.position.x === pos.x && c.position.z === pos.z);
  if (existing) return;

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
document.querySelector('#btn-export').addEventListener('click', () => {
  const data = editorMaze.children.map(c => ({
    type: c.userData.type,
    position: [c.position.x, c.position.y, c.position.z],
    rotation: c.userData.rotation
  }));
  const json = JSON.stringify(data, null, 2);
  console.log("--- EXPORTED MAZE DATA ---");
  console.log(json);
  alert("Maze data exported to Console (F12). Copy the array to use in showcaseLayout!");
});

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
  const elapsedTime = clock.getElapsedTime();

  updatePulseMeshes(elapsedTime);
  
  // Update Entities
  if (pacman && pacman.userData.update) {
    pacman.userData.update(elapsedTime);
  }
  if (blinky && blinky.userData.update) {
    blinky.userData.update(elapsedTime);
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

  if (isEditorMode) {
    // Sync slider with camera
    zoomSlider.value = camera.position.distanceTo(controls.target);

    if (ghostPiece) {
      const pos = getGridIntersection();
      if (pos) {
        ghostPiece.position.set(pos.x, 0, pos.z);
        ghostPiece.visible = true;
      } else {
        ghostPiece.visible = false;
      }
    }
  }

  floatingDust.rotation.y = elapsedTime * 0.01;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  renderer.setSize(window.innerWidth, window.innerHeight);
});
