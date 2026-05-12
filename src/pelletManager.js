import * as THREE from 'three';
import { TILE_SIZE } from './mazePieces.js';

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
    this.pellets = []; // Array to track logical state { position: Vector3, type: number, active: boolean }
    
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

    const positions = [];

    // Parse every tile in the maze to determine pellet positions
    mazeGraph.tiles.forEach(tile => {
      const tilePos = tile.position;
      const rotation = tile.rotation;

      // Helper to rotate local coordinate offsets
      const rotateOffset = (x, z) => {
        const nx = x * Math.cos(rotation) + z * Math.sin(rotation);
        const nz = -x * Math.sin(rotation) + z * Math.cos(rotation);
        return new THREE.Vector3(nx, 2.0, nz); // 2.0 is the ENTITY_HEIGHT
      };

      if (tile.type === 'straight') {
        positions.push(tilePos.clone().add(rotateOffset(0, -6)));
        positions.push(tilePos.clone().add(rotateOffset(0, 0)));
        positions.push(tilePos.clone().add(rotateOffset(0, 6)));
      } 
      else if (tile.type === 'corner') {
        positions.push(tilePos.clone().add(rotateOffset(0, -6)));
        positions.push(tilePos.clone().add(rotateOffset(0, 0)));
        positions.push(tilePos.clone().add(rotateOffset(6, 0)));
      }
      else if (tile.type === 'tjunction') {
        positions.push(tilePos.clone().add(rotateOffset(0, 0)));
        positions.push(tilePos.clone().add(rotateOffset(0, -6)));
        positions.push(tilePos.clone().add(rotateOffset(-6, 0)));
        positions.push(tilePos.clone().add(rotateOffset(6, 0)));
      }
      else if (tile.type === 'crossroad') {
        positions.push(tilePos.clone().add(rotateOffset(0, 0)));
        positions.push(tilePos.clone().add(rotateOffset(0, -6)));
        positions.push(tilePos.clone().add(rotateOffset(0, 6)));
        positions.push(tilePos.clone().add(rotateOffset(-6, 0)));
        positions.push(tilePos.clone().add(rotateOffset(6, 0)));
      }
    });

    this.pellets = positions.map(pos => ({
      position: pos,
      type: PELLET_TYPES.STANDARD,
      active: true
    }));

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

    this.coreMesh = new THREE.InstancedMesh(geometry, coreMaterial, this.pellets.length);
    this.glowMesh = new THREE.InstancedMesh(geometry, glowMaterial, this.pellets.length);

    this.coreMesh.frustumCulled = false;
    this.glowMesh.frustumCulled = false;

    // Apply the initial positions
    this.pellets.forEach((pellet, i) => {
      this.dummy.position.copy(pellet.position);
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
    let eatenCount = 0;
    const EAT_RADIUS = 1.8; 

    for (let i = 0; i < this.pellets.length; i++) {
      const pellet = this.pellets[i];
      if (!pellet.active) continue;

      const distSq = pacmanPosition.distanceToSquared(pellet.position);
      
      if (distSq < EAT_RADIUS * EAT_RADIUS) {
        // Eat it!
        pellet.active = false;
        eatenCount++;

        // Hide it visually
        this.dummy.position.copy(pellet.position);
        this.dummy.scale.set(0, 0, 0); 
        this.dummy.updateMatrix();
        
        this.coreMesh.setMatrixAt(i, this.dummy.matrix);
        this.glowMesh.setMatrixAt(i, this.dummy.matrix);
        
        this.coreMesh.instanceMatrix.needsUpdate = true;
        this.glowMesh.instanceMatrix.needsUpdate = true;
      }
    }

    return eatenCount;
  }

  reset() {
    if (!this.coreMesh) return;
    
    this.pellets.forEach((pellet, i) => {
      pellet.active = true;
      
      this.dummy.position.copy(pellet.position);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.updateMatrix();
      this.coreMesh.setMatrixAt(i, this.dummy.matrix);

      this.dummy.scale.set(1.4, 1.4, 1.4);
      this.dummy.updateMatrix();
      this.glowMesh.setMatrixAt(i, this.dummy.matrix);
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

    this.pellets.forEach((pellet, i) => {
      if (!pellet.active) return;
      
      this.dummy.position.copy(pellet.position);
      this.dummy.position.y += Math.sin(time * 4 + pellet.position.x) * 0.005;
      
      // Update Core
      this.dummy.scale.set(1, 1, 1);
      this.dummy.updateMatrix();
      this.coreMesh.setMatrixAt(i, this.dummy.matrix);

      // Update Glow
      this.dummy.scale.set(1.4, 1.4, 1.4);
      this.dummy.updateMatrix();
      this.glowMesh.setMatrixAt(i, this.dummy.matrix);
    });
    
    this.coreMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;
  }
}
