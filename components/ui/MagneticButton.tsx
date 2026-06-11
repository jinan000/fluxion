'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.25;
    const y = (clientY - top - height / 2) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary:
      'gradient-primary text-white shadow-premium hover:shadow-premium-hover',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary/5',
  };

  const sharedClasses = `
    relative overflow-hidden inline-flex items-center justify-center gap-2
    font-heading font-semibold tracking-wide rounded-full
    transition-all duration-500 ease-out
    ${sizes[size]} ${variants[variant]} ${className}
  `;

  const inner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">{children}</span>
      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
      className="inline-block"
      data-cursor-hover
    >
      {href ? (
        <a href={href} className={sharedClasses} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type={type} className={sharedClasses} onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
