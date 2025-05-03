import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqItems = [
    {
      id: 1,
      question: "Puis-je organiser des événements dans la villa ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      id: 2,
      question: "Le service de ménage est-il inclus dans le prix ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      id: 3,
      question: "Y a-t-il un service de conciergerie disponible ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      id: 4,
      question: "Comment se déroule le check-in et le check-out ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      id: 5,
      question: "La villa est-elle adaptée aux enfants ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    }
  ];

  // Filtrer les questions en fonction de la recherche
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-pure-white to-gray-50 dark:from-deep-black dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="mb-4">Questions Fréquentes</h2>
            <p className="font-lora text-lg max-w-2xl mx-auto mb-8">
              Trouvez les réponses à vos questions les plus courantes ci-dessous.
            </p>
            
            {/* Barre de recherche */}
            <div className="relative max-w-md mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald dark:focus:ring-pale-gold bg-white dark:bg-gray-800 text-deep-black dark:text-pure-white pr-10"
                aria-label="Rechercher une question"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Accordéon */}
          <div data-aos="scale-up" className="space-y-2">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <div key={item.id} className="faq-item rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <button
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-emerald dark:text-pale-gold"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p>Aucun résultat trouvé pour "{searchQuery}"</p>
                <button 
                  className="mt-4 text-emerald dark:text-pale-gold underline"
                  onClick={() => setSearchQuery('')}
                >
                  Réinitialiser la recherche
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="font-lora text-lg mb-4">
              Vous avez d'autres questions ?
            </p>
            <a 
              href="#contact" 
              className="btn btn-outline inline-block"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 