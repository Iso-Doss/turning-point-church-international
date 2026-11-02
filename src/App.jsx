import { useEffect, useState } from 'react';
import { PrefsProvider } from './prefs.jsx';
import { routeFromHash } from './routes.js';
import { setupParallax, setupReveal, setupScrollFx } from './effects.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Locations from './pages/Locations.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const PAGES = { home: Home, about: About, locations: Locations, services: Services, contact: Contact };

export default function App() {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHash = () => {
      setRoute(routeFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => setupScrollFx(), []);
  useEffect(() => setupReveal(), [route]);
  useEffect(() => setupParallax(), [route]);

  const Page = PAGES[route];
  return (
    <PrefsProvider>
      <div className="progress" aria-hidden="true" />
      <Header route={route} />
      <main key={route} className="page-enter">
        <Page />
      </main>
      <Footer />
      <ScrollTop />
    </PrefsProvider>
  );
}
