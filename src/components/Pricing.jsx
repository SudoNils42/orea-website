import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

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
    <section id="pricing" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="mb-4">{t.pricing.title}</h2>
            <p className="font-lora text-lg max-w-2xl mx-auto mb-8">
              {t.pricing.intro}
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            {/* Informations de tarif */}
            <div 
              className="bg-gradient-to-br from-emerald/10 to-pale-gold/10 dark:from-emerald/20 dark:to-pale-gold/20 p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4">{t.pricing.priceFrom}</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.pricing.minStay}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.pricing.capacity}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.pricing.cleaning}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.pricing.breakfast}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.pricing.airport}</span>
                </li>
              </ul>
              <p className="font-lora italic text-sm mb-4">
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