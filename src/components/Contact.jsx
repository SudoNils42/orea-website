import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].contact || translations.fr.contact;

  // Configuration de l'email de destination
  const RECIPIENT_EMAIL = t.info.email.value; // Utilise l'email défini dans les traductions

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
        return value.trim() === '' ? t.form.nameError : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? t.form.emailError : '';
      case 'subject':
        return value.trim() === '' ? t.form.subjectError : '';
      case 'message':
        return value.trim() === '' ? t.form.messageError : '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Configuration de l'email de destination
      const recipientEmail = t.info.email.value;
      
      // Construire l'URL mailto avec tous les paramètres
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `De: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      // Ouvrir le client de messagerie de l'utilisateur
      window.location.href = mailtoUrl;
      
      // Afficher un message de succès
      setToastMessage(t.form.successMessage);
      setToastType('success');
      setShowToast(true);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Arrêter l'indicateur de soumission
      setIsSubmitting(false);
      
      // Cacher le toast après 3 secondes
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      setToastMessage(t.form.errorMessage);
      setToastType('error');
      setShowToast(true);
      
      // Cacher le toast après 3 secondes
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-pure-white to-gray-50 dark:from-deep-black dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-4">{t.title}</h2>
          <p className="font-lora text-lg max-w-2xl mx-auto mb-8">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div 
            className="bg-pure-white dark:bg-deep-black border border-gray-200 dark:border-gray-800 p-8 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-6">{t.form.title}</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="form-label">{t.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${formErrors.name ? 'border-red-500' : ''}`}
                    placeholder={t.form.namePlaceholder}
                    aria-describedby={formErrors.name ? "name-error" : ""}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">{t.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${formErrors.email ? 'border-red-500' : ''}`}
                    placeholder={t.form.emailPlaceholder}
                    aria-describedby={formErrors.email ? "email-error" : ""}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="form-label">{t.form.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${formErrors.subject ? 'border-red-500' : ''}`}
                  placeholder={t.form.subjectPlaceholder}
                  aria-describedby={formErrors.subject ? "subject-error" : ""}
                />
                {formErrors.subject && (
                  <p id="subject-error" className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="form-label">{t.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input min-h-[150px] ${formErrors.message ? 'border-red-500' : ''}`}
                  placeholder={t.form.messagePlaceholder}
                  aria-describedby={formErrors.message ? "message-error" : ""}
                ></textarea>
                {formErrors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {t.form.submitButton}
              </button>
            </form>
          </div>
          
          {/* Informations de contact et carte */}
          <div data-aos="fade-left">
            <div className="bg-pure-white dark:bg-deep-black border border-gray-200 dark:border-gray-800 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">{t.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">{t.info.email.label}</p>
                    <a href={`mailto:${t.info.email.value}`} className="text-emerald dark:text-pale-gold hover:underline">{t.info.email.value}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">{t.info.phone.label}</p>
                    <a href={`tel:${t.info.phone.value.replace(/\s/g, '')}`} className="text-emerald dark:text-pale-gold hover:underline">{t.info.phone.value}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">{t.info.address.label}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t.info.address.value}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald dark:text-pale-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">{t.info.whatsapp.label}</p>
                    <a href={`https://wa.me/${t.info.whatsapp.value.replace(/\+|\s/g, '')}`} className="text-emerald dark:text-pale-gold hover:underline">{t.info.whatsapp.value}</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carte (placeholder) */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 glass-effect">
                <div className="absolute inset-0 bg-emerald opacity-10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-deep-black dark:text-pure-white opacity-40 font-inter font-medium">
                  {t.info.map}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast de notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center ${
            toastType === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          <span className="text-white">{toastMessage}</span>
          <button
            onClick={() => setShowToast(false)}
            className="ml-3 text-white opacity-70 hover:opacity-100"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Contact; 