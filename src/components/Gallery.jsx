import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Descriptions des images - à maintenir dans le même ordre que les noms de fichier pour une correspondance correcte
const IMAGE_DESCRIPTIONS = {
  'DSC05932.jpg': 'Vue depuis la terrasse',
  'DSC05945.jpg': 'Jardin tropical',
  'DSC05950.jpg': 'Piscine de nuit',
  'DSC05955.jpg': 'Espace extérieur',
  'DSC05958.jpg': 'Terrasse ombragée',
  'DSC05984.jpg': 'Coin repas extérieur',
  'DSC05989.jpg': 'Détails architecturaux',
  'DSC06021.jpg': 'Salon avec vue panoramique',
  'DSC06029.jpg': 'Espace détente au bord de la piscine',
  'DSC06035.jpg': 'Espace de travail',
  'DSC06045.jpg': 'Entrée de la villa',
  'DSC06066.jpg': 'Vue sur la piscine',
  'DSC06070.jpg': 'Coin feu extérieur',
  'DSC06076.jpg': 'Douche extérieure',
  'DSC06087.jpg': 'Allée d\'entrée',
  'DSC06104.jpg': 'Bar à cocktails',
  'DSC06114.jpg': 'Espace yoga',
  'DSC06120.jpg': 'Vue sur la jungle',
  'DSC06127.jpg': 'Salle de massage',
  'DSC06132.jpg': 'Détails et décoration',
  'DSC06138.jpg': 'Lit king-size',
  'DSC06146.jpg': 'Vue aérienne',
  'DSC06150.jpg': 'Accès à la plage',
  'DSC06156.jpg': 'Coucher de soleil depuis la terrasse',
  'DSC06164.jpg': 'Chambre avec balcon',
  'DSC06168.jpg': 'Détail architectural',
  'DSC06191.jpg': 'Chambre d\'amis',
  'DSC06206.jpg': 'Salle à manger',
  'DSC06219.jpg': 'Cuisine équipée',
  'DSC06225.jpg': 'Coin lecture',
  'DSC06240.jpg': 'Coin détente',
  'DSC06244.jpg': 'Salle de bain luxueuse',
  'DSC06251.jpg': 'Salle de bain en pierre',
  'DSC06256.jpg': 'Terrasse avec vue',
  'DSC06266.jpg': 'Espace salon extérieur',
  'DSC06270.jpg': 'Piscine à débordement',
  'DSC06273.jpg': 'Vue extérieure de la villa'
};

// Fonction pour obtenir toutes les images
function getAllImages() {
  // Importation explicite des 4 premières images pour un chargement prioritaire
  const priorityImages = [
    {
      id: 1,
      src: require('../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg'),
      alt: IMAGE_DESCRIPTIONS['DSC06273.jpg'] || 'Villa Orea - Vue extérieure',
      filename: 'DSC06273.jpg'
    },
    {
      id: 2,
      src: require('../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg'),
      alt: IMAGE_DESCRIPTIONS['DSC06270.jpg'] || 'Villa Orea - Piscine',
      filename: 'DSC06270.jpg'
    },
    {
      id: 3,
      src: require('../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg'),
      alt: IMAGE_DESCRIPTIONS['DSC06266.jpg'] || 'Villa Orea - Salon extérieur',
      filename: 'DSC06266.jpg'
    },
    {
      id: 4,
      src: require('../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg'),
      alt: IMAGE_DESCRIPTIONS['DSC06256.jpg'] || 'Villa Orea - Terrasse',
      filename: 'DSC06256.jpg'
    }
  ];
  
  // Autres noms de fichiers des images du dossier RESIZE
  const otherImageFilenames = [
    'DSC05932.jpg', 'DSC05945.jpg', 'DSC05950.jpg', 'DSC05955.jpg', 'DSC05958.jpg',
    'DSC05984.jpg', 'DSC05989.jpg', 'DSC06021.jpg', 'DSC06029.jpg', 'DSC06035.jpg',
    'DSC06045.jpg', 'DSC06066.jpg', 'DSC06070.jpg', 'DSC06076.jpg', 'DSC06087.jpg',
    'DSC06104.jpg', 'DSC06114.jpg', 'DSC06120.jpg', 'DSC06127.jpg', 'DSC06132.jpg',
    'DSC06138.jpg', 'DSC06146.jpg', 'DSC06150.jpg', 'DSC06156.jpg', 'DSC06164.jpg',
    'DSC06168.jpg', 'DSC06191.jpg', 'DSC06206.jpg', 'DSC06219.jpg', 'DSC06225.jpg',
    'DSC06240.jpg', 'DSC06244.jpg', 'DSC06251.jpg', 'DSC06256.jpg', 'DSC06266.jpg',
    'DSC06270.jpg', 'DSC06273.jpg'
  ];
  
  // Filtrer les noms de fichiers déjà inclus dans priorityImages
  const priorityFilenames = priorityImages.map(img => img.filename);
  const remainingFilenames = otherImageFilenames.filter(
    filename => !priorityFilenames.includes(filename)
  );
  
  // Créer les objets pour les images restantes
  const otherImages = remainingFilenames.map((filename, index) => {
    try {
      return {
        id: priorityImages.length + index + 1,
        src: require(`../assets/gallery-assets/250428 Villa Orea/2. RESIZE/${filename}`),
        alt: IMAGE_DESCRIPTIONS[filename] || `Villa Orea - Image ${index + 5}`,
        filename
      };
    } catch (e) {
      console.warn(`Impossible de charger l'image: ${filename}`, e);
      return null;
    }
  }).filter(Boolean); // Filtrer les images qui n'ont pas pu être chargées
  
  // Combiner les images prioritaires avec les autres
  return [...priorityImages, ...otherImages];
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); // Commencer par afficher 4 images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger toutes les images au démarrage
  useEffect(() => {
    try {
      const allImages = getAllImages();
      setImages(allImages);
    } catch (error) {
      console.error('Erreur lors du chargement des images:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreImages = () => {
    // Afficher 8 images de plus à chaque clic, ou toutes s'il en reste moins de 8
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

  if (loading) {
    return (
      <section id="gallery" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="animate-pulse">
            <h2 className="mb-4">Galerie</h2>
            <p className="font-lora text-lg max-w-2xl mx-auto mb-6">
              Chargement des images...
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 md:h-80 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={`image-${image.id}`}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={(index % 9) * 100}
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading={index > 2 ? "lazy" : "eager"}
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
              <span>Voir plus de photos</span>
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
                      src={images[currentIndex]?.src} 
                      alt={images[currentIndex]?.alt} 
                      className="max-w-full max-h-[80vh] object-contain" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-deep-black bg-opacity-60">
                      <p className="text-pure-white text-center">{images[currentIndex]?.alt}</p>
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