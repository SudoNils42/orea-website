import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import logoImage from '../assets/logo/fulllogo_transparent_nobuffer.png';
import iconOnly from '../assets/logo/icononly_transparent_nobuffer.png';
import instagramLogo from '../assets/logo/Instagram_icon.png.webp';
import facebookLogo from '../assets/logo/Facebook_logo_square.png';

// Import des logos de plateformes de réservation
import airbnbLogo from '../assets/booking-platforms/png/Airbnb_Logo_Bélo.svg.png';
import bookingLogo from '../assets/booking-platforms/png/Booking.com_logo2.png';
import marriottLogo from '../assets/booking-platforms/png/HomesAndVillas.svg';
import tripLogo from '../assets/booking-platforms/png/Trip.com_logo.svg.png';
import baliSuperHostLogo from '../assets/booking-platforms/png/BalisSuperHost.png';

const Footer = ({ openModal }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-6xl mx-auto">
          {/* Contact section */}
          <div>
            <h3 className="font-lora text-base text-gray-600 mb-2">{t.footer.contactTitle || "Contact"}</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-600 text-sm">Seminyak, Bali, Indonesia</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:villaoreabali@gmail.com" className="text-gray-600 hover:text-emerald transition-colors duration-300 text-sm">villaoreabali@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+41794583541" className="text-gray-600 hover:text-emerald transition-colors duration-300 text-sm">+41 79 458 35 41</a>
              </li>
            </ul>
          </div>
          
          {/* Réservez section */}
          <div className="md:text-center">
            <h3 className="font-lora text-base text-gray-600 mb-2">{t.footer.bookOn || "Réservez sur"}</h3>
            <div className="flex flex-wrap gap-2 md:justify-center">
              <a href="https://fr.airbnb.ch/rooms/1429323064798460748" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={airbnbLogo} alt="Airbnb" className="h-4" />
              </a>
              <a href="https://www.booking.com/hotel/id/villa-orea-by-balisuperhost.fr.html" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={bookingLogo} alt="Booking.com" className="h-4" />
              </a>
              <a href="https://us.trip.com/hotels/cityname-hotel-detail-128944828/hotelname/" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={tripLogo} alt="Trip.com" className="h-4" />
              </a>
              <a href="https://homes-and-villas.marriott.com/en/properties/40527181-seminyak-brand-new-villa-br-with-private-pool-in-seminyak" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={marriottLogo} alt="Marriott Homes & Villas" className="h-4" />
              </a>
              <a href="https://balisuperhost.guestybookings.com/en/properties/6833ee6140f34500124c6011" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={baliSuperHostLogo} alt="BaliSuperHost" className="h-4" />
              </a>
            </div>
          </div>

          {/* Suivez-nous section */}
          <div className="md:text-right">
            <h3 className="font-lora text-base text-gray-600 mb-2">{t.footer.followUs || "Suivez-nous"}</h3>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={instagramLogo} alt="Instagram" className="h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={facebookLogo} alt="Facebook" className="h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Barre de séparation et copyright */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
            <img src={iconOnly} alt="Villa Orea Icon" className="h-5 mr-2" />
            &copy; 2025{currentYear > 2025 ? `–${currentYear}` : ''} Villa Orea. {t.footer.rights}.
          </div>
          <div className="text-gray-500 text-xs">
            <span>
              {t.footer.designedWith || "Conçu avec"} <span className="text-red-500">❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 