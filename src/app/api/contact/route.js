import nodemailer from 'nodemailer'

/* ─────────────────────────────────────────
   Recipients — all forms forward to these
───────────────────────────────────────── */
const RECIPIENTS = [
  'info@aosimpactsolutions.com',
  'levelupnow800@gmail.com',
  'Jasmine@aosimpactsolutions.com',
]

/* ─────────────────────────────────────────
   Transporter — configure via .env.local
   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
───────────────────────────────────────── */
function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

/* ─────────────────────────────────────────
   Email builders per form type
───────────────────────────────────────── */
function buildConsultationEmail(data) {
  const {
    firstName, lastName, email, phone,
    creditRange, goals, negativeItems,
    message, preferredContact, bestTime,
  } = data

  const subject = `New Consultation Request — ${firstName} ${lastName}`

  const html = `
    ${emailWrapper(`
      ${header('New Consultation Request')}
      ${section('Contact Information', `
        ${row('Name',               `${firstName} ${lastName}`)}
        ${row('Email',              email)}
        ${row('Phone',              phone || 'Not provided')}
        ${row('Preferred Contact',  preferredContact)}
        ${row('Best Time to Reach', bestTime || 'Not specified')}
      `)}
      ${section('Credit Situation', `
        ${row('Estimated Score Range', creditRange || 'Not specified')}
        ${row('Goals',                 goals?.length ? goals.join(', ') : 'Not specified')}
        ${row('Negative Items',        negativeItems || 'Not described')}
      `)}
      ${message ? section('Additional Notes', `<p style="margin:0;color:#aaa;font-size:14px;line-height:1.7">${message}</p>`) : ''}
      ${footer()}
    `)}
  `

  return { subject, html }
}

function buildTradelineEmail(data) {
  const { firstName, lastName, email, phone, creditScore, tradelineType, message } = data
  const subject = `New Tradeline Order — ${firstName} ${lastName}`
  const html = `
    ${emailWrapper(`
      ${header('New Tradeline Order')}
      ${section('Contact Information', `
        ${row('Name',          `${firstName} ${lastName}`)}
        ${row('Email',         email)}
        ${row('Phone',         phone || 'Not provided')}
        ${row('Credit Score',  creditScore || 'Not specified')}
        ${row('Tradeline Type',tradelineType || 'Not specified')}
      `)}
      ${message ? section('Additional Notes', `<p style="margin:0;color:#aaa;font-size:14px;line-height:1.7">${message}</p>`) : ''}
      ${footer()}
    `)}
  `
  return { subject, html }
}

function buildFundingEmail(data) {
  const { firstName, lastName, email, phone, businessName, fundingAmount, fundingPurpose, creditScore, message } = data
  const subject = `New Funding Intake — ${firstName} ${lastName}`
  const html = `
    ${emailWrapper(`
      ${header('New Funding Intake Form')}
      ${section('Applicant Information', `
        ${row('Name',            `${firstName} ${lastName}`)}
        ${row('Email',           email)}
        ${row('Phone',           phone || 'Not provided')}
        ${row('Business Name',   businessName || 'Not provided')}
        ${row('Funding Amount',  fundingAmount || 'Not specified')}
        ${row('Funding Purpose', fundingPurpose || 'Not specified')}
        ${row('Credit Score',    creditScore || 'Not specified')}
      `)}
      ${message ? section('Additional Notes', `<p style="margin:0;color:#aaa;font-size:14px;line-height:1.7">${message}</p>`) : ''}
      ${footer()}
    `)}
  `
  return { subject, html }
}

function buildEnrollmentEmail(data) {
  const { firstName, lastName, email, phone, program, creditScore, message } = data
  const subject = `New Enrollment — ${firstName} ${lastName} — ${program || 'Program TBD'}`
  const html = `
    ${emailWrapper(`
      ${header('New Credit Repair Enrollment')}
      ${section('Client Information', `
        ${row('Name',          `${firstName} ${lastName}`)}
        ${row('Email',         email)}
        ${row('Phone',         phone || 'Not provided')}
        ${row('Program',       program || 'Not selected')}
        ${row('Credit Score',  creditScore || 'Not specified')}
      `)}
      ${message ? section('Additional Notes', `<p style="margin:0;color:#aaa;font-size:14px;line-height:1.7">${message}</p>`) : ''}
      ${footer()}
    `)}
  `
  return { subject, html }
}

/* ─────────────────────────────────────────
   HTML email template helpers
───────────────────────────────────────── */
const gold = '#C9A84C'
const dark = '#0F0F0F'
const surface = '#1A1A1A'
const border = '#2A2A2A'
const white = '#FAFAFA'
const muted = '#888888'

function emailWrapper(content) {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background:#080808;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#080808;padding:40px 16px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${dark};border:1px solid ${border};border-radius:12px;overflow:hidden;">
          <tr><td style="height:3px;background:linear-gradient(90deg,#A07C2D,#E2C27D,#A07C2D);"></td></tr>
          <tr><td style="padding:32px 36px;">
            ${content}
          </td></tr>
          <tr><td style="height:1px;background:${border};"></td></tr>
          <tr><td style="padding:20px 36px;background:${surface};">
            <p style="margin:0;font-size:11px;color:${muted};text-align:center;">
              AOS Impact Solutions &nbsp;·&nbsp; info@aosimpactsolutions.com
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`
}

function header(title) {
  return `
    <div style="margin-bottom:28px;">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${gold};">AOS Impact Solutions</p>
      <h1 style="margin:0;font-size:24px;font-weight:300;color:${white};line-height:1.3;">${title}</h1>
      <div style="margin-top:12px;height:1px;background:linear-gradient(90deg,${gold},transparent);"></div>
    </div>`
}

function section(title, content) {
  return `
    <div style="margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${gold};">${title}</p>
      <div style="background:${surface};border:1px solid ${border};border-radius:8px;padding:16px 20px;">
        ${content}
      </div>
    </div>`
}

function row(label, value) {
  return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:6px 0;border-bottom:1px solid ${border};">
      <span style="font-size:12px;color:${muted};white-space:nowrap;padding-right:16px;">${label}</span>
      <span style="font-size:13px;color:${white};text-align:right;">${value}</span>
    </div>`
}

function footer() {
  const now = new Date().toLocaleString('en-US', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/New_York',
  })
  return `
    <p style="margin:24px 0 0;font-size:11px;color:${muted};text-align:center;">
      Submitted on ${now} EST
    </p>`
}

/* ─────────────────────────────────────────
   POST handler
───────────────────────────────────────── */
export async function POST(req) {
  try {
    const data = await req.json()
    const { formType } = data

    let emailContent

    switch (formType) {
      case 'consultation': emailContent = buildConsultationEmail(data); break
      case 'tradeline':    emailContent = buildTradelineEmail(data);    break
      case 'funding':      emailContent = buildFundingEmail(data);      break
      case 'enrollment':   emailContent = buildEnrollmentEmail(data);   break
      default:
        return new Response(JSON.stringify({ error: 'Unknown form type' }), { status: 400 })
    }

    const transporter = createTransporter()

    await transporter.sendMail({
      from:    `"AOS Impact Solutions" <${process.env.SMTP_USER}>`,
      to:      RECIPIENTS.join(', '),
      replyTo: data.email || undefined,
      subject: emailContent.subject,
      html:    emailContent.html,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('[/api/contact] Error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}