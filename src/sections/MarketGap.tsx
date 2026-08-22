import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const gaps = [
  { solution: 'Microwave', problem: 'Not available everywhere; requires electricity' },
  { solution: 'Electric food warmer', problem: 'Expensive, reusable, inconvenient for every delivery' },
  { solution: 'Thermal packaging', problem: 'Slows heat loss but doesn\u2019t actively reheat food' },
  { solution: 'Traditional takeaway box', problem: 'Protects the food but doesn\u2019t maintain or recreate warmth' },
  { solution: 'Restaurant reheating', problem: 'Difficult once the food has left the restaurant' },
]

const traditionalFlow = ['Restaurant', 'Food prepared hot', 'Packaging', 'Delivery', 'Food becomes colder', 'Customer']
const warmboxFlow = ['Restaurant', 'Food prepared', 'WarmBox packaging', 'Delivery', 'Customer', 'Add water \u2192 self-heating \u2192 warm meal']

export default function MarketGap() {
  return (
    <section id="market-gap" className="py-24 md:py-32 bg-[var(--color-bg-raised)]">
      <Container>
        <SectionHeading
          eyebrow="The market gap"
          title="Food delivery solved convenience. It hasn\u2019t solved warmth."
          description="By the time the customer is ready to eat, the food may no longer be warm. Every existing fix has a limitation."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full text-sm max-w-3xl">
            <thead>
              <tr className="border-b border-[var(--color-line)]">
                <th className="py-3 pr-4 text-left font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
                  Current solution
                </th>
                <th className="py-3 text-left font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
                  Problem
                </th>
              </tr>
            </thead>
            <tbody>
              {gaps.map((g) => (
                <tr key={g.solution} className="border-b border-[var(--color-line)] last:border-0">
                  <td className="py-4 pr-4 font-medium text-[var(--color-ink)] whitespace-nowrap">{g.solution}</td>
                  <td className="py-4 text-[var(--color-steel)] leading-relaxed">{g.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg)] p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel-light)]">
              Traditional food delivery
            </h3>
            <ol className="mt-6 space-y-3">
              {traditionalFlow.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm text-[var(--color-steel)]">
                  <span className="font-mono text-xs text-[var(--color-steel-light)]">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-[var(--color-heat)]/30 bg-[var(--color-bg)] p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-heat)]">
              With WarmBox
            </h3>
            <ol className="mt-6 space-y-3">
              {warmboxFlow.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm text-[var(--color-ink)]">
                  <span className="font-mono text-xs text-[var(--color-heat)]">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
