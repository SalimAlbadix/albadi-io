/* ============================================================
   ALBADI PICKS — your products live here.

   To add a product:
   1. Put its photos in /images (transparent PNG/WebP looks best;
      white-background photos are detected and handled automatically).
   2. Copy one product block below, paste it, and change the values.
   3. Paste your affiliate link for each country under `links`.
      Leave a country out if the product isn't sold there; the site
      will show the other countries instead.

   Product links work as albadi.io/<id>  (e.g. albadi.io/iphone-18-pro)
   ============================================================ */

window.ALBADI = {
  siteUrl: 'https://albadi.io',

  // Your Amazon Associates tags. Paste a plain Amazon link and the site adds the tag.
  affiliateTags: {
    'amazon.ae': '',   // e.g. 'albadi-21'
    'amazon.sa': '',   // e.g. 'albadi0d-21'
  },

  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/albadi.io' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@albadi.io' },
    { name: 'YouTube', url: 'https://www.youtube.com/@albadiio' },
    { name: 'X', url: 'https://x.com/albadiio' },
  ],
  supportEmail: 'support@albadi.io',   // the floating Support button emails this address

  countries: [
    { code: 'om', flag: '🇴🇲', name: { en: 'Oman', ar: 'عُمان' } },
    { code: 'sa', flag: '🇸🇦', name: { en: 'Saudi Arabia', ar: 'السعودية' } },
    { code: 'ae', flag: '🇦🇪', name: { en: 'UAE', ar: 'الإمارات' } },
    { code: 'kw', flag: '🇰🇼', name: { en: 'Kuwait', ar: 'الكويت' } },
    { code: 'qa', flag: '🇶🇦', name: { en: 'Qatar', ar: 'قطر' } },
    { code: 'bh', flag: '🇧🇭', name: { en: 'Bahrain', ar: 'البحرين' } },
  ],

  categories: [
    { id: 'chargers', name: { en: 'Chargers', ar: 'الشواحن' } },
    { id: 'power-banks', name: { en: 'Power Banks', ar: 'باور بانك' } },
    { id: 'cables', name: { en: 'Cables', ar: 'الكابلات' } },
    { id: 'phones', name: { en: 'Phones', ar: 'الهواتف' } },
    { id: 'audio', name: { en: 'Audio', ar: 'السماعات' } },
  ],

  products: [
    {
      id: 'iphone-18-pro',
      category: 'phones',
      brand: 'Apple',
      name: 'iPhone 18 Pro',
      isNew: true,
      featured: true,                       // shows as the big card
      highlight: 'A20 Pro · 48MP · ƒ/1.48–ƒ/4',
      tagline: {
        en: 'The first iPhone camera with a variable aperture.',
        ar: 'أول كاميرا آيفون بفتحة عدسة متغيّرة.',
      },
      take: {
        en: 'The new 48MP main camera has real aperture blades, from ƒ/1.48 for low light to ƒ/4 for sharp group shots. In the GCC it ships as an eSIM-only model, which frees space for a bigger battery with up to 36 hours of video playback.',
        ar: 'الكاميرا الرئيسية الجديدة بدقة 48 ميغابكسل فيها شفرات فتحة حقيقية، من ƒ/1.48 للإضاءة المنخفضة إلى ƒ/4 لصور جماعية أوضح. وفي دول الخليج يأتي بنسخة eSIM فقط، وهذا يترك مساحة لبطارية أكبر تصل إلى 36 ساعة تشغيل فيديو.',
      },
      specs: [
        { label: { en: 'Chip', ar: 'المعالج' }, value: { en: 'A20 Pro · 2nm', ar: 'A20 Pro · ‏2 نانومتر' } },
        { label: { en: 'Main camera', ar: 'الكاميرا الرئيسية' }, value: { en: '48MP · ƒ/1.48–ƒ/4', ar: '48 ميغابكسل · ƒ/1.48–ƒ/4' } },
        { label: { en: 'Battery', ar: 'البطارية' }, value: { en: 'Up to 36 hrs video (eSIM)', ar: 'حتى 36 ساعة فيديو (eSIM)' } },
        { label: { en: 'Fast charge', ar: 'الشحن السريع' }, value: { en: '50% in ~15 min wired', ar: '50% في 15 دقيقة تقريباً' } },
        { label: { en: 'Wireless', ar: 'اللاسلكي' }, value: { en: 'Wi-Fi 7 · Bluetooth 6', ar: 'Wi-Fi 7 · بلوتوث 6' } },
        { label: { en: 'Storage', ar: 'السعة' }, value: '256GB – 2TB' },
        { label: { en: 'Colors', ar: 'الألوان' }, value: { en: 'Black, Silver, Glacier, Burgundy', ar: 'أسود، فضي، جليدي، عنابي' } },
        { label: { en: 'US launch price', ar: 'سعر الإطلاق (أمريكا)' }, value: 'from $1,199' },
      ],
      images: ['images/iphone-18-pro-1.webp', 'images/iphone-18-pro-2.webp'],
      links: {   // SAMPLE links: replace with your affiliate links
        om: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=iPhone+18+Pro' },
        sa: { store: 'Amazon.sa', url: 'https://www.amazon.sa/s?k=iPhone+18+Pro' },
        ae: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=iPhone+18+Pro' },
        kw: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=iPhone+18+Pro' },
        qa: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=iPhone+18+Pro' },
        bh: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=iPhone+18+Pro' },
      },
    },

    {
      id: 'anker-prime-160w',
      category: 'chargers',
      brand: 'Anker',
      name: 'Anker Prime Charger 160W',
      highlight: '160W · 3× USB-C',
      tagline: {
        en: 'One charger for your laptop, phone and earbuds.',
        ar: 'شاحن واحد للابتوب والجوال والسماعات.',
      },
      take: {
        en: 'Each of the three USB-C ports can deliver up to 140W on its own, enough for a 16-inch MacBook Pro, and the built-in screen shows exactly how much power every device is pulling. It replaces the pile of chargers in your bag.',
        ar: 'كل منفذ من المنافذ الثلاثة يعطي حتى 140 واط لوحده، وهذا يكفي لماك بوك برو 16 إنش، والشاشة المدمجة توضح لك كم واط يسحب كل جهاز. شاحن واحد يغنيك عن كومة الشواحن في حقيبتك.',
      },
      specs: [
        { label: { en: 'Total output', ar: 'القدرة الإجمالية' }, value: '160W' },
        { label: { en: 'Per port', ar: 'لكل منفذ' }, value: { en: 'Up to 140W', ar: 'حتى 140W' } },
        { label: { en: 'Ports', ar: 'المنافذ' }, value: '3× USB-C' },
        { label: { en: 'Standard', ar: 'المعيار' }, value: 'USB PD 3.1' },
        { label: { en: 'Display', ar: 'الشاشة' }, value: { en: '1.3" smart display', ar: 'شاشة ذكية 1.3 إنش' } },
        { label: { en: 'App', ar: 'التطبيق' }, value: { en: 'Anker app over Bluetooth', ar: 'تطبيق Anker عبر البلوتوث' } },
        { label: { en: 'Award', ar: 'الجوائز' }, value: { en: 'CES 2026 Innovation Honoree', ar: 'مكرّم في جوائز CES 2026 للابتكار' } },
        { label: { en: 'US launch price', ar: 'سعر الإطلاق (أمريكا)' }, value: '$149' },
      ],
      images: ['images/anker-prime-160w-1.webp', 'images/anker-prime-160w-2.webp'],
      links: {
        om: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=Anker+Prime+Charger+160W' },
        sa: { store: 'Amazon.sa', url: 'https://www.amazon.sa/s?k=Anker+Prime+Charger+160W' },
        ae: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=Anker+Prime+Charger+160W' },
        kw: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=Anker+Prime+Charger+160W' },
        qa: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=Anker+Prime+Charger+160W' },
        bh: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=Anker+Prime+Charger+160W' },
      },
    },

    {
      id: 'ugreen-nexode-10k',
      category: 'power-banks',
      brand: 'UGREEN',
      name: 'UGREEN Nexode Power Bank 10,000mAh',
      isNew: true,
      highlight: '10,000 mAh · 45W',
      tagline: {
        en: 'A pocket power bank with a built-in cable and a live display.',
        ar: 'باور بانك بحجم الجيب، بكابل مدمج وشاشة تعرض كل التفاصيل.',
      },
      take: {
        en: 'At 45W, UGREEN rates it at 66% for an iPhone 17 Pro Max in 30 minutes. The built-in USB-C cable doubles as a carry loop, so you never leave the cable at home, and the screen shows output, battery temperature and battery health.',
        ar: 'بقوة 45 واط، تقول UGREEN إنه يشحن آيفون 17 برو ماكس إلى 66% خلال 30 دقيقة. والكابل المدمج يعمل كعلّاقة للحمل فلا تنساه في البيت، والشاشة تعرض قوة الشحن وحرارة البطارية وصحتها.',
      },
      specs: [
        { label: { en: 'Capacity', ar: 'السعة' }, value: '10,000 mAh' },
        { label: { en: 'Max output', ar: 'أقصى قدرة' }, value: '45W' },
        { label: { en: 'Ports', ar: 'المنافذ' }, value: { en: 'Built-in USB-C + USB-C + USB-A', ar: 'كابل USB-C مدمج + USB-C + USB-A' } },
        { label: { en: 'Charges', ar: 'يشحن' }, value: { en: '3 devices at once', ar: '3 أجهزة في نفس الوقت' } },
        { label: { en: 'Cells', ar: 'الخلايا' }, value: { en: 'ATL · 140°C hot-box tested', ar: 'ATL · مختبرة حرارياً حتى 140°C' } },
        { label: { en: 'Weight', ar: 'الوزن' }, value: '200 g' },
        { label: { en: 'Size', ar: 'المقاس' }, value: '108 × 69 × 18 mm' },
        { label: { en: 'US price', ar: 'السعر (أمريكا)' }, value: '$79.99' },
      ],
      images: ['images/ugreen-nexode-10k-1.webp', 'images/ugreen-nexode-10k-2.webp'],
      links: {
        om: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
        sa: { store: 'Amazon.sa', url: 'https://www.amazon.sa/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
        ae: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
        kw: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
        qa: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
        bh: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+Nexode+Power+Bank+10000mAh+45W' },
      },
    },

    {
      id: 'ugreen-240w-cable',
      category: 'cables',
      brand: 'UGREEN',
      name: 'UGREEN Nexode 240W USB-C Cable with Display',
      highlight: '240W · PD 3.1',
      tagline: {
        en: 'A cable that shows you how fast it is charging.',
        ar: 'كابل يعرض لك سرعة الشحن الحقيقية.',
      },
      take: {
        en: 'USB-C cables all look the same, so you never know which one is slowing you down. This one has a small screen on the connector that shows the watts, volts and amps flowing through it, and it handles up to 240W, so it charges everything from earbuds to a gaming laptop.',
        ar: 'كل كابلات USB-C تبدو متشابهة، ولا تعرف أيّها يبطّئ الشحن. هذا الكابل فيه شاشة صغيرة على الرأس تعرض الواط والفولت والأمبير أثناء الشحن، ويتحمل حتى 240 واط، فيشحن كل شيء من السماعات إلى لابتوبات الألعاب.',
      },
      specs: [
        { label: { en: 'Max power', ar: 'أقصى قدرة' }, value: '240W (48V / 5A)' },
        { label: { en: 'Standard', ar: 'المعيار' }, value: 'USB PD 3.1 · E-Marker' },
        { label: { en: 'Display', ar: 'الشاشة' }, value: { en: 'Touch display on the connector', ar: 'شاشة لمس على رأس الكابل' } },
        { label: { en: 'Data', ar: 'نقل البيانات' }, value: { en: 'USB 2.0 · 480 Mbps (no video)', ar: 'USB 2.0 · ‏480Mbps (بدون فيديو)' } },
        { label: { en: 'Build', ar: 'الخامة' }, value: { en: 'Nylon braid · aluminum', ar: 'نايلون مجدول · ألمنيوم' } },
        { label: { en: 'Lengths', ar: 'الأطوال' }, value: { en: '1 m · 2 m', ar: '1 م · 2 م' } },
        { label: { en: 'Durability', ar: 'التحمل' }, value: { en: '10,000+ plug cycles', ar: 'أكثر من 10,000 توصيلة' } },
        { label: { en: 'US price', ar: 'السعر (أمريكا)' }, value: { en: 'from $16.99', ar: 'من $16.99' } },
      ],
      images: ['images/ugreen-240w-cable-1.webp', 'images/ugreen-240w-cable-2.webp'],
      links: {
        om: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+240W+USB+C+cable+display' },
        sa: { store: 'Amazon.sa', url: 'https://www.amazon.sa/s?k=UGREEN+240W+USB+C+cable+display' },
        ae: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+240W+USB+C+cable+display' },
        kw: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+240W+USB+C+cable+display' },
        qa: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+240W+USB+C+cable+display' },
        bh: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=UGREEN+240W+USB+C+cable+display' },
      },
    },

    {
      id: 'airpods-pro-3',
      category: 'audio',
      brand: 'Apple',
      name: 'AirPods Pro 3',
      highlight: 'ANC 2× · IP57',
      tagline: {
        en: "Apple's strongest noise cancelling, now with heart-rate sensing.",
        ar: 'أقوى عزل للضوضاء من Apple، مع قياس نبض القلب.',
      },
      take: {
        en: 'Apple rates the noise cancelling at up to 2× the AirPods Pro 2, and the new foam-infused tips come in five sizes, including XXS, so they fit more ears. They also track your heart rate during workouts and are IP57 rated for sweat and rain.',
        ar: 'تقول Apple إن عزل الضوضاء أقوى حتى الضعف مقارنة بـ AirPods Pro 2، والأطراف الجديدة المحشوة بالفوم متوفرة بخمسة مقاسات منها XXS لتناسب آذاناً أكثر. وتقيس نبض قلبك أثناء التمرين، ومقاومة للعرق والمطر بمعيار IP57.',
      },
      specs: [
        { label: { en: 'Noise cancelling', ar: 'عزل الضوضاء' }, value: { en: 'Up to 2× AirPods Pro 2', ar: 'حتى ضعف AirPods Pro 2' } },
        { label: { en: 'Battery', ar: 'البطارية' }, value: { en: 'Up to 8 hrs with ANC', ar: 'حتى 8 ساعات مع العزل' } },
        { label: { en: 'Health', ar: 'الصحة' }, value: { en: 'Heart rate in workouts', ar: 'قياس النبض أثناء التمارين' } },
        { label: { en: 'Rating', ar: 'المقاومة' }, value: { en: 'IP57 sweat & water', ar: 'IP57 للعرق والماء' } },
        { label: { en: 'Ear tips', ar: 'الأطراف' }, value: { en: '5 sizes, incl. XXS', ar: '5 مقاسات منها XXS' } },
        { label: { en: 'Translation', ar: 'الترجمة' }, value: { en: 'Live Translation (select languages)', ar: 'ترجمة فورية (لغات محددة)' } },
        { label: { en: 'US launch price', ar: 'سعر الإطلاق (أمريكا)' }, value: '$249' },
      ],
      images: ['images/airpods-pro-3-1.webp', 'images/airpods-pro-3-2.webp'],
      links: {
        om: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=AirPods+Pro+3' },
        sa: { store: 'Amazon.sa', url: 'https://www.amazon.sa/s?k=AirPods+Pro+3' },
        ae: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=AirPods+Pro+3' },
        kw: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=AirPods+Pro+3' },
        qa: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=AirPods+Pro+3' },
        bh: { store: 'Amazon.ae', url: 'https://www.amazon.ae/s?k=AirPods+Pro+3' },
      },
    },
  ],
};
