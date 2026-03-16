import { motion } from 'framer-motion';
import { i18n } from '../i18n';

export default function Team() {
  const { team } = i18n;

  return (
    <section 
      id="team"
      style={{
        padding: '120px 0',
        background: 'var(--cream)',
        position: 'relative',
        color: 'var(--dark)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '80px',
        flexWrap: 'wrap-reverse'
      }}>
        {/* Content Side */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              border: '1px solid rgba(207, 181, 59, 0.4)',
              borderRadius: '100px',
              color: 'var(--old-gold-dark)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {team.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '2px',
              marginBottom: '32px',
            }}
          >
            {team.title}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '60px',
              height: '1px',
              background: 'var(--old-gold)',
              marginBottom: '32px',
              transformOrigin: 'left'
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--dark-medium)',
              fontWeight: 300,
            }}
          >
            {team.description}
          </motion.p>
        </div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: '1 1 500px' }}
        >
          <div style={{
            position: 'relative',
            padding: '20px',
            background: 'var(--cream-dark)',
            borderRadius: '4px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '40%',
              height: '40%',
              borderTop: '1px solid var(--old-gold)',
              borderRight: '1px solid var(--old-gold)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-10px',
              width: '40%',
              height: '40%',
              borderBottom: '1px solid var(--old-gold)',
              borderLeft: '1px solid var(--old-gold)',
            }} />
            
            <img 
              src={team.image} 
              alt="Nossa Equipe" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
                filter: 'contrast(1.05) saturate(1.1)',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative SVG */}
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        opacity: 0.05,
        pointerEvents: 'none'
      }}>
        <circle cx="100" cy="100" r="100" fill="var(--old-gold)"/>
      </svg>
    </section>
  );
}
