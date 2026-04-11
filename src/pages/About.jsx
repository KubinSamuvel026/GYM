import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const values = [
  { icon: '💪', title: 'Intensity', desc: 'We train with purpose. Every session is designed to challenge you beyond what you thought possible.' },
  { icon: '🔬', title: 'Science', desc: 'Our methods are rooted in sports science and continuously updated with the latest research.' },
  { icon: '🤝', title: 'Community', desc: 'We\'re a family of driven individuals who push, support, and celebrate each other.' },
  { icon: '🎯', title: 'Results', desc: 'We measure success in real, tangible transformations — not just hours spent in the gym.' },
  { icon: '🧠', title: 'Education', desc: 'We believe knowledge is power. We teach you to understand your body and training.' },
  { icon: '❤️', title: 'Commitment', desc: 'We\'re committed to your journey from day one to your greatest achievement.' },
]

const timeline = [
  { year: '2016', title: 'Founded', desc: 'IRONCORE was born from a vision: a gym where science meets sweat and results are non-negotiable.' },
  { year: '2018', title: 'Expanded', desc: 'Grew to 1,000+ members. Added nutrition coaching, health testing, and specialized programs.' },
  { year: '2020', title: 'Digital Integration', desc: 'Launched online coaching programs, virtual classes, and progress tracking apps.' },
  { year: '2022', title: 'New Facility', desc: 'Opened our 12,000 sq ft state-of-the-art training facility with premium equipment.' },
  { year: '2024', title: 'Award Winning', desc: 'Recognized as the #1 gym in the region. 2,500+ members. 15 certified coaches.' },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div style={{ animation: 'fadeInUp 0.6s ease both' }}>
            <div className="section-label">About IRONCORE</div>
          </div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            OUR <span className="gradient-text">STORY</span>
          </h1>
          <p className="page-header-subtitle" style={{ maxWidth: '600px', animation: 'fadeInUp 0.6s ease 0.2s both' }}>
            More than a gym. A movement built on sweat, science, and the unbreakable belief that
            every person is capable of extraordinary transformation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">🔥 Who We Are</div>
                <h2 className="section-title">BUILT FOR<br /><span className="gradient-text">CHAMPIONS</span></h2>
                <div className="divider" />
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                  IRONCORE GYM was founded with a single, unwavering mission: to create a training environment
                  where ordinary people achieve extraordinary results. We believe fitness is not a privilege
                  reserved for athletes — it's a right for everyone willing to put in the work.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
                  From our first day, we've invested in the best trainers, the most advanced equipment,
                  and evidence-based programming that delivers consistent, measurable transformations.
                  Our 98% success rate speaks for itself.
                </p>
                <Link to="/membership" className="btn-primary">Join Our Community</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: '🏆', number: '2500+', label: 'Active Members' },
                  { icon: '⚡', number: '15+', label: 'Expert Coaches' },
                  { icon: '📅', number: '8+', label: 'Years Open' },
                  { icon: '🌟', number: '98%', label: 'Success Rate' },
                ].map((s, i) => (
                  <div key={i} className="card" style={{
                    padding: '28px',
                    textAlign: 'center',
                    borderTop: '3px solid var(--accent-red)',
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '2px', color: '#fff' }}>{s.number}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-ui)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">💡 What Drives Us</div>
              <h2 className="section-title">OUR CORE <span className="gradient-text">VALUES</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>Every decision we make is guided by these principles.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent-red)' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">📅 Our Journey</div>
              <h2 className="section-title">THE IRONCORE <span className="gradient-text">TIMELINE</span></h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-red), var(--accent-orange), transparent)',
              transform: 'translateX(-50%)',
            }} />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '24px',
                  marginBottom: '48px',
                  alignItems: 'center',
                }}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="card" style={{ padding: '24px', textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '2px', marginBottom: '8px' }}>{item.title}</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                      <div style={{
                        width: 48, height: 48,
                        background: 'var(--accent-gradient)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        letterSpacing: '1px',
                        color: '#fff',
                        flexShrink: 0,
                        zIndex: 1,
                        boxShadow: '0 0 20px rgba(232,35,10,0.5)',
                      }}>{item.year}</div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div style={{
                        width: 48, height: 48,
                        background: 'var(--accent-gradient)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        letterSpacing: '1px',
                        color: '#fff',
                        flexShrink: 0,
                        zIndex: 1,
                        boxShadow: '0 0 20px rgba(232,35,10,0.5)',
                      }}>{item.year}</div>
                      <div className="card" style={{ padding: '24px' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '2px', marginBottom: '8px' }}>{item.title}</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Philosophy */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: 'clamp(40px, 5vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '3px',
              background: 'var(--accent-gradient)',
            }} />
            <ScrollReveal>
              <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
                <div className="section-label">Our Philosophy</div>
                <h2 className="section-title" style={{ marginBottom: '24px' }}>
                  THE IRONCORE <span className="gradient-text">APPROACH</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.85, marginBottom: '24px' }}>
                  Our coaches don't just count reps. They study your movement patterns, analyze your nutrition,
                  monitor your recovery, and build a relationship based on trust and accountability.
                  We believe in teaching you to be your own best coach.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.85 }}>
                  Every trainer at IRONCORE holds multiple certifications, undergoes continuous education,
                  and must demonstrate their expertise through regular performance reviews.
                  When you train here, you're learning from the best.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
