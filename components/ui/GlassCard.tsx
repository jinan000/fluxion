'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hover?: boolean;
  tilt?: boolean;
  glowColor?: string;
}

export default function GlassCard({
  children,
  className = '',
  id,
  hover = true,
  tilt = true,
  glowColor = 'rgba(27, 77, 84, 0.15)',
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setRotateX((y - 0.5) * -8);
    setRotateY((x - 0.5) * 8);
    setGlowPosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      className={`
        relative overflow-hidden rounded-2xl
        glass-light shadow-premium
        transition-shadow duration-500
        hover:shadow-premium-hover
        ${className}
      `}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      data-cursor-hover
    >
      {/* Dynamic glow effect following mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
          opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
        }}
      />

      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            padding: '1px',
            background: 'linear-gradient(135deg, rgba(27, 77, 84, 0.4), rgba(35, 107, 117, 0.2), rgba(15, 30, 51, 0.4))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
