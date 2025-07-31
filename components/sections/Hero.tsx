'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Clock, DollarSign, Phone, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [showToast, setShowToast] = useState(false);

  const phoneNumber = '(813) 555-0123';
  const rawPhoneNumber = '8135550123';

  const scrollToForm = () => {
    triggerConfetti();
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ff7f50', '#ffbf00', '#00bfff', '#32cd32'],
    });
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(rawPhoneNumber).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Tampa Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-32 pb-20">
          <motion.h1
            className="text-4xl md:text-7xl font-bold font-poppins leading-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sell Your Tampa Home{' '}
            <span className="text-primary animate-pulse">Fast for Cash</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            No Repairs. No Fees. Get a{' '}
            <span className="text-primary font-semibold">Fair Offer</span> in 24
            Hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            {/* Left CTA with Confetti */}
            <Button
              onClick={scrollToForm}
              size="lg"
              className="relative overflow-hidden bg-primary px-10 py-4 text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
            >
              <span className="relative z-10">Get My Cash Offer Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 opacity-30 animate-pulse" />
            </Button>

            {/* Phone CTA */}
            <a
              href={`tel:${rawPhoneNumber}`}
              onClick={handlePhoneClick}
              className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">{phoneNumber}</span>
            </a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Home, title: 'Any Condition', desc: 'We buy houses as-is' },
              { icon: Clock, title: '24 Hour Offers', desc: 'Quick response guaranteed' },
              { icon: DollarSign, title: 'Fair Cash Offers', desc: 'No lowball offers' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Phone number copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
