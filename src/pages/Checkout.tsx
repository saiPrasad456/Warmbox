import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Minus, Plus, Trash2, Mail, ShoppingCart, CheckCircle2 } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductArt from '../components/illustrations/ProductArt'
import usePageMeta from '../hooks/usePageMeta'
import { contact, whatsappLink } from '../data/contact'
import { useCart } from '../context/CartContext'

// NOTE: no payments backend yet (per README) — checkout reviews the cart the
// customer built on /buy-now, then hands it off as a pre-filled WhatsApp or
// email message so the team can confirm pricing, availability, and delivery.
// Swap in real order submission once payment/marketplace infra exists.
export default function Checkout() {
  usePageMeta(
    'Checkout — WarmBox',
    'Review your WarmBox order and send it to our team via WhatsApp or email to confirm pricing and delivery.',
  )

  const { lines, totalCount, updateQuantity, removeFromCart, clearCart } = useCart()
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const orderMessage = () => {
    const itemLines = lines
      .map((line) => `\u2022 ${line.product.name} \u00d7 ${line.quantity}`)
      .join('\n')
    const notesBlock = notes.trim() ? `\n\nNotes: ${notes.trim()}` : ''
    return `Hi WarmBox, I'd like to place an order:\n\n${itemLines}${notesBlock}\n\nCould you confirm pricing, availability, and delivery?`
  }

  const handleWhatsAppCheckout = () => {
    window.open(whatsappLink(orderMessage()), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    'WarmBox order',
  )}&body=${encodeURIComponent(orderMessage())}`

  if (lines.length === 0 && !submitted) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <Link to="/buy-now" className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
            <ArrowLeft size={15} /> Back to Buy Now
          </Link>
          <div className="mt-14 flex flex-col items-center text-center gap-4 py-16">
            <div className="grid place-items-center h-16 w-16 rounded-full bg-[var(--color-bg-raised)] text-[var(--color-steel-light)]">
              <ShoppingCart size={26} />
            </div>
            <h1 className="text-2xl font-semibold text-[var(--color-ink)]">Your cart is empty</h1>
            <p className="max-w-sm text-sm text-[var(--color-steel)]">
              Add a WarmBox container on the Buy Now page and it’ll show up here for checkout.
            </p>
            <Button href="/buy-now" className="mt-2">Go to Buy Now</Button>
          </div>
        </Container>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <div className="mt-8 max-w-lg mx-auto flex flex-col items-center text-center gap-4 py-16">
            <div className="grid place-items-center h-16 w-16 rounded-full bg-[var(--color-heat)]/10 text-[var(--color-heat)]">
              <CheckCircle2 size={28} />
            </div>
            <h1 className="text-2xl font-semibold text-[var(--color-ink)]">Order sent</h1>
            <p className="text-sm text-[var(--color-steel)] leading-relaxed">
              We’ve opened WhatsApp with your order details. Our team will confirm pricing, availability, and
              delivery there. You can also email us using the link below if you’d prefer.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href={emailHref} icon={false} variant="secondary">
                <Mail size={16} /> Email instead
              </Button>
              <Button
                href="/buy-now"
                icon={false}
                onClick={() => {
                  clearCart()
                }}
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <Container>
        <Link to="/buy-now" className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] hover:text-[var(--color-ink)]">
          <ArrowLeft size={15} /> Back to Buy Now
        </Link>

        <div className="mt-8 max-w-2xl">
          <span className="eyebrow">Checkout</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">
            Review your order
          </h1>
          <p className="mt-4 text-[var(--color-steel)] leading-relaxed">
            Online payments are coming soon. Confirm the items below, add any notes, then send your order to our
            team via WhatsApp or email.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          {/* Cart lines */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AnimatePresence initial={false}>
              {lines.map((line) => (
                <motion.div
                  key={line.productId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-4 rounded-2xl border border-[var(--color-line)] p-4"
                >
                  <ProductArt shape={line.product.shape} className="h-24 w-24 shrink-0 rounded-xl" />
                  <div className="flex flex-1 flex-col justify-between min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/products/${line.product.slug}`}
                          className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-heat)] transition-colors"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-0.5 text-xs text-[var(--color-steel)]">{line.product.tagline}</p>
                      </div>
                      <button
                        aria-label={`Remove ${line.product.name} from cart`}
                        onClick={() => removeFromCart(line.productId)}
                        className="shrink-0 text-[var(--color-steel-light)] hover:text-[var(--color-heat)] transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-[var(--color-line)]">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                          className="grid place-items-center h-8 w-8 text-[var(--color-steel)] hover:text-[var(--color-ink)]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-[var(--color-ink)]">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                          className="grid place-items-center h-8 w-8 text-[var(--color-steel)] hover:text-[var(--color-ink)]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-xs font-mono text-[var(--color-heat)]">Price on request</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div>
              <label htmlFor="order-notes" className="text-sm font-medium text-[var(--color-ink)]">
                Order notes (optional)
              </label>
              <textarea
                id="order-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Delivery address, preferred timing, customisation requests…"
                className="mt-2 w-full rounded-2xl border border-[var(--color-line)] bg-transparent p-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-steel-light)] focus:outline-none focus:border-[var(--color-heat)]"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-[var(--color-line)] p-6 sticky top-28">
              <h2 className="font-semibold text-[var(--color-ink)]">Order summary</h2>
              <div className="mt-4 space-y-2 text-sm">
                {lines.map((line) => (
                  <div key={line.productId} className="flex justify-between gap-3 text-[var(--color-steel)]">
                    <span className="truncate">
                      {line.product.name} <span className="text-[var(--color-steel-light)]">×{line.quantity}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-line)] flex items-center justify-between text-sm">
                <span className="text-[var(--color-steel)]">Items</span>
                <span className="font-semibold text-[var(--color-ink)]">{totalCount}</span>
              </div>
              <p className="mt-2 text-xs text-[var(--color-steel-light)] leading-relaxed">
                Final pricing and delivery cost will be confirmed by our team before you pay — nothing is charged
                here.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 bg-[var(--color-heat)] text-white hover:bg-[var(--color-heat-deep)] hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(255,69,23,0.55)]"
                >
                  Send order via WhatsApp
                </button>
                <Button href={emailHref} variant="secondary" icon={false} className="justify-center">
                  <Mail size={16} /> Send via email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
