import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';

const Down = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);
const Cal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

// Bloc « Prochain culte » : thème, verset, date/heure/lieu, flyer et agenda.
// Il ne s'affiche plus une fois la date `until` passée.
export default function NextService() {
  const { t, lang } = usePrefs();
  const ns = CHURCH.nextService;
  if (!ns || Date.now() > Date.parse(ns.until)) return null;
  const x = t.nextService;

  return (
    <section className="next-service">
      <div className="container next-inner">
        <a className="next-visual" href={ns.flyer[lang]} target="_blank" rel="noreferrer">
          <img src={ns.image[lang]} alt={x.alt} width="720" height="900" loading="lazy" />
        </a>
        <div className="next-info">
          <p className="kicker">{x.kicker}</p>
          <p className="next-label">{x.label}</p>
          <h2 className="next-title">
            <span className="next-top">{x.top}</span>
            <span className="next-bottom">{x.bottom}</span>
          </h2>
          <p className="next-verse">{x.verse} <span>{x.ref}</span></p>
          <dl className="next-facts">
            {x.facts.map((f) => (
              <div key={f.label}><dt className="fact-label">{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <p className="next-invite">{x.invite}</p>
          <div className="btns">
            <a className="btn btn-gold" href={ns.flyer[lang]} download><Down /> {x.flyer}</a>
            <a className="btn btn-outline-light" href={ns.calendar} download><Cal /> {x.calendar}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
