import { motion } from 'framer-motion'
import { Play, FileText } from 'lucide-react'
import Container from '../components/Container'
import BlogArt from '../components/illustrations/BlogArt'
import usePageMeta from '../hooks/usePageMeta'
import { blogPosts } from '../data/blog'

export default function Blog() {
  usePageMeta(
    'Blog & Videos — WarmBox',
    'Articles and videos on self-heating food packaging, how WarmBox works, and where it fits.',
  )

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow">Blog & Videos</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">
            Stories, explainers, and demos.
          </h1>
          <p className="mt-4 text-[var(--color-steel)] leading-relaxed">
            Content is being built out alongside the product launch — check back for real articles and videos.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-[var(--color-line)] overflow-hidden hover:border-[var(--color-heat)]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <BlogArt type={post.type} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)]/85 text-white text-[10px] font-mono uppercase tracking-wide px-2.5 py-1">
                  {post.type === 'video' ? <Play size={11} /> : <FileText size={11} />}
                  {post.type}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-[var(--color-ink)] leading-snug">{post.title}</h2>
                <p className="mt-2 text-sm text-[var(--color-steel)] leading-relaxed">{post.excerpt}</p>
                <p className="mt-4 text-xs font-mono uppercase tracking-wide text-[var(--color-steel-light)]">
                  {post.date}
                  {post.readTime ? ` · ${post.readTime}` : ''}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </div>
  )
}
