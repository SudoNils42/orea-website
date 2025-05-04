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
        className="flex items-center space-x-1 py-1 px-2 rounded-lg bg-deep-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 text-white focus:outline-none"
      >
        <span className="text-lg">{flags[currentLanguage]}</span>
        <span className="hidden sm:inline">{languageNames[currentLanguage]}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 rounded-lg shadow-lg bg-deep-black bg-opacity-90 border border-gold border-opacity-30 overflow-hidden transition-all duration-300">
          <div className="py-1">
            {Object.keys(flags).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full text-left px-4 py-2 flex items-center space-x-3 hover:bg-gold hover:bg-opacity-20 transition-all duration-300 ${
                  currentLanguage === lang ? 'text-gold' : 'text-white'
                }`}
              >
                <span className="text-lg">{flags[lang]}</span>
                <span>{languageNames[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 