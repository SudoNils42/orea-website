import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

// Descriptions des images pour la galerie
const imageDescriptions = {
  fr: [
    'Vue extérieure de la villa',
    'Piscine à débordement',
    'Espace salon extérieur',
    'Terrasse avec vue',
    'Chambre principale',
    'Salle de bain luxueuse',
    'Coin détente',
    'Cuisine équipée',
    'Salle à manger',
    'Salon avec vue panoramique',
    'Chambre d\'amis',
    'Espace de travail',
    'Entrée de la villa',
    'Jardin tropical',
    'Coin repas extérieur',
    'Vue sur la piscine',
    'Salle de bain en pierre',
    'Coin lecture',
    'Vue aérienne',
    'Accès à la plage',
    'Coucher de soleil depuis la terrasse',
    'Espace détente au bord de la piscine',
    'Chambre avec balcon',
    'Détail architectural',
    'Coin barbecue',
    'Douche extérieure',
    'Allée d\'entrée',
    'Bar à cocktails',
    'Espace yoga',
    'Vue sur la jungle',
    'Salle de massage',
    'Détails et décoration',
    'Lit king-size',
    'Coin feu',
    'Intérieur de la villa',
    'Mobilier extérieur',
    'Piscine de nuit'
  ],
  en: [
    'Villa exterior view',
    'Infinity pool',
    'Outdoor living area',
    'Terrace with view',
    'Master bedroom',
    'Luxurious bathroom',
    'Relaxation area',
    'Equipped kitchen',
    'Dining room',
    'Living room with panoramic view',
    'Guest bedroom',
    'Work space',
    'Villa entrance',
    'Tropical garden',
    'Outdoor dining area',
    'Pool view',
    'Stone bathroom',
    'Reading corner',
    'Aerial view',
    'Beach access',
    'Sunset from the terrace',
    'Relaxation area by the pool',
    'Bedroom with balcony',
    'Architectural detail',
    'Barbecue area',
    'Outdoor shower',
    'Entrance pathway',
    'Cocktail bar',
    'Yoga space',
    'Jungle view',
    'Massage room',
    'Details and decoration',
    'King-size bed',
    'Fire pit',
    'Villa interior',
    'Outdoor furniture',
    'Pool at night'
  ]
};

// Importer les images que nous savons exister
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg';
import image5 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06251.jpg';
import image6 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06244.jpg';
import image7 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06240.jpg';
import image8 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06225.jpg';

// Créer une liste des images importées pour une utilisation ultérieure
const importedImages = [
  image1, image2, image3, image4, image5, image6, image7, image8
];

const Gallery = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const descList = imageDescriptions[currentLanguage] || imageDescriptions.fr;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);
  const [images, setImages] = useState([]);

  // Créer la liste des images avec leurs descriptions
  useEffect(() => {
    // Solution simplifiée pour éviter les problèmes de chargement
    const galleryImages = [
      { id: 1, src: image1, alt: descList[0] || 'Villa Orea' },
      { id: 2, src: image2, alt: descList[1] || 'Villa Orea' },
      { id: 3, src: image3, alt: descList[2] || 'Villa Orea' },
      { id: 4, src: image4, alt: descList[3] || 'Villa Orea' },
      { id: 5, src: image5, alt: descList[4] || 'Villa Orea' },
      { id: 6, src: image6, alt: descList[5] || 'Villa Orea' },
      { id: 7, src: image7, alt: descList[6] || 'Villa Orea' },
      { id: 8, src: image8, alt: descList[7] || 'Villa Orea' },
    ];
    
    setImages(galleryImages);
  }, [currentLanguage, descList]);

  const loadMoreImages = () => {
    setVisibleImages(Math.min(visibleImages + 4, images.length));
  };

  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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

  return (
    <section id="gallery" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4">Galerie</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto mb-6">
            {currentLanguage === 'fr' 
              ? 'Découvrez notre villa de luxe à travers ces magnifiques images.'
              : 'Discover our luxury villa through these beautiful images.'}
          </p>
        </div>

        {/* Grille d'images pour desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={`image-${image.id}`}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 100}
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

        {/* Grille d'images pour mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={`mobile-image-${image.id}`}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading={index > 1 ? "lazy" : "eager"}
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {visibleImages < images.length && (
          <div className="text-center mt-8">
            <button 
              className="btn btn-outline flex items-center mx-auto gap-2"
              onClick={loadMoreImages}
            >
              <span>{currentLanguage === 'fr' ? 'Voir plus de photos' : 'View more photos'}</span>
              <span className="bg-pale-gold/10 text-pale-gold px-2 py-0.5 rounded-full text-sm">
                {visibleImages}/{images.length}
              </span>
            </button>
          </div>
        )}

        {/* Modal pour agrandir les images */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black bg-opacity-90">
              <div className="absolute inset-0" onClick={closeModal}></div>
              
              <button 
                className="absolute top-4 right-4 z-10 text-pure-white hover:text-pale-gold transition-colors"
                onClick={closeModal}
                aria-label={currentLanguage === 'fr' ? 'Fermer' : 'Close'}
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
                  aria-label={currentLanguage === 'fr' ? 'Image précédente' : 'Previous image'}
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
                  aria-label={currentLanguage === 'fr' ? 'Image suivante' : 'Next image'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div 
                className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden"
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
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {images[currentIndex] && (
                      <>
                        <img 
                          src={images[currentIndex].src} 
                          alt={images[currentIndex].alt} 
                          className="max-w-full max-h-[80vh] object-contain" 
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-deep-black bg-opacity-60">
                          <p className="text-pure-white text-center">{images[currentIndex].alt}</p>
                          <p className="text-pure-white/70 text-xs text-center mt-1">
                            {currentLanguage === 'fr' ? 'Image' : 'Image'} {currentIndex + 1}/{images.length}
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 