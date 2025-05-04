import { useEffect } from 'react';
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06168.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06146.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06045.jpg';

const About = ({ openModal }) => {
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  // Images pour les encadrés avec leurs détails
  const placeholders = [
    {
      id: 1,
      image: image1,
      alt: "Suite principale avec lit king-size",
    },
    {
      id: 2,
      image: image2,
      alt: "Vue panoramique depuis la terrasse",
    },
    {
      id: 3,
      image: image3,
      alt: "Salon extérieur avec piscine",
    },
    {
      id: 4,
      image: image4,
      alt: "Salle de massage avec vue sur jardin",
    }
  ];

  return (
    <section id="about" className="pt-4 pb-16 md:pt-8 md:pb-20 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="mb-6">À Propos de la Villa</h2>
          <p className="font-lora text-lg mb-8">
            Bienvenue à Villa Orea, une élégante retraite de 2 chambres, conçue comme un véritable cocon de tranquillité, parfaite pour couples, petite famille et amis proches dans le quartier animé de Seminyak. À l'entrée, une porte intelligente vous accueille : il suffit d'entrer le code fourni et d'appuyer sur l'icône de la cloche pour déverrouiller votre havre de paix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholders.map((item, index) => (
            <div 
              key={item.id} 
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-40 hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-start p-4">
                <p className="text-pure-white font-inter font-medium text-sm">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
            La villa dispose de 2 chambres luxueuses avec lits king-size, Smart TV avec Netflix et YouTube Premium, et salles de bains attenantes. L'espace de vie semi-ouvert comprend un salon avec Smart TV, un coin bar, et une cuisine entièrement équipée. À l'extérieur, profitez de la piscine privée et du jardin tropical, à seulement quelques minutes des cafés, plages et boutiques de Seminyak.
          </p>
          
          <button 
            onClick={openModal} 
            className="btn btn-primary"
            aria-label="Découvrir la villa en 3D"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
              <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
            </svg>
            Découvrir en 3D
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 