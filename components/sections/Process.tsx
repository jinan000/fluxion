'use client';

import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';

const steps = [
  {
    num: '01',
    title: 'Inquiry',
    desc: 'Submit your cargo details and requirements through our digital portal.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Documentation',
    desc: 'Our experts prepare all customs and freight documentation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Customs Clearance',
    desc: 'Licensed brokers handle customs processing at all UAE ports.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Freight Planning',
    desc: 'Optimal routing and transport mode selection for your cargo.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Cargo Dispatch',
    desc: 'Your cargo is loaded and dispatched with our modern fleet.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Real-Time Tracking',
    desc: 'Monitor your shipment with live GPS tracking and updates.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Successful Delivery',
    desc: 'Cargo delivered safely with proof of delivery confirmation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
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
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px">
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
                  <div className="flex justify-center items-center text-primary mb-3">{step.icon}</div>

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
                      <span className="text-primary">{step.icon}</span>
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
