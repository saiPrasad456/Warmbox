interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[var(--color-steel)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
