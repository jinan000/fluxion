'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const dotScale = useRef(1);
  const rafId = useRef<number>(0);

  const updateCursorVisuals = useCallback(function updateCursorVisualsLocal() {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Smooth ring follow
    const dx = mousePos.current.x - ringPos.current.x;
    const dy = mousePos.current.y - ringPos.current.y;
    ringPos.current.x += dx * 0.15;
    ringPos.current.y += dy * 0.15;

    dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) scale(${dotScale.current})`;
    ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;

    rafId.current = requestAnimationFrame(updateCursorVisualsLocal);
  }, []);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const handleMouseDown = () => {
      dotScale.current = 0.6;
      ring.style.width = '26px';
      ring.style.height = '26px';
      ring.style.marginLeft = '-13px';
      ring.style.marginTop = '-13px';
    };

    const handleMouseUp = () => {
      dotScale.current = 1.0;
      ring.style.width = isHovering.current ? '48px' : '32px';
      ring.style.height = isHovering.current ? '48px' : '32px';
      ring.style.marginLeft = isHovering.current ? '-24px' : '-16px';
      ring.style.marginTop = isHovering.current ? '-24px' : '-16px';
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onHoverIn = () => {
      isHovering.current = true;
      if (ring) {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.marginLeft = '-24px';
        ring.style.marginTop = '-24px';
        ring.style.borderWidth = '2px';
        ring.style.background = 'rgba(42, 113, 123, 0.06)';
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
        ring.style.borderWidth = '1px';
        ring.style.background = 'transparent';
      }
      if (dot) {
        dot.children[0]?.classList.remove('scale-125');
      }
    };

    // Attach hover listeners using event delegation (no memory leak)
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

    rafId.current = requestAnimationFrame(updateCursorVisuals);

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
  }, [updateCursorVisuals]);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] opacity-0"
        style={{ willChange: 'transform', transition: 'opacity 0.3s' }}
      >
        <div
          className="w-[6px] h-[6px] rounded-full gradient-primary transition-transform duration-150"
          style={{ marginLeft: '-3px', marginTop: '-3px' }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99997] opacity-0 rounded-full"
        style={{
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, opacity 0.3s, border-width 0.2s, background 0.3s',
          width: '32px',
          height: '32px',
          marginLeft: '-16px',
          marginTop: '-16px',
          borderColor: '#4361ee',
          borderStyle: 'solid',
          borderWidth: '1px',
          background: 'transparent',
        }}
      />
    </>
  );
}
