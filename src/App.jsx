import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatterportModal from './components/MatterportModal';
import FloatingBookingButton from './components/FloatingBookingButton';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [is3DInteractive, setIs3DInteractive] = useState(false);
  const heroRef = useRef(null);
  
  // Gestionnaire de scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Gestionnaire de clic en dehors
  const handleClickOutside = (event) => {
    // Si un clic est fait en dehors de la section Hero, on désactive le mode interactif
    if (heroRef.current && !heroRef.current.contains(event.target)) {
      setIs3DInteractive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setModalOpen(true);
    // Désactiver le scroll du body
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    // Réactiver le scroll du body
    document.body.style.overflow = 'auto';
  };

  // Gestionnaire pour le changement de mode plein écran
  const handleFullscreenChange = () => {
    // Si on sort du mode plein écran, on ferme la modal
    if (!document.fullscreenElement) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Gestionnaire pour le changement de mode interactif
  const handle3DInteractiveChange = (value) => {
    setIs3DInteractive(value);
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-pure-white text-gray-900">
        <Header scrollY={scrollY} openModal={openModal} />
        
        <main className="flex-grow">
          <Hero 
            ref={heroRef}
            openModal={openModal} 
            is3DInteractive={is3DInteractive} 
            onInteractiveChange={handle3DInteractiveChange}
          />
          <About />
          <Amenities />
          <Gallery />
          <FAQ />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>

        <Footer />
        <FloatingBookingButton />
        
        <MatterportModal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          onFullscreenChange={handleFullscreenChange}
        />
      </div>
    </LanguageProvider>
  );
};

export default App; 