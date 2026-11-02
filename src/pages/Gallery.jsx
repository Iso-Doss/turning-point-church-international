import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';
import { Close, Facebook } from '../components/Icons.jsx';

const Chevron = ({ dir }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
  </svg>
);

function Photo({ item, lang, emptyText }) {
  if (item.src) return <img src={item.src} alt={item.caption[lang]} loading="lazy" />;
  return (
    <div className="photo-empty">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5-8 8" />
      </svg>
      <span>{emptyText}</span>
    </div>
  );
}

// Visionneuse plein écran : flèches gauche/droite, Échap pour fermer.
function Lightbox({ items, index, setIndex, onClose, g, lang }) {
  const closeRef = useRef(null);
  const item = items[index];
  const go = (d) => setIndex((index + d + items.length) % items.length);

  // À l'ouverture : focus sur « Fermer », page bloquée derrière, focus rendu à la fermeture.
  useEffect(() => {
    const before = document.activeElement;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      before?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index]);

  // Rendue directement dans <body> pour passer au-dessus de tout (en-tête compris).
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption[lang]} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label={g.close}><Close /></button>
      <button type="button" className="lb-btn lb-prev" onClick={() => go(-1)} aria-label={g.prev}><Chevron dir="left" /></button>
      <figure key={index} className="lb-figure">
        <div className="lb-media"><Photo item={item} lang={lang} emptyText={g.empty} /></div>
        <figcaption>
          <span>{item.caption[lang]}</span>
          <span className="lb-count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button type="button" className="lb-btn lb-next" onClick={() => go(1)} aria-label={g.next}><Chevron dir="right" /></button>
    </div>,
    document.body
  );
}

export default function Gallery() {
  const { t, lang } = usePrefs();
  const g = t.gallery;
  const [album, setAlbum] = useState('tous');
  const [open, setOpen] = useState(null);
  const items = CHURCH.gallery.filter((p) => album === 'tous' || p.album === album);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{g.kicker}</p>
          <h1 className="page-title">{g.title}</h1>
          <p className="lead">{g.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label={g.filterLabel} style={{ justifyContent: 'center' }}>
            {Object.keys(g.albums).map((k) => (
              <button key={k} type="button" aria-pressed={album === k} onClick={() => setAlbum(k)}>{g.albums[k]}</button>
            ))}
          </div>

          <div className="gallery cards-swap" key={album}>
            {items.map((item, i) => (
              <button key={`${album}-${i}`} type="button" className={`tile tile-${i % 5}`} onClick={() => setOpen(i)} aria-label={`${g.open} : ${item.caption[lang]}`}>
                <Photo item={item} lang={lang} emptyText={g.empty} />
                <span className="tile-caption">{item.caption[lang]}</span>
              </button>
            ))}
          </div>

          <div className="center" style={{ marginTop: 48 }}>
            <p className="muted">{g.followText}</p>
            <a className="btn btn-outline" style={{ marginTop: 16, gap: 10 }} href={CHURCH.links.facebook} target="_blank" rel="noreferrer">
              <Facebook size={18} /> {g.followButton}
            </a>
          </div>
        </div>
      </section>

      {open !== null && items[open] && (
        <Lightbox items={items} index={open} setIndex={setOpen} onClose={() => setOpen(null)} g={g} lang={lang} />
      )}
    </>
  );
}
