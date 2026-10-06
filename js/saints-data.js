/*
 * The Saints: forty-one lives across twenty centuries — and an archangel — and what they teach us.
 * Scripture (KJV) is cited where the Bible records an event. Where a story comes
 * from tradition rather than history, its source says so ("Tradition").
 * `year` places each saint on the timeline; `lessons` and `practice` are the heart
 * of every chapter: what we can learn from them, and one way to live it today.
 * `pos` is where the face sits in the portrait (as CSS object-position), `endPos` the
 * same for `endImg`; `zoom` crops in on a portrait photographed in its frame.
 * `stage` marks someone on the road to sainthood but not yet canonised (shown on their
 * chapter, left out of the Litany); `special` gives a chapter a scene of its own after it.
 */

window.SAINT_ERAS = [
  {
    id: "angels", n: "∞", span: "Before time", title: "Before all ages",
    text: "Before the first saint walked the earth, there were the angels: spirits made by God, who “do always behold the face of my Father which is in heaven.” One of them the Church has honoured above all the rest.",
    also: "Scripture names two other archangels: Gabriel, who came to Mary, and Raphael, who walked with Tobias. And beside every child, said Jesus, stands an angel of their own (Matthew 18:10)."
  },
  {
    id: "first", n: "I", span: "1st – 5th centuries", title: "The first centuries",
    text: "From a carpenter’s house in Nazareth to the arenas of Rome and the libraries of North Africa: the Church is born, persecuted, and learns to think.",
    also: "Also of these years: Stephen, Agnes, Lucy, Cecilia, Ambrose, Jerome."
  },
  {
    id: "middle", n: "II", span: "13th – 15th centuries", title: "The Middle Ages",
    text: "Cathedrals rise and universities are founded, and God raises up beggars and preachers, a scholar, a mystic, a shepherd girl, an invalid and a widow to renew His Church.",
    also: "In the long centuries before them: Benedict, Patrick, Gregory the Great, Bede, Bernard, Dominic."
  },
  {
    id: "reform", n: "III", span: "16th – 18th centuries", title: "Reform and mission",
    text: "The Church is torn and renewed while ships open the world. Saints reform it from within, win hearts back with gentleness, and carry the Gospel to India, Japan — and Sri Lanka.",
    also: "Also of these years: John of the Cross, Philip Neri, Rose of Lima, Vincent de Paul, Martin de Porres, Peter Claver."
  },
  {
    id: "modern", n: "IV", span: "19th – 21st centuries", title: "Our own times",
    text: "Saints with photographs. They lived in a world of trains, wars, cameras and microphones — a world very like ours.",
    also: "Also of these years: Josephine Bakhita, Gianna Beretta Molla, Óscar Romero, Carlo Acutis."
  }
];

window.SAINTS = [
  {
    id: "michael", era: "angels", year: 0, color: "#a9c1ff", icon: "sword",
    name: "Michael", full: "Saint Michael the Archangel", title: "Who Is Like God?",
    lived: "Before all ages", from: "The presence of God", feast: "29 September, with Gabriel and Raphael", patron: "Soldiers, police, the sick and the dying, and the whole Church",
    portrait: "s-michael", pos: "47% 16%", scenes: ["s-michael-raphael", "s-michael-angelo"],
    story: [
      "Michael is not a man or woman who became holy. He is an archangel — a spirit created by God before the world began — and one of only three angels whom Scripture calls by name. His name is a question in Hebrew: Mi-ka-El, “Who is like God?” The Book of Daniel calls him “the great prince which standeth for the children of thy people,” the guardian of God’s people in their darkest hour.",
      "The last book of the Bible shows him at war: “There was war in heaven: Michael and his angels fought against the dragon.” The Church’s ancient tradition tells the story behind it — that when the proudest of the angels refused to serve God, Michael answered with his own name: Who is like God? Yet in the Letter of Jude, even when he contends with the devil, he does not insult him; he says only, “The Lord rebuke thee.” His strength is not his own. It is the strength of someone who knows exactly who God is — and who he is not."
    ],
    moments: [
      ["The prophet Daniel", "Named as the great prince who stands guard over God’s people in their time of trouble.", "Daniel 12:1"],
      ["The body of Moses", "Contends with the devil, yet will not curse him: “The Lord rebuke thee.”", "Jude 1:9"],
      ["War in heaven", "Leads the angels against the dragon, “that old serpent,” and casts him down.", "Revelation 12:7–9"],
      ["Monte Gargano, c. 490", "Appears in a mountain cave in southern Italy, which becomes one of the great shrines of Europe.", "Tradition"],
      ["Rome, 590", "As plague ravages the city, Pope Gregory’s procession sees him sheathe his sword above Hadrian’s tomb — ever since called Castel Sant’Angelo.", "Tradition"],
      ["1886", "Pope Leo XIII adds a prayer to Saint Michael to the prayers said after every Low Mass.", ""]
    ],
    quote: { t: "Saint Michael the Archangel, defend us in battle; be our protection against the wickedness and snares of the devil.", by: "Pope Leo XIII", r: "Prayer to Saint Michael, 1886" },
    end: { how: "He has no ending", where: "Before the throne of God", when: "Still at his post", source: "Scripture", text: "Angels do not die, so Michael’s chapter has no last page. Scripture shows him at the end of all things, still standing up for God’s people. The Church has honoured him since the earliest centuries, and in the old tradition he is the angel who comes to the dying, to bring their souls safely home." },
    lessons: [
      { t: "Humility is the real strength", d: "Michael’s whole name points away from himself: Who is like God? The proud angel said “I.” Michael said “God.” Every victory over evil starts there." },
      { t: "Fight evil without becoming bitter", d: "Even facing the devil, he would not trade insults: “The Lord rebuke thee.” We can stand firmly against what is wrong without hatred in our mouths." },
      { t: "You are not fighting alone", d: "Scripture says the battle against evil is real — and that heaven is not neutral in it. When temptation is strong, call for help. It comes." }
    ],
    practice: "Pray the prayer to Saint Michael tonight before you sleep — for yourself, and for someone you know who is struggling against something stronger than them."
  },
  {
    id: "anne", era: "first", year: 1, color: "#c58fd8", icon: "nest",
    name: "Anne", full: "Saint Anne", title: "The Grandmother of Jesus",
    lived: "1st century BC", from: "Jerusalem, by tradition", feast: "26 July, with Joachim", patron: "Mothers, grandparents, and couples longing for a child",
    portrait: "s-anne", pos: "28% 22%", scenes: ["s-anne-leonardo", "s-anne-education", "t-anne"],
    story: [
      "Scripture never names Mary’s parents. Their names come from a very early Christian writing, the Protoevangelium of James, from the second century — and the Church has loved them ever since. Anne and her husband Joachim, it says, were devout and generous, giving a share of everything they had to the Temple and the poor. But they had no child, and in their world that was a grief people whispered about. When Joachim brought his offering to the Temple, he was turned away for being childless.",
      "Joachim went out into the wilderness to fast and pray for forty days. Anne, at home, mourned. Then she went into her garden, sat beneath a laurel tree, and saw a sparrows’ nest full of young. She wept: even the birds are fruitful before you, O Lord. An angel came to her, and to Joachim in the desert, with the same message: you will have a child, and she will be spoken of in all the world. The two ran to meet each other at the gate of Jerusalem. Their daughter was Mary. Anne promised her to God — and, in a scene painters have loved for centuries, taught her to read the Scriptures."
    ],
    moments: [
      ["The Temple", "Joachim’s offering is refused because the couple have no child. He goes into the desert to fast and pray.", "Tradition"],
      ["The laurel tree", "Anne, grieving in her garden, sees a nest of young sparrows and pours out her heart to God. An angel promises her a child.", "Tradition"],
      ["The gate", "Anne and Joachim, each told by an angel, run to meet each other at the gate of Jerusalem.", "Tradition"],
      ["Mary", "Their daughter is born, and Anne keeps her promise to give her to God.", "Tradition"],
      ["Age three", "They bring the little girl to the Temple, where she dances on the altar steps.", "Tradition"]
    ],
    quote: { t: "For this child I prayed; and the LORD hath given me my petition which I asked of him.", by: "Scripture", r: "1 Samuel 1:27" },
    end: { how: "Died in peace, by tradition", where: "Unknown; tradition names Jerusalem", when: "Date unknown", source: "Tradition", text: "Nothing certain is known of her death. Tradition pictures her, like Joseph, dying with Jesus and Mary beside her. Her name, Hannah in Hebrew, means “grace.” Churches in her honour rose in Constantinople in the sixth century, and in Jerusalem over the house where Mary was said to be born, beside the Pool of Bethesda. In Sri Lanka, pilgrims in their tens of thousands keep her feast on the shore at Talawila." },
    lessons: [
      { t: "Bring God your deepest ache", d: "Anne did not pretend she was fine. She took her grief into the garden and told God exactly how it felt. Honest prayer is still prayer." },
      { t: "God’s timing is not ours", d: "The answer came late, and it was greater than anything she had asked for: not only a child, but the mother of the Saviour." },
      { t: "Faith is handed down", d: "Every Christian learned to pray from someone. Anne taught Mary, and Mary taught Jesus. Grandparents and parents shape saints." }
    ],
    practice: "Call or visit a grandparent or an elderly person this week. Thank them for something they taught you — or ask them how they learned to pray."
  },
  {
    id: "joseph", era: "first", year: 20, color: "#e9c46a", icon: "lily",
    name: "Joseph", full: "Saint Joseph", title: "The Silent Guardian",
    lived: "1st century", from: "Nazareth, of the house of David", feast: "19 March · 1 May", patron: "The whole Church, fathers, workers, and a happy death",
    portrait: "s-joseph", pos: "38% 32%", scenes: ["t-joseph", "t-lodging", "s-joseph-reni"],
    story: [
      "Scripture never records a single word from Joseph. It records what he did. A carpenter of Nazareth, descended from King David, he was engaged to Mary when he learned she was with child — and not by him. He was a just man, and he decided to end the engagement quietly, to spare her public shame.",
      "Then an angel spoke to him in a dream, and Joseph rose and did exactly what he was told. Four times God spoke to him in dreams, and four times he obeyed at once: taking Mary as his wife, fleeing by night to Egypt, coming home, settling in Nazareth. He gave Jesus his name, his trade and his home. The Son of God learned to work wood with Joseph’s hands guiding His."
    ],
    moments: [
      ["Before the birth", "Learns Mary is with child and resolves to protect her quietly — then obeys the angel and takes her home.", "Matthew 1:18–24"],
      ["Bethlehem", "Finds no room at the inn, and keeps watch over the newborn Child.", "Luke 2:4–7"],
      ["By night", "Warned in a dream, takes the Child and His mother and flees to Egypt before Herod’s soldiers come.", "Matthew 2:13–15"],
      ["The Temple", "Searches three days for the twelve-year-old Jesus: “thy father and I have sought thee sorrowing.”", "Luke 2:41–51"],
      ["Nazareth", "Teaches Jesus his trade. The town would later call Him “the carpenter’s son.”", "Matthew 13:55"]
    ],
    quote: { t: "Then Joseph being raised from sleep did as the angel of the Lord had bidden him.", by: "Scripture", r: "Matthew 1:24" },
    end: { how: "Died before Jesus began His ministry", where: "Nazareth, by tradition", when: "Before c. AD 28", source: "Tradition", text: "Joseph is never mentioned after the finding in the Temple, and from the cross Jesus entrusts His mother to John — so Joseph had almost certainly died by then. Tradition pictures him dying in the arms of Jesus and Mary, which is why he is the patron of a happy death." },
    lessons: [
      { t: "Let your life do the talking", d: "Joseph is remembered for what he did, not for anything he said. Faithfulness rarely makes noise. It shows up, keeps its promises and does the next right thing." },
      { t: "Protect people’s dignity", d: "Before any angel spoke, Joseph had already chosen mercy: he would not shame Mary, even when he thought she had wronged him. Justice and kindness are not opposites." },
      { t: "Obey quickly, even in the dark", d: "Joseph was never given the whole plan — only the next step, usually at night. He got up and went. God most often guides us one step at a time." }
    ],
    practice: "Do one hidden act of service today that no one will thank you for — and tell no one."
  },
  {
    id: "agatha", era: "first", year: 251, color: "#ff9ec4", icon: "etna",
    name: "Agatha", full: "Saint Agatha", title: "Not for Sale",
    lived: "Died c. AD 251", from: "Catania, Sicily", feast: "5 February", patron: "Sicily, nurses, women with breast cancer, and protection from fire",
    portrait: "s-agatha", pos: "38% 18%", scenes: ["s-agatha-zurbaran"],
    story: [
      "Agatha was a young Christian woman of a noble family in Sicily, who had promised her life to God. Her name, in Greek, means “good.” During the persecution of the emperor Decius, the Roman governor Quintianus wanted her — for her beauty and for her fortune. When she refused him, he used the law against Christians to break her. He had her handed over for a month to a woman who kept a brothel, hoping to destroy her will. She came out unchanged.",
      "Then he had her tortured, and ordered that her breasts be cut away — which is why painters show her carrying them on a plate, and why women facing breast cancer ask her prayers today. The old account says that in the night Saint Peter came to her in prison and healed her wounds. Quintianus had her rolled on burning coals, and she died in her cell, praying, around the year 251. A year later Mount Etna erupted, and the people of Catania carried her veil from her tomb against the lava — which, they said, stopped."
    ],
    moments: [
      ["Catania", "Promises her life to God, and refuses the governor Quintianus.", "Tradition"],
      ["Arrested", "Under the persecution of Decius, she is handed over to a brothel to break her will. She stays steadfast.", "Tradition"],
      ["Prison", "Mutilated on the governor’s orders; in the night, Saint Peter comes and heals her.", "Tradition"],
      ["The coals", "Rolled on burning coals, she dies in her cell, praying.", "Tradition"],
      ["252", "When Etna erupts, the people carry her veil against the lava, and the city is spared.", "Tradition"]
    ],
    quote: { t: "Jesus Christ, Lord of all, you see my heart, you know my desires. Possess all that I am. I am your sheep: make me worthy to overcome the devil.", by: "Agatha", r: "Her prayer, from the early accounts" },
    end: { how: "Died in prison after torture", where: "Catania, Sicily", when: "5 February, c. AD 251", source: "Tradition", text: "Within a few centuries her name was in the oldest prayer of the Mass, the Roman Canon, where it is still read beside Lucy, Agnes and Cecilia. Every February Catania carries her relics through its streets for three days, in one of the largest religious processions in the world." },
    lessons: [
      { t: "Your dignity is not for sale", d: "Agatha was offered safety, wealth and a powerful husband — at the price of her faith and her body. She said no. No one has the right to own you." },
      { t: "What others do to you does not define you", d: "They tried to degrade her, and could not touch who she was. Wounds done to us, even shameful ones, are not who we are. God sees the whole person." },
      { t: "Pray for the sick", d: "For centuries women facing illness have asked her prayers. Suffering that once seemed hidden can be carried together." }
    ],
    practice: "Pray today for a woman you know who is ill or waiting for frightening news — and send her a message to let her know she is not alone."
  },
  {
    id: "sebastian", era: "first", year: 288, color: "#ff6f61", icon: "arrows",
    name: "Sebastian", full: "Saint Sebastian", title: "The Soldier Who Stood Twice",
    lived: "Died c. AD 288", from: "Gaul or Milan; served in Rome", feast: "20 January", patron: "Soldiers, athletes, and the sick in times of plague",
    portrait: "s-sebastian", pos: "50% 16%", endPos: "62% 50%", endImg: "s-sebastian-irene", scenes: [],
    story: [
      "Sebastian was an officer of the imperial guard in Rome under the emperor Diocletian, the fiercest persecutor the early Church ever faced. He kept his faith hidden — not out of fear, the story says, but so that he could stay close to the Christians in prison and strengthen them before they died.",
      "When he was found out, Diocletian felt betrayed. He had Sebastian tied to a stake, shot with arrows by his own soldiers, and left for dead. But a Christian widow named Irene came at night to take his body for burial and found him still breathing. She nursed him back to health. Instead of fleeing Rome, Sebastian went and stood where the emperor would pass, and told him to his face to stop killing Christians. This time Diocletian had him beaten to death."
    ],
    moments: [
      ["Rome", "Serves in the emperor’s guard while secretly strengthening Christian prisoners.", "Tradition"],
      ["The arrows", "Discovered, he is shot with arrows and left for dead.", "Tradition"],
      ["Irene", "A widow comes to bury him, finds him alive, and nurses him back to health.", "Tradition"],
      ["The second stand", "Healed, he confronts the emperor in public instead of hiding.", "Tradition"]
    ],
    quote: { t: "Take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.", by: "Scripture", r: "Ephesians 6:13" },
    end: { how: "Beaten to death", where: "Rome", when: "c. AD 288, under Diocletian", source: "Tradition", text: "His body was thrown into the great sewer of Rome, then recovered by Christians and buried in the catacombs on the Appian Way, where the Basilica of San Sebastiano stands today. Artists have painted the arrows for centuries; it is easy to forget that he survived them — and went back." },
    lessons: [
      { t: "Be faithful where you are posted", d: "Sebastian did not leave the army to be holy; he was holy in the army. Your office, classroom or shop may be exactly where your faith is needed most." },
      { t: "Being knocked down is not the end", d: "The arrows did not finish him. Whatever has wounded you, God can raise you up again — often through someone like Irene." },
      { t: "Courage has a second act", d: "Surviving once is brave. Walking back to face what hurt you, for the sake of others, is braver still." }
    ],
    practice: "Find one person who is being worn down — at work, at school or at home — and stand with them today."
  },
  {
    id: "catherinealex", era: "first", year: 305, color: "#d98cff", icon: "wheel",
    name: "Catherine of Alexandria", full: "Saint Catherine of Alexandria", title: "The Philosopher Martyr",
    lived: "Died c. AD 305", from: "Alexandria, Egypt", feast: "25 November", patron: "Students, philosophers, librarians and young women",
    portrait: "s-catherine-alex", pos: "52% 18%", scenes: ["s-catherine-alex-raphael"],
    story: [
      "Catherine, the story goes, was a young noblewoman of Alexandria in Egypt — the greatest city of learning in the ancient world — brilliant, beautiful and fiercely well read. She became a Christian as a teenager, and gave her whole heart to Christ. When the emperor Maxentius came to Alexandria and ordered everyone to sacrifice to the gods, Catherine, about eighteen, went to the emperor in person and told him he was wrong.",
      "Unable to answer her, the emperor summoned fifty of his best philosophers to debate her. She did not lose. By the end, the story says, all fifty had become Christians — and were put to death for it. The emperor’s wife and the captain of his guard were won over too. Maxentius had a machine of spiked wheels built to tear her apart; when she touched it, it shattered. In the end she was beheaded. Monks later said that angels carried her body to Mount Sinai, where the monastery that bears her name still stands."
    ],
    moments: [
      ["Alexandria", "A young scholar of the great city, she is baptised and gives her life to Christ.", "Tradition"],
      ["Before the emperor", "Confronts Maxentius over the persecution of Christians.", "Tradition"],
      ["Fifty philosophers", "Debates the empire’s wisest men — and they are converted.", "Tradition"],
      ["The wheel", "Bound to a spiked wheel, which shatters at her touch.", "Tradition"],
      ["Sinai", "Her relics are honoured at the monastery at the foot of Mount Sinai.", "Tradition"]
    ],
    quote: { t: "For I will give you a mouth and wisdom, which all your adversaries shall not be able to gainsay nor resist.", by: "Scripture", r: "Luke 21:15" },
    end: { how: "Beheaded", where: "Alexandria, Egypt", when: "c. AD 305", source: "Tradition", text: "Her story comes from accounts written centuries later, and historians are unsure how much of it is fact; for that reason the Church took her feast out of the universal calendar in 1969 — and, so loved had she remained, restored it in 2002. Joan of Arc said Catherine was one of the voices who spoke to her. The spinning firework called a Catherine wheel is named after the wheel that broke." },
    lessons: [
      { t: "Love God with your mind", d: "Catherine did not leave her intelligence at the church door. Study, questions and good arguments can all be offered to God." },
      { t: "Speak up for the persecuted", d: "She did not hide in her library. She walked into the emperor’s presence on behalf of Christians who were being killed." },
      { t: "Wisdom is a gift — ask for it", d: "“I will give you a mouth and wisdom.” Before a hard conversation, an exam or an interview, ask the Holy Spirit for the right words." }
    ],
    practice: "Before your next exam, interview or difficult conversation, pray: “Lord, give me a mouth and wisdom.” Then go in peace."
  },
  {
    id: "helena", era: "first", year: 330, color: "#f2b36d", icon: "crosscrown",
    name: "Helena", full: "Saint Helena", title: "The Empress Who Found the Cross",
    lived: "c. 248 – c. 330", from: "Drepanum, Bithynia (in today’s Turkey)", feast: "18 August", patron: "Converts, archaeologists, and those in difficult marriages",
    portrait: "s-helena", pos: "68% 32%", scenes: ["s-helena-cima"],
    story: [
      "Helena was born to a humble family — Saint Ambrose called her a stable-girl. She caught the eye of a Roman officer named Constantius, and bore him a son, Constantine. When Constantius rose towards the throne, he put her aside to marry the emperor’s stepdaughter, a more useful match. Helena lived for years in the shadows, a discarded woman.",
      "Then her son became emperor. In 312 Constantine won the Battle of the Milvian Bridge under the sign of the cross, and the next year he made it legal to be a Christian across the empire. Helena, too, became a Christian — late in life. Honoured now as empress, she spent her wealth on the poor, freed prisoners, and in her late seventies made a pilgrimage to the Holy Land. There she had churches built at Bethlehem and on the Mount of Olives, and, tradition says, she searched for the cross of Christ — and found it near Calvary, where the Church of the Holy Sepulchre was built."
    ],
    moments: [
      ["Youth", "A stable-girl, by Ambrose’s account, who marries a Roman officer and bears a son, Constantine.", ""],
      ["c. 289", "Set aside by her husband so that he can make a more useful marriage.", ""],
      ["312–313", "Her son wins at the Milvian Bridge under the sign of the cross, and makes Christianity legal.", ""],
      ["Later life", "Becomes a Christian; gives generously to the poor and to prisoners.", ""],
      ["c. 326", "Pilgrimage to the Holy Land; churches rise at Bethlehem and on the Mount of Olives.", ""],
      ["Jerusalem", "Finds the cross of Christ near Calvary.", "Tradition"]
    ],
    quote: { t: "But God forbid that I should glory, save in the cross of our Lord Jesus Christ.", by: "Scripture", r: "Galatians 6:14" },
    end: { how: "Died in peace, with her son beside her", where: "Probably Nicomedia (in today’s Turkey)", when: "c. 330, about 80 years old", source: "History", text: "Eusebius, who knew Constantine, wrote that she died with her son at her side. Her body was carried to Rome, and her great porphyry coffin is in the Vatican Museums. Pieces of the wood she found were sent across the Christian world; ever since, the Church has kept 14 September as the feast of the Holy Cross." },
    lessons: [
      { t: "Rejection is not the end of your story", d: "Helena was set aside by the man she loved, for political gain. Decades later she was one of the most honoured women in the world — and, far more, a saint." },
      { t: "It is never too late to begin", d: "She became a Christian late in life, and did her greatest work in her seventies. God has not finished with anyone yet." },
      { t: "Look for the cross", d: "Helena went looking for the wood of the cross. We find it closer to home: in suffering offered with love, and in the people around us who carry heavy things." }
    ],
    practice: "Make the sign of the cross slowly each time you pray today — and offer Christ one heavy thing you are carrying."
  },
  {
    id: "nicholas", era: "first", year: 343, color: "#e6455a", icon: "coins",
    name: "Nicholas", full: "Saint Nicholas of Myra", title: "The Secret Giver",
    lived: "c. 270 – 343", from: "Patara, Lycia (in today’s Turkey)", feast: "6 December", patron: "Children, sailors, the poor and the falsely accused",
    portrait: "s-nicholas", pos: "50% 18%", scenes: ["s-nicholas-dowry"],
    story: [
      "Nicholas was born to wealthy Christian parents in what is now Turkey, and was orphaned young. He took Jesus at His word — “sell that ye have, and give alms” — and set about giving his inheritance away, quietly.",
      "The best-loved story: a man in his town had lost everything and had three daughters with no dowry, which meant they could not marry and might be sold. Nicholas came at night and threw a bag of gold through the window, then slipped away. He did it a second time, then a third — and the father, waiting up, caught him. Nicholas begged him to tell no one. He became bishop of Myra, was imprisoned for his faith under Diocletian, and was remembered as a fierce defender of the poor and the wrongly condemned."
    ],
    moments: [
      ["Youth", "Orphaned, he gives away his inheritance to people in need.", "Tradition"],
      ["Three nights", "Throws gold through a poor man’s window so that his daughters need not be sold.", "Tradition"],
      ["Myra", "Chosen as bishop; imprisoned for the faith, then freed.", "Tradition"],
      ["Justice", "Stops the execution of three innocent men by catching hold of the executioner’s sword.", "Tradition"]
    ],
    quote: { t: "When thou doest alms, let not thy left hand know what thy right hand doeth: that thine alms may be in secret.", by: "Scripture", r: "Matthew 6:3–4" },
    end: { how: "Died in peace", where: "Myra, Lycia", when: "6 December, c. AD 343", source: "Tradition", text: "In 1087 sailors carried his relics to Bari in Italy, where they rest today. In the Netherlands he became Sinterklaas, who leaves gifts in children’s shoes; in America, Sinterklaas became Santa Claus. Behind the red suit is a bishop who gave in secret." },
    lessons: [
      { t: "Give where it can’t be seen", d: "Nicholas ran so that he would not be thanked. Generosity that needs an audience is still a kind of buying." },
      { t: "Give to protect someone’s dignity", d: "The gold did more than feed a family — it saved three young women from being sold. Ask not only what people need, but what they are afraid of." },
      { t: "Gentle and brave belong together", d: "The man who slipped gifts through windows also seized an executioner’s sword. Kindness is not weakness." }
    ],
    practice: "Give something away anonymously this week — money, a meal, someone’s bill — and let no one find out."
  },
  {
    id: "monica", era: "first", year: 387, color: "#7fd4c1", icon: "tear",
    name: "Monica", full: "Saint Monica", title: "The Mother Who Never Gave Up",
    lived: "331 – 387", from: "Thagaste, North Africa (in today’s Algeria)", feast: "27 August — the day before her son’s", patron: "Mothers, wives in hard marriages, and parents of children who have left the faith",
    portrait: "s-monica-tristan", pos: "45% 25%", scenes: ["s-monica-gozzoli", "s-monica"],
    story: [
      "Monica was a Christian girl of North Africa, married young to Patricius, a pagan official with a quick temper and a wandering eye, and she shared a house with a mother-in-law who disliked her. Other wives in the town came to her with bruised faces; Monica, Augustine later wrote, had none, because she had learned to let her husband’s anger pass in silence and to speak to him once he was calm. Over the years her patience won over her mother-in-law — and in the end her husband, who was baptised shortly before he died.",
      "Her eldest son broke her heart. Augustine was brilliant and restless; he abandoned the faith, lived with a woman he did not marry, and joined a sect. For years Monica wept and prayed for him. When she begged a bishop to talk sense into him, he answered, “Go now; it is not possible that the son of these tears should perish.” When Augustine sailed secretly for Rome to escape her, she followed him over the sea, to Rome and then to Milan. There, after years of tears, she saw him baptised at Easter 387."
    ],
    moments: [
      ["Thagaste", "Married to Patricius, a hot-tempered pagan; she wins him and his mother over by patience.", "Confessions IX.9"],
      ["c. 371", "Patricius is baptised before he dies; Monica is left a widow with three children.", ""],
      ["Years of tears", "Augustine leaves the faith. A bishop tells her: “The son of these tears shall not perish.”", "Confessions III.12"],
      ["383", "Augustine sails for Rome by night, leaving her praying on the shore. She follows him to Italy.", "Confessions V.8"],
      ["Easter 387", "Sees her son baptised by Ambrose in Milan.", "Confessions IX.6"],
      ["Ostia", "At a window overlooking a garden, mother and son speak together of heaven.", "Confessions IX.10"]
    ],
    quote: { t: "Nothing is far from God, and I need not fear that He will not know where to find me at the end of the world, to raise me up.", by: "Monica", r: "Confessions IX.11" },
    end: { how: "Died of a fever, at peace", where: "Ostia, the port of Rome", when: "387, aged 56", source: "History", text: "Waiting for a ship home to Africa, she fell ill. She told her sons not to worry about where she would be buried: “Lay this body anywhere. Only remember me at the altar of the Lord, wherever you are.” Augustine, who had made her weep for so long, wept for her, and wrote her story into his Confessions. In 1945 two boys digging a hole in Ostia uncovered a piece of her original gravestone. Her relics rest in Rome, in the church of Sant’Agostino." },
    lessons: [
      { t: "Never stop praying for your children", d: "Years passed without any sign of change. Monica kept praying anyway, and lived to see her son baptised. No prayer for someone you love is wasted." },
      { t: "Patience can change a home", d: "She did not win over her difficult husband and mother-in-law with arguments. She won them with gentleness — and by choosing the right moment to speak." },
      { t: "Stay close, but don’t force", d: "She could not make Augustine believe. She stayed near him, loved him, and let God do what only God can do." }
    ],
    practice: "Name the person you most want to come closer to God. Pray for them by name every day this week — and do one kind thing for them without mentioning faith at all."
  },
  {
    id: "augustine", era: "first", year: 430, color: "#b48cff", icon: "heart",
    name: "Augustine", full: "Saint Augustine of Hippo", title: "The Restless Heart",
    lived: "354 – 430", from: "Thagaste, North Africa (in today’s Algeria)", feast: "28 August · Monica, 27 August", patron: "Theologians, and everyone who is searching",
    portrait: "s-augustine", pos: "50% 30%", scenes: ["s-monica", "s-augustine-conv"],
    story: [
      "Augustine was brilliant, ambitious and restless. His mother Monica was a devout Christian; he was not. As a student in Carthage he chased pleasure and success, lived for fifteen years with a woman he never married, fathered a son, and joined a fashionable sect. He later confessed that he used to pray, “Give me chastity — but not yet.”",
      "Monica never stopped praying. She wept for him so often that a bishop finally told her, “It is not possible that the son of these tears should perish.” She followed him across the sea to Italy. In Milan, Augustine heard Bishop Ambrose preach and could not shake it off. One day in a garden, in anguish, he heard a child’s voice chanting, “Take and read, take and read.” He opened Paul’s letter to the Romans and read: “Put ye on the Lord Jesus Christ.” He was baptised at Easter 387. Monica died a few months later, at peace. He became a bishop and one of the greatest minds the Church has known."
    ],
    moments: [
      ["Carthage", "Chases pleasure, success and philosophy after philosophy — and is never satisfied.", "Confessions III"],
      ["Monica’s tears", "His mother prays for him for years; a bishop promises her he will not be lost.", "Confessions III.12"],
      ["Milan, 386", "In a garden he hears “Take and read,” opens Romans 13 and surrenders.", "Confessions VIII.12"],
      ["Easter 387", "Baptised by Ambrose, together with his son Adeodatus.", "Confessions IX.6"],
      ["Hippo", "Made bishop; writes the Confessions and The City of God.", ""]
    ],
    quote: { t: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", by: "Augustine", r: "Confessions I.1" },
    end: { how: "Died of fever, praying the psalms", where: "Hippo, North Africa", when: "28 August 430", source: "History", text: "He died while the Vandals besieged his city, with the penitential psalms written on the wall beside his bed so he could read them as he lay dying. His mother had asked only one thing before her own death: “Remember me at the altar of the Lord, wherever you may be.”" },
    lessons: [
      { t: "It is never too late", d: "Augustine was thirty-two, with a past he was ashamed of, when he turned to God. Grace is not limited by how far you have wandered." },
      { t: "Never stop praying for someone", d: "Monica prayed for years without seeing a change. Her tears were not wasted. Keep praying for the one you love who is far from God." },
      { t: "Your restlessness is a signpost", d: "The emptiness that pleasure, money and success cannot fill is not a flaw in you. It is a hunger for God." }
    ],
    practice: "Write the name of someone far from God on a slip of paper, keep it in your wallet, and pray for them each time you see it."
  },
  {
    id: "francis", era: "middle", year: 1226, color: "#93d16b", icon: "tau",
    name: "Francis", full: "Saint Francis of Assisi", title: "The Little Poor Man",
    lived: "1181 – 1226", from: "Assisi, Italy", feast: "4 October", patron: "Italy, animals and the natural world, and peace",
    portrait: "s-francis", scenes: ["s-francis-renounce", "s-francis-birds", "s-francis-bellini"],
    story: [
      "Francis was the son of a rich cloth merchant — the life of every party in Assisi, dreaming of glory as a knight. War gave him a year in a prison cell instead, and a long illness after it. Riding out one day, he met a leper. He had always been disgusted by lepers; this time he got down from his horse and kissed the man’s hand.",
      "Praying in the ruined chapel of San Damiano, he heard the crucifix speak: “Francis, go and repair my house, which, as you see, is falling into ruin.” He took it literally, sold his father’s cloth to pay for stones, and was dragged before the bishop. There, in the square, he took off every piece of clothing he wore and handed it back. “Until now I have called you my father on earth. From now on I can say: Our Father, who art in heaven.” He lived the rest of his life with nothing — and with a joy that drew thousands after him."
    ],
    moments: [
      ["1205", "Kisses a leper; hears the crucifix of San Damiano say, “Repair my house.”", ""],
      ["1206", "Gives back even his clothes to his father before the bishop of Assisi.", ""],
      ["1209", "With his first brothers, receives the Pope’s blessing on a life of poverty.", ""],
      ["1219", "Crosses the battle lines of the Crusade to speak with the Sultan of Egypt in peace.", ""],
      ["1223", "Makes the first Christmas crib, at Greccio.", ""],
      ["1224", "Receives the wounds of Christ in his hands, feet and side on Mount La Verna.", ""]
    ],
    quote: { t: "When I was in sin, it seemed too bitter to me to see lepers. And the Lord himself led me among them, and I showed mercy to them. And when I left them, what had seemed bitter to me was turned into sweetness of soul and body.", by: "Francis", r: "His Testament, 1226" },
    end: { how: "Died singing, lying on the bare earth", where: "The Portiuncula, below Assisi", when: "3 October 1226, aged 44", source: "History", text: "Nearly blind and in great pain, he asked to be laid on the bare ground. He had added a last verse to his Canticle of the Creatures — “Praised be you, my Lord, through our Sister Bodily Death” — and he died while the brothers sang it. He was declared a saint two years later. In 2013, for the first time, a pope took his name." },
    lessons: [
      { t: "Hold things loosely", d: "Francis found that the less he owned, the freer he was to love. What we possess can quietly begin to possess us." },
      { t: "Go towards what you fear", d: "The leper he dreaded became the beginning of his joy. Sometimes God is waiting in the very place we avoid." },
      { t: "All creation is family", d: "Brother Sun, Sister Moon, Sister Water: Francis saw the world as the gift of one Father, to be cared for, not used up." }
    ],
    practice: "Give away one thing you own but do not need — and spend five minutes outdoors today thanking God for something He made."
  },
  {
    id: "anthony", era: "middle", year: 1231, color: "#f0a35e", icon: "book",
    name: "Anthony", full: "Saint Anthony of Padua", title: "The Hidden Preacher",
    lived: "1195 – 1231", from: "Lisbon, Portugal", feast: "13 June", patron: "Lost things, the poor and travellers",
    portrait: "s-anthony", pos: "38% 88%", scenes: ["s-anthony-fish"],
    story: [
      "Fernando was born in Lisbon to a noble family and became a learned young priest. In 1220 the bodies of five Franciscan friars, martyred in Morocco, were carried through his city. Moved, he joined the Franciscans, took the name Anthony, and sailed for Morocco to give his own life. Instead he fell gravely ill, and on the voyage home a storm drove his ship to Sicily.",
      "Unknown and unwell, he was sent to a small hermitage in Italy, where he prayed and washed dishes. No one guessed what he knew. Then, at an ordination where no one had prepared to preach, his superior told him to say something. He spoke — and the room was stunned. From then on crowds of thousands followed him through Italy and France; shops closed when he came to town. Francis himself asked him to teach the brothers. When the people of Rimini refused to listen, the story goes, he went down to the shore and preached to the fish — and they lifted their heads from the water to hear."
    ],
    moments: [
      ["1220", "Moved by five martyred friars, becomes a Franciscan and sets out for Morocco.", ""],
      ["1221", "Shipwrecked in Sicily; sent to a hermitage, unknown.", ""],
      ["1222", "Ordered to preach without preparation — and his gift is discovered.", ""],
      ["Rimini", "Ignored by the people, he preaches to the fish on the shore.", "Tradition"],
      ["The psalter", "A novice runs off with his treasured book of psalms; Anthony prays, and the young man brings it back — which is why he is the saint of lost things.", "Tradition"]
    ],
    quote: { t: "Actions speak louder than words; let your words teach and your actions speak.", by: "Anthony", r: "From his sermons" },
    end: { how: "Died of exhaustion and illness", where: "Arcella, near Padua", when: "13 June 1231, aged 35", source: "History", text: "Worn out at thirty-five, he asked to be taken to Padua. His last words were, “I see my Lord.” As the news spread, children ran through the streets crying, “The saint is dead!” He was declared a saint less than a year later — one of the fastest canonisations in history." },
    lessons: [
      { t: "Be faithful in the hidden years", d: "Anthony washed dishes in obscurity while carrying a gift no one knew about. God sees the kitchen years. Nothing done faithfully is wasted." },
      { t: "When plans fail, God redirects", d: "He set out to die a martyr in Africa and became a preacher in Italy. A shipwreck can be a new beginning." },
      { t: "Live what you say", d: "His sermons moved crowds because his life matched them. The best argument for faith is a life that looks like Jesus." }
    ],
    practice: "The next time you lose something, ask St Anthony’s help — and while you search, pray for someone who has lost their way, their faith or their hope."
  },
  {
    id: "clare", era: "middle", year: 1253, color: "#ffe08a", icon: "monstrance",
    name: "Clare", full: "Saint Clare of Assisi", title: "The Light of Assisi",
    lived: "1194 – 1253", from: "Assisi, Italy", feast: "11 August", patron: "Television, embroiderers, and those with eye disease",
    portrait: "s-clare", pos: "48% 38%", scenes: ["s-clare-martini"],
    story: [
      "Clare — her name means “bright” — was the eldest daughter of a noble family of Assisi, some twelve years younger than Francis. When she heard him preach, she knew she wanted the same poverty and the same joy. On the night of Palm Sunday 1212, at eighteen, she slipped out of her family’s house and ran down to the little chapel of the Portiuncula, where Francis and his brothers met her with torches, and there he cut off her long hair. Her family came to drag her home; she clung to the altar and showed them her shorn head. They left without her.",
      "Francis settled her at San Damiano — the very church he had rebuilt with his own hands. Her sister Agnes soon joined her, then, years later, her mother, and many others. For forty years Clare led them in a life of prayer, work and complete poverty: they owned nothing, not even land, and lived on what was given. She argued with popes for the right to stay that poor, and won it two days before she died. When soldiers in the emperor’s pay scaled the convent walls in 1240, Clare, too ill to stand, had herself carried to the door, holding up the Blessed Sacrament, and prayed. The soldiers fled."
    ],
    moments: [
      ["Palm Sunday 1212", "Slips away from home by night; at the Portiuncula, Francis cuts her hair and she gives herself to God.", ""],
      ["1212", "Clings to the altar when her family comes to take her back.", ""],
      ["San Damiano", "Settles in the church Francis rebuilt; her sister Agnes, and later her mother, join her.", ""],
      ["1240", "Holds up the Blessed Sacrament as soldiers storm the convent walls — and they flee.", ""],
      ["Christmas 1252", "Too ill to go to Mass, she sees and hears it on the wall of her room — the reason she is the patron of television.", ""],
      ["9 August 1253", "The Pope approves her rule of complete poverty, two days before she dies.", ""]
    ],
    quote: { t: "Go forth in peace, for you have followed the good road. Go forth without fear, for He who created you has made you holy, has always protected you, and loves you as a mother.", by: "Clare", r: "Her last words, 1253" },
    end: { how: "Died after many years of illness", where: "San Damiano, Assisi", when: "11 August 1253, aged 59", source: "History", text: "She had been ill for almost thirty years. The Pope himself came to her bedside, and she died holding the document that approved her way of life, which she kissed again and again. She was declared a saint just two years later. Her sisters, the Poor Clares, still pray in hidden convents all over the world." },
    lessons: [
      { t: "Choose the better part", d: "Clare left wealth, comfort and a good marriage for a hidden life of prayer. Joy is not found in having more, but in belonging wholly to God." },
      { t: "Courage can be quiet", d: "She could not stand, and she had no weapon. She held up Christ, and prayed. Your weakness is not the end of your strength." },
      { t: "Friendship can lead to God", d: "Francis and Clare helped each other become saints. Choose friends who make you want to be better." }
    ],
    practice: "Visit a church this week and spend ten quiet minutes before the tabernacle. Bring Jesus whatever frightens you."
  },
  {
    id: "aquinas", era: "middle", year: 1274, color: "#6fa3ff", icon: "sun",
    name: "Thomas Aquinas", full: "Saint Thomas Aquinas", title: "The Dumb Ox",
    lived: "1225 – 1274", from: "Roccasecca, near Naples, Italy", feast: "28 January", patron: "Students, teachers and universities",
    portrait: "s-aquinas", scenes: ["s-aquinas-zurb"],
    story: [
      "Thomas was born into a powerful noble family who planned for him to become abbot of a rich monastery. Instead, at nineteen, he joined the Dominicans — a new order of poor, begging preachers. His family was furious. His brothers seized him on the road and locked him in the family castle for more than a year. He spent the time praying and studying, and would not change his mind. In the end they let him go.",
      "He was big, quiet and slow-moving, and his fellow students nicknamed him “the Dumb Ox.” His teacher, Albert the Great, told them: “You call him a dumb ox, but one day his bellowing will be heard throughout the world.” Thomas went on to write the Summa Theologiae, showing that faith and reason are friends, not enemies. He also wrote the hymns for Corpus Christi — the Tantum Ergo and the Panis Angelicus, still sung at Benediction everywhere."
    ],
    moments: [
      ["1244", "Joins the Dominicans against his family’s will, and is held captive by his brothers for a year.", ""],
      ["Cologne", "Mocked as “the Dumb Ox”; his teacher Albert foresees his greatness.", ""],
      ["1264", "Writes the hymns for the feast of Corpus Christi, including the Tantum Ergo.", ""],
      ["1265–73", "Writes the Summa Theologiae, his vast masterpiece.", ""],
      ["December 1273", "After an experience at Mass, puts down his pen for good.", ""]
    ],
    quote: { t: "All that I have written seems to me like straw compared to what has now been revealed to me.", by: "Thomas Aquinas", r: "To his secretary Reginald, 1273" },
    end: { how: "Fell ill on a journey and died", where: "Fossanova Abbey, Italy", when: "7 March 1274, aged 49", source: "History", text: "Summoned to a Church council, he set out although he was unwell, and grew too sick to go on. Cistercian monks took him in at Fossanova, where he died. The greatest theologian of his age left his life’s work unfinished — on purpose." },
    lessons: [
      { t: "Faith is not afraid of questions", d: "Thomas looked for the hardest objections he could find and answered them honestly. Thinking deeply is a way of loving God with all your mind." },
      { t: "Stand firm in your calling", d: "Locked in a tower by his own brothers, he stayed gentle and did not give in. Family pressure is real; so is God’s call." },
      { t: "Knowing God is more than knowing about Him", d: "After one glimpse of God, he called his masterpiece straw. Study is a road to prayer, not a substitute for it." }
    ],
    practice: "Bring one honest question about your faith to God today — and spend ten minutes looking for its answer in Scripture."
  },
  {
    id: "catherine", era: "middle", year: 1380, color: "#ff7eb6", icon: "thorns",
    name: "Catherine of Siena", full: "Saint Catherine of Siena", title: "Set the World on Fire",
    lived: "1347 – 1380", from: "Siena, Italy", feast: "29 April", patron: "Italy, Europe and nurses",
    portrait: "s-catherine", pos: "50% 30%", scenes: [],
    story: [
      "Catherine was one of the youngest of some twenty-five children of a wool-dyer in Siena. At six she saw a vision of Christ above the church of San Domenico, and from then on she wanted only Him. When her parents pressed her to marry, she cut off her hair. She joined the Dominican laywomen, spent three years in near-silence in a small room in her family’s house, and learned to pray as few ever have.",
      "Then God sent her out. She nursed the dying through the plague when others fled, and walked with a condemned young man to his execution, holding his head as he died. Though she had little schooling, she dictated hundreds of letters to princes, cities and popes. The popes had lived in Avignon, in France, for nearly seventy years; this dyer’s daughter travelled there and urged Pope Gregory XI to return to Rome. In 1377, he did."
    ],
    moments: [
      ["Age 6", "Sees Christ in glory above San Domenico and gives her life to Him.", ""],
      ["c. 1365", "Joins the Dominican laywomen; three years of silence and prayer at home.", ""],
      ["1374", "Nurses the sick of Siena through the plague.", ""],
      ["1376", "Travels to Avignon and persuades the Pope to return to Rome.", ""],
      ["1378", "Dictates The Dialogue, her conversations with God.", ""]
    ],
    quote: { t: "If you are what you should be, you will set the whole of Italy on fire.", by: "Catherine", r: "From her letters" },
    end: { how: "Died after a long illness, offering her life for the Church", where: "Rome", when: "29 April 1380, aged 33", source: "History", text: "She spent her last months in Rome praying for a Church torn between rival popes, and died there at thirty-three, the age of her Lord. In 1970 she and Teresa of Ávila became the first women named Doctors of the Church." },
    lessons: [
      { t: "Prayer first, then action", d: "Catherine’s years of silence made her later courage possible. What we do for God flows from the time we spend with God." },
      { t: "Speak the truth in love — even upwards", d: "She wrote to popes as a daughter, frankly and tenderly. Respect does not mean staying silent when something is wrong." },
      { t: "Be who God made you to be", d: "She did not try to be anyone else. She was simply Catherine, wholly His — and that was enough to change Europe." }
    ],
    practice: "Is there a hard truth someone you love needs to hear? Pray about it first — then say it gently."
  },
  {
    id: "joan", era: "middle", year: 1431, color: "#7cc4ff", icon: "banner",
    name: "Joan of Arc", full: "Saint Joan of Arc", title: "The Maid of Orléans",
    lived: "c. 1412 – 1431", from: "Domrémy, France", feast: "30 May", patron: "France, soldiers, and those mocked for their faith",
    portrait: "s-joan", pos: "58% 52%", zoom: 1.2, endPos: "50% 40%", endImg: "s-joan-stake", scenes: ["s-joan-ingres"],
    story: [
      "Joan was a peasant girl who could neither read nor write. At about thirteen, in her father’s garden, she began to hear voices she knew as Saint Michael, Saint Catherine and Saint Margaret. France was being torn apart by the Hundred Years’ War, and the voices told her she must go to the aid of the uncrowned king.",
      "At seventeen she talked her way into his court, was examined by theologians, and was given armour, a banner and command. Within days she broke the siege of Orléans, which had held for months. Weeks later she stood beside Charles as he was crowned at Reims. Then she was captured, sold to the English, and tried by a church court determined to condemn her. Alone, unschooled and nineteen, she answered the learned judges with a wisdom that still astonishes."
    ],
    moments: [
      ["c. 1425", "Begins to hear the voices of the saints in her father’s garden.", ""],
      ["May 1429", "Wins the king’s trust and lifts the siege of Orléans.", ""],
      ["July 1429", "Stands with her banner at the crowning of Charles VII in Reims.", ""],
      ["1430", "Captured at Compiègne and sold to the English.", ""],
      ["1431", "Tried at Rouen; refuses to deny her voices.", ""]
    ],
    quote: { t: "If I am not, may God put me there; and if I am, may God so keep me.", by: "Joan", r: "Asked at her trial if she was in God’s grace" },
    end: { how: "Burned at the stake", where: "Rouen, France", when: "30 May 1431, aged 19", source: "History", text: "She asked for a cross, and an English soldier made her one from two sticks; a priest held a crucifix where she could see it through the smoke. She died calling on the name of Jesus. Twenty-five years later a new trial declared her innocent, and in 1920 the Church declared her a saint." },
    lessons: [
      { t: "You are not too young", d: "God gave a world-changing task to a teenage girl no one took seriously. Age, background and schooling do not limit what He can do through you." },
      { t: "Trust God when you are alone", d: "Abandoned by the king she had crowned, she stood alone before her judges — and was not alone." },
      { t: "Answer accusations with grace", d: "Her answers at trial were humble, wise and unafraid. You do not have to win every argument; only stay faithful in it." }
    ],
    practice: "Is there something you sense God asking of you that feels too big? Write it down today, and ask Him for the courage to take one step."
  },
  {
    id: "lidwina", era: "middle", year: 1433, color: "#b8a6ff", icon: "skate",
    name: "Lidwina", full: "Saint Lidwina of Schiedam", title: "A Life Offered from a Bed",
    lived: "1380 – 1433", from: "Schiedam, Holland", feast: "14 April", patron: "The chronically ill — and ice skaters",
    portrait: "s-lidwina", pos: "22% 60%", scenes: ["s-lidwina-ice"],
    story: [
      "Lidwina was the only girl among the nine children of a poor watchman in the Dutch town of Schiedam. In the winter of 1395, when she was fifteen, she went skating on the frozen canals with her friends. One of them crashed into her, and she fell hard onto the ice and broke a rib. It never healed. Infection set in, then fever, then paralysis — and Lidwina never walked again.",
      "At first she was bitter and could not bear it. A priest, Jan Pot, sat with her and taught her to think about the sufferings of Christ, and to join her own pain to His. Slowly, everything changed. For thirty-eight years she lay in a small room in her parents’ house, in constant pain, eating almost nothing, gradually losing the sight of one eye. Yet people came from all over Holland to sit beside her bed — for prayer, for advice, for comfort — and went away consoled. Whatever gifts they brought her, she gave to the poor of the town. Thomas à Kempis, the author of The Imitation of Christ, wrote her life."
    ],
    moments: [
      ["1380", "Born in Schiedam, the only girl in a family of nine children.", ""],
      ["Winter 1395", "Falls on the ice while skating, aged fifteen. The injury never heals.", ""],
      ["The bitter years", "A patient priest teaches her to unite her suffering with Christ’s on the cross.", ""],
      ["1395–1433", "Thirty-eight years in bed. Visitors from across Holland seek her prayers and counsel.", ""],
      ["Her room", "Gives away everything brought to her for the poor of the town.", ""]
    ],
    quote: { t: "My grace is sufficient for thee: for my strength is made perfect in weakness.", by: "Scripture", r: "2 Corinthians 12:9" },
    end: { how: "Died after thirty-eight years of illness", where: "Schiedam, Holland", when: "14 April 1433, aged 53", source: "History", text: "She died in the week after Easter, in the town she had never left. Schiedam made her its patron, and in 1890 Pope Leo XIII confirmed the honour she had been given as a saint for centuries. The sick pray to her — and so, of all people, do ice skaters: the girl who fell on the ice." },
    lessons: [
      { t: "Suffering can be offered", d: "Lidwina could not change her pain. She could choose what to do with it — and she gave it to God, for others. Nothing given to Him is wasted." },
      { t: "Bitterness is not the end", d: "At first she was angry and despairing. That is not failure; it is honesty. Her holiness began in the middle of that struggle." },
      { t: "A bed can be a pulpit", d: "She never left her room, yet she comforted half of Holland. The sick and housebound are not useless; they can pray and love as powerfully as anyone." }
    ],
    practice: "Visit, call or message someone who is housebound or chronically ill. Ask them to pray for you — and really listen to them."
  },
  {
    id: "rita", era: "middle", year: 1457, color: "#ff6b8b", icon: "thorn",
    name: "Rita", full: "Saint Rita of Cascia", title: "Saint of the Impossible",
    lived: "1381 – 1457", from: "Roccaporena, near Cascia, Italy", feast: "22 May", patron: "Impossible causes, hard marriages, wives who suffer abuse, and widows",
    portrait: "s-rita", pos: "35% 24%", scenes: ["s-rita-poussin"],
    story: [
      "Margherita — Rita, as everyone called her — longed from childhood to be a nun. Her parents arranged instead for her to marry Paolo Mancini, a man known for his violent temper. For eighteen years she bore his cruelty with patience and prayer, and slowly, it is said, he changed. They had two sons. Then Paolo, caught up in one of the bitter blood feuds of those mountain towns, was murdered.",
      "Rita forgave his killers. But her two sons, now young men, swore to avenge their father. Rita, terrified they would become murderers, begged God to take them rather than let them lose their souls. Within a year both had died of illness — reconciled, she believed, and at peace. Alone, she asked three times to enter the Augustinian convent in Cascia, and was refused because of the feud that surrounded her family. Only after she persuaded the feuding families to make peace was she let in. There, praying before a crucifix, she received a wound in her forehead, as if from a thorn of Christ’s crown, which she bore for fifteen years."
    ],
    moments: [
      ["Roccaporena", "Married against her wishes to a violent man; for eighteen years she answers him with patience.", "Tradition"],
      ["Widowed", "Her husband is murdered in a feud. Rita forgives his killers.", "Tradition"],
      ["Her sons", "Prays that her sons will die rather than commit murder; both die of illness within a year.", "Tradition"],
      ["Cascia", "Refused three times by the convent, she makes peace between the feuding families and is admitted.", "Tradition"],
      ["1442", "A thorn from the crucifix wounds her forehead; she bears it for fifteen years.", "Tradition"],
      ["Winter 1457", "Dying, she asks for a rose from her old garden. In the snow of January, one is found blooming.", "Tradition"]
    ],
    quote: { t: "For with God nothing shall be impossible.", by: "Scripture", r: "Luke 1:37" },
    end: { how: "Died after a long illness", where: "The convent of Cascia, Italy", when: "22 May 1457, aged 76", source: "Tradition", text: "When she died, it is said, the bells of Cascia rang by themselves. Her body lies in a glass case in the basilica at Cascia, and she was declared a saint in 1900. On her feast day, people all over the world bring roses to church to be blessed, in memory of the rose that bloomed in the snow." },
    lessons: [
      { t: "Nothing is impossible with God", d: "A violent marriage, a murdered husband, sons bent on revenge, a door closed three times. Rita’s life was a list of impossibilities, and God walked through every one." },
      { t: "Forgiveness breaks the cycle", d: "Blood feuds lasted for generations. Rita refused to pass the hatred on to her children, even when it cost her dearly. Revenge ends where someone forgives." },
      { t: "Make peace, then ask", d: "The convent door did not open until she had reconciled the feuding families. Sometimes the door we want opens only after we mend what is broken." }
    ],
    practice: "Is there an ‘impossible’ situation in your family? Bring it to God today — and take one small step towards peace, even a single kind message."
  },
  {
    id: "more", era: "reform", year: 1535, color: "#d6b98c", icon: "axe",
    name: "Thomas More", full: "Saint Thomas More", title: "The King’s Good Servant",
    lived: "1478 – 1535", from: "London, England", feast: "22 June", patron: "Lawyers, statesmen and politicians",
    portrait: "s-more", scenes: [],
    story: [
      "Thomas More was one of the most brilliant men in England: a lawyer, the author of Utopia, a judge known for refusing bribes, and a devoted father who gave his daughters as fine an education as any man’s. He prayed every day, and wore a rough hair shirt beneath his fine clothes. He was also very funny. King Henry VIII made him Lord Chancellor, the highest office in the land.",
      "When Henry broke with the Church to end his marriage, he demanded that his subjects swear an oath accepting him as head of the Church in England. More would not. He resigned, said as little as he could, and tried to keep his conscience without attacking anyone. It was not enough. He was locked in the Tower of London for fifteen months, convicted on false testimony, and condemned to death."
    ],
    moments: [
      ["1516", "Publishes Utopia, imagining a just society.", ""],
      ["1529", "Becomes Lord Chancellor of England.", ""],
      ["1532", "Resigns rather than support the king’s break with Rome.", ""],
      ["1534", "Refuses the oath; imprisoned in the Tower of London.", ""],
      ["1535", "Convicted of treason on perjured evidence.", ""]
    ],
    quote: { t: "I die the King’s good servant, and God’s first.", by: "Thomas More", r: "On the scaffold, 6 July 1535" },
    end: { how: "Beheaded", where: "Tower Hill, London", when: "6 July 1535, aged 57", source: "History", text: "Climbing the rickety scaffold, he joked to the officer, “See me safe up, and for my coming down, let me shift for myself.” He forgave his executioner and encouraged him. The day before, he had written to his daughter Margaret that he longed to go to God." },
    lessons: [
      { t: "Conscience is not for sale", d: "More gave up wealth, office and freedom rather than say what he did not believe. Some lines are worth everything." },
      { t: "Serve faithfully — but God first", d: "He was loyal to his king in everything he could be. Good citizenship and faith go together — until they cannot." },
      { t: "Keep your humour and your heart", d: "He joked on the scaffold and forgave the man with the axe. Holiness is not grim." }
    ],
    practice: "Is there a small dishonesty you have been going along with at work or school? Today, quietly step out of it."
  },
  {
    id: "ignatius", era: "reform", year: 1556, color: "#ff9548", icon: "flame",
    name: "Ignatius of Loyola", full: "Saint Ignatius of Loyola", title: "The Wounded Soldier",
    lived: "1491 – 1556", from: "Loyola, in the Basque Country, Spain", feast: "31 July", patron: "Soldiers, retreats and spiritual exercises",
    portrait: "s-ignatius", scenes: ["s-ignatius-rubens"],
    story: [
      "Íñigo was a proud Basque nobleman who loved fighting, gambling and romance. In 1521, defending the fortress of Pamplona, he was hit by a cannonball that shattered his leg. The bone was badly set, so he had it broken and reset — with no anaesthetic — so that he would still look good at court.",
      "Recovering for months at home, he asked for tales of knights. The only books in the house were a life of Christ and a book of the lives of the saints. He read them, and noticed something: daydreams of glory left him empty, but imagining himself following Christ, as the saints had, left him at peace long afterwards. That simple noticing became the heart of his Spiritual Exercises. He hung up his sword before Our Lady of Montserrat, went back to school in his thirties, and gathered companions at the University of Paris — among them Francis Xavier. Together they founded the Jesuits."
    ],
    moments: [
      ["1521", "A cannonball shatters his leg at Pamplona.", ""],
      ["1522", "Lays down his sword before Our Lady at Montserrat; prays for months in a cave at Manresa.", ""],
      ["1528", "Enrols at the University of Paris, aged 37.", ""],
      ["1534", "Takes vows at Montmartre with six friends, Francis Xavier among them.", ""],
      ["1540", "The Pope approves the Society of Jesus.", ""]
    ],
    quote: { t: "Take, Lord, and receive all my liberty, my memory, my understanding and my entire will… Give me only your love and your grace; that is enough for me.", by: "Ignatius", r: "The Spiritual Exercises" },
    end: { how: "Died in peace", where: "Rome", when: "31 July 1556, aged 64", source: "History", text: "By his death the handful of friends had grown to about a thousand Jesuits, running schools on several continents. The Exercises he began while recovering from a wound are still used by people of every walk of life to discover what God is asking of them." },
    lessons: [
      { t: "God can use your worst day", d: "A cannonball ended Ignatius’s plans and began his real life. A setback may be the very door God opens." },
      { t: "Notice what gives lasting peace", d: "Some joys fade within the hour; others stay. Paying attention to the difference is how Ignatius learned to hear God." },
      { t: "Find God in all things", d: "Not only in church, but in study, work, friendship and travel. Every part of life can be offered to Him." }
    ],
    practice: "Tonight before you sleep, look back over your day: when did you feel closest to God, and when furthest away? Thank Him, and ask His help for tomorrow."
  },
  {
    id: "xavier", era: "reform", year: 1552, color: "#3cc8c8", icon: "ship",
    name: "Francis Xavier", full: "Saint Francis Xavier", title: "To the Ends of the Earth",
    lived: "1506 – 1552", from: "Javier, Navarre, Spain", feast: "3 December", patron: "The missions, and the Church in India and the East",
    portrait: "s-xavier", pos: "38% 28%", endPos: "50% 62%", endImg: "s-xavier-death", scenes: ["s-xavier-rubens"],
    story: [
      "Francis Xavier was a gifted, ambitious young nobleman studying in Paris, with his heart set on a brilliant career. His roommate was an older, limping Basque named Ignatius, who kept quietly putting to him one question from the Gospel: “What shall it profit a man, if he shall gain the whole world, and lose his own soul?” In the end, the question won.",
      "In 1540 the King of Portugal asked for missionaries for India. The man chosen fell ill, and Ignatius turned to Xavier. He left the next day. For ten years he travelled without rest — Goa, the fishing villages of India’s southern coast, Malacca, the Spice Islands, Japan — often barefoot, ringing a little bell in the streets to call the children to learn their prayers, then sending them home to teach their parents. He baptised tens of thousands. His one remaining dream was China."
    ],
    moments: [
      ["1534", "Takes vows with Ignatius and five others at Montmartre.", ""],
      ["1542", "Lands at Goa after more than a year at sea.", ""],
      ["1542–44", "Lives among the fishing villages of India’s southern coast.", ""],
      ["1545–47", "Malacca and the Spice Islands.", ""],
      ["1549", "Reaches Japan, the first missionary to do so.", ""]
    ],
    quote: { t: "Many, many people hereabouts are not becoming Christians for one reason only: there is nobody to make them Christians.", by: "Francis Xavier", r: "Letter from India, 1544" },
    end: { how: "Died of fever", where: "Shangchuan Island, off the coast of China", when: "3 December 1552, aged 46", source: "History", text: "Within sight of the mainland he longed to reach, he died in a hut on a small island, with only a Chinese companion beside him. His body was carried back to Goa, where it rests in the Basilica of Bom Jesus. In 1927 he was named patron of the missions — together with a young nun who never left her convent." },
    lessons: [
      { t: "One good question can change a life", d: "Ignatius never argued with Xavier; he simply kept asking. Sometimes the kindest thing is to help a friend ask what really matters." },
      { t: "Say yes when you are needed", d: "Xavier was the replacement, sent at a day’s notice. God often calls us through someone else’s empty place." },
      { t: "Start with the little ones", d: "He taught the children first, and they taught their parents. Small beginnings spread." }
    ],
    practice: "Teach a child or a friend one prayer this week — or share a Gospel story with someone who has never heard it."
  },
  {
    id: "teresa", era: "reform", year: 1582, color: "#e89a78", icon: "quill",
    name: "Teresa of Ávila", full: "Saint Teresa of Ávila", title: "Let Nothing Disturb You",
    lived: "1515 – 1582", from: "Ávila, Spain", feast: "15 October", patron: "Spain, people who are ill, and all who pray",
    portrait: "s-teresa", pos: "46% 30%", zoom: 1.1, scenes: ["s-teresa-gerard"],
    story: [
      "Teresa was lively, warm and charming — at sixteen her father sent her to a convent school to keep her out of trouble. She entered the Carmelite convent of the Incarnation at twenty. It was a comfortable place full of visitors and conversation, and for nearly twenty years Teresa prayed half-heartedly, often longing for the hour of prayer to end. An illness left her paralysed for almost three years.",
      "Then, at thirty-nine, she stopped before an image of the wounded Christ and broke down. Everything changed. Prayer became, as she put it, time spent with a friend who we know loves us. Despite opposition, poverty and constant illness, she travelled the rough roads of Spain in a covered cart to found seventeen new convents of poor, praying sisters. With her friend John of the Cross she renewed the Carmelites, and her books on prayer — The Way of Perfection and The Interior Castle — are read all over the world."
    ],
    moments: [
      ["1535", "Enters the Carmelite convent of the Incarnation in Ávila.", ""],
      ["1554", "Converted anew before an image of the wounded Christ.", ""],
      ["1562", "Founds St Joseph’s in Ávila, the first convent of her reform.", ""],
      ["1567", "Meets a young friar, John of the Cross.", ""],
      ["1577", "Writes The Interior Castle.", ""]
    ],
    quote: { t: "Let nothing disturb you, let nothing frighten you. All things pass away; God never changes. Patience obtains all things. Whoever has God lacks nothing. God alone suffices.", by: "Teresa", r: "Found in her prayer book after her death" },
    end: { how: "Died of illness while travelling", where: "Alba de Tormes, Spain", when: "4 October 1582, aged 67", source: "History", text: "She died saying, “My Lord, it is time to set out.” That very night Catholic countries changed to the new Gregorian calendar and skipped ten days — which is why her feast falls on 15 October. In 1970 she became the first woman named a Doctor of the Church." },
    lessons: [
      { t: "Don’t give up on prayer", d: "Teresa struggled to pray for almost twenty years. Dryness is not failure; turning up is the prayer." },
      { t: "Pray as a friend", d: "She described prayer as time with a friend who loves us. You do not need perfect words — only honesty." },
      { t: "Peace comes from Whom you hold", d: "Everything passes; God does not. If you have Him, you are not poor, whatever else you lack." }
    ],
    practice: "Set a timer for ten minutes today. Sit quietly with Jesus and talk to Him as you would to a close friend."
  },
  {
    id: "desales", era: "reform", year: 1622, color: "#8dd3a0", icon: "letter",
    name: "Francis de Sales", full: "Saint Francis de Sales", title: "The Gentleman Saint",
    lived: "1567 – 1622", from: "Thorens, Savoy (in today’s France)", feast: "24 January", patron: "Writers, journalists and the deaf",
    portrait: "s-desales", pos: "42% 24%", scenes: [],
    story: [
      "Francis was the eldest son of a noble family in Savoy, and his father had his life mapped out: law school, a seat in the Senate, a good marriage. Francis earned his doctorate in law at Padua — and quietly, all along, he wanted to be a priest. As a student in Paris he went through a terrible crisis, convinced that he was damned, until, kneeling before a statue of Our Lady, he gave himself entirely to God’s love, whatever his fate. The despair lifted. He became a priest, against his father’s wishes.",
      "His first mission was the Chablais, a region around Lake Geneva that had become Calvinist, where Catholic priests were not welcome. Doors were shut in his face, and twice, it is said, men tried to kill him. So Francis wrote short leaflets explaining the faith and slipped them under the doors — which is why he is the patron of writers and journalists. He made up signs to teach a deaf man the faith. Over four years, much of the region returned to the Church. As bishop of Geneva he wrote the Introduction to the Devout Life, teaching ordinary people — soldiers, servants, married women — that holiness is for everyone. By nature he had a fierce temper; it took him years of effort to become the gentle man everyone remembered."
    ],
    moments: [
      ["c. 1586", "In Paris, despairing of his salvation, he gives himself to God’s love before a statue of Our Lady — and peace returns.", ""],
      ["1593", "Turns down a seat in the Senate and a wealthy marriage to become a priest.", ""],
      ["1594–98", "In the Calvinist Chablais, slips leaflets under the doors that will not open to him.", ""],
      ["1602", "Becomes bishop of Geneva, living in exile at Annecy.", ""],
      ["1609", "Publishes the Introduction to the Devout Life: holiness for every walk of life.", ""],
      ["1610", "With Jane Frances de Chantal, founds the Sisters of the Visitation.", ""]
    ],
    quote: { t: "Nothing is so strong as gentleness, nothing so gentle as real strength.", by: "Francis de Sales", r: "Attributed to him" },
    end: { how: "Died of a stroke", where: "Lyon, France", when: "28 December 1622, aged 55", source: "History", text: "Worn out by travel in a bitter winter, he died in the gardener’s cottage of a convent of his Visitation sisters. Asked for a last word of advice, he gave just one: “Humility.” He was declared a saint in 1665 and a Doctor of the Church in 1877. Two centuries after his death, a young priest in Turin named his new order after him: the Salesians of Don Bosco." },
    lessons: [
      { t: "Holiness is for everyone", d: "Not only for monks and nuns, but for mothers, soldiers, shopkeepers and students. You can be holy right where you are, in the life you already have." },
      { t: "Gentleness is strength under control", d: "Francis had a fiery temper and spent years taming it. Gentleness is not weakness; it is the hardest kind of strength." },
      { t: "When the door is shut, find another way", d: "People would not let him in, so he slid the Gospel under their doors. Love is creative." }
    ],
    practice: "The next time someone irritates you today, take one slow breath before you answer — and answer more gently than you feel."
  },
  {
    id: "margaret", era: "reform", year: 1690, color: "#ff4f6d", icon: "sacredheart",
    name: "Margaret Mary", full: "Saint Margaret Mary Alacoque", title: "The Heart That Loved So Much",
    lived: "1647 – 1690", from: "Verosvres, Burgundy, France", feast: "16 October", patron: "Devotion to the Sacred Heart, and those who have lost a parent",
    portrait: "s-margaret", pos: "50% 17%", scenes: ["s-margaret-giaquinto"],
    story: [
      "Margaret Mary was eight when her father died, and her family fell under the control of relatives who treated her mother and her harshly. As a child she fell so ill that she was confined to bed for four years, until she promised her life to Mary and was healed. As a young woman she was pressed to marry, and for years she put off her call. At twenty-four she entered the Visitation convent at Paray-le-Monial — the order founded by Francis de Sales.",
      "She was slow and clumsy, and some of her sisters thought her odd. Then, from December 1673, as she knelt before the Blessed Sacrament, Jesus appeared to her, showing her His heart — on fire with love, crowned with thorns, topped by a cross. “Behold this heart which has so loved men,” He told her, “and in return receives from most only ingratitude.” He asked for a feast of the Sacred Heart, for Communion on the first Friday of each month, and for an hour of prayer on Thursday nights. Her superiors and the theologians did not believe her. A young Jesuit, Claude de la Colombière, did. Through her, devotion to the Sacred Heart spread to the whole Church."
    ],
    moments: [
      ["1655", "Her father dies; the family falls into the hands of harsh relatives.", ""],
      ["Childhood", "Bedridden for four years, she is healed after promising herself to Mary.", ""],
      ["1671", "Enters the Visitation convent of Paray-le-Monial.", ""],
      ["27 December 1673", "Jesus shows her His heart, burning with love.", ""],
      ["June 1675", "“Behold this heart which has so loved men.” He asks for a feast of the Sacred Heart.", ""],
      ["1675", "Claude de la Colombière, a Jesuit, believes her and becomes her friend and defender.", ""]
    ],
    quote: { t: "Behold this Heart which has so loved men that it has spared nothing, even to exhausting and consuming itself, to show them its love.", by: "Jesus, to Margaret Mary", r: "Paray-le-Monial, June 1675" },
    end: { how: "Died after a short illness", where: "Paray-le-Monial, France", when: "17 October 1690, aged 43", source: "History", text: "She died saying the name of Jesus. Seventy-five years later the Pope first approved a feast of the Sacred Heart, and in 1856 it was extended to the whole Church. The First Fridays, and the picture of the Sacred Heart that hangs in so many homes — perhaps in yours — go back to what a slow, misunderstood nun saw in a small chapel in Burgundy." },
    lessons: [
      { t: "God’s heart is not cold", d: "The heart Margaret Mary saw was on fire, wounded, and longing to be loved back. Whatever you have been told about God, His heart towards you is tender." },
      { t: "Be faithful when you are not believed", d: "Her sisters and superiors doubted her for years. She stayed humble and obedient, and let God prove the message in His own time." },
      { t: "Love wants love in return", d: "Jesus asked her not for great deeds but for company: an hour on a Thursday night, a Communion on a Friday. Love is answered by presence." }
    ],
    practice: "Keep a First Friday this month — go to Mass and Communion on the first Friday — or spend an hour with Jesus this Thursday evening."
  },
  {
    id: "vaz", era: "reform", year: 1711, color: "#ffb627", icon: "rain", lanka: true,
    name: "Joseph Vaz", full: "Saint Joseph Vaz", title: "The Apostle of Sri Lanka",
    lived: "1651 – 1711", from: "Goa, India", feast: "16 January", patron: "Sri Lanka",
    portrait: "s-vaz", pos: "50% 36%", zoom: 1.22, scenes: [],
    story: [
      "When Joseph Vaz was born in Goa in 1651, the Catholics of Ceylon were living in fear. The Dutch, who now ruled the coast, had banned the Catholic faith, and a priest caught on the island could be put to death. For decades whole communities had no priest at all — no Mass, no confession, no one to bury their dead.",
      "Joseph, a young Goan priest of the Oratory, decided to go to them. In 1687 he crossed to Jaffna disguised as a coolie, barefoot, with a rosary hidden under his shirt. He went from house to house by night, saying Mass in secret. Suspected of being a Portuguese spy, he was thrown into prison in Kandy — where he learned Sinhala and won the respect of his guards. When a terrible drought struck and the king asked him to pray, heavy rain fell, and King Vimaladharmasuriya II gave him freedom to preach. In a smallpox epidemic, when others fled, he nursed the sick of every faith. For twenty-four years he walked the island, writing prayers and hymns in Sinhala and Tamil, rebuilding a Church from the ashes."
    ],
    moments: [
      ["1651", "Born in Goa, India, on 21 April.", ""],
      ["1687", "Reaches Jaffna disguised as a coolie, and ministers in secret.", ""],
      ["1692", "Imprisoned in Kandy as a suspected spy; learns Sinhala.", ""],
      ["1696", "In a drought, prays openly for rain — and it falls. The king lets him preach.", ""],
      ["1697", "Nurses the sick of Kandy through a smallpox epidemic.", ""]
    ],
    quote: { t: "How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace.", by: "Scripture", r: "Isaiah 52:7" },
    end: { how: "Died of illness after years of hardship", where: "Kandy, Sri Lanka", when: "16 January 1711, aged 59", source: "History", text: "Worn out by his journeys, he died in Kandy. He had found a hidden, scattered flock; he left a living Church of tens of thousands, served by priests he had trained. Pope John Paul II beatified him in Colombo in 1995, and on 14 January 2015 Pope Francis declared him a saint at Galle Face Green — the first canonisation ever held in Sri Lanka." },
    lessons: [
      { t: "Go to the forgotten", d: "No one was coming for the Catholics of Ceylon, so Joseph went. Look for the people everyone else has given up on." },
      { t: "Love people in their own language", d: "He learned Sinhala in prison and wrote prayers in Sinhala and Tamil. Respecting a people’s language and culture is part of loving them." },
      { t: "Serve everyone, not only your own", d: "In the smallpox epidemic he cared for Buddhists, Hindus and Muslims as gladly as Catholics. Charity has no borders." }
    ],
    practice: "Visit or call someone who is sick or alone this week — especially someone outside your own circle."
  },
  {
    id: "alphonsus", era: "reform", year: 1787, color: "#a3a7ff", icon: "note",
    name: "Alphonsus Liguori", full: "Saint Alphonsus Liguori", title: "The Lawyer Who Lost a Case",
    lived: "1696 – 1787", from: "Marianella, near Naples, Italy", feast: "1 August", patron: "Confessors and moral theologians, and those troubled by scruples",
    portrait: "s-alphonsus", pos: "37% 20%", scenes: [],
    story: [
      "Alphonsus was a prodigy: he earned a doctorate in law at sixteen and became one of the most successful young lawyers in Naples — eight years, it is said, without losing a case. Then, in 1723, he lost an important one over a document he had overlooked. He was crushed and ashamed. Days later, visiting the sick at the Hospital for Incurables, he heard a voice: “Leave the world, and give yourself to me.” He laid his sword before a statue of Our Lady and became a priest — to his father’s fury.",
      "He gave his life to the poor: the street-sweepers, beggars and goatherds of Naples, and then the forgotten villages of the mountains, where no priest went. In 1732 he founded the Redemptorists to preach to them. He was a musician, too, and wrote Tu scendi dalle stelle, still Italy’s best-loved Christmas carol. In an age when many confessors were harsh, he was known for mercy, and his moral theology taught generations of priests to be gentle. He wrote more than a hundred books — among them The Glories of Mary, and a Way of the Cross still prayed in parishes today. In old age he was bent double with arthritis, and through a dispute he was shut out of the very order he had founded."
    ],
    moments: [
      ["1713", "A doctor of law at sixteen, he becomes a leading lawyer in Naples.", ""],
      ["1723", "Loses a great case through his own oversight. At a hospital for the incurable, he hears: “Leave the world, and give yourself to me.”", ""],
      ["1732", "Founds the Redemptorists to preach to the forgotten poor of the countryside.", ""],
      ["A carol", "Writes Tu scendi dalle stelle, Italy’s favourite Christmas song.", ""],
      ["1762", "Made a bishop against his wishes; sells even his carriage to feed his people in a famine.", ""],
      ["1780", "Old, bent and nearly blind, he is shut out of his own order in a dispute — and accepts it.", ""]
    ],
    quote: { t: "Acquire the habit of speaking to God as if you were alone with Him, familiarly and with confidence, as to the dearest and most loving of friends.", by: "Alphonsus", r: "How to Converse Continually and Familiarly with God" },
    end: { how: "Died in peace, aged ninety", where: "Pagani, near Naples", when: "1 August 1787", source: "History", text: "He died as the midday Angelus bell was ringing. The split in his order healed after his death, and today his Redemptorists preach the mercy of God all over the world. He was declared a saint in 1839 and a Doctor of the Church in 1871 — the lawyer who once lost a case won something far greater." },
    lessons: [
      { t: "Failure can be a doorway", d: "The case he lost opened the life he was made for. Humiliation can strip away what we hide behind, and leave us free for God." },
      { t: "Be merciful to sinners", d: "In a harsh age, Alphonsus taught priests to be gentle in confession. Firm truth and tender mercy belong together." },
      { t: "Talk to God as a friend", d: "He taught that we can tell God everything — our troubles, our plans, even small joys — as we would the closest of friends." }
    ],
    practice: "Tonight, talk to God for five minutes as you would to your closest friend: tell Him about your day, your worries, and one thing you are glad about."
  },
  {
    id: "vianney", era: "modern", year: 1859, color: "#d7b377", icon: "stole",
    name: "John Vianney", full: "Saint John Vianney", title: "The Curé of Ars",
    lived: "1786 – 1859", from: "Dardilly, near Lyon, France", feast: "4 August", patron: "Parish priests and confessors",
    portrait: "s-vianney", pos: "50% 20%", scenes: ["s-vianney-death"],
    story: [
      "Jean-Marie Vianney grew up on a farm during the French Revolution, when priests were hunted and Mass was said in secret in barns. He made his First Communion in a farmhouse whose windows had been blocked with carts of hay so that no one would see. He longed to be a priest, but he had little schooling, and Latin defeated him. He failed his exams and was nearly sent away from the seminary. A patient priest, Father Balley, tutored him privately and vouched for him. Before he was ordained, the bishop’s deputy asked only: Is he devout? Does he pray the Rosary? Told yes, he said, “Then the grace of God will do the rest.”",
      "In 1818 he was sent to Ars, a village of about 230 people where, he was told, there was “not much love of God.” He prayed for hours before dawn, lived on little more than boiled potatoes, gave away almost everything he had, and visited every family. Slowly the village changed. Then people began to come from all over France to make their confession to him. In his last years tens of thousands of pilgrims a year arrived in Ars, and he spent up to sixteen hours a day in the confessional. The devil, he said, harassed him at night; he laughed it off as a sign that a big sinner was coming the next day."
    ],
    moments: [
      ["1799", "Makes his First Communion in secret during the Revolution, behind windows blocked with hay.", ""],
      ["The seminary", "Fails in Latin and is nearly sent home; a kind priest tutors him and vouches for him.", ""],
      ["1815", "Ordained: “Is he devout? Then the grace of God will do the rest.”", ""],
      ["1818", "Arrives at Ars, a village of 230 souls, and is told there is little love of God there.", ""],
      ["1830s–1859", "Pilgrims pour in from all over France; he hears confessions up to sixteen hours a day.", ""]
    ],
    quote: { t: "My little children, your hearts are small, but prayer stretches them and makes them capable of loving God.", by: "John Vianney", r: "His catechism on prayer" },
    end: { how: "Died, worn out, at 73", where: "Ars, France", when: "4 August 1859", source: "History", text: "Several times he tried to slip away from Ars to live as a monk, and each time he came back. Some three hundred priests and six thousand people came to his funeral. His body lies in the church at Ars; he was declared a saint in 1925, and in 1929 the Pope named him patron of all parish priests." },
    lessons: [
      { t: "God doesn’t need you to be brilliant", d: "John Vianney failed his exams and was nearly turned away. God chose him anyway — and made him the most sought-after confessor in France." },
      { t: "Pray for your priests", d: "One holy priest transformed a whole village. Behind every good parish priest are people praying for him." },
      { t: "Confession is a gift, not a punishment", d: "People crossed France and waited for days to confess to him, because they found mercy there. Mercy is waiting for you too." }
    ],
    practice: "Go to confession this month — and pray today for your own parish priest, by name."
  },
  {
    id: "bernadette", era: "modern", year: 1879, color: "#8ec5ff", icon: "spring",
    name: "Bernadette", full: "Saint Bernadette Soubirous", title: "The Girl at the Grotto",
    lived: "1844 – 1879", from: "Lourdes, France", feast: "16 April", patron: "The sick, the poor, and those mocked for their faith",
    portrait: "s-bernadette", pos: "45% 17%", scenes: ["s-bernadette-lourdes", "s-bernadette-1863"],
    story: [
      "Bernadette Soubirous was the eldest child of a miller whose business had failed. By 1858 the family of six was living in a single damp room that had once been the town jail. She was fourteen, small for her age, sick with asthma, unable to read or write, and so far behind in catechism that she had not yet made her First Communion. On 11 February 1858, gathering firewood by the river at the grotto of Massabielle, she saw a young Lady dressed in white, with a blue sash and a yellow rose on each foot.",
      "The Lady appeared to her eighteen times. She asked for prayer and penance, and for a chapel to be built. One day she told Bernadette to dig in the mud and drink; a spring appeared, which has flowed ever since. The police questioned her, the parish priest scolded her, and the town laughed at her — but she never changed her story. At last, on 25 March, the Lady gave her name in the local dialect: “Que soy era Immaculada Councepciou” — “I am the Immaculate Conception.” Bernadette did not understand the words, and repeated them all the way to the priest so that she would not forget. Four years earlier, the Pope had declared that very teaching. Bernadette later became a sister at Nevers, and lived out her life away from the crowds, in illness and obscurity."
    ],
    moments: [
      ["1857", "Her family, ruined and poor, moves into a damp, disused prison cell.", ""],
      ["11 February 1858", "At the grotto of Massabielle she sees a Lady in white, with a yellow rose on each foot.", ""],
      ["25 February", "Told to dig in the mud, she uncovers a spring that still flows.", ""],
      ["25 March", "The Lady names herself: “I am the Immaculate Conception.”", ""],
      ["1866", "Leaves Lourdes for ever to become a sister at Nevers.", ""]
    ],
    quote: { t: "The Blessed Virgin used me like a broom. What do you do with a broom when you have finished sweeping? You put it back in its place, behind the door.", by: "Bernadette", r: "To a sister at Nevers" },
    end: { how: "Died of tuberculosis of the bone", where: "The convent of Saint-Gildard, Nevers, France", when: "16 April 1879, aged 35", source: "History", text: "She never went back to Lourdes to seek a cure for herself; the spring, she said, was not for her. In great pain, she said her job was to be ill. Her last words were from the Hail Mary: “Holy Mary, Mother of God, pray for me, a poor sinner… a poor sinner.” Her body lies in a glass shrine at Nevers. Millions come to Lourdes every year, and the spring she uncovered with her hands still flows." },
    lessons: [
      { t: "God chooses the overlooked", d: "Poor, sickly, unschooled and behind in catechism — Bernadette was exactly who the Mother of God came to. God does not wait for us to be impressive." },
      { t: "Tell the truth and let it stand", d: "She was questioned, threatened and mocked. She never added to her story and never took anything back. Simple honesty is its own kind of courage." },
      { t: "Step aside when your part is done", d: "Once her task was finished she went, like the broom, behind the door. Humility lets God take the credit." }
    ],
    practice: "Do your work today without needing anyone to notice — and when someone praises you, quietly give the credit to God."
  },
  {
    id: "bosco", era: "modern", year: 1888, color: "#ffd166", icon: "juggle",
    name: "John Bosco", full: "Saint John Bosco", title: "Father of the Street Boys",
    lived: "1815 – 1888", from: "Becchi, near Turin, Italy", feast: "31 January", patron: "Young people, apprentices, editors — and stage magicians",
    portrait: "s-bosco", pos: "53% 12%", scenes: ["s-bosco-1887"],
    story: [
      "Giovanni Bosco was two when his father died, and he grew up poor on a hillside farm in Piedmont. At nine he had a dream that shaped his life: a crowd of rough boys fighting and swearing, and a Man in white who told him, “Not with blows, but with gentleness and love you will win these friends of yours.” As a boy he taught himself to juggle, walk a tightrope and do magic tricks — and when crowds of children gathered to watch, he would finish the show by repeating the Sunday sermon and leading them in prayer.",
      "Ordained in 1841, he found Turin full of boys who had come from the countryside to work: sleeping in the streets, worked hard in factories, ending up in prison. Visiting the prisons shook him. He began gathering them on Sundays — games, catechism, outings — and was thrown out of one place after another for the noise. In 1846 he settled in a shed at Valdocco. He opened a home, then schools and workshops so the boys could learn a trade, and fought for fair contracts for apprentices. He never ruled by fear: his method was “reason, religion and loving-kindness.” In 1859 he founded the Salesians, named after Francis de Sales; with Mary Mazzarello he later founded sisters to care for girls."
    ],
    moments: [
      ["1824", "Dreams of wild boys and a Man who says: “Not with blows, but with gentleness.”", ""],
      ["Boyhood", "Juggles and walks the tightrope to gather children — then teaches them to pray.", ""],
      ["1841", "Ordained; visits Turin’s prisons and finds them full of teenage boys.", ""],
      ["1846", "His wandering Sunday oratory finally finds a home in a shed at Valdocco.", ""],
      ["1859", "Founds the Salesians, named after Francis de Sales.", ""],
      ["1872", "With Mary Mazzarello, founds the Salesian sisters to care for girls.", ""]
    ],
    quote: { t: "It is not enough to love the young; they must know that they are loved.", by: "John Bosco", r: "Letter from Rome, 1884" },
    end: { how: "Died, worn out by his work", where: "Turin, Italy", when: "31 January 1888, aged 72", source: "History", text: "Before he died he left a message: “Tell my boys that I shall be waiting for them all in paradise.” Thousands filed past his body. He was declared a saint on Easter Sunday 1934. Today his Salesians run schools, technical colleges, youth centres and homes for street children in more than 130 countries — Sri Lanka among them." },
    lessons: [
      { t: "Love must be seen", d: "Don Bosco said it was not enough to love young people; they must know they are loved. Tell the young people in your life — and show them." },
      { t: "Joy is a path to God", d: "Games, music, juggling, outings: he believed holiness and happiness belong together. A Christian should not be gloomy." },
      { t: "Prevent, don’t only punish", d: "His way was reason, faith and kindness, not fear. Walk with people before they fall, instead of only blaming them afterwards." }
    ],
    practice: "Spend real time with a young person this week — play a game, help with homework, listen — and tell them something you admire in them."
  },
  {
    id: "damien", era: "modern", year: 1889, color: "#4fd1a1", icon: "hands",
    name: "Damien of Molokai", full: "Saint Damien of Molokai", title: "One of the Lepers",
    lived: "1840 – 1889", from: "Tremelo, Belgium", feast: "10 May", patron: "People with leprosy and other shunned illnesses",
    portrait: "s-damien", endPos: "50% 40%", endImg: "s-damien-1889", scenes: ["s-damien-bier"],
    story: [
      "Jozef De Veuster was a strong Belgian farm boy who joined a missionary order and took the name Damien. When his brother fell ill and could not sail to Hawaii, Damien went in his place. In 1873 he volunteered for the post no one wanted: Kalaupapa, a remote peninsula on the island of Molokai, where people with leprosy were sent by law, never to return.",
      "He found people dying without care, without hope, without anyone to bury them. Damien dressed their sores, built houses, a church, orphanages and a water supply, made coffins with his own hands and dug the graves. He ate with them and shook their hands. After eleven years he spilled boiling water on his foot and felt nothing: he had leprosy. The next Sunday he began his sermon not with “my brethren,” but with two words: “We lepers.”"
    ],
    moments: [
      ["1864", "Sails to Hawaii in place of his sick brother; ordained a priest in Honolulu.", ""],
      ["1873", "Volunteers for the leprosy settlement at Kalaupapa, on Molokai.", ""],
      ["1873–84", "Builds homes, a church and orphanages; buries the dead with his own hands.", ""],
      ["1885", "Learns he has leprosy himself, and begins to preach, “We lepers.”", ""],
      ["1888", "Mother Marianne Cope and her sisters arrive to care for him and the sick.", ""]
    ],
    quote: { t: "I make myself a leper with the lepers, to gain all to Jesus Christ.", by: "Damien", r: "From his letters" },
    end: { how: "Died of leprosy", where: "Kalaupapa, Molokai, Hawaii", when: "15 April 1889, aged 49", source: "History", text: "He worked until he could no longer stand, and died among the people he had become one of. Mother Marianne Cope, herself now a saint, carried on his work. The two photographs in this chapter — one healthy, one taken weeks before his death — show the cost of his love." },
    lessons: [
      { t: "Go where it costs", d: "Damien could have served anywhere. He chose the place everyone else avoided, and he stayed." },
      { t: "Don’t just help — belong", d: "He did not serve the sick from a distance. He lived among them until he could say “we.” Love closes the gap." },
      { t: "Dignity in life and in death", d: "Coffins, graves, music, a choir: he made sure no one on Molokai was thrown away. Every life deserves honour." }
    ],
    practice: "Who is treated as untouchable around you — the sick, the poor, the outsider? Sit with one of them this week, over a meal or a conversation."
  },
  {
    id: "therese", era: "modern", year: 1897, color: "#ffa3bf", icon: "rose",
    name: "Thérèse of Lisieux", full: "Saint Thérèse of Lisieux", title: "The Little Flower",
    lived: "1873 – 1897", from: "Alençon, France", feast: "1 October", patron: "The missions, the sick, and florists",
    portrait: "s-therese", pos: "50% 34%", scenes: ["s-therese-child", "s-therese-joan"],
    story: [
      "Thérèse Martin was the youngest of five sisters, sensitive and easily hurt. Her mother died when she was four, and for years she cried at the smallest thing. One Christmas Eve, when she was nearly fourteen, she overheard her tired father sigh at her childishness — and instead of crying, she chose to be cheerful. She later called it her conversion. At fifteen, after asking the Pope himself for permission, she entered the Carmelite convent at Lisieux.",
      "She did nothing remarkable there. She swept floors, did the laundry and prayed. One sister irritated her in every way, so Thérèse gave her the warmest smiles — until the sister asked what it was about her that Thérèse liked so much. She offered every small thing to God with love, and called it her “Little Way”: not great deeds, but small ones done with great love. In her last eighteen months, dying of tuberculosis, she lost all feeling of faith — and kept believing anyway. Her sisters published her notebooks as Story of a Soul; within a few years, millions had read them."
    ],
    moments: [
      ["1877", "Her mother dies when Thérèse is four.", ""],
      ["Christmas 1886", "Chooses to stop crying for herself — her “conversion.”", ""],
      ["1887", "Prays for a condemned murderer, who kisses a crucifix just before his execution.", ""],
      ["1888", "Enters the Carmel of Lisieux at fifteen.", ""],
      ["1895", "Begins writing what becomes Story of a Soul, and plays Joan of Arc in a convent play.", ""]
    ],
    quote: { t: "I will spend my heaven doing good on earth.", by: "Thérèse", r: "Her last conversations, 1897" },
    end: { how: "Died of tuberculosis", where: "The Carmel of Lisieux, France", when: "30 September 1897, aged 24", source: "History", text: "After months of suffering she looked at her crucifix, said, “My God, I love you,” and died. She was declared a saint in 1925 and a Doctor of the Church in 1997 — though she never went to university, wrote one short book, and never left her convent. She shares the title of patron of the missions with Francis Xavier." },
    lessons: [
      { t: "Small things, great love", d: "You may never do anything the world calls great. You can do every small thing with great love — and that is holiness." },
      { t: "Love the difficult people", d: "Thérèse kept her warmest smile for the sister who annoyed her most. Love is proven with the people we find hard." },
      { t: "Faith can hold on in the dark", d: "In her last months she felt nothing — and chose to believe. Feelings come and go; trust is a choice." }
    ],
    practice: "Choose one person who gets on your nerves and be especially kind to them today — without telling anyone why."
  },
  {
    id: "goretti", era: "modern", year: 1902, color: "#e8e4ff", icon: "palm",
    name: "Maria Goretti", full: "Saint Maria Goretti", title: "Forgiveness at Eleven",
    lived: "1890 – 1902", from: "Corinaldo, Italy", feast: "6 July", patron: "Young people, purity, and survivors of assault",
    portrait: "s-goretti", pos: "50% 32%", scenes: [],
    story: [
      "Maria Goretti was born into a poor farming family who moved south to the marshes near Nettuno to work the land as sharecroppers. They shared a farmhouse with another family, the Serenellis. When Maria was nine, her father died of malaria. Her mother went out to work in the fields, and Maria, the eldest daughter, kept the house, cooked, and looked after her younger brothers and sisters. She was cheerful and devout, and longed for her First Communion, which she made in 1901.",
      "Alessandro Serenelli, the twenty-year-old son of the other family, began to pressure her. On 5 July 1902, when she was alone in the house, he tried to force himself on her. She fought him, crying out that it was a sin and that he would go to hell. In a rage, he stabbed her fourteen times. She was taken to the hospital at Nettuno, but the doctors could not save her. Before she died, the priest asked whether she forgave her killer. “Yes,” she said. “For the love of Jesus I forgive him, and I want him to be with me in heaven.”"
    ],
    moments: [
      ["1900", "Her father dies of malaria; at nine, she keeps house for the family.", ""],
      ["1901", "Makes her First Communion.", ""],
      ["5 July 1902", "Resists Alessandro Serenelli’s assault, and is stabbed fourteen times.", ""],
      ["6 July 1902", "Dies in hospital after forgiving him.", ""],
      ["In prison", "Years later, Alessandro dreams that Maria offers him lilies — and repents.", ""],
      ["After prison", "He begs her mother’s forgiveness. She forgives him, and they go to Christmas Mass together.", ""]
    ],
    quote: { t: "For the love of Jesus I forgive him, and I want him to be with me in heaven.", by: "Maria", r: "On her deathbed, 6 July 1902" },
    end: { how: "Died of her wounds", where: "Nettuno, Italy", when: "6 July 1902, aged 11", source: "History", text: "She died the day after the attack, with a crucifix in her hands. In 1950 Pope Pius XII declared her a saint before a crowd so vast that, for the first time, a canonisation was held outside in St Peter’s Square. Her mother was there — the first mother ever to see her child declared a saint. Alessandro, a changed man, spent the rest of his life as a gardener for the Capuchin friars, praying to the girl he had killed." },
    lessons: [
      { t: "Forgiveness is possible, even for the worst", d: "An eleven-year-old forgave the man who killed her, and prayed for him to be in heaven. Her forgiveness reached him years later and changed his life." },
      { t: "You are precious", d: "Maria knew her worth, and said no. No one has the right to force or pressure you. If someone has hurt you, it was never your fault — tell someone you trust." },
      { t: "Never write anyone off", d: "Alessandro seemed lost for good. He became a man of prayer. Keep praying for those who have done terrible things." }
    ],
    practice: "Pray today for someone who has hurt you — or for someone who has hurt others badly — and ask God for the grace you cannot yet find on your own."
  },
  {
    id: "francisco", era: "modern", year: 1919, color: "#93e07a", icon: "fife",
    name: "Francisco", full: "Saint Francisco Marto", title: "The Boy Who Wanted to Console God",
    lived: "1908 – 1919", from: "Aljustrel, Fátima, Portugal", feast: "20 February, with Jacinta", patron: "Children, and all who keep Jesus company in prayer",
    portrait: "s-francisco", pos: "50% 32%", scenes: ["s-fatima-sun"],
    story: [
      "Francisco Marto was a cheerful, easygoing shepherd boy from the village of Aljustrel, near Fátima in Portugal. He loved animals, played a little pipe for the sheep, and would rather give up a game than quarrel over it. With his younger sister Jacinta and their cousin Lúcia, he took the family flocks to graze on the hills. In 1916 an angel appeared to the three children, teaching them to pray and to offer sacrifices. Then, on 13 May 1917, a Lady “brighter than the sun” appeared to them in a hollow called the Cova da Iria.",
      "Francisco saw her but never heard her voice; Lúcia and Jacinta had to tell him what she said. She asked them to pray the Rosary every day for peace — the First World War was raging. What moved Francisco most was how sad God seemed at the sins of the world. From then on his great desire was to “console Our Lord.” He would slip away from the others to pray alone behind a wall or a rock, and spent hours before what he called “the Hidden Jesus” in the tabernacle of the parish church. On 13 October 1917, tens of thousands gathered with the children and saw the sun seem to spin and fall from the sky."
    ],
    moments: [
      ["1916", "An angel appears to Francisco, Jacinta and Lúcia, teaching them to pray.", ""],
      ["13 May 1917", "The Lady appears in the Cova da Iria. Francisco sees her but cannot hear her.", ""],
      ["August 1917", "The children are jailed by the local administrator and threatened with death. They will not deny what they saw.", ""],
      ["13 October 1917", "Tens of thousands see the sun seem to dance in the sky.", ""],
      ["1918", "Spends hours praying alone before “the Hidden Jesus” in the church.", ""]
    ],
    quote: { t: "I love God so much! But He is very sad because of so many sins.", by: "Francisco", r: "As remembered by Lúcia" },
    end: { how: "Died of the Spanish flu", where: "His family’s home, Aljustrel, Portugal", when: "4 April 1919, aged 10", source: "History", text: "The Lady had told the children that she would soon take Francisco and Jacinta to heaven. When the influenza pandemic swept Portugal, Francisco fell ill and never recovered. He received his First Holy Communion in his sickbed, the day before he died. In 2017, a hundred years after the first apparition, Pope Francis declared him and Jacinta saints at Fátima — the youngest saints in the Church’s history who were not martyrs." },
    lessons: [
      { t: "Keep Jesus company", d: "Francisco did not so much ask God for things as simply stay with Him. Prayer can be as simple as sitting with Someone you love." },
      { t: "Gentle hearts are strong hearts", d: "He would rather lose a game than fight over it, yet he faced prison and threats without denying what he had seen." },
      { t: "Children can be saints", d: "A ten-year-old boy is a saint of the whole Church. Never underestimate the faith of a child — or the faith you had as one." }
    ],
    practice: "Stop at a church this week, even for five minutes, and simply keep Jesus company — like Francisco with his “Hidden Jesus.”"
  },
  {
    id: "jacinta", era: "modern", year: 1920, color: "#ffb37a", icon: "lamb",
    name: "Jacinta", full: "Saint Jacinta Marto", title: "Everything for Sinners",
    lived: "1910 – 1920", from: "Aljustrel, Fátima, Portugal", feast: "20 February, with Francisco", patron: "Sick children, and all who pray for sinners",
    portrait: "s-jacinta", pos: "45% 15%", scenes: ["s-fatima-fj"],
    story: [
      "Jacinta was the youngest of the three children of Fátima — only seven in 1917 — and the liveliest. She loved to dance, to pick flowers and to call out names across the valley to hear the echo. She could also sulk and be stubborn, and she was the one who could not keep the secret: after the first apparition she ran home and told her mother, “Today I saw Our Lady!”",
      "What changed Jacinta was the vision the Lady showed the children in July 1917: a glimpse of hell, and of the souls lost there. From that day this little girl could not stop thinking of sinners. She gave her lunch to poorer children or to the sheep, went without water on burning summer days, and wore a rough rope around her waist, offering it all for the conversion of sinners and for the Pope. When she fell ill in the influenza epidemic, she suffered for many months: an abscess in her chest, a painful operation with only a little anaesthetic, and a final journey to a hospital in Lisbon, far from her family. She knew, she said, that she would die alone."
    ],
    moments: [
      ["13 May 1917", "Sees the Lady with Francisco and Lúcia — and cannot help telling her mother.", ""],
      ["13 July 1917", "Shown a vision of the lost, she resolves to offer everything for sinners.", ""],
      ["1917–18", "Gives away her lunch, goes without water in the heat, and prays constantly for the Pope.", ""],
      ["1919", "Falls gravely ill after the influenza; spends months in hospital at Ourém.", ""],
      ["February 1920", "Taken to Lisbon; endures surgery with little anaesthetic, offering it for sinners.", ""]
    ],
    quote: { t: "Tell everybody that God grants us His graces through the Immaculate Heart of Mary.", by: "Jacinta", r: "To Lúcia, before leaving for Lisbon" },
    end: { how: "Died alone in a Lisbon hospital", where: "Dona Estefânia Hospital, Lisbon", when: "20 February 1920, aged 9", source: "History", text: "As the Lady had told her, she died in hospital far from home, with no one from her family beside her, a few weeks before her tenth birthday. When her coffin was opened in 1935, her face was found incorrupt. She and Francisco are buried in the basilica at Fátima, and share a feast day: 20 February, the day she died." },
    lessons: [
      { t: "Care about other people’s souls", d: "A seven-year-old could not stop thinking about people who were far from God. Who in your life needs your prayers more than your opinions?" },
      { t: "Small sacrifices are real gifts", d: "A lunch given away, a thirst borne quietly. Jacinta shows that little sacrifices offered with love can help others." },
      { t: "You are never truly alone", d: "She died far from her family, without a familiar face — and was sure that Jesus and Mary were with her. In the loneliest hour, heaven is near." }
    ],
    practice: "Give up one small comfort today — a snack, a drink, some time on your phone — and offer it for someone you know who is far from God."
  },
  {
    id: "faustina", era: "modern", year: 1938, color: "#79c7ff", icon: "rays",
    name: "Faustina", full: "Saint Faustina Kowalska", title: "The Secretary of Mercy",
    lived: "1905 – 1938", from: "Głogowiec, Poland", feast: "5 October", patron: "All who trust in the Divine Mercy",
    portrait: "s-faustina", pos: "50% 32%", scenes: ["s-faustina-mercy"],
    story: [
      "Helena Kowalska was the third of ten children of a poor peasant family in Poland, and had less than three years of schooling. At nineteen, at a dance in a park in Łódź, she saw Jesus beside her, covered in wounds: “How long shall I put up with you, and how long will you keep putting Me off?” She left the dance, went to the cathedral, and set out for Warsaw with nothing but the dress she wore, to become a nun. Convent after convent turned her away — she was poor and unschooled. At last the Sisters of Our Lady of Mercy took her in, as Sister Maria Faustina, and gave her the work of a cook, a gardener and a doorkeeper.",
      "On 22 February 1931, in her cell at Płock, Jesus appeared to her in a white garment, with two rays, one red and one pale, streaming from His heart. “Paint an image according to the pattern you see,” He said, “with the signature: Jesus, I trust in You.” For the rest of her short life He spoke to her about His mercy, and asked her to write it all down. In obedience to her confessor, Blessed Michael Sopoćko, she filled a diary of some six hundred pages with one message: God’s mercy is greater than any sin. Jesus asked for a feast of Divine Mercy on the Sunday after Easter, and taught her the Chaplet of Divine Mercy, prayed on rosary beads."
    ],
    moments: [
      ["1924", "At a dance in Łódź, sees the suffering Jesus; leaves for Warsaw to become a nun.", ""],
      ["1925", "After many refusals, enters the Sisters of Our Lady of Mercy as Sister Maria Faustina.", ""],
      ["22 February 1931", "Jesus appears with rays of red and pale light: “Paint an image… Jesus, I trust in You.”", ""],
      ["1934", "In Vilnius, the first image of the Divine Mercy is painted under her direction.", ""],
      ["1935", "Is taught the Chaplet of Divine Mercy.", ""]
    ],
    quote: { t: "The greater the sinner, the greater the right he has to My mercy.", by: "Jesus, to Faustina", r: "Her Diary, 723" },
    end: { how: "Died of tuberculosis", where: "Kraków-Łagiewniki, Poland", when: "5 October 1938, aged 33", source: "History", text: "She suffered for years without complaint, often misunderstood by her own sisters. Within a year of her death Poland was invaded, and the image and prayers of Divine Mercy spread among people in desperate need. Her fellow Pole, Pope John Paul II, declared her a saint in 2000, and on the same day made the Sunday after Easter Divine Mercy Sunday for the whole Church. He died on the eve of that feast, in 2005." },
    lessons: [
      { t: "No sin is bigger than God’s mercy", d: "This was the heart of everything Faustina heard: the worse our sins, the greater our claim on His mercy. There is no one God will not forgive who asks." },
      { t: "Trust is the key", d: "Jesus asked for just five words beneath His image: Jesus, I trust in You. Trust opens the door to grace; fear keeps it shut." },
      { t: "Be merciful as He is", d: "Faustina was told to show mercy by what she did, what she said and how she prayed. Mercy received must be passed on." }
    ],
    practice: "At three o’clock today — the hour Jesus died — stop for a moment and pray: “Jesus, I trust in You.” If you can, pray the Chaplet of Divine Mercy."
  },
  {
    id: "kolbe", era: "modern", year: 1941, color: "#ff5a5a", icon: "crowns",
    name: "Maximilian Kolbe", full: "Saint Maximilian Kolbe", title: "Prisoner 16670",
    lived: "1894 – 1941", from: "Zduńska Wola, Poland", feast: "14 August", patron: "Prisoners, families and journalists",
    portrait: "s-kolbe", scenes: [],
    story: [
      "As a boy, Raymund Kolbe had a vision of Mary holding two crowns, one white for purity and one red for martyrdom. She asked which he wanted. He said he would take both. He became a Franciscan, Maximilian, and a tireless one: he founded a movement of prayer, a great friary called Niepokalanów with hundreds of brothers, a press that printed magazines by the hundred thousand, a radio station — and a mission in Nagasaki, Japan.",
      "When the Nazis invaded Poland, his friary sheltered refugees, Jews among them. In 1941 he was arrested and sent to Auschwitz as prisoner 16670. That summer a prisoner escaped, and the camp commander chose ten men to be starved to death as a warning. One of them, Franciszek Gajowniczek, cried out, “My wife! My children!” Father Kolbe stepped out of line and asked to take his place. The commander agreed."
    ],
    moments: [
      ["c. 1906", "Sees Mary offering two crowns — and chooses both.", ""],
      ["1927", "Founds Niepokalanów, the “City of the Immaculate,” near Warsaw.", ""],
      ["1930–36", "Mission in Nagasaki, Japan.", ""],
      ["1941", "Arrested by the Gestapo; sent to Auschwitz as prisoner 16670.", ""],
      ["July 1941", "Offers his life for a man condemned to starve.", ""]
    ],
    quote: { t: "Hatred is not a creative force. Only love is creative.", by: "Maximilian Kolbe", r: "Words remembered by a fellow prisoner" },
    end: { how: "Killed by lethal injection in the starvation bunker", where: "Auschwitz, Poland", when: "14 August 1941, aged 47", source: "History", text: "In the bunker he led the dying men in prayers and hymns. After two weeks without food or water he was the last still alive, and the guards killed him with an injection. Franciszek Gajowniczek survived the war, returned to his wife, and lived to be ninety-three. In 1982 he stood in St Peter’s Square as Pope John Paul II declared Maximilian Kolbe a saint." },
    lessons: [
      { t: "Love goes first", d: "Kolbe did not wait to be asked. He stepped out of the line. Real love takes the first step." },
      { t: "Bring light into the darkest place", d: "In a bunker built to break men, he led them in songs and prayer. No place is too dark for God’s love to enter through us." },
      { t: "Small yeses prepare the great one", d: "Decades of daily faithfulness made that one heroic moment possible. Who we become is built every day." }
    ],
    practice: "Do one costly kindness today: give up your place, your time or your preference for someone else."
  },
  {
    id: "drexel", era: "modern", year: 1955, color: "#a0e07a", icon: "school",
    name: "Katharine Drexel", full: "Saint Katharine Drexel", title: "The Heiress Who Gave It All",
    lived: "1858 – 1955", from: "Philadelphia, United States", feast: "3 March", patron: "Racial justice, and those who give their wealth away",
    portrait: "s-drexel", pos: "46% 12%", scenes: [],
    story: [
      "Katharine Drexel was born into one of the richest families in America; her father was a banker and a partner of J. P. Morgan. Her stepmother opened the family home three afternoons a week to feed the poor, and taught the girls that wealth was only lent to them by God. When her father died in 1885, Katharine and her sisters inherited a fortune. On a journey west she saw the poverty in which Native Americans were forced to live — and nearer home, the injustice suffered by Black Americans in a country still divided by race.",
      "In 1887, in a private audience, she asked Pope Leo XIII to send more missionaries to the Native peoples. He looked at her and said, “Why not, my child, yourself become a missionary?” She did. In 1891 she founded the Sisters of the Blessed Sacrament to serve Native and Black Americans, and over the next sixty years gave away some twenty million dollars of her inheritance — spending almost nothing on herself. She opened around sixty missions and schools, and in 1925 founded Xavier University in New Orleans, the only Catholic university in the United States founded for Black students. Racist groups threatened her sisters and her schools. She kept building."
    ],
    moments: [
      ["1885", "Her father dies, leaving her and her sisters one of the great fortunes of America.", ""],
      ["1887", "Asks the Pope for missionaries; he replies, “Why not yourself?”", ""],
      ["1891", "Founds the Sisters of the Blessed Sacrament.", ""],
      ["1891–1935", "Opens schools and missions across the American South and West, in the face of threats.", ""],
      ["1925", "Founds Xavier University of Louisiana for Black students.", ""],
      ["1935", "A heart attack ends her active work; she spends her last twenty years in prayer.", ""]
    ],
    quote: { t: "Sell all that thou hast, and distribute unto the poor, and thou shalt have treasure in heaven: and come, follow me.", by: "Scripture", r: "Luke 18:22" },
    end: { how: "Died in peace, aged 96", where: "Cornwells Heights, Pennsylvania", when: "3 March 1955", source: "History", text: "After a heart attack in 1935 she spent her last two decades in quiet prayer, in a small room overlooking the chapel. She had given away a fortune and kept nothing but her vow of poverty. Pope John Paul II declared her a saint in 2000 — only the second saint ever born in the United States." },
    lessons: [
      { t: "What you have is on loan", d: "Katharine learned as a girl that wealth is God’s, entrusted to us for others. Everything we have — money, time, skills — is meant to be given." },
      { t: "Stand against injustice", d: "She saw people despised because of their race and refused to accept it, at a time when many Christians did. Faith that does not act for justice is not finished." },
      { t: "Be the answer to your own prayer", d: "She asked the Pope to send someone. He told her to go herself. Sometimes we are the answer to what we pray for." }
    ],
    practice: "Give something of real value this week — money, time or a skill — to people whom others look down on."
  },
  {
    id: "pio", era: "modern", year: 1968, color: "#f0a86a", icon: "wound", special: true,
    name: "Padre Pio", full: "Saint Pio of Pietrelcina", title: "Pray, Hope, and Don’t Worry",
    lived: "1887 – 1968", from: "Pietrelcina, near Benevento, Italy", feast: "23 September", patron: "Those who suffer, those who seek God’s mercy in confession, and civil-defence volunteers",
    portrait: "s-pio", pos: "45% 30%", endPos: "50% 50%", endImg: "s-pio-funeral", scenes: ["s-pio-1919", "s-pio-mass", "s-pio-lamb"],
    story: [
      "Francesco Forgione was born in 1887 in Pietrelcina, a poor farming village in southern Italy. His father went to America twice to work, so that the family could pay for his schooling. Francesco was a devout and sickly boy, who at fifteen joined the Capuchin friars and took the name Pio. His health was so poor that he was sent home again and again, and he was ordained a priest in 1910 almost against the odds. In 1916 he was sent to the friary of Our Lady of Grace at San Giovanni Rotondo, a remote town in the Gargano mountains — not far from the cave of Saint Michael the Archangel at Monte Sant’Angelo. He would live there for fifty-two years.",
      "On 20 September 1918, praying before the crucifix in the choir after Mass, he received the wounds of Christ in his hands, his feet and his side. They bled for fifty years. Doctors examined them and could not explain them. Church authorities, suspicious, restricted him for years; from 1931 to 1933 he was forbidden to say Mass in public or to hear confessions. He obeyed, without a word of complaint.",
      "Above all he was a confessor. People came from all over the world and waited for days to confess to him; he heard confessions for hours every day, could be gruff with the insincere, and was tender with the truly sorry. His Mass drew crowds before dawn. He prayed the Rosary constantly — he called it his weapon. Many reported healings, or that he had read their hearts. Yet his greatest work was practical: in 1956 he opened a great hospital, the Home for the Relief of Suffering, which still cares for the sick today."
    ],
    moments: [
      ["1903", "Joins the Capuchins at fifteen and takes the name Pio.", ""],
      ["1910", "Ordained a priest despite constant illness.", ""],
      ["1916", "Sent to the friary of San Giovanni Rotondo, where he will live for fifty-two years.", ""],
      ["20 September 1918", "Receives the wounds of Christ while praying before a crucifix.", ""],
      ["1931–33", "Forbidden to say Mass in public or to hear confessions. He obeys in silence.", ""],
      ["1947", "A young Polish priest, Karol Wojtyła — the future John Paul II — comes to make his confession to him.", ""],
      ["1956", "Opens the Home for the Relief of Suffering, a hospital for the poor.", ""]
    ],
    quote: { t: "Pray, hope, and don’t worry. Worry is useless. God is merciful and will hear your prayer.", by: "Padre Pio", r: "His counsel to those who came to him" },
    end: { how: "Died in peace, rosary in his hands", where: "San Giovanni Rotondo, Italy", when: "23 September 1968, aged 81", source: "History", text: "He said his last Mass on 22 September, two days after the fiftieth anniversary of his wounds. That night he made his confession, renewed his vows as a friar, and died in the early hours, whispering “Gesù, Maria” — “Jesus, Mary.” The wounds that had bled for fifty years had vanished, leaving no scar. About a hundred thousand people came to his funeral. Pope John Paul II, who had once knelt at his confessional, declared him a saint in 2002." },
    lessons: [
      { t: "Pray, hope, and don’t worry", d: "His most famous advice is also the simplest. Worry changes nothing; prayer changes us. Hand God the thing you cannot fix." },
      { t: "Suffering can be love", d: "He carried painful wounds for fifty years and offered them for others. Pain accepted with love is never wasted." },
      { t: "Humble when misunderstood", d: "Suspected and silenced by the Church he loved, he obeyed without bitterness — and in time the truth came out. Let God defend you." }
    ],
    practice: "Write down the worry weighing on you most. Pray over it, then put the paper away and say: “Jesus, I give this to You.” Each time it comes back today, repeat: pray, hope, and don’t worry."
  },
  {
    id: "mteresa", era: "modern", year: 1997, color: "#5b8cff", icon: "bowl",
    name: "Mother Teresa", full: "Saint Teresa of Calcutta", title: "Something Beautiful for God",
    lived: "1910 – 1997", from: "Skopje (in today’s North Macedonia)", feast: "5 September", patron: "The Missionaries of Charity, and all who serve the poor",
    portrait: "s-mteresa", scenes: ["s-mteresa-pray"],
    story: [
      "Anjezë Gonxhe Bojaxhiu was born in Skopje to an Albanian family. At eighteen she left home for good, joined the Loreto Sisters and was sent to India, where for nearly twenty years she taught girls in a convent school in Calcutta, behind high walls — while outside, the city’s poor were dying in the streets.",
      "On 10 September 1946, on a train to Darjeeling, she heard what she called “a call within a call”: to leave the convent and serve Christ in the poorest of the poor. She put on a cheap white sari with a blue border and walked into the slums alone. Girls she had taught came to join her. She opened a home where the dying could die with dignity, held by someone who loved them, then homes for abandoned babies, for people with leprosy, and later for people with AIDS. Only after her death did the world learn that for almost fifty years she had felt no sense of God’s presence at all — and served Him faithfully anyway."
    ],
    moments: [
      ["1928", "Leaves home at eighteen to become a Loreto sister.", ""],
      ["1946", "Hears the “call within a call” on a train to Darjeeling.", ""],
      ["1950", "Founds the Missionaries of Charity.", ""],
      ["1952", "Opens Nirmal Hriday, a home for the dying, at Kalighat.", ""],
      ["1979", "Receives the Nobel Peace Prize, and asks that the banquet be cancelled and the money given to the poor.", ""]
    ],
    quote: { t: "It is not how much we do, but how much love we put in the action that we do.", by: "Mother Teresa", r: "Nobel lecture, 1979" },
    end: { how: "Died of heart failure", where: "Calcutta (Kolkata), India", when: "5 September 1997, aged 87", source: "History", text: "India gave her a state funeral, and her coffin was carried on the gun carriage that had borne Gandhi’s. By then her sisters were serving the poor in more than a hundred countries. Pope Francis declared her a saint in 2016. In every one of their chapels, beside the crucifix, are written two words of Jesus from the cross: “I thirst.”" },
    lessons: [
      { t: "Begin with the one in front of you", d: "She never set out to change the world — only to pick up one dying man from the street. Then the next. Love starts small and close." },
      { t: "See Jesus in the poor", d: "“Ye have done it unto me.” She treated each person she washed and fed as if they were Christ — because she believed they were." },
      { t: "Keep going when you feel nothing", d: "Fifty years without feeling God near, and she never stopped serving. Faithfulness is not a feeling." }
    ],
    practice: "Look for one person today who is lonely, ignored or in need — and give them your full attention."
  },
  {
    id: "lucia", era: "modern", year: 2005, color: "#7fe0d0", icon: "rosary", stage: "Venerable",
    name: "Lúcia", full: "Venerable Lúcia of Fátima", title: "The One Who Stayed",
    lived: "1907 – 2005", from: "Aljustrel, Fátima, Portugal", feast: "Not yet: she is on the road to sainthood", patron: "Not yet named — her cause is still open",
    portrait: "s-lucia", pos: "50% 17%", endPos: "62% 22%", endImg: "s-lucia-1946", scenes: ["s-fatima-children"],
    story: [
      "Lúcia dos Santos was ten, the eldest of the three shepherd children of Fátima, and the only one who spoke with the Lady. She heard every word, remembered it, and repeated it to her cousins Francisco and Jacinta. In June 1917 the Lady told her, “Francisco and Jacinta I shall take soon. But you are to stay here some time longer. Jesus wishes to make use of you to make me known and loved.” Within three years both her cousins were dead. Lúcia was left alone with the questions, the crowds — and the doubts of her own mother, who for a long time believed she was lying.",
      "To protect her from the curious, the bishop sent her away to a convent school under a different name. She became a Dorothean sister, and then, in 1948, a Carmelite nun in Coimbra, where she lived hidden for the rest of her long life. At the bishop’s request she wrote down her memories of Fátima — including the secret the Lady had entrusted to the children, the third part of which she wrote out in 1944 and sealed in an envelope. In 1982, a year after he was shot on the anniversary of the first apparition, Pope John Paul II came to Fátima to give thanks, and met her. In 2000 she watched him beatify Francisco and Jacinta, and that same year the Vatican published the third part of the secret."
    ],
    moments: [
      ["1917", "The only one of the three who sees, hears and speaks with the Lady.", ""],
      ["13 June 1917", "Told that her cousins will go to heaven soon, but that she must stay longer.", ""],
      ["1921", "Sent away to school under another name, to shield her from the crowds.", ""],
      ["1944", "Writes down the third part of the secret of Fátima, and seals it.", ""],
      ["1948", "Enters the Carmel of Coimbra, where she will live for fifty-seven years.", ""],
      ["13 May 2000", "At Fátima, sees Pope John Paul II beatify Francisco and Jacinta.", ""]
    ],
    quote: { t: "Jesus wishes to make use of you to make me known and loved.", by: "Our Lady, to Lúcia", r: "Fátima, 13 June 1917" },
    end: { how: "Died in peace, aged 97", where: "The Carmel of Coimbra, Portugal", when: "13 February 2005", source: "History", text: "Portugal declared a day of national mourning. A year later she was laid to rest beside Francisco and Jacinta in the basilica at Fátima. Her cause for sainthood was opened in 2008, only three years after her death, and in 2023 the Church declared her Venerable — two steps from the title her cousins already bear." },
    lessons: [
      { t: "Sometimes the call is to stay", d: "Francisco and Jacinta went quickly to heaven. Lúcia’s mission was the long road: decades of faithfulness, mostly unseen. Both are holy." },
      { t: "Be faithful when you are doubted", d: "Even her own mother did not believe her. She kept telling the truth, gently, and left the rest to God." },
      { t: "Pray the Rosary for peace", d: "The message entrusted to her was simple: pray, make sacrifices, and pray the Rosary every day for peace in the world. It is still asked of us." }
    ],
    practice: "Pray one decade of the Rosary today for peace — for a country at war, and for a home you know that is at war with itself."
  },
  {
    id: "jp2", era: "modern", year: 2005, color: "#f3dc9a", icon: "ferula",
    name: "John Paul II", full: "Saint John Paul II", title: "Be Not Afraid",
    lived: "1920 – 2005", from: "Wadowice, Poland", feast: "22 October", patron: "World Youth Day, and families",
    portrait: "s-jp2", pos: "50% 12%", scenes: ["s-jp2-young", "s-jp2-kayak"],
    story: [
      "Karol Wojtyła lost his mother when he was eight, his only brother when he was twelve, and his father when he was twenty. Under the Nazi occupation of Poland he worked in a stone quarry and a chemical factory, acted in an underground theatre, and studied for the priesthood in secret, at the risk of his life. As a young priest he took students hiking and kayaking in the mountains; they called him “Uncle.”",
      "In 1978 he became the first non-Italian pope in 455 years. In his first homily he cried out, “Be not afraid! Open wide the doors for Christ!” He visited 129 countries — Sri Lanka among them in 1995, when he beatified Joseph Vaz in Colombo. On 13 May 1981 he was shot in St Peter’s Square and nearly died. Once he had recovered, he went to the prison cell of the man who had shot him, sat with him, and forgave him."
    ],
    moments: [
      ["1939–45", "Works in a quarry under Nazi occupation; studies in a secret seminary.", ""],
      ["1946", "Ordained a priest; later a chaplain who takes students into the mountains.", ""],
      ["1978", "Elected pope: “Be not afraid!”", ""],
      ["1981", "Shot in St Peter’s Square; two years later he visits his attacker in prison and forgives him.", ""],
      ["1995", "Visits Sri Lanka and beatifies Joseph Vaz in Colombo.", ""]
    ],
    quote: { t: "Be not afraid! Open wide the doors for Christ!", by: "John Paul II", r: "First homily as pope, 22 October 1978" },
    end: { how: "Died after a long illness", where: "The Vatican", when: "2 April 2005, aged 84", source: "History", text: "In his last years he lived with Parkinson’s disease in full view of the world, no longer hiding his weakness. As he lay dying, crowds of young people kept vigil beneath his window. At his funeral they chanted “Santo subito!” — “A saint, now!” He was declared a saint in 2014." },
    lessons: [
      { t: "Forgive the unforgivable", d: "He walked into the cell of the man who shot him and forgave him. Forgiveness is not pretending nothing happened; it is choosing to let go." },
      { t: "Don’t let fear decide", d: "War, occupation, a bullet, a long illness — none of them stopped him from saying what was true." },
      { t: "Suffering has dignity", d: "He let the world watch him grow weak. Age and illness do not take away a person’s worth, or their mission." }
    ],
    practice: "Name one person you have not forgiven. Today, pray for them by name — even if you cannot yet feel it."
  }
];

/* "What are you carrying?" — a companion for each struggle. [saint id, why this saint] */
window.COMPANIONS = [
  { id: "afraid", label: "I’m afraid", picks: [["joan", "A teenager facing armies and judges, she found her courage in prayer — and kept it to the end."], ["jp2", "He lived through war, occupation and an assassin’s bullet, and his first words as pope were “Be not afraid.”"]] },
  { id: "anxious", label: "I’m anxious about tomorrow", picks: [["pio", "“Pray, hope, and don’t worry. Worry is useless.” He said it to thousands who came to him frightened — and meant it."], ["teresa", "“Let nothing disturb you… God alone suffices.” She wrote it in the middle of opposition and illness."]] },
  { id: "past", label: "I’m ashamed of my past", picks: [["augustine", "He wasted years and hurt people he loved, and became one of the greatest saints. Your past is not the end of your story."], ["francis", "The party-loving merchant’s son became the poorest and happiest man in Italy."]] },
  { id: "mercy", label: "I don’t think God can forgive me", picks: [["faustina", "The whole message entrusted to her was this: the greater the sinner, the greater the right to God’s mercy."], ["vianney", "People crossed France to confess to him, and went home forgiven. He spent his life showing sinners how much God wanted them back."]] },
  { id: "loved", label: "Someone I love is far from God", picks: [["monica", "She prayed for her son for years without seeing a change — and he became Saint Augustine. The son of those tears was not lost."], ["catherine", "She walked with a condemned young man to his death and prayed for sinners as for her own family."]] },
  { id: "children", label: "I’m worried about my children", picks: [["joseph", "He protected his family through danger, exile and a frantic three-day search — and was only ever shown the next step."], ["bosco", "He gave his life to boys no one else wanted, and never gave up on a single one of them."]] },
  { id: "marriage", label: "My marriage is hard", picks: [["monica", "Married to a hot-tempered, unfaithful man, she answered with patience — and in the end he was baptised."], ["helena", "Set aside by her husband for a more useful marriage, she did not let rejection have the last word."]] },
  { id: "forgive", label: "I can’t forgive", picks: [["goretti", "At eleven, dying, she forgave the man who stabbed her — and wanted him in heaven with her. Years later, he repented."], ["jp2", "He visited the man who shot him, in prison, and forgave him face to face."]] },
  { id: "temper", label: "I lose my temper", picks: [["desales", "He was born with a fiery temper, worked at it for years, and became known as the gentlest man in France."], ["rita", "For eighteen years she answered a violent husband with patience — and slowly, he changed."]] },
  { id: "dignity", label: "Someone is using me", picks: [["agatha", "Offered wealth and safety at the price of her body and faith, she said no. Her dignity was not for sale."], ["goretti", "She knew her worth and refused, even at the cost of her life. If you have been hurt, it is never your fault."]] },
  { id: "pressure", label: "I’m pressured to do what’s wrong", picks: [["more", "He lost his office, his freedom and his life rather than lie."], ["aquinas", "His own family locked him up to change his mind. He stayed gentle — and stayed."]] },
  { id: "evil", label: "I feel surrounded by evil", picks: [["michael", "“Who is like God?” His very name is a battle cry. Ask for his help — evil does not have the last word."], ["clare", "Too ill to stand, she faced an army with nothing but the Blessed Sacrament held high. The soldiers fled."]] },
  { id: "unseen", label: "I feel small and unnoticed", picks: [["therese", "She never did anything the world would notice — and became one of the most loved saints of all."], ["anthony", "He washed dishes in obscurity, his gift unknown, until God brought it to light."]] },
  { id: "unbelieved", label: "No one believes me", picks: [["margaret", "Her sisters and superiors doubted her for years. She stayed humble and faithful, and the whole Church came to believe."], ["bernadette", "Questioned by the police, scolded by the priest, mocked by the town — she never changed her story."]] },
  { id: "suffering", label: "I’m sick or suffering", picks: [["damien", "He shared the illness of the people he served and turned it into solidarity."], ["therese", "Dying young, in pain and in darkness, she offered it all with love."]] },
  { id: "chronic", label: "I’ve been ill for a long time", picks: [["lidwina", "Thirty-eight years in bed after a fall on the ice, and she became a comfort to half of Holland."], ["bernadette", "In great pain, she said her job was to be ill — and she did that job with love."]] },
  { id: "impossible", label: "It feels impossible", picks: [["rita", "A violent marriage, a murdered husband, a door closed three times. She is called the saint of the impossible for good reason."], ["anne", "She longed for a child for years, and the answer came late — and greater than anything she had asked."]] },
  { id: "plans", label: "My plans have fallen apart", picks: [["ignatius", "A cannonball destroyed his plans — and gave him a better life than the one he had planned."], ["sebastian", "Shot, left for dead, nursed back to health — and he stood up again."]] },
  { id: "things", label: "I’m too attached to money and things", picks: [["francis", "He handed back everything, even his clothes, and found the joy he had been looking for."], ["nicholas", "He gave his fortune away in secret, and is still remembered every Christmas."]] },
  { id: "wealth", label: "I have more than I need", picks: [["drexel", "Born an heiress, she gave away a fortune to schools for people others despised, and kept nothing for herself."], ["clare", "She left a noble family’s comfort to own nothing at all — and called it a privilege."]] },
  { id: "dry", label: "My prayer feels dry", picks: [["teresa", "She struggled to pray for almost twenty years before prayer came alive."], ["mteresa", "For fifty years she felt nothing in prayer, and never stopped praying."]] },
  { id: "pray", label: "I don’t know how to pray", picks: [["francisco", "A ten-year-old who simply sat with “the Hidden Jesus” in the tabernacle, keeping Him company."], ["alphonsus", "He taught that we can talk to God as to the dearest of friends — about anything at all."]] },
  { id: "words", label: "I need the right words", picks: [["catherinealex", "At eighteen she faced fifty philosophers — and Christ gave her “a mouth and wisdom.”"], ["joan", "Unschooled and alone, she answered learned judges with a wisdom that still astonishes."]] },
  { id: "world", label: "I’m worried about the world", picks: [["lucia", "The message she carried for eighty years was simple: pray the Rosary every day for peace."], ["jacinta", "A seven-year-old who could not stop praying for people far from God, and for the Pope."]] },
  { id: "purpose", label: "I want my life to matter", picks: [["xavier", "One question — “what shall it profit a man?” — sent him to the ends of the earth."], ["vaz", "He gave everything to a forgotten flock on our own island, and rebuilt a Church."]] }
];

/* Sri Lanka: Joseph Vaz's road, and saints honoured across the island. Points are [label, lon, lat]. */
window.LANKA = {
  route: [
    { place: "Jaffna", lon: 80.01, lat: 9.66, year: "1687", text: "Lands disguised as a coolie, so ill he can barely walk. Taken in by Catholic families, he says Mass in secret, moving from house to house by night." },
    { place: "Puttalam", lon: 79.83, lat: 8.03, year: "1690", text: "Crosses into the Kingdom of Kandy, where Catholics are tolerated, and begins to travel the island on foot." },
    { place: "Kandy", lon: 80.64, lat: 7.29, year: "1692", text: "Arrested as a Portuguese spy. In prison he learns Sinhala — and his gentleness wins over his guards." },
    { place: "Kandy", lon: 80.64, lat: 7.29, year: "1696", text: "Drought. At the king’s request he prays, and heavy rain falls. King Vimaladharmasuriya II grants him freedom to preach." },
    { place: "Colombo", lon: 79.86, lat: 6.93, year: "1697 –", text: "Slips into Dutch territory in disguise to bring the sacraments to hidden Catholics on the coast." },
    { place: "Kandy", lon: 80.64, lat: 7.29, year: "1711", text: "Dies on 16 January. He leaves behind a Church of tens of thousands, and priests to serve it." },
    { place: "Colombo", lon: 79.85, lat: 6.93, year: "1995 · 2015", text: "Beatified by Pope John Paul II in Colombo, and declared a saint by Pope Francis at Galle Face Green — the first canonisation on Sri Lankan soil." }
  ],
  shrines: [
    { saint: "anthony", name: "St Anthony’s Shrine", place: "Kochchikade, Colombo", lon: 79.857, lat: 6.947, text: "By tradition it began in the Dutch era, when a priest in hiding prayed and the sea drew back from the shore. Every Tuesday people of every faith come to pray. Struck on Easter Sunday 2019, it was rebuilt and reopened within months." },
    { saint: "sebastian", name: "St Sebastian’s Church", place: "Katuwapitiya, Negombo", lon: 79.87, lat: 7.18, text: "Negombo, so Catholic it is called “Little Rome,” has long loved the soldier saint. On Easter Sunday 2019 more than a hundred worshippers were killed here; the church was restored, and the parish prays on." },
    { saint: "vaz", name: "St Joseph Vaz", place: "Kandy", lon: 80.64, lat: 7.29, text: "The city where he was imprisoned, where the rain fell at his prayer, where he nursed the dying, and where he died in 1711." },
    { saint: "anne", name: "St Anne’s Church", place: "Talawila, Kalpitiya", lon: 79.72, lat: 8.2, text: "Mary’s mother draws vast crowds of pilgrims to the shore of the Kalpitiya peninsula, especially for her feasts in March and July." },
    { saint: null, img: "sassoferrato", name: "Our Lady of Madhu", place: "Madhu, Mannar", lon: 80.2, lat: 8.85, link: "mary.html#shrines", text: "The island’s great Marian shrine, born of families fleeing persecution — the same years in which Joseph Vaz was hiding with his people." }
  ]
};
