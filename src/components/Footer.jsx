import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import logoImage from '../assets/logo/fulllogo_transparent_nobuffer.png';
import iconOnly from '../assets/logo/icononly_transparent_nobuffer.png';
import instagramLogo from '../assets/logo/Instagram_icon.png.webp';
import facebookLogo from '../assets/logo/Facebook_logo_(square).png';

// Import des logos de plateformes de réservation
import airbnbLogo from '../assets/booking-platforms/png/Airbnb_Logo_Bélo.svg.png';
import bookingLogo from '../assets/booking-platforms/png/Booking.com_logo2.png';
import agodaLogo from '../assets/booking-platforms/png/Agoda_transparent_logo.png';
import tripLogo from '../assets/booking-platforms/png/Trip.com_logo.svg.png';

const Footer = ({ openModal }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Première colonne - Réseaux sociaux et Réservations */}
          <div className="md:col-span-4">
            <div className="flex flex-col">              
              {/* Suivez-nous section */}
              <div className="mb-6">
                <h3 className="font-lora text-lg text-deep-black mb-4">Suivez-nous sur</h3>
                <div className="flex space-x-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" className="w-8 h-8 rounded-sm" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" className="w-8 h-8 rounded-sm" />
                  </a>
                </div>
              </div>
              
              {/* Réservez section */}
              <div>
                <h3 className="font-lora text-lg text-deep-black mb-4">Réservez sur</h3>
                <div className="flex flex-col space-y-3">
                  <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 w-32">
                    <img src={airbnbLogo} alt="Airbnb" className="h-6" />
                  </a>
                  <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 w-32">
                    <img src={bookingLogo} alt="Booking.com" className="h-6" />
                  </a>
                  <a href="https://agoda.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 w-32">
                    <img src={agodaLogo} alt="Agoda" className="h-6" />
                  </a>
                  <a href="https://trip.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 w-32">
                    <img src={tripLogo} alt="Trip.com" className="h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième colonne - Contact */}
          <div className="md:col-span-4">
            <h3 className="font-lora text-lg text-deep-black mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-600">Jl. Petitenget No.XX, <br />Seminyak, Kuta Utara, <br />Bali, Indonesia</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@villaorea.com" className="text-gray-600 hover:text-emerald transition-colors duration-300">info@villaorea.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+6281234567890" className="text-gray-600 hover:text-emerald transition-colors duration-300">+62 812 3456 7890</a>
              </li>
            </ul>
          </div>

          {/* Troisième colonne - Legal */}
          <div className="md:col-span-4">
            <h3 className="font-lora text-lg text-deep-black mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors duration-300">{t.footer.privacyPolicy}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors duration-300">{t.footer.terms}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors duration-300">{t.footer.cookiePolicy}</a></li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation et copyright */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
            <img src={iconOnly} alt="Villa Orea Icon" className="h-5 mr-2" />
            &copy; {currentYear} Villa Orea. {t.footer.rights}.
          </div>
          <div className="text-gray-500 text-xs">
            <span className="mr-2">
              Designed with <span className="text-red-500">❤️</span> for luxury experiences
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 