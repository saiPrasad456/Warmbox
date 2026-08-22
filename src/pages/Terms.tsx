import Container from '../components/Container'
import usePageMeta from '../hooks/usePageMeta'
import { contact } from '../data/contact'

export default function Terms() {
  usePageMeta('Terms & Conditions — WarmBox', 'Terms and conditions for using the WarmBox website.')

  return (
    <div className="pt-32 pb-24">
      <Container className="max-w-2xl prose-content">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-[var(--color-steel)]">Last updated: [DATE]</p>

        <div className="mt-10 space-y-8 text-[var(--color-steel)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-ink)]">
              This is a general-purpose starting point, not a substitute for legal advice. Review it
              with a lawyer before treating it as final — particularly the warranty and liability
              sections, which should reflect your actual product specifications once finalised.
            </strong>
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">1. About this website</h2>
            <p className="mt-2">
              This website is operated by WarmBox to provide information about our self-heating food
              packaging products and to receive enquiries from prospective customers and business
              partners. Product specifications shown here are subject to change as the product is
              finalised.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">2. Product information</h2>
            <p className="mt-2">
              Where specifications are marked "available on request" or similar, this reflects that
              final product details have not yet been published. Nothing on this website constitutes
              a binding offer of sale until confirmed directly with our team.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">3. Enquiries and quotes</h2>
            <p className="mt-2">
              Submitting an enquiry or quote request through this website does not create a contract
              between you and WarmBox. Pricing and order terms will be confirmed separately in
              writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">4. Intellectual property</h2>
            <p className="mt-2">
              All content on this website, including text, graphics, and logos, is the property of
              WarmBox unless otherwise noted, and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">5. Limitation of liability</h2>
            <p className="mt-2">
              WarmBox is not liable for any indirect or consequential loss arising from use of this
              website. Product usage instructions printed on packaging should always be followed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">6. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be directed to {contact.email} or {contact.phone}.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
