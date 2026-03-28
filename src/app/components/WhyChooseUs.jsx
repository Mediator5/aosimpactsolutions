'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    title: 'Expert Credit Analysis',
    body: 'We perform a detailed review of your credit reports to identify inaccurate, outdated, or questionable items that are holding your score back.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
    title: 'Strategic Dispute Process',
    body: 'We challenge negative items using a structured and compliant dispute strategy, working directly with the credit bureaus and creditors on your behalf.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Credit Profile Optimization',
    body: 'We go beyond removals — we help you build a stronger, more fundable credit profile with lasting strategies for long-term financial health.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    body: 'No hidden fees. No surprises. Just clear, honest pricing structured around the program that fits your specific needs and timeline.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Dedicated Support',
    body: 'We guide you every step of the way. From your first consultation to your final result, you are never navigating this process alone.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-card]').forEach((el, i) => {
              setTimeout(() => el.classList.add('card-revealed'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        background: 'var(--color-black)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background geometric accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>Why Choose Us</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginTop: '1rem',
            lineHeight: 1.2,
          }}>
            Your Credit Is One of Your Most{' '}
            <em style={{ color: 'var(--color-gold-light)' }}>Powerful Financial Tools</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'var(--color-muted)',
            maxWidth: '540px',
            margin: '1rem auto 0',
            lineHeight: 1.8,
          }}>
            We're here to help you use it to your advantage.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              data-card
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: '40px', height: '40px',
                background: 'linear-gradient(225deg, rgba(201,168,76,0.12), transparent)',
                borderBottomLeftRadius: '40px',
              }} />

              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold)',
                marginBottom: '1.5rem',
              }}>
                {f.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 500,
                color: 'var(--color-white)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {f.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'var(--color-muted)',
                lineHeight: 1.85,
              }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}