import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const VILLA_IMAGES = Array.from({ length: 22 }, (_, i) => ({ id: i + 1 }));

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
                <div className="w-full h-full bg-gradient-to-br from-emerald/25 to-pale-gold/25"></div>
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-deep-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent">
                <p className="text-pure-white text-sm">{t.gallery.images[image.id]}</p>
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
                  <div className="w-full h-full bg-gradient-to-br from-emerald/25 to-pale-gold/25"></div>
                  <div className="absolute inset-0 bg-deep-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-deep-black/80 to-transparent">
                    <p className="text-pure-white text-xs">{t.gallery.images[image.id]}</p>
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
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="w-[90vw] max-w-6xl h-[70vh] rounded-lg shadow-2xl bg-gradient-to-br from-emerald/25 to-pale-gold/25"
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
