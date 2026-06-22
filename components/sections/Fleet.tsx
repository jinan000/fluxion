'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import GlassCard from '../ui/GlassCard';

const fleet = [
  {
    name: 'Heavy Duty Trucks',
    specs: ['40-Ton Payload', 'GPS Tracked', 'Long Haul Capable'],
    desc: 'Modern fleet of heavy-duty trucks for bulk cargo and container transportation across the GCC.',
    image: '/images/Cargo_vehicle.jpeg',
  },
  {
    name: 'Container Carriers',
    specs: ['20 & 40ft Containers', 'Port Operations', 'Fast Turnaround'],
    desc: 'Dedicated container chassis for seamless port-to-warehouse container movement.',
    image: '/images/cargo1.png',
  },
  {
    name: 'Flatbed Trailers',
    specs: ['Multi-Axle', 'Heavy Loads', 'Project Cargo'],
    desc: 'Open flatbed trailers for steel, machinery, and construction material transport.',
    image: '/images/Cargo.jpeg',
  },
  {
    name: 'Low Bed Trailers',
    specs: ['Up to 120 Tons', 'Hydraulic Ramp', 'Oversized Loads'],
    desc: 'Specialized low-bed trailers for heavy equipment, transformers, and industrial machinery.',
    image: '/images/Cargo_vehicle_i.jpeg',
  },
  {
    name: 'Specialized Vehicles',
    specs: ['Custom Solutions', 'Escort Ready', 'Permit Managed'],
    desc: 'Purpose-built transport vehicles for unique cargo requirements and special projects.',
    image: '/images/fleet-truck.png',
  },
];

// High-fidelity Animated SVG Icons
const TruckIcon = () => (
  <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
    <svg
      className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cab and Cargo body bounce */}
      <motion.g
        variants={{
          hover: { 
            y: [0, -1.5, 0.7, -0.7, 0], 
            transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" } 
          }
        }}
      >
        <path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8z" />
        <path d="M14 9h4l4 4v3a2 2 0 0 1-2 2h-6z" />
        <line x1="18" y1="9" x2="18" y2="13" />
      </motion.g>

      {/* Rotating Left Wheel - drawn at absolute coordinates with custom transformOrigin */}
      <motion.g
        variants={{
          hover: { rotate: 360 }
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "7.5px 18px" }}
      >
        <circle cx="7.5" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="18" x2="10" y2="18" stroke="currentColor" strokeWidth="0.75" />
        <line x1="7.5" y1="15.5" x2="7.5" y2="20.5" stroke="currentColor" strokeWidth="0.75" />
      </motion.g>

      {/* Rotating Right Wheel - drawn at absolute coordinates with custom transformOrigin */}
      <motion.g
        variants={{
          hover: { rotate: 360 }
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "16.5px 18px" }}
      >
        <circle cx="16.5" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="0.75" />
        <line x1="16.5" y1="15.5" x2="16.5" y2="20.5" stroke="currentColor" strokeWidth="0.75" />
      </motion.g>
    </svg>
  </div>
);

const GPSIcon = () => (
  <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
    <svg
      className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Radar waves pulsing from the base */}
      <motion.circle
        cx="12"
        cy="19"
        r="2"
        stroke="currentColor"
        strokeWidth="1"
        variants={{
          hover: { scale: [1, 3.5], opacity: [0.8, 0] }
        }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: '12px 19px' }}
      />
      <motion.circle
        cx="12"
        cy="19"
        r="2"
        stroke="currentColor"
        strokeWidth="1"
        variants={{
          hover: { scale: [1, 2.3], opacity: [0.8, 0] }
        }}
        transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: '12px 19px' }}
      />

      {/* Bouncing Pin */}
      <motion.path
        d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"
        variants={{
          hover: { y: [0, -4, 0], transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } }
        }}
      />
      <motion.circle
        cx="12"
        cy="10"
        r="3"
        fill="currentColor"
        variants={{
          hover: { y: [0, -4, 0], scale: [1, 1.15, 1], transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } }
        }}
      />
    </svg>
  </div>
);

const UptimeIcon = () => (
  <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
    <svg
      className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Rotating Cog */}
      <motion.g
        variants={{
          hover: { rotate: 360 }
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '12px 12px' }}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </motion.g>

      {/* Bouncing Wrench */}
      <motion.path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"
        variants={{
          hover: { rotate: [-10, 15, -10] }
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: '12px 12px' }}
      />
    </svg>
  </div>
);

const ShieldIcon = () => (
  <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
    <svg
      className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bouncing Shield */}
      <motion.path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        variants={{
          hover: { 
            scale: 1.08,
            rotate: [-3, 3, -3, 0],
            transition: { duration: 1, ease: "easeInOut" }
          }
        }}
        style={{ transformOrigin: '12px 12px' }}
      />

      {/* Checkmark drawing effect */}
      <motion.path
        d="M9 11l2 2 4-4"
        variants={{
          hover: { 
            pathLength: [0, 1],
            opacity: [0, 1],
            transition: { duration: 0.6, ease: "easeOut" }
          }
        }}
      />
    </svg>
  </div>
);


export default function Fleet() {
  const stats = [
    { icon: <TruckIcon />, value: '50+', label: 'Active Vehicles' },
    { icon: <GPSIcon />, value: '24/7', label: 'GPS Tracking' },
    { icon: <UptimeIcon />, value: '99%', label: 'Fleet Uptime' },
    { icon: <ShieldIcon />, value: '100%', label: 'Insured Fleet' },
  ];

  return (
    <section id="fleet" className="section-padding bg-white relative overflow-hidden" aria-label="FLUXION UAE Transport Fleet - Heavy Duty Trucks, Container Carriers, Low Bed Trailers UAE">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              FLUXION UAE Fleet
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Modern Transport{' '}
              <span className="gradient-text">Fleet</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              A state-of-the-art FLUXION UAE fleet designed for every cargo challenge — from standard
              containers to oversized project loads.
            </p>
          </div>
        </SectionReveal>

        {/* Horizontal scrolling gallery */}
        <div className="overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {fleet.map((vehicle, i) => (
              <SectionReveal key={vehicle.name} delay={i * 0.1}>
                <GlassCard className="w-[280px] sm:w-[340px] snap-center flex-shrink-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={vehicle.image}
                      alt={`FLUXION ${vehicle.name} - ${vehicle.desc}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="340px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-accent mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed mb-4">
                      {vehicle.desc}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2">
                      {vehicle.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Fleet stats */}
        <SectionReveal delay={0.3}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover="hover"
                className="group relative text-center p-4 sm:p-6 rounded-xl bg-bg-soft border border-black/5 hover:border-primary/10 hover:shadow-premium transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Micro-glow background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:to-secondary/[0.04] transition-all duration-300 pointer-events-none" />

                <div className="mb-3 relative z-10">{stat.icon}</div>
                <div className="text-2xl font-heading font-bold gradient-text relative z-10">{stat.value}</div>
                <div className="text-xs text-text-light mt-1 font-medium relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
