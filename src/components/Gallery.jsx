import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import placeholder1 from '../assets/placeholder1.jpg';
import placeholder2 from '../assets/placeholder2.jpg';
import placeholder3 from '../assets/placeholder3.jpg';
import placeholder4 from '../assets/placeholder4.jpg';

// Chemins des images redimensionnées
const imagePaths = [
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06251.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06244.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06240.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06225.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06219.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06206.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06191.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06168.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06164.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06156.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06150.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06146.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06138.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06132.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06127.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06120.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06114.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06104.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06087.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06076.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06070.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06066.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06045.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06035.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06021.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06029.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05989.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05984.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05958.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05955.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05950.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05945.jpg',
  '/src/assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC05932.jpg'
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

// Images de remplacement pour les emplacements vides (placeholders)
const placeholderImages = [
  {
    id: 'placeholder1',
    src: placeholder1,
    alt: 'Suite principale avec lit king-size'
  },
  {
    id: 'placeholder2',
    src: placeholder2,
    alt: 'Vue panoramique depuis la terrasse'
  },
  {
    id: 'placeholder3',
    src: placeholder3,
    alt: 'Salon extérieur avec piscine'
  },
  {
    id: 'placeholder4',
    src: placeholder4,
    alt: 'Salle de massage avec vue sur jardin'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);

  // Créer les images avec leurs descriptions
  const images = [...imagePaths.map((path, index) => ({
    id: index + 1,
    src: path,
    alt: imageDescriptions[index] || `Villa de luxe à Bali - Image ${index + 1}`
  })), ...placeholderImages];

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 4, images.length));
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
          {/* Images régulières de la galerie */}
          {imagePaths.slice(0, visibleImages).map((path, index) => (
            <div
              key={`image-${index}`}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(index)}
            >
              <img 
                src={path} 
                alt={imageDescriptions[index] || `Villa de luxe à Bali - Image ${index + 1}`} 
                className="w-full h-full object-cover"
                loading={index > 2 ? "lazy" : "eager"}
                onError={(e) => {
                  // Si l'image ne se charge pas, on affiche une couleur de fond
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300 flex items-end justify-start p-4">
                <p className="text-pure-white font-inter font-medium text-sm md:text-base">
                  {imageDescriptions[index] || `Villa de luxe à Bali - Image ${index + 1}`}
                </p>
              </div>
              <div className="absolute inset-0 bg-deep-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pure-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
          
          {/* Images placeholder toujours affichées, indépendamment de visibleImages */}
          {placeholderImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={(index) * 100}
              onClick={() => openModal(imagePaths.length + index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300 flex items-end justify-start p-4">
                <p className="text-pure-white font-inter font-medium text-sm md:text-base">
                  {image.alt}
                </p>
              </div>
              <div className="absolute inset-0 bg-deep-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pure-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {visibleImages < images.length && (
          <div className="mt-8 flex justify-center" data-aos="fade-up">
            <button
              onClick={loadMoreImages}
              className="btn btn-outline flex items-center"
              aria-label="Voir plus d'images"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
              Voir plus
            </button>
          </div>
        )}

        {/* Carrousel pour mobile */}
        <div
          className="md:hidden relative h-80 rounded-lg overflow-hidden"
          data-aos="fade-up"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                {currentIndex < imagePaths.length ? (
                  <img 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                      e.currentTarget.parentElement.classList.add('bg-gradient-to-br', 'from-deep-black', 'to-gray-800');
                      // Afficher une icône si l'image ne se charge pas
                      const iconElement = document.createElement('div');
                      iconElement.className = 'absolute inset-0 flex items-center justify-center';
                      iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-pale-gold opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>`;
                      e.currentTarget.parentElement.appendChild(iconElement);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-deep-black to-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pale-gold opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-deep-black bg-opacity-30 flex items-end justify-start p-4">
                  <p className="text-pure-white font-inter font-medium">
                    {images[currentIndex].alt}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contrôles du carrousel */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pure-white dark:bg-deep-black bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 text-deep-black dark:text-pure-white hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all duration-300"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pure-white dark:bg-deep-black bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 text-deep-black dark:text-pure-white hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all duration-300"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 overflow-auto px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  index === currentIndex
                    ? 'bg-emerald dark:bg-pale-gold'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modale de visualisation plein écran */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black bg-opacity-95 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative w-full h-full md:w-4/5 md:h-4/5 max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-deep-black bg-opacity-50 text-pure-white rounded-full p-2 hover:bg-emerald transition-colors duration-300"
                aria-label="Fermer la galerie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div
                className="w-full h-full relative overflow-hidden"
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
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img 
                      src={images[currentIndex].src} 
                      alt={images[currentIndex].alt} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                        e.currentTarget.parentElement.classList.add('bg-gradient-to-br', 'from-deep-black', 'to-gray-800');
                        // Afficher une icône si l'image ne se charge pas
                        const iconElement = document.createElement('div');
                        iconElement.className = 'absolute inset-0 flex items-center justify-center';
                        iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-pale-gold opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>`;
                        e.currentTarget.parentElement.appendChild(iconElement);
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-deep-black bg-opacity-50 text-pure-white p-2 md:p-4">
                      <p className="font-inter font-medium text-center">
                        {images[currentIndex].alt}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pure-white dark:bg-deep-black bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 text-deep-black dark:text-pure-white hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all duration-300"
                  onClick={handlePrev}
                  aria-label="Image précédente"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pure-white dark:bg-deep-black bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 text-deep-black dark:text-pure-white hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all duration-300"
                  onClick={handleNext}
                  aria-label="Image suivante"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 overflow-auto px-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      index === currentIndex
                        ? 'bg-emerald dark:bg-pale-gold'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 