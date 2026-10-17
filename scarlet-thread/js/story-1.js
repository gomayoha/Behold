/* ==========================================================================
   The Scarlet Thread — the story, part one: Creation to the Promised Land.
   Each age opens with a title card, then its scenes in order.
   Scene fields: t title · k reference · pl place · y year (BC negative) · yl year label
   b books · x story · q/r quote and reference (KJV) · cast · art · lay layout
   th thread planted · kept threads fulfilled · fx set piece · sh 3D shape · h length (screens)
   ========================================================================== */
window.AGES = window.AGES || [];

window.AGES.push(
/* ─────────────────────────────── I ─────────────────────────────── */
{
  id: "creation", n: "I", t: "In the Beginning", s: "Creation", books: "Genesis 1–2", yl: "Before time",
  c: "#f3e3bd", sh: "galaxy",
  v: "In the beginning God created the heaven and the earth.", r: "Genesis 1:1",
  x: "Before there was anything, there was God. The story of everything begins with a voice speaking into the dark.",
  scenes: [
    {
      id: "light", t: "Let there be light.", k: "Genesis 1:1–5", pl: "The face of the deep", yl: "The first day", b: ["gen"],
      x: "The earth was without form, and void, and darkness was upon the face of the deep. The Spirit of God moved upon the face of the waters. Then God spoke, and light broke into the darkness. He saw that it was good, and divided the light from the darkness.",
      q: "And God said, Let there be light: and there was light.", r: "Genesis 1:3",
      art: "light", lay: "full", pos: "50% 30%", sh: "sphere"
    },
    {
      id: "days", t: "Six days, and a seventh.", k: "Genesis 1:1 – 2:3", yl: "The week of creation", b: ["gen"],
      x: "Each day, God speaks, and the world takes shape: first the spaces, then what fills them. And each day ends the same way: God saw that it was good.",
      fx: { type: "steps", style: "days", steps: [
        { n: "Day One", t: "Light", x: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.", r: "Genesis 1:5", sh: "sphere" },
        { n: "Day Two", t: "The firmament", x: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.", r: "Genesis 1:6", sh: "sea" },
        { n: "Day Three", t: "Land and life", x: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.", r: "Genesis 1:9", sh: "globe" },
        { n: "Day Four", t: "The lights", x: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.", r: "Genesis 1:16", sh: "galaxy" },
        { n: "Day Five", t: "Sea and sky", x: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind.", r: "Genesis 1:21", sh: "swirl" },
        { n: "Day Six", t: "In His image", x: "So God created man in his own image, in the image of God created he him; male and female created he them.", r: "Genesis 1:27", sh: "figure" },
        { n: "Day Seven", t: "Rest", x: "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.", r: "Genesis 2:2", sh: "ring" }
      ] },
      h: 7
    },
    {
      id: "adam", t: "Dust and breath.", k: "Genesis 2:7", pl: "Eden", yl: "The sixth day", b: ["gen"],
      x: "God shaped the first man from the dust of the ground and breathed into him His own breath. Of everything He made, only humankind bears His image: made to know Him, to love Him, and to care for His world.",
      q: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.", r: "Genesis 2:7",
      cast: [["Adam", "The first man, formed from the dust"]],
      art: "creation-adam", lay: "full", pos: "50% 50%", posm: "40% 50%", sh: "figure"
    },
    {
      id: "eden", t: "A garden eastward in Eden.", k: "Genesis 2:8–25", pl: "Eden", yl: "The beginning", b: ["gen"],
      x: "God planted a garden and placed the man there to tend it. A river watered it. In the midst stood the tree of life, and the tree of the knowledge of good and evil, the one tree whose fruit He forbade. Then, seeing that it was not good for the man to be alone, God made the woman and brought her to him.",
      q: "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.", r: "Genesis 2:24",
      cast: [["Eve", "The mother of all living"]],
      art: "eden", lay: "plate", side: "l", sh: "tree"
    }
  ]
},

/* ─────────────────────────────── II ─────────────────────────────── */
{
  id: "fall", n: "II", t: "East of Eden", s: "The Fall", books: "Genesis 3–11", yl: "The ancient world",
  c: "#e0a070", sh: "tree",
  v: "For dust thou art, and unto dust shalt thou return.", r: "Genesis 3:19",
  x: "One choice broke the world. Yet before the gates of Eden closed, God made a promise, and the scarlet thread began.",
  scenes: [
    {
      id: "serpent", t: "Yea, hath God said?", k: "Genesis 3:1–8", pl: "Eden", yl: "The ancient world", b: ["gen"],
      x: "The serpent came with a question, and then a lie: “Ye shall not surely die.” Eve saw that the fruit was pleasant to the eyes. She ate, and gave to Adam, and he ate. Their eyes were opened, and for the first time they were afraid.",
      q: "And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the LORD God amongst the trees of the garden.", r: "Genesis 3:8",
      cast: [["The serpent", "More subtil than any beast of the field"]],
      art: "fall", lay: "plate", side: "r", sh: "tree"
    },
    {
      id: "promise", t: "The first promise.", k: "Genesis 3:9–24", pl: "The gate of Eden", yl: "The ancient world", b: ["gen"],
      x: "God came looking for them: “Where art thou?” Even as He spoke the curse, He spoke a promise. One born of the woman would crush the serpent’s head, though the serpent would bruise his heel. God clothed them in coats of skins, and sent them out. Cherubim and a flaming sword kept the way to the tree of life.",
      q: "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.", r: "Genesis 3:15",
      art: "expulsion", lay: "full", pos: "40% 50%", th: "seed", sh: "chaos"
    },
    {
      id: "cain", t: "Am I my brother’s keeper?", k: "Genesis 4", pl: "East of Eden", yl: "The ancient world", b: ["gen"],
      x: "Adam and Eve’s sons brought offerings to God. He accepted Abel’s, and Cain burned with anger. In the field, Cain rose up against his brother and killed him: the first death in the story was a murder. Yet God marked even Cain for protection.",
      q: "And the LORD said unto Cain, Where is Abel thy brother? And he said, I know not: Am I my brother’s keeper?", r: "Genesis 4:9",
      cast: [["Cain", "The firstborn, a tiller of the ground"], ["Abel", "A keeper of sheep, the first to die"]],
      art: "cain-abel", lay: "plate", side: "l", sh: "ash"
    },
    {
      id: "enoch", t: "He walked with God.", k: "Genesis 5", yl: "The ancient world", b: ["gen"],
      x: "Generations passed. Seth was born in Abel’s place. Methuselah lived nine hundred and sixty-nine years, the longest life in Scripture. And Enoch walked so closely with God that one day he simply was not there, for God took him.",
      q: "And Enoch walked with God: and he was not; for God took him.", r: "Genesis 5:24",
      cast: [["Seth", "Adam’s son, given in Abel’s place"], ["Enoch", "Who walked with God, and was not"], ["Methuselah", "Nine hundred and sixty-nine years"]],
      lay: "word", sh: "dome"
    },
    {
      id: "ark", t: "Noah found grace.", k: "Genesis 6", yl: "The days of Noah", b: ["gen"],
      x: "The earth was filled with violence, and it grieved God at His heart. But Noah was a just man. God told him to build an ark of gopher wood, three hundred cubits long, and to bring in his family and every kind of living thing, two by two.",
      q: "But Noah found grace in the eyes of the LORD.", r: "Genesis 6:8",
      cast: [["Noah", "A just man, and perfect in his generations"], ["Shem, Ham and Japheth", "Noah’s three sons"]],
      art: "noah-ark", lay: "plate", side: "r", sh: "ark"
    },
    {
      id: "flood", t: "Forty days and forty nights.", k: "Genesis 7", yl: "The days of Noah", b: ["gen"],
      x: "The fountains of the great deep were broken up, and the windows of heaven were opened. The waters rose until the highest mountains were covered, fifteen cubits deep. Only Noah remained alive, and they that were with him in the ark.",
      q: "And the rain was upon the earth forty days and forty nights.", r: "Genesis 7:12",
      art: "deluge", fx: { type: "flood" }, sh: "sea", h: 3.4
    },
    {
      id: "rainbow", t: "A bow in the cloud.", k: "Genesis 8–9", pl: "The mountains of Ararat", yl: "After the flood", b: ["gen"],
      x: "God remembered Noah. The waters slowly fell, and the ark came to rest upon the mountains of Ararat. A dove went out, and came back with an olive leaf in her mouth. Noah built an altar, and God set His bow in the clouds: never again would a flood destroy the earth.",
      q: "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.", r: "Genesis 9:13",
      art: "noah-sacrifice", lay: "portal", sh: "rainbow"
    },
    {
      id: "babel", t: "Let us make us a name.", k: "Genesis 11:1–9", pl: "The plain of Shinar", yl: "The ancient world", b: ["gen"],
      x: "The whole earth was of one language. On the plain of Shinar they began a city, and a tower whose top would reach unto heaven. God came down to see it, confounded their language so they could not understand one another, and scattered them abroad upon the face of all the earth.",
      q: "Therefore is the name of it called Babel; because the LORD did there confound the language of all the earth.", r: "Genesis 11:9",
      art: "babel", fx: { type: "tongues", mode: "scatter" }, sh: "tower", h: 3.2
    }
  ]
},

/* ─────────────────────────────── III ─────────────────────────────── */
{
  id: "fathers", n: "III", t: "The Promise", s: "The Patriarchs", books: "Genesis 12–50 · Job", yl: "c. 2091 – 1805 BC",
  c: "#e9bd6c", sh: "dome",
  v: "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing.", r: "Genesis 12:2",
  x: "Out of the scattered nations, God called one man. Through his family, He would bless the whole world.",
  scenes: [
    {
      id: "abram", t: "Get thee out.", k: "Genesis 12", pl: "Ur of the Chaldees · Haran · Canaan", y: -2091, b: ["gen"],
      x: "God spoke to Abram: leave your country, your kindred and your father’s house, for a land I will show you. At seventy-five, with his wife Sarai and his nephew Lot, Abram went, not knowing where he was going. In him, God said, all the families of the earth would be blessed.",
      q: "Now the LORD had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father’s house, unto a land that I will shew thee.", r: "Genesis 12:1",
      cast: [["Abraham", "Born Abram; the father of the faithful"], ["Sarah", "Born Sarai; the mother of nations"], ["Lot", "Abraham’s nephew"]],
      art: "abraham-journey", lay: "full", pos: "50% 60%", th: "blessing", sh: "dome"
    },
    {
      id: "abram-map", t: "The long road.", k: "Genesis 11:31 – 13:18", y: -2085, b: ["gen"],
      x: "From Ur, by the Euphrates, to Haran in the north. Then south into Canaan, where Abram built altars at Shechem and Bethel; down into Egypt in a famine, and back again to settle by the oaks of Mamre, at Hebron.",
      fx: { type: "map", route: "abraham" }, sh: "dome", h: 3
    },
    {
      id: "stars", t: "Tell the stars.", k: "Genesis 15", pl: "Canaan", y: -2081, b: ["gen"],
      x: "Abram was old, and still had no child. God brought him outside under the night sky and told him to count the stars, if he could: so many would his descendants be. Abram believed.",
      q: "And he believed in the LORD; and he counted it to him for righteousness.", r: "Genesis 15:6",
      fx: { type: "stars" }, sh: "dome", h: 3
    },
    {
      id: "hagar", t: "The God who sees.", k: "Genesis 16; 21", pl: "The wilderness of Beersheba", y: -2080, b: ["gen"],
      x: "Impatient for the promise, Sarai gave her Egyptian maid Hagar to Abram, and Hagar bore him Ishmael. Twice Hagar found herself alone in the wilderness, and twice God found her there. She gave Him a name: the God who sees me.",
      q: "And she called the name of the LORD that spake unto her, Thou God seest me.", r: "Genesis 16:13",
      cast: [["Hagar", "Sarah’s Egyptian maid"], ["Ishmael", "Abraham’s firstborn son"]],
      art: "hagar", lay: "plate", side: "r", sh: "dome"
    },
    {
      id: "mamre", t: "Is any thing too hard for the LORD?", k: "Genesis 17–18", pl: "The oaks of Mamre", y: -2067, b: ["gen"],
      x: "God renamed them Abraham and Sarah, and promised a son. In the heat of the day, three visitors came to Abraham’s tent, and he ran to serve them. Sarah, ninety years old, laughed behind the tent door when she heard she would bear a son.",
      q: "Is any thing too hard for the LORD?", r: "Genesis 18:14",
      cast: [["The three visitors", "Who came to Abraham’s tent at Mamre"]],
      art: "rublev", lay: "portal", sh: "ring"
    },
    {
      id: "sodom", t: "Fire and brimstone.", k: "Genesis 18:16 – 19:29", pl: "Sodom and Gomorrah", y: -2067, b: ["gen"],
      x: "Abraham pleaded for Sodom: would God spare the city for fifty righteous? For forty? For ten? Not ten could be found. Angels hurried Lot and his family out before fire fell from heaven. Lot’s wife looked back.",
      q: "But his wife looked back from behind him, and she became a pillar of salt.", r: "Genesis 19:26",
      cast: [["Lot’s wife", "Who looked back"]],
      art: "sodom", lay: "full", sh: "flame"
    },
    {
      id: "moriah", t: "God will provide himself a lamb.", k: "Genesis 21–22", pl: "Mount Moriah", y: -2050, b: ["gen"],
      x: "Isaac was born, and his name means laughter. Years later God tested Abraham: take your son, your only son, whom you love, to Mount Moriah. Isaac carried the wood up the mountain. Father, where is the lamb? Abraham’s knife was raised when the angel called his name, and there was a ram, caught in a thicket by his horns.",
      q: "And Abraham said, My son, God will provide himself a lamb for a burnt offering.", r: "Genesis 22:8",
      cast: [["Isaac", "The son of promise"]],
      art: "isaac", lay: "full", pos: "50% 40%", th: "lamb", sh: "flame"
    },
    {
      id: "rebekah", t: "A bride at the well.", k: "Genesis 24", pl: "Nahor, in Mesopotamia", y: -2026, b: ["gen"],
      x: "Abraham’s servant travelled back to Mesopotamia to find a wife for Isaac. At the well he prayed for a sign, and before he had finished speaking, Rebekah came out with her pitcher and offered water to him and to all ten of his camels. She left her home to marry a man she had never met.",
      q: "And Isaac brought her into his mother Sarah’s tent, and took Rebekah, and she became his wife; and he loved her.", r: "Genesis 24:67",
      cast: [["Rebekah", "Isaac’s wife, mother of Esau and Jacob"], ["Abraham’s servant", "Sent to find a bride for Isaac"]],
      art: "rebekah", lay: "plate", side: "l", sh: "dome"
    },
    {
      id: "birthright", t: "The voice is Jacob’s voice.", k: "Genesis 25–27", pl: "Beersheba", y: -1929, b: ["gen"],
      x: "Rebekah bore twins who struggled even in the womb: Esau, a skilful hunter, and Jacob, born holding his brother’s heel. Esau sold his birthright for a bowl of red stew. Years later, wearing his brother’s clothes, Jacob deceived their blind father and took the blessing too.",
      q: "The voice is Jacob’s voice, but the hands are the hands of Esau.", r: "Genesis 27:22",
      cast: [["Esau", "The elder twin, father of Edom"], ["Jacob", "The younger twin, later named Israel"]],
      art: "isaac-blessing", lay: "plate", side: "r", sh: "dome"
    },
    {
      id: "ladder", t: "The gate of heaven.", k: "Genesis 28", pl: "Bethel", y: -1929, b: ["gen"],
      x: "Fleeing his brother’s anger, Jacob slept in the open with a stone for a pillow. He dreamed of a ladder set up on the earth, its top reaching to heaven, the angels of God ascending and descending on it, and the LORD standing above it, repeating the promise He had made to Abraham.",
      q: "Surely the LORD is in this place; and I knew it not.", r: "Genesis 28:16",
      art: "jacob-ladder", lay: "portal", th: "ladder", sh: "ladder"
    },
    {
      id: "rachel", t: "But a few days.", k: "Genesis 29–30", pl: "Haran", y: -1928, b: ["gen"],
      x: "In Haran, Jacob fell in love with his cousin Rachel at a well, and served her father Laban seven years for her. On the wedding night, Laban gave him Leah instead. Jacob worked seven years more. The deceiver had been deceived. From his wives and their maids came twelve sons, the fathers of the twelve tribes.",
      q: "And Jacob served seven years for Rachel; and they seemed unto him but a few days, for the love he had to her.", r: "Genesis 29:20",
      cast: [["Rachel", "Jacob’s beloved, mother of Joseph and Benjamin"], ["Leah", "Jacob’s first wife, mother of Judah"], ["Laban", "Rebekah’s brother, Jacob’s uncle"]],
      art: "jacob-rachel", lay: "plate", side: "l", sh: "dome"
    },
    {
      id: "peniel", t: "I will not let thee go.", k: "Genesis 32–33", pl: "Peniel, by the brook Jabbok", y: -1908, b: ["gen"],
      x: "Returning home to face Esau, Jacob was left alone at night, and a man wrestled with him until the breaking of the day. Jacob would not let go without a blessing. He walked away limping, with a new name: Israel, for he had striven with God. The next morning, Esau ran to meet him, and fell on his neck, and kissed him.",
      q: "I will not let thee go, except thou bless me.", r: "Genesis 32:26",
      cast: [["Israel", "Jacob’s new name: he strives with God"]],
      art: "jacob-wrestle", lay: "full", pos: "50% 35%", sh: "whirlwind"
    },
    {
      id: "joseph", t: "A coat of many colours.", k: "Genesis 37", pl: "Dothan", y: -1898, b: ["gen"],
      x: "Of all his sons, Jacob loved Joseph most, and made him a coat of many colours. Joseph dreamed that his brothers would bow down to him. They hated him for it, sold him to traders bound for Egypt for twenty pieces of silver, and brought their father the coat, dipped in blood.",
      q: "Now Israel loved Joseph more than all his children, because he was the son of his old age: and he made him a coat of many colours.", r: "Genesis 37:3",
      cast: [["Joseph", "The dreamer, Rachel’s firstborn"], ["Reuben", "The eldest brother, who tried to save him"], ["Judah", "The brother who proposed the sale"]],
      art: "joseph-coat", lay: "plate", side: "r", sh: "dome"
    },
    {
      id: "pharaoh", t: "From the prison to the palace.", k: "Genesis 39–41", pl: "Egypt", y: -1885, b: ["gen"],
      x: "In Egypt, Joseph served Potiphar faithfully, was falsely accused by Potiphar’s wife, and was thrown into prison. Yet the LORD was with Joseph. He interpreted the dreams of Pharaoh’s butler and baker, and two years later, Pharaoh’s own: seven years of plenty, then seven of famine. At thirty, Joseph was made ruler over all the land of Egypt.",
      q: "Can we find such a one as this is, a man in whom the Spirit of God is?", r: "Genesis 41:38",
      cast: [["Potiphar", "Captain of Pharaoh’s guard"], ["Pharaoh", "Who dreamed of fat and lean cattle"]],
      art: "joseph-pharaoh", lay: "plate", side: "l", sh: "temple"
    },
    {
      id: "goodness", t: "God meant it unto good.", k: "Genesis 42–50", pl: "Egypt", y: -1876, b: ["gen"],
      x: "Famine drove Joseph’s brothers to Egypt, and they bowed before a ruler they did not recognise. When Joseph finally told them who he was, he wept so loudly that the Egyptians heard. Jacob’s whole family came down to Egypt, seventy souls. Before he died, Jacob blessed his sons; to Judah he promised a sceptre.",
      q: "But as for you, ye thought evil against me; but God meant it unto good.", r: "Genesis 50:20",
      cast: [["Benjamin", "The youngest brother, Rachel’s second son"]],
      art: "joseph-brothers", lay: "full", th: "sceptre", sh: "ring"
    },
    {
      id: "job", t: "Where wast thou?", k: "The Book of Job", pl: "The land of Uz", yl: "The days of the patriarchs", b: ["job"],
      x: "In the land of Uz lived a blameless man named Job. In a single day he lost his wealth and his ten children, and then his health. His friends insisted he must have sinned. Job argued, grieved and held on. At last God answered him out of the whirlwind, not with explanations but with Himself, and Job’s fortunes were restored twice over.",
      q: "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.", r: "Job 19:25",
      cast: [["Job", "The blameless sufferer of Uz"], ["Eliphaz, Bildad and Zophar", "Job’s three friends"], ["Elihu", "The young man who spoke last"]],
      art: "job", lay: "plate", side: "r", th: "redeemer", sh: "whirlwind"
    }
  ]
},

/* ─────────────────────────────── IV ─────────────────────────────── */
{
  id: "exodus", n: "IV", t: "Let My People Go", s: "The Exodus", books: "Exodus · Leviticus · Numbers · Deuteronomy", yl: "c. 1526 – 1406 BC",
  c: "#ff9454", sh: "flame",
  v: "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.", r: "Exodus 20:2",
  x: "Four hundred years later, Jacob’s family had become a nation of slaves. God heard their cry, and came down to set them free.",
  scenes: [
    {
      id: "moses", t: "Drawn out of the water.", k: "Exodus 1–2", pl: "The Nile", y: -1526, b: ["exo"],
      x: "A new Pharaoh, which knew not Joseph, enslaved the Hebrews and ordered every newborn son thrown into the Nile. One mother hid her baby for three months, then laid him in an ark of bulrushes among the reeds, while his sister watched. Pharaoh’s own daughter found him, and raised him as her son.",
      q: "And she called his name Moses: and she said, Because I drew him out of the water.", r: "Exodus 2:10",
      cast: [["Moses", "Prince of Egypt, shepherd, deliverer"], ["Jochebed", "Moses’ mother"], ["Miriam", "His sister, who watched from the reeds"], ["Pharaoh’s daughter", "Who drew him out of the water"]],
      art: "finding-moses", lay: "full", pos: "50% 50%", sh: "sea"
    },
    {
      id: "bush", t: "I AM THAT I AM.", k: "Exodus 3–4", pl: "Mount Horeb", y: -1446, b: ["exo"],
      x: "Moses fled Egypt after killing an Egyptian, and kept sheep in Midian for forty years. On Mount Horeb he saw a bush that burned with fire, and was not consumed. “Put off thy shoes from off thy feet, for the place whereon thou standest is holy ground.” God sent him back to Pharaoh, and when Moses asked His name, God answered.",
      q: "And God said unto Moses, I AM THAT I AM.", r: "Exodus 3:14",
      cast: [["Aaron", "Moses’ brother and spokesman"], ["Jethro", "Priest of Midian, Moses’ father-in-law"]],
      art: "burning-bush", lay: "portal", sh: "flame"
    },
    {
      id: "plagues", t: "Ten plagues.", k: "Exodus 5–11", pl: "Egypt", y: -1446, b: ["exo"],
      x: "“Who is the LORD, that I should obey his voice to let Israel go?” said Pharaoh. One by one, ten plagues answered him.",
      art: "plague",
      fx: { type: "steps", style: "plagues", steps: [
        { n: "I", t: "Blood", x: "All the waters that were in the river were turned to blood.", r: "Exodus 7:20", c: "#a3101c" },
        { n: "II", t: "Frogs", x: "The frogs came up, and covered the land of Egypt.", r: "Exodus 8:6", c: "#3f6b3a" },
        { n: "III", t: "Lice", x: "All the dust of the land became lice throughout all the land of Egypt.", r: "Exodus 8:17", c: "#6b5a44" },
        { n: "IV", t: "Flies", x: "There came a grievous swarm of flies into the house of Pharaoh.", r: "Exodus 8:24", c: "#3b3b3b" },
        { n: "V", t: "Livestock", x: "All the cattle of Egypt died: but of the cattle of the children of Israel died not one.", r: "Exodus 9:6", c: "#5b4a3a" },
        { n: "VI", t: "Boils", x: "A boil breaking forth with blains upon man, and upon beast.", r: "Exodus 9:10", c: "#7a3b2a" },
        { n: "VII", t: "Hail", x: "So there was hail, and fire mingled with the hail, very grievous.", r: "Exodus 9:24", c: "#6f8fb3" },
        { n: "VIII", t: "Locusts", x: "There remained not any green thing in the trees, or in the herbs of the field.", r: "Exodus 10:15", c: "#8a7a2a" },
        { n: "IX", t: "Darkness", x: "Even darkness which may be felt.", r: "Exodus 10:21", c: "#000000" },
        { n: "X", t: "The firstborn", x: "At midnight the LORD smote all the firstborn in the land of Egypt.", r: "Exodus 12:29", c: "#3a0006" }
      ] },
      h: 6.5
    },
    {
      id: "passover", t: "When I see the blood.", k: "Exodus 12", pl: "Goshen, Egypt", y: -1446, b: ["exo"],
      x: "On the last night, every family of Israel killed a lamb without blemish and struck its blood on the two side posts and the lintel of their door. They ate it in haste, dressed for a journey. At midnight death passed through Egypt, but passed over every house marked with blood. Pharaoh rose up in the night and let the people go.",
      q: "And when I see the blood, I will pass over you, and the plague shall not be upon you to destroy you.", r: "Exodus 12:13",
      art: "passover", fx: { type: "door" }, th: "passover", sh: "cross", h: 3
    },
    {
      id: "redsea", t: "The sea divided.", k: "Exodus 14–15", pl: "The Red Sea", y: -1446, b: ["exo"],
      x: "Pharaoh changed his mind and sent six hundred chariots after them. Trapped between the army and the sea, the people panicked. Fear ye not, said Moses: stand still, and see the salvation of the LORD. He stretched out his hand over the sea, and a strong east wind blew all night.",
      q: "And the children of Israel went into the midst of the sea upon the dry ground: and the waters were a wall unto them on their right hand, and on their left.", r: "Exodus 14:22",
      cast: [["Miriam", "The prophetess, who led the song with a timbrel"]],
      art: "redsea", fx: { type: "redsea" }, sh: "sea", h: 3.6
    },
    {
      id: "manna", t: "Bread from heaven.", k: "Exodus 16–17", pl: "The wilderness of Sin", y: -1446, b: ["exo"],
      x: "In the wilderness the people complained of hunger, and God rained bread from heaven. Each morning they gathered manna, enough for that day, and on the sixth day, enough for two. When they thirsted, Moses struck the rock and water poured out. When Amalek attacked, Israel prevailed as long as Moses’ hands were held up.",
      q: "Behold, I will rain bread from heaven for you.", r: "Exodus 16:4",
      cast: [["Hur", "Who held up Moses’ hands with Aaron"], ["Joshua", "Moses’ young captain against Amalek"]],
      art: "manna", lay: "plate", side: "l", th: "manna", sh: "ash"
    },
    {
      id: "sinai", t: "The ten words.", k: "Exodus 19–20", pl: "Mount Sinai", y: -1446, b: ["exo", "deu"],
      x: "At Sinai the mountain quaked and smoked like a furnace, and God spoke to all the people. Moses went up into the cloud for forty days, and came down with two tablets of stone, written with the finger of God.",
      art: "moses-tablets",
      fx: { type: "steps", style: "tablets", note: "Numbered as in the Catholic tradition", steps: [
        { n: "I", t: "Thou shalt have no other gods before me." },
        { n: "II", t: "Thou shalt not take the name of the LORD thy God in vain." },
        { n: "III", t: "Remember the sabbath day, to keep it holy." },
        { n: "IV", t: "Honour thy father and thy mother." },
        { n: "V", t: "Thou shalt not kill." },
        { n: "VI", t: "Thou shalt not commit adultery." },
        { n: "VII", t: "Thou shalt not steal." },
        { n: "VIII", t: "Thou shalt not bear false witness against thy neighbour." },
        { n: "IX", t: "Thou shalt not covet thy neighbour’s wife." },
        { n: "X", t: "Thou shalt not covet … any thing that is thy neighbour’s." }
      ] },
      sh: "tablets", h: 5.5
    },
    {
      id: "calf", t: "These be thy gods, O Israel.", k: "Exodus 32–34", pl: "The foot of Sinai", y: -1446, b: ["exo"],
      x: "While Moses was on the mountain, the people grew restless. Aaron collected their gold earrings and made a golden calf, and they danced around it. Moses came down, saw it, and broke the tablets at the foot of the mount. He pleaded for the people, and God renewed the covenant, passing before him and proclaiming His name.",
      q: "The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.", r: "Exodus 34:6",
      art: "golden-calf", lay: "full", sh: "flame"
    },
    {
      id: "tabernacle", t: "That I may dwell among them.", k: "Exodus 25–40 · Leviticus", pl: "The wilderness", y: -1445, b: ["exo", "lev"],
      x: "God gave Moses the pattern of a tent where He would dwell among His people. At its heart, behind a veil, was the Most Holy Place, a perfect cube, holding the ark of the covenant. Leviticus set out the priesthood and the sacrifices. Once a year, on the Day of Atonement, the high priest went in with blood, and a scapegoat carried the people’s sins away into the wilderness.",
      q: "For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls.", r: "Leviticus 17:11",
      cast: [["Aaron", "The first high priest"]],
      art: "scapegoat", lay: "plate", side: "r", th: "atonement", sh: "cube"
    },
    {
      id: "spies", t: "We are well able.", k: "Numbers 13–14", pl: "Kadesh Barnea", y: -1444, b: ["num"],
      x: "At the edge of Canaan, twelve spies returned with a cluster of grapes so large that two men carried it on a staff. Ten said the giants of the land were too strong. Only Joshua and Caleb urged them to go up. The people wept and refused, and so a generation wandered forty years in the wilderness.",
      q: "Let us go up at once, and possess it; for we are well able to overcome it.", r: "Numbers 13:30",
      cast: [["Caleb", "Who wholly followed the LORD"]],
      art: "spies", lay: "plate", side: "l", sh: "dome"
    },
    {
      id: "serpent-pole", t: "Look, and live.", k: "Numbers 21", pl: "The wilderness of Edom", y: -1407, b: ["num"],
      x: "Bitten by fiery serpents, the people were dying. God told Moses to make a serpent of brass and set it upon a pole: whoever looked at it would live. Centuries later, Jesus would point back to this very moment to explain His cross.",
      q: "And Moses made a serpent of brass, and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived.", r: "Numbers 21:9",
      art: "brazen-serpent", lay: "full", th: "serpent", sh: "cross"
    },
    {
      id: "balaam", t: "A Star out of Jacob.", k: "Numbers 22–24", pl: "The plains of Moab", y: -1407, b: ["num"],
      x: "Balak, king of Moab, hired the prophet Balaam to curse Israel. On the road, Balaam’s donkey saw what he could not: the angel of the LORD with a drawn sword. The donkey spoke. Balaam’s eyes were opened, and every curse he tried to speak came out as a blessing, even a prophecy of a star.",
      q: "There shall come a Star out of Jacob, and a Sceptre shall rise out of Israel.", r: "Numbers 24:17",
      cast: [["Balaam", "A prophet for hire"], ["Balak", "King of Moab"]],
      art: "balaam", lay: "plate", side: "r", th: "star", sh: "star"
    },
    {
      id: "exodus-map", t: "Forty years.", k: "Exodus 12 – Deuteronomy 34", y: -1406, b: ["num", "deu"],
      x: "Out of Rameses, across the sea, south to Sinai. North to Kadesh and the long refusal; around Edom, up the King’s Highway, to the plains of Moab across the Jordan from Jericho.",
      fx: { type: "map", route: "exodus" }, sh: "dome", h: 3
    },
    {
      id: "nebo", t: "Hear, O Israel.", k: "Deuteronomy", pl: "Mount Nebo", y: -1406, b: ["deu"],
      x: "On the plains of Moab, Moses gave his last words to a new generation: remember, obey, love. “I have set before you life and death … therefore choose life.” Then he climbed Mount Nebo, and God showed him all the land he would not enter. Moses died there, a hundred and twenty years old, and God buried him.",
      q: "Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.", r: "Deuteronomy 6:4–5",
      art: "nebo", lay: "full", sh: "dome"
    }
  ]
},

/* ─────────────────────────────── V ─────────────────────────────── */
{
  id: "land", n: "V", t: "Be Strong and of a Good Courage", s: "The Promised Land", books: "Joshua · Judges · Ruth", yl: "c. 1406 – 1050 BC",
  c: "#dcae6a", sh: "walls",
  v: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", r: "Joshua 1:9",
  x: "A new leader. A river to cross. Walls to fall. And then the long and broken years of the judges.",
  scenes: [
    {
      id: "rahab", t: "A line of scarlet thread.", k: "Joshua 2", pl: "Jericho", y: -1406, b: ["jos"],
      x: "Joshua sent two spies into Jericho. Rahab, a woman of the city, hid them on her roof under stalks of flax and let them down the wall by a cord. She had heard what God had done, and she believed. Their promise to her: bind a line of scarlet thread in your window, and everyone in your house will live. This is the thread that names our story.",
      q: "Thou shalt bind this line of scarlet thread in the window which thou didst let us down by.", r: "Joshua 2:18",
      cast: [["Rahab", "Of Jericho, who hid the spies and became an ancestor of Jesus"]],
      art: "rahab", lay: "plate", side: "l", th: "cord", sh: "walls"
    },
    {
      id: "jericho", t: "The walls came down.", k: "Joshua 3–6", pl: "Jericho", y: -1406, b: ["jos"],
      x: "The Jordan was in flood, but as soon as the priests’ feet touched the water, the river stood up in a heap and all Israel crossed on dry ground. Then God’s battle plan for Jericho: march around the city once a day for six days, in silence, with trumpets of rams’ horns. On the seventh day, seven times. Then shout.",
      q: "The people shouted with a great shout, that the wall fell down flat.", r: "Joshua 6:20",
      art: "jericho", fx: { type: "jericho" }, sh: "walls", h: 4
    },
    {
      id: "gibeon", t: "Sun, stand thou still.", k: "Joshua 10; 24", pl: "Gibeon · Shechem", y: -1400, b: ["jos"],
      x: "In the battle at Gibeon, Joshua prayed before all Israel, and the sun stood still in the midst of heaven. Over the years the land was taken and divided among the twelve tribes. At the end of his life, Joshua gathered the people at Shechem and set a choice before them.",
      q: "Choose you this day whom ye will serve … but as for me and my house, we will serve the LORD.", r: "Joshua 24:15",
      cast: [["Joshua", "Moses’ successor, who led Israel into the land"]],
      art: "joshua-sun", lay: "full", sh: "sphere"
    },
    {
      id: "judges", t: "Every man did that which was right in his own eyes.", k: "The Book of Judges", y: -1375, b: ["jdg"],
      x: "After Joshua, a generation arose which knew not the LORD. The same cycle turned again and again, for more than three hundred years.",
      q: "In those days there was no king in Israel: every man did that which was right in his own eyes.", r: "Judges 21:25",
      fx: { type: "cycle", stages: ["They forgot God", "Enemies oppressed them", "They cried out", "God raised a deliverer", "The land had rest"],
        judges: ["Othniel", "Ehud", "Shamgar", "Deborah", "Gideon", "Tola", "Jair", "Jephthah", "Ibzan", "Elon", "Abdon", "Samson"] },
      sh: "ring", h: 3.4
    },
    {
      id: "deborah", t: "A mother in Israel.", k: "Judges 4–5", pl: "Mount Tabor · the river Kishon", y: -1209, b: ["jdg"],
      x: "Deborah, a prophetess, judged Israel beneath a palm tree. When Sisera’s nine hundred chariots of iron oppressed the land, she summoned Barak to battle, and went with him. The stars in their courses fought from heaven, the river Kishon swept the enemy away, and Sisera fell by the hand of a woman, Jael.",
      q: "The inhabitants of the villages ceased, they ceased in Israel, until that I Deborah arose, that I arose a mother in Israel.", r: "Judges 5:7",
      cast: [["Deborah", "Prophetess and judge"], ["Barak", "Her general"], ["Jael", "Who killed Sisera in her tent"], ["Sisera", "Captain of the Canaanite chariots"]],
      art: "deborah", lay: "plate", side: "r", sh: "dome"
    },
    {
      id: "gideon", t: "Thou mighty man of valour.", k: "Judges 6–8", pl: "Ophrah · the valley of Jezreel", y: -1169, b: ["jdg"],
      x: "Gideon was threshing wheat in a winepress, hiding from the Midianites, when the angel of the LORD greeted him as a mighty man of valour. He asked for signs with a fleece. God whittled his army down from thirty-two thousand to three hundred, and with trumpets, empty pitchers and torches, they routed a host as numerous as grasshoppers.",
      q: "The LORD is with thee, thou mighty man of valour.", r: "Judges 6:12",
      cast: [["Gideon", "The least in his father’s house"]],
      art: "gideon", lay: "plate", side: "l", sh: "flame"
    },
    {
      id: "samson", t: "Only this once.", k: "Judges 13–16", pl: "Gaza", yl: "Last of the twelve judges", b: ["jdg"],
      x: "Samson was set apart from birth: no razor would touch his head. He tore a young lion apart with his bare hands and struck down the Philistines. But Delilah coaxed out his secret. Shorn, blinded and chained, he prayed one last time, and pulled down the pillars of the Philistine temple.",
      q: "O Lord GOD, remember me, I pray thee, and strengthen me, I pray thee, only this once.", r: "Judges 16:28",
      cast: [["Samson", "The Nazarite of great strength"], ["Delilah", "Who betrayed him for silver"]],
      art: "samson-delilah", lay: "full", sh: "temple"
    },
    {
      id: "ruth", t: "Whither thou goest.", k: "The Book of Ruth", pl: "Moab · Bethlehem", yl: "When the judges ruled", b: ["rut"],
      x: "In the days of the judges, famine drove Naomi’s family to Moab, and there her husband and both her sons died. Her Moabite daughter-in-law Ruth refused to leave her. In Bethlehem, Ruth gleaned barley in the field of Boaz, a kinsman, who noticed her kindness, redeemed the family’s land, and married her. Their great-grandson was David the king.",
      q: "Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.", r: "Ruth 1:16",
      cast: [["Ruth", "The Moabitess, great-grandmother of David"], ["Naomi", "Her mother-in-law, who came home empty"], ["Boaz", "The kinsman-redeemer of Bethlehem"]],
      art: "ruth", lay: "full", pos: "50% 55%", th: "kinsman", sh: "dome"
    }
  ]
}
);
