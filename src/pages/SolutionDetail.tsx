import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import SolutionArt from '../components/illustrations/SolutionArt'
import usePageMeta from '../hooks/usePageMeta'
import { solutions } from '../data/solutions'
import { applications } from '../data/applications'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((s) => s.slug === slug)

  usePageMeta(
    solution ? `${solution.title} — WarmBox` : 'Solution not found — WarmBox',
    solution ? solution.tagline : 'This solution could not be found.',
  )

  if (!solution) return <Navigate to="/" replace />

  const related = applications.filter((a) => solution.applicationIds.includes(a.id))

  return (
    <div className="pt-32 pb-24">
      <Container>
        <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
          <ArrowLeft size={15} /> Back to solutions
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Solution</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">{solution.title}</h1>
            <p className="mt-3 text-lg text-[var(--color-steel)]">{solution.tagline}</p>
            <p className="mt-6 text-[var(--color-steel)] leading-relaxed">{solution.description}</p>

            <ul className="mt-8 space-y-3">
              {solution.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-heat)]" /> {u}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact?reason=quote" icon={false} className="!py-3">
                Talk to us about this
              </Button>
              <Button href="/buy-now" variant="secondary" icon={false} className="!py-3">
                Buy Now
              </Button>
            </div>
          </motion.div>

          <SolutionArt slug={solution.slug} className="aspect-[4/3] rounded-2xl" />
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Related use cases</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((app) => (
                <div key={app.id} className="rounded-2xl border border-[var(--color-line)] p-6">
                  <h3 className="font-semibold text-[var(--color-ink)]">{app.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-steel)] leading-relaxed">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-24">
          <h2 className="text-xl font-semibold text-[var(--color-ink)]">Other solutions</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {solutions
              .filter((s) => s.slug !== solution.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-heat)] hover:text-[var(--color-heat)] transition-colors"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
