// Tilt input: reads the phone's sensors and measures tilt relative to a saved
// neutral position. No UI in here, so the real game can reuse it.
//
// Works from the direction of gravity rather than comparing raw beta/gamma.
// Beta/gamma jump around when the phone is held near upright, which is a common
// way to hold it, and gravity has no compass drift to correct for.

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;
const MIN_SIDEWAYS_RESPONSE = 0.4;

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const normalize = (v) => {
  const length = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / length, v[1] / length, v[2] / length];
};
const withoutComponent = (v, n) => {
  const d = dot(v, n);
  return [v[0] - d * n[0], v[1] - d * n[1], v[2] - d * n[2]];
};

/** Direction of "up" in the phone's own axes (x right, y top, z out of screen). */
export function upVector(betaDeg, gammaDeg) {
  const b = betaDeg * RAD;
  const g = gammaDeg * RAD;
  return [-Math.sin(g) * Math.cos(b), Math.sin(b), Math.cos(g) * Math.cos(b)];
}

/** Averages several up vectors into one, for a steadier neutral position. */
export function averageUp(vectors) {
  const sum = [0, 0, 0];
  for (const v of vectors) {
    sum[0] += v[0];
    sum[1] += v[1];
    sum[2] += v[2];
  }
  return normalize(sum);
}

/** How far the phone is tipped away from lying flat, in degrees. */
export function angleFromFlat(up) {
  return Math.acos(Math.max(-1, Math.min(1, up[2]))) * DEG;
}

/**
 * Tilt relative to neutral, in degrees.
 * x > 0: right side tipped down. y > 0: top of the phone tipped away from you.
 * Like a marble on a tray, so those move the circle right and up.
 */
export function relativeTilt(up, neutral, screenAngleDeg = 0) {
  const a = screenAngleDeg * RAD;
  const screenRight = [Math.cos(a), -Math.sin(a), 0];
  const screenTop = [Math.sin(a), Math.cos(a), 0];

  let horizontal = withoutComponent(screenRight, neutral);
  let vertical;
  if (Math.hypot(...horizontal) < 0.25) {
    // Neutral is nearly along the screen's left-right axis, so build from the other axis.
    vertical = normalize(withoutComponent(screenTop, neutral));
    horizontal = cross(vertical, neutral);
  } else {
    horizontal = normalize(horizontal);
    vertical = cross(neutral, horizontal);
  }

  // Tipping sideways changes gravity less the more upright the phone is held, so
  // boost it to match forward/back. Capped because near upright it would only add noise.
  const sideways = Math.sqrt(Math.max(0, 1 - dot(screenTop, neutral) ** 2));
  const sidewaysBoost = 1 / Math.max(MIN_SIDEWAYS_RESPONSE, sideways);

  const alongNeutral = dot(up, neutral);
  return {
    x: -Math.atan2(dot(up, horizontal), alongNeutral) * DEG * sidewaysBoost,
    y: -Math.atan2(dot(up, vertical), alongNeutral) * DEG,
  };
}

/** Rotation of the screen, so tilt still matches what you see if it auto-rotates. */
export function screenAngle() {
  if (screen.orientation && typeof screen.orientation.angle === 'number') {
    return screen.orientation.angle;
  }
  return window.orientation || 0;
}

/** iPhone needs permission, and this must be called from a tap. Returns true if allowed. */
export async function requestTiltPermission() {
  if (typeof DeviceOrientationEvent === 'undefined') return false;
  if (typeof DeviceOrientationEvent.requestPermission !== 'function') return true;
  try {
    return (await DeviceOrientationEvent.requestPermission()) === 'granted';
  } catch {
    return false;
  }
}

/**
 * Tracks the phone from the first tap onward: collects readings, falls back to
 * the mouse if no sensor reports, saves the neutral angle, and smooths tilt.
 */
export function createTiltSession() {
  const SMOOTHING_MS = 70;
  const SENSOR_WAIT_MS = 1500;
  // The tap itself jolts the phone, so neutral comes from just before it.
  const NEUTRAL_WINDOW_MS = [700, 100];

  let latest = null;
  let recent = [];
  let neutral = null;
  let mouseMode = false;
  let listening = false;
  let smoothed = { x: 0, y: 0 };
  let lastRead = 0;

  function record(sample) {
    const now = performance.now();
    latest = sample;
    recent.push({ time: now, up: sample.up });
    while (recent.length && recent[0].time < now - NEUTRAL_WINDOW_MS[0]) recent.shift();
  }

  // On a computer, the mouse stands in for tilt and runs through the same math.
  function useMouse() {
    mouseMode = true;
    const fromPointer = (x, y) => {
      const beta = 45 + ((y / innerHeight) * 2 - 1) * 40;
      const gamma = ((x / innerWidth) * 2 - 1) * 40;
      record({ beta, gamma, up: upVector(beta, gamma) });
    };
    window.addEventListener('pointermove', (event) => fromPointer(event.clientX, event.clientY));
    fromPointer(innerWidth / 2, innerHeight / 2);
  }

  return {
    listen() {
      if (listening) return;
      listening = true;
      listenToTilt(record);
      setTimeout(() => {
        if (!latest) useMouse();
      }, SENSOR_WAIT_MS);
    },
    get ready() {
      return latest !== null;
    },
    get mouseMode() {
      return mouseMode;
    },
    get hasNeutral() {
      return neutral !== null;
    },
    angleFromFlat() {
      return latest ? angleFromFlat(latest.up) : null;
    },
    setNeutral() {
      const now = performance.now();
      const steady = recent
        .filter((entry) => entry.time <= now - NEUTRAL_WINDOW_MS[1])
        .map((entry) => entry.up);
      neutral = steady.length ? averageUp(steady) : latest.up;
      smoothed = { x: 0, y: 0 };
      lastRead = 0;
    },
    /**
     * Smoothed tilt from neutral in degrees. Call once per frame. extraTurn is any
     * rotation the page applies itself on top of the phone's own screen rotation.
     */
    read(now, extraTurn = 0) {
      const target = relativeTilt(latest.up, neutral, screenAngle() + extraTurn);
      const elapsed = lastRead ? now - lastRead : SMOOTHING_MS;
      const blend = 1 - Math.exp(-elapsed / SMOOTHING_MS);
      smoothed.x += (target.x - smoothed.x) * blend;
      smoothed.y += (target.y - smoothed.y) * blend;
      lastRead = now;
      return smoothed;
    },
  };
}

/** Calls onSample({ beta, gamma, up }) for each real reading. */
export function listenToTilt(onSample) {
  window.addEventListener('deviceorientation', (event) => {
    // Devices with no sensor can fire events holding only nulls.
    if (event.beta === null || event.gamma === null) return;
    onSample({
      beta: event.beta,
      gamma: event.gamma,
      up: upVector(event.beta, event.gamma),
    });
  });
}
