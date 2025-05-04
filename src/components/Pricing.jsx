import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import airbnbLogo from '../assets/booking-platforms/airbnb-logo.svg';
import bookingLogo from '../assets/booking-platforms/booking-logo.svg';
import agodaLogo from '../assets/booking-platforms/agoda-logo.svg';
import tripLogo from '../assets/booking-platforms/trip-logo.svg';

const Pricing = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  // Les liens vers les plateformes de réservation
  const bookingPlatforms = [
    {
      name: 'Airbnb',
      logo: airbnbLogo,
      url: 'https://www.airbnb.com/rooms/1234567', // À remplacer par votre vrai lien Airbnb
      alt: 'Airbnb Logo'
    },
    {
      name: 'Booking.com',
      logo: bookingLogo,
      url: 'https://www.booking.com/hotel/id/villa-orea-seminyak.html', // À remplacer par votre vrai lien Booking
      alt: 'Booking.com Logo'
    },
    {
      name: 'Agoda',
      logo: agodaLogo,
      url: 'https://www.agoda.com/villa-orea/hotel/bali-id.html', // À remplacer par votre vrai lien Agoda
      alt: 'Agoda Logo'
    },
    {
      name: 'Trip.com',
      logo: tripLogo,
      url: 'https://www.trip.com/hotels/detail/?hotelid=12345678', // À remplacer par votre vrai lien Trip.com
      alt: 'Trip.com Logo'
    }
  ];

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
            {/* Plateformes de réservation */}
            <div 
              className="bg-gradient-to-br from-emerald/10 to-pale-gold/10 dark:from-emerald/20 dark:to-pale-gold/20 p-8 rounded-lg"
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
                    className="flex items-center justify-between p-4 rounded-lg border border-emerald/20 dark:border-pale-gold/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <img 
                        src={platform.logo} 
                        alt={platform.alt} 
                        className="h-10 w-auto object-contain"
                      />
                      <span className="ml-4 font-semibold">{platform.name}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald dark:text-pale-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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