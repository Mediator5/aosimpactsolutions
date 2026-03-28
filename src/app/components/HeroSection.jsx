'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef = useRef(null)

  /* ── Animated particle/line background ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W, H
    const PARTICLE_COUNT = 60

    const particles = []

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x:  Math.random() * W,
          y:  Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r:  Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      /* Connect nearby particles */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 140)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      /* Draw particles */
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()
    window.addEventListener('resize', () => { resize(); init() })
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--color-black)',
    }}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow center */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent, var(--color-black))',
        pointerEvents: 'none',
      }} />

      {/* Decorative vertical lines */}
      <div style={{
        position: 'absolute',
        left: '8%',
        top: '15%',
        bottom: '15%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: '8%',
        top: '20%',
        bottom: '20%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '8rem 1.5rem 6rem',
        textAlign: 'center',
        width: '100%',
      }}>

        {/* Eyebrow tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.4rem 1.25rem',
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '100px',
          marginBottom: '2.5rem',
          animation: 'fadeInUp 0.6s ease forwards',
          opacity: 0,
          animationDelay: '0.1s',
          animationFillMode: 'forwards',
        }}>
          <span style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: 'var(--color-gold)',
            display: 'inline-block',
            boxShadow: '0 0 8px var(--color-gold)',
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-light)',
          }}>
            Professional Credit Restoration
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          color: 'var(--color-white)',
          marginBottom: '1.5rem',
          animation: 'fadeInUp 0.7s ease forwards',
          opacity: 0,
          animationDelay: '0.25s',
          animationFillMode: 'forwards',
        }}>
          Transforming Credit.<br />
          <span className="shimmer-text">Creating Opportunity.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--color-muted-light)',
          lineHeight: 1.8,
          maxWidth: '620px',
          margin: '0 auto 1rem',
          animation: 'fadeInUp 0.7s ease forwards',
          opacity: 0,
          animationDelay: '0.4s',
          animationFillMode: 'forwards',
        }}>
          Your credit should never limit your future.
        </p>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          fontWeight: 300,
          color: 'var(--color-muted)',
          lineHeight: 1.9,
          maxWidth: '580px',
          margin: '0 auto 3rem',
          animation: 'fadeInUp 0.7s ease forwards',
          opacity: 0,
          animationDelay: '0.5s',
          animationFillMode: 'forwards',
        }}>
          We help individuals and families remove inaccurate negative items,
          rebuild their credit profiles, and position themselves for stronger
          financial opportunities.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '4rem',
          animation: 'fadeInUp 0.7s ease forwards',
          opacity: 0,
          animationDelay: '0.65s',
          animationFillMode: 'forwards',
        }}>
          <Link href="/enroll" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Start Your Credit Repair
          </Link>
          <Link href="/consultation" className="btn-outline" style={{ padding: '1rem 2.5rem' }}>
            Book a Consultation
          </Link>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          animation: 'fadeInUp 0.7s ease forwards',
          opacity: 0,
          animationDelay: '0.8s',
          animationFillMode: 'forwards',
        }}>
          {[
            '✔ Professional Credit Restoration',
            '✔ Strategic Dispute Process',
            '✔ Credit Profile Optimization',
            '✔ Transparent Pricing',
          ].map((badge) => (
            <span key={badge} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-muted-light)',
            }}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'fadeIn 1s ease forwards',
        opacity: 0,
        animationDelay: '1.2s',
        animationFillMode: 'forwards',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
          animation: 'scrollPulse 2s ease infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%   { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        }
      `}</style>
    </section>
  )
}