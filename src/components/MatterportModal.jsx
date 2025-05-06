import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MatterportModal = ({ isOpen, onClose, defaultFullscreen = true, onFullscreenChange }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(defaultFullscreen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Gestion des touches clavier (Escape pour fermer)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Fonction pour injecter des styles CSS qui masquent les outils Matterport
    const injectMatterportStyles = () => {
      try {
        // Attendre que l'iframe soit chargée
        const iframe = document.querySelector('iframe[title="Visite virtuelle 3D Villa Bali"]');
        if (!iframe) return;
        
        const iframeDocument = iframe.contentWindow.document;
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
        console.error("Erreur lors de l'injection des styles dans l'iframe Matterport:", error);
      }
    };

    // Ajout d'un gestionnaire pour l'événement de chargement de l'iframe
    const handleIframeLoad = () => {
      // Essayer d'injecter les styles immédiatement après le chargement
      injectMatterportStyles();
      
      // Puis réessayer plusieurs fois pour s'assurer que les styles sont bien appliqués
      // (parfois le contenu de l'iframe peut changer dynamiquement)
      const injectionAttempts = [500, 1000, 2000, 3000];
      injectionAttempts.forEach(delay => {
        setTimeout(injectMatterportStyles, delay);
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Ajouter le gestionnaire d'événement pour le chargement de l'iframe
    const iframe = document.querySelector('iframe[title="Visite virtuelle 3D Villa Bali"]');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      
      // Nettoyer le gestionnaire d'événement
      const iframe = document.querySelector('iframe[title="Visite virtuelle 3D Villa Bali"]');
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, [onClose]);

  const modalVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const toggleFullscreen = () => {
    const newFullscreenState = !isFullscreen;
    setIsFullscreen(newFullscreenState);
    if (onFullscreenChange) {
      onFullscreenChange(newFullscreenState);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-gray-200 bg-opacity-95' : 'bg-transparent pointer-events-none'} flex items-center justify-center`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div className={`relative ${isFullscreen ? 'w-full h-full p-2 md:p-4' : 'w-4/5 md:w-2/3 lg:w-1/2 h-3/4 pointer-events-auto'} ${!isFullscreen ? 'mb-24' : ''}`}>
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={toggleFullscreen}
                className="bg-white bg-opacity-70 text-deep-black rounded-full p-2 hover:bg-emerald hover:text-white transition-colors duration-300"
                aria-label={isFullscreen ? "Réduire la visite 3D" : "Agrandir la visite 3D"}
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                )}
              </button>
              <button
                onClick={onClose}
                className="bg-white bg-opacity-70 text-deep-black rounded-full p-2 hover:bg-emerald hover:text-white transition-colors duration-300"
                aria-label="Fermer la visite 3D"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className={`relative w-full h-full rounded-lg overflow-hidden ${!isFullscreen ? 'shadow-2xl border-2 border-emerald' : ''}`}>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                  <span className="loader mb-4"></span>
                  <p className="text-deep-black font-inter">Chargement de la visite virtuelle...</p>
                </div>
              )}
              
              <iframe
                src="https://my.matterport.com/show/?m=MODEL_ID&play=1&qs=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
                title="Visite virtuelle 3D Villa Bali"
                className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatterportModal; 