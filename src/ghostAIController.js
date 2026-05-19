import { OPPOSITE_DIRECTIONS, getDirectionVector } from './mazeGraph.js';
import { TILE_SIZE } from './mazePieces.js';

const DEFAULT_DECISION_LEAD_DISTANCE = 4.5;
const DEFAULT_AI_PROFILE = 'direct';
const PINKY_LOOKAHEAD_TILES = 4;
const INKY_LOOKAHEAD_TILES = 2;
const CLYDE_SHY_DISTANCE_TILES = 8;
const CLYDE_SCATTER_OFFSET_TILES = 8;

export class GhostAIController {
  constructor(options = {}) {
    this.enabled = false;
    this.profile = options.profile ?? DEFAULT_AI_PROFILE;
    this.lastDecisionNodeId = null;
    this.decisionLeadDistance = options.decisionLeadDistance ?? DEFAULT_DECISION_LEAD_DISTANCE;
    this.randomSeed = options.randomSeed ?? this.createDefaultSeed(this.profile);
    this.pendingFrightenedReverse = false;
  }

  setProfile(profile = DEFAULT_AI_PROFILE) {
    this.profile = profile;
    this.lastDecisionNodeId = null;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    this.lastDecisionNodeId = null;
  }

  reset() {
    this.lastDecisionNodeId = null;
    this.pendingFrightenedReverse = false;
  }

  createDefaultSeed(profile) {
    return Array.from(profile).reduce((seed, char) => (
      ((seed * 31) + char.charCodeAt(0)) >>> 0
    ), 0x9e3779b9);
  }

  forceReverse(ghostController) {
    const reverseDirection = ghostController?.currentDirection
      ? OPPOSITE_DIRECTIONS[ghostController.currentDirection]
      : null;

    if (!reverseDirection) return;

    ghostController.setDesiredDirection(reverseDirection);
    this.lastDecisionNodeId = null;
  }

  queueFrightenedReverse() {
    this.pendingFrightenedReverse = true;
    this.lastDecisionNodeId = null;
  }

  update({ ghostController, pacman, ghost, canGhostBeEaten, isGhostRespawning, ghosts = [] }) {
    if (!this.enabled || !ghostController || !pacman || isGhostRespawning) return;

    const context = this.getDecisionContext(ghostController);
    if (!context?.node || this.lastDecisionNodeId === context.node.id) return;

    const targetPosition = this.getTargetPosition({
      pacman,
      ghost,
      ghostController,
      ghosts,
      fleeing: canGhostBeEaten(ghost)
    });
    const edge = this.chooseEdge({
      decisionNode: context.node,
      incomingDirection: context.incomingDirection,
      targetPosition,
      ghostController,
      fleeing: canGhostBeEaten(ghost)
    });
    if (!edge) return;

    ghostController.setDesiredDirection(edge.inputDirection);
    this.lastDecisionNodeId = context.node.id;
  }

  getTargetPosition({ pacman, ghost, ghosts }) {
    if (this.profile === 'ambush') {
      return this.getPacmanLookaheadPosition(pacman, PINKY_LOOKAHEAD_TILES);
    }

    if (this.profile === 'vector') {
      return this.getVectorTargetPosition({ pacman, ghosts });
    }

    if (this.profile === 'shy') {
      return this.getShyTargetPosition({ pacman, ghost });
    }

    return pacman.position;
  }

  getPacmanLookaheadPosition(pacman, tileCount) {
    const direction = pacman.userData.controller?.getFacingDirection?.()
      || pacman.userData.facingDirection
      || 'east';

    return pacman.position.clone().addScaledVector(
      getDirectionVector(direction),
      TILE_SIZE * tileCount
    );
  }

  getVectorTargetPosition({ pacman, ghosts }) {
    const blinky = ghosts.find((entry) => entry.id === 'blinky');
    if (!blinky?.model) {
      return this.getPacmanLookaheadPosition(pacman, INKY_LOOKAHEAD_TILES);
    }

    const pacmanAhead = this.getPacmanLookaheadPosition(pacman, INKY_LOOKAHEAD_TILES);
    return pacmanAhead
      .clone()
      .sub(blinky.model.position)
      .multiplyScalar(2)
      .add(blinky.model.position);
  }

  getShyTargetPosition({ pacman, ghost }) {
    if (!ghost) return pacman.position;

    const shyDistance = TILE_SIZE * CLYDE_SHY_DISTANCE_TILES;
    if (ghost.position.distanceTo(pacman.position) > shyDistance) {
      return pacman.position;
    }

    return pacman.position.clone().add(new (pacman.position.constructor)(
      -TILE_SIZE * CLYDE_SCATTER_OFFSET_TILES,
      0,
      TILE_SIZE * CLYDE_SCATTER_OFFSET_TILES
    ));
  }

  getDecisionContext(ghostController) {
    if (!ghostController.route || !ghostController.activeEdge) {
      if (!ghostController.currentNode || this.isTeleportTransitionNode(ghostController.currentNode)) return null;

      return {
        node: ghostController.currentNode,
        incomingDirection: ghostController.currentDirection
      };
    }

    if (this.isTeleportTransitionNode(ghostController.activeEdge.to)) return null;

    const distanceToDecision = ghostController.route.totalLength - ghostController.route.progress;
    if (distanceToDecision > this.decisionLeadDistance) return null;

    return {
      node: ghostController.activeEdge.to,
      incomingDirection: ghostController.activeEdge.endDirection
    };
  }

  chooseEdge({ decisionNode, incomingDirection, targetPosition, ghostController, fleeing }) {
    if (!decisionNode?.edges?.length || !targetPosition) return null;

    const reverseDirection = incomingDirection ? OPPOSITE_DIRECTIONS[incomingDirection] : null;
    let candidates = ghostController?.getAllowedEdges?.(decisionNode) || decisionNode.edges;

    if (fleeing && this.pendingFrightenedReverse) {
      this.pendingFrightenedReverse = false;

      const reverseEdge = reverseDirection
        ? candidates.find((edge) => edge.inputDirection === reverseDirection)
        : null;

      if (reverseEdge) {
        return reverseEdge;
      }
    }

    const nonReverseCandidates = reverseDirection
      ? candidates.filter((edge) => edge.inputDirection !== reverseDirection)
      : candidates;

    if (nonReverseCandidates.length > 0) {
      candidates = nonReverseCandidates;
    }

    if (fleeing) {
      return this.chooseFrightenedEdge(candidates);
    }

    return candidates.reduce((best, edge) => {
      const distanceSq = edge.to.position.distanceToSquared(targetPosition);
      if (!best) return { edge, distanceSq };

      return distanceSq < best.distanceSq ? { edge, distanceSq } : best;
    }, null)?.edge || null;
  }

  chooseFrightenedEdge(candidates) {
    if (candidates.length === 0) return null;

    this.randomSeed = ((this.randomSeed * 1664525) + 1013904223) >>> 0;
    return candidates[this.randomSeed % candidates.length];
  }

  isTeleportTransitionNode(node) {
    return node?.type === 'teleport_event_horizon';
  }
}
