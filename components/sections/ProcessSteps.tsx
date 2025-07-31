'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, Banknote } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Request Offer',
    description: 'Fill out our simple form or call us. We\'ll schedule a quick property visit.',
    step: '01'
  },
  {
    icon: FileText,
    title: 'Get Your Offer',
    description: 'Receive a fair, no-obligation cash offer within 24 hours.',
    step: '02'
  },
  {
    icon: Banknote,
    title: 'Close & Get Paid',
    description: 'Choose your closing date and get paid cash at closing.',
    step: '03'
  }
];

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selling your home for cash has never been easier. Our simple 3-step process gets you cash fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
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
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold text-secondary">No Obligation.</span> 
            <span className="mx-2">•</span>
            <span className="font-semibold text-secondary">No Repairs Needed.</span>
            <span className="mx-2">•</span>
            <span className="font-semibold text-secondary">No Fees.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}