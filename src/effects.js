// Effets visuels : apparition au défilement, barre de progression, en-tête au défilement.
// Tout est désactivé si le visiteur a demandé moins d'animations sur son appareil.

const REVEAL_TARGETS = [
  'main .section .kicker',
  'main .section .title',
  'main .section .rule',
  'main .section .row > *',
  'main .times > div',
  'main .event',
  'main .cards > *',
  'main .pillars > div',
  'main .dl > div',
  'main .band-inner > *',
  'main .page-head .container > *',
  'main .aside > div',
].join(',');

export const reducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

// Fait apparaître en douceur les blocs de la page quand ils entrent à l'écran.
export function setupReveal() {
  if (reducedMotion()) return () => {};
  const els = [...document.querySelectorAll(REVEAL_TARGETS)].filter((el) => !el.closest('.bg-hero .hero'));
  const pending = new Set(els);

  els.forEach((el) => {
    const siblings = el.parentElement ? [...el.parentElement.children] : [el];
    const i = Math.max(0, siblings.indexOf(el)) % 6;
    el.style.setProperty('--d', `${i * 90}ms`);
    el.classList.add('reveal');
  });

  // Affiche tout bloc entré à l'écran — ou déjà dépassé, si l'on a défilé vite.
  const check = () => {
    const limit = window.innerHeight * 0.92;
    pending.forEach((el) => {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('in');
        pending.delete(el);
      }
    });
    if (!pending.size) stop();
  };
  const stop = () => {
    window.removeEventListener('scroll', check);
    window.removeEventListener('resize', check);
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  const timer = setTimeout(check, 60);
  return () => {
    clearTimeout(timer);
    stop();
  };
}

// Parallaxe (page d'accueil) :
//  - au défilement, les éléments marqués data-parallax="vitesse" bougent à leur propre vitesse ;
//  - au survol de la bannière (souris uniquement), la photo s'incline et la lueur suit le curseur.
export function setupParallax() {
  if (reducedMotion()) return () => {};
  const els = [...document.querySelectorAll('[data-parallax]')];
  if (!els.length) return () => {};

  const update = () => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0;
      let y;
      if (el.closest('.hero-section')) {
        // Bannière : décalage proportionnel au défilement, tant qu'elle est visible.
        y = Math.min(window.scrollY, vh * 1.2) * speed;
      } else {
        // Photo dans un cadre : glisse selon sa position par rapport au centre de l'écran.
        const frame = el.parentElement.getBoundingClientRect();
        if (frame.bottom < -100 || frame.top > vh + 100) return;
        const d = frame.top + frame.height / 2 - vh / 2;
        const max = frame.height * 0.11;
        y = Math.max(-max, Math.min(max, -d * speed));
      }
      el.style.translate = `0 ${y.toFixed(1)}px`;
    });
  };
  const onScroll = update;
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Effet au survol de la bannière (seulement avec une souris).
  const hero = document.querySelector('.hero-section');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const onMove = (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    hero.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const onLeave = () => {
    hero.style.setProperty('--mx', '0');
    hero.style.setProperty('--my', '0');
  };
  if (hero && finePointer) {
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
  }

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (hero && finePointer) {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    }
  };
}

// Barre de progression de lecture + ombre de l'en-tête après défilement.
export function setupScrollFx() {
  const root = document.documentElement;
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--progress', max > 0 ? String(window.scrollY / max) : '0');
    if (window.scrollY > 24) root.dataset.scrolled = '';
    else delete root.dataset.scrolled;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}
