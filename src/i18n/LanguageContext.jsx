import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'palarity_lang';
const SUPPORTED = ['en', 'sv'];

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('sv') ? 'sv' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  // Persist choice + keep <html lang> in sync for a11y/SEO
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
