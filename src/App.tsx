/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import WhatsAppCTA from './components/WhatsAppCTA';
import Compliance from './components/Compliance';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import Equipment from './components/Equipment';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Compliance />
      <Services />
      <Equipment />
      <FAQ />
      <ContactForm />
      <CallToAction />
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
