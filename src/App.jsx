import React from 'react';
// Importiere Provider später hier
// import { AuthProvider } from './contexts/AuthContext';
// import { AppDataProvider } from './contexts/AppDataContext';

// Temporäre Platzhalter, bis die echten Provider existieren
const AuthProvider = ({ children }) => <>{children}</>;
const AppDataProvider = ({ children }) => <>{children}</>;
const useAuth = () => ({ user: null, loading: false }); // Platzhalter-Hook

function AppContent() {
  // Hier kommt später die Logik für Login/Dashboard rein
  const { loading } = useAuth(); // Platzhalter-Nutzung

  if (loading) {
      // Optional: Ladeanzeige, wenn Contexts implementiert sind
      return <div className="p-4 text-center text-gray-500">Lade...</div>;
  }

  // Zeigt vorerst nur einen einfachen Text an
  // Später: return user ? <Dashboard /> : <Login />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center p-10 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Haushaltsplaner</h1>
        <p className="text-slate-600 dark:text-slate-400">Setup Phase 0 abgeschlossen. Bereit für Phase 1 (Authentifizierung).</p>
      </div>
    </div>
  );
}

// Haupt-App-Komponente
function App() {
  return (
    // Wickel die App in die (Platzhalter-)Provider
    <AuthProvider>
      <AppDataProvider>
        <AppContent />
      </AppDataProvider>
    </AuthProvider>
  );
}

// Exportiere App als Default
export default App;
