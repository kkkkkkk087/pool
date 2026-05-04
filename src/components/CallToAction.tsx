import { motion } from 'motion/react';
import { Phone, ChevronRight } from 'lucide-react';
import { AutoRevealingHeading } from './AutoRevealingHeading';

export default function CallToAction() {
  return (
    <section id="contact" className="bg-[#1e293b] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-turquoise blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#10b981] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-white font-sans text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
          <AutoRevealingHeading text="Ready to Reclaim" />
          <br className="hidden md:block" />
          <AutoRevealingHeading text="Your Weekends?" />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Stop spending Saturday mornings testing chemicals and skimming leaves. 
          Let your local Abu Dhabi pool experts handle it — so you can just enjoy the splash.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-gray-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-gray-100 cursor-pointer shadow-2xl flex items-center justify-center gap-2"
          >
            Get Your Free Quote
            <ChevronRight size={18} />
          </a>
          
          <a 
            href="tel:+971502406139" 
            className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/10 cursor-pointer flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call +971 50 240 6139
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-white/40 text-xs uppercase tracking-[0.2em] font-bold"
        >
          * Custom quotes available for commercial pools and extra-large estates.
        </motion.p>
      </div>
    </section>
  );
}
