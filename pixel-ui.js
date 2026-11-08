// The game's menus and score bar, drawn in the same pixels as the players. Two
// pixel fonts, panels, buttons and a few small sprites, all drawn one pixel at a
// time on the small scene canvas that the game scales up by a whole number, so
// the menus have exactly the same pixel size as the pitch.

// ---------- Colours: night-time stadium navy, trophy gold, and bright 2026 accents ----------
export const COLORS = {
  night: '#0a0f1f',
  nightStripe: '#0d1428',
  panel: '#121a33',
  panelLight: '#18223f',
  panelEdge: '#2b3866',
  shadow: '#04060d',
  text: '#eef1f8',
  dim: '#8d98b8',
  faint: '#4a5578',
  gold: '#e8c45a',
  goldLight: '#ffe7a0',
  goldDark: '#8a6a1c',
  green: '#4fd88a',
  red: '#ff5a5a',
  teal: '#19c2a7',
  blue: '#3b7cff',
  purple: '#9a5cff',
  lime: '#a6e22e',
  orange: '#ff9a3c',
};

// The coloured band along the top and bottom of every screen.
export const BAND = [COLORS.teal, COLORS.red, COLORS.gold, COLORS.lime, COLORS.blue, COLORS.purple];

// ---------- Fonts ----------
// Small: 3 pixels wide (some narrower), 5 tall. Big: 5 wide (some narrower), 7 tall.
const SMALL = {
  A: ['.#.', '#.#', '###', '#.#', '#.#'], B: ['##.', '#.#', '##.', '#.#', '##.'],
  C: ['.##', '#..', '#..', '#..', '.##'], D: ['##.', '#.#', '#.#', '#.#', '##.'],
  E: ['###', '#..', '##.', '#..', '###'], F: ['###', '#..', '##.', '#..', '#..'],
  G: ['.##', '#..', '#.#', '#.#', '.##'], H: ['#.#', '#.#', '###', '#.#', '#.#'],
  I: ['###', '.#.', '.#.', '.#.', '###'], J: ['..#', '..#', '..#', '#.#', '.#.'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'], L: ['#..', '#..', '#..', '#..', '###'],
  M: ['#.#', '###', '###', '#.#', '#.#'], N: ['##.', '#.#', '#.#', '#.#', '#.#'],
  O: ['.#.', '#.#', '#.#', '#.#', '.#.'], P: ['##.', '#.#', '##.', '#..', '#..'],
  Q: ['.#.', '#.#', '#.#', '##.', '.##'], R: ['##.', '#.#', '##.', '#.#', '#.#'],
  S: ['.##', '#..', '.#.', '..#', '##.'], T: ['###', '.#.', '.#.', '.#.', '.#.'],
  U: ['#.#', '#.#', '#.#', '#.#', '###'], V: ['#.#', '#.#', '#.#', '#.#', '.#.'],
  W: ['#.#', '#.#', '###', '###', '#.#'], X: ['#.#', '#.#', '.#.', '#.#', '#.#'],
  Y: ['#.#', '#.#', '.#.', '.#.', '.#.'], Z: ['###', '..#', '.#.', '#..', '###'],
  0: ['###', '#.#', '#.#', '#.#', '###'], 1: ['.#.', '##.', '.#.', '.#.', '###'],
  2: ['##.', '..#', '.#.', '#..', '###'], 3: ['##.', '..#', '.#.', '..#', '##.'],
  4: ['#.#', '#.#', '###', '..#', '..#'], 5: ['###', '#..', '##.', '..#', '##.'],
  6: ['.##', '#..', '###', '#.#', '###'], 7: ['###', '..#', '.#.', '.#.', '.#.'],
  8: ['###', '#.#', '###', '#.#', '###'], 9: ['###', '#.#', '###', '..#', '##.'],
  ' ': ['..', '..', '..', '..', '..'],
  '.': ['.', '.', '.', '.', '#'], ',': ['.', '.', '.', '#', '#'],
  ':': ['.', '#', '.', '#', '.'], ';': ['.', '#', '.', '#', '#'],
  "'": ['#', '#', '.', '.', '.'], '!': ['#', '#', '#', '.', '#'],
  '?': ['##.', '..#', '.#.', '...', '.#.'], '-': ['...', '...', '###', '...', '...'],
  '+': ['...', '.#.', '###', '.#.', '...'], '/': ['..#', '..#', '.#.', '#..', '#..'],
  '(': ['.#', '#.', '#.', '#.', '.#'], ')': ['#.', '.#', '.#', '.#', '#.'],
  '&': ['.#.', '#.#', '.#.', '#.#', '.##'], '%': ['#.#', '..#', '.#.', '#..', '#.#'],
  '·': ['.', '.', '#', '.', '.'], '<': ['..#', '.#.', '#..', '.#.', '..#'],
  '>': ['#..', '.#.', '..#', '.#.', '#..'], '°': ['###', '#.#', '###', '...', '...'],
  '#': ['#.#', '###', '#.#', '###', '#.#'], '=': ['...', '###', '...', '###', '...'],
};

const BIG = {
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  B: ['####.', '#...#', '#...#', '####.', '#...#', '#...#', '####.'],
  C: ['.###.', '#...#', '#....', '#....', '#....', '#...#', '.###.'],
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
  F: ['#####', '#....', '#....', '####.', '#....', '#....', '#....'],
  G: ['.###.', '#...#', '#....', '#.###', '#...#', '#...#', '.####'],
  H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  I: ['###', '.#.', '.#.', '.#.', '.#.', '.#.', '###'],
  J: ['..###', '...#.', '...#.', '...#.', '...#.', '#..#.', '.##..'],
  K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  M: ['#...#', '##.##', '#.#.#', '#.#.#', '#...#', '#...#', '#...#'],
  N: ['#...#', '##..#', '#.#.#', '#..##', '#...#', '#...#', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  P: ['####.', '#...#', '#...#', '####.', '#....', '#....', '#....'],
  Q: ['.###.', '#...#', '#...#', '#...#', '#.#.#', '#..#.', '.##.#'],
  R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'],
  S: ['.####', '#....', '#....', '.###.', '....#', '....#', '####.'],
  T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
  U: ['#...#', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  V: ['#...#', '#...#', '#...#', '#...#', '#...#', '.#.#.', '..#..'],
  W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '#.#.#', '.#.#.'],
  X: ['#...#', '#...#', '.#.#.', '..#..', '.#.#.', '#...#', '#...#'],
  Y: ['#...#', '#...#', '.#.#.', '..#..', '..#..', '..#..', '..#..'],
  Z: ['#####', '....#', '...#.', '..#..', '.#...', '#....', '#####'],
  0: ['.###.', '#...#', '#..##', '#.#.#', '##..#', '#...#', '.###.'],
  1: ['..#..', '.##..', '..#..', '..#..', '..#..', '..#..', '.###.'],
  2: ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '#####'],
  3: ['####.', '....#', '....#', '.###.', '....#', '....#', '####.'],
  4: ['...#.', '..##.', '.#.#.', '#..#.', '#####', '...#.', '...#.'],
  5: ['#####', '#....', '####.', '....#', '....#', '#...#', '.###.'],
  6: ['..##.', '.#...', '#....', '####.', '#...#', '#...#', '.###.'],
  7: ['#####', '....#', '...#.', '..#..', '.#...', '.#...', '.#...'],
  8: ['.###.', '#...#', '#...#', '.###.', '#...#', '#...#', '.###.'],
  9: ['.###.', '#...#', '#...#', '.####', '....#', '...#.', '.##..'],
  ' ': ['...', '...', '...', '...', '...', '...', '...'],
  '!': ['#', '#', '#', '#', '#', '.', '#'],
  '?': ['.###.', '#...#', '....#', '...#.', '..#..', '.....', '..#..'],
  '-': ['...', '...', '...', '###', '...', '...', '...'],
  ':': ['.', '.', '#', '.', '#', '.', '.'],
  '.': ['.', '.', '.', '.', '.', '.', '#'],
  "'": ['#', '#', '.', '.', '.', '.', '.'],
  '&': ['.##..', '#..#.', '.##..', '.#...', '#.#.#', '#..#.', '.##.#'],
  '°': ['.#.', '#.#', '.#.', '...', '...', '...', '...'],
  '·': ['.', '.', '.', '#', '.', '.', '.'],
  '/': ['....#', '...#.', '...#.', '..#..', '.#...', '.#...', '#....'],
  '(': ['.#', '#.', '#.', '#.', '#.', '#.', '.#'],
  ')': ['#.', '.#', '.#', '.#', '.#', '.#', '#.'],
};

export const FONTS = {
  small: { glyphs: SMALL, height: 5, line: 7 },
  big: { glyphs: BIG, height: 7, line: 9 },
};

const SPECIAL = { 'ø': 'o', 'Ø': 'O', 'ß': 'ss', 'ı': 'i', 'ł': 'l', 'Ł': 'L', 'đ': 'd', 'Đ': 'D', 'æ': 'ae', 'Æ': 'AE', '–': '-', '—': '-', '’': "'", '✕': 'x' };

/** Pixel fonts only have plain capitals, so accents are dropped: "Jiménez" is drawn "JIMENEZ". */
export function plain(text) {
  return String(text)
    .replace(/[øØßıłŁđĐæÆ–—’✕]/g, (c) => SPECIAL[c])
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase();
}

export function textWidth(text, font = 'small') {
  const { glyphs } = FONTS[font];
  let width = 0;
  let count = 0;
  for (const char of plain(text)) {
    const glyph = glyphs[char] || glyphs[' '];
    width += glyph[0].length;
    count += 1;
  }
  return count ? width + count - 1 : 0;
}

/**
 * Draws text with its top-left at (x, y), or centred or right-aligned on x.
 * `shadow` adds a darker copy one pixel lower, for titles.
 */
export function text(g, value, x, y, { font = 'small', color = COLORS.text, align = 'left', shadow = null } = {}) {
  const { glyphs } = FONTS[font];
  const width = textWidth(value, font);
  let left = Math.round(align === 'center' ? x - width / 2 : align === 'right' ? x - width : x);
  const top = Math.round(y);
  const draw = (dx, dy, fill) => {
    g.fillStyle = fill;
    let cursor = left + dx;
    for (const char of plain(value)) {
      const glyph = glyphs[char] || glyphs[' '];
      glyph.forEach((row, ry) => {
        for (let rx = 0; rx < row.length; rx += 1) if (row[rx] === '#') g.fillRect(cursor + rx, top + dy + ry, 1, 1);
      });
      cursor += glyph[0].length + 1;
    }
  };
  if (shadow) draw(0, 1, shadow);
  draw(0, 0, color);
  return width;
}

/** Breaks text into lines no wider than `width`. */
export function wrap(value, width, font = 'small') {
  const lines = [];
  let line = '';
  for (const word of String(value).split(/\s+/).filter(Boolean)) {
    const next = line ? `${line} ${word}` : word;
    if (line && textWidth(next, font) > width) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** The longest text from `options` that fits in `width`, for names that can be shortened. */
export function fit(options, width, font = 'small') {
  return options.find((option) => textWidth(option, font) <= width) || options[options.length - 1];
}

// ---------- Shapes ----------
export function rect(g, x, y, w, h, color) {
  g.fillStyle = color;
  g.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

/** A box with its corner pixels cut off, so it reads as pixel art rather than a sharp rectangle. */
export function panel(g, x, y, w, h, { fill = COLORS.panel, edge = COLORS.panelEdge, highlight = null } = {}) {
  rect(g, x + 1, y, w - 2, h, edge);
  rect(g, x, y + 1, w, h - 2, edge);
  rect(g, x + 1, y + 1, w - 2, h - 2, fill);
  if (highlight) rect(g, x + 2, y + 1, w - 4, 1, highlight);
}

export function sprite(g, rows, x, y, palette) {
  rows.forEach((row, ry) => {
    for (let rx = 0; rx < row.length; rx += 1) {
      const color = palette[row[rx]];
      if (!color) continue;
      g.fillStyle = color;
      g.fillRect(Math.round(x) + rx, Math.round(y) + ry, 1, 1);
    }
  });
}

/** The screen's backdrop: night navy with faint diagonal stripes and a coloured band top and bottom. */
export function backdrop(g, width, height, { bands = true } = {}) {
  rect(g, 0, 0, width, height, COLORS.night);
  g.fillStyle = COLORS.nightStripe;
  for (let y = 0; y < height; y += 1) {
    for (let x = (y * 1) % 10; x < width; x += 10) g.fillRect(x, y, 2, 1);
  }
  if (bands) {
    band(g, 0, 0, width, 2);
    band(g, 0, height - 2, width, 2);
  }
}

/** A strip of the 2026 accent colours. */
export function band(g, x, y, width, height) {
  const step = Math.max(6, Math.ceil(width / (BAND.length * 4)));
  for (let i = 0, left = x; left < x + width; i += 1, left += step) {
    rect(g, left, y, Math.min(step, x + width - left), height, BAND[i % BAND.length]);
  }
}

// ---------- Sprites ----------
export const TROPHY = [
  '...yyyyyyy...',
  '.yyYYyyyyydyy.',
  'y..YYyyyyyd..y',
  'y..YYyyyyyd..y',
  '.y..Yyyyyd..y.',
  '..yy.Yyyyd.yy.',
  '......Yyd.....',
  '......Yyd.....',
  '.....YYyyd....',
  '....YYyyyyd...',
  '....kkkkkkk...',
  '...kKKKKKKKk..',
  '...kkkkkkkkk..',
].map((row) => row.padEnd(14, '.'));
export const TROPHY_PALETTE = { y: COLORS.gold, Y: COLORS.goldLight, d: COLORS.goldDark, k: '#3b2a10', K: '#5e4418' };

export const STAR = ['..#..', '#####', '.###.', '.#.#.', '#...#'];

/** Shootout kick marks: a goal, a miss, and a kick still to come. */
export const MARKS = {
  goal: ['.###.', '#####', '#####', '#####', '.###.'],
  miss: ['#...#', '.#.#.', '..#..', '.#.#.', '#...#'],
  todo: ['.###.', '#...#', '#...#', '#...#', '.###.'],
};

export function stars(g, count, x, y, { on = COLORS.gold, off = COLORS.faint } = {}) {
  for (let i = 0; i < 5; i += 1) sprite(g, STAR, x + i * 6, y, { '#': i < count ? on : off });
  return 29;
}

// ---------- Buttons ----------
/**
 * Draws a button and remembers where it is, so a tap there runs `action`.
 * `ui` holds this frame's buttons and which one is being pressed.
 */
export function button(g, ui, id, x, y, w, h, label, action, { style = 'secondary', font = 'small', active = false } = {}) {
  const pressed = ui.pressed === id;
  const top = y + (pressed ? 1 : 0);
  const styles = {
    primary: { fill: COLORS.gold, edge: COLORS.goldDark, highlight: COLORS.goldLight, text: '#1a1206' },
    secondary: { fill: COLORS.panelLight, edge: COLORS.panelEdge, highlight: '#24305a', text: COLORS.text },
    danger: { fill: '#5a1c24', edge: '#a8323e', highlight: '#7a2832', text: '#ffd9dc' },
    tab: active
      ? { fill: COLORS.gold, edge: COLORS.goldDark, highlight: COLORS.goldLight, text: '#1a1206' }
      : { fill: COLORS.panel, edge: COLORS.panelEdge, highlight: null, text: COLORS.dim },
  };
  const look = styles[style];
  if (!pressed) rect(g, x + 1, y + h, w - 2, 1, COLORS.shadow);
  panel(g, x, top, w, h, { fill: look.fill, edge: look.edge, highlight: look.highlight });
  const lineHeight = FONTS[font].height;
  text(g, label, x + w / 2, top + Math.floor((h - lineHeight) / 2), { font, color: look.text, align: 'center' });
  ui.buttons.push({ id, x, y, w, h: h + 1, action });
}
