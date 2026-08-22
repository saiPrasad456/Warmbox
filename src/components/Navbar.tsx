import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Flame, ChevronDown, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import { navLinks } from '../data/nav'
import { solutions } from '../data/solutions'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const { totalCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-[var(--color-line)] py-3 shadow-[0_1px_0_var(--color-line),0_12px_24px_-20px_rgba(23,22,15,0.25)]'
          : 'bg-[var(--color-bg)]/60 backdrop-blur-sm border-[var(--color-line)]/60 py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--color-heat)] text-white">
            <Flame size={16} strokeWidth={2.5} />
          </span>
          WarmBox
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.slice(0, 1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel)] hover:text-[var(--color-ink)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-[var(--color-steel)] hover:text-[var(--color-ink)] transition-colors"
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                >
                  <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.2)] p-2">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/solutions/${s.slug}`}
                        className="block rounded-xl px-4 py-3 hover:bg-[var(--color-bg-raised)] transition-colors"
                      >
                        <span className="text-sm font-medium text-[var(--color-ink)]">{s.title}</span>
                        <span className="block mt-0.5 text-xs text-[var(--color-steel)]">{s.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-[var(--color-steel)] hover:text-[var(--color-ink)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/checkout"
            aria-label="View cart"
            className="relative grid place-items-center h-10 w-10 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
          >
            <ShoppingCart size={17} />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid place-items-center h-5 min-w-5 px-1 rounded-full bg-[var(--color-heat)] text-white text-[10px] font-mono font-semibold">
                {totalCount}
              </span>
            )}
          </Link>
          <Button href="/buy-now" variant="secondary" icon={false} className="!py-2.5">
            Buy Now
          </Button>
          <Button href="/contact" icon={false} className="!py-2.5">
            Contact Us
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/checkout"
            aria-label="View cart"
            className="relative grid place-items-center h-10 w-10 rounded-full border border-[var(--color-line)] text-[var(--color-ink)]"
          >
            <ShoppingCart size={16} />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid place-items-center h-5 min-w-5 px-1 rounded-full bg-[var(--color-heat)] text-white text-[10px] font-mono font-semibold">
                {totalCount}
              </span>
            )}
          </Link>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid place-items-center h-10 w-10 rounded-full border border-[var(--color-line)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[var(--color-bg)] border-t border-[var(--color-line)]"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.slice(0, 1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 font-mono text-xs uppercase tracking-wide text-[var(--color-ink)] border-b border-[var(--color-line)]"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className="flex items-center justify-between py-4 font-mono text-xs uppercase tracking-wide text-[var(--color-ink)] border-b border-[var(--color-line)]"
                aria-expanded={mobileSolutionsOpen}
              >
                Solutions
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-b border-[var(--color-line)]"
                  >
                    <div className="flex flex-col pb-3">
                      {solutions.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/solutions/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="py-2.5 pl-4 text-sm text-[var(--color-steel)]"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 font-mono text-xs uppercase tracking-wide text-[var(--color-ink)] border-b border-[var(--color-line)] last:border-0"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-5 flex flex-col gap-3">
                <Button href="/buy-now" variant="secondary" icon={false} onClick={() => setOpen(false)} className="justify-center">
                  Buy Now
                </Button>
                <Button href="/contact" icon={false} onClick={() => setOpen(false)} className="justify-center">
                  Contact Us
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
