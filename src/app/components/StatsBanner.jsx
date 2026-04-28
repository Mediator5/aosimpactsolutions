'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 750, suffix: '+', label: 'Clients Helped' },
  { value: 15,  suffix: '+', label: 'Years Experience' },
  { value: 98,  suffix: '%', label: 'Satisfaction Rate' },
  { value: 3,   suffix: '',  label: 'Major Bureaus Covered' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const steps = 60; let cur = 0
    const inc = target / steps
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, 1800 / steps)
    return () => clearInterval(t)
  }, [active, target])
  return <>{count}{suffix}</>
}

export default function StatsBanner() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ position: 'relative', padding: '4.5rem 1.5rem', overflow: 'hidden', background: 'var(--color-black)' }}>
      {/* Unsplash: luxury credit card close-up */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, filter: 'saturate(0.5)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(245,245,245,0.92), rgba(245,245,245,0.7), rgba(245,245,245,0.92))', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(220,159,37,0.55), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(220,159,37,0.55), transparent)' }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '2rem', textAlign: 'center' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 600,
              background: 'linear-gradient(135deg, #DC9F25, #055A67)', WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
              <CountUp target={s.value} suffix={s.suffix} active={active} />
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
