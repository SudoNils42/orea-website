import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MatterportModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-deep-black bg-opacity-95 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div className="relative w-full h-full p-2 md:p-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-deep-black bg-opacity-70 text-pure-white rounded-full p-2 hover:bg-emerald transition-colors duration-300"
              aria-label="Fermer la visite 3D"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-deep-black">
                  <span className="loader mb-4"></span>
                  <p className="text-pure-white font-inter">Chargement de la visite virtuelle...</p>
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