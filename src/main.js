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
import { buildMazeGraph, DIRECTIONS, EXPERIMENTAL_GAME_MAP, getAbsoluteDirections as getGraphAbsoluteDirections } from './mazeGraph.js';
import { EntityController } from './pacmanController.js';
import { PelletManager, PELLET_TYPES } from './pelletManager.js';
import { GhostAIController } from './ghostAIController.js';
import { navigateTo, registerRoutes } from './navigation.js';
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
          <button class="btn dev-only-control" id="btn-reset-pellets" style="flex: 1; padding: 6px;">Reset Pellets</button>
          <button class="btn" id="btn-reset-run" style="flex: 1; padding: 6px;">Restart Run</button>
        </div>
        <button class="btn dev-only-control" id="btn-swap-puppet" style="margin-top: -5px; padding: 6px; background: rgba(255, 204, 0, 0.2); border-color: rgba(255, 204, 0, 0.3); color: #ffcc00;">Control: Pacman</button>
        <button class="btn dev-only-control" id="btn-cycle-ghost-count" style="margin-top: -5px; padding: 6px;">Ghosts: 4</button>
        <button class="btn dev-only-control" id="btn-toggle-ghost-ai" style="margin-top: -5px; padding: 6px;">Ghost AI: Off</button>
        <button class="btn dev-only-control" id="btn-toggle-collisions" style="margin-top: -5px; padding: 6px;">Collisions: On</button>
        <button class="btn dev-only-control" id="btn-toggle-jumpscare" style="margin-top: -5px; padding: 6px;">Jumpscare: Off</button>
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>Look Back</span> <span class="hotkey-key">Hold Space</span></div>
          <div class="hotkey-item dev-only-control"><span>Swap</span> <span class="hotkey-key">Tab</span></div>
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

  <div class="showroom-nav" id="showroom-nav" aria-label="Showroom navigation">
    <button class="showroom-action btn-blue" id="btn-showroom-menu">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span>Menu</span>
    </button>
    <button class="showroom-action btn-yellow" id="btn-showroom-play">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
      </svg>
      <span>Play</span>
    </button>
    <button class="showroom-action btn-blue" id="btn-showroom-create">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span>Create</span>
    </button>
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

  <button class="editor-save-fab" id="btn-save-map" type="button">
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
    <span class="editor-save-label">Save Map</span>
  </button>

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

  <div class="modal-overlay editor-save-modal" id="editor-save-modal">
    <div class="modal-content editor-save-modal-content">
      <p class="editor-modal-eyebrow" id="editor-save-modal-eyebrow">Map Editor</p>
      <h3 class="modal-title editor-save-modal-title" id="editor-save-modal-title">Save Map</h3>
      <p class="editor-save-modal-message" id="editor-save-modal-message">Name this map before saving it to your slots.</p>
      <label class="editor-save-input-wrap" id="editor-save-input-wrap">
        <span>Map Name</span>
        <input id="editor-save-name-input" type="text" maxlength="28" autocomplete="off" />
      </label>
      <p class="editor-save-modal-error" id="editor-save-modal-error"></p>
      <div class="editor-save-modal-actions">
        <button class="editor-modal-secondary" id="btn-editor-save-cancel" type="button">Cancel</button>
        <button class="editor-modal-primary" id="btn-editor-save-confirm" type="button">Save</button>
      </div>
    </div>
  </div>

  <div class="landing-overlay" id="landing-menu">
    <div class="landing-menu-container">
      <div id="menu-3d-container">
        <canvas id="menu-3d-canvas"></canvas>
      </div>      <div class="landing-content">
        <div class="landing-logo" aria-label="3D Pacman">
          <div class="logo-top">            <svg class="logo-svg-top" viewBox="0 0 1538 780">
              <g transform="translate(40, 40)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M266 712Q192 712 121 692.50Q50 673-1 637L62 513Q102 543 154.50 559.50Q207 576 262 576Q323 576 358 552.50Q393 529 393 486Q393 447 362 423.50Q331 400 262 400L188 400L188 293L331 130L34 130L34 0L524 0L524 105L366 284Q460 300 508 354Q556 408 556 486Q556 545 525 596.50Q494 648 429.50 680Q365 712 266 712" />
                <path transform="translate(632, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
              </g>
            </svg>
          </div>
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M245 700L83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50Q479 507 386 507L245 507L245 700M245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 784 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M418 712Q337 712 267.50 685Q198 658 147 609.50Q96 561 67.50 495Q39 429 39 350Q39 271 67.50 205Q96 139 147.50 90.50Q199 42 268 15Q337-12 419-12Q510-12 584 20Q658 52 707 112L603 208Q531 126 427 126Q361 126 310.50 154.50Q260 183 231.50 233.50Q203 284 203 350Q203 416 231.50 466.50Q260 517 310.50 545.50Q361 574 427 574Q531 574 603 491L707 587Q658 648 584 680Q510 712 418 712" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 1015 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M235 700L83 700L83 0L217 0L479 435L737 0L870 0L872 700L720 700L719 281L513 626L440 626L235 288" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 868 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M243 700L83 700L83 0L217 0L565 426L565 0L725 0L725 700L592 700L243 274" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="landing-actions">
          <button class="landing-action btn-yellow" id="btn-menu-start">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
            </svg>
            <span>Start Game</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-editor">
            <svg class="btn-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span>Create Map</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-showroom">
            <svg class="btn-icon" viewBox="0 0 512 512" fill="none">
              <g stroke="currentColor" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 104 404 L 104 198 C 104 118 168 70 256 70 C 344 70 408 118 408 198 L 408 404 L 368 368 L 312 420 L 256 370 L 200 420 L 144 368 L 104 404 Z"/>
                <circle cx="200" cy="216" r="34"/>
                <circle cx="312" cy="216" r="34"/>
              </g>
            </svg>
            <span>Showroom</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-select-screen">
    <div class="route-screen map-picker">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-select-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Pick a Map</h2>
        </div>
      </div>
      <div class="map-picker-grid" id="map-picker-grid"></div>
      <details class="map-advanced-panel">
        <summary>
          <span>Advanced</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </summary>
        <div class="map-advanced-controls">
          <label class="map-dev-toggle">
            <input type="checkbox" id="map-jumpscare-toggle">
            <span>Jumpscare mode</span>
          </label>
          <div class="map-ghost-count-control">
            <span>Ghosts</span>
            <div class="ghost-stepper" id="map-ghost-stepper">
              <button class="ghost-stepper-button" id="btn-ghost-count-minus" type="button" aria-label="Decrease ghost count">-</button>
              <div class="ghost-stepper-value" id="map-ghost-count" role="status" aria-live="polite">4</div>
              <button class="ghost-stepper-button ghost-stepper-button-plus" id="btn-ghost-count-plus" type="button" aria-label="Increase ghost count">+</button>
            </div>
          </div>
        </div>
      </details>
      <div class="map-picker-footer">
        <label class="map-dev-toggle">
          <input type="checkbox" id="map-dev-toggle">
          <span>Dev tools</span>
        </label>
        <button class="map-start-button" id="btn-map-select-start">Start</button>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-manager-screen">
    <div class="route-screen map-manager">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-manager-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Your Maps</h2>
        </div>
      </div>
      <div class="map-manager-grid" id="map-manager-grid"></div>
    </div>
  </div>
  <div class="game-hud" id="game-hud">
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <radialGradient id="pacman3dGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fff5a0" />
          <stop offset="25%" stop-color="#ffd91f" />
          <stop offset="75%" stop-color="#cc9a00" />
          <stop offset="100%" stop-color="#664d00" />
        </radialGradient>
      </defs>
    </svg>
    <div class="game-hud-header">
      <div class="hud-score-inline">
        <span class="hud-score-title">SCORE:</span>
        <span class="hud-score-val" id="hud-score-value">0</span>
      </div>
      <button class="hud-pause-button" id="btn-hud-pause" type="button" aria-label="Pause game">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="5" y="4" width="4" height="16" rx="1" />
          <rect x="15" y="4" width="4" height="16" rx="1" />
        </svg>
      </button>
    </div>
    <div class="game-hud-lives" id="game-hud-lives"></div>
    <div class="game-start-overlay" id="game-start-overlay" aria-hidden="true">
      <div class="game-start-modal">
        <h2 class="game-start-title">Controls</h2>
        <div class="game-start-commands">
          <div><span>Move</span><strong>WASD / Arrows</strong></div>
          <div><span>Look back</span><strong>Hold Space</strong></div>
          <div><span>Exit</span><strong>Esc</strong></div>
        </div>
        <button class="game-start-button" id="btn-game-start" type="button">Start</button>
      </div>
    </div>
    <div class="game-countdown-overlay" id="game-countdown-overlay" aria-hidden="true">
      <!-- READY Title -->
      <div class="game-ready-title" id="countdown-ready-title">
        <div class="logo-word">
          <span class="logo-letter">
            <svg viewBox="0 0 792 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50L700 700L540 700L386 507L245 507L245 700ZM245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 660 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 826 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 847 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L245 0 L341.5 180 L438 0 L600 0 L422 350 L422 700 L260 700 L260 350 Z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <!-- GO! Title -->
      <div class="game-go-title" id="countdown-go-title" style="display: none;">
        <div class="logo-word">
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0 L83 0 L83 700 L650 700 L650 350 L380 350 L380 483 L488 483 L488 567 L245 567 L245 133 L650 133 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 700 L83 700 Z M245 133 L245 567 L438 567 L438 133 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 482 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M260 0 L422 0 L422 450 L260 450 Z M260 538 L422 538 L422 700 L260 700 Z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-status-overlay game-over-overlay" id="game-over-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-over-title">
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L422 133 L422 700 L260 700 L260 133 L83 133 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="game-over-score-display">
          SCORE: <span id="game-over-score">0</span>
        </div>

        <div class="pause-menu-actions" style="margin-top: 12px;">
          <button class="landing-action btn-red" id="btn-game-over-retry" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 4v6h-6"></path>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>Try Again</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-over-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-status-overlay game-victory-overlay" id="game-victory-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-victory-title">
          <div class="logo-word">
            <!-- V -->
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L245 0L330 450L415 0L577 0L411 700L249 700Z" />
                </g>
              </svg>
            </span>
            <!-- I -->
            <span class="logo-letter">
              <svg viewBox="0 0 482 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M160 0L322 0L322 700L160 700Z" />
                </g>
              </svg>
            </span>
            <!-- C -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0L83 0L83 700L650 700L650 567L245 567L245 133L650 133Z" />
                </g>
              </svg>
            </span>
            <!-- T -->
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L600 0L600 133L422 133L422 700L260 700L260 133L83 133Z" />
                </g>
              </svg>
            </span>
            <!-- O -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L600 0L600 700L83 700ZM245 133L245 567L438 567L438 133Z" />
                </g>
              </svg>
            </span>
            <!-- R -->
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50L700 700L540 700L386 507L245 507L245 700ZM245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132Z" />
                </g>
              </svg>
            </span>
            <!-- Y -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L245 0L341.5 180L438 0L600 0L422 350L422 700L260 700L260 350Z" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="game-victory-score-display">
          SCORE: <span id="game-victory-score">0</span>
        </div>

        <div class="pause-menu-actions" style="margin-top: 12px;">
          <button class="landing-action btn-yellow" id="btn-game-victory-retry" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 4v6h-6"></path>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>Play Again</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-victory-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-pause-overlay" id="game-pause-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-paused-title">
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0 L83 0 L83 700 L650 700 L650 350 L380 350 L380 483 L488 483 L488 567 L245 567 L245 133 L650 133 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 1015 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M235 700L83 700L83 0L217 0L479 435L737 0L870 0L872 700L720 700L719 281L513 626L440 626L235 288" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter-space"></span>
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M245 700L83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50Q479 507 386 507L245 507L245 700M245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L83 700 L650 700 L650 0 L488 0 L488 567 L245 567 L245 0 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L650 0 L650 133 L245 133 L245 285 L650 285 L650 700 L83 700 L83 567 L488 567 L488 415 L83 415 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="pause-menu-actions" id="pause-main-actions">
          <button class="landing-action btn-yellow" id="btn-game-pause-resume" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
            </svg>
            <span>Resume</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-pause-controls" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01"></path>
              <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"></path>
              <path d="M7 16h10"></path>
            </svg>
            <span>Controls</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-pause-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
        <div class="pause-menu-controls" id="pause-controls-panel" style="display: none;">
          <div class="game-start-commands">
            <div><span>Move</span><strong>WASD / Arrows</strong></div>
            <div><span>Look back</span><strong>Hold Space</strong></div>
            <div><span>Exit</span><strong>Esc</strong></div>
          </div>
          <button class="landing-action btn-yellow" id="btn-game-pause-controls-back" type="button" style="margin-top: 24px;">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="editor-toast" id="editor-toast"></div>
`;
appContainer.insertAdjacentHTML('beforeend', uiHtml);
appContainer.classList.add('landing-active');

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
let isGameStartOverlayActive = false;
let isGameLookBackActive = false;
let previousGameLookBackState = false;
let isJumpscareMode = false;
let areCaptureCollisionsEnabled = true;
let captureResolveTimer = 0;
let livesRemaining = 3;
let isGameOver = false;
let isLevelComplete = false;
let score = 0;
let isCountdownActive = false;
let countdownTimer = 0;
const COUNTDOWN_DURATION = 1.2;
let isGamePaused = false;
let powerPelletTimer = 0;
let activePowerPelletDuration = 0;
let ghostsEatenThisPower = 0;
let activeFloatingScores = [];
let activeGhostCount = 4;
let currentGameGraph = null;
let selectedGameMapId = 'classic';
let selectedMapGhostCount = 4;
const USER_MAP_STORAGE_KEY = 'icg-3d-pacman-user-maps';
const MAX_USER_MAPS = 2;

const BUILT_IN_MAPS = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Default glass-pipe maze',
    source: EXPERIMENTAL_GAME_MAP
  }
];

let userMaps = loadUserMaps();
let editorSession = {
  mode: 'none',
  mapId: null,
  name: '',
  saveable: false
};
let isEditorDirty = false;
let pendingSaveModalPayload = null;
let pendingDiscardAction = null;

// --- 3D Landing Menu Variables ---
let menuScene = null;
let menuCamera = null;
let menuRenderer = null;
let menuPacman = null;
let menuScaredGhost = null;
let menuClyde = null;
let menuPellets = [];
const MENU_TRACK_WIDTH = 54;
const MENU_TRACK_HEIGHT = 38;
const MENU_PACMAN_SPEED = 12.0; // Units per second
let menuElapsedTime = 0;
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
const GHOST_RESPAWN_DELAY = 3.0;
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

  // Update HUD lives icons
  const hudLives = document.querySelector('#game-hud-lives');
  if (hudLives) {
    hudLives.innerHTML = '';
    for (let i = 0; i < livesRemaining; i++) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('hud-life-icon');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width', '42');
      svg.setAttribute('height', '42');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M12 12 L20.66 7 A10 10 0 1 0 20.66 17 Z');
      path.setAttribute('fill', 'url(#pacman3dGrad)');
      svg.appendChild(path);
      hudLives.appendChild(svg);
    }
  }
}

function updateScoreUi() {
  const scoreCounter = document.querySelector('#score-counter');
  if (scoreCounter) {
    scoreCounter.textContent = score;
  }
  const hudScore = document.querySelector('#hud-score-value');
  if (hudScore) {
    hudScore.textContent = score;
  }
}

function startCountdown() {
  const isDevMode = appContainer.classList.contains('dev-tools-active');
  if (isDevMode) return;

  isCountdownActive = true;
  countdownTimer = COUNTDOWN_DURATION;
  
  const overlay = document.querySelector('#game-countdown-overlay');
  const readyTitle = document.querySelector('#countdown-ready-title');
  const goTitle = document.querySelector('#countdown-go-title');
  if (overlay) {
    overlay.classList.add('active');
    overlay.className = 'game-countdown-overlay active countdown-ready';
    overlay.setAttribute('aria-hidden', 'false');
  }
  if (readyTitle) readyTitle.style.display = 'flex';
  if (goTitle) goTitle.style.display = 'none';
}

function updateCountdown(deltaTime) {
  if (!isCountdownActive) return;

  countdownTimer = Math.max(0, countdownTimer - deltaTime);

  if (countdownTimer <= 0) {
    isCountdownActive = false; // Unfreeze game!
    
    // Switch to GO! and trigger animation
    const overlay = document.querySelector('#game-countdown-overlay');
    const readyTitle = document.querySelector('#countdown-ready-title');
    const goTitle = document.querySelector('#countdown-go-title');
    
    if (overlay) {
      overlay.className = 'game-countdown-overlay active countdown-go';
    }
    if (readyTitle) readyTitle.style.display = 'none';
    if (goTitle) goTitle.style.display = 'flex';
    
    // Hide overlay after 800ms
    setTimeout(() => {
      if (!isCountdownActive) {
        hideCountdownUi();
      }
    }, 800);
  }
}

function updateCountdownUi() {
  // Deprecated - state is managed inside startCountdown and updateCountdown directly now
}

function hideCountdownUi() {
  const overlay = document.querySelector('#game-countdown-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.className = 'game-countdown-overlay';
    overlay.setAttribute('aria-hidden', 'true');
  }
}

function showGameOverOverlay() {
  const isDevMode = appContainer.classList.contains('dev-tools-active');
  if (isDevMode) return;

  const overlay = document.querySelector('#game-over-overlay');
  if (!overlay) return;

  const scoreEl = document.querySelector('#game-over-score');
  if (scoreEl) scoreEl.textContent = score;

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) pauseBtn.style.display = 'none';
}

function hideGameOverOverlay() {
  const overlay = document.querySelector('#game-over-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

function showVictoryOverlay() {
  const isDevMode = appContainer.classList.contains('dev-tools-active');
  if (isDevMode) return;

  const overlay = document.querySelector('#game-victory-overlay');
  if (!overlay) return;

  const scoreEl = document.querySelector('#game-victory-score');
  if (scoreEl) scoreEl.textContent = score;

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) pauseBtn.style.display = 'none';
}

function hideVictoryOverlay() {
  const overlay = document.querySelector('#game-victory-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

function showPauseOverlay() {
  const isDevMode = appContainer.classList.contains('dev-tools-active');
  if (isDevMode) return;

  const overlay = document.querySelector('#game-pause-overlay');
  if (!overlay) return;

  isGamePaused = true;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  // Reset controls panels state to show main actions first
  const mainActions = document.querySelector('#pause-main-actions');
  const controlsPanel = document.querySelector('#pause-controls-panel');
  if (mainActions) mainActions.style.display = 'flex';
  if (controlsPanel) controlsPanel.style.display = 'none';

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) pauseBtn.style.display = 'none';
}

function hidePauseOverlay() {
  const overlay = document.querySelector('#game-pause-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
  isGamePaused = false;

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) pauseBtn.style.display = '';
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

function createFloatingScore(value, position) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Retro bold fonts with cyan neon glow
  ctx.shadowColor = '#00ffff';
  ctx.shadowBlur = 14;
  ctx.lineWidth = 7;
  
  ctx.font = "bold 82px 'Century Gothic', Futura, sans-serif";
  
  // Neon cyan stroke
  ctx.strokeStyle = '#00cccc';
  ctx.strokeText(value, canvas.width / 2, canvas.height / 2);
  
  // Bright white-cyan core fill
  ctx.shadowBlur = 4;
  ctx.fillStyle = '#ffffff';
  ctx.fillText(value, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: true
  });
  
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.position.copy(position);
  sprite.position.y += 0.8; // Stand higher than ghost/pacman
  
  // Initial tiny scale for pop animation
  sprite.scale.set(0.1, 0.05, 1);
  
  scene.add(sprite);
  
  activeFloatingScores.push({
    sprite: sprite,
    age: 0,
    duration: 1.2,
    speed: 1.8,
    targetWidth: 1.8,
    targetHeight: 0.9
  });
}

function updateFloatingScores(deltaTime) {
  for (let i = activeFloatingScores.length - 1; i >= 0; i--) {
    const f = activeFloatingScores[i];
    f.age += deltaTime;
    if (f.age >= f.duration) {
      scene.remove(f.sprite);
      f.sprite.material.map.dispose();
      f.sprite.material.dispose();
      activeFloatingScores.splice(i, 1);
    } else {
      // Float up
      f.sprite.position.y += f.speed * deltaTime;
      
      // Pop-in scale over first 0.15s, then hold
      const scaleProgress = Math.min(1.0, f.age / 0.15);
      f.sprite.scale.set(f.targetWidth * scaleProgress, f.targetHeight * scaleProgress, 1);
      
      // Fade out over last 0.6s
      if (f.age > 0.6) {
        const fadeProgress = (f.age - 0.6) / (f.duration - 0.6);
        f.sprite.material.opacity = 1 - fadeProgress;
      } else {
        f.sprite.material.opacity = 1.0;
      }
    }
  }
}

function clearFloatingScores() {
  activeFloatingScores.forEach((f) => {
    scene.remove(f.sprite);
    f.sprite.material.map.dispose();
    f.sprite.material.dispose();
  });
  activeFloatingScores = [];
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
  
  const ghostScoreValue = getNextGhostScore();
  addGhostScore();
  createFloatingScore(ghostScoreValue, entry.model.position);
  
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

function loadUserMaps() {
  try {
    const parsed = JSON.parse(localStorage.getItem(USER_MAP_STORAGE_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((map) => map && typeof map.id === 'string' && typeof map.name === 'string' && Array.isArray(map.source))
      .slice(0, MAX_USER_MAPS);
  } catch {
    return [];
  }
}

function persistUserMaps() {
  localStorage.setItem(USER_MAP_STORAGE_KEY, JSON.stringify(userMaps.slice(0, MAX_USER_MAPS)));
}

function getPlayableMaps() {
  return [...BUILT_IN_MAPS, ...userMaps];
}

function createUserMapId() {
  return `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getMapById(mapId) {
  return getPlayableMaps().find((map) => map.id === mapId) || BUILT_IN_MAPS[0];
}

function getSelectedGameMap() {
  return getMapById(selectedGameMapId);
}

function getEditorMapSource() {
  return editorMaze.children.map(c => ({
    type: c.userData.type,
    position: [c.position.x, c.position.y, c.position.z],
    rotation: c.userData.rotation,
    hasPowerPellet: c.userData.hasPowerPellet || false,
    hasPacmanSpawn: c.userData.hasPacmanSpawn || false,
    pacmanSpawnRotation: c.userData.pacmanSpawnRotation || 0
  }));
}

function setEditorDirty(dirty = true) {
  isEditorDirty = Boolean(dirty);
  updateEditorSaveUi();
}

function setEditorSession(session) {
  editorSession = {
    mode: session.mode || 'none',
    mapId: session.mapId || null,
    name: session.name || '',
    saveable: Boolean(session.saveable)
  };
  setEditorDirty(false);
}

function showEditorToast(message) {
  const toast = document.querySelector('#editor-toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(showEditorToast.timeoutId);
  showEditorToast.timeoutId = setTimeout(() => {
    toast.classList.remove('active');
  }, 2600);
}

function closeEditorSaveModal() {
  document.querySelector('#editor-save-modal')?.classList.remove('active');
  pendingSaveModalPayload = null;
}

function openEditorMessageModal({ title, message, variant = 'info', primaryText = 'Close' }) {
  const modal = document.querySelector('#editor-save-modal');
  const eyebrow = document.querySelector('#editor-save-modal-eyebrow');
  const titleEl = document.querySelector('#editor-save-modal-title');
  const messageEl = document.querySelector('#editor-save-modal-message');
  const inputWrap = document.querySelector('#editor-save-input-wrap');
  const input = document.querySelector('#editor-save-name-input');
  const errorEl = document.querySelector('#editor-save-modal-error');
  const cancelBtn = document.querySelector('#btn-editor-save-cancel');
  const confirmBtn = document.querySelector('#btn-editor-save-confirm');
  if (!modal || !titleEl || !messageEl || !inputWrap || !input || !errorEl || !cancelBtn || !confirmBtn) return;

  pendingSaveModalPayload = null;
  modal.dataset.variant = variant;
  eyebrow.textContent = variant === 'success' ? 'Saved' : 'Map Editor';
  titleEl.textContent = title;
  messageEl.textContent = message;
  inputWrap.style.display = 'none';
  input.value = '';
  errorEl.textContent = '';
  cancelBtn.style.display = 'none';
  confirmBtn.textContent = primaryText;
  modal.classList.add('active');
  confirmBtn.focus();
}

function openSaveNameModal(source, suggestedName) {
  const modal = document.querySelector('#editor-save-modal');
  const eyebrow = document.querySelector('#editor-save-modal-eyebrow');
  const titleEl = document.querySelector('#editor-save-modal-title');
  const messageEl = document.querySelector('#editor-save-modal-message');
  const inputWrap = document.querySelector('#editor-save-input-wrap');
  const input = document.querySelector('#editor-save-name-input');
  const errorEl = document.querySelector('#editor-save-modal-error');
  const cancelBtn = document.querySelector('#btn-editor-save-cancel');
  const confirmBtn = document.querySelector('#btn-editor-save-confirm');
  if (!modal || !titleEl || !messageEl || !inputWrap || !input || !errorEl || !cancelBtn || !confirmBtn) return;

  pendingSaveModalPayload = { source };
  modal.dataset.variant = 'save';
  eyebrow.textContent = editorSession.mapId ? 'Update Slot' : 'New Slot';
  titleEl.textContent = 'Save Map';
  messageEl.textContent = 'Name this map before saving it to your map slots.';
  inputWrap.style.display = '';
  input.value = suggestedName;
  errorEl.textContent = '';
  cancelBtn.style.display = '';
  cancelBtn.textContent = 'Cancel';
  confirmBtn.textContent = 'Save Map';
  modal.classList.add('active');
  requestAnimationFrame(() => {
    input.focus();
    input.select();
  });
}

function openEditorDiscardConfirmation(onConfirm) {
  const modal = document.querySelector('#editor-save-modal');
  const eyebrow = document.querySelector('#editor-save-modal-eyebrow');
  const titleEl = document.querySelector('#editor-save-modal-title');
  const messageEl = document.querySelector('#editor-save-modal-message');
  const inputWrap = document.querySelector('#editor-save-input-wrap');
  const input = document.querySelector('#editor-save-name-input');
  const errorEl = document.querySelector('#editor-save-modal-error');
  const cancelBtn = document.querySelector('#btn-editor-save-cancel');
  const confirmBtn = document.querySelector('#btn-editor-save-confirm');
  if (!modal || !titleEl || !messageEl || !inputWrap || !input || !errorEl || !cancelBtn || !confirmBtn) return;

  pendingDiscardAction = onConfirm;
  modal.dataset.variant = 'confirm-discard';
  eyebrow.textContent = 'Unsaved Changes';
  titleEl.textContent = 'Discard Changes?';
  messageEl.textContent = 'You have unsaved changes. If you close the editor, these changes will be lost.';
  inputWrap.style.display = 'none';
  input.value = '';
  errorEl.textContent = '';
  cancelBtn.style.display = '';
  cancelBtn.textContent = 'Cancel';
  confirmBtn.textContent = 'Discard';
  modal.classList.add('active');
  confirmBtn.focus();
}

function updateEditorSaveUi() {
  const btn = document.querySelector('#btn-save-map');
  if (!btn) return;

  btn.disabled = !editorSession.saveable;
  const label = btn.querySelector('.editor-save-label');
  const kicker = btn.querySelector('.editor-save-kicker');
  if (label) {
    label.textContent = editorSession.saveable
      ? (isEditorDirty ? 'Save Map *' : 'Save Map')
      : 'Read Only';
  }
  if (kicker) {
    kicker.textContent = editorSession.saveable
      ? (editorSession.name || 'Editor Slot')
      : 'Built-In Map';
  }
  btn.title = editorSession.saveable
    ? 'Save this map to your map slots'
    : 'Built-in maps can be exported, but cannot be saved over';
}

function validateMapData(data, options = {}) {
  if (!Array.isArray(data)) {
    throw new Error("Map data must be an array of pieces.");
  }

  if (options.requirePlayable && data.length < 5) {
    throw new Error("Saved maps need at least 5 maze pieces.");
  }

  const validTypes = ['straight', 'corner', 'tjunction', 'crossroad', 'teleport', 'ghostchamber'];
  let pacmanSpawnCount = 0;
  let ghostChamberCount = 0;
  const occupiedTiles = new Set();
  const checkOrthogonal = (rot) => {
    const normalized = ((rot % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const remainder = normalized % (Math.PI / 2);
    return remainder < 0.01 || Math.abs(remainder - (Math.PI / 2)) < 0.01;
  };

  for (let i = 0; i < data.length; i += 1) {
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

    const tileKey = `${Math.round(item.position[0])},${Math.round(item.position[2])}`;
    if (occupiedTiles.has(tileKey)) {
      throw new Error(`Duplicate tile position at index ${i}.`);
    }
    occupiedTiles.add(tileKey);

    if (typeof item.rotation !== 'number') {
      throw new Error(`Invalid rotation at index ${i}. Must be a number.`);
    }

    if (!checkOrthogonal(item.rotation)) {
      throw new Error(`Invalid rotation at index ${i}. Must be a multiple of 90 degrees (PI/2).`);
    }

    if (item.hasPacmanSpawn) {
      pacmanSpawnCount += 1;
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
      ghostChamberCount += 1;
      if (ghostChamberCount > 1) {
        throw new Error("Multiple Ghost Chambers detected. Only one is allowed.");
      }
    }
  }

  if (options.requirePlayable) {
    if (pacmanSpawnCount !== 1) {
      throw new Error("Saved maps need exactly one Pacman spawn.");
    }
    if (ghostChamberCount !== 1) {
      throw new Error("Saved maps need exactly one Ghost Chamber.");
    }

    const graph = buildMazeGraph(data);
    for (const tile of graph.tiles.values()) {
      const teleportPortalDirection = tile.type === 'teleport'
        ? getGraphAbsoluteDirections(['west'], tile.rotation)[0]
        : null;

      for (const direction of tile.connectors) {
        if (direction === teleportPortalDirection) continue;

        if (!tile.exits.has(direction)) {
          const openingName = direction.charAt(0).toUpperCase() + direction.slice(1);
          throw new Error(`Open ${openingName} connection at (${tile.position.x}, ${tile.position.z}). Every pipe opening must connect to another piece.`);
        }
      }
    }
  }
}

function clearEditorMaze({ markDirty = false } = {}) {
  while (editorMaze.children.length > 0) {
    editorMaze.remove(editorMaze.children[0]);
  }
  removeGhostPiece();
  setEditorDirty(markDirty);
}

function addEditorPieceFromMapItem(item) {
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
}

function loadMapIntoEditor(mapSource, options = {}) {
  clearEditorMaze({ markDirty: false });
  mapSource.forEach(addEditorPieceFromMapItem);
  setEditorDirty(Boolean(options.markDirty));
}

function openEditorForBuiltInMap(map) {
  setEditorSession({
    mode: 'template',
    mapId: map.id,
    name: map.name,
    saveable: false
  });
  loadMapIntoEditor(map.source);
  navigateTo('/editor');
}

function openEditorForSavedMap(map) {
  setEditorSession({
    mode: 'saved',
    mapId: map.id,
    name: map.name,
    saveable: true
  });
  loadMapIntoEditor(map.source);
  navigateTo('/editor');
}

function openEditorForNewMap() {
  if (userMaps.length >= MAX_USER_MAPS) {
    openEditorMessageModal({
      title: 'No Free Slots',
      message: 'All map slots are already occupied. Edit an existing map or export your work before replacing anything.',
      variant: 'error'
    });
    return;
  }

  setEditorSession({
    mode: 'new',
    mapId: null,
    name: '',
    saveable: true
  });
  clearEditorMaze({ markDirty: false });
  navigateTo('/editor');
}

function commitEditorMapSave(source, name) {
  const existingIndex = userMaps.findIndex((map) => map.id === editorSession.mapId);
  let savedId = editorSession.mapId;

  if (existingIndex >= 0) {
    userMaps[existingIndex] = {
      ...userMaps[existingIndex],
      name,
      source,
      updatedAt: Date.now()
    };
  } else {
    if (userMaps.length >= MAX_USER_MAPS) {
      openEditorMessageModal({
        title: 'No Free Slots',
        message: 'All map slots are already occupied. Edit an existing map or export your work before replacing anything.',
        variant: 'error'
      });
      return;
    }

    savedId = createUserMapId();
    userMaps.push({
      id: savedId,
      name,
      source,
      updatedAt: Date.now()
    });
  }

  persistUserMaps();
  selectedGameMapId = savedId;
  setEditorSession({
    mode: 'saved',
    mapId: savedId,
    name,
    saveable: true
  });
  setEditorDirty(false);
  navigateTo('/maps');
}

function saveCurrentEditorMap() {
  if (!editorSession.saveable) {
    openEditorMessageModal({
      title: 'Read Only Map',
      message: 'Classic can be opened for inspection and export, but it cannot be saved over. Create a new map slot to save changes.',
      variant: 'error'
    });
    return;
  }

  const source = getEditorMapSource();
  try {
    validateMapData(source, { requirePlayable: true });
  } catch (error) {
    openEditorMessageModal({
      title: 'Map Not Ready',
      message: error.message,
      variant: 'error'
    });
    return;
  }

  const suggestedName = editorSession.name || `Custom ${String(userMaps.length + 1).padStart(2, '0')}`;
  openSaveNameModal(source, suggestedName);
}

function buildGameMaze() {
  gameMaze.clear();
  gameGhosts = [];

  const mapSource = getSelectedGameMap().source;

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
    startCountdown();
  } else {
    showGameOverOverlay();
  }
}

function completeLevel() {
  isLevelComplete = true;
  captureResolveTimer = 0;
  updateLivesUi();
  showVictoryOverlay();
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
  clearFloatingScores();
  pelletManager.reset();
  document.querySelector('#pellet-counter').textContent = pelletManager.getEatenCount();
  updateLivesUi();
  updateScoreUi();
  resetGameCharactersToSpawn(true);
  startCountdown();
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
function enterEditorMode() {
  if (isEditorMode) return;

  isEditorMode = true;

  const statusTab = document.querySelector('#mode-status');
  const toggleBtn = document.querySelector('#btn-toggle-mode');
  const gameBtn = document.querySelector('#btn-toggle-game');
  const editorUi = document.querySelector('#editor-ui');
  const editorControls = document.querySelector('#editor-only-controls');

  appContainer.classList.add('editor-active');
  appContainer.classList.remove('showroom-active');
  appContainer.classList.remove('route-overlay-active');
  
  statusTab.textContent = 'Editor';
  toggleBtn.textContent = 'Close Editor';
  editorUi.classList.add('active');
  editorControls.style.display = 'flex';
  gameBtn.style.display = 'none';
  
  gridHelper.visible = true;
  showcase.visible = false;
  editorMaze.visible = true;
  gameMaze.visible = false;

  // Studio Lighting Boost
  scene.fog.density = 0;
  ambient.intensity = 2.8;

  updateGhostPiece();
  controls.enabled = true;
  controls.enableRotate = true;
  controls.maxPolarAngle = Math.PI / 2;
  controls.minDistance = 5;
  camera.fov = DEFAULT_CAMERA_FOV;
  camera.updateProjectionMatrix();
  
  // Switch to Editor Camera
  camera.position.set(...EDITOR_VIEW.pos);
  controls.target.set(...EDITOR_VIEW.target);
  updateEditorSaveUi();
}

function exitEditorMode() {
  if (!isEditorMode) return;

  const hadUnsavedChanges = isEditorDirty;

  isEditorMode = false;

  const statusTab = document.querySelector('#mode-status');
  const toggleBtn = document.querySelector('#btn-toggle-mode');
  const gameBtn = document.querySelector('#btn-toggle-game');
  const editorUi = document.querySelector('#editor-ui');
  const editorControls = document.querySelector('#editor-only-controls');

  appContainer.classList.remove('editor-active');
  statusTab.textContent = 'Showcase';
  toggleBtn.textContent = 'Open Editor';
  editorUi.classList.remove('active');
  editorControls.style.display = 'none';
  gameBtn.style.display = 'block';
  
  gridHelper.visible = false;
  showcase.visible = true;
  editorMaze.visible = false;

  removeGhostPiece();
  if (isBirdseye) {
    toggleCamera('3d');
  }
  controls.maxPolarAngle = Math.PI / 2.12;
  controls.minDistance = 18;

  // Return to Gallery Camera
  scene.fog.density = 0.009;
  ambient.intensity = 1.4;
  camera.fov = DEFAULT_CAMERA_FOV;
  camera.updateProjectionMatrix();
  camera.position.set(...GALLERY_VIEW.pos);
  controls.target.set(...GALLERY_VIEW.target);

  if (hadUnsavedChanges) {
    showEditorToast('Editor closed without saving changes.');
  }
}

function setDevControlsVisible(visible) {
  appContainer.classList.toggle('dev-tools-active', visible);
}

function setGameStartOverlayVisible(visible) {
  isGameStartOverlayActive = Boolean(visible);
  const overlay = document.querySelector('#game-start-overlay');
  if (!overlay) return;

  overlay.classList.toggle('active', isGameStartOverlayActive);
  overlay.setAttribute('aria-hidden', isGameStartOverlayActive ? 'false' : 'true');

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) {
    pauseBtn.style.display = isGameStartOverlayActive ? 'none' : '';
  }

  // Trigger countdown when closing start overlay
  if (!isGameStartOverlayActive && isGameMode) {
    startCountdown();
  }
}

function enterGameMode(options = {}) {
  const isDevMode = Boolean(options.dev);
  const requestedGhostCount = Number(options.ghostCount);

  isGameMode = true;
  isGameStartOverlayActive = false;
  isGameLookBackActive = false;
  previousGameLookBackState = false;
  isJumpscareMode = Boolean(options.jumpscare);
  isCountdownActive = false;
  isGamePaused = false;
  hideCountdownUi();
  hideGameOverOverlay();
  hideVictoryOverlay();
  hidePauseOverlay();
  clearFloatingScores();

  const pauseBtn = document.querySelector('#btn-hud-pause');
  if (pauseBtn) {
    pauseBtn.style.display = !isDevMode ? 'none' : '';
  }

  if (Number.isInteger(requestedGhostCount)) {
    activeGhostCount = THREE.MathUtils.clamp(requestedGhostCount, 1, GHOST_DEFINITIONS.length);
  }
  const shouldStartGhostAi = !isDevMode;
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
  appContainer.classList.remove('showroom-active');
  appContainer.classList.remove('route-overlay-active');
  setDevControlsVisible(isDevMode);

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
  forEachGhost((entry) => {
    entry.ai.setEnabled(shouldStartGhostAi);
    if (shouldStartGhostAi) {
      prepareGhostHouseRelease(entry);
    }
  });
  updateGhostAiButton();

  gameCameraState.forward.copy(activeController.getFollowDirection());
  gameCameraState.reverseHoldForward.copy(gameCameraState.forward);
  gameCameraState.target.copy(activeController.getCameraTarget());
  gameCameraState.position.copy(camera.position);
  gameCameraState.isReversing = false;
  gameCameraState.reversalTimer = 0;
  gameCameraState.reverseSnapFramesRemaining = 0;
  updateGameCamera(1, true);
  setGameStartOverlayVisible(!isDevMode);
}

function exitGameMode() {
  if (!isGameMode) return;

  isGameMode = false;
  isCountdownActive = false;
  isGamePaused = false;
  hideCountdownUi();
  hideGameOverOverlay();
  hideVictoryOverlay();
  hidePauseOverlay();
  clearFloatingScores();
  setGameStartOverlayVisible(false);
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
  setDevControlsVisible(false);

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

function getMenuTrackPosition(d) {
  const w = MENU_TRACK_WIDTH;
  const h = MENU_TRACK_HEIGHT;
  const halfW = w / 2;
  const halfH = h / 2;
  const perimeter = 2 * (w + h);
  
  d = d % perimeter;
  if (d < 0) d += perimeter;

  if (d < w) {
    // Segment 0: Top edge (left to right)
    return {
      pos: new THREE.Vector3(-halfW + d, 0, -halfH),
      dir: new THREE.Vector3(1, 0, 0)
    };
  } else if (d < w + h) {
    // Segment 1: Right edge (top to bottom)
    const offset = d - w;
    return {
      pos: new THREE.Vector3(halfW, 0, -halfH + offset),
      dir: new THREE.Vector3(0, 0, 1)
    };
  } else if (d < 2 * w + h) {
    // Segment 2: Bottom edge (right to left)
    const offset = d - (w + h);
    return {
      pos: new THREE.Vector3(halfW - offset, 0, halfH),
      dir: new THREE.Vector3(-1, 0, 0)
    };
  } else {
    // Segment 3: Left edge (bottom to top)
    const offset = d - (2 * w + h);
    return {
      pos: new THREE.Vector3(-halfW, 0, halfH - offset),
      dir: new THREE.Vector3(0, 0, -1)
    };
  }
}

function initMenu3D() {
  const canvas = document.querySelector('#menu-3d-canvas');
  if (!canvas) return;

  const width = canvas.clientWidth || 560;
  const height = canvas.clientHeight || 400;

  menuScene = new THREE.Scene();

  menuCamera = new THREE.PerspectiveCamera(54, width / height, 0.1, 100);
  // Position camera overhead with a tilt to emphasize 3D depth, looking down at the center.
  menuCamera.position.set(0, 45.0, 8.0);
  menuCamera.up.set(0, 1, 0);
  menuCamera.lookAt(0, -1.0, 0);

  menuRenderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  menuRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  menuRenderer.setSize(width, height, false);
  menuRenderer.outputColorSpace = THREE.SRGBColorSpace;
  menuRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  menuRenderer.toneMappingExposure = 1.05;

  // Add lights
  const ambientLight = new THREE.AmbientLight(0x89adff, 0.8);
  menuScene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xffd21a, 2.2); // Neon yellow
  dirLight1.position.set(5, 15, 5);
  menuScene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x3b7cff, 1.6); // Electric blue
  dirLight2.position.set(-5, 10, -5);
  menuScene.add(dirLight2);

  // Spawn Pacman
  menuPacman = createPacman();
  menuPacman.scale.setScalar(0.45); // Shrink to miniature scale
  menuScene.add(menuPacman);

  // Spawn Scared Ghost (chased by Pacman)
  menuScaredGhost = createGhost(0x0022ff);
  menuScaredGhost.scale.setScalar(0.42);
  menuScaredGhost.setVulnerable(true);
  menuScene.add(menuScaredGhost);

  // Spawn Clyde (chasing Pacman)
  menuClyde = createGhost(0xff8822);
  menuClyde.scale.setScalar(0.42);
  menuScene.add(menuClyde);

  // Spawn pellets
  const perimeter = 2 * (MENU_TRACK_WIDTH + MENU_TRACK_HEIGHT);
  const pelletSpacing = 3.0;
  
  menuPellets = [];
  const addMenuPellet = (pDist) => {
    const pellet = createStandardPellet();
    pellet.scale.setScalar(1.4); // Standard pellet has radius 0.35. 1.4 makes it radius 0.49, perfect miniature.
    const info = getMenuTrackPosition(pDist);
    pellet.position.copy(info.pos);
    menuScene.add(pellet);
    
    menuPellets.push({
      mesh: pellet,
      dist: pDist,
      eaten: false
    });
  };

  const sideLengths = [
    MENU_TRACK_WIDTH,
    MENU_TRACK_HEIGHT,
    MENU_TRACK_WIDTH,
    MENU_TRACK_HEIGHT
  ];
  let sideStartDistance = 0;
  sideLengths.forEach((sideLength, sideIndex) => {
    const segmentCount = Math.max(1, Math.round(sideLength / pelletSpacing));
    for (let segmentIndex = 0; segmentIndex <= segmentCount; segmentIndex += 1) {
      if (sideIndex > 0 && segmentIndex === 0) continue;
      if (sideIndex === sideLengths.length - 1 && segmentIndex === segmentCount) continue;
      addMenuPellet(sideStartDistance + (sideLength * segmentIndex) / segmentCount);
    }
    sideStartDistance += sideLength;
  });

  menuElapsedTime = 0;
}

function updateMenu3D(time, deltaTime) {
  if (!menuScene || !menuPacman) return;

  menuElapsedTime += deltaTime;

  const perimeter = 2 * (MENU_TRACK_WIDTH + MENU_TRACK_HEIGHT);
  const pacmanDist = (menuElapsedTime * MENU_PACMAN_SPEED) % perimeter;

  // Position Pacman
  const info = getMenuTrackPosition(pacmanDist);
  menuPacman.position.copy(info.pos);

  // Look ahead to face direction of travel
  const lookAheadDist = pacmanDist + 0.15;
  const lookAheadInfo = getMenuTrackPosition(lookAheadDist);
  menuPacman.lookAt(lookAheadInfo.pos);

  // Update Pacman mouth chomping and eye blinking animations
  if (menuPacman.userData && menuPacman.userData.update) {
    menuPacman.userData.update(menuElapsedTime, deltaTime);
  }

  // Update Scared Ghost position and animation (30.0 units ahead of Pacman)
  if (menuScaredGhost) {
    const scaredDist = (pacmanDist + 30.0) % perimeter;
    const scaredInfo = getMenuTrackPosition(scaredDist);
    menuScaredGhost.position.copy(scaredInfo.pos);
    const scaredLookAheadDist = scaredDist + 0.15;
    const scaredLookAheadInfo = getMenuTrackPosition(scaredLookAheadDist);
    menuScaredGhost.lookAt(scaredLookAheadInfo.pos);
    if (menuScaredGhost.userData && menuScaredGhost.userData.update) {
      menuScaredGhost.userData.update(menuElapsedTime);
    }
  }

  // Update Clyde position and animation (30.0 units behind Pacman)
  if (menuClyde) {
    const clydeDist = (pacmanDist - 30.0 + perimeter) % perimeter;
    const clydeInfo = getMenuTrackPosition(clydeDist);
    menuClyde.position.copy(clydeInfo.pos);
    const clydeLookAheadDist = clydeDist + 0.15;
    const clydeLookAheadInfo = getMenuTrackPosition(clydeLookAheadDist);
    menuClyde.lookAt(clydeLookAheadInfo.pos);
    if (menuClyde.userData && menuClyde.userData.update) {
      menuClyde.userData.update(menuElapsedTime);
    }
  }

  // Update pellets (floating and eating collision)
  menuPellets.forEach((p) => {
    let diff = pacmanDist - p.dist;
    if (diff < 0) diff += perimeter;

    // Collision check: if Pacman is close to the pellet
    const distToPacman = p.mesh.position.distanceTo(menuPacman.position);
    if (distToPacman < 2.3) {
      if (!p.eaten) {
        p.eaten = true;
        p.mesh.visible = false;
      }
    }

    // Respawn pellet: if Pacman has moved past the pellet and is far enough away (beyond Clyde).
    if (diff > 33.0 && diff < perimeter - 1.5) {
      if (p.eaten) {
        p.eaten = false;
        p.mesh.visible = true;
      }
    }

    // Run standard pellet floating animation
    if (p.mesh.userData && p.mesh.userData.update) {
      p.mesh.userData.update(menuElapsedTime);
    }
  });

  // Render the menu scene
  menuRenderer.render(menuScene, menuCamera);
}

function resizeMenu3D() {
  if (!menuRenderer || !menuCamera) return;
  const canvas = document.querySelector('#menu-3d-canvas');
  if (!canvas) return;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  menuCamera.aspect = width / height;
  menuCamera.updateProjectionMatrix();
  menuRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  menuRenderer.setSize(width, height, false);
}

function getMapTileBounds(mapSource) {
  const xs = mapSource.map((piece) => piece.position[0]);
  const zs = mapSource.map((piece) => piece.position[2]);

  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minZ: Math.min(...zs),
    maxZ: Math.max(...zs)
  };
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawOctagon(ctx, x, y, radius) {
  const sides = 8;
  ctx.beginPath();
  for (let index = 0; index < sides; index += 1) {
    const angle = Math.PI / 8 + index * (Math.PI * 2 / sides);
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (index === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawEmptyMapThumbnail(canvas) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);
  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, '#020614');
  background.addColorStop(1, '#050b1d');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.42;
  ctx.strokeStyle = 'rgba(51, 102, 255, 0.14)';
  ctx.lineWidth = 1;
  for (let x = 24; x < width; x += 28) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 24; y < height; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'rgba(136, 178, 255, 0.22)';
  ctx.font = '700 15px Trebuchet MS, sans-serif';
  ctx.letterSpacing = '2px';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('EMPTY SLOT', width / 2, height / 2);
  ctx.restore();
}

function drawMapThumbnail(canvas, mapSource) {
  if (!mapSource) {
    drawEmptyMapThumbnail(canvas);
    return;
  }

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const bounds = getMapTileBounds(mapSource);
  const mapWidth = Math.max(TILE_SIZE, bounds.maxX - bounds.minX + TILE_SIZE);
  const mapHeight = Math.max(TILE_SIZE, bounds.maxZ - bounds.minZ + TILE_SIZE);
  const padding = 22;
  const scale = Math.min(
    (width - padding * 2) / mapWidth,
    (height - padding * 2) / mapHeight
  );
  const centerX = (bounds.minX + bounds.maxX) / 2;
  const centerZ = (bounds.minZ + bounds.maxZ) / 2;

  const toCanvas = (x, z) => ({
    x: width / 2 + (x - centerX) * scale,
    y: height / 2 + (z - centerZ) * scale
  });

  ctx.clearRect(0, 0, width, height);
  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, '#020614');
  background.addColorStop(1, '#050b1d');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = 'rgba(51, 102, 255, 0.16)';
  ctx.lineWidth = 1;
  for (let x = 24; x < width; x += 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 24; y < height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  mapSource.forEach((piece) => {
    const center = toCanvas(piece.position[0], piece.position[2]);
    const radius = TILE_SIZE * scale * (piece.type === 'ghostchamber' ? 0.52 : 0.46);

    drawOctagon(ctx, center.x, center.y, radius);
    ctx.fillStyle = piece.type === 'ghostchamber'
      ? 'rgba(255, 68, 187, 0.22)'
      : 'rgba(24, 63, 155, 0.55)';
    ctx.shadowColor = piece.type === 'ghostchamber'
      ? 'rgba(255, 68, 187, 0.45)'
      : 'rgba(51, 102, 255, 0.45)';
    ctx.shadowBlur = 12;
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = piece.type === 'ghostchamber'
      ? 'rgba(255, 68, 187, 0.55)'
      : 'rgba(51, 102, 255, 0.28)';
    ctx.stroke();
  });
  ctx.restore();

  const pipeSegments = [];

  mapSource.forEach((piece) => {
    if (piece.type === 'ghostchamber') return;

    const graphPiece = {
      type: piece.type,
      rotation: piece.rotation,
      position: piece.position
    };
    const center = toCanvas(piece.position[0], piece.position[2]);
    const connectors = PIECE_CONNECTORS[piece.type] || [];

    connectors.forEach((connector) => {
      const absoluteDirection = getGraphAbsoluteDirections([connector], graphPiece.rotation)[0];
      const direction = DIRECTIONS[absoluteDirection];
      if (!direction) return;
      const end = toCanvas(
        piece.position[0] + direction.x * TILE_SIZE * 0.48,
        piece.position[2] + direction.z * TILE_SIZE * 0.48
      );

      pipeSegments.push({ from: center, to: end });
    });
  });

  [
    { width: Math.max(22, TILE_SIZE * scale * 0.78), color: 'rgba(0, 34, 255, 0.2)', blur: 18 },
    { width: Math.max(15, TILE_SIZE * scale * 0.54), color: 'rgba(0, 75, 255, 0.72)', blur: 12 },
    { width: Math.max(8, TILE_SIZE * scale * 0.28), color: '#0b62ff', blur: 4 },
    { width: Math.max(3, TILE_SIZE * scale * 0.08), color: 'rgba(120, 178, 255, 0.9)', blur: 0 }
  ].forEach((pass) => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = pass.color;
    ctx.shadowBlur = pass.blur;
    ctx.strokeStyle = pass.color;
    ctx.lineWidth = pass.width;
    pipeSegments.forEach((segment) => {
      ctx.beginPath();
      ctx.moveTo(segment.from.x, segment.from.y);
      ctx.lineTo(segment.to.x, segment.to.y);
      ctx.stroke();
    });
    ctx.restore();
  });

  ctx.save();
  mapSource
    .filter((piece) => piece.type === 'ghostchamber')
    .forEach((piece) => {
      const center = toCanvas(piece.position[0], piece.position[2]);
      const size = TILE_SIZE * scale * 0.68;
      drawRoundedRect(ctx, center.x - size / 2, center.y - size / 2, size, size, 8);
      ctx.fillStyle = 'rgba(255, 68, 187, 0.24)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 68, 187, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

  mapSource.forEach((piece) => {
    const center = toCanvas(piece.position[0], piece.position[2]);
    if (piece.hasPowerPellet) {
      ctx.beginPath();
      ctx.fillStyle = '#ffaa00';
      ctx.shadowColor = 'rgba(255, 170, 0, 0.95)';
      ctx.shadowBlur = 12;
      ctx.arc(center.x, center.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }

    if (piece.hasPacmanSpawn) {
      ctx.beginPath();
      ctx.fillStyle = '#ffd91f';
      ctx.shadowColor = 'rgba(255, 217, 31, 0.95)';
      ctx.shadowBlur = 10;
      ctx.moveTo(center.x + 7, center.y);
      ctx.arc(center.x, center.y, 7, 0.3, Math.PI * 1.7);
      ctx.closePath();
      ctx.fill();
    }
  });
  ctx.restore();
}

function renderMapPicker() {
  const grid = document.querySelector('#map-picker-grid');
  if (!grid) return;
  const playableMaps = getPlayableMaps();
  const cards = [
    ...playableMaps,
    ...Array.from({ length: Math.max(0, 3 - playableMaps.length) }, (_, index) => ({
      id: `empty-${index}`,
      name: 'Empty Slot',
      source: null,
      disabled: true
    }))
  ].slice(0, 3);

  grid.innerHTML = cards.map((map) => `
    <button class="map-card${map.id === selectedGameMapId ? ' selected' : ''}${map.disabled ? ' disabled' : ''}" data-map-id="${map.id}" ${map.disabled ? 'disabled' : ''}>
      <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
      <span class="map-card-name">${map.name}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.map-card').forEach((card) => {
    const map = cards.find((entry) => entry.id === card.dataset.mapId);
    const canvas = card.querySelector('canvas');
    drawMapThumbnail(canvas, map.source);
    if (map.disabled) return;
    card.addEventListener('click', () => {
      selectedGameMapId = map.id;
      grid.querySelectorAll('.map-card').forEach((item) => item.classList.toggle('selected', item === card));
    });
    card.addEventListener('dblclick', () => {
      navigateTo('/game', {
        query: {
          map: selectedGameMapId,
          dev: document.querySelector('#map-dev-toggle')?.checked ? 1 : false
        }
      });
    });
  });
}

function renderMapManager() {
  const grid = document.querySelector('#map-manager-grid');
  if (!grid) return;

  const cards = [
    ...BUILT_IN_MAPS.map((map) => ({
      ...map,
      action: 'template',
      readonly: true
    })),
    ...userMaps.map((map) => ({
      ...map,
      action: 'edit'
    }))
  ];

  if (userMaps.length < MAX_USER_MAPS) {
    cards.push({
      id: 'new',
      name: 'New Map',
      action: 'new',
      source: null
    });
  }

  while (cards.length < 3) {
    cards.push({
      id: `empty-${cards.length}`,
      name: 'Empty Slot',
      action: 'empty',
      source: null,
      disabled: true
    });
  }

  grid.innerHTML = cards.slice(0, 3).map((map) => {
    if (map.action === 'new') {
      return `
        <button class="manager-create-card" data-action="new" type="button">
          <span class="manager-plus">+</span>
          <span class="manager-create-label">New Map</span>
        </button>
      `;
    }

    return `
      <button class="manager-map-card${map.disabled ? ' disabled' : ''}" data-map-id="${escapeHtml(map.id)}" data-action="${map.action}" ${map.disabled ? 'disabled' : ''} type="button">
        <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
        <span class="map-card-name">${escapeHtml(map.name)}</span>
        ${map.disabled ? '' : `
          <span class="manager-card-hover" aria-hidden="true">
            ${map.readonly ? `
              <svg viewBox="0 0 24 24"><path d="M8 7V5.8a4 4 0 0 1 8 0V7"/><rect x="5" y="9" width="14" height="11" rx="2"/><path d="M12 13v3"/></svg>
            ` : `
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="m16.5 3.5 3 3L8 18l-4 1 1-4Z"/></svg>
            `}
          </span>
        `}
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.manager-map-card').forEach((card) => {
    const map = cards.find((entry) => entry.id === card.dataset.mapId);
    const canvas = card.querySelector('canvas');
    drawMapThumbnail(canvas, map?.source);
  });
}

function updateMapGhostStepper() {
  const value = document.querySelector('#map-ghost-count');
  const minus = document.querySelector('#btn-ghost-count-minus');
  const plus = document.querySelector('#btn-ghost-count-plus');

  if (value) value.textContent = selectedMapGhostCount;
  if (minus) minus.disabled = selectedMapGhostCount <= 1;
  if (plus) plus.disabled = selectedMapGhostCount >= GHOST_DEFINITIONS.length;
}

function enterMenuScreen() {
  appContainer.classList.add('landing-active');
  appContainer.classList.remove('showroom-active');
  appContainer.classList.remove('route-overlay-active');
  document.querySelector('#mode-status').textContent = 'Showcase';
  showcase.visible = true;
  editorMaze.visible = false;
  gameMaze.visible = false;
  gridHelper.visible = false;
  controls.enabled = true;
  controls.enableRotate = true;
  controls.maxPolarAngle = Math.PI / 2.12;
  controls.minDistance = 18;
  scene.fog.density = 0.009;
  ambient.intensity = 1.4;
  camera.fov = DEFAULT_CAMERA_FOV;
  camera.updateProjectionMatrix();
  camera.position.set(...GALLERY_VIEW.pos);
  controls.target.set(...GALLERY_VIEW.target);
}

function exitMenuScreen() {
  appContainer.classList.remove('landing-active');
}

function enterShowroomScreen() {
  appContainer.classList.remove('landing-active');
  appContainer.classList.remove('route-overlay-active');
  appContainer.classList.add('showroom-active');
  document.querySelector('#mode-status').textContent = 'Showcase';
  showcase.visible = true;
  editorMaze.visible = false;
  gameMaze.visible = false;
  gridHelper.visible = false;
  controls.enabled = true;
  controls.enableRotate = true;
  controls.maxPolarAngle = Math.PI / 2.12;
  controls.minDistance = 18;
  scene.fog.density = 0.009;
  ambient.intensity = 1.4;
  camera.fov = DEFAULT_CAMERA_FOV;
  camera.updateProjectionMatrix();
  camera.position.set(...GALLERY_VIEW.pos);
  controls.target.set(...GALLERY_VIEW.target);
}

function exitShowroomScreen() {
  appContainer.classList.remove('showroom-active');
}

function enterMapSelectScreen() {
  enterShowroomScreen();
  appContainer.classList.add('route-overlay-active');
  document.querySelector('#map-select-screen').classList.add('active');
  renderMapPicker();
  updateMapGhostStepper();
  appContainer.classList.remove('showroom-active');
}

function exitMapSelectScreen() {
  appContainer.classList.remove('route-overlay-active');
  document.querySelector('#map-select-screen').classList.remove('active');
}

function enterMapManagerScreen() {
  enterShowroomScreen();
  appContainer.classList.add('route-overlay-active');
  document.querySelector('#map-manager-screen').classList.add('active');
  renderMapManager();
  appContainer.classList.remove('showroom-active');
}

function exitMapManagerScreen() {
  appContainer.classList.remove('route-overlay-active');
  document.querySelector('#map-manager-screen').classList.remove('active');
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

document.querySelector('#btn-toggle-mode').addEventListener('click', () => {
  if (isEditorMode && isEditorDirty) {
    openEditorDiscardConfirmation(() => {
      navigateTo('/showroom');
    });
  } else {
    navigateTo(isEditorMode ? '/showroom' : '/maps');
  }
});
document.querySelector('#btn-toggle-game').addEventListener('click', () => {
  navigateTo(isGameMode ? '/menu' : '/play/maps');
});
document.querySelector('#btn-menu-start').addEventListener('click', () => navigateTo('/play/maps'));
document.querySelector('#btn-menu-editor').addEventListener('click', () => navigateTo('/maps'));
document.querySelector('#btn-menu-showroom').addEventListener('click', () => navigateTo('/showroom'));
document.querySelector('#btn-showroom-menu').addEventListener('click', () => navigateTo('/menu'));
document.querySelector('#btn-showroom-play').addEventListener('click', () => navigateTo('/play/maps'));
document.querySelector('#btn-showroom-create').addEventListener('click', () => navigateTo('/maps'));
document.querySelector('#btn-map-select-back').addEventListener('click', () => navigateTo('/menu'));
document.querySelector('#btn-map-select-start').addEventListener('click', () => {
  navigateTo('/game', {
    query: {
      map: selectedGameMapId,
      dev: document.querySelector('#map-dev-toggle')?.checked ? 1 : false,
      jumpscare: document.querySelector('#map-jumpscare-toggle')?.checked ? 1 : false,
      ghosts: selectedMapGhostCount
    }
  });
});
document.querySelector('#btn-ghost-count-minus').addEventListener('click', () => {
  selectedMapGhostCount = Math.max(1, selectedMapGhostCount - 1);
  updateMapGhostStepper();
});
document.querySelector('#btn-ghost-count-plus').addEventListener('click', () => {
  selectedMapGhostCount = Math.min(GHOST_DEFINITIONS.length, selectedMapGhostCount + 1);
  updateMapGhostStepper();
});
document.querySelector('#btn-map-manager-back').addEventListener('click', () => navigateTo('/menu'));
document.querySelector('#map-manager-grid').addEventListener('click', (event) => {
  const card = event.target.closest('[data-action]');
  if (!card) return;

  const action = card.dataset.action;
  if (action === 'new') {
    openEditorForNewMap();
    return;
  }

  const map = getMapById(card.dataset.mapId);
  if (action === 'template') {
    openEditorForBuiltInMap(map);
  } else if (action === 'edit') {
    openEditorForSavedMap(map);
  }
});
document.querySelector('#btn-save-map').addEventListener('click', saveCurrentEditorMap);
document.querySelector('#btn-editor-save-cancel').addEventListener('click', closeEditorSaveModal);
document.querySelector('#btn-editor-save-confirm').addEventListener('click', () => {
  const modal = document.querySelector('#editor-save-modal');
  if (modal?.dataset.variant === 'confirm-discard') {
    closeEditorSaveModal();
    if (pendingDiscardAction) {
      pendingDiscardAction();
      pendingDiscardAction = null;
    }
    return;
  }
  if (modal?.dataset.variant !== 'save') {
    closeEditorSaveModal();
    return;
  }

  const input = document.querySelector('#editor-save-name-input');
  const errorEl = document.querySelector('#editor-save-modal-error');
  const name = input?.value.trim() || '';
  if (!name) {
    if (errorEl) errorEl.textContent = 'Map name is required.';
    input?.focus();
    return;
  }

  const source = pendingSaveModalPayload?.source;
  if (!source) {
    closeEditorSaveModal();
    openEditorMessageModal({
      title: 'Save Failed',
      message: 'The editor lost the pending map data. Open the save action again.',
      variant: 'error'
    });
    return;
  }
  closeEditorSaveModal();
  commitEditorMapSave(source, name);
});
document.querySelector('#editor-save-name-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('#btn-editor-save-confirm').click();
  }
});
document.querySelector('#editor-save-modal').addEventListener('click', (event) => {
  if (event.target === document.querySelector('#editor-save-modal')) {
    closeEditorSaveModal();
  }
});

// --- Overlay Event Listeners ---
document.querySelector('#btn-game-over-retry').addEventListener('click', () => {
  hideGameOverOverlay();
  restartGameRun();
});

document.querySelector('#btn-game-over-menu').addEventListener('click', () => {
  hideGameOverOverlay();
  navigateTo('/menu');
});

document.querySelector('#btn-game-victory-retry').addEventListener('click', () => {
  hideVictoryOverlay();
  restartGameRun();
});

document.querySelector('#btn-game-victory-menu').addEventListener('click', () => {
  hideVictoryOverlay();
  navigateTo('/menu');
});

document.querySelector('#btn-game-pause-resume').addEventListener('click', () => {
  hidePauseOverlay();
});

document.querySelector('#btn-game-pause-controls').addEventListener('click', () => {
  const mainActions = document.querySelector('#pause-main-actions');
  const controlsPanel = document.querySelector('#pause-controls-panel');
  if (mainActions) mainActions.style.display = 'none';
  if (controlsPanel) controlsPanel.style.display = 'flex';
});

document.querySelector('#btn-game-pause-controls-back').addEventListener('click', () => {
  const controlsPanel = document.querySelector('#pause-controls-panel');
  const mainActions = document.querySelector('#pause-main-actions');
  if (controlsPanel) controlsPanel.style.display = 'none';
  if (mainActions) mainActions.style.display = 'flex';
});

document.querySelector('#btn-game-pause-menu').addEventListener('click', () => {
  hidePauseOverlay();
  navigateTo('/menu');
});

document.querySelector('#btn-hud-pause').addEventListener('click', (e) => {
  e.target.blur();
  if (!isGameMode || isGamePaused || isGameOver || isLevelComplete) return;
  showPauseOverlay();
});

registerRoutes({
  '/menu': {
    enter: enterMenuScreen,
    exit: exitMenuScreen
  },
  '/showroom': {
    enter: enterShowroomScreen,
    exit: exitShowroomScreen
  },
  '/play/maps': {
    enter: enterMapSelectScreen,
    exit: exitMapSelectScreen
  },
  '/game': {
    enter: (route) => {
      if (route.query.map) {
        selectedGameMapId = route.query.map;
      }
      enterGameMode({
        dev: route.query.dev === '1' || route.query.dev === 'true',
        jumpscare: route.query.jumpscare === '1' || route.query.jumpscare === 'true',
        ghostCount: route.query.ghosts
      });
    },
    update: (route) => setDevControlsVisible(route.query.dev === '1' || route.query.dev === 'true'),
    exit: exitGameMode
  },
  '/maps': {
    enter: enterMapManagerScreen,
    exit: exitMapManagerScreen
  },
  '/editor': {
    enter: enterEditorMode,
    exit: exitEditorMode
  }
}, { fallbackRoute: '/menu' });

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

document.querySelector('#btn-game-start').addEventListener('click', () => {
  setGameStartOverlayVisible(false);
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
      document.querySelector('#import-modal').classList.contains('active') ||
      document.querySelector('#editor-save-modal').classList.contains('active')) return;

  const key = e.key.toLowerCase();

  // --- Capture Tool ---
  if (key === 'c') {
    window.getCameraConfig();
  }

  if (isGameMode) {
    if (isGamePaused) {
      if (key === 'escape' || key === 'p') {
        e.preventDefault();
        hidePauseOverlay();
      }
      return;
    }

    // Toggle pause with Escape or P key if game is not paused and not game over/level complete.
    if ((key === 'escape' || key === 'p') && !(isGameOver || isLevelComplete)) {
      e.preventDefault();
      showPauseOverlay();
      return;
    }

    if (isGameStartOverlayActive) {
      if (key === 'enter' || key === ' ') {
        e.preventDefault();
        setGameStartOverlayVisible(false);
      } else {
        e.preventDefault();
      }
      return;
    }

    if (isCountdownActive) {
      return;
    }

    if (isGameOver || isLevelComplete) {
      if (key === 'escape') {
        navigateTo('/menu');
      }
      return;
    }

    if (isCaptureResolving()) {
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
      if (!appContainer.classList.contains('dev-tools-active')) return;
      document.querySelector('#btn-swap-puppet')?.click();
      return;
    }

    if (key === 'escape') {
      navigateTo('/menu');
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
      if (offset.lengthSq() > 0) setEditorDirty(true);
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
      document.querySelector('#import-modal').classList.contains('active') ||
      document.querySelector('#editor-save-modal').classList.contains('active')) return;
  
  // Prevent placing pieces when clicking UI elements
  if (e.target.closest('.bottom-bar') || 
      e.target.closest('.left-bar') || 
      e.target.closest('.top-controls') || 
      e.target.closest('#command-deck') || 
      e.target.closest('#btn-save-map') ||
      e.target.closest('#export-modal') ||
      e.target.closest('#import-modal') ||
      e.target.closest('#editor-save-modal')) {
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
    
    if (!existing || !validTypes.includes(existing.userData.type)) {
      return;
    }

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
    setEditorDirty(true);
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
  setEditorDirty(true);
}

function deletePieceAtCursor() {
  const pos = getGridIntersection();
  if (!pos) return;
  const existing = editorMaze.children.find(c => c.position.x === pos.x && c.position.z === pos.z);
  if (existing) {
    editorMaze.remove(existing);
    setEditorDirty(true);
  }
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
    validateMapData(data);
    loadMapIntoEditor(data, { markDirty: true });
    
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
  const saveButton = document.querySelector('#btn-save-map');
  
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
    if (saveButton) saveButton.style.display = 'none';
    
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
  if (offset.lengthSq() > 0) setEditorDirty(true);
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
  const saveButton = document.querySelector('#btn-save-map');
  
  if (bottomBar) bottomBar.style.display = 'flex';
  if (cameraToggle) cameraToggle.style.display = 'flex';
  if (zoomSlider) zoomSlider.style.display = 'flex';
  if (exportImportContainer) exportImportContainer.style.display = 'flex';
  if (saveButton) saveButton.style.display = '';
  
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
    if (isGamePaused) {
      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });
      pelletManager.update(elapsedTime);
      updateGameCamera(deltaTime, false);
    } else if (isGameStartOverlayActive) {
      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });
      pelletManager.update(elapsedTime);
      updateGameCamera(deltaTime, false);
    } else if (isGameOver || isLevelComplete) {
      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });
      pelletManager.update(elapsedTime);
      updatePowerPelletState(deltaTime);
      updateGhostRespawn(deltaTime);
      updateGameCamera(deltaTime, false);
    } else if (isCountdownActive) {
      updateCountdown(deltaTime);
      if (gamePacman?.userData.update) gamePacman.userData.update(elapsedTime, deltaTime);
      forEachGhost((entry) => {
        if (entry.model.visible && entry.model.userData.update) entry.model.userData.update(elapsedTime);
      });
      pelletManager.update(elapsedTime);
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
    if (!isGamePaused) {
      updateFloatingScores(deltaTime);
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

  // --- 3D Landing Menu Update Loop ---
  const isLandingMenuVisible = appContainer.classList.contains('landing-active');
  if (isLandingMenuVisible) {
    if (!menuScene) {
      initMenu3D();
    }
    updateMenu3D(elapsedTime, deltaTime);
    requestAnimationFrame(animate);
    return;
  } else {
    if (menuScene) {
      if (menuRenderer) menuRenderer.dispose();
      menuScene = null;
      menuCamera = null;
      menuRenderer = null;
      menuPacman = null;
      menuScaredGhost = null;
      menuClyde = null;
      menuPellets = [];
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
  resizeMenu3D();
});
