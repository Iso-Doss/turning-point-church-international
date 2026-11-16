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

// Bloc « Prochain culte » : le premier culte de la semaine non encore passé s'affiche en grand
// (thème, verset, date/heure/lieu, flyer, agenda) ; les suivants apparaissent sous « Aussi cette semaine ».
// Chaque culte disparaît tout seul après sa date `until` (voir CHURCH.nextServices).
export default function NextService() {
  const { t, lang } = usePrefs();
  const now = Date.now();
  const upcoming = (CHURCH.nextServices || []).filter((s) => now <= Date.parse(s.until));
  if (!upcoming.length) return null;
  const [ns, ...others] = upcoming;
  const x = t.nextService;
  const it = x.items[ns.id];

  return (
    <section className="next-service">
      <div className="container next-inner">
        <a className="next-visual" href={ns.flyer[lang]} target="_blank" rel="noreferrer">
          <img src={ns.image[lang]} alt={it.alt} width="720" height="900" loading="lazy" />
        </a>
        <div className="next-info">
          <p className="kicker">{x.kicker}</p>
          <p className="next-label">{it.label}</p>
          <h2 className="next-title">
            <span className="next-top">{it.top}</span>
            <span className="next-bottom">{it.bottom}</span>
          </h2>
          <p className="next-verse">{it.verse} <span>{it.ref}</span></p>
          <dl className="next-facts">
            {it.facts.map((f) => (
              <div key={f.label}><dt className="fact-label">{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <p className="next-invite">{it.invite}</p>
          <div className="btns">
            <a className="btn btn-gold" href={ns.flyer[lang]} download><Down /> {x.flyer}</a>
            <a className="btn btn-outline-light" href={ns.calendar} download><Cal /> {x.calendar}</a>
          </div>
        </div>

        {others.length > 0 && (
          <div className="next-also">
            <p className="kicker">{x.also}</p>
            <div className="next-also-list">
              {others.map((o) => {
                const oi = x.items[o.id];
                return (
                  <a key={o.id} className="next-also-item" href={o.flyer[lang]} target="_blank" rel="noreferrer">
                    <img src={o.image[lang]} alt="" width="120" height="150" loading="lazy" />
                    <span>
                      <span className="when">{oi.short}</span>
                      <span className="what">{oi.top} {oi.bottom}</span>
                      <span className="lbl">{oi.label.split(' · ')[0]}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
