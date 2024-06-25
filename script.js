const scriptures = {
    happy: [
        "A joyful heart is good medicine, but a crushed spirit dries up the bones. - Proverbs 17:22",
        "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:16-18",
        "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore. - Psalm 16:11"
    ],
    sad: [
        "The Lord is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
        "He heals the brokenhearted and binds up their wounds. - Psalm 147:3",
        "When the righteous cry for help, the Lord hears and delivers them out of all their troubles. - Psalm 34:17"
    ],
    motivated: [
        "Commit your work to the Lord, and your plans will be established. - Proverbs 16:3",
        "Whatever you do, work heartily, as for the Lord and not for men. - Colossians 3:23",
        "I can do all things through him who strengthens me. - Philippians 4:13"
    ],
    relaxed: [
        "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. - Matthew 11:28-29",
        "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. - John 14:27",
        "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7"
    ],
    angry: [
        "Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil. - Ephesians 4:26-27",
        "Good sense makes one slow to anger, and it is his glory to overlook an offense. - Proverbs 19:11",
        "Let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God. - James 1:19-20"
    ],
    confident: [
        "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. - Joshua 1:9",
        "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
        "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:31"
    ],
    anxious: [
        "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
        "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
        "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. - John 14:27"
    ],
    excited: [
        "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore. - Psalm 16:11",
        "But now, O Lord, you are our Father; we are the clay, and you are our potter; we are all the work of your hand. - Isaiah 64:8",
        "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13"
    ],
    bored: [
        "And let us not grow weary of doing good, for in due season we will reap, if we do not give up. - Galatians 6:9",
        "Commit your work to the Lord, and your plans will be established. - Proverbs 16:3",
        "So, whether you eat or drink, or whatever you do, do all to the glory of God. - 1 Corinthians 10:31"
    ],
    grateful: [
        "Oh give thanks to the Lord, for he is good, for his steadfast love endures forever! - Psalm 107:1",
        "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! - Psalm 100:4",
        "Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise! - Psalm 95:2"
    ],
    inspired: [
        "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:5-6",
        "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him. - Colossians 3:17",
        "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11"
    ],
    nervous: [
        "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand. - Isaiah 41:10",
        "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. - John 14:27",
        "When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me? - Psalm 56:3-4"
    ],
    calm: [
        "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth! - Psalm 46:10",
        "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. - Psalm 23:1-2",
        "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7"
    ],
    confused: [
        "For God is not a God of confusion but of peace. - 1 Corinthians 14:33",
        "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:5-6",
        "The unfolding of your words gives light; it imparts understanding to the simple. - Psalm 119:130"
    ],
    hopeful: [
        "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
        "I wait for the Lord, my soul waits, and in his word I hope. - Psalm 130:5",
        "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:31"
    ],
    lonely: [
        "The Lord is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
        "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me. - Psalm 23:4",
        "I have set the Lord always before me; because he is at my right hand, I shall not be shaken. - Psalm 16:8"
    ],
    playful: [
        "A joyful heart is good medicine, but a crushed spirit dries up the bones. - Proverbs 17:22",
        "The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight. - Proverbs 9:10",
        "Make a joyful noise to the Lord, all the earth! Serve the Lord with gladness! Come into his presence with singing! - Psalm 100:1-2"
    ]
};

function showQuote(mood) {
    const scriptureArray = scriptures[mood];
    const randomScripture = scriptureArray[Math.floor(Math.random() * scriptureArray.length)];
    const quoteDisplay = document.getElementById('quote');
    quoteDisplay.innerText = randomScripture;

    // Scroll to quote display section
    const quoteSection = document.getElementById('quote-display');
    quoteSection.scrollIntoView({ behavior: 'smooth' });
}