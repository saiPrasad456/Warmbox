import usePageMeta from '../hooks/usePageMeta'
import Hero from '../sections/Hero'
import Pillars from '../sections/Pillars'
import HowItWorks from '../sections/HowItWorks'
import DemoVideo from '../sections/DemoVideo'
import TenMinuteExperience from '../sections/TenMinuteExperience'
import Products from '../sections/Products'
import Benefits from '../sections/Benefits'
import Applications from '../sections/Applications'
import CompatibleFood from '../sections/CompatibleFood'
import B2B from '../sections/B2B'
import Testimonials from '../sections/Testimonials'

export default function Home() {
  usePageMeta(
    'WarmBox — Heat. Eat. Anywhere.',
    'WarmBox is a disposable self-heating food packaging solution that lets you warm a meal with a water-activated heating pouch — no microwave, stove, or electricity required.',
  )

  return (
    <>
      <Hero />
      <Pillars />
      <HowItWorks />
      <DemoVideo />
      <TenMinuteExperience />
      <Products />
      <Benefits />
      <Applications />
      <CompatibleFood />
      <B2B />
      <Testimonials />
    </>
  )
}
