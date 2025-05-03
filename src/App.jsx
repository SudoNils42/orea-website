import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="relative min-h-screen">
      <Header scrollY={scrollY} openModal={openModal} />
      
      <main>
        <Hero openModal={openModal} />
        <About openModal={openModal} />
        <Amenities />
        <Pricing />
        <FAQ />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer openModal={openModal} />
      
      {isModalOpen && (
        <MatterportModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default App; 