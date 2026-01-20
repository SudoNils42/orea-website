import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import image1 from '../assets/gallery-assets/250428 Villa Orea/3. NEW/IMG_4044-HDR.jpg';
import image2 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06219.jpg';
import image3 from '../assets/gallery-assets/250428 Villa Orea/2. RESIZE/DSC06206.jpg';
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
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 }
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
                alt={t.about.images[item.id]} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-40 hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-start p-4">
                <p className="text-pure-white font-inter font-medium text-sm">
                  {t.about.images[item.id]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
            {t.about.details}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 