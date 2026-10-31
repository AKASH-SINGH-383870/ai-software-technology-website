import { useState, useEffect } from 'react';

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarsePointer || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouse = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleHoverTargets = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]');
      setHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('mouseover', handleHoverTargets, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseover', handleHoverTargets);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouchDevice || !visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.75 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            hovering
              ? 'w-6 h-6 bg-accent-400/30 backdrop-blur-sm border border-accent-400/60 shadow-[0_0_20px_rgba(0,194,255,0.45)]'
              : 'w-2.5 h-2.5 bg-accent-400 shadow-[0_0_12px_rgba(0,194,255,0.8)]'
          }`}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.15 : 0.75})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            hovering
              ? 'w-16 h-16 bg-accent-400/10 border border-accent-400/35'
              : 'w-11 h-11 bg-primary-500/[0.04] border border-white/[0.12]'
          }`}
        />
      </div>
    </>
  );
}