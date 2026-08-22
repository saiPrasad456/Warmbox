import WhatsAppButton from './WhatsAppButton'
import InstagramButton from './InstagramButton'

// Stacks the floating corner buttons bottom-up. Each button hides itself
// when unconfigured (see WhatsAppButton / InstagramButton), and this
// flex column collapses around whichever ones remain, so there's never an
// empty gap where a hidden button would have been.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
      <WhatsAppButton />
      <InstagramButton />
    </div>
  )
}
