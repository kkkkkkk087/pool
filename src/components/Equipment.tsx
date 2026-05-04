import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

export default function Equipment() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/equipment.png" 
                alt="Professional Pool Cleaning Equipment"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-turquoise text-white p-8 rounded-3xl shadow-xl hidden md:block">
               <p className="text-3xl font-black mb-1">20+</p>
               <p className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-turquoise font-bold uppercase tracking-[0.2em] text-xs mb-4"
            >
              Overview
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8"
            >
              Providing Abu Dhabi's Most <br/> Technical Cleaning Service
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg mb-10 leading-relaxed"
            >
              Our pool cleaning service includes skimming the surface, vacuuming the floor and walls, 
              brushing tiles, and adjusting chemicals with industrial-grade precision gear to ensure 
              your pool is clean, clear, and inviting.
            </motion.p>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                'Bespoke Design-and-Build',
                'Waterair Authorized Dealer',
                'Advanced Filtration Systems',
                'Technical MEP Maintenance'
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-brand-turquoise/10 p-1 rounded-full">
                    <CheckCircle2 size={18} className="text-brand-turquoise" />
                  </div>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="w-fit bg-[#ffda44] hover:bg-[#fdd017] text-gray-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center gap-3 cursor-pointer"
            >
              Book Now
              <span className="text-xl">→</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-brand-turquoise">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Certified Company</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We adhere to industrial standards with our certified pool cleaning services and OSHAD compliance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-brand-turquoise">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Professional Staff</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our experienced team delivers expert maintenance and outstanding technical engineering service.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-brand-turquoise">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Fast Process</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We provide efficient, high-quality pool cleaning with quick turnaround times and GPS reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
