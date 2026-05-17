import * as THREE from 'three';
import { TILE_SIZE } from './mazePieces.js';
import { createPellet } from './entities.js';

export const PELLET_TYPES = {
  STANDARD: 0,
  POWER: 1
};

export class PelletManager {
  constructor(scene) {
    this.scene = scene;
    
    // We will initialize the meshes when we parse the map
    this.coreMesh = null;
    this.glowMesh = null;
    this.pellets = []; // Array to track logical state { position: Vector3, type: number, active: boolean, mesh: Object3D (for power pellets) }
    
    this.powerPelletGroup = new THREE.Group();
    this.scene.add(this.powerPelletGroup);

    this.dummy = new THREE.Object3D(); // Helper to compute matrices
  }

  buildFromMap(mazeGraph) {
    if (this.coreMesh) {
      this.scene.remove(this.coreMesh);
      this.scene.remove(this.glowMesh);
      this.coreMesh.dispose();
      this.glowMesh.dispose();
      this.pellets = [];
    }

    // Clear power pellets
    while(this.powerPelletGroup.children.length > 0){
        this.powerPelletGroup.remove(this.powerPelletGroup.children[0]);
    }
    if (!this.scene.children.includes(this.powerPelletGroup)) {
      this.scene.add(this.powerPelletGroup);
    }

    const positions = [];

    // Parse every tile in the maze to determine pellet positions
    mazeGraph.tiles.forEach(tile => {
      const tilePos = tile.position;
      const rotation = tile.rotation;
      const hasPowerPellet = tile.hasPowerPellet;

      // Helper to rotate local coordinate offsets
      const rotateOffset = (x, z) => {
        const nx = x * Math.cos(rotation) + z * Math.sin(rotation);
        const nz = -x * Math.sin(rotation) + z * Math.cos(rotation);
        return new THREE.Vector3(nx, 2.0, nz); // 2.0 is the ENTITY_HEIGHT
      };

      if (tile.type === 'straight') {
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, -6)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, 0)), power: hasPowerPellet });
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, 6)), power: false });
      } 
      else if (tile.type === 'corner') {
        const cornerOffset = 3.57 * (1 - Math.SQRT1_2); // 1.0456
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, -6)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(cornerOffset, -cornerOffset)), power: hasPowerPellet });
        positions.push({ pos: tilePos.clone().add(rotateOffset(6, 0)), power: false });
      }
      else if (tile.type === 'tjunction') {
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, 0)), power: hasPowerPellet });
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, -6)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(-6, 0)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(6, 0)), power: false });
      }
      else if (tile.type === 'crossroad') {
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, 0)), power: hasPowerPellet });
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, -6)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(0, 6)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(-6, 0)), power: false });
        positions.push({ pos: tilePos.clone().add(rotateOffset(6, 0)), power: false });
      }
    });

    this.pellets = [];
    const standardPositions = [];

    positions.forEach(p => {
        if (p.power) {
            const powerMesh = createPellet();
            powerMesh.position.copy(p.pos);
            powerMesh.position.y = 2.5; // Power pellets float a bit higher
            powerMesh.scale.setScalar(0.65); // Scale it up to make it stand out
            this.powerPelletGroup.add(powerMesh);

            this.pellets.push({
                position: powerMesh.position,
                type: PELLET_TYPES.POWER,
                active: true,
                mesh: powerMesh
            });
        } else {
            standardPositions.push(p.pos);
        }
    });

    standardPositions.forEach((pos, i) => {
        this.pellets.push({
            position: pos,
            type: PELLET_TYPES.STANDARD,
            active: true,
            meshIndex: i
        });
    });

    const color = 0xffaa00;
    const geometry = new THREE.SphereGeometry(0.35, 16, 16);

    // EXACT same materials as entities.js
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8
    });

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.coreMesh = new THREE.InstancedMesh(geometry, coreMaterial, standardPositions.length);
    this.glowMesh = new THREE.InstancedMesh(geometry, glowMaterial, standardPositions.length);

    this.coreMesh.frustumCulled = false;
    this.glowMesh.frustumCulled = false;

    // Apply the initial positions for standard pellets
    standardPositions.forEach((pos, i) => {
      this.dummy.position.copy(pos);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.updateMatrix();
      this.coreMesh.setMatrixAt(i, this.dummy.matrix);

      this.dummy.scale.set(1.4, 1.4, 1.4); // Glow is 40% larger
      this.dummy.updateMatrix();
      this.glowMesh.setMatrixAt(i, this.dummy.matrix);
    });

    this.coreMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;

    this.scene.add(this.coreMesh);
    this.scene.add(this.glowMesh);
  }

  checkCollisions(pacmanPosition) {
    const eatenPellets = [];
    const EAT_RADIUS = 1.8; 

    for (let i = 0; i < this.pellets.length; i++) {
      const pellet = this.pellets[i];
      if (!pellet.active) continue;

      const distSq = pacmanPosition.distanceToSquared(pellet.position);
      
      if (distSq < EAT_RADIUS * EAT_RADIUS) {
        // Eat it!
        pellet.active = false;
        eatenPellets.push(pellet);

        // Hide it visually
        if (pellet.type === PELLET_TYPES.POWER) {
          pellet.mesh.visible = false;
        } else {
          this.dummy.position.copy(pellet.position);
          this.dummy.scale.set(0, 0, 0); 
          this.dummy.updateMatrix();
          
          this.coreMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);
          this.glowMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);
          
          this.coreMesh.instanceMatrix.needsUpdate = true;
          this.glowMesh.instanceMatrix.needsUpdate = true;
        }
      }
    }

    return eatenPellets;
  }

  reset() {
    if (!this.coreMesh) return;
    
    this.pellets.forEach((pellet) => {
      pellet.active = true;
      
      if (pellet.type === PELLET_TYPES.POWER) {
        pellet.mesh.visible = true;
      } else {
        this.dummy.position.copy(pellet.position);
        this.dummy.scale.set(1, 1, 1);
        this.dummy.updateMatrix();
        this.coreMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);

        this.dummy.scale.set(1.4, 1.4, 1.4);
        this.dummy.updateMatrix();
        this.glowMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);
      }
    });

    this.coreMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;
  }

  getEatenCount() {
    return this.pellets.filter(p => !p.active).length;
  }

  getTotalCount() {
    return this.pellets.length;
  }

  update(time) {
    if (!this.coreMesh) return;

    this.pellets.forEach((pellet) => {
      if (!pellet.active) return;
      
      if (pellet.type === PELLET_TYPES.POWER) {
        if (pellet.mesh.userData.update) {
            pellet.mesh.userData.update(time);
        }
      } else {
        this.dummy.position.copy(pellet.position);
        this.dummy.position.y += Math.sin(time * 4 + pellet.position.x) * 0.005;
        
        // Update Core
        this.dummy.scale.set(1, 1, 1);
        this.dummy.updateMatrix();
        this.coreMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);

        // Update Glow
        this.dummy.scale.set(1.4, 1.4, 1.4);
        this.dummy.updateMatrix();
        this.glowMesh.setMatrixAt(pellet.meshIndex, this.dummy.matrix);
      }
    });
    
    this.coreMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;
  }
}
