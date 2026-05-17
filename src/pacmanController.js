import * as THREE from 'three';
import { TILE_SIZE } from './mazePieces.js';
import { DIRECTION_YAW, DIRECTIONS, LEFT_DIRECTIONS, OPPOSITE_DIRECTIONS, RIGHT_DIRECTIONS, getAbsoluteDirections, getDirectionVector } from './mazeGraph.js';

const ENTITY_HEIGHT = 2.0;
const CENTER_EPSILON = 0.001;
const BODY_TURN_RESPONSIVENESS = 7.5;
const MID_CORNER_REVERSE_BODY_TURN_RESPONSIVENESS = 9.25;
const CORNER_BEND_RADIUS = 2.55 * 1.4;
const CAMERA_TRAIL_MAX_POINTS = 260;
const CAMERA_TRAIL_MIN_SPACING = 0.05;

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
  if (tile.type === 'ghostchamber') {
    return `${tile.key}:${connector || 'center_front'}`;
  }
  if (tile.type === 'teleport' && connector === 'event_horizon') {
    return `${tile.key}:event_horizon`;
  }
  return tile.type === 'corner' ? `${tile.key}:${connector}` : `${tile.key}:center`;
}

function getTargetNodeId(tile, entryDirection) {
  if (tile.type === 'corner') return getNodeId(tile, entryDirection);
  if (tile.type === 'ghostchamber') return getNodeId(tile, 'center_front');
  return getNodeId(tile);
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

function getRoutePositionAt(route, progress) {
  return getRoutePosition({ ...route, progress });
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

    let position;
    let type = 'center';
    
    if (tile.type === 'corner') {
      position = getCornerBendEntrancePoint(tile, connector);
      type = 'corner';
    } else if (tile.type === 'ghostchamber') {
      const localCoords = {
        'left_back': { x: -6, z: 8.5 },
        'center_back': { x: 0, z: 8.5 },
        'right_back': { x: 6, z: 8.5 },
        'left_front': { x: -6, z: 0 },
        'center_front': { x: 0, z: 0 },
        'right_front': { x: 6, z: 0 }
      }[connector];
      const rotated = rotateLocalPoint(new THREE.Vector3(localCoords.x, 0, localCoords.z), tile.rotation);
      position = getTileCenter(tile).add(rotated);
      type = 'ghostchamber';
    } else if (tile.type === 'teleport') {
      if (connector === 'event_horizon') {
        const localWest = getAbsoluteDirections(['west'], tile.rotation)[0];
        position = getBoundaryPoint(tile, localWest);
        type = 'teleport_event_horizon';
      } else {
        position = getTileCenter(tile);
        type = 'center';
      }
    } else {
      position = getTileCenter(tile);
    }

    const node = {
      id,
      tile,
      connector,
      type,
      position,
      edges: []
    };

    nodes.set(id, node);
    return node;
  }

  mazeGraph.tiles.forEach((tile) => {
    if (tile.type === 'corner') {
      tile.connectors.forEach((connector) => addNode(tile, connector));
    } else if (tile.type === 'ghostchamber') {
      ['left_back', 'center_back', 'right_back', 'left_front', 'center_front', 'right_front'].forEach(c => addNode(tile, c));
    } else if (tile.type === 'teleport') {
      addNode(tile);
      addNode(tile, 'event_horizon');
    } else {
      addNode(tile);
    }
  });

  function getNodeForTileEntry(tile, entryDirection) {
    return nodes.get(getTargetNodeId(tile, entryDirection));
  }

  mazeGraph.tiles.forEach((tile) => {
    if (tile.type === 'ghostchamber') {
      const localNorth = getAbsoluteDirections(['north'], tile.rotation)[0];
      const localSouth = getAbsoluteDirections(['south'], tile.rotation)[0];
      const localEast = getAbsoluteDirections(['east'], tile.rotation)[0];
      const localWest = getAbsoluteDirections(['west'], tile.rotation)[0];

      const addInternalEdge = (fromId, toId, direction) => {
        const fromNode = nodes.get(getNodeId(tile, fromId));
        const toNode = nodes.get(getNodeId(tile, toId));
        const points = [fromNode.position, toNode.position];
        fromNode.edges.push(createEdge(fromNode, toNode, direction, direction, points, {
          reverseDirection: OPPOSITE_DIRECTIONS[direction],
          reverseContinueDirection: OPPOSITE_DIRECTIONS[direction]
        }));
      };

      addInternalEdge('left_back', 'center_back', localEast);
      addInternalEdge('center_back', 'left_back', localWest);
      
      addInternalEdge('center_back', 'right_back', localEast);
      addInternalEdge('right_back', 'center_back', localWest);

      addInternalEdge('left_front', 'center_front', localEast);
      addInternalEdge('center_front', 'left_front', localWest);

      addInternalEdge('center_front', 'right_front', localEast);
      addInternalEdge('right_front', 'center_front', localWest);

      addInternalEdge('left_back', 'left_front', localNorth);
      addInternalEdge('left_front', 'left_back', localSouth);

      addInternalEdge('center_back', 'center_front', localNorth);
      addInternalEdge('center_front', 'center_back', localSouth);

      addInternalEdge('right_back', 'right_front', localNorth);
      addInternalEdge('right_front', 'right_back', localSouth);

      const neighbor = mazeGraph.getNeighbor(tile, localNorth);
      if (neighbor && tile.exits.has(localNorth)) {
        const fromNode = nodes.get(getNodeId(tile, 'center_front'));
        const toNode = getNodeForTileEntry(neighbor, OPPOSITE_DIRECTIONS[localNorth]);
        const points = [fromNode.position, getBoundaryPoint(tile, localNorth), toNode.position];
        fromNode.edges.push(createEdge(fromNode, toNode, localNorth, localNorth, points, {
          reverseDirection: OPPOSITE_DIRECTIONS[localNorth],
          reverseContinueDirection: OPPOSITE_DIRECTIONS[localNorth]
        }));
      }

      return;
    }

    if (tile.type === 'teleport') {
      const fromNode = nodes.get(getNodeId(tile));
      const localWest = getAbsoluteDirections(['west'], tile.rotation)[0];
      const localEast = getAbsoluteDirections(['east'], tile.rotation)[0];

      const eventHorizonNode = nodes.get(getNodeId(tile, 'event_horizon'));
      
      fromNode.edges.push(createEdge(fromNode, eventHorizonNode, localWest, localWest, [fromNode.position, eventHorizonNode.position], {
        reverseDirection: localEast,
        reverseContinueDirection: localEast
      }));

      eventHorizonNode.edges.push(createEdge(eventHorizonNode, fromNode, localEast, localEast, [eventHorizonNode.position, fromNode.position], {
        reverseDirection: localWest,
        reverseContinueDirection: localWest
      }));

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
    this.cameraTrail = [];
    this.startedIntentEvents = [];
  }

  reset(spawnTile, direction = null) {
    let connector = null;
    if (spawnTile.type === 'corner') {
      connector = spawnTile.connectors[0];
    }
    this.currentNode = this.navigationNodes.get(getNodeId(spawnTile, connector));
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
    this.cameraTrail = [this.currentNode.position.clone()];
    this.startedIntentEvents = [];

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
    if (!direction) return { accepted: false, direction: null, reverseIntent: false };

    const reverseIntent = intent === 'reverse';

    if (this.canReverseImmediately(direction)) {
      this.reverseActiveEdge();
      return { accepted: true, direction, reverseIntent, started: true };
    }

    if (!this.isMoving) {
      const edge = this.findEdge(direction);
      if (!edge) return { accepted: false, direction, reverseIntent };

      this.desiredIntent = null;
      this.desiredDirection = null;
      this.startEdge(edge, null, intent);
      return { accepted: true, direction, reverseIntent, started: true };
    }

    this.desiredIntent = intent;
    this.desiredDirection = null;
    return { accepted: true, direction, reverseIntent, queued: true };
  }

  update(deltaTime, elapsedTime) {
    if (!this.currentNode) return;

    if (this.model.userData.update) {
      this.model.userData.update(elapsedTime);
    }

    let remainingDistance = this.speed * deltaTime;

    while (remainingDistance > CENTER_EPSILON && this.route) {
      const route = this.route;
      const previousProgress = route.progress;
      const distanceLeft = this.route.totalLength - this.route.progress;

      if (remainingDistance >= distanceLeft) {
        this.route.progress = this.route.totalLength;
        this.recordCameraTrail(route, previousProgress, route.totalLength);
        this.model.position.copy(getRoutePosition(this.route));
        remainingDistance -= distanceLeft;
        this.finishActiveEdge();
      } else {
        this.route.progress += remainingDistance;
        this.recordCameraTrail(route, previousProgress, route.progress);
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

  startEdge(edge, forceContinueDirection = null, startedFromIntent = null) {
    const isUTurn = this.currentDirection && edge.inputDirection === OPPOSITE_DIRECTIONS[this.currentDirection];

    this.activeEdge = edge;
    this.route = buildRoute(edge.points);
    this.forceContinueDirection = forceContinueDirection ?? edge.continueDirection;
    this.currentDirection = edge.endDirection;
    this.facingDirection = edge.endDirection;
    this.bodyFacingDirection = edge.endDirection;
    this.isMoving = true;

    if (isUTurn || startedFromIntent === 'reverse') {
      this.rebuildCameraTrailBehind();
      
      const isCornerBend = edge.from.type === 'corner' && edge.to.type === 'corner' && edge.from.tile === edge.to.tile;
      const intentToEmit = isCornerBend ? 'reverse_instant' : 'reverse';
      
      this.startedIntentEvents.push(intentToEmit);
    } else if (startedFromIntent) {
      this.startedIntentEvents.push(startedFromIntent);
    }
  }

  finishActiveEdge() {
    const finishedEdge = this.activeEdge;
    const forceContinueDirection = this.forceContinueDirection;

    this.currentNode = finishedEdge.to;
    this.activeEdge = null;
    this.route = null;
    this.forceContinueDirection = null;

    if (this.currentNode.type === 'teleport_event_horizon') {
      const teleports = Array.from(this.graph.tiles.values()).filter(t => t.type === 'teleport' && t !== this.currentNode.tile);
      if (teleports.length > 0) {
        const targetTeleport = teleports[Math.floor(Math.random() * teleports.length)];
        const targetNode = this.navigationNodes.get(getNodeId(targetTeleport, 'event_horizon'));
        const localEast = getAbsoluteDirections(['east'], targetTeleport.rotation)[0];
        
        this.currentNode = targetNode;
        this.currentDirection = localEast;
        this.facingDirection = localEast;
        this.bodyFacingDirection = localEast;
        this.model.position.copy(targetNode.position);
        
        this.cameraTrail = [targetNode.position.clone()];
        this.startedIntentEvents.push('reverse_instant');
      } else {
        const localEast = getAbsoluteDirections(['east'], this.currentNode.tile.rotation)[0];
        this.forceContinueDirection = localEast;
      }
    }

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

    const desiredIntent = this.desiredIntent;
    const desiredEdge = this.findDesiredEdge();
    if (desiredEdge) {
      this.desiredDirection = null;
      this.desiredIntent = null;
      this.startEdge(desiredEdge, null, desiredIntent);
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
    const isReversingCornerBend = oldEdge.from.type === 'corner' && oldEdge.to.type === 'corner' && oldEdge.from.tile === oldEdge.to.tile;
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
    this.rebuildCameraTrailBehind();
    this.startedIntentEvents.push(isReversingCornerBend ? 'reverse_instant' : 'reverse');
  }

  consumeStartedIntent() {
    return this.startedIntentEvents.shift() || null;
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

  getRouteCameraPoint(offsetFromPacman = 0, clampToRoute = true) {
    if (!this.route) {
      return this.getCameraTarget().addScaledVector(
        getDirectionVector(this.getFacingDirection()),
        offsetFromPacman
      );
    }

    const rawProgress = this.route.progress + offsetFromPacman;
    if (!clampToRoute && (rawProgress < 0 || rawProgress > this.route.totalLength)) {
      return null;
    }

    // Clamp the progress to the valid range to avoid returning undefined/NaN points
    const progress = THREE.MathUtils.clamp(rawProgress, 0, this.route.totalLength);

    return getRoutePositionAt(this.route, progress);
  }

  recordCameraTrail(route, fromProgress, toProgress) {
    if (!route || fromProgress === toProgress) return;

    const direction = toProgress > fromProgress ? 1 : -1;
    let progress = fromProgress + direction * CAMERA_TRAIL_MIN_SPACING;

    while (
      (direction > 0 && progress < toProgress)
      || (direction < 0 && progress > toProgress)
    ) {
      this.appendCameraTrailPoint(getRoutePositionAt(route, progress));
      progress += direction * CAMERA_TRAIL_MIN_SPACING;
    }

    this.appendCameraTrailPoint(getRoutePositionAt(route, toProgress));
  }

  rebuildCameraTrailBehind() {
    this.cameraTrail = [];
    
    if (this.activeEdge) {
      const isCornerTurn = this.activeEdge.from.connector && this.activeEdge.from.connector !== this.activeEdge.inputDirection;
      const behindDir = isCornerTurn ? this.activeEdge.from.connector : OPPOSITE_DIRECTIONS[this.activeEdge.inputDirection];
      
      if (behindDir) {
        const farBehindPoint = this.activeEdge.points[0].clone().addScaledVector(getDirectionVector(behindDir), 20);
        this.cameraTrail.push(farBehindPoint);
      }
    }

    if (this.route) {
      for (let p = 0; p <= this.route.progress; p += CAMERA_TRAIL_MIN_SPACING) {
        this.cameraTrail.push(getRoutePositionAt(this.route, p));
      }
      const lastPoint = getRoutePositionAt(this.route, this.route.progress);
      if (this.cameraTrail.length === 0 || this.cameraTrail[this.cameraTrail.length - 1].distanceTo(lastPoint) > 0.001) {
        this.cameraTrail.push(lastPoint);
      }
    } else if (this.currentNode) {
      this.cameraTrail.push(this.currentNode.position.clone());
    } else {
      this.cameraTrail.push(this.model.position.clone());
    }
  }

  appendCameraTrailPoint(point) {
    // Prevent trail zig-zags by eating breadcrumbs if we retrace our steps backwards
    if (this.cameraTrail.length >= 2) {
      const prev = this.cameraTrail[this.cameraTrail.length - 1];
      const prev2 = this.cameraTrail[this.cameraTrail.length - 2];
      
      // If we are closer to prev2 than prev was, we are moving backwards along the trail!
      if (point.distanceTo(prev2) < prev.distanceTo(prev2)) {
        this.cameraTrail.pop();
        // Do not return here! Let the logic below evaluate if we should add the new point
      }
    }

    const previous = this.cameraTrail[this.cameraTrail.length - 1];

    if (!previous || previous.distanceTo(point) >= CAMERA_TRAIL_MIN_SPACING * 0.5) {
      this.cameraTrail.push(point.clone());
    }

    while (this.cameraTrail.length > CAMERA_TRAIL_MAX_POINTS) {
      this.cameraTrail.shift();
    }
  }

  getCameraTrailPoint(distanceBehind, fallbackForward) {
    let remainingDistance = distanceBehind;
    let current = this.getCameraTarget();

    for (let index = this.cameraTrail.length - 1; index >= 0; index -= 1) {
      const previous = this.cameraTrail[index];
      const segmentLength = current.distanceTo(previous);

      if (segmentLength === 0) continue;

      if (segmentLength >= remainingDistance) {
        const t = remainingDistance / segmentLength;
        return current.clone().lerp(previous, t);
      }

      remainingDistance -= segmentLength;
      current = previous;
    }

    const fallbackDirection = fallbackForward?.clone?.() || getDirectionVector(this.getFacingDirection());
    return current.clone().addScaledVector(fallbackDirection.normalize(), -remainingDistance);
  }
}
