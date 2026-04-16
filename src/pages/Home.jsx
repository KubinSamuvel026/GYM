import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroCanvas from '../models/HeroCanvas'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

/* ── Stats ────────────────────────────── */
const stats = [
  { end: 2500, suffix: '+', label: 'Active Members' },
  { end: 15, suffix: '+', label: 'Expert Trainers' },
  { end: 8, suffix: '', label: 'Years of Excellence' },
  { end: 98, suffix: '%', label: 'Success Rate' },
]

/* ── Programs ─────────────────────────── */
const programs = [
  { icon: '', title: 'Muscle Building', desc: 'Hypertrophy-focused training for maximum size and definition.', tag: 'POPULAR' },
  { icon: '', title: 'Fat Loss', desc: 'High-intensity protocols engineered to torch fat fast.', tag: 'HOT' },
  { icon: '', title: 'Strength Training', desc: 'Progressive overload systems to build raw power.', tag: '' },
  { icon: '', title: 'Cross Training', desc: 'Explosive functional fitness for total body conditioning.', tag: 'NEW' },
  { icon: '', title: 'Combat Fitness', desc: 'Boxing-inspired cardio that builds muscle and burns fat.', tag: '' },
  { icon: '', title: 'Beginner Plans', desc: 'Science-backed foundations for your fitness journey.', tag: '' },
]

/* ── Trainers ─────────────────────────── */
const trainers = [
  { name: 'Marcus Steel', role: 'Head Coach', speciality: 'Powerlifting & Hypertrophy', exp: '12 yrs', icon: '🏆' },
  { name: 'Elena Voss', role: 'HIIT Specialist', speciality: 'Fat Loss & Conditioning', exp: '9 yrs', icon: '⚡' },
  { name: 'Darius Knight', role: 'Combat Coach', speciality: 'Boxing & Functional Fitness', exp: '11 yrs', icon: '🥊' },
]

/* ── Testimonials ──────────────────────── */
const testimonials = [
  { name: 'James R.', result: 'Lost 42 lbs in 6 months', text: 'Ironcore completely transformed my life. The trainers are world-class and the community keeps you accountable every single day.', stars: 5 },
  { name: 'Sarah M.', result: 'Gained 18 lbs of muscle', text: 'Best investment I\'ve ever made. The structured programs and nutrition guidance gave me the body I always dreamed of.', stars: 5 },
  { name: 'Carlos D.', result: 'First powerlifting competition', text: 'From complete beginner to competition-ready in 12 months. The coaching here is unmatched in this city.', stars: 5 },
  { name: 'Priya K.', result: 'Completed first marathon', text: 'The cross-training and endurance programs are incredible. I\'m stronger, faster and more confident than ever before.', stars: 5 },
]

/* ── Features ──────────────────────────── */
const features = [
  { icon: '🎯', title: 'Personalized Programs', desc: 'Custom plans built around your goals, schedule, and fitness level.' },
  { icon: '🔬', title: 'Science-Based Methods', desc: 'Evidence-backed training protocols that deliver measurable results.' },
  { icon: '🍎', title: 'Nutrition Coaching', desc: 'Expert dietary guidance to fuel performance and accelerate progress.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Advanced body composition analysis and biometric monitoring.' },
  { icon: '🤝', title: 'Elite Community', desc: 'Surround yourself with driven individuals who elevate each other.' },
  { icon: '💊', title: 'Health Monitoring', desc: 'Regular health checks including blood sugar, BMI, and body fat testing.' },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        paddingTop: 'var(--navbar-h)',
      }}>
        {/* Background FX */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 60%, rgba(232,35,10,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,107,0,0.08) 0%, transparent 40%)',
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'var(--accent-gradient)',
          opacity: 0.6,
        }} />

        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Hero Text */}
        <div className="container" style={{ paddingLeft: '48px', paddingRight: '24px', zIndex: 1 }}>
          <div style={{ animation: 'fadeInUp 0.6s ease both' }}>
            <div className="section-label">⚡ Elite Performance Gym</div>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            lineHeight: 1,
            letterSpacing: '3px',
            marginBottom: '8px',
            animation: 'fadeInUp 0.7s ease 0.1s both',
          }}>
            FORGE<br />
            <span className="gradient-text">YOUR</span><br />
            LEGEND
          </h1>

          <div style={{
            width: '80px', height: '4px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px',
            margin: '20px 0',
            animation: 'fadeInUp 0.7s ease 0.2s both',
          }} />

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.75,
            maxWidth: '440px',
            marginBottom: '36px',
            fontFamily: 'var(--font-ui)',
            animation: 'fadeInUp 0.7s ease 0.3s both',
          }}>
            Join IRONCORE — where elite athletes are built from ordinary people.
            Professional coaches, premium equipment, and programs that deliver
            <strong style={{ color: '#fff' }}> real, measurable results.</strong>
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeInUp 0.7s ease 0.4s both' }}>
            <Link to="/membership" className="btn-primary" style={{ fontSize: '1rem' }}>
              🔥 Start Training
            </Link>
            <Link to="/programs" className="btn-outline">
              View Programs →
            </Link>
          </div>

          {/* Mini Stats */}
          <div style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            animation: 'fadeInUp 0.7s ease 0.5s both',
          }}>
            {stats.slice(0, 3).map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '2px', color: '#fff' }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '1.5px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Canvas */}
        <div style={{
          height: '100vh',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Glow behind model */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(232,35,10,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }} />
          <HeroCanvas />
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '0.7rem',
          letterSpacing: '3px',
          fontFamily: 'var(--font-ui)',
          textTransform: 'uppercase',
          animation: 'fadeIn 1s ease 1s both',
        }}>
          <div style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, transparent, var(--accent-red))',
            animation: 'float 2s ease-in-out infinite',
          }} />
          Scroll Down
        </div>

        <style>{`
          @media (max-width: 900px) {
            section:first-child {
              grid-template-columns: 1fr !important;
              padding-top: calc(var(--navbar-h) + 16px);
            }
            section:first-child > div:last-child {
              height: 50vh !important;
            }
          }
        `}</style>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <div style={{
        background: 'var(--accent-gradient)',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)',
        }} />
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.15)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'transparent',
                padding: '32px 24px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', letterSpacing: '3px', color: '#fff', lineHeight: 1 }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontWeight: 600, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </div>

      {/* ── PROGRAMS ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: '56px' }}>
              <div className="section-label">⚡ What We Offer</div>
              <h2 className="section-title">ELITE TRAINING<br /><span className="gradient-text">PROGRAMS</span></h2>
              <p className="section-desc">Every program is engineered by certified coaches to maximize your results in minimum time.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card" style={{ padding: '32px', height: '100%', position: 'relative' }}>
                  {p.tag && (
                    <div style={{
                      position: 'absolute', top: '16px', right: '16px',
                    }}>
                      <span className="tag">{p.tag}</span>
                    </div>
                  )}<div style={{
                    width: '100%',
                    height: '160px',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <img
                      src={p.icon}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '12px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>{p.desc}</p>
                  <Link to="/programs" style={{
                    color: 'var(--accent-orange)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>Learn More →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/programs" className="btn-outline">View All Programs →</Link>
          </ScrollReveal>
        </div>
      </section>

{/* ── WHY IRONCORE ──────────────────────────────────── */}
<section className="section">
  <div className="container">

    <div
      className="why-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
    >

      <ScrollReveal direction="right">
        <div>
          <div className="section-label">🔥 Why Choose Us</div>

          <h2 className="section-title">
            NOT JUST A GYM.<br />
            <span className="gradient-text">A MOVEMENT.</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: '32px',
            fontSize: '1rem'
          }}>
            IRONCORE was built on one principle:
            <strong style={{ color: '#fff' }}> results</strong>.
            We combine sports science, elite coaching, and a culture of intensity
            to create transformations that last a lifetime.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {[
              'Science-backed programming with monthly reassessments',
              'Macro & nutrition planning included in all memberships',
              'Community challenges and leaderboard competitions',
              'Health monitoring: blood sugar, BMI, body fat analysis',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >

                <div style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  background: 'var(--accent-gradient)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                }}>
                  ✓
                </div>

                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.97rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-ui)'
                }}>
                  {item}
                </span>

              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '36px'
          }}>
            <Link to="/about" className="btn-primary">
              Our Story
            </Link>

            <Link to="/health-test" className="btn-outline">
              Health Testing →
            </Link>
          </div>

        </div>
      </ScrollReveal>


      <ScrollReveal direction="left" delay={100}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>

          {features.map((f, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '24px 20px',
                borderRadius: '12px',
                borderLeft: '3px solid var(--accent-red)',
              }}
            >

              <div style={{
                fontSize: '1.8rem',
                marginBottom: '10px'
              }}>
                {f.icon}
              </div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                letterSpacing: '1.5px',
                marginBottom: '8px'
              }}>
                {f.title}
              </div>

              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '0.83rem',
                lineHeight: 1.6
              }}>
                {f.desc}
              </div>

            </div>
          ))}

        </div>
      </ScrollReveal>

    </div>

  </div>

  <style>{`
    @media (max-width: 900px) {

      .why-grid{
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }

    }
  `}</style>

</section>

      {/* ── TRAINERS PREVIEW ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">🏆 Meet The Team</div>
              <h2 className="section-title">ELITE <span className="gradient-text">COACHES</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>Our trainers are certified professionals who have competed at the highest levels.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {trainers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card" style={{ padding: '36px', textAlign: 'center' }}>
                  <div style={{
                    width: 100, height: 100,
                    background: 'var(--bg-elevated)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem',
                    margin: '0 auto 20px',
                    border: '2px solid var(--border-accent)',
                    boxShadow: '0 0 30px rgba(232,35,10,0.2)',
                  }}>{t.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '4px' }}>{t.name}</div>
                  <div style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>{t.role}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', fontFamily: 'var(--font-ui)' }}>{t.speciality}</div>
                  <div className="tag">{t.exp} Experience</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/trainers" className="btn-outline">Meet All Trainers →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="section" style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(232,35,10,0.08) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">❤️ Success Stories</div>
              <h2 className="section-title">REAL RESULTS,<br /><span className="gradient-text">REAL PEOPLE</span></h2>
            </div>
          </ScrollReveal>

          {/* Active Testimonial */}
          <div style={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            textAlign: 'center',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--accent-orange)' }}>
              {'★'.repeat(testimonials[activeTestimonial].stars)}
            </div>
            <div style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '24px',
              maxWidth: '560px',
              transition: 'all 0.3s ease',
            }}>
              "{testimonials[activeTestimonial].text}"
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '6px' }}>
              {testimonials[activeTestimonial].name}
            </div>
            <div className="tag">{testimonials[activeTestimonial].result}</div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === activeTestimonial ? 'var(--accent-red)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTIVATIONAL BANNER ───────────────────────────── */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '48px 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          gap: '80px',
          animation: 'marquee 20s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {Array(4).fill(['NO PAIN NO GAIN', 'PUSH YOUR LIMITS', 'FORGE YOUR LEGEND', 'EARN IT EVERY DAY', 'STRONGER EVERY REP']).flat().map((text, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              letterSpacing: '4px',
              color: i % 2 === 0 ? 'var(--text-muted)' : 'transparent',
              WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255,255,255,0.15)' : 'none',
            }}>{text}</span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── CTA SECTION ───────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: 'clamp(40px, 6vw, 80px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(232,35,10,0.15) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div className="section-label" style={{ position: 'relative' }}>🔥 Limited Time</div>
              <h2 className="section-title" style={{ position: 'relative', marginBottom: '16px' }}>
                YOUR FIRST MONTH<br /><span className="gradient-text">ON US</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '36px', position: 'relative', fontFamily: 'var(--font-ui)' }}>
                Join today and get your first 30 days FREE. No contracts, no hidden fees. Just results.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative' }}>
                <Link to="/membership" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 40px' }}>
                  🏆 Claim Free Month
                </Link>
                <Link to="/contact" className="btn-outline">
                  Book Free Tour →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
