'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--color-black)',
    }}>
      {/* Unsplash: credit cards / luxury finance */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1800&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
        opacity: 0.18, filter: 'saturate(0.6)', transform: 'scale(1.04)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.72) 50%, rgba(8,8,8,0.88) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '260px',
        background: 'linear-gradient(to bottom, transparent, var(--color-black))', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '140px',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.6), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '8%', top: '15%', bottom: '15%', width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '8%', top: '20%', bottom: '20%', width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '8rem 1.5rem 6rem', textAlign: 'center', width: '100%',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.4rem 1.25rem', border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '100px', marginBottom: '2.5rem',
          animation: 'fadeInUp 0.6s ease forwards', opacity: 0,
          animationDelay: '0.1s', animationFillMode: 'forwards',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)',
            display: 'inline-block', boxShadow: '0 0 8px var(--color-gold)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
            Professional Credit Restoration
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--color-white)',
          marginBottom: '1.5rem', animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.25s', animationFillMode: 'forwards',
        }}>
          Transforming Credit.<br />
          <span className="shimmer-text">Creating Opportunity.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300,
          color: 'var(--color-muted-light)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 1rem',
          animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.4s', animationFillMode: 'forwards',
        }}>
          Your credit should never limit your future.
        </p>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontWeight: 300,
          color: 'var(--color-muted)', lineHeight: 1.9, maxWidth: '600px', margin: '0 auto 3rem',
          animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.5s', animationFillMode: 'forwards',
        }}>
          We help individuals and families remove inaccurate negative items, rebuild their credit profiles,
          and position themselves for stronger financial opportunities — whether you're preparing to purchase
          a home, finance a vehicle, secure funding, or simply regain control of your finances.
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem',
          animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.65s', animationFillMode: 'forwards',
        }}>
          <Link href="/enroll" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Get Started
          </Link>
          <Link href="/consultation" className="btn-outline" style={{ padding: '1rem 2.5rem' }}>
            Book a Consultation
          </Link>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center',
          animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.8s', animationFillMode: 'forwards',
        }}>
          {['✔ Professional Credit Restoration','✔ Strategic Dispute Process','✔ Credit Profile Optimization','✔ Transparent, Straightforward Pricing'].map((badge) => (
            <span key={badge} style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.08em', color: 'var(--color-muted-light)' }}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        animation: 'fadeIn 1s ease forwards', opacity: 0, animationDelay: '1.2s', animationFillMode: 'forwards',
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--color-muted)' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
          animation: 'scrollPulse 2s ease infinite' }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { opacity:1; transform:scaleY(1); transform-origin:top; }
          100% { opacity:0; transform:scaleY(0); transform-origin:top; }
        }
      `}</style>
    </section>
  )
}
