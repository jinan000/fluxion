'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { StaggerContainer, StaggerItem } from '../ui/SectionReveal';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 6, suffix: '', label: 'GCC Countries Served' },
  { value: 5000, suffix: '+', label: 'Annual Shipments' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const milestones = [
  { year: '2009', title: 'Founded in Sharjah', desc: 'Established as a customs clearance specialist in Sharjah FTZ.' },
  { year: '2013', title: 'GCC Expansion', desc: 'Extended freight forwarding operations across the Gulf region.' },
  { year: '2017', title: 'Fleet Modernization', desc: 'Invested in heavy transport fleet for oversized cargo operations.' },
  { year: '2021', title: 'Digital Transformation', desc: 'Launched real-time cargo tracking and digital documentation.' },
  { year: '2024', title: 'Regional Leadership', desc: 'Became one of the leading logistics providers in the GCC corridor.' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-soft relative overflow-hidden" aria-label="About Fluxion Logistics - Your Trusted GCC Logistics Partner">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <SectionReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              About Fluxion UAE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Your Trusted GCC{' '}
              <span className="gradient-text">Logistics Partner</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto leading-relaxed">
              Headquartered in Sharjah, UAE, Fluxion UAE delivers premium customs clearance and
              freight forwarding excellence across the entire Gulf Cooperation Council region.
            </p>
          </div>
        </SectionReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <SectionReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-premium-lg h-[440px]">
              <Image
                src="/images/about.png"
                alt="FLUXION Logistics Operations Center in Sharjah UAE - Customs clearance and freight forwarding headquarters"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Floating stat card */}
              <motion.div
                className="absolute bottom-6 right-6 glass-dark rounded-xl px-6 py-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-2xl font-heading font-bold text-primary">ISO 9001</div>
                <div className="text-xs text-white/50">Certified Operations</div>
              </motion.div>
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-accent mb-6">
                Excellence in Every Shipment
              </h3>
              <p className="text-text-light leading-relaxed mb-6">
                Since our founding, FLUXION UAE has been at the forefront of logistics innovation
                in the Gulf region. We specialize in customs clearance, freight forwarding,
                container transportation, and project cargo handling — serving multinational
                corporations, government projects, and industrial clients.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                Our team of certified customs experts and logistics professionals ensures
                seamless cargo movement across all six GCC nations. With a modern fleet,
                digital tracking systems, and decades of regional expertise, we transform
                complex logistics challenges into smooth operations.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Licensed Customs Broker',
                  'Real-Time Tracking',
                  'ISO Certified',
                  'GCC-Wide Network',
                  'Dedicated Support',
                  'Competitive Pricing',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" stagger={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-8 rounded-2xl bg-white shadow-premium hover:shadow-premium-hover transition-shadow duration-500">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-text-light">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <SectionReveal>
          <div className="relative">
            <h3 className="text-2xl font-heading font-bold text-accent text-center mb-12">
              Our Journey
            </h3>

            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-20 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, i) => (
                <SectionReveal
                  key={milestone.year}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  delay={i * 0.1}
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-12 mb-8 ${
                    i % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}>
                    <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'} mb-4 md:mb-0`}>
                      <span className="text-primary font-heading font-bold text-xl">{milestone.year}</span>
                      <h4 className="text-lg font-heading font-semibold text-accent mt-1">{milestone.title}</h4>
                      <p className="text-sm text-text-light mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
