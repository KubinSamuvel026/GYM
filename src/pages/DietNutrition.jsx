import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const dietPlans = [
  {
    id: 'muscle-gain',
    icon: '💪',
    title: 'Muscle Gain Diet',
    surplus: '+300–500 cal',
    protein: '1.0–1.2g/lb',
    carbs: 'High',
    fats: 'Moderate',
    color: '#e8230a',
    desc: 'A caloric surplus combined with high protein intake creates the anabolic environment needed for muscle growth. Carbohydrates fuel intense training sessions and replenish glycogen stores.',
    foods: ['Chicken breast, turkey, lean beef', 'Eggs, Greek yogurt, cottage cheese', 'Brown rice, oats, sweet potato', 'Broccoli, spinach, mixed vegetables', 'Almonds, olive oil, avocado'],
    sampleDay: [
      { meal: 'Breakfast', time: '7:00 AM', items: '4 eggs + oats + banana + protein shake', cal: '720 cal' },
      { meal: 'Snack', time: '10:30 AM', items: 'Greek yogurt + mixed berries + handful of nuts', cal: '320 cal' },
      { meal: 'Lunch', time: '1:00 PM', items: '200g chicken + 1.5 cups brown rice + broccoli', cal: '680 cal' },
      { meal: 'Pre-Workout', time: '4:00 PM', items: 'Banana + protein shake + rice cake', cal: '380 cal' },
      { meal: 'Post-Workout', time: '7:00 PM', items: '200g beef + sweet potato + asparagus', cal: '620 cal' },
      { meal: 'Evening', time: '9:30 PM', items: 'Cottage cheese + casein protein', cal: '280 cal' },
    ],
  },
  {
    id: 'fat-loss',
    icon: '🔥',
    title: 'Fat Loss Diet',
    surplus: '-300–500 cal',
    protein: '1.2–1.5g/lb',
    carbs: 'Low–Moderate',
    fats: 'Moderate',
    color: '#ff6b00',
    desc: 'A moderate caloric deficit with high protein preserves muscle while burning fat. Strategic carb timing around workouts maintains energy for training intensity.',
    foods: ['White fish, chicken, turkey breast', 'Egg whites, whey protein', 'Leafy greens, cruciferous vegetables', 'Berries, citrus fruits', 'Nuts (portioned), olive oil'],
    sampleDay: [
      { meal: 'Breakfast', time: '7:00 AM', items: '3 egg whites + 1 whole egg + spinach + berries', cal: '360 cal' },
      { meal: 'Snack', time: '10:30 AM', items: 'Protein shake + celery/cucumber', cal: '180 cal' },
      { meal: 'Lunch', time: '1:00 PM', items: '200g tilapia + large salad + olive oil dressing', cal: '480 cal' },
      { meal: 'Pre-Workout', time: '4:00 PM', items: 'Apple + whey protein', cal: '260 cal' },
      { meal: 'Post-Workout', time: '7:00 PM', items: '180g chicken + vegetables + small serving rice', cal: '480 cal' },
      { meal: 'Evening', time: '9:00 PM', items: 'Casein protein shake', cal: '160 cal' },
    ],
  },
  {
    id: 'balanced',
    icon: '⚖️',
    title: 'Balanced Diet',
    surplus: 'Maintenance',
    protein: '0.8–1.0g/lb',
    carbs: 'Moderate',
    fats: 'Moderate',
    color: '#e8230a',
    desc: 'A sustainable, balanced approach for long-term health, performance maintenance, and body recomposition. Flexible enough to be maintained for life.',
    foods: ['Varied protein sources', 'Whole grains and complex carbs', 'Colorful vegetables', 'Whole fruits', 'Healthy fats from whole foods'],
    sampleDay: [
      { meal: 'Breakfast', time: '7:00 AM', items: '2 eggs + whole grain toast + avocado + orange juice', cal: '540 cal' },
      { meal: 'Snack', time: '10:30 AM', items: 'Apple + almond butter', cal: '220 cal' },
      { meal: 'Lunch', time: '1:00 PM', items: 'Turkey sandwich + side salad + olive oil', cal: '580 cal' },
      { meal: 'Snack', time: '4:00 PM', items: 'Protein bar or Greek yogurt', cal: '260 cal' },
      { meal: 'Dinner', time: '7:00 PM', items: '150g salmon + quinoa + roasted vegetables', cal: '620 cal' },
      { meal: 'Evening', time: '9:00 PM', items: 'Small handful of nuts', cal: '180 cal' },
    ],
  },
]

const mealTiming = [
  {
    time: 'Pre-Workout',
    icon: '⚡',
    timing: '60–90 min before',
    goal: 'Fuel performance',
    color: '#ff6b00',
    items: [
      'Complex carbohydrates for sustained energy (oats, brown rice, sweet potato)',
      'Moderate protein to prevent muscle breakdown (chicken, eggs, Greek yogurt)',
      'Low fiber and fat to avoid digestive discomfort during training',
      'Stay hydrated: 400–600ml of water 2 hours before',
    ],
    example: 'Oats + protein shake + banana',
  },
  {
    time: 'Post-Workout',
    icon: '💪',
    timing: 'Within 45–60 min',
    goal: 'Recovery & growth',
    color: '#e8230a',
    items: [
      'Fast-digesting protein to initiate muscle protein synthesis (whey, eggs)',
      'Simple carbohydrates to rapidly replenish glycogen stores (white rice, fruit)',
      'Minimal fat to avoid slowing nutrient absorption',
      'Rehydrate with water and electrolytes equal to what was lost through sweat',
    ],
    example: 'Whey shake + banana + white rice',
  },
]

const supplements = [
  { name: 'Whey Protein', icon: '🥛', rating: 5, purpose: 'Convenient protein source for muscle repair and growth. Best consumed post-workout.', dose: '25–50g per serving' },
  { name: 'Creatine Monohydrate', icon: '⚡', rating: 5, purpose: 'The most researched supplement in history. Increases strength, power, and muscle volume.', dose: '3–5g daily' },
  { name: 'Omega-3 Fish Oil', icon: '🐟', rating: 5, purpose: 'Reduces inflammation, supports joint health, improves cardiovascular function and recovery.', dose: '2–3g EPA/DHA daily' },
  { name: 'Vitamin D3 + K2', icon: '☀️', rating: 4, purpose: 'Critical for testosterone production, bone health, immune function, and mood regulation.', dose: '2000–5000 IU D3 daily' },
  { name: 'Magnesium Glycinate', icon: '💤', rating: 4, purpose: 'Improves sleep quality, reduces muscle cramps, and supports over 300 enzymatic reactions.', dose: '200–400mg before bed' },
  { name: 'Caffeine + L-Theanine', icon: '☕', rating: 4, purpose: 'Clean energy and focus without jitters. Synergistic combination for cognitive and physical performance.', dose: '200mg caffeine + 100mg L-theanine' },
]

export default function DietNutrition() {
  const [activePlan, setActivePlan] = useState('muscle-gain')
  const plan = dietPlans.find(p => p.id === activePlan)

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Fuel Your Body</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            DIET & <span className="gradient-text">NUTRITION</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Training is only 30% of the equation. Learn how to use nutrition to maximize every rep, session, and recovery.
          </p>
        </div>
      </div>

      {/* Diet Plan Selector */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: '40px' }}>
              <div className="section-label">🍽️ Choose Your Plan</div>
              <h2 className="section-title">DIET <span className="gradient-text">PLANS</span></h2>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {dietPlans.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePlan(p.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  border: '1px solid',
                  borderColor: activePlan === p.id ? 'var(--accent-red)' : 'var(--border-subtle)',
                  background: activePlan === p.id ? 'rgba(232,35,10,0.12)' : 'var(--bg-card)',
                  color: activePlan === p.id ? '#fff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  letterSpacing: '1.5px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <span>{p.icon}</span> {p.title}
              </button>
            ))}
          </div>

          {/* Plan Detail */}
          <ScrollReveal key={activePlan}>
            <div className="card" style={{ padding: '36px', borderTop: `3px solid ${plan.color}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '2.5rem' }}>{plan.icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '2px' }}>{plan.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px' }}>{plan.desc}</p>

                  {/* Macros */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                    {[
                      { label: 'Calories', value: plan.surplus },
                      { label: 'Protein', value: plan.protein },
                      { label: 'Carbs', value: plan.carbs },
                    ].map((m, i) => (
                      <div key={i} style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '16px 12px',
                        textAlign: 'center',
                      }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '2px', fontFamily: 'var(--font-ui)', fontWeight: 700, textTransform: 'uppercase' }}>{m.label}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '1px', color: 'var(--accent-orange)', marginTop: '4px' }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-orange)', textTransform: 'uppercase', marginBottom: '12px' }}>
                      Key Foods
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {plan.foods.map((f, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.92rem', fontFamily: 'var(--font-ui)' }}>
                          <span style={{ color: 'var(--accent-orange)', flexShrink: 0 }}>→</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sample Day */}
                <div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-orange)', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Sample Meal Day
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {plan.sampleDay.map((meal, i) => (
                      <div key={i} style={{
                        background: 'var(--bg-elevated)',
                        borderRadius: '8px',
                        padding: '14px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '12px',
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{meal.meal}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-ui)' }}>{meal.time}</span>
                          </div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'var(--font-ui)' }}>{meal.items}</div>
                        </div>
                        <div style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-display)', fontSize: '0.95rem', letterSpacing: '1px', flexShrink: 0 }}>{meal.cal}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meal Timing */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label">⏰ Timing Matters</div>
              <h2 className="section-title">PRE & POST <span className="gradient-text">WORKOUT MEALS</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {mealTiming.map((m, i) => (
              <ScrollReveal key={m.time} delay={i * 100}>
                <div className="card" style={{ padding: '36px', borderTop: `3px solid ${m.color}`, height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '2.5rem' }}>{m.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px' }}>{m.time}</h3>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <span className="tag">{m.timing}</span>
                        <span className="tag">{m.goal}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {m.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, fontFamily: 'var(--font-ui)' }}>
                        <span style={{ color: m.color, flexShrink: 0 }}>✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    background: 'var(--bg-elevated)',
                    borderRadius: '8px',
                    padding: '14px 16px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{ color: 'var(--text-muted)', letterSpacing: '1px', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 700 }}>Example: </span>
                    <span style={{ color: '#fff' }}>{m.example}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label">💊 Smart Supplementation</div>
              <h2 className="section-title">PROTEIN & <span className="gradient-text">SUPPLEMENTS</span></h2>
              <p className="section-desc">Evidence-based supplements that actually work. No hype, just science.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {supplements.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 70}>
                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                    <div style={{ color: 'var(--accent-orange)', fontSize: '14px' }}>{'★'.repeat(s.rating)}</div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '1.5px', marginBottom: '10px' }}>{s.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '16px' }}>{s.purpose}</p>
                  <div className="tag">{s.dose}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div style={{
              marginTop: '36px',
              background: 'rgba(232,35,10,0.08)',
              border: '1px solid rgba(232,35,10,0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'var(--font-ui)' }}>
                <strong style={{ color: '#fff' }}>Disclaimer:</strong> Supplements should complement a solid diet, not replace it. Consult with a healthcare professional before starting any supplementation protocol.
                Our nutrition coaches provide personalized guidance as part of all coaching packages.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
