import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/Container'
import usePageMeta from '../hooks/usePageMeta'
import Technology from '../sections/Technology'
import FAQ from '../sections/FAQ'

export default function TechnologyFaq() {
  usePageMeta(
    'Technology & FAQ — WarmBox',
    'How WarmBox\u2019s water-activated heating technology works, plus answers to common questions about the product.',
  )

  return (
    <div className="pt-32">
      <Container>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]"
        >
          <ArrowLeft size={15} /> Back home
        </Link>
      </Container>

      <Technology />
      <FAQ />
    </div>
  )
}
