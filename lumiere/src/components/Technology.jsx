import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShimmerLine } from './LightBeam';

const stats = [
  { value: '2,940', unit: 'nm', label: 'Wavelength' },
  { value: '99.7', unit: '%', label: 'Precision Rate' },
  { value: '0', unit: '', label: 'Pain Level' },
  { value: '50', unit: '%', label: 'Faster Healing' },
];

const benefits = [
  {
    title: 'Virtually Painless',
    text: 'The Er:YAG laser operates at the optimal wavelength for tissue interaction, enabling procedures that are virtually painless — often without anesthesia.',
  },
  {
    title: 'Minimally Invasive',
    text: 'Precise energy delivery means only the targeted tissue is affected. Surrounding healthy tissue remains completely untouched and unharmed.',
  },
  {
    title: 'Accelerated Recovery',
    text: 'Laser treatment promotes faster cellular regeneration and reduces post-operative discomfort, cutting healing time by up to half.',
  },
  {
    title: 'Unmatched Versatility',
    text: 'From soft tissue surgery to hard tissue preparation, implant procedures to periodontal treatment — one instrument, infinite possibilities.',
  },
];

export default function Technology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section
      id="technology"
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 40px',
        background: 'linear-gradient(180deg, var(--dark) 0%, var(--dark-soft) 50%, var(--dark) 100%)',
        overflow: 'hidden',
      }}
    >
      <ShimmerLine delay={1} top="20%" />
      <ShimmerLine delay={4} top="60%" />
      <ShimmerLine delay={7} top="85%" />

      {/* Decorative laser beam */}
      <motion.div
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(207, 181, 59, 0.15), transparent)',
          zIndex: 0,
        }}
      />

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
            The Science of Light
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
              marginBottom: '24px',
            }}
          >
            LiteTouch™ Er:YAG Laser
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            style={{
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 2,
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            The world's most advanced dental laser system. A breakthrough in
            precision dentistry that redefines patient comfort and clinical outcomes.
          </motion.p>
        </div>

        {/* Laser Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto 100px',
            padding: '60px',
            background: 'rgba(10, 10, 8, 0.8)',
            border: '1px solid rgba(207, 181, 59, 0.1)',
          }}
        >
          {/* Animated laser diagram */}
          <svg width="100%" viewBox="0 0 600 200" style={{ overflow: 'visible' }}>
            {/* Handpiece body */}
            <rect x="50" y="75" width="200" height="50" rx="4" fill="none" stroke="#CFB53B" strokeWidth="0.5" opacity="0.6" />
            <rect x="60" y="85" width="180" height="30" rx="2" fill="none" stroke="#CFB53B" strokeWidth="0.3" opacity="0.3" />
            <text x="150" y="105" textAnchor="middle" fill="#CFB53B" fontSize="10" fontFamily="Montserrat" opacity="0.6">LiteTouch™</text>

            {/* Laser beam */}
            <motion.line
              x1="250" y1="100" x2="450" y2="100"
              stroke="url(#laserGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? {
                pathLength: 1,
                opacity: [0, 1, 1, 0.7],
              } : {}}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            {/* Beam glow */}
            <motion.line
              x1="250" y1="100" x2="450" y2="100"
              stroke="#CFB53B"
              strokeWidth="8"
              opacity="0.1"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{ filter: 'blur(4px)' }}
            />

            {/* Impact point */}
            <motion.circle
              cx="450" cy="100" r="3"
              fill="#CFB53B"
              initial={{ scale: 0 }}
              animate={inView ? {
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0.8],
              } : {}}
              transition={{
                duration: 1,
                delay: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.circle
              cx="450" cy="100" r="12"
              fill="none"
              stroke="#CFB53B"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? {
                scale: [0, 2, 3],
                opacity: [0.6, 0.2, 0],
              } : {}}
              transition={{
                duration: 2,
                delay: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            {/* Labels */}
            <text x="150" y="145" textAnchor="middle" fill="#A09880" fontSize="9" fontFamily="Montserrat" letterSpacing="2">HANDPIECE</text>
            <text x="350" y="80" textAnchor="middle" fill="#CFB53B" fontSize="9" fontFamily="Montserrat" letterSpacing="2" opacity="0.7">2,940nm BEAM</text>
            <text x="450" y="145" textAnchor="middle" fill="#A09880" fontSize="9" fontFamily="Montserrat" letterSpacing="2">TARGET</text>

            <defs>
              <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CFB53B" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E8D068" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFBF0" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap',
            marginBottom: '100px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '42px',
                fontWeight: 300,
                color: 'var(--old-gold)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {stat.value}
                <span style={{ fontSize: '18px', opacity: 0.7 }}>{stat.unit}</span>
              </div>
              <p style={{
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
        }}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
              style={{
                padding: '36px',
                borderLeft: '1px solid rgba(207, 181, 59, 0.2)',
              }}
            >
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '22px',
                fontWeight: 400,
                color: 'var(--cream)',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}>
                {benefit.title}
              </h4>
              <p style={{
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'var(--text-muted)',
              }}>
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
