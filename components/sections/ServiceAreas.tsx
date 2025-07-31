'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, CheckCircle, Check } from 'lucide-react';

const counties = [
  { name: 'Hillsborough', cities: ['Tampa', 'Brandon', 'Valrico', 'Riverview'] },
  { name: 'Pinellas', cities: ['St. Petersburg', 'Clearwater', 'Largo', 'Pinellas Park'] },
  { name: 'Pasco', cities: ['New Port Richey', 'Zephyrhills', 'Wesley Chapel', 'Land O\' Lakes'] },
  { name: 'Polk', cities: ['Lakeland', 'Winter Haven', 'Bartow', 'Haines City'] },
  { name: 'Manatee', cities: ['Bradenton', 'Palmetto', 'Anna Maria', 'Ellenton'] },
  { name: 'Sarasota', cities: ['Sarasota', 'Venice', 'North Port', 'Osprey'] },
  { name: 'Hernando', cities: ['Spring Hill', 'Brooksville', 'Weeki Wachee', 'Masaryktown'] },
  { name: 'Citrus', cities: ['Crystal River', 'Inverness', 'Homosassa', 'Lecanto'] }
];

export default function ServiceAreas() {
  const [showToast, setShowToast] = useState(false);
  const phoneNumber = '(813) 555-0123';
  const rawPhone = '8135550123';

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(rawPhone).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    }
  };

  return (
    <>
      <section id="service-areas" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

        <div className="relative container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
              We Buy Houses Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving 8 Florida counties with fast, fair cash offers.  
              <br className="hidden md:block"/> 
              No matter where your property is, we can help.
            </p>
          </motion.div>

          {/* County Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {counties.map((county, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-blue-200/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                
                <Card className="relative h-full border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                        <MapPin className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform" />
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-secondary">
                        {county.name} County
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {county.cities.map((city, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-gray-600">{city}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto border border-primary/10 shadow-xl">
              <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
                Don&apos;t See Your Area Listed?
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re always expanding. Call us today to check if we can buy your property.
              </p>
              <a 
                href={`tel:${rawPhone}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center space-x-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                <span>Call Us: {phoneNumber}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Animated Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 bg-black/90 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50"
          >
            <Check className="w-5 h-5 text-green-400" />
            <span>Phone number copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
