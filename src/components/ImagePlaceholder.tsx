import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  label?: string
  className?: string
}

/**
 * Stand-in for real product photography. Looks like a deliberate "asset
 * pending" state rather than a broken placeholder — swap for a real <img>
 * once photos are available.
 */
export default function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden bg-[var(--color-bg-raised)] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-line) 0, var(--color-line) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon size={20} strokeWidth={1.5} className="text-[var(--color-steel-light)]" />
        <span className="text-[10px] font-mono uppercase tracking-wide text-[var(--color-steel-light)]">
          Photo coming soon
        </span>
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-wide text-[var(--color-steel)]">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
