/* ==========================================================================
   Behold — the Gallery
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, esc, REDUCED, HAS_GSAP } = Core;
  const ROOMS = [
    ["all", "All rooms", "The whole collection, hung in the order of the story."],
    ["nativity", "The Nativity", "From the Annunciation to the flight into Egypt."],
    ["ministry", "The Ministry", "Callings, conversations and the words He taught."],
    ["miracles", "The Miracles", "Healings, signs and wonders."],
    ["passion", "The Passion", "From the Last Supper to the sealed tomb."],
    ["resurrection", "The Resurrection", "The empty tomb to the Ascension."],
    ["apostles", "The Apostles", "The Twelve and Paul — their missions and their deaths."],
    ["mary", "Mother Mary", "Her life, her sorrows and her glory."]
  ].map(([id, name, note]) => [id, T(name), T(note)]);
  const keys = Object.keys(ART);
  const artists = [...new Set(keys.map((k) => ART[k].artist))].sort((a, b) => a.localeCompare(b));

  $("#gHeroSub").innerHTML = T("{n} paintings by {a} artists, from Giotto to Tissot. Tap any painting to see it closer.", { n: `<span>${keys.length}</span>`, a: `<span>${artists.length}</span>` });

  // A slow wall of paintings behind the title
  const shuffled = keys.slice().sort(() => Math.random() - 0.5);
  $("#gHeroWall").innerHTML = [0, 1, 2].map((r) => {
    const row = shuffled.slice(r * 14, r * 14 + 14);
    const imgs = row.map((k) => `<img src="${ART[k].src}" alt="" loading="lazy" decoding="async" />`).join("");
    return `<div class="gw-row ${r % 2 ? "rev" : ""}"><div class="gw-track">${imgs}${imgs}</div></div>`;
  }).join("");

  // Rooms and artists
  $("#gTabs").innerHTML = ROOMS.map(([id, name]) => {
    const n = id === "all" ? keys.length : keys.filter((k) => ART[k].cat === id).length;
    return `<button data-room="${id}" role="tab">${name}<span>${n}</span></button>`;
  }).join("");
  $("#gArtist").innerHTML = `<option value="">${T("All artists")}</option>` + artists.map((a) => `<option>${esc(a)}</option>`).join("");

  const order = ROOMS.slice(1).map((r) => r[0]);
  const sorted = keys.slice().sort((a, b) => order.indexOf(ART[a].cat) - order.indexOf(ART[b].cat));
  $("#gWall").innerHTML = sorted.map((k) => {
    const a = ART[k];
    return `<figure class="g-item" data-cat="${a.cat}" data-artist="${esc(a.artist)}">
      <div class="g-frame zoomable" style="aspect-ratio:${a.w} / ${a.h}">
        <img src="${a.src}" alt="${esc(a.title)} by ${esc(a.artist)}" loading="lazy" decoding="async" data-lb="${k}" data-lb-group="view" onload="this.classList.add('loaded')" onerror="this.closest('.g-item').remove()" />
      </div>
      <figcaption><b>${esc(a.title)}</b><span>${esc(a.artist)} · ${esc(a.year)}</span></figcaption>
    </figure>`;
  }).join("");

  // Masonry that keeps reading order: each painting joins the shortest column
  const items = $$(".g-item");
  function layout() {
    const wall = $("#gWall"), w = wall.clientWidth;
    const n = w >= 1180 ? 4 : w >= 820 ? 3 : 2;
    const cols = Array.from({ length: n }, () => ({ el: document.createElement("div"), h: 0 }));
    cols.forEach((c) => (c.el.className = "g-col"));
    items.forEach((it) => {
      if (it.hidden) { cols[0].el.appendChild(it); return; }
      const a = ART[$("img", it).dataset.lb];
      const c = cols.reduce((m, x) => (x.h < m.h ? x : m), cols[0]);
      c.el.appendChild(it);
      c.h += a.h / a.w + 0.25;
    });
    wall.replaceChildren(...cols.map((c) => c.el));
  }
  let lastW = 0;
  window.addEventListener("resize", () => { const w = $("#gWall").clientWidth; if (Math.abs(w - lastW) > 40) { lastW = w; layout(); } });

  let room = "all", artist = "";
  function apply() {
    const [, name, note] = ROOMS.find((r) => r[0] === room);
    $$("#gTabs button").forEach((b) => b.classList.toggle("active", b.dataset.room === room));
    $("#gRoomTitle").textContent = artist ? `${name} · ${artist}` : name;
    let n = 0;
    $$(".g-item").forEach((it) => {
      const ok = (room === "all" || it.dataset.cat === room) && (!artist || it.dataset.artist === artist);
      it.hidden = !ok;
      if (ok) n++;
      // the viewer walks only through what is on the wall right now
      $("img", it).dataset.lbGroup = ok ? "view" : "hidden";
    });
    layout();
    $("#gWall").dataset.lbName = $("#gRoomTitle").textContent;
    $("#gRoomNote").textContent = n ? `${note} ${n === 1 ? T("1 painting.") : T("{n} paintings.", { n })}` : T("No paintings match — try another room or artist.");
    if (HAS_GSAP && !REDUCED) gsap.fromTo($$(".g-item:not([hidden])").slice(0, 24), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.03, duration: 0.8, ease: "power3.out", overwrite: true });
    if (HAS_GSAP) ScrollTrigger.refresh();
  }
  $$("#gTabs button").forEach((b) => b.addEventListener("click", () => { room = b.dataset.room; apply(); }));
  $("#gArtist").addEventListener("change", (e) => { artist = e.target.value; apply(); });
  apply();

  Core.settleLanguage();
  if (!HAS_GSAP || REDUCED) return;
  gsap.from(".g-hero-copy > *", { opacity: 0, y: 40, filter: "blur(10px)", stagger: 0.15, duration: 1.4, ease: "power3.out", delay: 0.2 });
  gsap.to(".g-hero-copy", { opacity: 0, y: -60, ease: "none", scrollTrigger: { trigger: ".g-hero", start: "top top", end: "bottom 30%", scrub: true } });
  gsap.to(".g-hero-wall", { scale: 1.08, opacity: 0.25, ease: "none", scrollTrigger: { trigger: ".g-hero", start: "top top", end: "bottom top", scrub: true } });
})();
