import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    guests: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  useEffect(() => {
    // Initialiser AOS si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Le nom est requis' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Email invalide' : '';
      case 'dates':
        return value.trim() === '' ? 'Les dates sont requises' : '';
      case 'guests':
        return value.trim() === '' ? 'Le nombre de personnes est requis' : '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      dates: validateField('dates', formData.dates),
      guests: validateField('guests', formData.guests)
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simuler l'envoi du formulaire
      setToastMessage('Votre demande a été envoyée avec succès !');
      setToastType('success');
      setShowToast(true);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        dates: '',
        guests: '',
        message: ''
      });
      
      // Cacher le toast après 3 secondes
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      setToastMessage('Veuillez corriger les erreurs dans le formulaire.');
      setToastType('error');
      setShowToast(true);
      
      // Cacher le toast après 3 secondes
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-pure-white dark:bg-deep-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="mb-4">Tarifs et Réservation</h2>
            <p className="font-lora text-lg max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de tarif */}
            <div 
              className="bg-gradient-to-br from-emerald/10 to-pale-gold/10 dark:from-emerald/20 dark:to-pale-gold/20 p-8 rounded-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4">À partir de 350€/nuit</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Séjour minimum de 3 nuits</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Capacité maximale de 6 personnes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Service de ménage inclus tous les 2 jours</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transfert aéroport disponible (supplément)</span>
                </li>
              </ul>
              <p className="font-lora italic text-sm mb-4">
                * Les tarifs peuvent varier selon la saison. Contactez-nous pour un devis personnalisé.
              </p>
              <a 
                href="#booking-form" 
                className="btn btn-primary w-full text-center"
              >
                Demander des informations
              </a>
            </div>

            {/* Formulaire de demande */}
            <div 
              id="booking-form" 
              className="bg-pure-white dark:bg-deep-black border border-gray-200 dark:border-gray-800 p-8 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4">Demande d'informations</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${formErrors.name ? 'border-red-500' : ''}`}
                    placeholder="Votre nom"
                    aria-describedby={formErrors.name ? "name-error" : ""}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${formErrors.email ? 'border-red-500' : ''}`}
                    placeholder="votre@email.com"
                    aria-describedby={formErrors.email ? "email-error" : ""}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="dates" className="form-label">Dates souhaitées</label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className={`form-input ${formErrors.dates ? 'border-red-500' : ''}`}
                      placeholder="JJ/MM/AAAA - JJ/MM/AAAA"
                      aria-describedby={formErrors.dates ? "dates-error" : ""}
                    />
                    {formErrors.dates && (
                      <p id="dates-error" className="text-red-500 text-sm mt-1">{formErrors.dates}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="form-label">Nombre de personnes</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`form-input ${formErrors.guests ? 'border-red-500' : ''}`}
                      placeholder="Nombre de personnes"
                      min="1"
                      max="6"
                      aria-describedby={formErrors.guests ? "guests-error" : ""}
                    />
                    {formErrors.guests && (
                      <p id="guests-error" className="text-red-500 text-sm mt-1">{formErrors.guests}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">Message (optionnel)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[100px]"
                    placeholder="Questions ou demandes spéciales"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`toast ${toastType === 'success' ? 'toast-success' : 'toast-error'}`}
        >
          {toastMessage}
        </motion.div>
      )}
    </section>
  );
};

export default Pricing; 