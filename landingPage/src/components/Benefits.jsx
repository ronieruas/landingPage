import { motion } from 'framer-motion';
import { Layers, Users, Smartphone, Zap, Music2, Sliders } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Users size={32} />,
      title: t('benefits.items.0.title'),
      desc: t('benefits.items.0.desc')
    },
    {
      icon: <Layers size={32} />,
      title: t('benefits.items.1.title'),
      desc: t('benefits.items.1.desc')
    },
    {
      icon: <Music2 size={32} />,
      title: t('benefits.items.2.title'),
      desc: t('benefits.items.2.desc')
    },
    {
      icon: <Zap size={32} />,
      title: t('benefits.items.3.title'),
      desc: t('benefits.items.3.desc')
    },
    {
      icon: <Smartphone size={32} />,
      title: t('benefits.items.4.title'),
      desc: t('benefits.items.4.desc')
    },
    {
      icon: <Sliders size={32} />,
      title: t('benefits.items.5.title'),
      desc: t('benefits.items.5.desc')
    }
  ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

  return (
    <section id="features" className="section-container" style={{ padding: '8rem 2rem' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem', letterSpacing: '-1px' }}>
          {t('benefits.title')}<span className="text-gradient">{t('benefits.titleHighlight')}</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {t('benefits.subtitle')}
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {benefits.map((b, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(138, 154, 91, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '16px', 
              background: 'rgba(74, 222, 128, 0.1)',
              color: 'var(--neon-green)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(74, 222, 128, 0.2)'
            }}>
              {b.icon}
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: '600' }}>
                {b.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                {b.desc}
              </p>
            </div>
            
            {/* Subtle glow orb in the corner */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'var(--sage-green-glow)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
