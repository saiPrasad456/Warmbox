import type { BlogPost } from '../types'

// Placeholder content structure — replace with real posts and videos before
// launch. Keeping a mix of 'article' and 'video' types shows how the Blog
// page renders each format.
export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'placeholder-post-1',
    type: 'article',
    title: '[BLOG TITLE — e.g. How self-heating packaging works]',
    excerpt: 'Placeholder excerpt — replace with a short summary of the real article before launch.',
    date: '[DATE]',
    readTime: '[X min read]',
    image: '[IMAGE — BLOG POST 1]',
  },
  {
    id: 'b2',
    slug: 'placeholder-post-2',
    type: 'article',
    title: '[BLOG TITLE — e.g. Self-heating vs. microwave: what changes]',
    excerpt: 'Placeholder excerpt — replace with a short summary of the real article before launch.',
    date: '[DATE]',
    readTime: '[X min read]',
    image: '[IMAGE — BLOG POST 2]',
  },
  {
    id: 'b3',
    slug: 'placeholder-video-1',
    type: 'video',
    title: '[VIDEO TITLE — e.g. Unboxing and first use]',
    excerpt: 'Placeholder description — replace once the video is filmed and published.',
    date: '[DATE]',
    videoUrl: '', // TODO: YouTube video ID
    image: '[IMAGE — VIDEO 1 THUMBNAIL]',
  },
]
