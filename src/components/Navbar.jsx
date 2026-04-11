import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/fitness-tips', label: 'Tips' },
  { path: '/diet-nutrition', label: 'Diet' },
  { path: '/equipment', label: 'Equipment' },
  { path: '/trainers', label: 'Trainers' },
  { path: '/membership', label: 'Membership' },
]

const MORE_LINKS = [
  { path: '/bmi-calculator', label: 'BMI Calculator' },
  { path: '/calorie-calculator', label: 'Calorie Calc' },
  { path: '/health-test', label: 'Health Test' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (p) => pathname === p

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: 38, height: 38,
              background: 'var(--accent-gradient)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              letterSpacing: '-1px',
              flexShrink: 0,
            }}>⚡</div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                letterSpacing: '3px',
                lineHeight: 1,
                color: '#fff',
              }}>IRONCORE</div>
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.6rem',
                letterSpacing: '4px',
                color: 'var(--accent-orange)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}>FORGE YOUR LEGEND</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <Link key={link.path} to={link.path} style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: isActive(link.path) ? 'var(--accent-orange)' : 'rgba(255,255,255,0.75)',
                padding: '6px 10px',
                borderRadius: '6px',
                transition: 'all 0.2s',
                position: 'relative',
                borderBottom: isActive(link.path) ? '2px solid var(--accent-red)' : '2px solid transparent',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { if (!isActive(link.path)) e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              >{link.label}</Link>
            ))}

            {/* More dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setMoreOpen(p => !p)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: MORE_LINKS.some(l => isActive(l.path)) ? 'var(--accent-orange)' : 'rgba(255,255,255,0.75)',
                  padding: '6px 10px',
                  background: 'none',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  borderBottom: MORE_LINKS.some(l => isActive(l.path)) ? '2px solid var(--accent-red)' : '2px solid transparent',
                }}
              >More <span style={{ fontSize: '10px', transition: 'transform 0.2s', transform: moreOpen ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span></button>

              {moreOpen && (
                <div style={{
                  position: 'absolute', top: '100%', right: 0,
                  background: 'rgba(20,20,20,0.98)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '8px',
                  minWidth: '180px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
                  zIndex: 100,
                }}>
                  {MORE_LINKS.map(link => (
                    <Link key={link.path} to={link.path} style={{
                      display: 'block',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: isActive(link.path) ? 'var(--accent-orange)' : 'rgba(255,255,255,0.75)',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                      background: isActive(link.path) ? 'rgba(232,35,10,0.1)' : 'transparent',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = isActive(link.path) ? 'rgba(232,35,10,0.1)' : 'transparent'}
                    >{link.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/membership" className="btn-primary" style={{ marginLeft: '8px', padding: '10px 20px', fontSize: '0.78rem' }}>
              Join Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="hamburger"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(8,8,8,0.99)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '80px 24px 40px',
          overflowY: 'auto',
        }}>
          {[...NAV_LINKS, ...MORE_LINKS].map((link, i) => (
            <Link key={link.path} to={link.path} style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              letterSpacing: '3px',
              color: isActive(link.path) ? 'var(--accent-orange)' : '#fff',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 0.2s',
              animation: `fadeInUp 0.4s ease ${i * 0.05}s both`,
            }}>{link.label}</Link>
          ))}
          <Link to="/membership" className="btn-primary" style={{ marginTop: '24px', animation: 'fadeInUp 0.4s ease 0.6s both' }}>
            🔥 Join Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
