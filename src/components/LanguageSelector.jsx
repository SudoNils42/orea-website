import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Composant pour la sélection de langue
const LanguageSelector = () => {
  const { currentLanguage, setLanguage, flags, languageNames } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le menu déroulant lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Gérer le changement de langue
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center py-1 px-1 sm:px-2 rounded-lg bg-emerald/20 hover:bg-emerald/30 transition-all duration-300 text-deep-black focus:outline-none border border-emerald/30"
      >
        <span className="text-base sm:text-lg">{flags[currentLanguage]}</span>
        <span className="hidden sm:inline sm:ml-1">{languageNames[currentLanguage]}</span>
        <svg 
          className={`hidden sm:block w-3 h-3 sm:w-4 sm:h-4 sm:ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-28 sm:w-40 rounded-lg shadow-md bg-white border border-emerald/20 overflow-hidden transition-all duration-300 right-0">
          <div className="py-1">
            {Object.keys(flags).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full text-left px-2 sm:px-4 py-2 flex items-center space-x-2 sm:space-x-3 hover:bg-emerald/10 transition-all duration-300 ${
                  currentLanguage === lang ? 'text-emerald font-medium' : 'text-deep-black'
                }`}
              >
                <span className="text-base sm:text-lg">{flags[lang]}</span>
                <span className="text-sm sm:text-base">{languageNames[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 