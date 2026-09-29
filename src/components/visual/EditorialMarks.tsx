import React from 'react';

export interface EditorialMarkProps {
  className?: string;
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
}

/**
 * CompassMark
 * A delicate, hand-drawn notebook compass / north orientation mark for spatial and mapping explorations.
 */
export const CompassMark: React.FC<EditorialMarkProps> = ({
  className = '',
  color = '#E85D8E',
  size = 28,
  strokeWidth = 1.5,
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: pixelSize, height: pixelSize }}
      className={`inline-block shrink-0 select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      {/* Outer hand-drawn ring */}
      <circle cx="20" cy="20" r="16" stroke={color} strokeWidth={strokeWidth} strokeDasharray="3 3" opacity="0.6" />
      {/* Compass crosshairs */}
      <path d="M 20 4 L 20 36 M 4 20 L 36 20" stroke={color} strokeWidth={strokeWidth * 0.8} opacity="0.4" />
      {/* North pointer arrow */}
      <path d="M 20 6 L 24 18 L 20 15 L 16 18 Z" fill={color} />
      {/* South pointer arrow */}
      <path d="M 20 34 L 23 22 L 20 25 L 17 22 Z" stroke={color} strokeWidth={strokeWidth * 0.8} fill="none" opacity="0.5" />
      {/* Central pivot point */}
      <circle cx="20" cy="20" r="2" fill={color} />
      {/* Tiny 'N' label */}
      <text x="20" y="2" textAnchor="middle" fill={color} fontSize="6" fontFamily="monospace" fontWeight="bold">N</text>
    </svg>
  );
};

/**
 * ObservationCircleMark
 * An imperfect double observation circle with focal measurement ticks representing active noticing.
 */
export const ObservationCircleMark: React.FC<EditorialMarkProps & { label?: string }> = ({
  className = '',
  color = '#E85D8E',
  size = 32,
  strokeWidth = 1.5,
  label,
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: pixelSize, height: pixelSize }}
      className={`inline-block shrink-0 select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      {/* Hand-drawn imperfect outer circle */}
      <path
        d="M 24 6 C 34 6, 42 14, 42 24 C 42 34, 34 42, 24 42 C 14 42, 6 34, 6 24 C 6 14, 14 6, 24 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Inner focus circle */}
      <circle cx="24" cy="24" r="10" stroke={color} strokeWidth={strokeWidth * 0.75} strokeDasharray="2 2" opacity="0.7" />
      {/* Center point */}
      <circle cx="24" cy="24" r="2.5" fill={color} />
      {/* Focus ticks */}
      <path d="M 24 2 L 24 6 M 24 42 L 24 46 M 2 24 L 6 24 M 42 24 L 46 24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {label && (
        <text x="24" y="54" textAnchor="middle" fill={color} fontSize="7" fontFamily="monospace" letterSpacing="0.1em">
          {label}
        </text>
      )}
    </svg>
  );
};

/**
 * SunBurstMark
 * Delicate hand-drawn sunburst / warm light ray mark for LIVE moments.
 */
export const SunBurstMark: React.FC<EditorialMarkProps> = ({
  className = '',
  color = '#F4C95D',
  size = 28,
  strokeWidth = 1.5,
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: pixelSize, height: pixelSize }}
      className={`inline-block shrink-0 select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      {/* Warm sun center */}
      <circle cx="18" cy="18" r="4.5" fill={color} />
      {/* Delicate rays */}
      <path
        d="M 18 4 L 18 9 M 18 27 L 18 32 M 4 18 L 9 18 M 27 18 L 32 18 M 8 8 L 12 12 M 24 24 L 28 28 M 8 28 L 12 24 M 24 12 L 28 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * WaveletMark
 * Small hand-drawn sea wave lines for coastal and water notes.
 */
export const WaveletMark: React.FC<EditorialMarkProps> = ({
  className = '',
  color = '#55B9C6',
  size = 32,
  strokeWidth = 1.5,
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 44 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: pixelSize, height: `calc(${pixelSize} * 0.41)` }}
      className={`inline-block shrink-0 select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      <path
        d="M 2 8 C 8 3, 14 13, 22 7 C 29 2, 36 12, 42 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 6 13 C 12 9, 18 16, 26 12 C 32 8, 38 15, 42 12"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

/**
 * HandDrawnArrow
 * Curved, expressive editorial annotation arrow pointing toward details or guiding flow.
 */
export const HandDrawnArrow: React.FC<EditorialMarkProps & { direction?: 'right' | 'down-right' | 'up-right' | 'curved-down' }> = ({
  className = '',
  color = '#E85D8E',
  size = 32,
  strokeWidth = 1.8,
  direction = 'right',
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  switch (direction) {
    case 'curved-down':
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 select-none ${className}`}
          aria-hidden={ariaHidden}
        >
          <path
            d="M 6 8 C 22 8, 28 16, 26 28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 20 23 L 26 29 L 31 22"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'up-right':
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 select-none ${className}`}
          aria-hidden={ariaHidden}
        >
          <path
            d="M 6 30 C 12 24, 18 16, 28 8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 18 8 H 28 V 18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'down-right':
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: pixelSize }}
          className={`inline-block shrink-0 select-none ${className}`}
          aria-hidden={ariaHidden}
        >
          <path
            d="M 6 6 C 14 14, 20 22, 28 28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 18 28 H 28 V 18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'right':
    default:
      return (
        <svg
          viewBox="0 0 44 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: pixelSize, height: `calc(${pixelSize} * 0.45)` }}
          className={`inline-block shrink-0 select-none ${className}`}
          aria-hidden={ariaHidden}
        >
          <path
            d="M 4 10 C 16 8, 28 12, 38 10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 30 4 L 38 10 L 30 16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

/**
 * PencilRulerTicks
 * Studio graphite measurement scale / ruler ticks for craft & process sections.
 */
export const PencilRulerTicks: React.FC<EditorialMarkProps & { length?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  color = '#24212A',
  strokeWidth = 1,
  length = 'md',
  'aria-hidden': ariaHidden = true,
}) => {
  const width = length === 'sm' ? 80 : length === 'lg' ? 180 : 120;
  return (
    <svg
      viewBox={`0 0 ${width} 16`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${width}px`, height: '16px' }}
      className={`inline-block shrink-0 select-none opacity-40 ${className}`}
      aria-hidden={ariaHidden}
    >
      <line x1="0" y1="8" x2={width} y2="8" stroke={color} strokeWidth={strokeWidth} />
      {Array.from({ length: Math.floor(width / 10) + 1 }).map((_, i) => {
        const x = i * 10;
        const isMajor = i % 5 === 0;
        return (
          <line
            key={i}
            x1={x}
            y1={isMajor ? 2 : 5}
            x2={x}
            y2={isMajor ? 14 : 11}
            stroke={color}
            strokeWidth={isMajor ? strokeWidth * 1.2 : strokeWidth * 0.75}
          />
        );
      })}
    </svg>
  );
};

/**
 * RegistrationCrossMark
 * Archival survey crosshair (+) with measurement ticks for specimen mounting.
 */
export const RegistrationCrossMark: React.FC<EditorialMarkProps> = ({
  className = '',
  color = '#E85D8E',
  size = 18,
  strokeWidth = 1.2,
  'aria-hidden': ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: pixelSize, height: pixelSize }}
      className={`inline-block shrink-0 select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      <path d="M 12 3 L 12 21 M 3 12 L 21 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="12" r="6" stroke={color} strokeWidth={strokeWidth * 0.75} strokeDasharray="2 2" fill="none" opacity="0.5" />
    </svg>
  );
};

/**
 * NotebookBindingStitch
 * Subtle vertical or horizontal paper notebook binding marks.
 */
export const NotebookBindingStitch: React.FC<EditorialMarkProps & { count?: number; orientation?: 'vertical' | 'horizontal' }> = ({
  className = '',
  color = '#E85D8E',
  count = 4,
  orientation = 'vertical',
  strokeWidth = 1.5,
  'aria-hidden': ariaHidden = true,
}) => {
  if (orientation === 'horizontal') {
    return (
      <svg
        viewBox={`0 0 ${count * 20} 12`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block select-none opacity-45 ${className}`}
        style={{ width: `${count * 20}px`, height: '12px' }}
        aria-hidden={ariaHidden}
      >
        {Array.from({ length: count }).map((_, i) => (
          <line
            key={i}
            x1={i * 20 + 4}
            y1={6}
            x2={i * 20 + 16}
            y2={6}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox={`0 0 12 ${count * 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none opacity-45 ${className}`}
      style={{ width: '12px', height: `${count * 24}px` }}
      aria-hidden={ariaHidden}
    >
      {Array.from({ length: count }).map((_, i) => (
        <line
          key={i}
          x1={6}
          y1={i * 24 + 4}
          x2={6}
          y2={i * 24 + 20}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};
