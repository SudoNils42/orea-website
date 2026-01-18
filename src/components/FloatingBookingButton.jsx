import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const FloatingBookingButton = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-white hover:bg-gray-50 text-emerald border-2 border-emerald px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 font-inter font-medium text-sm backdrop-blur-sm"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={t.floatingButton?.bookNow || "Réserver dès maintenant"}
    >
      <span className="hidden sm:inline">
        {t.floatingButton?.bookNow || "Réserver dès maintenant"}
      </span>
      <span className="sm:hidden">
        {t.floatingButton?.book || "Réserver"}
      </span>
      <svg 
        className="w-4 h-4 ml-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </motion.button>
  );
};

export default FloatingBookingButton; 