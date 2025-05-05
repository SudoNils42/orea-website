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
      contact: "Contact",
      legal: "Mentions légales",
      designedWith: "Conçu avec amour pour des expériences de luxe"
    },
    
    // Témoignages
    testimonials: {
      title: "Témoignages",
      intro: "Ce que nos clients disent de leur expérience.",
      prevLabel: "Témoignage précédent",
      nextLabel: "Témoignage suivant",
      goToLabel: "Aller au témoignage",
      items: [
        {
          id: 1,
          name: 'Sophie et Pierre',
          location: 'Paris, France',
          text: 'Une villa exceptionnelle ! Nous avons adoré notre séjour à Seminyak. Le personnel était attentionné et la piscine privée était parfaite pour se détendre.'
        },
        {
          id: 2,
          name: 'James et Emma',
          location: 'Londres, Royaume-Uni',
          text: 'Un véritable havre de paix au cœur de Bali. Villa Orea offre un mélange parfait de luxe et d\'authenticité. Nous reviendrons certainement !'
        },
        {
          id: 3,
          name: 'Alessandro et Maria',
          location: 'Rome, Italie',
          text: 'Séjour inoubliable dans un cadre idyllique. La villa est magnifiquement décorée et idéalement située. Une expérience balinaise authentique.'
        }
      ]
    },
    
    // Galerie
    gallery: {
      title: "Galerie",
      intro: "Découvrez notre villa de luxe à travers ces magnifiques images.",
      loadMore: "Voir plus de photos",
      prevImage: "Image précédente",
      nextImage: "Image suivante",
      closeModal: "Fermer la galerie",
      imageCounter: "image {current} sur {total}"
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
      intro: "Welcome to Villa Orea, a stylish 2-bedroom retreat designed as a true cocoon of tranquility, perfect for couples, small families, or close friends in vibrant Seminyak. At the villa's entrance, a smart door awaits, guests simply enter the code provided and press the bell icon to unlock the gateway to their peaceful retreat.",
      details: "The villa features 2 luxurious bedrooms with king-size beds, Smart TVs with Netflix and YouTube Premium, and ensuite bathrooms. The semi-open living space includes a Smart TV lounge, a cozy bar corner, and a fully equipped kitchen. Outside, enjoy the private pool and tropical garden, just minutes from Seminyak's bustling cafés, beaches, and shops.",
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
      intro: "Do you have questions about our villa? Don't hesitate to contact us for more information or to book your stay.",
      form: {
        title: "Send us a message",
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submitButton: "Send",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Subject of your message",
        messagePlaceholder: "Your message",
        successMessage: "Your email client will open with your message prepared",
        errorMessage: "Please correct the errors in the form.",
        nameError: "Name is required",
        emailError: "Invalid email",
        subjectError: "Subject is required",
        messageError: "Message is required"
      },
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "booking@villaorea.com"
        },
        phone: {
          label: "Phone",
          value: "+62 812 3456 7890"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+62 812 3456 7890"
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
      contact: "Contact",
      legal: "Legal",
      designedWith: "Designed with love for luxury experiences"
    },
    
    // Témoignages
    testimonials: {
      title: "Testimonials",
      intro: "What our guests say about their experience.",
      prevLabel: "Previous testimonial",
      nextLabel: "Next testimonial",
      goToLabel: "Go to testimonial",
      items: [
        {
          id: 1,
          name: 'Sophie and Pierre',
          location: 'Paris, France',
          text: 'An exceptional villa! We loved our stay in Seminyak. The staff was attentive and the private pool was perfect for relaxing.'
        },
        {
          id: 2,
          name: 'James and Emma',
          location: 'London, UK',
          text: 'A true haven of peace in the heart of Bali. Villa Orea offers a perfect blend of luxury and authenticity. We will definitely come back!'
        },
        {
          id: 3,
          name: 'Alessandro and Maria',
          location: 'Rome, Italy',
          text: 'Unforgettable stay in an idyllic setting. The villa is beautifully decorated and ideally located. An authentic Balinese experience.'
        }
      ]
    },
    
    // Gallery
    gallery: {
      title: "Gallery",
      intro: "Discover our luxury villa through these beautiful images.",
      loadMore: "View more photos",
      prevImage: "Previous image",
      nextImage: "Next image",
      closeModal: "Close gallery",
      imageCounter: "image {current} of {total}"
    }
  },
  
  // Chinois
  zh: {
    // Header
    // ... existing code ...
  },
  
  // ... other languages ...
};

export default translations; 