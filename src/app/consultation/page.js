'use client'

import { useState } from 'react'
import Link from 'next/link'



const goals = [
  'Purchase a Home',
  'Finance a Vehicle',
  'Access Business Funding',
  'Lower Interest Rates',
  'Remove Negative Items',
  'Rebuild Credit from Scratch',
  'Other',
]

const creditRanges = [
  'Below 500',
  '500 – 549',
  '550 – 599',
  '600 – 649',
  '650 – 699',
  '700+',
  "I don't know",
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  creditRange: '',
  goals: [],
  negativeItems: '',
  message: '',
  preferredContact: 'email',
  bestTime: '',
}

export default function ConsultationPage() {
  const [form, setForm]       = useState(initialForm)
  const [status, setStatus]   = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleGoal = (goal) => {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'consultation', ...form }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <>
      
      <main style={{ background: 'var(--color-black)', minHeight: '100vh' }}>

        {/* ── Page Hero ── */}
        <section style={{
          position: 'relative',
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(220,159,37,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Decorative corner lines */}
          <div style={{
            position: 'absolute', top: '5rem', left: '4rem',
            width: '60px', height: '60px',
            borderTop: '1px solid rgba(220,159,37,0.30)',
            borderLeft: '1px solid rgba(220,159,37,0.30)',
          }} />
          <div style={{
            position: 'absolute', top: '5rem', right: '4rem',
            width: '60px', height: '60px',
            borderTop: '1px solid rgba(220,159,37,0.30)',
            borderRight: '1px solid rgba(220,159,37,0.30)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.4rem 1.25rem',
              border: '1px solid rgba(220,159,37,0.35)',
              borderRadius: '100px',
              marginBottom: '1.75rem',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--color-gold)',
                boxShadow: '0 0 8px var(--color-gold)',
                display: 'inline-block',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-teal-dark)',
              }}>
                Free Consultation
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              color: 'var(--color-white)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Let's Talk About<br />
              <em className="shimmer-text">Your Credit Journey</em>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--color-muted)',
              lineHeight: 1.85,
              maxWidth: '520px',
              margin: '0 auto',
            }}>
              Tell us about your situation and goals. We'll review your information
              and reach out to recommend the best strategy for your credit profile.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section style={{
          padding: '0 1.5rem 7rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>

            {/* ── Left: Info panel ── */}
            <div style={{ position: 'sticky', top: '100px' }}>

              {/* What to expect */}
              <div style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                marginBottom: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: 'var(--color-white)',
                  marginBottom: '1.5rem',
                }}>
                  What to Expect
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { step: '01', label: 'Submit your info', desc: 'Fill out the form with your credit goals and current situation.' },
                    { step: '02', label: 'We review your profile', desc: 'Our team analyzes your situation and identifies the best path forward.' },
                    { step: '03', label: 'We reach out to you', desc: 'Expect a response within 1 business day via your preferred contact method.' },
                    { step: '04', label: 'Strategy session', desc: 'We walk you through a customized plan built around your goals.' },
                  ].map((item) => (
                    <div key={item.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        border: '1px solid rgba(220,159,37,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--color-gold)',
                        }}>{item.step}</span>
                      </div>
                      <div>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.83rem',
                          fontWeight: 600,
                          color: 'var(--color-white)',
                          marginBottom: '0.2rem',
                        }}>{item.label}</p>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.88rem',
                          fontWeight: 300,
                          color: 'var(--color-muted)',
                          lineHeight: 1.7,
                        }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info card */}
              <div style={{
                background: 'var(--color-surface-2)',
                border: '1px solid rgba(220,159,37,0.28)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem 2rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal-dark)',
                  marginBottom: '1rem',
                }}>Prefer to reach out directly?</p>

                {[
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: 'info@aosimpactsolutions.com',
                    href: 'mailto:info@aosimpactsolutions.com',
                  },
                ].map((contact, i) => (
                  <a key={i} href={contact.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: 'var(--color-muted-light)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    marginBottom: '0.75rem',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted-light)'}
                  >
                    <span style={{ color: 'var(--color-gold)' }}>{contact.icon}</span>
                    {contact.label}
                  </a>
                ))}

                {/* Business hours */}
                <div style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: '0.6rem',
                  }}>Business Hours</p>
                  {[
                    { day: 'Mon – Fri', hours: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 3:00 PM' },
                    { day: 'Sunday',   hours: 'Closed' },
                  ].map((h) => (
                    <div key={h.day} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.4rem',
                    }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--color-muted)' }}>{h.day}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 500, color: h.hours === 'Closed' ? 'var(--color-muted)' : 'var(--color-teal-dark)' }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div>
              {status === 'success' ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                }}>
                  {/* Form gold top bar */}
                  <div style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light), var(--color-gold-dark))',
                  }} />

                  <div style={{ padding: '2.5rem' }}>

                    {/* Personal info */}
                    <FormSectionTitle>Personal Information</FormSectionTitle>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Aisha" required />
                      <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Johnson" required />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                    </div>

                    {/* Divider */}
                    <GoldDivider />

                    {/* Credit info */}
                    <FormSectionTitle>Your Credit Situation</FormSectionTitle>

                    {/* Credit score range */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={labelStyle}>Estimated Credit Score Range</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {creditRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, creditRange: range }))}
                            style={{
                              padding: '0.45rem 1rem',
                              borderRadius: '100px',
                              border: `1px solid ${form.creditRange === range ? 'var(--color-gold)' : 'var(--color-border)'}`,
                              background: form.creditRange === range ? 'rgba(220,159,37,0.18)' : 'transparent',
                              color: form.creditRange === range ? 'var(--color-teal-dark)' : 'var(--color-muted)',
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.88rem',
                              fontWeight: 400,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Goals */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={labelStyle}>What Are Your Goals? <span style={{ color: 'var(--color-muted)', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(select all that apply)</span></label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {goals.map((goal) => {
                          const selected = form.goals.includes(goal)
                          return (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => toggleGoal(goal)}
                              style={{
                                padding: '0.45rem 1rem',
                                borderRadius: '100px',
                                border: `1px solid ${selected ? 'var(--color-gold)' : 'var(--color-border)'}`,
                                background: selected ? 'rgba(220,159,37,0.18)' : 'transparent',
                                color: selected ? 'var(--color-teal-dark)' : 'var(--color-muted)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.88rem',
                                fontWeight: 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                              }}
                            >
                              {selected && <span style={{ fontSize: '0.76rem' }}>✓</span>}
                              {goal}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Negative items */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label style={labelStyle}>Negative Items on Your Report</label>
                      <textarea
                        name="negativeItems"
                        value={form.negativeItems}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g. Collections, late payments, charge-offs… (briefly describe what you know)"
                        className="form-input"
                        style={{ resize: 'vertical', minHeight: '80px' }}
                      />
                    </div>

                    <GoldDivider />

                    {/* Preferences */}
                    <FormSectionTitle>Contact Preferences</FormSectionTitle>

                    {/* Preferred contact */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={labelStyle}>Preferred Contact Method</label>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {['email', 'phone', 'either'].map((method) => (
                          <label key={method} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.82rem',
                            fontWeight: 300,
                            color: form.preferredContact === method ? 'var(--color-teal-dark)' : 'var(--color-muted)',
                            transition: 'color 0.2s ease',
                          }}>
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={form.preferredContact === method}
                              onChange={handleChange}
                              style={{ accentColor: 'var(--color-gold)' }}
                            />
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Best time */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={labelStyle}>Best Time to Reach You</label>
                      <select
                        name="bestTime"
                        value={form.bestTime}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="" style={{ background: 'var(--color-surface-2)' }}>Select a time window…</option>
                        <option value="Morning (9am–12pm)" style={{ background: 'var(--color-surface-2)' }}>Morning (9am – 12pm)</option>
                        <option value="Afternoon (12pm–4pm)" style={{ background: 'var(--color-surface-2)' }}>Afternoon (12pm – 4pm)</option>
                        <option value="Evening (4pm–6pm)" style={{ background: 'var(--color-surface-2)' }}>Evening (4pm – 6pm)</option>
                        <option value="Anytime" style={{ background: 'var(--color-surface-2)' }}>Anytime</option>
                      </select>
                    </div>

                    {/* Additional message */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label style={labelStyle}>Anything else we should know? <span style={{ color: 'var(--color-muted)', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Share any additional context about your credit goals or situation…"
                        className="form-input"
                        style={{ resize: 'vertical', minHeight: '100px' }}
                      />
                    </div>

                    {/* Error message */}
                    {status === 'error' && (
                      <div style={{
                        padding: '0.875rem 1rem',
                        background: 'rgba(255,80,80,0.08)',
                        border: '1px solid rgba(255,80,80,0.2)',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        color: '#ff8080',
                      }}>
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        fontSize: '0.82rem',
                        opacity: status === 'loading' ? 0.7 : 1,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        position: 'relative',
                      }}
                    >
                      {status === 'loading' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
                          <span style={{
                            width: '14px', height: '14px',
                            border: '2px solid rgba(255,255,255,0.4)',
                            borderTopColor: '#FFFFFF',
                            borderRadius: '50%',
                            display: 'inline-block',
                            animation: 'spin 0.7s linear infinite',
                          }} />
                          Sending…
                        </span>
                      ) : (
                        'Request My Free Consultation →'
                      )}
                    </button>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'var(--color-muted)',
                      textAlign: 'center',
                      marginTop: '1rem',
                      lineHeight: 1.6,
                    }}>
                      By submitting, you agree to be contacted by AOS Impact Solutions
                      regarding your credit consultation. We respect your privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
     

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          form > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

/* ── Success State ── */
function SuccessState() {
  return (
    <div style={{
      background: 'var(--color-surface-2)',
      border: '1px solid rgba(220,159,37,0.4)',
      borderRadius: 'var(--radius-xl)',
      padding: '4rem 2.5rem',
      textAlign: 'center',
      boxShadow: 'var(--shadow-gold)',
    }}>
      <div style={{
        width: '72px', height: '72px',
        borderRadius: '50%',
        background: 'rgba(220,159,37,0.15)',
        border: '1px solid rgba(220,159,37,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1.75rem',
        fontSize: '1.75rem',
      }}>✦</div>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2.2rem',
        fontWeight: 400,
        color: 'var(--color-white)',
        marginBottom: '1rem',
      }}>
        Request Received!
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.92rem',
        fontWeight: 300,
        color: 'var(--color-muted-light)',
        lineHeight: 1.85,
        maxWidth: '420px',
        margin: '0 auto 2rem',
      }}>
        Thank you for reaching out. Our team will review your information
        and contact you within 1 business day to schedule your consultation.
      </p>
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(220,159,37,0.30), transparent)', margin: '2rem 0' }} />
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        fontWeight: 300,
        color: 'var(--color-muted)',
        marginBottom: '1.5rem',
      }}>
        In the meantime, explore our credit programs:
      </p>
      <Link href="/pricing" className="btn-outline">
        View Credit Programs
      </Link>
    </div>
  )
}

/* ── Reusable sub-components ── */
function FormSectionTitle({ children }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-teal-dark)',
      marginBottom: '1.25rem',
    }}>
      {children}
    </h3>
  )
}

function GoldDivider() {
  return (
    <div style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(220,159,37,0.22), transparent)',
      margin: '2rem 0',
    }} />
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label style={labelStyle}>{label}{required && <span style={{ color: 'var(--color-gold)', marginLeft: '2px' }}>*</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--color-muted-light)',
  marginBottom: '0.5rem',
}