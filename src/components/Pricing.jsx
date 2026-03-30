import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { goToApp } from '../appLinks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const CheckIcon = () => (
  <div style={{ background: 'rgba(0, 168, 168, 0.2)', borderRadius: '50%', padding: '2px', color: 'var(--logo-cyan)' }}>
    <Check size={14} strokeWidth={3} />
  </div>
);

export default function Pricing() {
  const { t, i18n } = useTranslation();

  const plansData = t('pricing.plans', { returnObjects: true });
  const rawPlans = plansData ? (Array.isArray(plansData) ? plansData : Object.values(plansData)) : [];
  
  const plans = rawPlans.map((plan, i) => ({
    ...plan,
    features: Array.isArray(plan.features) ? plan.features : [],
    highlight: i === 1
  }));

  return (
    <section key={i18n.language} id="plans" className="section-container" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem', letterSpacing: '-1px' }}
        >
          {t('pricing.title')}<span className="text-gradient">{t('pricing.titleHighlight')}</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {t('pricing.subtitle')}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            className={`glass-panel ${plan.highlight ? 'highlight-card' : ''}`}
            style={{
              flex: '1 1 300px',
              maxWidth: plan.highlight ? '400px' : '350px',
              padding: plan.highlight ? '3rem 2rem' : '2.5rem 2rem',
              position: 'relative',
              border: plan.highlight ? '1px solid var(--logo-cyan-glow)' : '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: plan.highlight ? '0 0 40px var(--logo-cyan-glow)' : 'none',
              transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
              zIndex: plan.highlight ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = `translateY(-10px) scale(${plan.highlight ? 1.05 : 1})`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = `translateY(0) scale(${plan.highlight ? 1.05 : 1})`;
            }}
          >
            {plan.tagline && (
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, var(--logo-cyan), #14e1e1)',
                color: '#fff',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '1px',
                boxShadow: '0 5px 15px var(--logo-cyan-glow)'
              }}>
                {plan.tagline}
              </div>
            )}

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '40px' }}>{plan.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{plan.price}</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{plan.period}</span>
            </div>

            <button 
              className={plan.highlight ? "glow-btn" : ""}
              style={!plan.highlight ? {
                width: '100%',
                padding: '1rem',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                transition: 'background 0.3s ease'
              } : { width: '100%' }}
              onMouseOver={(e) => {
                 if(!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseOut={(e) => {
                 if(!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onClick={() => goToApp('/')}
            >
              {plan.cta}
            </button>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}>
                  <CheckIcon />
                  <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
