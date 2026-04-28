'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const programs = [
  {
    id: 'silver',
    icon: '🪙',
    name: 'Silver Program',
    tagline: 'Best for steady, ongoing credit improvement',
    investment: '$350 to start + $100/month',
    monitoring: '$25/month credit monitoring',
    timeline: '6–8 months',
    badge: null,
    details: [
      'Ongoing disputes (month-to-month)',
      'Disputes with Experian, Equifax and TransUnion',
      'Continuous work while account remains active',
      'Credit profile building guidance',
      'Credit monitoring access',
    ],
    note: 'Disputes pause if monthly payment is missed. Contract terminated if payment is missed within the first three months.',
  },
  {
    id: 'gold',
    icon: '⭐',
    name: 'Gold Program',
    tagline: 'Ideal for faster, structured results',
    investment: '$650 one-time',
    monitoring: '$25/month credit monitoring',
    timeline: '2–5 months',
    badge: 'Most Popular',
    details: [
      '5 dispute rounds with Experian, Equifax and TransUnion',
      'Advanced Dispute Methods',
      'Strategic dispute management',
      'Credit profile building strategies',
      'Credit monitoring access',
    ],
    note: null,
  },
  {
    id: 'platinum',
    icon: '💎',
    name: 'Platinum Program',
    tagline: 'Maximum impact. Accelerated results.',
    investment: '$1,000 one-time',
    monitoring: '$25/month credit monitoring',
    timeline: '1–4 months',
    badge: 'Maximum Results',
    details: [
      '7 dispute rounds with Experian, Equifax and TransUnion',
      'Advanced Dispute Methods',
      'Authorized user Tradeline included ($50/month to maintain)',
      'Priority processing',
      'Advanced credit optimization strategies',
      'Credit monitoring access',
    ],
    note: null,
  },
]

export default function PricingSection() {
  const [expanded, setExpanded] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-pricing-card]').forEach((el, i) => {
              setTimeout(() => el.classList.add('pricing-revealed'), i * 150)
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
      id="pricing"
      ref={sectionRef}
      style={{
        background: 'var(--color-black)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(220,159,37,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>Our Programs</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginTop: '1rem',
            lineHeight: 1.2,
          }}>
            Flexible Options Designed{' '}
            <em style={{ color: 'var(--color-teal-dark)' }}>For Your Timeline</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'var(--color-muted)',
            marginTop: '1rem',
            maxWidth: '500px',
            margin: '1rem auto 0',
          }}>
            Click on any program to see full details. All programs include access to credit monitoring.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {programs.map((prog) => {
            const isOpen = expanded === prog.id
            const isGold = prog.id === 'gold'

            return (
              <div
                key={prog.id}
                data-pricing-card
                style={{
                  background: isGold ? 'var(--color-surface-2)' : 'var(--color-surface-2)',
                  border: isGold
                    ? '1px solid rgba(220,159,37,0.6)'
                    : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease',
                  boxShadow: isGold ? 'var(--shadow-gold)' : 'var(--shadow-card)',
                  position: 'relative',
                }}
              >
                {/* Gold top bar for featured */}
                {isGold && (
                  <div style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--color-teal-dark), var(--color-gold), var(--color-teal-dark))',
                  }} />
                )}

                {/* Badge */}
                {prog.badge && (
                  <div style={{
                    position: 'absolute',
                    top: isGold ? '1.25rem' : '1rem',
                    right: '1.25rem',
                    padding: '0.25rem 0.75rem',
                    background: isGold
                      ? 'linear-gradient(135deg, var(--color-gold), var(--color-teal-dark))'
                      : 'rgba(220,159,37,0.20)',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isGold ? '#FFFFFF' : 'var(--color-teal-dark)',
                  }}>
                    {prog.badge}
                  </div>
                )}

                {/* Card Header — always visible */}
                <button
                  onClick={() => setExpanded(isOpen ? null : prog.id)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2rem',
                    textAlign: 'left',
                    display: 'block',
                  }}
                >
                  {/* Icon */}
                  <div style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1 }}>
                    {prog.icon}
                  </div>

                  {/* Program name */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--color-white)',
                    marginBottom: '0.4rem',
                    paddingRight: prog.badge ? '5rem' : 0,
                  }}>
                    {prog.name}
                  </h3>

                  {/* Tagline */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: 'var(--color-muted)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}>
                    {prog.tagline}
                  </p>

                  {/* Investment */}
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: 'var(--color-teal-dark)',
                    marginBottom: '0.25rem',
                  }}>
                    {prog.investment}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-muted)',
                    marginBottom: '0.5rem',
                  }}>
                    {prog.monitoring}
                  </div>

                  {/* Timeline */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.85rem',
                    background: 'rgba(220,159,37,0.12)',
                    border: '1px solid rgba(220,159,37,0.30)',
                    borderRadius: '100px',
                    marginTop: '0.5rem',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal-dark)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-teal-dark)',
                    }}>
                      {prog.timeline}
                    </span>
                  </div>

                  {/* Expand toggle */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '1.25rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-teal-dark)',
                  }}>
                    {isOpen ? 'Hide Details' : 'View Details'}
                    <svg
                      width="14" height="14" viewBox="0 0 12 12" fill="none"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        stroke: 'currentColor',
                      }}
                    >
                      <path d="M2 4l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Expandable details */}
                <div style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <div style={{
                    padding: '0 2rem 2rem',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.5rem',
                    marginTop: 0,
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      marginBottom: '1rem',
                    }}>What's Included</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                      {prog.details.map((d, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          fontWeight: 300,
                          color: 'var(--color-muted-light)',
                          lineHeight: 1.6,
                        }}>
                          <span style={{
                            color: 'var(--color-gold)',
                            marginTop: '0.1rem',
                            flexShrink: 0,
                            fontSize: '0.9rem',
                          }}>✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    {prog.note && (
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        fontWeight: 300,
                        color: 'var(--color-muted)',
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        padding: '0.75rem',
                        background: 'rgba(220,159,37,0.08)',
                        border: '1px solid rgba(220,159,37,0.20)',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.5rem',
                      }}>
                        * {prog.note}
                      </p>
                    )}

                    <Link
                      href="/enroll"
                      className={isGold ? 'btn-primary' : 'btn-outline'}
                      style={{ width: '100%', textAlign: 'center' }}
                    >
                      Get Started — {prog.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.88rem',
          fontWeight: 300,
          color: 'var(--color-muted)',
          marginTop: '2.5rem',
          lineHeight: 1.7,
        }}>
          Every credit profile is unique. Not sure which program is right for you?{' '}
          <Link href="/consultation" style={{
            color: 'var(--color-gold)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>
            Book a free consultation →
          </Link>
        </p>
      </div>

      <style>{`
        .pricing-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}