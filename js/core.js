/* ==========================================================================
   Behold — shared core: helpers, smooth scroll, navigation, painting viewer.
   Loaded on every page before the page's own script.
   ========================================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const pad = (n, l = 3) => String(n).padStart(l, "0");

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HAS_GSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  const ART = window.ART || {};

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (HAS_GSAP && !REDUCED) document.documentElement.classList.add("js");

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (HAS_GSAP) gsap.registerPlugin(ScrollTrigger);
  if (HAS_GSAP && !REDUCED && typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.95, touchMultiplier: 1.3 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    // pages build their content (and pin spacers) after Lenis measures, so measure again on every refresh
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
  }
  function scrollToEl(target, offset = 0) {
    const el = typeof target === "string" ? $(target) : target;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else el.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" });
  }

  /* ---------- small UI helpers ---------- */
  document.body.insertAdjacentHTML("beforeend", '<div class="toast" id="toast" role="status"></div>');
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  }
  function copyText(text) {
    if (navigator.clipboard) return navigator.clipboard.writeText(text).then(() => toast(T("Copied to clipboard")), () => toast(T("Couldn’t copy")));
    toast(T("Copy isn’t available here"));
  }
  function splitWords(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="w">${esc(w)}</span>`).join(" ");
    return $$(".w", el);
  }
  function splitChars(el) {
    const text = el.textContent;
    if (window.I18N && I18N.on) {
      el.innerHTML = text.trim().split(/\s+/).map((w) => `<span class="ch" style="display:inline-block">${esc(w)}</span>`).join(" ");
      return $$(".ch", el);
    }
    el.innerHTML = text.split(" ").map((word) =>
      `<span style="display:inline-block;white-space:nowrap">${[...word].map((c) => `<span class="ch">${esc(c)}</span>`).join("")}</span>`
    ).join(" ");
    return $$(".ch", el);
  }

  /**
   * A painting as an <img>. `group` makes it open in the viewer alongside
   * every other painting in the same group; `caption` adds context there.
   */
  function artImg(key, o = {}) {
    const a = ART[key];
    if (!a) return "";
    const lb = o.group ? ` data-lb="${key}" data-lb-group="${esc(o.group)}"${o.caption ? ` data-lb-caption="${esc(o.caption)}"` : ""}` : "";
    return `<img class="${o.cls || ""}" src="${a.src}" alt="${esc(a.title)} by ${esc(a.artist)}" ${o.eager ? "" : 'loading="lazy"'} decoding="async"${lb} onload="this.classList.add('loaded')" onerror="this.classList.add('broken')" />`;
  }
  const credit = (key) => { const a = ART[key]; return a ? `<i>${esc(a.title)}</i> — ${esc(a.artist)}, ${esc(a.year)}` : ""; };

  /* ---------- navigation (shared across pages) ---------- */
  const PAGES = [
    { href: "index.html", label: "The Story", id: "story" },
    { href: "apostles.html", label: "The Apostles", id: "apostles" },
    { href: "mary.html", label: "Mother Mary", id: "mary" },
    { href: "saints.html", label: "The Saints", id: "saints" },
    { href: "gallery.html", label: "The Gallery", id: "gallery" },
    { href: "index.html#people", label: "Every Life", id: "people" },
    { href: "index.html#candle", label: "Pray", id: "candle" }
  ];
  const page = document.body.dataset.page || "story";
  const nav = $("#nav");
  if (nav) {
    const links = PAGES.map((p) => `<a href="${p.href}" data-page-link="${p.id}" class="${p.id === page ? "current" : ""}">${T(p.label)}</a>`).join("");
    const lang = (window.I18N && I18N.lang) || "en";
    const langBtn = (id) => `<button class="lang-switch" id="${id}" type="button" data-lang="${lang}" aria-label="Language · භාෂාව" title="${lang === "si" ? "Switch to English" : "සිංහලෙන් කියවන්න"}"><span class="ls-opt" data-v="en">EN</span><span class="ls-opt" data-v="si">සිං</span><i class="ls-knob" aria-hidden="true"></i></button>`;
    nav.innerHTML = `
      <a class="nav-brand" href="index.html">
        <svg class="nav-cross" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 2h2.8v6.2h5.4V11h-5.4v11h-2.8V11H5.2V8.2h5.4z"/></svg>
        <span>${esc((window.SITE && SITE.name) || "Behold")}</span>
      </a>
      <nav class="nav-links" aria-label="Pages">${links}</nav>
      <div class="nav-actions">
        ${langBtn("langSwitch")}
        <button class="icon-btn" id="soundToggle" type="button" aria-pressed="false" aria-label="Toggle ambient sound">
          <svg class="snd-off" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M17 9l4 6M21 9l-4 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          <svg class="snd-on" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
        <button class="icon-btn nav-menu" id="menuToggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
      <div class="nav-progress"><i id="navProgress"></i></div>`;
    document.body.insertAdjacentHTML("afterbegin", `<div class="mobile-menu" id="mobileMenu">${links}<div class="mm-lang"><span>${T("Language")}</span>${langBtn("langSwitchM")}</div></div>`);
    $$(".lang-switch").forEach((b) => b.addEventListener("click", () => {
      b.dataset.lang = lang === "si" ? "en" : "si";
      window.I18N && I18N.switchTo(lang === "si" ? "en" : "si");
    }));

    // Same-page anchors scroll smoothly instead of jumping
    $$("a[href]", document).forEach((a) => a.addEventListener("click", (ev) => {
      const href = a.getAttribute("href");
      const [path, hash] = href.split("#");
      const samePage = hash && (!path || location.pathname.endsWith(path) || (path === "index.html" && /\/$/.test(location.pathname)));
      if (!samePage || !$("#" + hash)) return;
      ev.preventDefault();
      $("#mobileMenu").classList.remove("open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
      scrollToEl("#" + hash);
    }));
    $("#menuToggle").addEventListener("click", () => {
      const open = $("#mobileMenu").classList.toggle("open");
      $("#menuToggle").setAttribute("aria-expanded", String(open));
    });
    $("#soundToggle").addEventListener("click", () => {
      const on = window.Ambient.toggle();
      $("#soundToggle").setAttribute("aria-pressed", String(on));
      toast(on ? T("Ambient sound on") : T("Ambient sound off"));
    });
    if (HAS_GSAP) gsap.to("#navProgress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
    if (page !== "story") nav.classList.add("show");
  }
  $$("[data-art-bg]").forEach((el) => {
    const a = ART[el.dataset.artBg];
    if (a) ($(".jcard-bg", el) || el).style.backgroundImage = `url("${a.src}")`;
  });
  $$("[data-site-name]").forEach((el) => (el.textContent = (window.SITE && SITE.name) || "Behold"));
  $$("[data-site-dedication]").forEach((el) => (el.textContent = (window.SITE && SITE.dedication) || ""));
  $$("[data-site-tagline]").forEach((el) => (el.textContent = (window.SITE && SITE.tagline) || el.textContent));
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Arriving from another page with a #hash: land there once layout settles
  if (location.hash && page !== "story") {
    window.addEventListener("load", () => setTimeout(() => scrollToEl(location.hash), 300));
  }

  /* ---------- the viewer: tap any painting to see it large ---------- */
  const Lightbox = (function () {
    const root = h(`
      <div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="${T("Painting viewer")}" aria-hidden="true">
        <div class="lb-backdrop" data-lb-close></div>
        <div class="lb-top">
          <span class="lb-count" id="lbCount"></span>
          <div class="lb-tools">
            <button class="lb-btn" id="lbZoom" aria-label="Zoom"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 16l4 4M11 8v6M8 11h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
            <button class="lb-btn" data-lb-close aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
          </div>
        </div>
        <div class="lb-stage" id="lbStage"><img id="lbImg" alt="" draggable="false" /></div>
        <button class="lb-nav prev" id="lbPrev" aria-label="Previous painting"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <button class="lb-nav next" id="lbNext" aria-label="Next painting"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="lb-caption" id="lbCaption"></div>
        <div class="lb-strip" id="lbStrip"></div>
      </div>`);
    document.body.appendChild(root);
    const img = $("#lbImg", root), stage = $("#lbStage", root);
    let items = [], idx = 0, zoomed = false, groupName = "";

    function render(dir = 0) {
      const it = items[idx], a = ART[it.key];
      zoomed = false; root.classList.remove("zoomed"); img.style.transform = "";
      img.classList.remove("in"); img.style.setProperty("--dir", dir);
      img.src = a.src; img.alt = `${a.title} by ${a.artist}`;
      requestAnimationFrame(() => img.classList.add("in"));
      // swap in the larger file once it arrives
      if (a.full && a.full !== a.src) { const hi = new Image(); hi.onload = () => { if (items[idx] === it) img.src = a.full; }; hi.src = a.full; }
      $("#lbCaption", root).innerHTML = `
        <p class="lb-title">${esc(a.title)}</p>
        <p class="lb-meta">${esc(a.artist)} · ${esc(a.year)}</p>
        ${it.caption ? `<p class="lb-context">${esc(it.caption)}</p>` : ""}`;
      $("#lbCount", root).textContent = items.length > 1 ? `${idx + 1} / ${items.length}${groupName ? " · " + groupName : ""}` : groupName;
      $("#lbPrev", root).hidden = $("#lbNext", root).hidden = items.length < 2;
      $$(".lb-thumb", root).forEach((t, i) => t.classList.toggle("on", i === idx));
      const on = $(".lb-thumb.on", root);
      if (on) on.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      [idx - 1, idx + 1].forEach((j) => { const n = items[(j + items.length) % items.length]; if (n) new Image().src = ART[n.key].src; });
    }
    function open(list, start = 0, name = "") {
      items = list; idx = start; groupName = name;
      $("#lbStrip", root).innerHTML = items.length > 1 ? items.map((it, i) => `<button class="lb-thumb" data-i="${i}" aria-label="${esc(ART[it.key].title)}"><img src="${ART[it.key].src}" loading="lazy" alt="" /></button>`).join("") : "";
      root.classList.add("open"); root.setAttribute("aria-hidden", "false");
      if (lenis) lenis.stop();
      render();
    }
    function close() {
      root.classList.remove("open"); root.setAttribute("aria-hidden", "true");
      if (lenis) lenis.start();
    }
    const go = (d) => { if (items.length < 2) return; idx = (idx + d + items.length) % items.length; render(d); };
    function toggleZoom(e) {
      zoomed = !zoomed;
      root.classList.toggle("zoomed", zoomed);
      if (zoomed && e) pan(e); else img.style.transform = "";
    }
    function pan(e) {
      if (!zoomed) return;
      const r = stage.getBoundingClientRect();
      const x = clamp((e.clientX - r.left) / r.width, 0, 1), y = clamp((e.clientY - r.top) / r.height, 0, 1);
      img.style.transform = `translate(${(0.5 - x) * 110}%, ${(0.5 - y) * 110}%) scale(2.4)`;
    }

    $$("[data-lb-close]", root).forEach((b) => b.addEventListener("click", close));
    $("#lbPrev", root).addEventListener("click", () => go(-1));
    $("#lbNext", root).addEventListener("click", () => go(1));
    $("#lbZoom", root).addEventListener("click", () => toggleZoom(null));
    img.addEventListener("click", toggleZoom);
    stage.addEventListener("pointermove", pan);
    stage.addEventListener("click", (e) => { if (e.target === stage) close(); });
    $("#lbStrip", root).addEventListener("click", (e) => { const t = e.target.closest(".lb-thumb"); if (t) { const d = +t.dataset.i - idx; idx = +t.dataset.i; render(Math.sign(d)); } });
    document.addEventListener("keydown", (e) => {
      if (!root.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "+" || e.key === "=" || e.key === "z") toggleZoom(null);
    });
    let sx = 0, sy = 0;
    stage.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (zoomed) return;
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      else if (dy > 90) close();
    });

    // Any painting marked with data-lb opens here, with its group as the set
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-lb]");
      if (!el || root.contains(el)) return;
      e.preventDefault(); e.stopPropagation();
      const group = el.dataset.lbGroup;
      const seen = new Set(), list = [];
      $$(`[data-lb-group="${CSS.escape(group)}"]`).forEach((n) => {
        if (seen.has(n.dataset.lb)) return;
        seen.add(n.dataset.lb);
        list.push({ key: n.dataset.lb, caption: n.dataset.lbCaption || "" });
      });
      const start = Math.max(0, list.findIndex((x) => x.key === el.dataset.lb));
      open(list, start, el.dataset.lbName || (el.closest("[data-lb-name]") || {}).dataset?.lbName || "");
    }, true);

    return { open, close };
  })();

  /* ---------- pinned scenes that dissolve in and out of the page ---------- */
  /**
   * Gives a pinned section a soft entrance and exit: a veil in the page's
   * background colour lifts while the section scrolls into view and settles
   * back over it at the end of its timeline, so there are no hard edges.
   */
  function veil(section, veilEl, tl, fadeOut = 0.14) {
    if (!HAS_GSAP || REDUCED || !veilEl) return;
    gsap.fromTo(veilEl, { opacity: 1 }, { opacity: 0, ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "top top", scrub: true } });
    if (tl) {
      const d = tl.duration();
      tl.fromTo(veilEl, { opacity: 0 }, { opacity: 1, duration: d * fadeOut, ease: "power1.in", immediateRender: false }, d);
    }
  }

  /**
   * Scroll triggers are created by feature, not in page order. Pinned scenes add
   * space that everything below them must account for, so measure in document
   * order: a trigger sorts by its end element if it has one, pins before the rest.
   */
  function sortTriggers() {
    if (!HAS_GSAP) return;
    const order = new Map();
    let i = 0;
    document.querySelectorAll("*").forEach((el) => order.set(el, i++));
    const el = (v) => (typeof v === "string" ? document.querySelector(v) : v);
    const key = (st) => {
      const node = st.vars.endTrigger ? el(st.vars.endTrigger) : st.trigger;
      const base = node && order.has(node) ? order.get(node) : 1e9;
      return base * 2 + (st.pin ? 0 : 1);
    };
    // ScrollTrigger re-sorts by refreshPriority on every refresh, so encode the order there
    const list = ScrollTrigger.getAll().sort((a, b) => key(a) - key(b));
    list.forEach((st, rank) => { st.vars.refreshPriority = list.length - rank; });
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh());
    settleLanguage();
  }
  /** After a language switch, wait for fonts and layout, then lift the veil where the reader was. */
  function settleLanguage() {
    if (!window.I18N || !I18N.resume) return;
    const go = () => { if (HAS_GSAP) ScrollTrigger.refresh(); I18N.settle(); };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(go, 120));
  }

  /* ---------- dotted maps (land painted once, routes drawn as vectors) ---------- */
  const landCache = {};
  function project(key, lon, lat) {
    const m = window.MAPS[key];
    return [(lon - m.lon0) * m.cos * m.k, (m.lat1 - lat) * m.k];
  }
  function landImage(key, color) {
    const id = key + color;
    if (landCache[id]) return landCache[id];
    const m = window.MAPS[key], s = 2;
    const c = document.createElement("canvas");
    c.width = Math.ceil(m.w * s); c.height = Math.ceil(m.h * s);
    const g = c.getContext("2d"), r = m.step * m.k * 0.26 * s;
    g.fillStyle = color;
    m.dots.split(" ").forEach((p) => { const [x, y] = p.split(","); g.beginPath(); g.arc(x * s, y * s, r, 0, 6.2832); g.fill(); });
    return (landCache[id] = c.toDataURL("image/png"));
  }
  /** Smooth path through [x, y] points (Catmull-Rom as cubic Béziers). */
  function smoothPath(pts) {
    if (pts.length < 2) return "";
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }
  /**
   * An SVG map. `inner` is extra SVG drawn over the land; `view` optionally
   * crops to [x, y, w, h] in map units.
   */
  function dotMap(key, inner = "", o = {}) {
    const m = window.MAPS[key];
    const vb = o.view ? o.view.map((n) => n.toFixed(1)).join(" ") : `0 0 ${m.w} ${m.h}`;
    return `<svg class="dotmap ${o.cls || ""}" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(o.label || "Map")}">
      <image href="${landImage(key, o.color || "rgba(255,255,255,.16)")}" x="0" y="0" width="${m.w}" height="${m.h}" />
      ${inner}</svg>`;
  }
  /** A crop of the map framing some points, with padding, at the map's aspect ratio. */
  function fitView(key, pts, padding = 40, minW = 160) {
    const m = window.MAPS[key];
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    let x0 = Math.min(...xs) - padding, x1 = Math.max(...xs) + padding, y0 = Math.min(...ys) - padding, y1 = Math.max(...ys) + padding;
    let w = Math.max(minW, x1 - x0), hgt = y1 - y0;
    const ratio = 16 / 10;
    if (w / hgt > ratio) hgt = w / ratio; else w = hgt * ratio;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    w = Math.min(w, m.w); hgt = Math.min(hgt, m.h);
    return [clamp(cx - w / 2, 0, m.w - w), clamp(cy - hgt / 2, 0, m.h - hgt), w, hgt];
  }

  window.Core = { $, $$, h, esc, clamp, lerp, smooth, pad, REDUCED, HAS_GSAP, get lenis() { return lenis; }, scrollToEl, toast, copyText, splitWords, splitChars, artImg, credit, Lightbox, veil, sortTriggers, settleLanguage, project, dotMap, smoothPath, fitView };
})();
