import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildShowcase, showcaseLayout, createMazePiece, TILE_SIZE } from './mazePieces.js';
import './style.css';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010204);
scene.fog = new THREE.FogExp2(0x010204, 0.009);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 240);
camera.position.set(36, 12.5, 49);

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
  <div class="top-controls">
    <button class="btn" id="btn-export">Export JSON</button>
    <button class="btn btn-primary" id="btn-toggle-mode">Open Editor</button>
  </div>
  <div class="editor-ui" id="editor-ui">
    <div class="bottom-bar">
      <div class="piece-card active" data-type="straight">Straight</div>
      <div class="piece-card" data-type="corner">Corner</div>
      <div class="piece-card" data-type="tjunction">T-Junc</div>
      <div class="piece-card" data-type="crossroad">Cross</div>
      <div class="piece-card" data-type="teleport">Teleport</div>
    </div>
  </div>
`;
appContainer.insertAdjacentHTML('beforeend', uiHtml);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(5, 4.1, 1);
controls.minDistance = 18;
controls.maxDistance = 90;
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

const showcase = buildShowcase();
const editorMaze = new THREE.Group();
scene.add(showcase);
scene.add(editorMaze);

// --- Editor State ---
let isEditorMode = false;
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

  isEditorMode ? appContainer.classList.add('editor-active') : appContainer.classList.remove('editor-active');
  
  statusTab.textContent = isEditorMode ? 'Editor' : 'Showcase';
  toggleBtn.textContent = isEditorMode ? 'Close Editor' : 'Open Editor';
  editorUi.classList.toggle('active', isEditorMode);
  
  gridHelper.visible = isEditorMode;
  showcase.visible = !isEditorMode;
  editorMaze.visible = isEditorMode;

  if (isEditorMode) {
    updateGhostPiece();
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 5;
  } else {
    removeGhostPiece();
    controls.maxPolarAngle = Math.PI / 2.12;
    controls.minDistance = 18;
  }
}

document.querySelector('#btn-toggle-mode').addEventListener('click', toggleMode);

// --- Piece Selection ---
document.querySelectorAll('.piece-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('.piece-card.active').classList.remove('active');
    card.classList.add('active');
    currentPieceType = card.dataset.type;
    updateGhostPiece();
  });
});

// --- Ghost Piece ---
function updateGhostPiece() {
  removeGhostPiece();
  ghostPiece = createMazePiece(currentPieceType);
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
  if (!isEditorMode) return;
  if (e.key.toLowerCase() === 'r') {
    currentRotation += Math.PI / 2;
    if (ghostPiece) ghostPiece.rotation.y = currentRotation;
  }
  if (e.key.toLowerCase() === 'x') {
    deletePieceAtCursor();
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
  
  if (isEditorMode && ghostPiece) {
    const pos = getGridIntersection();
    if (pos) {
      ghostPiece.position.set(pos.x, 0, pos.z);
      ghostPiece.visible = true;
    } else {
      ghostPiece.visible = false;
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
