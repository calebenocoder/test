import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { i18n } from '../i18n';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      style={{
        position: 'relative',
        padding: '60px 40px 40px',
        background: 'var(--dark)',
        borderTop: '1px solid rgba(207, 181, 59, 0.08)',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={i18n.logos.golden} alt="Lumière" style={{ height: '28px', width: 'auto' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {i18n.nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#CFB53B'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: '12px',
            fontWeight: 300,
            color: 'var(--text-muted)',
            letterSpacing: '1px',
            opacity: 0.6,
          }}
        >
          &copy; {new Date().getFullYear()} {i18n.footer.copy}
        </motion.p>
      </div>
    </footer>
  );
}
