/* ==========================================================================
   The Scarlet Thread — the 3D layer.
   One field of particles that morphs, as you scroll, between sculptures of
   light (a galaxy, an ark, a ladder, a cross, a city), a deep field of stars
   the camera travels through, and the scarlet thread itself.
   ========================================================================== */
import * as THREE from "three";

const MOBILE = matchMedia("(max-width: 760px), (pointer: coarse)").matches;
const N = MOBILE ? 9000 : 16000;
const TAU = Math.PI * 2;

/* ---------- deterministic randomness, so every visit looks the same ---------- */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let R = rng(1);
const G = () => { let u = 0, v = 0; while (!u) u = R(); while (!v) v = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v); };
const sphereDir = () => { const th = R() * TAU, u = 2 * R() - 1, s = Math.sqrt(1 - u * u); return [s * Math.cos(th), u, s * Math.sin(th)]; };
const seg = (a, b, j = 0) => { const t = R(); return [a[0] + (b[0] - a[0]) * t + G() * j, a[1] + (b[1] - a[1]) * t + G() * j, a[2] + (b[2] - a[2]) * t + G() * j]; };

/* ---------- the sculptures ---------- */
// Each returns [x, y, z] or [x, y, z, r, g, b] for particle i.
// spin: turns slowly about its axis · mode: [flicker, fall, wave, rise]
const SHAPES = {
  chaos: { spin: 1, fn: () => { const d = sphereDir(), r = 3.5 + R() * 5.5; return [d[0] * r * 1.5, d[1] * r * 0.75, d[2] * r]; } },
  sphere: { spin: 1, fn: (i) => {
    const core = i < N * 0.6, d = sphereDir();
    const r = core ? Math.pow(R(), 0.55) * 1.35 : 1.35 + Math.pow(R(), 2.2) * 3.8;
    return [d[0] * r, d[1] * r, d[2] * r];
  } },
  galaxy: { spin: 1, fn: (i) => {
    const arms = 3, arm = i % arms, r = Math.pow(R(), 0.62) * 5.4;
    const a = (arm * TAU) / arms + r * 1.1 + G() * 0.3 * (1.25 - r / 6.5);
    const y = G() * 0.13 * (1.4 - r / 5.4);
    const x = Math.cos(a) * r, z = Math.sin(a) * r, tilt = 1.05;
    return [x, y * Math.cos(tilt) - z * Math.sin(tilt), y * Math.sin(tilt) + z * Math.cos(tilt)];
  } },
  globe: { spin: 1, fn: () => {
    const d = sphereDir(), land = Math.sin(d[0] * 4.1 + d[1] * 2.3) * Math.cos(d[2] * 3.7 - d[1] * 1.9) > 0.05;
    const r = 2.55 + (land ? 0.04 : 0) + G() * 0.02;
    return R() < 0.08 ? [d[0] * 3.1, d[1] * 3.1, d[2] * 3.1] : land || R() < 0.45 ? [d[0] * r, d[1] * r, d[2] * r] : [d[0] * 2.5, d[1] * 2.5, d[2] * 2.5];
  } },
  sea: { spin: 0, mode: [0, 0, 1, 0], fn: () => {
    const x = (R() - 0.5) * 17, z = (R() - 0.5) * 12 - 2;
    return [x, -1.5 + Math.sin(x * 0.55) * 0.22 + Math.cos(z * 0.8 + x * 0.2) * 0.2 + G() * 0.03, z];
  } },
  swirl: { spin: 1, fn: () => {
    const t = R() * TAU, r = 2.1 + 0.85 * Math.cos(3 * t);
    return [r * Math.cos(2 * t) + G() * 0.13, 1.1 * Math.sin(3 * t) + G() * 0.13, r * Math.sin(2 * t) + G() * 0.13];
  } },
  figure: { spin: 0, fn: () => {
    const k = R();
    if (k < 0.12) { const d = sphereDir(); return [d[0] * 0.42, 2.25 + d[1] * 0.42, d[2] * 0.42]; }
    if (k < 0.32) return seg([0, 1.75, 0], [0, -0.25, 0], 0.11);
    if (k < 0.5) return seg([-2.15, 1.3, 0], [2.15, 1.3, 0], 0.06);
    if (k < 0.62) return seg([0, -0.25, 0], [-0.85, -2.65, 0], 0.07);
    if (k < 0.74) return seg([0, -0.25, 0], [0.85, -2.65, 0], 0.07);
    const a = R() * TAU; return [Math.cos(a) * 2.8 + G() * 0.03, Math.sin(a) * 2.8 + G() * 0.03, G() * 0.04];
  } },
  ring: { spin: 0, fn: () => {
    const a = R() * TAU, inner = R() < 0.2, r = (inner ? 1.2 : 2.7) + G() * (inner ? 0.25 : 0.06);
    return [Math.cos(a) * r, Math.sin(a) * r, G() * 0.07];
  } },
  tree: { spin: 1, fn: () => {
    const k = R();
    if (k < 0.16) { const y = -2.8 + R() * 3.0, w = 0.16 + (y < -2.3 ? (-2.3 - y) * 0.6 : 0); return [G() * w, y, G() * w]; }
    if (k < 0.32) { const b = Math.floor(R() * 9), ang = (b / 9) * TAU + b, t = Math.pow(R(), 0.8); return [Math.cos(ang) * t * 1.9 + G() * 0.04, 0.1 + t * 1.3 + G() * 0.04, Math.sin(ang) * t * 1.9 + G() * 0.04]; }
    const d = sphereDir(), r = Math.pow(R(), 0.25);
    return [2.6 * r * d[0], 1.7 + 1.55 * r * d[1], 2.6 * r * d[2]];
  } },
  ark: { spin: 1, fn: () => {
    const k = R();
    if (k < 0.62) { const x = (R() - 0.5) * 7.2, a = R() * Math.PI, w = 1.15 * (1 - Math.pow(Math.abs(x) / 3.7, 4) * 0.65); return [x, -0.5 - Math.sin(a) * 0.95, Math.cos(a) * w]; }
    if (k < 0.9) {
      const x = (R() - 0.5) * 4.4, f = Math.floor(R() * 3);
      if (f === 2) { const z = (R() - 0.5) * 1.7; return [x, 0.95 + (0.85 - Math.abs(z)) * 0.42, z]; }
      return [x, -0.1 + R() * 1.05, f ? -0.82 : 0.82];
    }
    return [(R() - 0.5) * 7.4, -0.48 + G() * 0.02, (R() - 0.5) * 2.2];
  } },
  rainbow: { spin: 0, fn: () => {
    const band = Math.floor(R() * 7), a = R() * Math.PI, r = 3.0 + band * 0.17 + G() * 0.03;
    const cols = [[1, 0.25, 0.25], [1, 0.55, 0.2], [1, 0.9, 0.3], [0.35, 0.9, 0.45], [0.3, 0.7, 1], [0.35, 0.4, 1], [0.7, 0.4, 1]];
    if (R() < 0.12) return [(R() - 0.5) * 12, -1.6 + G() * 0.05, (R() - 0.5) * 3, 0.85, 0.8, 0.7];
    return [Math.cos(a) * r, -1.6 + Math.sin(a) * r, G() * 0.05, ...cols[band]];
  } },
  tower: { spin: 1, fn: () => {
    const tier = Math.floor(Math.pow(R(), 0.85) * 7), y0 = -2.7 + tier * 0.78, r = 3.0 - tier * 0.37, a = R() * TAU;
    if (R() < 0.15) { const t = R(); const ang = t * TAU * 3.5; const rr = 3.1 - t * 2.6; return [Math.cos(ang) * rr, -2.7 + t * 5.4, Math.sin(ang) * rr]; }
    const wall = R() < 0.8, y = wall ? y0 + R() * 0.72 : y0 + 0.72, rr = wall ? r : r * Math.sqrt(R());
    return [Math.cos(a) * rr, y, Math.sin(a) * rr];
  } },
  dome: { spin: 1, fn: () => {
    const th = R() * TAU, u = Math.pow(R(), 0.8), r = 7 + R() * 4, s = Math.sqrt(1 - u * u);
    return [r * s * Math.cos(th), -2.2 + r * u * 0.85, r * s * Math.sin(th) - 2];
  } },
  ladder: { spin: 0, fn: () => {
    const k = R(), t = Math.pow(R(), 0.9), y = -3.4 + t * 10, z = -t * 10;
    if (k < 0.36) return [-0.9 + G() * 0.035, y, z + G() * 0.035];
    if (k < 0.72) return [0.9 + G() * 0.035, y, z + G() * 0.035];
    if (k < 0.9) { const rung = Math.floor(R() * 26) / 26; return [(R() - 0.5) * 1.8, -3.4 + rung * 10 + G() * 0.02, -rung * 10]; }
    const tt = R(); return [(R() - 0.5) * 3 + Math.sin(tt * 20) * 0.4, -3.4 + tt * 10, -tt * 10 + G() * 0.3];
  } },
  flame: { spin: 1, mode: [1, 0, 0, 0], fn: () => {
    const h = Math.pow(R(), 1.2), y = -2.5 + h * 4.6, rad = 1.35 * Math.pow(1 - h, 0.85) * (0.55 + 0.45 * R()), a = R() * TAU;
    return [Math.cos(a) * rad, y, Math.sin(a) * rad];
  } },
  tablets: { spin: 0, fn: () => {
    const left = R() < 0.5, cx = left ? -1.32 : 1.32, k = R();
    const W = 1.05, H0 = -1.75, H1 = 0.7;
    if (k < 0.42) {
      // outline: straight sides, flat base, rounded top
      const e = R();
      if (e < 0.25) return [cx - W + G() * 0.02, H0 + R() * (H1 - H0), G() * 0.03];
      if (e < 0.5) return [cx + W + G() * 0.02, H0 + R() * (H1 - H0), G() * 0.03];
      if (e < 0.65) return [cx + (R() - 0.5) * 2 * W, H0 + G() * 0.02, G() * 0.03];
      const a = R() * Math.PI; return [cx + Math.cos(a) * W, H1 + Math.sin(a) * W, G() * 0.03];
    }
    const row = Math.floor(R() * 5), y = 0.95 - row * 0.62;
    return [cx + (R() - 0.5) * 1.5, y + G() * 0.025, G() * 0.02];
  } },
  walls: { spin: 1, fn: () => {
    const a = R() * TAU, r = 3.1 + G() * 0.05, crenel = Math.floor((a / TAU) * 56) % 2 ? 0.28 : 0;
    if (R() < 0.12) { const tw = Math.floor(R() * 6), ta = (tw / 6) * TAU, d = sphereDir(); return [Math.cos(ta) * 3.1 + d[0] * 0.35, -1.7 + R() * 2.4, Math.sin(ta) * 3.1 + d[2] * 0.35]; }
    return [Math.cos(a) * r, -1.7 + R() * (1.55 + crenel), Math.sin(a) * r];
  } },
  rubble: { spin: 1, fn: () => {
    const a = R() * TAU, r = 3.1 + G() * 0.9;
    return [Math.cos(a) * r, -1.75 + Math.abs(G()) * 0.22, Math.sin(a) * r];
  } },
  crown: { spin: 1, fn: () => {
    const k = R(), a = R() * TAU, r = 2.05;
    if (k < 0.5) return [Math.cos(a) * r, -0.7 + R() * 0.75, Math.sin(a) * r];
    if (k < 0.58) { const p = Math.floor(R() * 7), ca = (p / 7) * TAU + 0.2, d = sphereDir(); return [Math.cos(ca) * r + d[0] * 0.13, 1.35 + d[1] * 0.13, Math.sin(ca) * r + d[2] * 0.13]; }
    const p = Math.floor(R() * 7), ca = (p / 7) * TAU + 0.2, t = R(), s = (R() - 0.5) * 2, aa = ca + s * (1 - t) * 0.42;
    return [Math.cos(aa) * r, 0.05 + t * 1.25, Math.sin(aa) * r];
  } },
  temple: { spin: 1, fn: () => {
    const k = R(), W = 2.3, H = 1.5, D = 1.7;
    if (k < 0.5) {
      // the twelve edges
      const e = Math.floor(R() * 12), t = (R() - 0.5) * 2, sx = e & 1 ? 1 : -1, sy = e & 2 ? 1 : -1;
      if (e < 4) return [t * W, sy * H, sx * D];
      if (e < 8) return [sx * W, t * H, sy * D];
      return [sx * W, sy * H, t * D];
    }
    if (k < 0.66) { const x = (R() - 0.5) * 2 * W * 1.08, z = (R() - 0.5) * 2 * D; return [x, H + (1 - Math.abs(x) / (W * 1.08)) * 0.75, z]; }
    if (k < 0.86) { const px = R() < 0.5 ? -1.15 : 1.15, a = R() * TAU; return [px + Math.cos(a) * 0.24, -H + R() * 3.4, D + 0.75 + Math.sin(a) * 0.24]; }
    const st = Math.floor(R() * 4); return [(R() - 0.5) * 2 * (W + 0.5 - st * 0.1), -H - 0.12 - st * 0.18, D + 0.3 + st * 0.35 + R() * 0.3];
  } },
  whirlwind: { spin: 1, fn: () => {
    const t = R(), y = -3.1 + t * 6.8, r = 0.12 + t * t * 2.5, a = t * 28 + R() * 0.7 + Math.floor(R() * 3) * 2.1;
    return [Math.cos(a) * r + G() * 0.07, y, Math.sin(a) * r + G() * 0.07];
  } },
  deep: { spin: 0, mode: [0, 0, 0, 1], fn: () => [(R() - 0.5) * 11, (R() - 0.5) * 9, (R() - 0.5) * 7 - 1] },
  ash: { spin: 0, mode: [0, 1, 0, 0], fn: () => [(R() - 0.5) * 13, (R() - 0.5) * 9, (R() - 0.5) * 8 - 1] },
  bones: { spin: 1, fn: (i) => {
    // short scattered bones lying on the valley floor
    const b = Math.floor(i / 30), rb = rng(b * 7 + 3), cx = (rb() - 0.5) * 11, cz = (rb() - 0.5) * 7 - 1, ang = rb() * TAU, len = 0.3 + rb() * 0.5;
    const t = R() - 0.5, knob = Math.abs(t) > 0.42 ? 0.06 : 0;
    return [cx + Math.cos(ang) * t * len + G() * (0.02 + knob), -1.9 + G() * 0.02, cz + Math.sin(ang) * t * len + G() * (0.02 + knob)];
  } },
  army: { spin: 0, fn: (i) => {
    // an exceeding great army, standing upon their feet
    const f = i % 84, col = f % 14, row = Math.floor(f / 14), x = (col - 6.5) * 0.85 + (row % 2) * 0.42, z = -row * 1.15 + 1.2;
    const k = R();
    if (k < 0.2) { const d = sphereDir(); return [x + d[0] * 0.12, -0.35 + d[1] * 0.12, z + d[2] * 0.12]; }
    return [x + G() * 0.06, -1.9 + R() * 1.4, z + G() * 0.06];
  } },
  star: { spin: 0, fn: () => {
    const k = R();
    if (k < 0.42) { const d = sphereDir(), r = Math.pow(R(), 3) * 0.55; return [d[0] * r, d[1] * r, d[2] * r]; }
    if (k < 0.82) { const ray = Math.floor(R() * 8), a = (ray * Math.PI) / 4 + Math.PI / 2, len = (ray % 2 ? 1.5 : ray === 4 ? 5.2 : 3.6) * Math.pow(R(), 1.7); return [Math.cos(a) * len, Math.sin(a) * len, G() * 0.02]; }
    const d = sphereDir(), r = 0.5 + Math.pow(R(), 1.5) * 2.2; return [d[0] * r, d[1] * r, d[2] * r * 0.3];
  } },
  cross: { spin: 0, fn: () => {
    const k = R();
    if (k < 0.5) return [(R() - 0.5) * 0.48, -3.4 + R() * 6.6, (R() - 0.5) * 0.48];
    if (k < 0.78) return [(R() - 0.5) * 3.7, 1.35 + (R() - 0.5) * 0.48, (R() - 0.5) * 0.48];
    const d = sphereDir(), r = 1.3 + Math.pow(R(), 1.6) * 3.4; return [d[0] * r, 1.1 + d[1] * r, d[2] * r * 0.4];
  } },
  sunrise: { spin: 0, fn: () => {
    const k = R();
    if (k < 0.38) { const a = R() * Math.PI, r = Math.sqrt(R()) * 1.75; return [Math.cos(a) * r, -1.3 + Math.sin(a) * r, 0]; }
    if (k < 0.74) { const a = (Math.floor(R() * 17) / 16) * Math.PI, t = 2.0 + Math.pow(R(), 0.8) * 4; return [Math.cos(a) * t, -1.3 + Math.sin(a) * t, G() * 0.04]; }
    return [(R() - 0.5) * 15, -1.3 + G() * 0.03, (R() - 0.5) * 5];
  } },
  flames: { spin: 1, mode: [1, 0, 0, 0], fn: () => {
    const f = Math.floor(R() * 12), a = (f / 12) * TAU, cx = Math.cos(a) * 3.0, cz = Math.sin(a) * 3.0, h = Math.pow(R(), 1.3), w = 0.32 * Math.pow(1 - h, 0.9), b = R() * TAU;
    return [cx + Math.cos(b) * w, 0.6 + h * 1.0, cz + Math.sin(b) * w];
  } },
  scroll: { spin: 0, fn: () => {
    const u = (R() - 0.5) * 5.2;
    let v = (R() - 0.5) * 6.2;
    const edge = R() < 0.18;
    if (edge) { const s = Math.floor(R() * 4); if (s < 2) v = s ? 3.1 : -3.1; else return [s === 2 ? -2.6 : 2.6, v, Math.cos(1.43) * 0.9 - 0.9]; }
    else if (R() < 0.8) v = Math.round(v * 3) / 3 + G() * 0.012;
    return [u, v, Math.cos(u * 0.55) * 0.9 - 0.9];
  } },
  rings: { spin: 1, fn: (i) => {
    const ring = i % 5;
    if (ring === 4) { const d = sphereDir(), r = Math.pow(R(), 2) * 0.8; return [d[0] * r, d[1] * r, d[2] * r]; }
    const a = R() * TAU, r = [1.5, 2.35, 3.2, 4.1][ring], tilt = [0.2, 1.1, -0.7, 0.45][ring], yaw = [0, 0.8, 2.0, -1.0][ring];
    let x = Math.cos(a) * r, y = 0, z = Math.sin(a) * r;
    [y, z] = [y * Math.cos(tilt) - z * Math.sin(tilt), y * Math.sin(tilt) + z * Math.cos(tilt)];
    [x, z] = [x * Math.cos(yaw) + z * Math.sin(yaw), -x * Math.sin(yaw) + z * Math.cos(yaw)];
    return ring === 3 ? [x, y, z, 0.35, 0.95, 0.6] : [x, y, z];
  } },
  cube: { spin: 1, fn: () => {
    const k = R(), S = 2.35;
    if (k < 0.55) {
      const e = Math.floor(R() * 12), t = (R() - 0.5) * 2 * S, a = e & 1 ? S : -S, b = e & 2 ? S : -S;
      if (e < 4) return [t, a, b];
      if (e < 8) return [a, t, b];
      return [a, b, t];
    }
    if (k < 0.7) {
      // twelve gates of pearl, three on each side
      const g = Math.floor(R() * 12), side = Math.floor(g / 3), off = ((g % 3) - 1) * S * 0.6, d = sphereDir(), s = 0.16;
      const p = side === 0 ? [off, -S * 0.55, S] : side === 1 ? [off, -S * 0.55, -S] : side === 2 ? [S, -S * 0.55, off] : [-S, -S * 0.55, off];
      return [p[0] + d[0] * s, p[1] + d[1] * s * 1.6, p[2] + d[2] * s, 1, 0.96, 0.85];
    }
    const f = Math.floor(R() * 6), u = (R() - 0.5) * 2 * S, v = (R() - 0.5) * 2 * S;
    return f === 0 ? [u, v, S] : f === 1 ? [u, v, -S] : f === 2 ? [S, u, v] : f === 3 ? [-S, u, v] : f === 4 ? [u, S, v] : [u, -S, v];
  } },
  infinity: { spin: 0, fn: () => {
    const t = R() * TAU, a = 3.7, d = 1 + Math.sin(t) ** 2, w = 0.07 + 0.05 * Math.abs(Math.cos(t));
    return [(a * Math.cos(t)) / d + G() * w, (a * Math.sin(t) * Math.cos(t)) / d + G() * w, G() * 0.1];
  } },
  split: { spin: 0, fn: (i) => {
    const north = i < N * 0.7, d = sphereDir(), r = (north ? 2.0 : 1.2) * Math.cbrt(R());
    return [(north ? -2.6 : 2.7) + d[0] * r, d[1] * r * 0.9, d[2] * r];
  } }
};

const cache = {};
function build(name) {
  if (cache[name]) return cache[name];
  const def = SHAPES[name] || SHAPES.chaos;
  R = rng(name.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7));
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3).fill(-1);
  for (let i = 0; i < N; i++) {
    const p = def.fn(i);
    pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2];
    if (p.length > 3) { col[i * 3] = p[3]; col[i * 3 + 1] = p[4]; col[i * 3 + 2] = p[5]; }
  }
  return (cache[name] = { pos, col, spin: def.spin ? 1 : 0, mode: def.mode || [0, 0, 0, 0] });
}

/* ---------- shaders ---------- */
const sculptVert = /* glsl */ `
  uniform float uT, uTime, uSize, uPR, uOpacity, uEnergy, uScale, uAngA, uAngB;
  uniform vec4 uModeA, uModeB;
  uniform vec3 uColor;
  uniform vec2 uOffset;
  attribute vec3 aA; attribute vec3 aB; attribute vec4 aR; attribute vec3 aCA; attribute vec3 aCB;
  varying vec3 vColor; varying float vAlpha;
  vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
  vec3 motion(vec3 p, vec4 m) {
    float f = fract(uTime * 0.42 * (0.6 + aR.y) + aR.x);
    p.y += m.x * f * 1.1;
    p.xz *= 1.0 - m.x * f * 0.55;
    float d = fract(uTime * 0.035 * (0.5 + aR.y) + aR.z);
    p.y = mix(p.y, 4.6 - d * 9.2, m.y);
    p.x += m.y * sin(uTime * 0.6 + aR.x * 30.0) * 0.25;
    p.y += m.z * (sin(p.x * 0.9 + uTime * 0.9) * 0.18 + cos(p.z * 1.3 + uTime * 0.7) * 0.12);
    float u = fract(uTime * 0.05 * (0.5 + aR.x) + aR.y);
    p.y = mix(p.y, -4.6 + u * 9.2, m.w);
    return p;
  }
  void main() {
    float t = clamp((uT - aR.w * 0.3) / 0.7, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    vec3 a = motion(rotY(aA, uAngA), uModeA);
    vec3 b = motion(rotY(aB, uAngB), uModeB);
    vec3 p = mix(a, b, t);
    p += sin(t * 3.14159) * (aR.xyz - 0.5) * 1.9;
    p += 0.05 * vec3(sin(uTime * 0.7 + aR.x * 50.0), cos(uTime * 0.6 + aR.y * 50.0), sin(uTime * 0.5 + aR.z * 50.0));
    p += uEnergy * (aR.xyz - 0.5) * 2.4;
    p *= uScale;
    p.xy += uOffset;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(uSize * uPR * (0.35 + aR.y) / -mv.z, 18.0 * uPR);
    vec3 ca = aCA.r < 0.0 ? uColor : aCA;
    vec3 cb = aCB.r < 0.0 ? uColor : aCB;
    vColor = mix(mix(ca, cb, t), vec3(1.0), aR.z * 0.42);
    vAlpha = uOpacity * (0.22 + 0.78 * aR.z) * (0.72 + 0.28 * sin(uTime * (1.0 + aR.x * 2.0) + aR.y * 40.0));
  }`;
const pointFrag = /* glsl */ `
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, r);
    gl_FragColor = vec4(vColor, a * a * vAlpha);
  }`;
const dustVert = /* glsl */ `
  uniform float uTime, uTravel, uPR, uOpacity;
  uniform vec3 uColor;
  attribute vec4 aR;
  varying vec3 vColor; varying float vAlpha;
  void main() {
    vec3 p = position;
    p.z = mod(p.z + uTravel, 96.0) - 86.0;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min((0.9 + aR.x * 2.4) * uPR * 16.0 / -mv.z, 7.0 * uPR);
    float fade = smoothstep(-86.0, -60.0, p.z) * smoothstep(7.0, 0.0, p.z);
    vColor = mix(vec3(1.0, 0.96, 0.9), uColor, aR.w * 0.6);
    vAlpha = uOpacity * fade * (0.35 + 0.65 * aR.y) * (0.6 + 0.4 * sin(uTime * (0.4 + aR.z * 2.0) + aR.x * 30.0));
  }`;
const threadVert = /* glsl */ `
  uniform float uPhase, uY, uAmp;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.y += sin(p.x * 0.33 + uPhase) * 0.55 * uAmp + uY;
    p.z += cos(p.x * 0.21 + uPhase * 0.7) * 0.9 * uAmp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const threadFrag = /* glsl */ `
  uniform vec3 uCol; uniform float uOpacity, uTime, uPulse, uGlow;
  varying vec2 vUv;
  void main() {
    float ends = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);
    float flow = pow(0.5 + 0.5 * sin(vUv.x * 48.0 - uTime * 1.4), 7.0);
    float a = uOpacity * ends * (0.5 + 0.5 * flow + uPulse) * uGlow;
    gl_FragColor = vec4(uCol * (1.0 + uPulse * 0.9 + flow * 0.5), a);
  }`;

/* ---------- scene ---------- */
const canvas = document.getElementById("gl");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" });
} catch (e) {
  document.documentElement.classList.add("no-gl");
  throw e;
}
const PR = Math.min(window.devicePixelRatio || 1, MOBILE ? 2 : 1.75);
renderer.setPixelRatio(PR);
renderer.setClearColor(0x000000, 1);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 220);
camera.position.set(0, 0, 9);

// Sculpture
const sGeo = new THREE.BufferGeometry();
sGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
const aR = new Float32Array(N * 4);
R = rng(99);
for (let i = 0; i < N * 4; i++) aR[i] = R();
sGeo.setAttribute("aR", new THREE.BufferAttribute(aR, 4));
const start = build("chaos");
const attrA = new THREE.BufferAttribute(start.pos.slice(), 3), attrB = new THREE.BufferAttribute(start.pos.slice(), 3);
const colA = new THREE.BufferAttribute(start.col.slice(), 3), colB = new THREE.BufferAttribute(start.col.slice(), 3);
[attrA, attrB, colA, colB].forEach((a) => a.setUsage(THREE.DynamicDrawUsage));
sGeo.setAttribute("aA", attrA); sGeo.setAttribute("aB", attrB);
sGeo.setAttribute("aCA", colA); sGeo.setAttribute("aCB", colB);
sGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);
const sU = {
  uT: { value: 0 }, uTime: { value: 0 }, uSize: { value: MOBILE ? 30 : 34 }, uPR: { value: PR }, uOpacity: { value: 0 },
  uEnergy: { value: 0 }, uScale: { value: 1 }, uAngA: { value: 0 }, uAngB: { value: 0 },
  uModeA: { value: new THREE.Vector4() }, uModeB: { value: new THREE.Vector4() },
  uColor: { value: new THREE.Color(1, 0.9, 0.75) }, uOffset: { value: new THREE.Vector2() }
};
const sculpt = new THREE.Points(sGeo, new THREE.ShaderMaterial({
  uniforms: sU, vertexShader: sculptVert, fragmentShader: pointFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
}));
scene.add(sculpt);

// Stars the camera travels through
const DN = MOBILE ? 1600 : 3000;
const dGeo = new THREE.BufferGeometry(), dPos = new Float32Array(DN * 3), dR = new Float32Array(DN * 4);
R = rng(5);
for (let i = 0; i < DN; i++) {
  dPos[i * 3] = (R() - 0.5) * 70; dPos[i * 3 + 1] = (R() - 0.5) * 44; dPos[i * 3 + 2] = R() * 96 - 86;
  for (let k = 0; k < 4; k++) dR[i * 4 + k] = R();
}
dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
dGeo.setAttribute("aR", new THREE.BufferAttribute(dR, 4));
dGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 200);
const dU = { uTime: { value: 0 }, uTravel: { value: 0 }, uPR: { value: PR }, uOpacity: { value: 1 }, uColor: { value: new THREE.Color(1, 0.9, 0.75) } };
scene.add(new THREE.Points(dGeo, new THREE.ShaderMaterial({ uniforms: dU, vertexShader: dustVert, fragmentShader: pointFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));

// The scarlet thread: a bright core inside a soft glow
const tPts = [];
for (let i = 0; i <= 90; i++) { const x = -19 + (i * 38) / 90; tPts.push(new THREE.Vector3(x, Math.sin(x * 0.22) * 1.2, Math.cos(x * 0.17) * 2.2 - 2.4)); }
const curve = new THREE.CatmullRomCurve3(tPts);
const tU = { uPhase: { value: 0 }, uY: { value: -1.4 }, uAmp: { value: 1 }, uCol: { value: new THREE.Color("#ff2a3d") }, uOpacity: { value: 0.75 }, uTime: { value: 0 }, uPulse: { value: 0 } };
function threadMesh(radius, glow) {
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, MOBILE ? 360 : 640, radius, 8, false), new THREE.ShaderMaterial({
    uniforms: { ...tU, uGlow: { value: glow } }, vertexShader: threadVert, fragmentShader: threadFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  m.frustumCulled = false;
  scene.add(m);
  return m;
}
threadMesh(0.018, 1.0);
threadMesh(0.11, 0.16);

/* ---------- state ---------- */
let curA = "chaos", curB = "chaos", visible = true, time = 0, pulse = 0;
const tgtColor = new THREE.Color(1, 0.9, 0.75);
const cur = { opacity: 0, scale: 1, x: 0, y: 0, thread: 0.7, threadY: -1.4, dust: 1 };
const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
window.addEventListener("pointermove", (e) => { ptr.tx = (e.clientX / innerWidth - 0.5) * 2; ptr.ty = (e.clientY / innerHeight - 0.5) * 2; }, { passive: true });

function setPair(a, b) {
  if (a !== curA) { const s = build(a); attrA.array.set(s.pos); colA.array.set(s.col); attrA.needsUpdate = colA.needsUpdate = true; sU.uModeA.value.fromArray(s.mode); curA = a; }
  if (b !== curB) { const s = build(b); attrB.array.set(s.pos); colB.array.set(s.col); attrB.needsUpdate = colB.needsUpdate = true; sU.uModeB.value.fromArray(s.mode); curB = b; }
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.position.z = camera.aspect < 1 ? 9 + (1 - camera.aspect) * 7.5 : 9;
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);

/**
 * Called every frame by the story engine.
 * s: { a, b, t, color: "#hex", opacity, scale, x, y, energy, thread, threadY, travel, dust, visible }
 */
function frame(dt, s) {
  time += dt;
  visible = s.visible !== false;
  if (!visible || document.hidden) return;
  const k = 1 - Math.exp(-dt * 5);
  setPair(s.a, s.b);
  sU.uT.value = s.t;
  if (s.color) tgtColor.set(s.color);
  sU.uColor.value.lerp(tgtColor, k * 0.6);
  dU.uColor.value.copy(sU.uColor.value);
  for (const key of ["opacity", "scale", "x", "y", "thread", "threadY", "dust"]) if (s[key] !== undefined) cur[key] += (s[key] - cur[key]) * k;
  sU.uOpacity.value = cur.opacity;
  sU.uScale.value = cur.scale * (MOBILE ? 0.86 : 1);
  sU.uOffset.value.set(cur.x, cur.y);
  sU.uEnergy.value += ((s.energy || 0) - sU.uEnergy.value) * k;
  sU.uTime.value = dU.uTime.value = tU.uTime.value = time;
  const spin = (sh) => (build(sh).spin ? time * 0.07 : Math.sin(time * 0.23) * 0.2);
  sU.uAngA.value = spin(curA); sU.uAngB.value = spin(curB);
  dU.uTravel.value = s.travel || 0;
  dU.uOpacity.value = cur.dust;
  pulse = Math.max(0, pulse - dt * 0.7);
  tU.uPulse.value = pulse * pulse;
  tU.uOpacity.value = cur.thread;
  tU.uY.value = cur.threadY;
  tU.uPhase.value = (s.travel || 0) * 0.05 + time * 0.16;
  // a gentle camera that leans toward the pointer
  ptr.x += (ptr.tx - ptr.x) * k * 0.5; ptr.y += (ptr.ty - ptr.y) * k * 0.5;
  const sway = MOBILE ? Math.sin(time * 0.15) * 0.35 : 0;
  camera.position.x = ptr.x * 0.7 + sway;
  camera.position.y = -ptr.y * 0.45;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
}

window.GL = { frame, pulse() { pulse = 1.25; }, resize, shapes: Object.keys(SHAPES), N };
window.dispatchEvent(new Event("gl-ready"));
