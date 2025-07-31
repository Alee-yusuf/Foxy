'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToForm = () => {
    scrollToSection('lead-form');
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Service Areas', id: 'service-areas' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className={`font-poppins font-bold text-xl ${
            isScrolled ? 'text-secondary' : 'text-white'
          }`}>
            Foxy Home Buyer
          </span>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium hover:text-primary transition-colors duration-300 relative group ${
                  isScrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </nav>

        {/* Desktop Right Side - Phone & CTA */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <a 
            href="tel:8135550123" 
            className={`flex items-center space-x-2 hover:text-primary transition-colors duration-300 ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(813) 555-0123</span>
          </a>
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Cash Offer
          </Button>
        </div>

        {/* Tablet Navigation (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center space-x-4 flex-1 justify-end">
          <a 
            href="tel:8135550123" 
            className={`flex items-center space-x-2 hover:text-primary transition-colors duration-300 ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(813) 555-0123</span>
          </a>
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Get Offer
          </Button>
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-3">
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold text-sm"
          >
            Get Offer
          </Button>
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t lg:hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary hover:text-primary transition-colors duration-300 text-left font-medium py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <a 
                    href="tel:8135550123"
                    className="flex items-center space-x-3 text-secondary hover:text-primary transition-colors duration-300 py-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">(813) 555-0123</span>
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}