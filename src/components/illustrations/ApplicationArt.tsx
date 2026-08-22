import {
  Plane,
  Tent,
  Briefcase,
  GraduationCap,
  Shield,
  Siren,
  HardHat,
  Bike,
  type LucideIcon,
} from 'lucide-react'

// Maps each application id to an icon and a distinct warm gradient so every
// tile reads differently at a glance instead of repeating one background.
const APPLICATION_ART: Record<string, { icon: LucideIcon; gradient: string }> = {
  a1: { icon: Plane, gradient: 'linear-gradient(155deg, #3A2A22 0%, #7A3A1E 55%, #C24A12 100%)' },
  a2: { icon: Tent, gradient: 'linear-gradient(155deg, #22271F 0%, #3E4A2A 55%, #6E7A2E 100%)' },
  a3: { icon: Briefcase, gradient: 'linear-gradient(155deg, #241F2A 0%, #4A3A6E 55%, #7A4AAE 100%)' },
  a4: { icon: GraduationCap, gradient: 'linear-gradient(155deg, #1F2A2A 0%, #1E5A5A 55%, #1E9A9A 100%)' },
  a5: { icon: Shield, gradient: 'linear-gradient(155deg, #201F1A 0%, #4A4432 55%, #8A7A3E 100%)' },
  a6: { icon: Siren, gradient: 'linear-gradient(155deg, #2A1414 0%, #7A1E1E 55%, #C22C0B 100%)' },
  a7: { icon: HardHat, gradient: 'linear-gradient(155deg, #241E14 0%, #6E4A1E 55%, #C2810B 100%)' },
  a8: { icon: Bike, gradient: 'linear-gradient(155deg, #14201F 0%, #1E5A4A 55%, #0BA26F 100%)' },
}

const FALLBACK = { icon: Shield, gradient: 'linear-gradient(155deg, #201818 0%, #4A2E20 55%, #FF4517 100%)' }

export default function ApplicationArt({ id, className = '' }: { id: string; className?: string }) {
  const art = APPLICATION_ART[id] ?? FALLBACK
  const Icon = art.icon
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: art.gradient }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(120% 80% at 85% -10%, rgba(255,255,255,0.25), transparent 60%)' }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <Icon size={40} strokeWidth={1.25} className="text-white/85" />
      </div>
    </div>
  )
}
