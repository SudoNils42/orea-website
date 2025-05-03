import { useEffect } from 'react';

const About = ({ openModal }) => {
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  // Placeholders pour les images avec effet de verre dépoli
  const placeholders = [
    {
      id: 1,
      alt: "Vue extérieure de la villa",
    },
    {
      id: 2,
      alt: "Piscine à débordement",
    },
    {
      id: 3,
      alt: "Chambre principale",
    },
    {
      id: 4,
      alt: "Terrasse avec vue tropicale",
    }
  ];

  return (
    <section id="about" className="pt-4 pb-16 md:pt-8 md:pb-20 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="mb-6">À Propos de la Villa</h2>
          <p className="font-lora text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholders.map((image, index) => (
            <div 
              key={image.id} 
              className="relative h-64 rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 glass-effect">
                <div className="absolute inset-0 bg-emerald opacity-10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-deep-black dark:text-pure-white opacity-40 font-inter font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
            Notre somptueuse villa dispose de 3 chambres luxueuses, d'une piscine privée à débordement, d'une vue imprenable sur la jungle tropicale, et de tout le confort moderne pour rendre votre séjour inoubliable. Située à quelques minutes des plus belles plages de Bali.
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