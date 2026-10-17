/* ==========================================================================
   The Scarlet Thread — the story, part three: the Gospels to Revelation.
   The life of Jesus is told in full on Behold; here, every thread leads to Him.
   ========================================================================== */
window.AGES = window.AGES || [];

window.AGES.push(
/* ─────────────────────────────── XII ─────────────────────────────── */
{
  id: "gospels", n: "XII", t: "The Word Became Flesh", s: "The Gospels", books: "Matthew · Mark · Luke · John", yl: "c. 6 BC – AD 30",
  c: "#f7dca6", sh: "star",
  v: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.", r: "John 1:14",
  x: "Every thread leads here. The promise to Eve, to Abraham, to David: God Himself came, and was born in Bethlehem.",
  behold: { href: "../index.html", label: "The whole life of Jesus, everyone He met, is told in Behold" },
  scenes: [
    {
      id: "annunciation", t: "Be it unto me according to thy word.", k: "Luke 1", pl: "Nazareth", y: -6, b: ["luk"],
      x: "In Nazareth, the angel Gabriel came to a young virgin named Mary: she would conceive and bear a son, and call His name Jesus, and the Lord God would give unto Him the throne of His father David, and of His kingdom there would be no end. Mary gave her answer, and every promise began to come true.",
      q: "Behold the handmaid of the Lord; be it unto me according to thy word.", r: "Luke 1:38",
      cast: [["Mary", "The Mother of Jesus"], ["Gabriel", "The angel who stands in the presence of God"], ["Zacharias and Elisabeth", "The parents of John the Baptist"], ["Joseph", "Of the house of David, the husband of Mary"]],
      art: "annunciation", lay: "full", kept: ["virgin", "throne"], sh: "star", link: { href: "../mary.html", label: "Mother Mary, on Behold" }
    },
    {
      id: "nativity", t: "Unto you is born this day.", k: "Luke 2 · Matthew 1", pl: "Bethlehem", y: -5, b: ["luk", "mat"],
      x: "A decree from Caesar Augustus brought Joseph and Mary to Bethlehem, the city of David, as Micah had foretold. There was no room for them in the inn. Shepherds keeping watch in the fields heard the angels sing, and came with haste, and found the baby lying in a manger. Matthew opens his Gospel with the family line: Abraham, Judah, Rahab, Ruth, David.",
      q: "For unto you is born this day in the city of David a Saviour, which is Christ the Lord.", r: "Luke 2:11",
      cast: [["The shepherds", "Who came with haste to the manger"], ["Simeon and Anna", "Who waited in the temple for the consolation of Israel"]],
      art: "shepherds", lay: "full", kept: ["child", "bethlehem", "cord"], sh: "star"
    },
    {
      id: "magi", t: "We have seen his star.", k: "Matthew 2", pl: "Jerusalem · Bethlehem · Egypt", y: -5, b: ["mat"],
      x: "Wise men came from the east to Jerusalem, asking where the King of the Jews had been born. The star went before them to Bethlehem. They fell down and worshipped Him, and opened their treasures: gold, frankincense and myrrh. Warned in a dream, Joseph fled by night with Mary and the child into Egypt.",
      q: "And, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was.", r: "Matthew 2:9",
      cast: [["The wise men", "Who came from the east with gifts"], ["Herod the Great", "Who sought the young child to destroy him"]],
      art: "magi", lay: "plate", side: "l", kept: ["star"], sh: "star"
    },
    {
      id: "baptism", t: "Behold the Lamb of God.", k: "Matthew 3 · John 1", pl: "The river Jordan", y: 27, b: ["mat", "mrk", "jhn"],
      x: "John the Baptist, the messenger Malachi had promised, preached in the wilderness: prepare ye the way of the Lord. When Jesus came to be baptised, the heavens opened, the Spirit descended like a dove, and the Father spoke. The next day John saw Jesus coming and pointed Him out, with the words Abraham had waited two thousand years to hear.",
      q: "Behold the Lamb of God, which taketh away the sin of the world.", r: "John 1:29",
      cast: [["John the Baptist", "The voice crying in the wilderness"]],
      art: "baptism", lay: "full", pos: "50% 30%", kept: ["messenger", "lamb"], sh: "dome"
    },
    {
      id: "ministry", t: "He went about doing good.", k: "Matthew · Mark · Luke · John", pl: "Galilee · Judea", y: 28, b: ["mat", "mrk", "luk", "jhn"],
      x: "For three years Jesus walked the roads of Galilee and Judea. He called fishermen and tax collectors, touched lepers, ate with sinners, and taught as one having authority. Water became wine. Storms obeyed. Five thousand ate from five loaves. The blind saw, and the dead were raised.",
      q: "God anointed Jesus of Nazareth with the Holy Ghost and with power: who went about doing good, and healing all that were oppressed of the devil; for God was with him.", r: "Acts 10:38",
      cast: [["Peter, Andrew, James and John", "Fishermen of Galilee, called to follow"], ["Matthew", "The tax collector who left everything"], ["Mary Magdalene", "Who followed Him to the cross and the tomb"], ["Martha, Mary and Lazarus", "His friends at Bethany"]],
      fx: { type: "tunnel", items: [
        ["cana", "Water into wine", "John 2"], ["sermon", "The Sermon on the Mount", "Matthew 5–7"], ["storm", "Peace, be still", "Mark 4"],
        ["loaves", "Five loaves and two fishes", "John 6"], ["walkwater", "Walking on the water", "Matthew 14"], ["blind", "The blind receive their sight", "John 9"],
        ["prodigal", "The prodigal son", "Luke 15"], ["lazarus", "Lazarus, come forth", "John 11"]
      ] },
      kept: ["manna", "ladder"], sh: "dome", h: 5.6,
      link: { href: "../index.html#story", label: "Every encounter, in full, on Behold" }
    },
    {
      id: "transfiguration", t: "Hear ye him.", k: "Matthew 17", pl: "A high mountain", y: 29, b: ["mat", "mrk", "luk"],
      x: "On a high mountain, Jesus was transfigured before Peter, James and John. His face did shine as the sun, and Moses and Elijah, the law and the prophets, appeared and talked with Him about the death He would accomplish at Jerusalem.",
      q: "This is my beloved Son, in whom I am well pleased; hear ye him.", r: "Matthew 17:5",
      art: "transfig", lay: "portal", sh: "sphere"
    },
    {
      id: "entry", t: "Thy King cometh.", k: "Matthew 21 · John 12", pl: "Jerusalem", y: 30, b: ["mat", "jhn"],
      x: "Five days before the Passover, Jesus rode into Jerusalem on a donkey, exactly as Zechariah had written. The crowds spread their garments and palm branches in the way, crying Hosanna. In the temple, He overturned the tables of the moneychangers.",
      q: "Hosanna to the Son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.", r: "Matthew 21:9",
      art: "entry", lay: "plate", side: "r", kept: ["donkey"], sh: "crown"
    },
    {
      id: "supper", t: "This is my body.", k: "Luke 22 · John 13", pl: "The upper room", y: 30, b: ["luk", "jhn"],
      x: "On the night He was betrayed, Jesus kept the Passover with His disciples, and washed their feet. Then He took bread, gave thanks, and brake it: this is my body which is given for you. Likewise the cup after supper: the new covenant Jeremiah had promised, sealed in His own blood.",
      q: "This cup is the new testament in my blood, which is shed for you.", r: "Luke 22:20",
      art: "supper", lay: "full", kept: ["newcov"], sh: "ring"
    },
    {
      id: "gethsemane", t: "Not my will.", k: "Luke 22 · Matthew 26", pl: "Gethsemane · the house of Caiaphas", y: 30, b: ["luk", "mat"],
      x: "In the garden of Gethsemane He prayed until His sweat was as it were great drops of blood. Judas came with soldiers and betrayed Him with a kiss. Before the high priest He was asked, Art thou the Christ? He answered with Daniel’s words: you shall see the Son of man coming in the clouds of heaven.",
      q: "Nevertheless not my will, but thine, be done.", r: "Luke 22:42",
      cast: [["Judas Iscariot", "The disciple who betrayed Him"], ["Caiaphas", "The high priest"], ["Pontius Pilate", "Roman governor of Judea"]],
      art: "gethsemane", lay: "plate", side: "l", kept: ["sonofman"], sh: "dome"
    },
    {
      id: "cross", t: "It is finished.", k: "Matthew 27 · Mark 15 · Luke 23 · John 19", pl: "Golgotha", y: 30, b: ["mat", "mrk", "luk", "jhn"],
      x: "He was scourged, crowned with thorns, and led out bearing His cross to Golgotha. They pierced His hands and His feet, and soldiers cast lots for His coat. Darkness covered the land from the sixth hour to the ninth, when He cried, “My God, my God, why hast thou forsaken me?” Then He cried out with a loud voice, and the veil of the temple was rent in twain from the top to the bottom.",
      q: "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.", r: "John 19:30",
      cast: [["Simon of Cyrene", "Who carried the cross"], ["The thief on the cross", "To whom He promised paradise"], ["The centurion", "Truly this was the Son of God"], ["Joseph of Arimathaea", "Who gave his own tomb"]],
      art: "crucified", fx: { type: "cross" }, kept: ["seed", "passover", "atonement", "serpent", "kinsman", "psalm22", "servant", "pierced"], sh: "cross", h: 5
    },
    {
      id: "risen", t: "He is not here: for he is risen.", k: "Matthew 28 · John 20", pl: "The garden tomb", y: 30, b: ["mat", "jhn", "mrk", "luk"],
      x: "On the first day of the week, very early, the women came with spices to the tomb, and found the stone rolled away. An angel sat upon it. Mary Magdalene stayed weeping in the garden, until a man she took for the gardener said her name. Three days, as Jonah had been in the fish.",
      q: "He is not here: for he is risen, as he said.", r: "Matthew 28:6",
      cast: [["Thomas", "My Lord and my God"], ["Cleopas", "Who walked to Emmaus with the risen Christ"]],
      art: "resurrection", fx: { type: "dawn" }, kept: ["jonah"], sh: "sunrise", h: 3.4
    },
    {
      id: "ascension", t: "I am with you alway.", k: "Luke 24 · Acts 1 · Matthew 28", pl: "The Mount of Olives", y: 30, b: ["luk", "act", "mat"],
      x: "For forty days the risen Jesus appeared to His followers: on the road to Emmaus, in a shut room, beside the Sea of Galilee. He sent them to make disciples of all nations, promised the Holy Spirit, and was taken up, and a cloud received Him out of their sight.",
      q: "And, lo, I am with you alway, even unto the end of the world.", r: "Matthew 28:20",
      art: "ascension", lay: "full", sh: "sphere"
    }
  ]
},

/* ─────────────────────────────── XIII ─────────────────────────────── */
{
  id: "church", n: "XIII", t: "Fire on the Earth", s: "The Church", books: "The Acts of the Apostles", yl: "AD 30 – 62",
  c: "#ffa45a", sh: "flames",
  v: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.", r: "Acts 1:8",
  x: "A hundred and twenty people in an upper room. Within a generation, the good news had reached Rome.",
  behold: { href: "../apostles.html", label: "The Twelve and Paul, their journeys and their deaths, on Behold" },
  scenes: [
    {
      id: "pentecost", t: "Tongues like as of fire.", k: "Acts 2", pl: "Jerusalem", y: 30, b: ["act"],
      x: "Fifty days after the resurrection, the disciples were all with one accord in one place. A sound from heaven as of a rushing mighty wind filled the house, and cloven tongues like as of fire sat upon each of them. Pilgrims from every nation heard them speaking in their own languages: Babel undone. Peter stood up and preached, and three thousand were baptised that day.",
      q: "We do hear them speak in our tongues the wonderful works of God.", r: "Acts 2:11",
      art: "pentecost", fx: { type: "tongues", mode: "gather" }, kept: ["spirit"], sh: "flames", h: 3.6
    },
    {
      id: "lame", t: "Such as I have give I thee.", k: "Acts 3–5", pl: "The Beautiful gate of the temple", y: 31, b: ["act"],
      x: "At the gate of the temple called Beautiful, a man lame from birth asked Peter and John for money. Peter took him by the right hand, and he went into the temple walking, and leaping, and praising God. Arrested and threatened, the apostles answered: “We cannot but speak the things which we have seen and heard.”",
      q: "Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk.", r: "Acts 3:6",
      cast: [["Peter", "The rock, first among the apostles"], ["John", "The beloved disciple"], ["Gamaliel", "The Pharisee who counselled caution"]],
      art: "lame-man", lay: "plate", side: "r", sh: "flames"
    },
    {
      id: "stephen", t: "Lay not this sin to their charge.", k: "Acts 6–7", pl: "Jerusalem", y: 34, b: ["act"],
      x: "Stephen, one of the seven deacons, full of faith and power, was dragged before the council. He told them Israel’s whole story, from Abraham to Solomon, and saw the heavens opened. They stoned him. A young man named Saul kept the clothes of those who threw the stones, and consented unto his death.",
      q: "Lord, lay not this sin to their charge.", r: "Acts 7:60",
      cast: [["Stephen", "The first martyr"]],
      art: "stephen", lay: "plate", side: "l", sh: "ash"
    },
    {
      id: "ethiopian", t: "Understandest thou what thou readest?", k: "Acts 8", pl: "The road to Gaza", y: 34, b: ["act"],
      x: "Persecution scattered the believers, and they preached wherever they went. On a desert road, Philip met an Ethiopian official riding in his chariot, reading the prophet Isaiah aloud: “He was led as a sheep to the slaughter.” Philip began at the same scripture, and preached unto him Jesus.",
      q: "See, here is water; what doth hinder me to be baptized?", r: "Acts 8:36",
      cast: [["Philip", "The evangelist, one of the seven"], ["The Ethiopian", "Treasurer of Candace, queen of the Ethiopians"]],
      art: "eunuch", lay: "plate", side: "r", sh: "sea"
    },
    {
      id: "damascus", t: "Why persecutest thou me?", k: "Acts 9", pl: "The road to Damascus", y: 35, b: ["act"],
      x: "Saul, yet breathing out threatenings, was on his way to Damascus to arrest believers when a light from heaven shone round about him. He fell to the earth and heard a voice: “Saul, Saul, why persecutest thou me?” Blind for three days, he was baptised by Ananias, and the persecutor became the apostle Paul.",
      q: "And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest.", r: "Acts 9:5",
      cast: [["Paul", "Born Saul of Tarsus; the apostle to the nations"], ["Ananias", "The disciple at Damascus who laid hands on him"]],
      art: "paul-conv", lay: "full", sh: "sphere"
    },
    {
      id: "cornelius", t: "God is no respecter of persons.", k: "Acts 10–12", pl: "Joppa · Caesarea · Jerusalem", y: 40, b: ["act"],
      x: "Peter saw a vision of a great sheet let down from heaven, and was sent to the house of a Roman centurion, Cornelius. While he was still speaking, the Holy Ghost fell on the Gentiles too. When Herod threw Peter into prison, the church prayed through the night, and an angel struck the chains from his hands.",
      q: "Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him.", r: "Acts 10:34–35",
      cast: [["Cornelius", "A centurion of the Italian band"], ["Rhoda", "Who left Peter knocking at the gate"]],
      art: "peter-deliverance", lay: "full", kept: ["blessing"], sh: "globe"
    },
    {
      id: "journeys", t: "Unto the uttermost part of the earth.", k: "Acts 13–28", pl: "The Roman world", y: 46, b: ["act"],
      x: "From Antioch, Paul and his companions carried the gospel across the Roman world: Cyprus and Galatia, Philippi and Thessalonica, Athens, Corinth and Ephesus. He was beaten, stoned and shipwrecked, and finally sent in chains to Rome.",
      q: "Preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him.", r: "Acts 28:31",
      cast: [["Barnabas", "The son of consolation"], ["Silas", "Who sang with Paul in the Philippian jail"], ["Timothy", "Paul’s son in the faith"], ["Lydia", "A seller of purple, the first believer in Europe"], ["Priscilla and Aquila", "Tentmakers and teachers"], ["Luke", "The beloved physician, who wrote it all down"]],
      fx: { type: "map", route: "paul" }, sh: "globe", h: 4.4
    }
  ]
},

/* ─────────────────────────────── XIV ─────────────────────────────── */
{
  id: "letters", n: "XIV", t: "Letters to the Church", s: "The Epistles", books: "Romans to Jude", yl: "c. AD 48 – 96",
  c: "#efe0c2", sh: "scroll",
  v: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.", r: "Romans 8:38–39",
  x: "The apostles wrote to young churches and old friends: twenty-one letters that still teach the Church how to believe, to love and to live.",
  scenes: [
    {
      id: "epistles", t: "Twenty-one letters.", k: "Romans – Jude", y: 57, b: ["rom", "1co", "2co", "gal", "eph", "php", "col", "1th", "2th", "1ti", "2ti", "tit", "phm", "heb", "jas", "1pe", "2pe", "1jn", "2jn", "3jn", "jud"],
      x: "Paul wrote thirteen of them, many from prison. The rest came from James and Jude, the brothers of the Lord, from Peter and John, and, in Hebrews, from a writer whose name we do not know. Scroll to open each one.",
      fx: { type: "letters" }, sh: "scroll", h: 8
    },
    {
      id: "faith", t: "So great a cloud of witnesses.", k: "Hebrews 11–12", y: 66, b: ["heb"],
      x: "The letter to the Hebrews looks back over the whole story you have just walked through and names its heroes one by one. They all died waiting for a promise. We have seen it kept.",
      fx: { type: "faith", items: [
        ["cain-abel", "By faith Abel offered unto God a more excellent sacrifice than Cain.", "11:4"],
        ["noah-ark", "By faith Noah … prepared an ark to the saving of his house.", "11:7"],
        ["abraham-journey", "By faith Abraham … went out, not knowing whither he went.", "11:8"],
        ["isaac", "By faith Abraham, when he was tried, offered up Isaac.", "11:17"],
        ["joseph-brothers", "By faith Joseph, when he died, made mention of the departing of the children of Israel.", "11:22"],
        ["finding-moses", "By faith Moses, when he was come to years, refused to be called the son of Pharaoh’s daughter.", "11:24"],
        ["redsea", "By faith they passed through the Red sea as by dry land.", "11:29"],
        ["jericho", "By faith the walls of Jericho fell down, after they were compassed about seven days.", "11:30"],
        ["rahab", "By faith the harlot Rahab perished not with them that believed not.", "11:31"],
        ["goliath", "The time would fail me to tell of Gedeon, and of Barak, and of Samson … of David also, and Samuel, and of the prophets.", "11:32"],
        ["daniel-lions", "Who through faith … stopped the mouths of lions, quenched the violence of fire.", "11:33–34"]
      ], end: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight … and let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith.", endr: "Hebrews 12:1–2" },
      sh: "dome", h: 6.4
    }
  ]
},

/* ─────────────────────────────── XV ─────────────────────────────── */
{
  id: "revelation", n: "XV", t: "Behold, I Make All Things New", s: "Revelation", books: "The Revelation of Saint John", yl: "c. AD 95",
  c: "#ffe2a0", sh: "rings",
  v: "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.", r: "Revelation 1:8",
  x: "An old apostle, exiled on a rocky island, was shown how the story ends.",
  scenes: [
    {
      id: "patmos", t: "I am alive for evermore.", k: "Revelation 1", pl: "The isle of Patmos", y: 95, b: ["rev"],
      x: "John, the last of the apostles, was exiled to Patmos for the word of God. On the Lord’s day he heard behind him a great voice, as of a trumpet, and turned to see the risen Christ among seven golden candlesticks, His eyes as a flame of fire. He fell at His feet as dead.",
      q: "Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore.", r: "Revelation 1:17–18",
      cast: [["John", "Apostle and seer, exiled on Patmos"]],
      art: "john-patmos", lay: "full", pos: "50% 14%", kept: ["redeemer"], sh: "rings"
    },
    {
      id: "door", t: "Behold, I stand at the door.", k: "Revelation 2–3", pl: "The seven churches of Asia", y: 95, b: ["rev"],
      x: "Christ sent a letter to each of the seven churches. Every one ended with a promise to him that overcometh. To the last, the lukewarm church of Laodicea, rich and self-satisfied, He spoke the tenderest words in the book. He does not break the door down. He knocks.",
      q: "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.", r: "Revelation 3:20",
      art: "light-world", lay: "portal", sh: "ring"
    },
    {
      id: "lamb", t: "Worthy is the Lamb.", k: "Revelation 4–5", pl: "The throne of heaven", y: 95, b: ["rev"],
      x: "A door was opened in heaven: a throne, and a rainbow round about the throne like an emerald, and living creatures crying Holy, holy, holy, as Isaiah heard. No one could open the sealed book, and John wept much, until an elder said: the Lion of the tribe of Juda hath prevailed. John turned to see the Lion, and saw a Lamb, as it had been slain.",
      q: "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.", r: "Revelation 5:12",
      art: "mystic-lamb", lay: "full", kept: ["sceptre"], sh: "rings"
    },
    {
      id: "horsemen", t: "Behold a pale horse.", k: "Revelation 6–11", y: 95, b: ["rev"],
      x: "As the Lamb opened the seals, four horsemen rode out: conquest, war, famine and death. Seven trumpets sounded over a world that would not repent. Yet between the judgements, John saw a great multitude, which no man could number, of all nations, standing before the throne, and God wiping away all tears from their eyes.",
      q: "And I looked, and behold a pale horse: and his name that sat on him was Death.", r: "Revelation 6:8",
      art: "horsemen", lay: "full", sh: "whirlwind"
    },
    {
      id: "woman", t: "A woman clothed with the sun.", k: "Revelation 12", y: 95, b: ["rev"],
      x: "A great wonder in heaven: a woman giving birth to a son who would rule all nations, and a great red dragon waiting to devour the child. The child was caught up unto God. Michael and his angels fought, and the dragon, that old serpent, was cast out. The Church has long seen in the woman the Virgin Mary, and in the war, the end of Eden’s serpent.",
      q: "And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars.", r: "Revelation 12:1",
      cast: [["Michael", "The archangel, captain of the hosts of heaven"]],
      art: "blake-dragon", lay: "plate", side: "l", sh: "galaxy"
    },
    {
      id: "king", t: "King of kings.", k: "Revelation 19–20", y: 95, b: ["rev"],
      x: "Babylon the great, the city of pride, fell in one hour. Heaven opened, and a rider on a white horse came out, called Faithful and True, the Word of God. The dragon was bound, death and hell gave up the dead which were in them, and the books were opened before a great white throne.",
      q: "And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.", r: "Revelation 19:16",
      art: "great-day", lay: "full", sh: "crown"
    },
    {
      id: "new", t: "Behold, I make all things new.", k: "Revelation 21–22", pl: "The new Jerusalem", y: 95, b: ["rev"],
      x: "Then John saw a new heaven and a new earth, and the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride. The city lies foursquare, its length and breadth and height all equal: a perfect cube, like the Most Holy Place, for now God dwells with His people everywhere. A river of water of life flows from the throne, and on either side of it grows the tree of life, last seen in Eden.",
      q: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.", r: "Revelation 21:4",
      art: "plains-heaven", fx: { type: "new" }, sh: "cube", h: 5
    },
    {
      id: "amen", t: "Even so, come, Lord Jesus.", k: "Revelation 22:20–21", y: 95, b: ["rev"],
      x: "The story that began in a garden ends in a city with a garden at its heart. The thread that began at the gate of Eden is tied, at last, into a circle.",
      fx: { type: "amen" }, sh: "infinity", h: 4.4
    }
  ]
}
);
