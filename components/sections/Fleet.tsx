'use client';

import Image from 'next/image';
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

export default function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Our Fleet
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Modern Transport{' '}
              <span className="gradient-text">Fleet</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              A state-of-the-art fleet designed for every cargo challenge — from standard
              containers to oversized project loads.
            </p>
          </div>
        </SectionReveal>

        {/* Horizontal scrolling gallery */}
        <div className="overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {fleet.map((vehicle, i) => (
              <SectionReveal key={vehicle.name} delay={i * 0.1}>
                <GlassCard className="w-[340px] snap-center flex-shrink-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
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
            {[
              { icon: '🚛', value: '50+', label: 'Active Vehicles' },
              { icon: '📍', value: '24/7', label: 'GPS Tracking' },
              { icon: '🔧', value: '99%', label: 'Fleet Uptime' },
              { icon: '🛡️', value: '100%', label: 'Insured Fleet' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-bg-soft">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl font-heading font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-text-light mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
