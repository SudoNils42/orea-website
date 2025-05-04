import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import image1 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06273.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06168.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06146.jpg';
import image4 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06045.jpg';

const About = ({ openModal }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
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
      alt: currentLanguage === 'fr' ? "Suite principale avec lit king-size" :
           currentLanguage === 'en' ? "Master suite with king-size bed" :
           currentLanguage === 'zh' ? "带特大床的主套房" :
           currentLanguage === 'es' ? "Suite principal con cama king-size" :
           currentLanguage === 'de' ? "Hauptsuite mit Kingsize-Bett" :
           currentLanguage === 'ru' ? "Главный люкс с кроватью размера кинг-сайз" :
           "Kamar utama dengan tempat tidur king-size",
    },
    {
      id: 2,
      image: image2,
      alt: currentLanguage === 'fr' ? "Vue panoramique depuis la terrasse" :
           currentLanguage === 'en' ? "Panoramic view from the terrace" :
           currentLanguage === 'zh' ? "从露台看到的全景" :
           currentLanguage === 'es' ? "Vista panorámica desde la terraza" :
           currentLanguage === 'de' ? "Panoramablick von der Terrasse" :
           currentLanguage === 'ru' ? "Панорамный вид с террасы" :
           "Pemandangan panorama dari teras",
    },
    {
      id: 3,
      image: image3,
      alt: currentLanguage === 'fr' ? "Salon extérieur avec piscine" :
           currentLanguage === 'en' ? "Outdoor lounge with pool" :
           currentLanguage === 'zh' ? "带游泳池的户外休息区" :
           currentLanguage === 'es' ? "Salón al aire libre con piscina" :
           currentLanguage === 'de' ? "Außenlounge mit Pool" :
           currentLanguage === 'ru' ? "Зона отдыха у бассейна" :
           "Ruang tamu luar dengan kolam renang",
    },
    {
      id: 4,
      image: image4,
      alt: currentLanguage === 'fr' ? "Salle de massage avec vue sur jardin" :
           currentLanguage === 'en' ? "Massage room with garden view" :
           currentLanguage === 'zh' ? "带花园景观的按摩室" :
           currentLanguage === 'es' ? "Sala de masajes con vista al jardín" :
           currentLanguage === 'de' ? "Massageraum mit Gartenblick" :
           currentLanguage === 'ru' ? "Массажная комната с видом на сад" :
           "Ruang pijat dengan pemandangan taman",
    }
  ];

  return (
    <section id="about" className="pt-4 pb-16 md:pt-8 md:pb-20 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="mb-6">{t.about.title}</h2>
          <p className="font-lora text-lg mb-8">
            {t.about.intro}
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
            {t.about.details}
          </p>
          
          <button 
            onClick={openModal} 
            className="btn btn-primary"
            aria-label={t.about.button3d}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
              <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 12.828a6 6 0 118.656 0 6 6 0 01-8.656 0z" clipRule="evenodd" />
            </svg>
            {t.about.button3d}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 