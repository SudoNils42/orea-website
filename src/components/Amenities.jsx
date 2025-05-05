import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Amenities = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  // État pour suivre les commodités ouvertes
  const [openAmenities, setOpenAmenities] = useState({});
  
  // Fonction pour basculer l'état d'une commodité
  const toggleAmenity = (id) => {
    setOpenAmenities(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const amenitiesData = {
    wifi: {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    ac: {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    pool: {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    kitchen: {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    tv: {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    cleaning: {
      id: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    garden: {
      id: 7,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    beds: {
      id: 8,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0a2 2 0 100-4H4a2 2 0 100 4h16zM4 8h16M4 16h16" />
        </svg>
      )
    },
    location: {
      id: 9,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  };

  // Construire la liste des commodités avec les traductions
  const amenities = [
    {
      ...amenitiesData.wifi,
      name: t.amenities.wifi.name,
      description: t.amenities.wifi.description
    },
    {
      ...amenitiesData.ac,
      name: t.amenities.ac.name,
      description: t.amenities.ac.description
    },
    {
      ...amenitiesData.pool,
      name: t.amenities.pool.name,
      description: t.amenities.pool.description
    },
    {
      ...amenitiesData.kitchen,
      name: t.amenities.kitchen.name,
      description: t.amenities.kitchen.description
    },
    {
      ...amenitiesData.tv,
      name: t.amenities.tv.name,
      description: t.amenities.tv.description
    },
    {
      ...amenitiesData.cleaning,
      name: t.amenities.cleaning.name,
      description: t.amenities.cleaning.description
    },
    {
      ...amenitiesData.garden,
      name: t.amenities.garden.name,
      description: t.amenities.garden.description
    },
    {
      ...amenitiesData.beds,
      name: t.amenities.beds.name,
      description: t.amenities.beds.description
    },
    {
      ...amenitiesData.location,
      name: t.amenities.location.name,
      description: t.amenities.location.description
    }
  ];

  return (
    <section id="amenities" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white text-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-deep-black mb-4">{t.amenities.title}</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto text-gray-700">
            {t.amenities.intro}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {amenities.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-gray-50 rounded-lg shadow-md p-6 border border-emerald/10 transition-all duration-300 hover:shadow-emerald/20 hover:border-emerald/30 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => toggleAmenity(item.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-emerald">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-2 text-deep-black group text-center">
                  <span className={`transition-colors duration-300 ${openAmenities[item.id] ? 'text-emerald' : ''}`}>{item.name}</span>
                </h3>
                
                {/* Ligne décorative conditionnelle */}
                {openAmenities[item.id] && (
                  <div className="w-12 h-1 bg-pale-gold rounded-full mb-4 transition-all duration-300"></div>
                )}
                
                {/* Description conditionnelle */}
                <div 
                  id={`amenity-content-${item.id}`}
                  className={`font-lora text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
                    openAmenities[item.id] 
                    ? 'max-h-[200px] opacity-100 pt-2 pb-4' 
                    : 'max-h-0 opacity-0 pt-0 pb-0'
                  }`}
                >
                  <p className="transition-all duration-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities; 