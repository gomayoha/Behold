/*
 * The Twelve, Matthias and Paul.
 * Scripture (KJV) is cited where the Bible records an event. Everything after the
 * Book of Acts falls silent comes from early church tradition and is marked as such.
 * Journey points are [label, longitude, latitude].
 */

window.APOSTLES = [
  {
    id: "peter", name: "Peter", full: "Simon Peter", also: "Simon bar Jonah · Cephas", meaning: "“Rock” (Greek Petros, Aramaic Kepha)",
    epithet: "The Rock", color: "#e9c46a", icon: "keys", fate: "invcross",
    origin: "Bethsaida, living in Capernaum", trade: "Fisherman", feast: "29 June", portrait: "r-peter", scenes: ["walkwater", "denial", "t-feed-lambs"], endImg: "peter-cross",
    call: { t: "His brother Andrew ran to him: “We have found the Messias.” Jesus looked at him and renamed him before he had done anything to deserve it. Later, beside the lake, after a night of empty nets, came the words that emptied his boat for good.", r: "John 1:40–42 · Luke 5:1–11" },
    moments: [
      ["Steps out of the boat and walks on the water — until he looks at the wind.", "Matthew 14:28–31"],
      ["First to confess: “Thou art the Christ, the Son of the living God.” He receives the keys of the kingdom.", "Matthew 16:16–19"],
      ["Sees Christ transfigured on the mountain and offers to build three tabernacles.", "Matthew 17:1–8"],
      ["Refuses, then begs, to have his feet washed.", "John 13:6–9"],
      ["Draws a sword in Gethsemane; hours later denies his Lord three times by a fire.", "John 18:10 · Luke 22:54–62"],
      ["Runs to the empty tomb; is restored by another fire of coals: “Feed my sheep.”", "John 20:3–6 · 21:15–17"]
    ],
    quote: { t: "Lord, to whom shall we go? thou hast the words of eternal life.", r: "John 6:68", by: "Peter" },
    after: "At Pentecost the man who denied Jesus to a servant girl preaches to thousands, and three thousand are baptised. He heals a lame man at the Beautiful Gate, raises Tabitha at Joppa, opens the door of the Church to the Gentile Cornelius, and walks out of Herod’s prison behind an angel. He writes two letters, and Mark’s Gospel preserves his preaching.",
    afterRefs: "Acts 2 · 3 · 9:36–42 · 10 · 12:6–11",
    journey: [["Bethsaida", 35.63, 32.91], ["Capernaum", 35.57, 32.88], ["Jerusalem", 35.23, 31.78], ["Joppa", 34.75, 32.05], ["Caesarea", 34.89, 32.5], ["Antioch", 36.16, 36.2], ["Rome", 12.48, 41.9]],
    death: { how: "Crucified, head downward", where: "Rome", when: "c. AD 64–68, under Nero", source: "Tradition", text: "Jesus had told him: “When thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee.” Early writers record that Peter was crucified in Rome and asked to hang upside down, counting himself unworthy to die as his Lord had. St Peter’s Basilica stands over his tomb on the Vatican Hill.", ref: "John 21:18–19" },
    legacy: "Keys crossed on the flag of Vatican City. Two letters in the New Testament. The first to preach the risen Christ."
  },
  {
    id: "andrew", name: "Andrew", full: "Andrew", also: "Protokletos — the First-Called", meaning: "“Manly, brave” (Greek)",
    epithet: "The First-Called", color: "#7fb8ff", icon: "saltire", fate: "saltire",
    origin: "Bethsaida", trade: "Fisherman", feast: "30 November", portrait: "r-andrew", scenes: ["t-john-andrew", "loaves", "t-gentiles"], endImg: "andrew-mart",
    call: { t: "A disciple of John the Baptist, he heard John say “Behold the Lamb of God” and followed Jesus home. His first act as a disciple was to find his brother.", r: "John 1:35–42" },
    moments: [
      ["Brings his brother Simon to Jesus — the most fruitful introduction in history.", "John 1:41–42"],
      ["Notices a boy with five loaves and two fishes.", "John 6:8–9"],
      ["With Philip, brings the Greeks who wished to see Jesus.", "John 12:20–22"],
      ["On the Mount of Olives, asks privately about the end of the age.", "Mark 13:3–4"]
    ],
    quote: { t: "We have found the Messias.", r: "John 1:41", by: "Andrew" },
    after: "Scripture says no more. Early writers place his mission along the shores of the Black Sea among the Scythians, and in Greece. Everywhere he appears in the Gospels he is bringing someone to Jesus; tradition says he never stopped.",
    afterRefs: "Eusebius, Church History III.1",
    journey: [["Bethsaida", 35.63, 32.91], ["The Jordan", 35.55, 31.84], ["Jerusalem", 35.23, 31.78], ["Sinope", 35.15, 42.03], ["Scythia", 34.1, 44.95], ["Byzantium", 28.97, 41.01], ["Patras", 21.73, 38.25]],
    death: { how: "Crucified on an X-shaped cross", where: "Patras, Greece", when: "c. AD 60", source: "Tradition", text: "Tradition says he asked not to die on a cross like his Master’s, and was bound to a saltire — a diagonal cross — where he preached to the crowd for two days before he died. The saltire became the flag of Scotland.", ref: "" },
    legacy: "Patron of Scotland, Greece, Russia and Ukraine. The saltire of St Andrew flies on the flag of Scotland."
  },
  {
    id: "james", name: "James", full: "James, son of Zebedee", also: "James the Greater · a Son of Thunder", meaning: "Form of Jacob — “supplanter”",
    epithet: "The First to Die", color: "#ff7a6b", icon: "shell", fate: "sword",
    origin: "Bethsaida / Capernaum", trade: "Fisherman", feast: "25 July", portrait: "r-james", scenes: ["t-peter-andrew", "jairus", "gethsemane"], endImg: "james-mart",
    call: { t: "Mending nets with his brother John in their father’s boat, he heard “Follow me” — and left Zebedee with the hired servants.", r: "Mark 1:19–20" },
    moments: [
      ["Nicknamed Boanerges, “Son of Thunder,” with his brother.", "Mark 3:17"],
      ["One of three taken into Jairus’ house, up the mountain of Transfiguration, and deeper into Gethsemane.", "Mark 5:37 · 9:2 · 14:33"],
      ["Offers to call down fire on a Samaritan village — and is rebuked.", "Luke 9:54–55"],
      ["Asked if he can drink Christ’s cup, answers “We are able.” Jesus replies: “Ye shall drink indeed of my cup.”", "Matthew 20:22–23"]
    ],
    quote: { t: "We are able.", r: "Matthew 20:22", by: "James and John" },
    after: "A leader of the church in Jerusalem. Tradition holds that he carried the gospel to Spain, where Our Lady is said to have encouraged him at Zaragoza on a pillar of stone.",
    afterRefs: "Tradition of Santiago and Our Lady of the Pillar",
    journey: [["Capernaum", 35.57, 32.88], ["Jerusalem", 35.23, 31.78], ["Zaragoza", -0.88, 41.65], ["Jerusalem", 35.23, 31.78], ["Santiago", -8.54, 42.88]],
    death: { how: "Killed with the sword", where: "Jerusalem", when: "AD 44, by Herod Agrippa I", source: "Scripture", text: "The only apostle whose death is recorded in the Bible, and the first of the Twelve to be martyred. The promise “ye shall drink of my cup” was kept. His relics are venerated at Santiago de Compostela, the end of the Camino pilgrimage, and the scallop shell became the pilgrim’s sign.", ref: "Acts 12:1–2" },
    legacy: "The Camino de Santiago — walked by hundreds of thousands of pilgrims every year — ends at his shrine."
  },
  {
    id: "john", name: "John", full: "John, son of Zebedee", also: "The Beloved Disciple · the Evangelist · the Divine", meaning: "“The Lord is gracious” (Hebrew Yohanan)",
    epithet: "The Beloved", color: "#c9b6ff", icon: "chalice", fate: "age",
    origin: "Bethsaida / Capernaum", trade: "Fisherman", feast: "27 December", portrait: "r-john", scenes: ["t-behold-son", "running", "t-shore"], endImg: "john-patmos",
    call: { t: "Probably one of the first two to follow Jesus from the Jordan; later called from his father’s boat with James.", r: "John 1:35–39 · Mark 1:19–20" },
    moments: [
      ["Leans on Jesus’ breast at the Last Supper and asks, “Lord, who is it?”", "John 13:23–25"],
      ["The only one of the Twelve recorded standing at the cross.", "John 19:26"],
      ["Receives Mary as his own mother: “from that hour that disciple took her unto his own home.”", "John 19:27"],
      ["Outruns Peter to the tomb, sees the grave clothes, and believes.", "John 20:4–8"],
      ["On the lake at dawn, is the first to recognise the stranger on the shore.", "John 21:7"]
    ],
    quote: { t: "Beloved, let us love one another: for love is of God.", r: "1 John 4:7", by: "John" },
    after: "With Peter he heals the lame man at the temple gate and faces the Council. Paul calls him a pillar of the church. Tradition places him at Ephesus caring for Mary, and exiled on the island of Patmos, where he saw the visions of Revelation.",
    afterRefs: "Acts 3–4 · Galatians 2:9 · Revelation 1:9",
    journey: [["Capernaum", 35.57, 32.88], ["Jerusalem", 35.23, 31.78], ["Samaria", 35.19, 32.28], ["Ephesus", 27.34, 37.94], ["Patmos", 26.55, 37.31], ["Ephesus", 27.34, 37.94]],
    death: { how: "Died in old age", where: "Ephesus", when: "c. AD 100", source: "Tradition", text: "The only one of the Twelve believed not to have died a martyr — though tradition says he survived being plunged into boiling oil in Rome. Jerome writes that in extreme old age, carried into the assembly, he would only say: “Little children, love one another.”", ref: "" },
    legacy: "A Gospel, three letters and the Book of Revelation. His symbol is the eagle, for a Gospel that soars."
  },
  {
    id: "philip", name: "Philip", full: "Philip", also: "Of Bethsaida", meaning: "“Lover of horses” (Greek)",
    epithet: "The Seeker", color: "#7dd3a8", icon: "loaves", fate: "cross",
    origin: "Bethsaida", trade: "Unknown", feast: "3 May", portrait: "r-philip", scenes: ["t-philip", "t-nathanael", "t-philip-address"], endImg: "philip-mart",
    call: { t: "The first disciple Jesus went looking for Himself. Two words: “Follow me.”", r: "John 1:43" },
    moments: [
      ["Finds Nathanael and answers his scepticism with three words: “Come and see.”", "John 1:45–46"],
      ["Tested before the five thousand: “Two hundred pennyworth of bread is not sufficient.”", "John 6:5–7"],
      ["The Greeks come to him first: “Sir, we would see Jesus.”", "John 12:21"],
      ["At the Last Supper asks to see the Father, and hears: “He that hath seen me hath seen the Father.”", "John 14:8–9"]
    ],
    quote: { t: "Lord, shew us the Father, and it sufficeth us.", r: "John 14:8", by: "Philip" },
    after: "Tradition sends him to Greece and Phrygia in Asia Minor. (He is not the Philip the Evangelist of Acts 8, a different man.)",
    afterRefs: "Polycrates of Ephesus, via Eusebius",
    journey: [["Bethsaida", 35.63, 32.91], ["Jerusalem", 35.23, 31.78], ["Antioch", 36.16, 36.2], ["Hierapolis", 29.12, 37.93]],
    death: { how: "Crucified", where: "Hierapolis, Phrygia", when: "c. AD 80", source: "Tradition", text: "Early sources say he died at Hierapolis — modern Pamukkale in Turkey. In 2011 archaeologists announced they had found a tomb there they believe to be his.", ref: "" },
    legacy: "Patron of Uruguay, with James the Less. Remembered for bringing others to Jesus with three words: “Come and see.”"
  },
  {
    id: "bartholomew", name: "Bartholomew", full: "Bartholomew (Nathanael)", also: "Nathanael of Cana", meaning: "“Son of Talmai” (Aramaic) · Nathanael: “gift of God”",
    epithet: "Without Guile", color: "#f4a261", icon: "knife", fate: "knife",
    origin: "Cana of Galilee", trade: "Unknown", feast: "24 August", portrait: "r-bartholomew", scenes: ["t-nathanael", "t-draught2"], endImg: "bart-mart",
    call: { t: "“Can there any good thing come out of Nazareth?” Then Jesus told him where he had been sitting before Philip ever called him. Tradition identifies the Bartholomew of the lists with the Nathanael of John.", r: "John 1:45–51" },
    moments: [
      ["Called “an Israelite indeed, in whom is no guile.”", "John 1:47"],
      ["Confesses: “Rabbi, thou art the Son of God; thou art the King of Israel.”", "John 1:49"],
      ["Promised he would see heaven open and angels ascending and descending.", "John 1:51"],
      ["Among the seven fishing on Tiberias when the risen Lord appears.", "John 21:2"]
    ],
    quote: { t: "Rabbi, thou art the Son of God; thou art the King of Israel.", r: "John 1:49", by: "Nathanael" },
    after: "Eusebius records that a Hebrew copy of Matthew’s Gospel was found in India, left there by Bartholomew. Armenian tradition honours him, with Thaddeus, as a founder of its church.",
    afterRefs: "Eusebius, Church History V.10",
    journey: [["Cana", 35.34, 32.75], ["Jerusalem", 35.23, 31.78], ["Mesopotamia", 44.4, 33.3], ["India", 73.13, 19.24], ["Armenia", 44.0, 38.05]],
    death: { how: "Flayed alive, then beheaded", where: "Albanopolis, Armenia", when: "1st century", source: "Tradition", text: "The most brutal of the traditional accounts. Michelangelo painted him in the Last Judgment holding his own skin — and gave the skin his own face.", ref: "" },
    legacy: "Patron of Armenia. A man who came to Jesus doubting, and left certain."
  },
  {
    id: "thomas", name: "Thomas", full: "Thomas", also: "Didymus — the Twin", meaning: "“Twin” (Aramaic Te’oma)",
    epithet: "The Honest", color: "#9ec5ff", icon: "spear", fate: "spear",
    origin: "Galilee", trade: "Unknown (tradition: builder)", feast: "3 July", portrait: "r-thomas", scenes: ["thomas", "lazarus"], endImg: "thomas-mart",
    call: { t: "Named among the Twelve after the night of prayer on the mountain.", r: "Luke 6:12–15" },
    moments: [
      ["When Jesus heads back toward danger: “Let us also go, that we may die with him.”", "John 11:16"],
      ["Asks the question that brings the answer “I am the way, the truth, and the life.”", "John 14:5–6"],
      ["Refuses to believe without seeing the print of the nails.", "John 20:25"],
      ["Eight days later, makes the highest confession in the Gospels: “My Lord and my God.”", "John 20:28"]
    ],
    quote: { t: "My Lord and my God.", r: "John 20:28", by: "Thomas" },
    after: "Tradition sends him east — to Parthia and then India, landing on the Malabar coast in AD 52 and founding churches whose descendants, the St Thomas Christians of Kerala, still bear his name.",
    afterRefs: "Acts of Thomas · Eusebius III.1 · Indian tradition",
    journey: [["Galilee", 35.5, 32.8], ["Jerusalem", 35.23, 31.78], ["Edessa", 38.79, 37.16], ["Taxila", 72.8, 33.75], ["Muziris", 76.2, 10.2], ["Mylapore", 80.27, 13.03]],
    death: { how: "Pierced with a spear", where: "Mylapore, India", when: "AD 72", source: "Tradition", text: "He was killed near Chennai, on the hill now called St Thomas Mount. The San Thome Basilica stands over his tomb — one of only three churches in the world built over the tomb of an apostle.", ref: "" },
    legacy: "Apostle of India. The doubter who went further than any of them."
  },
  {
    id: "matthew", name: "Matthew", full: "Matthew (Levi)", also: "Levi, son of Alphaeus", meaning: "“Gift of the Lord” (Hebrew Mattityahu)",
    epithet: "The Tax Collector", color: "#e9c46a", icon: "coins", fate: "sword",
    origin: "Capernaum", trade: "Tax collector (publican)", feast: "21 September", portrait: "r-matthew", scenes: ["matthew", "t-twelve"], endImg: "matthew-mart",
    call: { t: "Sitting at the receipt of custom — a collaborator with Rome, despised by his own people — he heard “Follow me,” and he left all, rose up, and followed.", r: "Luke 5:27–28" },
    moments: [
      ["Throws a great feast for Jesus with his fellow publicans and sinners.", "Luke 5:29"],
      ["Hears Jesus defend the meal: “I came not to call the righteous, but sinners to repentance.”", "Luke 5:32"],
      ["Chosen among the Twelve — alongside Simon the Zealot, a sworn enemy of everything he had been.", "Matthew 10:3–4"]
    ],
    quote: { t: "I will have mercy, and not sacrifice.", r: "Matthew 9:13", by: "Jesus, at Matthew’s table" },
    after: "Early writers say he first preached among the Hebrews and wrote his Gospel for them. Later accounts send him to Ethiopia, Parthia or Persia.",
    afterRefs: "Papias & Irenaeus, via Eusebius",
    journey: [["Capernaum", 35.57, 32.88], ["Jerusalem", 35.23, 31.78], ["Alexandria", 29.92, 31.2], ["Ethiopia", 33.75, 16.94]],
    death: { how: "Killed by the sword at the altar", where: "Ethiopia", when: "1st century", source: "Tradition", text: "The tradition Caravaggio painted: struck down while celebrating the sacred mysteries. Other accounts differ; all agree he gave his life for the one who called him from his table of coins.", ref: "" },
    legacy: "The first book of the New Testament. Patron of accountants and bankers."
  },
  {
    id: "james-less", name: "James", full: "James, son of Alphaeus", also: "James the Less · the Younger", meaning: "Form of Jacob",
    epithet: "The Quiet One", color: "#b8a57a", icon: "club", fate: "club",
    origin: "Galilee", trade: "Unknown", feast: "3 May", portrait: "r-james-less", scenes: ["t-james-less"], endImg: "t-james-less",
    call: { t: "Named in every list of the Twelve, and almost nowhere else. Scripture records not a single word he said.", r: "Mark 3:18" },
    moments: [
      ["Called “James the less” — perhaps for his youth or his stature.", "Mark 15:40"],
      ["Present in the upper room, praying with the others and with Mary, before Pentecost.", "Acts 1:13–14"]
    ],
    quote: { t: "Draw nigh to God, and he will draw nigh to you.", r: "James 4:8", by: "the Letter of James" },
    after: "Western tradition has often identified him with James “the Lord’s brother,” leader of the church in Jerusalem and author of the Letter of James. Others hold them to be two different men.",
    afterRefs: "Acts 15:13 · Galatians 1:19",
    journey: [["Galilee", 35.5, 32.8], ["Jerusalem", 35.23, 31.78]],
    death: { how: "Thrown from the temple and struck with a fuller’s club", where: "Jerusalem", when: "c. AD 62", source: "Tradition", text: "If he is James the Just, the historian Josephus records his stoning in AD 62, and later writers add that he was cast from the pinnacle of the temple and killed with a fuller’s club while praying for his attackers.", ref: "" },
    legacy: "A reminder that most of the faithful are never famous — and are known to God by name."
  },
  {
    id: "thaddeus", name: "Jude Thaddeus", full: "Judas, son of James (Thaddeus)", also: "Lebbaeus · “not Iscariot”", meaning: "Judah — “praise” · Thaddeus — “big-hearted”",
    epithet: "Hope of the Hopeless", color: "#7dd3a8", icon: "axe", fate: "axe",
    origin: "Galilee", trade: "Unknown", feast: "28 October", portrait: "r-thaddeus", scenes: ["t-thaddeus"], endImg: "t-thaddeus",
    call: { t: "Listed among the Twelve under three different names. John is careful to add: “not Iscariot.”", r: "Luke 6:16 · John 14:22" },
    moments: [
      ["At the Last Supper asks why Jesus will show Himself to them, and not to the world.", "John 14:22"],
      ["Hears the answer: “If a man love me, he will keep my words: and my Father will love him, and we will come unto him.”", "John 14:23"]
    ],
    quote: { t: "Lord, how is it that thou wilt manifest thyself unto us, and not unto the world?", r: "John 14:22", by: "Jude" },
    after: "Tradition sends him to Mesopotamia and Armenia, and finally to Persia with Simon the Zealot.",
    afterRefs: "Tradition (Armenian and Western)",
    journey: [["Galilee", 35.5, 32.8], ["Jerusalem", 35.23, 31.78], ["Edessa", 38.79, 37.16], ["Armenia", 44.9, 39.3], ["Persia", 48.25, 32.19]],
    death: { how: "Killed with an axe or club", where: "Persia", when: "1st century", source: "Tradition", text: "Martyred, tradition says, alongside Simon. Because his name was so like the betrayer’s, few prayed to him for centuries — and so he became the patron of lost causes, the saint of those who have nowhere else to turn.", ref: "" },
    legacy: "Patron of desperate cases and lost causes. Countless prayers of thanks are left at his shrines."
  },
  {
    id: "simon", name: "Simon", full: "Simon the Zealot", also: "The Canaanite (Cananaean)", meaning: "“He has heard” (Hebrew Shim’on)",
    epithet: "The Zealot", color: "#ff7a6b", icon: "saw", fate: "saw",
    origin: "Galilee", trade: "Zealot — a patriot opposed to Rome", feast: "28 October", portrait: "r-simon", scenes: ["t-simon"], endImg: "t-simon",
    call: { t: "A zealot — one who burned to drive Rome out — called into the same company as Matthew, who had collected Rome’s taxes. Only Jesus could seat them at one table.", r: "Luke 6:15" },
    moments: [
      ["Named in every list of the Twelve.", "Matthew 10:4 · Mark 3:18 · Luke 6:15"],
      ["Waits in the upper room for the promised Spirit.", "Acts 1:13"]
    ],
    quote: { t: "Simon called Zelotes.", r: "Luke 6:15", by: "Luke’s list of the Twelve" },
    after: "Traditions send him to Egypt and North Africa, and at the last to Persia with Jude.",
    afterRefs: "Tradition",
    journey: [["Galilee", 35.5, 32.8], ["Jerusalem", 35.23, 31.78], ["Alexandria", 29.92, 31.2], ["Cyrene", 21.86, 32.82], ["Persia", 48.25, 32.19]],
    death: { how: "Sawn in two", where: "Persia", when: "1st century", source: "Tradition", text: "Tradition says he died with Jude in Persia. His emblem, the saw, recalls the manner of his death.", ref: "" },
    legacy: "The zeal that once wanted a sword learned to carry a cross."
  },
  {
    id: "judas", name: "Judas Iscariot", full: "Judas Iscariot", also: "Son of Simon Iscariot", meaning: "Judah — “praise” · Iscariot — perhaps “man of Kerioth”",
    epithet: "The Betrayer", color: "#6e6e73", icon: "coins", fate: "rope",
    origin: "Kerioth, Judea (perhaps the only non-Galilean)", trade: "Keeper of the common purse", feast: "—", portrait: "t-judas", scenes: ["t-judas-goes", "t-judas-returns"], endImg: "judas-kiss",
    call: { t: "Chosen like the others, after a night of prayer. He heard every sermon, saw every miracle, and was sent out to heal.", r: "Luke 6:12–16" },
    moments: [
      ["Carries the bag, and helps himself to it.", "John 12:6"],
      ["Objects when Mary pours out the ointment: “Why was not this ointment sold?”", "John 12:4–5"],
      ["Covenants with the chief priests for thirty pieces of silver.", "Matthew 26:14–16"],
      ["Takes the sop from Jesus’ own hand, goes out — “and it was night.”", "John 13:26–30"],
      ["Betrays with a kiss. Jesus greets him: “Friend, wherefore art thou come?”", "Matthew 26:49–50"]
    ],
    quote: { t: "I have sinned in that I have betrayed the innocent blood.", r: "Matthew 27:4", by: "Judas" },
    after: "Seeing Jesus condemned, he returned the silver and flung it down in the temple. The priests bought a potter’s field with it — Akeldama, the Field of Blood.",
    afterRefs: "Matthew 27:3–10 · Acts 1:18–19",
    journey: [["Kerioth", 35.1, 31.35], ["Capernaum", 35.57, 32.88], ["Jerusalem", 35.23, 31.78]],
    death: { how: "Took his own life", where: "Jerusalem", when: "c. AD 30–33", source: "Scripture", text: "Remorse without return. The tragedy of Judas is not only what he did, but that he despaired of the mercy Peter found after his own betrayal.", ref: "Matthew 27:5 · Acts 1:18" },
    legacy: "His place among the Twelve was given to Matthias."
  }
];

window.MATTHIAS = {
  id: "matthias", name: "Matthias", portrait: "r-matthias", icon: "axe", fate: "axe", color: "#b8a57a",
  text: "A follower from the baptism of John to the Ascension, chosen by lot to take Judas’ place so that the Twelve would be whole again at Pentecost. Tradition sends him to Judea and Cappadocia, and says he was stoned and beheaded.",
  ref: "Acts 1:21–26", quote: { t: "And the lot fell upon Matthias; and he was numbered with the eleven apostles.", r: "Acts 1:26" },
  death: { how: "Stoned and beheaded", where: "Jerusalem or Colchis", when: "c. AD 80", source: "Tradition" }
};

window.PAUL = {
  name: "Paul", full: "Paul of Tarsus", also: "Saul · the Apostle to the Gentiles", portrait: "r-paul",
  facts: [
    ["Born", "Tarsus in Cilicia, a Roman citizen from birth", "Acts 22:3, 28"],
    ["Tribe", "Benjamin — “a Hebrew of the Hebrews”", "Philippians 3:5"],
    ["Schooled", "At the feet of Gamaliel, in Jerusalem", "Acts 22:3"],
    ["Trade", "Tentmaker", "Acts 18:3"],
    ["Letters", "Thirteen, a quarter of the New Testament", ""],
    ["Travelled", "More than 10,000 miles, by common estimate", ""]
  ],
  before: { t: "And Saul was consenting unto his death.", r: "Acts 8:1", text: "A brilliant young Pharisee, he held the coats of the men who stoned Stephen, the first Christian martyr. Then he went from house to house, dragging believers to prison, breathing out threatenings and slaughter." },
  conversion: [
    { t: "Suddenly there shined round about him a light from heaven.", r: "Acts 9:3" },
    { t: "Saul, Saul, why persecutest thou me?", r: "Acts 9:4" },
    { t: "Who art thou, Lord?", r: "Acts 9:5" },
    { t: "I am Jesus whom thou persecutest.", r: "Acts 9:5" }
  ],
  scales: { t: "And immediately there fell from his eyes as it had been scales: and he received sight forthwith, and arose, and was baptized.", r: "Acts 9:18" },
  journeys: [
    { name: "First Journey", years: "c. AD 46–48", ref: "Acts 13–14", color: "#e9c46a",
      text: "With Barnabas to Cyprus, where Saul begins to be called Paul, then into the highlands of Galatia. At Lystra he is stoned and dragged out for dead — and gets up and walks back into the city.",
      stops: [["Antioch", 36.16, 36.2], ["Seleucia", 35.93, 36.12], ["Salamis", 33.9, 35.18], ["Paphos", 32.41, 34.76], ["Perga", 30.85, 36.96], ["Pisidian Antioch", 31.19, 38.31], ["Iconium", 32.48, 37.87], ["Lystra", 32.32, 37.6], ["Derbe", 33.36, 37.35], ["Lystra", 32.32, 37.6], ["Iconium", 32.48, 37.87], ["Pisidian Antioch", 31.19, 38.31], ["Perga", 30.85, 36.96], ["Attalia", 30.7, 36.88], ["Antioch", 36.16, 36.2]] },
    { name: "Second Journey", years: "c. AD 49–52", ref: "Acts 15:36–18:22", color: "#7fb8ff",
      text: "A vision of a man of Macedonia carries the gospel into Europe. Lydia believes at Philippi; Paul and Silas sing hymns at midnight in the stocks until an earthquake opens the prison. He preaches the “unknown god” on the Areopagus in Athens and spends eighteen months in Corinth.",
      stops: [["Antioch", 36.16, 36.2], ["Tarsus", 34.9, 36.92], ["Derbe", 33.36, 37.35], ["Lystra", 32.32, 37.6], ["Iconium", 32.48, 37.87], ["Pisidian Antioch", 31.19, 38.31], ["Troas", 26.16, 39.75], ["Neapolis", 24.41, 40.94], ["Philippi", 24.29, 41.01], ["Thessalonica", 22.94, 40.64], ["Berea", 22.2, 40.52], ["Athens", 23.73, 37.98], ["Corinth", 22.88, 37.91], ["Ephesus", 27.34, 37.94], ["Caesarea", 34.89, 32.5], ["Jerusalem", 35.23, 31.78], ["Antioch", 36.16, 36.2]] },
    { name: "Third Journey", years: "c. AD 53–57", ref: "Acts 18:23–21:17", color: "#7dd3a8",
      text: "Three years at Ephesus, until the silversmiths riot for Diana. Through Macedonia and Greece and back; at Troas a young man falls from a window during a long sermon and is raised. At Miletus he says a tearful farewell to the Ephesian elders, knowing bonds await him in Jerusalem.",
      stops: [["Antioch", 36.16, 36.2], ["Tarsus", 34.9, 36.92], ["Iconium", 32.48, 37.87], ["Ephesus", 27.34, 37.94], ["Troas", 26.16, 39.75], ["Philippi", 24.29, 41.01], ["Thessalonica", 22.94, 40.64], ["Corinth", 22.88, 37.91], ["Philippi", 24.29, 41.01], ["Troas", 26.16, 39.75], ["Miletus", 27.28, 37.53], ["Rhodes", 28.22, 36.44], ["Tyre", 35.2, 33.27], ["Caesarea", 34.89, 32.5], ["Jerusalem", 35.23, 31.78]] },
    { name: "Voyage to Rome", years: "c. AD 59–60", ref: "Acts 27–28", color: "#ff7a6b",
      text: "Arrested in Jerusalem and held two years at Caesarea, he appeals to Caesar. A storm drives the ship for fourteen days; all 276 aboard survive the wreck on Malta, where a viper fastens on his hand and he shakes it into the fire. He reaches Rome in chains and preaches there for two years in his own hired house.",
      stops: [["Caesarea", 34.89, 32.5], ["Sidon", 35.37, 33.56], ["Myra", 29.98, 36.26], ["Fair Havens", 24.77, 34.93], ["Malta", 14.4, 35.92], ["Syracuse", 15.29, 37.08], ["Rhegium", 15.65, 38.11], ["Puteoli", 14.12, 40.82], ["Rome", 12.48, 41.9]] }
  ],
  sufferings: [
    ["195", "lashes", "Five times forty stripes save one"],
    ["3", "beatings with rods", ""],
    ["1", "stoning", "left for dead at Lystra"],
    ["3", "shipwrecks", "before Malta"],
    ["1", "night & day", "adrift in the deep"]
  ],
  sufferRef: "2 Corinthians 11:24–27",
  letters: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon"],
  letterLines: {
    "Romans": "Nothing can separate us from the love of God.",
    "1 Corinthians": "The greatest of these is charity.",
    "2 Corinthians": "My grace is sufficient for thee.",
    "Galatians": "I am crucified with Christ.",
    "Ephesians": "By grace are ye saved through faith.",
    "Philippians": "I can do all things through Christ.",
    "Colossians": "Christ in you, the hope of glory.",
    "1 Thessalonians": "Pray without ceasing.",
    "2 Thessalonians": "Be not weary in well doing.",
    "1 Timothy": "Fight the good fight of faith.",
    "2 Timothy": "I have kept the faith.",
    "Titus": "The grace of God hath appeared to all men.",
    "Philemon": "Not now as a servant, but a brother beloved."
  },
  death: { how: "Beheaded with the sword", where: "Rome, on the Ostian Way", when: "c. AD 64–67, under Nero", source: "Tradition", text: "As a Roman citizen he could not be crucified. Tradition says he was beheaded outside the walls of Rome, where the Basilica of St Paul Outside the Walls now stands over his tomb. His last letter, written in chains, ends almost in triumph." },
  last: { t: "I have fought a good fight, I have finished my course, I have kept the faith.", r: "2 Timothy 4:7" }
};
