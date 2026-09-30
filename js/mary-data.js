/*
 * Mother Mary: her life, her words, her sorrows, and the Rosary.
 * Scripture from the King James Version; prayers in their traditional English form.
 * Where the Gospels are silent, the page follows long-held tradition and says so.
 */

window.MARY_LIFE = [
  { id: "origins", title: "A Daughter of Nazareth", tag: "Her beginnings", img: "golden-gate", more: ["titian-present", "rossetti", "t-anne"],
    text: "Her name was Miriam, like the sister of Moses. She lived in Nazareth, an obscure village in the hills of Galilee, and was a kinswoman of Elizabeth, of the priestly line of Aaron. Ancient tradition names her parents Joachim and Anne, an older couple who had long prayed for a child, and tells that as a little girl she was presented to God in the temple.",
    note: "Her parents’ names come from the Protoevangelium of James, a second-century text; the Gospels begin with her betrothal.", ref: "Luke 1:26–27, 36" },
  { id: "yes", title: "Her Yes", tag: "The Annunciation", img: "leonardo-annun", more: ["annunciation", "t-virgin-youth"],
    text: "Probably still in her teens and already betrothed to Joseph, she was greeted by the angel Gabriel as “highly favoured.” She was troubled, and she asked a real question — “How shall this be?” — and then gave an answer that would cost her reputation, her safety, and one day her heart.",
    ref: "Luke 1:26–38" },
  { id: "visitation", title: "Into the Hill Country", tag: "The Visitation", img: "t-visitation", more: ["t-magnificat"],
    text: "She went “with haste” across the hills to her cousin Elizabeth, who was expecting John in her old age. At her greeting the child leapt in Elizabeth’s womb, and Mary broke into the song the Church has sung every evening for two thousand years.",
    ref: "Luke 1:39–56" },
  { id: "bethlehem", title: "No Room", tag: "The Nativity", img: "t-birth", more: ["t-lodging", "shepherds"],
    text: "Heavily pregnant, she made the journey of some ninety miles from Nazareth to Bethlehem for a Roman census. There was no room for them in the inn. She gave birth among the animals, wrapped her son in swaddling clothes, and laid him in a manger — then kept all these things, and pondered them in her heart.",
    ref: "Luke 2:1–19" },
  { id: "egypt", title: "A Refugee Mother", tag: "The Flight into Egypt", img: "merson", more: ["t-flight"],
    text: "When Herod sought the child’s life, Joseph woke her in the night and they fled south with the infant into Egypt, living as foreigners until the tyrant was dead. Every mother who has ever run from danger with a child in her arms has a companion in her.",
    ref: "Matthew 2:13–15" },
  { id: "hidden", title: "The Hidden Years", tag: "Nazareth", img: "hunt-finding", more: ["t-lost", "t-doctors"],
    text: "Thirty quiet years in Nazareth. Once, at twelve, Jesus was lost for three days; she found him in the temple and said what any mother would: “thy father and I have sought thee sorrowing.” Joseph disappears from the story after this, and tradition holds that she was a widow by the time her son began his ministry.",
    ref: "Luke 2:41–52" },
  { id: "cana", title: "“Do Whatever He Tells You”", tag: "The Wedding at Cana", img: "t-betrothed-cana", more: ["cana"],
    text: "At a village wedding she noticed the wine had run out before anyone else did, and brought the need to her son. Her last recorded words in Scripture are addressed to the servants — and to everyone since: “Whatsoever he saith unto you, do it.”",
    ref: "John 2:1–11" },
  { id: "cross", title: "Stabat Mater", tag: "At the Cross", img: "weyden", more: ["t-behold-son", "t-meets-mother"],
    text: "When nearly everyone had fled, she stood by the cross. She watched her son die. From the cross he gave her to the beloved disciple — and gave the disciple, and all disciples, to her. Simeon’s sword had reached her soul.",
    ref: "John 19:25–27" },
  { id: "pentecost", title: "In the Upper Room", tag: "Mother of the Church", img: "pentecost", more: ["t-virgin-old"],
    text: "The last time the Bible names her, she is at prayer with the apostles, waiting for the promised Spirit. Tradition says she lived her final years in the care of John, in Jerusalem or at Ephesus.",
    ref: "Acts 1:14" },
  { id: "assumption", title: "Assumed into Heaven", tag: "The Assumption", img: "assunta", more: ["coronation", "murillo-immac"],
    text: "The Church has long held that at the end of her earthly life she was taken up, body and soul, into heavenly glory — celebrated in the East as the Dormition, and defined for Catholics in 1950. She is honoured as Queen of Heaven, crowned by the Son she once carried.",
    note: "A belief of Catholic and Orthodox tradition rather than a Gospel narrative.", ref: "Revelation 12:1" }
];

window.MARY_WORDS = [
  { t: "How shall this be, seeing I know not a man?", r: "Luke 1:34", to: "To the angel Gabriel" },
  { t: "Behold the handmaid of the Lord; be it unto me according to thy word.", r: "Luke 1:38", to: "Her yes" },
  { t: "My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.", r: "Luke 1:46–47", to: "To Elizabeth" },
  { t: "Son, why hast thou thus dealt with us? behold, thy father and I have sought thee sorrowing.", r: "Luke 2:48", to: "To the boy Jesus" },
  { t: "They have no wine.", r: "John 2:3", to: "To her son, at Cana" },
  { t: "Whatsoever he saith unto you, do it.", r: "John 2:5", to: "Her last recorded words" }
];

window.MAGNIFICAT = [
  "My soul doth magnify the Lord,",
  "and my spirit hath rejoiced in God my Saviour.",
  "For he hath regarded the low estate of his handmaiden:",
  "for, behold, from henceforth all generations shall call me blessed.",
  "For he that is mighty hath done to me great things; and holy is his name.",
  "And his mercy is on them that fear him from generation to generation.",
  "He hath shewed strength with his arm;",
  "he hath scattered the proud in the imagination of their hearts.",
  "He hath put down the mighty from their seats, and exalted them of low degree.",
  "He hath filled the hungry with good things; and the rich he hath sent empty away.",
  "He hath holpen his servant Israel, in remembrance of his mercy;",
  "as he spake to our fathers, to Abraham, and to his seed for ever."
];

window.SORROWS = [
  { n: "I", title: "The Prophecy of Simeon", img: "t-presentation", ref: "Luke 2:34–35",
    q: "Yea, a sword shall pierce through thy own soul also.", text: "Forty days after the birth, in the joy of presenting her child, an old man tells her that her son will be spoken against — and that she will suffer with him." },
  { n: "II", title: "The Flight into Egypt", img: "t-flight", ref: "Matthew 2:13–15",
    q: "Arise, and take the young child and his mother, and flee into Egypt.", text: "Woken in the night, she leaves everything she knows and carries her infant into a foreign land while Herod’s soldiers kill the children of Bethlehem." },
  { n: "III", title: "The Loss of the Child in the Temple", img: "t-lost", ref: "Luke 2:43–48",
    q: "Thy father and I have sought thee sorrowing.", text: "Three days of searching the roads and streets of Jerusalem for her twelve-year-old son — a foretaste of three darker days to come." },
  { n: "IV", title: "Meeting Jesus on the Way to Calvary", img: "t-meets-mother", ref: "Tradition · Luke 23:27",
    q: "And there followed him a great company of people, and of women, which also bewailed and lamented him.", text: "Tradition keeps the moment the Gospels leave unspoken: mother and son meeting on the road, his face bloodied, the cross on his shoulders." },
  { n: "V", title: "The Crucifixion", img: "t-behold-son", ref: "John 19:25–27",
    q: "Now there stood by the cross of Jesus his mother.", text: "She stands for three hours beneath the cross, and hears him give her to John, and John to her, before he bows his head." },
  { n: "VI", title: "The Body Taken Down from the Cross", img: "pieta", ref: "Matthew 27:57–59",
    q: "When Joseph had taken the body, he wrapped it in a clean linen cloth.", text: "The son she once held as a baby is laid once more in her arms — the moment artists have called the Pietà." },
  { n: "VII", title: "The Burial of Jesus", img: "t-kisses", ref: "John 19:40–42",
    q: "There laid they Jesus.", text: "She watches the stone rolled across the tomb, and goes home without him. Then she waits." }
];

window.HARDSHIPS = [
  ["Scandal", "Pregnant before her wedding, in a village where such a thing could bring disgrace — or death by stoning.", "Matthew 1:18–19"],
  ["Poverty", "At the temple she offered two young pigeons, the offering the Law allowed for those who could not afford a lamb.", "Luke 2:24 · Leviticus 12:8"],
  ["Exile", "A refugee in Egypt with a newborn, fleeing a king’s massacre.", "Matthew 2:13–15"],
  ["Widowhood", "Joseph is not mentioned after Jesus’ twelfth year; tradition holds she was widowed.", "Tradition"],
  ["Rejection", "Her son’s own town tried to throw him from a cliff, and relatives said, “He is beside himself.”", "Luke 4:29 · Mark 3:21"],
  ["Loss", "She outlived her son, and watched him die the cruellest death Rome knew.", "John 19:25"]
];

window.ROSARY_HISTORY = [
  { when: "3rd–4th c.", title: "Pebbles and knotted cords", text: "The Desert Fathers of Egypt count their prayers on pebbles or knots in a cord — Paul of Pherme is said to have kept three hundred pebbles for his daily prayers." },
  { when: "9th–12th c.", title: "The poor man’s Psalter", text: "Monks pray all 150 Psalms. Lay people who cannot read pray 150 Our Fathers instead, counted on strings called paternosters; in time the Angel’s greeting to Mary — the first half of the Hail Mary — takes their place, and it becomes “Our Lady’s Psalter.”" },
  { when: "1214", title: "Saint Dominic", text: "According to a cherished tradition, Our Lady gave the Rosary to St Dominic in southern France as a weapon of prayer. The Dominicans have carried it ever since." },
  { when: "c. 1410", title: "Mysteries for meditation", text: "Dominic of Prussia, a Carthusian monk, attaches a thought from the life of Christ to each Hail Mary — the seed of the Mysteries." },
  { when: "1470s", title: "Blessed Alan de la Roche", text: "A Dominican preacher founds Rosary confraternities and spreads the devotion across Europe, grouping the prayers in decades." },
  { when: "1569", title: "The form is fixed", text: "Pope St Pius V, a Dominican, establishes the Rosary as it would be prayed for centuries: fifteen decades on fifteen Mysteries." },
  { when: "7 Oct 1571", title: "The Battle of Lepanto", img: "lepanto", text: "As the fleets meet off Greece, the Pope asks all Christendom to pray the Rosary. The victory is credited to Our Lady’s intercession, and 7 October becomes the Feast of Our Lady of the Rosary." },
  { when: "1858 · 1917", title: "Lourdes and Fátima", text: "At Lourdes, Bernadette sees the Lady with a rosary on her arm. At Fátima she calls herself “the Lady of the Rosary” and asks the three shepherd children to pray it every day." },
  { when: "2002", title: "The Luminous Mysteries", text: "Pope St John Paul II adds five Mysteries of Light from Christ’s public life, so the Rosary walks through the whole Gospel." }
];

window.MYSTERIES = {
  joyful: { name: "Joyful", days: "Monday & Saturday", color: "#9ec5ff", list: [
    ["The Annunciation", "Luke 1:26–38", "Humility", "leonardo-annun"],
    ["The Visitation", "Luke 1:39–56", "Love of neighbour", "t-visitation"],
    ["The Nativity", "Luke 2:1–20", "Poverty of spirit", "t-birth"],
    ["The Presentation", "Luke 2:22–38", "Obedience", "t-presentation"],
    ["The Finding in the Temple", "Luke 2:41–52", "Joy in finding Jesus", "hunt-finding"]
  ]},
  luminous: { name: "Luminous", days: "Thursday", color: "#e9c46a", list: [
    ["The Baptism in the Jordan", "Matthew 3:13–17", "Openness to the Holy Spirit", "baptism"],
    ["The Wedding at Cana", "John 2:1–11", "To Jesus through Mary", "t-betrothed-cana"],
    ["The Proclamation of the Kingdom", "Mark 1:14–15", "Repentance and trust", "sermon"],
    ["The Transfiguration", "Matthew 17:1–8", "Desire for holiness", "transfig"],
    ["The Institution of the Eucharist", "Luke 22:14–20", "Adoration", "supper"]
  ]},
  sorrowful: { name: "Sorrowful", days: "Tuesday & Friday", color: "#e0584f", list: [
    ["The Agony in the Garden", "Luke 22:39–46", "Sorrow for sin", "gethsemane"],
    ["The Scourging at the Pillar", "John 19:1", "Purity", "eccehomo"],
    ["The Crowning with Thorns", "Matthew 27:27–31", "Courage", "thorns"],
    ["The Carrying of the Cross", "John 19:16–17", "Patience", "spasimo"],
    ["The Crucifixion", "Luke 23:33–46", "Perseverance", "crucified"]
  ]},
  glorious: { name: "Glorious", days: "Wednesday & Sunday", color: "#f3dca4", list: [
    ["The Resurrection", "Matthew 28:1–10", "Faith", "resurrection"],
    ["The Ascension", "Luke 24:50–53", "Hope", "ascension"],
    ["The Descent of the Holy Spirit", "Acts 2:1–4", "Love of God", "pentecost"],
    ["The Assumption", "Tradition · Revelation 12:1", "Grace of a holy death", "assunta"],
    ["The Coronation of Mary", "Revelation 12:1", "Trust in Mary’s intercession", "coronation"]
  ]}
};

window.PRAYERS = {
  sign: { name: "The Sign of the Cross", text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
  creed: { name: "The Apostles’ Creed", text: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; the third day He rose again from the dead; He ascended into heaven, and sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen." },
  father: { name: "Our Father", text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen." },
  hail: { name: "Hail Mary", text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen." },
  glory: { name: "Glory Be", text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen." },
  fatima: { name: "The Fátima Prayer", text: "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to heaven, especially those in most need of thy mercy." },
  queen: { name: "Hail, Holy Queen", text: "Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen." }
};

window.SHRINES = [
  { name: "Our Lady of the Pillar", place: "Zaragoza, Spain", year: "AD 40 (tradition)", lon: -0.88, lat: 41.65, text: "Tradition says Mary appeared to the apostle James, discouraged in his mission, standing on a pillar by the Ebro." },
  { name: "Our Lady of Guadalupe", place: "Mexico City", year: "1531", lon: -99.12, lat: 19.48, img: "guadalupe", text: "To Juan Diego, an Aztec convert, leaving her image on his cloak — the most visited Marian shrine in the world." },
  { name: "Our Lady of Madhu", place: "Mannar, Sri Lanka", year: "Since 1670", lon: 80.12, lat: 8.85, text: "Catholic families fleeing persecution carried her statue from Mantai into the jungle at Madhu. Tamil and Sinhala pilgrims have come to her together ever since." },
  { name: "Our Lady of Good Health", place: "Velankanni, India", year: "16th–17th c.", lon: 79.85, lat: 10.68, text: "Honoured after appearances to a shepherd boy and a lame buttermilk seller, and the rescue of Portuguese sailors from a storm." },
  { name: "Our Lady of Lourdes", place: "Lourdes, France", year: "1858", lon: -0.05, lat: 43.1, text: "Eighteen appearances to Bernadette Soubirous, who heard her say, “I am the Immaculate Conception.”" },
  { name: "Our Lady of Fátima", place: "Fátima, Portugal", year: "1917", lon: -8.67, lat: 39.63, text: "Six appearances to three shepherd children, ending with the Miracle of the Sun: “I am the Lady of the Rosary.”" }
];

window.SUB_TUUM = "We fly to thy patronage, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin.";
