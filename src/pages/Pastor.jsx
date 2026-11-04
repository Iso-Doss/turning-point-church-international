import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { PASTOR } from '../pastor.js';

export default function Pastor() {
  const { lang } = usePrefs();
  const p = PASTOR[lang];

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{p.kicker}</p>
          <h1 className="page-title">{p.title}</h1>
          <p className="lead italic" style={{ marginTop: 14 }}>{p.subtitle}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container row" style={{ alignItems: 'center' }}>
          <div className="placeholder portrait">{p.photo.toUpperCase()}</div>
          <div className="reveal">
            <p className="pastor-lead">{p.lead}</p>
            <div className="rule" />
            <ul className="pastor-roles">{p.roles.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Grâces et mandat */}
      <section className="section bg-alt">
        <div className="container pastor-text">
          <p className="kicker">{p.gracesKicker}</p>
          <h2 className="title">{p.gracesTitle}</h2>
          <div className="rule" />
          {p.graces.map((t) => <p key={t}>{t}</p>)}
        </div>
      </section>

      {/* Verset de l'appel */}
      <section className="section bg-hero">
        <div className="container pastor-verse">
          <blockquote>{p.verse}</blockquote>
          <p className="kicker">{p.verseRef}</p>
        </div>
      </section>

      {/* Chiffres */}
      <section className="section">
        <div className="container">
          <dl className="pastor-facts">
            {p.facts.map(([n, l]) => (<div key={l}><dt>{n}</dt><dd>{l}</dd></div>))}
          </dl>
        </div>
      </section>

      {/* Ministère */}
      <section className="section bg-alt">
        <div className="container row" style={{ alignItems: 'start' }}>
          <div className="pastor-text">
            <p className="kicker">{p.ministryKicker}</p>
            <h2 className="title">{p.ministryTitle}</h2>
            <div className="rule" />
            {p.ministry.map((t) => <p key={t}>{t}</p>)}
          </div>
          <div className="pastor-cards">
            {p.highlights.map(([t, d]) => (<div key={t} className="card"><h3>{t}</h3><p className="meta">{d}</p></div>))}
          </div>
        </div>
      </section>

      {/* Parcours et famille */}
      <section className="section">
        <div className="container row" style={{ alignItems: 'start', gap: '56px 56px' }}>
          <div className="pastor-text">
            <p className="kicker">{p.journeyKicker}</p>
            <h2 className="title">{p.journeyTitle}</h2>
            <div className="rule" />
            {p.journey.map((t) => <p key={t}>{t}</p>)}
            <ul className="pastor-list">{p.journeyList.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="pastor-text">
            <p className="kicker">{p.familyKicker}</p>
            <h2 className="title">{p.familyTitle}</h2>
            <div className="rule" />
            <p>{p.family}</p>
            <p className="kicker" style={{ marginTop: 40 }}>{p.todayKicker}</p>
            <p>{p.today}</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section bg-hero">
        <div className="container pastor-close">
          {p.statements.map((t) => <p key={t} className="st">{t}</p>)}
          <div className="rule" style={{ margin: '36px auto 0' }} />
          {p.closing.map((t) => <p key={t} className="cl">{t}</p>)}
          <p className="glory">{p.glory}</p>
        </div>
      </section>

      <section className="bg-alt">
        <div className="container band-inner">
          <div style={{ flex: '1 1 440px', minWidth: 0 }}>
            <h2 className="title" style={{ marginTop: 0, fontSize: 'clamp(26px, 3vw, 38px)' }}>{p.ctaTitle}</h2>
            <p style={{ marginTop: 10, fontSize: 'clamp(18px, 2vw, 21px)' }}>{p.ctaText}</p>
          </div>
          <a className="btn" href={PATHS.services}>{p.ctaButton}</a>
        </div>
      </section>
    </>
  );
}
