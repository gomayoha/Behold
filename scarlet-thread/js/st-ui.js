/* ==========================================================================
   The Scarlet Thread — everything around the story: the opening, the
   navigation, the travelling clock, the chapter menu, and what waits after
   the last page (the Library, the People, the Promises, the end).
   ========================================================================== */
(function () {
  "use strict";
  const { $, $$, h, esc, cls, clamp, store, items, jump, REDUCED, yearLabel, knotIcon } = ST;
  const AGES = window.AGES, BOOKS = window.BOOKS, THREADS = window.THREADS, ART = window.ART, SECTIONS = window.SECTIONS;
  const sceneCount = () => items.filter((x) => x.kind === "scene").length;

  /* ---------- build ---------- */
  ST.makeItems();
  ST.buildDOM();
  ST.measure(true);

  const people = [];
  items.forEach((it) => (it.s.cast || []).forEach(([n, r]) => people.push({ n, r, it })));

  /* ---------- the navigation bar ---------- */
  const glyph = `<svg class="glyph" viewBox="0 0 32 32" aria-hidden="true"><path d="M2 21c7 0 9-12 14-12s5 8 0 8-5-8 0-8 7 12 14 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
  $("#nav").innerHTML = `
    <a class="brand" href="#top" data-go="top">${glyph}<span>The Scarlet Thread</span></a>
    <nav class="links" aria-label="Sections">
      <a href="#age-creation" data-go="age-creation">The Story</a>
      <a href="#library" data-go="library">Library</a>
      <a href="#people" data-go="people">People</a>
      <a href="#promises" data-go="promises">Promises</a>
      <a href="../index.html" class="ext">Behold<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 16L16 8M10 8h6v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </nav>
    <div class="acts">
      <button class="ib" id="soundBtn" type="button" aria-pressed="false" aria-label="Ambient sound"><svg class="off" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M17 9l4 6M21 9l-4 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><svg class="on" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
      <button class="ib menu" id="contentsBtn" type="button" aria-label="Contents" aria-expanded="false"><span></span><span></span></button>
    </div>
    <div class="nav-prog"><i id="navProg"></i></div>`;

  /* ---------- the travelling clock ---------- */
  const IC = {
    book: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h10.5A2.5 2.5 0 0118 7v12.5H7.5A2.5 2.5 0 015 17V4.5z M5 17a2.5 2.5 0 012.5-2.5H18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    knot: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 22c6 0 8-12 13-12s5 8 0 8-5-8 0-8 7 12 13 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    kept: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 12.3l2.7 2.7L16 9.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };
  $("#hud").innerHTML = `
    <span class="hud-age"><b id="hudN">I</b><span id="hudT">In the Beginning</span></span><i class="sep"></i>
    <span class="hud-year" id="hudY">Before time</span><i class="sep"></i>
    <span class="hud-stat" title="Books opened">${IC.book}<b id="hudB">0</b><small>/73</small></span>
    <span class="hud-stat scarlet" title="Promises found">${IC.knot}<b id="hudP">0</b></span>
    <span class="hud-stat gold" title="Promises kept">${IC.kept}<b id="hudK">0</b></span>
`;
  document.body.insertAdjacentHTML("beforeend", `<div class="hud-pops" id="hudPops" aria-live="polite"></div>`);

  /* ---------- the rail of ages ---------- */
  $("#rail").innerHTML = AGES.map((a) => `<a href="#age-${a.id}" data-go="age-${a.id}" style="--c:${a.c}"><span>${esc(a.t)}</span><b>${a.n}</b></a>`).join("");
  const railLinks = $$("#rail a");

  /* ---------- contents ---------- */
  function buildContents() {
    const c = ST.collection();
    $("#contentsBody").innerHTML = `
      <div class="ct-head">
        <p class="eyebrow">Contents</p>
        <h2>Fifteen ages. <span class="dim">${sceneCount()} scenes.</span></h2>
        <p class="ct-stats"><span>${IC.book}<b>${c.books.size}</b> of 73 books</span><span class="scarlet">${IC.knot}<b>${c.planted.size}</b> of 26 promises found</span><span class="gold">${IC.kept}<b>${c.kept.size}</b> kept</span></p>
        <div class="ct-quick"><a href="#library" data-go="library">The Library</a><a href="#people" data-go="people">The People</a><a href="#promises" data-go="promises">The Promises</a><a href="../index.html">Behold</a></div>
      </div>
      <div class="ct-grid">${AGES.map((a) => `
        <section class="ct-age" style="--c:${a.c}">
          <a class="ct-age-h" href="#age-${a.id}" data-go="age-${a.id}"><b>${a.n}</b><span><strong>${esc(a.t)}</strong><small>${esc(a.books)} · ${esc(a.yl)}</small></span></a>
          <ol>${a.scenes.map((s) => `<li class="${ST.visited.has(s.id) ? "seen" : ""}"><a href="#${s.id}" data-go="${s.id}">${esc(s.t)}</a></li>`).join("")}</ol>
        </section>`).join("")}</div>`;
  }
  function openContents(open) {
    const el = $("#contents");
    if (open) buildContents();
    cls(el, "open", open);
    el.setAttribute("aria-hidden", String(!open));
    $("#contentsBtn").setAttribute("aria-expanded", String(open));
    if (window.__lenis) open ? window.__lenis.stop() : started && window.__lenis.start();
  }

  /* ---------- the Library ---------- */
  const SEC = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));
  function buildLibrary() {
    $("#library").innerHTML = `
      <header class="after-h">
        <p class="eyebrow">The Library</p>
        <h2>Seventy-three books.<br /><span class="dim">One story.</span></h2>
        <p class="lede">Every book of the Catholic Bible, in order. The ones you have reached in the story are lit. You have opened <b id="libCount">0</b>.</p>
      </header>
      <div class="seg lib-tabs" role="tablist"><button class="on" data-sec="all">All</button>${SECTIONS.map((s) => `<button data-sec="${s.id}">${esc(s.name)}</button>`).join("")}</div>
      <div class="shelf" id="shelf">${SECTIONS.map((sec) => `
        <div class="shelf-sec" data-sec="${sec.id}" style="--c:${sec.c}">
          <div class="shelf-row">${BOOKS.filter((b) => b.sec === sec.id).map((b) => {
            const hgt = 64 + Math.min(36, Math.log2(b.ch + 1) * 5.2);
            return `<button class="spine" data-id="${b.id}" data-sec="${b.sec}" style="--hh:${hgt.toFixed(1)}%;--hn:${hgt.toFixed(1)}" aria-label="${esc(b.n)}"><span class="sp-n">${esc(b.n)}</span><span class="sp-c">${b.ch}</span>${b.d ? '<i class="sp-d" title="Deuterocanonical">✦</i>' : ""}</button>`;
          }).join("")}</div>
          <p class="shelf-l"><b>${esc(sec.name)}</b><span>${esc(sec.note)}</span></p>
        </div>`).join("")}</div>
      <p class="lib-note">✦ Deuterocanonical: Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach and Baruch, found in Catholic and Orthodox Bibles.</p>`;
    $$(".lib-tabs button").forEach((b) => b.addEventListener("click", () => {
      $$(".lib-tabs button").forEach((x) => cls(x, "on", x === b));
      $$(".shelf-sec").forEach((sp) => cls(sp, "dim", b.dataset.sec !== "all" && sp.dataset.sec !== b.dataset.sec));
    }));
    $("#shelf").addEventListener("click", (e) => { const sp = e.target.closest(".spine"); if (sp) openBook(sp.dataset.id); });
  }
  function openBook(id) {
    const b = ST.BOOK[id], s = SEC[b.sec], first = items.find((it) => it.kind === "scene" && ((it.s.b || []).includes(id) || ((it.s.fx && it.s.fx.steps) || []).some((x) => x.b === id)));
    const read = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(b.n + " 1")}&version=RSVCE`;
    $("#panelBody").innerHTML = `
      <p class="bp-sec" style="--c:${s.c}">${esc(s.name)} · ${b.ch} chapter${b.ch > 1 ? "s" : ""}${b.d ? " · Deuterocanonical" : ""}</p>
      <h3>${esc(b.n)}</h3>
      <p class="bp-by">${esc(b.by)}${b.to ? " · to " + esc(b.to) : ""}${b.when ? " · " + esc(b.when) : ""}</p>
      <p class="bp-sum">${esc(b.sum)}</p>
      <p class="bp-christ"><span>Christ in ${esc(b.n)}</span>${esc(b.christ)}</p>
      <blockquote><p>“${esc(b.v)}”</p><cite>${esc(b.r)}</cite></blockquote>
      <div class="bp-actions">${first ? `<button class="pill" data-go="${first.id}" type="button">Find it in the story</button>` : ""}<a class="pill ghost" href="${read}" target="_blank" rel="noopener">Read ${esc(b.n)}</a></div>`;
    openPanel(true);
  }
  function openPanel(open) {
    cls($("#panel"), "open", open);
    $("#panel").setAttribute("aria-hidden", String(!open));
    if (window.__lenis) open ? window.__lenis.stop() : started && window.__lenis.start();
  }

  /* ---------- the People ---------- */
  const PORTRAIT = { "Thomas": "thomas", "Mary Magdalene": "magdalene", "Michael": "michael", "Cleopas": "emmaus", "Peter": "peter-cross", "John": "john-patmos" };
  const small = (key) => {
    const a = ART[key];
    if (!a) return "";
    const u = a.s || a.o || "";
    return u.includes("/thumb/") ? u.replace(/\/\d+px-([^/]+)$/, "/330px-$1") : u;
  };
  function buildPeople() {
    $("#people").innerHTML = `
      <header class="after-h">
        <p class="eyebrow">The People</p>
        <h2>Every life<br /><span class="dim">in the story.</span></h2>
        <p class="lede">${people.length} people, from Adam in the garden to John on Patmos. Tap anyone to go to their scene.</p>
      </header>
      <div class="ppl-tools">
        <label class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 16l4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><input id="pplQ" type="search" placeholder="Search names" autocomplete="off" /></label>
        <div class="seg small" id="pplAge"><button class="on" data-age="all">All</button>${AGES.map((a) => `<button data-age="${a.id}" title="${esc(a.t)}">${a.n}</button>`).join("")}</div>
      </div>
      <p class="ppl-count" id="pplCount"></p>
      <div class="ppl-grid" id="pplGrid">${people.map((p, i) => {
        const key = PORTRAIT[p.n] || p.it.s.art || (p.it.s.fx && p.it.s.fx.items && p.it.s.fx.items[0][0]);
        const src = key ? small(key) : "";
        return `<button class="pc" data-i="${i}" data-age="${p.it.age.id}" data-go="${p.it.id}" style="--c:${p.it.age.c}">
          <span class="pc-face">${src ? `<img src="${esc(src)}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />` : ""}<i>${esc(p.n[0])}</i></span>
          <span class="pc-txt"><b>${esc(p.n)}</b><span>${esc(p.r)}</span><small>${p.it.age.n} · ${esc(p.it.s.t)}</small></span>
        </button>`;
      }).join("")}</div>`;
    const filter = () => {
      const q = $("#pplQ").value.trim().toLowerCase(), age = ($("#pplAge .on") || {}).dataset.age;
      let n = 0;
      $$(".pc").forEach((el) => {
        const p = people[+el.dataset.i];
        const ok = (age === "all" || p.it.age.id === age) && (!q || (p.n + " " + p.r).toLowerCase().includes(q));
        el.hidden = !ok; if (ok) n++;
      });
      $("#pplCount").textContent = `${n} ${n === 1 ? "person" : "people"}`;
    };
    $("#pplQ").addEventListener("input", filter);
    $$("#pplAge button").forEach((b) => b.addEventListener("click", () => { $$("#pplAge button").forEach((x) => cls(x, "on", x === b)); filter(); }));
    filter();
  }

  /* ---------- the Promises ---------- */
  function buildPromises() {
    const order = [];
    items.forEach((it) => [].concat(it.s.th || []).concat(((it.s.fx && it.s.fx.steps) || []).map((s) => s.th).filter(Boolean)).forEach((t) => { if (!order.includes(t)) order.push(t); }));
    $("#promises").innerHTML = `
      <header class="after-h">
        <p class="eyebrow scarlet">The Scarlet Thread</p>
        <h2>Twenty-six promises.<br /><span class="dim">Every one kept.</span></h2>
        <p class="lede">Through the whole Old Testament runs a thread: promises God made, and pictures He painted, of the One who was coming. Here they are, each beside the place it was kept. The ones you have not reached yet are still hidden.</p>
      </header>
      <ol class="prm" id="prmList">${order.map((id) => { const t = THREADS[id]; return `
        <li class="prm-r" data-th="${id}">
          <div class="prm-a"><cite>${esc(t.a)}</cite><p>“${esc(t.at)}”</p></div>
          <div class="prm-mid">${knotIcon}<b>${esc(t.name)}</b><span>${esc(t.kind)}</span></div>
          <div class="prm-b"><cite>${esc(t.b)}</cite><p>“${esc(t.bt)}”</p></div>
        </li>`; }).join("")}</ol>`;
  }

  /* ---------- the end ---------- */
  const ALLQ = [];
  items.forEach((it) => { if (it.s.q) ALLQ.push([it.s.q, it.s.r]); });
  AGES.forEach((a) => ALLQ.push([a.v, a.r]));
  function buildEnd() {
    const d = new Date(), seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(), q = ALLQ[seed % ALLQ.length];
    const credits = Object.keys(ART).filter((k) => items.some((it) => it.s.art === k || ((it.s.fx && it.s.fx.items) || []).some((x) => x[0] === k)))
      .map((k) => `<li><i>${esc(ART[k].t)}</i> · ${esc(ART[k].a)}${ART[k].y ? ", " + esc(ART[k].y) : ""}</li>`).join("");
    $("#end").innerHTML = `
      <div class="end-in">
        <p class="eyebrow">A verse for today</p>
        <blockquote class="end-v"><p>“${esc(q[0])}”</p><cite>${esc(q[1])}</cite></blockquote>
        <div class="end-actions"><button class="pill" id="againBtn" type="button">Begin again</button><a class="pill ghost" href="../index.html">Continue in Behold</a></div>
        <p class="eyebrow center gap">The story goes on</p>
        <div class="journeys">
          <a class="jc" href="../index.html#story" style="--bg:url('${small("baptism").replace("330px", "960px")}')"><small>Behold</small><b>The life of Jesus</b><em>Every person He met, from the manger to the empty tomb.</em></a>
          <a class="jc" href="../apostles.html" style="--bg:url('${small("pentecost").replace("330px", "960px")}')"><small>Behold</small><b>The Apostles</b><em>The Twelve and Paul: where they went, and how they died.</em></a>
          <a class="jc" href="../mary.html" style="--bg:url('${small("annunciation")}')"><small>Behold</small><b>Mother Mary</b><em>Her life, her sorrows, and the Rosary.</em></a>
          <a class="jc" href="../saints.html" style="--bg:url('${small("michael").replace("330px", "960px")}')"><small>Behold</small><b>The Saints</b><em>A great cloud of witnesses, still.</em></a>
        </div>
      </div>
      <footer class="foot">
        <div class="foot-top"><p class="foot-brand">${glyph}<span>The Scarlet Thread</span></p><p class="foot-ded">Made with love, for my family.</p></div>
        <p class="foot-verse">“For all the promises of God in him are yea, and in him Amen.” <cite>2 Corinthians 1:20</cite></p>
        <details class="credits"><summary>Paintings and sources</summary>
          <p>Scripture is quoted from the King James Version, including its 1611 translation of the deuterocanonical books (public domain). The Ten Commandments are numbered as in the Catholic tradition. Dates before the kings are traditional and approximate. Maps are drawn from Natural Earth (public domain); some ancient sites are uncertain. Every painting is in the public domain and is shown from Wikimedia Commons:</p>
          <ul>${credits}</ul>
        </details>
        <p class="foot-fine">© ${d.getFullYear()} The Scarlet Thread · A companion to <a href="../index.html">Behold</a> · Soli Deo gloria.</p>
      </footer>`;
    $("#againBtn").addEventListener("click", () => jump("age-creation"));
  }

  buildLibrary(); buildPeople(); buildPromises(); buildEnd();

  /* ---------- keeping the counts ---------- */
  let last = { books: new Set(), planted: new Set(), kept: new Set() };
  function refreshCounts(announce) {
    const c = ST.collection();
    $("#hudB").textContent = c.books.size; $("#hudP").textContent = c.planted.size; $("#hudK").textContent = c.kept.size;
    $("#libCount").textContent = c.books.size;
    $$(".spine").forEach((sp) => cls(sp, "lit", c.books.has(sp.dataset.id)));
    $$(".prm-r").forEach((r) => { cls(r, "found", c.planted.has(r.dataset.th)); cls(r, "kept", c.kept.has(r.dataset.th)); });
    if (announce) {
      const nb = [...c.books].filter((b) => !last.books.has(b)), np = [...c.planted].filter((t) => !last.planted.has(t) && !c.kept.has(t)), nk = [...c.kept].filter((t) => !last.kept.has(t));
      nb.slice(0, 3).forEach((b) => pop(`${IC.book}<span>${esc(ST.BOOK[b].n)}</span>`, ""));
      np.forEach((t) => pop(`${IC.knot}<span>${esc(THREADS[t].name)}</span>`, "scarlet"));
      nk.slice(0, 3).forEach((t) => pop(`${IC.kept}<span>Kept: ${esc(THREADS[t].name)}</span>`, "gold"));
      if (np.length || nk.length) { window.GL && window.GL.pulse(); }
      if (nk.length && window.Ambient) window.Ambient.chime();
      if (nb.length || np.length || nk.length) { const hud = $("#hud"); hud.classList.remove("bump"); void hud.offsetWidth; hud.classList.add("bump"); }
    }
    last = c;
  }
  let popQ = 0;
  function pop(html, tone) {
    const el = h(`<p class="pop ${tone}">${html}</p>`);
    const box = $("#hudPops");
    const cap = innerWidth <= 760 ? 0 : 3;
    while (box.children.length > cap) box.firstElementChild.remove();
    const slow = innerWidth <= 760 ? 900 : 380;
    setTimeout(() => { if (innerWidth <= 760) [...box.children].forEach((c) => c.remove()); box.appendChild(el); setTimeout(() => el.classList.add("out"), 2400); setTimeout(() => el.remove(), 3100); }, popQ++ * slow);
    setTimeout(() => { popQ = Math.max(0, popQ - 1); }, 400);
  }
  ST.on("item", () => refreshCounts(true));
  refreshCounts(false);

  /* ---------- per frame: clock, rail, nav ---------- */
  const MOODS = { creation: "light", fall: "dark", fathers: "light", exodus: "light", land: "light", kingdom: "light", wisdom: "light", prophets: "dark", exile: "dark", return: "light", silence: "still", gospels: "light", church: "light", letters: "light", revelation: "glory" };
  let lastAge = null, lastY = 0, navHidden = false, saveT = 0, lastLabel = "";
  ST.on("frame", (y, it, dt) => {
    const inStory = y < ST.endY - ST.vh * 0.6;
    cls(document.body, "after", !inStory);
    cls($("#hud"), "show", started && inStory);
    cls($("#rail"), "show", started && inStory);
    // the year, ticking as you scroll
    let label;
    if (it.year != null) label = yearLabel(it.year).replace("c. ", "");
    else if (typeof it.s.y === "number") {
      let nx = null;
      for (let j = it.i + 1; j < items.length && j < it.i + 6; j++) if (typeof items[j].s.y === "number") { nx = items[j]; break; }
      const p = clamp((y + ST.vh * 0.5 - it.top) / (it.bottom - it.top));
      const yr = nx && nx.s.y !== it.s.y ? Math.round(it.s.y + (nx.s.y - it.s.y) * p * 0.999) : it.s.y;
      label = yearLabel(yr);
    } else label = it.s.yl || it.age.yl;
    if (label !== lastLabel) { $("#hudY").textContent = label; lastLabel = label; }
    if (it.age !== lastAge) {
      lastAge = it.age;
      $("#hudN").textContent = it.age.n; $("#hudT").textContent = it.age.t;
      document.documentElement.style.setProperty("--age", it.age.c);
      railLinks.forEach((a) => cls(a, "on", a.dataset.go === "age-" + it.age.id));
      if (window.Ambient) window.Ambient.setMood(MOODS[it.age.id]);
    }
    // the bar hides while you read, and returns when you scroll back
    const dy = y - lastY;
    if (Math.abs(dy) > 6) { const hide = started && dy > 0 && y > ST.vh * 0.5 && inStory; if (hide !== navHidden) { navHidden = hide; cls($("#nav"), "hide", hide); } }
    lastY = y;
    $("#navProg").style.transform = `scaleX(${clamp(y / Math.max(1, ST.endY - ST.vh)).toFixed(4)})`;
    // remember the place
    saveT += dt;
    if (saveT > 1.2 && started && inStory) { saveT = 0; store.set("last", it.id); }
  });

  /* ---------- the opening ---------- */
  let started = false;
  const loader = $("#loader");
  const lastId = store.get("last", null), lastIt = items.find((x) => x.id === lastId);
  if (lastIt && lastIt.i > 1) {
    const r = $("#resume");
    r.hidden = false;
    r.querySelector("span").textContent = `${lastIt.age.n} · ${lastIt.s.t.replace(/\.$/, "")}`;
  }
  function begin(target) {
    if (started) return;
    started = true; ST.started = true;
    loader.classList.add("out");
    document.body.classList.remove("is-loading");
    setTimeout(() => { loader.hidden = true; }, 1600);
    if (window.__lenis) window.__lenis.start();
    if (target) setTimeout(() => jump(target), 200);
  }
  $("#begin").addEventListener("click", () => begin(location.hash && location.hash.length > 1 ? location.hash.slice(1) : null));
  $("#resume").addEventListener("click", () => begin(lastId));
  setTimeout(() => loader.classList.add("ready"), 150);

  /* ---------- links, buttons, keys ---------- */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    const id = a.dataset.go;
    openContents(false); openPanel(false);
    if (!started) begin();
    if (id === "top") return jump("age-creation");
    setTimeout(() => jump(id), 60);
  });
  $("#contentsBtn").addEventListener("click", () => openContents(!$("#contents").classList.contains("open")));
  $$("#contents [data-close], #panel [data-close]").forEach((b) => b.addEventListener("click", () => { openContents(false); openPanel(false); }));
  const toggleSound = () => {
    if (!window.Ambient) return;
    const on = window.Ambient.toggle();
    $("#soundBtn").setAttribute("aria-pressed", String(on));
    const l = $("#ldSound"); if (l) l.setAttribute("aria-pressed", String(on));
  };
  $("#soundBtn").addEventListener("click", toggleSound);
  if ($("#ldSound")) $("#ldSound").addEventListener("click", toggleSound);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { openContents(false); openPanel(false); return; }
    if (!started) { if (e.key === "Enter") begin(); return; }
    if (e.target.closest("input, textarea")) return;
    if ($("#contents").classList.contains("open") || $("#panel").classList.contains("open")) return;
    const y = window.__lenis ? window.__lenis.scroll : scrollY;
    if (y > ST.endY - ST.vh) return;
    const go = (d) => { const n = items[clamp(ST.cur + d, 0, items.length - 1)]; if (n) { e.preventDefault(); jump(n.id); } };
    if (e.key === "ArrowRight" || e.key === "PageDown") go(1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
  });

  /* ---------- smooth scroll and the frame loop ---------- */
  if (!REDUCED && typeof window.Lenis !== "undefined") {
    window.__lenis = new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.85, touchMultiplier: 1.25 });
    window.__lenis.stop();
  }
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  scrollTo(0, 0);
  let t0 = performance.now();
  function loop(t) {
    const dt = Math.min(0.05, (t - t0) / 1000);
    t0 = t;
    if (window.__lenis) window.__lenis.raf(t);
    ST.frame(dt);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  let rz;
  window.addEventListener("resize", () => {
    clearTimeout(rz);
    rz = setTimeout(() => { if (ST.measure(false) && window.__lenis) window.__lenis.resize(); }, 150);
  });
  window.addEventListener("load", () => { ST.measure(true); if (window.__lenis) window.__lenis.resize(); });

  if (REDUCED) document.documentElement.classList.add("reduced");
})();
