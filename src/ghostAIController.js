import { OPPOSITE_DIRECTIONS } from './mazeGraph.js';

const DEFAULT_DECISION_LEAD_DISTANCE = 4.5;

export class GhostAIController {
  constructor(options = {}) {
    this.enabled = false;
    this.lastDecisionNodeId = null;
    this.decisionLeadDistance = options.decisionLeadDistance ?? DEFAULT_DECISION_LEAD_DISTANCE;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    this.lastDecisionNodeId = null;
  }

  reset() {
    this.lastDecisionNodeId = null;
  }

  forceReverse(ghostController) {
    const reverseDirection = ghostController?.currentDirection
      ? OPPOSITE_DIRECTIONS[ghostController.currentDirection]
      : null;

    if (!reverseDirection) return;

    ghostController.setDesiredDirection(reverseDirection);
    this.lastDecisionNodeId = null;
  }

  update({ ghostController, pacman, ghost, canGhostBeEaten, isGhostRespawning }) {
    if (!this.enabled || !ghostController || !pacman || isGhostRespawning) return;

    const context = this.getDecisionContext(ghostController);
    if (!context?.node || this.lastDecisionNodeId === context.node.id) return;

    const edge = this.chooseEdge({
      decisionNode: context.node,
      incomingDirection: context.incomingDirection,
      pacmanPosition: pacman.position,
      fleeing: canGhostBeEaten(ghost)
    });
    if (!edge) return;

    ghostController.setDesiredDirection(edge.inputDirection);
    this.lastDecisionNodeId = context.node.id;
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

  chooseEdge({ decisionNode, incomingDirection, pacmanPosition, fleeing }) {
    if (!decisionNode?.edges?.length || !pacmanPosition) return null;

    const reverseDirection = incomingDirection ? OPPOSITE_DIRECTIONS[incomingDirection] : null;
    let candidates = decisionNode.edges;

    const nonReverseCandidates = reverseDirection
      ? candidates.filter((edge) => edge.inputDirection !== reverseDirection)
      : candidates;

    if (nonReverseCandidates.length > 0) {
      candidates = nonReverseCandidates;
    }

    return candidates.reduce((best, edge) => {
      const distanceSq = edge.to.position.distanceToSquared(pacmanPosition);
      if (!best) return { edge, distanceSq };

      return fleeing
        ? (distanceSq > best.distanceSq ? { edge, distanceSq } : best)
        : (distanceSq < best.distanceSq ? { edge, distanceSq } : best);
    }, null)?.edge || null;
  }

  isTeleportTransitionNode(node) {
    return node?.type === 'teleport_event_horizon';
  }
}
