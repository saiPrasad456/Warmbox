import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Mail, Minus, Plus, Check, ShoppingCart } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductArt from '../components/illustrations/ProductArt'
import usePageMeta from '../hooks/usePageMeta'
import { products } from '../data/products'
import { contact, whatsappLink } from '../data/contact'
import { useCart } from '../context/CartContext'

// NOTE: there's no payments backend yet (per README, that's a later phase).
// "Add to Cart" holds the customer's selection locally (see CartContext) so
// it carries through to /checkout, which still routes the actual order via
// WhatsApp/email until a real payment/marketplace integration exists.
export default function BuyNow() {
  usePageMeta(
    'Buy Now — WarmBox',
    'Order WarmBox self-heating containers — add items to your cart, then checkout via WhatsApp or email.',
  )

  const navigate = useNavigate()
  const { addToCart, isInCart, totalCount } = useCart()
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((p) => [p.id, 1])),
  )
  const [justAdded, setJustAdded] = useState<Record<string, boolean>>({})

  const setQty = (id: string, qty: number) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, qty) }))

  const handleAddToCart = (id: string) => {
    addToCart(id, quantities[id] ?? 1)
    setJustAdded((prev) => ({ ...prev, [id]: true }))
    window.setTimeout(() => setJustAdded((prev) => ({ ...prev, [id]: false })), 1800)
  }

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
            <ArrowLeft size={15} /> Back home
          </Link>
          {totalCount > 0 && (
            <button
              onClick={() => navigate('/checkout')}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
            >
              <ShoppingCart size={16} />
              View cart ({totalCount})
            </button>
          )}
        </div>

        <div className="mt-8 max-w-2xl">
          <span className="eyebrow">Buy Now</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">
            Ready to order a WarmBox?
          </h1>
          <p className="mt-4 text-[var(--color-steel)] leading-relaxed">
            Add the products you need to your cart, then head to checkout. Online payments are coming soon, so
            checkout currently confirms your order details with us directly via WhatsApp or email.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-line)] overflow-hidden"
            >
              <ProductArt shape={product.shape} className="aspect-[4/3]" />
              <div className="p-6">
                <h2 className="text-lg font-semibold text-[var(--color-ink)]">{product.name}</h2>
                <p className="mt-1 text-sm text-[var(--color-steel)]">{product.tagline}</p>
                <p className="mt-3 text-sm font-mono text-[var(--color-heat)]">Price available on request</p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wide text-[var(--color-steel-light)]">
                    Qty
                  </span>
                  <div className="flex items-center rounded-full border border-[var(--color-line)]">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(product.id, (quantities[product.id] ?? 1) - 1)}
                      className="grid place-items-center h-8 w-8 text-[var(--color-steel)] hover:text-[var(--color-ink)]"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium text-[var(--color-ink)]">
                      {quantities[product.id] ?? 1}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(product.id, (quantities[product.id] ?? 1) + 1)}
                      className="grid place-items-center h-8 w-8 text-[var(--color-steel)] hover:text-[var(--color-ink)]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 ${
                      justAdded[product.id]
                        ? 'bg-[var(--color-ink)] text-white'
                        : 'bg-[var(--color-heat)] text-white hover:bg-[var(--color-heat-deep)] hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(255,69,23,0.55)]'
                    }`}
                  >
                    {justAdded[product.id] ? (
                      <>
                        <Check size={16} strokeWidth={2.5} /> Added to cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        {isInCart(product.id) ? 'Add more' : 'Add to Cart'}
                      </>
                    )}
                  </button>
                  <Button href={`/products/${product.slug}`} variant="secondary" icon={false} className="!py-2.5">
                    View details
                  </Button>
                </div>

                <a
                  href={whatsappLink(`Hi, I'd like to order the ${product.name}. Could you share pricing and availability?`)}
                  className="mt-3 inline-block text-xs text-[var(--color-steel)] hover:text-[var(--color-ink)] underline underline-offset-2"
                >
                  Or ask about it on WhatsApp instead
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--color-line)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-[var(--color-ink)]">Prefer email, or ordering in bulk?</h3>
            <p className="mt-1 text-sm text-[var(--color-steel)]">
              Reach out for wholesale, distributor, or custom-branded orders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href={`mailto:${contact.email}`} variant="secondary" icon={false} className="!py-2.5">
              <Mail size={16} /> Email us
            </Button>
            {contact.brochureUrl && (
              <Button href={contact.brochureUrl} variant="ghost" icon={false} className="!py-2.5">
                <Download size={16} /> Download brochure
              </Button>
            )}
          </div>
        </div>

        {/* TODO: once marketplace listings exist (Amazon, Flipkart, own storefront),
            add direct "Buy on <Marketplace>" buttons here alongside the WhatsApp/email flow. */}
      </Container>

      {totalCount > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-md"
        >
          <Container className="flex items-center justify-between gap-4 py-4">
            <span className="text-sm text-[var(--color-steel)]">
              <span className="font-semibold text-[var(--color-ink)]">{totalCount}</span>{' '}
              {totalCount === 1 ? 'item' : 'items'} in your cart
            </span>
            <Button href="/checkout" icon={false} className="!py-2.5">
              Go to checkout
            </Button>
          </Container>
        </motion.div>
      )}
    </div>
  )
}
