import { createContext, useState, useContext, useEffect } from 'react';

// Drapeaux pour les langues (codes Unicode)
export const FLAGS = {
  fr: "🇫🇷",
  en: "🇬🇧",
  zh: "🇨🇳",
  es: "🇪🇸",
  id: "🇮🇩",
  de: "🇩🇪",
  ru: "🇷🇺"
};

// Noms des langues
export const LANGUAGE_NAMES = {
  fr: "Français",
  en: "English",
  zh: "中文",
  es: "Español",
  id: "Bahasa Indonesia",
  de: "Deutsch",
  ru: "Русский"
};

// Création du contexte
const LanguageContext = createContext();

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => useContext(LanguageContext);

// Fournisseur du contexte de langue
export const LanguageProvider = ({ children }) => {
  // État pour la langue actuelle (par défaut: français)
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  // Charger la langue enregistrée dans localStorage au chargement
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && Object.keys(FLAGS).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Fonction pour changer de langue
  const setLanguage = (newLanguage) => {
    if (Object.keys(FLAGS).includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      
      // Modifier l'attribut lang du HTML pour l'accessibilité
      document.documentElement.lang = newLanguage;
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setLanguage, 
      flags: FLAGS, 
      languageNames: LANGUAGE_NAMES 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 