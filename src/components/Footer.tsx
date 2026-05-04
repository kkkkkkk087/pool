import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <a href="#" className="font-sans text-2xl font-black tracking-tight text-white">
              POOL<span className="text-brand-turquoise">PRO</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Premier provider of premium pool maintenance services for luxury residential and commercial estates.
              Expertise that guarantees crystal clear results.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-turquoise hover:text-white transition-all cursor-pointer">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {['Services', 'Reviews', 'FAQ', 'Compliance', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-brand-turquoise transition-colors cursor-pointer">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Service Areas</h4>
            <ul className="space-y-4 text-sm">
              {['Saadiyat Island', 'Yas Island', 'Al Reem Island', 'Khalifa City', 'Al Raha Gardens'].map((area) => (
                <li key={area}>
                  <span className="cursor-default">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <div className="flex gap-4 items-start">
              <Phone size={18} className="text-brand-turquoise shrink-0" />
              <div className="text-sm">
                <a href="tel:+971502406139" className="text-white font-bold mb-1 block hover:text-brand-turquoise transition-colors">+971 50 240 6139</a>
                <p>Available 24/7 for Support</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail size={18} className="text-brand-turquoise shrink-0" />
              <a href="mailto:arkatayen@gmail.com" className="text-sm hover:text-brand-turquoise transition-colors">arkatayen@gmail.com</a>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin size={18} className="text-brand-turquoise shrink-0" />
              <p className="text-sm">Business Bay, Abu Dhabi, UAE</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} PoolPro Maintenance. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
