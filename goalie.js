// The goalkeeper, facing the camera from his line: each team's keeper, his kit,
// and his poses. The base pose is the ready stance; dives come next.
//
// Keepers and shirt numbers come from the official 2026 World Cup squads
// (Wikipedia, "2026 FIFA World Cup squads"). The starter is the squad's number 1,
// except where another keeper was first choice (a best guess, marked below).
// Kit colours are my choice per team, picked to stand out from that team's
// outfield kit; they aren't checked against real 2026 goalkeeper kits.

// Front view, 19 pixels wide with the middle on column 9, in a ready stance:
// knees bent, feet apart, arms out low with the gloves at hip height.
// Letters name a part: h hair, s skin, e eyes, m mouth, k shirt, c collar,
// N number, G gloves, b shorts, i sock band, o socks, f boots, q soles.
const READY = [
  '.......hhhhh.......',
  '......hhhhhhh......',
  '......hhhhhhh......',
  '......hsssssh......',
  '......sessses......',
  '......sssssss......',
  '.......smmms.......',
  '........sss........',
  '.....kkkccckkk.....',
  '...kkkkkkkkkkkkk...',
  '..kkkkkkkkkkkkkkk..',
  '.kk..kkkkkkkkk..kk.',
  '.kk..kkkkkkkkk..kk.',
  'kk...kkkkkkkkk...kk',
  'GG...kkkkkkkkk...GG',
  'GG...kkkkkkkkk...GG',
  '.....kkkkkkkkk.....',
  '.....bbbbbbbbb.....',
  '.....bbbbbbbbb.....',
  '....bbbbb.bbbbb....',
  '....sss.....sss....',
  '....sss.....sss....',
  '....iii.....iii....',
  '....ooo.....ooo....',
  '....ooo.....ooo....',
  '...ffff.....ffff...',
  '...qqqq.....qqqq...',
];

const HAIR_ROWS = {
  short: null,
  // Hair down past the ears on both sides.
  long: [
    '.......hhhhh.......',
    '......hhhhhhh......',
    '.....hhhhhhhhh.....',
    '.....hsssssssh.....',
    '.....hsesssesh.....',
    '.....hsssssssh.....',
  ],
  buzz: [
    '.......hhhhh.......',
    '......hhhhhhh......',
    '......sssssss......',
    '......sssssss......',
    '......sessses......',
  ],
  bald: [
    '.......sssss.......',
    '......sssssss......',
    '......sssssss......',
    '......sssssss......',
    '......sessses......',
  ],
};

// Shirt numbers on the chest, 3x4 digits centered on the middle column.
const DIGITS = {
  0: ['###', '#.#', '#.#', '###'], 1: ['#', '#', '#', '#'], 2: ['##.', '..#', '.#.', '###'],
  3: ['###', '.##', '..#', '###'], 4: ['#.#', '#.#', '###', '..#'], 5: ['###', '##.', '..#', '##.'],
  6: ['#..', '###', '#.#', '###'], 7: ['###', '..#', '.#.', '.#.'], 8: ['###', '###', '#.#', '###'],
  9: ['###', '#.#', '###', '..#'],
};
function numberPixels(number, top) {
  const glyphs = String(number).split('').map((d) => DIGITS[d]);
  const width = glyphs.reduce((sum, g) => sum + g[0].length, 0) + glyphs.length - 1;
  let x = 9 - Math.floor((width - 1) / 2);
  const pixels = [];
  for (const glyph of glyphs) {
    glyph.forEach((row, dy) => [...row].forEach((cell, dx) => { if (cell === '#') pixels.push([x + dx, top + dy]); }));
    x += glyph[0].length + 1;
  }
  return pixels;
}

export const GOALIE_COLUMNS = 19;
export const GOALIE_ROWS = READY.length;

/** The ready stance for one keeper, as rows of part letters. */
export function buildGoaliePose(keeper) {
  const rows = READY.map((row) => [...row]);
  const hair = HAIR_ROWS[keeper.hair];
  if (hair) hair.forEach((row, y) => { rows[y] = [...row.padEnd(19, '.')]; });
  for (const [x, y] of numberPixels(keeper.number, 11)) rows[y][x] = 'N';
  return rows;
}

// ---------------------------------------------------------------------------
// Saves. The keeper is drawn from a simple skeleton (pelvis, body angle, arm and
// leg angles) turned into pixels, so he can lean, stretch and dive at any angle
// and reach any spot in the goal. Coordinates are in keeper pixels with the
// origin on the goal line at the middle of the goal, y pointing up.

/**
 * Size of one keeper pixel in goal units (the goal is 2 wide and 1 tall). A bit
 * smaller than the kicker's, since the keeper is further from the camera.
 */
export const GOALIE_PIXEL = 0.016;
const HALF_GOAL = 1 / GOALIE_PIXEL;

const TORSO = 9;
const SHOULDER = 4.5;
const HIP = 2.6;
const ARM = 8;
const LEG = 10;
// From the pelvis to between the gloves, with the arms stretched out along the body.
const FULL_REACH = TORSO + ARM;
const STANDING_PELVIS = 10;

const rad = (deg) => (deg * Math.PI) / 180;
// Angles are directions in degrees: 0 points up, 90 right, 180 down, -90 left.
const dir = (deg) => [Math.sin(rad(deg)), Math.cos(rad(deg))];
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k];

/** Where each body part is for a pose. */
function joints(pose) {
  const up = dir(pose.body);
  const side = dir(pose.body + 90);
  const pelvis = pose.pelvis;
  const neck = add(pelvis, up, TORSO);
  const shoulderL = add(neck, side, -SHOULDER);
  const shoulderR = add(neck, side, SHOULDER);
  const hipL = add(pelvis, side, -HIP);
  const hipR = add(pelvis, side, HIP);
  return {
    up, side, pelvis, neck,
    head: add(neck, up, 4.2),
    armL: [shoulderL, add(shoulderL, dir(pose.armL), ARM)],
    armR: [shoulderR, add(shoulderR, dir(pose.armR), ARM)],
    legL: [hipL, add(hipL, dir(pose.legL), LEG * (pose.legLength || 1))],
    legR: [hipR, add(hipR, dir(pose.legR), LEG * (pose.legLength || 1))],
  };
}

/** Where the keeper's gloves are (between the two hands), in keeper pixels. */
export function glovesAt(pose) {
  const j = joints(pose);
  return [(j.armL[1][0] + j.armR[1][0]) / 2, (j.armL[1][1] + j.armR[1][1]) / 2];
}

// Distance from a point to a line segment. Flat segments (the body and shorts)
// have square ends instead of round ones, so they don't spill past their length.
function distance(p, a, b, flat = false) {
  const ab = [b[0] - a[0], b[1] - a[1]];
  const length = ab[0] * ab[0] + ab[1] * ab[1] || 1;
  const along = ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1]) / length;
  if (flat && (along < 0 || along > 1)) return Infinity;
  const t = Math.max(0, Math.min(1, along));
  return Math.hypot(p[0] - a[0] - ab[0] * t, p[1] - a[1] - ab[1] * t);
}

/**
 * Turns a pose into pixels: a map from "x,y" to a part letter. Later parts are
 * drawn over earlier ones: legs, body, shorts, arms, gloves, head.
 */
export function goaliePixels(keeper, pose, scale = 1) {
  const j = joints(pose);
  const shapes = [];
  const segment = (a, b, width, part, flat = false) => shapes.push({ a, b, width, part, flat });
  for (const [hip, foot] of [j.legL, j.legR]) {
    const along = (t) => add(hip, [foot[0] - hip[0], foot[1] - hip[1]], t);
    segment(hip, along(0.18), 3.2, 'b');
    segment(along(0.18), along(0.45), 3, 's');
    segment(along(0.45), along(0.9), 3, 'o');
    segment(along(0.88), foot, 3.4, 'f');
  }
  segment(add(j.pelvis, j.up, -1.5), j.neck, 8, 'k', true);
  segment(add(j.pelvis, j.up, -1.5), add(j.pelvis, j.up, 1.5), 8.4, 'b', true);
  for (const [shoulder, hand] of [j.armL, j.armR]) {
    const along = (t) => add(shoulder, [hand[0] - shoulder[0], hand[1] - shoulder[1]], t);
    segment(shoulder, along(0.8), 2.8, 'k');
    segment(along(0.75), hand, 3.4, 'G');
  }
  segment(j.neck, add(j.neck, j.up, 1.5), 2.4, 's');

  const pixels = new Map();
  const xs = shapes.flatMap((s) => [s.a[0], s.b[0]]);
  const ys = shapes.flatMap((s) => [s.a[1], s.b[1]]);
  // With a scale below 1 the keeper is drawn smaller on the same pixel grid as
  // everything else: each screen pixel is looked up in the skeleton's own units.
  const box = [Math.floor((Math.min(...xs) - 6) * scale), Math.ceil((Math.max(...xs) + 6) * scale), Math.floor((Math.min(...ys) - 6) * scale), Math.ceil((Math.max(...ys) + 6) * scale)];
  for (let y = box[2]; y <= box[3]; y += 1) {
    for (let x = box[0]; x <= box[1]; x += 1) {
      const p = [(x + 0.5) / scale, (y + 0.5) / scale];
      let part = null;
      // Nothing shows below the goal line: his feet are on the grass.
      if (y < 0) continue;
      for (const shape of shapes) if (distance(p, shape.a, shape.b, shape.flat) <= shape.width / 2) part = shape.part;
      // Head: a round face with hair on top and two eyes.
      const offset = [p[0] - j.head[0], p[1] - j.head[1]];
      if (Math.hypot(offset[0], offset[1]) <= 3.6) {
        const upward = offset[0] * j.up[0] + offset[1] * j.up[1];
        const across = offset[0] * j.side[0] + offset[1] * j.side[1];
        const hairLine = { short: 1.2, long: 0.6, buzz: 2.2, bald: 9 }[keeper.hair];
        part = upward > hairLine || (keeper.hair === 'long' && Math.abs(across) > 2.6) ? 'h' : 's';
        if (Math.abs(Math.abs(across) - 1.6) < 0.55 && upward > -0.5 && upward < 0.6) part = 'e';
      }
      if (part) pixels.set(`${x},${y}`, part);
    }
  }
  return pixels;
}

const READY_POSE = { pelvis: [0, STANDING_PELVIS], body: 0, armL: -145, armR: 145, legL: 196, legR: 164 };

/**
 * Plans a save toward a spot in the goal (goal units: x -1 to 1, y 0 to 1).
 * Near the middle he stays on his feet: a block at chest height, a jump with
 * both arms up for high balls, or a crouch to smother low ones. A bit further
 * out he shuffles across and reaches. Toward the sides he dives, his body
 * angled at the ball and lying flatter the lower the shot.
 * Returns the save type and its key poses with times (0 to 1 of the save).
 */
export function planSave(target) {
  const tx = target.x * HALF_GOAL;
  const ty = Math.max(1, target.y * HALF_GOAL);
  const side = tx < 0 ? -1 : 1;
  const far = Math.abs(tx);
  // Which save to make depends on where the ball is in the goal, not on the
  // keeper's size: these are measured so that 42 is the full height of the goal.
  const GOAL_SCALE = 42;
  const across = Math.abs(target.x) * GOAL_SCALE;
  const height = target.y * GOAL_SCALE;
  const towardBall = (from) => (Math.atan2(tx - from[0], ty - from[1]) * 180) / Math.PI;

  // A pose with the gloves pointed at the ball from wherever the shoulders are.
  const reaching = (pose) => {
    const j = joints(pose);
    return { ...pose, armL: towardBall(j.armL[0]), armR: towardBall(j.armR[0]) };
  };
  // Moves the whole body until the gloves are on the ball (a step, a stretch up
  // or a crouch), keeping his feet on the grass unless he has to jump.
  const fit = (pose, grounded = true) => {
    let fitted = reaching(pose);
    for (let i = 0; i < 4; i += 1) {
      const gloves = glovesAt(fitted);
      fitted = reaching({ ...fitted, pelvis: [fitted.pelvis[0] + tx - gloves[0], fitted.pelvis[1] + ty - gloves[1]] });
    }
    if (grounded) fitted.legLength = Math.max(0.45, Math.min(1, fitted.pelvis[1] / 9.6));
    return fitted;
  };

  let type;
  let reach;
  if (across < 9 && height >= 27) {
    // Jump straight up with both arms above the head.
    type = 'jump';
    reach = { pelvis: [tx, ty - FULL_REACH], body: 0, armL: -4, armR: 4, legL: 186, legR: 174 };
  } else if (across < 9 && height <= 11) {
    // Get down low and smother it.
    type = 'smother';
    reach = fit({ pelvis: [tx * 0.6, 6], body: side * 8, legL: 220, legR: 140, legLength: 0.8 });
  } else if (across < 9) {
    // Stand tall and block it at body height.
    type = 'block';
    reach = fit({ pelvis: [tx * 0.4, STANDING_PELVIS], body: side * 4, legL: 192, legR: 168 });
  } else if (across < 22) {
    // Shuffle across and lean to reach, crouching for low balls.
    type = 'shuffle';
    const low = height < 14;
    const step = side * Math.min(8, across - 7) * (HALF_GOAL / GOAL_SCALE);
    const lean = side * Math.min(30, (across - 6) * 1.6) * (low ? 1.3 : 1);
    reach = fit({
      pelvis: [step, low ? 7 : STANDING_PELVIS],
      body: lean, legL: side > 0 ? 200 : 210, legR: side > 0 ? 150 : 160, legLength: low ? 0.85 : 1,
    }, height < 30);
  } else {
    // Full-length dive: the body stretches toward the ball, flatter the lower it is.
    type = 'dive';
    const body = Math.max(40, Math.min(100, Math.abs(towardBall([0, 5])))) * side;
    const up = dir(body);
    const pelvis = add([tx, ty], up, -FULL_REACH);
    reach = {
      pelvis: [pelvis[0], Math.max(3.5, pelvis[1])],
      body, armL: body - 6, armR: body + 6, legL: body + 180 - 10, legR: body + 180 + 10,
    };
    // Lying flat for a ball on the ground can leave the gloves a little high, so
    // slide him the rest of the way.
    const gloves = glovesAt(reach);
    reach.pelvis = [reach.pelvis[0] + tx - gloves[0], Math.max(3.5, reach.pelvis[1] + ty - gloves[1])];
  }

  // Getting set: a small crouch, weight shifting toward the ball.
  const load = {
    ...READY_POSE,
    pelvis: [side * Math.min(2, far / 6), STANDING_PELVIS - 2],
    legL: 200, legR: 160, legLength: 0.85,
    armL: -120, armR: 120,
  };
  const keys = [
    { t: 0, pose: READY_POSE },
    { t: 0.18, pose: load },
    { t: 1, pose: reach },
  ];
  if (type === 'dive') {
    // After the stretch he lands on his side, arms still out.
    keys.push({ t: 1.8, pose: { ...reach, pelvis: [reach.pelvis[0], 3.5], body: side * 90, armL: side * 90 - 6, armR: side * 90 + 6, legL: -side * 90 - 8, legR: -side * 90 + 8 } });
  } else if (type === 'jump') {
    keys.push({ t: 1.8, pose: { ...reach, pelvis: [reach.pelvis[0], STANDING_PELVIS] } });
  }
  return { type, keys, target: [tx, ty] };
}

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const mix = (a, b, t) => a + (b - a) * t;
// Angles blend the short way round.
const mixAngle = (a, b, t) => a + ((((b - a) % 360) + 540) % 360 - 180) * t;

/** The keeper's pose at a moment in a save, where 1 is the moment he reaches the ball. */
export function saveFrame(plan, progress) {
  const keys = plan.keys;
  let i = 0;
  while (i < keys.length - 2 && progress > keys[i + 1].t) i += 1;
  const a = keys[i];
  const b = keys[i + 1];
  const t = ease(Math.max(0, Math.min(1, (progress - a.t) / (b.t - a.t))));
  const pose = {};
  pose.pelvis = [mix(a.pose.pelvis[0], b.pose.pelvis[0], t), mix(a.pose.pelvis[1], b.pose.pelvis[1], t)];
  for (const key of ['body', 'armL', 'armR', 'legL', 'legR']) pose[key] = mixAngle(a.pose[key], b.pose[key], t);
  pose.legLength = mix(a.pose.legLength || 1, b.pose.legLength || 1, t);
  return pose;
}

export { READY_POSE };

const SKIN = { 1: '#f1c8a0', 2: '#e0a878', 3: '#c68642', 4: '#8d5524', 5: '#5c3a1e' };
const HAIR_STYLES = { s: 'short', l: 'long', z: 'buzz', x: 'bald' };
const HAIR_COLORS = { k: '#1d1712', d: '#3b2a1a', b: '#6b4423', l: '#c9a25a' };

// Kit colours: shirt, shorts, socks (and the number and gloves to match).
const COLORS = {
  black: '#232528', pink: '#ff5fa2', purple: '#7a3fc4', green: '#2bb673', orange: '#ff8c1a',
  teal: '#00b3a4', yellow: '#ffd21f', lime: '#a6e22e', sky: '#2fa8e8',
};
const DARK = new Set(['black', 'purple', 'green', 'teal']);

// Each team's starting keeper as [name, shirt number, kit colour, look]: the
// keeper who started the most of that team's 2026 World Cup games (a tie goes
// to whoever started the last one), from the official line-ups.
// Look is "skin, hair style, hair colour" like the takers; empty means a default.
export const GOALIES = {
  Mexico: ['Raúl Rangel', 1, 'pink', '2sk'],
  'South Africa': ['Ronwen Williams', 1, 'purple', '5zk'],
  'South Korea': ['Kim Seung-gyu', 1, 'green', '2sk'],
  'Czech Republic': ['Matěj Kovář', 1, 'black', '1sb'],
  Switzerland: ['Gregor Kobel', 1, 'yellow', '1sb'],
  Canada: ['Maxime Crépeau', 16, 'teal', ''],
  'Bosnia & Herzegovina': ['Nikola Vasilj', 1, 'orange', '1sd'],
  Qatar: ['Mahmud Abunada', 1, 'yellow', ''],
  Brazil: ['Alisson', 1, 'green', '1sd'],
  Morocco: ['Yassine Bounou', 1, 'yellow', '3zk'],
  Scotland: ['Angus Gunn', 1, 'lime', '1sb'],
  Haiti: ['Johny Placide', 1, 'orange', '5zk'],
  USA: ['Matt Freese', 24, 'teal', ''],
  Australia: ['Patrick Beach', 18, 'purple', ''],
  Paraguay: ['Orlando Gill', 12, 'black', ''],
  Turkey: ['Uğurcan Çakır', 23, 'sky', ''],
  Germany: ['Manuel Neuer', 1, 'green', '1sl'],
  'Curaçao': ['Eloy Room', 1, 'orange', '4zk'],
  'Ivory Coast': ['Yahia Fofana', 1, 'sky', '5zk'],
  Ecuador: ['Hernán Galíndez', 1, 'black', '2sk'],
  Netherlands: ['Bart Verbruggen', 1, 'green', '1sb'],
  Japan: ['Zion Suzuki', 1, 'yellow', '4sk'],
  Sweden: ['Jacob Widell Zetterström', 1, 'pink', '1sb'],
  Tunisia: ['Aymen Dahmen', 16, 'black', ''],
  Belgium: ['Thibaut Courtois', 1, 'yellow', '1sd'],
  Egypt: ['Mostafa Shobeir', 23, 'teal', ''],
  Iran: ['Alireza Beiranvand', 1, 'orange', '2sk'],
  'New Zealand': ['Max Crocombe', 1, 'lime', '1sb'],
  Spain: ['Unai Simón', 23, 'lime', '1sd'],
  'Cape Verde': ['Vozinha', 1, 'yellow', '4xk'],
  'Saudi Arabia': ['Mohammed Al-Owais', 21, 'orange', ''],
  Uruguay: ['Fernando Muslera', 23, 'orange', ''],
  France: ['Mike Maignan', 16, 'yellow', '4zk'],
  Senegal: ['Mory Diaw', 23, 'orange', ''],
  Iraq: ['Ahmed Basil', 22, 'purple', ''],
  Norway: ['Ørjan Nyland', 1, 'black', '1sb'],
  Argentina: ['Emiliano Martínez', 23, 'purple', '2sk'],
  Algeria: ['Luca Zidane', 23, 'black', ''],
  Austria: ['Alexander Schlager', 1, 'green', '1sb'],
  Jordan: ['Yazeed Abulaila', 1, 'black', ''],
  Portugal: ['Diogo Costa', 1, 'sky', '1sd'],
  'DR Congo': ['Lionel Mpasi', 1, 'green', '4zk'],
  Uzbekistan: ['Abduvohid Nematov', 12, 'orange', ''],
  Colombia: ['Camilo Vargas', 12, 'pink', '3sk'],
  England: ['Jordan Pickford', 1, 'yellow', '1sb'],
  Croatia: ['Dominik Livaković', 1, 'lime', '1sd'],
  Ghana: ['Lawrence Ati-Zigi', 1, 'purple', '5zk'],
  Panama: ['Orlando Mosquera', 22, 'yellow', ''],
};

// The same keeper always gets the same default look.
function seeded(text) {
  let hash = 2166136261;
  for (const char of text) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return () => {
    hash = Math.imul(hash ^ (hash >>> 15), 2246822507) ^ Math.imul(hash ^ (hash >>> 13), 3266489909);
    return ((hash >>> 0) % 10000) / 10000;
  };
}

/** A team's starting keeper: name, number, look and colours. */
export function goalieFor(team) {
  const [name, number, kitColor, lookCode] = GOALIES[team];
  const random = seeded(`${team}:${name}`);
  const look = lookCode || `${1 + Math.floor(random() * 5)}${random() < 0.7 ? 's' : 'z'}${random() < 0.8 ? 'k' : 'd'}`;
  const shirt = COLORS[kitColor];
  return {
    name,
    number,
    kitColor,
    hair: HAIR_STYLES[look[1]],
    colors: {
      k: shirt, c: DARK.has(kitColor) ? '#ffffff' : '#1a1a1a', N: DARK.has(kitColor) ? '#ffffff' : '#1a1a1a',
      b: shirt, i: DARK.has(kitColor) ? '#ffffff' : '#1a1a1a', o: shirt,
      // Gloves stand out against the shirt.
      G: DARK.has(kitColor) ? '#f2f2f2' : '#2a2a2e',
      h: HAIR_COLORS[look[2]], s: SKIN[look[0]], e: '#2a1d12', m: '#a8603c',
      f: '#1a1a1a', q: '#3d4348',
    },
  };
}
