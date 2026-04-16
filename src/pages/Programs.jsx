import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
const programs = [
  {
    id: 'weight-training',
    icon: '/Weight_Training.jpg',
    title: 'Weight Training',
    level: 'All Levels',
    duration: '60 min',
    frequency: '3–5x/week',
    tag: 'FOUNDATION',
    color: '#e8230a',
    desc: 'The cornerstone of every physique transformation. Our weight training programs are built on progressive overload principles to ensure continuous strength and muscle gains.',
    benefits: ['Increased muscle mass', 'Improved bone density', 'Faster metabolism', 'Enhanced functional strength'],
    details: 'Each session is structured with compound lifts as the primary movers, followed by isolation work for targeted development. Programs are periodized over 12–16 week blocks.',
  },
  {
    id: 'muscle-building',
    icon: '/Muscle_Building.jpg',
    title: 'Muscle Building',
    level: 'Intermediate',
    duration: '75 min',
    frequency: '4–6x/week',
    tag: 'POPULAR',
    color: '#ff6b00',
    desc: 'Hypertrophy-focused programming designed to maximize muscle size and definition. Combines volume, intensity, and strategic nutrition for optimal anabolic response.',
    benefits: ['Maximum hypertrophy', 'Improved definition', 'Strength gains', 'Body recomposition'],
    details: 'Utilizes advanced techniques like drop sets, supersets, and time-under-tension protocols. Includes a customized nutrition plan targeting 1g protein per lb of bodyweight.',
  },
  {
    id: 'fat-loss',
    icon: '/Fat_Loss.jpg',
    title: 'Fat Loss',
    level: 'All Levels',
    duration: '45 min',
    frequency: '4–5x/week',
    tag: 'HOT',
    color: '#e8230a',
    desc: 'High-intensity fat-burning protocols combining resistance training with metabolic conditioning.',
    benefits: ['Accelerated fat loss', 'Maintained muscle mass', 'Improved cardiovascular health', 'Boosted metabolism'],
    details: 'HIIT circuits, metabolic resistance training, and strategic cardio placement create a powerful caloric deficit while maintaining muscle tissue.',
  },
  {
    id: 'strength',
    icon: '/Strength_Training.jpg',
    title: 'Strength Training',
    level: 'Intermediate–Advanced',
    duration: '90 min',
    frequency: '3–4x/week',
    tag: 'POWER',
    color: '#ff6b00',
    desc: 'Raw power development through powerlifting and strongman methodologies.',
    benefits: ['Maximum strength output', 'Neural adaptations', 'Improved power', 'Injury resilience'],
    details: 'Based on the Big 3 (squat, bench, deadlift) with conjugate and linear periodization models.',
  },
  {
    id: 'cross-training',
    icon: '/Cross_Training.jpg',
    title: 'Cross Training',
    level: 'All Levels',
    duration: '60 min',
    frequency: '3–5x/week',
    tag: 'DYNAMIC',
    color: '#e8230a',
    desc: 'Explosive functional fitness training that builds a complete athlete.',
    benefits: ['Total body conditioning', 'Improved athleticism', 'Community motivation', 'Scalable for all levels'],
    details: 'Constantly varied workouts ensure your body never adapts.',
  },
  {
    id: 'beginner',
    icon: '/Beginner_Plans.jpg',
    title: 'Beginner Plans',
    level: 'Beginner',
    duration: '45 min',
    frequency: '2–3x/week',
    tag: 'START HERE',
    color: '#ff6b00',
    desc: 'The perfect starting point for your fitness journey.',
    benefits: ['Safe movement patterns', 'Confidence building', 'Foundation strength', 'Habit formation'],
    details: 'A 12-week structured onboarding program with dedicated coach support.',
  },
  {
    id: 'athlete',
    icon: '/Athlete_Programs.jpg',
    title: 'Athlete Programs',
    level: 'Advanced',
    duration: '120 min',
    frequency: '5–6x/week',
    tag: 'ELITE',
    color: '#e8230a',
    desc: 'Elite programming for serious competitors.',
    benefits: ['Peak performance', 'Sport-specific gains', 'Injury prevention', 'Competition readiness'],
    details: 'Periodized annual training plans including off-season development and competition preparation.',
  },
  {
    id: 'combat',
    icon: '/Combat_Fitness.jpg',
    title: 'Combat Fitness',
    level: 'All Levels',
    duration: '60 min',
    frequency: '3–4x/week',
    tag: 'INTENSE',
    color: '#ff6b00',
    desc: 'Boxing-inspired conditioning that builds muscle and burns fat.',
    benefits: ['Explosive power', 'Cardiovascular endurance', 'Self-defense skills', 'Stress relief'],
    details: 'Classes include shadowboxing, bag work, pad work with trainers, and conditioning circuits.',
  },
]

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels']

export default function Programs() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = filter === 'All' ? programs : programs.filter(p => p.level.includes(filter))

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Training Programs</div>
          <h1 className="page-header-title">
            ELITE <span className="gradient-text">PROGRAMS</span>
          </h1>
          <p className="page-header-subtitle">
            Science-backed training systems engineered by certified coaches for maximum results at every level.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: '20px 0', position: 'sticky', top: '72px', zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: filter === f ? 'var(--accent-red)' : 'rgba(255,255,255,0.1)',
                  background: filter === f ? 'rgba(232,35,10,0.15)' : 'transparent',
                  color: filter === f ? 'var(--accent-orange)' : 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
                <div
                  className="card"
                  style={{
                    borderTop: `3px solid ${p.color}`,
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                >

                  {/* IMAGE GRID */}
                  <div style={{
                    width: '100%',
                    height: '180px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={p.icon}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div style={{ padding: '28px 28px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <span className="tag">{p.tag}</span>
                    </div>

                    <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '20px' }}>{p.desc}</p>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      <div>
                        <div>Level</div>
                        <div>{p.level}</div>
                      </div>
                      <div>
                        <div>Duration</div>
                        <div>{p.duration}</div>
                      </div>
                      <div>
                        <div>Frequency</div>
                        <div>{p.frequency}</div>
                      </div>
                    </div>

                    <button style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-orange)',
                      cursor: 'pointer'
                    }}>
                      {expanded === p.id ? 'Less Info ↑' : 'More Info ↓'}
                    </button>
                  </div>

                  {expanded === p.id && (
                    <div style={{
                      padding: '0 28px 28px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '20px'
                    }}>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>{p.details}</p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {p.benefits.map((b, i) => (
                          <span key={i} style={{
                            background: 'rgba(232,35,10,0.1)',
                            border: '1px solid rgba(232,35,10,0.2)',
                            padding: '4px 12px',
                            borderRadius: '4px'
                          }}>
                            ✓ {b}
                          </span>
                        ))}
                      </div>

                      <Link to="/membership" className="btn-primary">
                        Enroll Now →
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}