import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import TechDiagram from '../components/illustrations/TechDiagram'

const flow = ['Activation', 'Heating system', 'Heat transfer', 'Food warms', 'Ready to eat']

export default function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="The technology"
            title="The technology behind the heat."
            description="Pulling the string starts a self-contained heating process inside the container. Verified technical specifications will be published here once available."
          />
          <TechDiagram className="mt-8 aspect-video rounded-2xl border border-[var(--color-line)]" />
        </div>

        <div className="relative pl-8">
          <span className="absolute left-[3px] top-2 bottom-2 w-px cord-line" />
          <ol className="space-y-10">
            {flow.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 h-2 w-2 rounded-full bg-[var(--color-heat)]" />
                <span className="font-mono text-xs text-[var(--color-heat)]">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-1 font-semibold text-[var(--color-ink)]">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
