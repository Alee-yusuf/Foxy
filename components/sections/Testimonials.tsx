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
    <section id='testimonials' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real Tampa Bay homeowners say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {testimonial.situation}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-secondary">4.9/5 Rating</span>
            </div>
            <p className="text-lg text-gray-600">
              Based on <span className="font-semibold text-secondary">500+</span> verified customer reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}