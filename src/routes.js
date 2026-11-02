// Adresses des pages (navigation par « #/ », compatible GitHub Pages).
export const PATHS = {
  home: '#/',
  about: '#/eglise',
  locations: '#/sites',
  services: '#/cultes',
  contact: '#/contact',
};

export function routeFromHash() {
  const hash = window.location.hash || '#/';
  return Object.keys(PATHS).find((k) => PATHS[k] === hash) || 'home';
}
