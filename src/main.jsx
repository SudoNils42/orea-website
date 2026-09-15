import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 650,
    easing: 'ease-out',
    once: true,
    mirror: false
  });
});

document.documentElement.classList.remove('dark');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  document.documentElement.classList.remove('dark');
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 
