'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, DollarSign } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const formSection = document.getElementById('lead-form');
      
      if (formSection) {
        const formTop = formSection.offsetTop;
        const formBottom = formTop + formSection.offsetHeight;
        
        // Show when scrolled past hero but before form
        setIsVisible(scrollY > windowHeight && scrollY < formTop - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMinimized(true);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0, x: 50, y: 50 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!isMinimized ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm"
          >
            <button
              onClick={() => setIsMinimized(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-secondary">Ready to Sell?</div>
                <div className="text-sm text-gray-600">Get your cash offer today</div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get My Cash Offer
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              No obligation • Fast response
            </p>
          </motion.div>
        ) : (
          <Button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110 animate-glow"
          >
            <DollarSign className="w-5 h-5 mr-2" />
            Get Offer
          </Button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}