import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { currentLanguage } = useLanguage();
  
  // Récupération des traductions en fonction de la langue actuelle
  const t = translations[currentLanguage].testimonials || translations.fr.testimonials;

  // Utiliser les témoignages des traductions
  const testimonials = [
    {
      id: 1,
      name: t.customer1.name,
      location: t.customer1.location,
      text: t.customer1.text
    },
    {
      id: 2,
      name: t.customer2.name,
      location: t.customer2.location,
      text: t.customer2.text
    },
    {
      id: 3,
      name: t.customer3.name,
      location: t.customer3.location,
      text: t.customer3.text
    },
    {
      id: 4,
      name: t.customer4.name,
      location: t.customer4.location,
      text: t.customer4.text
    },
    {
      id: 5,
      name: t.customer5.name,
      location: t.customer5.location,
      text: t.customer5.text
    }
  ];

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
    setDirection(1);
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 text-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4 text-deep-black">{t.title}</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto mb-6 text-gray-700">
            {t.intro}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up">
          {/* Flèches de navigation (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 lg:-translate-x-20 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 lg:translate-x-20 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carrousel de témoignages */}
          <div className="overflow-hidden relative flex items-center" style={{ minHeight: '550px' }}>
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
                className="absolute w-full flex items-center justify-center"
                style={{ minHeight: '550px' }}
              >
                <div className="bg-white shadow-lg border border-gray-200 p-5 md:p-10 rounded-lg text-center w-full">
                  <div className="mb-3 md:mb-6">
                    <svg className="mx-auto h-7 w-7 md:h-10 md:w-10 text-pale-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <blockquote className="font-lora text-sm md:text-base lg:text-lg italic text-gray-700 mb-5 md:mb-8 leading-relaxed max-h-[380px] overflow-y-auto">
                    {testimonials[current].text}
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-inter font-bold text-emerald">{testimonials[current].name}</p>
                    <p className="text-xs md:text-sm text-gray-500">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs + flèches (mobile, alignés sur la même ligne) */}
          <div className="md:hidden flex items-center justify-center mt-0 space-x-12">
            <button
              onClick={prevTestimonial}
              className="bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-emerald transition-colors duration-300"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`Aller au témoignage ${index + 1}`}
                  aria-current={index === current ? 'true' : 'false'}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-pale-gold' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-emerald transition-colors duration-300"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicateurs (desktop) */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Aller au témoignage ${index + 1}`}
                aria-current={index === current ? 'true' : 'false'}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? 'bg-pale-gold' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 