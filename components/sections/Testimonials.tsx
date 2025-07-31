'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Hillsborough County',
    rating: 5,
    text: 'Foxy Home Buyer made selling my inherited property so easy. They handled everything and closed in just 2 weeks. Couldn\'t be happier!',
    situation: 'Inherited Property'
  },
  {
    name: 'Mike Rodriguez',
    location: 'Pinellas County',
    rating: 5,
    text: 'After my divorce, I needed to sell quickly. They gave me a fair offer and closed on my timeline. Professional and compassionate.',
    situation: 'Divorce Sale'
  },
  {
    name: 'Jennifer Chen',
    location: 'Pasco County',
    rating: 5,
    text: 'Our house needed major repairs we couldn\'t afford. Foxy bought it as-is for a great price. No stress, no hassle!',
    situation: 'House Needed Repairs'
  },
  {
    name: 'Robert Williams',
    location: 'Polk County',
    rating: 5,
    text: 'We were relocating for work and needed to sell fast. They closed in 10 days and made the whole process smooth.',
    situation: 'Job Relocation'
  }
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      {/* Background Gradient + Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real Tampa Bay homeowners share their experiences with Foxy Home Buyer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 0.5 }}
              className="relative group"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-purple-200/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
              
              <Card className="relative h-full border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-primary/20" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-primary font-medium mt-1">{testimonial.situation}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10 shadow-xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-secondary">4.9/5 Rating</span>
            </div>
            <p className="text-lg text-gray-600">
              Based on <span className="font-semibold text-secondary">500+</span> verified reviews from local homeowners
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
