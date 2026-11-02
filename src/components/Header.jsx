import { useEffect, useState } from 'react';
import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { Burger, Close, Moon, Sun } from './Icons.jsx';

const ORDER = ['home', 'about', 'locations', 'services', 'gallery', 'documents', 'contact'];

function LangSwitch() {
  const { lang, setLang, t } = usePrefs();
  return (
    <div className="lang" role="group" aria-label={t.ui.langLabel}>
      <button type="button" aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>FR</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

export default function Header({ route }) {
  const { t, theme, toggleTheme } = usePrefs();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [route]);

  const links = ORDER.map((k) => (
    <a key={k} href={PATHS[k]} aria-current={route === k ? 'page' : undefined}>
      {t.nav[k].toUpperCase()}
    </a>
  ));
  const themeLabel = theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark;

  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#/">
          <img src="./logo-tpci.png" alt="Logo Turning Point Church International" />
          <span>
            <span className="brand-name" style={{ display: 'block' }}>TURNING POINT CHURCH<br />INTERNATIONAL</span>
            <span className="brand-city">COTONOU · LOMÉ</span>
          </span>
        </a>

        <nav className="nav" aria-label={t.ui.navLabel}>{links}</nav>

        <div className="tools">
          <LangSwitch />
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            <span key={theme} className="icon-swap">{theme === 'dark' ? <Sun /> : <Moon />}</span>
          </button>
          <a className="btn visit" href={PATHS.locations}>{t.ui.visit}</a>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
          >
            <span key={open ? 'x' : 'm'} className="icon-swap">{open ? <Close /> : <Burger />}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-panel${open ? ' open' : ''}`}>
        <nav aria-label={t.ui.navLabel}>{links}</nav>
        <div className="mobile-tools">
          <LangSwitch />
          <a className="btn visit" href={PATHS.locations}>{t.ui.visit}</a>
        </div>
      </div>
    </header>
  );
}
