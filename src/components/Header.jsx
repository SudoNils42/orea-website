import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import logoImage from '../assets/logo/fulllogo_transparent_nobuffer.png';
import logoSimple from '../assets/logo/icononly_transparent_nobuffer.png';

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
          ? 'py-3 bg-pure-white bg-opacity-90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-full">
        <a href="#" className="z-20">
          <img src={logoImage} alt="Villa Orea Logo" className="h-12" />
        </a>

        {/* Navigation Desktop - supprimée pour tous les formats */}
        {/* Bouton hamburger et sélecteur de langue pour tous les formats */}
        <div 
          className="flex items-center space-x-2 z-20 header-buttons"
        >
          <LanguageSelector />
          <button 
            className={`flex flex-col justify-center items-center w-9 md:w-10 h-10 ${isMenuOpen ? 'hamburger-active' : ''}`} 
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
              className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-pure-white z-10 shadow-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
                <nav className="flex flex-col space-y-6 mb-8">
                  <motion.a 
                    href="#about" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.about}
                  </motion.a>
                  <motion.a 
                    href="#amenities" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.amenities}
                  </motion.a>
                  <motion.a 
                    href="#gallery" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.gallery}
                  </motion.a>
                  <motion.a 
                    href="#faq" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.faq}
                  </motion.a>
                  <motion.a 
                    href="#testimonials" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.testimonials}
                  </motion.a>
                  <motion.a 
                    href="#pricing" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
                    variants={menuItemVariants}
                  >
                    {t.nav.pricing}
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="font-inter font-medium text-lg hover:text-emerald transition-colors duration-300"
                    onClick={e => { closeMenu(); e.currentTarget.blur(); }}
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
                    <img src={logoSimple} alt="Logo Villa Orea" className="h-5 w-5 object-contain mr-2" style={{minWidth: 20}} />
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