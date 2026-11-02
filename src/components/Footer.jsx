import { usePrefs } from '../prefs.jsx';
import { PATHS } from '../routes.js';
import { CHURCH } from '../content.js';
import { Facebook, Instagram, Tiktok, Youtube } from './Icons.jsx';

export const link = (url) => url || '#';

export function SocialLinks({ className = 'social' }) {
  const L = CHURCH.links;
  return (
    <div className="socials">
      <a className={className} href={link(L.facebook)} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook /></a>
      <a className={className} href={link(L.youtube)} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube /></a>
      <a className={className} href={link(L.instagram)} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram /></a>
      <a className={className} href={link(L.tiktok)} aria-label="TikTok" target="_blank" rel="noreferrer"><Tiktok /></a>
    </div>
  );
}

export default function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-cols">
          <div>
            <img src="./logo-tpci.png" alt="" style={{ width: 72 }} />
            <p style={{ marginTop: 14, fontFamily: 'var(--display)', fontSize: 14, letterSpacing: '.12em', color: 'var(--hink)' }}>
              TURNING POINT CHURCH INTERNATIONAL
            </p>
            <p className="italic" style={{ marginTop: 6, color: 'var(--hg)' }}>Where Leaders Are Made and Nations Are Turned</p>
            <div style={{ marginTop: 20 }}><SocialLinks /></div>
          </div>
          <div>
            <p className="h">{t.ui.footerNav.toUpperCase()}</p>
            <div className="footer-links">
              {['about', 'locations', 'services', 'contact'].map((k) => (
                <a key={k} href={PATHS[k]}>{t.nav[k]}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="h">COTONOU</p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              {CHURCH.phones.map((p) => (<span key={p}>{p}<br /></span>))}
              <a href={`mailto:${CHURCH.email}`}>{CHURCH.email}</a>
            </p>
          </div>
          <div>
            <p className="h">LOMÉ</p>
            <p style={{ marginTop: 12 }}>{t.ui.lomePhone}</p>
          </div>
        </div>
        <div className="footer-bottom">{t.ui.copyright}</div>
      </div>
    </footer>
  );
}
