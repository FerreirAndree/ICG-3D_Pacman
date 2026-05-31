import * as THREE from 'three';
import { PIECE_CONNECTORS, TILE_SIZE } from './mazePieces.js';

export const DIRECTIONS = {
  north: { x: 0, z: -1 },
  east: { x: 1, z: 0 },
  south: { x: 0, z: 1 },
  west: { x: -1, z: 0 }
};

export const OPPOSITE_DIRECTIONS = {
  north: 'south',
  east: 'west',
  south: 'north',
  west: 'east'
};

export const LEFT_DIRECTIONS = {
  north: 'west',
  east: 'north',
  south: 'east',
  west: 'south'
};

export const RIGHT_DIRECTIONS = {
  north: 'east',
  east: 'south',
  south: 'west',
  west: 'north'
};

export const DIRECTION_YAW = {
  north: Math.PI,
  east: Math.PI / 2,
  south: 0,
  west: -Math.PI / 2
};

import DEFAULT_GAME_MAP from '../maps/medium_map.json';
import STARTER_GRID_MAP from '../maps/grid.json';
export { DEFAULT_GAME_MAP, STARTER_GRID_MAP };

export function makeTileKey(x, z) {
  return `${Math.round(x)},${Math.round(z)}`;
}

export function getDirectionVector(direction) {
  const vector = DIRECTIONS[direction];
  return new THREE.Vector3(vector.x, 0, vector.z);
}

export function getAbsoluteDirections(relativeDirections, rotation) {
  return relativeDirections.map((direction) => {
    const vector = DIRECTIONS[direction];
    const x = vector.x * Math.cos(rotation) + vector.z * Math.sin(rotation);
    const z = -vector.x * Math.sin(rotation) + vector.z * Math.cos(rotation);

    return Object.entries(DIRECTIONS).find(([, candidate]) => (
      candidate.x === Math.round(x) && candidate.z === Math.round(z)
    ))?.[0];
  }).filter(Boolean);
}

export function buildMazeGraph(pieces) {
  const tiles = new Map();

  pieces.forEach((piece) => {
    const [x, y, z] = piece.position;
    const relativeConnectors = PIECE_CONNECTORS[piece.type] || [];
    const connectors = getAbsoluteDirections(relativeConnectors, piece.rotation);

    tiles.set(makeTileKey(x, z), {
      key: makeTileKey(x, z),
      type: piece.type,
      position: new THREE.Vector3(x, y, z),
      rotation: piece.rotation,
      connectors,
      exits: new Set(),
      hasPowerPellet: piece.hasPowerPellet || false,
      hasPacmanSpawn: piece.hasPacmanSpawn || false,
      pacmanSpawnRotation: piece.pacmanSpawnRotation || 0
    });
  });

  tiles.forEach((tile) => {
    tile.connectors.forEach((direction) => {
      const offset = DIRECTIONS[direction];
      const neighborKey = makeTileKey(
        tile.position.x + offset.x * TILE_SIZE,
        tile.position.z + offset.z * TILE_SIZE
      );
      const neighbor = tiles.get(neighborKey);

      if (neighbor?.connectors.includes(OPPOSITE_DIRECTIONS[direction])) {
        tile.exits.add(direction);
      }
    });
  });

  return {
    tiles,
    hasTileAt(x, z) {
      return tiles.has(makeTileKey(x, z));
    },
    getTileAt(x, z) {
      return tiles.get(makeTileKey(x, z)) || null;
    },
    getNeighbor(tile, direction) {
      const offset = DIRECTIONS[direction];
      return this.getTileAt(
        tile.position.x + offset.x * TILE_SIZE,
        tile.position.z + offset.z * TILE_SIZE
      );
    },
    canMove(tile, direction) {
      return Boolean(tile?.exits.has(direction));
    }
  };
}
