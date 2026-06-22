'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionReveal from '../ui/SectionReveal';

const services = [
  'Customs Clearance',
  'Freight Forwarding',
  'Container Transport',
  'GCC Cargo Movement',
  'Oversized Cargo',
  'Cross-Border Logistics',
];

const gccLocations = [
  'Dubai, UAE',
  'Abu Dhabi, UAE',
  'Sharjah, UAE',
  'Riyadh, KSA',
  'Jeddah, KSA',
  'Muscat, Oman',
  'Doha, Qatar',
  'Kuwait City',
  'Manama, Bahrain',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'GCC Network', href: '#network' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fluxion_uae?igsh=MXV1amV1N2M2ZjFwYQ==',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971589250501',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-soft overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px w-full gradient-primary" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <SectionReveal direction="up" delay={0}>
            <div>
              <Image
                src="/images/logo.png"
                alt="FLUXION Logo"
                width={1548}
                height={509}
                className="h-14 w-auto object-contain mb-4"
              />
              <p className="text-text-light text-sm leading-relaxed mb-6">
                FLUXION UAE provides premium customs clearance, freight forwarding, and cargo transportation
                solutions connecting businesses across the GCC.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href || '#'}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-text-light hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    data-cursor-hover
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Quick Links */}
          <SectionReveal direction="up" delay={0.1}>
            <nav aria-label="Quick Links">
              <h4 className="text-sm font-heading font-semibold tracking-wider text-accent uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`/${link.href}`}
                      onClick={(e) => handleScrollClick(e, link.href)}
                      className="text-sm text-text-light hover:text-primary transition-colors duration-300"
                      data-cursor-hover
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SectionReveal>

          {/* Services */}
          <SectionReveal direction="up" delay={0.2}>
            <nav aria-label="Services">
              <h4 className="text-sm font-heading font-semibold tracking-wider text-accent uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/#services"
                      onClick={(e) => handleScrollClick(e, '#services')}
                      className="text-sm text-text-light hover:text-primary transition-colors duration-300"
                      data-cursor-hover
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SectionReveal>

          {/* GCC Network & Newsletter */}
          <SectionReveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-sm font-heading font-semibold tracking-wider text-accent uppercase mb-6">
                GCC Locations
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {gccLocations.map((loc) => (
                  <span
                    key={loc}
                    className="text-xs text-text-light bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              {/* Newsletter */}
              <h4 className="text-sm font-heading font-semibold tracking-wider text-accent uppercase mb-4">
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm text-accent placeholder:text-text-light/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-primary text-white px-5 py-2.5 rounded-full text-sm font-medium"
                  data-cursor-hover
                >
                  Join
                </motion.button>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light/80">
            © {new Date().getFullYear()} FLUXION UAE. All rights reserved. Sharjah, UAE.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-light/80 hover:text-primary transition-colors" data-cursor-hover>
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-text-light/80 hover:text-primary transition-colors" data-cursor-hover>
              Terms of Service
            </a>
            <a href="#" className="text-xs text-text-light/80 hover:text-primary transition-colors" data-cursor-hover>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
