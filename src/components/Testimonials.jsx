import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage]?.testimonials || {
    title: "Témoignages",
    intro: "Ce que nos clients disent de leur expérience.",
    prevLabel: "Témoignage précédent",
    nextLabel: "Témoignage suivant",
    goToLabel: "Aller au témoignage",
    items: [
      {
        id: 1,
        name: 'Sophie et Pierre',
        location: 'Paris, France',
        text: 'Une villa exceptionnelle ! Nous avons adoré notre séjour à Seminyak. Le personnel était attentionné et la piscine privée était parfaite pour se détendre.'
      },
      {
        id: 2,
        name: 'James et Emma',
        location: 'Londres, Royaume-Uni',
        text: 'Un véritable havre de paix au cœur de Bali. Villa Orea offre un mélange parfait de luxe et d\'authenticité. Nous reviendrons certainement !'
      },
      {
        id: 3,
        name: 'Alessandro et Maria',
        location: 'Rome, Italie',
        text: 'Séjour inoubliable dans un cadre idyllique. La villa est magnifiquement décorée et idéalement située. Une expérience balinaise authentique.'
      }
    ]
  };

  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }

    // Rotation automatique des témoignages
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextTestimonial = () => {
    if (!t.items || t.items.length === 0) return;
    setDirection(1);
    setCurrent((current + 1) % t.items.length);
  };

  const prevTestimonial = () => {
    if (!t.items || t.items.length === 0) return;
    setDirection(-1);
    setCurrent((current - 1 + t.items.length) % t.items.length);
  };

  // Si aucun témoignage n'est disponible, ne pas afficher la section
  if (!t.items || t.items.length === 0) {
    return null;
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gray-50 text-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="mb-3 md:mb-4 text-deep-black">{t.title}</h2>
          <p className="font-lora text-base md:text-lg max-w-2xl mx-auto mb-4 md:mb-6 text-gray-700">
            {t.intro}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up">
          {/* Flèches de navigation (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label={t.prevLabel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label={t.nextLabel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carrousel de témoignages */}
          <div className="overflow-hidden relative min-h-[350px] sm:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white shadow-lg border border-gray-200 p-6 md:p-10 rounded-lg text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4 md:mb-6">
                      <svg className="mx-auto h-8 w-8 md:h-10 md:w-10 text-pale-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <blockquote className="font-lora text-base md:text-lg lg:text-xl italic text-gray-700 mb-6 md:mb-8">
                      {t.items[current].text}
                    </blockquote>
                  </div>
                  <div className="mt-auto">
                    <p className="font-inter font-bold text-emerald">{t.items[current].name}</p>
                    <p className="text-sm text-gray-500">{t.items[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs (mobile et desktop) et flèches de navigation mobile sur la même ligne */}
          <div className="flex justify-between items-center mt-8">
            {/* Bouton précédent (mobile) */}
            <button
              onClick={prevTestimonial}
              className="md:hidden bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-emerald transition-colors duration-300"
              aria-label={t.prevLabel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicateurs */}
            <div className="flex justify-center space-x-3">
              {t.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`${t.goToLabel} ${index + 1}`}
                  aria-current={index === current ? 'true' : 'false'}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-pale-gold' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Bouton suivant (mobile) */}
            <button
              onClick={nextTestimonial}
              className="md:hidden bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-emerald transition-colors duration-300"
              aria-label={t.nextLabel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 