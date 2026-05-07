/**
 * OpenAI. (2026). ChatGPT (GPT-5.4) [Large language model]. https://chat.openai.com
 * Google. (2026). Gemini [Large language model]. https://gemini.google.com
 * 
 * The procedural generation logic and architectural modular design in this file 
 * were co-authored with AI assistants to create the showroom gallery experience.
 */

import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const TILE_SIZE = 18;

const HUB_HEIGHT = 3.2;
const PIPE_RADIUS = 2.55;
const HALF_SPAN = TILE_SIZE / 2;
const PEDESTAL_RADIUS = 8.8;
const WALKWAY_DEPTH = PIPE_RADIUS * 1.2;
const CORNER_BEND_RADIUS = PIPE_RADIUS * 1.4;
const JUNCTION_CLEAR_RADIUS = PIPE_RADIUS * 1.08;
const PIPE_SHELL_THICKNESS = 0.22;

const PIECE_CONNECTORS = {
  straight: ['north', 'south'],
  corner: ['north', 'east'],
  tjunction: ['north', 'east', 'west'],
  crossroad: ['north', 'east', 'south', 'west'],
  teleport: ['east', 'west'],
  ghostchamber: ['north']
};

export const showcaseLayout = [
  { type: 'straight', position: [-24, 0, -6], rotation: Math.PI / 2 },
  { type: 'corner', position: [-10, 0, 15], rotation: Math.PI / 2 },
  { type: 'crossroad', position: [12, 0, 15], rotation: 0 },
  { type: 'tjunction', position: [26, 0, -5], rotation: Math.PI },
  { type: 'teleport', position: [1, 0, -22], rotation: 0 },
  { type: 'ghostchamber', position: [0, 0, 0], rotation: 0 }
];

const sharedMaterials = createMaterials();
const sharedGeometries = createGeometries();
const junctionShellGeometryCache = new Map();

function createMaterials() {
  return {
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xe0f4ff,
      transmission: 0.98,
      thickness: PIPE_SHELL_THICKNESS,
      roughness: 0.04,
      metalness: 0.02,
      ior: 1.48,
      reflectivity: 0.5,
      transparent: true,
      side: THREE.DoubleSide,
      attenuationColor: 0xffffff,
      attenuationDistance: 0.8
    }),
    rim: new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      emissive: 0x0f34a0,
      emissiveIntensity: 0.6,
      roughness: 0.24,
      metalness: 0.4
    }),
    structure: new THREE.MeshStandardMaterial({
      color: 0x151f2f,
      emissive: 0x050b14,
      roughness: 0.64,
      metalness: 0.2
    }),
    walkway: new THREE.MeshStandardMaterial({
      color: 0x3a4557,
      emissive: 0x0c1322,
      roughness: 0.76,
      metalness: 0.08
    }),
    led: new THREE.MeshStandardMaterial({
      color: 0x2c64ff,
      emissive: 0x1644f2,
      emissiveIntensity: 2.1,
      roughness: 0.14,
      metalness: 0.08
    }),
    halo: new THREE.MeshBasicMaterial({
      color: 0x1d4aff,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    }),
    ledGlow: new THREE.MeshBasicMaterial({
      color: 0x1941d4,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide
    }),
    teleport: new THREE.MeshStandardMaterial({
      color: 0x8cefff,
      emissive: 0x46e2ff,
      emissiveIntensity: 1.55,
      transparent: true,
      opacity: 0.66,
      roughness: 0.12,
      metalness: 0.08
    })
  };
}

function createGeometries() {
  return {
    pedestalBase: new THREE.CylinderGeometry(PEDESTAL_RADIUS, PEDESTAL_RADIUS + 0.6, 1.35, 10),
    pedestalTop: new THREE.CylinderGeometry(PEDESTAL_RADIUS - 1.1, PEDESTAL_RADIUS - 0.45, 0.36, 10),
    pedestalHalo: new THREE.CircleGeometry(PEDESTAL_RADIUS + 0.85, 28),
    hubDeck: new THREE.CylinderGeometry(PIPE_RADIUS * 1.02, PIPE_RADIUS * 1.08, 0.18, 18),
    rimRing: new THREE.TorusGeometry(PIPE_RADIUS + 0.02, 0.12, 8, 24),
    hubHalo: new THREE.TorusGeometry(PIPE_RADIUS * 0.76, 0.08, 8, 20),
    pipeShell: new THREE.CylinderGeometry(PIPE_RADIUS, PIPE_RADIUS, HALF_SPAN, 20, 1, true),
    walkwayX: new THREE.BoxGeometry(HALF_SPAN, 0.18, WALKWAY_DEPTH * 1.34),
    walkwayZ: new THREE.BoxGeometry(WALKWAY_DEPTH * 1.34, 0.18, HALF_SPAN),
    ledStripX: new THREE.BoxGeometry(HALF_SPAN * 0.98, 0.06, 0.18),
    ledStripZ: new THREE.BoxGeometry(0.18, 0.06, HALF_SPAN * 0.98),
    ledGlowX: new THREE.PlaneGeometry(HALF_SPAN * 0.98, 0.95),
    ledGlowZ: new THREE.PlaneGeometry(0.95, HALF_SPAN * 0.98),
    portalRing: new THREE.TorusGeometry(PIPE_RADIUS * 0.9, 0.14, 10, 24),
    portalFace: new THREE.CircleGeometry(PIPE_RADIUS * 0.72, 20)
  };
}

function setPulse(mesh, base, amplitude, speed, phase = Math.random() * Math.PI * 2) {
  mesh.userData.pulse = { base, amplitude, speed, phase };
  return mesh;
}

function axisForDirection(direction) {
  return direction === 'east' || direction === 'west' ? 'x' : 'z';
}

function directionSign(direction) {
  return direction === 'east' || direction === 'south' ? 1 : -1;
}

function orientAlongAxis(object, axis) {
  object.rotation.set(0, 0, 0);

  if (axis === 'x') {
    object.rotation.z = Math.PI / 2;
  } else {
    object.rotation.x = Math.PI / 2;
  }
}

function createTransformedCylinderGeometry(axis, length, radius, openEnded, position, segments = 24, heightSegments = 1) {
  const geometry = new THREE.CylinderGeometry(radius, radius, length, segments, heightSegments, openEnded);
  const mesh = new THREE.Mesh(geometry);
  orientAlongAxis(mesh, axis);
  mesh.position.copy(position);
  mesh.updateMatrixWorld(true);
  geometry.applyMatrix4(mesh.matrixWorld);
  geometry.deleteAttribute('uv');
  return geometry;
}

export function createPedestal() {
  const pedestal = new THREE.Group();

  const base = new THREE.Mesh(sharedGeometries.pedestalBase, sharedMaterials.structure);
  base.position.y = -0.24;

  const upperDeck = new THREE.Mesh(sharedGeometries.pedestalTop, sharedMaterials.walkway);
  upperDeck.position.y = 0.44;

  const halo = new THREE.Mesh(sharedGeometries.pedestalHalo, sharedMaterials.halo);
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = 0.052;

  pedestal.add(base, upperDeck, halo);
  return pedestal;
}

function createHub() {
  const hub = new THREE.Group();

  const deck = new THREE.Mesh(sharedGeometries.hubDeck, sharedMaterials.walkway);
  deck.position.y = HUB_HEIGHT - PIPE_RADIUS + 0.14;

  const halo = setPulse(new THREE.Mesh(sharedGeometries.hubHalo, sharedMaterials.led), 1.2, 0.18, 1.3);
  halo.position.y = HUB_HEIGHT - PIPE_RADIUS + 0.22;
  halo.rotation.x = Math.PI / 2;

  hub.add(deck, halo);
  return hub;
}

function createEndRing(axis, position) {
  const ring = new THREE.Mesh(sharedGeometries.rimRing, sharedMaterials.rim);
  ring.position.copy(position);

  if (axis === 'x') {
    ring.rotation.y = Math.PI / 2;
  }

  return ring;
}

function createWalkway(axis, sign, length = HALF_SPAN, startOffset = 0) {
  const walkwayGeometry =
    axis === 'x'
      ? new THREE.BoxGeometry(length, 0.18, WALKWAY_DEPTH * 1.34)
      : new THREE.BoxGeometry(WALKWAY_DEPTH * 1.34, 0.18, length);
  const walkway = new THREE.Mesh(walkwayGeometry, sharedMaterials.walkway);
  const centerOffset = startOffset + length * 0.5;

  if (axis === 'x') {
    walkway.position.set(sign * centerOffset, HUB_HEIGHT - PIPE_RADIUS + 0.14, 0);
  } else {
    walkway.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.14, sign * centerOffset);
  }

  return walkway;
}

function createLedStrips(axis, sign, length = HALF_SPAN, startOffset = 0) {
  const strips = new THREE.Group();
  const stripGeometry =
    axis === 'x'
      ? new THREE.BoxGeometry(length * 0.98, 0.06, 0.18)
      : new THREE.BoxGeometry(0.18, 0.06, length * 0.98);
  const glowGeometry =
    axis === 'x'
      ? new THREE.PlaneGeometry(length * 0.98, 0.95)
      : new THREE.PlaneGeometry(0.95, length * 0.98);
  const centerOffset = startOffset + length * 0.5;

  [-1, 1].forEach((side) => {
    const strip = setPulse(new THREE.Mesh(stripGeometry, sharedMaterials.led), 1.4, 0.34, 1.2, side);
    const glow = new THREE.Mesh(glowGeometry, sharedMaterials.ledGlow);

    if (axis === 'x') {
      strip.position.set(sign * centerOffset, HUB_HEIGHT - PIPE_RADIUS + 0.3, side * 1.08);
      glow.position.set(sign * centerOffset, HUB_HEIGHT - PIPE_RADIUS + 0.14, side * 1.02);
    } else {
      strip.position.set(side * 1.08, HUB_HEIGHT - PIPE_RADIUS + 0.3, sign * centerOffset);
      glow.position.set(side * 1.02, HUB_HEIGHT - PIPE_RADIUS + 0.14, sign * centerOffset);
    }

    glow.rotation.x = -Math.PI / 2;
    strips.add(strip, glow);
  });

  return strips;
}

function createPipeSegment(direction, options = {}) {
  const group = new THREE.Group();
  const axis = axisForDirection(direction);
  const sign = directionSign(direction);
  const length = options.length ?? HALF_SPAN;
  const startOffset = options.startOffset ?? 0;
  const offset = startOffset + length * 0.5;

  const shell = new THREE.Mesh(new THREE.CylinderGeometry(PIPE_RADIUS, PIPE_RADIUS, length, 20, 1, true), sharedMaterials.glass);
  orientAlongAxis(shell, axis);

  if (axis === 'x') {
    shell.position.set(sign * offset, HUB_HEIGHT, 0);
  } else {
    shell.position.set(0, HUB_HEIGHT, sign * offset);
  }

  const outerRingPosition =
    axis === 'x'
      ? new THREE.Vector3(sign * (startOffset + length), HUB_HEIGHT, 0)
      : new THREE.Vector3(0, HUB_HEIGHT, sign * (startOffset + length));

  group.add(shell);
  group.add(createEndRing(axis, outerRingPosition));
  group.add(createWalkway(axis, sign, length, startOffset));
  group.add(createLedStrips(axis, sign, length, startOffset));

  return group;
}

function createQuarterTurnCurve(radius, yLevel) {
  return new (class extends THREE.Curve {
    getPoint(t, target = new THREE.Vector3()) {
      const angle = Math.PI - t * (Math.PI / 2);
      const x = CORNER_BEND_RADIUS + radius * Math.cos(angle);
      const z = -CORNER_BEND_RADIUS + radius * Math.sin(angle);
      return target.set(x, yLevel, z);
    }
  })();
}

function createCornerWalkway() {
  const outerRadius = CORNER_BEND_RADIUS + WALKWAY_DEPTH * 0.67;
  const innerRadius = CORNER_BEND_RADIUS - WALKWAY_DEPTH * 0.67;
  const shape = new THREE.Shape();

  shape.absarc(CORNER_BEND_RADIUS, -CORNER_BEND_RADIUS, outerRadius, Math.PI, Math.PI / 2, true);
  shape.absarc(CORNER_BEND_RADIUS, -CORNER_BEND_RADIUS, innerRadius, Math.PI / 2, Math.PI, false);

  const walkway = new THREE.Mesh(new THREE.ShapeGeometry(shape, 20), sharedMaterials.walkway);
  walkway.rotation.x = -Math.PI / 2;
  walkway.position.y = HUB_HEIGHT - PIPE_RADIUS + 0.14;

  return walkway;
}

function createArcCurve(radius, angleStart, angleEnd, yLevel) {
  return new (class extends THREE.Curve {
    getPoint(t, target = new THREE.Vector3()) {
      const angle = angleStart + (angleEnd - angleStart) * t;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return target.set(x, yLevel, z);
    }
  })();
}

function createCornerLedArcs() {
  const arcs = new THREE.Group();
  const ledRadii = [CORNER_BEND_RADIUS - 1.08, CORNER_BEND_RADIUS + 1.08];

  ledRadii.forEach((radius, index) => {
    const ledCurve = createQuarterTurnCurve(radius, HUB_HEIGHT - PIPE_RADIUS + 0.3);
    const ledArc = setPulse(
      new THREE.Mesh(new THREE.TubeGeometry(ledCurve, 18, 0.05, 8, false), sharedMaterials.led),
      1.35,
      0.28,
      1.15,
      index
    );

    arcs.add(ledArc);
  });

  return arcs;
}

function createCornerBend() {
  const bend = new THREE.Group();
  const shellCurve = createQuarterTurnCurve(CORNER_BEND_RADIUS, HUB_HEIGHT);
  const shell = new THREE.Mesh(new THREE.TubeGeometry(shellCurve, 24, PIPE_RADIUS, 16, false), sharedMaterials.glass);

  bend.add(shell);
  bend.add(createCornerWalkway());
  bend.add(createCornerLedArcs());

  return bend;
}

function createCornerPiece() {
  const piece = new THREE.Group();
  piece.userData.type = 'corner';

  piece.add(createPedestal());
  piece.add(createPipeSegment('north', { length: HALF_SPAN - CORNER_BEND_RADIUS, startOffset: CORNER_BEND_RADIUS }));
  piece.add(createPipeSegment('east', { length: HALF_SPAN - CORNER_BEND_RADIUS, startOffset: CORNER_BEND_RADIUS }));
  piece.add(createCornerBend());

  return piece;
}



function getJunctionDescriptors(type) {
  const descriptors = [
    {
      axis: 'x',
      length: JUNCTION_CLEAR_RADIUS * 2,
      position: new THREE.Vector3(0, HUB_HEIGHT, 0)
    }
  ];

  if (type === 'crossroad') {
    descriptors.push({
      axis: 'z',
      length: JUNCTION_CLEAR_RADIUS * 2,
      position: new THREE.Vector3(0, HUB_HEIGHT, 0)
    });
  } else {
    descriptors.push({
      axis: 'z',
      length: JUNCTION_CLEAR_RADIUS,
      position: new THREE.Vector3(0, HUB_HEIGHT, -JUNCTION_CLEAR_RADIUS * 0.5)
    });
  }

  return descriptors;
}

function getJunctionShellGeometry(type) {
  if (junctionShellGeometryCache.has(type)) {
    return junctionShellGeometryCache.get(type);
  }

  const descriptors = getJunctionDescriptors(type);
  const unclippedShells = descriptors.map((descriptor) =>
    createTransformedCylinderGeometry(descriptor.axis, descriptor.length, PIPE_RADIUS, true, descriptor.position, 48)
  );

  let mergedShell = mergeGeometries(unclippedShells, false);
  mergedShell = mergeVertices(mergedShell, 0.001);
  mergedShell.computeVertexNormals();
  junctionShellGeometryCache.set(type, mergedShell.clone());

  return junctionShellGeometryCache.get(type);
}

const junctionMaterialCache = new Map();

function getJunctionMaterial(type) {
  if (junctionMaterialCache.has(type)) return junctionMaterialCache.get(type);
  
  const mat = sharedMaterials.glass.clone();
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vRawPos;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vRawPos = position;` 
    );
    
    let condition = '';
    if (type === 'crossroad') {
        condition = `
          float rSq = 2.54 * 2.54; 
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          // Delete overlapping interiors
          if (distSqX < rSq || distSqZ < rSq) discard;
        `;
    } else if (type === 'tjunction') {
        condition = `
          float rSq = 2.54 * 2.54;
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          
          if (distSqX < rSq) {
              // Pixel is inside the X pipe
              discard;
          }
          if (distSqZ < rSq && vRawPos.z < 0.0) {
              // Pixel is inside the Z pipe (which only exists on the negative Z side)
              discard;
          }
        `;
    }
    
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vRawPos;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
      ${condition}
      `
    );
  };
  junctionMaterialCache.set(type, mat);
  return mat;
}

function createJunctionPiece(type) {
  const piece = new THREE.Group();
  piece.userData.type = type;

  piece.add(createPedestal());
  piece.add(createHub());
  piece.add(new THREE.Mesh(getJunctionShellGeometry(type), getJunctionMaterial(type)));

  PIECE_CONNECTORS[type].forEach((direction) => {
    piece.add(
      createPipeSegment(direction, {
        length: HALF_SPAN - JUNCTION_CLEAR_RADIUS,
        startOffset: JUNCTION_CLEAR_RADIUS
      })
    );
  });

  return piece;
}

function createEventHorizon(direction) {
  const axis = axisForDirection(direction);
  const sign = directionSign(direction);
  const group = new THREE.Group();
  const offset = sign * (HALF_SPAN - 0.3);

  // Single disc with a spiral black-hole shader
  const discGeo = new THREE.CircleGeometry(PIPE_RADIUS * 0.96, 64);
  const discMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv - 0.5;
        float r = length(uv) * 2.0;
        float a = atan(uv.y, uv.x);

        // Singularity hole mask
        float hole = smoothstep(0.2, 0.25, r);
        
        // Vortex physics: the "suction" twist
        float twist = 8.0 / (r + 0.1);
        
        // Create a grid of "Digital Pieces"
        float rFreq = 14.0;
        float aFreq = 10.0;
        float rCoord = r * rFreq - uTime * 6.0;
        float aCoord = a * aFreq + twist;
        
        vec2 grid = fract(vec2(rCoord, aCoord));
        float piece = step(0.6, grid.x) * step(0.2, grid.y);
        
        // Deep Saturated Blue
        vec3 deepBlue = vec3(0.05, 0.2, 1.0);
        
        // Subtle energy flicker
        float flicker = 0.85 + 0.15 * sin(uTime * 12.0 + rCoord * 10.0);

        // Intensity
        float intensity = 2.2;

        // Final color
        vec3 color = deepBlue * intensity * flicker;

        // Space between pieces is unfilled (alpha = 0)
        float alpha = piece * hole * (1.0 - smoothstep(0.92, 1.0, r));
        
        // Use discard for alphaTest compatibility
        if (alpha < 0.1) discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    transparent: false,
    alphaTest: 0.1,
    side: THREE.DoubleSide,
    depthWrite: true
  });

  const disc = new THREE.Mesh(discGeo, discMat);

  // Self-updating time uniform
  disc.onBeforeRender = () => {
    discMat.uniforms.uTime.value = performance.now() * 0.001;
  };

  // Subtle outer edge glow ring (Cyber Cyan)
  const edgeGeo = new THREE.RingGeometry(PIPE_RADIUS * 0.88, PIPE_RADIUS * 1.05, 32);
  const edgeMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const edgeGlow = new THREE.Mesh(edgeGeo, edgeMat);
  edgeGlow.renderOrder = 10;

  if (axis === 'x') {
    disc.position.set(offset, HUB_HEIGHT, 0);
    disc.rotation.y = Math.PI / 2;
    edgeGlow.position.set(offset + sign * 0.05, HUB_HEIGHT, 0);
    edgeGlow.rotation.y = Math.PI / 2;
  } else {
    disc.position.set(0, HUB_HEIGHT, offset);
    disc.rotation.y = sign > 0 ? Math.PI : 0;
    edgeGlow.position.set(0, HUB_HEIGHT, offset + sign * 0.05);
    edgeGlow.rotation.y = sign > 0 ? Math.PI : 0;
  }

  group.add(disc, edgeGlow);
  return group;
}

export function createMazePiece(type) {
  if (type === 'corner') {
    return createCornerPiece();
  }

  if (type === 'ghostchamber') {
    return createGhostChamberPiece();
  }

  if (type === 'tjunction' || type === 'crossroad') {
    return createJunctionPiece(type);
  }

  const piece = new THREE.Group();
  piece.userData.type = type;

  const connectors = PIECE_CONNECTORS[type];

  if (!connectors) {
    throw new Error(`Unknown maze piece type: ${type}`);
  }

  piece.add(createPedestal());
  piece.add(createHub());

  connectors.forEach((direction) => {
    piece.add(createPipeSegment(direction));
  });

  if (type === 'teleport') {
    // West end: Event Horizon (the warp terminus)
    piece.add(createEventHorizon('west'));
    // East end: Normal open pipe (no cap — connects to the maze)
  }

  return piece;
}
function createGhostChamberPiece() {
  const piece = new THREE.Group();
  piece.userData.type = 'ghostchamber';

  // We wrap the entire visual structure in a group and shift it backwards (South).
  // This allows the massive dome to occupy the empty space behind the connection point,
  // while the short connection pipe perfectly snaps to the tile boundary at exactly Z = -9.0.
  const visualGroup = new THREE.Group();
  visualGroup.position.z = 4.5; 
  piece.add(visualGroup);

  // 1. Standard Pedestal (Matches all other pieces perfectly)
  // Added directly to piece so it remains exactly at (0,0) with no scaling.
  piece.add(createPedestal());

  // 2. Chamber Geometry (Maximized Rectangular Glass Dome)
  const r = PIPE_RADIUS; // 2.55
  const w = 18.9; 
  const d = 13.9; // Maximized vertical space
  const cornerR = 4.0; 
  
  const outerShape = new THREE.Shape();
  const x = -w / 2;
  const y = -d / 2;
  outerShape.moveTo(x, y + cornerR);
  outerShape.lineTo(x, y + d - cornerR);
  outerShape.quadraticCurveTo(x, y + d, x + cornerR, y + d);
  outerShape.lineTo(x + w - cornerR, y + d);
  outerShape.quadraticCurveTo(x + w, y + d, x + w, y + d - cornerR);
  outerShape.lineTo(x + w, y + cornerR);
  outerShape.quadraticCurveTo(x + w, y, x + w - cornerR, y);
  outerShape.lineTo(x + cornerR, y);
  outerShape.quadraticCurveTo(x, y, x, y + cornerR);

  const extrudeSettings = { 
    depth: 0.01, 
    bevelEnabled: true, 
    bevelThickness: r, 
    bevelSize: r, 
    bevelSegments: 20,
    curveSegments: 24 
  };
  const shellGeo = new THREE.ExtrudeGeometry(outerShape, extrudeSettings);
  
  const shellMat = sharedMaterials.glass.clone();
  shellMat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vRawPos;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vRawPos = position;` 
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vRawPos;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
      // The shell is rotated -90deg on X, so Local Y becomes World -Z.
      if (vRawPos.y > 6.9) { 
        float distToPipeCenter = sqrt(vRawPos.x * vRawPos.x + vRawPos.z * vRawPos.z);
        if (distToPipeCenter < 2.45) {
            discard;
        }
      }
      `
    );
  };

  const shell = new THREE.Mesh(shellGeo, shellMat);
  shell.rotation.x = -Math.PI / 2;
  shell.position.y = HUB_HEIGHT;
  visualGroup.add(shell);

  // 3. Rectangular Walkway Floor
  const floorW = 18;
  const floorD = 14;
  const floorR = 3;
  
  const floorShape = new THREE.Shape();
  const fx = -floorW / 2;
  const fy = -floorD / 2;
  floorShape.moveTo(fx, fy + floorR);
  floorShape.lineTo(fx, fy + floorD - floorR);
  floorShape.quadraticCurveTo(fx, fy + floorD, fx + floorR, fy + floorD);
  floorShape.lineTo(fx + floorW - floorR, fy + floorD);
  floorShape.quadraticCurveTo(fx + floorW, fy + floorD, fx + floorW, fy + floorD - floorR);
  floorShape.lineTo(fx + floorW, fy + floorR);
  floorShape.quadraticCurveTo(fx + floorW, fy, fx + floorW - floorR, fy);
  floorShape.lineTo(fx + floorR, fy);
  floorShape.quadraticCurveTo(fx, fy, fx, fy + floorR);

  const floorGeo = new THREE.ExtrudeGeometry(floorShape, { depth: 0.18, bevelEnabled: false, curveSegments: 16 });
  floorGeo.computeBoundingBox();
  const zOffset = -0.5 * (floorGeo.boundingBox.max.z - floorGeo.boundingBox.min.z);
  floorGeo.translate(0, 0, zOffset);
  
  const floorMesh = new THREE.Mesh(floorGeo, sharedMaterials.walkway);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.14, 0);
  visualGroup.add(floorMesh);

  // 4. Perimeter LEDs and Spawn Pads
  const points2d = floorShape.getPoints(24);
  const points3d = points2d.map(p => new THREE.Vector3(p.x, 0, p.y));
  const ledCurve = new THREE.CatmullRomCurve3(points3d, true); 
  
  const ledGeo = new THREE.TubeGeometry(ledCurve, 128, 0.06, 8, true);
  const ledMesh = setPulse(new THREE.Mesh(ledGeo, sharedMaterials.led), 1.4, 0.34, 1.2, 0);
  ledMesh.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.3, 0);
  visualGroup.add(ledMesh);

  const ledGlowGeo = new THREE.TubeGeometry(ledCurve, 128, 0.4, 8, true);
  const ledGlowMesh = new THREE.Mesh(ledGlowGeo, sharedMaterials.ledGlow);
  ledGlowMesh.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.14, 0);
  visualGroup.add(ledGlowMesh);

  // Ghost Shapes
  const ghostR = 1.8;
  const ghostShape = new THREE.Shape();
  ghostShape.absarc(0, 0.5, ghostR, 0, Math.PI, false); // Head
  ghostShape.lineTo(-ghostR, -1.5); // Left drop
  ghostShape.lineTo(-ghostR / 2, -0.5); // Inner left
  ghostShape.lineTo(0, -1.5); // Center drop
  ghostShape.lineTo(ghostR / 2, -0.5); // Inner right
  ghostShape.lineTo(ghostR, -1.5); // Right drop
  ghostShape.lineTo(ghostR, 0.5); // Back to head

  const ghostPoints2d = ghostShape.getPoints(16);
  const ghostPoints3d = ghostPoints2d.map(p => new THREE.Vector3(p.x, 0, p.y));
  const ghostCurve = new THREE.CatmullRomCurve3(ghostPoints3d, true);

  const spawnPadGeo = new THREE.TubeGeometry(ghostCurve, 64, 0.08, 8, true);
  const spawnGlowGeo = new THREE.ShapeGeometry(ghostShape, 16);
  
  // Rectangular Pad Placement
  const padOffsetsX = [-4.5, 4.5];
  const padOffsetsZ = [-3.0, 3.0];

  const mouthPath = new THREE.CurvePath();
  const mPts = [
    new THREE.Vector3(-0.6, 0, -0.2),
    new THREE.Vector3(-0.3, 0, 0.1),
    new THREE.Vector3(0, 0, -0.2),
    new THREE.Vector3(0.3, 0, 0.1),
    new THREE.Vector3(0.6, 0, -0.2)
  ];
  mouthPath.add(new THREE.LineCurve3(mPts[0], mPts[1]));
  mouthPath.add(new THREE.LineCurve3(mPts[1], mPts[2]));
  mouthPath.add(new THREE.LineCurve3(mPts[2], mPts[3]));
  mouthPath.add(new THREE.LineCurve3(mPts[3], mPts[4]));
  const mouthGeo = new THREE.TubeGeometry(mouthPath, 16, 0.05, 8, false);

  const eyeGeo = new THREE.TorusGeometry(0.25, 0.05, 8, 16);
  
  let xIndex = 0;
  padOffsetsX.forEach((x) => {
    let zIndex = 0;
    padOffsetsZ.forEach((z) => {
      const isScared = ((xIndex + zIndex) % 2 === 1);

      const ring = setPulse(new THREE.Mesh(spawnPadGeo, sharedMaterials.led), 1.2, 0.4, 1.8, Math.random() * Math.PI);
      ring.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      
      const plate = new THREE.Mesh(spawnGlowGeo, sharedMaterials.ledGlow);
      plate.rotation.x = Math.PI / 2;
      plate.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      
      visualGroup.add(ring, plate);

      const faceGroup = new THREE.Group();
      
      const leftEye = setPulse(new THREE.Mesh(eyeGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
      leftEye.rotation.x = Math.PI / 2;
      leftEye.position.set(-0.7, 0, 0.6);
      
      const rightEye = setPulse(new THREE.Mesh(eyeGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
      rightEye.rotation.x = Math.PI / 2;
      rightEye.position.set(0.7, 0, 0.6);

      faceGroup.add(leftEye, rightEye);

      if (isScared) {
        const mouth = setPulse(new THREE.Mesh(mouthGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
        faceGroup.add(mouth);
      }

      faceGroup.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      visualGroup.add(faceGroup);

      zIndex++;
    });
    xIndex++;
  });

  // 5. Connection Pipe (North)
  visualGroup.add(
    createPipeSegment('north', {
      length: 4.0, 
      startOffset: 9.5
    })
  );

  // 6. Laser Forcefield Door
  const doorGroup = new THREE.Group();
  
  const forcefieldMat = new THREE.MeshBasicMaterial({
    color: 0xff0000, 
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const forcefieldGeo = new THREE.CircleGeometry(PIPE_RADIUS - 0.1, 32);
  const forcefield = setPulse(new THREE.Mesh(forcefieldGeo, forcefieldMat), 1.1, 0.1, 1.5, 0);
  doorGroup.add(forcefield);
  
  const laserMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  const laserGlowMat = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  const offsets = [-1.2, -0.4, 0.4, 1.2]; 
  
  offsets.forEach(y => {
    const w = Math.sqrt(Math.pow(PIPE_RADIUS - 0.15, 2) - Math.pow(y, 2)) * 2;
    const laserGeo = new THREE.CylinderGeometry(0.04, 0.04, w, 8);
    const laser = setPulse(new THREE.Mesh(laserGeo, laserMat), 1.3, 0.7, 2.0, Math.random());
    laser.rotation.z = Math.PI / 2;
    laser.position.y = y;
    
    const glowGeo = new THREE.CylinderGeometry(0.12, 0.12, w, 8);
    const glow = new THREE.Mesh(glowGeo, laserGlowMat);
    glow.rotation.z = Math.PI / 2;
    glow.position.y = y;
    
    doorGroup.add(laser, glow);
  });
  
  offsets.forEach(x => {
    const h = Math.sqrt(Math.pow(PIPE_RADIUS - 0.15, 2) - Math.pow(x, 2)) * 2;
    const laserGeo = new THREE.CylinderGeometry(0.04, 0.04, h, 8);
    const laser = setPulse(new THREE.Mesh(laserGeo, laserMat), 1.3, 0.7, 2.0, Math.random());
    laser.position.x = x;
    
    const glowGeo = new THREE.CylinderGeometry(0.12, 0.12, h, 8);
    const glow = new THREE.Mesh(glowGeo, laserGlowMat);
    glow.position.x = x;
    
    doorGroup.add(laser, glow);
  });
  
  // Placed close to the end of the pipe (at -13.1 in visualGroup space)
  doorGroup.position.set(0, HUB_HEIGHT, -13.1); 
  visualGroup.add(doorGroup);

  return piece;
}

export function buildShowcase(layout) {
  const group = new THREE.Group();

  layout.forEach((item, index) => {
    // 2-column grid layout
    const col = index % 2;
    const row = Math.floor(index / 2);
    
    // Spreading them out for gallery viewing (Tightened)
    const xPos = col * 24;
    const zPos = row * 24;
    
    const piece = createMazePiece(item.type);
    piece.position.set(xPos, 6, zPos);
    group.add(piece);
  });

  return group;
}
