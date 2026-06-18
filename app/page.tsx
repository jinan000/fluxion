'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SmoothScrollProvider from '@/lib/smooth-scroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import GCCNetwork from '@/components/sections/GCCNetwork';
import OversizedCargo from '@/components/sections/OversizedCargo';
import Fleet from '@/components/sections/Fleet';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import ScrollProgress from '@/components/ui/ScrollProgress';
import LoadingScreen from '@/components/ui/LoadingScreen';

// Dynamic import for custom cursor (client-only, no SSR)
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Custom Cursor */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <GCCNetwork />
        <OversizedCargo />
        <Fleet />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScrollProvider>
  );
}
