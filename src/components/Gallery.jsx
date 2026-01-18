import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const imageData = [
  { id: 1, path: 'DSC06273.jpg', folder: '2. RESIZE', alt: 'Vue extérieure de la villa' },
  { id: 2, path: 'DSC06270.jpg', folder: '2. RESIZE', alt: 'Piscine à débordement' },
  { id: 3, path: 'DSC06266.jpg', folder: '2. RESIZE', alt: 'Espace salon extérieur' },
  { id: 4, path: 'DSC06256.jpg', folder: '2. RESIZE', alt: 'Terrasse avec vue' },
  { id: 5, path: 'DSC06251.jpg', folder: '2. RESIZE', alt: 'Chambre principale' },
  { id: 6, path: 'DSC06244.jpg', folder: '2. RESIZE', alt: 'Salle de bain luxueuse' },
  { id: 7, path: 'DSC06240.jpg', folder: '2. RESIZE', alt: 'Coin détente' },
  { id: 8, path: 'DSC06225.jpg', folder: '2. RESIZE', alt: 'Cuisine équipée' },
  { id: 9, path: 'DSC06219.jpg', folder: '2. RESIZE', alt: 'Salle à manger' },
  { id: 10, path: 'DSC06206.jpg', folder: '2. RESIZE', alt: 'Salon avec vue panoramique' },
  { id: 11, path: 'DSC06191.jpg', folder: '2. RESIZE', alt: 'Chambre d\'amis' },
  { id: 12, path: 'DSC06168.jpg', folder: '2. RESIZE', alt: 'Espace de travail' },
  { id: 13, path: 'DSC06164.jpg', folder: '2. RESIZE', alt: 'Entrée de la villa' },
  { id: 14, path: 'DSC06156.jpg', folder: '2. RESIZE', alt: 'Jardin tropical' },
  { id: 15, path: 'DSC06150.jpg', folder: '2. RESIZE', alt: 'Coin repas extérieur' },
  { id: 16, path: 'DSC06146.jpg', folder: '2. RESIZE', alt: 'Vue sur la piscine' },
  { id: 17, path: 'DSC06138.jpg', folder: '2. RESIZE', alt: 'Salle de bain en pierre' },
  { id: 18, path: 'DSC06132.jpg', folder: '2. RESIZE', alt: 'Coin lecture' },
  { id: 19, path: 'DSC06127.jpg', folder: '2. RESIZE', alt: 'Vue aérienne' },
  { id: 20, path: 'DSC06120.jpg', folder: '2. RESIZE', alt: 'Accès à la plage' },
  { id: 21, path: 'DSC06114.jpg', folder: '2. RESIZE', alt: 'Espace yoga' },
  { id: 22, path: 'DSC06104.jpg', folder: '2. RESIZE', alt: 'Bar à cocktails' },
  { id: 23, path: 'DSC06087.jpg', folder: '2. RESIZE', alt: 'Allée d\'entrée' },
  { id: 24, path: 'DSC06076.jpg', folder: '2. RESIZE', alt: 'Douche extérieure' },
  { id: 25, path: 'DSC06070.jpg', folder: '2. RESIZE', alt: 'Coin feu extérieur' },
  { id: 26, path: 'DSC06066.jpg', folder: '2. RESIZE', alt: 'Vue sur la piscine depuis la terrasse' },
  { id: 27, path: 'DSC06045.jpg', folder: '2. RESIZE', alt: 'Entrée principale de la villa' },
  { id: 28, path: 'DSC06035.jpg', folder: '2. RESIZE', alt: 'Espace de travail avec vue' },
  { id: 29, path: 'DSC06029.jpg', folder: '2. RESIZE', alt: 'Espace détente au bord de la piscine' },
  { id: 30, path: 'DSC06021.jpg', folder: '2. RESIZE', alt: 'Salon extérieur avec vue panoramique' },
  { id: 31, path: 'DSC05989.jpg', folder: '2. RESIZE', alt: 'Détails architecturaux' },
  { id: 32, path: 'DSC05984.jpg', folder: '2. RESIZE', alt: 'Coin repas extérieur ombragé' },
  { id: 33, path: 'DSC05958.jpg', folder: '2. RESIZE', alt: 'Terrasse ombragée' },
  { id: 34, path: 'DSC05955.jpg', folder: '2. RESIZE', alt: 'Espace extérieur avec vue sur la nature' },
  { id: 35, path: 'DSC05950.jpg', folder: '2. RESIZE', alt: 'Éclairage nocturne de la piscine' },
  { id: 36, path: 'DSC05945.jpg', folder: '2. RESIZE', alt: 'Jardin tropical aménagé' },
  { id: 37, path: 'DSC05932.jpg', folder: '2. RESIZE', alt: 'Vue sur la terrasse et la piscine' },
  { id: 38, path: 'DSCF1793 (1).jpg', folder: '3. NEW', alt: 'Salle de bain' },
  { id: 39, path: 'IMG_3947-HDR.jpg', folder: '3. NEW', alt: 'Salle de bain avec douche' },
  { id: 40, path: 'IMG_3949-HDR-2.jpg', folder: '3. NEW', alt: 'Baignoire' },
  { id: 41, path: 'IMG_3970.jpg', folder: '3. NEW', alt: 'Baignoire spa' },
  { id: 42, path: 'IMG_4031-HDR.jpg', folder: '3. NEW', alt: 'Salon avec piscine' },
  { id: 43, path: 'IMG_4044-HDR.jpg', folder: '3. NEW', alt: 'Espace de vie avec piscine' },
  { id: 44, path: 'IMG_4048-HDRE.jpg', folder: '3. NEW', alt: 'Salon et piscine' },
  { id: 45, path: 'IMG_4050-HDR-Edit.jpg', folder: '3. NEW', alt: 'Villa avec piscine' },
  { id: 46, path: 'IMG_5858-HDR (1).jpg', folder: '3. NEW', alt: 'Chambre principale' },
  { id: 47, path: 'IMG_5866 (1).jpg', folder: '3. NEW', alt: 'Chambre' },
  { id: 48, path: 'IMG_5873-HDR (1).jpg', folder: '3. NEW', alt: 'Chambre' },
  { id: 49, path: 'IMG_5878-HDR (1).jpg', folder: '3. NEW', alt: 'Chambre' }
];

const VILLA_IMAGES = imageData.map(img => ({
  ...img,
  src: new URL(`../assets/gallery-assets/250428 Villa Orea/${img.folder}/${img.path}`, import.meta.url).href
}));

const Gallery = () => {
  const [images] = useState(VILLA_IMAGES);
  const [visibleImages, setVisibleImages] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const galleryRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = parseInt(entry.target.dataset.index);
            setLoadedImages(prev => new Set([...prev, imgIndex]));
          }
        });
      },
      { rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const displayedImages = useMemo(
    () => images.slice(0, visibleImages),
    [images, visibleImages]
  );

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setLoadedImages(prev => new Set([...prev, index, index + 1, index - 1]));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setDirection(-1);
    setCurrentIndex(newIndex);
    setLoadedImages(prev => new Set([...prev, newIndex, newIndex - 1]));
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setDirection(1);
    setCurrentIndex(newIndex);
    setLoadedImages(prev => new Set([...prev, newIndex, newIndex + 1]));
  };

  const handleKeyDown = (e) => {
    if (isModalOpen) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrevious();
    }
  };

  const loadMoreImages = () => {
    const newVisible = Math.min(visibleImages + 8, images.length);
    setVisibleImages(newVisible);
    const newIndices = Array.from({ length: 8 }, (_, i) => visibleImages + i).filter(i => i < images.length);
    setLoadedImages(prev => new Set([...prev, ...newIndices]));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black" ref={galleryRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4">{t.gallery.title}</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        {/* Grille d'images pour desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={(index % 8) * 100}
              onClick={() => openModal(index)}
              data-index={index}
              ref={(el) => {
                if (el && observerRef.current && !loadedImages.has(index)) {
                  observerRef.current.observe(el);
                }
              }}
            >
              {loadedImages.has(index) ? (
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                  loading={index > 3 ? "lazy" : "eager"}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider pour mobile */}
        <div className="md:hidden">
          <div className="overflow-x-auto flex space-x-3 pb-6 pt-1 px-2 snap-x snap-mandatory">
            {images.map((image, index) => (
              <div
                key={image.id}
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
                  <div className="absolute inset-0 bg-deep-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-deep-black/80 to-transparent">
                    <p className="text-pure-white text-xs">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton "Voir plus" - seulement pour desktop */}
        {visibleImages < images.length && (
          <div className="hidden md:block text-center mt-8" data-aos="fade-up">
            <button
              onClick={loadMoreImages}
              className="px-8 py-3 bg-emerald hover:bg-emerald/90 text-pure-white rounded-full font-inter font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <span>{t.gallery.seeMore || 'Voir plus de photos'}</span>
              <span className="bg-pale-gold/10 text-pale-gold px-2 py-0.5 rounded-full text-sm">
                {visibleImages}/{images.length}
              </span>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={closeModal}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-pure-white hover:text-gray-300 transition-colors z-50"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSmallScreen && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pure-white hover:text-gray-300 transition-colors z-50 bg-deep-black bg-opacity-50 rounded-full p-3"
                  aria-label="Previous"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pure-white hover:text-gray-300 transition-colors z-50 bg-deep-black bg-opacity-50 rounded-full p-3"
                  aria-label="Next"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  loading="eager"
                />
              </AnimatePresence>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-deep-black bg-opacity-70 px-4 py-2 rounded-full">
                <p className="text-pure-white text-sm font-inter">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>

            {isSmallScreen && (
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4">
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="bg-pure-white text-deep-black p-3 rounded-full shadow-lg"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="bg-pure-white text-deep-black p-3 rounded-full shadow-lg"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
