'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Network', href: '#network' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled
            ? 'py-2 glass-light shadow-premium'
            : 'py-3 bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="relative z-10 flex items-center"
            data-cursor-hover
          >
            <Image
              src="/images/logo.png"
              alt="FLUXION Logo"
              width={1548}
              height={509}
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? 'h-12' : 'h-16'
              }`}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`/${link.href}`}
                onClick={(e) => scrollTo(e, link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-primary/10 ${
                  scrolled ? 'text-text hover:text-primary' : 'text-text-light hover:text-primary'
                }`}
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              variant="primary"
              size="sm"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Quote
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            data-cursor-hover
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 5 : 0,
              }}
              className="w-6 h-[2px] rounded-full bg-accent transition-colors"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-4 h-[2px] rounded-full bg-accent transition-colors"
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -7 : 0,
              }}
              className="w-6 h-[2px] rounded-full bg-accent transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9985] bg-white/95 backdrop-blur-xl lg:hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={`/${link.href}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-2xl font-heading font-semibold text-accent hover:text-primary transition-colors"
                  data-cursor-hover
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4">
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileOpen(false);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Quote
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
