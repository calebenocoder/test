import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { i18n } from '../i18n';

const serviceIcons = [
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <line x1="24" y1="4" x2="24" y2="44" stroke="#CFB53B" strokeWidth="0.5" />
      <circle cx="24" cy="24" r="6" stroke="#CFB53B" strokeWidth="0.5" fill="none" />
      <circle cx="24" cy="24" r="12" stroke="#CFB53B" strokeWidth="0.3" fill="none" opacity="0.5" />
      <circle cx="24" cy="24" r="20" stroke="#CFB53B" strokeWidth="0.2" fill="none" opacity="0.3" />
      <line x1="24" y1="4" x2="18" y2="10" stroke="#CFB53B" strokeWidth="0.3" opacity="0.5" />
      <line x1="24" y1="4" x2="30" y2="10" stroke="#CFB53B" strokeWidth="0.3" opacity="0.5" />
    </svg>
  ),
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="18" y="8" width="12" height="14" rx="3" stroke="#CFB53B" strokeWidth="0.5" fill="none" />
      <line x1="21" y1="22" x2="21" y2="40" stroke="#CFB53B" strokeWidth="0.5" />
      <line x1="27" y1="22" x2="27" y2="40" stroke="#CFB53B" strokeWidth="0.5" />
      <line x1="21" y1="40" x2="27" y2="40" stroke="#CFB53B" strokeWidth="0.5" />
      <line x1="19" y1="28" x2="29" y2="28" stroke="#CFB53B" strokeWidth="0.3" opacity="0.5" />
      <line x1="20" y1="34" x2="28" y2="34" stroke="#CFB53B" strokeWidth="0.3" opacity="0.5" />
    </svg>
  ),
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M12 24 C12 14, 20 10, 24 10 C28 10, 36 14, 36 24 C36 34, 28 38, 24 38 C20 38, 12 34, 12 24Z" stroke="#CFB53B" strokeWidth="0.5" fill="none" />
      <path d="M16 24 C16 18, 20 14, 24 14 C28 14, 32 18, 32 24 C32 30, 28 34, 24 34 C20 34, 16 30, 16 24Z" stroke="#CFB53B" strokeWidth="0.3" fill="none" opacity="0.5" />
      <line x1="18" y1="20" x2="30" y2="20" stroke="#CFB53B" strokeWidth="0.3" opacity="0.4" />
      <line x1="18" y1="28" x2="30" y2="28" stroke="#CFB53B" strokeWidth="0.3" opacity="0.4" />
    </svg>
  ),
];

const services = i18n.services.items.map((item, i) => ({
  ...item,
  icon: serviceIcons[i],
}));

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        padding: '56px 40px 48px',
        background: 'rgba(26, 26, 21, 0.5)',
        border: '1px solid rgba(207, 181, 59, 0.08)',
        flex: '1 1 320px',
        maxWidth: '400px',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        cursor: 'default',
      }}
      whileHover={{
        borderColor: 'rgba(207, 181, 59, 0.25)',
        background: 'rgba(26, 26, 21, 0.8)',
        y: -8,
      }}
    >
      {/* Laser line accent on hover */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, var(--old-gold), transparent)',
          transformOrigin: 'top',
        }}
      />

      {/* Number */}
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '14px',
        color: 'var(--old-gold)',
        letterSpacing: '3px',
        fontWeight: 300,
      }}>
        {service.number}
      </span>

      {/* Icon */}
      <div style={{ margin: '28px 0' }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        fontWeight: 400,
        color: 'var(--cream)',
        letterSpacing: '2px',
        marginBottom: '6px',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'var(--old-gold)',
        marginBottom: '20px',
      }}>
        {service.subtitle}
      </p>

      <p style={{
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: 1.9,
        color: 'var(--text-muted)',
        marginBottom: '28px',
      }}>
        {service.description}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {service.features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{
              width: '16px',
              height: '1px',
              background: 'var(--old-gold)',
              opacity: 0.5,
            }} />
            <span style={{
              fontSize: '14px',
              fontWeight: 300,
              letterSpacing: '1px',
              color: 'var(--text-light)',
            }}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 40px',
        background: 'var(--dark)',
      }}
    >
      {/* Section header */}
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
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'var(--old-gold)',
            marginBottom: '16px',
          }}
        >
          {i18n.services.badge}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            color: 'var(--cream)',
            letterSpacing: '4px',
          }}
        >
          {i18n.services.title}
        </motion.h2>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '1300px',
        margin: '0 auto',
      }}>
        {services.map((service, i) => (
          <ServiceCard key={service.number} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
