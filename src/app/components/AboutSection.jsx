'use client'
import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
            el.style.transitionDelay = `${i * 120}ms`
            el.classList.add('revealed')
          })
        }
      })
    }, { threshold: 0.15 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{
      background: 'var(--color-surface)', padding: '7rem 1.5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: '-200px', top: '50%', transform: 'translateY(-50%)',
        width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(5,90,103,0.10)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-150px', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(220,159,37,0.14)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* Portrait */}
          <div data-reveal style={{ opacity: 0, transform: 'translateX(-30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease', position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              border: '1px solid var(--color-border)', aspectRatio: '4/5', maxWidth: '420px' }}>
              {/* Unsplash: professional Black woman, warm/confident */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop"
                alt="Aisha, Founder of AOS Impact Solutions"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
                  display: 'block', filter: 'brightness(0.88) contrast(1.05)' }}
              />
              <div style={{ position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(5,90,103,0.85) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 400,
                  color: '#FFFFFF', marginBottom: '0.15rem' }}>Aisha</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', fontWeight: 600,
                  letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
                  Founder & Credit Specialist
                </p>
              </div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '60px',
                borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)',
                borderTopLeftRadius: 'var(--radius-lg)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '60px', height: '60px',
                borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)',
                borderBottomRightRadius: 'var(--radius-lg)', pointerEvents: 'none' }} />
            </div>
            {/* Floating stat */}
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
              background: 'var(--color-surface-2)', border: '1px solid rgba(220,159,37,0.35)',
              borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow-gold)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 600,
                background: 'linear-gradient(135deg, #DC9F25, #055A67)', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>15+</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-muted)', marginTop: '0.3rem' }}>
                Years of Service
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>About the Founder</span>
              <div className="gold-divider-left" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400,
                lineHeight: 1.15, color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                A Mission Rooted<br />
                <em style={{ color: 'var(--color-teal-dark)', fontStyle: 'italic' }}>in Helping Others</em>
              </h2>
            </div>

            <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
              <p style={body}>My name is <strong style={{ color: 'var(--color-teal-dark)', fontWeight: 600 }}>Aisha</strong>, founder of AOS Impact Solutions.
                For over 15 years, I've dedicated my career to helping people improve their lives.
                That same passion for helping others is what led me into the world of credit and financial education.</p>
              <p style={body}>Throughout my journey, I realized that many people are never truly taught how credit works. Yet something as simple as
                understanding and managing your credit profile can be the difference between getting approved or denied — whether it's for
                your first credit card, business funding, or a home.</p>
              <p style={{ ...body, fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontStyle: 'italic',
                color: 'var(--color-teal-dark)', borderLeft: '2px solid var(--color-gold)',
                paddingLeft: '1.25rem', margin: '1.75rem 0' }}>
                "That realization became my purpose."
              </p>
              <p style={body}>I developed a strong passion for credit repair and credit building, with a focus on helping individuals take control
                of their financial future. Whether you're just starting out, rebuilding after setbacks, or preparing for a major purchase,
                I believe everyone deserves access to the knowledge, tools, and strategies needed to succeed.</p>
              <p style={body}>At AOS Impact Solutions, my mission is to help individuals and families build stronger credit profiles so they can
                unlock better opportunities — from approvals and funding to homeownership and long-term financial stability.
                I bring a high level of care, attention to detail, and commitment to helping you restore and strengthen your credit.</p>
            </div>

            <div data-reveal style={{ display: 'none', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem',
              opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
              {['Credit Repair Specialist','Financial Educator','Credit Profile Optimization','15+ Years Experience'].map((tag) => (
                <span key={tag} style={{ padding: '0.4rem 1rem', border: '1px solid rgba(220,159,37,0.35)',
                  borderRadius: '100px', fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 500,
                  letterSpacing: '0.06em', color: 'var(--color-teal-dark)', background: 'rgba(220,159,37,0.08)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`.revealed { opacity:1!important; transform:none!important; }`}</style>
    </section>
  )
}
const body = { fontFamily: 'var(--font-body)', fontSize: '0.98rem', fontWeight: 400,
  color: 'var(--color-muted-light)', lineHeight: 1.9, marginBottom: '1rem' }
