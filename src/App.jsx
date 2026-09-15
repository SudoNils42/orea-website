import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Amenities from './components/Amenities';
import VirtualTour from './components/VirtualTour';
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
  const tourRef = useRef(null);
  const scheduledScrollUpdate = useRef(false);

  const updateHeaderScroll = () => {
    const nextScrollY = window.scrollY > 50 ? 100 : 0;
    setScrollY((currentScrollY) => currentScrollY === nextScrollY ? currentScrollY : nextScrollY);
    scheduledScrollUpdate.current = false;
  };

  const handleScroll = () => {
    if (scheduledScrollUpdate.current) {
      return;
    }

    scheduledScrollUpdate.current = true;
    window.requestAnimationFrame(updateHeaderScroll);
  };

  const handleClickOutside = (event) => {
    if (tourRef.current && !tourRef.current.contains(event.target)) {
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFullscreenChange = () => {
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

  const handle3DInteractiveChange = (value) => {
    setIs3DInteractive(value);
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-pure-white text-gray-900">
        <Header scrollY={scrollY} openModal={openModal} />
        
        <main className="flex-grow">
          <About />
          <Amenities />
          <Gallery />
          <VirtualTour
            ref={tourRef}
            openModal={openModal}
            is3DInteractive={is3DInteractive}
            onInteractiveChange={handle3DInteractiveChange}
          />
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
