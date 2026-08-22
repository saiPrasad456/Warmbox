import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ApplicationArt from '../components/illustrations/ApplicationArt'
import { applications } from '../data/applications'

export default function Applications() {
  return (
    <section id="applications" className="py-24 md:py-32 bg-[var(--color-bg-raised)]">
      <Container>
        <SectionHeading eyebrow="Applications" title="Wherever a hot meal is hard to come by." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <ApplicationArt id={app.id} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-white font-semibold">{app.title}</h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
