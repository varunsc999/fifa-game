// The penalty taker, seen from behind like the game's goal view: his look, the
// key poses of the kick, and where he is at each moment.
//
// He's drawn from a simple skeleton (hips, body angle, arms and legs with knees)
// that's turned into pixels every frame, and each moment blends smoothly between
// the key poses, so the movement has no fixed set of frames.
//
// Built from reference clips of real penalties: he waits at the start of his
// run-up, takes two long strides in, plants beside the ball with the kicking foot
// cocked back and an arm out for balance, strikes, lets the leg carry out to the
// side while leaning away, then jogs on a couple of steps. Left-footers get the
// whole thing mirrored.

import { TAKERS } from './takers-data.js';

// Body sizes in kicker pixels, matching the hand-drawn sprite they replace:
// legs 8 tall, shorts 4, shirt 8 and 9 wide, a 7-wide head.
const PELVIS_Y = 9;
const THIGH = 3.6;
const SHIN = 4.4;
const HIP = 2;
const SHORTS_BELOW = 1;
const SHORTS_ABOVE = 3;
const NECK = 12;
const SHOULDER = 5.5;
const SHOULDER_DROP = 1.4;
const ARM = 8;
const HEAD = 16.5;
const HEAD_RADIUS = 3.6;
const NUMBER_TOP = 8.8;

const rad = (deg) => (deg * Math.PI) / 180;
// Angles are directions in degrees: 0 points up, 90 right, 180 down, -90 left.
const dir = (deg) => [Math.sin(rad(deg)), Math.cos(rad(deg))];
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k];

// Arms: an angle and how long they look (an arm swinging forward looks shorter).
const DOWN_L = { a: 183, len: 1 };
const DOWN_R = { a: 177, len: 1 };
const SHORT_L = { a: 180, len: 0.55 };
const SHORT_R = { a: 180, len: 0.55 };
// Out level at shoulder height for balance, as both reference kickers do.
const RAISED_L = { a: -88, len: 0.85 };

// Legs: thigh and shin angles, how long the shin looks, and whether the sole of
// the boot faces the camera (when the foot is kicked up behind him).
const FULL = { thigh: 180, shin: 180, len: 1, sole: false };
// Reaching forward: the foot is further away, so the leg looks a little shorter.
const STEP = { thigh: 180, shin: 180, len: 0.7, sole: false };
// Swinging past the other leg, the foot just off the ground.
const LIFTED = { thigh: 180, shin: 180, len: 0.85, sole: true };
// Knee bent with the foot kicked up behind.
const BENT = { thigh: 180, shin: 180, len: 0.45, sole: true };
// Cocked right back before the strike: the foot up near the back of the knee.
const COCKED = { thigh: 180, shin: 180, len: 0.22, sole: true };
// Swinging through the ball, angled toward it.
const STRIKE = { thigh: 166, shin: 150, len: 0.85, sole: false };
// Carrying on out to the side after the shot, foot just off the ground.
const HIGH = { thigh: 150, shin: 138, len: 1, sole: false };
// Coming back down in front, slightly to the inside.
const FOLLOW = { thigh: 182, shin: 192, len: 0.75, sole: false };

// The whole body tilts left from the feet up while running in and striking.
const LEAN = -8;
const STRONG_LEAN = -22;

const pose = (body, plantArm, kickArm, plantLeg, kickLeg, extra = {}) => ({
  pelvis: [0, PELVIS_Y], body, armL: plantArm, armR: kickArm, legL: plantLeg, legR: kickLeg, ...extra,
});

/** The key poses of the kick, for a right-footer (the kicking leg is his right). */
export const KEY_POSES = {
  set: pose(0, DOWN_L, DOWN_R, FULL, FULL),
  // Two long strides in: the back leg kicks up high, swings through, then reaches
  // forward to land. Arms swing opposite the legs.
  strideA1: pose(LEAN, SHORT_L, DOWN_R, FULL, COCKED),
  strideA2: pose(LEAN, SHORT_L, DOWN_R, FULL, BENT),
  strideA3: pose(LEAN, SHORT_L, DOWN_R, FULL, LIFTED),
  strideA4: pose(LEAN, SHORT_L, DOWN_R, FULL, STEP),
  strideB1: pose(LEAN, DOWN_L, SHORT_R, COCKED, FULL),
  strideB2: pose(LEAN, DOWN_L, SHORT_R, BENT, FULL),
  strideB3: pose(LEAN, DOWN_L, SHORT_R, LIFTED, FULL),
  strideB4: pose(LEAN, DOWN_L, SHORT_R, STEP, FULL),
  // The standing foot lands beside the ball with the kicking foot cocked behind.
  plant: pose(LEAN, RAISED_L, DOWN_R, FULL, COCKED),
  strike: pose(LEAN, RAISED_L, SHORT_R, FULL, STRIKE),
  // The leg carries on out to the side, the whole body leaning well away.
  high: pose(STRONG_LEAN, RAISED_L, SHORT_R, FULL, HIGH),
  // The leg comes down in front, crossing behind the standing leg.
  follow: pose(0, DOWN_L, SHORT_R, FULL, FOLLOW, { kickFirst: true }),
  // A short jog on toward goal.
  jog1: pose(LEAN, SHORT_L, DOWN_R, FULL, BENT),
  jog2: pose(LEAN, SHORT_L, DOWN_R, FULL, STEP),
  jog3: pose(LEAN, DOWN_L, SHORT_R, BENT, FULL),
  jog4: pose(LEAN, DOWN_L, SHORT_R, STEP, FULL),
};
export const POSE_NAMES = Object.keys(KEY_POSES);

const mix = (a, b, t) => a + (b - a) * t;
function mixPose(a, b, t) {
  const limb = (x, y, keys) => Object.fromEntries(keys.map((k) => [k, typeof x[k] === 'boolean' ? (t < 0.5 ? x[k] : y[k]) : mix(x[k], y[k], t)]));
  return {
    pelvis: [mix(a.pelvis[0], b.pelvis[0], t), mix(a.pelvis[1], b.pelvis[1], t)],
    body: mix(a.body, b.body, t),
    armL: limb(a.armL, b.armL, ['a', 'len']),
    armR: limb(a.armR, b.armR, ['a', 'len']),
    legL: limb(a.legL, b.legL, ['thigh', 'shin', 'len', 'sole']),
    legR: limb(a.legR, b.legR, ['thigh', 'shin', 'len', 'sole']),
    kickFirst: t < 0.5 ? a.kickFirst : b.kickFirst,
  };
}

/** Mirrors a pose for a left-footer. */
function mirrorPose(p) {
  const arm = (x) => ({ ...x, a: -x.a });
  const leg = (x) => ({ ...x, thigh: -x.thigh, shin: -x.shin });
  return { ...p, pelvis: [-p.pelvis[0], p.pelvis[1]], body: -p.body, armL: arm(p.armR), armR: arm(p.armL), legL: leg(p.legR), legR: leg(p.legL) };
}

// Shirt numbers: 3x4 digits ('1' is one pixel wide).
const DIGITS = {
  0: ['###', '#.#', '#.#', '###'], 1: ['#', '#', '#', '#'], 2: ['##.', '..#', '.#.', '###'],
  3: ['###', '.##', '..#', '###'], 4: ['#.#', '#.#', '###', '..#'], 5: ['###', '##.', '..#', '##.'],
  6: ['#..', '###', '#.#', '###'], 7: ['###', '..#', '.#.', '.#.'], 8: ['###', '###', '#.#', '###'],
  9: ['###', '#.#', '###', '..#'],
};
// The number as a set of "column,row" cells, centered, counted from its top-left.
function numberCells(number) {
  const glyphs = String(number).split('').map((digit) => DIGITS[digit]);
  const width = glyphs.reduce((total, glyph) => total + glyph[0].length, 0) + glyphs.length - 1;
  const cells = new Set();
  let x = 0;
  for (const glyph of glyphs) {
    glyph.forEach((row, dy) => [...row].forEach((cell, dx) => { if (cell === '#') cells.add(`${x + dx},${dy}`); }));
    x += glyph[0].length + 1;
  }
  return { cells, width };
}

function distance(p, a, b, flat = false) {
  const ab = [b[0] - a[0], b[1] - a[1]];
  const length = ab[0] * ab[0] + ab[1] * ab[1] || 1;
  const along = ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1]) / length;
  if (flat && (along < 0 || along > 1)) return Infinity;
  const t = Math.max(0, Math.min(1, along));
  return Math.hypot(p[0] - a[0] - ab[0] * t, p[1] - a[1] - ab[1] * t);
}

/**
 * Turns a pose into pixels: a map from "x,y" (x right, y up, from his feet) to a
 * part letter. Letters: h hair, s skin, k shirt, K second shirt colour, c collar,
 * N number, b shorts, i sock band, o socks, f boots, q soles.
 */
export function kickerPixels(look, rawPose) {
  const p = look.foot === 'left' ? mirrorPose(rawPose) : rawPose;
  const up = dir(p.body);
  const side = dir(p.body + 90);
  const pelvis = p.pelvis;
  const neck = add(pelvis, up, NECK);
  const shapes = [];
  const segment = (a, b, width, part, flat = false) => shapes.push({ a, b, width, part, flat });

  const drawLeg = (hipSide, leg) => {
    const hip = add(add(pelvis, side, hipSide * HIP), up, -SHORTS_BELOW);
    const knee = add(hip, dir(leg.thigh), THIGH);
    const foot = add(knee, dir(leg.shin), SHIN * leg.len);
    const along = (t) => add(knee, [foot[0] - knee[0], foot[1] - knee[1]], t);
    segment(hip, knee, 3, 's');
    segment(knee, along(0.16), 3, 'i');
    segment(along(0.16), along(0.72), 3, 'o');
    segment(along(0.72), foot, 3, leg.sole ? 'q' : 'f');
    if (leg.sole) segment(along(0.5), along(0.72), 3, 'f');
  };
  const legs = [() => drawLeg(-1, p.legL), () => drawLeg(1, p.legR)];
  // For a left-footer the kicking leg is now the left one.
  if (p.kickFirst) (look.foot === 'left' ? [legs[0], legs[1]] : [legs[1], legs[0]]).forEach((draw) => draw());
  else legs.forEach((draw) => draw());

  segment(add(pelvis, up, SHORTS_ABOVE), neck, 9, 'k', true);
  segment(add(pelvis, up, -SHORTS_BELOW - 0.6), add(pelvis, up, SHORTS_ABOVE), 9, 'b', true);
  for (const [sign, arm] of [[-1, p.armL], [1, p.armR]]) {
    const shoulder = add(add(neck, side, sign * SHOULDER), up, -SHOULDER_DROP);
    const hand = add(shoulder, dir(arm.a), ARM * arm.len);
    const along = (t) => add(shoulder, [hand[0] - shoulder[0], hand[1] - shoulder[1]], t);
    segment(shoulder, along(0.3), 2.2, 'k');
    segment(along(0.3), hand, 2, 's');
  }
  segment(add(neck, up, -0.5), add(neck, up, 0.7), 3.4, 'c', true);
  segment(add(neck, up, 0.7), add(neck, up, 1.8), 2.6, 's', true);

  const head = add(pelvis, up, HEAD);
  const number = numberCells(look.number);
  const pixels = new Map();
  const xs = shapes.flatMap((s) => [s.a[0], s.b[0]]).concat(head[0]);
  const ys = shapes.flatMap((s) => [s.a[1], s.b[1]]).concat(head[1]);
  const box = [Math.floor(Math.min(...xs) - 6), Math.ceil(Math.max(...xs) + 6), Math.floor(Math.min(...ys) - 6), Math.ceil(Math.max(...ys) + 6)];
  for (let y = Math.max(0, box[2]); y <= box[3]; y += 1) {
    for (let x = box[0]; x <= box[1]; x += 1) {
      // Pixel x covers x-0.5 to x+0.5, so the body sits centered on column 0.
      const point = [x, y + 0.5];
      let part = null;
      for (const shape of shapes) if (distance(point, shape.a, shape.b, shape.flat) <= shape.width / 2) part = shape.part;

      // Body-relative position, for the number and the shirt pattern.
      const rel = [point[0] - pelvis[0], point[1] - pelvis[1]];
      const across = rel[0] * side[0] + rel[1] * side[1];
      const upward = rel[0] * up[0] + rel[1] * up[1];
      if (part === 'k') {
        const column = Math.round(across);
        // The number reads normally even when mirrored or leaning.
        const cell = `${Math.round(across + (number.width - 1) / 2)},${Math.round(NUMBER_TOP - upward)}`;
        if (number.cells.has(cell)) part = 'N';
        else if (look.pattern === 'stripes' && column % 2 !== 0) part = 'K';
        else if (look.pattern === 'checks' && (column + Math.round(upward)) % 2 !== 0) part = 'K';
      }

      // The back of the head: hair, with some neck showing for shorter styles.
      const toHead = [point[0] - head[0], point[1] - head[1]];
      if (Math.hypot(toHead[0], toHead[1]) <= HEAD_RADIUS) {
        const height = toHead[0] * up[0] + toHead[1] * up[1];
        const hairFrom = { long: -9, short: -1.8, buzz: 0.9, bald: 9 }[look.hair];
        part = height > hairFrom ? 'h' : 's';
      }
      if (part) pixels.set(`${x},${y}`, part);
    }
  }
  return pixels;
}

// Sizes, in goal units (the goal is 2 wide and 1 tall).
export const KICKER_PIXEL = 4 / 210;
export const BALL_PIXEL_NEAR = 4.4 / 210;
export const BALL_PIXEL_FAR = 3.7 / 210;
export const BALL_SPRITE = ['.rrww.', 'rrwwuu', 'wwyyuu', 'wwyyww', 'ggwwww', '.gggw.'];

// Where his feet are, relative to the ball on the spot, in kicker pixels (x right,
// y down the screen), while he stands just behind it. Mirrored for left-footers.
export const FEET_FROM_SPOT = { x: -10.5, down: 3 };

// Positions during the kick, as offsets from that spot (in kicker pixels, y down
// the screen), for a right-footer. He glides between them while the poses change.
const START = { dx: -43.75, dy: 5.5 };
const PLANT_AT = { dx: 1, dy: -0.25 };
const STRIKE_AT = { dx: 2.25, dy: -0.25 };
const LANDED_AT = { dx: 3.5, dy: -1 };
const RUN_OUT_TO = { dx: 7.5, dy: -4 };

// Timing, from the reference clips. Two big strides, the wind-up held, a quick
// strike, the leg held out to the side, then a short jog on. Each step is a key
// pose and how long it takes to blend into the next.
// Slower than the reference clip so the run-up reads clearly in pixels. This only
// changes the look: the kick is timed so your aiming and diving time stay the same.
const STRIDE_MS = 100;
const JOG_MS = 70;
const RUN = ['strideA1', 'strideA2', 'strideA3', 'strideA4', 'strideB1', 'strideB2', 'strideB3', 'strideB4'];
const RUN_OUT = ['jog1', 'jog2', 'jog3', 'jog4', 'jog1', 'jog2'];
const PLANT_MS = 130;
const STRIKE_MS = 80;
const HIGH_MS = 230;
const FOLLOW_MS = 90;

// The kick after the wait, as [key pose, ms].
export const KICK_STEPS = [
  ...RUN.map((name) => [name, STRIDE_MS]),
  ['plant', PLANT_MS],
  ['strike', STRIKE_MS],
  ['high', HIGH_MS],
  ['follow', FOLLOW_MS],
  ...RUN_OUT.map((name) => [name, JOG_MS]),
];
const sum = (steps) => steps.reduce((total, [, ms]) => total + ms, 0);
export const RUN_MS = RUN.length * STRIDE_MS;
/** From starting the run-up to the ball leaving his foot. */
export const RUN_TO_STRIKE_MS = RUN_MS + PLANT_MS + STRIKE_MS;
const LANDED_MS = RUN_TO_STRIKE_MS + HIGH_MS + FOLLOW_MS;
export const KICK_MS = sum(KICK_STEPS);

const easeInOut = (t) => t * t * (3 - 2 * t);
const speedUp = (t) => t ** 1.6;
const blend = (from, to, t) => ({ dx: from.dx + (to.dx - from.dx) * t, dy: from.dy + (to.dy - from.dy) * t });
const clamp01 = (t) => Math.max(0, Math.min(1, t));

/**
 * The kicker at a moment: ms is time since he started his run-up (null while
 * still waiting). Returns his pose, blended between key poses, and where his feet
 * are relative to the spot (kicker pixels, y down the screen), mirrored for
 * left-footers. The pose itself is mirrored when it's drawn.
 */
export function kickerAt(ms, foot = 'right') {
  let current = KEY_POSES.set;
  let at = START;
  if (ms !== null && ms >= 0) {
    if (ms >= KICK_MS) {
      current = KEY_POSES.set;
    } else {
      let elapsed = 0;
      for (let i = 0; i < KICK_STEPS.length; i += 1) {
        const [name, length] = KICK_STEPS[i];
        if (ms < elapsed + length) {
          const next = KICK_STEPS[i + 1] ? KICK_STEPS[i + 1][0] : 'set';
          current = mixPose(KEY_POSES[name], KEY_POSES[next], easeInOut((ms - elapsed) / length));
          break;
        }
        elapsed += length;
      }
    }
    if (ms < RUN_MS) at = blend(START, PLANT_AT, speedUp(ms / RUN_MS));
    else if (ms < RUN_MS + PLANT_MS) at = blend(PLANT_AT, STRIKE_AT, easeInOut((ms - RUN_MS) / PLANT_MS));
    else if (ms < RUN_TO_STRIKE_MS) at = STRIKE_AT;
    else if (ms < LANDED_MS) at = blend(STRIKE_AT, LANDED_AT, easeInOut((ms - RUN_TO_STRIKE_MS) / (LANDED_MS - RUN_TO_STRIKE_MS)));
    else at = blend(LANDED_AT, RUN_OUT_TO, clamp01((ms - LANDED_MS) / (KICK_MS - LANDED_MS)));
  }
  const left = foot === 'left';
  return {
    pose: current,
    feetX: (left ? -1 : 1) * (FEET_FROM_SPOT.x + at.dx),
    feetDown: FEET_FROM_SPOT.down + at.dy,
  };
}

// Home kits for every team: shirt, second shirt colour (stripes or checks),
// shorts, socks, sock band and collar, and the number colour.
const KITS = {
  Mexico: { k: '#0b6b3a', b: '#ffffff', o: '#c8102e', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  'South Africa': { k: '#f5c400', b: '#046a38', o: '#f5c400', i: '#046a38', c: '#046a38', N: '#046a38' },
  'South Korea': { k: '#d0102b', b: '#1a1a1a', o: '#d0102b', i: '#1a1a1a', c: '#1a1a1a', N: '#ffffff' },
  'Czech Republic': { k: '#d7141a', b: '#ffffff', o: '#11457e', i: '#ffffff', c: '#11457e', N: '#ffffff' },
  Switzerland: { k: '#d52b1e', b: '#ffffff', o: '#d52b1e', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Canada: { k: '#d80621', b: '#d80621', o: '#d80621', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  'Bosnia & Herzegovina': { k: '#1f3d99', b: '#1f3d99', o: '#1f3d99', i: '#f5c400', c: '#f5c400', N: '#f5c400' },
  Qatar: { k: '#7a1f3d', b: '#ffffff', o: '#7a1f3d', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Brazil: { k: '#f7d117', b: '#1d4fa0', o: '#ffffff', i: '#1d4fa0', c: '#1f9e5a', N: '#1f6b3a' },
  Morocco: { k: '#c1272d', b: '#006233', o: '#c1272d', i: '#006233', c: '#006233', N: '#ffffff' },
  Scotland: { k: '#1c2c5b', b: '#ffffff', o: '#1c2c5b', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Haiti: { k: '#1e3fa0', b: '#d21034', o: '#1e3fa0', i: '#d21034', c: '#d21034', N: '#ffffff' },
  USA: { k: '#ffffff', b: '#1a2a52', o: '#ffffff', i: '#c8102e', c: '#1a2a52', N: '#1a2a52' },
  Australia: { k: '#ffcd00', b: '#00843d', o: '#ffcd00', i: '#00843d', c: '#00843d', N: '#00843d' },
  Paraguay: { k: '#d52b1e', K: '#ffffff', b: '#1f3d99', o: '#1f3d99', i: '#ffffff', c: '#1f3d99', N: '#1f3d99', pattern: 'stripes' },
  Turkey: { k: '#e30a17', b: '#ffffff', o: '#e30a17', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Germany: { k: '#ffffff', b: '#1a1a1a', o: '#ffffff', i: '#1a1a1a', c: '#1a1a1a', N: '#1a1a1a' },
  'Curaçao': { k: '#002b7f', b: '#002b7f', o: '#002b7f', i: '#f9e814', c: '#f9e814', N: '#f9e814' },
  'Ivory Coast': { k: '#ff8200', b: '#ffffff', o: '#009e60', i: '#ffffff', c: '#009e60', N: '#ffffff' },
  Ecuador: { k: '#ffdd00', b: '#034ea2', o: '#034ea2', i: '#ffdd00', c: '#034ea2', N: '#034ea2' },
  Netherlands: { k: '#f36c21', b: '#1a1a1a', o: '#f36c21', i: '#1a1a1a', c: '#1a1a1a', N: '#1a1a1a' },
  Japan: { k: '#1a3a8a', b: '#1a3a8a', o: '#1a3a8a', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Sweden: { k: '#fecc00', b: '#006aa7', o: '#fecc00', i: '#006aa7', c: '#006aa7', N: '#006aa7' },
  Tunisia: { k: '#e70013', b: '#ffffff', o: '#e70013', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Belgium: { k: '#c8102e', b: '#c8102e', o: '#c8102e', i: '#1a1a1a', c: '#1a1a1a', N: '#f5c400' },
  Egypt: { k: '#c8102e', b: '#ffffff', o: '#1a1a1a', i: '#ffffff', c: '#1a1a1a', N: '#ffffff' },
  Iran: { k: '#ffffff', b: '#ffffff', o: '#ffffff', i: '#239f40', c: '#da0000', N: '#da0000' },
  'New Zealand': { k: '#ffffff', b: '#1a1a1a', o: '#ffffff', i: '#1a1a1a', c: '#1a1a1a', N: '#1a1a1a' },
  Spain: { k: '#c60b1e', b: '#1a2a52', o: '#1a2a52', i: '#f1bf00', c: '#f1bf00', N: '#f1bf00' },
  'Cape Verde': { k: '#003893', b: '#003893', o: '#003893', i: '#cf2027', c: '#cf2027', N: '#ffffff' },
  Uruguay: { k: '#5cbfeb', b: '#1a1a1a', o: '#1a1a1a', i: '#5cbfeb', c: '#1a1a1a', N: '#1a1a1a' },
  'Saudi Arabia': { k: '#006c35', b: '#ffffff', o: '#006c35', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  France: { k: '#1b2a58', b: '#ffffff', o: '#c8102e', i: '#ffffff', c: '#c8102e', N: '#ffffff' },
  Norway: { k: '#ba0c2f', b: '#ffffff', o: '#00205b', i: '#ffffff', c: '#00205b', N: '#ffffff' },
  Senegal: { k: '#ffffff', b: '#ffffff', o: '#ffffff', i: '#00853f', c: '#00853f', N: '#00853f' },
  Iraq: { k: '#007a3d', b: '#ffffff', o: '#007a3d', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Argentina: { k: '#75aadb', K: '#ffffff', b: '#2b2b30', o: '#ffffff', i: '#75aadb', c: '#1a1a1a', N: '#1a1a1a', pattern: 'stripes' },
  Austria: { k: '#ed2939', b: '#ffffff', o: '#ed2939', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
  Algeria: { k: '#ffffff', b: '#006233', o: '#ffffff', i: '#006233', c: '#006233', N: '#006233' },
  Jordan: { k: '#ffffff', b: '#ffffff', o: '#ffffff', i: '#ce1126', c: '#ce1126', N: '#ce1126' },
  Colombia: { k: '#fcd116', b: '#003893', o: '#ffffff', i: '#ce1126', c: '#003893', N: '#003893' },
  Portugal: { k: '#c8102e', b: '#046a38', o: '#c8102e', i: '#046a38', c: '#046a38', N: '#ffffff' },
  'DR Congo': { k: '#3a8fd8', b: '#1f3d99', o: '#ce1021', i: '#f7d618', c: '#f7d618', N: '#ffffff' },
  Uzbekistan: { k: '#ffffff', b: '#ffffff', o: '#ffffff', i: '#1eb53a', c: '#0099b5', N: '#0099b5' },
  England: { k: '#ffffff', b: '#1a2a52', o: '#ffffff', i: '#1a2a52', c: '#1a2a52', N: '#1a2a52' },
  Croatia: { k: '#d8232a', K: '#ffffff', b: '#ffffff', o: '#1f3d99', i: '#ffffff', c: '#1f3d99', N: '#1f3d99', pattern: 'checks' },
  Ghana: { k: '#ffffff', b: '#ffffff', o: '#ffffff', i: '#fcd116', c: '#006b3f', N: '#1a1a1a' },
  Panama: { k: '#d21034', b: '#1f3d99', o: '#d21034', i: '#ffffff', c: '#ffffff', N: '#ffffff' },
};

// Skin tones 1 (lightest) to 5 (darkest), and hair colours, as used in takers-data.js.
const SKIN = { 1: '#f1c8a0', 2: '#e0a878', 3: '#c68642', 4: '#8d5524', 5: '#5c3a1e' };
const HAIR_STYLES = { s: 'short', l: 'long', z: 'buzz', x: 'bald' };
const HAIR_COLORS = { k: '#1d1712', d: '#3b2a1a', b: '#6b4423', l: '#c9a25a' };
const BOOTS = ['#ff8a1c', '#e6b422', '#ffffff', '#2f6fd6', '#ff4f8b', '#1a1a1a', '#c8f03c'];

// The same team and kick always gives the same kicker.
function seeded(text) {
  let hash = 2166136261;
  for (const char of text) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return () => {
    hash = Math.imul(hash ^ (hash >>> 15), 2246822507) ^ Math.imul(hash ^ (hash >>> 13), 3266489909);
    return ((hash >>> 0) % 10000) / 10000;
  };
}
const pick = (list, random) => list[Math.floor(random() * list.length)];

/**
 * How a taker's skill (1 to 5) changes the timing of a kick. Better takers run in
 * and strike more decisively, give you longer to aim when they're yours, and give
 * you less time to read them when they're against you.
 */
export function kickTiming(skill) {
  return {
    // Above 1 is slower: a 1 takes 12% longer over his run-up, a 5 is 12% quicker.
    tempo: 1 + (3 - skill) * 0.06,
    // Multiplies your aiming time on your own kicks: 0.88x for a 1, 1.2x for a 5.
    aimTime: 0.8 + 0.08 * skill,
    // Multiplies your diving time on their kicks: 1.12x against a 1, 0.8x against a 5.
    diveTime: 1.2 - 0.08 * skill,
  };
}

/**
 * The taker for a team's nth penalty (0 is the first), from the real takers list.
 * After the fifth they go round again, as in sudden death.
 */
export function kickerFor(team, kickIndex) {
  const entry = TAKERS[team];
  const [name, number, skill, lookCode] = entry.takers[kickIndex % entry.takers.length];
  const random = seeded(`${team}:${name}`);
  const kit = KITS[team] || KITS.England;
  // Hand-set look ("skin, hair style, hair colour, foot"), or a varied default.
  const look = lookCode || `${1 + Math.floor(random() * 5)}${random() < 0.7 ? 's' : 'z'}${random() < 0.8 ? 'k' : 'd'}${random() < 0.2 ? 'L' : 'R'}`;
  return {
    name,
    number,
    skill,
    timing: kickTiming(skill),
    fromShootout: entry.source === 'shootout',
    hair: HAIR_STYLES[look[1]],
    pattern: kit.pattern || 'plain',
    foot: look[3] === 'L' ? 'left' : 'right',
    // How long they stand over the ball before running in (preview images only).
    waitMs: 300 + Math.round(random() * 1000),
    colors: {
      ...kit,
      h: HAIR_COLORS[look[2]],
      s: SKIN[look[0]],
      f: pick(BOOTS, random),
      q: '#3d4348',
      w: '#ffffff', r: '#e0413a', u: '#2f6fd6', g: '#1f9e5a', y: '#e0b23a',
    },
  };
}

export const HAS_KIT = (team) => Boolean(KITS[team]);
