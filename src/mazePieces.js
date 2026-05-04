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

function pointInsideCylinder(point, descriptor, radius = PIPE_RADIUS + 0.05) {
  const dx = point.x - descriptor.position.x;
  const dy = point.y - descriptor.position.y;
  const dz = point.z - descriptor.position.z;

  if (descriptor.axis === 'x') {
    return Math.abs(dx) <= descriptor.length * 0.5 + 0.05 && dy * dy + dz * dz < radius * radius;
  }

  return Math.abs(dz) <= descriptor.length * 0.5 + 0.05 && dx * dx + dy * dy < radius * radius;
}

function clipCylinderShellGeometry(descriptor, otherDescriptors) {
  const heightSegments = Math.max(32, Math.floor(descriptor.length * 2.5));
  const geometry = createTransformedCylinderGeometry(
    descriptor.axis,
    descriptor.length,
    PIPE_RADIUS,
    true,
    descriptor.position,
    128,
    heightSegments
  ).toNonIndexed();

  const positions = geometry.getAttribute('position').array;
  const normals = geometry.getAttribute('normal').array;
  const keptPositions = [];
  const keptNormals = [];

  for (let index = 0; index < positions.length; index += 9) {
    const centroid = new THREE.Vector3(
      (positions[index] + positions[index + 3] + positions[index + 6]) / 3,
      (positions[index + 1] + positions[index + 4] + positions[index + 7]) / 3,
      (positions[index + 2] + positions[index + 5] + positions[index + 8]) / 3
    );

    const hiddenByOtherTube = otherDescriptors.some((otherDescriptor) => pointInsideCylinder(centroid, otherDescriptor));

    if (hiddenByOtherTube) {
      continue;
    }

    for (let offset = 0; offset < 9; offset += 1) {
      keptPositions.push(positions[index + offset]);
      keptNormals.push(normals[index + offset]);
    }
  }

  const clippedGeometry = new THREE.BufferGeometry();
  clippedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(keptPositions, 3));
  clippedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(keptNormals, 3));

  return clippedGeometry;
}

function getJunctionDescriptors(type) {
  const descriptors = [
    {
      axis: 'x',
      length: TILE_SIZE,
      position: new THREE.Vector3(0, HUB_HEIGHT, 0)
    }
  ];

  if (type === 'crossroad') {
    descriptors.push({
      axis: 'z',
      length: TILE_SIZE,
      position: new THREE.Vector3(0, HUB_HEIGHT, 0)
    });
  } else {
    descriptors.push({
      axis: 'z',
      length: HALF_SPAN,
      position: new THREE.Vector3(0, HUB_HEIGHT, -HALF_SPAN * 0.5)
    });
  }

  return descriptors;
}

function getJunctionShellGeometry(type) {
  if (junctionShellGeometryCache.has(type)) {
    return junctionShellGeometryCache.get(type);
  }

  const descriptors = getJunctionDescriptors(type);
  const clippedShells = descriptors.map((descriptor, index) =>
    clipCylinderShellGeometry(
      descriptor,
      descriptors.filter((_, otherIndex) => otherIndex !== index)
    )
  );

  let mergedShell = mergeGeometries(clippedShells, false);
  mergedShell = mergeVertices(mergedShell, 0.001);
  mergedShell.computeVertexNormals();
  junctionShellGeometryCache.set(type, mergedShell.clone());

  return junctionShellGeometryCache.get(type);
}

function createJunctionPiece(type) {
  const piece = new THREE.Group();
  piece.userData.type = type;

  piece.add(createPedestal());
  piece.add(createHub());
  piece.add(new THREE.Mesh(getJunctionShellGeometry(type), sharedMaterials.glass));

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

function createTeleportGate(direction) {
  const axis = axisForDirection(direction);
  const sign = directionSign(direction);
  const gate = new THREE.Group();

  const portalRing = setPulse(new THREE.Mesh(sharedGeometries.portalRing, sharedMaterials.teleport), 1.3, 0.22, 1.7);
  const portalFace = setPulse(new THREE.Mesh(sharedGeometries.portalFace, sharedMaterials.teleport), 1.05, 0.22, 2.1);

  if (axis === 'x') {
    portalRing.position.set(sign * (HALF_SPAN - 0.65), HUB_HEIGHT, 0);
    portalFace.position.set(sign * (HALF_SPAN - 0.64), HUB_HEIGHT, 0);
    portalRing.rotation.y = Math.PI / 2;
    portalFace.rotation.y = sign > 0 ? -Math.PI / 2 : Math.PI / 2;
  } else {
    portalRing.position.set(0, HUB_HEIGHT, sign * (HALF_SPAN - 0.65));
    portalFace.position.set(0, HUB_HEIGHT, sign * (HALF_SPAN - 0.64));
    portalFace.rotation.y = sign > 0 ? Math.PI : 0;
  }

  gate.add(portalRing, portalFace);
  return gate;
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
    piece.add(createTeleportGate('east'));
    piece.add(createTeleportGate('west'));
  }

  return piece;
}

function createGhostChamberPiece() {
  const piece = new THREE.Group();
  piece.userData.type = 'ghostchamber';

  // 1. Scaled Pedestal
  const customPedestal = createPedestal();
  customPedestal.scale.set(1.7, 1, 1.7); // Scaled equally in X and Z
  piece.add(customPedestal);

  // 2. Chamber Geometry (Perfectly Rounded Glass Dome)
  const r = PIPE_RADIUS; // 2.55
  const w = 18.9; 
  const d = 18.9;
  const cornerR = 5;
  
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
  
  // Clone the glass material to apply the custom "Hole-Punch" shader
  const shellMat = sharedMaterials.glass.clone();
  shellMat.onBeforeCompile = (shader) => {
    // 1. Pass the raw local geometry position to the fragment shader
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

    // 2. Intercept the fragment shader to mathematically discard pixels
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vRawPos;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
      
      // The shell is rotated -90deg on X, so Local Y becomes World -Z.
      // We only want to cut a hole in the North face (where Local Y > 9.0).
      if (vRawPos.y > 9.0) { 
        // The shell is positioned at HUB_HEIGHT, so Local Z is centered perfectly on the pipe.
        // We calculate the 2D distance from the center of the pipe.
        float distToPipeCenter = length(vec2(vRawPos.x, vRawPos.z));
        
        // If the pixel is inside the pipe radius (2.55), DELETE IT.
        if (distToPipeCenter < 2.45) { 
          discard;
        }
      }
      `
    );
  };

  const shell = new THREE.Mesh(shellGeo, shellMat);
  shell.rotation.x = -Math.PI / 2; 
  // Center it at HUB_HEIGHT
  shell.position.set(0, HUB_HEIGHT, 0);
  piece.add(shell);

  // 3. Wide Walkway Floor
  const floorW = 18;
  const floorD = 18;
  const floorR = 4;
  
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
  piece.add(floorMesh);

  // 4. Perimeter LEDs and Internal Spawn Pads
  const points2d = floorShape.getPoints(24);
  const points3d = points2d.map(p => new THREE.Vector3(p.x, 0, p.y));
  const ledCurve = new THREE.CatmullRomCurve3(points3d, true); 
  
  const ledGeo = new THREE.TubeGeometry(ledCurve, 128, 0.06, 8, true);
  const ledMesh = setPulse(new THREE.Mesh(ledGeo, sharedMaterials.led), 1.4, 0.34, 1.2, 0);
  ledMesh.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.3, 0);
  piece.add(ledMesh);

  const ledGlowGeo = new THREE.TubeGeometry(ledCurve, 128, 0.4, 8, true);
  const ledGlowMesh = new THREE.Mesh(ledGlowGeo, sharedMaterials.ledGlow);
  ledGlowMesh.position.set(0, HUB_HEIGHT - PIPE_RADIUS + 0.14, 0);
  piece.add(ledGlowMesh);

  // Internal Spawn Pads (2x2 Grid) - Ghost Shaped!
  const ghostR = 2.2;
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
  const padOffsets = [-4.5, 4.5];

  // Scared Mouth Path
  const mouthPath = new THREE.CurvePath();
  const mPts = [
    new THREE.Vector3(-0.8, 0, -0.2),
    new THREE.Vector3(-0.4, 0, 0.1),
    new THREE.Vector3(0, 0, -0.2),
    new THREE.Vector3(0.4, 0, 0.1),
    new THREE.Vector3(0.8, 0, -0.2)
  ];
  mouthPath.add(new THREE.LineCurve3(mPts[0], mPts[1]));
  mouthPath.add(new THREE.LineCurve3(mPts[1], mPts[2]));
  mouthPath.add(new THREE.LineCurve3(mPts[2], mPts[3]));
  mouthPath.add(new THREE.LineCurve3(mPts[3], mPts[4]));
  const mouthGeo = new THREE.TubeGeometry(mouthPath, 16, 0.06, 8, false);

  const eyeGeo = new THREE.TorusGeometry(0.3, 0.06, 8, 16);

  let xIndex = 0;
  padOffsets.forEach((x) => {
    let zIndex = 0;
    padOffsets.forEach((z) => {
      const isScared = ((xIndex + zIndex) % 2 === 1); // True checkerboard pattern

      // The solid LED ghost outline
      const ring = setPulse(new THREE.Mesh(spawnPadGeo, sharedMaterials.led), 1.2, 0.4, 1.8, Math.random() * Math.PI);
      ring.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      
      // The faint inner glow plate
      const plate = new THREE.Mesh(spawnGlowGeo, sharedMaterials.ledGlow);
      plate.rotation.x = Math.PI / 2; // +PI/2 aligns the XY shape with the XZ curve mapping
      plate.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      
      piece.add(ring, plate);

      // Face
      const faceGroup = new THREE.Group();
      
      const leftEye = setPulse(new THREE.Mesh(eyeGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
      leftEye.rotation.x = Math.PI / 2;
      leftEye.position.set(-0.8, 0, 0.8);
      
      const rightEye = setPulse(new THREE.Mesh(eyeGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
      rightEye.rotation.x = Math.PI / 2;
      rightEye.position.set(0.8, 0, 0.8);

      faceGroup.add(leftEye, rightEye);

      if (isScared) {
        const mouth = setPulse(new THREE.Mesh(mouthGeo, sharedMaterials.led), 1.4, 0.3, 2.0, Math.random());
        faceGroup.add(mouth);
      }

      faceGroup.position.set(x, HUB_HEIGHT - PIPE_RADIUS + 0.24, z);
      piece.add(faceGroup);

      zIndex++;
    });
    xIndex++;
  });

  // 5. Connection Pipe (North)
  // The glass shell reaches Z = -12. 
  // Let's add a pipe stub that sticks out to Z = -16.
  piece.add(
    createPipeSegment('north', {
      length: 6,
      startOffset: 10
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
  
  // Horizontal lasers
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

  // Vertical lasers
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
  
  // Placed close to the end of the pipe, leaving a pronounced lip
  doorGroup.position.set(0, HUB_HEIGHT, -15.0); 
  piece.add(doorGroup);

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
