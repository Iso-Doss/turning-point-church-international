import { useEffect } from 'react';
import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';
import { BRAND, SWATCHES } from '../brand.js';

const IDS = ['regles', 'logo', 'couleurs', 'typo', 'ecriture', 'elements', 'imprimes'];

const ICONS = [
  <path key="c" d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2M5.5 5h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />,
  <g key="h"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
  <g key="p"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></g>,
];

// Great Vibes ne sert qu'ici (et sur les imprimés) : chargée seulement sur cette page.
function useScriptFont() {
  useEffect(() => {
    if (document.getElementById('font-great-vibes')) return;
    const l = document.createElement('link');
    l.id = 'font-great-vibes';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
    document.head.appendChild(l);
  }, []);
}

function Head({ id, n, title, intro }) {
  return (
    <div className="brand-head" id={id}>
      <p className="kicker">{String(n).padStart(2, '0')}</p>
      <h2 className="title">{title}</h2>
      <div className="rule" />
      {intro && <p className="lead" style={{ marginTop: 20, maxWidth: 720 }}>{intro}</p>}
    </div>
  );
}

function Brandmark({ dark, city }) {
  return (
    <div className={`brand-lockup${dark ? ' on-dark' : ''}`}>
      <img src="./logo-tpci.png" alt="" />
      <div>
        <div className="bl-name">TURNING POINT CHURCH<br />INTERNATIONAL</div>
        <div className="bl-city">{city}</div>
      </div>
    </div>
  );
}

export default function Brand() {
  const { lang } = usePrefs();
  const b = BRAND[lang];
  useScriptFont();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{b.kicker}</p>
          <h1 className="page-title">{b.title}</h1>
          <p className="lead">{b.intro}</p>
          <nav className="filters brand-toc" aria-label={b.title}>
            {b.toc.map((label, i) => (
              <button key={IDS[i]} type="button" onClick={() => go(IDS[i])}>{label.toUpperCase()}</button>
            ))}
          </nav>
        </div>
      </section>

      {/* 1. Règles */}
      <section className="section">
        <div className="container">
          <Head id={IDS[0]} n={1} title={b.rulesTitle} />
          <ol className="brand-rules">
            {b.rules.map(([t, d]) => (<li key={t}><strong>{t}</strong><span>{d}</span></li>))}
          </ol>
          <p className="kicker" style={{ marginTop: 48 }}>{b.mottosTitle}</p>
          <ul className="brand-mottos">
            {CHURCH.mottos.map((m) => (<li key={m}>{m}</li>))}
          </ul>
        </div>
      </section>

      {/* 2. Logo */}
      <section className="section bg-alt">
        <div className="container">
          <Head id={IDS[1]} n={2} title={b.logoTitle} intro={b.logoIntro} />
          <div className="brand-logos">
            <figure><div className="bl-box"><Brandmark city="COTONOU" /></div><figcaption>{b.lightBg}</figcaption></figure>
            <figure><div className="bl-box dark"><Brandmark dark city="LOMÉ" /></div><figcaption>{b.darkBg}</figcaption></figure>
          </div>
          <div className="brand-dodont">
            <div><p className="h yes">{b.yes}</p><ul>{b.logoDo.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><p className="h no">{b.no}</p><ul>{b.logoDont.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </div>
      </section>

      {/* 3. Couleurs */}
      <section className="section">
        <div className="container">
          <Head id={IDS[2]} n={3} title={b.colorsTitle} intro={b.colorsIntro} />
          <h3 className="brand-sub">{b.siteColors}</h3>
          <p className="muted">{b.siteColorsNote}</p>
          <div className="swatches">
            {SWATCHES.site.map((s) => (
              <div className="swatch" key={s.v}>
                <div className="chip" style={{ background: `var(--${s.v})` }} />
                <div className="sw-body">
                  <code>--{s.v}</code>
                  <span className="sw-use">{b.swatch[s.v]}</span>
                  <span className="sw-hex">{b.light} {s.light} · {b.dark} {s.dark}</span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="brand-sub" style={{ marginTop: 56 }}>{b.printColors}</h3>
          <p className="muted">{b.printColorsNote}</p>
          <div className="swatches">
            {SWATCHES.print.map((s) => (
              <div className="swatch" key={s.v}>
                <div className="chip" style={{ background: s.hex }} />
                <div className="sw-body">
                  <code>{s.v}</code>
                  <span className="sw-use">{b.swatch[s.v]}</span>
                  <span className="sw-hex">{s.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Typographie */}
      <section className="section bg-alt">
        <div className="container">
          <Head id={IDS[3]} n={4} title={b.typeTitle} />
          <div className="specimens">
            {b.fonts.map((f) => (
              <div className="specimen" key={f.name}>
                <div className="sp-meta"><p className="kicker">{f.name}</p><p className="muted">{f.role}</p></div>
                <p className={`sp-sample ${f.cls}`}>{f.sample}</p>
              </div>
            ))}
          </div>
          <h3 className="brand-sub" style={{ marginTop: 48 }}>{b.scaleTitle}</h3>
          <dl className="brand-scale">
            {b.scale.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        </div>
      </section>

      {/* 5. Écriture */}
      <section className="section">
        <div className="container">
          <Head id={IDS[4]} n={5} title={b.writeTitle} intro={b.writeIntro} />
          <div className="brand-table">
            <table>
              <thead><tr>{b.writeHead.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
              <tbody>{b.writeRows.map((r) => (<tr key={r[0]}><th scope="row">{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="muted italic" style={{ marginTop: 16 }}>{b.writeNote}</p>
        </div>
      </section>

      {/* 6. Éléments */}
      <section className="section bg-alt">
        <div className="container">
          <Head id={IDS[5]} n={6} title={b.compTitle} />
          <h3 className="brand-sub">{b.buttons}</h3>
          <p className="muted">{b.buttonsNote}</p>
          <div className="brand-btns">
            <div className="btns" style={{ marginTop: 0 }}>
              <span className="btn">{b.btn[0]}</span><span className="btn btn-outline">{b.btn[1]}</span>
            </div>
            <div className="btns dark" style={{ marginTop: 0 }}>
              <span className="btn btn-gold">{b.btn[2]}</span><span className="btn btn-outline-light">{b.btn[3]}</span>
            </div>
          </div>

          <h3 className="brand-sub" style={{ marginTop: 56 }}>{b.infos}</h3>
          <p className="muted">{b.infosNote}</p>
          <div className="print-infos">
            {b.infosData.map(([l, v, s], i) => (
              <div key={l}>
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[i]}</svg></span>
                <div><div className="l">{l}</div><div className="v">{v}</div><div className="s">{s}</div></div>
              </div>
            ))}
          </div>

          <h3 className="brand-sub" style={{ marginTop: 56 }}>{b.spacing}</h3>
          <p className="muted" style={{ maxWidth: 720 }}>{b.spacingNote}</p>
        </div>
      </section>

      {/* 7. Imprimés */}
      <section className="section">
        <div className="container">
          <Head id={IDS[6]} n={7} title={b.printTitle} intro={b.printIntro} />
          <div className="row" style={{ marginTop: 40 }}>
            <div>
              <h3 className="brand-sub">{b.order}</h3>
              <ol className="brand-order">{b.orderSteps.map((s) => <li key={s}>{s}</li>)}</ol>
              <h3 className="brand-sub" style={{ marginTop: 40 }}>{b.photos}</h3>
              <p className="muted">{b.photosNote}</p>
            </div>
            <div className="brand-examples">
              {b.examples.map((e) => (
                <figure key={e.img}>
                  <img src={e.img} alt={e.title} loading="lazy" />
                  <figcaption><strong>{e.title}</strong><span>{e.desc}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
