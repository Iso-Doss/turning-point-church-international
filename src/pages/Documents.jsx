import { useState } from 'react';
import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);
const OpenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export default function Documents() {
  const { t, lang } = usePrefs();
  const d = t.documents;
  const [cat, setCat] = useState('tous');
  const list = CHURCH.documents.filter((doc) => cat === 'tous' || doc.category === cat);
  const size = (kb) => (kb >= 1000 ? `${(kb / 1024).toFixed(1)} ${lang === 'fr' ? 'Mo' : 'MB'}` : `${kb} ${d.sizeUnit}`).replace('.', lang === 'fr' ? ',' : '.');

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">{d.kicker}</p>
          <h1 className="page-title">{d.title}</h1>
          <p className="lead">{d.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label={d.filterLabel} style={{ justifyContent: 'center' }}>
            {Object.keys(d.categories).map((k) => (
              <button key={k} type="button" aria-pressed={cat === k} onClick={() => setCat(k)}>{d.categories[k]}</button>
            ))}
          </div>

          <div className="docs cards-swap" key={cat}>
            {list.map((doc) => {
              const info = d.items[doc.id];
              return (
                <article key={doc.id} className="card doc">
                  <a className="doc-preview" href={doc.file} target="_blank" rel="noreferrer" aria-label={`${d.view} : ${info.title}`}>
                    <img src={doc.preview} alt="" loading="lazy" />
                  </a>
                  <div className="card-body">
                    <div className="doc-tags">
                      <span className="tag">{d.categories[doc.category]}</span>
                      <span className="tag tag-lang">{doc.lang.toUpperCase()} · {d.langs[doc.lang]}</span>
                    </div>
                    <h3>{info.title}</h3>
                    <p className="meta">{info.desc}</p>
                    <p className="doc-meta">PDF{doc.word ? ' + WORD' : ''} · {doc.format} · {size(doc.kb)}</p>
                    <div className="doc-actions">
                      <a className="btn" href={doc.file} download><DownloadIcon /> {d.download}</a>
                      {doc.word && <a className="btn btn-outline" href={doc.word} download><DownloadIcon /> {d.word}</a>}
                      <a className="btn btn-outline" href={doc.file} target="_blank" rel="noreferrer"><OpenIcon /> {d.view}</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="center muted italic" style={{ marginTop: 40, fontSize: 16 }}>{d.printTip}</p>
        </div>
      </section>
    </>
  );
}
