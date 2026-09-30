/* ==========================================================================
   Behold — the Apostles
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, esc, smooth, REDUCED, HAS_GSAP, scrollToEl, artImg, credit, veil, project, dotMap, smoothPath, fitView } = Core;
  const ANIM = HAS_GSAP && !REDUCED;
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const ORDINAL = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

  /* Line icons: emblems of each apostle and the manner of their deaths */
  const ICONS = {
    keys: '<circle cx="7" cy="6.5" r="3"/><path d="M9.2 8.7L19 18.5M16 15.5l2-2M18.5 18l1.5-1.5"/><circle cx="17" cy="6.5" r="3"/><path d="M14.8 8.7L5 18.5M8 15.5l-2-2M5.5 18L4 16.5"/>',
    saltire: '<path d="M5 5l14 14M19 5L5 19"/>',
    shell: '<path d="M12 20L3.5 10.5a8.5 8.5 0 0117 0z"/><path d="M12 20L8 8.5M12 20V7.5M12 20l4-11.5"/>',
    chalice: '<path d="M7 3h10v3a5 5 0 01-10 0z"/><path d="M12 11v6M8 21h8M9.5 17h5"/>',
    loaves: '<ellipse cx="9" cy="15" rx="6" ry="3.6"/><ellipse cx="15" cy="9.5" rx="6" ry="3.6"/>',
    knife: '<path d="M4 20l5-5"/><path d="M9 15L19.5 4.5c1 3.5-.8 7.5-5 9.5z"/>',
    spear: '<path d="M12 2l3 6.5h-6z"/><path d="M12 8.5V22"/>',
    coins: '<circle cx="8" cy="15.5" r="4"/><circle cx="16" cy="15.5" r="4"/><circle cx="12" cy="8" r="4"/>',
    club: '<path d="M9 21.5l2.6-9.5"/><path d="M11.6 12c-1.6-3.8-.6-8.5 2.6-8.5 3 0 3.4 4.6.8 8.3z"/>',
    axe: '<path d="M6 21.5L14.5 5"/><path d="M12.8 3.5c3.4-.9 7.2 1.2 7.2 5.2-3.2.2-6-1.1-7.8-3.1z"/>',
    saw: '<path d="M3 7.5h14v5.5H3z"/><path d="M17 8.5h3.5v3.5H17"/><path d="M3 13l1.5 2.2L6 13l1.5 2.2L9 13l1.5 2.2L12 13l1.5 2.2L15 13l1.5 2.2"/>',
    cross: '<path d="M12 2.5v19M7 8h10"/>',
    invcross: '<path d="M12 2.5v19M7 16h10"/>',
    sword: '<path d="M12 2.5v13.5M8.5 16h7M12 16v5.5"/><path d="M10.4 4.2L12 2.5l1.6 1.7"/>',
    age: '<path d="M3.5 15.5c3.5 0 5.5-2 8.5-2h6.5L21 11"/><path d="M3.5 15.5c0 2 1.8 3 4.5 3h7c2.2 0 3.5-1.3 3.5-3.5"/><path d="M12 9c-1.4-1.8-.4-4 1-5.5 1.2 1.6 1.2 3.7-1 5.5z"/>',
    stones: '<circle cx="7" cy="16" r="3.5"/><circle cx="15.5" cy="15" r="4.5"/><circle cx="11" cy="8" r="3"/>'
  };
  const icon = (name, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.cross}</svg>`;
  const fateIcon = (a) => (a.fate === "rope" ? "coins" : a.fate);

  /* ------------------------------------------------------------------------
     Opening
     ------------------------------------------------------------------------ */
  $("#apHeroImg").src = ART.pentecost.full;

  /* ------------------------------------------------------------------------
     The table of the Twelve
     ------------------------------------------------------------------------ */
  $("#apTable").innerHTML = APOSTLES.map((a, i) => `
    <a class="seat" href="#ap-${a.id}" style="--ac:${a.color}" data-fate="${esc(a.death.how)}">
      <span class="seat-img">${artImg(a.portrait)}</span>
      <span class="seat-n">${ROMAN[i]}</span>
      <span class="seat-name">${esc(a.name)}</span>
      <span class="seat-epithet">${esc(a.epithet)}</span>
      <span class="seat-fate">${icon(fateIcon(a))}${esc(a.death.how)}</span>
    </a>`).join("");
  $("#apTableExtra").innerHTML = `
    <a class="seat small" href="#ap-matthias" style="--ac:${MATTHIAS.color}">
      <span class="seat-img">${artImg(MATTHIAS.portrait)}</span>
      <span class="seat-name">${esc(MATTHIAS.name)}</span><span class="seat-epithet">${T("Chosen to replace Judas")}</span>
    </a>
    <a class="seat small paul-seat" href="#paul" style="--ac:#e9c46a">
      <span class="seat-img">${artImg(PAUL.portrait)}</span>
      <span class="seat-name">${esc(PAUL.name)}</span><span class="seat-epithet">${T("Apostle to the Gentiles")}</span>
    </a>`;

  /* ------------------------------------------------------------------------
     The world map of journeys
     ------------------------------------------------------------------------ */
  (function worldMap() {
    const routes = APOSTLES.filter((a) => a.journey.length > 1 && a.id !== "judas");
    const svgRoutes = routes.map((a) => {
      const pts = a.journey.map(([, lon, lat]) => project("world", lon, lat));
      const end = pts[pts.length - 1], endLabel = a.journey[a.journey.length - 1][0];
      return `<g class="route" data-id="${a.id}" style="--ac:${a.color}">
        <path class="route-line" d="${smoothPath(pts)}" pathLength="1" />
        <circle class="route-end" cx="${end[0].toFixed(1)}" cy="${end[1].toFixed(1)}" r="4" />
        <text class="route-label" x="${(end[0] + 7).toFixed(1)}" y="${(end[1] + 3).toFixed(1)}">${esc(a.name)} · ${esc(endLabel)}</text>
      </g>`;
    }).join("");
    const [jx, jy] = project("world", 35.23, 31.78);
    const home = `<g class="home"><circle cx="${jx}" cy="${jy}" r="5" /><circle class="pulse" cx="${jx}" cy="${jy}" r="5" /><text x="${jx - 8}" y="${jy + 16}" text-anchor="end">${T("Jerusalem")}</text></g>`;
    $("#apWorldMap").innerHTML = dotMap("world", svgRoutes + home, { label: T("Map of the apostles' journeys"), view: [0, 20, MAPS.world.w, MAPS.world.h - 20] });
    $("#apLegend").innerHTML = routes.map((a) => `<li data-id="${a.id}" style="--ac:${a.color}"><i></i>${esc(a.name)} <span>→ ${esc(a.journey[a.journey.length - 1][0])}</span></li>`).join("");
  })();

  /* ------------------------------------------------------------------------
     Chapters
     ------------------------------------------------------------------------ */
  function miniMap(a) {
    const pts = a.journey.map(([, lon, lat]) => project("world", lon, lat));
    const view = fitView("world", pts, 26, 150);
    const r = Math.max(1.4, view[2] / 170);
    const stops = pts.map((p, i) => `<circle class="stop" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(i === pts.length - 1 ? r * 1.8 : r).toFixed(2)}" />`).join("");
    // label each place once, skipping any that would crowd a label already placed
    const placed = [], fs = r * 5.2, last = pts.length - 1;
    const order = [last, ...pts.map((_, i) => i).filter((i) => i !== last)];
    const labels = order.map((i) => {
      const p = pts[i], name = a.journey[i][0];
      if (placed.some((q) => q.name === name || (Math.abs(q.x - p[0]) < fs * 4 && Math.abs(q.y - p[1]) < fs * 1.3))) return "";
      placed.push({ name, x: p[0], y: p[1] });
      const right = p[0] > view[0] + view[2] * 0.62;
      const x = right ? p[0] - r * 2.4 : p[0] + r * 2.4;
      return `<text class="stop-label" x="${x.toFixed(1)}" y="${(p[1] + r * 1.2).toFixed(1)}" text-anchor="${right ? "end" : "start"}" style="font-size:${fs.toFixed(1)}px">${esc(name)}</text>`;
    }).join("");
    const line = pts.length > 1 ? `<path class="route-line" d="${smoothPath(pts)}" pathLength="1" style="stroke-width:${(r * 0.9).toFixed(2)}" />` : "";
    return dotMap("world", `<g style="--ac:${a.color}">${line}${stops}${labels}</g>`, { view, cls: "mini", label: `${a.name}'s journey` });
  }

  function chapter(a, i) {
    const group = `ap-${a.id}`;
    const src = a.death.source === "Scripture" ? T("Recorded in Scripture") : T("Early church tradition");
    return `
    <section class="ap" id="ap-${a.id}" style="--ac:${a.color}" data-lb-name="${esc(a.full)}">
      <div class="ap-grid">
        <div class="ap-visual">
          <div class="ap-frame">
            <figure class="ap-portrait zoomable">${artImg(a.portrait, { group, caption: a.full })}</figure>
            <figure class="ap-endimg zoomable">${artImg(a.endImg, { group, caption: `${a.name}: ${a.death.how}` })}</figure>
            <span class="ap-frame-n">${ROMAN[i]}</span>
            <span class="ap-frame-icon">${icon(a.icon)}</span>
          </div>
          <p class="ap-credit" data-portrait>${credit(a.portrait)}</p>
          <p class="ap-credit" data-end>${credit(a.endImg)}</p>
        </div>
        <div class="ap-content">
          <header class="ap-head">
            <p class="ap-num">${T("The {ord} of the Twelve", { ord: T(ORDINAL[i]) })}</p>
            <h2 class="ap-name">${esc(a.name)}</h2>
            <p class="ap-epithet">${esc(a.epithet)}</p>
            <dl class="ap-facts">
              <div><dt>${T("Also called")}</dt><dd>${esc(a.also)}</dd></div>
              <div><dt>${T("The name means")}</dt><dd>${esc(a.meaning)}</dd></div>
              <div><dt>${T("From")}</dt><dd>${esc(a.origin)}</dd></div>
              <div><dt>${T("Before the call")}</dt><dd>${esc(a.trade)}</dd></div>
              <div><dt>${T("Emblem")}</dt><dd class="with-ico">${icon(a.icon)}</dd></div>
              <div><dt>${T("Feast day")}</dt><dd>${esc(a.feast)}</dd></div>
            </dl>
          </header>

          <div class="ap-block reveal-up"><h3>${T("The Call")}</h3><p>${esc(a.call.t)}</p><cite>${esc(a.call.r)}</cite></div>

          <div class="ap-block reveal-up"><h3>${T("With the Master")}</h3>
            <ol class="ap-moments">${a.moments.map(([t, r]) => `<li><p>${esc(t)}</p><cite>${esc(r)}</cite></li>`).join("")}</ol>
          </div>

          <blockquote class="ap-quote reveal-up">“${esc(a.quote.t)}”<cite>${esc(a.quote.by)} · ${esc(a.quote.r)}</cite></blockquote>

          <div class="ap-block reveal-up"><h3>${T("After the Resurrection")}</h3><p>${esc(a.after)}</p><cite>${esc(a.afterRefs)}</cite></div>

          <div class="ap-block ap-journey reveal-up"><h3>${T("The Road")}</h3>
            <div class="ap-map">${miniMap(a)}</div>
            <p class="ap-route">${a.journey.map(([n]) => esc(n)).filter((n, k, arr) => arr.indexOf(n) === k || k === arr.length - 1).join(' <span>→</span> ')}</p>
          </div>

          <div class="ap-block ap-death reveal-up" data-end-trigger><h3>${T("The End")}</h3>
            <div class="death-card">
              <span class="dc-icon">${icon(fateIcon(a))}</span>
              <div class="dc-main">
                <b>${esc(a.death.how)}</b>
                <span>${esc(a.death.where)} · ${esc(a.death.when)}</span>
                <em class="dc-src ${a.death.source.toLowerCase()}">${src}</em>
              </div>
              <p>${esc(a.death.text)}</p>
              ${a.death.ref ? `<cite>${esc(a.death.ref)}</cite>` : ""}
            </div>
          </div>

          <div class="ap-block reveal-up"><h3>${T("Legacy")}</h3><p>${esc(a.legacy)}</p></div>

          ${a.scenes.length ? `<div class="ap-scenes reveal-up">${a.scenes.map((k) => `<figure class="zoomable">${artImg(k, { group, caption: a.full })}<figcaption>${credit(k)}</figcaption></figure>`).join("")}</div>` : ""}
        </div>
      </div>
    </section>`;
  }
  $("#chapters").innerHTML = APOSTLES.map(chapter).join("");

  // Matthias
  $("#ap-matthias").innerHTML = `
    <div class="container">
      <div class="matthias" style="--ac:${MATTHIAS.color}" data-lb-name="Matthias">
        <figure class="zoomable">${artImg(MATTHIAS.portrait, { group: "ap-matthias", caption: "Matthias" })}</figure>
        <div>
          <p class="eyebrow">${T("The twelfth, again")}</p>
          <h2 class="ap-name">${esc(MATTHIAS.name)}</h2>
          <p class="ap-text">${esc(MATTHIAS.text)}</p>
          <blockquote class="ap-quote">“${esc(MATTHIAS.quote.t)}”<cite>${esc(MATTHIAS.quote.r)}</cite></blockquote>
        </div>
      </div>
    </div>`;

  // The cost of following
  const fates = [...APOSTLES, { ...MATTHIAS, full: "Matthias" }, { id: "paul", name: PAUL.name, full: PAUL.full, fate: "sword", color: "#e9c46a", death: PAUL.death }];
  $("#fates").innerHTML = fates.map((a) => `
    <a class="fate ${a.fate === "age" ? "peace" : ""} ${a.id === "judas" ? "judas" : ""}" href="#${a.id === "paul" ? "paul" : "ap-" + a.id}" style="--ac:${a.color}">
      ${icon(fateIcon(a))}
      <b>${esc(a.name)}</b>
      <span class="fate-how">${esc(a.death.how)}</span>
      <span class="fate-where">${esc(a.death.where)} · ${esc(a.death.when)}</span>
    </a>`).join("");

  /* ------------------------------------------------------------------------
     Paul
     ------------------------------------------------------------------------ */
  $("#stephenImg").src = ART.stephen.src;
  $("#paulBeforeText").textContent = PAUL.before.text;
  $("#paulBeforeQuote").innerHTML = `“${esc(PAUL.before.t)}”<cite>${esc(PAUL.before.r)}</cite>`;
  $("#dmLines").innerHTML = PAUL.conversion.map((l, i) => `<div class="dm-line ${i === 1 || i === 3 ? "voice" : ""}"><p>${esc(l.t)}</p><cite>${esc(l.r)}</cite></div>`).join("");
  $("#convImg").src = ART["paul-conv"].full;
  $("#dmScalesText").textContent = PAUL.scales.t;
  $("#dmScalesRef").textContent = PAUL.scales.r;
  $("#paulFacts").innerHTML = `
    <figure class="pf-portrait zoomable" data-lb-name="Paul">${artImg(PAUL.portrait, { group: "paul", caption: T("Paul of Tarsus") })}</figure>
    <div class="pf-list">
      <p class="eyebrow">${T("Paul of Tarsus")}</p>
      <h2 class="ap-name">${esc(PAUL.name)}</h2>
      <p class="ap-epithet">${esc(PAUL.also)}</p>
      <dl class="ap-facts">${PAUL.facts.map(([k, v, r]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}${r ? ` <cite>${esc(r)}</cite>` : ""}</dd></div>`).join("")}</dl>
      <div class="ap-scenes two">${["paul-athens", "paul-prison"].map((k) => `<figure class="zoomable" data-lb-name="Paul">${artImg(k, { group: "paul", caption: PAUL.name })}<figcaption>${credit(k)}</figcaption></figure>`).join("")}</div>
    </div>`;

  // Journeys on the Mediterranean
  (function paulMap() {
    const layers = PAUL.journeys.map((j, ji) => {
      const pts = j.stops.map(([, lon, lat]) => project("med", lon, lat));
      const seen = new Set();
      const cities = j.stops.map(([n], k) => {
        if (seen.has(n)) return ""; seen.add(n);
        const p = pts[k];
        return `<g class="city" data-k="${k}"><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4" /><text x="${(p[0] + 6).toFixed(1)}" y="${(p[1] - 5).toFixed(1)}">${esc(n)}</text></g>`;
      }).join("");
      return `<g class="journey" data-j="${ji}" style="--ac:${j.color}"><path class="route-line" d="${smoothPath(pts)}" pathLength="1" />${cities}</g>`;
    }).join("");
    const [rx, ry] = project("med", 12.48, 41.9), [jx, jy] = project("med", 35.23, 31.78);
    const anchors = `<g class="anchor"><circle cx="${jx}" cy="${jy}" r="4.5"/><text x="${jx + 8}" y="${jy + 14}">${T("Jerusalem")}</text></g><g class="anchor"><circle cx="${rx}" cy="${ry}" r="4.5"/><text x="${rx + 8}" y="${ry - 8}">${T("Rome")}</text></g>`;
    $("#pmMap").innerHTML = dotMap("med", layers + anchors, { label: T("Map of Paul's journeys"), color: "rgba(255,255,255,.14)" });
    $("#pmSteps").innerHTML = PAUL.journeys.map((j, ji) => `
      <article class="pm-step" data-j="${ji}" style="--ac:${j.color}">
        <span class="pm-n">${ji + 1} / ${PAUL.journeys.length}</span>
        <h3>${esc(j.name)}</h3>
        <p class="pm-years">${esc(j.years)} · ${esc(j.ref)}</p>
        <p>${esc(j.text)}</p>
      </article>`).join("");
  })();

  $("#sufferGrid").innerHTML = PAUL.sufferings.map(([n, what, note]) => `<div class="suffer"><b data-to="${n}">0</b><span>${esc(what)}</span>${note ? `<em>${esc(note)}</em>` : ""}</div>`).join("");
  $("#sufferRef").textContent = PAUL.sufferRef;
  $("#letters").innerHTML = PAUL.letters.map((l, i) => `<div class="letter reveal-up"><span class="letter-n">${String(i + 1).padStart(2, "0")}</span><b>${esc(l)}</b><em>“${esc(PAUL.letterLines[l])}”</em></div>`).join("");
  $("#paulDeathImg").src = ART["paul-death"].src;
  $("#paulLast").innerHTML = `“${esc(PAUL.last.t)}”<cite>${esc(PAUL.last.r)}</cite>`;
  $("#paulDeath").innerHTML = `
    <span class="dc-icon">${icon("sword")}</span>
    <div class="dc-main"><b>${esc(PAUL.death.how)}</b><span>${esc(PAUL.death.where)} · ${esc(PAUL.death.when)}</span><em class="dc-src tradition">${T("Early church tradition")}</em></div>
    <p>${esc(PAUL.death.text)}</p>`;

  // Seats and fates scroll smoothly to chapters
  $$(".seat, .fate").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); scrollToEl(a.getAttribute("href"), -40); }));

  if (!ANIM) {
    $$(".suffer b").forEach((b) => (b.textContent = b.dataset.to));
    $$(".scene-veil").forEach((v) => v.remove());
    return;
  }

  /* ========================================================================
     Scroll choreography
     ======================================================================== */
  const PIN = { scrub: 1, pin: true };

  // Opening: the title, then who they were
  const who = $$("#apWho span");
  const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".ap-hero", start: "top top", end: "+=260%", ...PIN } });
  gsap.from("#apHeroCopy > *", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.18, duration: 1.4, ease: "power3.out", delay: 0.2 });
  heroTl.fromTo("#apHeroImg", { scale: 1.12 }, { scale: 1, duration: 4, ease: "none" }, 0)
    .to("#apHeroCopy", { opacity: 0, y: -60, filter: "blur(10px)", duration: 0.6 }, 0.5)
    .to(".ap-hero .ph-shade", { backgroundColor: "rgba(0,0,0,.6)", duration: 0.6 }, 0.5);
  who.forEach((w, i) => {
    const at = 1.1 + i * 0.4;
    heroTl.fromTo(w, { opacity: 0, y: 24, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.3 }, at);
    if (i) heroTl.to(who[i - 1], { opacity: 0.35, duration: 0.3 }, at);
  });
  heroTl.to(who[who.length - 1], { opacity: 0.35, duration: 0.3 }, 1.1 + who.length * 0.4)
    .fromTo("#apWhoEnd", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 1.1 + who.length * 0.4)
    .to({}, { duration: 0.7 });
  heroTl.fromTo($(".ap-hero .scene-veil"), { opacity: 0 }, { opacity: 1, duration: 0.5, immediateRender: false }, heroTl.duration());
  gsap.set($(".ap-hero .scene-veil"), { opacity: 0 });

  // The table
  gsap.from(".ap-table-sec .container > *:not(.ap-table):not(.ap-table-extra)", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".ap-table-sec", start: "top 70%" } });
  ScrollTrigger.batch(".seat", { start: "top 92%", onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 50, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 1, ease: "power3.out", overwrite: true }) });

  // World map: routes draw one after another
  const routeEls = $$("#apWorldMap .route");
  gsap.set($$("#apWorldMap .route-line"), { strokeDasharray: 1, strokeDashoffset: 1 });
  const worldTl = gsap.timeline({ scrollTrigger: { trigger: ".ap-world", start: "top top", end: "+=320%", ...PIN } });
  worldTl.from(".ap-world-head > *:not(.ap-legend)", { opacity: 0, y: 30, stagger: 0.1, duration: 0.4 });
  routeEls.forEach((r, i) => {
    const at = 0.4 + i * 0.45;
    const li = $(`#apLegend li[data-id="${r.dataset.id}"]`);
    worldTl.to($(".route-line", r), { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut" }, at)
      .fromTo([$(".route-end", r), $(".route-label", r)], { opacity: 0 }, { opacity: 1, duration: 0.25 }, at + 0.75)
      .fromTo(li, { opacity: 0.25 }, { opacity: 1, duration: 0.2 }, at);
  });
  worldTl.to({}, { duration: 0.8 });
  veil($(".ap-world"), $(".ap-world .scene-veil"), worldTl, 0.1);

  // Chapters
  ScrollTrigger.batch(".reveal-up", { start: "top 90%", onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 1.1, ease: "power3.out", overwrite: true }) });
  $$(".ap").forEach((sec) => {
    const visual = $(".ap-visual", sec);
    gsap.from($(".ap-head", sec).children, { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.08, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: sec, start: "top 65%" } });
    gsap.fromTo($(".ap-frame", sec), { clipPath: "inset(12% 12% 12% 12% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", ease: "none", scrollTrigger: { trigger: sec, start: "top 90%", end: "top 20%", scrub: true } });
    // the portrait gives way to the martyrdom as we reach "The End"
    ScrollTrigger.create({ trigger: $("[data-end-trigger]", sec), start: "top 60%", end: "bottom top", toggleClass: { targets: visual, className: "ended" } });
    // the road draws itself
    const line = $(".ap-map .route-line", sec);
    if (line) {
      gsap.set(line, { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.to(line, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: $(".ap-map", sec), start: "top 80%", end: "bottom 45%", scrub: 0.6 } });
    }
  });
  ScrollTrigger.batch(".fate", { start: "top 92%", onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.9, ease: "power3.out", overwrite: true }) });

  // Paul: before
  gsap.from(".pb-copy > *", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".paul-before", start: "top 65%" } });
  gsap.fromTo("#stephenImg", { scale: 1.12 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".paul-before", start: "top bottom", end: "bottom top", scrub: true } });

  // Damascus: light, voice, blindness, and the scales falling
  const lines = $$(".dm-line");
  const dmTl = gsap.timeline({ scrollTrigger: { trigger: ".damascus", start: "top top", end: "+=520%", ...PIN } });
  dmTl.fromTo(lines[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 })
    .to(".dm-light", { opacity: 1, scale: 1, duration: 1.2, ease: "power2.in" }, 0.4)
    .to(lines[0], { opacity: 0, duration: 0.4 }, 1.3);
  lines.slice(1).forEach((l, i) => {
    const at = 1.7 + i * 1.1;
    dmTl.fromTo(l, { opacity: 0, y: 30, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, at)
      .to(l, { opacity: 0, y: -20, filter: "blur(8px)", duration: 0.4 }, at + 0.8);
  });
  const blindAt = 1.7 + (lines.length - 1) * 1.1 + 0.2;
  dmTl.to(".dm-light", { opacity: 0, duration: 1 }, blindAt)
    .fromTo(".dm-blind", { opacity: 0 }, { opacity: 1, duration: 0.6 }, blindAt + 0.4)
    .to(".dm-blind", { opacity: 0, duration: 0.5 }, blindAt + 1.8)
    .fromTo(".dm-scales", { opacity: 0 }, { opacity: 1, duration: 0.4 }, blindAt + 2.2)
    .fromTo(".dm-scales-media img", { filter: "blur(28px) brightness(.6)", scale: 1.12 }, { filter: "blur(0px) brightness(1)", scale: 1, duration: 1.8, ease: "power1.out" }, blindAt + 2.3)
    .fromTo(".dm-scales-copy", { filter: "blur(16px)", opacity: 0.2 }, { filter: "blur(0px)", opacity: 1, duration: 1.4 }, blindAt + 2.5)
    .to({}, { duration: 0.8 });
  veil($(".damascus"), $(".damascus .scene-veil"), dmTl, 0.08);

  gsap.from(".pf-grid > *", { opacity: 0, y: 50, filter: "blur(8px)", stagger: 0.15, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".paul-facts", start: "top 70%" } });

  // The journeys, one after another
  const journeys = $$("#pmMap .journey"), steps = $$(".pm-step");
  gsap.set($$("#pmMap .route-line"), { strokeDasharray: 1, strokeDashoffset: 1 });
  gsap.set($$("#pmMap .city"), { opacity: 0 });
  const setStep = (ji) => steps.forEach((st, k) => st.classList.toggle("on", k === ji));
  setStep(0);
  const pmTl = gsap.timeline({ scrollTrigger: { trigger: ".paul-map", start: "top top", end: "+=460%", ...PIN,
    onUpdate: (self) => setStep(Math.min(journeys.length - 1, Math.floor((self.progress * pmTl.duration()) / 2.2))) } });
  journeys.forEach((g, ji) => {
    const at = ji * 2.2, cities = $$(".city", g);
    pmTl.to(journeys.filter((_, k) => k < ji), { opacity: 0.28, duration: 0.3 }, at)
      .to($(".route-line", g), { strokeDashoffset: 0, duration: 1.6, ease: "none" }, at + 0.2)
      .to(cities, { opacity: 1, stagger: 1.4 / Math.max(1, cities.length), duration: 0.2 }, at + 0.25);
  });
  pmTl.to(journeys, { opacity: 1, duration: 0.4 }).to({}, { duration: 0.6 });
  veil($(".paul-map"), $(".paul-map .scene-veil"), pmTl, 0.08);

  // Sufferings count up
  $$(".suffer b").forEach((b) => {
    const o = { v: 0 }, to = +b.dataset.to;
    gsap.to(o, { v: to, duration: 2, ease: "power3.out", onUpdate: () => (b.textContent = Math.round(o.v)), scrollTrigger: { trigger: ".paul-suffer", start: "top 70%" } });
  });
  gsap.from(".paul-suffer .section-title, .paul-letters .section-title, .paul-letters .section-lede", { opacity: 0, y: 40, filter: "blur(8px)", duration: 1.1, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".paul-suffer", start: "top 70%" } });

  // The end
  gsap.fromTo("#paulDeathImg", { scale: 1.15, filter: "brightness(.5)" }, { scale: 1, filter: "brightness(.85)", ease: "none", scrollTrigger: { trigger: ".paul-end", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.from(".pe-copy > *", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.2, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: ".paul-end", start: "top 55%" } });

  Core.sortTriggers();
})();
