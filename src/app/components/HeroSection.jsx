'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

/* ── Hero carousel images (verified Unsplash placeholders) ──
   Swap any URL for your own. Keep the same query string for sizing. */
const heroSlides = [
  {
    src: '/img4.png',
    alt: 'Confident professional ready to transform her financial future',
  },
  {
    src: '/img2.jpg',
    alt: 'Family enjoying their financial freedom together',
  },
  {
    src: '/img3.jpg',
    alt: 'Professional credit specialist',
  },
]

const HERO_SLIDE_DURATION = 5500   // ms per slide
const HERO_FADE_DURATION  = 1200   // ms crossfade

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  /* Auto-advance, paused on hover */
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroSlides.length)
    }, HERO_SLIDE_DURATION)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  /* Manual jump — also resets the timer so the chosen slide gets full time */
  const goToSlide = (i) => {
    setActiveSlide(i)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((cur) => (cur + 1) % heroSlides.length)
      }, HERO_SLIDE_DURATION)
    }
  }

  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--color-black)',
      paddingTop: '7rem',
      paddingBottom: '4rem',
    }}>
      {/* ── Subtle decorative background ── */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,159,37,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-25%', left: '-15%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(10,145,166,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* dot grid accent */}
      <div style={{
        position: 'absolute', top: '12%', left: '4%',
        width: '180px', height: '180px',
        backgroundImage: 'radial-gradient(circle, rgba(5,90,103,0.18) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
        opacity: 0.6,
        pointerEvents: 'none',
      }} />

      <div className="hero-grid" style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '0 1.5rem', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Text content ── */}
        <div className="hero-text" style={{
          animation: 'fadeInUp 0.7s ease forwards', opacity: 0,
          animationDelay: '0.1s', animationFillMode: 'forwards',
        }}>
          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.45rem 1rem',
            border: '1px solid rgba(220,159,37,0.45)',
            borderRadius: '100px', marginBottom: '1.75rem',
            background: 'rgba(255,255,255,0.6)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--color-gold)',
              boxShadow: '0 0 8px var(--color-gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--color-teal-dark)' }}>
              Professional Credit Restoration
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            color: 'var(--color-white)',
            marginBottom: '1.25rem',
          }}>
            Transforming Credit.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-teal-dark)' }}>
              Creating Opportunity.
            </em>
          </h1>

          {/* Gold accent rule under headline */}
          <div style={{
            width: '64px', height: '3px',
            background: 'var(--color-gold)',
            borderRadius: '2px',
            marginBottom: '1.5rem',
          }} />

          {/* Subhead */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
            fontWeight: 600,
            color: 'var(--color-white)',
            lineHeight: 1.5,
            marginBottom: '1rem',
            maxWidth: '520px',
          }}>
            Your credit should never limit your future.
          </p>

          {/* Body */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 400,
            color: 'var(--color-muted-light)',
            lineHeight: 1.75,
            marginBottom: '2.25rem',
            maxWidth: '520px',
          }}>
            We help individuals and families remove inaccurate negative items,
            rebuild stronger credit profiles, and unlock better financial
            opportunities — from homeownership to funding to long-term stability.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.85rem',
            marginBottom: '2.5rem',
          }}>
            <Link href="/enroll" className="btn-primary">
              Get Started
            </Link>
            <Link href="/consultation" className="btn-outline">
              Book a Consultation
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero-badges" style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.25rem 2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)',
            maxWidth: '560px',
          }}>
            {[
              { icon: '✓', label: 'Strategic Disputes' },
              { icon: '✓', label: 'All 3 Bureaus' },
              { icon: '✓', label: 'Transparent Pricing' },
              { icon: '✓', label: '15+ Years Experience' },
            ].map((b) => (
              <div key={b.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '20px', height: '20px',
                  borderRadius: '50%',
                  background: 'var(--color-teal-dark)',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                }}>{b.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-muted-light)',
                  letterSpacing: '0.02em',
                }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Portrait card ── */}
        <div className="hero-image-wrap" style={{
          position: 'relative',
          animation: 'fadeInUp 0.8s ease forwards', opacity: 0,
          animationDelay: '0.3s', animationFillMode: 'forwards',
        }}>

          {/* Teal accent block, offset behind */}
          <div style={{
            position: 'absolute',
            top: '1.5rem', right: '-1.5rem',
            width: '85%', height: '85%',
            background: 'var(--color-teal-dark)',
            borderRadius: 'var(--radius-lg)',
            zIndex: 0,
          }} />

          {/* Gold thin stripe behind, offset other side */}
          <div style={{
            display:'none',
            position: 'absolute',
            bottom: '-1.25rem', left: '-1.25rem',
            width: '120px', height: '120px',
            border: '3px solid var(--color-gold)',
            borderRadius: 'var(--radius-lg)',
            zIndex: 0,
          }} />

          {/* Image card — carousel */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(5,90,103,0.30), 0 10px 25px -10px rgba(5,90,103,0.15)',
              aspectRatio: '4/5',
              maxWidth: '440px',
              marginLeft: 'auto',
              background: 'var(--color-surface-3)',
            }}
          >
            {/* Stacked carousel slides — crossfade via opacity */}
            {heroSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.alt}
                aria-hidden={i !== activeSlide}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  opacity: i === activeSlide ? 1 : 0,
                  transition: `opacity ${HERO_FADE_DURATION}ms ease`,
                  willChange: 'opacity',
                }}
              />
            ))}

            {/* Subtle gradient at bottom for depth */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 55%, rgba(5,90,103,0.32) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }} />

            {/* Dot indicators — sit on top of the gradient at bottom-center */}
            <div
              role="tablist"
              aria-label="Hero image slideshow"
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.45rem',
                zIndex: 2,
                padding: '0.4rem 0.65rem',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(6px)',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {heroSlides.map((_, i) => {
                const active = i === activeSlide
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={active}
                    aria-label={`Show slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    style={{
                      width: active ? '26px' : '8px',
                      height: '6px',
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      background: active ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
                      transition: 'all 0.4s ease',
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Floating gold stat chip */}
          <div className="hero-stat-chip" style={{
            position: 'absolute',
            bottom: '3.25rem', right: '0.5rem',
            zIndex: 2,
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            boxShadow: '0 12px 30px -8px rgba(5,90,103,0.25)',
            display: 'flex', alignItems: 'center', gap: '0.85rem',
            minWidth: '180px',
          }}>
            <div style={{
              width: '44px', height: '44px',
              borderRadius: '50%',
              background: 'var(--color-gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--color-teal-dark)',
            }}>
              ★
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                lineHeight: 1,
              }}>
                750+
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginTop: '0.2rem',
              }}>
                Clients Helped
              </div>
            </div>
          </div>

          {/* Floating trust chip — top */}
          <div style={{
            display: 'none',
            position: 'absolute',
            top: '-0.75rem', left: '-0.75rem',
            zIndex: 2,
            background: 'var(--color-teal-dark)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '0.7rem 1rem',
            boxShadow: '0 12px 30px -8px rgba(5,90,103,0.30)',
            // display: 'flex', alignItems: 'center', gap: '0.55rem',
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: 'var(--color-gold-light)',
              boxShadow: '0 0 8px var(--color-gold)',
            }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Trusted Since 2010
            </span>
          </div>
        </div>
      </div>

      {/* ── Responsive: stack on mobile ── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            text-align: center;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-text h1,
          .hero-text p {
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-badges {
            justify-content: center;
          }
          .hero-image-wrap {
            max-width: 420px;
            margin: 0 auto;
          }
        }
        @media (max-width: 520px) {
          .hero-stat-chip {
            right: 50% !important;
            transform: translateX(50%) !important;
            min-width: 200px !important;
          }
        }
      `}</style>
    </section>
  )
}
