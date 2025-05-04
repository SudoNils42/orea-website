import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg';

// Importations des images principales pour éviter les problèmes de chargement
const mainImages = [
  image1,
  image2,
  image3,
  image4
];

// Chemins des images redimensionnées
const imagePaths = [
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06251.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06244.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06240.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06225.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06219.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06206.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06191.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06168.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06164.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06156.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06150.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06146.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06138.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06132.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06127.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06120.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06114.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06104.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06087.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06076.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06070.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06066.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06045.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06035.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06021.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06029.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05989.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05984.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05958.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05955.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05950.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05945.jpg',
  '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05932.jpg'
];

// Descriptions des images
const imageDescriptions = [
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
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleImages, setVisibleImages] = useState(8);

  // Créer les images avec leurs descriptions
  const images = imagePaths.map((path, index) => ({
    id: index + 1,
    src: index < 4 ? mainImages[index] : path, // Utiliser les images importées pour les 4 premières
    alt: imageDescriptions[index] || `Villa de luxe à Bali - Image ${index + 1}`
  }));

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 8, images.length));
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
            Découvrez notre villa de luxe à travers ces magnifiques images.
          </p>
        </div>

        {/* Grille d'images pour desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Images de la galerie */}
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={`image-${index}`}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(index)}
            >
              <img 
                src={index < 4 ? mainImages[index] : images[index].src} 
                alt={images[index].alt} 
                className="w-full h-full object-cover"
                loading={index > 2 ? "lazy" : "eager"}
                onError={(e) => {
                  // Si l'image ne se charge pas, on affiche une couleur de fond
                  e.target.parentElement.style.backgroundColor = '#eee';
                  e.target.style.display = 'none';
                  
                  // Ajouter un message d'erreur
                  const errorMessage = document.createElement('div');
                  errorMessage.className = 'absolute inset-0 flex items-center justify-center text-center p-4';
                  errorMessage.innerHTML = `<p>Image non disponible</p>`;
                  e.target.parentElement.appendChild(errorMessage);
                }}
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{images[index].alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grille d'images pour mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={`mobile-image-${index}`}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={index < 4 ? mainImages[index] : images[index].src} 
                alt={images[index].alt} 
                className="w-full h-full object-cover"
                loading={index > 1 ? "lazy" : "eager"}
                onError={(e) => {
                  e.target.parentElement.style.backgroundColor = '#eee';
                  e.target.style.display = 'none';
                  
                  const errorMessage = document.createElement('div');
                  errorMessage.className = 'absolute inset-0 flex items-center justify-center text-center p-4';
                  errorMessage.innerHTML = `<p>Image non disponible</p>`;
                  e.target.parentElement.appendChild(errorMessage);
                }}
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{images[index].alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {visibleImages < images.length && (
          <div className="text-center mt-8">
            <button 
              className="btn btn-outline"
              onClick={loadMoreImages}
            >
              Voir plus de photos
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
                    <img 
                      src={currentIndex < 4 ? mainImages[currentIndex] : images[currentIndex].src} 
                      alt={images[currentIndex].alt} 
                      className="max-w-full max-h-[80vh] object-contain" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-deep-black bg-opacity-60">
                      <p className="text-pure-white text-center">{images[currentIndex].alt}</p>
                    </div>
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