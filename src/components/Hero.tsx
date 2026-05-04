import { motion } from 'motion/react';
import { ChevronRight, Star, CheckCircle2, Phone } from 'lucide-react';
import { AutoRevealingHeading } from './AutoRevealingHeading';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2850&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left max-w-2xl">
          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 border border-white/20"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              4.9/5 Rating • Trusted by Elite Residences
            </span>
          </motion.div>
          
          <div className="font-sans text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 text-balance">
            <AutoRevealingHeading text="Abu Dhabi's Pool Care," delay={0.05} />
            <br/>
            <AutoRevealingHeading text="Done Right." delay={0.05} className="text-brand-turquoise" />
          </div>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl font-medium mb-8 leading-relaxed"
          >
            We handle the chemistry and the sweat so you can just enjoy the splash. 
            Weekly maintenance, repairs, and green pool recovery.
          </motion.p>

          {/* Bullet Points */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 mb-10"
          >
            {[
              'Premium Swimming Pool Maintenance',
              'Advanced Water Filtration Solutions',
              'Sustainable & Eco-friendly Pool Care'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={20} className="text-brand-turquoise shrink-0" />
                <span className="text-sm md:text-base font-medium">{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-gray-100 cursor-pointer shadow-xl"
            >
              Get Free Quote
              <ChevronRight size={18} />
            </a>
            
            <a 
              href="tel:+971502406139" 
              className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/10 cursor-pointer backdrop-blur-sm"
            >
              <Phone size={18} />
              Call +971 50 240 6139
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronRight size={32} className="rotate-90" />
      </motion.div>
    </section>
  );
}
