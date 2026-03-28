'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

/* ─────────────────────────────────────────
   NEGATIVE ITEMS SECTION
───────────────────────────────────────── */
const negativeItems = [
  'Late Payments',
  'Collections',
  'Charge-Offs',
  'Medical Collections',
  'Repossessions',
  'Hard Inquiries',
  'Bankruptcy Reporting Errors',
  'Identity Theft Accounts',
  'Incorrect Personal Information',
]

export function NegativeItemsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-item]').forEach((el, i) => {
              setTimeout(() => el.classList.add('item-revealed'), i * 60)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border accent */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 10%, rgba(201,168,76,0.2) 50%, transparent 90%)',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
            }}>What We Challenge</span>
            <div className="gold-divider-left" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }} />
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--color-white)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}>
              Negative Items We{' '}
              <em style={{ color: 'var(--color-gold-light)' }}>Help Remove</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'var(--color-muted)',
              lineHeight: 1.9,
              marginBottom: '2rem',
            }}>
              We help challenge inaccurate, outdated, or questionable items on
              your credit report. Every profile is unique — your strategy will
              be customized based on your specific situation.
            </p>
            <Link href="/consultation" className="btn-primary">
              See What We Can Remove
            </Link>
          </div>

          {/* Right — items grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}>
            {negativeItems.map((item, i) => (
              <div
                key={i}
                data-item
                style={{
                  padding: '0.6rem 1.2rem',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 400,
                  color: 'var(--color-muted-light)',
                  opacity: 0,
                  transform: 'scale(0.9)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.25s, color 0.25s',
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                  e.currentTarget.style.color = 'var(--color-gold-light)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-muted-light)'
                }}
              >
                <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .item-revealed {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────────────────
   WHO WE HELP SECTION
───────────────────────────────────────── */
const helpItems = [
  { icon: '🏠', label: 'Purchase a Home' },
  { icon: '🚗', label: 'Finance a Vehicle' },
  { icon: '💼', label: 'Access Business Funding' },
  { icon: '📉', label: 'Lower Interest Rates' },
  { icon: '🗑️', label: 'Remove Negative Items' },
  { icon: '📈', label: 'Rebuild Financial Future' },
]

export function WhoWeHelpSection() {
  return (
    <section
      style={{
        background: 'var(--color-black)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>Who We Help</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginTop: '1rem',
            lineHeight: 1.2,
          }}>
            We Work With Individuals Who Want{' '}
            <em style={{ color: 'var(--color-gold-light)' }}>More From Life</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3.5rem',
        }}>
          {helpItems.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'var(--color-muted-light)',
              }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          background: 'var(--color-surface-2)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 3rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 400,
              color: 'var(--color-white)',
              marginBottom: '0.4rem',
            }}>
              Ready to take control of your credit?
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: 300,
              color: 'var(--color-muted)',
            }}>
              Your journey to better credit starts here.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/enroll" className="btn-primary">Start Credit Repair</Link>
            <Link href="/consultation" className="btn-outline">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FAQ SECTION
───────────────────────────────────────── */
const faqs = [
  {
    q: 'How long does credit repair take?',
    a: 'Most clients begin seeing results within 30–90 days. Full results typically take 2–6 months depending on your credit profile and the number of negative items.',
  },
  {
    q: 'Can you guarantee items will be removed?',
    a: 'No company can legally guarantee specific results. We use a strategic and compliant dispute process to achieve the best possible outcome for every client.',
  },
  {
    q: 'What negative items can you help remove?',
    a: 'We help challenge collections, charge-offs, late payments, medical bills, inquiries, repossessions, bankruptcy reporting errors, and incorrect personal information.',
  },
  {
    q: 'Do I need credit monitoring?',
    a: 'Yes. Credit monitoring allows us to access your reports, track progress, and respond quickly throughout the process. It is included with all programs.',
  },
  {
    q: 'Will this improve my credit score?',
    a: 'As negative items are corrected or removed, many clients see improvements. Results vary based on your overall credit profile and existing positive accounts.',
  },
  {
    q: 'Do I need to do anything during the process?',
    a: 'Yes. You may need to provide documents and follow guidance such as avoiding new credit inquiries to maximize results.',
  },
  {
    q: 'What happens if I miss a payment?',
    a: 'For month-to-month plans, services are paused if a payment is missed and resume once the account is brought current. Contracts are terminated if payment is missed within the first three months.',
  },
  {
    q: 'Is credit repair legal?',
    a: 'Yes. You have the legal right to dispute inaccurate or incomplete information on your credit report, and we assist you in exercising those rights.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="faq"
      style={{
        background: 'var(--color-surface)',
        padding: '7rem 1.5rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>FAQ</span>
          <div className="gold-divider" style={{ marginTop: '0.75rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginTop: '1rem',
          }}>
            Frequently Asked <em style={{ color: 'var(--color-gold-light)' }}>Questions</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: 'var(--color-surface-2)',
                  border: `1px solid ${isOpen ? 'rgba(201,168,76,0.3)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: isOpen ? 'var(--color-gold-light)' : 'var(--color-white)',
                    lineHeight: 1.5,
                    transition: 'color 0.2s ease',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? 'var(--color-gold)' : 'var(--color-border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    background: isOpen ? 'rgba(201,168,76,0.1)' : 'transparent',
                  }}>
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        stroke: isOpen ? 'var(--color-gold)' : 'var(--color-muted)',
                      }}
                    >
                      <path d="M6 2v8M2 6h8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                <div style={{
                  maxHeight: isOpen ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}>
                  <div style={{
                    padding: '0 1.5rem 1.25rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.86rem',
                    fontWeight: 300,
                    color: 'var(--color-muted-light)',
                    lineHeight: 1.85,
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1rem',
                  }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}