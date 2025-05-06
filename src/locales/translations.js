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
      subtitle: "Une retraite luxueuse à Seminyak",
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
          answer: "Le petit-déjeuner n'est pas inclus dans le prix de la chambre. Vous pouvez cependant l'organiser facilement en contactant notre équipe de réservation ou de conciergerie. Nous proposons une variété de menus préparés par notre chef privé, directement dans votre villa. Le coût est de 150 000 IDR par personne, avec une commande minimum de 5 personnes. Un petit-déjeuner flottant est également disponible pour un supplément de 150 000 IDR par plateau."
        },
        {
          question: "Y a-t-il un service de ménage quotidien ?",
          answer: "Absolument ! Le ménage est assuré tous les jours de 9h00 à 17h00. Les draps sont changés tous les trois jours par souci de durabilité. Pour garantir votre intimité, veuillez vous mettre d'accord avec l'hôte ou le personnel de votre villa sur l'heure à laquelle le ménage sera effectué. Votre confort est notre priorité."
        },
        {
          question: "Quelle est l'occupation maximale pour cette villa ?",
          answer: "Cette villa peut accueillir confortablement jusqu'à 4 personnes. Cependant, elle peut accueillir un maximum de 6 personnes, les 5ème et 6ème personnes étant considérées comme supplémentaires. Un supplément de 340 000 IDR/nuit/personne s'applique. Si vous avez besoin de lits supplémentaires, n'hésitez pas à nous le faire savoir."
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
          answer: "Pour le déjeuner et le dîner, nous proposons des services variés, notamment des menus fixes, un service de barbecue en direct, des cuisines ethniques et même des repas raffinés préparés par un chef étoilé Michelin, le tout dans la villa. Les prix commencent à 450 000 IDR par personne. La villa dispose également d'une cuisine entièrement équipée pour préparer vos propres repas si vous le souhaitez."
        }
      ],
      contactText: "Vous avez d'autres questions ?",
      contactButton: "Contactez-nous"
    },
    // À propos
    about: {
      title: "À Propos de la Villa",
      intro: "Bienvenue à Villa Orea, une élégante retraite de 2 chambres, conçue comme un véritable cocon de tranquillité, parfaite pour couples, petite famille et amis proches dans le quartier animé de Seminyak. À l'entrée, une porte intelligente vous accueille : il suffit d'entrer le code fourni et d'appuyer sur l'icône de la cloche pour déverrouiller votre havre de paix.",
      details: "La villa dispose de 2 chambres luxueuses avec lits king-size, Smart TV avec Netflix et YouTube Premium, et salles de bains attenantes. L'espace de vie semi-ouvert comprend un salon avec Smart TV, un coin bar, et une cuisine entièrement équipée. À l'extérieur, profitez de la piscine privée et du jardin tropical, à seulement quelques minutes des cafés, plages et boutiques de Seminyak.",
      button3d: "Immersion Totale"
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
          value: "contact@villaorea.com"
        },
        phone: {
          label: "Téléphone",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
      privacyPolicy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookiePolicy: "Politique des cookies",
      followUs: "Suivez-nous",
      bookOn: "Réservez sur",
      contactTitle: "Contact",
      legalTitle: "Légal",
      designedWith: "Conçu avec",
      forLuxury: "pour des expériences de luxe"
    },
    // Témoignages
    testimonials: {
      title: "Témoignages",
      intro: "Ce que nos clients disent de leur expérience.",
      customer1: {
        name: "Sophie et Pierre",
        location: "Paris, France",
        text: "Villa Orea a dépassé toutes nos attentes. Un havre de paix parfait après une journée d'exploration de Bali. Le personnel était incroyablement attentionné et la villa est magnifiquement décorée."
      },
      customer2: {
        name: "James et Emma",
        location: "Londres, Royaume-Uni",
        text: "Séjour incroyable à Villa Orea. L'emplacement est idéal, à quelques minutes des meilleures plages et restaurants de Seminyak. La piscine privée était notre refuge préféré après les journées chaudes."
      },
      customer3: {
        name: "Alessandro et Maria",
        location: "Rome, Italie",
        text: "Un petit paradis à Seminyak. La villa est aussi belle que sur les photos, très propre et l'accueil a été parfait. Un séjour mémorable que nous recommandons sans hésitation!"
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
      seeMore: "Voir plus de photos"
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
      subtitle: "A Luxurious Retreat in Seminyak",
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
          answer: "Breakfast is not included in the room rate. However, you can easily arrange it by contacting our reservation or concierge team. We offer various menu options prepared by our private chef, right in your villa. The cost is IDR 150,000 per person, with a minimum order for 5 guests. You can also enjoy a floating breakfast for an additional fee of IDR 150,000 per tray."
        },
        {
          question: "Is there a daily housekeeping service?",
          answer: "Absolutely! Daily housekeeping is provided from 9:00 AM to 5:00 PM. Linens are changed every third day for sustainability. To ensure privacy, please coordinate with your Villa Host or Staff for a convenient cleaning time. Your comfort is our priority."
        },
        {
          question: "What is the maximum occupancy for this villa?",
          answer: "This villa comfortably accommodates up to 4 guests. However, it can host a maximum of 6 guests, with the 5th and 6th guests considered as extra. An additional fee of IDR 340,000/night/person applies. If you need extra beds, please let us know."
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
          answer: "For lunch and dinner, we offer enhanced services, including set menus, live BBQ cooking, ethnic cuisines, and even fine dining prepared by a Michelin-star chef, all cooked in the villa. Prices start at IDR 450,000 per person. The villa also features a fully equipped kitchen, allowing you to prepare your own meals if you prefer."
        }
      ],
      contactText: "Do you have other questions?",
      contactButton: "Contact Us"
    },
    // About
    about: {
      title: "About the Villa",
      intro: "Welcome to Villa Orea, a stylish 2-bedroom retreat designed as a true cocoon of tranquility, perfect for couples, small families, or close friends in vibrant Seminyak. At the entrance of the villa, a smart door awaits, guests simply enter the provided code and press the bell icon to unlock your peaceful retreat.",
      details: "The villa features 2 luxurious bedrooms with king-size beds, Smart TVs with Netflix and YouTube Premium, and en-suite bathrooms. The semi-open living space includes a Smart TV lounge, a cozy bar corner, and a fully equipped kitchen. Outside, enjoy the private pool and tropical garden, just minutes from Seminyak's bustling cafés, beaches, and shops.",
      button3d: "Full Immersion"
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
      bookOnline: "Book Online",
      minStay: "Minimum stay of 3 nights",
      capacity: "Capacity of 4 people (max 6 with supplement)",
      cleaning: "Daily housekeeping included",
      breakfast: "Breakfast and chef available (extra charge)",
      airport: "Airport transfer available (extra charge)",
      notice: "* Rates may vary by season. Check-in: 2:00 PM, Check-out: 11:00 AM.",
      contactButton: "Contact Us"
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
          answer: "El desayuno no está incluido en la tarifa de la habitación. Sin embargo, puede organizarlo fácilmente contactando con nuestro equipo de reservas o conserjería. Ofrecemos varias opciones de menú, preparadas por nuestro chef privado directamente en su villa. El costo es de IDR 150,000 por persona, con un pedido mínimo para 5 huéspedes. También puede disfrutar de un desayuno flotante por un costo adicional de IDR 150,000 por bandeja."
        },
        {
          question: "¿Hay servicio de limpieza diario?",
          answer: "¡Por supuesto! Se proporciona limpieza diaria de 9:00 a 17:00. Las sábanas se cambian cada tres días por motivos de sostenibilidad. Para garantizar la privacidad, coordine un momento conveniente para la limpieza con su anfitrión o personal de la villa. Su comodidad es nuestra prioridad."
        },
        {
          question: "¿Cuál es la ocupación máxima para esta villa?",
          answer: "Esta villa puede acomodar cómodamente hasta 4 huéspedes. Sin embargo, puede acomodar hasta 6 huéspedes, considerándose el 5º y 6º huésped como adicionales. El cargo adicional es de IDR 340,000/noche/persona. Si necesita camas adicionales, háganoslo saber."
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
          answer: "Para almuerzos y cenas, ofrecemos servicios mejorados que incluyen menús fijos, memasak BBQ langsung, masakan nasional, dan bahkan memasak gourmet oleh chef bintang Michelin, semuanya disiapkan di villa. Harga mulai dari IDR 450.000 per orang. Villa juga dilengkapi dengan peralatan dapur lengkap, memungkinkan Anda menyiapkan makanan sendiri jika Anda lebih suka."
        }
      ],
      contactText: "¿Tiene otras preguntas?",
      contactButton: "Hubungi Kami"
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Teléfono",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
      rights: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Use",
      cookiePolicy: "Cookie Policy",
      followUs: "Follow us",
      bookOn: "Book on",
      contactTitle: "Contact",
      legalTitle: "Legal",
      designedWith: "Designed with",
      forLuxury: "for luxury experiences"
    },
    // Testimonials
    testimonials: {
      title: "Reviews",
      intro: "What our customers say about their experience.",
      customer1: {
        name: "Sophie and Pierre",
        location: "Paris, France",
        text: "Villa Orea exceeded all our expectations. A perfect haven of peace after a day of exploring Bali. The staff was incredibly attentive and the villa is beautifully decorated."
      },
      customer2: {
        name: "James and Emma",
        location: "London, United Kingdom",
        text: "Amazing stay at Villa Orea. The location is ideal, just minutes from the best beaches and restaurants in Seminyak. The private pool was our favorite refuge after hot days."
      },
      customer3: {
        name: "Alessandro and Maria",
        location: "Rome, Italy",
        text: "A little paradise in Seminyak. The villa is as beautiful as in the photos, very clean and the welcome was perfect. A memorable stay that we recommend without hesitation!"
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
      seeMore: "See more photos"
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
      subtitle: "苍古宁静的豪华度假屋",
      description: "在巴厘岛中心发现宁静的避风港",
      cta: "立即预订",
      tour3d: "完全沉浸"
    },
    // About
    about: {
      title: "关于别墅",
      intro: "欢迎来到 Villa Orea，这是一栋时尚的两卧室别墅，专为打造宁静舒适的私密空间而设计，非常适合情侣、小家庭或亲密朋友，坐落于活力四射的苍古（Seminyak）。进入别墅，您将通过一扇智能门，只需输入提供的密码并点击铃铛图标即可开启通往静谧假期的旅程。",
      details: "别墅内的两间卧室以简约舒适为设计理念，配备特大床、智能电视（支持Netflix与YouTube Premium）、空调及宽敞的储物空间。半开放式起居空间设有一个智能电视区、一个温馨吧台，以及一个设备齐全的厨房。在外面，您可以享受私人泳池和热带花园，距离苍古热闹的咖啡馆、海滩和商店仅几分钟路程。",
      button3d: "完全沉浸"
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
          answer: "房费中不包含早餐。但是，您可以通过联系我们的预订或礼宾团队轻松安排。我们提供由私人厨师在您的别墅中准备的各种菜单选项。费用为每人IDR 150,000，最少订购5位客人。您还可以享受漂浮早餐，每托盘额外费用为IDR 150,000。"
        },
        {
          question: "有每日客房清洁服务吗？",
          answer: "当然！每日客房清洁服务时间为上午9:00至下午5:00。为了可持续发展，床单每三天更换一次。为确保隐私，请与您的别墅主管或工作人员协调方便的清洁时间。您的舒适是我们的首要任务。"
        },
        {
          question: "这个别墅的最大入住人数是多少？",
          answer: "这个别墅可以舒适地容纳最多4位客人。但是，最多可以容纳6位客人，第5和第6位客人被视为额外客人。额外费用为每人每晚IDR 340,000。如果您需要额外的床位，请告知我们。"
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
          answer: "午餐和晚餐方面，我们提供增强服务，包括套餐，现场BBQ烹饪，民族美食，甚至由米其林星级厨师准备的精致餐点，全部在别墅内烹制。价格从每人IDR 450,000起。别墅还配备全套厨房设备，如果您喜欢，也可以自己准备餐点。"
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "电话",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
    // Testimonials
    testimonials: {
      title: "评价",
      intro: "客户对他们体验的评价。",
      customer1: {
        name: "Sophie 和 Pierre",
        location: "法国巴黎",
        text: "Villa Orea超出了我们的所有期望。在探索巴厘岛一天后，这是一个完美的宁静港湾。工作人员非常体贴周到，别墅布置得非常漂亮。"
      },
      customer2: {
        name: "James 和 Emma",
        location: "英国伦敦",
        text: "在Villa Orea度过了令人惊叹的时光。位置理想，距离苍古最好的海滩和餐厅仅几分钟路程。私人泳池是我们在炎热的日子后最喜欢的避风港。"
      },
      customer3: {
        name: "Alessandro 和 Maria",
        location: "意大利罗马",
        text: "苍古的一个小天堂。别墅和照片上一样漂亮，非常干净，接待也很完美。一次难忘的住宿体验，我们毫不犹豫地推荐！"
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
      seeMore: "查看更多照片"
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
          answer: "El desayuno no está incluido en la tarifa de la habitación. Sin embargo, puede organizarlo fácilmente contactando con nuestro equipo de reservas o conserjería. Ofrecemos varias opciones de menú, preparadas por nuestro chef privado directamente en su villa. El costo es de IDR 150,000 por persona, con un pedido mínimo para 5 huéspedes. También puede disfrutar de un desayuno flotante por un costo adicional de IDR 150,000 por bandeja."
        },
        {
          question: "¿Hay servicio de limpieza diario?",
          answer: "¡Por supuesto! Se proporciona limpieza diaria de 9:00 a 17:00. Las sábanas se cambian cada tres días por motivos de sostenibilidad. Para garantizar la privacidad, coordine un momento conveniente para la limpieza con su anfitrión o personal de la villa. Su comodidad es nuestra prioridad."
        },
        {
          question: "¿Cuál es la ocupación máxima para esta villa?",
          answer: "Esta villa puede acomodar cómodamente hasta 4 huéspedes. Sin embargo, puede acomodar hasta 6 huéspedes, considerándose el 5º y 6º huésped como adicionales. El cargo adicional es de IDR 340,000/noche/persona. Si necesita camas adicionales, háganoslo saber."
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
          answer: "Para almuerzos y cenas, ofrecemos servicios mejorados que incluyen menús fijos, cocina BBQ en vivo, cocina nacional, e incluso cocina gourmet preparada por un chef con estrella Michelin, todo preparado en la villa. Los precios comienzan desde IDR 450,000 por persona. La villa también está equipada con un conjunto completo de equipamiento de cocina, lo que le permite preparar comidas por su cuenta si así lo prefiere."
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Teléfono",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
    // Testimonials
    testimonials: {
      title: "Opiniones",
      intro: "Lo que nuestros clientes dicen sobre su experiencia.",
      customer1: {
        name: "Sophie y Pierre",
        location: "París, Francia",
        text: "Villa Orea superó todas nuestras expectativas. Un perfecto remanso de paz después de un día explorando Bali. El personal fue increíblemente atento y la villa está bellamente decorada."
      },
      customer2: {
        name: "James y Emma",
        location: "Londres, Reino Unido",
        text: "Estancia increíble en Villa Orea. La ubicación es ideal, a pocos minutos de las mejores playas y restaurantes de Seminyak. La piscina privada fue nuestro refugio favorito después de los días calurosos."
      },
      customer3: {
        name: "Alessandro y Maria",
        location: "Roma, Italia",
        text: "Un pequeño paraíso en Seminyak. La villa es tan hermosa como en las fotos, muy limpia y la recepción fue perfecta. ¡Una estancia memorable que recomendamos sin dudarlo!"
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
      seeMore: "Ver más fotos"
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
          answer: "Sarapan tidak termasuk dalam tarif kamar. Namun, Anda dapat dengan mudah mengaturnya dengan menghubungi tim reservasi atau concierge kami. Kami menawarkan berbagai pilihan menu yang disiapkan oleh chef pribadi kami langsung di villa Anda. Biayanya IDR 150.000 per orang, dengan pesanan minimum untuk 5 tamu. Anda juga dapat menikmati floating breakfast dengan biaya tambahan IDR 150.000 per nampan."
        },
        {
          question: "Apakah ada layanan pembersihan harian?",
          answer: "Tentu saja! Pembersihan harian disediakan dari pukul 9:00 hingga 17:00. Seprai diganti setiap tiga hari untuk keberkelanjutan. Untuk memastikan privasi, silakan koordinasikan waktu pembersihan yang nyaman dengan host atau staf villa Anda. Kenyamanan Anda adalah prioritas kami."
        },
        {
          question: "Berapa kapasitas maksimum untuk villa ini?",
          answer: "Villa ini dapat menampung hingga 4 tamu dengan nyaman. Namun, dapat menampung hingga 6 tamu, dengan tamu ke-5 dan ke-6 dianggap sebagai tamu tambahan. Biaya tambahan adalah IDR 340.000/malam/orang. Jika Anda membutuhkan tempat tidur tambahan, beri tahu kami."
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
          answer: "Untuk makan siang dan makan malam, kami menawarkan layanan yang ditingkatkan termasuk menu tetap, memasak BBQ langsung, masakan nasional, dan bahkan memasak gourmet oleh chef bintang Michelin, semuanya disiapkan di villa. Harga mulai dari IDR 450.000 per orang. Villa juga dilengkapi dengan peralatan dapur lengkap, memungkinkan Anda menyiapkan makanan sendiri jika Anda lebih suka."
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Telepon",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
    // Testimonials
    testimonials: {
      title: "Ulasan",
      intro: "Apa yang pelanggan kami katakan tentang pengalaman mereka.",
      customer1: {
        name: "Sophie dan Pierre",
        location: "Paris, Prancis",
        text: "Villa Orea melampaui semua harapan kami. Tempat perlindungan yang sempurna setelah seharian menjelajahi Bali. Stafnya sangat perhatian dan villanya didekorasi dengan indah."
      },
      customer2: {
        name: "James dan Emma",
        location: "London, Inggris",
        text: "Pengalaman menakjubkan di Villa Orea. Lokasinya ideal, hanya beberapa menit dari pantai dan restoran terbaik di Seminyak. Kolam renang pribadi adalah tempat perlindungan favorit kami setelah hari yang panas."
      },
      customer3: {
        name: "Alessandro dan Maria",
        location: "Roma, Italia",
        text: "Surga kecil di Seminyak. Villanya sama indahnya dengan yang ada di foto, sangat bersih dan penyambutannya sempurna. Pengalaman menginap yang berkesan yang kami rekomendasikan tanpa ragu!"
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
      seeMore: "Lihat lebih banyak foto"
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
          answer: "Das Frühstück ist nicht im Zimmerpreis inbegriffen. Sie können es jedoch problemlos arrangieren, indem Sie sich an unser Reservierungs- oder Concierge-Team wenden. Wir bieten verschiedene Menüoptionen an, die von unserem Privatkoch direkt in Ihrer Villa zubereitet werden. Die Kosten betragen IDR 150.000 pro Person, mit einer Mindestbestellung für 5 Gäste. Sie können auch ein schwebendes Frühstück für zusätzliche IDR 150.000 pro Tablett genießen."
        },
        {
          question: "Gibt es einen täglichen Reinigungsservice?",
          answer: "Natürlich! Die tägliche Reinigung wird von 9:00 bis 17:00 Uhr angeboten. Die Bettwäsche wird aus Nachhaltigkeitsgründen alle drei Tage gewechselt. Um Ihre Privatsphäre zu gewährleisten, koordinieren Sie bitte eine bequeme Zeit für die Reinigung mit Ihrem Gastgeber oder Villapersonal. Ihr Komfort hat für uns oberste Priorität."
        },
        {
          question: "Wie hoch ist die maximale Belegung für diese Villa?",
          answer: "Diese Villa kann bequem bis zu 4 Gäste beherbergen. Sie kann jedoch bis zu 6 Gäste aufnehmen, wobei der 5. und 6. Gast als zusätzliche Gäste gelten. Die zusätzliche Gebühr beträgt IDR 340.000/Nacht/Person. Wenn Sie zusätzliche Betten benötigen, teilen Sie uns dies bitte mit."
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
          answer: "Für Mittag- und Abendessen bieten wir erweiterte Dienstleistungen an, darunter festgelegte Menüs, Live-BBQ-Kochen, nationale Küche und sogar gehobene Küche, die von einem Michelin-Sternekoch zubereitet wird, alles in der Villa zubereitet. Die Preise beginnen bei IDR 450.000 pro Person. Die Villa ist auch mit einem kompletten Satz an Küchengeräten ausgestattet, so dass Sie Ihre Mahlzeiten selbst zubereiten können, wenn Sie dies bevorzugen."
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Telefon",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
    // Testimonials
    testimonials: {
      title: "Bewertungen",
      intro: "Was unsere Kunden über ihre Erfahrung sagen.",
      customer1: {
        name: "Sophie und Pierre",
        location: "Paris, Frankreich",
        text: "Villa Orea hat alle unsere Erwartungen übertroffen. Eine perfekte Oase der Ruhe nach einem Tag der Erkundung von Bali. Das Personal war unglaublich aufmerksam und die Villa ist wunderschön eingerichtet."
      },
      customer2: {
        name: "James und Emma",
        location: "London, Vereinigtes Königreich",
        text: "Unglaublicher Aufenthalt in der Villa Orea. Die Lage ist ideal, nur wenige Minuten von den besten Stränden und Restaurants in Seminyak entfernt. Der private Pool war unsere liebste Zuflucht nach den heißen Tagen."
      },
      customer3: {
        name: "Alessandro und Maria",
        location: "Rom, Italien",
        text: "Ein kleines Paradies in Seminyak. Die Villa ist genauso schön wie auf den Fotos, sehr sauber und der Empfang war perfekt. Ein unvergesslicher Aufenthalt, den wir ohne zu zögern empfehlen!"
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
      seeMore: "Mehr Fotos anzeigen"
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
          answer: "Завтрак не включен в стоимость номера. Однако вы можете легко организовать его, связавшись с нашей командой бронирования или консьержем. Мы предлагаем различные варианты меню, приготовленные нашим частным шеф-поваром, прямо в вашей вилле. Стоимость составляет IDR 150,000 на человека, с минимальным заказом для 5 гостей. Вы также можете насладиться плавающим завтраком, стоимостью IDR 150,000 за каждую тарелку."
        },
        {
          question: "Есть ли ежедневная уборка?",
          answer: "Конечно! Ежедневная уборка предоставляется с 9:00 до 17:00. Пододеяльные наволочки меняются каждые три дня для устойчивости. Чтобы обеспечить конфиденциальность, пожалуйста, согласуйте удобное время для уборки с вашим хозяином или персоналом виллы. Ваше комфорт наше первое дело."
        },
        {
          question: "Какая максимальная загрузка для этой виллы?",
          answer: "Эта вилла может комфортно вместить до 4 гостей. Однако она может принять до 6 гостей, при этом 5-й и 6-й гости считаются дополнительными. Дополнительная плата составляет IDR 340,000/ночь/человек. Если вам нужны дополнительные кровати, пожалуйста, сообщите нам."
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
          answer: "В обеденное и вечернее время мы предлагаем улучшенные услуги, включая наборы меню, приготовление на открытом огне BBQ, национальные блюда, а также высококлассное приготовление еды шеф-поваром Michelin, все приготовленное в вилле. Цены начинаются с IDR 450,000 на человека. Вилла также оснащена полным набором кухонного оборудования, что позволяет вам приготовить еду, если вам это нравится."
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
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Телефон",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
    // Testimonials
    testimonials: {
      title: "Отзывы",
      intro: "Что наши клиенты говорят о своем опыте.",
      customer1: {
        name: "Софи и Пьер",
        location: "Париж, Франция",
        text: "Вилла Orea превзошла все наши ожидания. Идеальное убежище после дня исследования Бали. Персонал был невероятно внимательным, а вилла красиво оформлена."
      },
      customer2: {
        name: "Джеймс и Эмма",
        location: "Лондон, Великобритания",
        text: "Потрясающее пребывание на вилле Orea. Расположение идеальное, всего в нескольких минутах от лучших пляжей и ресторанов Семиньяка. Частный бассейн был нашим любимым местом отдыха после жарких дней."
      },
      customer3: {
        name: "Алессандро и Мария",
        location: "Рим, Италия",
        text: "Маленький рай в Семиньяке. Вилла такая же красивая, как на фотографиях, очень чистая, и прием был идеальным. Незабываемое пребывание, которое мы рекомендуем без колебаний!"
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
      seeMore: "Смотреть больше фотографий"
    }
  }
};

export default translations; 