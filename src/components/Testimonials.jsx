import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { i18n } from '../i18n';

export default function Testimonials() {
  const containerRef = useRef(null);
  const items = i18n.testimonials.items;

  // Double items for seamless loop
  const loopItems = [...items, ...items, ...items];

  return (
    <section 
      id="testimonials"
      style={{
        padding: '120px 0',
        background: 'var(--dark)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 24px' }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            padding: '8px 20px',
            border: '1px solid rgba(207, 181, 59, 0.3)',
            borderRadius: '100px',
            color: 'var(--old-gold)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          {i18n.testimonials.badge}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300,
            color: 'var(--cream)',
            letterSpacing: '8px',
            textTransform: 'uppercase',
          }}
        >
          {i18n.testimonials.title}
        </motion.h2>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        {/* Carousel Container */}
        <motion.div
          style={{
            display: 'flex',
            gap: '40px',
            padding: '0 20px',
            width: 'max-content',
          }}
          animate={{
            x: [0, -1 * (items.length * 440)], // Approximate width of item + gap
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {loopItems.map((item, index) => (
            <div 
              key={index}
              style={{
                width: '400px',
                flexShrink: 0,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px'
              }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(207, 181, 59, 0.2)',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(207, 181, 59, 0.05) 0%, rgba(10, 10, 8, 0.8) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  viewBox="0 0 24 24" 
                  style={{ 
                    width: '40%', 
                    height: '40%', 
                    fill: 'none', 
                    stroke: 'var(--old-gold)', 
                    strokeWidth: '1', 
                    opacity: 0.4 
                  }}
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,8,0.4))'
                }} />
              </div>
              
              <div style={{ padding: '0 20px' }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'var(--text-light)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  letterSpacing: '0.5px',
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  "{item.text}"
                </p>
                <div style={{
                  width: '30px',
                  height: '1px',
                  background: 'var(--old-gold)',
                  margin: '20px auto 0',
                  opacity: 0.5
                }} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradeient Blurs on edges */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to right, var(--dark), transparent)',
          zIndex: 5,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to left, var(--dark), transparent)',
          zIndex: 5,
          pointerEvents: 'none'
        }} />
      </div>
    </section>
  );
}
