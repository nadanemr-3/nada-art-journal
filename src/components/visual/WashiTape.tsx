import React from 'react';

export type WashiTapeColor = 'sun' | 'sea' | 'pink' | 'ivory';
export type WashiTapeAngle = 'straight' | 'tilt-left' | 'tilt-right' | 'corner-45' | 'corner-135';

export interface WashiTapeProps {
  /** Translucent palette hue */
  color?: WashiTapeColor;
  /** Natural imperfect tape angle */
  angle?: WashiTapeAngle;
  /** Width of the tape strip */
  width?: string;
  /** Height of the tape strip */
  height?: string;
  className?: string;
}

const COLOR_MAP: Record<WashiTapeColor, string> = {
  sun: 'bg-[#F4C95D]/45 border-t border-b border-dashed border-[#F4C95D]/60',
  sea: 'bg-[#55B9C6]/40 border-t border-b border-dashed border-[#55B9C6]/55',
  pink: 'bg-[#F6C4D3]/50 border-t border-b border-dashed border-[#E85D8E]/35',
  ivory: 'bg-[#FFF9F2]/75 border-t border-b border-dashed border-[#F6C4D3]/50',
};

const ANGLE_MAP: Record<WashiTapeAngle, string> = {
  straight: 'rotate-0',
  'tilt-left': 'transform -rotate-2',
  'tilt-right': 'transform rotate-2',
  'corner-45': 'transform rotate-45',
  'corner-135': 'transform -rotate-45',
};

/**
 * WashiTape
 * 
 * Standardized material primitive for tactile paper montage across the journal.
 * Unifies paper tape tabs across MakeArtwork, LiveMoment, and ThreeSection.
 */
export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'sun',
  angle = 'straight',
  width = 'w-12',
  height = 'h-5',
  className = '',
}) => {
  return (
    <div
      className={`${width} ${height} ${COLOR_MAP[color]} ${ANGLE_MAP[angle]} backdrop-blur-[1px] pointer-events-none select-none shadow-xs z-10 ${className}`}
      aria-hidden="true"
    />
  );
};
