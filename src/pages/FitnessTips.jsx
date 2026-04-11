import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const categories = [
  {
    id: 'workout',
    icon: '💪',
    title: 'Workout Tips',
    color: '#e8230a',
    tips: [
      { title: 'Master Form Before Weight', desc: 'Perfect technique prevents injury and maximizes muscle activation. Start lighter and focus on the mind-muscle connection. A well-executed lighter lift beats a sloppy heavy one every time.' },
      { title: 'Progressive Overload Is King', desc: 'The single most important principle in training. Consistently add weight, reps, or difficulty over time. Your body adapts — keep pushing the challenge.' },
      { title: 'Warm Up Properly', desc: 'Spend 8–10 minutes activating muscles and elevating heart rate. Dynamic stretching, mobility drills, and light sets prime your nervous system for peak performance.' },
      { title: 'Track Every Workout', desc: 'What gets measured gets improved. Log sets, reps, weights, and how you felt. This data lets you make smart adjustments and celebrate genuine progress.' },
      { title: 'Use Compound Movements First', desc: 'Squats, deadlifts, bench, and rows should anchor your sessions. These multi-joint movements recruit the most muscle and yield the greatest gains per minute.' },
    ],
  },
  {
    id: 'beginner',
    icon: '🌱',
    title: 'Beginner Advice',
    color: '#ff6b00',
    tips: [
      { title: 'Start With 3 Days Per Week', desc: 'Consistency trumps frequency when you\'re starting out. Three full-body sessions per week with proper recovery is more effective than daily training that leads to burnout.' },
      { title: 'Learn The Big 5 Movements', desc: 'Squat, hinge, push, pull, and carry. Master these movement patterns and every exercise you\'ll ever need becomes accessible. Build a foundation that lasts.' },
      { title: 'Expect Soreness — It\'s Normal', desc: 'DOMS (Delayed Onset Muscle Soreness) is your body adapting. It typically peaks 24–48 hours after training. Active recovery through light movement speeds up the process.' },
      { title: 'Focus on Habit, Not Results', desc: 'For the first 8 weeks, your only job is to show up. Results follow consistency. Build the habit first and the transformation takes care of itself.' },
      { title: 'Ask for Help', desc: 'Every expert was once a beginner. Our coaches are here to guide you. Asking for a form check or program advice is a sign of intelligence, not weakness.' },
    ],
  },
  {
    id: 'recovery',
    icon: '💤',
    title: 'Recovery Tips',
    color: '#e8230a',
    tips: [
      { title: '7–9 Hours of Sleep Is Non-Negotiable', desc: 'Growth hormone is primarily released during deep sleep. This is when your muscles actually repair and grow. Skimping on sleep sabotages all your hard training work.' },
      { title: 'Active Recovery Beats Rest Days', desc: 'Light walking, swimming, yoga, or mobility work on rest days keeps blood flowing, reduces stiffness, and accelerates nutrient delivery to recovering muscles.' },
      { title: 'Hydration Drives Recovery', desc: 'Muscles are 75% water. Aim for at least 3L of water daily, more on training days. Dehydration impairs performance, increases injury risk, and slows recovery.' },
      { title: 'Foam Roll and Stretch', desc: 'Myofascial release through foam rolling and static stretching post-workout improves flexibility, reduces soreness, and maintains tissue quality over time.' },
      { title: 'Listen to Your Body', desc: 'Distinguish between productive soreness and injury signals. Sharp, joint-specific, or persistent pain requires rest and professional assessment, not more training.' },
    ],
  },
  {
    id: 'injury',
    icon: '🛡️',
    title: 'Injury Prevention',
    color: '#ff6b00',
    tips: [
      { title: 'Mobility Work Is Medicine', desc: 'Tight hips, shoulders, and ankles are the leading causes of compensatory injury. Invest 10 minutes daily in mobility — it pays dividends for decades.' },
      { title: 'Never Skip the Warm-Up', desc: 'Cold muscles tear. Elevating tissue temperature, activating stabilizers, and priming movement patterns reduces injury risk by up to 50% according to sports medicine research.' },
      { title: 'Ego Lifting Is the Enemy', desc: 'The weight you choose should allow perfect form for every rep of every set. Grinding out ugly reps under max load is how rotator cuffs and lower backs get injured.' },
      { title: 'Deload Every 4–6 Weeks', desc: 'Planned recovery weeks where volume and intensity are reduced by 40–50% allow accumulated fatigue to dissipate and set the stage for new performance peaks.' },
      { title: 'Build Your Posterior Chain', desc: 'Glutes, hamstrings, and back muscles protect your spine and knees. Neglecting them in favor of mirror muscles is a fast track to chronic pain and injury.' },
    ],
  },
  {
    id: 'motivation',
    icon: '🔥',
    title: 'Motivation Tips',
    color: '#e8230a',
    tips: [
      { title: 'Set Process Goals, Not Outcome Goals', desc: '"I will train 4x per week" is more powerful than "I will lose 20 lbs." Control the inputs and the outputs follow. Process goals keep you showing up when motivation is low.' },
      { title: 'Find Your Tribe', desc: 'Training with people who share your drive is the most powerful motivational tool available. You rise to the level of those around you — choose your environment wisely.' },
      { title: 'Document Your Journey', desc: 'Progress photos, measurements, and performance records create undeniable evidence of change. On hard days, seeing how far you\'ve come reignites the drive to continue.' },
      { title: 'Use Rewards Strategically', desc: 'Celebrate milestones with non-food rewards. New gear, experiences, or events tied to hitting goals create positive reinforcement that makes the gym a rewarding place.' },
      { title: 'Remember Your Why', desc: 'Write down the real reason you train and revisit it on difficult days. Whether it\'s health, confidence, performance, or longevity — connecting with your deep motivation is unstoppable.' },
    ],
  },
  {
    id: 'sleep-hydration',
    icon: '💧',
    title: 'Sleep & Hydration',
    color: '#ff6b00',
    tips: [
      { title: 'Pre-Sleep Routine Matters', desc: 'Dim lights, avoid screens 1 hour before bed, and keep room temperature at 65–68°F. These environmental cues signal melatonin release and dramatically improve sleep quality.' },
      { title: 'Time Your Water Intake', desc: 'Drink 500ml of water upon waking to rehydrate after the overnight fast. Space water intake throughout the day rather than large amounts at once for optimal absorption.' },
      { title: 'Electrolytes Aid Hydration', desc: 'Water alone isn\'t always enough. Sodium, potassium, and magnesium are lost through sweat. Replenishing electrolytes improves hydration status, especially on heavy training days.' },
      { title: 'Sleep Debt Is Real', desc: 'Chronic sleep restriction below 6 hours raises cortisol, suppresses testosterone, impairs glucose metabolism, and dramatically reduces training performance and recovery capacity.' },
      { title: 'Magnesium for Sleep Quality', desc: 'Magnesium glycinate at bedtime has been shown to improve sleep quality, reduce anxiety, and support muscle relaxation. Most athletes are deficient in this critical mineral.' },
    ],
  },
]

export default function FitnessTips() {
  const [active, setActive] = useState('workout')
  const activeCategory = categories.find(c => c.id === active)

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Expert Knowledge</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            FITNESS <span className="gradient-text">TIPS</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Proven advice from elite coaches and sports scientists to accelerate your progress and keep you injury-free.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }}>
            {/* Sidebar */}
            <div style={{
              position: 'sticky',
              top: '104px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    background: active === cat.id ? 'rgba(232,35,10,0.15)' : 'var(--bg-card)',
                    border: '1px solid',
                    borderColor: active === cat.id ? 'var(--accent-red)' : 'var(--border-subtle)',
                    borderRadius: '10px',
                    color: active === cat.id ? '#fff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
                  {cat.title}
                  {active === cat.id && <span style={{ marginLeft: 'auto', color: 'var(--accent-red)' }}>→</span>}
                </button>
              ))}
            </div>

            {/* Content */}
            <div>
              <ScrollReveal key={active}>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '2.5rem' }}>{activeCategory.icon}</span>
                    <h2 className="section-title" style={{ margin: 0 }}>
                      {activeCategory.title.toUpperCase()}
                    </h2>
                  </div>
                  <div className="divider" />
                </div>
              </ScrollReveal>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {activeCategory.tips.map((tip, i) => (
                  <ScrollReveal key={tip.title} delay={i * 80}>
                    <div className="card" style={{
                      padding: '28px',
                      borderLeft: `3px solid ${activeCategory.color}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{
                          width: 32, height: 32, flexShrink: 0,
                          background: 'var(--accent-gradient)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '14px', fontWeight: 700, color: '#fff',
                          marginTop: '2px',
                        }}>{i + 1}</div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '1.5px', marginBottom: '10px' }}>{tip.title}</h3>
                          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.96rem' }}>{tip.desc}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '3px',
              lineHeight: 1.2,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
            }}>
              "THE ONLY BAD WORKOUT IS THE ONE THAT DIDN'T HAPPEN"
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .tips-layout { grid-template-columns: 1fr !important; }
          .tips-layout > div:first-child { position: static !important; flex-direction: row !important; overflow-x: auto !important; }
        }
      `}</style>
    </div>
  )
}
