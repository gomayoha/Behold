/*
 * A soft, generative choir-like pad built with the Web Audio API.
 * No audio files needed. Off by default; toggled from the nav.
 */
window.Ambient = (function () {
  let ctx, master, verb, timer, voices = [], on = false, step = 0;

  // D major: I – vi – IV – V – I – iii – IV – I  (frequencies in Hz)
  const n = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const CHORDS = [
    [50, 57, 62, 66, 69], [47, 54, 59, 62, 66], [43, 50, 55, 59, 62], [45, 52, 57, 61, 64],
    [50, 57, 62, 66, 69], [42, 54, 57, 61, 66], [43, 55, 59, 62, 67], [50, 57, 62, 69, 74]
  ];

  function impulse(seconds, decay) {
    const rate = ctx.sampleRate, len = rate * seconds;
    const buf = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  function init() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0;
    verb = ctx.createConvolver();
    verb.buffer = impulse(5, 2.4);
    const wet = ctx.createGain(); wet.gain.value = 0.85;
    const dry = ctx.createGain(); dry.gain.value = 0.25;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1800;
    master.connect(lp);
    lp.connect(dry).connect(ctx.destination);
    lp.connect(verb).connect(wet).connect(ctx.destination);
  }

  function playChord(notes) {
    const now = ctx.currentTime;
    // release previous voices
    voices.forEach((v) => {
      v.g.gain.cancelScheduledValues(now);
      v.g.gain.setValueAtTime(v.g.gain.value, now);
      v.g.gain.linearRampToValueAtTime(0, now + 5);
      v.oscs.forEach((o) => o.stop(now + 5.2));
    });
    voices = notes.map((m, i) => {
      const g = ctx.createGain();
      g.gain.value = 0;
      const level = (i === 0 ? 0.08 : 0.05) / (1 + i * 0.15);
      g.gain.linearRampToValueAtTime(level, now + 4);
      const oscs = [-6, 0, 7].map((det, k) => {
        const o = ctx.createOscillator();
        o.type = k === 1 ? "triangle" : "sine";
        o.frequency.value = n(m);
        o.detune.value = det;
        // gentle vibrato, like breath in a choir
        const lfo = ctx.createOscillator(), lg = ctx.createGain();
        lfo.frequency.value = 0.15 + Math.random() * 0.25; lg.gain.value = 3;
        lfo.connect(lg).connect(o.detune); lfo.start(now); lfo.stop(now + 30);
        o.connect(g); o.start(now);
        return o;
      });
      g.connect(master);
      return { g, oscs };
    });
  }

  function loop() {
    playChord(CHORDS[step % CHORDS.length]);
    step++;
    timer = setTimeout(loop, 9000);
  }

  return {
    toggle() {
      if (!ctx) init();
      if (ctx.state === "suspended") ctx.resume();
      on = !on;
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      if (on) {
        master.gain.linearRampToValueAtTime(0.55, now + 3);
        if (!timer) loop();
      } else {
        master.gain.linearRampToValueAtTime(0, now + 1.5);
        clearTimeout(timer); timer = null;
      }
      return on;
    },
    get on() { return on; }
  };
})();
