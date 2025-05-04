import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Images importées directement
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06270.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06266.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06256.jpg';

// Version ultra simplifiée et minimaliste pour résoudre les problèmes
const Gallery = () => {
  const { currentLanguage } = useLanguage();
  
  // Créer un tableau d'images simple
  const images = [
    { src: image1, alt: 'Villa Orea - Vue 1' },
    { src: image2, alt: 'Villa Orea - Vue 2' },
    { src: image3, alt: 'Villa Orea - Vue 3' },
    { src: image4, alt: 'Villa Orea - Vue 4' }
  ];
  
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {currentLanguage === 'fr' ? 'Galerie' : 'Gallery'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 