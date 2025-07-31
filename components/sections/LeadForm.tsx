'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Clock, CheckCircle2, User, Home } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Enter a valid phone number.' }),
  email: z.string().email({ message: 'Enter a valid email.' }),
  address: z.string().min(5, { message: 'Enter your property address.' }),
});

export default function LeadFormCreative() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', phone: '', email: '', address: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // fake API delay
    await new Promise((res) => setTimeout(res, 1500));

    setIsSubmitted(true);
    form.reset();

    // Confetti blast 
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    setIsSubmitting(false);
  }

  return (
    <section id="lead-form" className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
      {/* Animated BG Accent */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 6 }} 
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-secondary mb-4">
            Get Your Cash Offer in 24 Hours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Sell your Tampa Bay home <span className="font-semibold text-primary">fast, fair & stress-free</span>.
            Fill out this quick form and we’ll call you with your cash offer.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                      {[
                        { name: 'name', label: 'Full Name', placeholder: 'John Doe', icon: User },
                        { name: 'phone', label: 'Phone Number', placeholder: '(813) 555-0123', icon: Phone },
                        { name: 'email', label: 'Email Address', placeholder: 'you@email.com', icon: Mail },
                        { name: 'address', label: 'Property Address', placeholder: '123 Main St, Tampa, FL', icon: Home },
                      ].map((field, idx) => (
                        <FormField
                          key={field.name}
                          control={form.control}
                          name={field.name as any}
                          render={({ field: f }) => (
                            <FormItem>
                              <FormLabel>{field.label}</FormLabel>
                              <div className="relative">
                                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <FormControl>
                                  <Input className="pl-12" placeholder={field.placeholder} {...f} />
                                </FormControl>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2"
                      >
                        {isSubmitting && (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                        )}
                        {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
                      </motion.button>

                      <p className="text-center text-sm text-gray-500">
                        🔒 <span className="font-medium text-secondary">Secure & Confidential.</span> No obligations.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-primary/10 rounded-3xl">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-poppins text-secondary mb-3">
                    Thank You!
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    We’ve received your info and will call you shortly with your cash offer.
                  </p>
                  <p className="text-primary font-semibold">Typical response: under 4 hours</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
