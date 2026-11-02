import { useEffect, useState } from 'react';
import { usePrefs } from '../prefs.jsx';
import { ArrowUp } from './Icons.jsx';

// Bouton « retour en haut » : apparaît après avoir fait défiler la page.
export default function ScrollTop() {
  const { t } = usePrefs();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.ui.toTop}
      title={t.ui.toTop}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp />
    </button>
  );
}
