import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

// Import des images de la villa
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg';
import image5 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06251.jpg';
import image6 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06244.jpg';
import image7 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06240.jpg';
import image8 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06225.jpg';
import image9 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06219.jpg';
import image10 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06206.jpg';
import image11 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06191.jpg';
import image12 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06168.jpg';
import image13 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06164.jpg';
import image14 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06156.jpg';
import image15 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06150.jpg';
import image16 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06146.jpg';
import image17 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06138.jpg';
import image18 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06132.jpg';
import image19 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06127.jpg';
import image20 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06120.jpg';
import image21 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06114.jpg';
import image22 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06104.jpg';
import image23 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06087.jpg';
import image24 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06076.jpg';
import image25 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06070.jpg';
import image26 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06066.jpg';
import image27 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06045.jpg';
import image28 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06035.jpg';
import image29 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06029.jpg';
import image30 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06021.jpg';
import image31 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05989.jpg';
import image32 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05984.jpg';
import image33 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05958.jpg';
import image34 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05955.jpg';
import image35 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05950.jpg';
import image36 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05945.jpg';
import image37 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05932.jpg';
import image38 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/DSCF1793 (1).jpg';
import image39 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_3947-HDR.jpg';
import image40 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_3949-HDR-2.jpg';
import image41 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_3970.jpg';
import image42 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_4031-HDR.jpg';
import image43 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_4044-HDR.jpg';
import image44 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_4048-HDRE.jpg';
import image45 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_4050-HDR-Edit.jpg';
import image46 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_5858-HDR (1).jpg';
import image47 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_5866 (1).jpg';
import image48 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_5873-HDR (1).jpg';
import image49 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_5878-HDR (1).jpg';

// Toutes les images de la villa
const VILLA_IMAGES = [
  {
    id: 1,
    src: image1,
    alt: 'Vue extérieure de la villa'
  },
  {
    id: 2,
    src: image2,
    alt: 'Piscine à débordement'
  },
  {
    id: 3,
    src: image3,
    alt: 'Espace salon extérieur'
  },
  {
    id: 4,
    src: image4,
    alt: 'Terrasse avec vue'
  },
  {
    id: 5,
    src: image5,
    alt: 'Chambre principale'
  },
  {
    id: 6,
    src: image6,
    alt: 'Salle de bain luxueuse'
  },
  {
    id: 7,
    src: image7,
    alt: 'Coin détente'
  },
  {
    id: 8,
    src: image8,
    alt: 'Cuisine équipée'
  },
  {
    id: 9,
    src: image9,
    alt: 'Salle à manger'
  },
  {
    id: 10,
    src: image10,
    alt: 'Salon avec vue panoramique'
  },
  {
    id: 11,
    src: image11,
    alt: 'Chambre d\'amis'
  },
  {
    id: 12,
    src: image12,
    alt: 'Espace de travail'
  },
  {
    id: 13,
    src: image13,
    alt: 'Entrée de la villa'
  },
  {
    id: 14,
    src: image14,
    alt: 'Jardin tropical'
  },
  {
    id: 15,
    src: image15,
    alt: 'Coin repas extérieur'
  },
  {
    id: 16,
    src: image16,
    alt: 'Vue sur la piscine'
  },
  {
    id: 17,
    src: image17,
    alt: 'Salle de bain en pierre'
  },
  {
    id: 18,
    src: image18,
    alt: 'Coin lecture'
  },
  {
    id: 19,
    src: image19,
    alt: 'Vue aérienne'
  },
  {
    id: 20,
    src: image20,
    alt: 'Accès à la plage'
  },
  {
    id: 21,
    src: image21,
    alt: 'Espace yoga'
  },
  {
    id: 22,
    src: image22,
    alt: 'Bar à cocktails'
  },
  {
    id: 23,
    src: image23,
    alt: 'Allée d\'entrée'
  },
  {
    id: 24,
    src: image24,
    alt: 'Douche extérieure'
  },
  {
    id: 25,
    src: image25,
    alt: 'Coin feu extérieur'
  },
  {
    id: 26,
    src: image26,
    alt: 'Vue sur la piscine depuis la terrasse'
  },
  {
    id: 27,
    src: image27,
    alt: 'Entrée principale de la villa'
  },
  {
    id: 28,
    src: image28,
    alt: 'Espace de travail avec vue'
  },
  {
    id: 29,
    src: image29,
    alt: 'Espace détente au bord de la piscine'
  },
  {
    id: 30,
    src: image30,
    alt: 'Salon extérieur avec vue panoramique'
  },
  {
    id: 31,
    src: image31,
    alt: 'Détails architecturaux'
  },
  {
    id: 32,
    src: image32,
    alt: 'Coin repas extérieur ombragé'
  },
  {
    id: 33,
    src: image33,
    alt: 'Terrasse ombragée'
  },
  {
    id: 34,
    src: image34,
    alt: 'Espace extérieur avec vue sur la nature'
  },
  {
    id: 35,
    src: image35,
    alt: 'Éclairage nocturne de la piscine'
  },
  {
    id: 36,
    src: image36,
    alt: 'Jardin tropical aménagé'
  },
  {
    id: 37,
    src: image37,
    alt: 'Vue sur la terrasse et la piscine'
  },
  {
    id: 38,
    src: image38,
    alt: 'Salle de bain'
  },
  {
    id: 39,
    src: image39,
    alt: 'Salle de bain avec douche'
  },
  {
    id: 40,
    src: image40,
    alt: 'Baignoire'
  },
  {
    id: 41,
    src: image41,
    alt: 'Baignoire spa'
  },
  {
    id: 42,
    src: image42,
    alt: 'Salon avec piscine'
  },
  {
    id: 43,
    src: image43,
    alt: 'Espace de vie avec piscine'
  },
  {
    id: 44,
    src: image44,
    alt: 'Salon et piscine'
  },
  {
    id: 45,
    src: image45,
    alt: 'Villa avec piscine'
  },
  {
    id: 46,
    src: image46,
    alt: 'Chambre principale'
  },
  {
    id: 47,
    src: image47,
    alt: 'Chambre'
  },
  {
    id: 48,
    src: image48,
    alt: 'Chambre'
  },
  {
    id: 49,
    src: image49,
    alt: 'Chambre'
  }
];

const Gallery = () => {
  const [images] = useState(VILLA_IMAGES);
  const [visibleImages, setVisibleImages] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const galleryRef = useRef(null);
  const preloadCacheRef = useRef(new Map());
  const { currentLanguage } = useLanguage();
  
  // Récupération des traductions en fonction de la langue actuelle
  const t = translations[currentLanguage].gallery || translations.fr.gallery;

  // Créer une nouvelle liste d'images avec les descriptions traduites
  const translatedImages = useMemo(() => {
    return images.map((image, index) => ({
      ...image,
      alt: t.imageDescriptions?.[index] || image.alt
    }));
  }, [images, t]);

  // Gestion de l'affichage et du redimensionnement
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Ne charger plus d'images que si on est proche du bas de la section visible
      if (galleryRef.current) {
        const galleryTop = galleryRef.current.offsetTop;
        const galleryHeight = galleryRef.current.offsetHeight;
        
        if (scrollTop + windowHeight > galleryTop + galleryHeight - 200) {
          if (visibleImages < images.length) {
            setVisibleImages(prev => Math.min(prev + 4, images.length));
          }
        }
      }
    };

    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleImages, images.length]);

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 8, images.length));
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setDirection(0);
    document.body.style.overflow = 'hidden';
    // Précharger agressivement les images adjacentes
    preloadAdjacentImages(index, 5);
  };

  // Fonction optimisée pour précharger les images adjacentes avec cache
  const preloadAdjacentImages = (index, range = 3) => {
    const imagesToPreload = [];
    
    // Calculer la plage d'images à précharger
    for (let i = Math.max(0, index - range); i <= Math.min(images.length - 1, index + range); i++) {
      if (!preloadedImages.has(i) && !preloadCacheRef.current.has(i)) {
        imagesToPreload.push(i);
      }
    }

    // Précharger les images en parallèle
    imagesToPreload.forEach(i => {
      if (!preloadCacheRef.current.has(i)) {
        const img = new Image();
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, i]));
          preloadCacheRef.current.set(i, true);
        };
        img.src = images[i].src;
        preloadCacheRef.current.set(i, 'loading');
      }
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = () => {
    setDirection(-1);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // Précharger immédiatement les images adjacentes
    preloadAdjacentImages(newIndex, 3);
  };

  const handleNext = () => {
    setDirection(1);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // Précharger immédiatement les images adjacentes
    preloadAdjacentImages(newIndex, 3);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe gauche
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe droite
      handlePrev();
    }
  };

  // Fonction pour faire défiler le carousel mobile
  const scrollMobileGallery = (direction) => {
    const container = document.getElementById('mobile-gallery-container');
    if (container) {
      // Récupérer la largeur d'une image avec son espace
      const items = container.querySelectorAll('[class*="snap-center"]');
      if (items.length === 0) return;
      
      // Calculer le décalage exact pour une seule image
      const itemWidth = items[0].offsetWidth + 12; // 12px est l'espacement entre les images (space-x-3)
      
      // Calculer le nouvel index en fonction de la direction
      const currentScrollPosition = container.scrollLeft;
      const currentIndex = Math.round(currentScrollPosition / itemWidth);
      const newIndex = Math.max(0, Math.min(images.length - 1, currentIndex + direction));
      
      // Vérifier si nous sommes déjà à la limite et empêcher le défilement au-delà
      if ((direction > 0 && newIndex >= images.length - 1) || (direction < 0 && newIndex <= 0)) {
        // Assurer que nous sommes exactement à la bonne position limite pour éviter les décalages
        container.scrollTo({ 
          left: direction > 0 ? (images.length - 1) * itemWidth : 0, 
          behavior: 'smooth' 
        });
      } else {
        // Faire défiler vers la position exacte de la nouvelle image
        container.scrollTo({ 
          left: newIndex * itemWidth, 
          behavior: 'smooth' 
        });
      }
      
      // Mettre à jour l'index actif
      setActiveSlideIndex(newIndex);
    }
  };

  // Gestion des touches du clavier dans la modale
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Animations optimisées pour une transition plus rapide
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // Timing de transition ultra-rapide
  const slideTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.15, // Réduit de 0.3 à 0.15 secondes
  };

  // Précharger toutes les images lors de l'ouverture de la modale
  useEffect(() => {
    if (isModalOpen) {
      // Précharger une large gamme d'images pour une navigation fluide
      preloadAdjacentImages(currentIndex, 8);
    }
  }, [isModalOpen, currentIndex, images]);

  // Ajout d'un contrôle pour empêcher le défilement excessif
  useEffect(() => {
    const container = document.getElementById('mobile-gallery-container');
    if (!container) return;
    
    // Fonction pour corriger le défilement lorsqu'on atteint les limites
    const handleScrollEnd = () => {
      // Obtenir la largeur réelle du contenu scrollable
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      // Petite temporisation pour laisser le scroll se stabiliser
      setTimeout(() => {
        // Si on a dépassé la limite droite, corriger la position
        if (container.scrollLeft > maxScrollLeft) {
          container.scrollTo({
            left: maxScrollLeft,
            behavior: 'auto'
          });
        }
        
        // Si on a dépassé la limite gauche, corriger la position
        if (container.scrollLeft < 0) {
          container.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        }
      }, 150);
    };
    
    // Empêcher le défilement de la page lorsqu'on atteint la fin du carousel
    const preventOverscroll = (e) => {
      // Détecter si on est à la limite droite ou gauche
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // Empêcher le défilement au-delà des limites
      if ((scrollLeft <= 0 && e.deltaX < 0) || 
          (scrollLeft >= maxScrollLeft && e.deltaX > 0)) {
        e.preventDefault();
        return false;
      }
    };

    // Ajouter les écouteurs d'événements
    container.addEventListener('scrollend', handleScrollEnd);
    container.addEventListener('wheel', preventOverscroll, { passive: false });

    return () => {
      container.removeEventListener('scrollend', handleScrollEnd);
      container.removeEventListener('wheel', preventOverscroll);
    };
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4">{t.title}</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto mb-6">
            {t.intro}
          </p>
        </div>

        {/* Grille d'images pour desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {translatedImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={`image-${image.id}`}
              className="relative h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={(index % 8) * 100}
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading={index > 3 ? "lazy" : "eager"}
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" - seulement pour desktop */}
        {visibleImages < images.length && (
          <div className="hidden md:block text-center mt-8">
            <button 
              className="btn btn-outline flex items-center mx-auto gap-2"
              onClick={loadMoreImages}
            >
              <span>{t.seeMore || (currentLanguage === 'fr' ? 'Voir plus de photos' : 'See more photos')}</span>
              <span className="bg-pale-gold/10 text-pale-gold px-2 py-0.5 rounded-full text-sm">
                {visibleImages}/{images.length}
              </span>
            </button>
          </div>
        )}
      </div>
      {/* Slider amélioré pour mobile */}
      <div className="md:hidden mb-3" ref={galleryRef}>
        <div className="relative">
          {/* Contrôles de navigation */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald/80 text-pure-white hover:bg-emerald rounded-full p-2 shadow-md"
            onClick={() => scrollMobileGallery(-1)}
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald/80 text-pure-white hover:bg-emerald rounded-full p-2 shadow-md"
            onClick={() => scrollMobileGallery(1)}
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Container du slider */}
          <div 
            id="mobile-gallery-container"
            className="overflow-x-auto flex space-x-3 pb-6 pt-1 px-2 snap-x snap-mandatory scrollbar-visible"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: '#04593F rgba(230, 198, 122, 0.1)',
              overscrollBehavior: 'contain', // Empêcher le défilement excessif
              WebkitOverflowScrolling: 'touch' // Améliorer le défilement sur iOS
            }}
          >
            {translatedImages.map((image, index) => (
              <div
                key={`mobile-image-${image.id}`}
                className="snap-center shrink-0 w-[80vw] max-w-[280px] h-[260px] rounded-xl overflow-hidden shadow-lg"
                onClick={() => openModal(index)}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-pure-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal pour agrandir les images */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black bg-opacity-90">
            <div className="absolute inset-0" onClick={closeModal}></div>
            
            <button 
              className="absolute top-4 right-4 z-10 text-pure-white hover:text-pale-gold transition-colors"
              onClick={closeModal}
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="bg-pure-white/10 hover:bg-pure-white/20 p-2 rounded-full text-pure-white transition-colors"
                onClick={handlePrev}
                aria-label="Image précédente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="bg-pure-white/10 hover:bg-pure-white/20 p-2 rounded-full text-pure-white transition-colors"
                onClick={handleNext}
                aria-label="Image suivante"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div 
              className={`relative ${isSmallScreen ? 'w-[95%] h-[80%]' : 'w-full h-full max-w-5xl max-h-[85vh]'} flex items-center justify-center p-2 md:p-4`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className="w-full h-full flex flex-col items-center justify-center absolute"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-1 md:p-0">
                    <div className={`${isSmallScreen ? 'h-[60vh]' : 'h-[70vh]'} w-full flex items-center justify-center`}>
                      <img 
                        src={translatedImages[currentIndex].src} 
                        alt={translatedImages[currentIndex].alt} 
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                        style={{ 
                          objectFit: 'contain',
                          transition: 'none'
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full p-2 md:p-3 mt-2 bg-deep-black bg-opacity-60 rounded-lg">
                    <p className="text-pure-white text-center text-sm md:text-base">{translatedImages[currentIndex].alt}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Préchargement agressif des images adjacentes */}
              <div className="hidden">
                {/* Précharger 3 images avant et après l'image actuelle */}
                {Array.from({ length: 7 }, (_, i) => {
                  const imageIndex = currentIndex - 3 + i;
                  if (imageIndex >= 0 && imageIndex < images.length && imageIndex !== currentIndex) {
                    return (
                      <img 
                        key={`preload-${imageIndex}`}
                        src={translatedImages[imageIndex].src} 
                        alt="Préchargement" 
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 