import { Flame, Mail, Phone, MapPin, MessageCircle, Download, Factory } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { InstagramIcon, FacebookIcon, XIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons'
import { products } from '../data/products'
import { solutions } from '../data/solutions'
import { contact, whatsappLink } from '../data/contact'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Technology/FAQ', href: '/technology-faq' },
      { label: 'Blog & Videos', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Rectangular Box', href: `/products/${products[0].slug}` },
      { label: 'Circular Container', href: `/products/${products[1].slug}` },
      { label: 'Buy Now', href: '/buy-now' },
      { label: 'Custom Solutions', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
  },
]

const socialIcons = [
  { key: 'instagram', label: 'Instagram', icon: InstagramIcon },
  { key: 'facebook', label: 'Facebook', icon: FacebookIcon },
  { key: 'twitter', label: 'Twitter / X', icon: XIcon },
  { key: 'youtube', label: 'YouTube', icon: YoutubeIcon },
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon },
] as const

export default function Footer() {
  const activeSocials = socialIcons.filter(({ key }) => contact.social[key])

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]/50 pt-16 pb-8">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--color-heat)] text-white">
                <Flame size={16} strokeWidth={2.5} />
              </span>
              WarmBox
            </Link>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-heat)]">
              Heat. Eat. Anywhere.
            </p>
            <p className="mt-4 text-sm text-[var(--color-steel)] max-w-xs leading-relaxed">
              Hot meals, without the microwave. A disposable, water-activated heating pouch built
              into everyday food packaging — no electricity, no equipment, no kitchen required.
            </p>

            {activeSocials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {activeSocials.map(({ key, label, icon: Icon }) => (
                  <a
                    key={key}
                    href={contact.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid place-items-center h-9 w-9 rounded-full border border-[var(--color-line)] text-[var(--color-steel)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            )}

            {contact.brochureUrl && (
              <a
                href={contact.brochureUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-heat)]"
              >
                <Download size={14} /> Download brochure
              </a>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-steel)]">
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-[var(--color-ink)]">
                  <Mail size={14} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-[var(--color-ink)]">
                  <Phone size={14} /> {contact.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  {contact.registeredOffice ? (
                    <>
                      <span className="block text-xs uppercase tracking-wide text-[var(--color-steel-light)]">Registered office</span>
                      {contact.registeredOffice}
                    </>
                  ) : (
                    contact.address
                  )}
                </span>
              </li>
              {contact.manufacturingFacility && (
                <li className="inline-flex items-start gap-2">
                  <Factory size={14} className="mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-[var(--color-steel-light)]">Manufacturing facility</span>
                    {contact.manufacturingFacility}
                  </span>
                </li>
              )}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--color-ink)]"
                >
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-[var(--color-steel)] border border-[var(--color-line)] rounded-full px-3 py-1.5">
            Made in India
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[var(--color-steel-light)]">
            <span>© 2026 WarmBox. All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-[var(--color-ink)]">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[var(--color-ink)]">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
