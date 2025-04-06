import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importiert die Haupt-App-Komponente
import './index.css'; // WICHTIG: Importiert Tailwind Stile

ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode hilft, potenzielle Probleme in der App zu finden (nur im Entwicklungsmodus)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);