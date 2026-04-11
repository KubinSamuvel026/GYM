import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const activityLevels = [
  { value: 1.2, label: 'Sedentary', desc: 'Little or no exercise, desk job' },
  { value: 1.375, label: 'Lightly Active', desc: 'Light exercise 1–3 days/week' },
  { value: 1.55, label: 'Moderately Active', desc: 'Moderate exercise 3–5 days/week' },
  { value: 1.725, label: 'Very Active', desc: 'Hard exercise 6–7 days/week' },
  { value: 1.9, label: 'Extremely Active', desc: 'Very hard exercise, physical job' },
]

export default function CalorieCalculator() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState(1.55)
  const [unit, setUnit] = useState('metric')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = parseInt(age), h = parseFloat(height), w = parseFloat(weight)
    if (!a || !h || !w || a < 10 || a > 100) return

    let weightKg = w, heightCm = h
    if (unit === 'imperial') {
      weightKg = w * 0.453592
      heightCm = h * 2.54
    }

    let bmr
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a + 5
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a - 161
    }

    const maintenance = Math.round(bmr * activity)
    setResult({
      bmr: Math.round(bmr),
      maintenance,
      fatLoss: Math.round(maintenance - 500),
      aggressiveFatLoss: Math.round(maintenance - 750),
      muscleGain: Math.round(maintenance + 300),
      aggressiveGain: Math.round(maintenance + 500),
      protein: Math.round(weightKg * 2.2),
    })
  }

  const reset = () => { setResult(null); setAge(''); setHeight(''); setWeight('') }

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Nutrition Science</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            CALORIE <span className="gradient-text">CALCULATOR</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '580px' }}>
            Calculate your precise daily calorie needs for fat loss, maintenance, or muscle building using the Mifflin-St Jeor formula.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>
            {/* Input Form */}
            <ScrollReveal>
              <div className="card" style={{ padding: '40px', borderTop: '3px solid var(--accent-red)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '2px', marginBottom: '28px' }}>
                  YOUR DETAILS
                </h2>

                {/* Unit Toggle */}
                <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: '8px', padding: '4px', marginBottom: '24px', width: 'fit-content' }}>
                  {['metric', 'imperial'].map(u => (
                    <button key={u} onClick={() => { setUnit(u); reset() }} style={{
                      padding: '8px 20px', borderRadius: '6px',
                      background: unit === u ? 'var(--accent-gradient)' : 'transparent',
                      color: unit === u ? '#fff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.82rem',
                      letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    }}>{u}</button>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Gender */}
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {['male', 'female'].map(g => (
                        <button key={g} onClick={() => setGender(g)} style={{
                          flex: 1, padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid',
                          borderColor: gender === g ? 'var(--accent-red)' : 'var(--border-subtle)',
                          background: gender === g ? 'rgba(232,35,10,0.12)' : 'var(--bg-elevated)',
                          color: gender === g ? '#fff' : 'var(--text-secondary)',
                          fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.9rem',
                          letterSpacing: '1px', textTransform: 'capitalize', cursor: 'pointer', transition: 'all 0.2s',
                        }}>{g === 'male' ? '♂ Male' : '♀ Female'}</button>
                      ))}
                    </div>
                  </div>

                  {/* Age */}
                  <div className="form-group">
                    <label className="form-label">Age (years)</label>
                    <input type="number" className="form-input" placeholder="e.g. 28" value={age} onChange={e => setAge(e.target.value)} min="10" max="100" />
                  </div>

                  {/* Height */}
                  <div className="form-group">
                    <label className="form-label">Height ({unit === 'metric' ? 'cm' : 'inches'})</label>
                    <input type="number" className="form-input" placeholder={unit === 'metric' ? 'e.g. 175' : 'e.g. 69'} value={height} onChange={e => setHeight(e.target.value)} />
                  </div>

                  {/* Weight */}
                  <div className="form-group">
                    <label className="form-label">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <input type="number" className="form-input" placeholder={unit === 'metric' ? 'e.g. 80' : 'e.g. 176'} value={weight} onChange={e => setWeight(e.target.value)} />
                  </div>

                  {/* Activity */}
                  <div className="form-group">
                    <label className="form-label">Activity Level</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {activityLevels.map(a => (
                        <button
                          key={a.value}
                          onClick={() => setActivity(a.value)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '12px 16px',
                            borderRadius: '8px', border: '1px solid',
                            borderColor: activity === a.value ? 'var(--accent-red)' : 'var(--border-subtle)',
                            background: activity === a.value ? 'rgba(232,35,10,0.1)' : 'var(--bg-elevated)',
                            color: '#fff', textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s',
                          }}
                        >
                          <div style={{
                            width: 12, height: 12, borderRadius: '50%',
                            border: '2px solid var(--accent-red)',
                            background: activity === a.value ? 'var(--accent-red)' : 'transparent',
                            flexShrink: 0, transition: 'background 0.2s',
                          }} />
                          <div>
                            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.88rem' }}>{a.label}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-ui)' }}>{a.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className="btn-primary"
                  onClick={calculate}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '24px', padding: '16px', fontSize: '1rem' }}
                >
                  🔥 Calculate Calories
                </button>
                {result && (
                  <button onClick={reset} style={{
                    marginTop: '10px', width: '100%', padding: '12px',
                    background: 'none', border: '1px solid var(--border-subtle)', borderRadius: '8px',
                    color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', fontWeight: 700,
                    fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer',
                  }}>↺ Reset</button>
                )}
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={100}>
              {!result ? (
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', minHeight: '500px',
                  border: '2px dashed rgba(255,255,255,0.08)', borderRadius: '16px',
                  padding: '40px', textAlign: 'center', gap: '16px',
                }}>
                  <div style={{ fontSize: '4rem' }}>🔥</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>FILL IN YOUR DETAILS</div>
                  <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}>
                    Your personalized calorie targets for fat loss, maintenance, and muscle gain will appear here.
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeInUp 0.5s ease both' }}>
                  {/* BMR */}
                  <div className="card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Basal Metabolic Rate (BMR)</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px', fontFamily: 'var(--font-ui)' }}>Calories burned at complete rest</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '2px', color: 'var(--text-secondary)' }}>{result.bmr}</div>
                    </div>
                  </div>

                  {/* Goals */}
                  {[
                    { label: 'Aggressive Fat Loss', sublabel: '-750 cal/day • ~1.5 lbs/week', value: result.aggressiveFatLoss, color: '#e8230a', icon: '🔥', note: 'Maximum deficit. Requires strict adherence.' },
                    { label: 'Fat Loss', sublabel: '-500 cal/day • ~1 lb/week', value: result.fatLoss, color: '#ff6b00', icon: '⬇️', note: 'Sustainable rate. Preserves muscle mass.' },
                    { label: 'Maintenance', sublabel: 'Keep current weight', value: result.maintenance, color: '#22c55e', icon: '⚖️', note: 'Body recomposition zone with training.' },
                    { label: 'Muscle Building', sublabel: '+300 cal/day • Lean bulk', value: result.muscleGain, color: '#3b82f6', icon: '💪', note: 'Optimal for muscle gain with minimal fat.' },
                    { label: 'Aggressive Gain', sublabel: '+500 cal/day • Fast bulk', value: result.aggressiveGain, color: '#8b5cf6', icon: '⬆️', note: 'Maximum growth. Expect some fat gain.' },
                  ].map((goal, i) => (
                    <div key={goal.label} className="card" style={{ padding: '20px 24px', borderLeft: `3px solid ${goal.color}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '1.2rem' }}>{goal.icon}</span>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '1.5px' }}>{goal.label.toUpperCase()}</div>
                          </div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-ui)', marginBottom: '6px', letterSpacing: '0.5px' }}>{goal.sublabel}</div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--font-ui)' }}>{goal.note}</div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '2px', color: goal.color, lineHeight: 1 }}>{goal.value.toLocaleString()}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-ui)', letterSpacing: '1px' }}>kcal/day</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Protein Target */}
                  <div className="card" style={{ padding: '20px 24px', background: 'rgba(232,35,10,0.06)', border: '1px solid rgba(232,35,10,0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '1.5px' }}>DAILY PROTEIN TARGET</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-ui)', marginTop: '4px' }}>Minimum needed to preserve/build muscle</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '2px', color: 'var(--accent-orange)', lineHeight: 1 }}>{result.protein}g</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-ui)', letterSpacing: '1px' }}>per day</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="grid-3">
              {[
                { icon: '📊', title: 'Mifflin-St Jeor Formula', desc: 'The most accurate calorie prediction formula for the general population, validated in multiple clinical studies.' },
                { icon: '⚠️', title: 'These Are Estimates', desc: 'Individual metabolic rates vary. Use these numbers as a starting point and adjust based on 2–3 week real-world results.' },
                { icon: '🎯', title: 'Track & Adjust', desc: 'Weigh yourself weekly under consistent conditions. If weight doesn\'t change as expected, adjust calories by 100–150.' },
              ].map((info, i) => (
                <div key={i} className="card" style={{ padding: '28px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{info.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '1.5px', marginBottom: '10px' }}>{info.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{info.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
