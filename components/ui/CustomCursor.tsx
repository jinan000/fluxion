'use client';

import React, { useEffect, useRef, useCallback } from 'react';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export default function CustomCursor({
  color = "#ffffff",
  velocityThreshold = 5,
}: {
  color?: string;
  velocityThreshold?: number;
} = {}) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100, vX: 0, vY: 0 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const dotScale = useRef(1);
  const rafId = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);

  const updateCursorVisuals = useCallback(function updateCursorVisualsLocal() {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;

    // Smooth ring follow
    const dx = mousePos.current.x - ringPos.current.x;
    const dy = mousePos.current.y - ringPos.current.y;
    ringPos.current.x += dx * 0.15;
    ringPos.current.y += dy * 0.15;

    if (dot && ring) {
      dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) scale(${dotScale.current})`;
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
    }

    // Shatter logic
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const mouse = mouseRef.current;
        mouse.vX = mouse.x - mouse.prevX;
        mouse.vY = mouse.y - mouse.prevY;
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const vel = Math.sqrt(mouse.vX * mouse.vX + mouse.vY * mouse.vY);
        if (vel > velocityThreshold && isVisible.current) {
          particlesRef.current.push({
            x: mouse.x,
            y: mouse.y,
            vx: (Math.random() - 0.5) * vel * 0.5,
            vy: (Math.random() - 0.5) * vel * 0.5,
            life: 1,
            size: random(2, 8),
            angle: random(0, 360),
            spin: random(-5, 5),
          });
        }

        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.life -= 0.02;
          p.x += p.vx;
          p.y += p.vy + 1.5; // gravity
          p.angle += p.spin;
          if (p.life <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.angle * Math.PI) / 180);
          ctx.fillStyle = color.startsWith("#")
              ? `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},${p.life})`
              : `rgba(255,255,255,${p.life})`;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size, p.size);
          ctx.lineTo(-p.size, p.size);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
    }

    rafId.current = requestAnimationFrame(updateCursorVisualsLocal);
  }, [color, velocityThreshold]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;

    let resizeHandler: () => void;
    if (canvas) {
      resizeHandler = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', resizeHandler);
      resizeHandler();
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        if (dot) dot.style.opacity = '1';
        if (ring) ring.style.opacity = '1';
      }
    };

    const handleMouseDown = () => {
      dotScale.current = 0.6;
      if (ring) {
        ring.style.width = '26px';
        ring.style.height = '26px';
        ring.style.marginLeft = '-13px';
        ring.style.marginTop = '-13px';
      }
    };

    const handleMouseUp = () => {
      dotScale.current = 1.0;
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
        ring.style.borderWidth = '1px';
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
        ring.style.borderWidth = '1px';
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

    rafId.current = requestAnimationFrame(updateCursorVisuals);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateCursorVisuals]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99996] w-full h-full mix-blend-difference"
      />

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
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, opacity 0.3s, border-width 0.2s, background 0.3s',
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
