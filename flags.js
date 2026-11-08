// Simple pixel flags for all 48 teams. Each flag is a rule giving the colour at
// any point (u across from the pole, v down, both 0 to 1), so it can be drawn at
// any size in whole pixels: no scaled-up pixels. Small details (emblems, stars)
// are simplified to what reads at a few pixels across.

const C = {
  red: '#d52b1e', white: '#ffffff', blue: '#0033a0', green: '#009a44', yellow: '#fcd116',
  black: '#141414', sky: '#75aadb', navy: '#012169', gold: '#f2b705',
};

const stripes = (colors, weights = colors.map(() => 1), across = false) => {
  const total = weights.reduce((a, b) => a + b, 0);
  return (u, v) => {
    let t = (across ? u : v) * total;
    for (let i = 0; i < colors.length; i += 1) {
      if (t < weights[i]) return colors[i];
      t -= weights[i];
    }
    return colors[colors.length - 1];
  };
};
const rows = (colors, weights) => stripes(colors, weights, false);
const cols = (colors, weights) => stripes(colors, weights, true);

// Layers: each returns a colour or null to show what's underneath.
const layer = (base, ...overlays) => (u, v, aspect) => {
  for (let i = overlays.length - 1; i >= 0; i -= 1) {
    const color = overlays[i](u, v, aspect);
    if (color) return color;
  }
  return base(u, v, aspect);
};
// Distances are measured in flag heights, so circles stay round on a wide flag.
const dist = (u, v, cx, cy, aspect) => Math.hypot((u - cx) * aspect, v - cy);
const disc = (cx, cy, r, color) => (u, v, a) => (dist(u, v, cx, cy, a) <= r ? color : null);
const ring = (cx, cy, r1, r2, color) => (u, v, a) => {
  const d = dist(u, v, cx, cy, a);
  return d >= r1 && d <= r2 ? color : null;
};
const crescent = (cx, cy, r, shift, inner, color) => (u, v, a) =>
  dist(u, v, cx, cy, a) <= r && dist(u, v, cx + shift, cy, a) > inner ? color : null;
const box = (u1, v1, u2, v2, color) => (u, v) => (u >= u1 && u < u2 && v >= v1 && v < v2 ? color : null);
const hoist = (depth, color) => (u, v) => (u < depth * (1 - Math.abs(2 * v - 1)) ? color : null);
const cross = (cx, thickness, color) => (u, v, a) =>
  Math.abs((u - cx) * a) < thickness / 2 || Math.abs(v - 0.5) < thickness / 2 ? color : null;
const saltire = (thickness, color) => (u, v) =>
  Math.abs(v - u) < thickness || Math.abs(v - (1 - u)) < thickness ? color : null;
const canton = (w, h, draw) => (u, v, a) => (u < w && v < h ? draw(u / w, v / h, (a * w) / h) : null);

// The Union Jack, simplified, for the Australian and New Zealand cantons.
const unionJack = layer(() => C.navy, saltire(0.11, C.white), cross(0.5, 0.36, C.white), cross(0.5, 0.2, C.red));

export const FLAGS = {
  Mexico: layer(cols(['#006847', C.white, '#ce1126']), disc(0.5, 0.5, 0.13, '#8c5a2b')),
  'South Africa': layer(
    rows(['#e03c31', '#001489']),
    // The green Y: one band across, splitting into two arms toward the pole.
    (u, v) => {
      const band = u >= 0.4 ? Math.abs(v - 0.5) : Math.min(Math.abs(v - 0.5 - (0.4 - u) * 1.25), Math.abs(v - 0.5 + (0.4 - u) * 1.25));
      if (band < 0.11) return '#007749';
      if (band < 0.18) return C.white;
      return null;
    },
    hoist(0.34, '#ffb612'),
    hoist(0.27, C.black),
  ),
  'South Korea': layer(
    () => C.white,
    (u, v, a) => (dist(u, v, 0.5, 0.5, a) <= 0.24 ? (v < 0.5 ? '#cd2e3a' : '#0047a0') : null),
    box(0.12, 0.16, 0.24, 0.32, C.black), box(0.76, 0.16, 0.88, 0.32, C.black),
    box(0.12, 0.68, 0.24, 0.84, C.black), box(0.76, 0.68, 0.88, 0.84, C.black),
  ),
  'Czech Republic': layer(rows([C.white, '#d7141a']), hoist(0.5, '#11457e')),
  Switzerland: layer(() => '#da291c', (u, v, a) => {
    const x = Math.abs(u - 0.5) * a;
    const y = Math.abs(v - 0.5);
    return (x < 0.1 && y < 0.32) || (y < 0.1 && x < 0.32) ? C.white : null;
  }),
  Canada: layer(cols(['#d80621', C.white, '#d80621'], [1, 2, 1]), disc(0.5, 0.48, 0.2, '#d80621'), box(0.48, 0.6, 0.52, 0.8, '#d80621')),
  'Bosnia & Herzegovina': layer(() => '#002395', (u, v) => (u >= 0.27 && u < 0.73 && v <= (u - 0.27) / 0.46 ? '#fecb00' : null)),
  Qatar: (u, v) => {
    const wave = Math.abs(((v * 9) % 1) - 0.5) * 2;
    return u < 0.26 + 0.08 * (1 - wave) ? C.white : '#8a1538';
  },
  Brazil: layer(
    () => '#009c3b',
    (u, v) => (Math.abs(u - 0.5) / 0.42 + Math.abs(v - 0.5) / 0.4 <= 1 ? '#ffdf00' : null),
    disc(0.5, 0.5, 0.21, '#002776'),
  ),
  Morocco: layer(() => '#c1272d', ring(0.5, 0.5, 0.07, 0.17, '#006233')),
  Scotland: layer(() => '#005eb8', saltire(0.1, C.white)),
  Haiti: layer(rows(['#00209f', '#d21034']), box(0.36, 0.3, 0.64, 0.7, C.white)),
  USA: layer(
    (u, v) => (Math.floor(v * 13) % 2 === 0 ? '#b22234' : C.white),
    box(0, 0, 0.42, 0.54, '#3c3b6e'),
  ),
  Australia: layer(
    () => C.navy,
    canton(0.5, 0.5, unionJack),
    disc(0.25, 0.76, 0.09, C.white), disc(0.76, 0.28, 0.05, C.white), disc(0.86, 0.5, 0.05, C.white), disc(0.74, 0.8, 0.05, C.white),
  ),
  Paraguay: rows(['#d52b1e', C.white, '#0038a8']),
  Turkey: layer(() => '#e30a17', crescent(0.4, 0.5, 0.27, 0.07, 0.22, C.white), disc(0.63, 0.5, 0.08, C.white)),
  Germany: rows([C.black, '#dd0000', '#ffce00']),
  'Curaçao': layer(() => '#002b7f', box(0, 0.62, 1, 0.75, '#f9e814'), disc(0.12, 0.15, 0.06, C.white), disc(0.24, 0.32, 0.07, C.white)),
  'Ivory Coast': cols(['#f77f00', C.white, '#009e60']),
  Ecuador: layer(rows(['#ffdd00', '#034ea2', '#ed1c24'], [2, 1, 1]), disc(0.5, 0.48, 0.12, '#6b4a2b')),
  Netherlands: rows(['#ae1c28', C.white, '#21468b']),
  Japan: layer(() => C.white, disc(0.5, 0.5, 0.3, '#bc002d')),
  Sweden: layer(() => '#006aa7', cross(0.36, 0.22, '#fecc00')),
  Tunisia: layer(() => '#e70013', disc(0.5, 0.5, 0.28, C.white), crescent(0.48, 0.5, 0.21, 0.06, 0.17, '#e70013')),
  Belgium: cols([C.black, '#fdda24', '#ef3340']),
  Egypt: layer(rows(['#ce1126', C.white, C.black]), disc(0.5, 0.5, 0.1, '#c09300')),
  Iran: layer(rows(['#239f40', C.white, '#da0000']), disc(0.5, 0.5, 0.08, '#da0000')),
  'New Zealand': layer(
    () => C.navy,
    canton(0.5, 0.5, unionJack),
    disc(0.76, 0.28, 0.06, '#c8102e'), disc(0.66, 0.52, 0.06, '#c8102e'), disc(0.86, 0.48, 0.05, '#c8102e'), disc(0.76, 0.8, 0.07, '#c8102e'),
  ),
  Spain: layer(rows(['#aa151b', '#f1bf00', '#aa151b'], [1, 2, 1]), disc(0.3, 0.5, 0.1, '#ad1519')),
  'Cape Verde': layer(
    () => '#003893',
    box(0, 0.5, 1, 0.583, C.white), box(0, 0.583, 1, 0.667, '#cf2027'), box(0, 0.667, 1, 0.75, C.white),
    ring(0.38, 0.62, 0.17, 0.25, '#f7d116'),
  ),
  'Saudi Arabia': layer(() => '#006c35', box(0.22, 0.32, 0.78, 0.48, C.white), box(0.25, 0.64, 0.75, 0.7, C.white)),
  Uruguay: layer(
    (u, v) => (Math.floor(v * 9) % 2 === 0 ? C.white : '#0038a8'),
    box(0, 0, 0.36, 0.556, C.white),
    disc(0.18, 0.28, 0.15, '#fcd116'),
  ),
  France: cols(['#0055a4', C.white, '#ef4135']),
  Senegal: layer(cols(['#00853f', '#fdef42', '#e31b23']), disc(0.5, 0.5, 0.1, '#00853f')),
  Iraq: layer(rows(['#ce1126', C.white, C.black]), box(0.32, 0.44, 0.68, 0.56, '#007a3d')),
  Norway: layer(() => '#ba0c2f', cross(0.36, 0.28, C.white), cross(0.36, 0.14, '#00205b')),
  Argentina: layer(rows(['#74acdf', C.white, '#74acdf']), disc(0.5, 0.5, 0.11, '#f6b40e')),
  Algeria: layer(cols(['#006633', C.white]), crescent(0.5, 0.5, 0.27, 0.07, 0.21, '#d21034'), disc(0.62, 0.5, 0.06, '#d21034')),
  Austria: rows(['#ed2939', C.white, '#ed2939']),
  Jordan: layer(rows([C.black, C.white, '#007a3d']), hoist(0.5, '#ce1126'), disc(0.17, 0.5, 0.06, C.white)),
  Portugal: layer(cols(['#006600', '#ff0000'], [2, 3]), disc(0.4, 0.5, 0.2, '#ffcc00'), disc(0.4, 0.5, 0.12, '#ff0000'), disc(0.4, 0.5, 0.05, C.white)),
  'DR Congo': layer(
    () => '#007fff',
    (u, v, a) => {
      const t = Math.abs((v - (1 - u)) / Math.hypot(1, 1 / a));
      if (t < 0.1) return '#ce1021';
      if (t < 0.16) return '#f7d618';
      return null;
    },
    disc(0.16, 0.24, 0.1, '#f7d618'),
  ),
  Uzbekistan: layer(
    rows(['#0099b5', C.white, '#1eb53a']),
    box(0, 0.32, 1, 0.35, '#ce1126'), box(0, 0.65, 1, 0.68, '#ce1126'),
    crescent(0.15, 0.17, 0.11, 0.04, 0.09, C.white),
  ),
  Colombia: rows(['#fcd116', '#003893', '#ce1126'], [2, 1, 1]),
  England: layer(() => C.white, cross(0.5, 0.2, '#ce1124')),
  Croatia: layer(
    rows(['#ff0000', C.white, '#171796']),
    (u, v) => (Math.abs(u - 0.5) < 0.1 && v > 0.28 && v < 0.68 ? ((Math.floor(u * 30) + Math.floor(v * 20)) % 2 ? '#ff0000' : C.white) : null),
  ),
  Ghana: layer(rows(['#ce1126', '#fcd116', '#006b3f']), disc(0.5, 0.5, 0.11, C.black)),
  Panama: layer(
    (u, v) => {
      if (v < 0.5) return u < 0.5 ? C.white : '#d21034';
      return u < 0.5 ? '#072357' : C.white;
    },
    disc(0.25, 0.25, 0.09, '#072357'),
    disc(0.75, 0.75, 0.09, '#d21034'),
  ),
};

/**
 * Draws a team's flag with its top-left at (x, y), `width` by `height` pixels,
 * inside a one-pixel dark outline (so the whole thing is two pixels bigger).
 */
export function drawFlag(g, team, x, y, width, height, outline = '#04060d') {
  const rule = FLAGS[team];
  g.fillStyle = outline;
  g.fillRect(x, y, width + 2, height + 2);
  const aspect = width / height;
  for (let j = 0; j < height; j += 1) {
    for (let i = 0; i < width; i += 1) {
      g.fillStyle = rule ? rule((i + 0.5) / width, (j + 0.5) / height, aspect) : '#555';
      g.fillRect(x + 1 + i, y + 1 + j, 1, 1);
    }
  }
}
