// The stadium behind the goal, drawn in the same pixels as the players: crowd,
// stands, floodlights, ad boards, grass, pitch lines, the net and the goal frame.
// Everything here is drawn one pixel at a time on a small canvas that the game
// scales up by a whole number, so every pixel on screen is the same size.
//
// Colours are kept dark and muted so the players, ball and aim circles stand out.

const STAND = '#1b2330';
const SEAT_ROWS = ['#222b38', '#1f2834'];
const TIER_LINE = '#141a24';
const ROOF = '#10151d';
const LIGHT = '#fff3c4';
const LIGHT_GLOW = '#6f6a52';
const BOARD_COLORS = ['#244e78', '#7a2c2c', '#2a6a46', '#7a6220'];
const BOARD_EDGE = '#0f141b';
const GRASS_BEHIND = '#285c30';
const GRASS = ['#2d6835', '#296130'];
const LINE = '#dfe7e1';
const NET = '#4f5b57';
const POST = '#f4f7f5';
const POST_SHADE = '#c9d1cd';
const SKIN = ['#c99a74', '#a8784f', '#7a5236', '#d8b08c', '#5a3b26'];

// Darkens a colour so the crowd stays in the background.
function dim(hex, amount = 0.45) {
  const n = parseInt(hex.slice(1), 16);
  const channel = (shift) => Math.round(((n >> shift) & 255) * (1 - amount));
  return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
}

function seeded(seed) {
  let h = seed >>> 0 || 1;
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

/**
 * Builds the parts of the stadium that don't move, for one canvas size. `frame`
 * gives the canvas size and where the goal is: { width, height, centerX, groundY,
 * unit } with unit = pixels per goal unit. `crowd` is a list of shirt colours.
 */
export function buildStadium(frame, crowd) {
  const { width, height, centerX, groundY, unit } = frame;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext('2d');
  const px = (x, y, color, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(x, y, w, h); };

  const grassBehindTop = groundY - 5;
  const boardsTop = grassBehindTop - 6;

  // Stands: rows of seats in tiers, under a roof edge with floodlights.
  px(0, 0, STAND, width, boardsTop);
  for (let y = 0; y < boardsTop; y += 1) {
    px(0, y, SEAT_ROWS[Math.floor(y / 2) % 2], width, 1);
    if ((boardsTop - y) % 14 === 0) px(0, y, TIER_LINE, width, 1);
  }
  px(0, 0, ROOF, width, 3);
  for (const lx of [Math.round(width * 0.12), Math.round(width * 0.88)]) {
    px(lx - 2, 3, LIGHT_GLOW, 5, 1);
    px(lx - 1, 3, LIGHT, 3, 1);
  }

  // Ad boards along the front of the stands.
  for (let x = 0, i = 0; x < width; x += 26, i += 1) {
    const color = BOARD_COLORS[i % BOARD_COLORS.length];
    px(x, boardsTop, color, 26, 6);
    // A simple pale "logo" block on each board.
    px(x + 8, boardsTop + 2, dim('#ffffff', 0.35), 10, 2);
    px(x, boardsTop, BOARD_EDGE, 1, 6);
  }
  px(0, boardsTop + 5, BOARD_EDGE, width, 1);

  // Grass: a strip behind the goal, then the pitch in mowed stripes.
  px(0, grassBehindTop, GRASS_BEHIND, width, groundY - grassBehindTop);
  for (let y = groundY; y < height; y += 1) px(0, y, GRASS[Math.floor((y - groundY) / 5) % 2], width, 1);

  // Pitch lines: the goal line and the six-yard box.
  px(0, groundY, LINE, width, 1);
  const sixYard = groundY + 9;
  const boxHalf = Math.round(unit * 2.5);
  px(Math.max(0, centerX - boxHalf), sixYard, LINE, Math.min(width, boxHalf * 2 + 1), 1);
  for (const x of [centerX - boxHalf, centerX + boxHalf]) if (x >= 0 && x < width) px(x, groundY, LINE, 1, sixYard - groundY);

  // The net: a grid inside the goal mouth.
  const left = Math.round(centerX - unit);
  const right = Math.round(centerX + unit);
  const bar = Math.round(groundY - unit);
  for (let x = left; x <= right; x += 5) px(x, bar, NET, 1, groundY - bar);
  for (let y = groundY - 1; y >= bar; y -= 5) px(left, y, NET, right - left, 1);

  // The crowd: one fan every few pixels, each a head and a shirt. Positions are
  // fixed; the game redraws them each frame so they can bob up and down.
  const random = seeded(width * 131 + height);
  const fans = [];
  for (let y = 5; y < boardsTop - 3; y += 4) {
    for (let x = (y / 4) % 2 === 0 ? 0 : 1; x < width; x += 3) {
      if (random() < 0.3) continue; // the odd empty seat
      fans.push({
        x, y,
        shirt: dim(crowd[Math.floor(random() * crowd.length)], 0.62),
        skin: dim(SKIN[Math.floor(random() * SKIN.length)], 0.55),
        phase: random() * Math.PI * 2,
        speed: 3 + random() * 4,
      });
    }
  }
  return { canvas, fans, left, right, bar, groundY };
}

/**
 * Draws the crowd. Fans now and then bob up a pixel; when `excited` (a goal) most
 * of them jump up and down.
 */
export function drawCrowd(g, stadium, timeMs, excited) {
  const t = timeMs / 1000;
  for (const fan of stadium.fans) {
    const wave = Math.sin(t * fan.speed * (excited ? 2.2 : 0.5) + fan.phase);
    const lift = wave > (excited ? -0.2 : 0.92) ? 1 : 0;
    g.fillStyle = fan.skin;
    g.fillRect(fan.x + 1, fan.y - lift, 1, 1);
    g.fillStyle = fan.shirt;
    g.fillRect(fan.x, fan.y + 1 - lift, 2, 2);
  }
}

/** The posts and crossbar, two pixels thick, drawn in front of the keeper. */
export function drawGoalFrame(g, stadium) {
  const { left, right, bar, groundY } = stadium;
  g.fillStyle = POST;
  g.fillRect(left - 2, bar - 2, right - left + 4, 2);
  g.fillRect(left - 2, bar, 2, groundY - bar + 1);
  g.fillRect(right + 1, bar, 2, groundY - bar + 1);
  // A slightly darker edge so the frame has some shape.
  g.fillStyle = POST_SHADE;
  g.fillRect(left - 2, bar - 1, right - left + 4, 1);
  g.fillRect(left - 1, bar, 1, groundY - bar + 1);
  g.fillRect(right + 2, bar, 1, groundY - bar + 1);
}

/** The penalty spot, under the ball. */
export function drawSpot(g, x, y) {
  g.fillStyle = LINE;
  g.fillRect(x - 1, y, 3, 1);
}

/**
 * A circle made of whole pixels: an outline and an optional fill. `dash` breaks
 * the outline into segments, for the dashed circles.
 */
export function pixelCircle(g, cx, cy, radius, stroke, fill, dash = 0) {
  const r = Math.max(1, radius);
  for (let y = Math.floor(cy - r - 1); y <= Math.ceil(cy + r + 1); y += 1) {
    for (let x = Math.floor(cx - r - 1); x <= Math.ceil(cx + r + 1); x += 1) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
      if (d > r) continue;
      if (d > r - 1) {
        if (!stroke) continue;
        if (dash) {
          const angle = Math.atan2(y + 0.5 - cy, x + 0.5 - cx) + Math.PI;
          if (Math.floor((angle * r) / dash) % 2 === 1) continue;
        }
        g.fillStyle = stroke;
      } else if (fill) {
        g.fillStyle = fill;
      } else {
        continue;
      }
      g.fillRect(x, y, 1, 1);
    }
  }
}
