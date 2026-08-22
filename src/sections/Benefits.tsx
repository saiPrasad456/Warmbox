import { Backpack, Zap, Timer, MousePointerClick, Shapes, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const benefits = [
  { icon: Backpack, title: 'Portable', copy: 'Carry it wherever you go.' },
  { icon: Zap, title: 'Convenient', copy: 'Heat your meal without external equipment.' },
  { icon: Timer, title: 'Fast', copy: 'Hot food in approximately 10 minutes.' },
  { icon: MousePointerClick, title: 'Easy to use', copy: 'Simple pull-string activation.' },
  { icon: Shapes, title: 'Versatile', copy: 'Available in multiple shapes and configurations.' },
  { icon: MapPin, title: 'Ready anywhere', copy: "Built for places where conventional heating isn't available." },
]

export default function Benefits() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Benefits" title="Built around one job: a hot meal, on demand." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-7 rounded-2xl border border-[var(--color-line)] hover:border-[var(--color-heat)]/40 hover:-translate-y-1 transition-all duration-200"
            >
              <span className="grid place-items-center h-11 w-11 rounded-full bg-[var(--color-heat)]/10">
                <b.icon size={20} strokeWidth={1.75} className="text-[var(--color-heat)]" />
              </span>
              <h3 className="mt-5 font-semibold text-[var(--color-ink)]">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)] leading-relaxed">{b.copy}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
