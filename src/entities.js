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
