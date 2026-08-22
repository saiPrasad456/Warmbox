import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import FaqAccordion from '../components/FaqAccordion'
import ProductArt from '../components/illustrations/ProductArt'
import usePageMeta from '../hooks/usePageMeta'
import { products } from '../data/products'
import { applications } from '../data/applications'
import { faqs } from '../data/faq'

const formatSpec = (value: string) => (value === 'TBD' ? 'Available on request' : value)

const specRows = (p: (typeof products)[number]) => [
  { label: 'Shape', value: p.shape === 'rectangular' ? 'Rectangular' : 'Circular' },
  { label: 'Heating Time', value: p.heatingTime },
  { label: 'Activation', value: 'Pull-string' },
  { label: 'External Power', value: 'Not required' },
  { label: 'Capacity', value: formatSpec(p.capacity) },
  { label: 'Material', value: formatSpec(p.material) },
  { label: 'Weight', value: formatSpec(p.weight) },
  { label: 'Dimensions', value: formatSpec(p.dimensions) },
  { label: 'Shelf Life', value: formatSpec(p.shelfLife) },
]

// A couple of product-specific questions layered on top of the shared FAQ set.
const productFaqExtra = (p: (typeof products)[number]) => [
  {
    id: `${p.id}-faq-1`,
    question: `What's included with the ${p.name}?`,
    answer: 'Packaging contents will be listed here once finalised.',
  },
  {
    id: `${p.id}-faq-2`,
    question: 'How should I store it before use?',
    answer: 'Storage guidance will be published here once confirmed.',
  },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  usePageMeta(
    product ? `${product.name} — WarmBox` : 'Product not found — WarmBox',
    product ? product.tagline : 'This product could not be found.',
  )

  if (!product) return <Navigate to="/" replace />

  const relatedApplications = applications.filter((a) => product.applicationIds.includes(a.id))
  const productFaqs = [...productFaqExtra(product), ...faqs.slice(0, 3)]

  return (
    <div className="pt-32 pb-24">
      <Container>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
          <ArrowLeft size={15} /> Back to products
        </Link>

        {/* Header */}
        <div className="mt-8 grid lg:grid-cols-2 gap-14 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">{product.shape === 'rectangular' ? 'Rectangular' : 'Circular'} container</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-[1.05]">{product.name}</h1>
            <p className="mt-4 text-lg text-[var(--color-steel)] max-w-md leading-relaxed">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?reason=quote">Request a Quote</Button>
              <Button href="/contact" variant="secondary">Talk to Us</Button>
            </div>
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3">
            {product.gallery.map((g, i) => (
              <div key={g.label} className={i === 0 ? 'col-span-2' : ''}>
                <ProductArt
                  shape={product.shape}
                  label={g.label}
                  muted={i !== 0}
                  className={`rounded-2xl border border-[var(--color-line)] ${i === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((f) => (
              <div key={f} className="rounded-2xl border border-[var(--color-line)] p-6 text-sm text-[var(--color-ink)] hover:border-[var(--color-heat)]/40 hover:-translate-y-1 transition-all duration-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-heat)] block mb-3" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* How to use */}
        <div className="mt-24 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-semibold">How to use</h2>
            <ol className="mt-8 space-y-6">
              {product.howToUse.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-xs text-[var(--color-heat)] shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-[var(--color-steel)] leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-semibold">Specifications</h2>
            <table className="mt-8 w-full text-sm">
              <tbody>
                {specRows(product).map((row) => (
                  <tr key={row.label} className="border-b border-[var(--color-line)] last:border-0">
                    <td className="py-3 pr-4 font-mono text-xs uppercase text-[var(--color-steel-light)] w-1/2">{row.label}</td>
                    <td className="py-3 text-[var(--color-ink)]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        {relatedApplications.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-semibold">Where it's used</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedApplications.map((a) => (
                <div key={a.id} className="rounded-2xl border border-[var(--color-line)] p-6">
                  <h3 className="font-semibold text-[var(--color-ink)]">{a.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-steel)] leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-24 max-w-2xl">
          <h2 className="text-2xl font-semibold">Frequently asked</h2>
          <div className="mt-8">
            <FaqAccordion items={productFaqs} defaultOpenId={productFaqs[0].id} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl bg-[var(--color-ink)] text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Interested in the {product.name}?</h2>
            <p className="mt-2 text-white/60">Request a quote or talk to our team about bulk and custom orders.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Button href="/contact?reason=quote">Request a Quote</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
