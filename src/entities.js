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

import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Creates a high-fidelity 'Cyber-Phantom' Ghost
 */
export function createGhost(color = 0xff0044) {
  const group = new THREE.Group();

  // --- Materials ---
  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x000000,
    emissive: color,
    emissiveIntensity: 1.0,
    transmission: 0.98,   
    opacity: 1.0,
    transparent: true,
    roughness: 0.01,
    ior: 1.1,
    thickness: 1.5,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const eyeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.98
  });

  // --- Geometry Construction (Bottom at Y=0) ---
  const radius = 1.9;
  const bodyHeight = 4.5; // Shorter, better proportion
  const radialSegments = 64;
  const heightSegments = 32;

  const domeGeo = new THREE.SphereGeometry(radius, radialSegments, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  domeGeo.translate(0, bodyHeight, 0);

  const cylinderGeo = new THREE.CylinderGeometry(radius, radius, bodyHeight, radialSegments, heightSegments, true);
  cylinderGeo.translate(0, bodyHeight / 2, 0);
  
  // Merge cleanly to keep normal smoothing across the body
  const bodyGeo = mergeGeometries([domeGeo, cylinderGeo]);
  bodyGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);
  
  const posAttr = bodyGeo.attributes.position;
  const originalYs = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    originalYs[i] = posAttr.getY(i);
  }

  const shell = new THREE.Mesh(bodyGeo, shellMaterial);
  group.add(shell);

  // --- Inner Holographic Core ---
  const innerShell = new THREE.Mesh(
    bodyGeo, 
    new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    })
  );
  innerShell.scale.set(0.96, 0.96, 0.96);
  group.add(innerShell);

  // --- Glowing White Eyes ---
  function createSpectralEye(posX) {
    const eyeGroup = new THREE.Group();
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), eyeMaterial);
    pupil.scale.set(1, 1, 0.2); 
    
    eyeGroup.add(pupil);
    eyeGroup.position.set(posX, bodyHeight + 0.8, radius * 0.92);
    eyeGroup.rotation.y = posX > 0 ? 0.4 : -0.4;
    return eyeGroup;
  }
  
  group.add(createSpectralEye(0.8), createSpectralEye(-0.8));

  // --- Animation Settings ---
  const waves = 6;
  const waveAmplitude = 0.35; 
  const waveSpeed = 4.2;
  
  let baseY = null;

  group.userData = {
    type: 'ghost',
    update: (time) => {
      // Capture the initial Y position set by the main scene
      if (baseY === null) {
        baseY = group.position.y;
      }
      
      // Levitate around the base position
      group.position.y = baseY + Math.sin(time * 2.2) * 0.2; 
      
      for (let i = 0; i < posAttr.count; i++) {
        const origY = originalYs[i];
        
        // Target vertices at the very bottom (base is exactly at y=0 now)
        if (origY < 2.5) {
          const x = posAttr.getX(i);
          const z = posAttr.getZ(i);
          const angle = Math.atan2(z, x);
          
          // Standard smooth sine wave for harmonious, rounded scallops
          const wave = Math.sin(angle * waves + time * waveSpeed);
          const blend = Math.pow((2.5 - origY) / 2.5, 1.1);
          
          // Apply wave smoothly up and down
          posAttr.setY(i, origY + (wave * waveAmplitude * blend));
        }
      }
      bodyGeo.computeVertexNormals();
      posAttr.needsUpdate = true;
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
