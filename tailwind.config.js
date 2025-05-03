/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pure-white': '#ffffff',
        'deep-black': '#000000',
        'emerald': '#04593F',
        'pale-gold': '#E6C67A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      backdropBlur: {
        'glass': '10px',
      }
    }
  },
  plugins: [],
} 