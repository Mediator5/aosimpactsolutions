import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ position: 'relative', padding: '8rem 1.5rem', overflow: 'hidden', background: 'var(--color-black)' }}>
      {/* Unsplash: aspirational city / financial freedom */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center 60%', opacity: 0.10, filter: 'saturate(0.4)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(245,245,245,0.88) 0%, rgba(245,245,245,0.6) 50%, rgba(245,245,245,0.92) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(220,159,37,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '80px', height: '80px',
        borderTop: '1px solid rgba(5,90,103,0.30)', borderLeft: '1px solid rgba(5,90,103,0.30)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '3rem', right: '3rem', width: '80px', height: '80px',
        borderBottom: '1px solid rgba(5,90,103,0.30)', borderRight: '1px solid rgba(5,90,103,0.30)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <span style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>✦</span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 400,
          color: 'var(--color-white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
          Start Your Credit{' '}<em className="shimmer-text">Transformation</em><br />Today
        </h2>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300,
          color: 'var(--color-muted-light)', lineHeight: 1.85, marginBottom: '0.75rem' }}>
          Your current credit situation does not define your future.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', fontWeight: 300, color: 'var(--color-muted)',
          lineHeight: 1.85, maxWidth: '540px', margin: '0 auto 3rem' }}>
          With the right strategy and guidance, you can rebuild, strengthen, and position your credit for better
          financial opportunities. Let AOS Impact Solutions help you get there.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link href="/enroll" className="btn-primary" style={{ padding: '1.1rem 2.75rem', fontSize: '0.8rem' }}>
            Start Your Credit Repair
          </Link>
          <Link href="/consultation" className="btn-outline" style={{ padding: '1.1rem 2.75rem', fontSize: '0.8rem' }}>
            Schedule a Consultation
          </Link>
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--color-muted)' }}>
          Questions? Email us at{' '}
          <a href="mailto:info@aosimpactsolutions.com" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 400 }}>
            info@aosimpactsolutions.com
          </a>
        </p>
      </div>
    </section>
  )
}
