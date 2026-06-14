'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { Globe } from '../ui/globe';

interface Country {
  id: string;
  name: string;
  lat: number;
  lng: number;
  cities: string[];
  desc: string;
}

const countries: Country[] = [
  { id: 'uae', name: 'United Arab Emirates', lat: 24.4539, lng: 54.3773, cities: ['Dubai', 'Abu Dhabi', 'Sharjah'], desc: 'HQ — Full customs clearance, freight forwarding & fleet operations.' },
  { id: 'ksa', name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, cities: ['Riyadh', 'Jeddah', 'Dammam'], desc: 'Cross-border cargo & overland freight across the Kingdom.' },
  { id: 'oman', name: 'Oman', lat: 21.4735, lng: 55.9754, cities: ['Muscat', 'Sohar', 'Salalah'], desc: 'Port logistics and container transport via Muscat & Sohar.' },
  { id: 'qatar', name: 'Qatar', lat: 25.3548, lng: 51.1839, cities: ['Doha'], desc: 'Direct freight corridor to Doha via Saudi transit routes.' },
  { id: 'kuwait', name: 'Kuwait', lat: 29.3117, lng: 47.4818, cities: ['Kuwait City'], desc: 'Northern GCC cargo corridor with customs brokerage.' },
  { id: 'bahrain', name: 'Bahrain', lat: 26.0667, lng: 50.5577, cities: ['Manama'], desc: 'Island-linked logistics via King Fahd Causeway.' },
];

export default function GCCNetwork() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);

  const toggleCountry = useCallback((country: Country) => {
    setActiveCountry(prev => prev?.id === country.id ? null : country);
  }, []);

  const activeLocation = useMemo<[number, number] | null>(() => {
    return activeCountry ? [activeCountry.lat, activeCountry.lng] : null;
  }, [activeCountry]);

  // Dynamically update the marker sizes on the globe based on active country selection
  const globeConfig = useMemo(() => {
    return {
      markers: countries.map((c) => ({
        location: [c.lat, c.lng] as [number, number],
        size: activeCountry?.id === c.id 
          ? 0.12 
          : (c.id === 'uae' ? 0.08 : 0.05),
      })),
    };
  }, [activeCountry]);

  return (
    <section id="network" className="section-padding bg-gradient-to-br from-accent to-[#0D2340] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Connected Across the{' '}
              <span className="text-secondary">GCC</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Our logistics network spans all six GCC nations, providing seamless cargo
              movement with dedicated routes and local expertise.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Interactive Globe Container */}
          <SectionReveal direction="left" className="lg:col-span-3">
            <div className="relative w-full aspect-square max-h-[500px] md:max-h-[550px] lg:max-h-[600px] overflow-hidden flex items-center justify-center">
              {/* The 3D Globe Component */}
              <Globe 
                className="z-0"
                activeLocation={activeLocation}
                config={globeConfig}
              />

              {/* Interactive Help Hint Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-20 pointer-events-none flex items-center gap-2">
                <svg className="w-4 h-4 text-secondary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span className="text-[10px] tracking-wider text-white/70 uppercase font-medium">
                  {activeCountry ? `${activeCountry.name} Selected` : 'Drag to rotate globe'}
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Country Info Panel */}
          <SectionReveal direction="right" className="lg:col-span-2">
            <div className="space-y-4">
              {countries.map((country) => (
                <motion.div
                  key={country.id}
                  onClick={() => toggleCountry(country)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeCountry?.id === country.id
                      ? 'bg-secondary/10 border-secondary/30'
                      : 'bg-white/5 border-white/5 hover:border-white/15'
                  }`}
                  data-cursor-hover
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activeCountry?.id === country.id ? 'bg-secondary' : 'bg-white/20'
                    } transition-colors`} />
                    <h4 className="text-white font-heading font-semibold text-sm">{country.name}</h4>
                  </div>

                  <AnimatePresence>
                    {activeCountry?.id === country.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/40 text-sm mt-3 ml-6">{country.desc}</p>
                        <div className="flex gap-2 mt-3 ml-6 flex-wrap">
                          {country.cities.map((city) => (
                            <span key={city} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                              {city}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
