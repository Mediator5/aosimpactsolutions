'use client'

import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              el.style.transitionDelay = `${i * 120}ms`
              el.classList.add('revealed')
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
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative circle */}
      <div style={{
        position: 'absolute',
        right: '-200px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: '-150px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Left — Visual card */}
          <div data-reveal style={{
            opacity: 0,
            transform: 'translateX(-30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            position: 'relative',
          }}>
            {/* Portrait placeholder */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              aspectRatio: '4/5',
              maxWidth: '420px',
            }}>
              {/* Replace this with <Image src="/aisha.jpg" fill style={{objectFit:'cover'}} alt="Aisha, Founder" /> */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                background: 'linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface-3) 100%)',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '2px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                }}>
                  Photo Coming Soon
                </span>
              </div>

              {/* Gold corner accent */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '60px', height: '60px',
                borderTop: '2px solid var(--color-gold)',
                borderLeft: '2px solid var(--color-gold)',
                borderTopLeftRadius: 'var(--radius-lg)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0, right: 0,
                width: '60px', height: '60px',
                borderBottom: '2px solid var(--color-gold)',
                borderRight: '2px solid var(--color-gold)',
                borderBottomRightRadius: 'var(--radius-lg)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              background: 'var(--color-black)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--shadow-gold)',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #E2C27D, #C9A84C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>15+</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginTop: '0.3rem',
              }}>Years of Service</div>
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            <div data-reveal style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}>About the Founder</span>
              <div className="gold-divider-left" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }} />
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-white)',
                marginBottom: '1.5rem',
              }}>
                A Mission Rooted<br />
                <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>in Helping Others</em>
              </h2>
            </div>

            <div data-reveal style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
              <p style={bodyTextStyle}>
                My name is <strong style={{ color: 'var(--color-gold-light)', fontWeight: 500 }}>Aisha</strong>, founder of AOS Impact Solutions.
                For over 15 years, I've worked as a Registered Nurse, dedicating my career to helping
                people improve their lives. That same passion for helping others is what led me into
                the world of credit and financial education.
              </p>
              <p style={bodyTextStyle}>
                Throughout my journey, I realized that many people are never truly taught how credit
                works. Yet something as simple as understanding and managing your credit profile can
                be the difference between getting approved or denied — whether it's for your first
                credit card, business funding, or a home.
              </p>
              <p style={{ ...bodyTextStyle, fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-gold-light)', borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.25rem', margin: '1.75rem 0' }}>
                "That realization became my purpose."
              </p>
              <p style={bodyTextStyle}>
                At AOS Impact Solutions, my mission is to help individuals and families build stronger
                credit profiles so they can unlock better opportunities — from approvals and funding
                to homeownership and long-term financial stability.
              </p>
            </div>

            {/* Credential tags */}
            <div data-reveal style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '2rem',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
              {['Registered Nurse, RN', 'Credit Repair Specialist', 'Financial Educator', '15+ Years Experience'].map((tag) => (
                <span key={tag} style={{
                  padding: '0.4rem 1rem',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: 'var(--color-muted-light)',
                  background: 'rgba(201,168,76,0.04)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .revealed {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </section>
  )
}

const bodyTextStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.92rem',
  fontWeight: 300,
  color: 'var(--color-muted-light)',
  lineHeight: 1.9,
  marginBottom: '1rem',
}