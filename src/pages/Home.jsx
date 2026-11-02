import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { SocialLinks } from '../components/Footer.jsx';
import { TypeIcon } from '../components/Icons.jsx';

export function MessageCard({ m, types }) {
  return (
    <article className="card">
      <div className={`thumb thumb-${m.type}`}><TypeIcon type={m.type} /></div>
      <div className="card-body">
        <div className="fact-label">{types[m.type][0]}</div>
        <h3>{m.title}</h3>
        <p className="meta">{m.meta}</p>
        <a className="action" href={PATHS.services}>{types[m.type][1].toUpperCase()}</a>
      </div>
    </article>
  );
}

export default function Home() {
  const { t } = usePrefs();
  const h = t.home;
  const latest = ['video', 'audio', 'ecrit'].map((type) => t.messages.find((m) => m.type === type));

  return (
    <>
      <section className="bg-hero hero-section">
        <div className="hero-glow" aria-hidden="true" data-parallax="0.35" />
        <img className="hero-mark" src="./logo-tpci.png" alt="" aria-hidden="true" data-parallax="0.5" />
        <div className="container row hero">
          <div data-parallax="0.18">
            <p className="kicker">{h.kicker}</p>
            <h1>{h.title}</h1>
            <p className="text">{h.text}</p>
            <div className="btns">
              <a className="btn btn-gold" href={PATHS.locations}>{h.cta1}</a>
              <a className="btn btn-outline-light" href={PATHS.services}>{h.cta2}</a>
            </div>
          </div>
          <div className="hero-media" data-parallax="-0.08">
            <div className="placeholder tilt">{h.photo.toUpperCase()}</div>
          </div>
        </div>
      </section>

      <section className="bg-alt" style={{ borderBottom: '1px solid var(--ln)' }}>
        <div className="container times">
          {h.times.map((x) => (
            <div key={x.label}>
              <div className="label">{x.label}</div>
              <div className="value">{x.value} <span className="tz">{x.tz}</span></div>
            </div>
          ))}
          <p className="times-note">{h.timesNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container row">
          <div>
            <p className="kicker">{h.welcomeKicker}</p>
            <h2 className="title">{h.welcomeTitle}</h2>
            <div className="rule" />
          </div>
          <div>
            <p>{h.welcomeText}</p>
            <p className="muted" style={{ marginTop: 18 }}>{h.welcomePh}</p>
            <a className="link" href={PATHS.about}>{h.welcomeLink.toUpperCase()}</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ paddingBottom: 'clamp(64px, 9vw, 112px)' }}>
          <div className="event">
            <div className="info">
              <p className="kicker" style={{ fontSize: 12 }}>{h.eventKicker}</p>
              <h2 className="title" style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginTop: 12 }}>{h.eventTitle}</h2>
              <p className="italic" style={{ marginTop: 6, fontSize: 21 }}>{h.eventSub}</p>
            </div>
            <div className="facts">
              {h.eventFacts.map((f) => (
                <div key={f.label}>
                  <div className="fact-label">{f.label}</div>
                  <div style={{ fontWeight: 600 }}>{f.value}</div>
                </div>
              ))}
            </div>
            <a className="btn" href={PATHS.services}>{h.eventCta}</a>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <p className="kicker center">{h.sitesKicker}</p>
          <h2 className="title center">{h.sitesTitle}</h2>
          <div className="cards">
            {h.sites.map((s) => (
              <article key={s.city} className="card site-card" style={{ flexBasis: 400 }}>
                <div className="parallax-frame site-photo">
                  <div className="placeholder parallax-fill" data-parallax="0.1">{s.photo.toUpperCase()}</div>
                </div>
                <div className="card-body" style={{ padding: 28 }}>
                  <div className="fact-label" style={{ fontSize: 12 }}>{s.country}</div>
                  <h3>{s.city}</h3>
                  <p style={{ marginTop: 10 }}>{s.addr}</p>
                  <p style={{ marginTop: 8, fontWeight: 600 }}>{s.time}</p>
                  <a className="link" style={{ marginTop: 16, alignSelf: 'flex-start' }} href={PATHS.locations}>{h.sitesLink.toUpperCase()}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container row" style={{ alignItems: 'center' }}>
          <div className="parallax-frame portrait">
            <div className="placeholder parallax-fill" data-parallax="0.12">{h.pastorsPhoto.toUpperCase()}</div>
          </div>
          <div>
            <p className="kicker">{h.pastorsKicker}</p>
            <h2 className="title" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.25 }}>{h.pastorsTitle}</h2>
            <p className="italic muted" style={{ marginTop: 10 }}>{h.pastorsRole}</p>
            <p style={{ marginTop: 20 }}>{h.pastorsText}</p>
            <p style={{ marginTop: 26, fontFamily: 'var(--display)', fontSize: 20, color: 'var(--acc)' }}>
              « Where Leaders Are Made and Nations Are Turned »
            </p>
            <a className="link" href={PATHS.about}>{h.pastorsLink.toUpperCase()}</a>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px 24px' }}>
            <div>
              <p className="kicker">{h.msgKicker}</p>
              <h2 className="title">{h.msgTitle}</h2>
            </div>
            <a className="link" style={{ marginTop: 0 }} href={PATHS.services}>{h.msgAll.toUpperCase()}</a>
          </div>
          <div className="cards">
            {latest.map((m, i) => <MessageCard key={i} m={m} types={t.types} />)}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div style={{ flex: '1 1 340px' }}>
            <p className="kicker" style={{ fontSize: 12, color: 'var(--hg)' }}>{h.socialKicker}</p>
            <h2>{h.socialTitle}</h2>
          </div>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
