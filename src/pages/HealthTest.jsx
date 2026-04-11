import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const tests = [
  {
    icon: '🩸',
    title: 'Blood Sugar Testing',
    subtitle: 'Glucose Monitoring',
    color: '#e8230a',
    desc: 'Regular blood glucose monitoring helps identify risk factors for diabetes and insulin resistance — two conditions that directly impair fat metabolism and energy levels during training.',
    details: [
      'Fasting glucose and post-meal glucose tracking',
      'HbA1c assessment for long-term blood sugar control',
      'Insulin sensitivity testing for training optimization',
      'Personalized nutrition adjustments based on results',
    ],
    frequency: 'Quarterly recommended',
    duration: '15 minutes',
    benefit: 'Safe training, optimized fuel partitioning',
  },
  {
    icon: '⚖️',
    title: 'BMI Testing',
    subtitle: 'Weight-Height Analysis',
    color: '#ff6b00',
    desc: 'Professional BMI assessment combined with contextual analysis. We go beyond the number to understand your body composition context and appropriate training/nutrition strategies.',
    details: [
      'Precise BMI calculation with clinician context',
      'Body frame size and muscularity adjustments',
      'Risk stratification for chronic disease',
      'Goal-setting consultation based on results',
    ],
    frequency: 'Monthly recommended',
    duration: '10 minutes',
    benefit: 'Understand true health risk, set realistic goals',
  },
  {
    icon: '📊',
    title: 'Body Fat Analysis',
    subtitle: 'Dual-Method Assessment',
    color: '#e8230a',
    desc: 'Accurate body fat percentage measurement using skinfold calipers and bioelectrical impedance. Far more meaningful than BMI alone for athletes and active individuals.',
    details: [
      '7-site skinfold measurement protocol',
      'Bioelectrical impedance analysis (BIA)',
      'Fat mass vs. lean mass breakdown',
      'Fitness category classification (essential/athlete/fitness/acceptable/obese)',
    ],
    frequency: 'Monthly recommended',
    duration: '20 minutes',
    benefit: 'True body composition picture beyond scale weight',
  },
  {
    icon: '🧬',
    title: 'Body Composition Tracking',
    subtitle: 'Full Composition Analysis',
    color: '#ff6b00',
    desc: 'Comprehensive body composition tracking that monitors muscle mass, fat mass, water content, and bone density over time. The gold standard for transformation tracking.',
    details: [
      'Segmental lean mass analysis (arms, legs, trunk)',
      'Visceral fat rating (most critical health indicator)',
      'Muscle symmetry and imbalance detection',
      'Monthly trend analysis and progress reporting',
    ],
    frequency: 'Bi-monthly recommended',
    duration: '30 minutes',
    benefit: 'Precise transformation data, no guesswork',
  },
  {
    icon: '🏃',
    title: 'Fitness Assessment',
    subtitle: 'Performance Benchmarking',
    color: '#e8230a',
    desc: 'Full fitness evaluation across all key physical capacities: cardiovascular endurance, muscular strength, muscular endurance, flexibility, and balance. Baseline for program design.',
    details: [
      'VO2 max estimation (cardiovascular capacity)',
      'Maximal strength testing (1RM or predicted 1RM)',
      'Muscular endurance (push-up, plank, wall sit tests)',
      'Flexibility screening (sit-and-reach, shoulder mobility)',
      'Resting heart rate and recovery rate assessment',
    ],
    frequency: 'Every 12 weeks',
    duration: '60 minutes',
    benefit: 'Objective progress measurement, program validation',
  },
  {
    icon: '🫀',
    title: 'Cardiovascular Screening',
    subtitle: 'Heart Health Assessment',
    color: '#ff6b00',
    desc: 'Resting and exercise blood pressure monitoring, resting heart rate assessment, and heart rate recovery testing to ensure safe participation in high-intensity training programs.',
    details: [
      'Resting blood pressure (systolic/diastolic)',
      'Resting heart rate (RHR) measurement',
      'Heart rate recovery (HRR) post-exercise',
      'Cardiovascular risk stratification',
    ],
    frequency: 'Quarterly recommended',
    duration: '20 minutes',
    benefit: 'Train safely, prevent cardiovascular incidents',
  },
]

const process = [
  { step: '01', title: 'Book Your Assessment', desc: 'Schedule online or at the front desk. Health testing is included in Premium and Annual memberships.' },
  { step: '02', title: 'Complete Pre-Test Form', desc: 'A brief health history questionnaire ensures our team tailors the assessment appropriately.' },
  { step: '03', title: 'Attend Your Session', desc: 'Our qualified health professionals conduct all tests in our private wellness suite. Results are instant.' },
  { step: '04', title: 'Receive Your Report', desc: 'Detailed report with all scores, reference ranges, and actionable recommendations delivered digitally.' },
  { step: '05', title: 'Coach Consultation', desc: 'A 30-minute session with your assigned coach to align training and nutrition with your health data.' },
  { step: '06', title: 'Monitor Progress', desc: 'Regular retesting tracks your trajectory and validates that the program is working for you.' },
]

export default function HealthTest() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Wellness First</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            HEALTH <span className="gradient-text">TESTING</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '600px' }}>
            Train smarter, not harder. Our comprehensive health monitoring services ensure you train safely
            and with data-driven precision — including blood sugar testing and full body composition analysis.
          </p>
        </div>
      </div>

      {/* Why Health Testing */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">🩺 Why It Matters</div>
                <h2 className="section-title">TRAINING WITHOUT DATA<br /><span className="gradient-text">IS GUESSING</span></h2>
                <div className="divider" />
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                  At IRONCORE, we believe every member deserves to know exactly where they stand before they push their limits.
                  Health monitoring isn't just for elite athletes — it's for anyone who takes their fitness seriously.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Conditions like high blood sugar, hypertension, or body fat imbalances can make certain training modalities
                  dangerous without modification. Our testing suite identifies these factors <strong style={{ color: '#fff' }}>before</strong> they become
                  problems, and our coaches adjust your program accordingly.
                </p>
                <Link to="/membership" className="btn-primary">Include Health Testing</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: '🛡️', title: 'Train Safely', desc: 'Identify contraindications before they cause injury.' },
                  { icon: '🎯', title: 'Optimize Results', desc: 'Data-driven programs outperform guesswork every time.' },
                  { icon: '📈', title: 'Track Progress', desc: 'Objective measurements celebrate real change.' },
                  { icon: '🧠', title: 'Stay Motivated', desc: 'Seeing numbers improve is the ultimate fuel.' },
                ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent-red)' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{item.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '1.5px', marginBottom: '8px' }}>{item.title}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Test Services */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">🔬 Services Offered</div>
              <h2 className="section-title">HEALTH MONITORING <span className="gradient-text">SUITE</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>
                Six comprehensive testing protocols delivered by qualified health professionals in our private wellness suite.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {tests.map((test, i) => (
              <ScrollReveal key={test.title} delay={i * 70}>
                <div className="card" style={{ padding: '32px', borderTop: `3px solid ${test.color}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{test.icon}</div>
                  <div style={{ marginBottom: '4px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '2px' }}>{test.title}</h3>
                    <div style={{ color: test.color, fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{test.subtitle}</div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: '14px 0 16px' }}>{test.desc}</p>

                  <div style={{ flex: 1, marginBottom: '20px' }}>
                    {test.details.map((d, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '8px', fontFamily: 'var(--font-ui)' }}>
                        <span style={{ color: test.color, flexShrink: 0 }}>→</span>
                        {d}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="tag">{test.frequency}</span>
                    <span className="tag">{test.duration}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">📋 How It Works</div>
              <h2 className="section-title">THE TESTING <span className="gradient-text">PROCESS</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '5rem',
                    color: 'rgba(255,255,255,0.03)',
                    letterSpacing: '-2px',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}>{p.step}</div>
                  <div style={{
                    width: 40, height: 40,
                    background: 'var(--accent-gradient)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    letterSpacing: '1px',
                    color: '#fff',
                    marginBottom: '16px',
                  }}>{p.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '1.5px', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-accent)',
              borderRadius: '20px',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(232,35,10,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🩺</div>
                <h2 className="section-title" style={{ marginBottom: '12px' }}>BOOK YOUR FREE<br /><span className="gradient-text">HEALTH ASSESSMENT</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontFamily: 'var(--font-ui)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 32px' }}>
                  All new members receive a complimentary full health assessment. Know your starting point.
                  Train with intelligence. Transform with confidence.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn-primary">📅 Book Assessment</Link>
                  <Link to="/membership" className="btn-outline">View Plans →</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
