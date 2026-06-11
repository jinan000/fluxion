'use client';

import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';

const steps = [
  {
    num: '01',
    title: 'Inquiry',
    desc: 'Submit your cargo details and requirements through our digital portal.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Documentation',
    desc: 'Our experts prepare all customs and freight documentation.',
    icon: '📄',
  },
  {
    num: '03',
    title: 'Customs Clearance',
    desc: 'Licensed brokers handle customs processing at all UAE ports.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'Freight Planning',
    desc: 'Optimal routing and transport mode selection for your cargo.',
    icon: '🗺️',
  },
  {
    num: '05',
    title: 'Cargo Dispatch',
    desc: 'Your cargo is loaded and dispatched with our modern fleet.',
    icon: '🚛',
  },
  {
    num: '06',
    title: 'Real-Time Tracking',
    desc: 'Monitor your shipment with live GPS tracking and updates.',
    icon: '📍',
  },
  {
    num: '07',
    title: 'Successful Delivery',
    desc: 'Cargo delivered safely with proof of delivery confirmation.',
    icon: '🎯',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Our Logistics{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              A streamlined 7-step workflow designed for efficiency, transparency, and
              peace of mind.
            </p>
          </div>
        </SectionReveal>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <motion.div
              className="h-full gradient-primary"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {/* Connecting line - Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-px">
            <motion.div
              className="w-full gradient-primary"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {/* Steps - Desktop horizontal */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-4">
            {steps.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.15} direction="up">
                <div className="relative text-center group">
                  {/* Step circle */}
                  <motion.div
                    className="w-12 h-12 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-heading font-bold text-sm mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ boxShadow: '0 0 30px rgba(42,113,123,0.4)' }}
                  >
                    {step.num}
                  </motion.div>

                  {/* Icon */}
                  <div className="text-2xl mb-3">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-sm font-heading font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs text-text-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Steps - Mobile vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.1} direction="left">
                <div className="relative flex items-start gap-6 pl-4">
                  {/* Step circle */}
                  <motion.div
                    className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-heading font-bold text-xs flex-shrink-0 relative z-10"
                  >
                    {step.num}
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{step.icon}</span>
                      <h3 className="text-base font-heading font-semibold text-accent">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
