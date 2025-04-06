/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Ermöglicht Dark Mode Umschaltung via Klasse im HTML
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scannt alle JS/JSX/TS/TSX Dateien in src
    ],
    theme: {
      extend: {
         fontFamily: {
           sans: ['Inter', 'sans-serif'], // Setzt Inter als Standardschrift
         },
         // Hier später ggf. Farbpalette erweitern
      },
    },
    plugins: [
        require('@tailwindcss/forms'), // Fügt Basis-Styling für Formulare hinzu
    ],
  }