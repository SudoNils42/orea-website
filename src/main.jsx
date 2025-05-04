import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// Initialisation de AOS pour les animations au défilement
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,
    mirror: false
  });
});

// Forcer le mode clair en retirant toujours la classe 'dark'
document.documentElement.classList.remove('dark');

// Ignorer les préférences du système pour toujours rester en mode clair
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  document.documentElement.classList.remove('dark');
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 