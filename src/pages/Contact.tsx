import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Container from '../components/Container'
import usePageMeta from '../hooks/usePageMeta'
import ContactCTA from '../sections/ContactCTA'
import { contact, whatsappLink } from '../data/contact'

const infoItems = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, label: 'Address', value: contact.address, href: undefined as string | undefined },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappLink() },
]

export default function Contact() {
  usePageMeta(
    'Contact — WarmBox',
    'Get in touch with WarmBox for product questions, bulk orders, samples, or partnership enquiries.',
  )

  return (
    <div className="pt-32">
      <Container className="max-w-xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]"
        >
          <ArrowLeft size={15} /> Back home
        </Link>
      </Container>

      {/* Reuses the same form + Web3Forms submission logic as the old homepage
          CTA, so there is still only one place that owns the submit flow. */}
      <ContactCTA />

      <Container className="max-w-xl -mt-10 pb-24">
        <h2 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
          Other ways to reach us
        </h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {infoItems.map(({ icon: Icon, label, value, href }) => {
            const card = (
              <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] p-5 h-full">
                <Icon size={17} className="mt-0.5 shrink-0 text-[var(--color-heat)]" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink)]">{value}</p>
                </div>
              </div>
            )

            if (!href) {
              return <div key={label}>{card}</div>
            }

            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block rounded-2xl hover:border-[var(--color-ink)] transition-colors"
              >
                {card}
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
