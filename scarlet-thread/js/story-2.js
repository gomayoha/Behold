/* ==========================================================================
   The Scarlet Thread — the story, part two: the Kingdom to the Silence.
   ========================================================================== */
window.AGES = window.AGES || [];

window.AGES.push(
/* ─────────────────────────────── VI ─────────────────────────────── */
{
  id: "kingdom", n: "VI", t: "A Man After His Own Heart", s: "The Kingdom", books: "1 & 2 Samuel · 1 Chronicles · Psalms", yl: "c. 1105 – 970 BC",
  c: "#c8a6ff", sh: "crown",
  v: "The LORD is my shepherd; I shall not want.", r: "Psalm 23:1",
  x: "Israel asked for a king like all the nations. God gave them Saul, then chose a shepherd boy, and promised him a throne that would last for ever.",
  scenes: [
    {
      id: "hannah", t: "Speak; for thy servant heareth.", k: "1 Samuel 1–3", pl: "Shiloh", y: -1105, b: ["1sa"],
      x: "Hannah wept at the tabernacle in Shiloh, praying so silently that the priest Eli thought she was drunk. God gave her a son, Samuel, and she gave him back, to serve in the house of the LORD. One night, the boy heard a voice calling his name.",
      q: "Then Samuel answered, Speak; for thy servant heareth.", r: "1 Samuel 3:10",
      cast: [["Hannah", "Who prayed for a son and gave him back"], ["Samuel", "Prophet, priest, and the last of the judges"], ["Eli", "The old priest of Shiloh"]],
      art: "samuel", lay: "plate", side: "l", sh: "ring"
    },
    {
      id: "saul", t: "Give us a king.", k: "1 Samuel 8–15", pl: "Gibeah", y: -1050, b: ["1sa"],
      x: "When Samuel grew old, the people demanded a king to judge them like all the nations. Samuel anointed Saul, who stood head and shoulders above all the people. But Saul grew impatient, offered the sacrifice himself, spared what God had told him to destroy, and God rejected him as king.",
      q: "Behold, to obey is better than sacrifice, and to hearken than the fat of rams.", r: "1 Samuel 15:22",
      cast: [["Saul", "Israel’s first king, of the tribe of Benjamin"]],
      lay: "word", sh: "crown"
    },
    {
      id: "anointed", t: "The LORD looketh on the heart.", k: "1 Samuel 16", pl: "Bethlehem", y: -1025, b: ["1sa"],
      x: "God sent Samuel to Bethlehem, to the house of Jesse. Seven sons passed before him, and none was chosen. “Are here all thy children?” Samuel asked. The youngest was out keeping the sheep. They sent for David, and Samuel anointed him in the midst of his brothers, and the Spirit of the LORD came upon him from that day forward.",
      q: "For man looketh on the outward appearance, but the LORD looketh on the heart.", r: "1 Samuel 16:7",
      cast: [["David", "Shepherd, giant-killer, psalmist, king"], ["Jesse", "Of Bethlehem, David’s father"]],
      art: "david-anointed", lay: "plate", side: "r", sh: "crown"
    },
    {
      id: "goliath", t: "The battle is the LORD’s.", k: "1 Samuel 17", pl: "The valley of Elah", y: -1024, b: ["1sa"],
      x: "For forty days the Philistine champion Goliath of Gath defied the armies of Israel, morning and evening. David, too young to be a soldier, came with food for his brothers and heard the taunts. He refused Saul’s armour, chose five smooth stones out of the brook, and ran toward the giant.",
      q: "Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the LORD of hosts.", r: "1 Samuel 17:45",
      cast: [["Goliath", "The champion of Gath, six cubits and a span"]],
      art: "goliath", fx: { type: "goliath" }, sh: "sphere", h: 3.6
    },
    {
      id: "jonathan", t: "How are the mighty fallen.", k: "1 Samuel 18 – 2 Samuel 1", pl: "Gibeah · Mount Gilboa", y: -1015, b: ["1sa", "2sa"],
      x: "Saul’s son Jonathan loved David as his own soul, and gave him his robe, his sword and his bow. As Saul’s jealousy turned murderous, Jonathan warned David to flee. For years David lived as a fugitive, and twice he spared Saul’s life. When Saul and Jonathan fell in battle on Mount Gilboa, David wept.",
      q: "How are the mighty fallen in the midst of the battle!", r: "2 Samuel 1:25",
      cast: [["Jonathan", "Saul’s son, David’s truest friend"], ["Michal", "Saul’s daughter, David’s first wife"], ["Abigail", "Whose wisdom kept David from bloodshed"]],
      art: "david-jonathan", lay: "plate", side: "l", sh: "dome"
    },
    {
      id: "king-david", t: "Thy throne shall be established for ever.", k: "2 Samuel 5–7 · 1 Chronicles", pl: "Jerusalem", y: -1003, b: ["2sa", "1ch"],
      x: "David became king over all Israel, took the stronghold of Zion, and made Jerusalem his city. He brought the ark of the covenant up with shouting and trumpets, and danced before the LORD with all his might. He longed to build God a house, but God promised instead to build David a house: a dynasty, and a kingdom without end.",
      q: "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever.", r: "2 Samuel 7:16",
      art: "david-dance", lay: "full", th: "throne", sh: "crown"
    },
    {
      id: "nathan", t: "Thou art the man.", k: "2 Samuel 11–12 · Psalm 51", pl: "Jerusalem", y: -993, b: ["2sa", "psa"],
      x: "At the height of his power, David took Bathsheba, the wife of Uriah, one of his most loyal soldiers, and arranged for Uriah to die in battle. The prophet Nathan told him a story of a rich man who stole a poor man’s only lamb. David burned with anger, until Nathan said four words. David’s repentance became Psalm 51.",
      q: "Create in me a clean heart, O God; and renew a right spirit within me.", r: "Psalm 51:10",
      cast: [["Bathsheba", "Wife of Uriah, mother of Solomon"], ["Uriah the Hittite", "One of David’s mighty men"], ["Nathan", "The prophet who confronted the king"]],
      art: "nathan", lay: "plate", side: "r", sh: "ash"
    },
    {
      id: "absalom", t: "O my son.", k: "2 Samuel 15–18", pl: "The wood of Ephraim", y: -979, b: ["2sa"],
      x: "The sword never departed from David’s house. His son Absalom stole the hearts of Israel and drove his father out of Jerusalem. In the battle that followed, Absalom’s head caught fast in the branches of an oak, and he was killed. The victory broke David’s heart.",
      q: "O my son Absalom, my son, my son Absalom! would God I had died for thee, O Absalom, my son, my son!", r: "2 Samuel 18:33",
      cast: [["Absalom", "David’s handsome, rebellious son"], ["Joab", "Captain of David’s army"]],
      art: "absalom", lay: "plate", side: "l", sh: "tree"
    },
    {
      id: "psalms", t: "The songs of Israel.", k: "The Book of Psalms", yl: "A thousand years of song", b: ["psa"],
      x: "David the shepherd-king wrote many of the hundred and fifty psalms: songs of praise and lament, of anger, trust and joy, prayed by Israel and the Church ever since. The best loved of them all is a shepherd’s song.",
      art: "david-harp",
      fx: { type: "verse", lines: [
        ["The LORD is my shepherd; I shall not want.", "23:1"],
        ["He maketh me to lie down in green pastures: he leadeth me beside the still waters.", "23:2"],
        ["He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.", "23:3"],
        ["Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.", "23:4"],
        ["Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.", "23:5"],
        ["Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.", "23:6"]
      ], cite: "Psalm" },
      sh: "dome", h: 5
    },
    {
      id: "psalm22", t: "Why hast thou forsaken me?", k: "Psalm 22", yl: "A thousand years before the cross", b: ["psa"],
      x: "Another of David’s psalms begins in agony and ends in praise. In between, it describes a death no one in David’s day would have recognised: mocking crowds, pierced hands and feet, and soldiers gambling for clothing. A thousand years later, a man on a cross would cry out its first line.",
      q: "My God, my God, why hast thou forsaken me?", r: "Psalm 22:1",
      lay: "word", th: "psalm22", sh: "cross"
    }
  ]
},

/* ─────────────────────────────── VII ─────────────────────────────── */
{
  id: "wisdom", n: "VII", t: "Wisdom and a Divided Crown", s: "Solomon", books: "1 Kings 1–12 · 2 Chronicles · Proverbs · Ecclesiastes · Song of Songs · Wisdom · Sirach", yl: "c. 970 – 931 BC",
  c: "#f0cf7a", sh: "temple",
  v: "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.", r: "Proverbs 9:10",
  x: "Solomon asked for wisdom, and was given glory besides. He built God a house of cedar and gold. And then his heart was turned.",
  scenes: [
    {
      id: "solomon", t: "An understanding heart.", k: "1 Kings 3", pl: "Gibeon · Jerusalem", y: -970, b: ["1ki"],
      x: "God appeared to young King Solomon in a dream: Ask what I shall give thee. Solomon asked for an understanding heart. Soon two women came before him, each claiming the same baby. Bring me a sword, said the king, and divide the living child in two. The true mother cried out to save her son, and all Israel saw that the wisdom of God was in him.",
      q: "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad.", r: "1 Kings 3:9",
      cast: [["Solomon", "The wise king, son of David and Bathsheba"], ["The two mothers", "Who came to Solomon for judgement"]],
      art: "judgment-solomon", lay: "full", sh: "temple"
    },
    {
      id: "temple", t: "The glory of the LORD filled the house.", k: "1 Kings 6–8 · 2 Chronicles 2–7", pl: "Mount Moriah, Jerusalem", y: -966, b: ["1ki", "2ch"],
      x: "Four hundred and eighty years after the Exodus, Solomon began the temple on Mount Moriah, where Abraham had once offered Isaac. Seven years of cedar, stone and gold. When the ark was carried into the Most Holy Place, a cloud filled the house, so that the priests could not stand to minister.",
      q: "But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?", r: "1 Kings 8:27",
      art: "temple-dedication", lay: "portal", sh: "temple"
    },
    {
      id: "sheba", t: "The half was not told me.", k: "1 Kings 10", pl: "Jerusalem", y: -946, b: ["1ki", "2ch"],
      x: "Solomon’s fame reached the ends of the known world. The queen of Sheba came with camels bearing spices, gold and precious stones, to prove him with hard questions. He answered them all. A thousand years later, Jesus would say that one greater than Solomon was here.",
      q: "Behold, the half was not told me: thy wisdom and prosperity exceedeth the fame which I heard.", r: "1 Kings 10:7",
      cast: [["The queen of Sheba", "Who came from the south to hear Solomon’s wisdom"]],
      art: "sheba", lay: "full", sh: "crown"
    },
    {
      id: "wise", t: "The words of the wise.", k: "Proverbs · Ecclesiastes · Song of Songs · Wisdom · Sirach", yl: "The wisdom of Israel", b: ["pro", "ecc", "sng", "wis", "sir"],
      x: "Solomon spoke three thousand proverbs, and his songs were a thousand and five. Israel’s wisdom books ask how to live well, why life is so fleeting, and what love is. The Book of Wisdom and Sirach, written centuries later, carry the same tradition forward.",
      fx: { type: "steps", style: "wisdom", steps: [
        { n: "Proverbs", t: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", r: "Proverbs 3:5", b: "pro" },
        { n: "Ecclesiastes", t: "To every thing there is a season, and a time to every purpose under the heaven.", r: "Ecclesiastes 3:1", b: "ecc" },
        { n: "Song of Songs", t: "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death.", r: "Song of Solomon 8:6", b: "sng" },
        { n: "Wisdom", t: "But the souls of the righteous are in the hand of God, and there shall no torment touch them.", r: "Wisdom 3:1", b: "wis" },
        { n: "Sirach", t: "My son, if thou come to serve the Lord, prepare thy soul for temptation.", r: "Sirach 2:1", b: "sir" }
      ] },
      sh: "scroll", h: 4.4
    },
    {
      id: "divided", t: "The kingdom torn in two.", k: "1 Kings 11–12", pl: "Shechem", y: -931, b: ["1ki"],
      x: "Solomon loved many foreign women, and in his old age they turned his heart after other gods. After his death his son Rehoboam answered the people roughly, and ten tribes broke away under Jeroboam, who set up golden calves at Bethel and Dan. Israel in the north, Judah in the south: the kingdom would never be whole again.",
      q: "My father also chastised you with whips, but I will chastise you with scorpions.", r: "1 Kings 12:14",
      cast: [["Rehoboam", "Solomon’s son, king of Judah"], ["Jeroboam", "First king of the northern kingdom of Israel"]],
      fx: { type: "divide" }, sh: "split", h: 3
    }
  ]
},

/* ─────────────────────────────── VIII ─────────────────────────────── */
{
  id: "prophets", n: "VIII", t: "Prophets of Fire", s: "The Prophets", books: "1 & 2 Kings · Jonah · Amos · Hosea · Joel · Isaiah · Micah · Nahum · Zephaniah · Tobit", yl: "c. 870 – 622 BC",
  c: "#ff6a45", sh: "flame",
  v: "Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.", r: "Isaiah 6:8",
  x: "Kings rose and fell, most of them doing evil in the sight of the LORD. So God sent prophets: voices of fire, calling His people home.",
  scenes: [
    {
      id: "elijah", t: "Fed by ravens.", k: "1 Kings 16–17", pl: "The brook Cherith · Zarephath", y: -870, b: ["1ki"],
      x: "Ahab, king of Israel, married Jezebel and built a temple to Baal. The prophet Elijah stood before him: “There shall not be dew nor rain these years, but according to my word.” For three and a half years the sky was shut. God fed Elijah by ravens at a brook, and then by a widow in Zarephath whose meal and oil never ran out.",
      q: "And the ravens brought him bread and flesh in the morning, and bread and flesh in the evening; and he drank of the brook.", r: "1 Kings 17:6",
      cast: [["Elijah", "The Tishbite, prophet of fire"], ["Ahab", "King of Israel"], ["Jezebel", "His queen, a worshipper of Baal"], ["The widow of Zarephath", "Whose son Elijah raised"]],
      art: "elijah-ravens", lay: "plate", side: "l", sh: "dome"
    },
    {
      id: "carmel", t: "The LORD, he is the God.", k: "1 Kings 18", pl: "Mount Carmel", y: -866, b: ["1ki"],
      x: "On Mount Carmel, Elijah challenged four hundred and fifty prophets of Baal: two altars, two bulls, no fire. “The God that answereth by fire, let him be God.” They cried to Baal from morning until evening. Elijah drenched his altar with water three times over, and prayed once. The fire of the LORD fell, and consumed the sacrifice, the wood, the stones and the dust.",
      q: "And when all the people saw it, they fell on their faces: and they said, The LORD, he is the God; the LORD, he is the God.", r: "1 Kings 18:39",
      art: "carmel", fx: { type: "fire" }, sh: "flame", h: 3.2
    },
    {
      id: "whisper", t: "A still small voice.", k: "1 Kings 19", pl: "Horeb, the mount of God", y: -866, b: ["1ki"],
      x: "Threatened by Jezebel, Elijah fled into the desert and asked to die. An angel fed him, and he walked forty days to Horeb, the mountain of God. There the LORD passed by.",
      fx: { type: "steps", style: "whisper", steps: [
        { t: "wind", x: "And, behold, the LORD passed by, and a great and strong wind rent the mountains, and brake in pieces the rocks before the LORD; but the LORD was not in the wind:" },
        { t: "earthquake", x: "and after the wind an earthquake; but the LORD was not in the earthquake:" },
        { t: "fire", x: "And after the earthquake a fire; but the LORD was not in the fire:" },
        { t: "voice", x: "and after the fire a still small voice." }
      ], r: "1 Kings 19:11–12" },
      art: "elijah-wilderness", sh: "whirlwind", h: 4.4
    },
    {
      id: "chariot", t: "A chariot of fire.", k: "2 Kings 2", pl: "Beyond the Jordan", y: -850, b: ["2ki"],
      x: "Elisha would not leave his master’s side. As they went on and talked, a chariot of fire and horses of fire parted them, and Elijah went up by a whirlwind into heaven. His mantle fell, and Elisha took it up. He had asked for a double portion of Elijah’s spirit.",
      q: "My father, my father, the chariot of Israel, and the horsemen thereof.", r: "2 Kings 2:12",
      cast: [["Elisha", "Elijah’s successor, with a double portion"]],
      art: "elijah-chariot", lay: "full", posm: "78% 50%", sh: "whirlwind"
    },
    {
      id: "elisha", t: "Wash, and be clean.", k: "2 Kings 4–6", pl: "Israel · the Jordan", y: -845, b: ["2ki"],
      x: "Elisha’s ministry overflowed with wonders: a widow’s oil that filled every jar she could borrow, a Shunammite woman’s son raised to life, an axe head that floated. Naaman, a Syrian general with leprosy, was told to wash seven times in the Jordan. He was insulted. Then he obeyed, and his flesh came again like unto the flesh of a little child.",
      q: "How much rather then, when he saith to thee, Wash, and be clean?", r: "2 Kings 5:13",
      cast: [["Naaman", "Captain of the host of Syria, a leper"], ["The Shunammite woman", "Who made a room for the prophet"], ["Gehazi", "Elisha’s servant"]],
      art: "naaman", lay: "plate", side: "r", sh: "sea"
    },
    {
      id: "jonah", t: "Salvation is of the LORD.", k: "The Book of Jonah", pl: "Joppa · the deep · Nineveh", y: -780, b: ["jon"],
      x: "God sent Jonah to preach to Nineveh, the capital of Israel’s cruellest enemy. Jonah boarded a ship going the other way. In the storm, the sailors threw him into the sea, and a great fish swallowed him. Three days later he was on dry land. When he finally preached, the whole city repented, from the king to the cattle. God spared it, and it displeased Jonah exceedingly.",
      q: "And Jonah was in the belly of the fish three days and three nights.", r: "Jonah 1:17",
      cast: [["Jonah", "The reluctant prophet"], ["The king of Nineveh", "Who covered himself with sackcloth"]],
      art: "jonah", fx: { type: "deep" }, th: "jonah", sh: "deep", h: 3.6
    },
    {
      id: "voices", t: "Let judgment run down as waters.", k: "Amos · Hosea · Joel", pl: "The northern kingdom", y: -760, b: ["amo", "hos", "jol"],
      x: "In the north, Israel grew rich and forgot God. The prophets spoke for Him: a herdsman from Tekoa, a husband whose wife was unfaithful, a man watching locusts strip the land bare.",
      fx: { type: "steps", style: "voices", steps: [
        { n: "Amos", d: "A herdsman of Tekoa", t: "But let judgment run down as waters, and righteousness as a mighty stream.", r: "Amos 5:24", b: "amo" },
        { n: "Hosea", d: "Who loved an unfaithful wife", t: "How shall I give thee up, Ephraim? how shall I deliver thee, Israel?", r: "Hosea 11:8", b: "hos" },
        { n: "Joel", d: "After the locusts", t: "I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.", r: "Joel 2:28", b: "jol", th: "spirit" }
      ] },
      sh: "flame", h: 4
    },
    {
      id: "isaiah", t: "Holy, holy, holy.", k: "Isaiah 6 · 2 Kings 18–19", pl: "Jerusalem", y: -740, b: ["isa", "2ki", "2ch"],
      x: "In the year that King Uzziah died, Isaiah saw the Lord, high and lifted up, and seraphim crying one to another. A live coal touched his lips. For sixty years he spoke to Judah’s kings. When Sennacherib of Assyria besieged Jerusalem, King Hezekiah spread the enemy’s letter before the LORD, and in one night the Assyrian army was struck down.",
      q: "Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.", r: "Isaiah 6:3",
      cast: [["Isaiah", "The prophet of Jerusalem"], ["Hezekiah", "A good king of Judah"], ["Sennacherib", "King of Assyria"]],
      art: "isaiah", lay: "full", pos: "50% 16%", sh: "rings"
    },
    {
      id: "samaria", t: "None left but Judah.", k: "2 Kings 17", pl: "Samaria", y: -722, b: ["2ki"],
      x: "All nineteen of the northern kings did evil in the sight of the LORD. In 722 BC the Assyrians took Samaria and carried the ten northern tribes away, scattering them among the nations. They never returned as a people.",
      q: "Therefore the LORD was very angry with Israel, and removed them out of his sight: there was none left but the tribe of Judah only.", r: "2 Kings 17:18",
      lay: "word", sh: "ash"
    },
    {
      id: "tobit", t: "Tobias and the angel.", k: "The Book of Tobit", pl: "Nineveh · Ecbatana", y: -710, b: ["tob"],
      x: "Among the exiles in Nineveh lived Tobit, a righteous man who buried the dead at the risk of his life. Blinded and poor, he sent his son Tobias on a long journey, with a companion who was secretly the archangel Raphael. Tobias came home with a bride, Sarah, and a cure for his father’s eyes.",
      q: "I am Raphael, one of the seven holy angels, which present the prayers of the saints.", r: "Tobit 12:15",
      cast: [["Tobit", "A righteous exile in Nineveh"], ["Tobias", "His son"], ["Raphael", "The archangel, whose name means “God heals”"], ["Sarah", "The bride of Tobias"]],
      art: "tobias", lay: "plate", side: "l", sh: "ring"
    },
    {
      id: "servant", t: "A man of sorrows.", k: "Isaiah 7; 9; 53 · Micah 5", pl: "Jerusalem", y: -700, b: ["isa", "mic"],
      x: "Isaiah saw further than any prophet: a child born of a virgin, a son given, and a servant of the LORD who would suffer for the sins of others. His contemporary Micah named the very town: Bethlehem.",
      fx: { type: "verse", style: "scarlet", lines: [
        ["He is despised and rejected of men; a man of sorrows, and acquainted with grief.", "53:3"],
        ["Surely he hath borne our griefs, and carried our sorrows.", "53:4"],
        ["But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.", "53:5"],
        ["All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.", "53:6"],
        ["He is brought as a lamb to the slaughter.", "53:7"]
      ], cite: "Isaiah" },
      th: ["virgin", "child", "servant", "bethlehem"], sh: "cross", h: 5
    },
    {
      id: "josiah", t: "The book in the temple.", k: "2 Kings 22–23 · Zephaniah · Nahum", pl: "Jerusalem", y: -622, b: ["2ki", "2ch", "zep", "nam"],
      x: "Manasseh, Hezekiah’s son, reigned fifty-five years and filled Jerusalem with idols. His grandson Josiah became king at eight years old. Repairing the temple, the priests found the book of the law, long forgotten. Josiah tore his clothes, read it to all the people, and swept the idols from the land. Zephaniah prophesied in his days, and Nahum foretold the fall of Nineveh.",
      q: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy.", r: "Zephaniah 3:17",
      cast: [["Josiah", "The boy king who found the law"], ["Manasseh", "The longest-reigning king of Judah"], ["Huldah", "The prophetess who declared the book’s meaning"]],
      lay: "word", sh: "scroll"
    }
  ]
},

/* ─────────────────────────────── IX ─────────────────────────────── */
{
  id: "exile", n: "IX", t: "By the Rivers of Babylon", s: "The Exile", books: "2 Kings · 2 Chronicles · Jeremiah · Lamentations · Baruch · Ezekiel · Daniel · Habakkuk · Obadiah · Judith", yl: "c. 627 – 538 BC",
  c: "#9ec0e6", sh: "ash",
  v: "By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.", r: "Psalm 137:1",
  x: "Judah did not listen either. The temple burned, Jerusalem fell, and God’s people sat as captives in a foreign land. Yet even there, He was with them.",
  scenes: [
    {
      id: "jeremiah", t: "The weeping prophet.", k: "Jeremiah · Habakkuk · Baruch", pl: "Jerusalem", y: -605, b: ["jer", "hab", "bar"],
      x: "Jeremiah was called as a child and preached for forty years to people who would not listen. He was beaten, put in the stocks and let down into a cistern of mire. He watched a potter remake a marred vessel, and saw God’s patience. In his darkest hour he foretold a new covenant, written not on stone but on the heart. His scribe Baruch wrote his words down; Habakkuk, in the same years, learned that the just shall live by his faith.",
      q: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", r: "Jeremiah 29:11",
      cast: [["Jeremiah", "The weeping prophet of Anathoth"], ["Baruch", "Jeremiah’s faithful scribe"], ["Habakkuk", "Who questioned God and waited"]],
      art: "jeremiah", lay: "plate", side: "r", th: "newcov", sh: "ash"
    },
    {
      id: "fall-jerusalem", t: "New every morning.", k: "2 Kings 25 · Lamentations · Obadiah", pl: "Jerusalem · Babylon", y: -586, b: ["2ki", "2ch", "lam", "oba"],
      x: "In 586 BC Nebuchadnezzar’s army broke through the walls. Solomon’s temple was burned, King Zedekiah’s sons were slain before his eyes, and the people were led away to Babylon. Edom gloated, and Obadiah answered: as thou hast done, it shall be done unto thee. Jeremiah wept over the ruins in the five poems of Lamentations, and in the midst of that grief, he wrote this.",
      q: "It is of the LORD’S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", r: "Lamentations 3:22–23",
      cast: [["Nebuchadnezzar", "King of Babylon"], ["Zedekiah", "The last king of Judah"]],
      art: "exiles", lay: "full", pos: "50% 80%", posm: "50% 50%", zoom: "50% 100%", zs: 1.32, fx: { type: "embers" }, sh: "ash"
    },
    {
      id: "bones", t: "Can these bones live?", k: "Ezekiel", pl: "By the river Chebar", y: -585, b: ["ezk"],
      x: "Ezekiel, a priest among the exiles, saw visions by the river Chebar: wheels within wheels, and the glory of God departing from the temple. Then the hand of the LORD set him down in a valley full of dry bones. Prophesy, said God. There was a noise, and a shaking, and the bones came together, bone to his bone.",
      q: "And the breath came into them, and they lived, and stood up upon their feet, an exceeding great army.", r: "Ezekiel 37:10",
      cast: [["Ezekiel", "Priest and prophet among the exiles"]],
      art: "dry-bones", fx: { type: "bones" }, sh: "bones", h: 3.6
    },
    {
      id: "furnace", t: "The fourth man.", k: "Daniel 1–3", pl: "The plain of Dura, Babylon", y: -580, b: ["dan"],
      x: "Among the young nobles carried to Babylon was Daniel, who would not defile himself with the king’s meat, and God gave him wisdom. Nebuchadnezzar set up an image of gold and commanded all to bow. Daniel’s friends refused: our God is able to deliver us, but if not, we will not serve thy gods. The furnace was heated seven times hotter. Then the king looked in.",
      q: "Lo, I see four men loose, walking in the midst of the fire, and they have no hurt; and the form of the fourth is like the Son of God.", r: "Daniel 3:25",
      cast: [["Daniel", "Exile, statesman and prophet"], ["Shadrach, Meshach and Abednego", "Daniel’s three friends, Hananiah, Mishael and Azariah"]],
      art: "furnace", lay: "full", sh: "flame"
    },
    {
      id: "son-of-man", t: "One like the Son of man.", k: "Daniel 7", pl: "Babylon", y: -553, b: ["dan"],
      x: "Daniel’s visions stretched across empires: four great beasts rising out of the sea, and then the Ancient of days on a throne of fiery flame, and one like the Son of man coming with the clouds of heaven, to receive a kingdom that would never pass away. It became the name Jesus chose for Himself.",
      q: "I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven.", r: "Daniel 7:13",
      lay: "word", th: "sonofman", sh: "rings"
    },
    {
      id: "belshazzar", t: "Weighed in the balances.", k: "Daniel 5", pl: "Babylon", y: -539, b: ["dan"],
      x: "King Belshazzar made a great feast for a thousand of his lords and drank from the gold vessels taken from God’s temple. In the same hour came forth fingers of a man’s hand, and wrote upon the plaster of the wall. Daniel read it. That night Belshazzar was slain, and the Medes and Persians took the kingdom.",
      q: "Thou art weighed in the balances, and art found wanting.", r: "Daniel 5:27",
      cast: [["Belshazzar", "The last king of Babylon"]],
      art: "belshazzar", fx: { type: "wall" }, sh: "ash", h: 3.6
    },
    {
      id: "lions", t: "He hath shut the lions’ mouths.", k: "Daniel 6", pl: "Babylon", y: -538, b: ["dan"],
      x: "Jealous officials tricked King Darius into a decree: for thirty days, pray to no one but the king. Daniel went home, opened his windows toward Jerusalem, and knelt three times a day, as he always had. He spent the night in the den of lions. At dawn the king ran to the den and called out his name.",
      q: "My God hath sent his angel, and hath shut the lions’ mouths, that they have not hurt me.", r: "Daniel 6:22",
      cast: [["Darius the Mede", "Who could not undo his own decree"]],
      art: "daniel-lions", lay: "full", sh: "ring"
    },
    {
      id: "judith", t: "The hand of a woman.", k: "The Book of Judith", pl: "Bethulia", yl: "In the days of Nebuchadnezzar", b: ["jdt"],
      x: "The Book of Judith tells of a widow of Bethulia whose town was besieged by the general Holofernes. While the elders despaired, Judith prayed, put on her finest garments, walked into the enemy camp alone, and by her hand God delivered her people. She came home singing a new song unto the Lord.",
      q: "O Lord, thou art great and glorious, wonderful in strength, and invincible.", r: "Judith 16:13",
      cast: [["Judith", "The widow of Bethulia"], ["Holofernes", "General of the Assyrian army"]],
      art: "judith", lay: "plate", side: "l", sh: "dome"
    }
  ]
},

/* ─────────────────────────────── X ─────────────────────────────── */
{
  id: "return", n: "X", t: "Arise, and Build", s: "The Return", books: "Ezra · Nehemiah · Esther · Haggai · Zechariah · Malachi", yl: "538 – 430 BC",
  c: "#f4b2a6", sh: "walls",
  v: "Not by might, nor by power, but by my spirit, saith the LORD of hosts.", r: "Zechariah 4:6",
  x: "Seventy years, as Jeremiah had said. Then a Persian king sent the exiles home to rebuild.",
  scenes: [
    {
      id: "cyrus", t: "Let him go up to Jerusalem.", k: "Ezra 1–6 · Haggai · Zechariah", pl: "Babylon · Jerusalem", y: -538, b: ["ezr", "2ch", "hag", "zec"],
      x: "In his first year, Cyrus king of Persia proclaimed that the God of heaven had charged him to build Him a house at Jerusalem; Isaiah had named him a century and a half before. Under Zerubbabel the exiles returned and laid the foundation. The old men who had seen Solomon’s temple wept with a loud voice; the young shouted for joy. Spurred on by Haggai and Zechariah, they finished in 516 BC.",
      q: "Who is there among you of all his people? his God be with him, and let him go up to Jerusalem.", r: "Ezra 1:3",
      cast: [["Cyrus", "King of Persia, the LORD’s anointed"], ["Zerubbabel", "Governor of Judah, of the line of David"], ["Haggai", "Who said: consider your ways"], ["Zechariah", "Prophet of visions and of the coming King"]],
      art: "cyrus", lay: "plate", side: "r", sh: "temple"
    },
    {
      id: "esther", t: "For such a time as this.", k: "The Book of Esther", pl: "Shushan the palace", y: -474, b: ["est"],
      x: "In the Persian capital, a Jewish orphan named Esther became queen to King Ahasuerus, keeping her people secret. When the king’s favourite, Haman, plotted to destroy every Jew in the empire, her cousin Mordecai sent her word. To go in to the king unsummoned meant death. If I perish, I perish, said Esther, and went. God’s name is never spoken in the book; His hand is everywhere in it.",
      q: "And who knoweth whether thou art come to the kingdom for such a time as this?", r: "Esther 4:14",
      cast: [["Esther", "The orphan who became queen"], ["Mordecai", "Her cousin, who would not bow"], ["Haman", "The Agagite, who plotted genocide"], ["Ahasuerus", "King of Persia"]],
      art: "esther", lay: "full", zoom: "46% 34%", pos: "50% 25%", sh: "crown"
    },
    {
      id: "nehemiah", t: "The joy of the LORD is your strength.", k: "Ezra 7–10 · Nehemiah", pl: "Jerusalem", y: -445, b: ["ezr", "neh"],
      x: "Ezra the scribe came to teach the law. Then Nehemiah, cupbearer to the Persian king, heard that Jerusalem’s walls still lay broken down. He prayed, asked leave, and rode round the ruins by night. With a tool in one hand and a weapon in the other, the people rebuilt the wall in fifty-two days. Ezra read the law aloud from morning until midday, and the people wept.",
      q: "For the joy of the LORD is your strength.", r: "Nehemiah 8:10",
      cast: [["Ezra", "Priest and scribe of the law"], ["Nehemiah", "Cupbearer turned governor"], ["Sanballat", "Who mocked the builders"]],
      art: "nehemiah", lay: "plate", side: "l", sh: "walls"
    },
    {
      id: "malachi", t: "The Sun of righteousness.", k: "Zechariah 9–14 · Malachi", pl: "Jerusalem", y: -430, b: ["zec", "mal"],
      x: "The last prophets looked ahead. Zechariah saw a king coming to Jerusalem, lowly, riding upon a donkey, and a day when they would look on the one they had pierced. Malachi, the final voice of the Old Testament, promised a messenger to prepare the way, and Elijah before the great day. Then heaven fell silent.",
      q: "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings.", r: "Malachi 4:2",
      cast: [["Malachi", "The last of the prophets"]],
      lay: "word", th: ["donkey", "pierced", "messenger"], sh: "sunrise"
    }
  ]
},

/* ─────────────────────────────── XI ─────────────────────────────── */
{
  id: "silence", n: "XI", t: "The Silence", s: "Between the Testaments", books: "1 & 2 Maccabees", yl: "430 – 5 BC",
  c: "#b9c0c8", sh: "chaos",
  v: "The people that walked in darkness have seen a great light: they that dwell in the land of the shadow of death, upon them hath the light shined.", r: "Isaiah 9:2",
  x: "For four hundred years, no new prophet spoke. Empires rose and fell over the land. God’s people waited.",
  scenes: [
    {
      id: "empires", t: "Four hundred years.", k: "Between Malachi and Matthew", y: -430, b: [],
      x: "No prophet. No new word. Only the promises, and the waiting.",
      fx: { type: "years", from: -430, to: -168, marks: [
        [-430, "The last word of Malachi"], [-331, "Alexander the Great conquers Persia"], [-323, "Alexander dies; his empire is divided"],
        [-301, "The Ptolemies of Egypt rule Judea"], [-250, "The Scriptures are translated into Greek"], [-198, "The Seleucids of Syria take the land"]
      ] },
      sh: "chaos", h: 4
    },
    {
      id: "maccabees", t: "The hammer.", k: "1 & 2 Maccabees", pl: "Modein · Jerusalem", y: -167, b: ["1ma", "2ma"],
      x: "The Greek king Antiochus Epiphanes banned the law of Moses and set up an altar to Zeus in the temple. An old priest, Mattathias, refused to sacrifice, and his sons took to the hills. Judas, called Maccabeus, the hammer, drove out his armies. The temple was cleansed and dedicated again, and the Feast of Dedication that marks it is the one Jesus kept in Jerusalem, in winter. After one battle, Judas made an offering for the dead.",
      q: "It was an holy and good thought. Whereupon he made a reconciliation for the dead, that they might be delivered from sin.", r: "2 Maccabees 12:45",
      cast: [["Judas Maccabeus", "The hammer of Israel"], ["Mattathias", "The old priest of Modein"], ["Antiochus Epiphanes", "The Seleucid king who defiled the temple"], ["The mother of seven sons", "Martyred with her sons for the law"]],
      art: "maccabeus", lay: "plate", side: "r", sh: "flame"
    },
    {
      id: "waiting", t: "And then, a star.", k: "Between the Testaments", y: -164, b: [],
      x: "The temple stood again, but the promises were not yet kept.",
      fx: { type: "years", from: -164, to: -6, star: true, marks: [
        [-164, "The temple is rededicated"], [-63, "Rome takes Jerusalem"], [-37, "Herod the Great is made king"], [-20, "Herod begins rebuilding the temple"]
      ], end: "Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.", endr: "Matthew 2:2" },
      sh: "star", h: 4.2
    }
  ]
}
);
