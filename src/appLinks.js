export function getAppUrl() {
  const raw = import.meta.env.VITE_APP_URL || 'https://app.chordchartpro.com';
  return String(raw).replace(/\/+$/, '');
}

export function goToApp(path = '/') {
  const base = getAppUrl();
  const p = String(path || '/');
  const url = p.startsWith('http') ? p : `${base}${p.startsWith('/') ? '' : '/'}${p}`;
  window.location.href = url;
}

export function getLegalUrl() {
  return `${getAppUrl()}/legal/.`;
}

export function goToLogin() {
  goToApp('/');
}

export function goToRegister() {
  goToApp('/?register=1#register');
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  window.location.hash = `#${id}`;
}
