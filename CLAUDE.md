# Behold + The Scarlet Thread

Two static websites in one repo, for a Catholic family. Plain HTML, CSS and JavaScript: no build step, no framework, no package.json. Libraries come from CDNs with pinned versions.

- **Behold** (repo root): the life of Jesus. Pages `index.html`, `apostles.html`, `mary.html`, `saints.html`, `gallery.html`. English and Sinhala.
- **The Scarlet Thread** (`scarlet-thread/`): the whole Bible, Genesis to Revelation, as one scroll-driven 3D story. English only. Linked from Behold's nav (the `thread` entry in `PAGES` in `js/core.js`) and from the first card in "Continue the journey" on `index.html` (`.jcard-thread`).

The owner reads the sites on an iPhone 16 Pro Max (Safari, 440×956) and a MacBook Air M2. Both must look and feel premium.

## Run and check

Needs Node.js (LTS) for the checker and for Playwright.

```bash
python3 -m http.server 5173        # from the repo root. Windows: py -m http.server 5173
                                   # without Python: npx http-server -p 5173 -c-1
                                   # (not `npx serve`: its clean URLs break the scarlet-thread/index.html links)
node scarlet-thread/tools/check.js # after any story/art/book/promise edit: must end with ALL GOOD
```

- Behold: http://localhost:5173/ · The Scarlet Thread: http://localhost:5173/scarlet-thread/
- Test at desktop 1440×900 (Chromium) and phone 440×956 (WebKit, touch, deviceScaleFactor 3), because the owner uses Safari. The browser console must stay free of errors. Headless WebGL can warn about software rendering: rerun headed before calling that a bug.
- Install Playwright in a scratch folder outside the repo (`npm i playwright && npx playwright install chromium webkit`), never as a project dependency.

**Scripted screenshots of The Scarlet Thread.** The page starts behind a loader: click `#begin`, then wait about 2s. `ST.items` lists all 136 items (15 chapter cards and 121 scenes), in order, each with `id`, `top` and `bottom` in scroll pixels. A scene is at the middle of its timeline at scroll `y = it.top + 0.6*ST.T + 0.5*(it.bottom - it.top - 1.6*ST.T)`. For a step scene, replace 0.5 with `(k + 0.5) / steps` for step k. The hand-off to the next item is at `it.bottom`. Scroll with `window.__lenis.scrollTo(y, { immediate: true, force: true })`, or plain `scrollTo(0, y)` when `__lenis` is undefined (reduced motion). Wait about 1.5s for images and text to settle. Don't use `ST.jump()` for screenshots: it fades a black curtain. A deep link `scarlet-thread/#<scene-id>` starts the story at that scene.

## The Scarlet Thread: how it works

| File | Role |
| --- | --- |
| `js/story-1.js`, `story-2.js`, `story-3.js` | `window.AGES`: 15 ages, 121 scenes. The field legend is at the top of `story-1.js` |
| `js/art.js` | `window.ART`: every painting. All entries have `t` title, `a` artist, `y` year and `q` (a Commons search). Most also have `f` (Commons file name), `s` (~1280px URL), `l` (~1920px URL), `w`/`h` (original size) and `o` (the original, kept for reference and never loaded). **55 entries have only `t/a/y/q`.** The site finds those at run time by searching Commons and shows the first JPEG/PNG at least 600px wide, credited from that file, so they can show the wrong painting until they get a real `f`/`s`/`l`. `node tools/check.js` lists them |
| `js/books.js` | `window.BOOKS` (73 books, Catholic canon, deuterocanonicals marked ✦) and `window.SECTIONS` |
| `js/threads.js` | `window.THREADS`: the 26 promises. A scene plants one with `th` and fulfils it with `kept` |
| `js/lands.js`, `routes.js` | Dotted maps and journey routes for `fx.type: "map"` |
| `js/images.js` | `window.Paint`: tries a URL it remembered on this device (`st-paint-v1`, used only while that art.js entry is unchanged), then `l` (big screens) and `s`; if those fail, asks the Commons API by `f`, then searches by `q`. Never loads `o` |
| `js/st-core.js` | `window.ST`: the scroll engine. Every scene is absolutely positioned in a fixed `#theatre`; empty spacers in `#track` make the page scroll; each frame gives each scene `uIn` / `uMid` / `uOut` (0→1) and `e` (eased entrance) |
| `js/st-scenes.js` | Layouts (`lay`): `age` (chapter card), `full`, `plate`, `portal`, `word` |
| `js/st-fx.js` | Set pieces, picked by `fx.type`: map, tongues, redsea, flood, goliath, cross, new, amen and more. Steps scenes use `fx.type: "steps"` with `fx.style` (days, plagues, tablets, wisdom, whisper, voices), created by `stepsType(style, opts)` and registered as `steps-<style>`. Register a new type with `ST.type(name, { build, update, init?, measure?, show?, hide?, gl? })`; `build` and `update` are required. An unknown `fx.type` silently renders as a plain `word` scene |
| `js/gl.js` | Three.js (ES module): a particle sculpture that morphs between named shapes (`sh` on an age, scene or step; see `SHAPES`), a starfield, and the scarlet thread |
| `js/st-ui.js` | Nav, HUD year clock and counters, side rail, contents, Library, People (portraits come from each entry's `s`), Promises, the ending, keyboard, Lenis |
| `js/audio.js` | Optional generated ambient pad (Web Audio, no files) |
| `css/thread.css` | All styling. Tokens on `:root`; phone rules under `@media (max-width: 760px)` |
| `tools/check.js` | The data checker (see below) |

To add a scene, add an object to the right age's `scenes` array: `id`, `t`, `k`, `y` (BC negative) or `yl`, `b` (book ids from `books.js`), `x`, `q`/`r`, `cast`, and either `art` + `lay` or `fx`.

`check.js` checks for duplicate scene ids, unknown art keys, unknown books (in scenes and steps), years that go backwards, scenes without a layout, and promises that are unknown, never planted or never kept. Every book must appear somewhere. It does **not** check that paintings load, that `fx`/`lay` names exist, or promise order: check those in the browser. Its "unused art" lines include keys that `st-ui.js` uses for People portraits and the ending cards (thomas, magdalene, michael, emmaus, peter-cross); don't delete them.

## Rules

- **Paintings and photos:** public domain or freely licensed only, and every image credits its title, artist and year. A CC BY or CC BY-SA photo must also name its licence in the credit.
- **Wikimedia URLs:** take `s` and `l` from the Commons API (`thumburl` with `iiurlwidth=1280`, then `1920`); never build them by hand. When a file is narrower than that width, the API returns the original's own URL: keep it (about 20 small New Testament entries already do). Never point `s` or `l` at an original wider than about 2000px (some are hundreds of MB). Record `w`/`h`.
- **Wikimedia API etiquette:** use https://commons.wikimedia.org/w/api.php, not web pages. Batch up to 50 titles per request (`titles=File:A|File:B`, `redirects=1`, `maxlag=5`). Send a descriptive header on every scripted request, e.g. `User-Agent: ScarletThreadCheck/1.0 (https://github.com/gomayoha/Behold)`, or Wikimedia may answer 403/429.
- **Local images:** go in `scarlet-thread/img/`. Convert HEIC to JPG, resize to about 1920px on the long side, compress to under ~400 KB, and strip all metadata, especially GPS location, before committing (this repo is public). Set both `s` and `l` to the relative path (e.g. `img/ruth.jpg`; phones only ever load `s`) and leave out `f`, `q` and `o`.
- **Scripture:** KJV, quoted word for word (the 1611 KJV text for deuterocanonical books). The Ten Commandments use the Catholic numbering. All other text: natural, polished English with no spelling mistakes and no awkward line breaks.
- **Typography:** Apple system fonts first (`--sans`, `--serif` in `thread.css`). No new font families.
- **Motion and speed:** it must stay smooth on an iPhone. Animate only `transform` and `opacity`. No `backdrop-filter` or large blurs on moving layers. Don't raise particle counts. Load images only near the viewport (`loadAround` in `st-core.js`). Respect `prefers-reduced-motion`.
- **Keep progress:** don't rename the localStorage keys `st-visited` and `st-last`, or families lose their place.
- **Don't break Behold:** the nav tab, the journey card and the Sinhala strings (`js/si/si-core.js`, `js/si/si-story.js`) must keep working.
- **Libraries:** keep pinned CDN versions (three 0.169.0 via the import map, lenis 1.1.13). No bundlers, frameworks or new dependencies without asking.
- **Git:** small commits with clear messages, one verified change at a time. Push only when asked. Pushing updates the working branch; the live site only changes once that branch is merged into `main`.
