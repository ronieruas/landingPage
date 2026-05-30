export function getAppUrl() {
  const raw = import.meta.env.VITE_APP_URL || 'https://app.chordchartpro.com';
  return String(raw).replace(/\/+$/, '');
}

export function getPlayStoreUrl() {
  return 'https://play.google.com/store/apps/details?id=com.chordchart.mobile';
}

function getLandingLang() {
  try {
    const raw =
      window.localStorage?.getItem('landingLang') ||
      window.localStorage?.getItem('i18nextLng') ||
      '';
    const s = String(raw || '').toLowerCase();
    if (s.startsWith('pt')) return 'pt';
    if (s.startsWith('es')) return 'es';
    return 'en';
  } catch (_e) {
    void _e;
    return 'en';
  }
}

function withLangParam(url) {
  const lang = getLandingLang();
  const u = new URL(url, window.location.origin);
  if (!u.searchParams.get('lang')) u.searchParams.set('lang', lang);
  return u.toString();
}

export function goToApp(path = '/') {
  const base = getAppUrl();
  const p = String(path || '/');
  const url = p.startsWith('http') ? p : `${base}${p.startsWith('/') ? '' : '/'}${p}`;
  window.location.href = withLangParam(url);
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

export function goToPlayStore() {
  window.location.href = getPlayStoreUrl();
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  window.location.hash = `#${id}`;
}
