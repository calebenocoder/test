import { motion } from 'framer-motion';
import LightBeam, { LaserPulse, GoldParticles, ShimmerLine } from './LightBeam';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <iframe
          src="https://www.youtube.com/embed/xwkUndtlmbE?autoplay=1&mute=1&loop=1&playlist=xwkUndtlmbE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '120vw',
            height: '120vh',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,8,0.7) 0%, rgba(10,10,8,0.5) 40%, rgba(10,10,8,0.8) 100%)',
          zIndex: 1,
        }} />
      </div>

      {/* Light Effects */}
      <LightBeam delay={1} top="0" left="20%" angle={15} height={500} opacity={0.08} />
      <LightBeam delay={3} top="0" left="75%" angle={-10} height={600} opacity={0.06} />
      <LightBeam delay={5} top="0" left="50%" angle={0} width={3} height={400} opacity={0.1} />
      <LaserPulse delay={2} x="30%" y="40%" />
      <LaserPulse delay={6} x="70%" y="60%" />
      <GoldParticles />
      <ShimmerLine delay={2} top="30%" />
      <ShimmerLine delay={7} top="70%" />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 24px',
      }}>
        {/* Decorative line above */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '60px',
            height: '1px',
            background: 'var(--old-gold)',
            margin: '0 auto 24px',
          }}
        />

        {/* Subtitle above */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: 'var(--old-gold)',
            marginBottom: '20px',
          }}
        >
          Advanced Dental Excellence
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontWeight: 300,
            letterSpacing: '16px',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '24px',
            position: 'relative',
          }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #CFB53B 0%, #E8D068 30%, #FFFBF0 50%, #E8D068 70%, #CFB53B 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'goldShimmer 4s linear infinite',
          }}>
            Lumière
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(18px, 3vw, 26px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text-light)',
            letterSpacing: '3px',
            marginBottom: '16px',
          }}
        >
          Where Light Meets Precision
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{
            fontSize: '13px',
            fontWeight: 300,
            color: 'var(--text-muted)',
            letterSpacing: '2px',
            marginBottom: '48px',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: 1.8,
          }}
        >
          Pioneering Er:YAG laser dentistry for a painless, precise,
          and transformative experience
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.a
            href="#technology"
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(207, 181, 59, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 44px',
              background: 'var(--old-gold)',
              color: 'var(--dark)',
              textDecoration: 'none',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              transition: 'all 0.4s ease',
            }}
          >
            Discover Our Technology
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, background: 'rgba(207, 181, 59, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 44px',
              border: '1px solid rgba(207, 181, 59, 0.4)',
              color: 'var(--old-gold)',
              textDecoration: 'none',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              background: 'transparent',
              transition: 'all 0.4s ease',
            }}
          >
            Schedule Visit
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <span style={{
          fontSize: '9px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '30px',
            background: 'linear-gradient(180deg, var(--old-gold), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes goldShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
