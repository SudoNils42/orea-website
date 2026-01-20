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
      tour3d: "Immersion Totale"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "Un séjour de luxe a Seminyak",
      description: "Découvrez un havre de paix au cœur de Bali",
      cta: "Réserver maintenant",
      tour3d: "Immersion Totale"
    },
    // FAQ
    faq: {
      title: "Questions Fréquentes",
      intro: "Trouvez les réponses à vos questions les plus courantes ci-dessous",
      searchPlaceholder: "Rechercher une question...",
      searchLabel: "Rechercher une question",
      noResults: "Aucun résultat trouvé pour \"{query}\"",
      resetSearch: "Réinitialiser la recherche",
      questions: [
        {
          question: "Quelle est l'heure d'arrivée et de départ ?",
          answer: "L'enregistrement commence à 14h00 pour notre villa. Les bagages peuvent être déposés dès 11h00 pendant que nous préparons votre villa. Veuillez noter que des frais d'enregistrement tardif de 200 000 IDR s'appliquent pour les arrivées après 20h00. L'heure de départ est fixée à 11h00. Les départs tardifs sont soumis à disponibilité avec des frais supplémentaires de 50% du tarif journalier pour les départs entre 11h00 et 18h00, et 100% pour les départs après 18h00."
        },
        {
          question: "Le petit-déjeuner est-il inclus dans la réservation ?",
          answer: "Le petit-déjeuner n'est pas inclus dans le prix de la chambre. Vous pouvez cependant l'organiser facilement en contactant notre équipe de réservation ou de conciergerie. Nous proposons une variété de menus préparés par notre chef privé, directement dans votre villa. Le coût est de 150 000 IDR par personne. Un petit-déjeuner flottant est également disponible pour un supplément de 150 000 IDR par plateau."
        },
        {
          question: "Y a-t-il un service de ménage quotidien ?",
          answer: "Absolument ! Le ménage est assuré tous les jours de 9h00 à 17h00. Les draps sont changés tous les trois jours par souci de durabilité. Pour garantir votre intimité, veuillez vous mettre d'accord avec l'hôte ou le personnel de votre villa sur l'heure à laquelle le ménage sera effectué. Votre confort est notre priorité."
        },
        {
          question: "Quelle est l'occupation maximale pour cette villa ?",
          answer: "Avec ses deux chambres très spacieuses, cette villa peut accueillir confortablement 4 personnes."
        },
        {
          question: "Quels services sont inclus dans le prix de la villa ?",
          answer: "Notre service comprend un responsable de villa dédié, un hôte de villa ou personnel dédié, le ménage quotidien, ainsi que du personnel pour l'entretien du jardin et de la piscine. Des services supplémentaires comme le pré-approvisionnement de la villa, les transferts depuis l'aéroport, les massages et d'autres prestations sont disponibles moyennant des frais additionnels."
        },
        {
          question: "Est-il possible d'avoir des serviettes propres supplémentaires ?",
          answer: "Certainement ! Nous sommes heureux de vous fournir des serviettes supplémentaires, sous réserve de disponibilité. N'hésitez pas à contacter l'hôte ou le personnel de votre villa et nous ferons de notre mieux pour répondre à votre demande dans les plus brefs délais."
        },
        {
          question: "Comment puis-je réserver des repas pendant mon séjour ?",
          answer: "Pour le déjeuner et le dîner, nous proposons des services variés, notamment des menus fixes, un service de barbecue en direct, des cuisines ethniques et même des repas raffinés préparés par un chef, le tout dans la villa. Les prix commencent à 450 000 IDR par personne. La villa dispose également d'une cuisine entièrement équipée pour préparer vos propres repas si vous le souhaitez."
        }
      ],
      contactText: "Vous avez d'autres questions ?",
      contactButton: "Contactez-nous"
    },
    // À propos
    about: {
      title: "À Propos de la Villa",
      intro: "Bienvenue à Villa Orea, une élégante villa de 2 chambres, conçue comme un véritable cocon de tranquillité, parfaite pour couples et amis proches dans un quartier calme et proche de la vie animée de Seminyak. À l'entrée, une porte intelligente vous accueille : il suffit d'entrer le code fourni et d'appuyer sur l'icône de la cloche pour déverrouiller votre havre de paix.",
      details: "La villa dispose de 2 chambres luxueuses avec lits king-size, Smart TV avec Netflix et YouTube Premium, et salles de bains attenantes. L'espace de vie semi-ouvert comprend un salon avec Smart TV, un coin bar, et une cuisine entièrement équipée. À l'extérieur, profitez de la piscine privée et du jardin tropical, à seulement quelques minutes des cafés, plages et boutiques de Seminyak.",
      button3d: "Immersion Totale",
      images: {
        1: "Suite principale avec lit king-size",
        2: "Vue panoramique depuis la terrasse",
        3: "Salon extérieur avec piscine",
        4: "Salle de massage avec vue sur jardin"
      }
    },
    // Commodités
    amenities: {
      title: "Commodités",
      intro: "Tout a été pensé pour faire de votre séjour à Villa Orea une expérience luxueuse et inoubliable.",
      clickForDetails: "Cliquez pour plus de détails",
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
        description: "Un jardin tropical luxuriant avec une balançoire, créant une atmosphère paisible et relaxante."
      },
      beds: {
        name: "Lits King-Size",
        description: "Deux chambres spacieuses avec des lits king-size confortables pour vous garantir des nuits reposantes pendant votre séjour."
      },
      location: {
        name: "Emplacement Idéal",
        description: "Située dans un quartier très calme et à seulement quelques minutes des cafés animés, plages et boutiques de Seminyak, pour profiter pleinement de votre séjour à Bali."
      }
    },
    // Tarifs
    pricing: {
      title: "Tarifs et Réservation",
      intro: "Découvrez notre villa de luxe à Seminyak, offrant un mélange parfait de confort moderne et d'ambiance tropicale, avec un excellent rapport qualité-prix pour votre séjour à Bali.",
      priceFrom: "À partir de 350€/nuit",
      bookOnline: "Réservez en ligne",
      minStay: "Séjour minimum de 3 nuits",
      capacity: "Capacité de 4 personnes (max 6 avec supplément)",
      cleaning: "Ménage quotidien inclus",
      breakfast: "Petit-déjeuner et chef disponibles (supplément)",
      airport: "Transfert aéroport disponible (supplément)",
      notice: "* Les tarifs peuvent varier selon la saison. Check-in: 14h00, Check-out: 11h00.",
      contactButton: "Contactez-nous"
    },
    // Contact
    contact: {
      title: "Contactez-nous",
      intro: "Vous avez des questions sur notre villa ? N'hésitez pas à nous contacter pour plus d'informations ou pour réserver votre séjour.",
      form: {
        title: "Envoyez-nous un message",
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        submitButton: "Envoyer",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "votre@email.com",
        subjectPlaceholder: "Sujet de votre message",
        messagePlaceholder: "Votre message",
        successMessage: "Votre client de messagerie va s'ouvrir avec votre message préparé",
        errorMessage: "Veuillez corriger les erreurs dans le formulaire.",
        nameError: "Le nom est requis",
        emailError: "Email invalide",
        subjectError: "Le sujet est requis",
        messageError: "Le message est requis"
      },
      info: {
        title: "Coordonnées",
        email: {
          label: "Email",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 53 41"
        },
        address: {
          label: "Adresse",
          value: "Seminyak, Bali, Indonésie"
        },
        map: "Carte Google Maps"
      }
    },
    // Pied de page
    footer: {
      rights: "Tous droits réservés",
      privacy: "Politique de confidentialité",
      cookies: "Politique des cookies",
      designedWith: "Conçu avec",
      forLuxury: "pour des expériences de luxe"
    },
    floatingButton: {
      bookNow: "Réserver dès maintenant",
      book: "Réserver"
    },
    // Témoignages
    testimonials: {
      title: "Témoignages",
      intro: "Ce que nos clients disent de leur expérience.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ Août 2025",
        text: "Nous avons passé un incroyable séjour dans cette villa ! 🌴✨ L'endroit était tout aussi beau que les photos – spacieux, propre et très bien entretenu. La piscine privée était parfaite pour se détendre après avoir exploré Bali. L'emplacement était super pratique, à proximité des cafés, des restaurants et des plages, mais assez calme pour profiter de la paix et de l'intimité. L'hôte était chaleureux, réactif et a veillé à ce que nous nous sentions chez nous tout au long de notre séjour. Je recommande vivement cette villa à tous ceux qui recherchent une expérience confortable et mémorable à Bali ! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ Juin 2025",
        text: "C'était incroyable"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ Septembre 2025",
        text: "Tout était merveilleux, l'hôte était vraiment bien, merci ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ Juin 2025",
        text: "L'endroit était incroyable, extrêmement propre avec un hôte sympathique. C'est un peu loin du centre, mais la villa est incroyable."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ Août 2025",
        text: "Le logement est confortable et agréable"
      }
    },
    // Galerie
    gallery: {
      title: "Galerie",
      intro: "Découvrez notre villa à travers ces images",
      categories: {
        all: "Tout",
        interior: "Intérieur",
        exterior: "Extérieur",
        pool: "Piscine",
        bedrooms: "Chambres"
      },
      seeMore: "Voir plus de photos",
      images: {
        1: "Coin détente",
        2: "Salle à manger",
        3: "Salon avec vue panoramique",
        4: "Bar à cocktails",
        5: "Entrée principale de la villa",
        6: "Salle de bain avec douche",
        7: "Baignoire",
        8: "Salon avec piscine",
        9: "Espace de vie avec piscine",
        10: "Salon et piscine",
        11: "Villa avec piscine",
        12: "Chambre principale",
        13: "Chambre",
        14: "Chambre",
        15: "Chambre",
        16: "Piscine",
        17: "Salle de bain",
        18: "Cuisine",
        19: "Espace extérieur",
        20: "Salon extérieur",
        21: "Vue extérieure",
        22: "Villa",
        30: "Salon extérieur avec vue panoramique",
        31: "Détails architecturaux",
        32: "Coin repas extérieur ombragé",
        33: "Terrasse ombragée",
        34: "Espace extérieur avec vue sur la nature",
        35: "Éclairage nocturne de la piscine",
        36: "Jardin tropical aménagé",
        37: "Vue sur la terrasse et la piscine"
      }
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
      tour3d: "Full Immersion"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "A Luxury Stay in Seminyak",
      description: "Discover a peaceful haven in the heart of Bali",
      cta: "Book Now",
      tour3d: "Full Immersion"
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      intro: "Find answers to your most common questions below",
      searchPlaceholder: "Search a question...",
      searchLabel: "Search a question",
      noResults: "No results found for \"{query}\"",
      resetSearch: "Reset search",
      questions: [
        {
          question: "What are the check-in and check-out times?",
          answer: "Check-in starts at 2:00 PM for our villa. Luggage drop-off is welcome after 11:00 AM as we prepare your villa. Please note, a late check-in fee of IDR 200,000 applies for arrivals after 8:00 PM. Our check-out time is at 11:00 AM. Late check-out is subject to availability and involves extra charges: 50% of the daily rate for check-outs between 11:00 AM and 6:00 PM, and 100% for check-outs after 6:00 PM."
        },
        {
          question: "Is breakfast included in the booking?",
          answer: "Breakfast is not included in the room rate. However, you can easily arrange it by contacting our reservation or concierge team. We offer various menu options prepared by our private chef, right in your villa. The cost is IDR 150,000 per person. A floating breakfast is also available for an additional fee of IDR 150,000 per tray."
        },
        {
          question: "Is there a daily housekeeping service?",
          answer: "Absolutely! Daily housekeeping is provided from 9:00 AM to 5:00 PM. Linens are changed every third day for sustainability. To ensure privacy, please coordinate with your Villa Host or Staff for a convenient cleaning time. Your comfort is our priority."
        },
        {
          question: "What is the maximum occupancy for this villa?",
          answer: "With its two very spacious bedrooms, this villa comfortably accommodates 4 guests."
        },
        {
          question: "What services are included in the villa price?",
          answer: "Our service includes a dedicated Villa Manager, Villa Host or Staff, daily housekeeping, and garden and pool maintenance. Additional services such as villa pre-stocking, airport transfers, massage services, and other amenities are available for an extra fee."
        },
        {
          question: "Can we have extra clean towels?",
          answer: "Certainly! We are happy to provide extra towels, subject to availability. Please feel free to reach out to your Villa Host or Staff, and we'll do our best to accommodate your request promptly."
        },
        {
          question: "How can I arrange meals during my stay?",
          answer: "For lunch and dinner, we offer various services, including set menus, live BBQ cooking, ethnic cuisines, and even fine dining prepared by a chef, all in the villa. Prices start at IDR 450,000 per person. The villa also features a fully equipped kitchen, allowing you to prepare your own meals if you prefer."
        }
      ],
      contactText: "Do you have other questions?",
      contactButton: "Contact Us"
    },
    // About
    about: {
      title: "About the Villa",
      intro: "Welcome to Villa Orea, an elegant 2-bedroom villa designed as a true cocoon of tranquility, perfect for couples and close friends in a quiet area close to the vibrant life of Seminyak. At the entrance, a smart door awaits: simply enter the provided code and press the bell icon to unlock your haven of peace.",
      details: "The villa features 2 luxurious bedrooms with king-size beds, Smart TVs with Netflix and YouTube Premium, and en-suite bathrooms. The semi-open living space includes a Smart TV lounge, a cozy bar corner, and a fully equipped kitchen. Outside, enjoy the private pool and tropical garden, just minutes from Seminyak's bustling cafés, beaches, and shops.",
      button3d: "Full Immersion",
      images: {
        1: "Master suite with king-size bed",
        2: "Panoramic view from the terrace",
        3: "Outdoor lounge with pool",
        4: "Massage room with garden view"
      }
    },
    // Amenities
    amenities: {
      title: "Amenities",
      intro: "Everything has been designed to make your stay at Villa Orea a luxurious and unforgettable experience.",
      clickForDetails: "Click for more details",
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
        description: "Fully equipped open kitchen with tea machine, grille-pain, and coffee maker to prepare your meals with ease."
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
        description: "A lush tropical garden with a swing, creating a peaceful and relaxing atmosphere."
      },
      beds: {
        name: "King-Size Beds",
        description: "Two spacious bedrooms with comfortable king-size beds to ensure restful nights during your stay."
      },
      location: {
        name: "Ideal Location",
        description: "Located in a very quiet area and just minutes from Seminyak's bustling cafés, beaches, and shops, to fully enjoy your stay in Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Pricing and Booking",
      intro: "Discover our luxury villa in Seminyak, offering the perfect blend of modern comfort and tropical ambiance, with excellent value for your Bali stay.",
      priceFrom: "From €350/night",
      bookOnline: "Book Online",
      minStay: "Minimum stay of 3 nights",
      capacity: "Capacity of 4 people (max 6 with supplement)",
      cleaning: "Daily housekeeping included",
      breakfast: "Breakfast and chef available (extra charge)",
      airport: "Airport transfer available (extra charge)",
      notice: "* Rates may vary by season. Check-in: 2:00 PM, Check-out: 11:00 AM.",
      contactButton: "Contact Us"
    },
    // Contact
    contact: {
      title: "Contact Us",
      intro: "We'd love to hear from you! If you have any questions or need assistance with your booking, please don't hesitate to contact us.",
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submitButton: "Send",
        namePlaceholder: "Your Name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Subject of your message",
        messagePlaceholder: "Your message",
        successMessage: "Your email client will open with your pre-prepared message",
        errorMessage: "Please correct any errors in the form.",
        nameError: "Name is required",
        emailError: "Invalid email",
        subjectError: "Subject is required",
        messageError: "Message is required"
      },
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "Address",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "Google Maps"
      }
    },
    // Footer
    footer: {
      rights: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Use",
      cookiePolicy: "Cookie Policy",
      followUs: "Follow us",
      bookOn: "Book on",
      contactTitle: "Contact",
      designedWith: "Designed with",
      forLuxury: "for luxury experiences"
    },
    floatingButton: {
      bookNow: "Book Now",
      book: "Book"
    },
    // Testimonials
    testimonials: {
      title: "Reviews",
      intro: "What our guests say about their experience.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ August 2025",
        text: "We had an amazing stay at this villa! 🌴✨ The place was just as beautiful as the photos—spacious, clean, and very well-maintained. The private pool was perfect for unwinding after exploring Bali. The location was super convenient, close to cafes, restaurants, and beaches, yet quiet enough to enjoy peace and privacy. The host was warm, responsive, and made sure we felt at home throughout our stay. Highly recommend this villa for anyone looking for a comfortable and memorable experience in Bali! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ June 2025",
        text: "Was amazing"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ September 2025",
        text: "Everything was wonderful, the host was really good, thank you ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ June 2025",
        text: "Place was amazing, extremely clean with a friendly host. It is a bit far from the center but the villa is amazing."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ August 2025",
        text: "The accommodation is comfortable and pleasant"
      }
    },
    // Gallery
    gallery: {
      title: "Gallery",
      intro: "Discover our villa through these images",
      categories: {
        all: "All",
        interior: "Interior",
        exterior: "Exterior",
        pool: "Pool",
        bedrooms: "Bedrooms"
      },
      seeMore: "See more photos",
      images: {
        1: "Relaxation area",
        2: "Dining room",
        3: "Living room with panoramic view",
        4: "Cocktail bar",
        5: "Main entrance of the villa",
        6: "Bathroom with shower",
        7: "Bathtub",
        8: "Living room with pool",
        9: "Living area with pool",
        10: "Living room and pool",
        11: "Villa with pool",
        12: "Master bedroom",
        13: "Bedroom",
        14: "Bedroom",
        15: "Bedroom",
        16: "Pool",
        17: "Bathroom",
        18: "Kitchen",
        19: "Outdoor space",
        20: "Outdoor living room",
        21: "Exterior view",
        22: "Villa",
        30: "Outdoor living room with panoramic view",
        31: "Architectural details",
        32: "Shaded outdoor dining area",
        33: "Shaded terrace",
        34: "Outdoor space with nature view",
        35: "Night lighting of the pool",
        36: "Landscaped tropical garden",
        37: "View of terrace and pool"
      }
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
      tour3d: "完全沉浸"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "苍古的豪华住宿",
      description: "在巴厘岛中心发现宁静的避风港",
      cta: "立即预订",
      tour3d: "完全沉浸"
    },
    // About
    about: {
      title: "关于别墅",
      intro: "欢迎来到 Villa Orea，这是一栋优雅的两卧室别墅，专为打造宁静舒适的私密空间而设计，非常适合情侣和亲密朋友，坐落于宁静的区域，靠近苍古（Seminyak）的繁华生活。进入别墅时，一扇智能门等待着您：只需输入提供的密码并点击铃铛图标即可解锁您的宁静港湾。",
      details: "别墅内的两间卧室以简约舒适为设计理念，配备特大床、智能电视（支持Netflix与YouTube Premium）和套间浴室。半开放式起居空间设有一个智能电视区、一个温馨吧台，以及一个设备齐全的厨房。在外面，您可以享受私人泳池和热带花园，距离苍古热闹的咖啡馆、海滩和商店仅几分钟路程。",
      button3d: "完全沉浸",
      images: {
        1: "带特大床的主套房",
        2: "从露台看到的全景",
        3: "带游泳池的户外休息区",
        4: "带花园景观的按摩室"
      }
    },
    // Amenities
    amenities: {
      title: "设施",
      intro: "为了让您在Villa Orea的住宿体验成为豪华难忘的经历，我们考虑到了一切。",
      clickForDetails: "点击查看更多详情",
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
        description: "郁郁葱葱的热带花园，配有秋千，营造宁静放松的氛围。"
      },
      beds: {
        name: "特大床",
        description: "两间宽敞的卧室配有舒适的特大床，确保您在住宿期间安睡。"
      },
      location: {
        name: "理想位置",
        description: "位于非常安静的区域，距离苍古热闹的咖啡馆、海滩和商店仅几分钟路程，充分享受您的巴厘岛之旅。"
      }
    },
    // Pricing
    pricing: {
      title: "价格与预订",
      intro: "探索我们在苍古的豪华别墅，提供现代舒适与热带氛围的完美融合，为您在巴厘岛的住宿带来极高的性价比。",
      priceFrom: "起价€350/晚",
      bookOnline: "在线预订",
      minStay: "最少入住3晚",
      capacity: "可容纳4人（最多6人，需附加费用）",
      cleaning: "包含每日客房清洁",
      breakfast: "可提供早餐和厨师服务（额外收费）",
      airport: "可提供机场接送服务（额外收费）",
      notice: "* 价格可能因季节而异。入住时间: 14:00, 退房时间: 11:00。",
      contactButton: "联系我们"
    },
    // FAQ
    faq: {
      title: "常见问题",
      intro: "在下方找到您最常见问题的答案",
      searchPlaceholder: "搜索问题...",
      searchLabel: "搜索问题",
      noResults: "未找到与\"{query}\"相关的结果",
      resetSearch: "重置搜索",
      questions: [
        {
          question: "入住和退房时间是什么？",
          answer: "我们的别墅入住时间从下午2:00开始。我们欢迎您在上午11:00后寄存行李，同时我们为您准备别墅。请注意，晚上8:00后抵达需支付IDR 200,000的晚间登记费。我们的退房时间是上午11:00。延迟退房视情况而定，并有额外费用：上午11:00至下午6:00之间退房为每日费率的50%，下午6:00后退房为100%。"
        },
        {
          question: "预订中包含早餐吗？",
          answer: "房费中不包含早餐。但是，您可以通过联系我们的预订或礼宾团队轻松安排。我们提供由私人厨师在您的别墅中准备的各种菜单选项。费用为每人IDR 150,000。您还可以享受漂浮早餐，每托盘额外费用为IDR 150,000。"
        },
        {
          question: "有每日客房清洁服务吗？",
          answer: "当然！每日客房清洁服务时间为上午9:00至下午5:00。为了可持续发展，床单每三天更换一次。为确保隐私，请与您的别墅主管或工作人员协调方便的清洁时间。您的舒适是我们的首要任务。"
        },
        {
          question: "这个别墅的最大入住人数是多少？",
          answer: "凭借其两间非常宽敞的卧室，这座别墅可以舒适地容纳4位客人。"
        },
        {
          question: "别墅价格包含哪些服务？",
          answer: "我们的服务包括专属别墅经理，别墅主管或工作人员，每日客房清洁，以及花园和泳池维护。额外服务如别墅预先备货，机场接送，按摩服务和其他设施可额外付费使用。"
        },
        {
          question: "可以提供额外的干净毛巾吗？",
          answer: "当然可以！我们很高兴提供额外的毛巾，视供应情况而定。请随时联系您的别墅主管或工作人员，我们将尽力迅速满足您的要求。"
        },
        {
          question: "如何在入住期间安排用餐？",
          answer: "午餐和晚餐方面，我们提供多种服务，包括套餐，现场BBQ烹饪，民族美食，甚至由厨师准备的精致餐点，全部在别墅内烹制。价格从每人IDR 450,000起。别墅还配备全套厨房设备，如果您喜欢，也可以自己准备餐点。"
        }
      ],
      contactText: "您有其他问题吗？",
      contactButton: "联系我们"
    },
    // Contact
    contact: {
      title: "联系我们",
      intro: "对我们的别墅有疑问？请随时联系我们获取更多信息或预订您的住宿。",
      form: {
        title: "发送信息",
        name: "全名",
        email: "电子邮件",
        subject: "主题",
        message: "信息",
        submitButton: "发送",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "您信息的主题",
        messagePlaceholder: "您的信息",
        successMessage: "您的电子邮件客户端将打开，信息已准备好",
        errorMessage: "请修正表单中的错误。",
        nameError: "需要提供姓名",
        emailError: "无效的电子邮件",
        subjectError: "需要提供主题",
        messageError: "需要提供信息"
      },
      info: {
        title: "联系信息",
        email: {
          label: "电子邮件",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "地址",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "谷歌地图"
      }
    },
    // Footer
    footer: {
      rights: "版权所有",
      privacyPolicy: "隐私政策",
      terms: "使用条款",
      cookiePolicy: "Cookie政策",
      followUs: "关注我们",
      bookOn: "在这里预订",
      contactTitle: "联系方式",
      legalTitle: "法律信息",
      designedWith: "精心设计",
      forLuxury: "为奢华体验而生"
    },
    floatingButton: {
      bookNow: "立即预订",
      book: "预订"
    },
    // Testimonials
    testimonials: {
      title: "评价",
      intro: "客人对他们体验的评价。",
      customer1: {
        name: "Shawn",
        location: "★★★★★ 2025年8月",
        text: "我们在这座别墅度过了一段美妙的时光！🌴✨ 这个地方和照片一样美丽——宽敞、干净、维护得很好。私人泳池非常适合探索巴厘岛后放松身心。位置超级方便，靠近咖啡馆、餐厅和海滩，但又足够安静，可以享受和平与隐私。房东热情、反应迅速，确保我们在整个住宿期间感到宾至如归。强烈推荐这座别墅给任何在巴厘岛寻找舒适难忘体验的人！🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ 2025年6月",
        text: "太棒了"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ 2025年9月",
        text: "一切都很棒，房东真的很好，谢谢 ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ 2025年6月",
        text: "这个地方太棒了，非常干净，房东很友好。离市中心有点远，但别墅很棒。"
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ 2025年8月",
        text: "住宿舒适愉快"
      }
    },
    // Gallery
    gallery: {
      title: "画廊",
      intro: "通过这些图片探索我们的别墅",
      categories: {
        all: "全部",
        interior: "室内",
        exterior: "室外",
        pool: "游泳池",
        bedrooms: "卧室"
      },
      seeMore: "查看更多照片",
      images: {
        1: "休闲区",
        2: "餐厅",
        3: "全景客厅",
        4: "鸡尾酒吧",
        5: "别墅主入口",
        6: "带淋浴的浴室",
        7: "浴缸",
        8: "带泳池的客厅",
        9: "带泳池的生活区",
        10: "客厅和泳池",
        11: "带泳池的别墅",
        12: "主卧室",
        13: "卧室",
        14: "卧室",
        15: "卧室",
        16: "泳池",
        17: "浴室",
        18: "厨房",
        19: "户外空间",
        20: "户外客厅",
        21: "外观",
        22: "别墅",
        30: "带全景的户外客厅",
        31: "建筑细节",
        32: "遮阳户外用餐区",
        33: "遮阳露台",
        34: "带自然景观的户外空间",
        35: "泳池夜景照明",
        36: "景观热带花园",
        37: "露台和泳池景观"
      }
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
      subtitle: "Una estancia de lujo en Seminyak",
      description: "Descubre un refugio pacífico en el corazón de Bali",
      cta: "Reservar ahora",
      tour3d: "Tour 3D"
    },
    // About
    about: {
      title: "Acerca de la Villa",
      intro: "Bienvenido a Villa Orea, una elegante villa de 2 habitaciones diseñada como un verdadero capullo de tranquilidad, perfecta para parejas y amigos cercanos en una zona tranquila cerca de la vibrante vida de Seminyak. En la entrada, una puerta inteligente le espera: simplemente ingrese el código proporcionado y presione el ícono de campana para desbloquear su refugio de paz.",
      details: "La villa cuenta con 2 lujosas habitaciones con camas king-size, Smart TVs con Netflix y YouTube Premium, y baños en suite. El espacio de estar semi-abierto incluye una sala con Smart TV, un acogedor rincón de bar y una cocina totalmente equipada. Afuera, disfruta de la piscina privada y el jardín tropical, a solo minutos de los bulliciosos cafés, playas y tiendas de Seminyak.",
      button3d: "Tour 3D",
      images: {
        1: "Suite principal con cama king-size",
        2: "Vista panorámica desde la terraza",
        3: "Salón al aire libre con piscina",
        4: "Sala de masajes con vista al jardín"
      }
    },
    // Amenities
    amenities: {
      title: "Comodidades",
      intro: "Todo ha sido diseñado para hacer de su estancia en Villa Orea una experiencia lujosa e inolvidable.",
      clickForDetails: "Click para más detalles",
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
        description: "Un exuberante jardín tropical con un columpio, creando una atmósfera pacífica y relajante."
      },
      beds: {
        name: "Camas King-Size",
        description: "Dos espaciosas habitaciones con cómodas camas king-size para asegurar noches reparadoras durante su estancia."
      },
      location: {
        name: "Ubicación ideal",
        description: "Ubicada en una zona muy tranquila y a solo minutos de los bulliciosos cafés, playas y tiendas de Seminyak, para disfrutar plenamente de su estancia en Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Precios y Reservas",
      intro: "Descubra nuestra lujosa villa en Seminyak, que ofrece la perfecta combinación de confort moderno y ambiente tropical, con excelente valor para su estancia en Bali.",
      priceFrom: "Desde €350/noche",
      bookOnline: "Reservar en línea",
      minStay: "Estancia mínima de 3 noches",
      capacity: "Capacidad para 4 personas (máximo 6 con recargo)",
      cleaning: "Limpieza diaria incluida",
      breakfast: "Desayuno y chef disponibles (extra)",
      airport: "Traslado al aeropuerto disponible (extra)",
      notice: "* Las tarifas pueden variar según la temporada. Check-in: 14:00, Check-out: 11:00.",
      contactButton: "Contáctenos"
    },
    // FAQ
    faq: {
      title: "Preguntas Frecuentes",
      intro: "Encuentre respuestas a sus preguntas más comunes a continuación",
      searchPlaceholder: "Buscar pregunta...",
      searchLabel: "Buscar pregunta",
      noResults: "No se encontraron resultados para \"{query}\"",
      resetSearch: "Reiniciar búsqueda",
      questions: [
        {
          question: "¿Cuáles son los horarios de check-in y check-out?",
          answer: "El check-in para nuestra villa comienza a las 14:00. Le invitamos a dejar su equipaje después de las 11:00 mientras preparamos su villa. Tenga en cuenta que se aplicará un cargo de IDR 200,000 por check-in después de las 20:00. Nuestro check-out es a las 11:00. El check-out tardío está sujeto a disponibilidad e implica gastos adicionales: 50% de la tarifa diaria para check-out entre las 11:00 y las 18:00, y 100% para check-out después de las 18:00."
        },
        {
          question: "¿Está incluido el desayuno en la reserva?",
          answer: "El desayuno no está incluido en la tarifa de la habitación. Sin embargo, puede organizarlo fácilmente contactando con nuestro equipo de reservas o conserjería. Ofrecemos varias opciones de menú, preparadas por nuestro chef privado directamente en su villa. El costo es de IDR 150,000 por persona. También puede disfrutar de un desayuno flotante por un costo adicional de IDR 150,000 por bandeja."
        },
        {
          question: "¿Hay servicio de limpieza diario?",
          answer: "¡Por supuesto! Se proporciona limpieza diaria de 9:00 a 17:00. Las sábanas se cambian cada tres días por motivos de sostenibilidad. Para garantizar la privacidad, coordine un momento conveniente para la limpieza con su anfitrión o personal de la villa. Su comodidad es nuestra prioridad."
        },
        {
          question: "¿Cuál es la ocupación máxima para esta villa?",
          answer: "Con sus dos habitaciones muy espaciosas, esta villa puede acomodar cómodamente a 4 huéspedes."
        },
        {
          question: "¿Qué está incluido en el precio de la villa?",
          answer: "Nuestro servicio incluye un gerente de villa exclusivo, un anfitrión o personal, limpieza diaria, y mantenimiento del jardín y la piscina. Servicios adicionales como abastecimiento previo de la villa, traslados al aeropuerto, servicios de masaje y otras comodidades están disponibles por un costo adicional."
        },
        {
          question: "¿Puedo obtener toallas limpias adicionales?",
          answer: "¡Ciertamente! Nos complace proporcionar toallas adicionales, sujeto a disponibilidad. No dude en contactar a su anfitrión o personal de la villa, y haremos todo lo posible para atender su solicitud rápidamente."
        },
        {
          question: "¿Cómo puedo organizar las comidas durante mi estancia?",
          answer: "Para almuerzos y cenas, ofrecemos servicios variados que incluyen menús fijos, cocina BBQ en vivo, cocinas étnicas, e incluso comidas gourmet preparadas por un chef, todo preparado en la villa. Los precios comienzan desde IDR 450,000 por persona. La villa también está equipada con una cocina totalmente equipada, lo que le permite preparar sus propias comidas si lo prefiere."
        }
      ],
      contactText: "¿Tiene otras preguntas?",
      contactButton: "Contáctenos"
    },
    // Contact
    contact: {
      title: "Contáctenos",
      intro: "¿Tiene preguntas sobre nuestra villa? No dude en contactarnos para obtener más información o reservar su estancia.",
      form: {
        title: "Enviar mensaje",
        name: "Nombre completo",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        submitButton: "Enviar",
        namePlaceholder: "Su nombre",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Asunto de su mensaje",
        messagePlaceholder: "Su mensaje",
        successMessage: "Su cliente de correo electrónico se abrirá con su mensaje preparado",
        errorMessage: "Por favor, corrija los errores en el formulario.",
        nameError: "Se requiere un nombre",
        emailError: "Correo electrónico inválido",
        subjectError: "Se requiere un asunto",
        messageError: "Se requiere un mensaje"
      },
      info: {
        title: "Información de contacto",
        email: {
          label: "Correo electrónico",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "Dirección",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "Google Maps"
      }
    },
    // Footer
    footer: {
      rights: "Todos los derechos reservados",
      privacyPolicy: "Política de privacidad",
      terms: "Términos de uso",
      cookiePolicy: "Política de cookies",
      followUs: "Síguenos",
      bookOn: "Reserva en",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      designedWith: "Diseñado con",
      forLuxury: "para experiencias de lujo"
    },
    floatingButton: {
      bookNow: "Reservar ahora",
      book: "Reservar"
    },
    // Testimonials
    testimonials: {
      title: "Opiniones",
      intro: "Lo que nuestros huéspedes dicen sobre su experiencia.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ Agosto 2025",
        text: "¡Tuvimos una estancia increíble en esta villa! 🌴✨ El lugar era tan hermoso como en las fotos: espacioso, limpio y muy bien mantenido. La piscina privada fue perfecta para relajarse después de explorar Bali. La ubicación era súper conveniente, cerca de cafés, restaurantes y playas, pero lo suficientemente tranquila para disfrutar de paz y privacidad. El anfitrión fue cálido, receptivo y se aseguró de que nos sintiéramos como en casa durante toda nuestra estancia. ¡Recomiendo encarecidamente esta villa para cualquiera que busque una experiencia cómoda y memorable en Bali! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ Junio 2025",
        text: "Fue increíble"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ Septiembre 2025",
        text: "Todo fue maravilloso, el anfitrión fue realmente bueno, gracias ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ Junio 2025",
        text: "El lugar era increíble, extremadamente limpio con un anfitrión amable. Está un poco lejos del centro pero la villa es increíble."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ Agosto 2025",
        text: "El alojamiento es cómodo y agradable"
      }
    },
    // Gallery
    gallery: {
      title: "Galería",
      intro: "Descubra nuestra villa a través de estas imágenes",
      categories: {
        all: "Todos",
        interior: "Interior",
        exterior: "Exterior",
        pool: "Piscina",
        bedrooms: "Habitaciones"
      },
      seeMore: "Ver más fotos",
      images: {
        1: "Área de relajación",
        2: "Comedor",
        3: "Salón con vista panorámica",
        4: "Bar de cócteles",
        5: "Entrada principal de la villa",
        6: "Baño con ducha",
        7: "Bañera",
        8: "Salón con piscina",
        9: "Área de estar con piscina",
        10: "Salón y piscina",
        11: "Villa con piscina",
        12: "Dormitorio principal",
        13: "Dormitorio",
        14: "Dormitorio",
        15: "Dormitorio",
        16: "Piscina",
        17: "Baño",
        18: "Cocina",
        19: "Espacio exterior",
        20: "Salón exterior",
        21: "Vista exterior",
        22: "Villa",
        30: "Sala de estar exterior con vista panorámica",
        31: "Detalles arquitectónicos",
        32: "Área de comedor exterior sombreada",
        33: "Terraza sombreada",
        34: "Außenbereich mit Naturblick",
        35: "Nachtbeleuchtung des Pools",
        36: "Gestalteter tropischer Garten",
        37: "Blick auf Terrasse und Pool"
      }
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
      subtitle: "Menginap Mewah di Seminyak",
      description: "Temukan surga ketenangan di jantung Bali",
      cta: "Pesan Sekarang",
      tour3d: "Tur 3D"
    },
    // About
    about: {
      title: "Tentang Villa",
      intro: "Selamat datang di Villa Orea, vila elegan dengan 2 kamar tidur, dirancang sebagai oase ketenangan sejati, sempurna untuk pasangan dan sahabat dekat di area tenang dekat kehidupan Seminyak yang semarak. Di pintu masuk, pintu pintar menanti Anda: cukup masukkan kode yang diberikan dan tekan ikon bel untuk membuka tempat perlindungan damai Anda.",
      details: "Vila ini memiliki 2 kamar tidur mewah dengan tempat tidur king-size, Smart TV dengan Netflix dan YouTube Premium, dan kamar mandi dalam. Ruang tamu semi-terbuka termasuk lounge Smart TV, sudut bar yang nyaman, dan dapur lengkap. Di luar, nikmati kolam renang pribadi dan taman tropis, hanya beberapa menit dari kafe, pantai, dan toko ramai Seminyak.",
      button3d: "Tur 3D",
      images: {
        1: "Kamar utama dengan tempat tidur king-size",
        2: "Pemandangan panorama dari teras",
        3: "Ruang tamu luar dengan kolam renang",
        4: "Ruang pijat dengan pemandangan taman"
      }
    },
    // Amenities
    amenities: {
      title: "Fasilitas",
      intro: "Semuanya telah dirancang untuk membuat pengalaman menginap Anda di Villa Orea menjadi mewah dan tak terlupakan.",
      clickForDetails: "Klik untuk detail lebih lanjut",
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
        description: "Taman tropis yang rimbun dengan ayunan, menciptakan suasana damai dan menenangkan."
      },
      beds: {
        name: "Tempat Tidur King-Size",
        description: "Dua kamar tidur luas dengan tempat tidur king-size yang nyaman untuk memastikan malam yang nyenyak selama Anda menginap."
      },
      location: {
        name: "Lokasi Ideal",
        description: "Terletak di area yang sangat tenang dan hanya beberapa menit dari kafe ramai, pantai, dan toko Seminyak, untuk menikmati sepenuhnya pengalaman Anda di Bali."
      }
    },
    // Pricing
    pricing: {
      title: "Harga dan Pemesanan",
      intro: "Temukan villa mewah kami di Seminyak, yang menawarkan perpaduan sempurna antara kenyamanan modern dan suasana tropis, dengan nilai luar biasa untuk pengalaman Anda di Bali.",
      priceFrom: "Mulai dari €350/malam",
      bookOnline: "Online Booking",
      minStay: "Minimum menginap 3 malam",
      capacity: "Kapasitas 4 orang (maks. 6 dengan biaya tambahan)",
      cleaning: "Pembersihan harian termasuk",
      breakfast: "Sarapan dan koki tersedia (biaya tambahan)",
      airport: "Antar jemput bandara tersedia (biaya tambahan)",
      notice: "* Tarif dapat bervariasi berdasarkan musim. Check-in: 14:00, Check-out: 11:00.",
      contactButton: "Hubungi Kami"
    },
    // FAQ
    faq: {
      title: "Pertanyaan Umum",
      intro: "Temukan jawaban untuk pertanyaan umum Anda di bawah ini",
      searchPlaceholder: "Cari pertanyaan...",
      searchLabel: "Cari pertanyaan",
      noResults: "Tidak ada hasil untuk \"{query}\"",
      resetSearch: "Reset pencarian",
      questions: [
        {
          question: "Apa waktu check-in dan check-out?",
          answer: "Check-in untuk villa kami dimulai pukul 14:00. Kami mengundang Anda untuk menitipkan bagasi setelah pukul 11:00 saat kami menyiapkan villa Anda. Harap dicatat bahwa check-in setelah pukul 20:00 dikenakan biaya sebesar IDR 200.000. Check-out kami pukul 11:00. Check-out terlambat tergantung ketersediaan dan melibatkan biaya tambahan: 50% dari tarif harian untuk check-out antara pukul 11:00 dan 18:00, dan 100% untuk check-out setelah pukul 18:00."
        },
        {
          question: "Apakah sarapan termasuk dalam pemesanan?",
          answer: "Sarapan tidak termasuk dalam tarif kamar. Namun, Anda dapat dengan mudah mengaturnya dengan menghubungi tim reservasi atau concierge kami. Kami menawarkan berbagai pilihan menu yang disiapkan oleh chef pribadi kami langsung di villa Anda. Biayanya IDR 150.000 per orang. Anda juga dapat menikmati floating breakfast dengan biaya tambahan IDR 150.000 per nampan."
        },
        {
          question: "Apakah ada layanan pembersihan harian?",
          answer: "Tentu saja! Pembersihan harian disediakan dari pukul 9:00 hingga 17:00. Seprai diganti setiap tiga hari untuk keberkelanjutan. Untuk memastikan privasi, silakan koordinasikan waktu pembersihan yang nyaman dengan host atau staf villa Anda. Kenyamanan Anda adalah prioritas kami."
        },
        {
          question: "Berapa kapasitas maksimum untuk villa ini?",
          answer: "Dengan dua kamar tidur yang sangat luas, villa ini dapat menampung 4 tamu dengan nyaman."
        },
        {
          question: "Apa yang termasuk dalam harga villa?",
          answer: "Layanan kami mencakup manajer villa eksklusif, host atau staf, pembersihan harian, dan pemeliharaan taman dan kolam renang. Layanan tambahan seperti pra-stok villa, transfer bandara, layanan pijat, dan fasilitas lainnya tersedia dengan biaya tambahan."
        },
        {
          question: "Bisakah saya mendapatkan handuk bersih tambahan?",
          answer: "Tentu saja! Kami senang menyediakan handuk tambahan, tergantung ketersediaan. Jangan ragu untuk menghubungi host atau staf villa Anda, dan kami akan melakukan yang terbaik untuk memenuhi permintaan Anda dengan cepat."
        },
        {
          question: "Bagaimana saya bisa mengatur makanan selama masa tinggal saya?",
          answer: "Untuk makan siang dan makan malam, kami menawarkan layanan yang bervariasi termasuk menu tetap, memasak BBQ langsung, masakan etnis, dan bahkan makanan mewah yang disiapkan oleh seorang chef, semuanya disiapkan di villa. Harga mulai dari IDR 450.000 per orang. Villa juga dilengkapi dengan dapur yang lengkap, memungkinkan Anda menyiapkan makanan sendiri jika Anda lebih suka."
        }
      ],
      contactText: "Punya pertanyaan lain?",
      contactButton: "Hubungi Kami"
    },
    // Contact
    contact: {
      title: "Hubungi Kami",
      intro: "Punya pertanyaan tentang villa kami? Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau memesan tempat Anda tinggal.",
      form: {
        title: "Kirim pesan",
        name: "Nama lengkap",
        email: "Surel",
        subject: "Subjek",
        message: "Pesan",
        submitButton: "Kirim",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Subjek pesan Anda",
        messagePlaceholder: "Pesan Anda",
        successMessage: "Klien surel Anda akan terbuka dengan pesan Anda yang telah dipersiapkan",
        errorMessage: "Silakan perbaiki kesalahan di formulir.",
        nameError: "Nama diperlukan",
        emailError: "Surel tidak valid",
        subjectError: "Subjek diperlukan",
        messageError: "Pesan diperlukan"
      },
      info: {
        title: "Informasi Kontak",
        email: {
          label: "Surel",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "Alamat",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "Google Maps"
      }
    },
    // Footer
    footer: {
      rights: "Seluruh hak cipta",
      privacyPolicy: "Kebijakan Privasi",
      terms: "Ketentuan Penggunaan",
      cookiePolicy: "Kebijakan Cookie",
      followUs: "Ikuti kami",
      bookOn: "Pesan di",
      contactTitle: "Kontak",
      legalTitle: "Hukum",
      designedWith: "Dirancang dengan",
      forLuxury: "untuk pengalaman mewah"
    },
    floatingButton: {
      bookNow: "Pesan Sekarang",
      book: "Pesan"
    },
    // Testimonials
    testimonials: {
      title: "Ulasan",
      intro: "Apa yang tamu kami katakan tentang pengalaman mereka.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ Agustus 2025",
        text: "Kami memiliki pengalaman menginap yang luar biasa di villa ini! 🌴✨ Tempatnya sama cantiknya dengan foto—luas, bersih, dan sangat terawat. Kolam renang pribadi sangat sempurna untuk bersantai setelah menjelajahi Bali. Lokasinya sangat nyaman, dekat dengan kafe, restoran, dan pantai, namun cukup tenang untuk menikmati kedamaian dan privasi. Tuan rumah ramah, responsif, dan memastikan kami merasa seperti di rumah sendiri selama menginap. Sangat merekomendasikan villa ini untuk siapa saja yang mencari pengalaman yang nyaman dan berkesan di Bali! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ Juni 2025",
        text: "Luar biasa"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ September 2025",
        text: "Semuanya luar biasa, tuan rumahnya sangat baik, terima kasih ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ Juni 2025",
        text: "Tempatnya luar biasa, sangat bersih dengan tuan rumah yang ramah. Agak jauh dari pusat tapi villanya luar biasa."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ Agustus 2025",
        text: "Akomodasinya nyaman dan menyenangkan"
      }
    },
    // Gallery
    gallery: {
      title: "Galeri",
      intro: "Jelajahi villa kami melalui gambar-gambar ini",
      categories: {
        all: "Semua",
        interior: "Interior",
        exterior: "Eksterior",
        pool: "Kolam Renang",
        bedrooms: "Kamar Tidur"
      },
      seeMore: "Lihat lebih banyak foto",
      images: {
        1: "Area relaksasi",
        2: "Ruang makan",
        3: "Ruang tamu dengan pemandangan panorama",
        4: "Bar koktail",
        5: "Pintu masuk utama villa",
        6: "Kamar mandi dengan pancuran",
        7: "Bathtub",
        8: "Ruang tamu dengan kolam renang",
        9: "Area hidup dengan kolam renang",
        10: "Ruang tamu dan kolam renang",
        11: "Villa dengan kolam renang",
        12: "Kamar tidur utama",
        13: "Kamar tidur",
        14: "Kamar tidur",
        15: "Kamar tidur",
        16: "Kolam renang",
        17: "Kamar mandi",
        18: "Dapur",
        19: "Ruang luar",
        20: "Ruang tamu luar",
        21: "Tampilan luar",
        22: "Villa",
        30: "Ruang tamu luar ruangan dengan pemandangan panorama",
        31: "Detail arsitektur",
        32: "Area makan luar ruangan yang teduh",
        33: "Teras teduh",
        34: "Ruang luar dengan pemandangan alam",
        35: "Pencahayaan malam kolam renang",
        36: "Taman tropis yang tertata",
        37: "Pemandangan teras dan kolam renang"
      }
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
      subtitle: "Ein luxuriöser Aufenthalt in Seminyak",
      description: "Entdecken Sie eine friedliche Oase im Herzen von Bali",
      cta: "Jetzt buchen",
      tour3d: "3D-Tour"
    },
    // About
    about: {
      title: "Über die Villa",
      intro: "Willkommen in der Villa Orea, einer eleganten Villa mit 2 Schlafzimmern, die als wahre Ruheoase konzipiert wurde – perfekt für Paare und enge Freunde in einer ruhigen Gegend nahe dem lebhaften Leben von Seminyak. Am Eingang erwartet Sie eine intelligente Tür: geben Sie einfach den bereitgestellten Code ein und drücken Sie das Glockensymbol, um Ihr friedliches Refugium zu öffnen.",
      details: "Die Villa verfügt über 2 luxuriöse Schlafzimmer mit Kingsize-Betten, Smart-TVs mit Netflix und YouTube Premium sowie eigene Badezimmer. Der halboffen gestaltete Wohnbereich umfasst eine Smart-TV-Lounge, eine gemütliche Barecke und eine voll ausgestattete Küche. Draußen genießen Sie den privaten Pool und den tropischen Garten, nur wenige Minuten von den belebten Cafés, Stränden und Geschäften von Seminyak entfernt.",
      button3d: "3D-Tour",
      images: {
        1: "Hauptsuite mit Kingsize-Bett",
        2: "Panoramablick von der Terrasse",
        3: "Außenlounge mit Pool",
        4: "Massageraum mit Gartenblick"
      }
    },
    // Amenities
    amenities: {
      title: "Ausstattung",
      intro: "Alles wurde gestaltet, um Ihren Aufenthalt in der Villa Orea zu einem luxuriösen und unvergesslichen Erlebnis zu machen.",
      clickForDetails: "Klicken Sie für weitere Details",
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
        description: "Ein üppiger tropischer Garten mit einer Schaukel, der eine friedliche und entspannende Atmosphäre schafft."
      },
      beds: {
        name: "Kingsize-Betten",
        description: "Zwei geräumige Schlafzimmer mit komfortablen Kingsize-Betten für erholsame Nächte während Ihres Aufenthalts."
      },
      location: {
        name: "Ideale Lage",
        description: "In einer sehr ruhigen Gegend gelegen und nur wenige Minuten von den belebten Cafés, Stränden und Geschäften von Seminyak entfernt, um Ihren Aufenthalt auf Bali in vollen Zügen zu genießen."
      }
    },
    // Pricing
    pricing: {
      title: "Preise und Buchung",
      intro: "Entdecken Sie unsere Luxusvilla in Seminyak, die die perfekte Mischung aus modernem Komfort und tropischem Ambiente bietet, mit ausgezeichnetem Preis-Leistungs-Verhältnis für Ihren Bali-Aufenthalt.",
      priceFrom: "Ab €350/Nacht",
      bookOnline: "Online Buchung",
      minStay: "Mindestaufenthalt von 3 Nächten",
      capacity: "Kapazität für 4 Personen (max. 6 mit Aufpreis)",
      cleaning: "Tägliche Reinigung inbegriffen",
      breakfast: "Frühstück und Koch verfügbar (gegen Aufpreis)",
      airport: "Flughafentransfer verfügbar (gegen Aufpreis)",
      notice: "* Preise können je nach Saison variieren. Check-in: 14:00 Uhr, Check-out: 11:00 Uhr.",
      contactButton: "Kontaktieren Sie uns"
    },
    // FAQ
    faq: {
      title: "Häufig gestellte Fragen",
      intro: "Finden Sie unten Antworten auf Ihre häufigsten Fragen",
      searchPlaceholder: "Frage suchen...",
      searchLabel: "Frage suchen",
      noResults: "Keine Ergebnisse für \"{query}\" gefunden",
      resetSearch: "Suche zurücksetzen",
      questions: [
        {
          question: "Wie sind die Check-in- und Check-out-Zeiten?",
          answer: "Der Check-in für unsere Villa beginnt um 14:00 Uhr. Wir laden Sie ein, Ihr Gepäck nach 11:00 Uhr abzugeben, während wir Ihre Villa vorbereiten. Bitte beachten Sie, dass für Check-ins nach 20:00 Uhr eine Gebühr von IDR 200.000 erhoben wird. Unser Check-out ist um 11:00 Uhr. Später Check-out ist vorbehaltlich der Verfügbarkeit und mit zusätzlichen Kosten verbunden: 50% der Tagesrate für Check-out zwischen 11:00 und 18:00 Uhr und 100% für Check-out nach 18:00 Uhr."
        },
        {
          question: "Ist das Frühstück in der Buchung inbegriffen?",
          answer: "Das Frühstück ist nicht im Zimmerpreis inbegriffen. Sie können es jedoch problemlos arrangieren, indem Sie sich an unser Reservierungs- oder Concierge-Team wenden. Wir bieten verschiedene Menüoptionen an, die von unserem Privatkoch direkt in Ihrer Villa zubereitet werden. Die Kosten betragen IDR 150.000 pro Person. Sie können auch ein schwebendes Frühstück für zusätzliche IDR 150.000 pro Tablett genießen."
        },
        {
          question: "Gibt es einen täglichen Reinigungsservice?",
          answer: "Natürlich! Die tägliche Reinigung wird von 9:00 bis 17:00 Uhr angeboten. Die Bettwäsche wird aus Nachhaltigkeitsgründen alle drei Tage gewechselt. Um Ihre Privatsphäre zu gewährleisten, koordinieren Sie bitte eine bequeme Zeit für die Reinigung mit Ihrem Gastgeber oder Villapersonal. Ihr Komfort hat für uns oberste Priorität."
        },
        {
          question: "Wie hoch ist die maximale Belegung für diese Villa?",
          answer: "Mit ihren zwei sehr geräumigen Schlafzimmern kann diese Villa bequem 4 Gäste beherbergen."
        },
        {
          question: "Was ist im Villapreis enthalten?",
          answer: "Unser Service umfasst einen exklusiven Villamanager, einen Gastgeber oder Personal, tägliche Reinigung und Garten- und Poolpflege. Zusätzliche Dienstleistungen wie Vorratshaltung der Villa, Flughafentransfers, Massageservices und andere Annehmlichkeiten sind gegen Aufpreis erhältlich."
        },
        {
          question: "Kann ich zusätzliche saubere Handtücher bekommen?",
          answer: "Auf jeden Fall! Wir stellen Ihnen gerne zusätzliche Handtücher zur Verfügung, vorbehaltlich der Verfügbarkeit. Zögern Sie nicht, Ihren Gastgeber oder Villapersonal zu kontaktieren, und wir werden unser Bestes tun, um Ihre Anfrage schnell zu erfüllen."
        },
        {
          question: "Wie kann ich Mahlzeiten während meines Aufenthalts organisieren?",
          answer: "Für Mittag- und Abendessen bieten wir verschiedene Dienstleistungen an, darunter festgelegte Menüs, Live-BBQ-Kochen, ethnische Küche und sogar gehobene Küche, die von einem Chefkoch zubereitet wird, alles in der Villa. Die Preise beginnen bei IDR 450.000 pro Person. Die Villa verfügt auch über eine voll ausgestattete Küche, so dass Sie Ihre Mahlzeiten selbst zubereiten können, wenn Sie dies bevorzugen."
        }
      ],
      contactText: "Haben Sie andere Fragen?",
      contactButton: "Kontaktieren Sie uns"
    },
    // Contact
    contact: {
      title: "Kontaktieren Sie uns",
      intro: "Haben Sie Fragen zu unserer Villa? Zögern Sie nicht, uns für weitere Informationen zu kontaktieren oder Ihren Aufenthalt zu buchen.",
      form: {
        title: "Nachricht senden",
        name: "Vollständiger Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        submitButton: "Senden",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Betreff Ihrer Nachricht",
        messagePlaceholder: "Ihre Nachricht",
        successMessage: "Ihr E-Mail-Client wird mit Ihrer vorbereiteten Nachricht geöffnet",
        errorMessage: "Bitte korrigieren Sie die Fehler im Formular.",
        nameError: "Name ist erforderlich",
        emailError: "Ungültige E-Mail",
        subjectError: "Betreff ist erforderlich",
        messageError: "Nachricht ist erforderlich"
      },
      info: {
        title: "Kontaktinformationen",
        email: {
          label: "E-Mail",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "Adresse",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "Google Maps"
      }
    },
    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten",
      privacyPolicy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookiePolicy: "Cookie-Richtlinie",
      followUs: "Folgen Sie uns",
      bookOn: "Buchen Sie auf",
      contactTitle: "Kontakt",
      legalTitle: "Rechtliches",
      designedWith: "Gestaltet mit",
      forLuxury: "für Luxuserlebnisse"
    },
    floatingButton: {
      bookNow: "Jetzt buchen",
      book: "Buchen"
    },
    // Testimonials
    testimonials: {
      title: "Bewertungen",
      intro: "Was unsere Gäste über ihre Erfahrung sagen.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ August 2025",
        text: "Wir hatten einen fantastischen Aufenthalt in dieser Villa! 🌴✨ Der Ort war genauso schön wie auf den Fotos – geräumig, sauber und sehr gut gepflegt. Der private Pool war perfekt zum Entspannen nach der Erkundung Balis. Die Lage war super praktisch, nah an Cafés, Restaurants und Stränden, aber ruhig genug, um Frieden und Privatsphäre zu genießen. Der Gastgeber war herzlich, aufmerksam und sorgte dafür, dass wir uns während unseres gesamten Aufenthalts wie zu Hause fühlten. Ich kann diese Villa jedem empfehlen, der ein komfortables und unvergessliches Erlebnis auf Bali sucht! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ Juni 2025",
        text: "War fantastisch"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ September 2025",
        text: "Alles war wunderbar, der Gastgeber war wirklich gut, danke ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ Juni 2025",
        text: "Der Ort war fantastisch, extrem sauber mit einem freundlichen Gastgeber. Es ist etwas weit vom Zentrum entfernt, aber die Villa ist fantastisch."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ August 2025",
        text: "Die Unterkunft ist komfortabel und angenehm"
      }
    },
    // Gallery
    gallery: {
      title: "Galerie",
      intro: "Entdecken Sie unsere Villa durch diese Bilder",
      categories: {
        all: "Alle",
        interior: "Innenbereich",
        exterior: "Außenbereich",
        pool: "Pool",
        bedrooms: "Schlafzimmer"
      },
      seeMore: "Mehr Fotos anzeigen",
      images: {
        1: "Entspannungsbereich",
        2: "Esszimmer",
        3: "Wohnzimmer mit Panoramablick",
        4: "Cocktailbar",
        5: "Haupteingang der Villa",
        6: "Badezimmer mit Dusche",
        7: "Badewanne",
        8: "Wohnzimmer mit Pool",
        9: "Wohnbereich mit Pool",
        10: "Wohnzimmer und Pool",
        11: "Villa mit Pool",
        12: "Hauptschlafzimmer",
        13: "Schlafzimmer",
        14: "Schlafzimmer",
        15: "Schlafzimmer",
        16: "Pool",
        17: "Badezimmer",
        18: "Küche",
        19: "Außenbereich",
        20: "Außenwohnzimmer",
        21: "Außenansicht",
        22: "Villa",
        30: "Außenwohnzimmer mit Panoramablick",
        31: "Architektonische Details",
        32: "Schattierter Außenesstisch",
        33: "Schattierte Terrasse",
        34: "Außenbereich mit Naturblick",
        35: "Nachtbeleuchtung des Pools",
        36: "Gestalteter tropischer Garten",
        37: "Blick auf Terrasse und Pool"
      }
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
      subtitle: "Роскошное проживание в Семиньяке",
      description: "Откройте для себя мирную гавань в сердце Бали",
      cta: "Забронировать",
      tour3d: "3D-тур"
    },
    // About
    about: {
      title: "О вилле",
      intro: "Добро пожаловать на виллу Orea – элегантную виллу с 2 спальнями, созданную как настоящий кокон спокойствия, идеально подходящую для пар и близких друзей в тихом районе рядом с оживленной жизнью Семиньяка. У входа вас ждет умная дверь: просто введите предоставленный код и нажмите на иконку звонка, чтобы открыть свое мирное убежище.",
      details: "Вилла включает 2 роскошные спальни с кроватями размера кинг-сайз, смарт-телевизорами с доступом к Netflix и YouTube Premium, а также собственными ванными комнатами. Полуоткрытое жилое пространство включает зону отдыха со смарт-телевизором, уютный бар и полностью оборудованную кухню. Снаружи вы можете наслаждаться частным бассейном и тропическим садом, находясь всего в нескольких минутах от оживленных кафе, пляжей и магазинов Семиньяка.",
      button3d: "3D-тур",
      images: {
        1: "Главный люкс с кроватью размера кинг-сайз",
        2: "Панорамный вид с террасы",
        3: "Зона отдыха у бассейна",
        4: "Массажная комната с видом на сад"
      }
    },
    // Amenities
    amenities: {
      title: "Удобства",
      intro: "Всё продумано, чтобы ваше пребывание на вилле Orea стало роскошным и незабываемым.",
      clickForDetails: "Нажмите для получения дополнительной информации",
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
        description: "Пышный тропический сад с качелями, создающий мирную и расслабляющую атмосферу."
      },
      beds: {
        name: "Кровати кинг-сайз",
        description: "Две просторные спальни с удобными кроватями размера кинг-сайз для обеспечения спокойных ночей во время вашего пребывания."
      },
      location: {
        name: "Идеальное расположение",
        description: "Расположена в очень тихом районе и всего в нескольких минутах от оживленных кафе, пляжей и магазинов Семиньяка, чтобы вы могли полностью насладиться своим пребыванием на Бали."
      }
    },
    // Pricing
    pricing: {
      title: "Цены и бронирование",
      intro: "Откройте для себя нашу роскошную виллу в Семиньяке, предлагающую идеальное сочетание современного комфорта и тропической атмосферы, с отличным соотношением цены и качества для вашего пребывания на Бали.",
      priceFrom: "От €350/ночь",
      bookOnline: "Online Booking",
      minStay: "Минимальное пребывание 3 ночи",
      capacity: "Вместимость 4 человека (макс. 6 с доплатой)",
      cleaning: "Ежедневная уборка включена",
      breakfast: "Завтрак и повар доступны (за дополнительную плату)",
      airport: "Трансфер из аэропорта доступен (за дополнительную плату)",
      notice: "* Цены могут меняться в зависимости от сезона. Заезд: 14:00, выезд: 11:00.",
      contactButton: "Связаться с нами"
    },
    // FAQ
    faq: {
      title: "Вопросы",
      intro: "Ответы на часто задаваемые вопросы ниже",
      searchPlaceholder: "Поиск вопроса...",
      searchLabel: "Поиск вопроса",
      noResults: "Ничего не найдено для \"{query}\"",
      resetSearch: "Сбросить поиск",
      questions: [
        {
          question: "Время заезда и выезда?",
          answer: "Заезд начинается в 14:00 для нашей виллы. Мы приветствуем вас, чтобы оставить багаж после 11:00, когда мы готовим вашу виллу. Пожалуйста, обратите внимание, что заезд после 20:00 взимается плата в размере IDR 200,000. Наш выезд в 11:00. Поздний выезд зависит от доступности и включает дополнительные расходы: 50% от дневной ставки для выезда между 11:00 и 18:00, и 100% для выезда после 18:00."
        },
        {
          question: "Включается ли завтрак в бронирование?",
          answer: "Завтрак не включен в стоимость номера. Однако вы можете легко организовать его, связавшись с нашей командой бронирования или консьержем. Мы предлагаем различные варианты меню, приготовленные нашим частным шеф-поваром, прямо в вашей вилле. Стоимость составляет IDR 150,000 на человека. Вы также можете насладиться плавающим завтраком, стоимостью IDR 150,000 за каждую тарелку."
        },
        {
          question: "Есть ли ежедневная уборка?",
          answer: "Конечно! Ежедневная уборка предоставляется с 9:00 до 17:00. Пододеяльные наволочки меняются каждые три дня для устойчивости. Чтобы обеспечить конфиденциальность, пожалуйста, согласуйте удобное время для уборки с вашим хозяином или персоналом виллы. Ваше комфорт наше первое дело."
        },
        {
          question: "Какая максимальная загрузка для этой виллы?",
          answer: "Благодаря двум очень просторным спальням, эта вилла комфортно вмещает 4 гостей."
        },
        {
          question: "Что включено в стоимость виллы?",
          answer: "Наша услуга включает отдельного менеджера виллы, хозяина или персонала, ежедневную уборку, а также обслуживание сада и бассейна. Дополнительные услуги, такие как предварительное снабжение виллы, трансферы из аэропорта, массажные услуги и другие удобства доступны по дополнительной плате."
        },
        {
          question: "Могу ли я получить дополнительные чистые полотенца?",
          answer: "Конечно! Мы будем рады предоставить вам дополнительные полотенца, при условии доступности. Пожалуйста, не стесняйтесь обращаться к вашему хозяину или персоналу виллы, и мы сделаем все возможное, чтобы быстро удовлетворить ваши требования."
        },
        {
          question: "Как я могу организовать питание во время моего пребывания?",
          answer: "На обед и ужин мы предлагаем разнообразные услуги, включая фиксированное меню, приготовление BBQ, этническую кухню, а также изысканные блюда, приготовленные шеф-поваром, всё готовится на вилле. Цены начинаются с IDR 450,000 на человека. Вилла также оснащена полностью оборудованной кухней, что позволяет вам приготовить еду самостоятельно, если хотите."
        }
      ],
      contactText: "У вас есть другие вопросы?",
      contactButton: "Связаться с нами"
    },
    // Contact
    contact: {
      title: "Связаться с нами",
      intro: "Есть ли у вас вопросы по поводу нашей виллы? Пожалуйста, не стесняйтесь обращаться к нам для получения дополнительной информации или бронирования вашего номера.",
      form: {
        title: "Отправить сообщение",
        name: "Полное имя",
        email: "Электронная почта",
        subject: "Тема",
        message: "Сообщение",
        submitButton: "Отправить",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Тема вашего сообщения",
        messagePlaceholder: "Ваше сообщение",
        successMessage: "Ваш почтовый клиент откроется с вашим подготовленным сообщением",
        errorMessage: "Пожалуйста, исправьте ошибки в форме.",
        nameError: "Необходимо предоставить имя",
        emailError: "Недействительный электронный адрес",
        subjectError: "Необходимо предоставить тему",
        messageError: "Необходимо предоставить сообщение"
      },
      info: {
        title: "Контактная информация",
        email: {
          label: "Электронная почта",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "Адрес",
          value: "Seminyak, Bali, Indonesia"
        },
        map: "Google Maps"
      }
    },
    // Footer
    footer: {
      rights: "Все права защищены",
      privacyPolicy: "Политика конфиденциальности",
      terms: "Условия использования",
      cookiePolicy: "Политика использования файлов cookie",
      followUs: "Следите за нами",
      bookOn: "Бронируйте на",
      contactTitle: "Контакты",
      legalTitle: "Юридическая информация",
      designedWith: "Разработано с",
      forLuxury: "для роскошных впечатлений"
    },
    floatingButton: {
      bookNow: "Забронировать",
      book: "Бронировать"
    },
    // Testimonials
    testimonials: {
      title: "Отзывы",
      intro: "Что наши гости говорят о своем опыте.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ Август 2025",
        text: "У нас было потрясающее пребывание на этой вилле! 🌴✨ Место было таким же красивым, как на фотографиях — просторное, чистое и очень ухоженное. Частный бассейн был идеален для отдыха после исследования Бали. Расположение было очень удобным, рядом с кафе, ресторанами и пляжами, но достаточно тихим, чтобы наслаждаться спокойствием и уединением. Хозяин был приветливым, отзывчивым и позаботился о том, чтобы мы чувствовали себя как дома на протяжении всего пребывания. Очень рекомендую эту виллу всем, кто ищет комфортное и незабываемое времяпрепровождение на Бали! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ Июнь 2025",
        text: "Было потрясающе"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ Сентябрь 2025",
        text: "Всё было замечательно, хозяин был действительно хорош, спасибо ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ Июнь 2025",
        text: "Место было потрясающим, чрезвычайно чистым с дружелюбным хозяином. Немного далеко от центра, но вилла потрясающая."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ Август 2025",
        text: "Жилье комфортное и приятное"
      }
    },
    // Gallery
    gallery: {
      title: "Галерея",
      intro: "Откройте для себя нашу виллу через эти изображения",
      categories: {
        all: "Все",
        interior: "Интерьер",
        exterior: "Экстерьер",
        pool: "Бассейн",
        bedrooms: "Спальни"
      },
      seeMore: "Смотреть больше фотографий",
      images: {
        1: "Зона отдыха",
        2: "Столовая",
        3: "Гостиная с панорамным видом",
        4: "Коктейль-бар",
        5: "Главный вход виллы",
        6: "Ванная комната с душем",
        7: "Ванна",
        8: "Гостиная с бассейном",
        9: "Жилая зона с бассейном",
        10: "Гостиная и бассейн",
        11: "Вилла с бассейном",
        12: "Главная спальня",
        13: "Спальня",
        14: "Спальня",
        15: "Спальня",
        16: "Бассейн",
        17: "Ванная комната",
        18: "Кухня",
        19: "Открытое пространство",
        20: "Открытая гостиная",
        21: "Внешний вид",
        22: "Вилла",
        27: "Главный вход виллы",
        28: "Рабочее пространство с видом",
        29: "Зона отдыха у бассейна",
        30: "Внешняя гостиная с панорамным видом",
        31: "Архитектурные детали",
        32: "Затененная обеденная зона на открытом воздухе",
        33: "Затененная терраса",
        34: "Внешнее пространство с видом на природу",
        35: "Ночное освещение бассейна",
        36: "Благоустроенный тропический сад",
        37: "Вид на террасу и бассейн"
      }
    }
  },
  
  // Arabe
  ar: {
    // Header
    nav: {
      about: "نبذة",
      amenities: "المرافق",
      gallery: "المعرض",
      faq: "الأسئلة الشائعة",
      testimonials: "التقييمات",
      pricing: "الأسعار",
      contact: "اتصل",
      tour3d: "جولة ثلاثية الأبعاد"
    },
    // Hero
    hero: {
      title: "Villa Orea",
      subtitle: "إقامة فاخرة في سيمينياك",
      description: "اكتشف ملاذًا هادئًا في قلب بالي",
      cta: "احجز الآن",
      tour3d: "جولة ثلاثية الأبعاد"
    },
    // FAQ
    faq: {
      title: "الأسئلة الشائعة",
      intro: "اعثر على إجابات لأسئلتك الأكثر شيوعًا أدناه",
      searchPlaceholder: "ابحث عن سؤال...",
      searchLabel: "ابحث عن سؤال",
      noResults: "لم يتم العثور على نتائج لـ \"{query}\"",
      resetSearch: "إعادة تعيين البحث",
      questions: [
        {
          question: "ما هي مواعيد تسجيل الوصول والمغادرة؟",
          answer: "يبدأ تسجيل الوصول في الساعة 14:00 لفيلتنا. يمكن إيداع الأمتعة من الساعة 11:00 بينما نقوم بإعداد الفيلا. يرجى ملاحظة أن رسوم تسجيل الوصول المتأخر قدرها 200,000 روبية إندونيسية تنطبق على الوصول بعد الساعة 20:00. وقت المغادرة هو 11:00. المغادرة المتأخرة تخضع للتوافر مع رسوم إضافية 50٪ من السعر اليومي للمغادرة بين 11:00 و 18:00، و 100٪ للمغادرة بعد 18:00."
        },
        {
          question: "هل تشمل الحجز وجبة الإفطار؟",
          answer: "وجبة الإفطار غير مشمولة في سعر الغرفة. ومع ذلك، يمكنك ترتيبها بسهولة عن طريق الاتصال بفريق الحجز أو الكونسيرج. نقدم مجموعة متنوعة من القوائم التي يعدها طاهينا الخاص مباشرة في فيلتك. التكلفة هي 150,000 روبية إندونيسية للشخص الواحد. يتوفر أيضًا إفطار عائم برسوم إضافية قدرها 150,000 روبية إندونيسية للصينية."
        },
        {
          question: "هل يوجد خدمة تنظيف يومية؟",
          answer: "بالتأكيد! يتم توفير خدمة التنظيف يوميًا من الساعة 9:00 إلى 17:00. يتم تغيير الملاءات كل ثلاثة أيام من أجل الاستدامة. لضمان خصوصيتك، يرجى الاتفاق مع مضيف الفيلا أو الموظفين على الوقت المناسب للتنظيف. راحتك هي أولويتنا."
        },
        {
          question: "ما هي السعة القصوى لهذه الفيلا؟",
          answer: "مع غرفتي نوم واسعتين للغاية، يمكن لهذه الفيلا استيعاب 4 ضيوف بشكل مريح."
        },
        {
          question: "ما الخدمات المشمولة في سعر الفيلا؟",
          answer: "تشمل خدمتنا مدير فيلا مخصص، ومضيف أو موظفي فيلا، والتنظيف اليومي، وصيانة الحديقة والمسبح. الخدمات الإضافية مثل توفير الفيلا مسبقًا، والنقل من المطار، والتدليك وغيرها من الخدمات متاحة مقابل رسوم إضافية."
        },
        {
          question: "هل يمكنني الحصول على مناشف نظيفة إضافية؟",
          answer: "بالتأكيد! يسعدنا توفير مناشف إضافية، حسب التوافر. لا تتردد في الاتصال بمضيف الفيلا أو الموظفين وسنبذل قصارى جهدنا لتلبية طلبك في أسرع وقت ممكن."
        },
        {
          question: "كيف يمكنني ترتيب الوجبات أثناء إقامتي؟",
          answer: "للغداء والعشاء، نقدم خدمات متنوعة، بما في ذلك قوائم ثابتة، وطهي الشواء المباشر، والمأكولات العرقية، وحتى الوجبات الفاخرة التي يعدها طاهٍ، كل ذلك في الفيلا. تبدأ الأسعار من 450,000 روبية إندونيسية للشخص الواحد. تحتوي الفيلا أيضًا على مطبخ مجهز بالكامل لإعداد وجباتك الخاصة إذا كنت ترغب."
        }
      ],
      contactText: "هل لديك أسئلة أخرى؟",
      contactButton: "اتصل بنا"
    },
    // About
    about: {
      title: "عن الفيلا",
      intro: "مرحبًا بك في Villa Orea، فيلا أنيقة بغرفتي نوم، مصممة كشرنقة حقيقية من الهدوء، مثالية للأزواج والأصدقاء المقربين في منطقة هادئة بالقرب من الحياة النابضة في سيمينياك. عند المدخل، ينتظرك باب ذكي: ما عليك سوى إدخال الرمز المقدم والضغط على أيقونة الجرس لفتح ملاذك الهادئ.",
      details: "تتميز الفيلا بغرفتي نوم فاخرتين مع أسرة كينج سايز، وتلفزيونات ذكية مع Netflix و YouTube Premium، وحمامات داخلية. تشمل مساحة المعيشة شبه المفتوحة صالة بتلفزيون ذكي، وزاوية بار مريحة، ومطبخ مجهز بالكامل. في الخارج، استمتع بالمسبح الخاص والحديقة الاستوائية، على بعد دقائق فقط من المقاهي والشواطئ والمحلات النابضة بالحياة في سيمينياك.",
      button3d: "جولة ثلاثية الأبعاد",
      images: {
        1: "الجناح الرئيسي مع سرير كينج سايز",
        2: "منظر بانورامي من الشرفة",
        3: "صالة خارجية مع مسبح",
        4: "غرفة تدليك مع إطلالة على الحديقة"
      }
    },
    // Amenities
    amenities: {
      title: "المرافق",
      intro: "تم التفكير في كل شيء لجعل إقامتك في Villa Orea تجربة فاخرة لا تُنسى.",
      clickForDetails: "انقر للمزيد من التفاصيل",
      wifi: {
        name: "واي فاي عالي السرعة",
        description: "اتصال إنترنت سريع متاح في جميع غرف الفيلا للبقاء على اتصال أثناء إقامتك."
      },
      ac: {
        name: "تكييف الهواء",
        description: "كل غرفة نوم مجهزة بنظام تكييف لراحتك حتى في أكثر الأيام حرارة."
      },
      pool: {
        name: "مسبح خاص",
        description: "مسبح متلألئ محاط بمنطقة تشمس مريحة، مثالي للانتعاش بعد يوم من الاستكشاف."
      },
      kitchen: {
        name: "مطبخ مجهز",
        description: "مطبخ مفتوح مجهز بالكامل مع آلة شاي ومحمصة وآلة قهوة لإعداد وجباتك بكل بساطة."
      },
      tv: {
        name: "تلفزيون ذكي",
        description: "كل غرفة نوم والصالة مجهزة بتلفزيونات ذكية مع الوصول إلى Netflix و YouTube Premium للحظات الاسترخاء."
      },
      cleaning: {
        name: "تنظيف يومي",
        description: "خدمة تنظيف يومية مشمولة من 9:00 إلى 17:00 لضمان بيئة نظيفة ومريحة دائمًا."
      },
      garden: {
        name: "حديقة استوائية",
        description: "حديقة استوائية خصبة مع أرجوحة، تخلق أجواء هادئة ومريحة."
      },
      beds: {
        name: "أسرة كينج سايز",
        description: "غرفتا نوم واسعتان مع أسرة كينج سايز مريحة لضمان ليالٍ مريحة أثناء إقامتك."
      },
      location: {
        name: "موقع مثالي",
        description: "تقع في منطقة هادئة جدًا وعلى بعد دقائق فقط من المقاهي والشواطئ والمحلات النابضة بالحياة في سيمينياك، للاستمتاع الكامل بإقامتك في بالي."
      }
    },
    // Pricing
    pricing: {
      title: "الأسعار والحجز",
      intro: "اكتشف فيلتنا الفاخرة في سيمينياك، التي تقدم مزيجًا مثاليًا من الراحة الحديثة والأجواء الاستوائية، مع قيمة ممتازة لإقامتك في بالي.",
      priceFrom: "ابتداءً من 350 يورو/الليلة",
      bookOnline: "احجز عبر الإنترنت",
      minStay: "إقامة لا تقل عن 3 ليالٍ",
      capacity: "سعة 4 أشخاص (بحد أقصى 6 برسوم إضافية)",
      cleaning: "التنظيف اليومي مشمول",
      breakfast: "الإفطار والطاهي متوفران (رسوم إضافية)",
      airport: "النقل من المطار متاح (رسوم إضافية)",
      notice: "* قد تختلف الأسعار حسب الموسم. تسجيل الوصول: 14:00، المغادرة: 11:00.",
      contactButton: "اتصل بنا"
    },
    // Contact
    contact: {
      title: "اتصل بنا",
      intro: "هل لديك أسئلة حول فيلتنا؟ لا تتردد في الاتصال بنا للحصول على مزيد من المعلومات أو لحجز إقامتك.",
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        submitButton: "إرسال",
        namePlaceholder: "اسمك",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "موضوع رسالتك",
        messagePlaceholder: "رسالتك",
        successMessage: "سيتم فتح عميل البريد الإلكتروني الخاص بك مع رسالتك المعدة",
        errorMessage: "يرجى تصحيح الأخطاء في النموذج.",
        nameError: "الاسم مطلوب",
        emailError: "بريد إلكتروني غير صالح",
        subjectError: "الموضوع مطلوب",
        messageError: "الرسالة مطلوبة"
      },
      info: {
        title: "معلومات الاتصال",
        email: {
          label: "البريد الإلكتروني",
          value: "villaoreabali@gmail.com"
        },
        whatsapp: {
          label: "واتساب",
          value: "+41 79 458 35 41"
        },
        address: {
          label: "العنوان",
          value: "سيمينياك، بالي، إندونيسيا"
        },
        map: "خرائط جوجل"
      }
    },
    // Footer
    footer: {
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      designedWith: "مصمم بـ",
      forLuxury: "لتجارب فاخرة",
      followUs: "تابعنا",
      bookOn: "احجز على",
      contactTitle: "اتصل",
      legalTitle: "قانوني",
      privacyPolicy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      cookiePolicy: "سياسة ملفات تعريف الارتباط"
    },
    floatingButton: {
      bookNow: "احجز الآن",
      book: "احجز"
    },
    // Testimonials
    testimonials: {
      title: "التقييمات",
      intro: "ما يقوله ضيوفنا عن تجربتهم.",
      customer1: {
        name: "Shawn",
        location: "★★★★★ أغسطس 2025",
        text: "لقد كانت إقامتنا رائعة في هذه الفيلا! 🌴✨ كان المكان جميلًا كما في الصور - واسع ونظيف ومُعتنى به جيدًا. كان المسبح الخاص مثاليًا للاسترخاء بعد استكشاف بالي. كان الموقع مريحًا للغاية، قريب من المقاهي والمطاعم والشواطئ، ولكنه هادئ بما يكفي للاستمتاع بالسلام والخصوصية. كان المضيف دافئًا ومستجيبًا وحرص على أن نشعر وكأننا في المنزل طوال إقامتنا. أوصي بشدة بهذه الفيلا لأي شخص يبحث عن تجربة مريحة لا تُنسى في بالي! 🌺🏝️"
      },
      customer2: {
        name: "Craig",
        location: "★★★★★ يونيو 2025",
        text: "كان رائعًا"
      },
      customer3: {
        name: "Abdullah",
        location: "★★★★★ سبتمبر 2025",
        text: "كل شيء كان رائعًا، المضيف كان جيدًا حقًا، شكرًا ❤️❤️❤️❤️"
      },
      customer4: {
        name: "Ashna",
        location: "★★★★★ يونيو 2025",
        text: "المكان كان رائعًا، نظيف جدًا مع مضيف ودود. إنه بعيد قليلاً عن المركز ولكن الفيلا رائعة."
      },
      customer5: {
        name: "Khalid",
        location: "★★★★★ أغسطس 2025",
        text: "السكن مريح ولطيف"
      }
    },
    // Gallery
    gallery: {
      title: "المعرض",
      intro: "اكتشف فيلتنا من خلال هذه الصور",
      categories: {
        all: "الكل",
        interior: "الداخل",
        exterior: "الخارج",
        pool: "المسبح",
        bedrooms: "غرف النوم"
      },
      seeMore: "شاهد المزيد من الصور",
      images: {
        1: "ركن الاسترخاء",
        2: "غرفة الطعام",
        3: "صالة مع إطلالة بانورامية",
        4: "بار الكوكتيل",
        5: "المدخل الرئيسي للفيلا",
        6: "حمام مع دش",
        7: "حوض استحمام",
        8: "صالة مع مسبح",
        9: "منطقة معيشة مع مسبح",
        10: "صالة ومسبح",
        11: "فيلا مع مسبح",
        12: "غرفة النوم الرئيسية",
        13: "غرفة النوم",
        14: "غرفة النوم",
        15: "غرفة النوم",
        16: "المسبح",
        17: "الحمام",
        18: "المطبخ",
        19: "مساحة خارجية",
        20: "صالة خارجية",
        21: "منظر خارجي",
        22: "الفيلا"
      }
    }
  }
};

export default translations; 