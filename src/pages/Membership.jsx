import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const plans = [
  {
    id: 'monthly',
    name: 'MONTHLY',
    price: 79,
    period: '/month',
    badge: null,
    color: '#555',
    desc: 'Flexible, no-commitment access to IRONCORE. Perfect for those who want to try before committing.',
    features: [
      { text: 'Full gym access (5AM–11PM)', included: true },
      { text: 'Locker room & showers', included: true },
      { text: 'Group fitness classes', included: true },
      { text: '1 fitness assessment/year', included: true },
      { text: 'Guest pass (1/month)', included: true },
      { text: 'Nutrition coaching', included: false },
      { text: 'Personal training sessions', included: false },
      { text: 'Health testing suite', included: false },
      { text: 'Priority booking', included: false },
      { text: 'Premium coaching app', included: false },
    ],
  },
  {
    id: 'quarterly',
    name: 'QUARTERLY',
    price: 65,
    period: '/month',
    badge: '18% SAVINGS',
    color: '#ff6b00',
    desc: 'The smart choice. Commit to 3 months and unlock access to nutrition coaching and health testing.',
    features: [
      { text: 'Full gym access (5AM–11PM)', included: true },
      { text: 'Locker room & showers', included: true },
      { text: 'Group fitness classes', included: true },
      { text: '2 fitness assessments/year', included: true },
      { text: 'Guest pass (2/month)', included: true },
      { text: 'Basic nutrition coaching', included: true },
      { text: '1 PT session/month', included: true },
      { text: 'Health testing (BMI, body fat)', included: true },
      { text: 'Priority booking', included: false },
      { text: 'Premium coaching app', included: false },
    ],
  },
  {
    id: 'annual',
    name: 'ANNUAL',
    price: 55,
    period: '/month',
    badge: '🔥 BEST VALUE',
    color: '#e8230a',
    desc: 'Maximum value. Full access to everything IRONCORE offers, plus health testing and priority support.',
    features: [
      { text: 'Full gym access 24/7', included: true },
      { text: 'Locker room & showers', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: 'Quarterly fitness assessments', included: true },
      { text: 'Unlimited guest passes', included: true },
      { text: 'Full nutrition coaching', included: true },
      { text: '2 PT sessions/month', included: true },
      { text: 'Full health testing suite', included: true },
      { text: 'Priority booking always', included: true },
      { text: 'Premium coaching app', included: true },
    ],
    highlight: true,
  },
  {
    id: 'premium',
    name: 'ELITE COACHING',
    price: 299,
    period: '/month',
    badge: '⭐ CONCIERGE',
    color: '#ff6b00',
    desc: 'The ultimate transformation experience. Your own dedicated coach, full programming, and weekly check-ins.',
    features: [
      { text: 'Everything in Annual, plus:', included: true },
      { text: 'Dedicated personal trainer', included: true },
      { text: '4 PT sessions/week', included: true },
      { text: 'Custom meal plan updated weekly', included: true },
      { text: 'Weekly check-in calls', included: true },
      { text: 'Monthly body composition scans', included: true },
      { text: 'Direct coach WhatsApp access', included: true },
      { text: 'Supplement recommendations', included: true },
      { text: 'Competition preparation (if desired)', included: true },
      { text: 'Lifetime membership discount lock', included: true },
    ],
  },
]

const faqs = [
  { q: 'Can I freeze my membership?', a: 'Yes. Annual and Quarterly members can freeze their membership for up to 60 days per year for medical reasons or extended travel.' },
  { q: 'Is there a joining fee?', a: 'We currently waive the joining fee for all new members. Just pay your first month and you\'re in.' },
  { q: 'What happens after my first free month?', a: 'Your chosen plan begins automatically. We\'ll remind you 5 days before your trial ends. No surprises.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade at any time and we\'ll prorate the difference. Downgrading is available at renewal.' },
  { q: 'Are classes included?', a: 'Group fitness classes are included in all plans. The number of premium PT sessions depends on your plan.' },
  { q: 'Do you offer student or senior discounts?', a: 'Yes! We offer 20% discounts for students and seniors. Bring valid ID to the front desk to activate.' },
]

export default function Membership() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="section-label" style={{ animation: 'fadeInUp 0.5s ease both' }}>Join IRONCORE</div>
          <h1 className="page-header-title" style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            MEMBERSHIP <span className="gradient-text">PLANS</span>
          </h1>
          <p className="page-header-subtitle" style={{ animation: 'fadeInUp 0.6s ease 0.2s both', maxWidth: '560px' }}>
            Choose the plan that matches your ambition. First month FREE for all new members.
          </p>
        </div>
      </div>

      {/* Plans */}
      <section className="section">
        <div className="container">
          {/* First Month Free Banner */}
          <ScrollReveal>
            <div style={{
              background: 'var(--accent-gradient)',
              borderRadius: '12px',
              padding: '16px 28px',
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)' }} />
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>🎁</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '2px', color: '#fff' }}>FIRST MONTH FREE — LIMITED TIME OFFER</div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-ui)', fontSize: '0.88rem' }}>No credit card required. Cancel anytime during your trial.</div>
                </div>
              </div>
              <Link to="/contact" style={{ position: 'relative', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px', padding: '10px 20px', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', flexShrink: 0 }}>
                Claim Offer →
              </Link>
            </div>
          </ScrollReveal>

          {/* Plan Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            alignItems: 'start',
          }}>
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.id} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    padding: '32px 24px',
                    borderTop: `3px solid ${plan.color}`,
                    position: 'relative',
                    overflow: 'visible',
                    transform: plan.highlight ? 'scale(1.03)' : 'none',
                    zIndex: plan.highlight ? 1 : 0,
                    boxShadow: plan.highlight ? `0 0 60px rgba(232,35,10,0.25)` : 'none',
                    border: plan.highlight ? `1px solid rgba(232,35,10,0.4)` : undefined,
                  }}
                >
                  {plan.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: plan.highlight ? 'var(--accent-gradient)' : 'var(--bg-card)',
                      border: `1px solid ${plan.color}`,
                      borderRadius: '20px',
                      padding: '4px 16px',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#fff',
                      whiteSpace: 'nowrap',
                    }}>{plan.badge}</div>
                  )}

                  <div style={{ marginBottom: '4px', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '3px', color: plan.color }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>${plan.price}</div>
                    <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.85rem' }}>{plan.period}</div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '24px', minHeight: '60px' }}>{plan.desc}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {plan.features.map((f, j) => (
                      <div key={j} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        color: f.included ? '#fff' : 'var(--text-muted)',
                        fontSize: '0.84rem', fontFamily: 'var(--font-ui)', fontWeight: f.included ? 500 : 400,
                        textDecoration: f.included ? 'none' : 'none',
                      }}>
                        <span style={{
                          flexShrink: 0, marginTop: '2px',
                          color: f.included ? '#22c55e' : 'var(--text-muted)',
                          fontSize: '14px',
                        }}>{f.included ? '✓' : '✗'}</span>
                        {f.text}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-ui)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      background: plan.highlight ? 'var(--accent-gradient)' : 'transparent',
                      border: plan.highlight ? 'none' : `1px solid ${plan.color}60`,
                      color: plan.highlight ? '#fff' : plan.color,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      if (!plan.highlight) {
                        e.currentTarget.style.background = `${plan.color}15`
                      }
                    }}
                    onMouseLeave={e => {
                      if (!plan.highlight) {
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    {plan.highlight ? '🔥 Get Started' : 'Choose Plan'}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginTop: '24px', fontFamily: 'var(--font-ui)' }}>
              All prices exclude applicable taxes. Annual plan billed as ${55 * 12}/year. No hidden fees. Cancel or freeze anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label">✅ All Members Get</div>
              <h2 className="section-title">EVERY PLAN <span className="gradient-text">INCLUDES</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid-4">
            {[
              { icon: '🆓', title: 'First Month FREE', desc: 'No charge for your first 30 days. Zero risk.' },
              { icon: '🔓', title: 'No Lock-In Contracts', desc: 'Cancel or freeze anytime after minimum term.' },
              { icon: '🎽', title: 'Towel Service', desc: 'Fresh towels provided at every visit.' },
              { icon: '📱', title: 'Mobile App Access', desc: 'Track workouts, book classes, and connect with coaches.' },
              { icon: '🅿️', title: 'Free Parking', desc: 'Secure, well-lit parking for all members.' },
              { icon: '🧴', title: 'Premium Amenities', desc: 'Showers, sauna, and premium locker rooms.' },
              { icon: '👥', title: 'Community Events', desc: 'Monthly challenges, competitions, and social events.' },
              { icon: '💬', title: 'Member Support', desc: '24/7 digital support plus on-floor coach assistance.' },
            ].map((perk, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{perk.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '1.5px', marginBottom: '8px' }}>{perk.title}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{perk.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label">❓ Questions</div>
              <h2 className="section-title">FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span></h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div
                  className="card"
                  style={{ overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div style={{
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.97rem', color: '#fff' }}>{faq.q}</span>
                    <span style={{
                      color: 'var(--accent-orange)', fontSize: '18px', flexShrink: 0,
                      transition: 'transform 0.3s',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      display: 'inline-block',
                    }}>+</span>
                  </div>
                  {openFaq === i && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.93rem',
                      lineHeight: 1.7,
                      fontFamily: 'var(--font-ui)',
                      animation: 'fadeInUp 0.2s ease both',
                    }}>{faq.a}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .plans-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
