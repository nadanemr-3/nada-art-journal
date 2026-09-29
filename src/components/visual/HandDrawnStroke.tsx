import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type HandDrawnStrokeVariant = 'underline' | 'arc' | 'scribble' | 'dash';

export interface HandDrawnStrokeProps {
  /** Visual variant of the hand-drawn stroke */
  variant?: HandDrawnStrokeVariant;
  /** Optional custom class name */
  className?: string;
  /** Primary stroke color (defaults to NADA Signature Pink #E85D8E) */
  color?: string;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** When true and reduced motion is false, prepares for animation */
  animated?: boolean;
}

/**
 * HandDrawnStroke
 * 
 * Expressive organic stroke primitive representing human handwriting,
 * sketchbook underlines, and organic curiosity marks.
 */
export const HandDrawnStroke: React.FC<HandDrawnStrokeProps> = ({
  variant = 'underline',
  className = '',
  color = '#E85D8E',
  strokeWidth,
  animated = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isAnimated = animated && !shouldReduceMotion;

  switch (variant) {
    case 'underline': {
      // Natural, slightly uneven underline for editorial words and headings
      const width = strokeWidth ?? 3;
      const path = 'M 4 14 C 45 7, 95 19, 145 12 C 185 6, 225 16, 260 11';
      return (
        <svg
          viewBox="0 0 264 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          aria-hidden="true"
        >
          <motion.path
            d={path}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated ? { pathLength: 0 } : undefined}
            animate={isAnimated ? { pathLength: 1 } : undefined}
            transition={isAnimated ? { duration: 0.6, ease: 'easeOut' } : undefined}
          />
        </svg>
      );
    }

    case 'arc': {
      // Gentle curved gesture arc for annotations and visual guidance
      const width = strokeWidth ?? 2.5;
      const path = 'M 10 75 C 35 25, 75 12, 115 15 C 135 17, 148 24, 155 35';
      return (
        <svg
          viewBox="0 0 165 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          aria-hidden="true"
        >
          <motion.path
            d={path}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated ? { pathLength: 0 } : undefined}
            animate={isAnimated ? { pathLength: 1 } : undefined}
            transition={isAnimated ? { duration: 0.7, ease: 'easeOut' } : undefined}
          />
        </svg>
      );
    }

    case 'scribble': {
      // A small curiosity loop or sketchbook detail
      const width = strokeWidth ?? 2;
      const path = 'M 8 28 C 22 8, 38 10, 42 22 C 46 34, 25 36, 28 20 C 31 4, 52 14, 62 25';
      return (
        <svg
          viewBox="0 0 70 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          aria-hidden="true"
        >
          <motion.path
            d={path}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isAnimated ? { pathLength: 0 } : undefined}
            animate={isAnimated ? { pathLength: 1 } : undefined}
            transition={isAnimated ? { duration: 0.8, ease: 'easeInOut' } : undefined}
          />
        </svg>
      );
    }

    case 'dash': {
      // Organic dash / accent separator
      const width = strokeWidth ?? 2.5;
      const path = 'M 4 8 C 16 6, 28 9, 40 7';
      return (
        <svg
          viewBox="0 0 44 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          aria-hidden="true"
        >
          <motion.path
            d={path}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            initial={isAnimated ? { pathLength: 0 } : undefined}
            animate={isAnimated ? { pathLength: 1 } : undefined}
            transition={isAnimated ? { duration: 0.4, ease: 'easeOut' } : undefined}
          />
        </svg>
      );
    }

    default:
      return null;
  }
};
