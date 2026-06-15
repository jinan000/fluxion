'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';

const testimonials = [
  {
    quote: 'FLUXION transformed our supply chain operations across the GCC. Their customs clearance speed is unmatched, and the dedicated account team truly understands our business needs.',
    name: 'Ahmed Al-Rashidi',
    title: 'VP Supply Chain',
    company: 'Gulf Industrial Group',
    rating: 5,
  },
  {
    quote: 'When we needed to transport a 150-ton transformer from Jebel Ali to Riyadh, FLUXION handled every detail — permits, route planning, escort vehicles. Flawless execution.',
    name: 'Sarah Mitchell',
    title: 'Project Director',
    company: 'Atlas Construction',
    rating: 5,
  },
  {
    quote: 'Their digital tracking system gives us real-time visibility across all our shipments. The level of transparency and professionalism is exactly what we needed for our regional expansion.',
    name: 'Khalid bin Omar',
    title: 'Logistics Manager',
    company: 'Al Masa Trading LLC',
    rating: 5,
  },
  {
    quote: 'We\'ve worked with many freight forwarders, but FLUXION stands apart. Their customs expertise saves us days on every shipment, and their competitive rates give us a real edge.',
    name: 'Priya Sharma',
    title: 'Operations Director',
    company: 'Pan Gulf Imports',
    rating: 5,
  },
  {
    quote: 'FLUXION\'s cross-border capabilities are exceptional. They handle all the complexity of moving cargo between GCC countries so we can focus on growing our business.',
    name: 'Mohammad Al-Balushi',
    title: 'CEO',
    company: 'Oman Freight Solutions',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-gradient-to-br from-accent to-[#0D2340] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Trusted by{' '}
              <span className="text-secondary">Industry Leaders</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[280px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-3 flex items-center justify-center text-white font-heading font-bold text-lg">
                  {testimonials[current].name[0]}
                </div>
                <div className="text-white font-heading font-semibold">
                  {testimonials[current].name}
                </div>
                <div className="text-white/40 text-sm">
                  {testimonials[current].title}, {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-secondary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              data-cursor-hover
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
