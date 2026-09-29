import React from 'react';

export type OrganicShapeVariant = 'circle' | 'pebble' | 'contour' | 'pill-organic';

export interface OrganicShapeProps {
  /** Shape geometry variant */
  variant?: OrganicShapeVariant;
  /** Fill color from NADA palette or custom hex */
  fill?: string;
  /** Optional stroke outline color */
  stroke?: string;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Additional custom classes */
  className?: string;
  /** Optional children rendered within the shape coordinate space */
  children?: React.ReactNode;
}

/**
 * OrganicShape
 * 
 * Foundational organic shape primitive with subtle natural irregularity.
 * Adheres strictly to the NADA principle: "Structure underneath. Freedom on top."
 * Avoids mechanical border-radius pills and generic SaaS blob styling.
 */
export const OrganicShape: React.FC<OrganicShapeProps> = ({
  variant = 'circle',
  fill = '#F6C4D3', // Soft Pink default fill
  stroke = 'none',
  strokeWidth = 0,
  className = '',
  children,
}) => {
  switch (variant) {
    case 'circle': {
      // Subtly asymmetrical organic circle (hand-drawn feel)
      const d =
        'M 100 12 C 148 10, 188 52, 187 100 C 186 148, 146 189, 98 188 C 50 187, 12 146, 13 98 C 14 50, 52 14, 100 12 Z';
      return (
        <div className={`relative inline-block ${className}`}>
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <path
              d={d}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
          </svg>
          {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
        </div>
      );
    }

    case 'pebble': {
      // Soft organic pebble shape for editorial backdrops and artwork frames
      const d =
        'M 120 18 C 185 24, 235 70, 238 135 C 241 200, 175 238, 110 236 C 45 234, 16 182, 18 118 C 20 54, 55 12, 120 18 Z';
      return (
        <div className={`relative inline-block ${className}`}>
          <svg
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <path
              d={d}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
          </svg>
          {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
        </div>
      );
    }

    case 'contour': {
      // Open organic contour line
      const d = 'M 25 140 C 40 50, 140 20, 210 50 C 270 75, 290 150, 240 200 C 190 250, 90 230, 45 180';
      return (
        <svg
          viewBox="0 0 310 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full block overflow-visible ${className}`}
          aria-hidden="true"
        >
          <path
            d={d}
            fill={fill === 'none' ? 'none' : fill}
            stroke={stroke !== 'none' ? stroke : '#E85D8E'}
            strokeWidth={strokeWidth || 2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'pill-organic': {
      // Asymmetric organic capsule / badge shape
      const d =
        'M 50 10 C 110 8, 170 12, 230 10 C 255 10, 272 26, 270 50 C 268 74, 252 90, 228 90 C 168 88, 108 92, 48 90 C 24 90, 8 74, 10 50 C 12 26, 26 10, 50 10 Z';
      return (
        <div className={`relative inline-block ${className}`}>
          <svg
            viewBox="0 0 280 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <path
              d={d}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
          </svg>
          {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
        </div>
      );
    }

    default:
      return null;
  }
};

/**
 * OrganicCircle
 * Convenience wrapper for the hand-drawn organic circle primitive.
 */
export const OrganicCircle: React.FC<Omit<OrganicShapeProps, 'variant'>> = (props) => {
  return <OrganicShape variant="circle" {...props} />;
};
