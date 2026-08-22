import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/Container'
import usePageMeta from '../hooks/usePageMeta'
import MissionVision from '../sections/MissionVision'
import MarketGap from '../sections/MarketGap'

export default function About() {
  usePageMeta(
    'About — WarmBox',
    'WarmBox is a disposable, self-heating food packaging solution built to solve the one thing food delivery never fixed \u2014 keeping meals warm until you\u2019re ready to eat.',
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

      <MissionVision />
      <MarketGap />
    </div>
  )
}
