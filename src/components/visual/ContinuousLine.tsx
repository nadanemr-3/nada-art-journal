import React from 'react';
import { motion, useReducedMotion, MotionValue } from 'motion/react';

export type ContinuousLineState = 'hero' | 'route' | 'brush' | 'wave' | 'loop';

export interface ContinuousLineProps {
  /** The conceptual narrative state of the continuous line */
  state: ContinuousLineState;
  /** Optional custom class name for styling and layout positioning */
  className?: string;
  /** Primary stroke color (defaults to NADA Signature Pink #E85D8E) */
  color?: string;
  /** Primary stroke width (defaults to state-appropriate values) */
  strokeWidth?: number;
  /** When true and reduced motion is false, prepares for animation */
  animated?: boolean;
  /** Progress from 0 to 1 for scroll-linked path reveal (number or MotionValue) */
  progress?: number | MotionValue<number>;
}

/**
 * ContinuousLine
 * 
 * The signature visual identity element of NADA.
 * Represents a single evolving line across five narrative states:
 * - hero: hand-drawn organic pink line
 * - route: map-like path with subtle turns, pauses, and nodal waypoints (curiosity/structure)
 * - brush: thicker, expressive stroke suggesting curiosity becoming creation
 * - wave: soft undulating flow introducing Sea blue while keeping Pink dominant
 * - loop: continuous return curve closing the cycle (SEE → MAKE → LIVE → SEE)
 * 
 * Prepared for SVG path-drawing animation while strictly respecting prefers-reduced-motion.
 */
export const ContinuousLine: React.FC<ContinuousLineProps> = ({
  state,
  className = '',
  color = '#E85D8E', // Signature Pink
  strokeWidth,
  animated = false,
  progress,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isAnimated = animated && !shouldReduceMotion;

  // Path data and viewbox definitions for each state
  switch (state) {
    case 'hero': {
      // An organic hand-drawn pink line with subtle natural wobble and fluid direction
      const defaultWidth = strokeWidth ?? 3.5;
      const pathD = 'M 20 60 C 140 35, 260 85, 390 52 C 510 22, 630 78, 760 48 C 840 28, 920 68, 980 50';

      return (
        <svg
          viewBox="0 0 1000 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto overflow-visible ${className}`}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d={pathD}
            stroke={color}
            strokeWidth={defaultWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated && progress === undefined ? { pathLength: 0, opacity: 0.8 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1, opacity: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />
        </svg>
      );
    }

    case 'route': {
      // Map-like curved route with deliberate turns, pauses, and small structural waypoints
      const defaultWidth = strokeWidth ?? 2.75;
      const mainRoute =
        'M 25 90 C 110 90, 160 35, 250 35 C 330 35, 360 120, 450 120 C 530 120, 560 60, 640 60 C 720 60, 770 110, 850 110 C 910 110, 950 80, 975 80';
      const branchRoute = 'M 450 120 C 490 145, 530 150, 570 140';

      return (
        <svg
          viewBox="0 0 1000 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto overflow-visible ${className}`}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle secondary curiosity branch */}
          <path
            d={branchRoute}
            stroke="#F6C4D3"
            strokeWidth={defaultWidth * 0.75}
            strokeLinecap="round"
            strokeDasharray="4 4"
          />

          {/* Primary exploratory route */}
          <motion.path
            d={mainRoute}
            stroke={color}
            strokeWidth={defaultWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated && progress === undefined ? { pathLength: 0, opacity: 0.9 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1, opacity: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.4, ease: [0.22, 1, 0.36, 1] } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />

          {/* Map waypoints / observation nodes */}
          <circle cx="250" cy="35" r="4.5" fill="#FFF9F2" stroke={color} strokeWidth="2.5" />
          <circle cx="450" cy="120" r="4" fill="#F4C95D" stroke={color} strokeWidth="2" />
          <circle cx="640" cy="60" r="4.5" fill="#FFF9F2" stroke={color} strokeWidth="2.5" />
          <circle cx="850" cy="110" r="3.5" fill="#B93668" />
        </svg>
      );
    }

    case 'brush': {
      // Thicker, expressive stroke with dynamic tapered body suggesting creation
      const defaultWidth = strokeWidth ?? 5.5;
      const brushPath =
        'M 20 80 C 120 70, 200 45, 320 40 C 440 35, 520 110, 640 105 C 740 100, 840 60, 980 50';
      const accentStroke =
        'M 310 44 C 420 40, 490 102, 600 100 C 680 98, 770 70, 880 58';

      return (
        <svg
          viewBox="0 0 1000 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto overflow-visible ${className}`}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Underlying expressive shadow stroke */}
          <path
            d={brushPath}
            stroke="#B93668"
            strokeWidth={defaultWidth * 1.35}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
          />

          {/* Main expressive brush body */}
          <motion.path
            d={brushPath}
            stroke={color}
            strokeWidth={defaultWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated && progress === undefined ? { pathLength: 0, opacity: 0.95 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1, opacity: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.1, ease: [0.16, 1, 0.3, 1] } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />

          {/* Hand-drawn texture accent line */}
          <path
            d={accentStroke}
            stroke="#F6C4D3"
            strokeWidth={Math.max(1.5, defaultWidth * 0.35)}
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      );
    }

    case 'wave': {
      // Soft flowing double wave introducing Sea blue (#55B9C6) while keeping Pink dominant
      const defaultWidth = strokeWidth ?? 3.5;
      const pinkWave =
        'M 20 65 C 130 20, 230 115, 350 75 C 470 35, 570 120, 690 70 C 790 30, 890 95, 980 60';
      const seaWave =
        'M 30 85 C 145 42, 245 130, 365 92 C 485 54, 585 135, 705 88 C 805 50, 905 110, 975 78';

      return (
        <svg
          viewBox="0 0 1000 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto overflow-visible ${className}`}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle harmonic Sea wave (living / coastal vibe) */}
          <motion.path
            d={seaWave}
            stroke="#55B9C6"
            strokeWidth={defaultWidth * 0.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
            initial={isAnimated && progress === undefined ? { pathLength: 0 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.4, ease: 'easeOut', delay: 0.15 } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />

          {/* Primary dominant Pink wave */}
          <motion.path
            d={pinkWave}
            stroke={color}
            strokeWidth={defaultWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated && progress === undefined ? { pathLength: 0 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.3, ease: 'easeOut' } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />
        </svg>
      );
    }

    case 'loop': {
      // Continuous loop curve that turns gracefully, returning toward the beginning of the cycle
      const defaultWidth = strokeWidth ?? 3.5;
      const loopPath =
        'M 50 130 C 180 130, 260 40, 380 40 C 490 40, 540 180, 650 180 C 760 180, 830 75, 770 35 C 710 -5, 620 50, 680 120 C 730 180, 840 170, 950 130';

      return (
        <svg
          viewBox="0 0 1000 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto overflow-visible ${className}`}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle return hint stroke */}
          <path
            d="M 680 120 C 620 50, 710 -5, 770 35"
            stroke="#F6C4D3"
            strokeWidth={defaultWidth * 1.5}
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Narrative loop path */}
          <motion.path
            d={loopPath}
            stroke={color}
            strokeWidth={defaultWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated && progress === undefined ? { pathLength: 0 } : undefined}
            whileInView={isAnimated && progress === undefined ? { pathLength: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={isAnimated && progress === undefined ? { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] } : undefined}
            style={!shouldReduceMotion && progress !== undefined ? { pathLength: progress } : undefined}
          />
        </svg>
      );
    }

    default:
      return null;
  }
};
