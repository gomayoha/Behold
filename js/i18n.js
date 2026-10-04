/* ==========================================================================
   Behold — languages (English · සිංහල)
   Loaded after the data files and before core.js on every page.
   The chosen language is remembered; switching plays a short veil of light,
   reloads, and returns the reader to the same place in the story.
   ========================================================================== */
(function () {
  "use strict";

  const KEY = "behold.lang", SWITCH = "behold.switch";
  const get = (k, store = localStorage) => { try { return store.getItem(k); } catch (e) { return null; } };
  const set = (k, v, store = localStorage) => { try { store.setItem(k, v); } catch (e) { /* storage unavailable */ } };

  let lang = get(KEY) === "si" ? "si" : "en";
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "si" || q === "en") { lang = q; set(KEY, q); }
  const SI = window.SI || {};
  const on = lang === "si";

  const root = document.documentElement;
  root.lang = on ? "si" : "en";
  root.classList.toggle("lang-si", on);
  if (on) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&family=Noto+Serif+Sinhala:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  const fmt = (s, v) => (v ? String(s).replace(/\{(\w+)\}/g, (_, k) => (v[k] != null ? v[k] : "")) : s);
  /** Translate a UI string. The English text is the key. */
  const T = (en, v) => fmt(on && SI.ui && SI.ui[en] != null ? SI.ui[en] : en, v);

  /* Scripture references: book names become their Sinhala forms */
  const BOOKS = SI.books || {};
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const bookRe = Object.keys(BOOKS).length
    ? new RegExp("(^|[^\\w])(" + Object.keys(BOOKS).sort((a, b) => b.length - a.length).map(escRe).join("|") + ")(?=\\s*\\d)", "g")
    : null;
  const R = (s) => (on && s && bookRe ? String(s).replace(bookRe, (_, pre, b) => pre + BOOKS[b]).replace(/\bTradition\b/g, SI.ui?.Tradition || "Tradition") : s);
  const P = (name) => (on && SI.places && SI.places[name]) || name;

  /* Merge translated content into the page's data before anything is built */
  const assign = (target, src) => { if (target && src) Object.keys(src).forEach((k) => { if (src[k] != null) target[k] = src[k]; }); };
  function merge() {
    if (!on) return;
    const S = SI;
    if (window.SITE && S.site) assign(SITE, S.site);
    if (window.ART && S.art) Object.keys(S.art).forEach((k) => { if (ART[k]) ART[k].title = S.art[k]; });
    if (window.VERSES && S.verses) VERSES.forEach((v, i) => { if (S.verses[i]) v.t = S.verses[i]; v.r = R(v.r); });

    const st = S.story || {};
    if (window.GOSPELS && st.gospels) GOSPELS.forEach((g) => {
      const t = st.gospels[g.key]; if (!t) return;
      assign(g, { name: t.name, symbol: t.symbol, portrait: t.portrait, who: t.who, audience: t.audience, mark: t.mark });
      if (t.open) g.open = { t: t.open, r: R(g.open.r) };
    });
    if (window.ACTS && st.acts) ACTS.forEach((a, i) => {
      const t = st.acts[i]; if (!t) return;
      assign(a, { title: t.title, places: t.places, era: t.era });
      a.verse = { t: t.verse || a.verse.t, r: R(a.verse.r) };
    });
    if (window.ENCOUNTERS && st.enc) ENCOUNTERS.forEach((e) => {
      assign(e, st.enc[e.id]);
      e.qref = R(e.qref);
    });
    if (window.LAST_WORDS && st.lastWords) LAST_WORDS.forEach((w, i) => { if (st.lastWords[i]) w.t = st.lastWords[i]; w.r = R(w.r); });
    if (window.I_AM && st.iam) I_AM.forEach((x, i) => { if (st.iam[i]) assign(x, st.iam[i]); x.r = R(x.r); });
    if (window.PARABLES && st.parables) window.PARABLES = st.parables;

    const ap = S.apostles || {};
    if (window.APOSTLES && ap.list) APOSTLES.forEach((a) => {
      const t = ap.list[a.id]; if (!t) return;
      assign(a, { name: t.name, full: t.full, also: t.also, meaning: t.meaning, epithet: t.epithet, origin: t.origin, trade: t.trade, feast: t.feast, after: t.after, legacy: t.legacy });
      if (t.call) a.call = { t: t.call, r: R(a.call.r) };
      if (t.moments) a.moments = a.moments.map(([, r], i) => [t.moments[i] || a.moments[i][0], R(r)]);
      if (t.quote) a.quote = { t: t.quote, by: t.by || a.quote.by, r: R(a.quote.r) };
      a.afterRefs = t.afterRefs || R(a.afterRefs);
      if (t.death) a.death = { ...a.death, ...t.death, ref: R(a.death.ref) };
      a.journey = a.journey.map(([n, lon, lat]) => [P(n), lon, lat]);
    });
    if (window.MATTHIAS && ap.matthias) {
      const t = ap.matthias;
      assign(MATTHIAS, { name: t.name, text: t.text });
      MATTHIAS.ref = R(MATTHIAS.ref);
      MATTHIAS.quote = { t: t.quote, r: R(MATTHIAS.quote.r) };
      MATTHIAS.death = { ...MATTHIAS.death, ...t.death };
    }
    if (window.PAUL && ap.paul) {
      const t = ap.paul, p = PAUL;
      assign(p, { name: t.name, full: t.full, also: t.also });
      p.facts = p.facts.map(([, , r], i) => [t.facts[i][0], t.facts[i][1], R(r)]);
      p.before = { t: t.before.t, text: t.before.text, r: R(p.before.r) };
      p.conversion = p.conversion.map((c, i) => ({ t: t.conversion[i], r: R(c.r) }));
      p.scales = { t: t.scales, r: R(p.scales.r) };
      p.journeys = p.journeys.map((j, i) => ({ ...j, name: t.journeys[i].name, years: t.journeys[i].years, text: t.journeys[i].text, ref: R(j.ref), stops: j.stops.map(([n, lon, lat]) => [P(n), lon, lat]) }));
      p.sufferings = p.sufferings.map(([n], i) => [n, t.sufferings[i][0], t.sufferings[i][1]]);
      p.sufferRef = R(p.sufferRef);
      const lines = {};
      p.letters.forEach((l, i) => { lines[t.letters[i]] = t.letterLines[i]; });
      p.letters = t.letters.slice();
      p.letterLines = lines;
      p.death = { ...p.death, ...t.death };
      p.last = { t: t.last, r: R(p.last.r) };
    }

    const m = S.mary || {};
    if (window.MARY_LIFE && m.life) MARY_LIFE.forEach((c) => { assign(c, m.life[c.id]); c.ref = R(c.ref); });
    if (window.MARY_WORDS && m.words) MARY_WORDS.forEach((w, i) => { assign(w, m.words[i]); w.r = R(w.r); });
    if (window.MAGNIFICAT && m.magnificat) window.MAGNIFICAT = m.magnificat;
    if (window.SORROWS && m.sorrows) SORROWS.forEach((s, i) => { assign(s, m.sorrows[i]); s.ref = R(s.ref); });
    if (window.HARDSHIPS && m.hardships) window.HARDSHIPS = HARDSHIPS.map(([, , r], i) => [m.hardships[i][0], m.hardships[i][1], R(r)]);
    if (window.ROSARY_HISTORY && m.history) ROSARY_HISTORY.forEach((h, i) => assign(h, m.history[i]));
    if (window.MYSTERIES && m.mysteries) Object.keys(MYSTERIES).forEach((k) => {
      const t = m.mysteries[k]; if (!t) return;
      MYSTERIES[k].name = t.name; MYSTERIES[k].days = t.days;
      MYSTERIES[k].list = MYSTERIES[k].list.map(([, r, , img], i) => [t.list[i][0], R(r), t.list[i][1], img]);
    });
    if (window.PRAYERS && m.prayers) Object.keys(PRAYERS).forEach((k) => assign(PRAYERS[k], m.prayers[k]));
    if (window.SHRINES && m.shrines) SHRINES.forEach((s, i) => assign(s, m.shrines[i]));
    if (m.subTuum) window.SUB_TUUM = m.subTuum;

    const sa = S.saints || {};
    if (window.SAINTS && sa.list) SAINTS.forEach((s) => {
      const t = sa.list[s.id] || {};
      assign(s, { name: t.name, full: t.full, title: t.title, lived: t.lived, from: t.from, feast: t.feast, patron: t.patron, story: t.story, lessons: t.lessons, practice: t.practice });
      s.moments = s.moments.map(([w, x, r], i) => { const m = (t.moments && t.moments[i]) || []; return [m[0] || w, m[1] || x, m[2] || R(r)]; });
      s.quote = { t: t.quote || s.quote.t, by: t.by || s.quote.by, r: t.quoteRef || R(s.quote.r) };
      if (t.end) s.end = { ...s.end, ...t.end };
    });
    if (window.SAINT_ERAS && sa.eras) SAINT_ERAS.forEach((e, i) => assign(e, sa.eras[i]));
    if (window.COMPANIONS && sa.companions) COMPANIONS.forEach((c, i) => {
      const t = sa.companions[i]; if (!t) return;
      c.label = t.label;
      c.picks = c.picks.map(([id, why], k) => [id, (t.why && t.why[k]) || why]);
    });
    if (window.LANKA && sa.lanka) {
      LANKA.route.forEach((r, i) => { assign(r, sa.lanka.route && sa.lanka.route[i]); r.place = P(r.place); });
      LANKA.shrines.forEach((r, i) => assign(r, sa.lanka.shrines && sa.lanka.shrines[i]));
    }
  }

  /* Static text in the HTML: data-t="key" (innerHTML), data-t-ph="key" (placeholder) */
  function translateStatic(scope) {
    if (!on) return;
    const H = SI.html || {};
    scope.querySelectorAll("[data-t]").forEach((el) => { const v = H[el.dataset.t]; if (v != null) el.innerHTML = v; });
    scope.querySelectorAll("[data-t-ph]").forEach((el) => { const v = H[el.dataset.tPh]; if (v != null) el.placeholder = v; });
    scope.querySelectorAll("[data-t-label]").forEach((el) => { const v = H[el.dataset.tLabel]; if (v != null) el.setAttribute("aria-label", v); });
  }

  merge();
  translateStatic(document);
  document.querySelectorAll("template").forEach((t) => translateStatic(t.content));
  const page = document.body.dataset.page || "story";
  if (on && SI.html) {
    if (SI.html[`title.${page}`]) document.title = SI.html[`title.${page}`];
    const d = document.querySelector('meta[name="description"]');
    if (d && SI.html[`desc.${page}`]) d.content = SI.html[`desc.${page}`];
  }

  /* ---------- switching, with a veil of light ---------- */
  function anchor() {
    const els = Array.from(document.querySelectorAll("main [id]"));
    let best = null;
    for (const el of els) {
      const box = (el.parentElement && el.parentElement.classList.contains("pin-spacer") ? el.parentElement : el).getBoundingClientRect();
      if (box.height && box.top <= 120) best = { id: el.id, delta: Math.round(-box.top) };
    }
    return best;
  }
  function veil(word, instant) {
    let v = document.getElementById("langVeil");
    if (!v) {
      v = document.createElement("div");
      v.id = "langVeil";
      v.className = "lang-veil";
      v.innerHTML = '<div class="lv-glow"></div><p class="lv-word"></p>';
      document.body.appendChild(v);
    }
    v.querySelector(".lv-word").textContent = word;
    v.classList.toggle("instant", !!instant);
    requestAnimationFrame(() => v.classList.add("show"));
    return v;
  }
  function switchTo(next) {
    if (next === lang) return;
    const entered = !document.getElementById("loader");
    set(SWITCH, JSON.stringify({ anchor: entered ? anchor() : null, entered, word: next === "si" ? "සිංහල" : "English" }), sessionStorage);
    set(KEY, next);
    veil(next === "si" ? "සිංහල" : "English");
    setTimeout(() => {
      const url = new URL(location.href);
      url.searchParams.delete("lang");
      location.replace(url.pathname + url.search + url.hash);
    }, 950);
  }

  // Arriving from a switch: start behind the veil, then lift it where the reader was
  let resume = null;
  try { resume = JSON.parse(get(SWITCH, sessionStorage)); } catch (e) { resume = null; }
  if (resume) {
    try { sessionStorage.removeItem(SWITCH); } catch (e) { /* storage unavailable */ }
    veil(resume.word, true);
  }
  function settle() {
    if (!resume) return;
    const v = document.getElementById("langVeil");
    const a = resume.anchor && document.getElementById(resume.anchor.id);
    if (a) {
      const box = (a.parentElement && a.parentElement.classList.contains("pin-spacer") ? a.parentElement : a).getBoundingClientRect();
      const y = box.top + window.scrollY + resume.anchor.delta;
      if (window.Core && Core.lenis) Core.lenis.scrollTo(y, { immediate: true, force: true });
      window.scrollTo(0, y);
    }
    setTimeout(() => { if (v) { v.classList.remove("instant"); v.classList.remove("show"); setTimeout(() => v.remove(), 1200); } }, 250);
  }

  window.I18N = { lang, on, T, R, P, switchTo, resume, settle, translateStatic };
  window.T = T;
})();
