/* ==========================================================================
   Behold — the Saints
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, esc, pad, REDUCED, HAS_GSAP, scrollToEl, artImg, credit, veil, smoothPath } = Core;
  const ANIM = HAS_GSAP && !REDUCED;
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
  const BY_ID = Object.fromEntries(SAINTS.map((s) => [s.id, s]));
  const INDEX = Object.fromEntries(SAINTS.map((s, i) => [s.id, i]));
  const P = (name) => (window.I18N ? I18N.P(name) : name);
  /** A small version of a painting, for halos and medallions */
  const thumb = (key) => (ART[key] ? ART[key].thumb || ART[key].src : "");
  const face = (key, alt = "", pos = "") => `<img src="${thumb(key)}" alt="${esc(alt)}" loading="lazy" decoding="async"${pos ? ` style="object-position:${pos}"` : ""} onerror="this.classList.add('broken')" />`;
  /** The saint's own portrait, small, framed on their face */
  const saintFace = (s) => face(s.portrait, s.full, (s.pos || "50% 20%") + (s.zoom ? `;transform:scale(${s.zoom})` : ""));
  /** The same focus point, as an SVG alignment */
  const svgAlign = (pos = "50% 20%") => {
    const [x, y] = pos.split(" ").map(parseFloat);
    return `x${x < 35 ? "Min" : x > 65 ? "Max" : "Mid"}Y${y < 35 ? "Min" : y > 65 ? "Max" : "Mid"}`;
  };
  const ordinal = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th");
  const century = (n) => (I18N.on ? T("{n} century", { n }) : `${ordinal(n)} century`);
  const quoteBy = (q) => (q.by === "Scripture" ? T("Scripture") : q.by);

  /* Line icons: an emblem for each saint */
  const ICONS = {
    lily: '<path d="M12 21.5V10"/><path d="M12 10c-3.2 0-5.4-2.3-5.4-5.6 2.6 0 4.3 1.2 5.4 3.2 1.1-2 2.8-3.2 5.4-3.2 0 3.3-2.2 5.6-5.4 5.6z"/><path d="M12 16.5c-2.2-2-4.8-2.3-6.4-1.2M12 16.5c2.2-2 4.8-2.3 6.4-1.2"/>',
    arrows: '<path d="M4 12.5l8-8M8.6 4.5H12v3.4"/><path d="M7 17l10-10M13.6 7H17v3.4"/><path d="M11.5 20.5l8-8M16.1 12.5h3.4v3.4"/>',
    coins: '<circle cx="8" cy="15.5" r="4"/><circle cx="16" cy="15.5" r="4"/><circle cx="12" cy="8" r="4"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-7.5-10.2A4.2 4.2 0 0112 7.6a4.2 4.2 0 017.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"/><path d="M12 7.6c-.9-1.9-.2-3.9 1.4-5.1.6 1.7.2 3.5-1.4 5.1z"/>',
    tau: '<path d="M4.5 5h15M12 5v16.5"/><path d="M4.5 5v2.4M19.5 5v2.4"/>',
    book: '<path d="M3.5 5.5c2.8-1.1 5.8-1.1 8.5.6 2.7-1.7 5.7-1.7 8.5-.6v13.3c-2.8-1.1-5.8-1.1-8.5.6-2.7-1.7-5.7-1.7-8.5-.6z"/><path d="M12 6.1v13.3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    thorns: '<ellipse cx="12" cy="12" rx="8.5" ry="4.6"/><path d="M4.6 9l-1.6-1.4M8.2 7.6L7.6 5.6M12 7.4V5.3M15.8 7.6l.6-2M19.4 9l1.6-1.4M6 15.6l-1.4 1.7M10 16.6l-.4 2.1M14 16.6l.4 2.1M18 15.6l1.4 1.7"/>',
    banner: '<path d="M6 21.5V2.5"/><path d="M6 3.5h12.5L15.4 7.8l3.1 4.2H6"/>',
    axe: '<path d="M6 21.5L14.5 5"/><path d="M12.8 3.5c3.4-.9 7.2 1.2 7.2 5.2-3.2.2-6-1.1-7.8-3.1z"/>',
    flame: '<path d="M12 21.5c-4 0-6.5-2.7-6.5-6 0-4.1 3.6-5.6 4.1-10.2 3 2.1 4.2 4.3 4 6.6 1-.6 1.8-1.7 2-3.1 1.5 1.6 2.9 3.9 2.9 6.7 0 3.3-2.5 6-6.5 6z"/>',
    ship: '<path d="M3 16.5h18l-2.6 4.2H5.6z"/><path d="M12 16.5V2.8"/><path d="M12 4l6.3 9.6H12"/><path d="M12 6.4l-5 7.2h5"/>',
    quill: '<path d="M20.5 3c-6.4 1-11.4 6-13.6 13.4L5 21"/><path d="M20.5 3c-1 5.4-4.2 9.2-9.6 11.2"/><path d="M8.3 12.6l3 3"/>',
    rain: '<path d="M7 14.5a4 4 0 01-.6-7.9 5.6 5.6 0 0110.8-.4 3.6 3.6 0 01.8 7.1"/><path d="M8.5 17.5l-1 2.8M12.5 16.5l-1 3.5M16.5 16.5l-1 2.8"/>',
    hands: '<path d="M2.5 12.5l4.2-1.2 4.2 3h3.4a1.6 1.6 0 010 3.2H10"/><path d="M2.5 18.8l4.3-1.3 6.3 2.1 8.1-5.2a1.6 1.6 0 00-1.9-2.6l-4.4 2.7"/><path d="M12 8.6c-1.6-1.3-3.4-2.7-3.4-4.3a1.9 1.9 0 013.4-1.1 1.9 1.9 0 013.4 1.1c0 1.6-1.8 3-3.4 4.3z"/>',
    rose: '<path d="M12 21.5v-8"/><path d="M12 13.5c-3.1 0-5.2-2.1-5.2-4.6 0-2 1.5-3.6 3.1-3.6 1 0 1.7.5 2.1 1.1.4-.6 1.1-1.1 2.1-1.1 1.6 0 3.1 1.6 3.1 3.6 0 2.5-2.1 4.6-5.2 4.6z"/><path d="M12 17.5c-2-1.6-4.2-1.6-5.3-.5M12 17.5c2-1.6 4.2-1.6 5.3-.5"/>',
    crowns: '<path d="M2.5 10.5l1.6-6 3.3 2.7 2.1-3.7 2.1 3.7 3.3-2.7"/><path d="M2.5 10.5h12.4"/><path d="M9.1 20.5l1.6-6 3.3 2.7 2.1-3.7 2.1 3.7 3.3-2.7-1.6 6z"/>',
    bowl: '<path d="M4 10.5h16l-1.6 7.2a3 3 0 01-2.9 2.3H8.5a3 3 0 01-2.9-2.3z"/><path d="M9 3.5c0 1.4 1.2 1.6 1.2 3M13.6 3.5c0 1.4 1.2 1.6 1.2 3"/>',
    ferula: '<path d="M12 2.5v19"/><path d="M7.5 8h9"/><path d="M9.5 21.5h5"/>',
    cross: '<path d="M12 2.5v19M7 8h10"/>'
  };
  const icon = (name, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.cross}</svg>`;
  const CANDLE = '<svg class="t-candle" viewBox="0 0 34 44" aria-hidden="true"><g class="flame"><path d="M17 3c3.4 4.2 5.4 7 5.4 10a5.4 5.4 0 01-10.8 0c0-3 2-5.8 5.4-10z" fill="#ffb84d"/><path d="M17 8.6c1.8 2.4 2.8 4 2.8 5.6a2.8 2.8 0 01-5.6 0c0-1.6 1-3.2 2.8-5.6z" fill="#fff4cf"/></g><path d="M17 19.4v2.2" stroke="#3a2c1a" stroke-width="1.2"/><rect x="12.4" y="21.4" width="9.2" height="20" rx="2" fill="#f3e6cf"/></svg>';

  /* ------------------------------------------------------------------------
     Opening: a rose window, every pane a saint, the light behind them Christ's
     ------------------------------------------------------------------------ */
  const ROSE = ["francis", "therese", "augustine", "joan", "vaz", "mteresa", "anthony", "catherine", "xavier", "teresa", "nicholas", "aquinas"];
  (function rose() {
    const C = 500, N = ROSE.length;
    const r0 = 172, r1 = 440, w0 = 62, w1 = 150, archH = 116;
    const yBot = C - r0, yApex = C - r1, ySpring = yApex + archH;
    const petal = `M${C - w0 / 2},${yBot - w0 * 0.4} Q${C - w0 / 2},${yBot} ${C},${yBot} Q${C + w0 / 2},${yBot} ${C + w0 / 2},${yBot - w0 * 0.4} L${C + w1 / 2},${ySpring} C${C + w1 / 2},${ySpring - archH * 0.62} ${C + w1 * 0.1},${yApex + archH * 0.1} ${C},${yApex} C${C - w1 * 0.1},${yApex + archH * 0.1} ${C - w1 / 2},${ySpring - archH * 0.62} ${C - w1 / 2},${ySpring} Z`;
    const cy = (yBot + yApex) / 2, side = Math.ceil(Math.hypot(r1 - r0, w1)) + 8;
    const sq = `x="${C - side / 2}" y="${cy - side / 2}" width="${side}" height="${side}"`;
    const at = (deg, r) => [C + Math.sin((deg * Math.PI) / 180) * r, C - Math.cos((deg * Math.PI) / 180) * r];
    const jewel = (x, y, r, color, cls = "jewel") => `<g class="${cls}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${color}" /><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="url(#shine)" /><circle class="lead" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" stroke-width="4" /></g>`;

    const petals = ROSE.map((id, i) => {
      const s = BY_ID[id], a = (360 / N) * i;
      return `<g class="petal" data-id="${id}" transform="rotate(${a} ${C} ${C})">
        <g clip-path="url(#petalClip)">
          <rect ${sq} fill="${s.color}" />
          <image href="${thumb(s.portrait)}" ${sq} preserveAspectRatio="${svgAlign(s.pos)} slice" transform="rotate(${-a} ${C} ${cy})" />
          <rect class="glass" ${sq} fill="${s.color}" opacity=".55" />
        </g>
        <path class="lead" d="${petal}" stroke-width="8" />
        <path d="${petal}" fill="none" stroke="rgba(255,226,170,.28)" stroke-width="1.4" />
        <path class="petal-hit" d="${petal}" tabindex="0" role="link" aria-label="${esc(s.full)}"><title>${esc(s.full)}</title></path>
      </g>`;
    }).join("");
    const colors = ROSE.map((id) => BY_ID[id].color);
    let between = "", inner = "", outer = "";
    for (let i = 0; i < N; i++) {
      const a = (360 / N) * (i + 0.5);
      const [bx, by] = at(a, 392), [sx, sy] = at(a, 214), [ix, iy] = at((360 / N) * i, 142);
      between += jewel(bx, by, 25, colors[(i + 3) % N]) + jewel(sx, sy, 13, colors[(i + 6) % N]);
      inner += jewel(ix, iy, 15, colors[(i + 1) % N]);
    }
    for (let i = 0; i < 24; i++) { const [x, y] = at(15 * i + 7.5, 473); outer += jewel(x, y, 12, i % 2 ? "#3b5fd9" : "#c4314b"); }
    const spokes = Array.from({ length: N }, (_, i) => { const a = (360 / N) * (i + 0.5); const [x1, y1] = at(a, 112), [x2, y2] = at(a, 450); return `<line class="lead" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="5" />`; }).join("");
    $("#rose").innerHTML = `
      <defs>
        <clipPath id="petalClip"><path d="${petal}" /></clipPath>
        <radialGradient id="coreG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fffef8" /><stop offset=".4" stop-color="#ffe8ad" /><stop offset=".78" stop-color="#e6a446" /><stop offset="1" stop-color="#8f571a" /></radialGradient>
        <radialGradient id="shine" cx="34%" cy="30%" r="70%"><stop offset="0" stop-color="#fff" stop-opacity=".8" /><stop offset=".45" stop-color="#fff" stop-opacity=".08" /><stop offset="1" stop-color="#000" stop-opacity=".35" /></radialGradient>
        <radialGradient id="warm" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff2cc" stop-opacity=".55" /><stop offset=".45" stop-color="#ffcf80" stop-opacity=".16" /><stop offset="1" stop-color="#ffb060" stop-opacity="0" /></radialGradient>
        <radialGradient id="stoneG" cx="50%" cy="50%" r="50%"><stop offset=".2" stop-color="#2a1d2c" /><stop offset="1" stop-color="#120d17" /></radialGradient>
      </defs>
      <circle cx="${C}" cy="${C}" r="496" fill="url(#stoneG)" />
      <g class="ring-outer">${outer}</g>
      <circle class="lead" cx="${C}" cy="${C}" r="452" stroke-width="6" /><circle class="lead" cx="${C}" cy="${C}" r="494" stroke-width="7" />
      ${spokes}
      ${petals}
      ${between}
      <g class="ring-inner">${inner}</g>
      <g class="core">
        <circle cx="${C}" cy="${C}" r="110" fill="url(#coreG)" />
        <path d="M${C - 10},${C - 78} h20 v58 h58 v20 h-58 v58 h-20 v-58 h-58 v-20 h58 z" fill="#fffdf4" opacity=".92" />
        <circle class="lead" cx="${C}" cy="${C}" r="110" stroke-width="7" />
      </g>
      <circle cx="${C}" cy="${C}" r="500" fill="url(#warm)" pointer-events="none" style="mix-blend-mode:screen" />`;

    $$("#rose .petal-hit").forEach((p) => {
      const go = () => scrollToEl(`#saint-${p.parentNode.dataset.id}`, -20);
      p.addEventListener("click", go);
      p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
    const panes = $$("#rose .petal");
    if (!ANIM) { panes.forEach((p) => p.classList.add("lit")); return; }
    panes.forEach((p, i) => setTimeout(() => p.classList.add("lit"), 500 + i * 150));
  })();

  // Dust in the light: motes drifting upwards through the window's glow
  (function motes() {
    const c = $("#sxMotes"), ctx = c.getContext("2d");
    let W = 0, H = 0, dpr = 1, pts = [], visible = true;
    const spawn = (anywhere) => ({
      x: W * (0.2 + Math.random() * 0.6), y: anywhere ? Math.random() * H : H + 10,
      r: (Math.random() * 1.5 + 0.4) * dpr, v: (Math.random() * 0.22 + 0.05) * dpr, p: Math.random() * 6.28
    });
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      pts = Array.from({ length: 70 }, () => spawn(true));
    };
    resize(); window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    if (REDUCED) return;
    (function frame(t) {
      requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#ffe3a8";
      for (const s of pts) {
        s.y -= s.v; s.x += Math.sin(t / 2200 + s.p) * 0.18 * dpr;
        if (s.y < -10) Object.assign(s, spawn(false));
        const edge = 1 - Math.min(1, Math.abs(s.x / W - 0.5) * 2.2);
        ctx.globalAlpha = (0.2 + 0.65 * Math.abs(Math.sin(t / 1400 + s.p))) * edge;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      }
    })(0);
  })();

  /* ------------------------------------------------------------------------
     Twenty centuries: a road across time
     ------------------------------------------------------------------------ */
  (function timeline() {
    const cent = (y) => Math.floor(y / 100) + 1;
    let html = `<div class="st-elsewhere"><a href="mary.html"><b>${T("Before them all")}</b>${T("Mary, the Apostles and the first martyrs have pages of their own.")}</a></div>`;
    let last = 0, up = true;
    SAINTS.forEach((s, i) => {
      const c = cent(s.year);
      if (last && c - last > 3) html += `<div class="st-gap"><p>${T("Seven centuries pass.")}<small>${esc(SAINT_ERAS[1].also)}</small></p></div>`;
      if (c !== last) html += `<div class="st-cent"><b>${ROMAN[c - 1]}</b><span>${century(c)}</span></div>`;
      last = c;
      html += `
        <div class="st-item ${up ? "up" : "down"}" style="--sc:${s.color}">
          <span class="st-stem"></span><span class="st-dot"></span>
          <a href="#saint-${s.id}">
            <span class="st-face">${saintFace(s)}</span>
            <span class="st-year">${esc(s.lived)}</span>
            <span class="st-name">${esc(s.name)}</span>
            <span class="st-title">${esc(s.title)}</span>
          </a>
        </div>`;
      up = !up;
      if (i === SAINTS.length - 1) html += `<div class="st-now"><a href="#draw"><span class="st-face"><span>+</span></span><span class="st-year">${T("Today")}</span><span class="st-name">${T("The next saint could be you.")}</span></a></div>`;
    });
    $("#stTrack").innerHTML = html;
  })();

  /* ------------------------------------------------------------------------
     Eras and chapters
     ------------------------------------------------------------------------ */
  function eraBand(era, list) {
    return `
      <section class="era" id="era-${era.id}">
        <div class="container">
          <span class="era-n" aria-hidden="true">${era.n}</span>
          <p class="era-span">${esc(era.span)}</p>
          <h2 class="era-title">${esc(era.title)}</h2>
          <p class="era-text">${esc(era.text)}</p>
          <div class="era-faces">${list.map((s) => `<a class="era-face" href="#saint-${s.id}" style="--sc:${s.color}"><span class="ef-img">${saintFace(s)}</span><b>${esc(s.name)}</b></a>`).join("")}</div>
          <p class="era-also">${esc(era.also)}</p>
        </div>
      </section>`;
  }

  function chapter(s) {
    const i = INDEX[s.id], group = `saint-${s.id}`;
    const src = { Tradition: T("Early tradition"), Scripture: T("Recorded in Scripture"), History: T("Historical record") }[s.end.source];
    const scenes = s.scenes.filter((k) => ART[k]);
    return `
    <section class="saint" id="saint-${s.id}" style="--sc:${s.color}" data-saint="${s.id}" data-lb-name="${esc(s.full)}">
      <div class="s-grid">
        <div class="s-visual">
          <div class="s-arch">
            <span class="s-halo"></span>
            <div class="s-arch-in">
              <figure class="s-portrait zoomable" style="--pos:${s.pos || "50% 20%"}" data-zoom="${s.zoom || 1}">${artImg(s.portrait, { group, caption: s.full })}</figure>
              ${s.endImg ? `<figure class="s-endimg zoomable" style="--pos:${s.endPos || "50% 30%"}" data-zoom="1">${artImg(s.endImg, { group, caption: `${s.name} — ${s.end.how}` })}</figure>` : ""}
            </div>
            <span class="s-no">${pad(i + 1, 2)}</span>
            <span class="s-badge">${icon(s.icon)}</span>
          </div>
          <p class="s-credit" data-portrait>${credit(s.portrait)}</p>
          ${s.endImg ? `<p class="s-credit" data-end>${credit(s.endImg)}</p>` : ""}
        </div>
        <div class="s-content">
          <header class="s-head">
            <p class="s-num">${pad(i + 1, 2)} / ${SAINTS.length} · ${esc(s.lived)}</p>
            <h2 class="s-name">${esc(s.name)}</h2>
            <p class="s-title">${esc(s.title)}</p>
            <dl class="s-facts">
              <div><dt>${T("Lived")}</dt><dd>${esc(s.lived)}</dd></div>
              <div><dt>${T("From")}</dt><dd>${esc(s.from)}</dd></div>
              <div><dt>${T("Feast day")}</dt><dd>${esc(s.feast)}</dd></div>
              <div><dt>${T("Emblem")}</dt><dd>${icon(s.icon)}</dd></div>
              <div class="wide"><dt>${T("Patron of")}</dt><dd>${esc(s.patron)}</dd></div>
            </dl>
          </header>

          <div class="s-block s-story reveal-up"><h3>${T("Their story")}</h3>${s.story.map((p) => `<p>${esc(p)}</p>`).join("")}</div>

          <div class="s-block reveal-up"><h3>${T("Moments")}</h3>
            <ol class="s-moments">${s.moments.map(([when, what, ref]) => `<li><span class="m-when">${esc(when)}</span><div class="m-what"><p>${esc(what)}</p>${ref ? `<cite>${esc(ref)}</cite>` : ""}</div></li>`).join("")}</ol>
          </div>

          <blockquote class="s-quote reveal-up">“${esc(s.quote.t)}”<cite>${esc(quoteBy(s.quote))} · ${esc(s.quote.r)}</cite></blockquote>

          <div class="s-block reveal-up" data-end-trigger><h3>${T("How it ended")}</h3>
            <div class="end-card">
              <span class="ec-icon">${icon(s.icon)}</span>
              <div class="ec-main">
                <b>${esc(s.end.how)}</b>
                <span>${esc(s.end.where)} · ${esc(s.end.when)}</span>
                <em class="ec-src ${s.end.source.toLowerCase()}">${src}</em>
              </div>
              <p>${esc(s.end.text)}</p>
            </div>
          </div>

          <div class="s-lessons">
            <p class="sl-eyebrow">${T("What we learn")}</p>
            <h3 class="sl-title">${T("Three lessons from {name}", { name: esc(s.name) })}</h3>
            <div class="lesson-grid">${s.lessons.map((l, k) => `<div class="lesson"><span class="lesson-n">${ROMAN[k]}</span><b>${esc(l.t)}</b><p>${esc(l.d)}</p></div>`).join("")}</div>
            <div class="s-today">${CANDLE}<div><b>${T("Live it today")}</b><p>${esc(s.practice)}</p></div></div>
          </div>

          ${scenes.length ? `<div class="s-scenes n${Math.min(3, scenes.length)} reveal-up">${scenes.map((k) => `<figure class="zoomable">${artImg(k, { group, caption: s.full })}<figcaption>${credit(k)}</figcaption></figure>`).join("")}</div>` : ""}
          ${s.lanka ? `<a class="s-lanka-link" href="#lanka">${T("Follow his road across Sri Lanka")} <span aria-hidden="true">↓</span></a>` : ""}
        </div>
      </div>
    </section>`;
  }

  $("#chapters").innerHTML = SAINT_ERAS.map((era) => {
    const list = SAINTS.filter((s) => s.era === era.id);
    return eraBand(era, list) + list.map(chapter).join("");
  }).join("");
  $$(".s-arch-in img").forEach((img) => { if (img.complete && img.naturalWidth) img.classList.add("loaded"); });

  // The halo rail: one small halo per saint
  $("#haloRail").innerHTML = SAINTS.map((s, i) => {
    const gap = i > 0 && SAINTS[i - 1].era !== s.era ? "gap" : "";
    return `<a class="${gap}" href="#saint-${s.id}" style="--sc:${s.color}" data-id="${s.id}" aria-label="${esc(s.full)}"><span>${esc(s.name)}</span></a>`;
  }).join("");

  /* ------------------------------------------------------------------------
     Sri Lanka: the road of Joseph Vaz, and the island's shrines
     ------------------------------------------------------------------------ */
  $("#saint-vaz").after($("#tpl-lanka").content.cloneNode(true));
  const LK = (function lanka() {
    // A simple outline of the island (lon, lat), drawn as dots like the other maps
    const SHAPE = [
      [80.05, 9.82], [80.23, 9.83], [80.35, 9.72], [80.47, 9.58], [80.6, 9.42], [80.75, 9.32], [80.82, 9.25], [80.92, 9.08], [81.0, 8.93], [81.1, 8.8],
      [81.19, 8.68], [81.24, 8.55], [81.3, 8.45], [81.38, 8.3], [81.43, 8.13], [81.5, 8.0], [81.58, 7.9], [81.68, 7.76], [81.76, 7.58], [81.83, 7.4],
      [81.86, 7.2], [81.85, 7.0], [81.82, 6.82], [81.72, 6.6], [81.6, 6.43], [81.45, 6.3], [81.3, 6.2], [81.12, 6.12], [80.95, 6.05], [80.79, 6.0],
      [80.6, 5.92], [80.45, 5.96], [80.3, 5.99], [80.18, 6.04], [80.1, 6.13], [80.04, 6.25], [80.0, 6.4], [79.96, 6.56], [79.9, 6.72], [79.86, 6.9],
      [79.84, 7.05], [79.83, 7.2], [79.81, 7.4], [79.79, 7.58], [79.79, 7.8], [79.77, 8.0], [79.72, 8.18], [79.7, 8.3], [79.8, 8.38], [79.87, 8.5],
      [79.91, 8.68], [79.93, 8.85], [79.86, 8.96], [79.74, 9.05], [79.7, 9.1], [79.8, 9.11], [79.94, 9.03], [80.05, 9.05], [80.1, 9.22], [80.12, 9.4],
      [80.05, 9.5], [79.97, 9.6], [79.88, 9.68], [79.92, 9.76], [80.0, 9.8]
    ];
    const lon0 = 79.3, lat1 = 10.0, k = 110, cos = Math.cos((8 * Math.PI) / 180);
    const W = (82.05 - lon0) * cos * k, H = (lat1 - 5.75) * k;
    const proj = (lon, lat) => [(lon - lon0) * cos * k, (lat1 - lat) * k];
    const inside = (x, y, poly) => {
      let hit = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i], [xj, yj] = poly[j];
        if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
      }
      return hit;
    };
    // land painted once as dots on a canvas
    const s = 2, step = 0.045, cv = document.createElement("canvas");
    cv.width = Math.ceil(W * s); cv.height = Math.ceil(H * s);
    const g = cv.getContext("2d");
    g.fillStyle = "rgba(255, 226, 170, .26)";
    for (let lat = 5.85; lat <= 9.9; lat += step) {
      for (let lon = 79.6; lon <= 81.95; lon += step / cos) {
        if (!inside(lon, lat, SHAPE)) continue;
        const [x, y] = proj(lon, lat);
        g.beginPath(); g.arc(x * s, y * s, step * k * 0.27 * s, 0, 6.2832); g.fill();
      }
    }
    const route = LANKA.route.map((r) => proj(r.lon, r.lat));
    const places = [];
    LANKA.route.forEach((r, i) => { if (!places.some((p) => p.name === r.place)) places.push({ name: r.place, pt: route[i] }); });
    const anchorFor = { Jaffna: [8, -6, "start"], Puttalam: [10, 4, "start"], Kandy: [10, 4, "start"], Colombo: [-10, 4, "end"] };
    const stops = places.map((p) => {
      const key = Object.keys(anchorFor).find((n) => P(n) === p.name) || "Kandy";
      const [dx, dy, a] = anchorFor[key];
      return `<g class="stop" data-place="${esc(p.name)}"><circle cx="${p.pt[0].toFixed(1)}" cy="${p.pt[1].toFixed(1)}" r="5" /><text x="${(p.pt[0] + dx).toFixed(1)}" y="${(p.pt[1] + dy).toFixed(1)}" text-anchor="${a}">${esc(p.name)}</text></g>`;
    }).join("");
    // each step draws one leg of the journey, bowed a little like a road
    const legs = route.map((pt, i) => {
      if (!i) return "";
      const a = route[i - 1];
      if (Math.hypot(pt[0] - a[0], pt[1] - a[1]) < 2) return "";
      const mx = (a[0] + pt[0]) / 2, my = (a[1] + pt[1]) / 2, nx = -(pt[1] - a[1]) * 0.18, ny = (pt[0] - a[0]) * 0.18;
      return `<path class="route-line leg" data-leg="${i}" d="M${a[0].toFixed(1)},${a[1].toFixed(1)} Q${(mx + nx).toFixed(1)},${(my + ny).toFixed(1)} ${pt[0].toFixed(1)},${pt[1].toFixed(1)}" pathLength="1" />`;
    }).join("");
    const [jx, jy] = route[0];
    const goa = `<path class="goa-line" d="M-34,-30 Q${(jx - 40).toFixed(1)},${(jy - 70).toFixed(1)} ${jx.toFixed(1)},${jy.toFixed(1)}" /><text class="goa-label" x="-34" y="-38">${esc(T("from Goa"))} ↘</text>`;
    const pinFor = LANKA.shrines.filter((sh) => !["Colombo", "Kandy"].some((n) => sh.place.includes(n) || sh.place.includes(P(n))));
    const pins = pinFor.map((sh) => {
      const [x, y] = proj(sh.lon, sh.lat);
      const label = sh.place.split(",")[0];
      return `<g class="pin"><circle class="pulse" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" /><circle class="dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" /><text x="${(x - 9).toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="end">${esc(label)}</text></g>`;
    }).join("");
    $("#lkMap").innerHTML = `<svg viewBox="-50 -56 ${(W + 90).toFixed(0)} ${(H + 80).toFixed(0)}" role="img" aria-label="${esc(T("Map of Joseph Vaz’s journeys in Sri Lanka"))}">
      <image href="${cv.toDataURL("image/png")}" x="0" y="0" width="${W.toFixed(1)}" height="${H.toFixed(1)}" />
      ${goa}${legs}${pins}${stops}</svg>`;
    $("#lkSteps").innerHTML = LANKA.route.map((r, i) => `
      <article class="lk-step" data-i="${i}">
        <span class="lk-year">${esc(r.year)}</span>
        <span class="lk-place">${esc(r.place)}</span>
        <p>${esc(r.text)}</p>
      </article>`).join("");
    $("#lkSteps").insertAdjacentHTML("afterend", `<div class="lk-dots" aria-hidden="true">${LANKA.route.map(() => "<i></i>").join("")}</div>`);
    $("#lkCards").innerHTML = LANKA.shrines.map((sh) => {
      const s = sh.saint && BY_ID[sh.saint], img = s ? s.portrait : sh.img;
      const link = s ? `#saint-${s.id}` : sh.link;
      return `<article class="lk-card reveal-up" style="--sc:${s ? s.color : "#e3c27a"}">
        <figure class="zoomable" data-lb-name="${esc(T("Saints of Sri Lanka"))}" style="--pos:${(s && s.pos) || "50% 25%"};--zoom:${(s && s.zoom) || 1}">${artImg(img, { group: "lanka", caption: sh.name })}</figure>
        <div class="lk-card-body">
          <span class="lk-card-place">${esc(sh.place)}</span>
          <h3>${esc(sh.name)}</h3>
          <p>${esc(sh.text)}</p>
          ${link ? `<a class="lk-more" href="${link}">${s ? T("Read {name}’s story", { name: esc(s.name) }) : T("See it on the Mother Mary page")} →</a>` : ""}
        </div>
      </article>`;
    }).join("");

    function setStep(i) {
      $$(".lk-step").forEach((el, k) => el.classList.toggle("on", k === i));
      $$(".lk-dots i").forEach((el, k) => el.classList.toggle("on", k <= i));
      $$("#lkMap .stop").forEach((el) => el.classList.toggle("on", el.dataset.place === LANKA.route[i].place));
    }
    setStep(0);
    return { setStep };
  })();

  /* ------------------------------------------------------------------------
     Walk with a saint
     ------------------------------------------------------------------------ */
  (function companion() {
    $("#chips").innerHTML = COMPANIONS.map((c) => `<button class="chip" type="button" role="tab" aria-selected="false" data-id="${c.id}">${esc(c.label)}</button>`).join("");
    const out = $("#compOut");
    out.innerHTML = `<p class="comp-empty">${T("Tap whatever is closest to your heart.")}</p>`;
    function show(id) {
      const c = COMPANIONS.find((x) => x.id === id);
      $$("#chips .chip").forEach((b) => { const on = b.dataset.id === id; b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on)); });
      out.innerHTML = c.picks.map(([sid, why]) => {
        const s = BY_ID[sid];
        return `<article class="comp-card" style="--sc:${s.color}">
          <a class="comp-face" href="#saint-${s.id}" aria-label="${esc(s.full)}">${saintFace(s)}</a>
          <div class="comp-body">
            <p class="comp-name">${esc(s.full)}</p>
            <p class="comp-title">${esc(s.title)}</p>
            <p class="comp-why">${esc(why)}</p>
            <p class="comp-step"><b>${T("Live it today")}</b>${esc(s.practice)}</p>
            <a class="comp-link" href="#saint-${s.id}">${T("Read {name}’s story", { name: esc(s.name) })} ↑</a>
          </div>
        </article>`;
      }).join("");
      if (ANIM) gsap.fromTo($$(".comp-card", out), { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" });
    }
    $$("#chips .chip").forEach((b) => b.addEventListener("click", () => show(b.dataset.id)));
  })();

  /* ------------------------------------------------------------------------
     The Litany of the Saints
     ------------------------------------------------------------------------ */
  $("#ltImg").src = ART["s-ghent"].src;
  const LITANY = [T("Holy Mary, Mother of God"), BY_ID.joseph.full, T("Saint Peter and Saint Paul"), ...SAINTS.slice(1).map((s) => s.full), T("All holy men and women, saints of God")];
  $("#ltNames").innerHTML = `<div class="lt-roll" id="ltRoll">${LITANY.map((n) => `<div class="lt-line"><b>${esc(n)}</b><span>${T("pray for us.")}</span></div>`).join("")}</div>`;

  (function candles() {
    const c = $("#ltCandles"), ctx = c.getContext("2d");
    let W = 0, H = 0, dpr = 1, lights = [], visible = false;
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = 64;
    const sg = sprite.getContext("2d"), grad = sg.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,240,200,1)"); grad.addColorStop(0.18, "rgba(255,200,110,.75)"); grad.addColorStop(0.5, "rgba(255,150,60,.18)"); grad.addColorStop(1, "rgba(255,120,40,0)");
    sg.fillStyle = grad; sg.fillRect(0, 0, 64, 64);
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      lights = Array.from({ length: Math.round(Math.min(90, W / (14 * dpr))) }, () => {
        const depth = Math.random();
        return { x: Math.random() * W, y: H * (0.74 + depth * 0.24), s: (10 + depth * 26) * dpr, p: Math.random() * 100, f: 0.6 + Math.random() * 0.8 };
      }).sort((a, b) => a.y - b.y);
    };
    resize(); window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      for (const l of lights) {
        const fl = 0.7 + 0.3 * Math.sin(t / (180 * l.f) + l.p) * Math.sin(t / (420 * l.f) + l.p * 2);
        ctx.globalAlpha = fl;
        ctx.drawImage(sprite, l.x - l.s * 1.5, l.y - l.s * 1.9, l.s * 3, l.s * 3);
      }
      ctx.globalCompositeOperation = "source-over";
    };
    if (REDUCED) { draw(0); return; }
    (function frame(t) { requestAnimationFrame(frame); if (visible) draw(t); })(0);
  })();

  /* ------------------------------------------------------------------------
     A saint for the year
     ------------------------------------------------------------------------ */
  (function draw() {
    const KEY = "behold.saint", year = new Date().getFullYear();
    const deck = $("#drawDeck"), card = $("#drawCard"), btn = $("#drawBtn");
    deck.innerHTML = Array.from({ length: 6 }, (_, i) => `<i class="dk" style="transform:rotate(${(i - 2.5) * 2.2}deg) translateY(${-i * 2}px)"></i>`).join("");
    const read = () => { try { const v = JSON.parse(localStorage.getItem(KEY)); return v && v.year === year && BY_ID[v.id] ? v.id : null; } catch (e) { return null; } };
    const save = (id) => { try { localStorage.setItem(KEY, JSON.stringify({ year, id })); } catch (e) { /* storage unavailable */ } };
    function render(id) {
      const s = BY_ID[id];
      card.innerHTML = `<article class="dc" style="--sc:${s.color}">
        <div class="dc-face">${saintFace(s)}</div>
        <p class="dc-year">${T("Your companion for {year}", { year })}</p>
        <h3 class="dc-name">${esc(s.full)}</h3>
        <p class="dc-title">${esc(s.title)}</p>
        <p class="dc-quote">“${esc(s.quote.t)}”</p>
        <p class="dc-step">${esc(s.practice)}</p>
        <p class="dc-prayer">${T("{name}, pray for me.", { name: esc(s.full) })}</p>
        <a class="dc-link" href="#saint-${s.id}">${T("Read {name}’s story", { name: esc(s.name) })} ↑</a>
      </article>`;
      deck.classList.add("away");
      btn.textContent = T("Draw again");
    }
    let busy = false;
    function pickSaint() {
      if (busy) return;
      const current = read();
      const pool = SAINTS.filter((s) => s.id !== current);
      const pick = pool[Math.floor(Math.random() * pool.length)].id;
      save(pick);
      if (!ANIM) { render(pick); return; }
      busy = true;
      const dks = $$(".dk", deck), old = $(".dc", card);
      const tl = gsap.timeline({ onComplete: () => (busy = false) });
      if (old) tl.to(old, { opacity: 0, y: 20, scale: 0.96, duration: 0.35, ease: "power2.in" }).add(() => { card.innerHTML = ""; deck.classList.remove("away"); });
      tl.to(dks, { rotation: (i) => (i - 2.5) * 14, x: (i) => (i - 2.5) * 34, y: (i) => Math.abs(i - 2.5) * 8, duration: 0.45, ease: "power2.out", stagger: 0.03 })
        .to(dks, { rotation: (i) => (i - 2.5) * 2.2, x: 0, y: (i) => -i * 2, duration: 0.35, ease: "power2.in", stagger: { each: 0.03, from: "end" } })
        .to(dks[dks.length - 1], { y: -60, rotationY: 90, duration: 0.35, ease: "power2.in" })
        .add(() => {
          render(pick);
          gsap.set(dks[dks.length - 1], { y: -10, rotationY: 0 });
          gsap.fromTo($(".dc", card), { opacity: 0, rotationY: -80, scale: 0.9 }, { opacity: 1, rotationY: 0, scale: 1, duration: 0.7, ease: "power3.out" });
        });
    }
    btn.textContent = T("Draw a saint");
    btn.addEventListener("click", pickSaint);
    const kept = read();
    if (kept) render(kept);
  })();

  // Links within the page scroll smoothly (the cards and halos above are built after the navigation)
  document.addEventListener("click", (e) => {
    const a = e.target.closest('main a[href^="#"], #haloRail a, .comp-card a');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id.length < 2 || !$(id)) return;
    e.preventDefault();
    scrollToEl(id, id.startsWith("#saint-") ? -20 : 0);
  });

  /* ========================================================================
     Without motion: everything simply visible
     ======================================================================== */
  if (!ANIM) {
    $$(".scene-veil").forEach((v) => v.remove());
    $(".sx-time").classList.add("static");
    $(".sx-lanka").classList.add("static");
    $(".sx-litany").classList.add("static");
    $$(".canon-path li").forEach((li) => li.classList.add("lit"));
    $("#canonPath").style.setProperty("--p", 1);
    Core.settleLanguage();
    return;
  }

  /* ========================================================================
     Scroll choreography
     ======================================================================== */
  const PIN = { scrub: 1, pin: true };

  // Opening: the window rises into view, then who they were
  gsap.from("#sxCopy > *", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.18, duration: 1.5, ease: "power3.out", delay: 0.25 });
  gsap.from("#sxWindow", { opacity: 0, scale: 0.92, duration: 2.4, ease: "power2.out" });
  const who = $$("#sxWho > span");
  const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".sx-hero", start: "top top", end: "+=300%", ...PIN } });
  heroTl.to("#sxCopy", { opacity: 0, y: -80, filter: "blur(10px)", duration: 0.6 }, 0)
    .to("#sxHint", { opacity: 0, duration: 0.2 }, 0)
    .to("#sxWindow", { yPercent: -36, scale: 1.06, duration: 1.2, ease: "power1.inOut" }, 0)
    .to("#sxWindow", { opacity: 0.22, filter: "blur(3px) saturate(.8)", duration: 0.6 }, 1.2)
    .to(".sx-rays", { opacity: 0.35, duration: 0.6 }, 1.2);
  who.forEach((w, i) => {
    const t = 1.6 + i * 0.42;
    heroTl.fromTo(w, { opacity: 0, y: 24, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.32 }, t);
    if (i) heroTl.to(who[i - 1], { opacity: 0.3, duration: 0.3 }, t);
  });
  const whoEnd = 1.6 + who.length * 0.42;
  heroTl.to(who[who.length - 1], { opacity: 0.3, duration: 0.3 }, whoEnd)
    .fromTo("#sxWhoEnd", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45 }, whoEnd)
    .to({}, { duration: 0.8 });
  veil($(".sx-hero"), $(".sx-hero .scene-veil"), heroTl, 0.12);
  gsap.set(".sx-hero .scene-veil", { opacity: 0 });

  // What is a saint
  gsap.from(".sx-what .container > .eyebrow, .sx-what .section-title, .sx-what .section-lede", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".sx-what", start: "top 70%" } });
  ScrollTrigger.batch(".reveal-up", { start: "top 90%", onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 1.1, ease: "power3.out", overwrite: true }) });
  const canonLis = $$(".canon-path li");
  gsap.from(".canon .sub-title", { opacity: 0, y: 30, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".canon", start: "top 80%" } });
  gsap.fromTo("#canonPath", { "--p": 0 }, { "--p": 1, ease: "none", scrollTrigger: { trigger: "#canonPath", start: "top 78%", end: "bottom 45%", scrub: 0.6,
    onUpdate: (st) => canonLis.forEach((li, i) => li.classList.toggle("lit", st.progress >= i / (canonLis.length - 1) - 0.02)) } });
  gsap.from(".canon-path li", { opacity: 0, y: 30, stagger: 0.12, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#canonPath", start: "top 85%" } });

  // Twenty centuries: the road moves sideways as you scroll
  (function road() {
    const track = $("#stTrack"), prog = $("#stProg");
    const items = $$(".st-item, .st-now, .st-elsewhere, .st-gap", track);
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    gsap.set(items, { opacity: 0.15, scale: 0.92 });
    const seen = new Set();
    const reveal = () => {
      const x = gsap.getProperty(track, "x"), edge = window.innerWidth * 0.9;
      items.forEach((it) => {
        if (seen.has(it) || it.offsetLeft + x > edge) return;
        seen.add(it);
        gsap.to(it, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
      });
    };
    // timeline-level onUpdate, so items appear as the smoothed scroll catches up
    const tl = gsap.timeline({ onUpdate: reveal, scrollTrigger: { trigger: ".sx-time", start: "top top", end: () => "+=" + Math.round(dist() * 1.1 + window.innerHeight * 0.6), ...PIN, invalidateOnRefresh: true } });
    // fromTo, not from: the timeline is re-recorded on refresh
    tl.fromTo(".st-head > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.15 })
      .to(track, { x: () => -dist(), duration: 1, ease: "none" }, 0.05)
      .to(prog, { scaleX: 1, duration: 1, ease: "none" }, 0.05)
      .to({}, { duration: 0.12 });
    veil($(".sx-time"), $(".sx-time .scene-veil"), tl, 0.06);
  })();

  // Eras: the numeral drifts, the faces gather
  $$(".era").forEach((era) => {
    gsap.fromTo($(".era-n", era), { yPercent: 30, opacity: 0 }, { yPercent: -10, opacity: 1, ease: "none", scrollTrigger: { trigger: era, start: "top bottom", end: "center center", scrub: 0.6 } });
    gsap.from([$(".era-span", era), $(".era-title", era), $(".era-text", era)], { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: era, start: "top 62%" } });
    gsap.from($$(".era-face", era), { opacity: 0, y: 40, scale: 0.85, stagger: 0.07, duration: 0.9, ease: "back.out(1.6)", scrollTrigger: { trigger: $(".era-faces", era), start: "top 88%" } });
    gsap.from($(".era-also", era), { opacity: 0, duration: 1.4, scrollTrigger: { trigger: $(".era-also", era), start: "top 92%" } });
  });

  // Chapters
  $$(".saint").forEach((sec) => {
    const visual = $(".s-visual", sec), arch = $(".s-arch", sec);
    gsap.from(arch, { opacity: 0, y: 70, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: sec, start: "top 80%" } });
    $$(".s-arch-in figure", sec).forEach((fig) => {
      const z = +fig.dataset.zoom || 1;
      gsap.fromTo($("img", fig), { scale: 1.16 * z }, { scale: 1.02 * z, ease: "none", scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true } });
    });
    gsap.from($(".s-head", sec).children, { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.08, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: sec, start: "top 65%" } });
    const endBlock = $("[data-end-trigger]", sec);
    if ($(".s-endimg", sec)) ScrollTrigger.create({ trigger: endBlock, start: "top 60%", end: "bottom 25%", toggleClass: { targets: visual, className: "ended" } });
    // the lessons arrive like cards being laid on a table
    const lessons = $(".s-lessons", sec);
    const ltl = gsap.timeline({ scrollTrigger: { trigger: lessons, start: "top 78%" } });
    ltl.from(lessons, { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
      .from([$(".sl-eyebrow", lessons), $(".sl-title", lessons)], { opacity: 0, y: 20, stagger: 0.1, duration: 0.7, ease: "power3.out" }, 0.25)
      .from($$(".lesson", lessons), { opacity: 0, rotationX: -70, y: 30, stagger: 0.16, duration: 0.9, ease: "power3.out" }, 0.4)
      .from($(".s-today", lessons), { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.4");
    ScrollTrigger.create({ trigger: sec, start: "top 50%", end: "bottom 50%", onToggle: (st) => { if (st.isActive) setHalo(sec.dataset.saint); } });
  });

  // The halo rail
  const halos = $$("#haloRail a");
  function setHalo(id) { halos.forEach((a) => a.classList.toggle("on", a.dataset.id === id)); }
  ScrollTrigger.create({ trigger: "#chapters", start: "top 60%", endTrigger: "#companion", end: "top 40%", onToggle: (st) => $("#haloRail").classList.toggle("show", st.isActive) });

  // Sri Lanka: the road draws itself, step by step
  (function lankaRoad() {
    const n = LANKA.route.length, per = 1;
    const legs = $$("#lkMap .leg"), pins = $$("#lkMap .pin");
    // hidden until drawn, so no round cap shows at the end of an undrawn leg
    gsap.set(legs, { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 });
    gsap.set(pins, { opacity: 0 });
    gsap.set($$("#lkMap .stop").slice(1), { opacity: 0 });
    gsap.from(".lk-panel > .eyebrow, .lk-title, .goa-line, .goa-label", { opacity: 0, y: 30, stagger: 0.1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".sx-lanka", start: "top 70%" } });
    const tl = gsap.timeline({ scrollTrigger: { trigger: ".sx-lanka", start: "top top", end: "+=" + n * 70 + "%", ...PIN,
      onUpdate: (st) => LK.setStep(Math.max(0, Math.min(n - 1, Math.floor((st.progress * tl.duration()) / per)))) } });
    LANKA.route.forEach((r, i) => {
      const leg = $(`#lkMap .leg[data-leg="${i}"]`);
      if (leg) tl.set(leg, { opacity: 1 }, i * per).to(leg, { strokeDashoffset: 0, duration: per * 0.7, ease: "power1.inOut" }, i * per);
      const stop = $(`#lkMap .stop[data-place="${CSS.escape(r.place)}"]`);
      if (stop && i) tl.to(stop, { opacity: 1, duration: 0.2 }, i * per + (leg ? per * 0.6 : 0.1));
    });
    tl.to(pins, { opacity: 1, stagger: 0.12, duration: 0.3 }, (n - 1) * per + 0.3).to({}, { duration: 0.5 });
    veil($(".sx-lanka"), $(".sx-lanka .scene-veil"), tl, 0.08);
  })();
  gsap.from("#lanka-shrines .section-title, #lanka-shrines .eyebrow", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: "#lanka-shrines", start: "top 75%" } });

  // Walk with a saint
  gsap.from(".sx-companion .container > .eyebrow, .sx-companion .section-title, .sx-companion .section-lede", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".sx-companion", start: "top 70%" } });
  gsap.from("#chips .chip", { opacity: 0, y: 20, scale: 0.9, stagger: 0.04, duration: 0.7, ease: "back.out(1.7)", scrollTrigger: { trigger: "#chips", start: "top 85%" } });

  // The Litany: the names roll past, and each is asked to pray
  (function litany() {
    const roll = $("#ltRoll"), lines = $$(".lt-line", roll), box = $("#ltNames");
    gsap.set(lines, { position: "relative", inset: "auto", opacity: 1 });
    roll.style.cssText = "position:absolute;left:0;right:0;top:0;display:flex;flex-direction:column;gap:6vh";
    box.style.cssText += ";overflow:hidden;-webkit-mask-image:linear-gradient(transparent,#000 30%,#000 70%,transparent);mask-image:linear-gradient(transparent,#000 30%,#000 70%,transparent)";
    const centre = (el) => box.clientHeight / 2 - (el.offsetTop + el.offsetHeight / 2);
    const light = () => {
      const y = gsap.getProperty(roll, "y"), mid = box.clientHeight / 2;
      lines.forEach((l) => {
        const d = Math.abs(l.offsetTop + l.offsetHeight / 2 + y - mid) / box.clientHeight;
        l.style.opacity = Math.max(0.12, 1 - d * 2.4).toFixed(3);
        l.style.transform = `scale(${(1 - Math.min(0.12, d * 0.3)).toFixed(3)})`;
      });
    };
    const tl = gsap.timeline({ onUpdate: light, scrollTrigger: { trigger: ".sx-litany", start: "top top", end: "+=" + lines.length * 26 + "%", ...PIN, invalidateOnRefresh: true, onRefresh: light } });
    tl.fromTo(".lt-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 0)
      .fromTo(roll, { y: () => centre(lines[0]) }, { y: () => centre(lines[lines.length - 1]), duration: lines.length * 0.5, ease: "none" }, 0)
      .to([box, ".lt-eyebrow"], { opacity: 0, duration: 0.8 })
      .to(".lt-bg img", { opacity: 0.12, duration: 0.8 }, "<")
      .to("#ltEnd", { opacity: 1, duration: 0.6 })
      .fromTo(".lt-you", { scale: 0.9, filter: "blur(10px)" }, { scale: 1, filter: "blur(0px)", duration: 0.8 }, "<")
      .fromTo(".lt-verse", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .to({}, { duration: 1 });
    gsap.fromTo(".lt-bg img", { yPercent: -4 }, { yPercent: 4, ease: "none", scrollTrigger: { trigger: ".sx-litany", start: "top bottom", end: "bottom top", scrub: true } });
    veil($(".sx-litany"), $(".sx-litany .scene-veil"), tl, 0.08);
    light();
  })();

  // A saint for the year
  gsap.from(".sx-draw .container > .eyebrow, .sx-draw .section-title, .sx-draw .section-lede", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".sx-draw", start: "top 70%" } });
  gsap.from("#drawDeck .dk", { opacity: 0, y: 80, rotation: (i) => (i - 2.5) * 10, stagger: 0.06, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".draw-table", start: "top 80%" } });

  Core.sortTriggers();
})();
