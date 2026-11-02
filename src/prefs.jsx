import { createContext, useContext, useEffect, useState } from 'react';
import { CONTENT } from './content.js';

const PrefsContext = createContext(null);
const KEY = 'tpci-prefs';

function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function initialTheme(saved) {
  if (saved.theme === 'dark' || saved.theme === 'light') return saved.theme;
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function initialLang(saved) {
  if (saved.lang === 'fr' || saved.lang === 'en') return saved.lang;
  const nav = (navigator.language || 'fr').toLowerCase();
  return nav.startsWith('en') ? 'en' : 'fr';
}

export function PrefsProvider({ children }) {
  const saved = readSaved();
  const [lang, setLang] = useState(() => initialLang(saved));
  const [theme, setTheme] = useState(() => initialTheme(saved));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(KEY, JSON.stringify({ lang, theme }));
    } catch {
      /* stockage indisponible : on ignore */
    }
  }, [lang, theme]);

  const value = {
    lang,
    theme,
    t: CONTENT[lang],
    setLang,
    toggleTheme: () => setTheme((x) => (x === 'dark' ? 'light' : 'dark')),
  };
  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  return useContext(PrefsContext);
}
