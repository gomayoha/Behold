# Design prompt: paste everything below the line into ChatGPT (or any AI)

Before you paste: attach 3 to 6 screenshots of the sites you love (including the Grand Archive) and, if you can, screenshots of Behold / The Scarlet Thread on your phone. Pictures stop the AI from guessing the layout wrong. Fill in the two [BRACKETS] near the top.

---

You are a senior creative web designer and front-end engineer. I am not a designer, so I will describe the feeling I want in plain words, and you translate it into exact layout, colours, type and motion. Do not give me a generic template. Do not "improve" my taste. Follow this brief literally, and ask me ONE short question only if something is truly missing.

## 1. The project

A website about the Gospel (the life of Jesus, the apostles, Mary, the saints, and the whole Bible as one story) for my Catholic family. It must feel reverent, cinematic and premium, like opening a beautiful illuminated book at night, not like a church-bulletin site and not like a startup landing page.

- Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no package.json. Libraries only from a CDN with a pinned version (Lenis 1.1.13 for smooth scroll, Three.js 0.169.0 only if a 3D layer is needed).
- I read it on an iPhone 16 Pro Max (Safari, 440 x 956) and a MacBook Air M2. Design phone-first, then enlarge for desktop. Both must feel premium.
- Reference sites I love: [PASTE LINKS, e.g. the Grand Archive + the others you like]. Match their feel, not their branding or content. Never copy their text or images.
- Pages: Home, The Life of Jesus (long scroll story), Apostles, Mary, Saints, Gallery.

## 2. Overall mood (the most important part)

- Dark, quiet, cinematic. Think "a film title sequence" and "a museum at night". One strong image or idea per screen, with lots of empty space around it.
- Calm and slow. Nothing bounces, nothing flashes, nothing is cute. Motion is soft and deliberate, like a candle flame, never like an app.
- Rich but restrained: mostly black, one warm accent, a little gold. The artwork provides the colour.
- Feels hand-made and archival: fine grain, soft vignette, thin hairlines, small-caps labels, like a catalogue of a great collection (this is the "archive" feeling I want from the Grand Archive).

## 3. Colour (use exactly these, as CSS variables on `:root`)

| Role | Value |
| --- | --- |
| Page background | `#000000` (pure black), second layer `#0b0b0c` |
| Main text | `#f5f5f7` |
| Secondary text | `rgba(245,245,247,0.74)`, tertiary `rgba(245,245,247,0.5)` |
| Hairlines / borders | `rgba(255,255,255,0.10)` to `0.12` |
| Glass panels | `rgba(24,24,26,0.58)` with a thin hairline border |
| Accent 1: scarlet | `#e8283c` (hover `#ff5468`), used for the "thread", progress and key moments only |
| Accent 2: gold | `#d8b56a` / `#ecca8c` / light `#f3dca4` for labels, numbers, small ornaments |
| Deep blood red | `#5c0a10` for the Passion section background only |

Rules: never use pure white blocks or bright backgrounds. The page may change mood as the story moves (a deeper red-black during the Passion, a warm cream paper section only for a very quiet moment such as a quote). Text selection is scarlet. No gradients that look like a "tech startup" (no purple/blue neon).

## 4. Typography

- Headlines and UI: the Apple system font (SF Pro Display / SF Pro Text via `-apple-system, BlinkMacSystemFont`), fallback Inter. Big, bold, tightly spaced: sizes like `clamp(38px, 5.4vw, 82px)`, weight 700, letter-spacing about `-0.04em`, line-height about 1.0. Use `text-wrap: balance` on headlines.
- Scripture, quotes and sub-titles: a refined serif, italic where it feels sacred (New York / Cormorant Garamond / Newsreader / Iowan Old Style fallback), `clamp(21px, 1.85vw, 29px)`, line-height 1.3, `text-wrap: pretty`.
- Small labels (kickers, categories, citations, years): 11 to 12px, semi-bold, ALL CAPS, wide letter-spacing (`0.16em` to `0.32em`), in gold or a muted colour. This tiny-caps label above a big headline is the signature look.
- Body: 17px, line-height 1.5, slightly tight tracking (`-0.011em`), antialiased. Keep paragraphs short (2 to 4 lines on a phone).
- Only two families in total (one sans, one serif). No decorative or gothic display fonts.
- Bible quotes are the King James Version, word for word, with the reference (e.g. JOHN 3:16) as a small caps citation underneath.

## 5. Layout

- Full-screen "scenes": each section fills the screen (100svh) with a huge painting or photo as the background, darkened with a gradient from the bottom so text is always readable, and the text sits low-left (desktop) or low-centre (phone) with generous margins (`clamp(20px, 5vw, 76px)`).
- Order inside every scene: small gold label, then big headline, then one serif quote or one short paragraph, then a tiny citation. Never more than that.
- Cards (apostles, saints, gallery): large rounded corners (about 22px), dark glass surface (`rgba(255,255,255,0.04)`), 1px hairline border, the image fills the card, name in bold, role in small caps. Grid on desktop, a horizontal swipe row or single column on phone.
- Navigation: a slim fixed top bar, 52px tall, transparent over the content, with a small brand on the left and 11 to 12.5px links on the right. On phone, collapse to a clean full-screen menu with large type, not a cramped hamburger dropdown.
- A thin progress indicator (a scarlet line, or a small year/age counter) so the reader always knows where they are in the story.
- Paintings are public-domain masterworks (Wikimedia Commons). Always credit title, artist and year in small, quiet text.
- Safe areas on iPhone must be respected (`env(safe-area-inset-*)`). Nothing hidden behind the notch or the Safari toolbar. Use `100svh`, not `100vh`.

## 6. Motion and transitions (describe exactly, this is where other AIs go wrong)

Global easing for everything: `cubic-bezier(0.22, 1, 0.36, 1)` (a fast start that settles very softly). Never use linear, never use bouncy/spring overshoot.

- **Smooth scrolling**: Lenis smooth scroll so the page glides with a little inertia.
- **Scroll-driven scenes**: the page is one continuous scroll story. Each scene fades and drifts in as it arrives (opacity 0 to 1, translateY about 24 to 40px to 0, 0.9 to 1.2s), holds, then fades out as the next arrives. Images do a very slow "Ken Burns" push (scale 1.00 to about 1.08 over the length of the scene). Large background and text can move at slightly different speeds (parallax) for depth.
- **Headline reveal**: lines slide up out of an invisible mask (each line `overflow: hidden`, inner line moves from `translateY(100%)` to 0), staggered about 80ms between lines. Kicker label fades in just before the headline.
- **Opening loader**: black screen, tiny caps label, the huge title fades in, a serif italic subtitle fades in later, then a round white "Begin" pill button. Tapping it fades the loader away and starts the experience.
- **Page changes**: fade through black (about 0.4s), never a white flash, never a sliding page.
- **Buttons and cards on hover (desktop)**: lift 2 to 4px, hairline border brightens, image inside zooms about 4 to 6% slowly (0.6 to 0.9s). On phone, use a soft press (scale 0.98) instead of hover.
- **Atmosphere**: a subtle film-grain overlay (about 4 to 6% opacity, lighter on phone) and a soft dark vignette at the edges. Optional: a slow particle or starfield layer behind the text, very sparse.
- **Signature element**: a single scarlet line (the "thread") that travels through the whole story and draws itself as you scroll.
- Optional, off by default: quiet generated ambient sound with a clear mute button.

Performance rules (must follow, the phone must stay at a smooth 60fps): animate ONLY `transform` and `opacity`. No `backdrop-filter` and no big blurs on anything that moves. Lazy-load images that are near the viewport only. Respect `prefers-reduced-motion` (turn the animation down to simple fades).

## 7. Things I do NOT want

- No white or light pages, no pastel colours, no emoji, no stock "church clip-art" (doves, glowing crosses, sunbeam clichés).
- No carousels that auto-play, no popups, no cookie-style banners, no chat widgets.
- No generic centred hero with a gradient blob and two buttons.
- No cramped text over busy images without a dark gradient behind it.
- No bouncy, spinning, or flashy animations. No parallax that makes people dizzy.
- No more than 2 font families, no more than 2 accent colours on one screen.
- No dummy lorem ipsum: use real Gospel content or clearly mark placeholders.

## 8. How to answer me

1. First, restate in 5 bullets what you understood my look to be, so I can correct you before you build anything.
2. Then give the complete code for ONE page first (the home page), in three files: `index.html`, `css/styles.css`, `js/app.js`. Mobile-first. Include all the CSS variables from section 3.
3. After the code, list exactly what to check on iPhone Safari and on a laptop.
4. Wait for my feedback before building the other pages. Keep every later page visually identical in system (same colours, fonts, spacing, motion).
5. Explain any choice in one plain sentence. I am not technical, so no jargon without a short explanation.
