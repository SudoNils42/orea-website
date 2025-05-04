import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Footer = ({ openModal }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-pure-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et tagline */}
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <a href="#" className="font-inter font-black text-xl mb-2">
                <span className="text-emerald">Villa</span>
                <span className="text-pale-gold">Orea</span>
              </a>
              <p className="text-sm text-gray-400 mb-4">
                Seminyak, Bali, Indonesia
              </p>
              {/* Social Media */}
              <div className="flex space-x-4 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.0002 0C5.37225 0 0.000244141 5.37201 0.000244141 12C0.000244141 18.6282 5.37225 24 12.0002 24C18.6284 24 24.0002 18.6282 24.0002 12C24.0002 5.37201 18.6284 0 12.0002 0ZM14.7257 18.7691C14.7257 19.6451 13.9966 20.3484 13.1232 20.3484C12.643 20.3484 12.2097 20.1287 11.915 19.7767C11.6205 20.1287 11.1872 20.3484 10.7059 20.3484C9.83254 20.3484 9.10351 19.6451 9.10351 18.7691V12.6162L8.20294 14.0822C7.79519 14.7471 6.90479 14.9513 6.2532 14.5504C5.58929 14.1418 5.37194 13.2263 5.77969 12.5615L8.72029 7.72C9.28191 6.80025 10.2654 6.25925 11.3207 6.25925H12.5054C13.5606 6.25925 14.5441 6.80025 15.1058 7.72L18.0464 12.5615C18.4541 13.2263 18.2367 14.1418 17.573 14.5504C16.9212 14.9513 16.0308 14.7471 15.6233 14.0822L14.7257 12.6162V18.7691Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="md:col-span-1">
            <h3 className="font-lora text-lg text-pure-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.about}</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.amenities}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.gallery}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.faq}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.testimonials}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.pricing}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-lora text-lg text-pure-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-pale-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-400">Jl. Petitenget No.XX, <br />Seminyak, Kuta Utara, <br />Bali, Indonesia</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-pale-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@villaorea.com" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">info@villaorea.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-pale-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+6281234567890" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">+62 812 3456 7890</a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-1">
            <h3 className="font-lora text-lg text-pure-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.footer.privacyPolicy}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.footer.terms}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pale-gold transition-colors duration-300">{t.footer.cookiePolicy}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Villa Orea. {t.footer.rights}.
          </div>
          <div className="text-gray-500 text-xs">
            <span className="mr-2">
              Designed with ❤️ for luxury experiences
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 