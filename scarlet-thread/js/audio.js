/* ==========================================================================
   A soft generative pad (Web Audio, no files). Off until you turn it on.
   The harmony follows the story: bright for creation and the kingdom,
   minor for the fall and the exile, and resolving at the end.
   ========================================================================== */
window.Ambient = (function () {
  "use strict";
  let ctx, master, timer, voices = [], on = false, step = 0, mood = "light";
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const MOODS = {
    light: [[50, 57, 62, 66, 69], [47, 54, 59, 62, 66], [43, 50, 55, 59, 62], [45, 52, 57, 61, 64]],
    dark: [[50, 57, 62, 65, 69], [46, 53, 58, 62, 65], [43, 50, 55, 58, 62], [45, 52, 57, 61, 64]],
    still: [[38, 50, 57, 62], [38, 50, 55, 62], [38, 50, 57, 64], [38, 50, 55, 62]],
    glory: [[50, 57, 62, 66, 69, 74], [43, 55, 59, 62, 67], [45, 57, 61, 64, 69], [50, 57, 62, 66, 69, 78]]
  };
  function impulse(seconds, decay) {
    const rate = ctx.sampleRate, len = Math.floor(rate * seconds), buf = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
    return buf;
  }
  function init() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0;
    const verb = ctx.createConvolver(); verb.buffer = impulse(5.5, 2.6);
    const wet = ctx.createGain(); wet.gain.value = 0.9;
    const dry = ctx.createGain(); dry.gain.value = 0.22;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1700;
    master.connect(lp); lp.connect(dry).connect(ctx.destination); lp.connect(verb).connect(wet).connect(ctx.destination);
  }
  function play(notes) {
    const now = ctx.currentTime;
    voices.forEach((v) => {
      v.g.gain.cancelScheduledValues(now); v.g.gain.setValueAtTime(v.g.gain.value, now); v.g.gain.linearRampToValueAtTime(0, now + 5);
      v.o.forEach((o) => o.stop(now + 5.3));
    });
    voices = notes.map((m, i) => {
      const g = ctx.createGain(); g.gain.value = 0;
      g.gain.linearRampToValueAtTime((i === 0 ? 0.075 : 0.045) / (1 + i * 0.15), now + 4);
      const o = [-6, 0, 7].map((det, k) => {
        const osc = ctx.createOscillator(); osc.type = k === 1 ? "triangle" : "sine"; osc.frequency.value = hz(m); osc.detune.value = det;
        const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.12 + Math.random() * 0.25; lg.gain.value = 3;
        lfo.connect(lg).connect(osc.detune); lfo.start(now); lfo.stop(now + 30);
        osc.connect(g); osc.start(now); return osc;
      });
      g.connect(master);
      return { g, o };
    });
  }
  function loop() { const set = MOODS[mood] || MOODS.light; play(set[step % set.length]); step++; timer = setTimeout(loop, 9000); }
  /** A soft bell, for a promise kept. */
  function chime() {
    if (!on || !ctx) return;
    const now = ctx.currentTime;
    [81, 88].forEach((m, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = hz(m);
      g.gain.setValueAtTime(0, now + i * 0.12); g.gain.linearRampToValueAtTime(0.05, now + i * 0.12 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 3);
      o.connect(g).connect(master); o.start(now + i * 0.12); o.stop(now + i * 0.12 + 3.2);
    });
  }
  return {
    toggle() {
      if (!ctx) init();
      if (ctx.state === "suspended") ctx.resume();
      on = !on;
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now); master.gain.setValueAtTime(master.gain.value, now);
      if (on) { master.gain.linearRampToValueAtTime(0.6, now + 3); if (!timer) loop(); }
      else { master.gain.linearRampToValueAtTime(0, now + 1.5); clearTimeout(timer); timer = null; }
      return on;
    },
    setMood(m) { if (m && m !== mood) { mood = m; step = 0; } },
    chime,
    get on() { return on; }
  };
})();
