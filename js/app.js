/* ==========================================================================
   Behold — the story page
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, h, esc, lerp, smooth, pad, REDUCED, HAS_GSAP, scrollToEl, toast, copyText, splitWords, splitChars, artImg, credit, veil } = Core;
  const ANIM = HAS_GSAP && !REDUCED;
  const GOSPEL_NAMES = { mt: T("Matthew"), mk: T("Mark"), lk: T("Luke"), jn: T("John"), acts: T("Acts") };
  const GOSPEL_SHORT = { mt: T("Mt"), mk: T("Mk"), lk: T("Lk"), jn: T("Jn"), acts: T("Acts") };
  const TYPE_LABEL = { healing: T("Healing"), miracle: T("Miracle"), encounter: T("Encounter"), teaching: T("Teaching") };

  ENCOUNTERS.forEach((e) => { e.img = ENC_ART[e.id] || e.img; });
  const ENC = ENCOUNTERS;
  const encIndex = new Map(ENC.map((e, i) => [e.id, i]));
  const isWonder = (e) => e.type === "healing" || e.type === "miracle";
  const TOTAL = ENC.length;
  const TOTAL_WONDERS = ENC.filter(isWonder).length;
  const actGroup = (ai) => `act-${ai + 1}`;
  const actName = (ai) => T("Act {n} · {title}", { n: ACTS[ai].num, title: ACTS[ai].title });
  const lenis = () => Core.lenis;

  const refsHTML = (refs) => refs.map(([g, r]) => `<span class="ref ${g}" title="${GOSPEL_NAMES[g]} ${esc(r)}">${GOSPEL_SHORT[g]} ${esc(r)}</span>`).join("");

  /* ------------------------------------------------------------------------
     Opening verse
     ------------------------------------------------------------------------ */
  const loader = $("#loader");
  if (lenis()) lenis().stop();
  (function initLoader() {
    const hr = new Date().getHours();
    $("#loaderGreeting").textContent = T(hr < 5 ? "Peace in the night watches" : hr < 12 ? "Good morning · Grace and peace" : hr < 17 ? "Good afternoon · Grace and peace" : "Good evening · Peace be with you");
    $$("#loaderLang button").forEach((b) => {
      b.classList.toggle("on", b.dataset.lang === I18N.lang);
      b.addEventListener("click", (e) => { e.stopPropagation(); I18N.switchTo(b.dataset.lang); });
    });
    let v = VERSES[Math.floor(Math.random() * VERSES.length)];
    if (Math.random() < 0.25) {
      if (hr >= 5 && hr < 11) v = VERSES.find((x) => x.r.startsWith("Lamentations"));
      if (hr >= 21 || hr < 4) v = VERSES.find((x) => x.r === "Psalm 4:8");
    }
    $("#loaderVerse").textContent = v.t;
    $("#loaderRef").textContent = v.r;
    const words = splitWords($("#loaderVerse"));
    if (!HAS_GSAP) {
      [$("#loaderGreeting"), $("#loaderRef"), $("#loaderEnter")].forEach((e) => (e.style.opacity = 1));
      words.forEach((w) => { w.style.opacity = 1; w.style.filter = "none"; w.style.transform = "none"; });
      return;
    }
    gsap.timeline({ delay: 0.4 })
      .to("#loaderGreeting", { opacity: 1, duration: 1.2, ease: "power2.out" })
      .to(words, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.1, stagger: Math.min(0.09, 2.6 / words.length), ease: "power3.out" }, "-=0.6")
      .to("#loaderRef", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5")
      .to("#loaderEnter", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.3")
      .add(armEnter);
  })();

  let entered = false;
  function armEnter() {
    window.addEventListener("wheel", enterSite, { once: true, passive: true });
    window.addEventListener("touchmove", enterSite, { once: true, passive: true });
    window.addEventListener("keydown", (e) => { if (["ArrowDown", " ", "Enter", "PageDown"].includes(e.key)) enterSite(); }, { once: true });
  }
  $("#loaderEnter").addEventListener("click", enterSite);
  // Returning from a language switch mid-story: skip the opening and go straight back in
  if (I18N.resume && I18N.resume.entered) {
    entered = true;
    loader.remove();
    document.body.classList.remove("is-loading");
    $("#nav").classList.add("show");
    if (lenis()) lenis().start();
  }
  function enterSite() {
    if (entered) return;
    entered = true;
    window.scrollTo(0, 0);
    const done = () => {
      loader.remove();
      document.body.classList.remove("is-loading");
      $("#nav").classList.add("show");
      if (lenis()) lenis().start();
      if (HAS_GSAP) ScrollTrigger.refresh();
      if (location.hash && $(location.hash)) setTimeout(() => scrollToEl(location.hash), 200);
    };
    if (!HAS_GSAP) { loader.style.display = "none"; return done(); }
    gsap.timeline({ onComplete: done })
      .to(".loader-inner", { opacity: 0, y: -30, filter: "blur(10px)", duration: 1.1, ease: "power2.in" })
      .to(loader, { opacity: 0, duration: 1, ease: "power2.inOut" }, "-=0.35");
  }

  /* ------------------------------------------------------------------------
     Hero
     ------------------------------------------------------------------------ */
  $("#heroImg").src = ART.desert.src;
  const heroWords = splitWords($("#heroLine"));

  (function dust() {
    const c = $("#dust"), ctx = c.getContext("2d");
    let W, H, dpr, parts = [], visible = true;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      parts = Array.from({ length: Math.round((c.offsetWidth * c.offsetHeight) / 9000) }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: (Math.random() * 1.4 + 0.3) * dpr,
        vy: -(Math.random() * 0.25 + 0.05) * dpr, vx: (Math.random() - 0.5) * 0.12 * dpr, a: Math.random() * 0.6 + 0.1, p: Math.random() * 6.28
      }));
    };
    resize(); window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    (function frame(t) {
      requestAnimationFrame(frame);
      if (!visible || REDUCED) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        ctx.globalAlpha = p.a * (0.6 + 0.4 * Math.sin(t / 900 + p.p));
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = "#f3dca4"; ctx.fill();
      }
    })(0);
  })();

  /* ------------------------------------------------------------------------
     Verse of the day
     ------------------------------------------------------------------------ */
  (function votd() {
    const d = new Date();
    const seed = d.getFullYear() * 1000 + Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
    let idx = seed % VERSES.length;
    const vEl = $("#votdVerse"), rEl = $("#votdRef");
    const show = (i, animate) => {
      const v = VERSES[i];
      const apply = () => { vEl.textContent = `“${v.t}”`; rEl.textContent = v.r; };
      if (!animate || !HAS_GSAP) return apply();
      gsap.timeline()
        .to([vEl, rEl], { opacity: 0, y: 10, filter: "blur(10px)", duration: 0.45, ease: "power2.in", onComplete: apply })
        .to([vEl, rEl], { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" });
    };
    show(idx, false);
    $("#votdShuffle").addEventListener("click", () => {
      let n; do { n = Math.floor(Math.random() * VERSES.length); } while (n === idx);
      idx = n; $("#votdLabel").textContent = T("A Word for this Moment"); show(idx, true);
    });
    $("#votdCopy").addEventListener("click", () => copyText(`“${VERSES[idx].t}” — ${VERSES[idx].r}${T(" (KJV)")}`));
  })();

  /* ------------------------------------------------------------------------
     Four Gospels + numbers
     ------------------------------------------------------------------------ */
  $("#gospelsTrack").insertAdjacentHTML("beforeend", GOSPELS.map((g) => {
    const count = ENC.filter((e) => e.refs.some(([k]) => k === g.key)).length;
    return `<article class="gcard" data-g="${g.key}">
      <span class="gcard-letter" aria-hidden="true">${g.letter}</span>
      <p class="gcard-symbol">${g.symbol}</p>
      <h3>${g.name}</h3>
      <p class="portrait">${g.portrait}</p>
      <div class="gmeta"><span><b>${g.chapters}</b> ${T("chapters")}</span><span><b>${count}</b> ${T("encounters here")}</span></div>
      <p>${g.who}</p>
      <p>${g.audience}</p>
      <blockquote class="gopen">“${g.open.t}”<cite>${g.open.r}</cite></blockquote>
    </article>`;
  }).join(""));
  $$("[data-count-key]").forEach((el) => { el.dataset.count = el.dataset.countKey === "people" ? TOTAL : TOTAL_WONDERS; });

  /* ------------------------------------------------------------------------
     Build the story
     ------------------------------------------------------------------------ */
  const INTERLUDE_AFTER = { storm: "storm", loaves: "loaves", "man-born-blind": "light", "mary-cross": "golgotha" };

  function encHTML(e, side) {
    const i = encIndex.get(e.id), a = ART[e.img];
    const img = a ? `<figure class="${e.feature ? "enc-media" : "enc-thumb"} zoomable">${artImg(e.img, { group: actGroup(e.act), caption: e.name })}<figcaption>${credit(e.img)}</figcaption></figure>` : "";
    const body = `
      <div class="enc-body">
        <span class="enc-no">${pad(i + 1)} / ${pad(TOTAL)}</span>
        <div class="enc-meta"><span class="badge ${e.type}">${TYPE_LABEL[e.type]}</span><span class="enc-place">${esc(e.place)}</span></div>
        <h3 class="enc-name">${esc(e.name)}</h3>
        <p class="enc-role">${esc(e.role)}</p>
        <p class="enc-text">${esc(e.text)}</p>
        <blockquote class="enc-quote">“${esc(e.quote)}”<cite>${esc(e.qref)}</cite></blockquote>
        <div class="refs">${refsHTML(e.refs)}</div>
      </div>`;
    const cls = e.feature && a ? `enc feature ${side === "right" ? "flip" : ""}` : `enc ${side}`;
    return `<article class="${cls}" id="enc-${e.id}" data-type="${e.type}" data-i="${i}" data-lb-name="${esc(actName(e.act))}">
      <span class="enc-dot"></span>
      <div class="enc-card">${img}${body}</div>
    </article>`;
  }
  function interlude(name) {
    const node = $(`#tpl-${name}`).content.firstElementChild.cloneNode(true);
    $$("img[data-art]", node).forEach((img) => { img.src = ART[img.dataset.art].src; img.loading = "lazy"; img.decoding = "async"; });
    $(".il-stage", node).insertAdjacentHTML("beforeend", '<div class="scene-veil" aria-hidden="true"></div>');
    return node;
  }
  const newThread = () => h(`<div class="thread"><span class="thread-line"><i></i></span></div>`);

  ACTS.forEach((act, ai) => {
    const sec = h(`<section class="act" id="act-${ai + 1}" data-act="${ai}"></section>`);
    if (act.theme === "light") {
      sec.appendChild(interlude("dawn"));
    } else {
      sec.appendChild(h(`
        <div class="act-hero">
          <div class="act-media" ${act.pos ? `style="--pos:${act.pos}"` : ""}>${artImg(act.img, { eager: ai === 0 })}</div>
          ${ai === 0 ? '<canvas class="act-stars" aria-hidden="true"></canvas>' : ""}
          <div class="act-shade"></div>
          <div class="act-copy">
            <span class="act-num">${T("Act {n}", { n: act.num })}</span>
            <h2 class="act-title">${esc(act.title)}</h2>
            <p class="act-places">${esc(act.places)}</p>
            <blockquote class="act-verse">“${esc(act.verse.t)}”<cite>${esc(act.verse.r)}</cite></blockquote>
          </div>
          <span class="act-era">${esc(act.era)}</span>
          <span class="act-credit">${credit(act.img).replace("</i> — ", "</i><br>")}</span>
          <div class="scene-veil" aria-hidden="true"></div>
        </div>`));
    }
    let side = 0, current = newThread();
    sec.appendChild(current);
    ENC.filter((e) => e.act === ai).forEach((e) => {
      current.insertAdjacentHTML("beforeend", encHTML(e, side++ % 2 ? "right" : "left"));
      const il = INTERLUDE_AFTER[e.id];
      if (il) { sec.appendChild(interlude(il)); current = newThread(); sec.appendChild(current); }
    });
    $("#acts").appendChild(sec);
  });
  $$(".thread").forEach((t) => { if (!t.querySelector(".enc")) t.remove(); });

  $("#actRail").innerHTML = ACTS.map((a, i) => `<a href="#act-${i + 1}" data-act="${i}"><span>${a.num} · ${esc(a.title)}</span><i></i></a>`).join("");
  $$("#actRail a").forEach((a) => a.addEventListener("click", (ev) => { ev.preventDefault(); scrollToEl(a.getAttribute("href")); }));

  /* ------------------------------------------------------------------------
     I AM, parables
     ------------------------------------------------------------------------ */
  $("#iamGrid").innerHTML = I_AM.map((x, i) => `
    <article class="iam-card reveal-up">
      <span class="iam-n">${["I", "II", "III", "IV", "V", "VI", "VII"][i]}</span>
      <h3><small>${T("I am")}</small>${esc(x.t)}</h3>
      <p>${esc(x.line)}</p>
      <cite>${x.r}</cite>
    </article>`).join("") + `
    <article class="iam-card final reveal-up">
      <h3><small>${I18N.R("John 8:58")}</small>${T("Before Abraham was, I am.")}</h3>
      <p>${T("The name God spoke to Moses from the burning bush — claimed by a carpenter from Nazareth.")}</p>
    </article>`;
  $$(".iam-card").forEach((c) => c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`);
    c.style.setProperty("--my", `${e.clientY - r.top}px`);
  }));
  const half = Math.ceil(PARABLES.length / 2);
  [["#marqueeA", PARABLES.slice(0, half)], ["#marqueeB", PARABLES.slice(half)]].forEach(([sel, list]) => {
    const row = $(sel);
    row.innerHTML = list.map((p) => `<span>${esc(p)}</span>`).join("");
    row.parentNode.appendChild(row.cloneNode(true)).setAttribute("aria-hidden", "true");
  });

  /* ------------------------------------------------------------------------
     People index + detail sheet
     ------------------------------------------------------------------------ */
  (function people() {
    const grid = $("#peopleGrid");
    let filter = "all", gospel = "all", q = "";
    grid.innerHTML = ENC.map((e, i) => `
      <button class="pcard" data-id="${e.id}">
        <span class="pcard-img">${artImg(e.img)}</span>
        <span class="pcard-body">
          <span class="pcard-top"><span class="badge ${e.type}">${TYPE_LABEL[e.type]}</span><span class="n">${pad(i + 1)}</span></span>
          <h4>${esc(e.name)}</h4>
          <p>${esc(e.role)}</p>
          <span class="dots">${e.refs.map(([g]) => `<i style="background:var(--${g === "acts" ? "gold" : g})" title="${GOSPEL_NAMES[g]}"></i>`).join("")}</span>
        </span>
      </button>`).join("") + `<p class="people-empty" hidden>${T("No one found — but He is still seeking.")}</p>`;
    const cards = $$(".pcard", grid);
    const hay = ENC.map((e) => `${e.name} ${e.role} ${e.place} ${e.text} ${e.quote}`.toLowerCase());
    const apply = () => {
      let n = 0;
      cards.forEach((c, i) => {
        const e = ENC[i];
        const ok = (filter === "all" || e.type === filter) && (gospel === "all" || e.refs.some(([g]) => g === gospel)) && (!q || hay[i].includes(q));
        c.hidden = !ok; if (ok) n++;
      });
      $(".people-empty", grid).hidden = n > 0;
      $("#peopleCount").textContent = T("{n} of {total} encounters", { n, total: TOTAL });
    };
    $("#peopleSearch").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); apply(); });
    $$("#peopleFilter button").forEach((b) => b.addEventListener("click", () => { $$("#peopleFilter button").forEach((x) => x.classList.toggle("active", x === b)); filter = b.dataset.filter; apply(); }));
    $$("#gospelFilter button").forEach((b) => b.addEventListener("click", () => { $$("#gospelFilter button").forEach((x) => x.classList.toggle("active", x === b)); gospel = b.dataset.gospel; apply(); }));
    grid.addEventListener("click", (ev) => { const c = ev.target.closest(".pcard"); if (c) openModal(c.dataset.id); });
    apply();
  })();

  const modal = $("#modal");
  function openModal(id) {
    const i = encIndex.get(id), e = ENC[i], a = ART[e.img], act = ACTS[e.act];
    $("#modalBody").innerHTML = `
      ${a ? `<div class="m-media zoomable" data-lb-name="${esc(actName(e.act))}">${artImg(e.img, { eager: true, group: actGroup(e.act), caption: e.name })}<span class="m-zoom">${T("Tap to view the painting")}</span></div>` : ""}
      <div class="m-body">
        <p class="m-act">${T("Act {n} · {title} — No. {no}", { n: act.num, title: esc(act.title), no: pad(i + 1) })}</p>
        <div class="enc-meta"><span class="badge ${e.type}">${TYPE_LABEL[e.type]}</span><span class="enc-place">${esc(e.place)}</span></div>
        <h3 class="enc-name">${esc(e.name)}</h3>
        <p class="enc-role">${esc(e.role)}</p>
        <p class="enc-text">${esc(e.text)}</p>
        <blockquote class="enc-quote">“${esc(e.quote)}”<cite>${esc(e.qref)}</cite></blockquote>
        <div class="refs">${refsHTML(e.refs)}</div>
        <div class="m-actions">
          <button class="pill" data-goto>${T("See it in the story")}</button>
          <button class="pill ghost" data-copy>${T("Copy verse")}</button>
        </div>
        ${a ? `<p class="enc-place m-credit">${credit(e.img)}</p>` : ""}
      </div>`;
    $("[data-copy]", modal).onclick = () => copyText(`“${e.quote}” — ${e.qref}${T(" (KJV)")}`);
    $("[data-goto]", modal).onclick = () => { closeModal(); setTimeout(() => scrollToEl(`#enc-${e.id}`, -120), 350); };
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    $("#modalSheet").scrollTop = 0;
    if (lenis()) lenis().stop();
  }
  function closeModal() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    if (lenis()) lenis().start();
  }
  $$("[data-close]", modal).forEach((b) => b.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open") && !$("#lb").classList.contains("open")) closeModal(); });

  /* ------------------------------------------------------------------------
     Candles
     ------------------------------------------------------------------------ */
  (function candles() {
    const KEY = "behold.candles";
    const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
    const write = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } };
    let list = read();
    const altar = $("#altar");
    const candle = (c) => `<div class="cndl" style="--h:${c.h}px"><span class="flame"></span><span class="wax"></span>${c.t ? `<span class="label">${esc(c.t)}</span>` : ""}</div>`;
    const render = () => {
      const shown = list.slice(-24);
      altar.innerHTML = shown.length ? shown.map(candle).join("") : `<div class="cndl unlit" style="--h:70px"><span class="flame"></span><span class="wax"></span></div>`;
      $("#candleCount").textContent = list.length ? `${list.length === 1 ? T("You have lit 1 candle.") : T("You have lit {n} candles.", { n: list.length })} ${T("“The effectual fervent prayer of a righteous man availeth much.” — James 5:16")}` : "";
    };
    render();
    $("#candleForm").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const input = $("#candleIntent");
      list.push({ t: input.value.trim().slice(0, 60), h: 52 + Math.round(Math.random() * 30), ts: Date.now() });
      write(list); input.value = ""; render();
      toast(T("Your candle is lit. He hears you."));
    });
  })();

  /* ------------------------------------------------------------------------
     A word for you — verse cards
     ------------------------------------------------------------------------ */
  (function maker() {
    const card = $("#verseCard"), front = $(".vc-front");
    let style = "night", v = null;
    const draw = () => {
      let n; do { n = VERSES[Math.floor(Math.random() * VERSES.length)]; } while (n === v);
      v = n;
      const apply = () => { $("#vcVerse").textContent = `“${v.t}”`; $("#vcRef").textContent = v.r; };
      if (card.classList.contains("flipped")) { card.classList.remove("flipped"); setTimeout(() => { apply(); card.classList.add("flipped"); }, 650); }
      else { apply(); card.classList.add("flipped"); }
    };
    front.dataset.style = style;
    card.addEventListener("click", () => { if (!card.classList.contains("flipped")) draw(); });
    $("#drawVerse").addEventListener("click", draw);
    $$("#swatches .swatch").forEach((s) => s.addEventListener("click", () => {
      $$("#swatches .swatch").forEach((x) => x.classList.toggle("active", x === s));
      style = s.dataset.style; front.dataset.style = style;
      if (!card.classList.contains("flipped")) draw();
    }));
    const PALETTES = {
      night: { bg: (g) => { const r = g.createRadialGradient(540, 0, 50, 540, 300, 1300); r.addColorStop(0, "#2a2114"); r.addColorStop(0.6, "#0a0908"); r.addColorStop(1, "#0a0908"); return r; }, text: "#f4ecdb", ref: "#d8b56a" },
      dawn: { bg: (g) => { const l = g.createLinearGradient(0, 0, 0, 1350); l.addColorStop(0, "#fbe3c0"); l.addColorStop(0.55, "#f2b38a"); l.addColorStop(1, "#b86a6a"); return l; }, text: "#2b1a12", ref: "#6b2f1e" },
      passion: { bg: (g) => { const r = g.createRadialGradient(540, 130, 50, 540, 400, 1300); r.addColorStop(0, "#5a0b12"); r.addColorStop(0.7, "#140204"); r.addColorStop(1, "#140204"); return r; }, text: "#fbe9e5", ref: "#ff9b8f" },
      linen: { bg: (g) => { const l = g.createLinearGradient(0, 0, 0, 1350); l.addColorStop(0, "#faf6ee"); l.addColorStop(1, "#eee5d3"); return l; }, text: "#2a241a", ref: "#a87a22" }
    };
    function wrap(ctx, text, maxW) {
      const words = text.split(" "), lines = []; let line = "";
      for (const w of words) { const test = line ? line + " " + w : w; if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test; }
      if (line) lines.push(line);
      return lines;
    }
    $("#saveVerse").addEventListener("click", async () => {
      if (!v) draw();
      const SERIF = I18N.on ? '"Noto Serif Sinhala", Georgia, serif' : '"Cormorant Garamond", Georgia, serif';
      try { await document.fonts.load(`400 60px ${SERIF.split(",")[0]}`); } catch (e) { /* fall back to Georgia */ }
      const c = document.createElement("canvas"); c.width = 1080; c.height = 1350;
      const g = c.getContext("2d"), P = PALETTES[style];
      g.fillStyle = P.bg(g); g.fillRect(0, 0, 1080, 1350);
      for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.025})`; g.fillRect(Math.random() * 1080, Math.random() * 1350, 1.5, 1.5); }
      g.fillStyle = P.ref; g.textAlign = "center";
      g.fillRect(528, 170, 24, 90); g.fillRect(500, 196, 80, 22);
      let size = 68, lines;
      do { g.font = `400 ${size}px ${SERIF}`; lines = wrap(g, `“${v.t}”`, 860); size -= 2; } while (lines.length * size * (I18N.on ? 1.55 : 1.3) > 720 && size > 30);
      const lh = size * (I18N.on ? 1.6 : 1.32), top = 675 - (lines.length * lh) / 2 + lh * 0.3;
      g.fillStyle = P.text;
      lines.forEach((l, i) => g.fillText(l, 540, top + i * lh));
      g.font = '600 30px "Inter", -apple-system, sans-serif'; g.fillStyle = P.ref;
      g.font = I18N.on ? '600 30px "Noto Sans Sinhala", sans-serif' : g.font;
      g.fillText(I18N.on ? v.r : v.r.toUpperCase().split("").join(String.fromCharCode(8202)), 540, top + lines.length * lh + 50);
      g.globalAlpha = 0.55; g.font = '500 24px "Inter", -apple-system, sans-serif'; g.fillStyle = P.text;
      g.fillText(SITE.name.toUpperCase().split("").join("  "), 540, 1270);
      const a = document.createElement("a");
      a.download = `${SITE.name.toLowerCase()}-${v.r.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.png`;
      a.href = c.toDataURL("image/png");
      a.click();
      toast(T("Saved — share it with someone today"));
    });
  })();

  $("#creditsList").innerHTML = Object.values(ART).map((a) => `<li><i>${esc(a.title)}</i> — ${esc(a.artist)}, ${esc(a.year)}</li>`).join("");

  /* ------------------------------------------------------------------------
     Without animation we stop here: everything is simply visible.
     ------------------------------------------------------------------------ */
  if (!ANIM) {
    heroWords.forEach((w) => (w.style.opacity = 1));
    $("#heroBrand").style.cssText = "opacity:1;position:relative;margin-top:40vh";
    $(".hero-media").style.opacity = 0.4;
    $$(".num b").forEach((b) => (b.textContent = b.dataset.count));
    $$(".dawn-copy, .dawn-flash").forEach((e) => (e.style.opacity = 1));
    $$(".gol-word").forEach((w) => (w.style.opacity = 1));
    $$(".scene-veil").forEach((v) => v.remove());
    return;
  }

  /* ========================================================================
     Scroll choreography
     ======================================================================== */
  const PIN = { scrub: 1, pin: true };

  // Hero: the Word, then the name
  gsap.to("#scrollCue", { opacity: 0, scrollTrigger: { trigger: "#hero", start: "top top", end: "+=120", scrub: true } });
  gsap.timeline({ scrollTrigger: { trigger: "#hero", start: "top top", end: "+=280%", ...PIN } })
    .to(heroWords, { opacity: 1, stagger: 0.12, duration: 0.3, ease: "none",
      onUpdate() { const n = Math.floor(this.progress() * heroWords.length); heroWords.forEach((w, i) => w.classList.toggle("lit", i < n)); } })
    .to({}, { duration: 0.5 })
    .to("#heroLine", { opacity: 0, y: -50, filter: "blur(14px)", duration: 0.7, ease: "power1.in" })
    .to(".hero-media", { opacity: 0.6, duration: 1.2 }, "<0.2")
    .fromTo(".hero-media img", { scale: 1.2 }, { scale: 1, duration: 3, ease: "none" }, "<")
    .fromTo("#heroBrand", { opacity: 0, scale: 0.9, filter: "blur(16px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "<0.4")
    .to({}, { duration: 0.8 })
    .to("#heroBrand", { opacity: 0, y: -80, filter: "blur(10px)", duration: 0.9, ease: "power1.in" })
    .to(".hero-media", { opacity: 0, duration: 0.9 }, "<");

  gsap.from(".votd .container > *", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".votd", start: "top 70%" } });

  // Four Gospels: horizontal, fading in and out at either end
  const track = $("#gospelsTrack");
  const trackDist = () => Math.max(0, track.scrollWidth - window.innerWidth);
  gsap.timeline({ scrollTrigger: { trigger: "#gospels", start: "top top", end: () => "+=" + (trackDist() + window.innerHeight * 0.5), ...PIN, invalidateOnRefresh: true } })
    .to(track, { x: () => -trackDist(), ease: "none", duration: 1 })
    .to(track, { opacity: 0, y: -30, duration: 0.12, ease: "power1.in" });
  gsap.from(".gospels-head > *, .gcard", { opacity: 0, y: 60, scale: 0.96, stagger: 0.1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "#gospels", start: "top 55%" } });

  $$(".num b").forEach((b) => {
    const target = +b.dataset.count, o = { v: 0 };
    gsap.to(o, { v: target, duration: 2.2, ease: "power3.out", onUpdate: () => (b.textContent = Math.round(o.v)), scrollTrigger: { trigger: ".numbers", start: "top 75%" } });
  });

  ScrollTrigger.batch(".reveal-up", { start: "top 88%", onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 1.1, ease: "power3.out", overwrite: true }) });
  gsap.from(".story-intro > *", { opacity: 0, y: 40, filter: "blur(8px)", stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".story-intro", start: "top 70%" } });
  $$(".iam .section-title, .iam .section-lede, .people .container > .eyebrow, .people .section-title, .people .section-lede, .candle .container > *:not(.altar), .maker .container > .eyebrow, .maker .section-title, .maker .section-lede").forEach((el) => {
    gsap.from(el, { opacity: 0, y: 36, filter: "blur(6px)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  // Act openers: dissolve in, hold, dissolve out
  $$(".act-hero").forEach((hero, i) => {
    const img = $(".act-media img", hero);
    const chars = splitChars($(".act-title", hero));
    const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "+=150%", ...PIN } });
    if (img) tl.fromTo(img, { scale: 1.22 }, { scale: 1.04, duration: 3.2, ease: "none" }, 0);
    tl.from($(".act-num", hero), { opacity: 0, y: 20, duration: 0.4 }, 0.1)
      .from(chars, { opacity: 0, y: 60, rotateX: -60, filter: "blur(10px)", stagger: 0.025, duration: 0.6, ease: "power3.out" }, 0.2)
      .from($(".act-places", hero), { opacity: 0, y: 20, duration: 0.4 }, 0.6)
      .from($(".act-verse", hero), { opacity: 0, y: 30, filter: "blur(8px)", duration: 0.6 }, 0.8)
      .to({}, { duration: 0.8 })
      .to($(".act-copy", hero), { opacity: 0, y: -60, filter: "blur(10px)", duration: 0.7, ease: "power1.in" });
    veil(hero, $(".scene-veil", hero), tl, 0.16);
    if (i === 0) stars(hero, tl);
  });

  function stars(hero, tl) {
    const c = $(".act-stars", hero), ctx = c.getContext("2d");
    let W, H, dpr, pts = [], visible = false;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      pts = Array.from({ length: 220 }, () => ({ x: Math.random() * W, y: Math.random() * H * 0.7, r: Math.random() * 1.2 * dpr + 0.2, p: Math.random() * 6.28, s: Math.random() * 0.002 + 0.0006 }));
    };
    resize(); window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    (function frame(t) {
      requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#fff";
      for (const s of pts) { ctx.globalAlpha = 0.25 + 0.75 * Math.abs(Math.sin(t * s.s + s.p)); ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill(); }
      const p = tl.scrollTrigger ? tl.scrollTrigger.progress : 0;
      const x = lerp(W * 0.18, W * 0.72, p), y = lerp(H * 0.12, H * 0.2, p) - Math.sin(p * 3.14) * H * 0.06;
      const pulse = 1 + Math.sin(t / 600) * 0.08;
      ctx.globalAlpha = 1;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 90 * dpr * pulse);
      g.addColorStop(0, "rgba(255,250,230,1)"); g.addColorStop(0.08, "rgba(255,235,180,.9)"); g.addColorStop(0.3, "rgba(243,220,164,.25)"); g.addColorStop(1, "rgba(243,220,164,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 90 * dpr * pulse, 0, 6.283); ctx.fill();
      ctx.strokeStyle = "rgba(255,240,200,.55)"; ctx.lineWidth = 1.2 * dpr;
      const L = 150 * dpr * pulse;
      ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x + L, y); ctx.moveTo(x, y - L * 0.7); ctx.lineTo(x, y + L * 1.3); ctx.stroke();
    })(0);
  }

  // Threads: the golden line, card reveals, gentle parallax in the paintings
  $$(".thread").forEach((t) => gsap.to($(".thread-line i", t), { scaleY: 1, ease: "none", scrollTrigger: { trigger: t, start: "top 60%", end: "bottom 60%", scrub: 0.5 } }));
  ScrollTrigger.batch(".enc", { start: "top 92%", onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.12, duration: 1.2, ease: "power3.out", overwrite: true }) });
  $$(".enc-media img").forEach((img) => gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: img.closest(".enc"), start: "top bottom", end: "bottom top", scrub: true } }));

  // HUD
  const hud = $("#hud"), rail = $("#actRail"), seen = new Set();
  const updateHud = () => {
    let w = 0; seen.forEach((i) => { if (isWonder(ENC[i])) w++; });
    $("#hudPeople").textContent = seen.size; $("#hudMiracles").textContent = w;
  };
  $$(".enc").forEach((el) => {
    const i = +el.dataset.i;
    ScrollTrigger.create({
      trigger: el, start: "top 62%",
      onEnter: () => { el.classList.add("seen"); for (let k = 0; k <= i; k++) seen.add(k); updateHud(); },
      onLeaveBack: () => { el.classList.remove("seen"); for (let k = i; k < TOTAL; k++) seen.delete(k); updateHud(); }
    });
  });
  ScrollTrigger.create({ trigger: "#acts", start: "top 50%", end: "bottom 50%", onToggle: (s) => { hud.classList.toggle("show", s.isActive); rail.classList.toggle("show", s.isActive); } });
  $$(".act").forEach((sec, i) => ScrollTrigger.create({
    trigger: sec, start: "top 50%", end: "bottom 50%",
    onToggle: (s) => { if (!s.isActive) return; $("#hudAct").textContent = T("Act {n}", { n: ACTS[i].num }); $$("#actRail a").forEach((a, k) => a.classList.toggle("active", k === i)); }
  }));
  ScrollTrigger.create({ trigger: "#act-8", start: "top 55%", endTrigger: "#act-9", end: "top top", toggleClass: { targets: document.body, className: "theme-passion" } });

  /* ---------------- Interlude: Peace, be still ---------------- */
  $$(".storm-scene").forEach((sec) => {
    const text = $("[data-storm]", sec), chars = splitChars(text);
    const img = $(".il-media img", sec), rain = $(".storm-rain", sec);
    let intensity = 1, active = false;
    const seeds = chars.map(() => ({ a: Math.random() * 6.28, b: Math.random() * 6.28, s: 0.6 + Math.random() * 0.8 }));
    const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "top top", end: "+=240%", ...PIN, onToggle: (s) => (active = s.isActive), onUpdate: (s) => { intensity = 1 - smooth(0.15, 0.6, s.progress); } } });
    tl.from(text, { opacity: 0, duration: 0.3 })
      .to({}, { duration: 1.2 })
      .to(text, { opacity: 0, filter: "blur(12px)", duration: 0.4 })
      .fromTo($(".calm-text", sec), { opacity: 0, scale: 1.15, filter: "blur(20px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" })
      .to($(".calm-ref", sec), { opacity: 1, duration: 0.3 })
      .to({}, { duration: 0.5 });
    veil(sec, $(".scene-veil", sec), tl);
    gsap.ticker.add((time) => {
      if (!active) return;
      const I = intensity;
      chars.forEach((c, k) => {
        const s = seeds[k];
        c.style.transform = I > 0.01 ? `translate(${Math.sin(time * 9 * s.s + s.a) * 7 * I}px, ${Math.cos(time * 7 * s.s + s.b) * 10 * I}px) rotate(${Math.sin(time * 5 + s.a) * 8 * I}deg)` : "";
      });
      img.style.filter = `blur(${6 * I}px) saturate(${0.6 + 0.4 * (1 - I)}) brightness(${0.55 + 0.25 * (1 - I)})`;
      img.style.transform = `scale(${1.05 + 0.1 * I}) rotate(${Math.sin(time * 1.3) * 1.2 * I}deg)`;
      rain.style.opacity = I;
    });
  });

  /* ---------------- Interlude: five loaves → five thousand ---------------- */
  $$(".loaves-scene").forEach((sec) => {
    const c = $(".loaves-canvas", sec), ctx = c.getContext("2d");
    const numEl = $("[data-loaves-num]", sec), label = $("[data-loaves-label]", sec);
    let W, H, dpr, pts = [], lastP = 0;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = c.width = c.offsetWidth * dpr; H = c.height = c.offsetHeight * dpr;
      pts = Array.from({ length: 5000 }, (_, i) => {
        const ang = i * 2.399963, rad = Math.sqrt(i / 5000) * Math.hypot(W, H) * 0.55;
        return { x: W / 2 + Math.cos(ang) * rad + (Math.random() - 0.5) * 18 * dpr, y: H / 2 + Math.sin(ang) * rad * 0.8 + (Math.random() - 0.5) * 18 * dpr, a: 0.25 + Math.random() * 0.6 };
      });
      for (let i = 0; i < 7; i++) pts[i] = { x: W / 2 + (i - 3) * 34 * dpr + (i > 4 ? 16 * dpr : 0), y: H * 0.8, a: 1 };
    };
    const paint = (p) => {
      lastP = p;
      const count = Math.round(lerp(7, 5000, smooth(0.18, 0.72, p)));
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < count; i++) {
        const q = pts[i];
        ctx.fillStyle = i < 5 ? "rgba(233,196,106,1)" : i < 7 ? "rgba(158,197,255,1)" : `rgba(243,220,164,${q.a * 0.55})`;
        ctx.beginPath(); ctx.arc(q.x, q.y, (i < 7 ? 5 : 1.6) * dpr, 0, 6.283); ctx.fill();
      }
      let n, l;
      if (p < 0.18) { n = 7; l = T("five loaves · two fishes"); }
      else if (p < 0.8) { n = count; l = count >= 5000 ? T("men fed, beside women and children") : T("and they did all eat…"); }
      else { n = 12; l = T("baskets of fragments left over"); }
      numEl.textContent = n.toLocaleString(); label.textContent = l;
    };
    resize(); paint(0);
    window.addEventListener("resize", () => { resize(); paint(lastP); });
    const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "top top", end: "+=280%", ...PIN, onUpdate: (s) => paint(s.progress) } })
      .from($(".loaves-counter", sec), { opacity: 0, y: 40, duration: 0.15 })
      .to({}, { duration: 0.7 })
      .from($(".loaves-foot", sec), { opacity: 0, y: 20, duration: 0.15 })
      .to({}, { duration: 0.1 });
    veil(sec, $(".scene-veil", sec), tl);
  });

  /* ---------------- Interlude: the light of the world ---------------- */
  $$(".light-scene").forEach((sec) => {
    const mask = $(".light-mask", sec), stage = $(".il-stage", sec);
    let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, last = 0, grow = 0, active = false;
    stage.addEventListener("pointermove", (e) => {
      const b = stage.getBoundingClientRect();
      tx = (e.clientX - b.left) / b.width; ty = (e.clientY - b.top) / b.height; last = performance.now();
    });
    const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "top top", end: "+=170%", ...PIN, onToggle: (s) => (active = s.isActive), onUpdate: (s) => { grow = smooth(0.62, 0.9, s.progress); } } })
      .from($(".il-copy", sec), { opacity: 0, y: 30, duration: 0.3 })
      .to({}, { duration: 1 });
    veil(sec, $(".scene-veil", sec), tl);
    gsap.ticker.add((time) => {
      if (!active) return;
      if (performance.now() - last > 2500) { tx = 0.5 + Math.sin(time * 0.6) * 0.09; ty = 0.48 + Math.sin(time * 0.9 + 1) * 0.26; }
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      mask.style.setProperty("--x", `${x * 100}%`);
      mask.style.setProperty("--y", `${y * 100}%`);
      mask.style.setProperty("--r", `${lerp(Math.min(260, window.innerWidth * 0.3), Math.max(window.innerWidth, window.innerHeight) * 1.4, grow)}px`);
    });
  });

  /* ---------------- Interlude: Golgotha ---------------- */
  $$(".golgotha").forEach((sec) => {
    const stage = $(".il-stage", sec);
    const ORD = ["The first word", "The second word", "The third word", "The fourth word", "The fifth word", "The sixth word", "The seventh word"].map((o) => T(o));
    $("[data-words]", sec).innerHTML = LAST_WORDS.map((w, i) => `<div class="gol-word ${i === 5 ? "finished" : ""}"><span class="ord">${ORD[i]}</span><p>${esc(w.t)}</p><cite>${w.r}</cite></div>`).join("");
    const words = $$(".gol-word", sec);
    const counter = $("[data-word-counter]", sec);
    counter.innerHTML = LAST_WORDS.map(() => "<i></i>").join("");
    const bars = $$("i", counter);

    const N = 22, pts = [];
    for (let k = 0; k <= N; k++) pts.push([50 + (k === 0 ? 0 : (Math.random() - 0.5) * 7), (k / N) * 100]);
    const tear = $("[data-tear]", sec);
    tear.setAttribute("d", "M" + pts.map((p) => p.join(",")).join(" L"));
    tear.setAttribute("pathLength", "1");
    gsap.set(tear, { strokeDasharray: 1, strokeDashoffset: 1 });
    const edge = pts.map(([px, py]) => `${px}% ${py}%`).join(", ");
    const L = $(".veil-half.left", sec), R = $(".veil-half.right", sec);
    L.style.clipPath = `polygon(0% 0%, ${edge}, 0% 100%)`;
    R.style.clipPath = `polygon(100% 0%, ${edge}, 100% 100%)`;

    const img = $(".il-media img", sec);
    const tl = gsap.timeline(), starts = [];
    words.forEach((w, i) => {
      if (i === 3) tl.to($(".gol-dark", sec), { opacity: 1, duration: 1 }).to({}, { duration: 1.2 }).to($(".gol-dark", sec), { opacity: 0, duration: 1 });
      starts.push(tl.duration());
      tl.fromTo(w, { opacity: 0, y: 30, filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" })
        .to({}, { duration: i === 5 ? 1.8 : 1.1 })
        .to(w, { opacity: 0, y: -30, filter: "blur(12px)", duration: 0.9, ease: "power1.in" });
    });
    tl.to($(".gol-death", sec), { opacity: 1, duration: 1.2 }).to({}, { duration: 1.2 });
    tl.set($(".veil-behind", sec), { opacity: 1 });
    tl.to($(".veil", sec), { opacity: 1, duration: 0.8 }).to($(".gol-death", sec), { opacity: 0, duration: 0.8 }, "<");
    const tearStart = tl.duration();
    tl.to(tear, { strokeDashoffset: 0, duration: 1.4, ease: "power1.in" }).addLabel("split")
      .to(L, { xPercent: -62, rotate: -4, transformOrigin: "0% 0%", duration: 2.2, ease: "power2.in" }, "split")
      .to(R, { xPercent: 62, rotate: 4, transformOrigin: "100% 0%", duration: 2.2, ease: "power2.in" }, "split")
      .to(tear, { opacity: 0, duration: 0.4 }, "split");
    const quakeEnd = tl.duration();
    tl.from($(".veil-behind p", sec), { opacity: 0, y: 20, filter: "blur(8px)", duration: 1 }, "split+=1").to({}, { duration: 2 });
    tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: tearStart, ease: "none" }, 0);
    tl.to(counter, { opacity: 0, duration: 0.6 }, tearStart - 1);
    veil(sec, $(".scene-veil", sec), tl, 0.06);

    let quake = 0, active = false;
    ScrollTrigger.create({
      trigger: sec, start: "top top", end: "+=1200%", ...PIN, animation: tl,
      onToggle: (s) => { active = s.isActive; if (!active) gsap.set(stage, { x: 0, y: 0 }); }
    });
    // read the (scrub-smoothed) timeline every frame, not just on scroll events
    gsap.ticker.add(() => {
      if (!active) return;
      const t = tl.time();
      bars.forEach((b, k) => b.classList.toggle("on", t >= starts[k]));
      quake = t > tearStart && t < quakeEnd ? Math.sin(Math.PI * (t - tearStart) / (quakeEnd - tearStart)) : 0;
      if (quake > 0.01) gsap.set(stage, { x: (Math.random() - 0.5) * 16 * quake, y: (Math.random() - 0.5) * 12 * quake });
      else gsap.set(stage, { x: 0, y: 0 });
    });
  });

  /* ---------------- Interlude: three days, and the stone ---------------- */
  $$(".dawn").forEach((sec) => {
    const days = $$(".dawn-days span", sec), stone = $(".tomb-stone", sec), tomb = $(".tomb", sec);
    const tl = gsap.timeline();
    tl.fromTo(days[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }).to({}, { duration: 0.6 }).to(days[0], { opacity: 0, y: -30, duration: 0.8 })
      .fromTo(days[1], { opacity: 0, y: 30 }, { opacity: 0.6, y: 0, duration: 1 }).to({}, { duration: 0.8 }).to(days[1], { opacity: 0, y: -30, duration: 0.8 })
      .fromTo(days[2], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .to($(".dawn-sky", sec), { opacity: 1, duration: 2.2, ease: "power1.inOut" }, "<")
      .to(days[2], { color: "#2a1c10", duration: 1 }, "<1")
      .to(stone, { x: () => tomb.offsetWidth * 0.52, rotation: 220, duration: 2.4, ease: "power2.inOut" })
      .to($(".tomb-light", sec), { opacity: 1, duration: 1.6 }, "<0.5")
      .to(days[2], { opacity: 0, duration: 0.6 }, "<")
      .to($(".dawn-flash", sec), { opacity: 1, duration: 1.3, ease: "power2.in" })
      .fromTo($(".dawn-copy", sec), { opacity: 0, y: 40, filter: "blur(14px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" })
      .to({}, { duration: 1.4 });
    // entering: the black veil lifts as the scene arrives (no exit veil — it ends in light)
    gsap.fromTo($(".scene-veil", sec), { opacity: 1 }, { opacity: 0, ease: "none", scrollTrigger: { trigger: sec, start: "top bottom", end: "top top", scrub: true } });
    ScrollTrigger.create({
      trigger: sec, start: "top top", end: "+=560%", ...PIN, animation: tl, invalidateOnRefresh: true,
      onUpdate: (s) => document.body.classList.toggle("theme-light", s.progress > 0.78)
    });
  });

  Core.sortTriggers();
})();
