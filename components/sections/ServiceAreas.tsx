'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, CheckCircle } from 'lucide-react';

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
  return (
    <section id="service-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            We Buy Houses Throughout Tampa Bay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving 8 Florida counties with fast, fair cash offers. No matter where your property is located, we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {counties.map((county, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
              Don't See Your Area Listed?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always expanding our service area. Call us to see if we can help with your property.
            </p>
            <a 
              href="tel:8135550123"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Call Us Today</span>
              <span>(813) 555-0123</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}