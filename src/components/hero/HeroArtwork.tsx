import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { OrganicShape } from '../visual/OrganicShape';
import { ObservationCircleMark, RegistrationCrossMark } from '../visual/EditorialMarks';

export interface HeroArtworkProps {
  /** Optional custom image or SVG source for the portrait */
  src?: string;
  /** Accessible alt text for the artwork */
  alt?: string;
  className?: string;
}

/**
 * HeroArtwork
 * 
 * Rich Art-Journal visual plate for Nada's Illustrator portrait.
 * Styled as a physical, tipped-in sketchbook plate:
 * - Subtle off-axis paper tilt (-1deg)
 * - Layered backing sketchbook page (+1.8deg)
 * - Archival registration corner marks (⌜ ⌝ ⌞ ⌟)
 * - Editorial folio plate citations (PLATE 01 · PORTRAIT STUDY)
 * - Handwritten marginalia and studio palette chips
 * - Completely preserves and honors the face and vector artwork without obscuring it
 */
export const HeroArtwork: React.FC<HeroArtworkProps> = ({
  src,
  alt = 'Colored portrait artwork of Nada',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative w-full max-w-[370px] sm:max-w-[440px] lg:max-w-[490px] xl:max-w-[510px] -mt-3 sm:-mt-6 lg:-mt-10 mx-auto lg:mx-0 select-none ${className}`}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22, rotate: 1.5, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
    >
      {/* Layer 1: Background Organic Color Field (Soft Pink Pebble) */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center pointer-events-none transform -rotate-3 scale-105">
        <OrganicShape
          variant="pebble"
          fill="#F6C4D3"
          className="w-[98%] h-[98%] opacity-55"
        />
      </div>

      {/* Layer 2: Soft Sun Accent Pebble (Warm light from behind) */}
      <div className="absolute -bottom-8 -right-8 -z-20 w-40 h-40 pointer-events-none opacity-45">
        <OrganicShape
          variant="circle"
          fill="#F4C95D"
          className="w-full h-full"
        />
      </div>

      {/* Layer 3: Underlying Sketchbook Paper Sheet (Off-axis page layer) */}
      <div
        className="absolute inset-1 sm:inset-2 -z-10 rounded-[28px] sm:rounded-[32px] bg-warm-ivory/90 border border-soft-pink/50 shadow-xs pointer-events-none transform rotate-[1.8deg]"
        aria-hidden="true"
      >
        {/* Subtle registration marks on underlying sheet */}
        <div className="absolute top-3 left-3 opacity-40">
          <RegistrationCrossMark size={14} color="#B93668" />
        </div>
        <div className="absolute bottom-3 right-3 opacity-40">
          <RegistrationCrossMark size={14} color="#B93668" />
        </div>
      </div>

      {/* Layer 4: Primary Tipped-in Art Journal Mount Plate */}
      <div className="group relative w-full rounded-[26px] sm:rounded-[30px] overflow-hidden border border-soft-pink/60 bg-[#FFFDF9] shadow-[0_8px_30px_rgba(36,33,42,0.06)] p-4 sm:p-5 flex flex-col justify-between transform -rotate-[1deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(36,33,42,0.08)]">
        
        {/* Archival Folio Header on Mount */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-soft-pink/40 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block transition-transform duration-200 group-hover:scale-125" />
            <span className="font-semibold text-deep-pink">PLATE 01</span>
            <span className="text-soft-pink">/</span>
            <span className="font-medium text-ink/80">PORTRAIT STUDY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-deep-pink font-semibold font-mono text-[9px] hidden sm:inline">
              [ NOTICED ]
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-ink/65 tabular-nums">
              FIG. A · 2026
            </span>
          </div>
        </div>

        {/* Artwork Canvas Frame with Archival Corner Crosshairs */}
        <div className="relative aspect-[4/5] w-full rounded-2xl bg-warm-ivory/70 border border-soft-pink/35 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          
          {/* Subtle Studio Corner Marks (Archival registration crosshairs) */}
          <div className="absolute top-2 left-2 text-ink/30 text-[11px] font-mono select-none pointer-events-none z-10" aria-hidden="true">⌜</div>
          <div className="absolute top-2 right-2 text-ink/30 text-[11px] font-mono select-none pointer-events-none z-10" aria-hidden="true">⌝</div>
          <div className="absolute bottom-2 left-2 text-ink/30 text-[11px] font-mono select-none pointer-events-none z-10" aria-hidden="true">⌞</div>
          <div className="absolute bottom-2 right-2 text-ink/30 text-[11px] font-mono select-none pointer-events-none z-10" aria-hidden="true">⌟</div>

          {src ? (
            <img
              src={src}
              alt={alt}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-contain object-center drop-shadow-xs transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          ) : (
            /* Editorial Composition reserving artwork space */
            <div className="w-full h-full flex flex-col justify-between relative">
              <div className="flex items-center justify-between text-[11px] font-body tracking-[0.16em] uppercase text-ink/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/60 inline-block" />
                  <span>visual space</span>
                </span>
                <span>01 / portrait</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center my-4">
                <svg
                  viewBox="0 0 300 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-h-[280px] overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M 150 45 C 190 45, 225 80, 225 130 C 225 185, 185 215, 175 250 C 170 270, 180 295, 205 320"
                    stroke="#E85D8E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    opacity="0.55"
                  />
                  <path
                    d="M 105 135 C 120 160, 155 170, 175 155"
                    stroke="#E85D8E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <ellipse cx="125" cy="115" rx="14" ry="9" stroke="#24212A" strokeWidth="2.5" />
                  <circle cx="127" cy="115" r="4.5" fill="#E85D8E" />
                  <path
                    d="M 110 96 C 125 90, 142 92, 150 99"
                    stroke="#24212A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <ellipse cx="108" cy="142" rx="18" ry="11" fill="#F4C95D" opacity="0.45" />
                  <path
                    d="M 150 45 C 95 45, 65 95, 60 160 C 55 220, 85 285, 115 325"
                    stroke="#B93668"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 75 110 C 85 160, 95 210, 85 270"
                    stroke="#55B9C6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-soft-pink/30 text-[11px] font-body text-ink/50">
                <span className="italic font-display text-ink/70">
                  reserved for illustrator artwork
                </span>
                <span className="text-[10px] tracking-widest uppercase">
                  colored portrait
                </span>
              </div>
            </div>
          )}

          {/* Delicate paper-tape mount corner indicator in top-right */}
          <div
            className="absolute -top-3.5 -right-3.5 w-12 h-6 bg-[#F4C95D]/35 backdrop-blur-[1px] transform rotate-45 border-t border-b border-[#F4C95D]/50 pointer-events-none shadow-xs"
            aria-hidden="true"
          />
        </div>

        {/* Mount Footer Plaque: Citation & Handwritten Note */}
        <div className="mt-2.5 pt-2.5 border-t border-soft-pink/40 flex items-center justify-between text-xs">
          <div className="flex flex-col">
            <span className="text-[10px] font-body font-semibold tracking-[0.14em] uppercase text-ink/80">
              NADA — VECTOR STUDY
            </span>
            <span className="type-handwriting-note text-[12px] sm:text-[13px] text-ink/85 italic">
              lines, color & observation
            </span>
          </div>
          <div className="flex items-center gap-1.5" title="Pigment swatches">
            <span className="w-2 h-2 rounded-full bg-signature-pink shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-warm-sun shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-sea shadow-xs" />
          </div>
        </div>

      </div>

      {/* Floating Journal Marginalia Tag (Outside the frame, slightly overlapping) */}
      <motion.div
        className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-4 sm:-left-6 bg-warm-ivory px-3.5 py-1.5 rounded-full border border-soft-pink/60 shadow-sm pointer-events-none z-10 transform -rotate-[2deg]"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-warm-sun" />
        <span className="type-handwriting-note text-[13px] text-ink/90 italic">
          looking closely
        </span>
        <span className="text-signature-pink font-display text-xs" aria-hidden="true">✦</span>
      </motion.div>

      {/* Small floating handwritten archive note on top-right */}
      <motion.div
        className="hidden lg:flex items-center gap-1.5 absolute -top-4 -right-4 bg-warm-ivory/95 px-2.5 py-1 rounded-full border border-soft-pink/50 shadow-xs pointer-events-none z-10 transform rotate-[3deg]"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <span className="text-[10px] font-mono text-deep-pink font-semibold tracking-wider">
          № 01
        </span>
        <span className="text-[10px] font-body text-ink/75 uppercase tracking-wider font-medium">
          · archive
        </span>
      </motion.div>
    </motion.div>
  );
};
export default HeroArtwork;
