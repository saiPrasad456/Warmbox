import { UtensilsCrossed, Flame, Bike, Shield, type LucideIcon } from 'lucide-react'

const SOLUTION_ART: Record<string, { icon: LucideIcon; gradient: string }> = {
  'ready-to-cook': { icon: UtensilsCrossed, gradient: 'linear-gradient(155deg, #201814 0%, #6E3A1E 55%, #FF4517 100%)' },
  'heat-and-eat': { icon: Flame, gradient: 'linear-gradient(155deg, #201410 0%, #7A2E12 55%, #FFAE33 100%)' },
  'food-delivery': { icon: Bike, gradient: 'linear-gradient(155deg, #14201F 0%, #1E5A4A 55%, #0BA26F 100%)' },
  'defence-forces': { icon: Shield, gradient: 'linear-gradient(155deg, #1A1C14 0%, #4A4A2A 55%, #8A8A3E 100%)' },
}

const FALLBACK = { icon: Flame, gradient: 'linear-gradient(155deg, #201818 0%, #4A2E20 55%, #FF4517 100%)' }

export default function SolutionArt({ slug, className = '' }: { slug: string; className?: string }) {
  const art = SOLUTION_ART[slug] ?? FALLBACK
  const Icon = art.icon
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: art.gradient }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(120% 80% at 85% -10%, rgba(255,255,255,0.25), transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 30px)' }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <Icon size={56} strokeWidth={1.1} className="text-white/90" />
      </div>
    </div>
  )
}
