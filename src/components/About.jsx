import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import img4044 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4044-HDR.jpg';
import dsc06219 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06219.jpg';
import dsc06206 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06206.jpg';
import dsc06045 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06045.jpg';

const About = ({ openModal }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const images = [
    { id: 1, src: img4044 },
    { id: 2, src: dsc06219 },
    { id: 3, src: dsc06206 },
    { id: 4, src: dsc06045 }
  ];

  return (
    <section id="about" className="pt-24 pb-10 md:pt-28 md:pb-12 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10" data-aos="fade-up">
          <h2 className="mb-6">{t.about.title}</h2>
          <p className="font-lora text-lg mb-8">
            {t.about.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-10">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image.src}
                alt={t.about.images[image.id]}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-deep-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="font-lora text-lg max-w-2xl mx-auto">
            {t.about.details}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 
