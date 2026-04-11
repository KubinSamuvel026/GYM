import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const categories = [
  { min: 0, max: 18.5, label: 'Underweight', desc: 'Below healthy range. Focus on caloric surplus, strength training, and nutrient-dense foods.', color: '#3b82f6', icon: '📉', advice: 'Increase caloric intake by 300–500 calories. Focus on compound lifting and protein-rich foods. Consider working with our nutritionist.' },
  { min: 18.5, max: 25, label: 'Normal Weight', desc: 'Healthy range. Maintain with balanced diet and regular exercise.', color: '#22c55e', icon: '✅', advice: 'You\'re in the healthy range! Focus on body composition — building muscle while staying lean. Regular training and balanced nutrition is key.' },
  { min: 25, max: 30, label: 'Overweight', desc: 'Slightly above healthy range. Moderate diet changes and increased activity recommended.', color: '#f59e0b', icon: '⚠️', advice: 'A moderate caloric deficit (300–400 cal) combined with resistance training can bring you into the healthy range within 3–6 months.' },
  { min: 30, max: 999, label: 'Obese', desc: 'Significantly above healthy range. Structured program with professional support recommended.', color: '#e8230a', icon: '🚨', advice: 'Our specialized programs have helped many members in your situation achieve remarkable transformations. Book a consultation with our coaches for a personalized approach.' },
]

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [bmi, setBmi] = useState(null)
  const [calculated, setCalculated] = useState(false)

  const calculate = () => {
    let h, w
    if (unit === 'metric') {
      h = parseFloat(height) / 100
      w = parseFloat(weight)
    } else {
      const totalIn = parseFloat(heightFt) * 12 + parseFloat(heightIn)
      h = totalIn * 0.0254
      w = parseFloat(weight) * 0.453592
    }
    if (!h || !w || h <= 0 || w <= 0) return
    const result = w / (h * h)
    setBmi(result.toFixed(1))
    setCalculated(true)
  }

  const reset = () => {
    setBmi(null)
    setCalculated(false)
    setHeight(''); setWeight(''); setHeightFt(''); setHeightIn('')
  }

  const category = bmi ? categories.find(c => bmi >= c.min && bmi < c.max) : null
  const bmiPercent = bmi ? Math.min((bmi / 40) * 100, 100) : 0

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Body Assessment</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            BMI <span className="gradient-text">CALCULATOR</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Body Mass Index gives a quick snapshot of your weight-to-height ratio and health risk category.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            {/* Calculator */}
            <ScrollReveal>
              <div className="card" style={{ padding: '40px', borderTop: '3px solid var(--accent-red)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '2px', marginBottom: '28px' }}>
                  CALCULATE YOUR BMI
                </h2>

                {/* Unit Toggle */}
                <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: '8px', padding: '4px', marginBottom: '28px', width: 'fit-content' }}>
                  {['metric', 'imperial'].map(u => (
                    <button
                      key={u}
                      onClick={() => { setUnit(u); reset() }}
                      style={{
                        padding: '8px 20px',
                        borderRadius: '6px',
                        background: unit === u ? 'var(--accent-gradient)' : 'transparent',
                        color: unit === u ? '#fff' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        border: 'none',
                      }}
                    >{u}</button>
                  ))}
                </div>

                {/* Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                  {unit === 'metric' ? (
                    <div className="form-group">
                      <label className="form-label">Height (cm)</label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="e.g. 175"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        min="100" max="250"
                      />
                    </div>
                  ) : (
                    <div className="form-group">
                      <label className="form-label">Height</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <input type="number" className="form-input" placeholder="ft" value={heightFt} onChange={e => setHeightFt(e.target.value)} min="3" max="8" />
                        <input type="number" className="form-input" placeholder="in" value={heightIn} onChange={e => setHeightIn(e.target.value)} min="0" max="11" />
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder={unit === 'metric' ? 'e.g. 75' : 'e.g. 165'}
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                      min="30" max={unit === 'metric' ? '300' : '660'}
                    />
                  </div>
                </div>

                <button
                  className="btn-primary"
                  onClick={calculate}
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px' }}
                >
                  📊 Calculate BMI
                </button>

                {calculated && (
                  <button
                    onClick={reset}
                    style={{
                      marginTop: '12px',
                      width: '100%',
                      padding: '12px',
                      background: 'none',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-ui)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                  >↺ Reset</button>
                )}
              </div>
            </ScrollReveal>

            {/* Result */}
            <ScrollReveal delay={100}>
              {!calculated ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '400px',
                  border: '2px dashed rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '40px',
                  textAlign: 'center',
                  gap: '16px',
                }}>
                  <div style={{ fontSize: '4rem' }}>📏</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
                    ENTER YOUR DETAILS
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}>
                    Fill in the form and click Calculate to see your BMI result and personalized advice.
                  </div>
                </div>
              ) : (
                <div className="card" style={{ padding: '40px', animation: 'fadeInUp 0.5s ease both' }}>
                  {/* BMI Number */}
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', letterSpacing: '3px', color: category?.color, lineHeight: 1 }}>
                      {bmi}
                    </div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                      BMI Score
                    </div>
                  </div>

                  {/* Scale Bar */}
                  <div style={{ marginBottom: '28px' }}>
                    <div style={{
                      height: '12px',
                      borderRadius: '6px',
                      background: 'linear-gradient(to right, #3b82f6 0%, #22c55e 30%, #f59e0b 60%, #e8230a 100%)',
                      position: 'relative',
                      marginBottom: '8px',
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: `${bmiPercent}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '20px',
                        height: '20px',
                        background: '#fff',
                        borderRadius: '50%',
                        border: `3px solid ${category?.color}`,
                        boxShadow: `0 0 12px ${category?.color}`,
                        transition: 'left 0.5s ease',
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40+</span>
                    </div>
                  </div>

                  {/* Category */}
                  {category && (
                    <div style={{
                      background: `rgba(${category.color === '#22c55e' ? '34,197,94' : category.color === '#3b82f6' ? '59,130,246' : category.color === '#f59e0b' ? '245,158,11' : '232,35,10'}, 0.1)`,
                      border: `1px solid ${category.color}40`,
                      borderRadius: '12px',
                      padding: '24px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '1.8rem' }}>{category.icon}</span>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', color: category.color }}>
                          {category.label.toUpperCase()}
                        </div>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '16px' }}>{category.desc}</p>
                      <div style={{ borderTop: `1px solid ${category.color}30`, paddingTop: '16px' }}>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: category.color, textTransform: 'uppercase', marginBottom: '8px' }}>
                          IRONCORE Recommendation
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{category.advice}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BMI Categories Reference */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              BMI <span className="gradient-text">CATEGORIES</span>
            </h2>
          </ScrollReveal>
          <div className="grid-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={i * 70}>
                <div className="card" style={{
                  padding: '24px',
                  borderTop: `3px solid ${cat.color}`,
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{cat.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '1.5px', color: cat.color, marginBottom: '6px' }}>{cat.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '1px', color: '#fff', marginBottom: '10px' }}>
                    {cat.max === 999 ? `≥ ${cat.min}` : `${cat.min} – ${cat.max}`}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.6 }}>{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '24px', textAlign: 'center', fontFamily: 'var(--font-ui)' }}>
              ⚠️ BMI is a screening tool, not a diagnostic measure. Athletes often have higher BMI due to muscle mass. For a complete health picture, visit our <a href="/health-test" style={{ color: 'var(--accent-orange)', textDecoration: 'none' }}>Health Testing</a> suite.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
