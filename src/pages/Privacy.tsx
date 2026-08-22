import Container from '../components/Container'
import usePageMeta from '../hooks/usePageMeta'
import { contact } from '../data/contact'

export default function Privacy() {
  usePageMeta('Privacy Policy — WarmBox', 'How WarmBox collects, uses, and protects your information.')

  return (
    <div className="pt-32 pb-24">
      <Container className="max-w-2xl prose-content">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-steel)]">Last updated: [DATE]</p>

        <div className="mt-10 space-y-8 text-[var(--color-steel)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-ink)]">
              This is a general-purpose starting point, not a substitute for legal advice. Review it
              with a lawyer before treating it as your final policy — especially the data-retention
              and third-party sections, which should reflect exactly what your systems actually do.
            </strong>
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">1. What we collect</h2>
            <p className="mt-2">
              When you submit an enquiry, quote request, or sample request through this website, we
              collect the information you provide directly: your name, email address, phone number,
              company name, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">2. How we use it</h2>
            <p className="mt-2">
              We use this information solely to respond to your enquiry, provide quotes, and follow
              up on business or partnership discussions. We do not sell or rent your information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">3. Third-party processors</h2>
            <p className="mt-2">
              Contact form submissions are processed via Web3Forms, a third-party form-delivery
              service, solely to route your message to our inbox. If we add analytics tools, they
              will be listed here.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">4. Data retention</h2>
            <p className="mt-2">
              We retain enquiry information for as long as needed to respond to your request and
              maintain a record of business communications, and delete it on request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">5. Your rights</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of any personal information we
              hold about you by contacting us at {contact.email}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">6. Contact</h2>
            <p className="mt-2">
              Questions about this policy can be directed to {contact.email} or {contact.phone}.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
