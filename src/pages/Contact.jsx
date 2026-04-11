import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const subjects = ['General Inquiry', 'Membership Question', 'Personal Training', 'Health Assessment', 'Corporate Packages', 'Partnership Inquiry', 'Other']

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Get In Touch</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            CONTACT <span className="gradient-text">US</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '500px' }}>
            Ready to start your transformation? Have questions? Our team is here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Quick Contact Info Bar */}
      <div style={{ background: 'var(--accent-gradient)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '📞', label: 'Call Us', value: '+1 (555) IRONCORE', sub: 'Mon–Sun 7AM–9PM' },
              { icon: '✉️', label: 'Email', value: 'info@ironcoregym.com', sub: 'Reply within 24 hours' },
              { icon: '📍', label: 'Location', value: '142 Iron Ave, Steel City', sub: 'SC 29000, USA' },
              { icon: '🕐', label: 'Hours', value: 'Mon–Sun: 5AM–11PM', sub: '24/7 for Annual Members' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>{item.value}</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'start' }}>
            {/* Form */}
            <ScrollReveal>
              <div className="card" style={{ padding: '40px', borderTop: '3px solid var(--accent-red)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '2px', marginBottom: '8px' }}>SEND US A MESSAGE</h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', fontSize: '0.92rem', marginBottom: '32px' }}>
                  Fill out the form and one of our team members will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px 24px',
                    animation: 'fadeInUp 0.5s ease both',
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '2px', marginBottom: '12px' }}>MESSAGE SENT!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', marginBottom: '24px' }}>
                      Thank you, <strong style={{ color: '#fff' }}>{form.name}</strong>! We'll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                      className="btn-outline"
                    >Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          name="name"
                          className="form-input"
                          placeholder="John Steel"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="john@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Phone (Optional)</label>
                        <input
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <select
                          name="subject"
                          className="form-input"
                          value={form.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select a subject</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        className="form-input"
                        placeholder="Tell us about your goals, questions, or how we can help you..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        style={{ resize: 'vertical', minHeight: '140px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{
                        justifyContent: 'center',
                        padding: '16px',
                        fontSize: '1rem',
                        opacity: loading ? 0.7 : 1,
                      }}
                      disabled={loading}
                    >
                      {loading ? '⏳ Sending...' : '🚀 Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Map Embed */}
              <ScrollReveal delay={100}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div style={{
                    height: '280px',
                    background: 'var(--bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Fake map grid */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }} />
                    {/* Roads */}
                    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', left: '40%', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', left: '70%', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.05)' }} />

                    {/* Pin */}
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', animation: 'float 3s ease-in-out infinite' }}>📍</div>
                      <div style={{
                        background: 'var(--accent-gradient)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        letterSpacing: '1.5px',
                        color: '#fff',
                        marginTop: '8px',
                      }}>IRONCORE GYM</div>
                      <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', marginTop: '6px' }}>142 Iron Ave, Steel City SC</div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px' }}>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', padding: '10px' }}
                    >
                      🗺️ Open in Google Maps
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct Contact */}
              <ScrollReveal delay={150}>
                <div className="card" style={{ padding: '28px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '20px' }}>
                    DIRECT CONTACT
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { icon: '📞', title: 'Front Desk', value: '+1 (555) 476-6267', sub: 'Mon–Sun: 7AM–9PM' },
                      { icon: '✉️', title: 'General', value: 'info@ironcoregym.com', sub: '' },
                      { icon: '🏋️', title: 'Training Dept', value: 'coaching@ironcoregym.com', sub: '' },
                      { icon: '💳', title: 'Membership', value: 'membership@ironcoregym.com', sub: '' },
                    ].map((c, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</span>
                        <div>
                          <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700 }}>{c.title}</div>
                          <div style={{ color: '#fff', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, marginTop: '2px' }}>{c.value}</div>
                          {c.sub && <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.78rem' }}>{c.sub}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Book a Tour */}
              <ScrollReveal delay={200}>
                <div style={{
                  background: 'var(--accent-gradient)',
                  borderRadius: '14px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)' }} />
                  <div style={{ position: 'relative' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏋️</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', color: '#fff', marginBottom: '8px' }}>
                      BOOK A FREE TOUR
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', fontFamily: 'var(--font-ui)', marginBottom: '16px', lineHeight: 1.6 }}>
                      Come see the facility, meet our coaches, and experience IRONCORE before you commit.
                    </p>
                    <a
                      href="tel:+15554766267"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        borderRadius: '8px',
                        padding: '12px',
                        color: '#fff',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >📅 Call to Schedule</a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
