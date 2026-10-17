/* ==========================================================================
   The Scarlet Thread — the story engine.
   The page you scroll is a track of empty spacers; every scene lives in one
   fixed "theatre" above it. Scrolling moves a camera through the scenes:
   each one flies in from the dark, holds while you read, and flies past you
   as the next arrives. Nothing slides; everything zooms and dissolves.
   ========================================================================== */
window.ST = (function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (t) => 1 - Math.pow(1 - clamp(t), 3);
  const easeIO = (t) => { t = clamp(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  const range = (v, a, b) => clamp((v - a) / (b - a));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => innerWidth <= 760;
  const yearLabel = (y) => (y == null ? "" : y < 0 ? `c. ${(-y).toLocaleString("en-US").replace(",", "")} BC` : `AD ${y}`);

  /** Write a style only when it changes (the frame loop runs every frame). */
  function css(el, prop, val) {
    if (!el) return;
    const c = el.__css || (el.__css = {});
    if (c[prop] === val) return;
    c[prop] = val;
    if (prop[0] === "-") el.style.setProperty(prop, val); else el.style[prop] = val;
  }
  function cls(el, name, on) { if (el && el.classList.contains(name) !== !!on) el.classList.toggle(name, !!on); }

  /** Title words, each in a mask so it can rise into place. */
  function words(text, cn = "w") {
    return esc(text).split(/\s+/).map((w, i) => `<span class="${cn}"><span style="--i:${i}">${w}</span></span>`).join(" ");
  }

  /* ---------- remembering where you are ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("st-" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("st-" + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };

  /* ---------- the threads, the books, the people ---------- */
  const THREADS = window.THREADS, BOOKS = window.BOOKS, ART = window.ART;
  const BOOK = Object.fromEntries(BOOKS.map((b) => [b.id, b]));

  const knotIcon = `<svg class="knot-ic" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 22c6 0 8-12 13-12s5 8 0 8-5-8 0-8 7 12 13 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  function knotHTML(id, kept, cn = "", verse = true) {
    const t = THREADS[id];
    if (!t) return "";
    if (kept) return `<aside class="knot kept rv ${cn}" data-thread="${id}">${knotIcon}<div><p class="knot-e">Promise kept</p><p class="knot-n">${esc(t.name)}</p>${verse ? `<p class="knot-v">“${esc(t.bt)}”</p>` : ""}<p class="knot-r">${esc(t.a)} <i>→</i> ${esc(t.b)}</p></div></aside>`;
    return `<aside class="knot rv ${cn}" data-thread="${id}">${knotIcon}<div><p class="knot-e">The scarlet thread · ${esc(t.kind)}</p><p class="knot-n">${esc(t.name)}</p><p class="knot-r">${esc(t.a)}</p></div></aside>`;
  }
  function creditHTML(key) {
    const a = ART[key];
    if (!a) return "";
    return `<i>${esc(a.t)}</i> · ${esc(a.a)}${a.y ? ", " + esc(a.y) : ""}`;
  }
  function kickerHTML(s) {
    const bits = [s.k, s.pl, s.y != null ? yearLabel(s.y) : s.yl].filter(Boolean);
    return `<p class="k rv">${bits.map((b, i) => `<span>${esc(b)}</span>${i < bits.length - 1 ? '<i class="k-dot"></i>' : ""}`).join("")}</p>`;
  }
  function castHTML(cast) {
    if (!cast || !cast.length) return "";
    return `<ul class="cast rv">${cast.map(([n, r]) => `<li><b>${esc(n)}</b><span>${esc(r)}</span></li>`).join("")}</ul>`;
  }
  function linkHTML(l) {
    return l ? `<a class="behold-link rv" href="${esc(l.href)}"><span>${esc(l.label)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : "";
  }
  /** Promises kept in a scene: one card with its verse, or a compact row of names when there are several.
   *  A verse is never repeated if the scene already quotes it. */
  function keptHTML(s, o = {}) {
    const ks = s.kept || [];
    if (!ks.length || o.noKept) return "";
    const one = ks.length === 1, verse = (id) => one && THREADS[id] && THREADS[id].bt !== s.q;
    return `<div class="kepts${one ? "" : " row"}">${ks.map((id) => knotHTML(id, true, "", verse(id))).join("")}</div>`;
  }
  /** The standard text block for a scene. */
  function copyHTML(s, o = {}) {
    const ths = [].concat(s.th || []);
    return `
      <div class="copy ${o.cls || ""}">
        ${kickerHTML(s)}
        <h3 class="t">${words(s.t)}</h3>
        ${s.x && !o.noText ? `<p class="x rv">${esc(s.x)}</p>` : ""}
        ${s.q && !o.noQuote ? `<blockquote class="q rv"><p>“${esc(s.q)}”</p><cite>${esc(s.r)}</cite></blockquote>` : ""}
        ${o.after || ""}
        ${ths.length > 1 ? `<div class="kepts row planted">${ths.map((id) => knotHTML(id, false)).join("")}</div>` : ths.map((id) => knotHTML(id, false)).join("")}
        ${keptHTML(s, o)}
        ${castHTML(s.cast)}
        ${linkHTML(s.link)}
      </div>`;
  }

  /* ---------- scene types ---------- */
  const types = {};
  function type(name, def) { types[name] = def; }

  /* ---------- the items: every age opener and every scene, in order ---------- */
  const items = [];
  let theatre, track;
  const DEF_H = { age: 2.7, full: 2.5, plate: 2.5, portal: 2.5, word: 2.2 };

  function makeItems() {
    window.AGES.forEach((age, ai) => {
      items.push({ kind: "age", type: "age", id: "age-" + age.id, age, ai, s: age, h: 2.7 });
      age.scenes.forEach((s) => {
        const tp = s.fx ? (s.fx.type === "steps" ? "steps-" + s.fx.style : s.fx.type) : s.lay || "word";
        items.push({ kind: "scene", type: types[tp] ? tp : s.lay || "word", id: s.id, age, ai, s, h: s.h || DEF_H[s.lay] || 2.6 });
      });
    });
    items.forEach((it, i) => { it.i = i; it.prev = items[i - 1]; });
  }

  function buildDOM() {
    theatre = $("#theatre"); track = $("#track");
    const tf = document.createDocumentFragment(), sf = document.createDocumentFragment();
    items.forEach((it) => {
      const def = types[it.type];
      it.def = def;
      it.el = def.build(it);
      it.el.classList.add("sc");
      it.el.dataset.age = it.age.id;
      it.el.style.setProperty("--c", (it.s.fx && it.s.fx.c) || it.age.c);
      it.el.style.zIndex = it.i + 1;
      it.el.setAttribute("aria-hidden", "true");
      tf.appendChild(it.el);
      it.sp = h(`<section class="sp" id="${it.id}" aria-label="${esc(it.s.t)}"></section>`);
      sf.appendChild(it.sp);
      if (def.init) def.init(it);
    });
    theatre.appendChild(tf);
    sf.appendChild(h(`<div class="sp-end" aria-hidden="true"></div>`));
    track.appendChild(sf);
  }

  /* ---------- measuring ---------- */
  let vh = innerHeight, vw = innerWidth, T = 0, trackTop = 0, endY = 0;
  function measure(force) {
    const nvh = innerHeight, nvw = innerWidth;
    // on phones the toolbar hides and shows as you scroll: ignore those small height changes
    if (!force && nvw === vw && Math.abs(nvh - vh) < 140) return false;
    vh = nvh; vw = nvw; T = vh * 0.5;
    items.forEach((it) => { it.sp.style.height = Math.round(it.h * vh) + "px"; });
    const tail = track.querySelector(".sp-end");
    if (tail) tail.style.height = Math.round(vh * 1.1) + "px";
    trackTop = track.getBoundingClientRect().top + scrollY;
    let y = trackTop;
    items.forEach((it) => { it.top = y; it.bottom = y + Math.round(it.h * vh); y = it.bottom; });
    endY = y;
    items.forEach((it) => it.def.measure && it.def.measure(it));
    items.forEach((it) => { it.fitFor = null; if (it.shown) { it.fitFor = innerWidth + "x" + innerHeight; tidyKickers(it.el); fitPhone(it); fitCopy(it); } });
    return true;
  }

  /* ---------- where the reader is ---------- */
  const visited = new Set(store.get("visited", []));
  let saveTimer = 0;
  function visit(it) {
    const id = typeof it === "string" ? it : it.id;
    if (visited.has(id)) return false;
    visited.add(id);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => store.set("visited", [...visited]), 600);
    return true;
  }
  /** Books, promises and people you have reached so far. */
  function collection() {
    const books = new Set(), planted = new Set(), kept = new Set();
    items.forEach((it) => {
      if (it.kind !== "scene") return;
      if (it.stepBooks) {
        // scenes told in steps open their books one step at a time
        const steps = (it.s.fx && it.s.fx.steps) || [];
        it.stepBooks.forEach((bs, k) => {
          if (!visited.has(it.id + "#" + k)) return;
          bs.forEach((b) => books.add(b));
          if (steps[k] && steps[k].th) planted.add(steps[k].th);
        });
        if (visited.has(it.id) && !it.stepBooks.some((bs) => bs.length)) (it.s.b || []).forEach((b) => books.add(b));
      } else if (visited.has(it.id)) (it.s.b || []).forEach((b) => books.add(b));
      if (!visited.has(it.id)) return;
      [].concat(it.s.th || []).forEach((t) => planted.add(t));
      (it.s.kept || []).forEach((t) => { kept.add(t); planted.add(t); });
    });
    return { books, planted, kept };
  }

  /* ---------- the frame loop ---------- */
  let cur = 0, lastY = -1, vel = 0, started = false;
  const listeners = { frame: [], item: [] };
  const on = (ev, fn) => listeners[ev].push(fn);

  function frameFor(it, y) {
    const a = it.top, b = it.bottom;
    const uIn = it.i === 0 ? 1 : clamp((y - (a - T)) / (2 * T));
    const uOut = it.i === items.length - 1 ? clamp((y - (b - T)) / (2 * T)) : clamp((y - (b - T)) / (2 * T));
    const uMid = clamp((y - (a + T * 0.6)) / Math.max(1, b - a - T * 1.6));
    const e = ease(uIn);
    // One choreography for every hand-off: the leaving scene's words are gone before the next scene's
    // painting is half in (to), and the arriving words wait until it has nearly settled (ti).
    // Pictures and diagrams fade a little later (fo), so the screen is never empty.
    const to = clamp(1 - uOut * 3.2), fo = clamp(1 - uOut * 2.2), ti = it.i === 0 ? 1 : clamp((e - 0.62) / 0.28);
    return { uIn, uOut, uMid, e, to, fo, ti, tv: ti * to, y, vh, vw, mobile: isMobile() };
  }

  const glDefaults = { age: { opacity: 1, scale: 1, y: 0.2, thread: 0.85 }, full: { opacity: 1, scale: 1.05, thread: 0.6 }, plate: { opacity: 0.4, scale: 1.25, thread: 0.45 }, portal: { opacity: 0.5, scale: 1.2, thread: 0.5 }, word: { opacity: 1, scale: 1, thread: 0.8 } };

  function frame(dt) {
    const y = window.__lenis ? window.__lenis.scroll : scrollY;
    vel = lerp(vel, (y - (lastY < 0 ? y : lastY)) / Math.max(dt, 0.001), 0.2);
    lastY = y;
    // the item at the middle of the screen
    const mid = y + vh * 0.5;
    while (cur < items.length - 1 && mid >= items[cur].bottom) cur++;
    while (cur > 0 && mid < items[cur].top) cur--;
    const curIt = items[cur];

    let glVis = false, entering = null;
    const vis = [];
    for (let i = Math.max(0, cur - 2); i <= Math.min(items.length - 1, cur + 2); i++) {
      const it = items[i];
      const showing = y > it.top - T - 2 && y < it.bottom + T + 2;
      if (!showing) { if (it.shown) hide(it); continue; }
      const f = frameFor(it, y);
      if (f.uOut >= 1 || (f.uIn <= 0 && it.i !== 0)) { if (it.shown) hide(it); continue; }
      if (!it.shown) show(it);
      it.f = f;
      // the text arrives once the scene has nearly settled, and leaves as it flies past
      const inNow = started && f.uIn > (it.isIn ? 0.22 : 0.58);
      if (inNow !== it.isIn) { it.isIn = inNow; cls(it.el, "in", inNow); }
      css(it.el, "--o", f.uOut.toFixed(3));
      css(it.el, "--m", f.uMid.toFixed(3));
      css(it.el, "--e", f.e.toFixed(3));
      css(it.el, "--tv", f.tv.toFixed(3));
      css(it.el, "--to", f.to.toFixed(3));
      css(it.el, "--fo", f.fo.toFixed(3));
      it.def.update(it, f);
      vis.push(it);
      if (f.uIn < 1 && it.i > 0) entering = it;
      if (started && f.uMid > 0.35) { if (visit(it)) listeners.item.forEach((fn) => fn(it, "visit")); }
      if (started && it.stepBooks && it.step != null) {
        let any = false;
        for (let k = 0; k <= it.step; k++) if (visit(it.id + "#" + k)) any = true;
        if (any) listeners.item.forEach((fn) => fn(it, "step"));
      }
    }
    // hide anything that is out of range entirely
    for (let i = 0; i < items.length; i++) if (items[i].shown && Math.abs(i - cur) > 2) hide(items[i]);

    // the 3D layer: morph from the leaving scene's shape to the arriving one's
    const G = window.GL;
    if (G) {
      let st;
      const B = entering, A = B && B.prev;
      if (B && A && A.f && vis.includes(A)) {
        const ga = glOf(A), gb = glOf(B), t = B.f.e;
        st = { a: ga.out, b: gb.in, t, color: t > 0.5 ? gb.color : ga.color };
        ["opacity", "scale", "x", "y", "thread", "threadY", "dust"].forEach((k) => { st[k] = lerp(ga[k], gb[k], t); });
        glVis = ga.visible !== false || gb.visible !== false;
      } else if (curIt.f) {
        const g = glOf(curIt);
        st = { a: g.a || g.in, b: g.b || g.in, t: g.t == null ? 1 : g.t, color: g.color };
        ["opacity", "scale", "x", "y", "thread", "threadY", "dust"].forEach((k) => { st[k] = g[k]; });
        glVis = g.visible !== false;
      } else {
        st = { a: "chaos", b: "chaos", t: 1, opacity: 0.4, scale: 1, thread: 0.4, color: "#d8c8a8" };
        glVis = true;
      }
      if (y > endY - vh * 0.2) { st.opacity = Math.min(st.opacity, 0.55); st.thread = 0.35; glVis = true; }
      st.visible = glVis;
      st.energy = clamp(Math.abs(vel) / 9000, 0, 0.35);
      st.travel = y * 0.0042;
      G.frame(dt, st);
    }
    // paintings near the reader load; far ones let go
    if (cur !== frame.lastCur) { frame.lastCur = cur; loadAround(cur); }
    listeners.frame.forEach((fn) => fn(y, curIt, dt, vel));
  }

  function glOf(it) {
    const base = glDefaults[it.type] || {};
    const sh = it.s.sh || it.age.sh;
    const g = Object.assign({ opacity: 0.9, scale: 1, x: 0, y: 0, thread: 0.6, threadY: -1.4, dust: 1, color: it.age.c, in: sh, out: sh }, base, it.def.gl ? it.def.gl(it, it.f) : {});
    if (it.type === "full") { g.opacity = 1 - it.f.e * 0.98; g.visible = !(it.f.e > 0.995 && it.f.uOut < 0.005); }
    return g;
  }

  /** Kickers wrap on narrow screens: never leave a separator dot dangling at either end of a line. */
  function tidyKickers(el) {
    el.querySelectorAll(".k").forEach((k) => {
      const kids = Array.from(k.children);
      kids.forEach((c, i) => {
        if (!c.classList.contains("k-dot")) return;
        c.hidden = false; c.style.visibility = "";
      });
      kids.forEach((c) => { if (c.tagName === "SPAN") c.style.whiteSpace = c.offsetWidth > k.clientWidth ? "normal" : ""; });
      // compare the middle of each line box: a 3px dot and a line of text share a line when their centres are close
      const mid = (el) => el.offsetTop + el.offsetHeight / 2;
      kids.forEach((c, i) => {
        if (!c.classList.contains("k-dot")) return;
        const a = kids[i - 1], b = kids[i + 1];
        if (!a || !b) return;
        if (mid(b) - mid(c) > 6) c.style.visibility = "hidden"; // dot ends a line
        else if (mid(c) - mid(a) > 6) c.hidden = true; // dot starts a line
      });
    });
  }
  /** On a phone, the painting above a plate or portal gives way to the words below it, so they never overlap. */
  function fitPhone(it) {
    const stage = it.el.querySelector(".pl-stage, .po-stage"), copy = it.el.matches(".plate, .portal") ? it.el.querySelector(":scope > .copy") : null;
    if (!stage || !copy) return;
    if (!isMobile()) { stage.style.removeProperty("--sh"); stage.style.removeProperty("height"); return; }
    const hud = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hud-h")) || 84;
    const room = innerHeight - (hud + 4) - copy.offsetHeight - 56 - 30;
    const sh = Math.round(clamp(room, innerHeight * 0.2, innerHeight * 0.4));
    stage.style.height = sh + "px";
    stage.style.setProperty("--sh", sh + "px");
  }
  /** A scene's words must fit between the top bar and the HUD. If they would not, step down to a denser style
   *  (smaller title, cast without roles, no repeated verses), and then, if needed, a denser one still. */
  function fitCopy(it) {
    const copy = it.el.querySelector(":scope > .copy, :scope > .fx > .copy, :scope .nv-copy, :scope .dw-copy");
    if (!copy) return;
    it.el.classList.remove("dense", "denser");
    if (copy.offsetHeight === 0) return;
    const hud = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hud-h")) || 84;
    const kids = Array.from(copy.children).filter((c) => c.offsetHeight > 0);
    if (!kids.length) return;
    // the words, not the column: a plate's text column spans the whole screen height
    const over = () => kids[0].getBoundingClientRect().top < 64 || kids[kids.length - 1].getBoundingClientRect().bottom > innerHeight - hud + 30;
    if (over()) it.el.classList.add("dense");
    if (over()) it.el.classList.add("denser");
  }
  function show(it) {
    it.shown = true; it.el.classList.add("on"); it.el.removeAttribute("aria-hidden");
    // layout is measured once per screen size, not every time a scene comes back into view
    const size = innerWidth + "x" + innerHeight;
    if (it.fitFor !== size) { it.fitFor = size; tidyKickers(it.el); fitPhone(it); fitCopy(it); }
    if (it.def.show) it.def.show(it);
  }
  function hide(it) {
    it.shown = false; it.el.classList.remove("on"); it.el.setAttribute("aria-hidden", "true");
    if (it.isIn) { it.isIn = false; it.el.classList.remove("in"); }
    if (it.def.hide) it.def.hide(it);
  }

  /* ---------- paintings ---------- */
  function artsOf(it) {
    const keys = [];
    if (it.s.art) keys.push(it.s.art);
    ((it.s.fx && it.s.fx.items) || []).forEach((x) => keys.push(x[0]));
    return keys;
  }
  function loadAround(c) {
    items.forEach((it, i) => {
      const d = i - c;
      const imgs = it.imgs || (it.imgs = $$("img[data-art]", it.el));
      if (!imgs.length) return;
      if (d >= -2 && d <= 3) imgs.forEach((img) => loadImg(img));
      else if (Math.abs(d) > 6) imgs.forEach((img) => window.Paint.release(img));
    });
  }
  function loadImg(img) {
    const key = img.dataset.art, big = img.hasAttribute("data-big") && innerWidth * (devicePixelRatio || 1) > 1700;
    if (!img.__ar) {
      img.__ar = true;
      // frames take the true shape of each painting once it arrives
      img.addEventListener("load", () => {
        const fr = img.closest(".pl, .po, .cx-art");
        if (fr && img.naturalWidth) {
          const ar = (img.naturalWidth / img.naturalHeight).toFixed(4);
          fr.style.setProperty("--ar", ar);
          // the stage knows the shape too, so the credit can sit right under the frame
          if (fr.parentElement) fr.parentElement.style.setProperty("--ar", ar);
          const it = items.find((x) => x.el === img.closest(".sc"));
          if (it && it.shown) fitPhone(it);
          if (fr.classList.contains("pl")) glowFrom(img, fr.parentElement.querySelector(".pl-glow canvas"));
        }
      });
    }
    window.Paint.into(img, key, big, (found) => {
      if (found && found.searched) {
        const cr = img.closest(".sc") && img.closest(".sc").querySelector(`[data-credit="${key}"]`);
        if (cr) { const c = window.Paint.credit(key, found); cr.innerHTML = `<i>${esc(c.t)}</i> · ${esc(c.a)}${c.y ? ", " + esc(c.y) : ""}`; }
      }
    });
  }
  /** The coloured glow behind a plate: the painting shrunk to 6×6 pixels and smoothly enlarged. Drawn once; no blur filter at all. */
  function glowFrom(img, c) {
    if (!c) return;
    try {
      const t = document.createElement("canvas"); t.width = t.height = 6;
      t.getContext("2d").drawImage(img, 0, 0, 6, 6);
      const g = c.getContext("2d"); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
      g.clearRect(0, 0, c.width, c.height); g.drawImage(t, 0, 0, c.width, c.height);
      c.classList.add("loaded");
    } catch (e) { /* a glow is a nicety */ }
  }
  const imgTag = (key, o = {}) => key ? `<img data-art="${key}" alt="${esc(ART[key] ? ART[key].t + " by " + ART[key].a : "")}" ${o.big ? "data-big" : ""} class="${o.cls || "im"}" decoding="async" draggable="false" />` : "";

  /* ---------- jumping to a place in the story ---------- */
  function jump(id, opts = {}) {
    const it = items.find((x) => x.id === id);
    let target = it ? it.top + (opts.mid ? (it.bottom - it.top) * 0.35 : T * 1.02) : null;
    if (target == null) {
      const el = document.getElementById(id);
      if (!el) return;
      target = el.getBoundingClientRect().top + (window.__lenis ? window.__lenis.scroll : scrollY);
    }
    const L = window.__lenis;
    const far = Math.abs(target - scrollY) > vh * 3;
    if (far || REDUCED) {
      const cur = $("#curtain");
      cur.classList.add("on");
      setTimeout(() => {
        if (L) L.scrollTo(target, { immediate: true, force: true }); else scrollTo(0, target);
        setTimeout(() => cur.classList.remove("on"), 260);
      }, 420);
    } else if (L) L.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4), force: true });
    else scrollTo({ top: target, behavior: "smooth" });
  }

  return {
    $, $$, clamp, lerp, ease, easeIO, range, esc, h, css, cls, words, store, REDUCED, isMobile, yearLabel,
    knotHTML, creditHTML, kickerHTML, castHTML, linkHTML, copyHTML, imgTag, knotIcon,
    type, types, items, makeItems, buildDOM, measure, frame, on, jump, visited, collection, BOOK,
    get vh() { return vh; }, get vw() { return vw; }, get T() { return T; }, get endY() { return endY; }, get cur() { return cur; },
    get started() { return started; }, set started(v) { started = v; }
  };
})();
