import { useState } from 'react';
import { usePrefs } from '../prefs.jsx';
import { CHURCH } from '../content.js';
import { link } from '../components/Footer.jsx';
import { Facebook, Instagram, Play, Tiktok, Youtube } from '../components/Icons.jsx';
import { MessageCard } from './Home.jsx';
import NextService from '../components/NextService.jsx';

export default function Services() {
  const { t } = usePrefs();
  const s = t.services;
  const L = CHURCH.links;
  const [filter, setFilter] = useState('tous');
  const list = t.messages.filter((m) => filter === 'tous' || m.type === filter);

  const follow = [
    { key: 'youtube', name: 'YOUTUBE', Icon: Youtube, url: L.youtube },
    { key: 'facebook', name: 'FACEBOOK', Icon: Facebook, url: L.facebook },
    { key: 'instagram', name: 'INSTAGRAM', Icon: Instagram, url: L.instagram },
    { key: 'tiktok', name: 'TIKTOK', Icon: Tiktok, url: L.tiktok },
  ];

  return (
    <>
      <section className="bg-hero">
        <div className="container section">
          <p className="kicker">{s.kicker}</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(32px, 4.4vw, 54px)', marginTop: 14 }}>{s.title}</h1>
          <div className="row" style={{ marginTop: 40, alignItems: 'center', gap: '32px 56px' }}>
            <div className="player" style={{ flex: '3 1 480px' }}>
              <Play size={72} />
              <span>{s.player.toUpperCase()}</span>
            </div>
            <div style={{ flex: '2 1 300px' }}>
              <p className="kicker" style={{ fontSize: 12 }}>{s.lastLabel}</p>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(24px, 2.6vw, 30px)', lineHeight: 1.25, marginTop: 10 }}>{s.lastTitle}</h2>
              <p style={{ marginTop: 8, color: 'var(--hmut)' }}>{s.lastMeta}</p>
              <p style={{ marginTop: 16, color: 'var(--hmut)' }}>{s.lastSummary}</p>
              <div className="btns" style={{ marginTop: 26 }}>
                <a className="btn btn-gold" href={link(L.youtube)} target="_blank" rel="noreferrer">YouTube</a>
                <a className="btn btn-outline-light" href={L.facebook} target="_blank" rel="noreferrer">Facebook Live</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextService />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
            <div>
              <p className="kicker">{s.libKicker}</p>
              <h2 className="title">{s.libTitle}</h2>
            </div>
            <div className="filters" role="group" aria-label={s.filterLabel}>
              {Object.keys(s.filters).map((k) => (
                <button key={k} type="button" aria-pressed={filter === k} onClick={() => setFilter(k)}>{s.filters[k]}</button>
              ))}
            </div>
          </div>
          <div className="cards cards-swap" key={filter}>
            {list.map((m, i) => <MessageCard key={`${filter}-${i}`} m={m} types={t.types} />)}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <a className="btn btn-outline" href={link(L.youtube)} target="_blank" rel="noreferrer">{s.more}</a>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <p className="kicker center">{s.followKicker}</p>
          <h2 className="title center">{s.followTitle}</h2>
          <div className="cards" style={{ gap: 16 }}>
            {follow.map(({ key, name, Icon, url }) => (
              <a key={key} className="follow" href={link(url)} target="_blank" rel="noreferrer">
                <span style={{ color: 'var(--acc)' }}><Icon size={30} /></span>
                <span className="name">{name}</span>
                <span className="muted" style={{ fontSize: 17 }}>{s.follow[key]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
