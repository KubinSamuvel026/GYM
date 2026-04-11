import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const equipment = [
  {
    id: 'treadmill',
    name: 'Commercial Treadmills',
    icon: '🏃',
    category: 'Cardio',
    brand: 'Life Fitness / Precor',
    qty: '12 units',
    muscles: ['Quadriceps', 'Calves', 'Hamstrings', 'Cardiovascular'],
    desc: 'State-of-the-art commercial treadmills with incline training, heart rate monitoring, and custom workout programming. Built for serious endurance training and fat-burning cardio sessions.',
    features: ['0–15% incline range', 'Up to 15 mph speed', 'Heart rate zones', 'Pre-programmed workouts', 'Tablet holder & fan'],
    bg: '🏃',
  },
  {
    id: 'bench',
    name: 'Competition Bench Press',
    icon: '🏋️',
    category: 'Free Weights',
    brand: 'Rogue / Eleiko',
    qty: '8 stations',
    muscles: ['Chest', 'Anterior Deltoid', 'Triceps'],
    desc: 'Powerlifting-spec flat, incline, and decline benches paired with Olympic barbells and calibrated competition plates. The cornerstone of any serious chest development program.',
    features: ['Flat, incline, decline variants', 'Olympic barbell (20kg)', 'Calibrated bumper plates', 'Safety catchers', 'J-hooks at competition spec'],
    bg: '🏋️',
  },
  {
    id: 'dumbbells',
    name: 'Dumbbell Rack',
    icon: '💪',
    category: 'Free Weights',
    brand: 'Hammer Strength',
    qty: '2.5kg – 60kg range',
    muscles: ['Full Body', 'All Muscle Groups'],
    desc: 'Hexagonal rubber-coated dumbbells spanning from 2.5kg to 60kg in 2.5kg increments. Essential for isolation work, unilateral training, and functional fitness exercises.',
    features: ['2.5kg–60kg full range', 'Hex non-roll design', 'Rubber coating', 'Dual 3-tier rack', 'Mirror stations'],
    bg: '💪',
  },
  {
    id: 'squat-rack',
    name: 'Power Racks / Squat Cages',
    icon: '🔱',
    category: 'Free Weights',
    brand: 'Rogue Monster',
    qty: '6 cages',
    muscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core', 'Back'],
    desc: 'Rogue Monster Series power cages with pull-up bars, cable attachment points, and safety spotter arms. The ultimate multi-function training station for squats, deadlifts, and presses.',
    features: ['Spotter arms at every height', 'Built-in pull-up bar', 'Band pegs', 'Plate storage', '1000 lb rated capacity'],
    bg: '🔱',
  },
  {
    id: 'cable',
    name: 'Functional Cable Machines',
    icon: '🔄',
    category: 'Cable & Machines',
    brand: 'Life Fitness Signature',
    qty: '8 stations',
    muscles: ['Full Body', 'Core', 'Back', 'Shoulders'],
    desc: 'Dual adjustable pulley cable systems with independent weight stacks. Essential for flies, rows, face pulls, tricep pushdowns, and hundreds of functional movement patterns.',
    features: ['Full range of motion', 'Dual independent stacks', '200 lb weight stacks', '20+ attachment options', 'Adjustable pulleys'],
    bg: '🔄',
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pull-Down / Seated Row',
    icon: '⬇️',
    category: 'Cable & Machines',
    brand: 'Hammer Strength Select',
    qty: '6 units',
    muscles: ['Latissimus Dorsi', 'Rhomboids', 'Biceps', 'Rear Deltoid'],
    desc: 'Dedicated lat pull-down and seated cable row stations for targeted back development. Multiple grip attachments allow wide-grip, close-grip, neutral-grip variations.',
    features: ['Wide and close grip bars', 'Neutral grip V-handle', 'Adjustable knee pads', '200 lb+ weight stack', 'Converging arm path'],
    bg: '⬇️',
  },
  {
    id: 'smith',
    name: 'Smith Machine',
    icon: '⬆️',
    category: 'Cable & Machines',
    brand: 'Bodycraft / FreeMotion',
    qty: '4 units',
    muscles: ['Chest', 'Shoulders', 'Quads', 'Glutes', 'Back'],
    desc: 'Counter-balanced Smith machines with linear bearings for smooth, frictionless movement. Excellent for guided presses, squats, hip thrusts, and movements requiring control.',
    features: ['Counter-balanced barbell', 'Linear roller bearing', 'Safety catches every 2"', 'Band pegs included', 'Fits Olympic plates'],
    bg: '⬆️',
  },
  {
    id: 'bikes',
    name: 'Exercise Bikes',
    icon: '🚴',
    category: 'Cardio',
    brand: 'Schwinn IC4 / Peloton',
    qty: '10 units',
    muscles: ['Quadriceps', 'Calves', 'Hamstrings', 'Glutes'],
    desc: 'Premium upright and spin bikes for low-impact cardiovascular training. Perfect for warm-up, active recovery, HIIT intervals, and steady-state fat burning.',
    features: ['Magnetic resistance (100 levels)', 'SPD pedals (clip-in)', 'Adjustable seat/handlebars', 'LCD display', 'USB charging port'],
    bg: '🚴',
  },
  {
    id: 'rowing',
    name: 'Rowing Machines',
    icon: '🚣',
    category: 'Cardio',
    brand: 'Concept2 Model D',
    qty: '8 units',
    muscles: ['Back', 'Core', 'Legs', 'Arms', 'Cardiovascular'],
    desc: 'The world-standard Concept2 ergometer — used in Olympic training programs and CrossFit competitions globally. Delivers the most comprehensive full-body cardiovascular workout available.',
    features: ['Air resistance flywheel', 'PM5 performance monitor', 'Wireless HRM connectivity', 'Foldable for storage', 'Splits stored online'],
    bg: '🚣',
  },
  {
    id: 'cardio-zone',
    name: 'Cardio Zone',
    icon: '❤️',
    category: 'Cardio',
    brand: 'Mixed Premium Brands',
    qty: '20+ machines',
    muscles: ['Full Body', 'Cardiovascular System'],
    desc: 'Dedicated 2,000 sq ft cardio zone featuring ellipticals, stair climbers, steppers, and Jacob\'s Ladder. TVs at every station with headphone connections for entertainment.',
    features: ['Elliptical trainers', 'Stair climbers', 'Arc trainers', 'Jacob\'s Ladder', 'Personal TVs'],
    bg: '❤️',
  },
]

const categories = ['All', 'Free Weights', 'Cable & Machines', 'Cardio']

export default function Equipment() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'All' ? equipment : equipment.filter(e => e.category === filter)
  const selectedItem = equipment.find(e => e.id === selected)

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Premium Facility</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            GYM <span className="gradient-text">EQUIPMENT</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Over 200 pieces of premium commercial-grade equipment. Every tool you need to build your best body is here.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: '20px 0', position: 'sticky', top: '72px', zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', padding: '8px 20px', borderRadius: '6px', border: '1px solid',
                borderColor: filter === c ? 'var(--accent-red)' : 'rgba(255,255,255,0.1)',
                background: filter === c ? 'rgba(232,35,10,0.15)' : 'transparent',
                color: filter === c ? 'var(--accent-orange)' : 'var(--text-secondary)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 50}>
                <div
                  className="card"
                  style={{ cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => setSelected(selected === item.id ? null : item.id)}
                >
                  {/* Visual header */}
                  <div style={{
                    height: '140px',
                    background: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(232,35,10,0.08) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(circle at 50% 50%, rgba(232,35,10,0.12) 0%, transparent 70%)',
                    }} />
                    <span style={{ position: 'relative', filter: 'drop-shadow(0 4px 12px rgba(232,35,10,0.4))', fontSize: '4rem' }}>{item.bg}</span>
                    <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                      <span className="tag">{item.category}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '2px', marginBottom: '6px' }}>{item.name}</h3>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.82rem' }}>{item.brand}</span>
                      <span style={{ color: 'var(--text-muted)' }}>·</span>
                      <span style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700 }}>{item.qty}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                      {item.desc.slice(0, 100)}...
                    </p>

                    {/* Muscle Groups */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {item.muscles.map((m, j) => (
                        <span key={j} style={{
                          background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)',
                          color: '#ff6b00', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px',
                          fontFamily: 'var(--font-ui)', fontWeight: 700, letterSpacing: '0.5px',
                        }}>{m}</span>
                      ))}
                    </div>

                    <button style={{
                      background: 'none', border: 'none', color: 'var(--accent-orange)',
                      fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700,
                      letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', padding: 0,
                    }}>
                      {selected === item.id ? 'Less Details ↑' : 'Full Details ↓'}
                    </button>
                  </div>

                  {/* Expanded */}
                  {selected === item.id && (
                    <div style={{
                      padding: '0 24px 24px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '20px',
                      animation: 'fadeInUp 0.3s ease both',
                    }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>{item.desc}</p>
                      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-orange)', textTransform: 'uppercase', marginBottom: '10px' }}>
                        Features
                      </div>
                      {item.features.map((f, j) => (
                        <div key={j} style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '6px', fontFamily: 'var(--font-ui)' }}>
                          <span style={{ color: '#22c55e' }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="section-sm" style={{ background: 'var(--accent-gradient)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {[
              { num: '200+', label: 'Pieces of Equipment' },
              { num: '12,000', label: 'Sq Ft Facility' },
              { num: '24/7', label: 'Access Available' },
              { num: '100%', label: 'Commercial Grade' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontWeight: 600, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
