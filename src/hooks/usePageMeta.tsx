import { useEffect } from 'react'

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Sets the document title and meta description/OG tags for the current page.
 * Restores nothing on unmount deliberately — the next page that mounts sets
 * its own values, which is all a single-page site needs.
 */
export default function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
  }, [title, description])
}
