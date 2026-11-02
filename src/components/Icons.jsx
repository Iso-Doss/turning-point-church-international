// Icônes au trait (SVG), décoratives : aria-hidden.
const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const Facebook = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" {...base}><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" /></svg>
);
export const Youtube = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" {...base}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9l5 3-5 3z" /></svg>
);
export const Instagram = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" /></svg>
);
export const Tiktok = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" {...base}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.5 2.6 2.4 4.5 5 4.8" /></svg>
);
export const Moon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...base}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>
);
export const Sun = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Burger = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
);
export const Play = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.2" {...base}><circle cx="12" cy="12" r="10" /><path d="M10 8.5l5 3.5-5 3.5z" /></svg>
);
export const Headphones = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.2" {...base}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1" /><rect x="17" y="14" width="4" height="6" rx="1" /></svg>
);
export const Book = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.2" {...base}><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" /></svg>
);
export const TypeIcon = ({ type }) => (type === 'video' ? <Play /> : type === 'audio' ? <Headphones /> : <Book />);
