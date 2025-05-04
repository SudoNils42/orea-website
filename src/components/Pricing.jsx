import React from 'react';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import airbnbLogo from '../assets/booking-platforms/airbnb-logo.svg';
import bookingLogo from '../assets/booking-platforms/booking-logo.svg';
import agodaLogo from '../assets/booking-platforms/agoda-logo.svg';

const Pricing = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].pricing;
  
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="title-font dark:text-white text-center mb-12" data-aos="fade-up">{t.title}</h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2 md:border-r dark:border-gray-700" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-primary mb-4">{t.pricePerNight}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t.maxOccupancy}</p>
              <ul className="space-y-3">
                {t.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/20 p-1 text-primary mr-3">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{t.notice}</p>
            </div>
            <div className="p-8 md:w-1/2 bg-gray-50 dark:bg-gray-900" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-primary mb-4">{t.booking.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t.booking.description}</p>
              
              <div className="space-y-4">
                <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                   data-aos="zoom-in" data-aos-delay="100">
                  <img src={airbnbLogo} alt="Airbnb" className="h-8 mr-3" />
                  <span className="font-medium text-gray-800 dark:text-white">{t.booking.airbnb}</span>
                </a>
                
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                   data-aos="zoom-in" data-aos-delay="200">
                  <img src={bookingLogo} alt="Booking.com" className="h-8 mr-3" />
                  <span className="font-medium text-gray-800 dark:text-white">{t.booking.booking}</span>
                </a>
                
                <a href="https://www.agoda.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                   data-aos="zoom-in" data-aos-delay="300">
                  <img src={agodaLogo} alt="Agoda" className="h-8 mr-3" />
                  <span className="font-medium text-gray-800 dark:text-white">{t.booking.agoda}</span>
                </a>
              </div>
              
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{t.services}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 