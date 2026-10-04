/*
 * The Saints: nineteen lives across twenty centuries, and what they teach us.
 * Scripture (KJV) is cited where the Bible records an event. Where a story comes
 * from tradition rather than history, its source says so ("Tradition").
 * `year` places each saint on the timeline; `lessons` and `practice` are the heart
 * of every chapter: what we can learn from them, and one way to live it today.
 * `pos` is where the face sits in the portrait (as CSS object-position), `endPos` the
 * same for `endImg`; `zoom` crops in on a portrait photographed in its frame.
 */

window.SAINT_ERAS = [
  {
    id: "first", n: "I", span: "1st – 5th centuries", title: "The first centuries",
    text: "From a carpenter’s house in Nazareth to the arenas of Rome and the libraries of North Africa: the Church is born, persecuted, and learns to think.",
    also: "Also of these years: Stephen, Agnes, Lucy, Cecilia, Ambrose, Jerome, Monica."
  },
  {
    id: "middle", n: "II", span: "13th – 15th centuries", title: "The Middle Ages",
    text: "Cathedrals rise and universities are founded, and God raises up a beggar, a preacher, a scholar, a mystic and a shepherd girl to renew His Church.",
    also: "In the long centuries before them: Benedict, Patrick, Gregory the Great, Bede, Bernard, Dominic, Clare."
  },
  {
    id: "reform", n: "III", span: "16th – 18th centuries", title: "Reform and mission",
    text: "The Church is torn and renewed while ships open the world. Saints reform it from within and carry the Gospel to India, Japan — and Sri Lanka.",
    also: "Also of these years: John of the Cross, Philip Neri, Rose of Lima, Vincent de Paul, Martin de Porres, Peter Claver."
  },
  {
    id: "modern", n: "IV", span: "19th – 21st centuries", title: "Our own times",
    text: "Saints with photographs. They lived in a world of trains, wars, cameras and microphones — a world very like ours.",
    also: "Also of these years: John Vianney, Bernadette, John Bosco, Josephine Bakhita, Padre Pio, Faustina, Carlo Acutis."
  }
];

window.SAINTS = [
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
  { id: "past", label: "I’m ashamed of my past", picks: [["augustine", "He wasted years and hurt people he loved, and became one of the greatest saints. Your past is not the end of your story."], ["francis", "The party-loving merchant’s son became the poorest and happiest man in Italy."]] },
  { id: "loved", label: "Someone I love is far from God", picks: [["augustine", "His mother Monica prayed for him for years without seeing a change — and her prayers were answered."], ["catherine", "She walked with a condemned young man to his death and prayed for sinners as for her own family."]] },
  { id: "forgive", label: "I can’t forgive", picks: [["jp2", "He visited the man who shot him, in prison, and forgave him face to face."], ["more", "On the scaffold he forgave his executioner and encouraged him."]] },
  { id: "anxious", label: "I’m anxious about tomorrow", picks: [["teresa", "“Let nothing disturb you… God alone suffices.” She wrote it in the middle of opposition and illness."], ["joseph", "He was only ever shown the next step, usually at night — and it was always enough."]] },
  { id: "unseen", label: "I feel small and unnoticed", picks: [["therese", "She never did anything the world would notice — and became one of the most loved saints of all."], ["anthony", "He washed dishes in obscurity, his gift unknown, until God brought it to light."]] },
  { id: "suffering", label: "I’m sick or suffering", picks: [["damien", "He shared the illness of the people he served and turned it into solidarity."], ["therese", "Dying young, in pain and in darkness, she offered it all with love."]] },
  { id: "plans", label: "My plans have fallen apart", picks: [["ignatius", "A cannonball destroyed his plans — and gave him a better life than the one he had planned."], ["sebastian", "Shot, left for dead, nursed back to health — and he stood up again."]] },
  { id: "pressure", label: "I’m pressured to do what’s wrong", picks: [["more", "He lost his office, his freedom and his life rather than lie."], ["aquinas", "His own family locked him up to change his mind. He stayed gentle — and stayed."]] },
  { id: "things", label: "I’m too attached to money and things", picks: [["francis", "He handed back everything, even his clothes, and found the joy he had been looking for."], ["nicholas", "He gave his fortune away in secret, and is still remembered every Christmas."]] },
  { id: "dry", label: "My prayer feels dry", picks: [["teresa", "She struggled to pray for almost twenty years before prayer came alive."], ["mteresa", "For fifty years she felt nothing in prayer, and never stopped praying."]] },
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
    { saint: null, img: "t-anne", name: "St Anne’s Church", place: "Talawila, Kalpitiya", lon: 79.72, lat: 8.2, text: "Mary’s mother draws vast crowds of pilgrims to the shore of the Kalpitiya peninsula, especially for her feasts in March and July." },
    { saint: null, img: "sassoferrato", name: "Our Lady of Madhu", place: "Madhu, Mannar", lon: 80.2, lat: 8.85, link: "mary.html#shrines", text: "The island’s great Marian shrine, born of families fleeing persecution — the same years in which Joseph Vaz was hiding with his people." }
  ]
};
