import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FaqItem } from '../types'

export default function FaqAccordion({ items, defaultOpenId }: { items: FaqItem[]; defaultOpenId?: string }) {
  const [open, setOpen] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null)

  return (
    <div className="divide-y divide-[var(--color-line)]">
      {items.map((f) => {
        const isOpen = open === f.id
        return (
          <div key={f.id}>
            <button
              onClick={() => setOpen(isOpen ? null : f.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-medium text-[var(--color-ink)]">{f.question}</span>
              <Plus size={18} className={`shrink-0 text-[var(--color-heat)] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-[var(--color-steel)] leading-relaxed">{f.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
