import { Flame, PackageCheck, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/Container'

const pillars = [
  {
    icon: Flame,
    title: 'Warmth',
    copy: 'Bring back the warmth to delivered food — a meal that\u2019s actually hot when you\u2019re ready to eat it.',
  },
  {
    icon: PackageCheck,
    title: 'Convenience',
    copy: 'No microwave. No electricity. Just follow the instructions on the pack, and the heating happens on its own.',
  },
  {
    icon: Globe2,
    title: 'Accessibility',
    copy: 'Self-heating technology made available through everyday food packaging — restaurants, cloud kitchens, and beyond.',
  },
]

export default function Pillars() {
  return (
    <section className="py-20 md:py-28 border-y border-[var(--color-line)]">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <span className="grid place-items-center mx-auto sm:mx-0 h-12 w-12 rounded-2xl bg-[var(--color-ink)]">
                <p.icon size={20} strokeWidth={1.75} className="text-[var(--color-glow)]" />
              </span>
              <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-steel-light)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[var(--color-ink)] leading-relaxed">{p.copy}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
