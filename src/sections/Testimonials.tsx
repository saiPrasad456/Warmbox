import { motion } from 'framer-motion'
import { UtensilsCrossed, Rocket, Handshake } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const points = [
  { icon: Rocket, text: 'Early-stage product, actively refining the design with restaurant feedback.' },
  { icon: UtensilsCrossed, text: 'Onboarding a first wave of pilot restaurants and cloud kitchens.' },
  { icon: Handshake, text: 'Case studies and partner stories will be published here as pilots go live.' },
]

// NOTE: swap this section for real customer testimonials once pilot partners
// have live results to share — fabricated quotes are worse for trust than
// an honest "still early" message.
export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-2xl text-center">
        <SectionHeading eyebrow="Where we are" title="We're just getting started." align="center" />
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="grid place-items-center mx-auto h-11 w-11 rounded-full bg-[var(--color-heat)]/10">
                <p.icon size={20} strokeWidth={1.75} className="text-[var(--color-heat)]" />
              </span>
              <p className="mt-4 text-sm text-[var(--color-steel)] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-[var(--color-steel)]">
          Want to be one of our first restaurant partners?
        </p>
        <Button href="/contact" variant="secondary" className="mt-4">
          Become a Pilot Partner
        </Button>
      </Container>
    </section>
  )
}
