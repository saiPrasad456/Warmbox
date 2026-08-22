import { useState, useEffect, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import Container from '../components/Container'

// ---------------------------------------------------------------------------
// SETUP REQUIRED: this form posts to Web3Forms (https://web3forms.com) so
// enquiries actually reach an inbox, without a custom backend and without
// Formspree's 50-submission/month free cap.
//
//   1. Go to web3forms.com and enter the email address you want quote
//      requests delivered to. No account/signup — they just email you an
//      "access key".
//   2. Paste that access key below in place of YOUR_ACCESS_KEY.
//
// Web3Forms' free tier has no submission cap (fair-use, email delivery
// only — no dashboard/storage, which is fine for a lead-capture form).
// Until a real key is set, submissions fail with a visible error instead
// of silently pretending to succeed.
// ---------------------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY: string = 'c94e07bb-7696-43c6-810e-0b2e27797442'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const reasons = ['General Enquiry', 'Request a Free Sample', 'Request a Quote', 'Bulk / Private Label Order', 'Partnership / Distribution']

// Maps short query values (used in CTA links like /contact?reason=sample)
// to the matching option text in the reasons list above.
const reasonAliases: Record<string, string> = {
  sample: 'Request a Free Sample',
  quote: 'Request a Quote',
  bulk: 'Bulk / Private Label Order',
  partnership: 'Partnership / Distribution',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactCTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [searchParams] = useSearchParams()
  const [selectedReason, setSelectedReason] = useState(reasons[0])

  useEffect(() => {
    const param = searchParams.get('reason')
    if (param && reasonAliases[param]) setSelectedReason(reasonAliases[param])
  }, [searchParams])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY') {
      // Key not configured yet — fail clearly instead of faking success.
      console.warn('ContactCTA: set WEB3FORMS_ACCESS_KEY before going live.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container className="max-w-xl">
        <span className="eyebrow">Contact</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Talk to us.</h2>
        <p className="mt-4 text-[var(--color-steel)]">
          Product questions, bulk orders, or partnership enquiries — send a message and our team will
          follow up.
        </p>

        {status === 'success' ? (
          <div className="mt-8 rounded-2xl border border-[var(--color-line)] p-6 text-sm text-[var(--color-ink)]">
            Thanks — your enquiry has been received. We'll be in touch shortly.
          </div>
        ) : (
          <form className="mt-8 grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            {/* Honeypot field — Web3Forms silently discards spam bots that fill this in. */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="subject" value="New enquiry from WarmBox website" />

            <input
              required
              name="name"
              placeholder="Name"
              className="col-span-1 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="col-span-1 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2"
            />
            <input
              name="phone"
              placeholder="Phone"
              className="col-span-1 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2"
            />
            <input
              name="company"
              placeholder="Company"
              className="col-span-1 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2"
            />
            <select
              name="reason"
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="col-span-2 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2 text-[var(--color-ink)]"
            >
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <textarea
              required
              name="message"
              placeholder="Message"
              rows={4}
              className="col-span-2 rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3 text-sm focus-visible:outline-2"
            />

            {status === 'error' && (
              <p className="col-span-2 text-sm text-[var(--color-heat-deep)]">
                Something went wrong sending your message. Please try again, or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-heat)] text-white hover:bg-[var(--color-heat-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  Sending
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Enquiry
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>
        )}
      </Container>
    </section>
  )
}
