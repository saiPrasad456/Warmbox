// ---------------------------------------------------------------------------
// Single source of truth for contact details. Replace the placeholder values
// below with real business info — every component that displays contact
// info (Footer, WhatsApp button, structured data) pulls from here, so you
// only need to update it in one place.
// ---------------------------------------------------------------------------

export const contact = {
  email: 'hello@warmbox.example', // TODO: replace with real business email
  phone: '+91 00000 00000', // TODO: replace with real phone number, keep intl format
  // WhatsApp number in international format, digits only, no + or spaces
  // (e.g. 919876543210 for an Indian number +91 98765 43210). The floating
  // WhatsApp button in the corner of every page stays hidden until this is
  // changed from the placeholder below.
  whatsappNumber: '910000000000', // TODO: replace with real WhatsApp Business number
  address: 'Bhubaneswar, Odisha, India', // TODO: replace with real registered address
  // Some brands list a separate registered office and manufacturing/factory
  // address (common for FSSAI/legal filings in India). Leave manufacturing
  // blank to hide that line in the footer if you only have one address.
  registeredOffice: '', // TODO: e.g. 'Plot 12, Industrial Estate, Bhubaneswar, Odisha - 751024, India'
  manufacturingFacility: '', // TODO: leave blank to hide, or add if different from registered office
  // Optional PDF spec-sheet / brochure — put the file in /public and point
  // this at it (e.g. '/brochure.pdf'), or leave blank to hide the download
  // link in the footer and Buy Now page.
  brochureUrl: '',
  social: {
    // TODO: replace with real profile URLs once accounts exist. Any entry
    // left blank is automatically hidden from the footer. `instagram`
    // additionally controls the floating Instagram button in the corner
    // of every page — it stays hidden until this is filled in
    // (e.g. 'https://instagram.com/warmbox').
    instagram: 'https://www.instagram.com/_warm.box_?igsi=anA1cDFxaTNnN3Bm',
    linkedin: '',
    facebook: '',
    twitter: '',
    youtube: '',
  },
}

export const whatsappPrefillMessage = "Hi WarmBox, I'd like to know more about your self-heating containers."

export function whatsappLink(message: string = whatsappPrefillMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// The placeholder shipped above — used to detect whether a real number has
// been filled in yet, so the floating WhatsApp button doesn't go live
// pointing at a fake number.
const WHATSAPP_PLACEHOLDER = '910000000000'

// True once whatsappNumber looks like a real number: digits only (no +,
// spaces, or dashes), a plausible length, and not the placeholder above.
export function isWhatsappConfigured(): boolean {
  return contact.whatsappNumber !== WHATSAPP_PLACEHOLDER && /^\d{10,15}$/.test(contact.whatsappNumber)
}

// True once a real Instagram profile URL has been filled in above.
export function isInstagramConfigured(): boolean {
  return contact.social.instagram.trim().length > 0
}
