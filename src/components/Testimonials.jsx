import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Témoignages fictifs
  const testimonials = [
    {
      id: 1,
      name: 'Sophie et Pierre',
      location: 'Paris, France',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'
    },
    {
      id: 2,
      name: 'James et Emma',
      location: 'Londres, Royaume-Uni',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'
    },
    {
      id: 3,
      name: 'Alessandro et Maria',
      location: 'Rome, Italie',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'
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
    <section className="py-16 md:py-24 bg-gray-50 text-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4 text-deep-black">Témoignages</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto mb-6 text-gray-700">
            Ce que nos clients disent de leur expérience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up">
          {/* Flèches de navigation (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-emerald transition-colors duration-300 z-10"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carrousel de témoignages */}
          <div className="overflow-hidden relative min-h-[280px]">
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
                <div className="bg-gradient-to-br from-emerald/20 to-pure-white/5 p-8 md:p-10 rounded-lg text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6">
                      <svg className="mx-auto h-10 w-10 text-pale-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <blockquote className="font-lora text-lg md:text-xl italic text-gray-200 mb-8">
                      {testimonials[current].text}
                    </blockquote>
                  </div>
                  <div className="mt-auto">
                    <p className="font-inter font-bold text-pale-gold">{testimonials[current].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs (mobile et desktop) */}
          <div className="flex justify-center mt-8 space-x-3">
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

          {/* Flèches de navigation (mobile) */}
          <div className="flex justify-between mt-8 md:hidden">
            <button
              onClick={prevTestimonial}
              className="bg-emerald bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-emerald transition-colors duration-300"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 