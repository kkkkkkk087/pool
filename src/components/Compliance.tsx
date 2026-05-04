import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function Compliance() {
  const certifications = [
    { title: 'Quality Certified', desc: 'Management Systems' },
    { title: 'Eco Friendly', desc: 'Environmental Management' },
    { title: 'Safety First', desc: 'Occupational Health & Safety' },
    { title: 'Local Authority', desc: 'Approved Contractor' },
    { title: 'Data Protection', desc: 'UAE PDPL Compliant' }
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-x-12 gap-y-8">
        {certifications.map((cert, index) => (
          <motion.div 
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="flex items-center gap-3"
          >
            <div className="bg-brand-turquoise/10 p-1.5 rounded-full">
              <CheckCircle size={18} className="text-brand-turquoise" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-900">{cert.title}</p>
              <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-medium">{cert.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
