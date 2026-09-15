import { forwardRef, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import { matterportModelId, matterportPreviewImage, villaIcon } from '../config/site';

const loadingLabels = {
  fr: 'Chargement de la visite immersive...',
  en: 'Loading immersive tour...',
  zh: '正在加载沉浸式导览...',
  es: 'Cargando recorrido inmersivo...',
  id: 'Memuat tur imersif...',
  de: 'Immersive Tour wird geladen...',
  ru: 'Загрузка иммерсивного тура...',
  ar: 'جارٍ تحميل الجولة الغامرة...'
};

const VirtualTour = forwardRef(({ openModal, is3DInteractive, onInteractiveChange }, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [shouldLoadTour, setShouldLoadTour] = useState(false);
  const sectionRef = useRef(null);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const loadingLabel = loadingLabels[currentLanguage] || loadingLabels.en;
  const tourLabel = t.about.button3d || t.nav.tour3d;

  useEffect(() => {
    const target = sectionRef.current;

    if (!target || typeof IntersectionObserver === 'undefined') {
      setShouldLoadTour(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadTour(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const handleTourActivation = () => {
    setShouldLoadTour(true);
    setIsHovering(true);

    if (onInteractiveChange) {
      onInteractiveChange(true);
    }
  };

  const handleContainerMouseEnter = () => {
    setIsHovering(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section id="tour3d" ref={sectionRef} className="py-8 md:py-10 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4" data-aos="fade-up">
          <button
            onClick={openModal}
            className="font-lora text-sm inline-flex items-center py-1 px-2 focus:outline-none hover:text-emerald transition-colors duration-300"
            aria-label={tourLabel}
          >
            <img src={villaIcon} alt="Villa Orea Logo" className="h-5 w-5 object-contain mr-1" style={{ minWidth: 20 }} />
            <span className="border-b border-pale-gold pb-0.5">{tourLabel}</span>
          </button>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-2 aspect-[16/9] box-border"
          style={{
            borderColor: (isHovering || is3DInteractive) ? '#04593F' : 'rgba(4, 89, 63, 0.2)',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          <img
            src={matterportPreviewImage}
            alt={`Villa Orea - ${tourLabel}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${shouldLoadTour && !isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            decoding="async"
          />

          {shouldLoadTour && isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 glass-effect">
              <span className="loader mb-4"></span>
              <p className="text-deep-black font-inter text-center px-4">
                {loadingLabel}
              </p>
            </div>
          )}

          {shouldLoadTour && (
            <div className={`matterport-iframe ${is3DInteractive ? 'interactive' : ''}`} style={{ width: '100%', height: '100%', position: 'absolute' }}>
              <iframe
                src={`https://my.matterport.com/show/?m=${matterportModelId}&play=1&qs=1&mls=1&help=0&ts=0&hr=0&brand=0&search=0&info=0&vr=0&tour=0`}
                className="w-full h-full transition-opacity duration-700"
                style={{
                  opacity: isLoading ? 0 : 1,
                  pointerEvents: is3DInteractive || isHovering ? 'auto' : 'none'
                }}
                frameBorder="0"
                allow="xr-spatial-tracking"
                title={`Villa Orea - ${tourLabel}`}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          )}

          <div
            className={`matterport-overlay ${(shouldLoadTour && (is3DInteractive || isHovering)) ? 'hidden' : ''}`}
            onClick={handleTourActivation}
          >
            <div className="matterport-play-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

VirtualTour.displayName = 'VirtualTour';

export default VirtualTour;
