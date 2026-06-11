'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15 + 5;
        if (next >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col items-center"
            >
              <Image
                src="/images/logo.png"
                alt="FLUXION Logo"
                width={305}
                height={100}
                className="h-28 w-auto object-contain brightness-0 invert"
                priority
              />
              <motion.div
                className="h-px w-full mt-4 gradient-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Animated route lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48 relative"
            >
              <svg viewBox="0 0 200 30" className="w-full">
                <path
                  d="M 10 15 Q 50 5, 100 15 Q 150 25, 190 15"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2A717B" />
                    <stop offset="100%" stopColor="#253A5A" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-primary rounded-full"
                  style={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-xs text-white/50 text-center mt-3 font-body tracking-wider">
                {displayProgress}%
              </p>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                style={{
                  left: `${15 + i * 18}%`,
                  top: `${10 + i * 12}%`,
                }}
                animate={{
                  y: [0, 100, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
