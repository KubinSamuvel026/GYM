import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const trainers = [
  {
    name: 'Marcus Steel',
    role: 'Head Coach & Performance Director',
    specialization: 'Powerlifting · Hypertrophy · Athletic Performance',
    experience: '12 Years',
    clients: '400+',
    icon: '🏆',
    color: '#e8230a',
    certifications: ['NSCA-CSCS', 'ISSA Elite Trainer', 'FMS Level 2', 'Sports Nutrition Specialist'],
    bio: 'Former competitive powerlifter with a national record in the 93kg class. Marcus has coached everyone from complete beginners to national-level competitors. His programming philosophy combines periodization science with intuitive coaching for consistent, long-term results.',
    specialties: ['Strength Periodization', 'Competition Prep', 'Muscle Hypertrophy', 'Movement Screening'],
    achievements: ['National Powerlifting Record Holder (93kg)', 'NSCA Personal Trainer of the Year 2022', '400+ client transformations', 'Featured in Muscle & Fitness Magazine'],
    quote: '"Strength is a skill. Anyone can learn it with the right system."',
  },
  {
    name: 'Elena Voss',
    role: 'HIIT & Metabolic Conditioning Specialist',
    specialization: 'Fat Loss · HIIT · Nutrition Coaching',
    experience: '9 Years',
    clients: '350+',
    icon: '⚡',
    color: '#ff6b00',
    certifications: ['ACE-CPT', 'Precision Nutrition L2', 'TRX Suspension Training', 'NASM Corrective Exercise'],
    bio: 'Former competitive sprinter turned elite personal trainer. Elena\'s science-backed approach to fat loss and body recomposition has generated some of IRONCORE\'s most dramatic transformations. Her training sessions are demanding, results-driven, and never boring.',
    specialties: ['Metabolic Conditioning', 'Fat Loss Programming', 'Nutrition Planning', 'Corrective Exercise'],
    achievements: ['State Sprint Champion (100m, 200m)', '350+ fat loss transformations', 'Precision Nutrition Coach of Excellence Award', 'Regular contributor to Women\'s Health'],
    quote: '"The body achieves what the mind believes. Now let\'s prove it."',
  },
  {
    name: 'Darius Knight',
    role: 'Combat Fitness & Functional Movement Coach',
    specialization: 'Boxing · Combat Fitness · Explosive Power',
    experience: '11 Years',
    clients: '280+',
    icon: '🥊',
    color: '#e8230a',
    certifications: ['NASM-CPT', 'USA Boxing Coach', 'USAW Olympic Lifting L1', 'TPI Golf Fitness'],
    bio: 'Professional boxing trainer and functional fitness expert. Darius brings the intensity and discipline of combat sports training to every session. His unique programming combines boxing footwork, explosive movements, and traditional strength work for total body conditioning.',
    specialties: ['Boxing & Pad Work', 'Explosive Power', 'Athletic Development', 'Olympic Lifting'],
    achievements: ['Trained 3 regional boxing champions', 'USA Boxing Certified Coach', '280+ athlete transformations', '3x CrossFit Regional Competitor'],
    quote: '"I don\'t train fighters. I train people who fight for the best version of themselves."',
  },
  {
    name: 'Sophia Lin',
    role: 'Mobility & Recovery Specialist',
    specialization: 'Mobility · Yoga · Injury Prevention',
    experience: '8 Years',
    clients: '300+',
    icon: '🧘',
    color: '#ff6b00',
    certifications: ['NASM-CPT', 'FRC Mobility Specialist', 'Yoga Alliance RYT-500', 'Sports Massage Therapist'],
    bio: 'Sophia is the critical counterbalance to hard training. Her expertise in mobility, flexibility, and movement quality has helped hundreds of members train pain-free and recover faster. She designs programs that fix the root causes of movement dysfunction.',
    specialties: ['Mobility Programming', 'Movement Assessment', 'Yoga for Athletes', 'Injury Prehabilitation'],
    achievements: ['FRC Kinstretch Instructor', 'Trained professional sports team recovery protocols', '300+ injury prevention consultations', 'Pioneer of gym-integrated yoga programming'],
    quote: '"Mobility is the foundation that everything else is built on."',
  },
  {
    name: 'Rico Mendez',
    role: 'Beginner Transformation Specialist',
    specialization: 'Beginner Programs · Mindset · Body Recomposition',
    experience: '7 Years',
    clients: '500+',
    icon: '🌱',
    color: '#e8230a',
    certifications: ['ACE-CPT', 'NASM Behavior Change Specialist', 'Precision Nutrition L1', 'CrossFit L2'],
    bio: 'The trainer who specializes in the most important phase — the beginning. Rico\'s unique talent for building confidence, teaching fundamentals, and creating lifelong habits has helped over 500 complete beginners become dedicated gym regulars. He knows that the psychology of change is just as important as the programming.',
    specialties: ['Beginner Onboarding', 'Habit Formation', 'Mindset Coaching', 'Body Recomposition'],
    achievements: ['500+ beginners transformed into athletes', 'NASM Behavior Change Specialist', 'Developed IRONCORE\'s acclaimed Beginner Blueprint program', 'Featured in local media for community fitness work'],
    quote: '"Everyone starts somewhere. The only requirement is that you start."',
  },
  {
    name: 'Jordan Park',
    role: 'Athletic Performance & Sports Conditioning',
    specialization: 'Speed · Agility · Sports Performance',
    experience: '10 Years',
    clients: '200+',
    icon: '🎯',
    color: '#ff6b00',
    certifications: ['NSCA-CSCS', 'USA Track & Field', 'EXOS Performance Specialist', 'FMS Level 2'],
    bio: 'Former college track and field athlete turned elite performance coach. Jordan works with competitive athletes across multiple sports to improve speed, agility, power, and sport-specific conditioning. His results-focused approach has produced numerous state and national champions.',
    specialties: ['Speed & Agility Training', 'Plyometrics', 'Sport-Specific Conditioning', 'Peak Performance Planning'],
    achievements: ['NCAA Track & Field scholarship athlete', 'Trained 5 state championship teams', 'EXOS Performance Specialist Level 3', '200+ competitive athletes coached'],
    quote: '"Champions are built in the off-season. Let\'s get to work."',
  },
]

export default function Trainers() {
  const [selected, setSelected] = useState(null)
  const trainer = trainers.find(t => t.name === selected)

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>World-Class Coaching</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            MEET OUR <span className="gradient-text">TRAINERS</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Every IRONCORE trainer is multi-certified, results-proven, and committed to your transformation.
            These are the coaches who will change your life.
          </p>
        </div>
      </div>

      {/* Trainer Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {trainers.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 70}>
                <div
                  className="card"
                  style={{ padding: '32px', cursor: 'pointer', borderTop: `3px solid ${t.color}` }}
                  onClick={() => setSelected(selected === t.name ? null : t.name)}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 80, height: 80,
                    background: `radial-gradient(circle, ${t.color}30 0%, var(--bg-elevated) 100%)`,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '16px',
                    border: `2px solid ${t.color}60`,
                    boxShadow: `0 0 20px ${t.color}30`,
                  }}>{t.icon}</div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '4px' }}>{t.name}</h3>
                  <div style={{ color: t.color, fontFamily: 'var(--font-ui)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {t.role}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {t.specialization}
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '1px', color: '#fff' }}>{t.experience}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '1.5px', fontFamily: 'var(--font-ui)', fontWeight: 700, textTransform: 'uppercase' }}>Experience</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '1px', color: '#fff' }}>{t.clients}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '1.5px', fontFamily: 'var(--font-ui)', fontWeight: 700, textTransform: 'uppercase' }}>Clients</div>
                    </div>
                  </div>

                  {/* Certs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {t.certifications.slice(0, 2).map((c, j) => (
                      <span key={j} className="tag" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>{c}</span>
                    ))}
                    {t.certifications.length > 2 && (
                      <span className="tag" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>+{t.certifications.length - 2} more</span>
                    )}
                  </div>

                  <button style={{
                    background: 'none', border: 'none', color: t.color,
                    fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', padding: 0,
                  }}>
                    {selected === t.name ? 'Show Less ↑' : 'Full Profile ↓'}
                  </button>

                  {/* Expanded */}
                  {selected === t.name && (
                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', animation: 'fadeInUp 0.3s ease both' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '20px' }}>{t.bio}</p>

                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: t.color, textTransform: 'uppercase', marginBottom: '10px' }}>Specialties</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {t.specialties.map((s, j) => (
                            <span key={j} style={{
                              background: `${t.color}18`, border: `1px solid ${t.color}30`,
                              color: 'var(--text-secondary)', fontSize: '0.78rem',
                              padding: '4px 10px', borderRadius: '4px', fontFamily: 'var(--font-ui)',
                            }}>⚡ {s}</span>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: t.color, textTransform: 'uppercase', marginBottom: '10px' }}>Notable Achievements</div>
                        {t.achievements.map((a, j) => (
                          <div key={j} style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px', fontFamily: 'var(--font-ui)' }}>
                            <span style={{ color: t.color, flexShrink: 0 }}>🏅</span> {a}
                          </div>
                        ))}
                      </div>

                      <div style={{
                        background: `${t.color}10`,
                        border: `1px solid ${t.color}30`,
                        borderRadius: '8px',
                        padding: '16px',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: 'var(--text-secondary)',
                        marginBottom: '16px',
                      }}>{t.quote}</div>

                      <Link to="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '12px 20px' }}>
                        Book Session with {t.name.split(' ')[0]}
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '48px',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(232,35,10,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎓</div>
                <h2 className="section-title" style={{ marginBottom: '12px' }}>
                  JOIN THE IRONCORE <span className="gradient-text">TEAM</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontFamily: 'var(--font-ui)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 28px' }}>
                  Are you a certified trainer with a passion for transformation? We're always looking for elite coaches to join our team.
                </p>
                <Link to="/contact" className="btn-outline">Apply Now →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
