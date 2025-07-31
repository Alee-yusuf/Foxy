'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-20 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-10 text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58.17 6.15 113.79 25.09 172 28.67 54.7 3.36 110.33-10.75 164.59-24.66 59.7-15.38 117.2-34.71 177.39-38.38 86.37-5.24 172.43 13.89 258.8 19.35 53.68 3.45 107.51 2.18 161.31-.39v78.55H0V58.41c86.51 11.33 172.5-14.21 258.93-12.02 20.54.52 40.93 3.64 62.46 10.05z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Footer Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-poppins font-bold text-xl">Foxy Home Buyer</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tampa Bay&apos;s trusted cash home buyer since 2014. Sell your home fast
              with a fair, no-obligation offer.
            </p>
            <div className="text-sm text-gray-400 italic">
              Licensed &amp; Insured • A+ BBB Rating
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="tel:8135550123"
                className="flex items-center space-x-3 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(813) 555-0123</span>
              </a>
              <a
                href="mailto:info@foxyhomebuyer.com"
                className="flex items-center space-x-3 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@foxyhomebuyer.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 group-hover:scale-110 transition-transform" />
                <span>
                  123 Main Street
                  <br /> Tampa, FL 33601
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'Hillsborough County',
                'Pinellas County',
                'Pasco County',
                'Polk County',
                'Manatee County',
                'Sarasota County',
                'Hernando County',
                'Citrus County',
              ].map((area) => (
                <li
                  key={area}
                  className="hover:text-primary transition-colors cursor-default"
                >
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() =>
                    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-primary transition-colors"
                >
                  Get Cash Offer
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-0"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.3396054531118!2d-82.49233167618517!3d27.919347031531974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d18058b9663d%3A0x6e45263ffd90f060!2sFoxy%20Home%20Buyer!5e0!3m2!1sen!2s!4v1753992361602!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-t-3xl shadow-2xl"
        ></iframe>

        {/* Bottom Bar Over Map */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md text-center py-4">
          <p className="text-gray-200 text-sm">
            © 2024 Foxy Home Buyer. All rights reserved. | Licensed Real Estate Investor
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
