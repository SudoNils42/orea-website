import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import { bookingPlatforms } from '../config/site';

const Pricing = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  return (
    <section id="pricing" className="py-10 md:py-14 bg-pure-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
            <h2 className="mb-4">{t.pricing.title}</h2>
            <p className="font-lora text-lg max-w-2xl mx-auto mb-8">
              {t.pricing.intro}
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            {/* Plateformes de réservation */}
            <div 
              className="bg-gradient-to-br from-emerald/10 to-pale-gold/10 p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{t.pricing.bookOnline}</h3>
              
              <div className="space-y-6">
                {bookingPlatforms.map((platform) => (
                  <a 
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-5 px-4 rounded-lg bg-white border border-emerald/10 hover:border-emerald/30 hover:shadow-md transition-all duration-300 w-full h-[90px]"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.pricingAlt}
                      className={platform.pricingLogoClassName}
                    />
                  </a>
                ))}
              </div>
              
              <p className="font-lora italic text-sm mt-6 mb-4 text-center">
                {t.pricing.notice}
              </p>
              <a 
                href="#contact" 
                className="btn btn-primary w-full text-center"
              >
                {t.pricing.contactButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 
