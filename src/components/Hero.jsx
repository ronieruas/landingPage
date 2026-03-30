import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { goToRegister, scrollToId } from '../appLinks';

export default function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const words = [t('hero.words.rehearsals'), t('hero.words.performances'), t('hero.words.church_services'), t('hero.words.tours')];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '6rem'
    }}>
      
      {/* Abstract floating shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }}
      >
        <Music size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.1 }}
      >
        <Music size={160} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'rgba(74, 222, 128, 0.1)',
          border: '1px solid rgba(74, 222, 128, 0.2)',
          borderRadius: '50px',
          color: 'var(--neon-green)',
          fontSize: '0.85rem',
          fontWeight: '600',
          marginBottom: '2rem'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', boxShadow: '0 0 10px var(--neon-green)' }}></span>
        {t('hero.badge')}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ marginBottom: '2rem', width: '100%', maxWidth: '800px', position: 'relative' }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(138, 154, 91, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}></div>
        <img 
          src="/tablet-mockup.png" 
          alt="ChordChart Pro Tablet Interface" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '16px', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)', 
            position: 'relative', 
            zIndex: 1, 
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#1a1a1a' /* placeholder background if image not found */
          }}
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ 
          fontSize: 'clamp(3rem, 6vw, 5rem)', 
          lineHeight: '1.1',
          letterSpacing: '-2px',
          marginBottom: '1.5rem',
          maxWidth: '900px'
        }}
      >
        {t('hero.title')}<span className="text-gradient">{t('hero.titleHighlight')}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
          color: 'var(--text-secondary)',
          maxWidth: '700px',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}
      >
        {t('hero.desc')}<br/>
        <span style={{ display: 'inline-block', position: 'relative', height: '30px', marginTop: '0.5rem' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', color: 'var(--neon-green)', fontWeight: '600' }}
            >
              {words[index]}.
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <button
          className="glow-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1.2rem 2.5rem' }}
          onClick={goToRegister}
        >
          {t('hero.startBtn')} <ChevronRight size={20} />
        </button>
        <button
          className="glass-panel"
          style={{
            color: 'var(--text-primary)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '1.2rem 2.5rem',
            borderRadius: '50px',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
            cursor: 'pointer',
            background: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          onClick={() => scrollToId('demo')}
        >
          {t('hero.demoBtn')}
        </button>
      </motion.div>

    </section>
  );
}
