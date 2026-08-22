import { InstagramIcon } from './SocialIcons'
import { contact, isInstagramConfigured } from '../data/contact'

export default function InstagramButton() {
  if (!isInstagramConfigured()) {
    // Same pattern as WhatsAppButton — stays hidden until a real profile
    // URL is set in src/data/contact.ts, instead of shipping a dead link.
    if (import.meta.env.DEV) {
      console.warn('InstagramButton: set contact.social.instagram in src/data/contact.ts to show this button.')
    }
    return null
  }

  return (
    <a
      href={contact.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      className="grid place-items-center h-14 w-14 rounded-full text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-200"
      style={{
        background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      }}
    >
      <InstagramIcon size={24} className="text-white" />
    </a>
  )
}
