import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import ProductArt from '../components/illustrations/ProductArt'
import { products } from '../data/products'

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Our products" title="Two shapes. Same heat." />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-8 md:p-10 flex flex-col hover:border-[var(--color-heat)]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <ProductArt shape={product.shape} className="aspect-[4/3] rounded-2xl border border-[var(--color-line)] transition-transform duration-500 group-hover:scale-[1.02]" />

              <h3 className="mt-8 text-2xl font-semibold text-[var(--color-ink)]">{product.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{product.tagline}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase text-[var(--color-steel-light)]">Heating time</dt>
                  <dd className="mt-1 text-[var(--color-ink)]">{product.heatingTime}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase text-[var(--color-steel-light)]">Capacity</dt>
                  <dd className="mt-1 text-[var(--color-ink)]">{product.capacity}</dd>
                </div>
              </dl>

              <ul className="mt-6 space-y-2 flex-1">
                {product.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--color-steel)] flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--color-heat)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button href={`/products/${product.slug}`} variant="secondary" className="mt-8 self-start">
                View Product
              </Button>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
