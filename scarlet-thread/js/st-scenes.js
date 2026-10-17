/* ==========================================================================
   The Scarlet Thread — the four ways a scene can be staged, and the title
   card that opens each age.
     age     · the chapter title, in front of a sculpture of light
     full    · a painting that opens like a window and fills the screen
     plate   · a painting that turns toward you in space, words beside it
     portal  · a painting seen through an arch that opens like doors
     word    · words alone, lit one at a time
   ========================================================================== */
(function () {
  "use strict";
  const { $, h, esc, css, lerp, clamp, ease, words, copyHTML, imgTag, creditHTML, linkHTML } = ST;
  const NUM = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"];

  /* ---------- the title card of each age ---------- */
  ST.type("age", {
    build(it) {
      const a = it.age, first = it.ai === 0;
      return h(`
        <div class="age${first ? " first" : ""}">
          <div class="age-n" aria-hidden="true">${a.n}</div>
          <div class="age-in">
            <p class="age-k rv"><span>Chapter ${NUM[it.ai]}</span><i></i><span>${esc(a.s)}</span></p>
            <h2 class="age-t">${words(a.t)}</h2>
            <p class="age-s rv">${esc(a.books)} <i>·</i> ${esc(a.yl)}</p>
            <div class="age-rule rv"><i></i></div>
            <blockquote class="age-v rv"><p>“${esc(a.v)}”</p><cite>${esc(a.r)}</cite></blockquote>
            <p class="age-x rv">${esc(a.x)}</p>
            ${a.behold ? linkHTML(a.behold) : ""}
            ${first ? `<p class="age-hint rv"><span>Scroll slowly</span><i></i><span>Watch for the scarlet thread</span></p>` : ""}
          </div>
        </div>`);
    },
    init(it) { it.n = $(".age-n", it.el); it.inner = $(".age-in", it.el); },
    update(it, f) {
      const { e, uMid: m, uOut: o } = f;
      css(it.n, "transform", `translate3d(-50%, calc(-50% + ${((0.5 - m) * 10).toFixed(2)}vh), 0) scale(${(lerp(0.7, 1, e) + o * 0.9).toFixed(3)})`);
      css(it.n, "opacity", (e * (1 - o)).toFixed(3));
      css(it.inner, "transform", `translate3d(0, ${(lerp(7, 0, e) - m * 5 - o * 6).toFixed(2)}vh, 0) scale(${(lerp(1.05, 1, e) - o * 0.07).toFixed(4)})`);
      css(it.inner, "opacity", clamp(1 - o * 1.4).toFixed(3));
      css(it.inner, "filter", o > 0.01 ? `blur(${(o * 10).toFixed(1)}px)` : "none");
    },
    gl(it, f) { return { opacity: 1, scale: lerp(0.82, 1.02, f.uMid) + f.uOut * 0.3, y: 0.25, thread: 0.9, threadY: -1.9 }; }
  });

  /* ---------- a painting that fills the screen ---------- */
  ST.type("full", {
    build(it) {
      const s = it.s;
      return h(`
        <div class="full">
          <div class="fr"><div class="fr-in">${imgTag(s.art, { big: true })}</div><div class="shade"></div></div>
          ${copyHTML(s)}
          <p class="cr" data-credit="${s.art}">${creditHTML(s.art)}</p>
          <div class="blk"></div>
        </div>`);
    },
    init(it) {
      it.fr = $(".fr", it.el); it.im = $(".im", it.el); it.shade = $(".shade", it.el); it.blk = $(".blk", it.el);
      if (it.s.pos) it.im.style.objectPosition = it.s.pos;
    },
    update(it, f) {
      const { e, uMid: m, uOut: o, mobile } = f;
      const iy = lerp(mobile ? 20 : 15, 0, e), ix = lerp(mobile ? 9 : 25, 0, e), r = lerp(28, 0, e);
      css(it.fr, "clipPath", `inset(${iy.toFixed(2)}% ${ix.toFixed(2)}% round ${r.toFixed(1)}px)`);
      css(it.fr, "transform", `translate3d(0, ${lerp(5, 0, e).toFixed(2)}vh, 0) scale(${lerp(0.93, 1, e).toFixed(4)})`);
      css(it.im, "transform", `translate3d(${((0.5 - m) * 3).toFixed(2)}%, 0, 0) scale(${(1.34 - 0.22 * e - 0.06 * m + 0.2 * o).toFixed(4)})`);
      css(it.shade, "opacity", e.toFixed(3));
      css(it.blk, "opacity", (o * 0.92).toFixed(3));
    },
    gl() { return {}; }
  });

  /* ---------- a painting that turns toward you ---------- */
  ST.type("plate", {
    build(it) {
      const s = it.s, side = s.side || (it.i % 2 ? "l" : "r");
      it.sgn = side === "l" ? 1 : -1;
      return h(`
        <div class="plate side-${side}">
          <div class="pl-stage">
            <div class="pl-glow">${imgTag(s.art, { cls: "im-glow" })}</div>
            <figure class="pl"><div class="pl-in">${imgTag(s.art)}</div></figure>
            <p class="cr" data-credit="${s.art}">${creditHTML(s.art)}</p>
          </div>
          ${copyHTML(s)}
        </div>`);
    },
    init(it) { it.pl = $(".pl", it.el); it.im = $(".pl .im", it.el); it.glow = $(".pl-glow", it.el); if (it.s.pos) it.im.style.objectPosition = it.s.pos; },
    update(it, f) {
      const { e, uMid: m, uOut: o, mobile } = f, g = it.sgn, k = mobile ? 0.45 : 1;
      const ry = g * (lerp(34, 10, e) - 16 * m - 20 * o) * k;
      const tz = lerp(-1100, 0, e) + m * 120 + o * 900;
      const tx = g * lerp(-10, 0, e) * k;
      const ty = lerp(7, 0, e) - m * 3;
      css(it.pl, "transform", `translate3d(${tx.toFixed(2)}vw, ${ty.toFixed(2)}vh, ${tz.toFixed(1)}px) rotateY(${ry.toFixed(2)}deg)`);
      css(it.pl, "opacity", (clamp(e * 1.25) * f.fo).toFixed(3));
      css(it.im, "transform", `scale(${(1.15 - 0.09 * m).toFixed(4)})`);
      css(it.glow, "opacity", (0.6 * e * f.fo).toFixed(3));
      css(it.glow, "transform", `translate3d(${tx.toFixed(2)}vw, ${ty.toFixed(2)}vh, 0) scale(${(1.1 + o * 0.3).toFixed(3)})`);
    },
    gl() { return {}; }
  });

  /* ---------- a painting through an arch ---------- */
  ST.type("portal", {
    build(it) {
      const s = it.s;
      return h(`
        <div class="portal${it.i % 2 ? " flip" : ""}">
          <div class="po-stage">
            <div class="po-halo"></div>
            <div class="po"><div class="po-in">${imgTag(s.art)}</div></div>
            <p class="cr" data-credit="${s.art}">${creditHTML(s.art)}</p>
          </div>
          ${copyHTML(s)}
        </div>`);
    },
    init(it) { it.po = $(".po", it.el); it.im = $(".po .im", it.el); it.halo = $(".po-halo", it.el); it.stage = $(".po-stage", it.el); if (it.s.pos) it.im.style.objectPosition = it.s.pos; },
    update(it, f) {
      const { e, uMid: m, uOut: o } = f;
      const open = lerp(50, 0, ease(f.uIn * 1.1));
      css(it.po, "clipPath", `inset(0% ${open.toFixed(2)}% 0% ${open.toFixed(2)}% round 999px 999px 0 0)`);
      css(it.im, "transform", `translate3d(0, ${((0.5 - m) * 6).toFixed(2)}%, 0) scale(${(1.5 - 0.32 * e - 0.08 * m + 0.25 * o).toFixed(4)})`);
      css(it.stage, "transform", `translate3d(0, ${(lerp(6, 0, e) - m * 3).toFixed(2)}vh, ${(lerp(-500, 0, e) + o * 700).toFixed(1)}px)`);
      css(it.stage, "opacity", f.fo.toFixed(3));
      css(it.halo, "opacity", (e * (1 - o) * (0.7 + 0.3 * Math.sin(m * 6))).toFixed(3));
    },
    gl() { return {}; }
  });

  /* ---------- words alone ---------- */
  ST.type("word", {
    build(it) {
      const s = it.s;
      const qw = s.q ? `<blockquote class="qw"><p>${esc(s.q).split(/\s+/).map((w) => `<span>${w}</span>`).join(" ")}</p><cite class="rv">${esc(s.r)}</cite></blockquote>` : "";
      return h(`<div class="word">${copyHTML(s, { noQuote: true, after: qw, cls: "center" })}</div>`);
    },
    init(it) { it.ws = Array.from(it.el.querySelectorAll(".qw span")); it.copy = $(".copy", it.el); it.lit = -1; },
    update(it, f) {
      const n = it.ws.length;
      const lit = it.isIn ? Math.floor(clamp(f.uMid * 1.35 + 0.08) * n) : -1;
      if (lit !== it.lit) { it.ws.forEach((w, i) => w.classList.toggle("on", i < lit)); it.lit = lit; }
      css(it.copy, "transform", `translate3d(0, ${(lerp(5, 0, f.e) - f.uMid * 4 - f.uOut * 6).toFixed(2)}vh, ${(f.uOut * 260).toFixed(1)}px) scale(${lerp(0.96, 1, f.e).toFixed(4)})`);
    },
    gl(it, f) { return { opacity: 1, scale: lerp(0.85, 1, f.uMid) + f.uOut * 0.25, thread: 0.8 }; }
  });
})();
