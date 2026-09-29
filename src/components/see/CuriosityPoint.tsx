import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { WashiTape } from '../visual/WashiTape';
import { NadaSymbol } from '../visual/NadaSymbol';

export type CuriosityPointKey = 'maps' | 'science' | 'technology' | 'people' | 'why' | 'art';

export interface CuriosityPointProps {
  id: CuriosityPointKey;
  label: string;
  annotation: string;
  note?: string;
  index: number;
  className?: string;
}

/**
 * CuriosityPoint
 * 
 * Editorial observation waypoint along the curiosity route in SEE.
 * Formatted as an archival field notebook card with authentic observation indices,
 * tactile paper mount depth, registration marks, and hand-drawn annotations.
 */
export const CuriosityPoint: React.FC<CuriosityPointProps> = ({
  id,
  label,
  annotation,
  note,
  index,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isWhy = id === 'why';
  const isTechnology = id === 'technology';

  // Specific domain tag for the field notebook index
  const getDomainTag = () => {
    switch (id) {
      case 'maps':
        return 'SPATIAL LOGIC';
      case 'science':
        return 'NATURAL PATTERNS';
      case 'technology':
        return 'TOOL SYSTEMS';
      case 'people':
        return 'SOCIAL WARMTH';
      case 'why':
        return 'CORE INQUIRY';
      case 'art':
        return 'VISUAL EXPRESSION';
      default:
        return 'OBSERVATION';
    }
  };

  // Subtle visual mark tailored to each curiosity idea
  const renderVisualMark = () => {
    switch (id) {
      case 'maps':
        return (
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* Organic coordinate / compass ring with crosshairs */}
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full" aria-hidden="true">
              <circle cx="18" cy="18" r="14" stroke="#F6C4D3" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 18 6 L 18 30 M 6 18 L 30 18" stroke="#E85D8E" strokeWidth="1.2" opacity="0.7" />
              <circle cx="18" cy="18" r="3.5" fill="#E85D8E" />
              <circle cx="27" cy="11" r="1.5" fill="#24212A" opacity="0.6" />
            </svg>
          </div>
        );

      case 'science':
        return (
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* Subtle orbital ring and observation focal point */}
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full" aria-hidden="true">
              <ellipse cx="18" cy="18" rx="15" ry="9" stroke="#E85D8E" strokeWidth="1.3" transform="rotate(-25 18 18)" opacity="0.75" />
              <circle cx="27" cy="13" r="3" fill="#F4C95D" />
              <circle cx="18" cy="18" r="2.5" fill="#24212A" />
              <circle cx="10" cy="22" r="1.5" fill="#B93668" opacity="0.7" />
            </svg>
          </div>
        );

      case 'technology':
        return (
          <div className="relative w-9 h-9 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex items-center justify-center shrink-0">
            {/* Organic node cluster representing logic and structured systems */}
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full" aria-hidden="true">
              <path d="M 10 24 L 20 12 L 28 20" stroke="#B93668" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
              <circle cx="10" cy="24" r="3" fill="#FFF9F2" stroke="#B93668" strokeWidth="1.5" />
              <circle cx="20" cy="12" r="3.5" fill="#E85D8E" />
              <circle cx="28" cy="20" r="2.5" fill="#55B9C6" />
            </svg>
          </div>
        );

      case 'people':
        return (
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* Delicate constellation of social connection points */}
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full" aria-hidden="true">
              <circle cx="12" cy="18" r="4" fill="#F6C4D3" />
              <circle cx="22" cy="14" r="3.5" fill="#F4C95D" opacity="0.85" />
              <circle cx="24" cy="24" r="3" fill="#E85D8E" />
              <path d="M 14 18 C 18 17, 20 15, 22 14" stroke="#24212A" strokeWidth="1" strokeDasharray="2 2" opacity="0.45" />
            </svg>
          </div>
        );

      case 'why':
        return (
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            {/* Playful curiosity scribble */}
            <HandDrawnStroke variant="scribble" color="#E85D8E" strokeWidth={2.4} />
          </div>
        );

      case 'art':
        return (
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* Expressive visual mark representing composition, drawing, and color */}
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full" aria-hidden="true">
              <rect x="7" y="7" width="22" height="22" rx="3" stroke="#F6C4D3" strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M 10 24 C 14 15, 22 23, 26 12" stroke="#E85D8E" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="24" cy="22" r="2.5" fill="#F4C95D" />
              <circle cx="12" cy="13" r="2" fill="#55B9C6" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  // Subtle annotation reveal on hover
  const getAnnotationReveal = () => {
    switch (id) {
      case 'maps':
        return 'ROUTE MARKED';
      case 'science':
        return 'PATTERN LOGGED';
      case 'technology':
        return 'SYSTEM MAPPED';
      case 'people':
        return 'WARMTH NOTICED';
      case 'why':
        return 'QUESTION OPEN';
      case 'art':
        return 'DETAILS NOTICED';
      default:
        return 'OBSERVED';
    }
  };

  const getRevealSymbol = (): 'noticed' | 'thought' | 'connection' | 'spark' => {
    switch (id) {
      case 'maps':
        return 'connection';
      case 'science':
        return 'noticed';
      case 'technology':
        return 'thought';
      case 'people':
        return 'spark';
      case 'why':
        return 'spark';
      case 'art':
        return 'noticed';
      default:
        return 'noticed';
    }
  };

  return (
    <motion.div
      className={`group relative flex flex-col ${isWhy ? 'lg:col-span-1' : ''} ${className}`}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      {/* Underlying paper peek for the focal WHY card */}
      {isWhy && (
        <div
          className="absolute inset-1 sm:inset-1.5 -z-10 rounded-2xl bg-warm-ivory border border-soft-pink/40 shadow-xs pointer-events-none transform -rotate-[2deg] transition-transform duration-300 group-hover:-rotate-[3deg]"
          aria-hidden="true"
        />
      )}

      {/* Field Notebook Card Surface */}
      <div
        tabIndex={0}
        role="region"
        aria-label={`${label}: ${annotation}`}
        className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 ease-out group-hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-signature-pink/70 cursor-default ${
          isTechnology ? 'lg:px-2.5 lg:py-4.5 xl:px-3.5 xl:py-5' : ''
        } ${
          isWhy
            ? 'bg-[#FFFDF9] border border-signature-pink/55 shadow-[0_6px_20px_rgba(232,93,142,0.08)] transform sm:rotate-[1.2deg] group-hover:rotate-0 group-focus-visible:rotate-0 group-hover:shadow-[0_12px_28px_rgba(232,93,142,0.12)]'
            : 'bg-[#FFFDF9]/95 border border-soft-pink/50 shadow-[0_2px_12px_rgba(36,33,42,0.03)] group-hover:border-soft-pink/80 group-focus-visible:border-soft-pink/80 group-hover:shadow-[0_8px_24px_rgba(36,33,42,0.06)]'
        }`}
      >
        {/* Paper tape accent on WHY */}
        {isWhy && (
          <WashiTape color="sun" angle="tilt-right" width="w-9" height="h-4" className="absolute -top-2.5 right-4 transition-transform duration-300 group-hover:rotate-6 group-focus-visible:rotate-6" />
        )}

        {/* Top Field Index Row */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider select-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-semibold ${isWhy ? 'text-signature-pink' : 'text-deep-pink'}`}>
              OBS. 0{index + 1}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center gap-1 text-[9px] text-deep-pink font-semibold">
              <span>·</span>
              <NadaSymbol name={getRevealSymbol()} size={11} color="#E85D8E" />
              <span>{getAnnotationReveal()}</span>
            </div>
          </div>
          <span className="text-ink/65 text-[9px] font-body uppercase tracking-[0.14em] font-medium">
            {getDomainTag()}
          </span>
        </div>

        {/* Visual Marker + Label Row */}
        <div className={`flex items-start ${isTechnology ? 'gap-3 lg:gap-1.5 xl:gap-2' : 'gap-3'}`}>
          <div className="transition-transform duration-300 ease-out group-hover:scale-105 shrink-0">
            {renderVisualMark()}
          </div>
          <div className={`flex flex-col ${isTechnology ? 'min-w-0 flex-1' : ''}`}>
            <span
              className={`font-display font-medium text-ink transition-colors duration-200 group-hover:text-deep-pink ${
                isWhy
                  ? 'text-xl sm:text-2xl text-signature-pink tracking-tight'
                  : isTechnology
                  ? 'text-lg sm:text-xl lg:text-[11.5px] xl:text-[13.5px] 2xl:text-[15px] tracking-tight lg:tracking-tighter'
                  : 'text-lg sm:text-xl tracking-tight'
              }`}
            >
              {label}
            </span>
            <span
              className={`font-body font-medium uppercase text-ink/75 mt-0.5 ${
                isTechnology
                  ? 'text-[11px] sm:text-xs lg:text-[9.5px] xl:text-[11px] tracking-[0.14em] lg:tracking-[0.05em] xl:tracking-[0.1em]'
                  : 'text-[11px] sm:text-xs tracking-[0.14em]'
              }`}
            >
              {annotation}
            </span>
          </div>
        </div>

        {/* Handwritten Micro-Note with archival divider */}
        {note && (
          <div className="mt-3 pt-2.5 border-t border-soft-pink/25">
            <span className="type-handwriting-note text-xs sm:text-[13px] text-ink/85 italic flex items-baseline gap-1.5 leading-snug">
              <NadaSymbol name="thought" size={13} color="#E85D8E" className="select-none shrink-0" />
              <span>{note}</span>
            </span>
          </div>
        )}

        {/* Corner registration marks */}
        <div className="absolute top-1.5 left-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌜</div>
        <div className="absolute top-1.5 right-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌝</div>
        <div className="absolute bottom-1.5 left-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌞</div>
        <div className="absolute bottom-1.5 right-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌟</div>
      </div>
    </motion.div>
  );
};
export default CuriosityPoint;
