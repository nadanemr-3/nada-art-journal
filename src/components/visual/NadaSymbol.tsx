import React from 'react';

export type NadaSymbolName =
  | 'noticed'
  | 'thought'
  | 'connection'
  | 'spark'
  | 'continue'
  | 'return'
  | 'discarded';

export interface NadaSymbolProps {
  /** The specific symbol from NADA's visual vocabulary */
  name: NadaSymbolName;
  /** Optional custom CSS classes */
  className?: string;
  /** Primary color for stroke or fill (defaults to currentColor or signature palette) */
  color?: string;
  /** Size in pixels (applies to width & height) */
  size?: number | string;
  /** Stroke width for linework symbols */
  strokeWidth?: number;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

/**
 * NadaSymbol
 * 
 * Standardized recurring symbol vocabulary for the NADA visual identity:
 * - noticed (○) : An organic hand-drawn observation circle (SEE motif)
 * - thought (~) : A subtle reflective thought wave (Marginalia motif)
 * - connection (→) : Clean editorial vector arrow (Transformation motif)
 * - spark (✦) : Four-point star of light/warmth (LIVE & moments motif)
 * - continue (↗) : Directional threshold marker
 * - return (↺) : Circular return curve (LOOP motif)
 * - discarded (×) : Graphite test cross / studio mark (MAKE motif)
 */
export const NadaSymbol: React.FC<NadaSymbolProps> = ({
  name,
  className = '',
  color = 'currentColor',
  size = 16,
  strokeWidth = 2,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  switch (name) {
    case 'noticed': {
      // Imperfect organic circle representing visual observation
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 12 3.2 C 17.2 3.4, 21.2 7.2, 20.8 12.8 C 20.4 18, 16.2 21.2, 11 20.8 C 6 20.4, 3 16.2, 3.4 11 C 3.8 6, 7.4 3, 12.4 3.2"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'thought': {
      // Flowing pen tilde representing reflection
      return (
        <svg
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: `calc(${pixelSize} * 0.67)` }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 2 8 C 5 4, 9 4, 12 8 C 15 12, 19 12, 22 8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'connection': {
      // Editorial directional connector arrow
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 3 12 H 19 M 13 6.5 L 19.5 12 L 13 17.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'spark': {
      // Delicate four-point star representing moments and warmth
      return (
        <svg
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 12 2 C 12 6.5, 13.5 10.5, 18.5 12 C 13.5 13.5, 12 17.5, 12 22 C 12 17.5, 10.5 13.5, 5.5 12 C 10.5 10.5, 12 6.5, 12 2 Z"
          />
        </svg>
      );
    }

    case 'continue': {
      // Upward-right threshold arrow
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 6 18 L 18 6 M 9 6 H 18 V 15"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'return': {
      // Loopback return curve
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 4 10 C 4.5 6, 8 3.5, 12 3.5 C 16.5 3.5, 20.5 7, 20.5 12 C 20.5 16.8, 16.5 20.5, 11.5 20.5 C 7.5 20.5, 4.5 18, 3.5 14.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 2 8 L 4.5 11 L 8.5 9"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    case 'discarded': {
      // Organic graphite test cross
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 align-middle ${className}`}
          aria-hidden={ariaHidden}
          aria-label={ariaLabel}
        >
          <path
            d="M 6 6 L 18 18 M 18 6 L 6 18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    default:
      return null;
  }
};
