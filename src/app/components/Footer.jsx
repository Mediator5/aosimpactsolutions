"use client"
import Link from 'next/link'

const footerLinks = {
  company: [
    { label: 'About Us',        href: '/about' },
    { label: 'FAQs',            href: '/#faq' },
    { label: 'Contact Us',      href: '/contact' },
    { label: 'Enroll Online',   href: '/enroll' },
  ],
  services: [
    { label: 'Fix Your Credit',      href: '/enroll' },
    { label: 'Credit Programs',      href: '/pricing' },
    { label: 'TradeLines',           href: '/tradelines' },
    { label: 'Get Funded Today',     href: '/funding' },
    { label: 'Book a Consultation',  href: '/consultation' },
  ],
  legal: [
    { label: 'Terms & Conditions',   href: '/terms' },
    { label: 'Privacy Policy',       href: '/privacy' },
    { label: 'Disclaimer',           href: '/disclaimer' },
  ],
}

const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday',        hours: '10:00 AM – 3:00 PM' },
  { day: 'Sunday',          hours: 'Closed' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle gold glow top edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
      }} />

      {/* Background decorative element */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Main Footer Grid ── */}
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '4rem 1.5rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* ── Brand Column ── */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', lineHeight: 1, marginBottom: '1.25rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #E2C27D 0%, #C9A84C 50%, #A07C2D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.05em',
              }}>
                AOS
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.55rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}>
                Impact Solutions
              </span>
            </Link>

            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-gold)',
              marginBottom: '1rem',
              lineHeight: 1.4,
            }}>
              Transforming Credit.<br />Creating Opportunity.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'var(--color-muted)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Helping individuals and families remove
              inaccurate negative items and rebuild
              their financial future.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-muted)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)'
                    e.currentTarget.style.borderColor = 'var(--color-gold)'
                    e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-muted)'
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Company Links ── */}
          <div>
            <h4 style={colHeadingStyle}>Company</h4>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--color-gold-dark), transparent)', marginBottom: '1.25rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={footerLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    <span style={{ color: 'var(--color-gold-dark)', marginRight: '0.5rem' }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services Links ── */}
          <div>
            <h4 style={colHeadingStyle}>Services</h4>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--color-gold-dark), transparent)', marginBottom: '1.25rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={footerLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    <span style={{ color: 'var(--color-gold-dark)', marginRight: '0.5rem' }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Business Hours ── */}
          <div>
            <h4 style={colHeadingStyle}>Business Hours</h4>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--color-gold-dark), transparent)', marginBottom: '1.25rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {businessHours.map((b) => (
                <li key={b.day} style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-light)',
                  }}>
                    {b.day}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: b.hours === 'Closed' ? 'var(--color-muted)' : 'var(--color-gold-light)',
                  }}>
                    {b.hours}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="mailto:info@aosimpactsolutions.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 300,
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.4rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                info@aosimpactsolutions.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 300,
            color: 'var(--color-muted)',
            letterSpacing: '0.04em',
          }}>
            © {year} AOS Impact Solutions. All rights reserved.
          </p>

          {/* Legal Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {footerLinks.legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p style={{
          marginTop: '1.5rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          fontWeight: 300,
          color: 'var(--color-muted)',
          lineHeight: 1.7,
          opacity: 0.7,
          maxWidth: '800px',
        }}>
          <strong style={{ color: 'var(--color-muted-light)', fontWeight: 500 }}>Disclaimer:</strong>{' '}
          AOS Impact Solutions is not a law firm and does not provide legal advice. Results may vary.
          We cannot guarantee the removal of any specific item from your credit report. You have the
          right to dispute inaccurate information on your credit report yourself at no charge.
        </p>
      </div>
    </footer>
  )
}

/* ── Shared inline style objects ── */
const colHeadingStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-gold)',
  marginBottom: '0.75rem',
}

const footerLinkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.82rem',
  fontWeight: 300,
  color: 'var(--color-muted)',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
}