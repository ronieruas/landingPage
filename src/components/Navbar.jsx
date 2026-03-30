import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { goToLogin } from '../appLinks';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'rgba(11, 15, 12, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <button
        type="button"
        onClick={goToLogin}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}
      >
        <img 
          src="/logo.png" 
          alt="ChordChart Pro Logo" 
          style={{ width: '42px', height: '42px', objectFit: 'contain' }} 
        />
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: '700', 
          fontSize: '1.25rem',
          letterSpacing: '-0.5px'
        }}>
          ChordChart <span className="text-gradient">Pro</span>
        </span>
      </button>
      
      <div style={{ display: 'none', gap: '2rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="nav-links">
        <a href="#features">{t('nav.features')}</a>
        <a href="#plans">{t('nav.pricing')}</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Language Switcher */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.6rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={() => changeLanguage('en')} style={{ background: i18n.language === 'en' ? 'rgba(74, 222, 128, 0.2)' : 'transparent', color: i18n.language === 'en' ? 'var(--neon-green)' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '30px', transition: 'all 0.2s' }}>EN</button>
          <button onClick={() => changeLanguage('pt')} style={{ background: i18n.language === 'pt' ? 'rgba(74, 222, 128, 0.2)' : 'transparent', color: i18n.language === 'pt' ? 'var(--neon-green)' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '30px', transition: 'all 0.2s' }}>PT</button>
          <button onClick={() => changeLanguage('es')} style={{ background: i18n.language === 'es' ? 'rgba(74, 222, 128, 0.2)' : 'transparent', color: i18n.language === 'es' ? 'var(--neon-green)' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '30px', transition: 'all 0.2s' }}>ES</button>
        </div>
        <button
          className="glow-btn"
          style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
          onClick={goToLogin}
        >
          {t('nav.getStarted')}
        </button>
      </div>
    </motion.nav>
  );
}
