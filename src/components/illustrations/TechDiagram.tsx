const LAYERS = [
  { label: 'Food tray', y: 24, h: 28 },
  { label: 'Insulating base', y: 52, h: 14 },
  { label: 'Heating pouch', y: 66, h: 22 },
  { label: 'Water-activation chamber', y: 88, h: 20 },
]

export default function TechDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[var(--color-bg-raised)] ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 70% at 15% 10%, color-mix(in srgb, var(--color-glow-soft) 45%, transparent), transparent 60%)',
        }}
      />
      <svg viewBox="0 0 420 240" className="relative h-full w-full" role="img" aria-label="Cutaway diagram of the self-heating mechanism">
        <defs>
          <linearGradient id="tech-heat" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" style={{ stopColor: 'var(--color-heat)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-glow)' }} />
          </linearGradient>
        </defs>

        {/* outer container outline */}
        <rect x="60" y="20" width="150" height="112" rx="10" fill="none" stroke="var(--color-steel-light)" strokeWidth="1.5" />

        {/* layered cross-section fills */}
        {LAYERS.map((layer, i) => (
          <rect
            key={layer.label}
            x="66"
            y={layer.y}
            width="138"
            height={layer.h - 2}
            fill={i === 2 ? 'url(#tech-heat)' : 'var(--color-bg)'}
            opacity={i === 2 ? 0.85 : 1}
            stroke="var(--color-line)"
          />
        ))}

        {/* leader lines + labels */}
        {LAYERS.map((layer, i) => (
          <g key={layer.label}>
            <line
              x1="204"
              y1={layer.y + (layer.h - 2) / 2}
              x2={244 + (i % 2) * 6}
              y2={layer.y + (layer.h - 2) / 2}
              stroke="var(--color-steel-light)"
              strokeWidth="1"
            />
            <circle cx="204" cy={layer.y + (layer.h - 2) / 2} r="2.5" fill="var(--color-heat)" />
            <text
              x="250"
              y={layer.y + (layer.h - 2) / 2 + 4}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.02em"
              fill="var(--color-ink)"
            >
              {layer.label}
            </text>
          </g>
        ))}

        {/* pull string */}
        <line x1="135" y1="20" x2="135" y2="2" stroke="var(--color-ink)" strokeWidth="2" />
        <circle cx="135" cy="2" r="4" fill="var(--color-ink)" />

        {/* steam */}
        <g stroke="var(--color-heat)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5">
          <path d="M100 16 C96 8, 106 4, 102 -4" transform="translate(0,10)" />
          <path d="M120 12 C116 4, 126 0, 122 -8" transform="translate(0,10)" />
        </g>
      </svg>
    </div>
  )
}
