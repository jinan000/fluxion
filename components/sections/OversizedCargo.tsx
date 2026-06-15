'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import AnimatedCounter from '../ui/AnimatedCounter';

const capabilities = [
  { value: 200, suffix: 'T', label: 'Max Payload Capacity' },
  { value: 50, suffix: 'm', label: 'Max Cargo Length' },
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: '', label: 'Countries Coverage' },
];

export default function OversizedCargo() {
  return (
    <section className="section-padding bg-bg-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <SectionReveal direction="left">
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
                Specialized Transport
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
                Oversized &amp; Heavy{' '}
                <span className="gradient-text">Cargo Experts</span>
              </h2>
              <p className="text-text-light text-lg leading-relaxed mb-8">
                When standard logistics won&apos;t do, FLUXION delivers. Our specialized fleet
                handles oversized machinery, industrial transformers, construction equipment,
                and project cargo with meticulous route planning and expert precision.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="p-5 rounded-xl bg-white shadow-premium">
                    <div className="text-2xl font-heading font-bold gradient-text">
                      <AnimatedCounter end={cap.value} suffix={cap.suffix} />
                    </div>
                    <div className="text-xs text-text-light mt-1">{cap.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  'Route surveys & permit management',
                  'Escort vehicle coordination',
                  'Crane & rigging services',
                  'Project cargo engineering',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Image */}
          <SectionReveal direction="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-premium-lg h-[480px] relative">
                <Image
                  src="/images/oversized-cargo.png"
                  alt="Oversized cargo transportation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-light rounded-xl px-6 py-4 shadow-premium-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-heading font-semibold text-accent">Fully Insured</div>
                    <div className="text-xs text-text-light">All cargo covered</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
