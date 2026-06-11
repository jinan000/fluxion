'use client';

import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { StaggerContainer, StaggerItem } from '../ui/SectionReveal';
import AnimatedCounter from '../ui/AnimatedCounter';

const advantages = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Full GCC Coverage',
    desc: 'Seamless logistics across all six Gulf nations.',
    stat: { value: 6, suffix: '', label: 'Countries' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Customs Clearance',
    desc: 'Expedited processing across all UAE ports.',
    stat: { value: 24, suffix: 'h', label: 'Avg. Clear Time' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Freight Expertise',
    desc: 'Air, sea, and land forwarding solutions.',
    stat: { value: 10000, suffix: '+', label: 'Shipments/Year' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Reliable Transportation',
    desc: 'GPS-tracked fleet with 99% uptime.',
    stat: { value: 99, suffix: '%', label: 'On-Time Rate' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Dedicated Support',
    desc: '24/7 multilingual support team.',
    stat: { value: 24, suffix: '/7', label: 'Support' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Best rates with transparent billing.',
    stat: { value: 30, suffix: '%', label: 'Cost Savings' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Real-Time Updates',
    desc: 'Live cargo tracking and notifications.',
    stat: { value: 100, suffix: '%', label: 'Visibility' },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Secure Operations',
    desc: 'Fully insured with ISO-certified protocols.',
    stat: { value: 100, suffix: '%', label: 'Insured' },
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-bg-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              The FLUXION{' '}
              <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              What sets us apart as the GCC&apos;s most trusted logistics partner.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-white shadow-premium hover:shadow-premium-hover transition-all duration-500 h-full"
                data-cursor-hover
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-500">
                  {adv.icon}
                </div>

                <h3 className="text-lg font-heading font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                  {adv.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {adv.desc}
                </p>

                {/* Animated stat */}
                <div className="pt-4 border-t border-bg-soft">
                  <div className="text-xl font-heading font-bold gradient-text">
                    <AnimatedCounter end={adv.stat.value} suffix={adv.stat.suffix} />
                  </div>
                  <div className="text-xs text-text-light">{adv.stat.label}</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
