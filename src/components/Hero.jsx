import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ openModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  
  // Effet parallax
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-20 overflow-visible">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenu du héro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-deep-black dark:text-pure-white mb-4">
              Villa de Luxe à Bali
            </h1>
            <p className="font-lora text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
            <button
              onClick={openModal}
              className="btn btn-primary self-start"
              aria-label="Ouvrir la visite 3D en plein écran"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
                <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
              </svg>
              Visite 3D en plein écran
            </button>
          </motion.div>

          {/* Iframe Matterport dans un conteneur */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl border-2 border-emerald/20 dark:border-emerald/40"
          >
            {/* Fallback placeholder en attendant que l'iframe se charge */}
            <div className={`absolute inset-0 glass-effect transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-emerald opacity-20"></div>
            </div>

            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <span className="loader mb-4"></span>
                <p className="text-deep-black dark:text-pure-white font-inter text-center px-4">
                  Chargement de la visite immersive...
                </p>
              </div>
            )}
            
            <iframe
              src="https://my.matterport.com/show/?m=MODEL_ID&play=1&qs=1"
              className={`w-full h-full transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{ height: '400px' }}
              frameBorder="0"
              allow="xr-spatial-tracking"
              title="Villa de Luxe à Bali Visite 3D"
              onLoad={() => setIsLoading(false)}
            ></iframe>
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
          className="h-6 w-6 text-deep-black dark:text-pure-white" 
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
};

export default Hero; 