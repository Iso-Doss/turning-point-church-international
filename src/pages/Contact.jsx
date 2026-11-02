import { useState } from 'react';
import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';
import { SocialLinks } from '../components/Footer.jsx';

// Le formulaire ouvre l'application email du visiteur avec un message prérempli
// (aucun serveur nécessaire : compatible GitHub Pages).
export default function Contact() {
  const { t } = usePrefs();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `${c.name}: ${f.get('name') || ''}`,
      `${c.phone}: ${f.get('phone') || ''}`,
      `${c.email}: ${f.get('email') || ''}`,
      `${c.site}: ${f.get('site') || ''}`,
      `${c.address}: ${f.get('address') || ''}`,
      '',
      `${c.prayer}:`,
      f.get('prayer') || '',
    ].join('\n');
    window.location.href = `mailto:${CHURCH.email}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">Contact</p>
          <h1 className="page-title" style={{ fontSize: 'clamp(30px, 4.4vw, 54px)' }}>{c.title}</h1>
          <p className="lead">{c.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container row" style={{ gap: '56px 80px' }}>
          <form className="form" style={{ flex: '3 1 480px' }} onSubmit={onSubmit}>
            <div>
              <p className="kicker">{c.formKicker}</p>
              <h2 className="title" style={{ marginTop: 10, fontSize: 'clamp(26px, 2.6vw, 32px)' }}>{c.formTitle}</h2>
            </div>
            <div className="pair">
              <label><span className="lbl">{c.name}</span><input name="name" type="text" autoComplete="name" required /></label>
              <label><span className="lbl">{c.phone}</span><input name="phone" type="tel" autoComplete="tel" /></label>
            </div>
            <div className="pair">
              <label><span className="lbl">{c.email}</span><input name="email" type="email" autoComplete="email" /></label>
              <label>
                <span className="lbl">{c.site}</span>
                <select name="site" defaultValue="Cotonou"><option>Cotonou</option><option>Lomé</option></select>
              </label>
            </div>
            <label><span className="lbl">{c.address}</span><input name="address" type="text" autoComplete="street-address" /></label>
            <label>
              <span className="lbl">{c.prayer} <span className="italic muted" style={{ fontFamily: 'var(--serif)', letterSpacing: 0, fontSize: 15 }}>{c.optional}</span></span>
              <textarea name="prayer" rows={5} />
            </label>
            <div>
              <button type="submit" className="btn" style={{ padding: '16px 30px' }}>{c.send}</button>
              {sent && <p className="sent" role="status" style={{ marginTop: 14 }}>{c.sent}</p>}
            </div>
          </form>

          <aside className="aside" style={{ flex: '2 1 300px' }}>
            <div>
              <p className="kicker">Cotonou</p>
              <p style={{ marginTop: 10 }}>{c.cotonouAddr}</p>
              <p className="italic muted" style={{ marginTop: 6 }}>{c.landmark}</p>
              <p className="lines" style={{ marginTop: 10, lineHeight: 1.7 }}>
                {CHURCH.phones.map((p) => (
                  <span key={p}><a href={`tel:${p.replace(/\s/g, '').replace(/^01/, '+22901')}`}>{p}</a><br /></span>
                ))}
              </p>
            </div>
            <div>
              <p className="kicker">Lomé</p>
              <p style={{ marginTop: 10 }}>{c.lomeAddr}</p>
              <p style={{ marginTop: 10 }}>{CHURCH.lomePhone}</p>
              <p style={{ marginTop: 10 }}><a href={CHURCH.links.facebookLome} target="_blank" rel="noreferrer">{c.lomeFb}</a></p>
            </div>
            <div>
              <p className="kicker">Email</p>
              <p style={{ marginTop: 10, overflowWrap: 'anywhere' }}><a href={`mailto:${CHURCH.email}`}>{CHURCH.email}</a></p>
            </div>
            <div>
              <p className="kicker">{c.social}</p>
              <div style={{ marginTop: 14 }}><SocialLinks className="social social-dark" /></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-alt" style={{ borderTop: '1px solid var(--ln)' }}>
        <div className="container center" style={{ padding: '48px 20px' }}>
          <p style={{ fontFamily: 'var(--display)', fontSize: 14, letterSpacing: '.18em', lineHeight: 2, color: 'var(--acc)' }}>{c.values}</p>
        </div>
      </section>
    </>
  );
}
