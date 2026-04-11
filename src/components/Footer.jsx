import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  'Quick Links': [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/membership', label: 'Membership' },
  ],
  'Resources': [
    { path: '/fitness-tips', label: 'Fitness Tips' },
    { path: '/diet-nutrition', label: 'Diet & Nutrition' },
    { path: '/bmi-calculator', label: 'BMI Calculator' },
    { path: '/calorie-calculator', label: 'Calorie Calc' },
    { path: '/health-test', label: 'Health Test' },
  ],
  'Facility': [
    { path: '/equipment', label: 'Equipment' },
    { path: '/health-test', label: 'Wellness Testing' },
    { path: '/contact', label: 'Find Us' },
    { path: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '80px',
    }}>
      {/* CTA Banner */}
      <div style={{
        background: 'var(--accent-gradient)',
        padding: '48px 0',
        textAlign: 'center',
        marginBottom: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '3px', color: '#fff', marginBottom: '8px' }}>
            START YOUR TRANSFORMATION TODAY
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '24px', fontFamily: 'var(--font-ui)', fontSize: '1.1rem' }}>
            No more excuses. Your best body is waiting.
          </p>
          <Link to="/membership" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>
            View Membership Plans
          </Link>
        </div>
      </div>

      <div className="container">
        {/* Main Footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', textDecoration: 'none' }}>
              <div style={{
                width: 40, height: 40,
                background: 'var(--accent-gradient)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>⚡</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '3px', color: '#fff' }}>IRONCORE</div>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '280px' }}>
              Where champions are forged. Elite training, professional guidance, and a community that pushes you beyond limits.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['📘','📸','🐦','▶️'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 40, height: 40,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,35,10,0.2)'; e.currentTarget.style.borderColor = 'rgba(232,35,10,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--accent-orange)',
                marginBottom: '20px',
              }}>{title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-ui)',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      transition: 'color 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >→ {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div style={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          padding: '32px 0',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '32px',
        }}>
          {[
            { icon: '📍', label: '142 Iron Ave, Steel City, SC 29000' },
            { icon: '📞', label: '+1 (555) IRONCORE' },
            { icon: '✉️', label: 'info@ironcoregym.com' },
            { icon: '🕐', label: 'Mon–Sun: 5 AM – 11 PM' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 500 }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-ui)' }}>
            © 2025 IRONCORE GYM. All rights reserved. Forge Your Legend.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{
                color: 'var(--text-muted)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-ui)',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-orange)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
