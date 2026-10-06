# Behold

The life of Jesus Christ, told through every person He met, plus the Apostles, Mother Mary, the Saints and a gallery of the paintings. A static website (HTML, CSS, JavaScript) with no build step.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | **The Story**: 118 encounters across nine acts, the Passion, the Resurrection, the "I AM" sayings, a searchable index, a prayer candle, and a verse-card maker |
| `apostles.html` | **The Apostles**: the Twelve, Matthias and Paul, each with their calling, journey map, death and legacy; Paul's conversion and missionary journeys |
| `mary.html` | **Mother Mary**: her life, the Magnificat, her words, the Seven Sorrows, the history of the Rosary, the Mysteries, a pray-along Rosary, and Marian shrines |
| `saints.html` | **The Saints**: forty-one saints, from the archangel Michael and St Anne to John Paul II, each with their story, how their life ended, and three lessons with one thing to do today; Padre Pio's "Pray, hope, and don't worry" and a place to leave a worry with God; a timeline of twenty centuries, the road of St Joseph Vaz across Sri Lanka and the island's shrines, "What are you carrying today?" (a saint for each struggle), the Litany of the Saints, and a saint for the year |
| `gallery.html` | **The Gallery**: all 288 paintings and photographs, room by room. Tap any painting on any page to see it closer and browse the others in its set |

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
| `js/saints-data.js` | The saints and their eras, "What are you carrying today?", and the Sri Lanka map (Joseph Vaz's road, shrines) |
| `js/art.js` | Every painting and photograph: image links, title, artist, year, gallery room |
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
| `js/si/si-saints.js` | The Saints page |

Scripture on the Sinhala pages is translated from the English (KJV) text, not quoted from a published Sinhala Bible. The prayers follow their traditional Sinhala Catholic forms, but wording can differ slightly from parish to parish. To use a particular Bible or prayer book, replace the text in these files.

## Put it online (free)

Drag the whole folder onto https://app.netlify.com/drop, or push it to GitHub and turn on GitHub Pages.

Scripture: King James Version (public domain). Prayers: traditional English forms. Paintings and photographs: public domain or CC0, loaded from Wikimedia Commons, except two photographs of Mother Teresa (Manfredo Ferrari, CC BY-SA 4.0; Evert Odekerken, CC BY 2.5), credited on the page. On the Saints page, stories that come from early tradition rather than history are marked as such.
