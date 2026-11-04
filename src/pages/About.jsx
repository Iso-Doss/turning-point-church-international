import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { CHURCH } from '../content.js';

export default function About() {
  const { t } = usePrefs();
  const a = t.about;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{a.kicker}</p>
          <h1 className="page-title">{a.title}</h1>
          <p className="lead italic" style={{ marginTop: 14 }}>{a.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container row" style={{ alignItems: 'center' }}>
          <div>
            <p className="kicker">{a.storyKicker}</p>
            <h2 className="title">{a.storyTitle}</h2>
            <p style={{ marginTop: 22 }}>{a.storyText}</p>
            <p style={{ marginTop: 18 }}>{a.storyPh}</p>
          </div>
          <div className="placeholder" style={{ height: 'clamp(280px, 34vw, 440px)' }}>{a.storyPhoto.toUpperCase()}</div>
        </div>
      </section>

      <section className="section bg-hero">
        <div className="container pillars">
          <div>
            <p className="kicker">{a.vision[0]}</p>
            <p className="big">{a.vision[1]}</p>
          </div>
          <div>
            <p className="kicker">{a.mission[0]}</p>
            <p className="big">{a.mission[1]}</p>
          </div>
          <div>
            <p className="kicker">{a.mottos}</p>
            {CHURCH.mottos.map((m) => (
              <p key={m} className="big italic" style={{ marginTop: 10 }}>{m}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker center">{a.pastorsKicker}</p>
          <h2 className="title center">{a.pastorsTitle}</h2>
          <div className="row" style={{ marginTop: 48, gap: '48px 40px' }}>
            {a.pastors.map((p) => (
              <article key={p.photo}>
                <div className="placeholder portrait">{p.photo.toUpperCase()}</div>
                <h3 style={{ marginTop: 26, fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(24px, 2.4vw, 28px)', color: 'var(--acc)' }}>{p.name}</h3>
                <p className="italic muted" style={{ marginTop: 4 }}>{p.role}</p>
                <div className="rule" style={{ width: 56, marginTop: 16 }} />
                <p style={{ marginTop: 16 }}>{p.bio}</p>
              </article>
            ))}
          </div>
          <p className="center" style={{ marginTop: 48 }}><a className="btn btn-outline" href={PATHS.pastor}>{a.pastorsMore}</a></p>
        </div>
      </section>

      <section className="bg-alt">
        <div className="container band-inner">
          <div style={{ flex: '1 1 440px', minWidth: 0 }}>
            <h2 className="title" style={{ marginTop: 0, fontSize: 'clamp(26px, 3vw, 38px)' }}>{a.ctaTitle}</h2>
            <p style={{ marginTop: 10, fontSize: 'clamp(18px, 2vw, 21px)' }}>{a.ctaText}</p>
          </div>
          <a className="btn" href={PATHS.contact}>{a.ctaButton}</a>
        </div>
      </section>
    </>
  );
}
