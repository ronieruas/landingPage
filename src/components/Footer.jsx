import { useTranslation } from 'react-i18next';
import { getAppUrl, getLegalUrl, goToLogin } from '../appLinks';

export default function Footer() {
  const { t } = useTranslation();
  const appUrl = getAppUrl();
  const legalUrl = getLegalUrl();
  return (
    <footer style={{ 
      padding: '4rem 2rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: '#0b0f0c'
    }}>
      <div className="section-container" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: '2rem',
        padding: '0'
      }}>
        <button
          type="button"
          onClick={goToLogin}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}
        >
          <img 
            src="/logo.png" 
            alt="ChordChart Pro Logo" 
            style={{ width: '34px', height: '34px', objectFit: 'contain' }} 
          />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.1rem' }}>
            ChordChart <span className="text-gradient">Pro</span>
          </span>
        </button>
        
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <a href={legalUrl} style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>{t('footer.privacy')}</a>
          <a href={legalUrl} style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>{t('footer.terms')}</a>
          <a href="mailto:support@chordchartpro.com" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>{t('footer.contact')}</a>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--graphite-gray-light)', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} <a href={appUrl} style={{ color: 'inherit', textDecoration: 'none' }}>ChordChart Pro</a>. All rights reserved.
      </div>
    </footer>
  );
}
