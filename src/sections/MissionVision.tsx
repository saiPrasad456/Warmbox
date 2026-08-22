import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

export default function MissionVision() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="About WarmBox"
          title="We don\u2019t change the food. We change the experience of eating it."
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-heat)]">Our Vision</h3>
            <p className="mt-4 text-xl font-display font-medium text-[var(--color-ink)] leading-snug">
              To make hot food accessible anytime, anywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-heat)]">Our Mission</h3>
            <p className="mt-4 text-xl font-display font-medium text-[var(--color-ink)] leading-snug">
              To ensure that every meal can be enjoyed warm, wherever life takes you.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 max-w-2xl mx-auto grid gap-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
              What is WarmBox?
            </h4>
            <p className="mt-2 text-[var(--color-steel)] leading-relaxed">
              WarmBox is a disposable self-heating food packaging solution that allows customers to
              warm their meals using a water-activated heating pouch, without requiring a microwave
              or electricity.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
              What problem are we solving?
            </h4>
            <p className="mt-2 text-[var(--color-steel)] leading-relaxed">
              Food delivery has made meals accessible almost anywhere, but it hasn\u2019t solved the
              problem of keeping food warm until the customer is ready to eat. WarmBox bridges that
              gap by bringing the heating mechanism into the packaging itself.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
