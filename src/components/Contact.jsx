import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { i18n } from '../i18n';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(i18n.contact.form.success);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(207, 181, 59, 0.2)',
    color: 'var(--cream)',
    fontSize: '16px',
    fontWeight: 300,
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '1px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative',
        padding: '140px 40px',
        background: 'linear-gradient(180deg, var(--dark) 0%, var(--dark-soft) 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
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
            {i18n.contact.badge}
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
            }}
          >
            {i18n.contact.title}
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '80px',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '26px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: 'var(--text-light)',
              marginBottom: '48px',
            }}>
              {i18n.contact.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { label: i18n.contact.info.location.label, value: i18n.contact.info.location.value },
                { label: i18n.contact.info.phone.label, value: i18n.contact.info.phone.label === 'Phone' ? '+1 (212) 555-0100' : i18n.contact.info.phone.value },
                { label: i18n.contact.info.email.label, value: i18n.contact.info.email.value },
                { label: i18n.contact.info.hours.label, value: i18n.contact.info.hours.value },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'var(--old-gold)',
                    marginBottom: '8px',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'var(--text-muted)',
                    whiteSpace: 'pre-line',
                  }}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <input
              type="text"
              name="name"
              placeholder={i18n.contact.form.name}
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderBottomColor = '#CFB53B'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(207, 181, 59, 0.2)'}
            />
            <input
              type="email"
              name="email"
              placeholder={i18n.contact.form.email}
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderBottomColor = '#CFB53B'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(207, 181, 59, 0.2)'}
            />
            <input
              type="tel"
              name="phone"
              placeholder={i18n.contact.form.phone}
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderBottomColor = '#CFB53B'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(207, 181, 59, 0.2)'}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                appearance: 'none',
                cursor: 'pointer',
                color: formData.service ? 'var(--cream)' : 'var(--text-muted)',
              }}
              onFocus={(e) => e.target.style.borderBottomColor = '#CFB53B'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(207, 181, 59, 0.2)'}
            >
              <option value="" disabled>{i18n.contact.form.servicePlaceholder}</option>
              {i18n.contact.form.services.map(service => (
                <option key={service.value} value={service.value}>{service.label}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={i18n.contact.form.message}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                resize: 'none',
                borderBottom: '1px solid rgba(207, 181, 59, 0.2)',
              }}
              onFocus={(e) => e.target.style.borderBottomColor = '#CFB53B'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(207, 181, 59, 0.2)'}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(207, 181, 59, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: '16px',
                padding: '16px 44px',
                background: 'var(--old-gold)',
                color: 'var(--dark)',
                border: 'none',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '4px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                alignSelf: 'flex-start',
              }}
            >
              {i18n.contact.form.submit}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
