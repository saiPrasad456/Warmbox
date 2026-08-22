import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import PullCord from '../components/PullCord'

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-glow-soft), transparent 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-glow), transparent 70%)' }}
      />
      <Container className="relative grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">Self-heating food packaging</span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-[4.2rem] font-semibold leading-[0.98] tracking-tight text-[var(--color-ink)]">
            Heat. Eat.
            <br />
            <span className="text-[var(--color-heat)]">Anywhere.</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--color-steel)] max-w-md leading-relaxed">
            Hot meals, without the microwave. Pull the string, add water, wait about 10 minutes —
            no microwave, stove, or electricity required.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#products">Explore Products</Button>
            <Button href="#how-it-works" variant="secondary">
              How It Works
            </Button>
          </div>
          <Link
            to="/contact?reason=sample"
            className="mt-5 inline-block text-sm font-medium text-[var(--color-heat)] hover:text-[var(--color-heat-deep)] underline underline-offset-4"
          >
            Running a restaurant? Request a free sample →
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-steel)]">
            Water-activated heating &nbsp;·&nbsp; No electricity required &nbsp;·&nbsp; Ready in ~10 minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <PullCord />
        </motion.div>
      </Container>
    </section>
  )
}
