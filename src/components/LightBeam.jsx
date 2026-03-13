import { motion } from 'framer-motion';

export default function LightBeam({ delay = 0, top = '0%', left = '50%', angle = 0, width = 2, height = 300, opacity = 0.15 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{
        opacity: [0, opacity, opacity, 0],
        scaleY: [0, 1, 1, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        top,
        left,
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(180deg, rgba(207, 181, 59, 0.8) 0%, rgba(232, 208, 104, 0.3) 40%, transparent 100%)`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'top center',
        filter: 'blur(1px)',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}

export function LaserPulse({ delay = 0, x = '50%', y = '50%' }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: 'easeOut',
      }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(207, 181, 59, 0.4) 0%, rgba(232, 208, 104, 0.1) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 2,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export function GoldParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 1 + Math.random() * 3,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: '110vh', x: `${p.x}vw` }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            y: ['110vh', '-10vh'],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'var(--old-gold)',
            boxShadow: `0 0 ${p.size * 3}px rgba(207, 181, 59, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}

export function ShimmerLine({ delay = 0, top = '50%' }) {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{
        x: ['- 100%', '200%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: 'absolute',
        top,
        left: 0,
        width: '40%',
        height: '1px',
        background: 'var(--gold-shimmer)',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}
