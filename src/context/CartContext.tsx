import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products } from '../data/products'
import type { Product } from '../types'

export interface CartItem {
  productId: string
  quantity: number
}

export interface CartLine extends CartItem {
  product: Product
}

interface CartContextValue {
  items: CartItem[]
  lines: CartLine[]
  totalCount: number
  addToCart: (productId: string, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isInCart: (productId: string) => boolean
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'warmbox_cart'

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (i): i is CartItem =>
        i && typeof i.productId === 'string' && typeof i.quantity === 'number' && i.quantity > 0,
    )
  } catch {
    return []
  }
}

// Cart persists in localStorage so it survives navigating from Buy Now to
// Checkout (and refreshes) — there's no backend yet, so this is the source
// of truth until real checkout/order infrastructure exists.
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart())

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable (e.g. private browsing) — cart just won't persist
    }
  }, [items])

  const addToCart = (productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId)
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prev) => prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)))
  }

  const clearCart = () => setItems([])

  const isInCart = (productId: string) => items.some((i) => i.productId === productId)

  const lines = useMemo<CartLine[]>(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId)
          return product ? { ...item, product } : null
        })
        .filter((line): line is CartLine => line !== null),
    [items],
  )

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])

  const value: CartContextValue = {
    items,
    lines,
    totalCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
