import { motion } from 'motion/react';
import { Settings, Droplets, PenTool, ShieldCheck } from 'lucide-react';

const softServices = [
  {
    title: 'Precision Cleaning',
    description: 'Weekly surface skimming, wall brushing, and advanced vacuuming for crystal clear water.',
    icon: <Droplets className="w-8 h-8 text-[#06b6d4]" />
  },
  {
    title: 'Chemical Stewardship',
    description: 'Bespoke chemical balancing to ensure perfect pH levels that are gentle on the skin and eyes.',
    icon: <ShieldCheck className="w-8 h-8 text-[#10b981]" />
  }
];

const hardServices = [
  {
    title: 'MEP Engineering',
    description: 'Mechanical, electrical, and plumbing inspections to keep pumps and heaters at peak efficiency.',
    icon: <Settings className="w-8 h-8 text-gray-700" />
  },
  {
    title: 'Technical Repairs',
    description: 'Structural leak detection, tile repairs, and integration of modern pool automation systems.',
    icon: <PenTool className="w-8 h-8 text-[#d4af37]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#06b6d4]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#10b981]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
          >
            Uncompromising Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans leading-relaxed tracking-wide text-lg"
          >
            We go beyond surface cleaning. Our holistic approach ensures your pool remains a flawless oasis year-round.
          </motion.p>
        </div>

        {/* Soft FM Section */}
        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#06b6d4] mb-8 border-l-2 border-[#06b6d4] pl-4">Soft Services (Cleaning)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Hard FM Section */}
        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 border-l-2 border-gray-400 pl-4">Hard Services (Engineering)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}
