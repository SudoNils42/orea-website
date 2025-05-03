import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Placeholder images
  const images = [
    {
      id: 1,
      alt: 'Vue extérieure de la villa',
    },
    {
      id: 2,
      alt: 'Piscine à débordement',
    },
    {
      id: 3,
      alt: 'Chambre principale',
    },
    {
      id: 4,
      alt: 'Salon avec vue',
    },
    {
      id: 5,
      alt: 'Cuisine ouverte',
    },
    {
      id: 6,
      alt: 'Terrasse et jardin',
    },
  ];

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
            Découvrez notre villa de luxe à travers ces quelques images.
          </p>
        </div>

        {/* Grille d'images pour desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(index)}
            >
              <div className="absolute inset-0 glass-effect">
                <div className="absolute inset-0 bg-emerald opacity-10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-deep-black dark:text-pure-white opacity-40 font-inter font-medium">
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

        {/* Carrousel pour mobile */}
        <div
          className="md:hidden relative h-80 rounded-lg overflow-hidden"
          data-aos="fade-up"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 glass-effect">
            <div className="absolute inset-0 bg-emerald opacity-10"></div>
          </div>
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
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-deep-black dark:text-pure-white opacity-40 font-inter font-medium text-center px-4">
                  {images[currentIndex].alt}
                </p>
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

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${
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
            className="fixed inset-0 z-50 bg-deep-black bg-opacity-90 flex items-center justify-center"
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
                    <div className="glass-effect w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-emerald opacity-5"></div>
                      <p className="text-pure-white font-inter font-medium text-xl text-center px-4 z-10">
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

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full ${
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