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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [defaultFullscreen, setDefaultFullscreen] = useState(true);
  const [is3DInteractive, setIs3DInteractive] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Ajouter un gestionnaire d'événements global pour désactiver le mode interactif
    const handleClickOutside = (e) => {
      if (heroRef.current && !heroRef.current.contains(e.target)) {
        setIs3DInteractive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFullscreenChange = (isFullscreen) => {
    setDefaultFullscreen(isFullscreen);
  };

  const handle3DInteractiveChange = (isInteractive) => {
    setIs3DInteractive(isInteractive);
  };

  return (
    <div className="relative min-h-screen">
      <Header scrollY={scrollY} openModal={openModal} />
      
      <main>
        <Hero 
          ref={heroRef}
          openModal={openModal} 
          is3DInteractive={is3DInteractive}
          onInteractiveChange={handle3DInteractiveChange}
        />
        <About openModal={openModal} />
        <Amenities />
        <Gallery />
        <FAQ />
        <Testimonials />
        <Contact />
        <Pricing />
      </main>
      
      <Footer openModal={openModal} />
      
      {isModalOpen && (
        <MatterportModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          defaultFullscreen={defaultFullscreen}
          onFullscreenChange={handleFullscreenChange}
        />
      )}
    </div>
  );
}

export default App; 