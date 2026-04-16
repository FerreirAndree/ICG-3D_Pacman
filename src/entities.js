/**
 * OpenAI. (2026). ChatGPT (GPT-5.4) [Large language model]. https://chat.openai.com
 * Google. (2026). Gemini [Large language model]. https://gemini.google.com
 * 
 * Parts of the mechanical modeling logic and high-fidelity animation loops in this 
 * file were co-authored with AI assistants to achieve the Cyber-Pacman aesthetic.
 */

import * as THREE from 'three';

/**
 * Creates a high-fidelity 'Cyber-Pacman' model with mechanical depth
 */
export function createPacman() {
  const group = new THREE.Group();

  // --- Materials ---
  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0xffcc00, 
    metalness: 0.1,
    roughness: 0.2,
    transparent: false,
    opacity: 1.0,
    depthWrite: true
  });

  const interiorMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x000000,
    side: THREE.DoubleSide
  });

  const tongueMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xee0033, 
    roughness: 0.6 
  });

  const neonMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  
  // --- Upper Half ---
  const upperGroup = new THREE.Group();
  const jawGeo = new THREE.SphereGeometry(3.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const capGeo = new THREE.CircleGeometry(3.48, 32);

  const shellUpper = new THREE.Mesh(jawGeo, shellMaterial);
  const capUpper = new THREE.Mesh(capGeo, interiorMaterial);
  capUpper.rotation.x = Math.PI / 2;
  upperGroup.add(shellUpper, capUpper);

  // --- Lower Half ---
  const lowerGroup = new THREE.Group();
  lowerGroup.rotation.x = Math.PI;
  const shellLower = new THREE.Mesh(jawGeo, shellMaterial);
  const capLower = new THREE.Mesh(capGeo, interiorMaterial);
  capLower.rotation.x = -Math.PI / 2;
  lowerGroup.add(shellLower, capLower);

  // --- The Throat (Seals the back hinge) ---
  const throatGeo = new THREE.SphereGeometry(3.45, 32, 16, Math.PI, Math.PI);
  const throat = new THREE.Mesh(throatGeo, interiorMaterial);
  group.add(throat);

  // --- The Proper Tongue ---
  const tongueGroup = new THREE.Group();
  const tongue = new THREE.Mesh(
    new THREE.CapsuleGeometry(1.4, 1.5, 4, 16),
    tongueMaterial
  );
  tongue.scale.set(1.2, 0.4, 1.0);
  tongue.rotation.x = Math.PI / 2;
  // Tucked deep enough to never poke out when closed
  tongue.position.set(0, 0.2, -0.8); 
  tongueGroup.add(tongue);
  lowerGroup.add(tongueGroup);

  group.add(upperGroup, lowerGroup);

  // --- Tactical Eyes ---
  function createCyberEye(posX) {
    const eyeGroup = new THREE.Group();
    const hex = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.48, 6), neonMaterial);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 8, 32), neonMaterial);
    ring.name = 'eyeRing';
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), neonMaterial);
    
    eyeGroup.add(hex, ring, lens);
    eyeGroup.position.set(posX, 1.8, 2.45);
    eyeGroup.rotation.y = posX > 0 ? 0.35 : -0.35;
    eyeGroup.rotation.z = Math.PI / 6;
    return eyeGroup;
  }
  
  const leftEye = createCyberEye(1.6);
  const rightEye = createCyberEye(-1.6);
  upperGroup.add(leftEye, rightEye);

  // --- Animation ---
  group.userData = {
    type: 'pacman',
    update: (time) => {
      const chomp = Math.abs(Math.sin(time * 6.5)) * 0.48;
      upperGroup.rotation.x = -chomp;
      lowerGroup.rotation.x = Math.PI + chomp;

      leftEye.getObjectByName('eyeRing').rotation.z = time * 2.5;
      rightEye.getObjectByName('eyeRing').rotation.z = -time * 2.5;
    }
  };

  return group;
}

/**
 * Creates a high-fidelity 'Cyber-Phantom' Ghost
 */
export function createGhost(color = 0xff0044) {
  const group = new THREE.Group();

  // --- Materials ---
  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.4,
    thickness: 1.0,
    ior: 1.45,
    emissive: color,
    emissiveIntensity: 0.2,
    clearcoat: 1.0,
    transparent: true
  });

  const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x080808, metalness: 0.9 });
  const neonMaterial = new THREE.MeshBasicMaterial({ color: color });
  
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 5.0,
    transparent: true,
    opacity: 0.9
  });

  // --- Geometry ---
  const domeGeo = new THREE.CapsuleGeometry(3.0, 2.5, 4, 24);
  const coreGeo = new THREE.SphereGeometry(0.8, 16, 16);
  
  // --- Body Shell ---
  const shell = new THREE.Mesh(domeGeo, shellMaterial);
  shell.position.y = 1.0;
  group.add(shell);

  // --- Internal Skeleton ---
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 5, 12), frameMaterial);
  group.add(spine);

  // --- Tactical HUD Eyes (Rectangular) ---
  function createSpectralEye(posX) {
    const eyeGroup = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), neonMaterial);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), neonMaterial);
    pupil.position.z = 0.1;
    
    eyeGroup.add(frame, pupil);
    eyeGroup.position.set(posX, 2.2, 2.2);
    eyeGroup.rotation.y = posX > 0 ? 0.3 : -0.3;
    return eyeGroup;
  }
  group.add(createSpectralEye(1.1), createSpectralEye(-1.1));

  // --- Floating "Tentacles" (Segments) ---
  const segments = [];
  const segGeo = new THREE.BoxGeometry(0.6, 1.2, 0.6);
  for (let i = 0; i < 8; i++) {
    const segment = new THREE.Mesh(segGeo, frameMaterial);
    const angle = (i / 8) * Math.PI * 2;
    segment.position.set(Math.cos(angle) * 2.2, -1.8, Math.sin(angle) * 2.2);
    group.add(segment);
    segments.push(segment);
  }

  // --- Core ---
  const mainCore = new THREE.Mesh(coreGeo, coreMaterial);
  group.add(mainCore);

  // --- Animation ---
  group.userData = {
    type: 'ghost',
    update: (time) => {
      // Floating/Levitation
      group.position.y += Math.sin(time * 2) * 0.005;
      
      // Spectral Wave for segments
      segments.forEach((seg, i) => {
        seg.position.y = -1.8 + Math.sin(time * 3 + i * 0.8) * 0.4;
        seg.rotation.y = time * 2;
      });

      // Pulse Core
      mainCore.scale.setScalar(1 + Math.sin(time * 8) * 0.15);
      mainCore.material.emissiveIntensity = 4 + Math.sin(time * 8) * 2;
    }
  };

  return group;
}

/**
 * Creates a high-fidelity 'Cyber-Pellet' (Energy Shard)
 */
export function createPellet() {
  const group = new THREE.Group();

  const color = 0xffaa00; // Warm Energy Orange
  
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 6.0,
  });

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
  });

  // --- Core (Low-poly Energy Crystal) ---
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 0), coreMaterial);
  group.add(core);

  // --- Outer Spinner Ring ---
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.04, 8, 48), ringMaterial);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  // --- Warm Ambient Glow ---
  const light = new THREE.PointLight(color, 8, 15, 2);
  group.add(light);

  // --- Animation ---
  group.userData = {
    type: 'pellet',
    update: (time) => {
      // Spinning core
      core.rotation.y = time * 2;
      core.rotation.z = time * 1.5;
      
      // Floating motion
      group.position.y += Math.sin(time * 3) * 0.006;
      
      // Ring animation
      ring.rotation.z = -time * 3;
      ring.scale.setScalar(1 + Math.sin(time * 4) * 0.1);
      
      light.intensity = 6 + Math.sin(time * 6) * 2;
    }
  };

  return group;
}
