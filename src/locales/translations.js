// Objet contenant toutes les traductions
const translations = {
  // Français
  fr: {
    // Header
    nav: {
      about: "À propos",
      amenities: "Commodités",
      gallery: "Galerie",
      faq: "FAQ",
      testimonials: "Avis",
      pricing: "Tarifs",
      contact: "Contact",
      tour3d: "Visite 3D"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "Une retraite luxueuse à Seminyak",
      description: "Découvrez un havre de paix au cœur de Bali",
      cta: "Réserver maintenant",
      tour3d: "Découvrir en 3D"
    },
    // À propos
    about: {
      title: "À Propos de la Villa",
      intro: "Bienvenue à Villa Orea, une élégante retraite de 2 chambres, conçue comme un véritable cocon de tranquillité, parfaite pour couples, petite famille et amis proches dans le quartier animé de Seminyak. À l'entrée, une porte intelligente vous accueille : il suffit d'entrer le code fourni et d'appuyer sur l'icône de la cloche pour déverrouiller votre havre de paix.",
      details: "La villa dispose de 2 chambres luxueuses avec lits king-size, Smart TV avec Netflix et YouTube Premium, et salles de bains attenantes. L'espace de vie semi-ouvert comprend un salon avec Smart TV, un coin bar, et une cuisine entièrement équipée. À l'extérieur, profitez de la piscine privée et du jardin tropical, à seulement quelques minutes des cafés, plages et boutiques de Seminyak.",
      button3d: "Découvrir en 3D"
    },
    // Commodités
    amenities: {
      title: "Commodités",
      intro: "Tout a été pensé pour faire de votre séjour à Villa Orea une expérience luxueuse et inoubliable.",
      wifi: {
        name: "Wi-Fi Haut Débit",
        description: "Connexion internet rapide disponible dans toutes les pièces de la villa pour rester connecté durant votre séjour."
      },
      ac: {
        name: "Climatisation",
        description: "Chaque chambre est équipée d'un système de climatisation pour votre confort même pendant les journées les plus chaudes."
      },
      pool: {
        name: "Piscine Privée",
        description: "Une piscine scintillante entourée d'une zone de bronzage confortable, parfaite pour se rafraîchir après une journée d'exploration."
      },
      kitchen: {
        name: "Cuisine Équipée",
        description: "Cuisine ouverte entièrement équipée avec machine à thé, grille-pain et machine à café pour préparer vos repas en toute simplicité."
      },
      tv: {
        name: "Smart TV",
        description: "Chaque chambre et le salon sont équipés de Smart TV avec accès à Netflix et YouTube Premium pour vos moments de détente."
      },
      cleaning: {
        name: "Ménage Quotidien",
        description: "Service de ménage quotidien inclus de 9h00 à 17h00 pour vous assurer un environnement toujours propre et agréable."
      },
      garden: {
        name: "Jardin Tropical",
        description: "Un jardin tropical luxuriant avec une balançoire suspendue à un palmier, créant une atmosphère paisible et relaxante."
      },
      beds: {
        name: "Lits King-Size",
        description: "Deux chambres spacieuses avec des lits king-size confortables pour vous garantir des nuits reposantes pendant votre séjour."
      },
      location: {
        name: "Emplacement Idéal",
        description: "Située à seulement quelques minutes des cafés animés, plages et boutiques de Seminyak, pour profiter pleinement de votre séjour à Bali."
      }
    },
    // Tarifs
    pricing: {
      title: "Tarifs et Réservation",
      intro: "Découvrez notre villa de luxe à Seminyak, offrant un mélange parfait de confort moderne et d'ambiance tropicale, avec un excellent rapport qualité-prix pour votre séjour à Bali.",
      priceFrom: "À partir de 350€/nuit",
      minStay: "Séjour minimum de 3 nuits",
      capacity: "Capacité de 4 personnes (max 6 avec supplément)",
      cleaning: "Ménage quotidien inclus",
      breakfast: "Petit-déjeuner et chef disponibles (supplément)",
      airport: "Transfert aéroport disponible (supplément)",
      notice: "* Les tarifs peuvent varier selon la saison. Check-in: 14h00, Check-out: 11h00.",
      contactButton: "Contactez-nous"
    },
    // Pied de page
    footer: {
      rights: "Tous droits réservés",
      privacyPolicy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookiePolicy: "Politique des cookies"
    }
  },
  
  // Anglais
  en: {
    // Header
    nav: {
      about: "About",
      amenities: "Amenities",
      gallery: "Gallery",
      faq: "FAQ",
      testimonials: "Reviews",
      pricing: "Pricing",
      contact: "Contact",
      tour3d: "3D Tour"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "A Luxurious Retreat in Seminyak",
      description: "Discover a peaceful haven in the heart of Bali",
      cta: "Book Now",
      tour3d: "3D Tour"
    },
    // About
    about: {
      title: "About the Villa",
      intro: "Welcome to Villa Orea, a stylish 2-bedroom retreat designed as a true cocoon of tranquility, perfect for couples, small families, or close friends in vibrant Seminyak. At the villa's entrance, a smart door awaits, guests simply enter the code provided and press the bell icon to unlock the gateway to their peaceful retreat.",
      details: "The villa features 2 luxurious bedrooms with king-size beds, Smart TVs with Netflix and YouTube Premium, and ensuite bathrooms. The semi-open living space includes a Smart TV lounge, a cozy bar corner, and a fully equipped kitchen. Outside, enjoy the private pool and tropical garden, just minutes from Seminyak's bustling cafés, beaches, and shops.",
      button3d: "3D Tour"
    },
    // Amenities
    amenities: {
      title: "Amenities",
      intro: "Everything has been designed to make your stay at Villa Orea a luxurious and unforgettable experience.",
      wifi: {
        name: "High-Speed WiFi",
        description: "Fast internet connection available in all rooms of the villa to stay connected during your stay."
      },
      ac: {
        name: "Air Conditioning",
        description: "Each bedroom is equipped with an air conditioning system for your comfort even during the hottest days."
      },
      pool: {
        name: "Private Pool",
        description: "A shimmering swimming pool surrounded by a comfortable sunbathing area, perfect for cooling off after a day of exploration."
      },
      kitchen: {
        name: "Equipped Kitchen",
        description: "Fully equipped open kitchen with tea machine, toaster, and coffee maker to prepare your meals with ease."
      },
      tv: {
        name: "Smart TV",
        description: "Each bedroom and the living room are equipped with Smart TVs with access to Netflix and YouTube Premium for your relaxation moments."
      },
      cleaning: {
        name: "Daily Housekeeping",
        description: "Daily housekeeping service included from 9:00 AM to 5:00 PM to ensure a clean and pleasant environment."
      },
      garden: {
        name: "Tropical Garden",
        description: "A lush tropical garden with a palm tree and hanging swing, creating a peaceful and relaxing atmosphere."
      },
      beds: {
        name: "King-Size Beds",
        description: "Two spacious bedrooms with comfortable king-size beds to ensure restful nights during your stay."
      },
      location: {
        name: "Ideal Location",
        description: "Located just minutes from Seminyak's bustling cafés, beaches, and shops, to fully enjoy your stay in Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Pricing and Booking",
      intro: "Discover our luxury villa in Seminyak, offering the perfect blend of modern comfort and tropical ambiance, with excellent value for your Bali stay.",
      priceFrom: "From €350/night",
      minStay: "Minimum stay of 3 nights",
      capacity: "Capacity of 4 people (max 6 with supplement)",
      cleaning: "Daily housekeeping included",
      breakfast: "Breakfast and chef available (extra charge)",
      airport: "Airport transfer available (extra charge)",
      notice: "* Rates may vary by season. Check-in: 2:00 PM, Check-out: 11:00 AM.",
      contactButton: "Contact Us"
    },
    // Footer
    footer: {
      rights: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Use",
      cookiePolicy: "Cookie Policy"
    }
  },
  
  // Chinois
  zh: {
    // Header
    nav: {
      about: "关于",
      amenities: "设施",
      gallery: "画廊",
      faq: "常见问题",
      testimonials: "评价",
      pricing: "价格",
      contact: "联系",
      tour3d: "3D参观"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "苍古宁静的豪华度假屋",
      description: "在巴厘岛中心发现宁静的避风港",
      cta: "立即预订",
      tour3d: "3D参观"
    },
    // About
    about: {
      title: "关于别墅",
      intro: "欢迎来到 Villa Orea，这是一栋时尚的两卧室别墅，专为打造宁静舒适的私密空间而设计，非常适合情侣、小家庭或亲密朋友，坐落于活力四射的苍古（Seminyak）。进入别墅，您将通过一扇智能门，只需输入提供的密码并点击铃铛图标即可开启通往静谧假期的旅程。",
      details: "别墅内的两间卧室以简约舒适为设计理念，配备特大床、智能电视（支持Netflix与YouTube Premium）、空调及宽敞的储物空间。半开放式起居空间设有一个智能电视区、一个温馨吧台，以及一个设备齐全的厨房。在外面，您可以享受私人泳池和热带花园，距离苍古热闹的咖啡馆、海滩和商店仅几分钟路程。",
      button3d: "3D参观"
    },
    // Amenities
    amenities: {
      title: "设施",
      intro: "为了让您在Villa Orea的住宿体验成为豪华难忘的经历，我们考虑到了一切。",
      wifi: {
        name: "高速WiFi",
        description: "别墅所有房间均可使用快速互联网连接，在您住宿期间保持连接。"
      },
      ac: {
        name: "空调",
        description: "每间卧室都配备空调系统，即使在最热的日子也能保证您的舒适。"
      },
      pool: {
        name: "私人泳池",
        description: "闪亮的私人泳池，周围有舒适的日光浴区，探索一天后完美放松。"
      },
      kitchen: {
        name: "设备齐全的厨房",
        description: "设备齐全的开放式厨房，配有茶机、烤面包机和咖啡机，轻松准备餐点。"
      },
      tv: {
        name: "智能电视",
        description: "每间卧室和客厅均配备智能电视，可访问Netflix和YouTube Premium，享受放松时刻。"
      },
      cleaning: {
        name: "每日客房清洁",
        description: "每日上午9点至下午5点提供客房清洁服务，确保环境始终干净舒适。"
      },
      garden: {
        name: "热带花园",
        description: "郁郁葱葱的热带花园，配有棕榈树和悬挂秋千，营造宁静放松的氛围。"
      },
      beds: {
        name: "特大床",
        description: "两间宽敞的卧室配有舒适的特大床，确保您在住宿期间安睡。"
      },
      location: {
        name: "理想位置",
        description: "位于距离苍古热闹的咖啡馆、海滩和商店仅几分钟路程，充分享受您的巴厘岛之旅。"
      }
    },
    // Pricing
    pricing: {
      title: "价格与预订",
      intro: "探索我们在苍古的豪华别墅，提供现代舒适与热带氛围的完美融合，为您在巴厘岛的住宿带来极高的性价比。",
      priceFrom: "起价€350/晚",
      minStay: "最少入住3晚",
      capacity: "可容纳4人（最多6人，需附加费用）",
      cleaning: "包含每日客房清洁",
      breakfast: "可提供早餐和厨师服务（额外收费）",
      airport: "可提供机场接送服务（额外收费）",
      notice: "* 价格可能因季节而异。入住时间: 14:00, 退房时间: 11:00。",
      contactButton: "联系我们"
    },
    // Footer
    footer: {
      rights: "版权所有",
      privacyPolicy: "隐私政策",
      terms: "使用条款",
      cookiePolicy: "Cookie政策"
    }
  },
  
  // Espagnol
  es: {
    // Header
    nav: {
      about: "Acerca de",
      amenities: "Comodidades",
      gallery: "Galería",
      faq: "Preguntas frecuentes",
      testimonials: "Opiniones",
      pricing: "Precios",
      contact: "Contacto",
      tour3d: "Tour 3D"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "Un retiro lujoso en Seminyak",
      description: "Descubre un refugio pacífico en el corazón de Bali",
      cta: "Reservar ahora",
      tour3d: "Tour 3D"
    },
    // About
    about: {
      title: "Acerca de la Villa",
      intro: "Bienvenido a Villa Orea, un elegante retiro de 2 habitaciones diseñado como un verdadero capullo de tranquilidad, perfecto para parejas, pequeñas familias o amigos cercanos en el vibrante Seminyak. En la entrada de la villa, una puerta inteligente espera, los huéspedes simplemente ingresan el código proporcionado y presionan el ícono de campana para desbloquear la entrada a su retiro pacífico.",
      details: "La villa cuenta con 2 lujosas habitaciones con camas king-size, Smart TVs con Netflix y YouTube Premium, y baños en suite. El espacio de estar semi-abierto incluye una sala con Smart TV, un acogedor rincón de bar y una cocina totalmente equipada. Afuera, disfruta de la piscina privada y el jardín tropical, a solo minutos de los bulliciosos cafés, playas y tiendas de Seminyak.",
      button3d: "Tour 3D"
    },
    // Amenities
    amenities: {
      title: "Comodidades",
      intro: "Todo ha sido diseñado para hacer de su estancia en Villa Orea una experiencia lujosa e inolvidable.",
      wifi: {
        name: "WiFi de alta velocidad",
        description: "Conexión a internet rápida disponible en todas las habitaciones de la villa para mantenerse conectado durante su estancia."
      },
      ac: {
        name: "Aire acondicionado",
        description: "Cada habitación está equipada con un sistema de aire acondicionado para su comodidad incluso durante los días más calurosos."
      },
      pool: {
        name: "Piscina privada",
        description: "Una reluciente piscina rodeada de un cómodo área para tomar el sol, perfecta para refrescarse después de un día de exploración."
      },
      kitchen: {
        name: "Cocina equipada",
        description: "Cocina abierta totalmente equipada con máquina de té, tostadora y cafetera para preparar sus comidas con facilidad."
      },
      tv: {
        name: "Smart TV",
        description: "Cada habitación y la sala de estar están equipadas con Smart TVs con acceso a Netflix y YouTube Premium para sus momentos de relajación."
      },
      cleaning: {
        name: "Limpieza diaria",
        description: "Servicio de limpieza diario incluido de 9:00 AM a 5:00 PM para asegurar un ambiente limpio y agradable."
      },
      garden: {
        name: "Jardín tropical",
        description: "Un exuberante jardín tropical con una palmera y un columpio colgante, creando una atmósfera pacífica y relajante."
      },
      beds: {
        name: "Camas King-Size",
        description: "Dos espaciosas habitaciones con cómodas camas king-size para asegurar noches reparadoras durante su estancia."
      },
      location: {
        name: "Ubicación ideal",
        description: "Ubicada a solo minutos de los bulliciosos cafés, playas y tiendas de Seminyak, para disfrutar plenamente de su estancia en Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Precios y Reservas",
      intro: "Descubra nuestra lujosa villa en Seminyak, que ofrece la perfecta combinación de confort moderno y ambiente tropical, con excelente valor para su estancia en Bali.",
      priceFrom: "Desde €350/noche",
      minStay: "Estancia mínima de 3 noches",
      capacity: "Capacidad para 4 personas (máx. 6 con suplemento)",
      cleaning: "Limpieza diaria incluida",
      breakfast: "Desayuno y chef disponibles (cargo adicional)",
      airport: "Traslado al aeropuerto disponible (cargo adicional)",
      notice: "* Las tarifas pueden variar según la temporada. Check-in: 14:00, Check-out: 11:00.",
      contactButton: "Contáctenos"
    },
    // Footer
    footer: {
      rights: "Todos los derechos reservados",
      privacyPolicy: "Política de privacidad",
      terms: "Términos de uso",
      cookiePolicy: "Política de cookies"
    }
  },
  
  // Indonésien
  id: {
    // Header
    nav: {
      about: "Tentang",
      amenities: "Fasilitas",
      gallery: "Galeri",
      faq: "FAQ",
      testimonials: "Ulasan",
      pricing: "Harga",
      contact: "Kontak",
      tour3d: "Tur 3D"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "Tempat Peristirahatan Mewah di Seminyak",
      description: "Temukan surga ketenangan di jantung Bali",
      cta: "Pesan Sekarang",
      tour3d: "Tur 3D"
    },
    // About
    about: {
      title: "Tentang Villa",
      intro: "Selamat datang di Villa Orea, vila bergaya dengan 2 kamar tidur, dirancang sebagai oase ketenangan sejati, sempurna untuk pasangan, keluarga kecil, atau sahabat dekat di kawasan Seminyak yang penuh energi. Di pintu masuk vila, terdapat pintu pintar cukup masukkan kode yang diberikan dan tekan ikon bel untuk membuka gerbang menuju tempat peristirahatan damai Anda.",
      details: "Vila ini memiliki 2 kamar tidur mewah dengan tempat tidur king-size, Smart TV dengan Netflix dan YouTube Premium, dan kamar mandi dalam. Ruang tamu semi-terbuka termasuk lounge Smart TV, sudut bar yang nyaman, dan dapur lengkap. Di luar, nikmati kolam renang pribadi dan taman tropis, hanya beberapa menit dari kafe, pantai, dan toko ramai Seminyak.",
      button3d: "Tur 3D"
    },
    // Amenities
    amenities: {
      title: "Fasilitas",
      intro: "Semuanya telah dirancang untuk membuat pengalaman menginap Anda di Villa Orea menjadi mewah dan tak terlupakan.",
      wifi: {
        name: "WiFi Kecepatan Tinggi",
        description: "Koneksi internet cepat tersedia di semua kamar villa untuk tetap terhubung selama Anda menginap."
      },
      ac: {
        name: "AC",
        description: "Setiap kamar tidur dilengkapi dengan sistem AC untuk kenyamanan Anda bahkan selama hari-hari terpanas."
      },
      pool: {
        name: "Kolam Renang Pribadi",
        description: "Kolam renang berkilau dikelilingi area berjemur yang nyaman, sempurna untuk menyegarkan diri setelah hari eksplorasi."
      },
      kitchen: {
        name: "Dapur Lengkap",
        description: "Dapur terbuka yang lengkap dengan mesin teh, pemanggang roti, dan pembuat kopi untuk mempersiapkan makanan Anda dengan mudah."
      },
      tv: {
        name: "Smart TV",
        description: "Setiap kamar tidur dan ruang tamu dilengkapi dengan Smart TV dengan akses ke Netflix dan YouTube Premium untuk momen relaksasi Anda."
      },
      cleaning: {
        name: "Pembersihan Harian",
        description: "Layanan pembersihan harian termasuk dari jam 9 pagi hingga 5 sore untuk memastikan lingkungan yang bersih dan menyenangkan."
      },
      garden: {
        name: "Taman Tropis",
        description: "Taman tropis yang rimbun dengan pohon kelapa dan ayunan, menciptakan suasana damai dan menenangkan."
      },
      beds: {
        name: "Tempat Tidur King-Size",
        description: "Dua kamar tidur luas dengan tempat tidur king-size yang nyaman untuk memastikan malam yang nyenyak selama Anda menginap."
      },
      location: {
        name: "Lokasi Ideal",
        description: "Terletak hanya beberapa menit dari kafe ramai, pantai, dan toko Seminyak, untuk menikmati sepenuhnya pengalaman Anda di Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Harga dan Pemesanan",
      intro: "Temukan villa mewah kami di Seminyak, yang menawarkan perpaduan sempurna antara kenyamanan modern dan suasana tropis, dengan nilai luar biasa untuk pengalaman Anda di Bali.",
      priceFrom: "Mulai dari €350/malam",
      minStay: "Minimum menginap 3 malam",
      capacity: "Kapasitas 4 orang (maks. 6 dengan biaya tambahan)",
      cleaning: "Pembersihan harian termasuk",
      breakfast: "Sarapan dan koki tersedia (biaya tambahan)",
      airport: "Antar jemput bandara tersedia (biaya tambahan)",
      notice: "* Tarif dapat bervariasi berdasarkan musim. Check-in: 14:00, Check-out: 11:00.",
      contactButton: "Hubungi Kami"
    },
    // Footer
    footer: {
      rights: "Seluruh hak cipta",
      privacyPolicy: "Kebijakan Privasi",
      terms: "Ketentuan Penggunaan",
      cookiePolicy: "Kebijakan Cookie"
    }
  },
  
  // Allemand
  de: {
    // Header
    nav: {
      about: "Über uns",
      amenities: "Ausstattung",
      gallery: "Galerie",
      faq: "FAQ",
      testimonials: "Bewertungen",
      pricing: "Preise",
      contact: "Kontakt",
      tour3d: "3D-Tour"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "Ein luxuriöser Rückzugsort in Seminyak",
      description: "Entdecken Sie eine friedliche Oase im Herzen von Bali",
      cta: "Jetzt buchen",
      tour3d: "3D-Tour"
    },
    // About
    about: {
      title: "Über die Villa",
      intro: "Willkommen in der Villa Orea, einem stilvollen Rückzugsort mit 2 Schlafzimmern, der als wahre Ruheoase konzipiert wurde – perfekt für Paare, kleine Familien oder enge Freunde im lebhaften Seminyak. Am Eingang der Villa erwartet Sie eine intelligente Tür; Gäste geben einfach den bereitgestellten Code ein und drücken das Glockensymbol, um den Zugang zu ihrem friedlichen Refugium zu öffnen.",
      details: "Die Villa verfügt über 2 luxuriöse Schlafzimmer mit Kingsize-Betten, Smart-TVs mit Netflix und YouTube Premium sowie eigene Badezimmer. Der halboffen gestaltete Wohnbereich umfasst eine Smart-TV-Lounge, eine gemütliche Barecke und eine voll ausgestattete Küche. Draußen genießen Sie den privaten Pool und den tropischen Garten, nur wenige Minuten von den belebten Cafés, Stränden und Geschäften von Seminyak entfernt.",
      button3d: "3D-Tour"
    },
    // Amenities
    amenities: {
      title: "Ausstattung",
      intro: "Alles wurde gestaltet, um Ihren Aufenthalt in der Villa Orea zu einem luxuriösen und unvergesslichen Erlebnis zu machen.",
      wifi: {
        name: "Hochgeschwindigkeits-WLAN",
        description: "Schnelle Internetverbindung in allen Räumen der Villa, um während Ihres Aufenthalts verbunden zu bleiben."
      },
      ac: {
        name: "Klimaanlage",
        description: "Jedes Schlafzimmer ist mit einer Klimaanlage ausgestattet, für Ihren Komfort auch an den heißesten Tagen."
      },
      pool: {
        name: "Privater Pool",
        description: "Ein schimmernder Pool umgeben von einem komfortablen Sonnenbadebereich, perfekt zum Abkühlen nach einem Tag des Erkundens."
      },
      kitchen: {
        name: "Ausgestattete Küche",
        description: "Voll ausgestattete offene Küche mit Teemaschine, Toaster und Kaffeemaschine, um Ihre Mahlzeiten mit Leichtigkeit zuzubereiten."
      },
      tv: {
        name: "Smart-TV",
        description: "Jedes Schlafzimmer und das Wohnzimmer sind mit Smart-TVs mit Zugang zu Netflix und YouTube Premium für Ihre Entspannungsmomente ausgestattet."
      },
      cleaning: {
        name: "Tägliche Reinigung",
        description: "Täglicher Reinigungsservice von 9:00 bis 17:00 Uhr inbegriffen, um eine saubere und angenehme Umgebung zu gewährleisten."
      },
      garden: {
        name: "Tropischer Garten",
        description: "Ein üppiger tropischer Garten mit einer Palme und einer Hängeschaukel, der eine friedliche und entspannende Atmosphäre schafft."
      },
      beds: {
        name: "Kingsize-Betten",
        description: "Zwei geräumige Schlafzimmer mit komfortablen Kingsize-Betten für erholsame Nächte während Ihres Aufenthalts."
      },
      location: {
        name: "Ideale Lage",
        description: "Nur wenige Minuten von den belebten Cafés, Stränden und Geschäften von Seminyak entfernt, um Ihren Aufenthalt auf Bali in vollen Zügen zu genießen."
      }
    },
    // Pricing
    pricing: {
      title: "Preise und Buchung",
      intro: "Entdecken Sie unsere Luxusvilla in Seminyak, die die perfekte Mischung aus modernem Komfort und tropischem Ambiente bietet, mit ausgezeichnetem Preis-Leistungs-Verhältnis für Ihren Bali-Aufenthalt.",
      priceFrom: "Ab €350/Nacht",
      minStay: "Mindestaufenthalt von 3 Nächten",
      capacity: "Kapazität für 4 Personen (max. 6 mit Aufpreis)",
      cleaning: "Tägliche Reinigung inbegriffen",
      breakfast: "Frühstück und Koch verfügbar (gegen Aufpreis)",
      airport: "Flughafentransfer verfügbar (gegen Aufpreis)",
      notice: "* Preise können je nach Saison variieren. Check-in: 14:00 Uhr, Check-out: 11:00 Uhr.",
      contactButton: "Kontaktieren Sie uns"
    },
    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten",
      privacyPolicy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookiePolicy: "Cookie-Richtlinie"
    }
  },
  
  // Russe
  ru: {
    // Header
    nav: {
      about: "О нас",
      amenities: "Удобства",
      gallery: "Галерея",
      faq: "Вопросы",
      testimonials: "Отзывы",
      pricing: "Цены",
      contact: "Контакты",
      tour3d: "3D-тур"
    },
    // Hero
    hero: {
      title: "Вилла Orea",
      subtitle: "Роскошный отдых в Семиньяке",
      description: "Откройте для себя мирную гавань в сердце Бали",
      cta: "Забронировать",
      tour3d: "3D-тур"
    },
    // About
    about: {
      title: "О вилле",
      intro: "Добро пожаловать на виллу Orea – стильное убежище с 2 спальнями, созданное как настоящий кокон спокойствия, идеально подходящее для пар, небольших семей или близких друзей в оживленном районе Семиньяк. У входа на виллу вас встречает умная дверь: гостям достаточно ввести предоставленный код и нажать на иконку звонка, чтобы открыть ворота в свое мирное убежище.",
      details: "Вилла включает 2 роскошные спальни с кроватями размера кинг-сайз, смарт-телевизорами с доступом к Netflix и YouTube Premium, а также собственными ванными комнатами. Полуоткрытое жилое пространство включает зону отдыха со смарт-телевизором, уютный бар и полностью оборудованную кухню. Снаружи вы можете наслаждаться частным бассейном и тропическим садом, находясь всего в нескольких минутах от оживленных кафе, пляжей и магазинов Семиньяка.",
      button3d: "3D-тур"
    },
    // Amenities
    amenities: {
      title: "Удобства",
      intro: "Всё продумано, чтобы ваше пребывание на вилле Orea стало роскошным и незабываемым.",
      wifi: {
        name: "Высокоскоростной Wi-Fi",
        description: "Быстрое интернет-соединение доступно во всех комнатах виллы, чтобы оставаться на связи во время пребывания."
      },
      ac: {
        name: "Кондиционер",
        description: "Каждая спальня оснащена системой кондиционирования для вашего комфорта даже в самые жаркие дни."
      },
      pool: {
        name: "Частный бассейн",
        description: "Сверкающий бассейн, окруженный комфортной зоной для загара, идеально подходит для освежения после дня исследований."
      },
      kitchen: {
        name: "Оборудованная кухня",
        description: "Полностью оборудованная открытая кухня с чайной машиной, тостером и кофеваркой для легкого приготовления ваших блюд."
      },
      tv: {
        name: "Смарт-телевизор",
        description: "Каждая спальня и гостиная оснащены смарт-телевизорами с доступом к Netflix и YouTube Premium для ваших моментов релаксации."
      },
      cleaning: {
        name: "Ежедневная уборка",
        description: "Ежедневный сервис уборки включен с 9:00 до 17:00, чтобы обеспечить чистую и приятную обстановку."
      },
      garden: {
        name: "Тропический сад",
        description: "Пышный тропический сад с пальмой и подвесными качелями, создающий мирную и расслабляющую атмосферу."
      },
      beds: {
        name: "Кровати кинг-сайз",
        description: "Две просторные спальни с удобными кроватями размера кинг-сайз для обеспечения спокойных ночей во время вашего пребывания."
      },
      location: {
        name: "Идеальное расположение",
        description: "Расположена всего в нескольких минутах от оживленных кафе, пляжей и магазинов Семиньяка, чтобы вы могли полностью насладиться своим пребыванием на Бали."
      }
    },
    // Pricing
    pricing: {
      title: "Цены и бронирование",
      intro: "Откройте для себя нашу роскошную виллу в Семиньяке, предлагающую идеальное сочетание современного комфорта и тропической атмосферы, с отличным соотношением цены и качества для вашего пребывания на Бали.",
      priceFrom: "От €350/ночь",
      minStay: "Минимальное пребывание 3 ночи",
      capacity: "Вместимость 4 человека (макс. 6 с доплатой)",
      cleaning: "Ежедневная уборка включена",
      breakfast: "Завтрак и повар доступны (за дополнительную плату)",
      airport: "Трансфер из аэропорта доступен (за дополнительную плату)",
      notice: "* Цены могут меняться в зависимости от сезона. Заезд: 14:00, выезд: 11:00.",
      contactButton: "Связаться с нами"
    },
    // Footer
    footer: {
      rights: "Все права защищены",
      privacyPolicy: "Политика конфиденциальности",
      terms: "Условия использования",
      cookiePolicy: "Политика использования файлов cookie"
    }
  }
};

export default translations; 