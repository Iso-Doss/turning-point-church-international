import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { CHURCH } from '../content.js';
import { link } from '../components/Footer.jsx';

function Site({ s, labels, maps, mapPh, isCotonou, reverse }) {
  const L = CHURCH.links;
  return (
    <section id={s.id} className={`site-block${reverse ? ' reverse' : ''}`}>
      <div className="container section row">
        <div>
          <p className="kicker">{s.country}</p>
          <h2 className="title" style={{ marginTop: 8, fontSize: 'clamp(32px, 3.6vw, 46px)' }}>{s.city}</h2>
          <p className="italic muted" style={{ marginTop: 6 }}>{s.venue}</p>
          <dl className="dl">
            <div>
              <dt>{labels.address}</dt>
              <dd>{s.address}{s.landmark && <><br /><span className="italic muted">{s.landmark}</span></>}</dd>
            </div>
            <div>
              <dt>{labels.services}</dt>
              <dd><strong style={{ color: 'var(--acc)' }}>{s.sunday}</strong><br /><span className="italic muted">{s.midweek}</span></dd>
            </div>
            <div>
              <dt>{labels.pastor}</dt>
              <dd>{s.pastor}</dd>
            </div>
            <div>
              <dt>{labels.phone}</dt>
              <dd>{isCotonou ? CHURCH.phones.join(' · ') : CHURCH.lomePhone}</dd>
            </div>
            {isCotonou && (
              <div>
                <dt>{labels.email}</dt>
                <dd><a href={`mailto:${CHURCH.email}`}>{CHURCH.email}</a></dd>
              </div>
            )}
            <div>
              <dt>{labels.facebook}</dt>
              <dd><a href={isCotonou ? L.facebook : L.facebookLome} target="_blank" rel="noreferrer">{s.facebookText}</a></dd>
            </div>
          </dl>
          <a className="btn" style={{ marginTop: 28 }} href={link(isCotonou ? L.mapsCotonou : L.mapsLome)} target="_blank" rel="noreferrer">{maps}</a>
        </div>
        <div className="site-photos">
          <div className="placeholder">{s.photo.toUpperCase()}</div>
          <div className="placeholder map">{mapPh.toUpperCase()}</div>
        </div>
      </div>
    </section>
  );
}

export default function Locations() {
  const { t } = usePrefs();
  const l = t.locations;
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{l.kicker}</p>
          <h1 className="page-title">{l.title}</h1>
          <p className="lead">{l.intro}</p>
          <div className="btns" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn btn-outline" onClick={() => go('cotonou')}>{l.cotonou.city} · {l.cotonou.country}</button>
            <button type="button" className="btn btn-outline" onClick={() => go('lome')}>{l.lome.city} · {l.lome.country}</button>
          </div>
        </div>
      </section>

      <Site s={l.cotonou} labels={l.labels} maps={l.maps} mapPh={l.mapPh} isCotonou />
      <Site s={l.lome} labels={l.labels} maps={l.maps} mapPh={l.mapPh} reverse />

      <section className="bg-hero">
        <div className="container band-inner">
          <div style={{ flex: '1 1 440px', minWidth: 0 }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 38px)' }}>{l.liveTitle}</h2>
            <p style={{ marginTop: 10, color: 'var(--hmut)', fontSize: 'clamp(18px, 2vw, 21px)' }}>{l.liveText}</p>
          </div>
          <a className="btn btn-gold" href={PATHS.services}>{l.liveButton}</a>
        </div>
      </section>
    </>
  );
}
