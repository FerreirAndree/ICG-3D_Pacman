import * as THREE from 'three';
import { TILE_SIZE } from './mazePieces.js';
import { DIRECTION_YAW, DIRECTIONS, LEFT_DIRECTIONS, OPPOSITE_DIRECTIONS, RIGHT_DIRECTIONS, getAbsoluteDirections, getDirectionVector } from './mazeGraph.js';

const ENTITY_HEIGHT = 3.2;
const CENTER_EPSILON = 0.001;
const BODY_TURN_RESPONSIVENESS = 7.5;
const MID_CORNER_REVERSE_BODY_TURN_RESPONSIVENESS = 9.25;
const CORNER_BEND_RADIUS = 2.55 * 1.4;

function getTileCenter(tile) {
  return new THREE.Vector3(tile.position.x, ENTITY_HEIGHT, tile.position.z);
}

function getBoundaryPoint(tile, direction) {
  return getTileCenter(tile).addScaledVector(getDirectionVector(direction), TILE_SIZE / 2);
}

function shortestAngleDelta(from, to) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function rotateLocalPoint(point, rotation) {
  const x = point.x * Math.cos(rotation) + point.z * Math.sin(rotation);
  const z = -point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
  return new THREE.Vector3(x, point.y, z);
}

function createBaseCornerPath() {
  const points = [
    new THREE.Vector3(0, ENTITY_HEIGHT, -TILE_SIZE / 2),
    new THREE.Vector3(0, ENTITY_HEIGHT, -CORNER_BEND_RADIUS)
  ];

  for (let index = 1; index <= 8; index += 1) {
    const t = index / 8;
    const angle = Math.PI - t * (Math.PI / 2);
    points.push(new THREE.Vector3(
      CORNER_BEND_RADIUS + CORNER_BEND_RADIUS * Math.cos(angle),
      ENTITY_HEIGHT,
      -CORNER_BEND_RADIUS + CORNER_BEND_RADIUS * Math.sin(angle)
    ));
  }

  points.push(new THREE.Vector3(TILE_SIZE / 2, ENTITY_HEIGHT, 0));
  return points;
}

function getCornerPath(tile) {
  return createBaseCornerPath().map((point) => (
    rotateLocalPoint(point, tile.rotation).add(tile.position)
  ));
}

function getCornerBendEntrancePoint(tile, connector) {
  const baseDirections = getAbsoluteDirections(['north', 'east'], tile.rotation);
  const path = getCornerPath(tile);

  if (baseDirections[0] === connector) return path[1].clone();
  if (baseDirections[1] === connector) return path[path.length - 2].clone();

  return getTileCenter(tile);
}

function getNodeId(tile, connector = null) {
  return tile.type === 'corner' ? `${tile.key}:${connector}` : `${tile.key}:center`;
}

function getTargetNodeId(tile, entryDirection) {
  return tile.type === 'corner'
    ? getNodeId(tile, entryDirection)
    : getNodeId(tile);
}

function getCornerTurnPoints(tile, fromConnector, toConnector) {
  const baseDirections = getAbsoluteDirections(['north', 'east'], tile.rotation);
  const path = getCornerPath(tile);
  const bendPath = path.slice(1, -1);

  if (baseDirections[0] === fromConnector && baseDirections[1] === toConnector) {
    return bendPath;
  }

  if (baseDirections[1] === fromConnector && baseDirections[0] === toConnector) {
    return bendPath.reverse();
  }

  return [getCornerBendEntrancePoint(tile, fromConnector), getCornerBendEntrancePoint(tile, toConnector)];
}

function buildRoute(points) {
  const cumulativeLengths = [0];
  let totalLength = 0;

  for (let index = 1; index < points.length; index += 1) {
    totalLength += points[index - 1].distanceTo(points[index]);
    cumulativeLengths.push(totalLength);
  }

  return {
    points,
    cumulativeLengths,
    totalLength,
    progress: 0
  };
}

function getRoutePosition(route) {
  if (route.progress <= 0) return route.points[0].clone();
  if (route.progress >= route.totalLength) return route.points[route.points.length - 1].clone();

  const segmentIndex = route.cumulativeLengths.findIndex((length) => length >= route.progress);
  const endIndex = Math.max(1, segmentIndex);
  const startDistance = route.cumulativeLengths[endIndex - 1];
  const endDistance = route.cumulativeLengths[endIndex];
  const segmentProgress = (route.progress - startDistance) / (endDistance - startDistance);

  return route.points[endIndex - 1].clone().lerp(route.points[endIndex], segmentProgress);
}

function createEdge(fromNode, toNode, inputDirection, endDirection, points, options = {}) {
  return {
    from: fromNode,
    to: toNode,
    inputDirection,
    endDirection,
    continueDirection: options.continueDirection ?? null,
    reverseDirection: options.reverseDirection ?? OPPOSITE_DIRECTIONS[endDirection],
    reverseContinueDirection: options.reverseContinueDirection ?? null,
    points
  };
}

function buildNavigationGraph(mazeGraph) {
  const nodes = new Map();

  function addNode(tile, connector = null) {
    const id = getNodeId(tile, connector);
    if (nodes.has(id)) return nodes.get(id);

    const node = {
      id,
      tile,
      connector,
      type: tile.type === 'corner' ? 'corner' : 'center',
      position: tile.type === 'corner'
        ? getCornerBendEntrancePoint(tile, connector)
        : getTileCenter(tile),
      edges: []
    };

    nodes.set(id, node);
    return node;
  }

  mazeGraph.tiles.forEach((tile) => {
    if (tile.type === 'corner') {
      tile.connectors.forEach((connector) => addNode(tile, connector));
    } else {
      addNode(tile);
    }
  });

  function getNodeForTileEntry(tile, entryDirection) {
    return nodes.get(getTargetNodeId(tile, entryDirection));
  }

  mazeGraph.tiles.forEach((tile) => {
    if (tile.type !== 'corner') {
      const fromNode = nodes.get(getNodeId(tile));

      tile.exits.forEach((direction) => {
        const neighbor = mazeGraph.getNeighbor(tile, direction);
        const toNode = getNodeForTileEntry(neighbor, OPPOSITE_DIRECTIONS[direction]);
        const points = [fromNode.position, getBoundaryPoint(tile, direction), toNode.position];

        fromNode.edges.push(createEdge(fromNode, toNode, direction, direction, points, {
          reverseDirection: OPPOSITE_DIRECTIONS[direction],
          reverseContinueDirection: OPPOSITE_DIRECTIONS[direction]
        }));
      });

      return;
    }

    tile.connectors.forEach((connector) => {
      const fromNode = nodes.get(getNodeId(tile, connector));
      const neighbor = mazeGraph.getNeighbor(tile, connector);

      if (neighbor && tile.exits.has(connector)) {
        const toNode = getNodeForTileEntry(neighbor, OPPOSITE_DIRECTIONS[connector]);
        const points = [fromNode.position, getBoundaryPoint(tile, connector), toNode.position];

        fromNode.edges.push(createEdge(fromNode, toNode, connector, connector, points, {
          reverseDirection: OPPOSITE_DIRECTIONS[connector],
          reverseContinueDirection: null
        }));
      }

      tile.connectors
        .filter((targetConnector) => targetConnector !== connector)
        .forEach((targetConnector) => {
          const neighbor = mazeGraph.getNeighbor(tile, targetConnector);
          if (!neighbor || !tile.exits.has(targetConnector)) return;

          const toNode = nodes.get(getNodeId(tile, targetConnector));
          const points = getCornerTurnPoints(tile, connector, targetConnector);

          fromNode.edges.push(createEdge(fromNode, toNode, targetConnector, targetConnector, points, {
            continueDirection: targetConnector,
            reverseDirection: connector,
            reverseContinueDirection: connector
          }));
        });
    });
  });

  return nodes;
}

export class PacmanController {
  constructor(model, graph, options = {}) {
    this.model = model;
    this.graph = graph;
    this.navigationNodes = buildNavigationGraph(graph);
    this.speed = options.speed ?? 13;
    this.currentNode = null;
    this.currentDirection = null;
    this.desiredDirection = null;
    this.desiredIntent = null;
    this.facingDirection = 'east';
    this.bodyFacingDirection = 'east';
    this.bodyTurnResponsiveness = BODY_TURN_RESPONSIVENESS;
    this.boostedBodyTurnEdgesRemaining = 0;
    this.activeEdge = null;
    this.route = null;
    this.forceContinueDirection = null;
    this.isMoving = false;
  }

  reset(spawnTile, direction = null) {
    this.currentNode = this.navigationNodes.get(getNodeId(spawnTile));
    this.currentDirection = null;
    this.desiredDirection = direction;
    this.desiredIntent = null;
    this.facingDirection = direction || 'east';
    this.bodyFacingDirection = this.facingDirection;
    this.bodyTurnResponsiveness = BODY_TURN_RESPONSIVENESS;
    this.boostedBodyTurnEdgesRemaining = 0;
    this.activeEdge = null;
    this.route = null;
    this.forceContinueDirection = null;
    this.isMoving = false;

    this.model.position.copy(this.currentNode.position);
    this.model.rotation.set(0, DIRECTION_YAW[this.bodyFacingDirection], 0);
  }

  setDesiredDirection(direction) {
    if (!DIRECTIONS[direction]) return;

    if (this.canReverseImmediately(direction)) {
      this.reverseActiveEdge();
      return;
    }

    if (!this.isMoving) {
      const edge = this.findEdge(direction);
      if (!edge) return;

      this.desiredDirection = direction;
      this.startEdge(edge);
      return;
    }

    this.desiredDirection = direction;
  }

  setDesiredIntent(intent) {
    const direction = this.resolveIntentDirection(intent);
    if (!direction) return;

    if (this.canReverseImmediately(direction)) {
      this.reverseActiveEdge();
      return;
    }

    if (!this.isMoving) {
      const edge = this.findEdge(direction);
      if (!edge) return;

      this.desiredIntent = null;
      this.desiredDirection = null;
      this.startEdge(edge);
      return;
    }

    this.desiredIntent = intent;
    this.desiredDirection = null;
  }

  update(deltaTime, elapsedTime) {
    if (!this.currentNode) return;

    if (this.model.userData.update) {
      this.model.userData.update(elapsedTime);
    }

    let remainingDistance = this.speed * deltaTime;

    while (remainingDistance > CENTER_EPSILON && this.route) {
      const distanceLeft = this.route.totalLength - this.route.progress;

      if (remainingDistance >= distanceLeft) {
        this.route.progress = this.route.totalLength;
        this.model.position.copy(getRoutePosition(this.route));
        remainingDistance -= distanceLeft;
        this.finishActiveEdge();
      } else {
        this.route.progress += remainingDistance;
        this.model.position.copy(getRoutePosition(this.route));
        remainingDistance = 0;
      }
    }

    this.isMoving = Boolean(this.route);
    this.updateFacing(deltaTime);
  }

  findEdge(direction) {
    return this.currentNode?.edges.find((edge) => edge.inputDirection === direction) || null;
  }

  startEdge(edge, forceContinueDirection = null) {
    this.activeEdge = edge;
    this.route = buildRoute(edge.points);
    this.forceContinueDirection = forceContinueDirection ?? edge.continueDirection;
    this.currentDirection = edge.endDirection;
    this.facingDirection = edge.endDirection;
    this.bodyFacingDirection = edge.endDirection;
    this.isMoving = true;
  }

  finishActiveEdge() {
    const finishedEdge = this.activeEdge;
    const forceContinueDirection = this.forceContinueDirection;

    this.currentNode = finishedEdge.to;
    this.activeEdge = null;
    this.route = null;
    this.forceContinueDirection = null;
    if (this.boostedBodyTurnEdgesRemaining > 0) {
      this.boostedBodyTurnEdgesRemaining -= 1;
      if (this.boostedBodyTurnEdgesRemaining === 0) {
        this.bodyTurnResponsiveness = BODY_TURN_RESPONSIVENESS;
      }
    }

    const forcedEdge = forceContinueDirection ? this.findEdge(forceContinueDirection) : null;
    if (forcedEdge && this.currentNode.type === 'corner') {
      this.startEdge(forcedEdge);
      return;
    }

    const desiredEdge = this.findDesiredEdge();
    if (desiredEdge) {
      this.desiredDirection = null;
      this.desiredIntent = null;
      this.startEdge(desiredEdge);
      return;
    }

    this.desiredDirection = null;
    this.desiredIntent = null;

    if (forcedEdge) {
      this.startEdge(forcedEdge);
      return;
    }

    if (this.currentNode.type !== 'corner') {
      const forwardEdge = this.currentDirection ? this.findEdge(this.currentDirection) : null;
      if (forwardEdge) {
        this.startEdge(forwardEdge);
        return;
      }
    }

    this.currentDirection = null;
    this.isMoving = false;
  }

  canReverseImmediately(direction) {
    return (
      this.route
      && this.activeEdge
      && this.currentDirection
      && direction === OPPOSITE_DIRECTIONS[this.currentDirection]
      && this.route.progress > 0.05
      && this.route.totalLength - this.route.progress > 0.05
    );
  }

  reverseActiveEdge() {
    const oldEdge = this.activeEdge;
    const oldRoute = this.route;
    const isReversingCornerBend = oldEdge.from.type === 'corner' && oldEdge.to.type === 'corner';
    const reversedPoints = oldEdge.points.slice().reverse().map((point) => point.clone());
    const reversedEdge = {
      from: oldEdge.to,
      to: oldEdge.from,
      inputDirection: oldEdge.reverseDirection,
      endDirection: oldEdge.reverseDirection,
      continueDirection: oldEdge.reverseContinueDirection,
      reverseDirection: oldEdge.endDirection,
      reverseContinueDirection: oldEdge.endDirection,
      points: reversedPoints
    };

    this.activeEdge = reversedEdge;
    this.route = buildRoute(reversedPoints);
    this.route.progress = oldRoute.totalLength - oldRoute.progress;
    this.forceContinueDirection = oldEdge.reverseContinueDirection;
    this.currentDirection = reversedEdge.endDirection;
    this.facingDirection = reversedEdge.endDirection;
    this.bodyFacingDirection = isReversingCornerBend
      ? OPPOSITE_DIRECTIONS[oldEdge.endDirection]
      : reversedEdge.endDirection;
    if (isReversingCornerBend) {
      this.bodyTurnResponsiveness = MID_CORNER_REVERSE_BODY_TURN_RESPONSIVENESS;
      this.boostedBodyTurnEdgesRemaining = 2;
    }
    this.desiredDirection = null;
    this.desiredIntent = null;
    this.model.position.copy(getRoutePosition(this.route));
    this.isMoving = true;
  }

  findDesiredEdge() {
    if (this.desiredIntent) {
      const direction = this.resolveIntentDirection(this.desiredIntent);
      return direction ? this.findEdge(direction) : null;
    }

    return this.desiredDirection ? this.findEdge(this.desiredDirection) : null;
  }

  resolveIntentDirection(intent) {
    const baseDirection = this.currentDirection || this.facingDirection;

    if (intent === 'forward') return baseDirection;
    if (intent === 'right') return RIGHT_DIRECTIONS[baseDirection];
    if (intent === 'reverse') return OPPOSITE_DIRECTIONS[baseDirection];
    if (intent === 'left') return LEFT_DIRECTIONS[baseDirection];

    return null;
  }

  updateFacing(deltaTime) {
    if (!this.bodyFacingDirection) return;

    const targetYaw = DIRECTION_YAW[this.bodyFacingDirection];
    const delta = shortestAngleDelta(this.model.rotation.y, targetYaw);
    const turnRate = 1 - Math.exp(-this.bodyTurnResponsiveness * deltaTime);
    this.model.rotation.y += delta * turnRate;
  }

  getFacingDirection() {
    return this.facingDirection || 'east';
  }

  getFollowDirection() {
    return getDirectionVector(this.getFacingDirection());
  }

  getCameraTarget() {
    return this.model.position.clone();
  }
}
