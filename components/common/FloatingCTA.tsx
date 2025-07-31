'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Track scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const formSection = document.getElementById('lead-form');

      if (formSection) {
        const formTop = formSection.offsetTop;
        setIsVisible(scrollY > windowHeight && scrollY < formTop - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-expand after 10s if minimized
  useEffect(() => {
    if (isMinimized) {
      const timer = setTimeout(() => setIsMinimized(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isMinimized]);

  // 🎉 Confetti on CTA click
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.8 },
      scalar: 1.1,
    });
  };

  const scrollToForm = () => {
    triggerConfetti();
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMinimized(true);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!isMinimized ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 max-w-sm relative overflow-hidden"
            whileHover={{ scale: 1.04 }}
          >
            {/* Subtle background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            <button
              onClick={() => setIsMinimized(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-3 relative z-10">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md"
              >
                <DollarSign className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <div className="font-bold text-secondary text-lg">Ready to Sell?</div>
                <div className="text-sm text-gray-600">Get your cash offer today</div>
              </div>
            </div>

            <Button
              onClick={scrollToForm}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get My Cash Offer
            </Button>

            <p className="text-xs text-gray-500 text-center mt-3 relative z-10">
              No obligation • Fast response
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 0px rgba(245,158,11,0)',
                '0 0 20px rgba(245,158,11,0.4)',
                '0 0 0px rgba(245,158,11,0)',
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Get Offer
            </Button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
