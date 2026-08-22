import { useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Flame } from 'lucide-react'

type Stage = 'idle' | 'pulled' | 'heating' | 'ready'

const STAGE_LABEL: Record<Stage, string> = {
  idle: 'Pull to activate',
  pulled: 'Activated',
  heating: 'Heating',
  ready: 'Ready to eat',
}

export default function PullCord() {
  const [stage, setStage] = useState<Stage>('idle')
  const controls = useAnimation()
  const timers = useRef<number[]>([])

  const reset = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }

  const activate = async () => {
    if (stage !== 'idle') return
    reset()
    setStage('pulled')
    await controls.start({ y: 46, transition: { duration: 0.35, ease: 'easeOut' } })
    await controls.start({ y: 18, transition: { duration: 0.2, ease: 'easeIn' } })

    setStage('heating')
    timers.current.push(
      window.setTimeout(() => setStage('ready'), 2600),
      window.setTimeout(() => {
        setStage('idle')
        controls.start({ y: 0, transition: { duration: 0.4, ease: 'easeInOut' } })
      }, 6200)
    )
  }

  const isHeating = stage === 'heating' || stage === 'ready'

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* container */}
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <motion.div
          animate={{
            boxShadow: isHeating
              ? '0 0 0 1px var(--color-line), 0 30px 60px -20px rgba(255,142,20,0.55)'
              : '0 0 0 1px var(--color-line), 0 20px 40px -24px rgba(23,22,15,0.15)',
          }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-full rounded-[28px] bg-[var(--color-bg-raised)] overflow-hidden grid place-items-center"
        >
          {/* glow */}
          <motion.div
            animate={{ opacity: isHeating ? 1 : 0, scale: isHeating ? 1 : 0.8 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 60%, var(--color-glow-soft), transparent 70%)',
            }}
          />

          {/* steam */}
          {stage === 'ready' &&
            [0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0, x: (i - 1) * 14 }}
                animate={{ opacity: [0, 0.6, 0], y: -70 }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute bottom-24 h-16 w-2 rounded-full bg-white/70 blur-[2px]"
              />
            ))}

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.div
              animate={{
                color: isHeating ? 'var(--color-heat)' : 'var(--color-steel-light)',
                scale: stage === 'heating' ? [1, 1.08, 1] : 1,
              }}
              transition={{ duration: 1.1, repeat: stage === 'heating' ? Infinity : 0 }}
            >
              <Flame size={40} strokeWidth={1.75} />
            </motion.div>
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--color-steel)]">
              {STAGE_LABEL[stage]}
            </span>
            {isHeating && (
              <span className="font-mono text-2xl font-medium text-[var(--color-ink)] tabular-nums">
                {stage === 'ready' ? '00:00' : '09:47'}
              </span>
            )}
          </div>
        </motion.div>

        {/* cord */}
        <button
          aria-label="Pull the activation string"
          onClick={activate}
          className="absolute left-1/2 -translate-x-1/2 -bottom-14 flex flex-col items-center group cursor-pointer disabled:cursor-default"
          disabled={stage !== 'idle'}
        >
          <motion.span animate={controls} className="block w-px h-14 bg-[var(--color-steel-light)] group-hover:bg-[var(--color-heat)] transition-colors" />
          <span
            className={`grid place-items-center h-7 w-7 rounded-full border-2 transition-colors ${
              stage === 'idle'
                ? 'border-[var(--color-ink)] group-hover:border-[var(--color-heat)] group-hover:bg-[var(--color-heat)]/10'
                : 'border-[var(--color-heat)] bg-[var(--color-heat)]/10'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      <p className="mt-20 text-xs font-mono uppercase tracking-[0.14em] text-[var(--color-steel)]">
        {stage === 'idle' ? 'Tap the cord' : 'Approximately 10 minutes'}
      </p>
    </div>
  )
}
