import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-sans text-2xl font-black tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          POOL<span className="text-brand-turquoise">PRO</span>
        </a>
        
        {/* Links - Center */}
        <nav className="hidden lg:flex space-x-8 items-center absolute left-1/2 -translate-x-1/2">
          {['Services', 'Reviews', 'FAQ', 'Compliance'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[13px] tracking-widest uppercase font-bold transition-colors ${
                isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="tel:+971502406139" 
            className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <Phone size={16} className="text-brand-turquoise" />
            +971 50 240 6139
          </a>
          <a
            href="#contact"
            className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white px-6 py-2.5 rounded-full text-[13px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-brand-turquoise/20"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden cursor-pointer p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-turquoise focus:outline-none transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-8 flex flex-col space-y-6 border-t border-gray-100">
          {['Services', 'Reviews', 'FAQ', 'Compliance'].map((item) => (
             <a
             key={item}
             href={`#${item.toLowerCase()}`}
             className="text-gray-900 font-bold tracking-[0.2em] uppercase text-xs border-b border-gray-50 pb-2"
             onClick={() => setMobileMenuOpen(false)}
           >
             {item}
           </a>
          ))}
          <a
            href="mailto:arkatayen@gmail.com"
            className="flex items-center gap-3 text-gray-600 font-medium text-sm pt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            arkatayen@gmail.com
          </a>
          <a
            href="#contact"
            className="bg-brand-turquoise text-center text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </motion.header>
  );
}
