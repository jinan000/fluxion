'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';

interface Country {
  id: string;
  name: string;
  x: number;
  y: number;
  cities: string[];
  desc: string;
}

const countries: Country[] = [
  { id: 'uae', name: 'United Arab Emirates', x: 62, y: 62, cities: ['Dubai', 'Abu Dhabi', 'Sharjah'], desc: 'HQ — Full customs clearance, freight forwarding & fleet operations.' },
  { id: 'ksa', name: 'Saudi Arabia', x: 32, y: 42, cities: ['Riyadh', 'Jeddah', 'Dammam'], desc: 'Cross-border cargo & overland freight across the Kingdom.' },
  { id: 'oman', name: 'Oman', x: 72, y: 72, cities: ['Muscat', 'Sohar', 'Salalah'], desc: 'Port logistics and container transport via Muscat & Sohar.' },
  { id: 'qatar', name: 'Qatar', x: 52, y: 50, cities: ['Doha'], desc: 'Direct freight corridor to Doha via Saudi transit routes.' },
  { id: 'kuwait', name: 'Kuwait', x: 44, y: 22, cities: ['Kuwait City'], desc: 'Northern GCC cargo corridor with customs brokerage.' },
  { id: 'bahrain', name: 'Bahrain', x: 48, y: 38, cities: ['Manama'], desc: 'Island-linked logistics via King Fahd Causeway.' },
];

const routes = [
  { from: 'uae', to: 'ksa' },
  { from: 'uae', to: 'oman' },
  { from: 'uae', to: 'qatar' },
  { from: 'ksa', to: 'kuwait' },
  { from: 'ksa', to: 'bahrain' },
  { from: 'ksa', to: 'qatar' },
  { from: 'qatar', to: 'bahrain' },
];

function getCountryPos(id: string) {
  const c = countries.find(c => c.id === id);
  return c ? { x: c.x, y: c.y } : { x: 0, y: 0 };
}

// Canvas-based moving dots (no React state in rAF)
function GCCCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size based on container
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
    });
    resizeObserver.observe(canvas.parentElement!);

    // Create dots with their own state (no React)
    const dots = routes.map(() => ({
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.002,
    }));

    let rafId: number;
    const animate = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      // Scale coordinates from 0-100 viewBox to actual canvas
      const sx = (v: number) => (v / 100) * w;
      const sy = (v: number) => (v / 100) * h;

      // Draw route lines
      routes.forEach(route => {
        const from = getCountryPos(route.from);
        const to = getCountryPos(route.to);
        ctx.beginPath();
        ctx.moveTo(sx(from.x), sy(from.y));
        ctx.lineTo(sx(to.x), sy(to.y));
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw moving dots
      dots.forEach((dot, i) => {
        dot.progress = (dot.progress + dot.speed) % 1;
        const route = routes[i];
        const from = getCountryPos(route.from);
        const to = getCountryPos(route.to);
        const x = sx(from.x + (to.x - from.x) * dot.progress);
        const y = sy(from.y + (to.y - from.y) * dot.progress);

        // Glow
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.35)';
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2fe';
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function GCCNetwork() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);

  const toggleCountry = useCallback((country: Country) => {
    setActiveCountry(prev => prev?.id === country.id ? null : country);
  }, []);

  return (
    <section id="network" className="section-padding gradient-accent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Connected Across the{' '}
              <span className="text-primary">GCC</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Our logistics network spans all six GCC nations, providing seamless cargo
              movement with dedicated routes and local expertise.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Map */}
          <SectionReveal direction="left" className="lg:col-span-3">
            <div className="relative aspect-[4/3] max-w-2xl mx-auto">
              {/* Canvas for animated dots (zero React re-renders) */}
              <GCCCanvas />

              {/* Static SVG for nodes/labels */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
                {/* Grid lines */}
                {[...Array(10)].map((_, i) => (
                  <g key={i}>
                    <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.2" />
                    <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.2" />
                  </g>
                ))}

                {/* Country nodes */}
                {countries.map((country) => (
                  <g
                    key={country.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleCountry(country)}
                    data-cursor-hover
                  >
                    {/* Pulse ring */}
                    <circle cx={country.x} cy={country.y} r="3" fill="none" stroke="#00f2fe" strokeWidth="0.3" opacity="0.3">
                      <animate attributeName="r" from="2" to="5" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Main dot */}
                    <circle
                      cx={country.x}
                      cy={country.y}
                      r={country.id === 'uae' ? 2.5 : 1.8}
                      fill={activeCountry?.id === country.id || country.id === 'uae' ? '#00f2fe' : 'rgba(255, 255, 255, 0.4)'}
                    />

                    {/* Label */}
                    <text
                      x={country.x}
                      y={country.y - 4}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.6)"
                      fontSize="2.2"
                      fontWeight="600"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {country.name === 'United Arab Emirates' ? 'UAE' : country.name}
                    </text>

                    {country.id === 'uae' && (
                      <text x={country.x} y={country.y + 5} textAnchor="middle" fill="#00f2fe" fontSize="1.6" fontWeight="bold">
                        HQ
                      </text>
                    )}
                  </g>
                ))}
              </svg>
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
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-white/5 border-white/5 hover:border-white/15'
                  }`}
                  data-cursor-hover
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activeCountry?.id === country.id ? 'bg-primary' : 'bg-white/20'
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
                            <span key={city} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
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
