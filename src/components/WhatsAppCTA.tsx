import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/971502406139" // Updated with user's real number
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_12px_40px_rgb(37,211,102,0.4)] hover:bg-[#1ebd57] transition-all hover:scale-110 group cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" className="group-hover:scale-110 transition-transform" />
      
      {/* Dynamic Tooltip */}
      <div className="absolute right-20 bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
        Chat with an Expert
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-t border-r border-gray-100" />
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40" />
    </motion.a>
  );
}
