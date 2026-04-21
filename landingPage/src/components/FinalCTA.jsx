import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { goToRegister } from '../appLinks';

export default function FinalCTA() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} style={{ 
      position: 'relative',
      padding: '10rem 2rem', 
      textAlign: 'center',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '4rem'
    }}>
      {/* Parallax Background Gradient */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '200%',
        background: 'linear-gradient(to bottom, transparent, rgba(138, 154, 91, 0.1))',
        y: backgroundY,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-1px' }}
        >
          {t('cta.title')}<span className="text-gradient-green">{t('cta.titleHighlight')}</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            className="glow-btn"
            style={{
              fontSize: '1.4rem',
              padding: '1.5rem 4rem',
              borderRadius: '50px',
              boxShadow: '0 0 50px rgba(138, 154, 91, 0.8)'
            }}
            onClick={goToRegister}
          >
            {t('cta.btn')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
