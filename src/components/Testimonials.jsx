import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      text: t('testimonials.items.0.text')
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      text: t('testimonials.items.1.text')
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      text: t('testimonials.items.2.text')
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-container" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative quotes background */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.03, color: 'var(--sage-green)' }}>
        <Quote size={200} />
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem', letterSpacing: '-1px' }}
        >
          {t('testimonials.title')}<span className="text-gradient">{t('testimonials.titleHighlight')}</span>
        </motion.h2>
      </div>

      <div style={{ 
        position: 'relative', 
        maxWidth: '800px', 
        margin: '0 auto',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        <button 
          onClick={prev}
          style={{ 
            position: 'absolute', left: '-50px', zIndex: 10,
            background: 'transparent', color: 'var(--text-secondary)', border: 'none', cursor: 'pointer',
            padding: '10px'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ChevronLeft size={32} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="glass-panel"
            style={{ 
              padding: '3rem', 
              textAlign: 'center',
              width: '100%',
              margin: '0 20px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '1.5rem', color: '#ffb266' }}>
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            
            <p style={{ 
              fontSize: '1.25rem', 
              fontStyle: 'italic', 
              color: 'var(--text-primary)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              "{testimonials[current].text}"
            </p>
            
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.2rem' }}>{testimonials[current].name}</h4>
              <p style={{ color: 'var(--sage-green)', fontSize: '0.9rem' }}>{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button 
          onClick={next}
          style={{ 
            position: 'absolute', right: '-50px', zIndex: 10,
            background: 'transparent', color: 'var(--text-secondary)', border: 'none', cursor: 'pointer',
            padding: '10px'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ChevronRight size={32} />
        </button>
      </div>
      
      {/* Pagination dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: idx === current ? 'var(--sage-green)' : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
