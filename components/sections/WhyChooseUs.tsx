'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Wrench, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const features = [
  {
    icon: Shield,
    title: 'Local & Trusted Since 2014',
    description: 'Family-owned business serving Tampa Bay with thousands of satisfied homeowners.',
    benefits: ['A+ BBB Rating', 'Licensed & Insured', '500+ Homes Purchased'],
  },
  {
    icon: Wrench,
    title: 'No Fees, No Repairs',
    description: 'Sell your house exactly as-is. No cleaning, no fixing, no agent commissions.',
    benefits: ['No Agent Fees', 'No Closing Costs', 'No Repair Expenses'],
  },
  {
    icon: Heart,
    title: 'Sell As-Is, Any Condition',
    description: 'Whether it needs major repairs or is move-in ready, we buy houses in any condition.',
    benefits: ['Any Condition', 'Fast Closing', 'Fair Market Price'],
  },
];

export default function WhyChooseUs() {
  // ✅ Confetti function
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ff7f50', '#ffbf00', '#00bfff', '#32cd32'],
    });
  };

  const handleCTA = () => {
    triggerConfetti();
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            Why Choose Foxy Home Buyer?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another cash buyer. We&apos;re your neighbors, committed to helping Tampa Bay homeowners with fair, fast, and honest home sales.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border border-transparent bg-white shadow-lg hover:shadow-primary/30 rounded-2xl transition-all duration-300 relative overflow-hidden">
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300"></div>

                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-secondary font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-10"
        >
          <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-10 shadow-lg max-w-4xl mx-auto text-white relative overflow-hidden">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-poppins mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-6">
                Join hundreds of satisfied Tampa Bay homeowners who chose the fast, easy way to sell.
              </p>
              <button
                onClick={handleCTA}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get My Cash Offer Today
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
