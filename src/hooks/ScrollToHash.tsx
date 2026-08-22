import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't auto-scroll to `#hash` targets on client-side navigation
 * the way a full page load does. This restores that behaviour so links like
 * "/#how-it-works" work correctly from any route, not just the home page.
 */
export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    // Wait a tick for the target route's content to mount before measuring position.
    const id = hash.replace('#', '')
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const t = setTimeout(scroll, 60)
    return () => clearTimeout(t)
  }, [hash, pathname])

  return null
}
