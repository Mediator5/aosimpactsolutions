'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    body: 'We evaluate your credit profile and recommend the best strategy tailored to your specific situation and goals.',
  },
  {
    number: '02',
    title: 'Credit Audit',
    body: 'A detailed analysis is performed to identify inaccurate, outdated, or unverifiable items across all three bureaus.',
  },
  {
    number: '03',
    title: 'Strategic Disputes',
    body: 'We challenge negative items directly with Experian, Equifax, and TransUnion using advanced dispute methods.',
  },
  {
    number: '04',
    title: 'Profile Optimization',
    body: 'We guide you in building stronger credit habits, adding positive accounts, and optimizing your overall profile.',
  },
  {
    number: '05',
    title: 'Progress & Results',
    body: 'As items are corrected or removed, your credit profile begins to improve — and we track every step of the way.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-step]').forEach((el, i) => {
              setTimeout(() => el.classList.add('step-revealed'), i * 150)
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
      id="process"
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative horizontal gold line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 10%, rgba(201,168,76,0.2) 50%, transparent 90%)',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>How It Works</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginTop: '1rem',
            lineHeight: 1.2,
          }}>
            Your Path to a{' '}
            <em style={{ color: 'var(--color-gold-light)' }}>Stronger Credit Profile</em>
          </h2>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>

          {/* Connecting vertical line (desktop) */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15) 20%, rgba(201,168,76,0.15) 80%, transparent)',
            transform: 'translateX(-50%)',
          }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  data-step
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '2rem',
                    alignItems: 'center',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                  }}
                  className="step-row"
                >
                  {/* Left content */}
                  <div style={{
                    textAlign: 'right',
                    display: isEven ? 'block' : 'none',
                  }} className="step-left">
                    {isEven && <StepCard step={step} align="right" />}
                  </div>

                  {/* Center number */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--color-black)',
                      border: '2px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(201,168,76,0.2)',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--color-gold)',
                      }}>{step.number}</span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div style={{
                    textAlign: 'left',
                    display: !isEven ? 'block' : 'none',
                  }} className="step-right">
                    {!isEven && <StepCard step={step} align="left" />}
                  </div>

                  {/* Filler for alternating layout */}
                  {isEven && <div />}
                  {!isEven && <div style={{ gridColumn: 1 }} />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .step-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .step-row {
            grid-template-columns: auto 1fr !important;
          }
          .step-left, .step-right {
            display: block !important;
            text-align: left !important;
            grid-column: 2;
            grid-row: 1;
          }
          .step-row > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

function StepCard({ step, align }) {
  return (
    <div style={{
      background: 'var(--color-surface-2)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.75rem 2rem',
      textAlign: align,
      transition: 'border-color 0.3s ease',
      maxWidth: '420px',
      marginLeft: align === 'left' ? 0 : 'auto',
      marginRight: align === 'right' ? 0 : 'auto',
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
    >
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.4rem',
        fontWeight: 500,
        color: 'var(--color-white)',
        marginBottom: '0.6rem',
      }}>
        {step.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        fontWeight: 300,
        color: 'var(--color-muted)',
        lineHeight: 1.85,
      }}>
        {step.body}
      </p>
    </div>
  )
}