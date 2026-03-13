import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  { title: 'Precision', text: 'Every procedure guided by laser-accurate technology and decades of clinical expertise.' },
  { title: 'Comfort', text: 'Redefining the dental experience — treatments so gentle you\'ll forget you\'re at the dentist.' },
  { title: 'Excellence', text: 'Uncompromising standards in materials, techniques, and patient care at every step.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 40px',
        background: 'var(--dark)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.03 } : {}}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(200px, 25vw, 400px)',
          fontWeight: 300,
          color: 'var(--old-gold)',
          lineHeight: 1,
          pointerEvents: 'none',
          letterSpacing: '20px',
        }}
      >
        L
      </motion.div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--old-gold)',
              margin: '0 auto 20px',
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: 'var(--old-gold)',
              marginBottom: '16px',
            }}
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 300,
              color: 'var(--cream)',
              letterSpacing: '4px',
              marginBottom: '32px',
            }}
          >
            The Art of Modern Dentistry
          </motion.h2>
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '100px',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '24px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              marginBottom: '28px',
            }}>
              "At Lumière, we believe dentistry should be an experience of
              comfort and sophistication — not anxiety."
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 2,
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>
              Founded on the principle that advanced technology and refined
              care should work in harmony, Lumière represents the future of
              dental excellence. Our clinic combines the precision of Er:YAG
              laser technology with the warmth of personalized patient care.
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 2,
              color: 'var(--text-muted)',
            }}>
              Every detail — from our state-of-the-art LiteTouch™ laser
              systems to the carefully curated environment of our clinic —
              has been designed to transform your perception of dental care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            style={{
              padding: '48px',
              background: 'rgba(207, 181, 59, 0.03)',
              border: '1px solid rgba(207, 181, 59, 0.1)',
            }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--old-gold)',
              marginBottom: '32px',
            }}>
              Why Choose Lumière
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Certified LiteTouch™ Er:YAG Laser Center',
                'Minimally invasive approach to every procedure',
                'Same-day treatments with rapid recovery',
                'Biocompatible materials exclusively',
                'Personalized treatment planning with 3D imaging',
                'Luxury patient experience from arrival to aftercare',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--text-light)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--old-gold)',
                    marginTop: '6px',
                    flexShrink: 0,
                  }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Pillars */}
        <div style={{
          display: 'flex',
          gap: '1px',
          background: 'rgba(207, 181, 59, 0.1)',
          flexWrap: 'wrap',
        }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 + i * 0.15 }}
              style={{
                flex: '1 1 250px',
                padding: '48px 36px',
                background: 'var(--dark)',
                textAlign: 'center',
              }}
            >
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '24px',
                fontWeight: 400,
                color: 'var(--old-gold)',
                marginBottom: '16px',
                letterSpacing: '3px',
              }}>
                {pillar.title}
              </h4>
              <p style={{
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
              }}>
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
