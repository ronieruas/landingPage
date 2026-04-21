import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const screenshots = [
  '/media__1774146993924.jpg',
  '/media__1774146993945.jpg',
  '/media__1774146994015.jpg',
  '/media__1774146994024.jpg',
  '/media__1774146994030.jpg',
  '/media__1774149087351.jpg',
  '/media__1774149087357.jpg',
  '/media__1774149087415.jpg',
  '/media__1774149087459.jpg'
];

export default function ProductShowcase() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getIdx = (offset) => (currentIndex + offset + screenshots.length) % screenshots.length;
  
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % screenshots.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + screenshots.length) % screenshots.length);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // transforms for the left mockup
  const yLeft = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.5, 1], [0, -15, -20]);
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [0, -160, -200]);

  // transforms for the middle mockup (Hero mockup)
  const yCenter = useTransform(scrollYProgress, [0, 0.5, 1], [150, 20, -100]);
  const scaleCenter = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const zIndexCenter = 10;

  // transforms for the right mockup
  const yRight = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 20]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [0, 160, 200]);

  return (
    <section id="demo" ref={containerRef} style={{ padding: '8rem 2rem', paddingTop: '4rem', overflow: 'hidden', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', zIndex: 20 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem', letterSpacing: '-1px' }}
        >
          {t('showcase.title')}<span className="text-gradient">{t('showcase.titleHighlight')}</span>
        </motion.h2>
        <p className="showcase-lead">
          {t('showcase.lead')}
        </p>
        <div className="showcase-video">
          <div className="showcase-video-device">
            <div className="showcase-video-screen">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/tablet-mockup.png"
                aria-label={t('showcase.videoAlt')}
                title={t('showcase.videoAlt')}
              >
                <source src="/copy_n_paste.mp4" type="video/mp4" />
                <p>{t('showcase.videoFallback')}</p>
              </video>
            </div>
          </div>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {t('showcase.subtitle')} 
          <br/><span style={{ fontSize: '0.9rem', color: 'var(--neon-green)', marginTop: '0.5rem', display: 'inline-block' }}>{t('showcase.hint')}</span>
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '400px',
        maxWidth: '1000px',
        margin: '0 auto',
        perspective: '1200px'
      }}>
        
        {/* Background glow for the mockups */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(138, 154, 91, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}></div>

        {/* Left Mockup */}
        <motion.div style={{
          position: 'absolute',
          y: yLeft,
          x: xLeft,
          rotateZ: rotateLeft,
          zIndex: 5,
          borderRadius: '32px',
          padding: '6px',
          background: 'linear-gradient(145deg, rgba(80,80,80,0.5), rgba(0,0,0,0.8))',
          boxShadow: '-20px 20px 40px rgba(0,0,0,0.5)',
          cursor: 'pointer'
        }} onClick={handlePrev}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={screenshots[getIdx(-1)]}
              src={screenshots[getIdx(-1)]} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              alt="App screen left" 
              style={{ width: '240px', borderRadius: '26px', display: 'block' }} 
            />
          </AnimatePresence>
        </motion.div>

        {/* Center Mockup */}
        <motion.div style={{
          position: 'absolute',
          y: yCenter,
          scale: scaleCenter,
          zIndex: zIndexCenter,
          borderRadius: '32px',
          padding: '8px',
          background: 'linear-gradient(135deg, rgba(138, 154, 91, 0.6), rgba(44, 48, 51, 0.9))',
          boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(138, 154, 91, 0.3)',
          cursor: 'pointer'
        }} onClick={handleNext}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={screenshots[getIdx(0)]}
              src={screenshots[getIdx(0)]} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              alt="App screen center" 
              style={{ width: '280px', borderRadius: '26px', display: 'block' }} 
            />
          </AnimatePresence>
        </motion.div>

        {/* Right Mockup */}
        <motion.div style={{
          position: 'absolute',
          y: yRight,
          x: xRight,
          rotateZ: rotateRight,
          zIndex: 5,
          borderRadius: '32px',
          padding: '6px',
          background: 'linear-gradient(145deg, rgba(80,80,80,0.5), rgba(0,0,0,0.8))',
          boxShadow: '20px 20px 40px rgba(0,0,0,0.5)',
          cursor: 'pointer'
        }} onClick={handleNext}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={screenshots[getIdx(1)]}
              src={screenshots[getIdx(1)]} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              alt="App screen right" 
              style={{ width: '240px', borderRadius: '26px', display: 'block' }} 
            />
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
