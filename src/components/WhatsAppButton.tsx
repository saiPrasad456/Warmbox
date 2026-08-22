import { MessageCircle } from 'lucide-react'
import { whatsappLink, isWhatsappConfigured } from '../data/contact'

export default function WhatsAppButton() {
  if (!isWhatsappConfigured()) {
    // Fails visibly in dev instead of silently shipping a button that opens
    // an invalid chat — set contact.whatsappNumber in src/data/contact.ts.
    if (import.meta.env.DEV) {
      console.warn('WhatsAppButton: set a real contact.whatsappNumber in src/data/contact.ts to show this button.')
    }
    return null
  }

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-200"
    >
      <MessageCircle size={26} strokeWidth={2} fill="white" className="text-[#25D366]" />
    </a>
  )
}
