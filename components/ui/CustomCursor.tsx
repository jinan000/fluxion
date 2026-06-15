'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isMobileDevice, setIsMobileDevice] = useState(true);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const dotScale = useRef(1);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if device is touch-enabled / mobile
    const mobileQuery = window.matchMedia('(pointer: coarse)');
    setIsMobileDevice(mobileQuery.matches);
    
    if (mobileQuery.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    // 1. Snappy Dot: Follows mouse INSTANTLY in mousemove event to eliminate "spongy/laggy" feel
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${dotScale.current})`;
      }

      if (!isVisible.current) {
        isVisible.current = true;
        if (dot) dot.style.opacity = '1';
        if (ring) ring.style.opacity = '1';
      }
    };

    // 2. Smooth Ring: Continues using animation frame interpolation for fluid trailing effect
    const updateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updateRing);
    };

    const handleMouseDown = () => {
      dotScale.current = 0.6;
      if (dot) {
        dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) scale(0.6)`;
      }
      if (ring) {
        ring.style.width = '24px';
        ring.style.height = '24px';
        ring.style.marginLeft = '-12px';
        ring.style.marginTop = '-12px';
      }
    };

    const handleMouseUp = () => {
      dotScale.current = 1.0;
      if (dot) {
        dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) scale(1.0)`;
      }
      if (ring) {
        ring.style.width = isHovering.current ? '48px' : '32px';
        ring.style.height = isHovering.current ? '48px' : '32px';
        ring.style.marginLeft = isHovering.current ? '-24px' : '-16px';
        ring.style.marginTop = isHovering.current ? '-24px' : '-16px';
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    };

    const onHoverIn = () => {
      isHovering.current = true;
      if (ring) {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.marginLeft = '-24px';
        ring.style.marginTop = '-24px';
        ring.style.background = 'rgba(255, 255, 255, 0.15)';
      }
      if (dot) {
        dot.children[0]?.classList.add('scale-125');
      }
    };

    const onHoverOut = () => {
      isHovering.current = false;
      if (ring) {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.marginLeft = '-16px';
        ring.style.marginTop = '-16px';
        ring.style.background = 'transparent';
      }
      if (dot) {
        dot.children[0]?.classList.remove('scale-125');
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover], input, textarea, select, [role="button"]')) {
        onHoverIn();
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover], input, textarea, select, [role="button"]')) {
        onHoverOut();
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('pointerover', handlePointerOver, { passive: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true });

    rafId.current = requestAnimationFrame(updateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isMobileDevice) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] opacity-0 mix-blend-difference"
        style={{ willChange: 'transform', transition: 'opacity 0.3s' }}
      >
        <div
          className="w-[8px] h-[8px] rounded-full bg-white transition-transform duration-150"
          style={{ marginLeft: '-4px', marginTop: '-4px' }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99997] opacity-0 rounded-full mix-blend-difference"
        style={{
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, opacity 0.3s, background 0.3s',
          width: '32px',
          height: '32px',
          marginLeft: '-16px',
          marginTop: '-16px',
          borderColor: 'white',
          borderStyle: 'solid',
          borderWidth: '1px',
          background: 'transparent',
        }}
      />
    </>
  );
}
