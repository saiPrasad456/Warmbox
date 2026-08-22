import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
  icon?: boolean
  className?: string
}

export default function Button({ children, href = '#', variant = 'primary', onClick, icon = true, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2'

  const variants = {
    primary: 'bg-[var(--color-heat)] text-white hover:bg-[var(--color-heat-deep)] hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(255,69,23,0.55)]',
    secondary: 'bg-transparent text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[var(--color-ink)]',
    ghost: 'bg-transparent text-[var(--color-ink)] hover:text-[var(--color-heat)] px-0',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {icon && <ArrowUpRight size={16} strokeWidth={2.5} />}
    </>
  )

  // Internal SPA route (starts with "/") uses client-side routing; hash anchors and
  // external links use a plain <a>.
  if (href.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {content}
    </a>
  )
}
