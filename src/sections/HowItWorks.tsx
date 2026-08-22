import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const steps = [
  { n: '01', title: 'Open', copy: 'Place your food inside the container.' },
  { n: '02', title: 'Pull', copy: 'Pull the activation string.' },
  { n: '03', title: 'Heat', copy: 'The heating system activates on its own.' },
  { n: '04', title: 'Enjoy', copy: 'After approximately 10 minutes, your meal is ready.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. One string."
          description="No setup, no equipment, no power source — the entire process happens inside the container."
        />

        <div className="mt-16 grid md:grid-cols-4 gap-x-8 gap-y-14 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-[var(--color-heat)]">{step.n}</span>
                <span className="flex-1 h-px cord-line" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)] leading-relaxed">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
