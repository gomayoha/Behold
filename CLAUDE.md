# Behold + The Scarlet Thread

Two static websites in one repo, for a Catholic family. Plain HTML, CSS and JavaScript: no build step, no framework, no package.json. Libraries come from CDNs with pinned versions.

- **Behold** (repo root): the life of Jesus. Pages `index.html`, `apostles.html`, `mary.html`, `saints.html`, `gallery.html`. English and Sinhala.
- **The Scarlet Thread** (`scarlet-thread/`): the whole Bible, Genesis to Revelation, as one scroll-driven 3D story. English only. Linked from Behold's nav (the `thread` entry in `PAGES` in `js/core.js`) and from the first card in "Continue the journey" on `index.html` (`.jcard-thread`).

The owner reads the sites on an iPhone 16 Pro Max and a MacBook Air M2. Both must look and feel premium.

## Run and check

```bash
python3 -m http.server 5173        # from the repo root (or: npx serve -l 5173)
# Behold:            http://localhost:5173/
# The Scarlet Thread: http://localhost:5173/scarlet-thread/
node scarlet-thread/tools/check.js # after any story/art/book/promise edit: must print ALL GOOD
```

Always test at desktop 1440×900 and phone 430×932 (touch). The browser console must stay free of errors. Use a real browser or Playwright. Install Playwright in a scratch folder outside the repo, not as a project dependency.

## The Scarlet Thread: how it works

| File | Role |
| --- | --- |
| `js/story-1.js`, `story-2.js`, `story-3.js` | `window.AGES`: 15 ages, 121 scenes. The field legend is at the top of `story-1.js` |
| `js/art.js` | `window.ART`: every painting. `f` Commons file name, `t` title, `a` artist, `y` year, `s` ~1280px URL, `l` ~1920px URL, `o` original (never loaded), `q` search used if the file moved |
| `js/books.js` | `window.BOOKS` (73 books, Catholic canon, deuterocanonicals marked ✦) and `SECTIONS` |
| `js/threads.js` | `window.THREADS`: the 26 promises. A scene plants one with `th` and fulfils it with `kept` |
| `js/lands.js`, `routes.js` | Dotted maps and journey routes for `fx.type: "map"` |
| `js/images.js` | `window.Paint`: loads `s`/`l`; if those fail, asks the Commons API by file name, then searches by `q`; remembers the result in localStorage |
| `js/st-core.js` | `window.ST`: the scroll engine. Every scene is absolutely positioned in a fixed `#theatre`; empty spacers in `#track` make the page scroll; each frame gives each scene `uIn` / `uMid` / `uOut` (0→1) and `e` (eased entrance) |
| `js/st-scenes.js` | Layouts: `age` (chapter card), `full`, `plate`, `portal`, `word` |
| `js/st-fx.js` | Set pieces, picked by `fx.type`: steps (styles days, plagues, tablets, wisdom, whisper, voices), map, tongues, redsea, flood, goliath, cross, new, amen and more. Register new ones with `ST.type(name, { build, init, update, gl })` |
| `js/gl.js` | Three.js (ES module): a particle sculpture that morphs between named shapes (`sh` on an age, scene or step; see `SHAPES`), a starfield, and the scarlet thread |
| `js/st-ui.js` | Nav, HUD year clock and counters, side rail, contents, Library, People, Promises, the ending, keyboard, Lenis |
| `js/audio.js` | Optional generated ambient pad (Web Audio, no files) |
| `css/thread.css` | All styling. Tokens on `:root`; phone rules under `@media (max-width: 760px)` |

To add a scene, add an object to the right age's `scenes` array: `id`, `t`, `k`, `y` (BC negative) or `yl`, `b` (book ids from `books.js`), `x`, `q`/`r`, `cast`, `art` + `lay`, or `fx`. Years must never go backwards; `check.js` catches that, plus missing paintings, unknown books and broken promises. Every book must appear in at least one scene.

## Rules

- **Paintings and photos:** public domain or freely licensed only, and every image credits its title, artist and year. A CC BY or CC BY-SA photo must also name its licence in the credit. Use Wikimedia thumbnail URLs at 1280px (`s`) and 1920px (`l`); never point `s` or `l` at an original file (some are hundreds of MB). Local images go in `scarlet-thread/img/` (web-sized JPG/WebP, about 1920px on the long side and under ~400 KB); `s`/`l` can then be relative paths like `img/ruth.jpg`.
- **Scripture:** KJV, quoted word for word (the 1611 KJV text for deuterocanonical books). The Ten Commandments use the Catholic numbering.
- **Typography:** Apple system fonts first (`--sans`, `--serif` in `thread.css`). No new font families. Check the words for spelling, natural phrasing and awkward line breaks.
- **Motion and speed:** it must stay smooth on an iPhone. Animate only `transform` and `opacity`. No `backdrop-filter` or large blurs on moving layers. Don't raise particle counts. Load images only near the viewport (`loadAround` in `st-core.js` already does this). Respect `prefers-reduced-motion`.
- **Keep progress:** don't rename localStorage keys (`st-visited`, `st-last`, `st-paint-v1`), or families lose their place.
- **Don't break Behold:** the nav tab, the journey card and the Sinhala strings (`js/si/si-core.js`, `js/si/si-story.js`) must keep working.
- **Libraries:** keep pinned CDN versions (three 0.169.0 via the import map, lenis 1.1.13). No bundlers, frameworks or new dependencies without asking.
- **Git:** small commits with clear messages, one verified change at a time. Push only when asked.
