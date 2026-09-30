# Behold

The life of Jesus Christ, told through every person He met, plus the Apostles, Mother Mary and a gallery of the paintings. A static website (HTML, CSS, JavaScript) with no build step.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | **The Story**: 118 encounters across nine acts, the Passion, the Resurrection, the "I AM" sayings, a searchable index, a prayer candle, and a verse-card maker |
| `apostles.html` | **The Apostles**: the Twelve, Matthias and Paul, each with their calling, journey map, death and legacy; Paul's conversion and missionary journeys |
| `mary.html` | **Mother Mary**: her life, the Magnificat, her words, the Seven Sorrows, the history of the Rosary, the Mysteries, a pray-along Rosary, and Marian shrines |
| `gallery.html` | **The Gallery**: all 197 paintings, room by room. Tap any painting on any page to see it closer and browse the others in its set |

## Run it locally

```bash
cd ~/Desktop/Gospel && python3 -m http.server 5173
```

Then open http://localhost:5173.

## Edit the content

| File | What's in it |
| --- | --- |
| `js/data.js` | Site name and dedication (`SITE`), verses, the nine acts, all encounters, and which painting goes with each (`ENC_ART`) |
| `js/apostles-data.js` | The Twelve, Matthias and Paul |
| `js/mary-data.js` | Mary's life, words, sorrows, Rosary history, Mysteries, prayers and shrines |
| `js/art.js` | Every painting: image links, title, artist, year, gallery room |
| `js/map-data.js` | Dotted maps generated from Natural Earth (public domain) |
| `js/core.js` | Shared pieces: smooth scrolling, navigation, the painting viewer, maps |

## Languages (English · සිංහල)

Tap **EN · සිං** in the top bar (or choose on the opening screen). The choice is remembered, and switching keeps your place on the page. Links can also open a language directly: `index.html?lang=si`.

| File | What's in it |
| --- | --- |
| `js/i18n.js` | Switching, remembering the choice, Sinhala Bible book names in references |
| `js/si/si-core.js` | Sinhala interface text, verses, place names, painting titles |
| `js/si/si-story.js`, `si-story2.js` | The story page |
| `js/si/si-apostles.js` | The Apostles page |
| `js/si/si-mary.js` | The Mother Mary page, including the prayers |

Scripture on the Sinhala pages is translated from the English (KJV) text, not quoted from a published Sinhala Bible. The prayers follow their traditional Sinhala Catholic forms, but wording can differ slightly from parish to parish. To use a particular Bible or prayer book, replace the text in these files.

## Put it online (free)

Drag the whole folder onto https://app.netlify.com/drop, or push it to GitHub and turn on GitHub Pages.

Scripture: King James Version (public domain). Prayers: traditional English forms. Paintings: public domain (one CC0 print), loaded from Wikimedia Commons.
