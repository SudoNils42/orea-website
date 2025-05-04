import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Header = ({ scrollY, openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  useEffect(() => {
    setIsSticky(scrollY > 50);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky 
          ? 'py-3 bg-pure-white bg-opacity-90 dark:bg-deep-black dark:bg-opacity-90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="font-inter font-black text-xl md:text-2xl z-20">
          <span className="text-emerald">Villa</span>
          <span className="text-pale-gold">Orea</span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.about}</a>
          <a href="#amenities" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.amenities}</a>
          <a href="#gallery" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.gallery}</a>
          <a href="#faq" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.faq}</a>
          <a href="#testimonials" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.testimonials}</a>
          <a href="#pricing" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.pricing}</a>
          <a href="#contact" className="font-inter font-medium hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300">{t.nav.contact}</a>
          <LanguageSelector />
          <button 
            onClick={openModal} 
            className="btn btn-primary flex items-center"
            aria-label={t.nav.tour3d}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
              <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
            </svg>
            {t.nav.tour3d}
          </button>
        </nav>

        {/* Bouton hamburger et sélecteur de langue mobile */}
        <div className="md:hidden flex items-center space-x-2 z-20">
          <LanguageSelector />
          <button 
            className={`flex flex-col justify-center items-center w-10 h-10 ${isMenuOpen ? 'hamburger-active' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line mb-1.5"></span>
            <span className="hamburger-line mb-1.5"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-pure-white dark:bg-deep-black z-10 shadow-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
                <nav className="flex flex-col space-y-6 mb-8">
                  <motion.a 
                    href="#about" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.about}
                  </motion.a>
                  <motion.a 
                    href="#amenities" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.amenities}
                  </motion.a>
                  <motion.a 
                    href="#gallery" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.gallery}
                  </motion.a>
                  <motion.a 
                    href="#faq" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.faq}
                  </motion.a>
                  <motion.a 
                    href="#testimonials" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.testimonials}
                  </motion.a>
                  <motion.a 
                    href="#pricing" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.pricing}
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="font-inter font-medium text-lg hover:text-emerald dark:hover:text-pale-gold transition-colors duration-300"
                    onClick={closeMenu}
                    variants={menuItemVariants}
                  >
                    {t.nav.contact}
                  </motion.a>
                </nav>
                <motion.div className="mt-auto" variants={menuItemVariants}>
                  <button 
                    onClick={() => { closeMenu(); openModal(); }} 
                    className="btn btn-primary w-full flex items-center justify-center"
                    aria-label={t.nav.tour3d}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
                      <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
                    </svg>
                    {t.nav.tour3d}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 