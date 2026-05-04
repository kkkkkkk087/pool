import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive pool cleaning services, including regular maintenance, chemical balancing, vacuuming, skimming debris, brushing walls and tiles, and equipment inspections. We also offer seasonal openings and closings, as well as repairs and upgrades to pool equipment."
  },
  {
    question: "How often should I have my pool cleaned?",
    answer: "For optimal water quality and safety, we recommend weekly cleaning and maintenance during the swimming season. However, we can customize a schedule that fits your specific needs and usage patterns."
  },
  {
    question: "How do I know if my pool needs special attention?",
    answer: "Signs like cloudy water, algae growth, strange equipment noises, or strong chlorine odors indicate your pool needs immediate professional attention. Regular maintenance prevents most of these issues."
  },
  {
    question: "What chemicals do you use for pool maintenance?",
    answer: "We use premium, industry-standard balancing chemicals, prioritizing eco-friendly and gentle options where possible. Our precision dosing ensures crystal clear water that's safe for your family and easy on the eyes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f2f8fc] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-start">
        
        {/* Left Side (Image or sticky heading) */}
        <div className="lg:w-1/2 lg:sticky lg:top-32 relative">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative overflow-hidden rounded-[2rem] h-[400px] lg:h-[600px] shadow-2xl"
          >
             <div 
               className="absolute inset-0 bg-cover bg-center"
               role="img"
               aria-label="Clean swimming pool with clear turquoise water"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80")' }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8">
               <h3 className="text-white font-serif text-3xl font-bold mb-2 text-balance">The Eden Gardens Standard</h3>
               <p className="text-white/80 font-sans text-sm tracking-wide">Transparency, precision, and unwavering reliability in every visit.</p>
             </div>
          </motion.div>
        </div>

        {/* Right Side (Accordion) */}
        <div className="lg:w-1/2 flex flex-col justify-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#06b6d4] bg-white inline-block px-4 py-1.5 rounded-full mb-6 shadow-sm">FAQ</h2>
            <h3 className="font-serif text-4xl text-gray-900 font-bold mb-4">You ask, we answer.</h3>
            <p className="text-gray-500 font-sans text-lg">Everything you need to know about our premier maintenance services.</p>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border border-[#3baafe]/20' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left py-5 px-6 flex justify-between items-center group cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-turquoise focus:outline-none ${isOpen ? 'bg-[#3baafe] text-white' : 'bg-transparent text-gray-900'}`}
                  >
                    <span className="font-sans font-semibold text-[15px]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`ml-4 flex-shrink-0`}
                    >
                      <ChevronDown size={20} className={isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-800'} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="text-gray-600 p-6 pt-4 leading-relaxed text-sm bg-white">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
