/* ==========================================================================
   Paintings that always arrive.
   Each painting is tried at its known Wikimedia address first. If that file
   has moved or is smaller than expected, Wikimedia Commons is asked for it by
   name, and failing that, searched for by title and artist. Whatever works is
   remembered on this device, so the next visit is instant, until that entry in
   art.js is edited.
   ========================================================================== */
window.Paint = (function () {
  "use strict";
  const ART = window.ART || {};
  const KEY = "st-paint-v1";
  let memo = {};
  try { memo = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { memo = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(memo)); } catch (e) { /* private mode */ } };
  const API = "https://commons.wikimedia.org/w/api.php?format=json&origin=*&action=query&prop=imageinfo" +
    "&iiprop=url|size|mime|extmetadata&iiextmetadatafilter=Artist|ObjectName|DateTimeOriginal&iiurlwidth=";
  const jobs = {};

  function probe(url, ms = 15000) {
    return new Promise((ok, no) => {
      const im = new Image();
      const timer = setTimeout(() => { im.src = ""; no(new Error("timeout")); }, ms);
      im.decoding = "async";
      im.onload = () => { clearTimeout(timer); im.naturalWidth > 1 ? ok(url) : no(new Error("empty")); };
      im.onerror = () => { clearTimeout(timer); no(new Error("error")); };
      im.src = url;
    });
  }
  async function getJSON(url) {
    const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = ctl && setTimeout(() => ctl.abort(), 9000);
    try {
      const r = await fetch(url, ctl ? { signal: ctl.signal } : {});
      if (!r.ok) throw new Error(r.status);
      return await r.json();
    } finally { if (timer) clearTimeout(timer); }
  }
  const plain = (html) => { const d = document.createElement("div"); d.innerHTML = html || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  function fromInfo(page) {
    const ii = page && page.imageinfo && page.imageinfo[0];
    if (!ii) return null;
    const m = ii.extmetadata || {};
    return {
      u: ii.thumburl || ii.url,
      w: ii.thumbwidth || ii.width, h: ii.thumbheight || ii.height,
      t: plain(m.ObjectName && m.ObjectName.value), a: plain(m.Artist && m.Artist.value).slice(0, 80), y: plain(m.DateTimeOriginal && m.DateTimeOriginal.value).slice(0, 24)
    };
  }
  async function ask(key, width) {
    const a = ART[key];
    if (a.f) {
      const j = await getJSON(API + width + "&titles=" + encodeURIComponent("File:" + a.f));
      const pages = Object.values((j.query && j.query.pages) || {});
      const p = pages.find((x) => !("missing" in x) && x.imageinfo);
      if (p) { const r = fromInfo(p); if (r) { r.t = r.a = r.y = ""; return r; } }
    }
    if (!a.q) return null;
    const j = await getJSON(API + width + "&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=" + encodeURIComponent(a.q));
    const pages = Object.values((j.query && j.query.pages) || {}).sort((x, y) => (x.index || 0) - (y.index || 0));
    const p = pages.find((x) => { const ii = x.imageinfo && x.imageinfo[0]; return ii && /jpe?g|png/i.test(ii.mime || "") && (ii.width || 0) >= 600; });
    if (!p) return null;
    const r = fromInfo(p);
    r.searched = true;
    return r;
  }

  /** Resolve a painting to a working URL. big: prefer ~1920px. Resolves to { u, t?, a?, y?, searched? } or null. */
  function get(key, big) {
    const id = key + (big ? "@l" : "");
    if (jobs[id]) return jobs[id];
    return (jobs[id] = (async () => {
      const a = ART[key];
      if (!a) return null;
      // a remembered find only counts while the entry in art.js is unchanged
      const sig = [a.s, a.f, a.q].join("|"), m = memo[key] && memo[key].sig === sig ? memo[key] : null;
      const tries = [];
      if (m) tries.push(m.u);
      if (big && a.l) tries.push(a.l);
      if (a.s) tries.push(a.s);
      // never fall back to an untested original: some are hundreds of megabytes
      for (const u of [...new Set(tries)]) {
        try { await probe(u); return m && m.u === u ? m : { u }; } catch (e) { /* try the next */ }
      }
      try {
        const r = await ask(key, big ? 1920 : 1280);
        if (r && r.u) { await probe(r.u); r.sig = sig; memo[key] = r; save(); return r; }
      } catch (e) { /* offline, or Commons is unreachable */ }
      return null;
    })());
  }

  /** The credit line for a painting, corrected if a search found a different file.
   *  Commons metadata is often raw Wikidata (multilingual labels, "QS:" codes, scan file names): use it only when it reads cleanly. */
  const clean = (s, max) => s && s.length <= max && !/QS:|label|title|\(\d{6,}\)|https?:|\bdate\b|\.(jpe?g|png|tiff?)\b/i.test(s);
  function credit(key, found) {
    const a = ART[key] || {};
    if (found && found.searched && clean(found.t, 90) && clean(found.a || a.a, 60)) return { t: found.t, a: found.a || a.a, y: /^\d{4}$/.test(found.y) ? found.y : "" };
    return { t: a.t, a: a.a, y: a.y };
  }

  /** Point an <img> at a painting; `onDone(found)` runs when it lands (or fails). */
  function into(img, key, big, onDone) {
    if (!img || img.dataset.key === key + (big ? "@l" : "")) return;
    img.dataset.key = key + (big ? "@l" : "");
    get(key, big).then((r) => {
      if (img.dataset.key !== key + (big ? "@l" : "")) return;
      if (r) {
        img.onload = () => img.classList.add("loaded");
        img.src = r.u;
        if (img.complete && img.naturalWidth) img.classList.add("loaded");
      } else img.classList.add("missing");
      if (onDone) onDone(r);
    });
  }
  function release(img) {
    if (!img || !img.dataset.key) return;
    img.removeAttribute("src");
    img.classList.remove("loaded");
    delete img.dataset.key;
  }
  return { get, into, release, credit };
})();
