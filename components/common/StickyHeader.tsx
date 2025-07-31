'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, CheckCircle } from 'lucide-react';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const phoneNumber = '(813) 555-0123';
  const rawPhoneNumber = '8135550123';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // ✅ CTA click par hi confetti
  const handleCTAClick = () => {
    triggerConfetti();
    scrollToSection('lead-form');
  };

  // 🎉 Confetti function
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ff7f50', '#ffbf00', '#00bfff', '#32cd32'],
    });
  };

  // ✅ Phone click handler
  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      // Desktop → Copy to clipboard + Show toast
      e.preventDefault();
      navigator.clipboard.writeText(rawPhoneNumber).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    }
    // Mobile → tel: link will trigger automatically
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Service Areas', id: 'service-areas' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-2 border-b border-white/20' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className={`font-poppins font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}>
              Foxy Home Buyer
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm font-medium group transition ${
                    isScrolled ? 'text-secondary' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <a 
              href={`tel:${rawPhoneNumber}`}
              onClick={handlePhoneClick}
              className={`flex items-center space-x-2 hover:text-primary transition-colors duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">{phoneNumber}</span>
            </a>
            <Button 
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-primary/30 transition-transform duration-300 hover:scale-105"
            >
              Get Cash Offer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <Button 
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Get Offer
            </Button>
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t rounded-b-xl overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-secondary hover:text-primary transition text-left font-medium py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </button>
                ))}
                <a 
                  href={`tel:${rawPhoneNumber}`}
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 text-secondary hover:text-primary transition-colors duration-300 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{phoneNumber}</span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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
