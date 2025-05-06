import { useState, useEffect, forwardRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Hero = forwardRef(({ openModal, is3DInteractive, onInteractiveChange }, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  // Effet parallax
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Fonction pour injecter des styles CSS qui masquent les outils Matterport
    const injectMatterportStyles = () => {
      try {
        // Attendre que l'iframe soit chargée
        const iframe = document.querySelector(`iframe[title="Villa Orea - ${t.hero.tour3d}"]`);
        if (!iframe) return;
        
        const iframeWindow = iframe.contentWindow;
        if (!iframeWindow) return;
        
        // Attendre que le document de l'iframe soit complètement chargé
        setTimeout(() => {
          try {
            const iframeDocument = iframeWindow.document;
            if (!iframeDocument) return;
            
            // Créer un élément de style
            const styleElement = iframeDocument.createElement('style');
            
            // Définir les styles pour masquer les éléments de l'interface Matterport
            styleElement.textContent = `
              /* Masquer tous les contrôles et outils */
              .ControlPanel, 
              .ViewModeMenu,
              .MattertagList,
              .TitleBanner,
              .HelpCenter,
              .BottomRightUI,
              .Showcase__help,
              .Showcase__brand,
              .Showcase__toolbar,
              .Mattertag,
              .Showcase__floorplan-button,
              .Showcase__highlight-reel-button,
              .Showcase__dollhouse-button,
              .Showcase__labels-button,
              .Showcase__measurements-button {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
              }
              
              /* S'assurer que les pop-ups sont masqués */
              .Popup, .Dialog, .Dialog__overlay {
                display: none !important;
              }
              
              /* Style personnalisé pour l'interface principale */
              .Showcase__main {
                background-color: transparent !important;
              }
            `;
            
            // Ajouter l'élément de style au head de l'iframe
            iframeDocument.head.appendChild(styleElement);
          } catch (error) {
            console.error("Erreur pendant l'accès au document de l'iframe:", error);
          }
        }, 1000); // Délai pour s'assurer que l'iframe est complètement chargée
      } catch (error) {
        console.error("Erreur lors de l'injection des styles dans l'iframe Matterport:", error);
      }
    };

    // Fonction pour répéter l'injection de styles plusieurs fois
    const setupStyleInjection = () => {
      // Essayer d'injecter les styles plusieurs fois pour s'assurer qu'ils sont appliqués
      const injectionTimes = [1000, 2000, 3000, 5000];
      injectionTimes.forEach(time => {
        setTimeout(injectMatterportStyles, time);
      });
    };

    // Configure l'injection de styles lorsque l'iframe est chargée
    const iframe = document.querySelector(`iframe[title="Villa Orea - ${t.hero.tour3d}"]`);
    if (iframe) {
      iframe.addEventListener('load', setupStyleInjection);
    }

    return () => {
      clearTimeout(timer);
      
      // Nettoyer les événements
      const iframe = document.querySelector(`iframe[title="Villa Orea - ${t.hero.tour3d}"]`);
      if (iframe) {
        iframe.removeEventListener('load', setupStyleInjection);
      }
    };
  }, [t.hero.tour3d]);

  const handleIframeClick = () => {
    if (onInteractiveChange) {
      onInteractiveChange(true);
    }
    setIsHovering(true);
  };

  const handleContainerMouseEnter = () => {
    setIsHovering(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovering(false);
    // On garde le mode interactif même quand on quitte la zone
    // Pour le désactiver, l'utilisateur doit cliquer ailleurs
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28 overflow-visible">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mt-8">
          {/* Contenu du héro - Toujours centré */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center items-center text-center max-w-xl mb-6 md:mb-8 lg:mb-10"
          >
            <p className="font-lora text-lg md:text-xl lg:text-2xl text-gray-700 mb-2">
              {t.hero.subtitle}
            </p>
            <p className="font-lora text-md md:text-lg text-gray-600 mb-6">
              {t.hero.description}
            </p>
            <button
              onClick={openModal}
              className="font-lora text-sm border-b border-pale-gold hover:text-emerald transition-colors duration-300 flex items-center py-1 px-2 focus:outline-none"
              aria-label={t.hero.tour3d}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-pale-gold" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
                <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
              </svg>
              {t.hero.tour3d}
            </button>
          </motion.div>

          {/* Iframe Matterport - Container adaptatif pour tous les écrans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-2 aspect-[16/9] box-border"
            style={{
              borderColor: (isHovering || is3DInteractive) ? '#04593F' : 'rgba(4, 89, 63, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={handleContainerMouseEnter}
            onMouseLeave={handleContainerMouseLeave}
          >
            {/* Fallback placeholder en attendant que l'iframe se charge */}
            <div className={`absolute inset-0 glass-effect transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-emerald opacity-20"></div>
            </div>

            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <span className="loader mb-4"></span>
                <p className="text-deep-black font-inter text-center px-4">
                  {currentLanguage === 'fr' ? "Chargement de la visite immersive..." :
                   currentLanguage === 'en' ? "Loading immersive tour..." :
                   currentLanguage === 'zh' ? "正在加载沉浸式导览..." :
                   currentLanguage === 'es' ? "Cargando recorrido inmersivo..." :
                   "Memuat tur imersif..."}
                </p>
              </div>
            )}
            
            <div className={`matterport-iframe ${is3DInteractive ? 'interactive' : ''}`} style={{ width: '100%', height: '100%', position: 'absolute' }}>
              <iframe
                src="https://my.matterport.com/show/?m=MODEL_ID&play=1&qs=1"
                className="w-full h-full transition-opacity duration-700"
                style={{ 
                  opacity: isLoading ? 0 : 1,
                  pointerEvents: is3DInteractive || isHovering ? 'auto' : 'none'
                }}
                frameBorder="0"
                allow="xr-spatial-tracking"
                title={`Villa Orea - ${t.hero.tour3d}`}
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
            
            <div 
              className={`matterport-overlay ${(is3DInteractive || isHovering) ? 'hidden' : ''}`}
              onClick={handleIframeClick}
            >
              <div className="matterport-play-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "loop" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-deep-black" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 