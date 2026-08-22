import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Container from '../components/Container'

const TOTAL_SECONDS = 600

function format(sec: number) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function TenMinuteExperience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const progress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1])
  const [display, setDisplay] = useState('10:00')
  const [ready, setReady] = useState(false)

  useMotionValueEvent(progress, 'change', (v) => {
    const clamped = Math.min(Math.max(v, 0), 1)
    const remaining = TOTAL_SECONDS * (1 - clamped)
    setDisplay(format(remaining))
    setReady(clamped >= 0.995)
  })

  useEffect(() => {}, [])

  return (
    <section ref={ref} className="relative py-32 md:py-44 bg-[var(--color-ink)] text-[var(--color-bg)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(50% 50% at 50% 55%, color-mix(in srgb, var(--color-heat) 35%, transparent), transparent 70%)',
          opacity: ready ? 0.9 : 0.35,
        }}
      />
      <Container className="relative text-center">
        <span className="eyebrow">10 minutes to a hot meal</span>
        <div className="mt-8 flex justify-center">
          <motion.span
            animate={{ textShadow: ready ? '0 0 40px rgba(255,142,20,0.8)' : '0 0 0px rgba(255,142,20,0)' }}
            className="font-mono text-[4.5rem] md:text-[7rem] leading-none font-medium tabular-nums text-[var(--color-glow)]"
          >
            {display}
          </motion.span>
        </div>
        <motion.p
          animate={{ opacity: ready ? 1 : 0.5 }}
          className="mt-8 text-lg md:text-xl font-display font-medium"
        >
          {ready ? 'Ready to eat.' : 'Scroll to watch the countdown.'}
        </motion.p>
      </Container>
    </section>
  )
}
