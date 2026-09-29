import React, { useEffect, useState } from 'react';

/**
 * JournalCursor
 * 
 * A very subtle, tactile observation circle follower for desktop fine-pointer devices.
 * Communicates the feeling of inspecting a physical sketchbook through an observation loupe.
 * 
 * Rules:
 * - Native system cursor is preserved for usability and accessibility.
 * - Completely inactive on touch / mobile devices (pointer: coarse or hover: none).
 * - Completely disabled when prefers-reduced-motion is active.
 * - Non-blocking pointer-events-none ensures zero interaction interference.
 */
export const JournalCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer & hover capability
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEligibility = () => {
      setIsEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    checkEligibility();

    finePointerQuery.addEventListener('change', checkEligibility);
    reducedMotionQuery.addEventListener('change', checkEligibility);

    return () => {
      finePointerQuery.removeEventListener('change', checkEligibility);
      reducedMotionQuery.removeEventListener('change', checkEligibility);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
        setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (target) {
          const isInteractive = Boolean(
            target.closest('button, a, [role="button"], [data-cursor="inspect"], .group')
          );
          setIsHoveringInteractive(isInteractive);
        }
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-200"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
          isHoveringInteractive
            ? 'w-7 h-7 border border-signature-pink/70 bg-signature-pink/10 shadow-[0_0_10px_rgba(232,93,142,0.15)]'
            : 'w-4 h-4 border border-signature-pink/45 bg-transparent'
        }`}
      >
        <span
          className={`rounded-full bg-signature-pink transition-all duration-200 ${
            isHoveringInteractive ? 'w-1 h-1 opacity-90' : 'w-1 h-1 opacity-60'
          }`}
        />
      </div>
    </div>
  );
};
