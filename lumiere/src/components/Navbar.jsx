import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 40px' : '24px 40px',
        background: scrolled ? 'rgba(10, 10, 8, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(207, 181, 59, 0.15)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <motion.a
        href="#hero"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '28px',
          fontWeight: 300,
          letterSpacing: '8px',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #CFB53B, #E8D068, #CFB53B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
        }}
        whileHover={{ scale: 1.02 }}
      >
        Lumière
      </motion.a>

      {/* Desktop Nav */}
      <div style={{
        display: 'flex',
        gap: '36px',
        alignItems: 'center',
      }}
        className="desktop-nav"
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              position: 'relative',
              padding: '4px 0',
              transition: 'color 0.3s ease',
            }}
            whileHover={{ color: '#CFB53B' }}
            onMouseEnter={(e) => {
              const underline = e.target.querySelector('.nav-underline');
              if (underline) underline.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
              const underline = e.target.querySelector('.nav-underline');
              if (underline) underline.style.transform = 'scaleX(0)';
            }}
          >
            {link.name}
            <span
              className="nav-underline"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'var(--old-gold)',
                transform: 'scaleX(0)',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transformOrigin: 'left',
              }}
            />
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            padding: '10px 28px',
            border: '1px solid var(--old-gold)',
            color: 'var(--old-gold)',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            transition: 'all 0.4s ease',
          }}
          whileHover={{
            background: 'var(--old-gold)',
            color: 'var(--dark)',
          }}
        >
          Book Now
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          zIndex: 1100,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: menuOpen ? '0px' : '6px', transition: 'all 0.3s ease' }}>
          <span style={{
            width: '24px', height: '1px', background: 'var(--old-gold)',
            transform: menuOpen ? 'rotate(45deg) translateY(0.5px)' : 'none',
            transition: 'all 0.3s ease',
          }} />
          <span style={{
            width: '24px', height: '1px', background: 'var(--old-gold)',
            opacity: menuOpen ? 0 : 1,
            transition: 'all 0.3s ease',
          }} />
          <span style={{
            width: '24px', height: '1px', background: 'var(--old-gold)',
            transform: menuOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'none',
            transition: 'all 0.3s ease',
          }} />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'rgba(10, 10, 8, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              zIndex: 1050,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '32px',
                  fontWeight: 300,
                  letterSpacing: '6px',
                  textTransform: 'uppercase',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
