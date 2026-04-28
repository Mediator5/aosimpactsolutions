'use client'
import { useEffect, useRef } from 'react'

const features = [
  { icon: '🔍', title: 'Expert Credit Analysis',
    body: 'We perform a detailed review of your credit reports to identify inaccurate, outdated, or questionable items that are holding your score back.' },
  { icon: '📄', title: 'Strategic Dispute Process',
    body: 'We challenge negative items using a structured and compliant dispute strategy, working directly with the credit bureaus and creditors on your behalf.' },
  { icon: '📈', title: 'Credit Profile Optimization',
    body: "We don't just focus on removing negative items — we help you build a stronger, more fundable credit profile with lasting strategies for long-term financial health." },
  { icon: '💰', title: 'Transparent Pricing',
    body: 'No hidden fees. No surprises. Just clear, honest pricing structured around the program that fits your specific needs and timeline.' },
  { icon: '🤝', title: 'Dedicated Support',
    body: 'We guide you every step of the way. From your first consultation to your final result, you are never navigating this process alone.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll('[data-card]').forEach((el, i) => {
          setTimeout(() => el.classList.add('card-revealed'), i * 100)
        })
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="why-us" ref={ref} style={{ background: 'var(--color-black)', padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Unsplash: financial district / data visualization */}
      <div style={{ position: 'absolute', inset: 0,
        // backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=70&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04, filter: 'saturate(0)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,159,37,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>Why Choose Us</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400,
            color: 'var(--color-white)', marginTop: '1rem', lineHeight: 1.2 }}>
            Your Credit Is One of Your Most{' '}
            <em style={{ color: 'var(--color-teal-dark)' }}>Powerful Financial Tools</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-muted)',
            maxWidth: '540px', margin: '1rem auto 0', lineHeight: 1.8 }}>
            We're here to help you use it to your advantage.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
          {features.map((f, i) => (
            <div key={i} data-card style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)', padding: '2rem', opacity: 0, transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor='rgba(220,159,37,0.5)'; e.currentTarget.style.boxShadow='var(--shadow-gold)'; e.currentTarget.style.transform='translateY(-4px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor='var(--color-border)'; e.currentTarget.style.boxShadow='var(--shadow-card)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px',
                background: 'linear-gradient(225deg, rgba(220,159,37,0.18), transparent)', borderBottomLeftRadius: '40px' }} />
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 500,
                color: 'var(--color-white)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300,
                color: 'var(--color-muted)', lineHeight: 1.85 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.card-revealed { opacity:1!important; transform:translateY(0)!important; }`}</style>
    </section>
  )
}
