// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Hole Supabase URL und Anon Key aus den Umgebungsvariablen
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Stelle sicher, dass die Umgebungsvariablen gesetzt sind
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMsg = "Supabase URL or Anon Key is missing in .env file.";
  console.error(errorMsg);
  // Im Entwicklungsmodus einen Alert anzeigen, um sicherzustellen, dass es bemerkt wird
  if (import.meta.env.DEV) {
      alert(errorMsg);
  }
  // Verhindere die Client-Erstellung ohne Credentials
  // throw new Error(errorMsg); // Alternative: Fehler werfen
}

// Erstelle und exportiere den Supabase Client nur, wenn Credentials vorhanden sind
// Wir exportieren nur, wenn URL und Key vorhanden sind, um Laufzeitfehler zu vermeiden
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
    console.error("Supabase client could not be initialized - check .env variables and ensure they start with VITE_");
} else {
    console.log("Supabase client initialized successfully.");
}
