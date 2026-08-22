import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import FaqAccordion from '../components/FaqAccordion'
import { faqs } from '../data/faq'

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-raised)]">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}
