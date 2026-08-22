export type ProductShape = 'rectangular' | 'circular'

export interface Product {
  id: string
  slug: string
  name: string
  shape: ProductShape
  tagline: string
  heatingTime: string
  capacity: string
  dimensions: string
  weight: string
  material: string
  shelfLife: string
  description: string
  features: string[]
  gallery: { label: string; view: string }[]
  howToUse: string[]
  applicationIds: string[]
  image: string
}

export interface Application {
  id: string
  title: string
  description: string
  image: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  affiliation: string
  rating: number
  quote: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Solution {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  useCases: string[]
  applicationIds: string[]
  image: string
}

export type BlogPostType = 'article' | 'video'

export interface BlogPost {
  id: string
  slug: string
  type: BlogPostType
  title: string
  excerpt: string
  date: string
  readTime?: string
  videoUrl?: string
  image: string
}

export interface CompatibleFood {
  id: string
  title: string
  examples: string
}
