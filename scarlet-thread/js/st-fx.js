/* ==========================================================================
   The Scarlet Thread — the set pieces.
   Moments that deserve more than a painting: the seven days, the ten plagues,
   the sea parting, the walls falling, a still small voice, the cross.
   Each is driven by how far you have scrolled through it (m, from 0 to 1).
   ========================================================================== */
(function () {
  "use strict";
  const { $, $$, h, esc, css, cls, lerp, clamp, ease, easeIO, range, words, copyHTML, kickerHTML, castHTML, knotHTML, linkHTML, imgTag, creditHTML, THREADS } = Object.assign({ THREADS: window.THREADS }, ST);

  const stepAt = (m, n) => { const x = clamp(m) * n; const i = Math.min(n - 1, Math.floor(x)); return { i, l: x - i, x }; };
  const intro = (s, cn = "") => `<div class="fx-intro ${cn}">${kickerHTML(s)}<h3 class="t">${words(s.t)}</h3>${s.x ? `<p class="x rv">${esc(s.x)}</p>` : ""}</div>`;
  const bg = (key, cn = "") => key ? `<div class="fx-bg ${cn}">${imgTag(key, { big: true })}</div><p class="cr" data-credit="${key}">${creditHTML(key)}</p>` : "";
  const quote = (q, r, cn = "") => q ? `<blockquote class="q ${cn}"><p>“${esc(q)}”</p><cite>${esc(r)}</cite></blockquote>` : "";
  const knots = (s) => [].concat(s.th || []).map((id) => knotHTML(id, false)).join("") + (s.kept || []).map((id) => knotHTML(id, true)).join("");
  const setStep = (els, i) => els.forEach((el, k) => { cls(el, "on", k === i); cls(el, "past", k < i); });
  const rnd = (seed) => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const hash = (s) => s.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 2147483647, 7) || 1;

  /* ════════════════ Steps: the days, the plagues, the tablets, wisdom, the voice ════════════════ */
  function stepsType(style, opts) {
    ST.type("steps-" + style, {
      build(it) {
        const s = it.s, st = s.fx.steps;
        return h(`
          <div class="fx steps ${style}">
            ${opts.bg ? bg(s.art, opts.bg) : ""}
            ${opts.extra ? opts.extra(it) : ""}
            ${intro(s, "rv-wrap")}
            <div class="st-list">${st.map((x, i) => opts.step(x, i, it)).join("")}</div>
            ${opts.nav !== false ? `<div class="st-dots" aria-hidden="true">${st.map(() => "<i></i>").join("")}</div>` : ""}
            ${opts.foot ? opts.foot(it) : ""}
          </div>`);
      },
      init(it) {
        it.steps = $$(".st-step", it.el); it.dots = $$(".st-dots i", it.el); it.introEl = $(".fx-intro", it.el);
        it.n = it.s.fx.steps.length; it.stepBooks = it.s.fx.steps.map((x) => (x.b ? [x.b] : []));
        if (opts.init) opts.init(it);
      },
      update(it, f) {
        const lead = opts.lead == null ? 0.1 : opts.lead;
        const p = range(f.uMid, lead, 0.96), go = f.uMid > lead * 0.7 && it.isIn;
        const { i, l } = stepAt(p, it.n);
        cls(it.el, "go", go);
        if (go !== it.wasGo || i !== it.step) {
          setStep(it.steps, go ? i : -1); setStep(it.dots, go ? i : -1);
          it.wasGo = go;
        }
        it.step = go ? i : null; it.local = l; it.p = p;
        if (opts.update) opts.update(it, f, i, l, go);
      },
      gl(it, f) {
        const st = it.s.fx.steps, i = it.step == null ? 0 : it.step, base = it.s.sh || it.age.sh;
        const cur = st[i].sh || base, prev = i > 0 ? st[i - 1].sh || base : (opts.firstFrom || cur);
        const g = { in: st[0].sh || base, out: st[st.length - 1].sh || base, a: prev, b: cur, t: it.step == null ? 0 : clamp((it.local || 0) / 0.35) };
        if (it.step == null) { g.a = g.b = g.in; g.t = 1; }
        return Object.assign(g, opts.gl ? opts.gl(it, f, i) : {});
      }
    });
  }

  // The seven days of creation
  stepsType("days", {
    step: (x, i) => `<article class="st-step" data-i="${i}"><p class="dz-n">${esc(x.n)}</p><h4 class="dz-t">${esc(x.t)}</h4><p class="dz-x">${esc(x.x)}</p><cite>${esc(x.r)}</cite></article>`,
    extra: () => `<div class="dz-big" aria-hidden="true"><span>1</span></div>`,
    init(it) { it.big = $(".dz-big span", it.el); },
    update(it, f, i) { if (it.bigI !== i) { it.big.textContent = i + 1; it.bigI = i; } },
    gl: (it, f) => ({ opacity: 1, scale: f.mobile ? 0.9 : 1.05, x: f.mobile ? 0 : 2.4, y: f.mobile ? 1.2 : 0, thread: 0.5 })
  });

  // The ten plagues
  stepsType("plagues", {
    bg: "tint",
    extra: () => `<div class="pg-tint"></div>`,
    step: (x, i) => `<article class="st-step" data-i="${i}"><span class="pg-n">${esc(x.n)}</span><h4 class="pg-t">${esc(x.t)}</h4><p class="pg-x">“${esc(x.x)}”</p><cite>${esc(x.r)}</cite></article>`,
    init(it) { it.tint = $(".pg-tint", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f, i, l, go) {
      const c = go ? it.s.fx.steps[i].c : "#000";
      css(it.tint, "background", c);
      css(it.tint, "opacity", go ? (i === 8 ? 0.94 : i === 9 ? 0.72 : 0.5) : 0.2);
      css(it.bgEl, "transform", `scale(${(1.15 - f.uMid * 0.1).toFixed(4)})`);
      cls(it.el, "dark", go && i === 8);
    },
    gl: () => ({ opacity: 0.25, visible: false })
  });

  // The ten commandments on two tablets
  stepsType("tablets", {
    bg: "dim",
    nav: false,
    step: (x, i) => `<article class="st-step" data-i="${i}"><span class="tb-num">${esc(x.n)}</span><p class="tb-text">${esc(x.t)}</p></article>`,
    extra: (it) => `<div class="tb-stone" aria-hidden="true"><div class="tb">${[0, 1, 2, 3, 4].map((k) => `<b>${it.s.fx.steps[k].n}</b>`).join("")}</div><div class="tb">${[5, 6, 7, 8, 9].map((k) => `<b>${it.s.fx.steps[k].n}</b>`).join("")}</div></div>`,
    foot: (it) => `<p class="tb-note">${esc(it.s.fx.note || "")} · <span>Exodus 20 · Deuteronomy 5</span></p>`,
    init(it) { it.stone = $(".tb-stone", it.el); it.nums = $$(".tb-stone b", it.el); },
    update(it, f, i, l, go) {
      css(it.stone, "transform", `translate(-50%, 0) perspective(1200px) rotateX(${lerp(58, 10, f.e).toFixed(2)}deg) translateZ(${lerp(-400, 0, f.e).toFixed(1)}px)`);
      it.nums.forEach((b, k) => cls(b, "lit", go && k <= i));
    },
    gl: (it, f) => ({ opacity: 0.55, scale: 1.6, y: 0.4, thread: 0.4 })
  });

  // Words of the wise
  stepsType("wisdom", {
    step: (x, i) => `<article class="st-step" data-i="${i}"><p class="wz-n">${esc(x.n)}</p><blockquote><p>“${esc(x.t)}”</p><cite>${esc(x.r)}</cite></blockquote></article>`,
    gl: (it, f) => ({ opacity: 0.85, scale: 1.1, thread: 0.6 })
  });

  // Wind, earthquake, fire, and a still small voice
  stepsType("whisper", {
    bg: "soft",
    nav: false,
    lead: 0.12,
    step: (x, i) => `<article class="st-step s-${x.t}" data-i="${i}"><p class="wh-word">${esc(x.t === "voice" ? "a still small voice" : x.t).split("").map((c, k) => `<span style="--k:${k}">${c === " " ? "&nbsp;" : esc(c)}</span>`).join("")}</p><p class="wh-x">${esc(x.x)}</p></article>`,
    foot: (it) => `<cite class="wh-ref">${esc(it.s.fx.r)}</cite>`,
    init(it) { it.bgEl = $(".fx-bg", it.el); },
    update(it, f, i, l, go) {
      css(it.bgEl, "opacity", go && i === 3 ? (0.15 + l * 0.35).toFixed(3) : "0");
      cls(it.el, "quake", go && i === 1);
    },
    gl: (it, f, i) => {
      const map = ["whirlwind", "chaos", "flame", "ring"];
      const go = it.step != null;
      return { a: go && i > 0 ? map[i - 1] : "whirlwind", b: go ? map[i] : "whirlwind", in: "whirlwind", out: "ring", opacity: go && i === 3 ? 0.35 : 1, scale: go && i === 3 ? 0.45 : 1.1, energy: go && i === 1 ? 0.3 : 0, color: go && i === 2 ? "#ff7a3c" : "#cfd8e6" };
    }
  });

  // Amos, Hosea, Joel
  stepsType("voices", {
    step: (x, i) => `<article class="st-step vo-card" data-i="${i}"><p class="vo-d">${esc(x.d)}</p><h4>${esc(x.n)}</h4><blockquote><p>“${esc(x.t)}”</p><cite>${esc(x.r)}</cite></blockquote>${x.th ? knotHTML(x.th, false, "in") : ""}</article>`,
    update(it, f, i, l, go) {
      const p = go ? it.p * it.n - 0.5 : -1;
      it.steps.forEach((c, k) => {
        const d = k - p, a = clamp(Math.abs(d), 0, 2);
        css(c, "transform", `translate3d(${(d * (f.mobile ? 80 : 46)).toFixed(2)}vw, 0, ${(-a * 480).toFixed(1)}px) rotateY(${(-d * 34).toFixed(2)}deg)`);
        css(c, "opacity", go ? clamp(1 - a * 0.85).toFixed(3) : "0");
      });
    },
    gl: () => ({ opacity: 0.9, thread: 0.6 })
  });

  /* ════════════════ The flood ════════════════ */
  ST.type("flood", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx flood">${bg(s.art, "cool")}
        <div class="fl-water"><svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 V60 H0Z"/></svg><svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="b"><path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 V60 H0Z"/></svg></div>
        <div class="fl-count"><b>1</b><span>day</span></div>
        ${copyHTML(s, { cls: "top" })}</div>`);
    },
    init(it) { it.water = $(".fl-water", it.el); it.num = $(".fl-count b", it.el); it.unit = $(".fl-count span", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const p = range(f.uMid, 0.05, 0.9);
      css(it.water, "transform", `translate3d(0, ${lerp(100, 18, easeIO(p)).toFixed(2)}%, 0)`);
      const d = 1 + Math.floor(p * 39.999);
      if (d !== it.d) { it.num.textContent = d; it.unit.textContent = d === 1 ? "day" : "days"; it.d = d; }
      css(it.bgEl, "transform", `scale(${(1.25 - f.e * 0.15 - p * 0.05).toFixed(4)})`);
      css(it.bgEl, "opacity", f.e.toFixed(3));
    },
    gl: (it, f) => ({ opacity: 1 - f.e, visible: f.e < 0.99 })
  });

  /* ════════════════ Babel and Pentecost: one tongue scattered, every tongue gathered ════════════════ */
  const TONGUES = {
    scatter: [["he", "וְנַעֲשֶׂה־לָּנוּ שֵׁם"], ["el", "ποιήσωμεν ἑαυτοῖς ὄνομα"], ["la", "celebremus nomen nostrum"], ["ar", "ونصنع لأنفسنا اسما"], ["si", "අපට නාමයක් සාදා ගනිමු"], ["vi", "hãy làm cho rạng danh chúng ta"], ["zh", "为要传扬我们的名"], ["ko", "우리 이름을 내고"], ["hi", "हम अपना नाम करें"], ["ta", "நமக்குப் பேர் உண்டாக்குவோம்"], ["es", "hagámonos un nombre"], ["fr", "faisons-nous un nom"], ["de", "machen wir uns einen Namen"], ["ru", "сделаем себе имя"], ["sw", "tujifanyie jina"], ["ja", "名を上げよう"]],
    gather: [["en", "the wonderful works of God"], ["el", "τὰ μεγαλεῖα τοῦ θεοῦ"], ["la", "magnalia Dei"], ["he", "גְּדוֹלוֹת אֱלֹהִים"], ["ar", "عظائم الله"], ["si", "දෙවියන් වහන්සේගේ ශ්‍රේෂ්ඨ ක්‍රියා"], ["vi", "những sự cao trọng của Đức Chúa Trời"], ["zh", "神的大作为"], ["ko", "하나님의 큰 일"], ["hi", "परमेश्वर के बड़े बड़े काम"], ["ta", "தேவனுடைய மகத்துவங்கள்"], ["es", "las maravillas de Dios"], ["fr", "les merveilles de Dieu"], ["de", "die großen Taten Gottes"], ["ru", "великие дела Божии"], ["sw", "matendo makuu ya Mungu"], ["ja", "神の大いなる御業"]]
  };
  ST.type("tongues", {
    build(it) {
      const s = it.s, mode = s.fx.mode, list = TONGUES[mode], r = rnd(hash(s.id));
      // at Pentecost every tongue settles into one column, like a choir singing the same words
      it.spans = list.map(([lang, t], k) => ({ lang, t, sx: (r() - 0.5) * 110, sy: (r() - 0.5) * 90, sz: -200 - r() * 1400, rot: (r() - 0.5) * 70, rx: 0, ry: -33 + (k * 66) / (list.length - 1) }));
      const center = mode === "scatter" ? "Let us make us a name" : "the wonderful works of God";
      return h(`<div class="fx tongues ${mode}">${bg(s.art, "dim")}
        <div class="tg-field">${it.spans.map((x) => `<span lang="${x.lang}" dir="${x.lang === "he" || x.lang === "ar" ? "rtl" : "ltr"}"${x.lang === "en" ? ' class="en"' : ""}>${esc(x.t)}</span>`).join("")}</div>
        <p class="tg-center">${esc(center)}</p>
        <p class="tg-note">${mode === "scatter" ? "At Babel, one language became many." : "At Pentecost, every language heard one message."}</p>
        ${copyHTML(s, { cls: "bottom" })}</div>`);
    },
    init(it) { it.els = $$(".tg-field span", it.el); it.center = $(".tg-center", it.el); it.note = $(".tg-note", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const scatter = it.s.fx.mode === "scatter";
      const p = easeIO(range(f.uMid, 0.08, 0.72));
      it.els.forEach((el, k) => {
        const x = it.spans[k];
        let tx, ty, tz, rot, op, blur;
        if (scatter) { tx = x.sx * p; ty = x.sy * p; tz = x.sz * p; rot = x.rot * p; op = clamp(p * 3) * (1 - p * 0.45); blur = p * 3; }
        else { const q = 1 - p, ry = f.mobile ? x.ry * 0.55 : x.ry; tx = lerp(x.rx, x.sx, q); ty = lerp(ry, x.sy, q); tz = x.sz * q; rot = x.rot * q; op = clamp(1 - q * 0.8) * clamp(f.e * 2); blur = q * 4; }
        css(el, "transform", `translate(-50%, -50%) translate3d(${tx.toFixed(2)}vw, ${ty.toFixed(2)}vh, ${tz.toFixed(1)}px) rotate(${rot.toFixed(2)}deg)`);
        css(el, "opacity", op.toFixed(3));
        css(el, "filter", blur > 0.2 && !f.mobile ? `blur(${blur.toFixed(1)}px)` : "none");
      });
      css(it.center, "opacity", scatter ? (clamp(1 - p * 2.5) * (it.isIn ? 1 : 0)).toFixed(3) : "0");
      css(it.note, "opacity", (it.isIn ? clamp((p - 0.5) * 3) * (1 - f.uOut) : 0).toFixed(3));
      css(it.bgEl, "opacity", (f.e * (scatter ? 1 - p * 0.55 : 0.4 + p * 0.3)).toFixed(3));
      css(it.bgEl, "transform", `scale(${(1.2 - f.uMid * 0.12).toFixed(4)})`);
    },
    gl: (it, f) => ({ opacity: 0.9, thread: 0.5 })
  });

  /* ════════════════ Maps ════════════════ */
  let landURL = null;
  function landImage() {
    if (landURL) return landURL;
    const L = window.LANDS, s = 3, c = document.createElement("canvas");
    c.width = Math.ceil(L.w * s); c.height = Math.ceil(L.h * s);
    const g = c.getContext("2d"), r = L.step * L.k * 0.27 * s;
    g.fillStyle = "rgba(255,240,220,.2)";
    L.dots.split(" ").forEach((p) => { const [x, y] = p.split(","); g.beginPath(); g.arc(x * s, y * s, r, 0, 6.2832); g.fill(); });
    return (landURL = c.toDataURL("image/png"));
  }
  const proj = (lon, lat) => { const L = window.LANDS; return [(lon - L.lon0) * L.cos * L.k, (L.lat1 - lat) * L.k]; };
  function smoothPath(pts) {
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }
  ST.type("map", {
    build(it) {
      const s = it.s, R = window.ROUTES[s.fx.route], L = window.LANDS;
      const all = R.legs.flatMap((l) => l.pts.map((p) => proj(p[0], p[1])));
      const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
      let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const pad = Math.max(x1 - x0, y1 - y0) * 0.22 + 14;
      x0 -= pad; x1 += pad; y0 -= pad; y1 += pad;
      let w = x1 - x0, hh = y1 - y0;
      const ratio = 1.5;
      if (w / hh > ratio) { const n = w / ratio; y0 -= (n - hh) / 2; hh = n; } else { const n = hh * ratio; x0 -= (n - w) / 2; w = n; }
      it.vb = [x0, y0, w, hh];
      const fs = w / 52;
      const cities = [];
      R.legs.forEach((leg, li) => leg.pts.forEach((p, pi) => { if (p[2] && !cities.some((c) => c.name === p[2])) cities.push({ name: p[2], show: p[3], li, pi, xy: proj(p[0], p[1]) }); }));
      const marks = (R.marks || []).map((m) => ({ name: m[2], xy: proj(m[0], m[1]) }));
      return h(`<div class="fx map">
        <div class="mp-stage"><svg class="mp" viewBox="${it.vb.map((v) => v.toFixed(1)).join(" ")}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(R.title)}">
          <image href="${landImage()}" x="0" y="0" width="${L.w}" height="${L.h}" />
          ${marks.map((m) => `<g class="mp-mark"><circle cx="${m.xy[0].toFixed(1)}" cy="${m.xy[1].toFixed(1)}" r="${(fs * 0.16).toFixed(2)}"/><text x="${(m.xy[0] + fs * 0.4).toFixed(1)}" y="${(m.xy[1] + fs * 0.3).toFixed(1)}" font-size="${(fs * 0.62).toFixed(2)}">${esc(m.name)}</text></g>`).join("")}
          ${R.legs.map((l, li) => `<path class="mp-r" data-l="${li}" d="${smoothPath(l.pts.map((p) => proj(p[0], p[1])))}" stroke-width="${(fs * 0.16).toFixed(2)}"/>`).join("")}
          ${cities.map((c) => `<g class="mp-c" data-l="${c.li}" data-p="${c.pi}"><circle cx="${c.xy[0].toFixed(1)}" cy="${c.xy[1].toFixed(1)}" r="${(fs * 0.24).toFixed(2)}"/>${c.show ? `<text x="${(c.xy[0] + fs * 0.45).toFixed(1)}" y="${(c.xy[1] - fs * 0.35).toFixed(1)}" font-size="${(fs * 0.78).toFixed(2)}">${esc(c.name)}</text>` : ""}</g>`).join("")}
          <circle class="mp-head" r="${(fs * 0.34).toFixed(2)}" cx="-99" cy="-99"/>
        </svg></div>
        <ol class="mp-legs">${R.legs.map((l) => `<li>${esc(l.name)}</li>`).join("")}</ol>
        ${copyHTML(s, { cls: "side" })}</div>`);
    },
    init(it) { it.stage = $(".mp-stage", it.el); it.paths = $$(".mp-r", it.el); it.cities = $$(".mp-c", it.el); it.head = $(".mp-head", it.el); it.legsEl = $$(".mp-legs li", it.el); },
    show(it) {
      if (it.lens) return;
      const R = window.ROUTES[it.s.fx.route];
      it.lens = it.paths.map((p) => p.getTotalLength() || 1);
      it.paths.forEach((p, i) => { p.style.strokeDasharray = `${it.lens[i]} ${it.lens[i]}`; p.style.strokeDashoffset = it.lens[i]; });
      it.total = it.lens.reduce((a, b) => a + b, 0);
      // where along its leg each city falls, measured on the straight-line route
      it.cityAt = it.cities.map((c) => {
        const li = +c.dataset.l, pi = +c.dataset.p, pts = R.legs[li].pts.map((q) => proj(q[0], q[1]));
        let tot = 0, at = 0;
        for (let k = 1; k < pts.length; k++) { const d = Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]); tot += d; if (k <= pi) at += d; }
        const before = it.lens.slice(0, li).reduce((a, b) => a + b, 0);
        return before + (tot ? at / tot : 0) * it.lens[li];
      });
    },
    update(it, f) {
      if (!it.lens) this.show(it);
      const p = easeIO(range(f.uMid, 0.06, 0.94)), drawn = p * it.total;
      let acc = 0, head = null, active = 0;
      it.paths.forEach((path, i) => {
        const len = it.lens[i], d = clamp(drawn - acc, 0, len);
        css(path, "strokeDashoffset", (len - d).toFixed(1));
        if (d > 0 && d < len) { head = path.getPointAtLength(d); active = i; }
        else if (d >= len) active = Math.min(i + 1, it.paths.length - 1);
        acc += len;
      });
      if (head) { it.head.setAttribute("cx", head.x.toFixed(1)); it.head.setAttribute("cy", head.y.toFixed(1)); }
      cls(it.head, "on", !!head);
      it.cities.forEach((c, i) => cls(c, "on", drawn >= it.cityAt[i] - 0.5));
      it.legsEl.forEach((li, i) => { cls(li, "on", drawn > 0 && i === active); cls(li, "past", i < active); });
      css(it.stage, "transform", `perspective(1400px) rotateX(${(lerp(56, 16, f.e) - p * 6).toFixed(2)}deg) scale(${(lerp(0.8, 1, f.e) + p * 0.04).toFixed(4)}) translateZ(${(f.uOut * 300).toFixed(1)}px)`);
      css(it.stage, "opacity", (f.e * (1 - f.uOut)).toFixed(3));
    },
    gl: () => ({ opacity: 0.45, scale: 1.4, thread: 0.3 })
  });

  /* ════════════════ Tell the stars ════════════════ */
  const LINE = ["Isaac", "Jacob", "Judas", "Phares", "Esrom", "Aram", "Aminadab", "Naasson", "Salmon", "Booz", "Obed", "Jesse", "David", "Solomon", "Roboam", "Abia", "Asa", "Josaphat", "Joram", "Ozias", "Joatham", "Achaz", "Ezekias", "Manasses", "Amon", "Josias", "Jechonias", "Salathiel", "Zorobabel", "Abiud", "Eliakim", "Azor", "Sadoc", "Achim", "Eliud", "Eleazar", "Matthan", "Jacob", "Joseph", "Jesus"];
  ST.type("stars", {
    build(it) {
      const r = rnd(41), s = it.s;
      const names = LINE.map((n, i) => {
        const last = i === LINE.length - 1;
        let x, y;
        do { x = 5 + r() * 90; y = 10 + r() * 44; } while (!last && x > 24 && x < 76 && y > 26);
        if (last) { x = 50; y = 12; }
        return `<span class="${last ? "last" : ""}" style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%">${esc(n)}</span>`;
      });
      return h(`<div class="fx stars"><div class="sr-sky">${names.join("")}</div>
        <div class="sr-count"><b>1</b><span>Look now toward heaven, and tell the stars, if thou be able to number them.</span></div>
        <p class="sr-note">Matthew 1: the seed of Abraham, by name, from Isaac to Jesus.</p>
        ${copyHTML(s, { cls: "bottom center" })}</div>`);
    },
    init(it) { it.names = $$(".sr-sky span", it.el); it.num = $(".sr-count b", it.el); it.cap = $(".sr-count span", it.el); it.note = $(".sr-note", it.el); },
    update(it, f) {
      const p = range(f.uMid, 0.02, 0.8);
      const n = Math.floor(Math.pow(10, p * 7.3));
      const done = p >= 0.995;
      const txt = done ? "So shall thy seed be." : n.toLocaleString("en-US");
      if (txt !== it.txt) { it.num.textContent = txt; it.txt = txt; cls(it.num, "done", done); }
      const lit = Math.floor(range(f.uMid, 0.18, 0.86) * it.names.length + 0.001);
      if (lit !== it.lit) { it.names.forEach((el, i) => cls(el, "on", i < lit)); it.lit = lit; }
      cls(it.note, "on", lit > 3 && it.isIn);
    },
    gl: (it, f) => ({ opacity: 1, scale: 1 + f.uMid * 0.15, thread: 0.35 })
  });

  /* ════════════════ The blood on the door ════════════════ */
  ST.type("door", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx door">${bg(s.art, "dim")}
        <svg class="dr" viewBox="0 0 220 320" aria-hidden="true">
          <path class="dr-frame" d="M30 315 V40 H190 V315" />
          <path class="dr-blood a" pathLength="1" d="M40 312 V52" /><path class="dr-blood b" pathLength="1" d="M180 312 V52" /><path class="dr-blood c" pathLength="1" d="M40 50 H180" />
        </svg>
        <p class="dr-v">“And they shall take of the blood, and strike it on the two side posts and on the upper door post of the houses.” <cite>Exodus 12:7</cite></p>
        ${copyHTML(s, { cls: "side" })}</div>`);
    },
    init(it) { it.blood = $$(".dr-blood", it.el); it.svg = $(".dr", it.el); it.v = $(".dr-v", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const p = range(f.uMid, 0.05, 0.6);
      it.blood.forEach((b, i) => css(b, "strokeDashoffset", (1 - clamp(p * 3 - i)).toFixed(4)));
      css(it.svg, "transform", `translate(-50%, -50%) perspective(900px) rotateY(${lerp(-24, -8, f.e).toFixed(2)}deg) scale(${lerp(0.9, 1, f.e).toFixed(4)})`);
      css(it.svg, "opacity", (f.e * (1 - f.uOut)).toFixed(3));
      cls(it.v, "on", it.isIn && f.uMid < 0.55);
      css(it.bgEl, "opacity", (f.e * 0.9).toFixed(3));
    },
    gl: () => ({ opacity: 0.3, visible: false })
  });

  /* ════════════════ The Red Sea ════════════════ */
  ST.type("redsea", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx redsea">
        <div class="rs-path"><i></i></div>
        <div class="rs-half l"><div class="rs-img">${imgTag(s.art, { big: true })}</div></div>
        <div class="rs-half r"><div class="rs-img">${imgTag(s.art, { big: true })}</div></div>
        <p class="cr" data-credit="${s.art}">${creditHTML(s.art)}</p>
        ${copyHTML(s, { cls: "gap center" })}</div>`);
    },
    init(it) { it.l = $(".rs-half.l", it.el); it.r = $(".rs-half.r", it.el); it.path = $(".rs-path", it.el); it.ims = $$(".rs-img", it.el); },
    update(it, f) {
      const p = easeIO(range(f.uMid, 0.06, 0.55));
      const sp = f.mobile ? 30 : 27;
      css(it.l, "transform", `perspective(1100px) translate3d(${(-p * sp).toFixed(2)}vw, 0, 0) rotateY(${(p * 22).toFixed(2)}deg)`);
      css(it.r, "transform", `perspective(1100px) translate3d(${(p * sp).toFixed(2)}vw, 0, 0) rotateY(${(-p * 22).toFixed(2)}deg)`);
      it.ims.forEach((im) => css(im, "transform", `scale(${(lerp(1.3, 1.08, f.e) + p * 0.05).toFixed(4)})`));
      css(it.l, "opacity", f.e.toFixed(3)); css(it.r, "opacity", f.e.toFixed(3));
      css(it.path, "opacity", p.toFixed(3));
      cls(it.el, "open", p > 0.5);
    },
    gl: (it, f) => ({ opacity: 0.5, visible: true })
  });

  /* ════════════════ Jericho ════════════════ */
  ST.type("jericho", {
    build(it) {
      const s = it.s, r = rnd(17), cols = 12, rows = 5;
      it.bricks = [];
      let html = "";
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const b = { d: r() * 0.4, rx: (r() - 0.5) * 2, ry: 0.6 + r() * 0.8, rz: (r() - 0.5) * 2, rot: (r() - 0.5) * 140 };
        it.bricks.push(b);
        html += `<i style="left:${((x + (y % 2 ? 0.5 : 0)) / cols * 100 - 4).toFixed(2)}%;top:${(y / rows * 100).toFixed(2)}%"></i>`;
      }
      return h(`<div class="fx jericho">${bg(s.art, "dim")}
        <div class="jr-wall" aria-hidden="true">${html}</div>
        <div class="jr-day"><span class="jr-l">Day</span><b>1</b><span class="jr-laps">${"<i></i>".repeat(7)}</span></div>
        <p class="jr-shout">“Shout; for the LORD hath given you the city.” <cite>Joshua 6:16</cite></p>
        ${copyHTML(s, { cls: "top" })}</div>`);
    },
    init(it) { it.bEls = $$(".jr-wall i", it.el); it.day = $(".jr-day b", it.el); it.laps = $$(".jr-laps i", it.el); it.dayBox = $(".jr-day", it.el); it.shout = $(".jr-shout", it.el); it.wall = $(".jr-wall", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const days = range(f.uMid, 0.04, 0.6) * 7, day = Math.min(7, Math.floor(days) + 1), laps = day === 7 ? Math.min(7, Math.floor((days - 6) * 7.999) + 1) : 1;
      if (day !== it.d) { it.day.textContent = day; it.d = day; }
      it.laps.forEach((l, i) => cls(l, "on", (day === 7 ? i < laps : i < 1) && days > 0));
      const fall = ease(range(f.uMid, 0.66, 0.88));
      it.fall = fall;
      cls(it.dayBox, "on", it.isIn && f.uMid < 0.7);
      cls(it.shout, "on", it.isIn && f.uMid > 0.58 && f.uMid < 0.8);
      it.bEls.forEach((el, i) => {
        const b = it.bricks[i], q = clamp((fall - b.d) / 0.6);
        css(el, "transform", q > 0 ? `translate3d(${(b.rx * q * 10).toFixed(2)}vw, ${(q * q * (70 + b.ry * 40)).toFixed(2)}vh, ${(b.rz * q * 200).toFixed(1)}px) rotate(${(b.rot * q).toFixed(1)}deg)` : "none");
      });
      css(it.wall, "transform", `perspective(1000px) rotateX(${lerp(30, 8, f.e).toFixed(2)}deg) translateY(${lerp(30, 0, f.e).toFixed(2)}vh)`);
      css(it.wall, "opacity", (f.e * (1 - f.uOut)).toFixed(3));
      cls(it.el, "fallen", fall > 0.6);
      css(it.bgEl, "opacity", (f.e * (0.45 + fall * 0.4)).toFixed(3));
    },
    gl: (it, f) => ({ a: "walls", b: "rubble", t: it.fall || 0, in: "walls", out: "rubble", opacity: 0.8, scale: 1.2, y: -0.6, thread: 0.4 })
  });

  /* ════════════════ The cycle of the judges ════════════════ */
  ST.type("cycle", {
    build(it) {
      const s = it.s, st = s.fx.stages, J = s.fx.judges;
      return h(`<div class="fx cycle">
        <div class="cy-stage">
          <svg class="cy-ring" viewBox="-110 -110 220 220" aria-hidden="true"><circle r="88" /><circle class="cy-trace" r="88" pathLength="1" /></svg>
          ${st.map((t, i) => { const a = (i / st.length) * Math.PI * 2 - Math.PI / 2; return `<p class="cy-st" style="left:${(50 + Math.cos(a) * 40).toFixed(2)}%;top:${(50 + Math.sin(a) * 40).toFixed(2)}%">${esc(t)}</p>`; }).join("")}
          <i class="cy-dot"></i>
          <div class="cy-center"><span>Raised up by God</span><b>Othniel</b><em>1 of 12</em></div>
        </div>
        <ul class="cy-names">${J.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
        ${copyHTML(s, { cls: "side" })}</div>`);
    },
    init(it) { it.sts = $$(".cy-st", it.el); it.dot = $(".cy-dot", it.el); it.trace = $(".cy-trace", it.el); it.cname = $(".cy-center b", it.el); it.cnum = $(".cy-center em", it.el); it.names = $$(".cy-names li", it.el); it.stage = $(".cy-stage", it.el); },
    update(it, f) {
      const p = range(f.uMid, 0.04, 0.96), turns = p * 3, a = turns * Math.PI * 2 - Math.PI / 2;
      const stage = Math.floor(((turns % 1) * 5 + 5) % 5);
      it.sts.forEach((el, i) => cls(el, "on", i === stage && p > 0));
      css(it.dot, "transform", `translate(-50%, -50%) translate(${(Math.cos(a) * 40).toFixed(2)}cqw, ${(Math.sin(a) * 40).toFixed(2)}cqh)`);
      css(it.trace, "strokeDashoffset", (1 - (turns % 1)).toFixed(4));
      const j = Math.min(11, Math.floor(p * 12));
      if (j !== it.j) { it.cname.textContent = it.s.fx.judges[j]; it.cnum.textContent = `${j + 1} of 12`; it.names.forEach((n, k) => { cls(n, "on", k === j); cls(n, "past", k < j); }); it.j = j; }
      css(it.stage, "transform", `perspective(1200px) rotateX(${lerp(40, 0, f.e).toFixed(2)}deg) scale(${(lerp(0.8, 1, f.e) + f.uOut * 0.3).toFixed(4)})`);
      css(it.stage, "opacity", (f.e * (1 - f.uOut)).toFixed(3));
    },
    gl: () => ({ opacity: 0.55, scale: 1.3, thread: 0.5 })
  });

  /* ════════════════ David and Goliath ════════════════ */
  const FIG = `<svg viewBox="0 0 40 100" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><circle cx="20" cy="9" r="7.5"/><path d="M12 19h16l4 34h-6l-2-16-1 61h-6l-1-36-1 36h-6l-1-61-2 16H8z"/></svg>`;
  ST.type("goliath", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx goliath">${bg(s.art, "")}<div class="go-shade"></div>
        <div class="go-scale" aria-hidden="true">
          <div class="go-ruler">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((f) => `<span style="bottom:${(f * 10).toFixed(1)}%">${f} ft</span>`).join("")}</div>
          <div class="go-fig david">${FIG}<p><b>David</b><span>a shepherd boy</span></p></div>
          <div class="go-fig giant">${FIG}<p><b>Goliath</b><span>six cubits and a span · about 9 ft 9 in</span></p></div>
          <i class="go-stone"></i>
        </div>
        ${copyHTML(s, { cls: "top" })}</div>`);
    },
    init(it) { it.scale = $(".go-scale", it.el); it.giant = $(".go-fig.giant", it.el); it.stone = $(".go-stone", it.el); it.shade = $(".go-shade", it.el); it.bgEl = $(".fx-bg", it.el); it.david = $(".go-fig.david", it.el); },
    update(it, f) {
      const m = f.uMid, rise = ease(range(m, 0.22, 0.42)), grow = ease(range(m, 0.3, 0.5)), fly = range(m, 0.52, 0.7), fall = ease(range(m, 0.7, 0.84));
      css(it.scale, "opacity", (rise * (1 - f.uOut)).toFixed(3));
      css(it.scale, "transform", `translateY(${lerp(8, 0, rise).toFixed(2)}vh)`);
      css(it.giant, "height", `${lerp(56, 97.5, grow).toFixed(2)}%`);
      css(it.giant, "transform", `rotate(${(fall * 72).toFixed(2)}deg)`);
      // the stone: a quick arc from David's hand to the giant's forehead
      const t = fly, x = lerp(0, 1, t), y = lerp(0, 0, t) - Math.sin(t * Math.PI) * 0.35;
      css(it.stone, "opacity", t > 0 && t < 1 ? "1" : "0");
      css(it.stone, "left", `calc(var(--sx) + (var(--ex) - var(--sx)) * ${x.toFixed(4)})`);
      css(it.stone, "bottom", `calc(var(--sy) + (var(--ey) - var(--sy)) * ${x.toFixed(4)} + ${(-y * 100).toFixed(2)}%)`);
      css(it.shade, "opacity", (0.35 + rise * 0.45).toFixed(3));
      css(it.bgEl, "opacity", f.e.toFixed(3));
      css(it.bgEl, "transform", `scale(${(1.22 - f.e * 0.14 - m * 0.06).toFixed(4)})`);
    },
    gl: (it, f) => ({ opacity: 1 - f.e, visible: f.e < 0.99 })
  });

  /* ════════════════ A psalm, or Isaiah 53, a line at a time ════════════════ */
  ST.type("verse", {
    build(it) {
      const s = it.s, L = s.fx.lines, style = s.fx.style || "";
      const KEY = /\b(wounded|bruised|stripes|healed|sorrows|lamb|griefs|iniquity)\b/i;
      const ks = [].concat(s.th || []);
      return h(`<div class="fx verse ${style}">${bg(s.art, "dim")}
        ${intro(s)}
        <div class="vs-lines">${L.map(([t, r]) => `<p class="vs-l">${esc(t).split(/\s+/).map((w) => `<span class="${style === "scarlet" && KEY.test(w) ? "key" : ""}">${w}</span>`).join(" ")}<cite>${esc(s.fx.cite)} ${esc(r)}</cite></p>`).join("")}</div>
        ${ks.length ? `<div class="vs-knots">${ks.map((id) => knotHTML(id, false, "in")).join("")}</div>` : ""}
      </div>`);
    },
    init(it) { it.lines = $$(".vs-l", it.el).map((el) => ({ el, ws: $$("span", el) })); it.introEl = $(".fx-intro", it.el); it.knotsEl = $(".vs-knots", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const n = it.lines.length, end = it.knotsEl ? 0.84 : 0.97;
      const p = range(f.uMid, 0.1, end) * n;
      const go = f.uMid > 0.06 && it.isIn;
      cls(it.el, "go", go);
      it.lines.forEach((L, j) => {
        const d = j - (p - 0.5);
        css(L.el, "transform", `translate3d(0, calc(-50% + ${(d * (f.mobile ? 30 : 24)).toFixed(2)}vh), ${(-Math.abs(d) * 160).toFixed(1)}px)`);
        css(L.el, "opacity", go ? clamp(1 - Math.abs(d) * 1.15).toFixed(3) : "0");
        const lit = Math.floor(clamp(p - j) * L.ws.length * 1.15);
        if (lit !== L.lit) { L.ws.forEach((w, k) => cls(w, "on", k < lit)); L.lit = lit; }
      });
      if (it.knotsEl) cls(it.knotsEl, "on", it.isIn && f.uMid > 0.86);
      css(it.bgEl, "opacity", (f.e * 0.4).toFixed(3));
    },
    gl: (it, f) => ({ opacity: 0.8, thread: it.s.fx.style === "scarlet" ? 1 : 0.6 })
  });

  /* ════════════════ The kingdom divided ════════════════ */
  ST.type("divide", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx divide">
        <div class="dv-half n"><p class="dv-k">The northern kingdom</p><h4>Israel</h4><ul><li>Ten tribes</li><li>Capital: Samaria</li><li>Nineteen kings, none faithful to God</li><li>Fell to Assyria, 722 BC</li></ul></div>
        <i class="dv-crack"></i>
        <div class="dv-half s"><p class="dv-k">The southern kingdom</p><h4>Judah</h4><ul><li>Judah and Benjamin</li><li>Capital: Jerusalem</li><li>Twenty rulers of David’s line; eight who followed God</li><li>Fell to Babylon, 586 BC</li></ul></div>
        ${copyHTML(s, { cls: "top center" })}</div>`);
    },
    init(it) { it.n = $(".dv-half.n", it.el); it.sEl = $(".dv-half.s", it.el); it.crack = $(".dv-crack", it.el); },
    update(it, f) {
      const p = easeIO(range(f.uMid, 0.25, 0.6));
      css(it.n, "transform", `translate3d(${(-p * 6).toFixed(2)}vw, 0, 0) rotateY(${(p * 8).toFixed(2)}deg)`);
      css(it.sEl, "transform", `translate3d(${(p * 6).toFixed(2)}vw, 0, 0) rotateY(${(-p * 8).toFixed(2)}deg)`);
      css(it.n, "opacity", (p * (1 - f.uOut)).toFixed(3)); css(it.sEl, "opacity", (p * (1 - f.uOut)).toFixed(3));
      css(it.crack, "transform", `translateX(-50%) scaleY(${ease(range(f.uMid, 0.15, 0.45)).toFixed(4)})`);
      cls(it.el, "split", p > 0.3);
    },
    gl: (it, f) => ({ opacity: 0.8, scale: 1.1, thread: 0.3 })
  });

  /* ════════════════ Fire on Mount Carmel ════════════════ */
  ST.type("fire", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx fire">${bg(s.art, "dim")}<div class="fi-flash"></div><div class="fi-glow"></div>
        <p class="fi-pre">“The God that answereth by fire, let him be God.” <cite>1 Kings 18:24</cite></p>
        ${copyHTML(s, { cls: "bottom" })}</div>`);
    },
    init(it) { it.flash = $(".fi-flash", it.el); it.glow = $(".fi-glow", it.el); it.pre = $(".fi-pre", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const m = f.uMid, flash = Math.max(0, 1 - Math.abs(m - 0.45) / 0.06), burn = range(m, 0.42, 0.7);
      css(it.flash, "opacity", flash.toFixed(3));
      css(it.glow, "opacity", (burn * (1 - f.uOut)).toFixed(3));
      cls(it.pre, "on", it.isIn && m < 0.42);
      cls(it.el, "burnt", m > 0.47);
      css(it.bgEl, "opacity", (f.e * (0.55 + burn * 0.35)).toFixed(3));
      it.burn = burn;
    },
    gl: (it, f) => ({ opacity: 0.5 + (it.burn || 0) * 0.5, scale: 1 + (it.burn || 0) * 0.5, color: "#ff7a2c", thread: 0.5 })
  });

  /* ════════════════ Jonah in the deep ════════════════ */
  ST.type("deep", {
    build(it) {
      const s = it.s;
      const L = [
        ["The waters compassed me about, even to the soul: the depth closed me round about, the weeds were wrapped about my head.", "Jonah 2:5"],
        ["I went down to the bottoms of the mountains; the earth with her bars was about me for ever:", "Jonah 2:6"],
        ["yet hast thou brought up my life from corruption, O LORD my God.", "Jonah 2:6"]
      ];
      return h(`<div class="fx deep"><div class="dp-water"></div><div class="dp-rays"></div>${bg(s.art, "late")}
        <div class="dp-meter"><b>Day 1</b><span>in the belly of the fish</span></div>
        <div class="dp-lines">${L.map(([t, r]) => `<p class="dp-l">“${esc(t)}”<cite>${r}</cite></p>`).join("")}</div>
        ${copyHTML(s, { cls: "bottom" })}</div>`);
    },
    init(it) { it.water = $(".dp-water", it.el); it.rays = $(".dp-rays", it.el); it.meter = $(".dp-meter b", it.el); it.meterBox = $(".dp-meter", it.el); it.lines = $$(".dp-l", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const m = f.uMid, down = range(m, 0.12, 0.62), up = range(m, 0.7, 0.86);
      it.depth = down * (1 - up);
      css(it.water, "opacity", (f.e * (0.55 + it.depth * 0.45)).toFixed(3));
      css(it.rays, "opacity", ((1 - it.depth) * f.e * 0.8).toFixed(3));
      const day = Math.min(3, Math.floor(range(m, 0.15, 0.7) * 3) + 1);
      if (day !== it.day) { it.meter.textContent = "Day " + day; it.day = day; }
      cls(it.meterBox, "on", it.isIn && m > 0.12 && m < 0.72);
      const li = m < 0.22 ? -1 : Math.min(2, Math.floor(range(m, 0.22, 0.7) * 3));
      it.lines.forEach((l, i) => cls(l, "on", it.isIn && i === li));
      css(it.bgEl, "opacity", (up * 0.85).toFixed(3));
      cls(it.el, "surface", up > 0.4);
      cls(it.el, "under", m > 0.14 && m < 0.74);
    },
    gl: (it, f) => ({ opacity: 0.4 + (it.depth || 0) * 0.6, color: "#6fb7ff", thread: 0.25 })
  });

  /* ════════════════ The fall of Jerusalem: a full painting with embers ════════════════ */
  ST.type("embers", Object.assign({}, ST.types.full, {
    build(it) {
      const el = ST.types.full.build(it);
      const r = rnd(5);
      el.insertAdjacentHTML("beforeend", `<div class="embers" aria-hidden="true">${Array.from({ length: 34 }, () => `<i style="left:${(r() * 100).toFixed(1)}%;--d:${(6 + r() * 8).toFixed(1)}s;--l:${(-r() * 12).toFixed(1)}s;--s:${(2 + r() * 4).toFixed(1)}px;--x:${((r() - 0.5) * 120).toFixed(0)}px"></i>`).join("")}</div>`);
      el.classList.add("full");
      return el;
    }
  }));

  /* ════════════════ The valley of dry bones ════════════════ */
  ST.type("bones", {
    build(it) {
      const s = it.s;
      const L = [["Son of man, can these bones live?", "37:3"], ["There was a noise, and behold a shaking, and the bones came together, bone to his bone.", "37:7"], ["The sinews and the flesh came up upon them, and the skin covered them above.", "37:8"], ["Come from the four winds, O breath, and breathe upon these slain, that they may live.", "37:9"]];
      return h(`<div class="fx bones">${bg(s.art, "dim")}
        <div class="bn-lines">${L.map(([t, r]) => `<p class="bn-l">“${esc(t)}” <cite>Ezekiel ${r}</cite></p>`).join("")}</div>
        ${copyHTML(s, { cls: "bottom" })}</div>`);
    },
    init(it) { it.lines = $$(".bn-l", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const m = f.uMid, li = m < 0.12 ? -1 : Math.min(3, Math.floor(range(m, 0.12, 0.72) * 4));
      it.lines.forEach((l, i) => cls(l, "on", it.isIn && i === li && m < 0.76));
      it.rise = ease(range(m, 0.3, 0.78));
      css(it.bgEl, "opacity", (f.e * (0.5 - it.rise * 0.35)).toFixed(3));
      cls(it.el, "alive", m > 0.76);
      cls(it.el, "mid", m > 0.1 && m < 0.76);
    },
    gl: (it, f) => ({ a: "bones", b: "army", t: it.rise || 0, in: "bones", out: "army", opacity: 1, scale: 1.05, y: -0.2, color: it.rise > 0.9 ? "#ffe9c4" : "#c9d6e6", thread: 0.3 })
  });

  /* ════════════════ The writing on the wall ════════════════ */
  ST.type("wall", {
    build(it) {
      const s = it.s;
      const M = [["MENE", "God hath numbered thy kingdom, and finished it."], ["TEKEL", "Thou art weighed in the balances, and art found wanting."], ["PERES", "Thy kingdom is divided, and given to the Medes and Persians."]];
      return h(`<div class="fx wall">${bg(s.art, "")}<div class="wl-dark"></div>
        <svg class="wl-svg" viewBox="0 0 1000 180" aria-label="MENE, MENE, TEKEL, UPHARSIN"><text class="wl-t" x="500" y="128" text-anchor="middle" direction="rtl">מנא מנא תקל ופרסין</text></svg>
        <p class="wl-latin">MENE, MENE, TEKEL, UPHARSIN <cite>Daniel 5:25</cite></p>
        <div class="wl-mean">${M.map(([w, t]) => `<p><b>${w}</b><span>${esc(t)}</span></p>`).join("")}</div>
        ${copyHTML(s, { cls: "bottom", noQuote: true })}</div>`);
    },
    init(it) { it.t = $(".wl-t", it.el); it.latin = $(".wl-latin", it.el); it.mean = $$(".wl-mean p", it.el); it.dark = $(".wl-dark", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const m = f.uMid, draw = range(m, 0.18, 0.5);
      css(it.t, "strokeDashoffset", ((1 - draw) * 2400).toFixed(1));
      css(it.t, "fillOpacity", range(m, 0.45, 0.55).toFixed(3));
      cls(it.latin, "on", it.isIn && m > 0.5);
      const k = m < 0.58 ? -1 : Math.min(2, Math.floor(range(m, 0.58, 0.9) * 3));
      it.mean.forEach((p, i) => cls(p, "on", it.isIn && i <= k));
      css(it.dark, "opacity", (0.35 + range(m, 0.1, 0.3) * 0.4).toFixed(3));
      css(it.bgEl, "opacity", f.e.toFixed(3));
      css(it.bgEl, "transform", `scale(${(1.2 - f.e * 0.12 - m * 0.05).toFixed(4)})`);
      cls(it.el, "late", m > 0.2);
    },
    gl: (it, f) => ({ opacity: 1 - f.e, visible: f.e < 0.99 })
  });

  /* ════════════════ Four hundred years of silence ════════════════ */
  ST.type("years", {
    build(it) {
      const s = it.s, F = s.fx;
      const span = F.to - F.from;
      return h(`<div class="fx years${F.star ? " star" : ""}">
        ${intro(s)}
        <div class="yr-num"><b>${-F.from}</b><span>BC</span></div>
        <div class="yr-bar"><i class="yr-fill"></i>${F.marks.map(([y]) => `<i class="yr-tick" style="left:${(((y - F.from) / span) * 100).toFixed(2)}%"></i>`).join("")}</div>
        <ol class="yr-marks">${F.marks.map(([y, t]) => `<li><b>${-y} BC</b><span>${esc(t)}</span></li>`).join("")}</ol>
        ${F.end ? `<blockquote class="yr-end"><p>“${esc(F.end)}”</p><cite>${esc(F.endr)}</cite></blockquote>` : ""}
      </div>`);
    },
    init(it) { it.num = $(".yr-num b", it.el); it.fill = $(".yr-fill", it.el); it.marks = $$(".yr-marks li", it.el); it.endEl = $(".yr-end", it.el); },
    update(it, f) {
      const F = it.s.fx, p = range(f.uMid, 0.08, F.star ? 0.78 : 0.94);
      const y = Math.round(lerp(F.from, F.to, p));
      it.year = y;
      if (y !== it.y) { it.num.textContent = -y; it.y = y; }
      css(it.fill, "transform", `scaleX(${p.toFixed(4)})`);
      let last = -1;
      F.marks.forEach(([my], i) => { if (y >= my) last = i; });
      it.marks.forEach((li, i) => { cls(li, "on", i === last && it.isIn); cls(li, "past", i < last); });
      if (it.endEl) cls(it.endEl, "on", it.isIn && f.uMid > 0.84);
      it.starP = F.star ? ease(range(f.uMid, 0.78, 0.95)) : 0;
      cls(it.el, "lit", it.starP > 0.5);
    },
    gl: (it, f) => (it.s.fx.star ? { a: "chaos", b: "star", t: it.starP || 0, in: "chaos", out: "star", opacity: 0.3 + (it.starP || 0) * 0.7, scale: 1, color: it.starP > 0.5 ? "#fff1cf" : "#9aa3ad", dust: 0.5 + (it.starP || 0) * 0.5, thread: 0.2 } : { opacity: 0.28, color: "#9aa3ad", dust: 0.4, thread: 0.15 })
  });

  /* ════════════════ The ministry: a flight through the paintings ════════════════ */
  ST.type("tunnel", {
    build(it) {
      const s = it.s, I = s.fx.items;
      return h(`<div class="fx tunnel">
        <div class="tn-space">${I.map(([k, t, r], i) => `<figure class="tn-f" style="--x:${(i % 2 ? 1 : -1) * (16 + (i % 3) * 5)}vw;--y:${((i % 3) - 1) * 6}vh">${imgTag(k)}<figcaption><b>${esc(t)}</b><span>${esc(r)}</span></figcaption></figure>`).join("")}</div>
        ${copyHTML(s, { cls: "bottom", noKept: true })}
        <div class="tn-end">${(s.kept || []).map((id) => knotHTML(id, true)).join("")}${linkHTML(s.link)}</div>
      </div>`);
    },
    init(it) { it.figs = $$(".tn-f", it.el); it.copy = $(".copy", it.el); it.endEl = $(".tn-end", it.el); },
    update(it, f) {
      const n = it.figs.length, D = f.mobile ? 1300 : 1500, p = range(f.uMid, 0.12, 0.9), cam = p * (n + 0.6) * D;
      it.figs.forEach((fig, i) => {
        const z = cam - (i + 1) * D;
        const op = clamp((z + 4200) / 1600) * clamp((420 - z) / 360);
        if (op <= 0.001) { css(fig, "visibility", "hidden"); return; }
        css(fig, "visibility", "visible");
        css(fig, "transform", `translate(-50%, -50%) translate3d(var(--x), var(--y), ${z.toFixed(1)}px) rotateY(${(i % 2 ? -1 : 1) * 10}deg)`);
        css(fig, "opacity", op.toFixed(3));
      });
      cls(it.copy, "away", f.uMid > 0.12);
      cls(it.endEl, "on", it.isIn && f.uMid > 0.9);
    },
    gl: () => ({ opacity: 0.6, scale: 1.4, thread: 0.4, dust: 1 })
  });

  /* ════════════════ The cross ════════════════ */
  ST.type("cross", {
    build(it) {
      const s = it.s, K = s.kept || [];
      return h(`<div class="fx cross">
        <div class="cx-art">${imgTag(s.art)}</div><p class="cr" data-credit="${s.art}">${creditHTML(s.art)}</p>
        <div class="cx-dark"></div>
        ${copyHTML(s, { cls: "side", noQuote: true, noKept: true })}
        <p class="cx-line cx-6">“Now from the sixth hour there was darkness over all the land unto the ninth hour.” <cite>Matthew 27:45</cite></p>
        <div class="cx-line cx-fin"><p>It is finished.</p><cite>John 19:30</cite></div>
        <div class="cx-veil"><i class="l"></i><i class="r"></i><b class="tear"></b></div>
        <p class="cx-line cx-rent">“And, behold, the veil of the temple was rent in twain from the top to the bottom.” <cite>Matthew 27:51</cite></p>
        <div class="cx-kept">
          <p class="cx-k-h">Every promise, kept.</p>
          <div class="cx-k-list">${K.map((id) => { const t = window.THREADS[id]; return `<div class="cx-k">${ST.knotIcon}<div><b>${esc(t.name)}</b><span>${esc(t.a)} <i>→</i> ${esc(t.b)}</span></div></div>`; }).join("")}</div>
          <blockquote><p>“For all the promises of God in him are yea, and in him Amen.”</p><cite>2 Corinthians 1:20</cite></blockquote>
        </div>
      </div>`);
    },
    init(it) {
      it.art = $(".cx-art", it.el); it.dark = $(".cx-dark", it.el); it.copy = $(".copy", it.el);
      it.l6 = $(".cx-6", it.el); it.fin = $(".cx-fin", it.el); it.veil = $(".cx-veil", it.el); it.vl = $(".cx-veil .l", it.el); it.vr = $(".cx-veil .r", it.el); it.tear = $(".cx-veil .tear", it.el); it.rent = $(".cx-rent", it.el);
      it.kept = $(".cx-kept", it.el); it.ks = $$(".cx-k", it.el);
    },
    update(it, f) {
      const m = f.uMid, inn = it.isIn;
      const dark = range(m, 0.13, 0.21) * (1 - range(m, 0.62, 0.72));
      css(it.art, "transform", `translate(-50%, -50%) translate3d(0, ${lerp(6, 0, f.e).toFixed(2)}vh, ${(lerp(-500, 0, f.e) + m * 140).toFixed(1)}px)`);
      css(it.art, "opacity", (f.e * (1 - range(m, 0.6, 0.7) * 0.75)).toFixed(3));
      css(it.dark, "opacity", (dark * 0.9).toFixed(3));
      cls(it.copy, "away", m > 0.18);
      cls(it.l6, "on", inn && m > 0.21 && m < 0.36);
      cls(it.fin, "on", inn && m > 0.38 && m < 0.5);
      const veilIn = range(m, 0.5, 0.53), tear = ease(range(m, 0.53, 0.6)), part = ease(range(m, 0.58, 0.68));
      css(it.veil, "opacity", (veilIn * (1 - part)).toFixed(3));
      css(it.tear, "transform", `translateX(-50%) scaleY(${tear.toFixed(4)})`);
      css(it.vl, "transform", `translateX(${(-part * 55).toFixed(2)}%) rotateZ(${(-part * 6).toFixed(2)}deg)`);
      css(it.vr, "transform", `translateX(${(part * 55).toFixed(2)}%) rotateZ(${(part * 6).toFixed(2)}deg)`);
      cls(it.rent, "on", inn && m > 0.55 && m < 0.7);
      const kp = range(m, 0.7, 0.9);
      cls(it.kept, "on", inn && m > 0.7);
      it.ks.forEach((k, i) => cls(k, "on", inn && kp * (it.ks.length + 1) > i + 0.5));
      it.glow = range(m, 0.66, 0.8);
    },
    gl: (it, f) => ({ opacity: 0.25 + (it.glow || 0) * 0.75, scale: 0.9 + (it.glow || 0) * 0.2, color: (it.glow || 0) > 0.5 ? "#ffe7b0" : "#ff3048", thread: 0.4 + (it.glow || 0) * 0.6, threadY: -2.2 })
  });

  /* ════════════════ The first day of the week ════════════════ */
  ST.type("dawn", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx dawn"><div class="dw-sky"></div><div class="dw-sun"></div>${bg(s.art, "late")}
        <div class="dw-days"><span>Friday.</span><span>Saturday.</span><span>Sunday.</span></div>
        <div class="dw-tomb" aria-hidden="true"><div class="dw-rock"></div><div class="dw-mouth"><i></i></div><div class="dw-stone"></div></div>
        ${copyHTML(s, { cls: "top center" })}</div>`);
    },
    init(it) { it.sky = $(".dw-sky", it.el); it.sun = $(".dw-sun", it.el); it.days = $$(".dw-days span", it.el); it.stone = $(".dw-stone", it.el); it.mouth = $(".dw-mouth i", it.el); it.tomb = $(".dw-tomb", it.el); it.bgEl = $(".fx-bg", it.el); },
    update(it, f) {
      const m = f.uMid, day = m < 0.04 ? -1 : Math.min(2, Math.floor(range(m, 0.04, 0.3) * 3));
      it.days.forEach((d, i) => { cls(d, "on", it.isIn && i === day && m < 0.32); });
      const light = range(m, 0.28, 0.62);
      it.light = light;
      css(it.sky, "opacity", light.toFixed(3));
      css(it.sun, "transform", `translate(-50%, ${lerp(60, 0, light).toFixed(2)}vh) scale(${lerp(0.6, 1.2, light).toFixed(3)})`);
      css(it.sun, "opacity", light.toFixed(3));
      const roll = ease(range(m, 0.34, 0.56));
      css(it.stone, "transform", `translateX(${(roll * 120).toFixed(1)}%) rotate(${(roll * 160).toFixed(1)}deg)`);
      css(it.mouth, "opacity", roll.toFixed(3));
      css(it.tomb, "opacity", (1 - range(m, 0.7, 0.85)).toFixed(3));
      css(it.bgEl, "opacity", (range(m, 0.62, 0.82) * 0.7).toFixed(3));
      cls(it.el, "risen", m > 0.6);
    },
    gl: (it, f) => ({ opacity: 0.2 + (it.light || 0) * 0.8, color: "#ffd9a0", thread: 0.4 + (it.light || 0) * 0.5 })
  });

  /* ════════════════ Twenty-one letters ════════════════ */
  ST.type("letters", {
    build(it) {
      const s = it.s, L = s.b.map((id) => ST.BOOK[id]);
      it.n = L.length;
      return h(`<div class="fx letters">${intro(s)}
        <div class="lt-ring">${L.map((b, i) => `<article class="lt-card" data-i="${i}"><p class="lt-from">${esc(b.by)} <i>→</i> ${esc(b.to)}</p><h4>${esc(b.n)}</h4><p class="lt-when">${esc(b.when)} · ${b.ch} chapter${b.ch > 1 ? "s" : ""}</p><blockquote><p>“${esc(b.v)}”</p><cite>${esc(b.r)}</cite></blockquote><p class="lt-sum">${esc(b.sum)}</p></article>`).join("")}</div>
        <p class="lt-count"><b>1</b><span>of ${L.length}</span></p></div>`);
    },
    init(it) { it.cards = $$(".lt-card", it.el); it.count = $(".lt-count b", it.el); it.ring = $(".lt-ring", it.el); it.stepBooks = it.s.b.map((b) => [b]); },
    update(it, f) {
      const n = it.n, p = range(f.uMid, 0.1, 0.94) * (n - 1), go = f.uMid > 0.05 && it.isIn;
      const cw = f.mobile ? Math.min(f.vw * 0.8, 400) : 400, Rr = (cw * n) / (2 * Math.PI) * 1.12;
      const step = 360 / n;
      cls(it.el, "go", go);
      it.cards.forEach((c, j) => {
        const a = (j - p) * step, rad = (a * Math.PI) / 180, front = Math.cos(rad);
        css(c, "transform", `translate(-50%, -50%) rotateY(${a.toFixed(2)}deg) translateZ(${Rr.toFixed(0)}px)`);
        const dd = Math.abs(j - p);
        css(c, "opacity", go && front > 0 ? clamp(1 - dd * 0.55, 0, 1).toFixed(3) : "0");
        cls(c, "front", Math.abs(j - p) < 0.5);
      });
      css(it.ring, "transform", `translateZ(${(-Rr).toFixed(0)}px) rotateX(${lerp(14, 2, f.e).toFixed(2)}deg)`);
      const i = Math.round(p);
      it.step = go ? i : null;
      if (i !== it.ci) { it.count.textContent = i + 1; it.ci = i; }
    },
    gl: () => ({ opacity: 0.5, scale: 1.5, thread: 0.4 })
  });

  /* ════════════════ So great a cloud of witnesses ════════════════ */
  ST.type("faith", {
    build(it) {
      const s = it.s, I = s.fx.items;
      it.n = I.length;
      return h(`<div class="fx faith">${intro(s)}
        <div class="fa-space">${I.map(([k, t, r]) => `<figure class="fa-card">${imgTag(k)}<figcaption><p>“${esc(t)}”</p><cite>Hebrews ${esc(r)}</cite></figcaption></figure>`).join("")}</div>
        <blockquote class="fa-end"><p>“${esc(s.fx.end)}”</p><cite>${esc(s.fx.endr)}</cite></blockquote></div>`);
    },
    init(it) { it.cards = $$(".fa-card", it.el); it.introEl = $(".fx-intro", it.el); it.endEl = $(".fa-end", it.el); },
    update(it, f) {
      const n = it.n, p = range(f.uMid, 0.08, 0.86) * n, go = f.uMid > 0.05 && it.isIn;
      cls(it.el, "go", go);
      it.cards.forEach((c, j) => {
        const a = (j / n) * Math.PI * 2 - Math.PI / 2;
        const rx = Math.cos(a) * (f.mobile ? 34 : 40), ry = Math.sin(a) * (f.mobile ? 36 : 34);
        let x, y, z, s, op, cap;
        const local = p - j;
        if (local < 0) { x = 0; y = 4; z = -1800; s = 1; op = clamp(1 + local * 1.2) * 0.6; cap = 0; }
        else if (local < 1) {
          const out = ease(range(local, 0.62, 1));
          x = lerp(0, rx, out); y = lerp(0, ry, out); z = lerp(lerp(-900, 0, ease(range(local, 0, 0.3))), -420, out); s = lerp(1, 0.42, out); op = 1 - out * 0.4; cap = local < 0.7 ? 1 : 0;
        } else { x = rx; y = ry; z = -420; s = 0.42; op = 0.6; cap = 0; }
        css(c, "transform", `translate(-50%, -50%) translate3d(${x.toFixed(2)}vw, ${y.toFixed(2)}vh, ${z.toFixed(1)}px) scale(${s.toFixed(4)})`);
        css(c, "opacity", go ? op.toFixed(3) : "0");
        cls(c, "cap", cap && go);
      });
      cls(it.endEl, "on", it.isIn && f.uMid > 0.88);
    },
    gl: () => ({ opacity: 0.7, thread: 0.6 })
  });

  /* ════════════════ All things new ════════════════ */
  ST.type("new", {
    build(it) {
      const s = it.s;
      const P = [
        ["In the beginning God created the heaven and the earth.", "Genesis 1:1", "And I saw a new heaven and a new earth.", "Revelation 21:1"],
        ["A river went out of Eden to water the garden.", "Genesis 2:10", "A pure river of water of life, clear as crystal.", "Revelation 22:1"],
        ["The tree of life also in the midst of the garden.", "Genesis 2:9", "On either side of the river, was there the tree of life.", "Revelation 22:2"],
        ["Cursed is the ground for thy sake.", "Genesis 3:17", "And there shall be no more curse.", "Revelation 22:3"],
        ["So he drove out the man.", "Genesis 3:24", "And they shall see his face.", "Revelation 22:4"]
      ];
      return h(`<div class="fx new">${bg(s.art, "")}
        ${copyHTML(s, { cls: "bottom", noQuote: true })}
        <div class="nw-cube"><p>“The city lieth foursquare … The length and the breadth and the height of it are equal.”<cite>Revelation 21:16</cite></p><span>Like the Most Holy Place, where God dwelt. Now the whole city is His dwelling.</span></div>
        <div class="nw-book"><p class="nw-h"><span>Genesis</span><span>Revelation</span></p>${P.map(([a, ar, b, br]) => `<div class="nw-row"><p>“${esc(a)}”<cite>${ar}</cite></p><i></i><p>“${esc(b)}”<cite>${br}</cite></p></div>`).join("")}</div>
        <div class="nw-end"><h3>Behold, I make all things new.</h3><cite>Revelation 21:5</cite><blockquote><p>“${esc(s.q)}”</p><cite>${esc(s.r)}</cite></blockquote></div>
      </div>`);
    },
    init(it) { it.bgEl = $(".fx-bg", it.el); it.copy = $(".copy", it.el); it.cube = $(".nw-cube", it.el); it.book = $(".nw-book", it.el); it.rows = $$(".nw-row", it.el); it.endEl = $(".nw-end", it.el); },
    update(it, f) {
      const m = f.uMid, inn = it.isIn;
      css(it.bgEl, "opacity", (f.e * (1 - range(m, 0.22, 0.32) * 0.82)).toFixed(3));
      css(it.bgEl, "transform", `scale(${(1.25 - f.e * 0.15 - m * 0.08).toFixed(4)})`);
      cls(it.copy, "away", m > 0.24);
      cls(it.cube, "on", inn && m > 0.28 && m < 0.5);
      cls(it.book, "on", inn && m > 0.52 && m < 0.82);
      const r = Math.floor(range(m, 0.54, 0.78) * it.rows.length + 0.6);
      it.rows.forEach((row, i) => cls(row, "on", i < r));
      cls(it.endEl, "on", inn && m > 0.84);
      it.cubeP = range(m, 0.26, 0.36) * (1 - range(m, 0.5, 0.56) * 0.55) * (1 - range(m, 0.82, 0.9) * 0.3);
    },
    gl: (it, f) => ({ opacity: 0.15 + (it.cubeP || 0) * 0.85, scale: 1.05, color: "#ffe6b0", thread: 0.6 })
  });

  /* ════════════════ Amen ════════════════ */
  ST.type("amen", {
    build(it) {
      const s = it.s;
      return h(`<div class="fx amen">
        <p class="am-l am-1">“He which testifieth these things saith, Surely I come quickly.”</p>
        <p class="am-l am-2"><span>Amen.</span> <span>Even so, come, Lord Jesus.</span></p>
        <p class="am-l am-3">“The grace of our Lord Jesus Christ be with you all. Amen.”<cite>Revelation 22:20–21</cite></p>
        <div class="am-end"><p class="am-k">The end of the story</p><h3>From the garden<br />to the city.</h3><p class="am-x">${esc(s.x)}</p><div class="am-stats"></div></div>
      </div>`);
    },
    init(it) { it.ls = $$(".am-l", it.el); it.endEl = $(".am-end", it.el); it.stats = $(".am-stats", it.el); },
    show(it) {
      const c = ST.collection();
      it.stats.innerHTML = `<p><b>${c.books.size}</b><span>of 73 books opened</span></p><p><b>${c.kept.size}</b><span>of 26 promises kept</span></p><p><b>15</b><span>ages</span></p><p><b>${ST.items.filter((x) => x.kind === "scene").length}</b><span>scenes</span></p>`;
    },
    update(it, f) {
      const m = f.uMid, inn = it.isIn;
      cls(it.ls[0], "on", inn && m > 0.04 && m < 0.36);
      cls(it.ls[1], "on", inn && m > 0.18 && m < 0.36);
      cls(it.ls[2], "on", inn && m > 0.4 && m < 0.62);
      cls(it.endEl, "on", inn && m > 0.66);
      it.loop = range(m, 0.6, 0.8);
    },
    gl: (it, f) => ({ opacity: 1, scale: 1 + (it.loop || 0) * 0.12, color: "#ff3a4c", thread: 1, threadY: -2.6 })
  });
})();
