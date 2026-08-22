import { motion } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { compatibleFoods } from '../data/compatibleFoods'

export default function CompatibleFood() {
  return (
    <section id="compatible-food" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Compatible food" title="Built for real meals, not just snacks." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compatibleFoods.map((food, i) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-[var(--color-line)] p-6 hover:border-[var(--color-heat)]/40 hover:-translate-y-1 transition-all duration-200"
            >
              <span className="grid place-items-center h-10 w-10 rounded-full bg-[var(--color-heat)]/10">
                <UtensilsCrossed size={18} strokeWidth={1.75} className="text-[var(--color-heat)]" />
              </span>
              <h3 className="mt-4 font-semibold text-[var(--color-ink)]">{food.title}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-steel)] leading-relaxed">{food.examples}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-xs text-[var(--color-steel-light)]">
          Food compatibility guidance shown here is illustrative — confirm against verified testing before publishing.
        </p>
      </Container>
    </section>
  )
}
