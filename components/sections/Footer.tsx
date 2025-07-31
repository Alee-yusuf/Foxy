'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-poppins font-bold text-xl">Foxy Home Buyer</span>
            </div>
            <p className="text-gray-300 mb-4">
              Tampa Bay&apos;s trusted cash home buyer since 2014. We help homeowners sell fast with fair, no-obligation offers.
            </p>
            <div className="text-sm text-gray-400">
              Licensed & Insured • A+ BBB Rating
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href="tel:8135550123" className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(813) 555-0123</span>
              </a>
              <a href="mailto:info@foxyhomebuyer.com" className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@foxyhomebuyer.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>123 Main Street<br />Tampa, FL 33601</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hillsborough County</li>
              <li>Pinellas County</li>
              <li>Pasco County</li>
              <li>Polk County</li>
              <li>Manatee County</li>
              <li>Sarasota County</li>
              <li>Hernando County</li>
              <li>Citrus County</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
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
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-gray-700 rounded-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Serving All of Tampa Bay</h3>
            <p className="text-gray-300">
              From downtown Tampa to the Gulf Coast beaches, we buy houses throughout the region.
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-600 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Foxy Home Buyer. All rights reserved. | Licensed Real Estate Investor
          </p>
        </motion.div>
      </div>
    </footer>
  );
}