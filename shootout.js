// Shootout rules and difficulty, with no drawing or input, so it can be simulated.
//
// Positions are in goal units: x runs from -1 (left post) to 1 (right post),
// y runs from 0 (ground) to 1 (crossbar).

export const AIM_LIMITS = { x: 1.25, yMax: 1.3 };
export const BALL_RADIUS = 0.09;
export const PLAYER_DIVE_REACH = 0.28;
const KEEPER_START_Y = 0.4;
const NEUTRAL_AIM_Y = 0.5;
const SHOT_ZONE_MAX_OFFSET = 0.85;
const SHOT_ZONE_START_EXTRA = 0.6;
// The same response as the tilt test near the middle of the goal.
const BASE_FULL_TILT_DEGREES = 25;
// Measured in multiples of that tilt. A top corner shot takes about 27 degrees.
const RESISTANCE_STARTS_AT = 0.25;
const RESISTANCE_STRENGTH = 0.41;
const RESISTANCE_STOPS_AT = 1.47;
const GOAL_CORNER_STRETCH = 0.83;
const REGULATION_KICKS = 5;

const lerp = (a, b, t) => a + (b - a) * t;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

/** Opponent strength from 1 (weakest) to 5 (strongest). */
export function difficulty(level) {
  const t = (level - 1) / 4;
  return {
    level,
    shootSeconds: lerp(4, 2, t),
    diveSeconds: lerp(2.6, 1.6, t),
    saveAdjustSeconds: lerp(0.5, 0.3, t),
    wobble: lerp(0.01, 0.13, t),
    edgeWobble: lerp(0.08, 0.12, t),
    keeperRead: lerp(0.15, 0.4, t),
    keeperReach: lerp(0.16, 0.28, t),
    opponentCorner: lerp(0.35, 0.85, t),
    opponentMiss: lerp(0.15, 0.03, t),
    shotZoneRadius: lerp(0.4, 0.8, t),
  };
}

/**
 * Turns tilt in degrees into a spot in the goal, with resistance further out.
 * Near the middle it responds as normal, then each extra degree moves it less,
 * until tilting further does nothing. The same for every team, so the controls
 * only have to be learned once.
 */
export function aimFromTilt(tilt) {
  const across = tilt.x / BASE_FULL_TILT_DEGREES;
  const up = tilt.y / BASE_FULL_TILT_DEGREES;
  const stretch = Math.hypot(across, up);
  if (stretch === 0) return { x: 0, y: NEUTRAL_AIM_Y, edge: 0 };

  const capped = Math.min(stretch, RESISTANCE_STOPS_AT);
  const beyond = Math.max(0, capped - RESISTANCE_STARTS_AT);
  const resisted = capped - RESISTANCE_STRENGTH * beyond * beyond;
  const scale = resisted / stretch;
  return {
    x: across * scale * AIM_LIMITS.x,
    y: NEUTRAL_AIM_Y + up * scale * (AIM_LIMITS.yMax - NEUTRAL_AIM_Y),
    edge: Math.min(1, resisted / GOAL_CORNER_STRETCH),
  };
}

/** Sideways and up/down drift on a shot. Grows with team strength and near the edge of the goal. */
export function shotWobble(settings, edge, seconds, phases) {
  const amount = settings.wobble + settings.edgeWobble * edge * edge;
  return {
    x: amount * (Math.sin(seconds * 2.3 + phases[0]) + 0.5 * Math.sin(seconds * 5.1 + phases[1])),
    y: amount * (Math.sin(seconds * 1.9 + phases[2]) + 0.5 * Math.sin(seconds * 4.3 + phases[3])),
  };
}

export function isOnTarget(shot) {
  return Math.abs(shot.x) <= 1 && shot.y >= 0 && shot.y <= 1;
}

/** Where their keeper ends up. A keeper who reads the shot still can't fully reach the corners. */
export function keeperDive(shot, settings, random = Math.random) {
  if (random() < settings.keeperRead) {
    return { x: shot.x * 0.75, y: KEEPER_START_Y + (shot.y - KEEPER_START_Y) * 0.75 };
  }
  return { x: lerp(-0.9, 0.9, random()), y: lerp(0.15, 0.75, random()) };
}

export function resolvePlayerKick(shot, settings, random = Math.random) {
  const keeper = keeperDive(shot, settings, random);
  if (!isOnTarget(shot)) return { outcome: 'missed', keeper };
  const saved = distance(shot, keeper) <= settings.keeperReach;
  return { outcome: saved ? 'saved' : 'goal', keeper };
}

/**
 * The zone the player sees during the run-up. An on-target shot always lands
 * inside it, but not at its center, and stronger teams give away a wider zone.
 */
function shotZone(target, settings, random) {
  const radius = settings.shotZoneRadius;
  const offset = radius * SHOT_ZONE_MAX_OFFSET * Math.sqrt(random());
  const angle = random() * Math.PI * 2;
  return {
    radius,
    center: {
      x: Math.max(-1, Math.min(1, target.x + Math.cos(angle) * offset)),
      y: Math.max(0, Math.min(1, target.y + Math.sin(angle) * offset)),
    },
  };
}

/** The zone as drawn: wide and centered at first, closing in as the shot gets nearer (0 to 1). */
export function shotZoneAt(zone, progress) {
  const t = Math.max(0, Math.min(1, progress));
  return {
    center: {
      x: lerp(0, zone.center.x, t),
      y: lerp(NEUTRAL_AIM_Y, zone.center.y, t),
    },
    radius: lerp(zone.radius + SHOT_ZONE_START_EXTRA, zone.radius, t),
  };
}

/** Picks their shot up front, along with the zone that gives it away during the run-up. */
export function opponentKick(settings, random = Math.random) {
  const side = random() < 0.5 ? -1 : 1;
  const spread = (random() - 0.5) * 0.3;
  const target =
    random() < settings.opponentMiss
      ? { x: side * 1.15, y: lerp(0.3, 0.9, random()) }
      : {
          x: side * Math.min(0.95, Math.max(0.05, settings.opponentCorner + spread)),
          y: lerp(0.1, 0.9, random()),
        };
  return { target, zone: shotZone(target, settings, random) };
}

export function resolveDive(shot, dive) {
  if (!isOnTarget(shot)) return 'missed';
  return distance(shot, dive) <= PLAYER_DIVE_REACH ? 'saved' : 'goal';
}

export function newMatch() {
  return { player: [], opponent: [] };
}

const goals = (kicks) => kicks.filter(Boolean).length;

export function score(match) {
  return { player: goals(match.player), opponent: goals(match.opponent) };
}

/** The player kicks first in every round. */
export function playerKicksNext(match) {
  return match.player.length === match.opponent.length;
}

export function recordKick(match, scored) {
  (playerKicksNext(match) ? match.player : match.opponent).push(scored);
}

/** Over once one side can't catch up in the first five, then after each even round. */
export function isOver(match) {
  const { player, opponent } = score(match);
  const playerLeft = Math.max(0, REGULATION_KICKS - match.player.length);
  const opponentLeft = Math.max(0, REGULATION_KICKS - match.opponent.length);
  if (playerLeft > 0 || opponentLeft > 0) {
    return player > opponent + opponentLeft || opponent > player + playerLeft;
  }
  return match.player.length === match.opponent.length && player !== opponent;
}
