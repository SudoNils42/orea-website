import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import airbnbLogo from '../assets/booking-platforms/png/Airbnb_Logo_Bélo.svg.png';
import bookingLogo from '../assets/booking-platforms/png/Booking.com_logo2.png';
import marriottLogo from '../assets/booking-platforms/png/HomesAndVillas.svg';
import tripLogo from '../assets/booking-platforms/png/Trip.com_logo.svg.png';
import baliSuperHostLogo from '../assets/booking-platforms/png/BalisSuperHost.png';

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
      url: 'https://fr.airbnb.ch/rooms/1429323064798460748?_set_bev_on_new_domain=1764757889_EAYmQ3NWViMGQ1ZD&set_everest_cookie_on_new_domain=1764757889.EAOGQ5MTk4MDhlN2ZlNz.8qTjOo8pz-oYO-l98N1KrbQO504EhKDOQEoQ7Z8BSrE&source_impression_id=p3_1768755396_P3u2qSKHnYEjJWUO',
      alt: 'Airbnb Logo'
    },
    {
      name: 'Booking.com',
      logo: bookingLogo,
      url: 'https://www.booking.com/hotel/id/villa-orea-by-balisuperhost.fr.html?label=gen173nr-10CAsoaEIbdmlsbGEtb3JlYS1ieS1iYWxpc3VwZXJob3N0SAlYBGgsiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuALUobTLBsACAdICJGZiZGMxMWQ0LWIxOGEtNGJhMC04NjRhLTVmOTUzZWFhOTVkZdgCAeACAQ&sid=d3f57571c168e6a193ae1d6875e65d47&dist=0&keep_landing=1&sb_price_type=total&type=total&',
      alt: 'Booking.com Logo'
    },
    {
      name: 'Trip.com',
      logo: tripLogo,
      url: 'https://us.trip.com/hotels/cityname-hotel-detail-128944828/hotelname/',
      alt: 'Trip.com Logo'
    },
    {
      name: 'Marriott',
      logo: marriottLogo,
      url: 'https://homes-and-villas.marriott.com/en/properties/40527181-seminyak-brand-new-villa-br-with-private-pool-in-seminyak?gallery_view_enabled=false',
      alt: 'Marriott Homes & Villas Logo'
    },
    {
      name: 'BaliSuperHost',
      logo: baliSuperHostLogo,
      url: 'https://balisuperhost.guestybookings.com/en/properties/6833ee6140f34500124c6011',
      alt: 'BaliSuperHost Logo'
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-pure-white">
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
                      alt={platform.alt} 
                      className={`h-auto w-auto object-contain 
                        ${platform.name === 'Marriott' ? 'max-h-10' : platform.name === 'BaliSuperHost' ? 'max-h-14' : 'max-h-12'} 
                        ${platform.name === 'Airbnb' ? 'max-w-[160px]' : platform.name === 'BaliSuperHost' ? 'max-w-[180px]' : 'max-w-[200px]'}
                      `}
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