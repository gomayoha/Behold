/* ==========================================================================
   Behold — Mother Mary
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, h, esc, lerp, REDUCED, HAS_GSAP, splitWords, artImg, credit, veil, project, dotMap, toast } = Core;
  const ANIM = HAS_GSAP && !REDUCED;
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  /* ------------------------------------------------------------------------
     Opening
     ------------------------------------------------------------------------ */
  $("#mhImg").src = ART.sassoferrato.full;
  const hailWords = splitWords($("#mhHail"));

  (function stars() {
    const c = $("#mhStars"), ctx = c.getContext("2d");
    let W, H, dpr, pts = [], visible = true;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      pts = Array.from({ length: 90 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: (Math.random() * 1.6 + 0.4) * dpr, v: (Math.random() * 0.2 + 0.05) * dpr, p: Math.random() * 6.28 }));
    };
    resize(); window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    (function frame(t) {
      requestAnimationFrame(frame);
      if (!visible || REDUCED) return;
      ctx.clearRect(0, 0, W, H);
      for (const s of pts) {
        s.y += s.v; if (s.y > H + 5) { s.y = -5; s.x = Math.random() * W; }
        const a = 0.35 + 0.65 * Math.abs(Math.sin(t / 1400 + s.p));
        ctx.globalAlpha = a; ctx.fillStyle = "#eaf3ff";
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
        if (s.r > 1.6 * dpr) { ctx.globalAlpha = a * 0.5; ctx.fillRect(s.x - s.r * 3, s.y - 0.4, s.r * 6, 0.8); ctx.fillRect(s.x - 0.4, s.y - s.r * 3, 0.8, s.r * 6); }
      }
    })(0);
  })();

  /* ------------------------------------------------------------------------
     Bead rail: the page's progress counted on a rosary
     ------------------------------------------------------------------------ */
  (function rail() {
    let html = '<i class="br-cross"></i>';
    const seq = ["L", "s", "s", "s", "L"];
    for (let d = 0; d < 5; d++) { for (let k = 0; k < 10; k++) seq.push("s"); if (d < 4) seq.push("L"); }
    seq.reverse().forEach((t) => (html += `<i class="br-bead ${t === "L" ? "big" : ""}"></i>`));
    $("#beadRail").innerHTML = html;
  })();

  /* ------------------------------------------------------------------------
     Her life
     ------------------------------------------------------------------------ */
  $("#life").innerHTML = MARY_LIFE.map((c, i) => {
    const group = `mary-${c.id}`;
    return `
    <article class="life-ch ${i % 2 ? "flip" : ""}" id="life-${c.id}" data-lb-name="${esc(c.title)}">
      <figure class="life-art zoomable">${artImg(c.img, { group, caption: c.title })}<figcaption>${credit(c.img)}</figcaption></figure>
      <div class="life-copy">
        <span class="life-n">${ROMAN[i]}</span>
        <p class="life-tag">${esc(c.tag)}</p>
        <h3 class="life-title">${esc(c.title)}</h3>
        <p class="life-text">${esc(c.text)}</p>
        ${c.note ? `<p class="life-note">${esc(c.note)}</p>` : ""}
        <cite class="life-ref">${esc(c.ref)}</cite>
        ${c.more.length ? `<div class="life-more">${c.more.map((k) => `<figure class="zoomable" title="${esc(ART[k].title)}">${artImg(k, { group, caption: c.title })}</figure>`).join("")}</div>` : ""}
      </div>
    </article>`;
  }).join("");
  const mg = $("#tpl-magnificat").content.firstElementChild.cloneNode(true);
  $("#life-visitation").after(mg);
  $("#mgLines").innerHTML = MAGNIFICAT.map((l) => `<p class="mg-line">${esc(l)}</p>`).join("");

  /* ------------------------------------------------------------------------
     Her words
     ------------------------------------------------------------------------ */
  $("#wordsGrid").innerHTML = MARY_WORDS.map((w, i) => `
    <figure class="word-card reveal-up">
      <span class="word-n">${ROMAN[i]}</span>
      <blockquote>“${esc(w.t)}”</blockquote>
      <figcaption><b>${esc(w.to)}</b><span>${esc(w.r)}</span></figcaption>
    </figure>`).join("");

  /* ------------------------------------------------------------------------
     The Seven Sorrows: a heart that receives a sword for each
     ------------------------------------------------------------------------ */
  (function heart() {
    const angles = [205, 180, 155, -90, 25, 0, -25];
    const swords = angles.map((a, i) => `
      <g class="sword" data-i="${i}" transform="rotate(${a} 50 50)">
        <path class="blade" d="M62 50 L106 48.4 L106 51.6 Z" />
        <path class="guard" d="M106 42 V58" />
        <path class="grip" d="M106 50 H121" />
        <circle class="pommel" cx="123.5" cy="50" r="2.6" />
      </g>`).join("");
    $("#heart").innerHTML = `
      <defs>
        <radialGradient id="hg" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#ff8a8a"/><stop offset=".55" stop-color="#c8283b"/><stop offset="1" stop-color="#7c0f22"/></radialGradient>
        <radialGradient id="fg" cx="50%" cy="80%" r="80%"><stop offset="0" stop-color="#fff6d6"/><stop offset=".5" stop-color="#ffc861"/><stop offset="1" stop-color="#ff7a2e" stop-opacity="0"/></radialGradient>
      </defs>
      <path class="flame" d="M50 14 C44 6 47 -2 50 -8 C53 -2 57 5 52 11 C58 6 60 0 59 -4 C64 3 60 12 54 16 Z" fill="url(#fg)" />
      <g class="swords">${swords}</g>
      <path class="heart-shape" d="M50 88 C22 68 8 52 8 34 C8 20 18 11 30 11 C39 11 46 16 50 23 C54 16 61 11 70 11 C82 11 92 20 92 34 C92 52 78 68 50 88 Z" fill="url(#hg)" />
      <path class="heart-shine" d="M22 30 C22 22 28 17 34 17" />
      <g class="roses">${[20, 35, 50, 65, 80].map((x, i) => `<circle cx="${x}" cy="${[46, 60, 70, 60, 46][i]}" r="4.2" style="transition-delay:${i * 0.12}s" />`).join("")}</g>`;
  })();
  const ORD_WORDS = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"];
  function sorrowLabel(i) { return T("The {ord} sorrow", { ord: T(ORD_WORDS[i]) }); }
  $("#sorrowList").innerHTML = SORROWS.map((s, i) => `
    <article class="sorrow" data-i="${i}" data-lb-name="The Seven Sorrows">
      <figure class="zoomable">${artImg(s.img, { group: "sorrows", caption: `${s.n}. ${s.title}` })}</figure>
      <div class="sorrow-copy">
        <span class="sorrow-n">${sorrowLabel(i)}</span>
        <h3>${esc(s.title)}</h3>
        <blockquote>“${esc(s.q)}”<cite>${esc(s.ref)}</cite></blockquote>
        <p>${esc(s.text)}</p>
      </div>
    </article>`).join("");
  $("#hardGrid").innerHTML = HARDSHIPS.map(([t, d, r]) => `<div class="hard reveal-up"><b>${esc(t)}</b><p>${esc(d)}</p><cite>${esc(r)}</cite></div>`).join("");

  /* ------------------------------------------------------------------------
     Rosary history and the Mysteries
     ------------------------------------------------------------------------ */
  const rhArt = $$(".rh-art figure");
  rhArt[0].innerHTML = artImg("rosary-cara", { group: "rosary", caption: ART["rosary-cara"].title }) + `<figcaption>${credit("rosary-cara")}</figcaption>`;
  rhArt[1].innerHTML = artImg("murillo-rosary", { group: "rosary", caption: ART["murillo-rosary"].title }) + `<figcaption>${credit("murillo-rosary")}</figcaption>`;
  $("#rhLine").innerHTML = ROSARY_HISTORY.map((e) => `
    <li class="rh-item reveal-up">
      <span class="rh-bead"></span>
      <p class="rh-when">${esc(e.when)}</p>
      <h3>${esc(e.title)}</h3>
      <p>${esc(e.text)}</p>
      ${e.img ? `<figure class="rh-img zoomable" data-lb-name="${T("Rosary")}">${artImg(e.img, { group: "rosary", caption: e.title })}<figcaption>${credit(e.img)}</figcaption></figure>` : ""}
    </li>`).join("");

  const DAY_SET = ["glorious", "joyful", "sorrowful", "glorious", "luminous", "sorrowful", "joyful"][new Date().getDay()];
  const SET_KEYS = ["joyful", "luminous", "sorrowful", "glorious"];
  const ORD_EN = ["First", "Second", "Third", "Fourth", "Fifth"];
  const ordWord = (i) => (I18N.on ? T(ORD_WORDS[i]) : ORD_EN[i]);
  const mystLabel = (i, set) => T("{ord} {name} Mystery", { ord: ordWord(i), name: set.name });
  const mystSet = (set) => T("The {name} Mysteries", { name: set.name });
  $$('[data-lb-name="The Rosary"]').forEach((el) => (el.dataset.lbName = T("Rosary")));
  function renderMysteries(key) {
    const set = MYSTERIES[key];
    $$("#mystTabs button").forEach((b) => b.classList.toggle("active", b.dataset.set === key));
    $("#mystGrid").innerHTML = set.list.map(([t, r, fruit, img], i) => `
      <article class="myst" style="--mc:${set.color}" data-lb-name="${esc(mystSet(set))}">
        <figure class="zoomable">${artImg(img, { group: `myst-${key}`, caption: `${mystLabel(i, set)} — ${t}` })}</figure>
        <div class="myst-copy">
          <span class="myst-n">${mystLabel(i, set)}</span>
          <h3>${esc(t)}</h3>
          <p class="myst-ref">${esc(r)}</p>
          <p class="myst-fruit"><span>${T("Fruit")}</span>${esc(fruit)}</p>
        </div>
      </article>`).join("");
    if (HAS_GSAP) gsap.fromTo("#mystGrid .myst", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.07, duration: 0.8, ease: "power3.out" });
  }
  $("#mystTabs").innerHTML = SET_KEYS.map((k) => `<button data-set="${k}">${MYSTERIES[k].name}${k === DAY_SET ? ` <em>${T("Today")}</em>` : ""}<small>${MYSTERIES[k].days}</small></button>`).join("");
  $$("#mystTabs button").forEach((b) => b.addEventListener("click", () => renderMysteries(b.dataset.set)));
  renderMysteries(DAY_SET);

  /* ------------------------------------------------------------------------
     Pray the Rosary
     ------------------------------------------------------------------------ */
  const Rosary = (function () {
    const svg = $("#rosarySvg");
    const cx = 200, cy = 200, rx = 150, ry = 168;
    const beads = {}; // id -> {x, y, r, big}
    // loop: decade 1..5 with a large bead between decades, a gap at the bottom for the medal
    const loopSeq = [];
    for (let d = 0; d < 5; d++) { for (let k = 0; k < 10; k++) loopSeq.push(`d${d}-${k}`); if (d < 4) loopSeq.push(`L${d + 1}`); }
    const gap = 0.36, start = Math.PI / 2 + gap, span = Math.PI * 2 - gap * 2;
    loopSeq.forEach((id, i) => {
      const t = start + (span * i) / (loopSeq.length - 1);
      beads[id] = { x: cx + Math.cos(t) * rx, y: cy + Math.sin(t) * ry, r: id.startsWith("L") ? 9 : 6, big: id.startsWith("L") };
    });
    const medal = { x: cx, y: cy + ry + 26 };
    const pend = [["P2", 426, 9], ["s3", 452, 6], ["s2", 472, 6], ["s1", 492, 6], ["P1", 520, 9]];
    pend.forEach(([id, y, r]) => (beads[id] = { x: cx, y, r, big: r > 6 }));
    beads.medal = { x: medal.x, y: medal.y, r: 12, medal: true };
    beads.cross = { x: cx, y: 562, r: 14, cross: true };

    // chain
    let chain = `M${beads["d0-0"].x.toFixed(1)},${beads["d0-0"].y.toFixed(1)}`;
    for (let i = 1; i < loopSeq.length; i++) { const b = beads[loopSeq[i]]; chain += ` L${b.x.toFixed(1)},${b.y.toFixed(1)}`; }
    const first = beads["d0-0"], last = beads[loopSeq[loopSeq.length - 1]];
    const chainPaths = `
      <path class="chain" d="${chain}" />
      <path class="chain" d="M${first.x},${first.y} Q${cx - 30},${medal.y - 4} ${medal.x},${medal.y}" />
      <path class="chain" d="M${last.x},${last.y} Q${cx + 30},${medal.y - 4} ${medal.x},${medal.y}" />
      <path class="chain" d="M${cx},${medal.y} V548" />`;
    const beadEls = Object.entries(beads).map(([id, b]) => {
      if (b.medal) return `<g class="bead medal" data-id="medal"><path d="M${b.x},${b.y - 14} C${b.x + 12},${b.y - 14} ${b.x + 12},${b.y + 12} ${b.x},${b.y + 16} C${b.x - 12},${b.y + 12} ${b.x - 12},${b.y - 14} ${b.x},${b.y - 14} Z" /><path class="medal-m" d="M${b.x - 5},${b.y + 5} V${b.y - 5} L${b.x},${b.y + 1} L${b.x + 5},${b.y - 5} V${b.y + 5}" /></g>`;
      if (b.cross) return `<g class="bead cross" data-id="cross"><path d="M${b.x - 3.5},${b.y - 16} h7 v10 h10 v7 h-10 v24 h-7 v-24 h-10 v-7 h10 z" /></g>`;
      return `<circle class="bead ${b.big ? "big" : ""}" data-id="${id}" cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r}" />`;
    }).join("");
    svg.innerHTML = `<defs><radialGradient id="beadG" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c7d8ee"/></radialGradient></defs>${chainPaths}${beadEls}`;

    // steps
    let setKey = DAY_SET;
    const build = () => {
      const S = [];
      const myst = (i) => ({ i, set: setKey });
      S.push({ bead: "cross", p: "sign" }, { bead: "cross", p: "creed" }, { bead: "P1", p: "father" });
      ["faith", "hope", "charity"].forEach((v, k) => S.push({ bead: `s${k + 1}`, p: "hail", note: `For an increase of ${v}`, count: [k + 1, 3] }));
      S.push({ bead: "P2", p: "glory" }, { bead: "P2", p: "father", m: myst(0), announce: true });
      for (let d = 0; d < 5; d++) {
        for (let k = 0; k < 10; k++) S.push({ bead: `d${d}-${k}`, p: "hail", m: myst(d), count: [k + 1, 10] });
        const after = d < 4 ? `L${d + 1}` : "medal";
        S.push({ bead: after, p: "glory", m: myst(d) }, { bead: after, p: "fatima", m: myst(d) });
        if (d < 4) S.push({ bead: after, p: "father", m: myst(d + 1), announce: true });
      }
      S.push({ bead: "medal", p: "queen" }, { bead: "cross", p: "sign", end: true });
      return S;
    };
    let steps = build(), idx = 0;
    const KEY = "behold.rosary";
    try { const saved = JSON.parse(localStorage.getItem(KEY)); if (saved && saved.day === new Date().toDateString()) { setKey = saved.set; steps = build(); idx = Math.min(saved.idx, steps.length - 1); } } catch (e) { /* storage unavailable */ }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ day: new Date().toDateString(), set: setKey, idx })); } catch (e) { /* storage unavailable */ } };

    const select = $("#praySet");
    select.innerHTML = SET_KEYS.map((k) => `<option value="${k}">${MYSTERIES[k].name}${k === DAY_SET ? " " + T("(today)") : ""}</option>`).join("");
    select.value = setKey;

    function render() {
      const s = steps[idx], P = PRAYERS[s.p];
      const beadOrder = steps.map((x) => x.bead);
      $$(".bead", svg).forEach((el) => {
        const id = el.dataset.id;
        const firstIdx = beadOrder.indexOf(id), lastIdx = beadOrder.lastIndexOf(id);
        el.classList.toggle("current", id === s.bead);
        el.classList.toggle("prayed", lastIdx < idx || (firstIdx < idx && id !== s.bead));
      });
      const mEl = $("#prayMystery");
      if (s.m) {
        const set = MYSTERIES[s.m.set], [t, r, fruit, img] = set.list[s.m.i];
        const label = mystLabel(s.m.i, set);
        mEl.innerHTML = `<figure class="zoomable" data-lb-name="${esc(mystSet(set))}">${artImg(img, { group: "pray-myst", caption: t })}</figure>
          <div><span>${s.announce ? T("Announce: {m}", { m: label }) : label}</span><b>${esc(t)}</b><em>${esc(r)} · ${T("Fruit")}: ${esc(fruit)}</em></div>`;
        mEl.classList.add("show");
      } else if (s.note) {
        mEl.innerHTML = `<div><span>${T("The opening prayers")}</span><b>${esc(T(s.note))}</b></div>`;
        mEl.classList.add("show");
      } else { mEl.innerHTML = ""; mEl.classList.remove("show"); }
      $("#prayName").textContent = P.name;
      $("#prayText").textContent = P.text;
      $("#prayCount").textContent = s.count ? T("{a} of {b}", { a: s.count[0], b: s.count[1] }) : "";
      $("#prayProgress").textContent = `${idx + 1} / ${steps.length}`;
      $("#prayPrev").disabled = idx === 0;
      $("#prayNext").textContent = idx === steps.length - 1 ? T("Amen") : T("Next bead");
      if (HAS_GSAP) gsap.fromTo(["#prayName", "#prayText"], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" });
      save();
    }
    const go = (d) => {
      if (idx === steps.length - 1 && d > 0) { toast(T("Amen. Thank you for praying.")); return; }
      idx = Math.max(0, Math.min(steps.length - 1, idx + d)); render();
    };
    $("#prayNext").addEventListener("click", () => go(1));
    $("#prayPrev").addEventListener("click", () => go(-1));
    $("#prayRestart").addEventListener("click", () => { idx = 0; render(); });
    select.addEventListener("change", () => { setKey = select.value; steps = build(); render(); });
    svg.addEventListener("click", (e) => {
      const el = e.target.closest(".bead"); if (!el) return;
      const i = steps.findIndex((s) => s.bead === el.dataset.id);
      if (i >= 0) { idx = i; render(); }
    });
    let inView = false;
    new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.35 }).observe($(".pray-shell"));
    document.addEventListener("keydown", (e) => {
      if (!inView || $("#lb").classList.contains("open") || /input|select|textarea/i.test(e.target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(-1); }
    });
    render();
  })();

  /* ------------------------------------------------------------------------
     Shrines
     ------------------------------------------------------------------------ */
  (function shrines() {
    // label offsets keep the crowded European and South Indian pins legible
    const LABEL = [[9, 12, "start"], [9, 4, "start"], [-9, 8, "end"], [9, -2, "start"], [9, -3, "start"], [-9, 4, "end"]];
    const pins = SHRINES.map((s, i) => {
      const [x, y] = project("globe", s.lon, s.lat);
      const name = s.place.split(",")[0], [dx, dy, anchor] = LABEL[i] || [9, 4, "start"];
      return `<g class="pin" data-i="${i}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">
        <circle class="pin-pulse" r="4" /><circle class="pin-dot" r="4" />
        <text x="${dx}" y="${dy}" text-anchor="${anchor}">${esc(name)}</text>
      </g>`;
    }).join("");
    const m = MAPS.globe;
    $("#shrineMap").innerHTML = dotMap("globe", pins, { color: "rgba(31,59,115,.22)", label: T("Map of Marian shrines"), view: [0, 6, m.w, m.h - 30] });
    $("#shrineCards").innerHTML = SHRINES.map((s, i) => `
      <article class="shrine reveal-up" data-i="${i}">
        ${s.img ? `<figure class="zoomable" data-lb-name="${esc(s.name)}">${artImg(s.img, { group: "shrines", caption: s.name })}</figure>` : ""}
        <span class="shrine-year">${esc(s.year)}</span>
        <h3>${esc(s.name)}</h3>
        <p class="shrine-place">${esc(s.place)}</p>
        <p>${esc(s.text)}</p>
      </article>`).join("");
    const hl = (i, on) => { $(`.pin[data-i="${i}"]`)?.classList.toggle("on", on); $(`.shrine[data-i="${i}"]`)?.classList.toggle("on", on); };
    $$(".shrine, .pin").forEach((el) => {
      el.addEventListener("mouseenter", () => hl(el.dataset.i, true));
      el.addEventListener("mouseleave", () => hl(el.dataset.i, false));
    });
  })();

  $("#subTuum").textContent = `“${SUB_TUUM}”`;

  if (!ANIM) {
    hailWords.forEach((w) => (w.style.opacity = 1));
    $$(".sword").forEach((s) => s.classList.add("in"));
    $$(".scene-veil").forEach((v) => v.remove());
    return;
  }

  /* ========================================================================
     Scroll choreography
     ======================================================================== */
  const PIN = { scrub: 1, pin: true };

  // Opening: the title, then the Hail Mary word by word, then into the light
  gsap.from("#mhCopy > *", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.2, duration: 1.6, ease: "power3.out", delay: 0.2 });
  const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".mary-hero", start: "top top", end: "+=260%", ...PIN } });
  heroTl.fromTo("#mhImg", { scale: 1.1 }, { scale: 1, duration: 3, ease: "none" }, 0)
    .to("#mhCopy", { opacity: 0, y: -50, filter: "blur(10px)", duration: 0.5 }, 0.3)
    .to(".mh-shade", { opacity: 1, duration: 0.6 }, 0.3)
    .fromTo("#mhHail", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.8)
    .to(hailWords, { opacity: 1, color: "#ffffff", stagger: 0.08, duration: 0.25, ease: "none" }, 0.9)
    .to({}, { duration: 0.5 });
  heroTl.fromTo(".mary-hero .scene-veil", { opacity: 0 }, { opacity: 1, duration: 0.6, immediateRender: false }, heroTl.duration());
  gsap.set(".mary-hero .scene-veil", { opacity: 0 });

  // Bead rail
  const railBeads = $$("#beadRail i");
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: (s) => { const n = Math.round(s.progress * railBeads.length); railBeads.forEach((b, i) => b.classList.toggle("lit", railBeads.length - 1 - i < n)); },
    onToggle: () => {}
  });
  ScrollTrigger.create({ trigger: ".mary-intro", start: "top 80%", endTrigger: ".mary-close", end: "bottom bottom", onToggle: (s) => $("#beadRail").classList.toggle("show", s.isActive) });

  gsap.from(".mary-intro .container > *", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".mary-intro", start: "top 70%" } });

  // Life chapters
  $$(".life-ch").forEach((ch) => {
    const art = $(".life-art", ch), img = $(".life-art img", ch);
    gsap.fromTo(art, { clipPath: "inset(10% 10% 10% 10% round 30px)", opacity: 0.2 }, { clipPath: "inset(0% 0% 0% 0% round 30px)", opacity: 1, ease: "power2.out", scrollTrigger: { trigger: ch, start: "top 85%", end: "top 30%", scrub: 0.8 } });
    gsap.fromTo(img, { yPercent: -6, scale: 1.1 }, { yPercent: 6, scale: 1.1, ease: "none", scrollTrigger: { trigger: ch, start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from($(".life-copy", ch).children, { opacity: 0, y: 36, filter: "blur(8px)", stagger: 0.08, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ch, start: "top 65%" } });
  });

  // Magnificat
  const mgLines = $$(".mg-line");
  const mgTl = gsap.timeline({ scrollTrigger: { trigger: ".magnificat", start: "top top", end: "+=240%", ...PIN } });
  mgTl.from(".mg-title, .magnificat .eyebrow", { opacity: 0, y: 30, duration: 0.4, stagger: 0.1 })
    .to(mgLines, { opacity: 1, color: "#ffffff", stagger: 0.25, duration: 0.3, ease: "none" }, 0.3)
    .from(".mg-ref", { opacity: 0, duration: 0.3 })
    .to({}, { duration: 0.5 });
  veil($(".magnificat"), $(".magnificat .scene-veil"), mgTl, 0.12);

  // Reveals
  ScrollTrigger.batch(".reveal-up", { start: "top 90%", onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 1.1, ease: "power3.out", overwrite: true }) });
  $$(".section .section-title, .section .section-lede, .section > .container > .eyebrow").forEach((el) => {
    if (el.closest(".mary-intro")) return;
    gsap.from(el, { opacity: 0, y: 36, filter: "blur(6px)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  // Sorrows: each card thrusts a sword into the heart
  const swords = $$(".sword");
  $$(".sorrow").forEach((card, i) => {
    gsap.from(card, { opacity: 0, y: 50, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } });
    ScrollTrigger.create({
      trigger: card, start: "top 55%",
      onEnter: () => { swords[i].classList.add("in"); card.classList.add("on"); $("#heartCount").textContent = T("{n} of 7", { n: i + 1 }); },
      onLeaveBack: () => { swords[i].classList.remove("in"); card.classList.remove("on"); $("#heartCount").textContent = T("{n} of 7", { n: i }); }
    });
  });
  ScrollTrigger.create({ trigger: ".sorrow-list", start: "bottom 70%", onEnter: () => $("#heart").classList.add("roses"), onLeaveBack: () => $("#heart").classList.remove("roses") });

  // Rosary history: the string of beads fills as you read
  gsap.fromTo(".rh-line", { "--fill": "0%" }, { "--fill": "100%", ease: "none", scrollTrigger: { trigger: ".rh-line", start: "top 70%", end: "bottom 60%", scrub: 0.5 } });
  $$(".rh-item").forEach((it) => ScrollTrigger.create({ trigger: it, start: "top 70%", onEnter: () => it.classList.add("lit"), onLeaveBack: () => it.classList.remove("lit") }));
  gsap.from(".rh-art figure", { opacity: 0, y: 60, stagger: 0.15, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".rh-art", start: "top 80%" } });
  gsap.from(".pray-shell", { opacity: 0, y: 60, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".pray-shell", start: "top 80%" } });
  gsap.from(".shrine-map", { opacity: 0, scale: 0.97, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".shrine-map", start: "top 80%" } });
  gsap.from(".close-prayer, .close-note, .mary-close .eyebrow", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.15, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".mary-close", start: "top 65%" } });

  Core.sortTriggers();
})();
