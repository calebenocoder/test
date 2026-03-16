import { motion } from 'framer-motion';
import { i18n } from '../i18n';

export default function Gallery() {
  const { gallery } = i18n;

  return (
    <section 
      id="gallery"
      style={{
        padding: '120px 0',
        background: 'var(--cream-dark)',
        position: 'relative',
        color: 'var(--dark)'
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
          {gallery.badge}
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
            color: 'var(--dark-soft)',
            letterSpacing: '8px',
            textTransform: 'uppercase',
          }}
        >
          {gallery.title}
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
             margin: '32px auto 0',
           }}
        />
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {gallery.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            style={{
              aspectRatio: '4/5',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'zoom-in',
              background: 'var(--cream)',
              border: '1px solid rgba(207, 181, 59, 0.1)',
            }}
          >
            <img 
              src={img} 
              alt={`Transformação Lumière ${index + 1}`} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) saturate(1.1)',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
