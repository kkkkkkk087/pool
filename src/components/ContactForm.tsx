import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, ShieldCheck, Star, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

// Define validation schema for leads
const leadSchema = z.object({
  firstName: z.string().min(2, "First name is too short").max(50),
  lastName: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short").max(20),
  address: z.string().max(200).optional(),
  service: z.string().refine(val => val !== 'Select a service...', "Please select a service"),
  message: z.string().max(1000).optional()
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: 'Select a service...',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate with Zod
    const result = leadSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // HONEYPOT CHECK: If the 'website' field (hidden from humans) is filled, it's a bot.
    const honeyPotField = (e.target as any).website?.value;
    if (honeyPotField) {
      console.warn("Bot detected via honeypot.");
      // Pretend it was successful to the bot, but don't save anything
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'new',
        createdAt: serverTimestamp(),
      });

      setIsSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        service: 'Select a service...',
        message: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Info */}
        <div className="flex flex-col">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-turquoise font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Let's Talk
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8"
          >
            Get Your Free, <br/> No-Obligation Quote
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mb-12 max-w-lg leading-relaxed"
          >
            Tell us about your pool and we'll send a transparent quote within 24 hours. 
            No pressure, no sales pitch — just honest pricing from your Abu Dhabi neighbors.
          </motion.p>

          <div className="space-y-8 mb-12">
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                <Phone size={20} className="text-brand-turquoise" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call or Text Us</p>
                <a href="tel:+971502406139" className="text-lg font-bold text-gray-900 hover:text-brand-turquoise transition-colors">+971 50 240 6139</a>
                <p className="text-xs text-gray-400 mt-1">Official Office Hours: Sun-Thu 8am-5pm</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                <Mail size={20} className="text-brand-turquoise" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                <a href="mailto:arkatayen@gmail.com" className="text-lg font-bold text-gray-900 hover:text-brand-turquoise transition-colors">arkatayen@gmail.com</a>
                <p className="text-xs text-gray-400 mt-1">We reply within a few hours</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-200">
             <div className="flex items-center gap-2">
                <Star size={18} className="fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-gray-900">4.9★ on Google</span>
             </div>
             <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-turquoise" />
                <span className="text-sm font-bold text-gray-900">ISO 9001 Certified</span>
             </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                <p className="text-gray-400 text-sm mb-10">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - traps bots that auto-fill forms */}
                  <div className="absolute -top-[9999px] -left-[9999px]" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-900">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all`} 
                        required 
                      />
                      {errors.firstName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-900">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all`} 
                        required 
                      />
                      {errors.lastName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-900">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all`} 
                        required 
                      />
                      {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-900">Phone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all`} 
                        required 
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-900">Pool Address</label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, city, zip" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-900">What Can We Help With? *</label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all appearance-none cursor-pointer"
                      >
                        <option disabled>Select a service...</option>
                        <option>Weekly Maintenance</option>
                        <option>Chemical Balancing</option>
                        <option>Technical Repairs</option>
                        <option>Green Pool Recovery</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.service}</p>}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <Clock size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-900">Tell Us More</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Pool type (chlorine/saltwater), size, what's going on..." 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 focus:border-brand-turquoise transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input 
                      type="checkbox" 
                      id="privacyAgreed"
                      className="mt-1 w-4 h-4 text-brand-turquoise border-gray-300 rounded focus:ring-brand-turquoise cursor-pointer"
                      required
                    />
                    <label htmlFor="privacyAgreed" className="text-xs text-gray-500 leading-relaxed">
                      I agree to the processing of my personal data for the purpose of receiving a quote, in accordance with the 
                      <span className="text-brand-turquoise font-bold cursor-pointer hover:underline"> UAE Federal PDPL</span>.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-turquoise/20 mt-4 cursor-pointer flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-brand-turquoise" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Request Received!</h3>
                <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out. One of our specialists will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 text-brand-turquoise font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
