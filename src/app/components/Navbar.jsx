'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const pricingDropdown = [
  { label: 'Fix Your Credit Here',    href: '/enroll' },
  { label: 'Get Your Tradeline Now',  href: '/tradelines' },
  { label: 'Choose Your Credit Program', href: '/pricing' },
  { label: 'Get Funded Today',        href: '/funding' },
]

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Pricing',    href: '#',         dropdown: pricingDropdown },
  { label: 'TradeLines', href: '/tradelines' },
  { label: 'Financial Products', href: '/funding' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [dropdownOpen,   setDropdownOpen]   = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const dropdownRef = useRef(null)

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.97)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(5,90,103,0.15)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(5,90,103,0.10)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >

          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Replace src with real logo once provided */}
            <Image src="/logo2.jpeg" alt="AOS Impact Solutions" width={110} height={60} priority />
            {/* <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #F8CE60 0%, #DC9F25 50%, #055A67 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em',
                }}
              >
                AOS
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted-light)',
                }}
              >
                Impact Solutions
              </span>
            </span> */}
          </Link>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} ref={dropdownRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: dropdownOpen ? 'var(--color-teal-dark)' : 'var(--color-muted-light)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => { if (!dropdownOpen) e.currentTarget.style.color = 'var(--color-teal)' }}
                    onMouseLeave={(e) => { if (!dropdownOpen) e.currentTarget.style.color = 'var(--color-muted-light)' }}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        stroke: 'currentColor',
                      }}
                    >
                      <path d="M2 4l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown Panel */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '240px',
                      background: 'var(--color-surface-2)',
                      border: '1px solid rgba(5,90,103,0.20)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 20px 60px rgba(5,90,103,0.18)',
                      overflow: 'hidden',
                      opacity: dropdownOpen ? 1 : 0,
                      pointerEvents: dropdownOpen ? 'all' : 'none',
                      transform: dropdownOpen
                        ? 'translateX(-50%) translateY(0)'
                        : 'translateX(-50%) translateY(-8px)',
                      transition: 'opacity 0.25s ease, transform 0.25s ease',
                    }}
                  >
                    {/* Gold top accent line */}
                    <div style={{
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light))',
                    }} />
                    {pricingDropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.85rem 1.25rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.88rem',
                          fontWeight: 400,
                          letterSpacing: '0.06em',
                          color: 'var(--color-muted-light)',
                          textDecoration: 'none',
                          borderBottom: i < pricingDropdown.length - 1
                            ? '1px solid var(--color-border)'
                            : 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-teal-dark)'
                          e.currentTarget.style.background = 'rgba(220,159,37,0.10)'
                          e.currentTarget.style.paddingLeft = '1.5rem'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-muted-light)'
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.paddingLeft = '1.25rem'
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: '0.5rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-light)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-teal)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted-light)'}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link
              href="/consultation"
              className="btn-primary"
              style={{ marginLeft: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.82rem' }}
            >
              Book Consultation
            </Link>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  background: 'var(--color-gold)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform:
                    menuOpen && i === 0 ? 'translateY(6.5px) rotate(45deg)'  :
                    menuOpen && i === 2 ? 'translateY(-6.5px) rotate(-45deg)' :
                    menuOpen && i === 1 ? 'opacity: 0; scaleX: 0'            : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(245,245,245,0.98)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '88px',
          paddingBottom: '2rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.35s ease',
        }}
        className="mobile-menu"
      >
        {/* Gold line top */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
          marginBottom: '2rem',
        }} />

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileExpanded((v) => !v)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 300,
                    color: mobileExpanded ? 'var(--color-gold)' : 'var(--color-white)',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                  <svg
                    width="16" height="16" viewBox="0 0 12 12" fill="none"
                    style={{
                      transform: mobileExpanded ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                      stroke: 'currentColor',
                    }}
                  >
                    <path d="M2 4l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div style={{
                  maxHeight: mobileExpanded ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}>
                  {pricingDropdown.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileExpanded(false) }}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-muted-light)',
                        textDecoration: 'none',
                        borderLeft: '2px solid var(--color-gold-dark)',
                        marginLeft: '0.5rem',
                        marginBottom: '0.25rem',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile CTA */}
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/consultation" className="btn-primary" onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center' }}>
            Book a Consultation
          </Link>
          <Link href="/enroll" className="btn-outline" onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center' }}>
            Start Credit Repair
          </Link>
        </div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  )
}