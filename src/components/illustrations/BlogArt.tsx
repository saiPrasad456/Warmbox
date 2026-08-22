import { Play, FileText } from 'lucide-react'
import type { BlogPostType } from '../../types'

const GRADIENTS: Record<BlogPostType, string> = {
  video: 'linear-gradient(155deg, #17160F 0%, #7A3A1E 60%, #FF4517 130%)',
  article: 'linear-gradient(155deg, #17160F 0%, #4A3A22 60%, #FFAE33 130%)',
}

export default function BlogArt({ type, className = '' }: { type: BlogPostType; className?: string }) {
  const Icon = type === 'video' ? Play : FileText
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: GRADIENTS[type] }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.15) 0 1px, transparent 1px 26px)' }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid place-items-center h-12 w-12 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm">
          <Icon size={18} strokeWidth={1.75} className="text-white ml-0.5" />
        </span>
      </div>
    </div>
  )
}
