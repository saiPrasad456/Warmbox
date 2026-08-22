import type { NavLink, Testimonial } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Products', href: '/#products' },
  { label: 'Technology/FAQ', href: '/technology-faq' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export const testimonials: Testimonial[] = [
  { id: 't1', name: '[CUSTOMER NAME]', affiliation: '[COMPANY / LOCATION]', rating: 5, quote: 'Placeholder testimonial text — replace with a verified customer quote before launch.' },
  { id: 't2', name: '[CUSTOMER NAME]', affiliation: '[COMPANY / LOCATION]', rating: 5, quote: 'Placeholder testimonial text — replace with a verified customer quote before launch.' },
  { id: 't3', name: '[CUSTOMER NAME]', affiliation: '[COMPANY / LOCATION]', rating: 4, quote: 'Placeholder testimonial text — replace with a verified customer quote before launch.' },
]
