import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { OrganicShape } from '../visual/OrganicShape';
import { WashiTape } from '../visual/WashiTape';

export type MakeArtworkVariant = 'primary' | 'fragment' | 'sketch';

export interface MakeArtworkProps {
  /** Optional source path for real artwork asset when available */
  src?: string;
  /** Accessible alt description for the artwork */
  alt?: string;
  /** Visual scale and composition variant */
  variant?: MakeArtworkVariant;
  /** Annotation label / title */
  label?: string;
  /** Subtitle / discipline note */
  caption?: string;
  /** Optional handwritten note */
  note?: string;
  className?: string;
}

/**
 * MakeArtwork
 * 
 * Reusable visual scaffolding for artwork in the MAKE section.
 * Designed like physical sketchbook plates mounted on a studio desk.
 * Includes tactile washi tape tabs, registration crop marks, colorway swatch chips,
 * and editorial caption plaques.
 */
export const MakeArtwork: React.FC<MakeArtworkProps> = ({
  src,
  alt = 'Creative artwork study by Nada',
  variant = 'primary',
  label,
  caption,
  note,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If real artwork is provided, render each with its distinct creative world personality
  if (src) {
    switch (variant) {
      case 'primary': {
        // PAINTING ON CANVAS: Brushwork, Gesture, Color
        return (
          <div className={`relative group ${className}`}>
            {/* Underlying paper sheet peeking out to give tactile sketchbook depth */}
            <div
              className="absolute inset-1 sm:inset-2 -z-10 rounded-2xl sm:rounded-3xl bg-warm-ivory border border-soft-pink/45 shadow-xs pointer-events-none transform rotate-[1.2deg]"
              aria-hidden="true"
            />

            {/* Front Sketchbook Mount */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/60 shadow-[0_6px_24px_rgba(36,33,42,0.05)] p-4 sm:p-5 flex flex-col justify-between transform -rotate-[0.6deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(36,33,42,0.08)]">
              
              {/* Archival Top Header */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-soft-pink/35 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block transition-transform duration-200 group-hover:scale-125" />
                  <span className="font-semibold text-deep-pink">STUDY 01</span>
                  <span className="text-soft-pink select-none" aria-hidden="true">/</span>
                  <span className="font-medium text-ink/80">PAINTING ON CANVAS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-deep-pink font-semibold hidden sm:inline">
                    [ ACRYLIC & BRUSH ON CANVAS ]
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-ink/65 tabular-nums">
                    BRUSH · COLOR · CANVAS
                  </span>
                  <span className="hidden sm:inline text-soft-pink select-none">·</span>
                  <span className="hidden sm:inline font-mono text-[9px] text-deep-pink font-semibold">
                    [REF: 01-CANVAS]
                  </span>
                </div>
              </div>

              {/* Drawing Plate with Registration Marks */}
              <div className="relative aspect-[16/11] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-warm-ivory/60 border border-soft-pink/30 flex items-center justify-center">
                {/* Archival corner registration marks */}
                <div className="absolute top-2 left-2 text-ink/30 text-[10px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌜</div>
                <div className="absolute top-2 right-2 text-ink/30 text-[10px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌝</div>
                <div className="absolute bottom-2 left-2 text-ink/30 text-[10px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌞</div>
                <div className="absolute bottom-2 right-2 text-ink/30 text-[10px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌟</div>

                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.018]"
                />

                {/* Tactile Sun-Gold Washi Tape Tab */}
                <WashiTape color="sun" angle="corner-45" className="absolute -top-3 -right-3 transition-transform duration-300 group-hover:rotate-[43deg]" />

                {/* Micro Studio Observation Stamp */}
                <div className="absolute bottom-2.5 right-2.5 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  BRUSHWORK · COLOR
                </div>
              </div>

              {/* Bottom Caption Plaque */}
              <div className="mt-3 pt-2.5 border-t border-soft-pink/35 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/75">
                <div className="flex flex-col">
                  <span className="font-display font-medium text-sm sm:text-base text-ink group-hover:text-deep-pink transition-colors">
                    {label || 'study 01 · painting on canvas'}
                  </span>
                  <span className="type-handwriting-note text-[12px] sm:text-[13px] text-ink/80 italic">
                    {note || 'building the image with loose marks, color, and gesture'}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-deep-pink font-semibold">
                    {caption || 'acrylic & brush on canvas'}
                  </span>
                  {/* Drawing Pigment Swatch Chips */}
                  <div className="flex items-center gap-1.5" title="Canvas pigment swatches">
                    <span className="w-2.5 h-2.5 rounded-full bg-signature-pink shadow-2xs border border-white/60 hover:scale-125 transition-transform duration-200 cursor-pointer" title="Rose Quartz" />
                    <span className="w-2.5 h-2.5 rounded-full bg-warm-sun shadow-2xs border border-white/60 hover:scale-125 transition-transform duration-200 cursor-pointer" title="Ochre Sun" />
                    <span className="w-2.5 h-2.5 rounded-full bg-ink shadow-2xs border border-white/60 hover:scale-125 transition-transform duration-200 cursor-pointer" title="Carbon Ink" />
                    <span className="w-2.5 h-2.5 rounded-full bg-soft-pink shadow-2xs border border-white/60 hover:scale-125 transition-transform duration-200 cursor-pointer" title="Blush" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      }

      case 'fragment': {
        // VASE: Hand-Painted Ceramic Object
        return (
          <div className={`relative group ${className}`}>
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_16px_rgba(36,33,42,0.04)] p-3.5 sm:p-4.5 flex flex-col justify-between transform rotate-[0.8deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-hover:shadow-[0_10px_28px_rgba(36,33,42,0.08)]">
              
              {/* Tactile Sea-tinted Washi Tape Tab */}
              <WashiTape color="sea" angle="corner-135" className="absolute -top-2.5 -left-2.5 transition-transform duration-300 group-hover:rotate-[-43deg]" />

              {/* Object Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider select-none text-ink/75">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-sun transition-transform duration-200 group-hover:scale-125" />
                  <span className="font-semibold text-deep-pink">STUDY 02</span>
                  <span className="text-soft-pink select-none" aria-hidden="true">/</span>
                  <span className="font-medium text-ink/80 font-body uppercase text-[9px]">HAND-PAINTED VASE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-sea font-semibold hidden sm:inline">
                    [ DRAWING ON CERAMIC ]
                  </span>
                  <span className="text-[9px] text-ink/65 uppercase tracking-wide">
                    HAND-DRAWN OBJECT
                  </span>
                </div>
              </div>

              {/* Object Plate with Subtle Measurement Ticks */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                {/* Archival corner registration marks */}
                <div className="absolute top-2 left-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌜</div>
                <div className="absolute top-2 right-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌝</div>
                <div className="absolute bottom-2 left-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌞</div>
                <div className="absolute bottom-2 right-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌟</div>

                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.018]"
                />

                {/* Dimension reference indicator */}
                <div className="absolute bottom-2 left-2 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  DRAWING DIRECTLY ON OBJECT
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="mt-2.5 pt-2 border-t border-soft-pink/35 flex items-center justify-between text-xs text-ink/75">
                <div className="flex flex-col">
                  <span className="font-display font-medium text-ink text-xs sm:text-sm group-hover:text-deep-pink transition-colors">
                    {label || 'study 02 · hand-painted vase'}
                  </span>
                  <span className="type-handwriting-note text-[11px] sm:text-[12px] text-ink/80 italic">
                    {note || 'drawing directly onto the vase — turning an ordinary object into something personal'}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-body font-medium text-[10px] text-ink/75 uppercase tracking-wider">
                    {caption || 'drawing on ceramic'}
                  </span>
                  <div className="flex items-center gap-1" title="Vase palette pigments">
                    <span className="w-2 h-2 rounded-full bg-sea shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-deep-pink shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-warm-ivory border border-ink/20 shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      }

      case 'sketch': {
        // WEBSITE: System, Interface, Digital Making
        return (
          <div className={`relative group ${className}`}>
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_16px_rgba(36,33,42,0.04)] p-3.5 sm:p-4.5 flex flex-col justify-between transform -rotate-[0.8deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-hover:shadow-[0_10px_28px_rgba(36,33,42,0.08)]">
              
              {/* Tactile Pink Washi Tape Tab */}
              <WashiTape color="pink" angle="corner-45" className="absolute -top-2.5 -right-2.5 transition-transform duration-300 group-hover:rotate-[43deg]" />
              
              {/* Digital Browser Chrome Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider select-none text-ink/75">
                <div className="flex items-center gap-1.5">
                  {/* System window dots */}
                  <span className="w-2 h-2 rounded-full bg-signature-pink/85 transition-transform duration-200 group-hover:scale-110" />
                  <span className="w-2 h-2 rounded-full bg-warm-sun/85 transition-transform duration-200 group-hover:scale-110" />
                  <span className="w-2 h-2 rounded-full bg-sea/85 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-mono text-[9px] text-ink/70 ml-1 font-medium">system.nada/flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-sea font-semibold hidden sm:inline">
                    [ VIEWPORT GRID ]
                  </span>
                  <span className="font-mono text-[9px] text-sea font-semibold uppercase">
                    DIGITAL CRAFT
                  </span>
                </div>
              </div>

              {/* Digital Interface Viewport */}
              <div className="relative aspect-[5/4] w-full rounded-xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                {/* Micro Wireframe Grid Markers */}
                <div className="absolute top-2 left-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">+</div>
                <div className="absolute top-2 right-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">+</div>
                <div className="absolute bottom-2 left-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">+</div>
                <div className="absolute bottom-2 right-2 text-ink/30 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">+</div>

                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.018]"
                />

                {/* Digital Wireframe Grid Tag */}
                <div className="absolute top-2 right-2 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  UI / UX ARCHITECTURE
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="mt-2.5 pt-2 border-t border-soft-pink/35 flex items-center justify-between text-xs text-ink/75">
                <div className="flex flex-col">
                  <span className="font-display font-medium text-ink text-xs sm:text-sm group-hover:text-deep-pink transition-colors">
                    {label || 'study 03 · flow'}
                  </span>
                  <span className="type-handwriting-note text-[11px] sm:text-[12px] text-ink/80 italic">
                    {note || 'hierarchy & interaction logic'}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-body font-medium text-[10px] text-ink/75 uppercase tracking-wider">
                    {caption || 'ui / ux structure'}
                  </span>
                  <div className="flex items-center gap-1" title="Digital layout pigments">
                    <span className="w-2 h-2 rounded-full bg-sea shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-signature-pink shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-warm-sun shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      }

      default: {
        return (
          <div className={`relative rounded-2xl overflow-hidden bg-warm-ivory border border-soft-pink/40 shadow-xs ${className}`}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {label && (
              <div className="p-3 bg-warm-ivory/95 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
                <span className="font-display font-medium">{label}</span>
                {caption && <span className="font-body font-medium text-[11px] text-ink/80 uppercase tracking-wider">{caption}</span>}
              </div>
            )}
          </div>
        );
      }
    }
  }

  // Visual Scaffolding when real artwork is still in preparation
  switch (variant) {
    case 'primary': {
      return (
        <motion.div
          className={`relative w-full aspect-[16/11] rounded-[28px] overflow-hidden bg-warm-ivory border border-soft-pink/60 shadow-xs p-6 sm:p-8 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Subtle Organic Color Accent in Background */}
          <div className="absolute -top-10 -right-10 -z-10 w-48 h-48 opacity-30 pointer-events-none">
            <OrganicShape variant="circle" fill="#F6C4D3" className="w-full h-full" />
          </div>

          {/* Top Registration / Studio Coordinates */}
          <div className="flex items-center justify-between text-[11px] font-body tracking-[0.18em] uppercase text-ink/70 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/70" />
              <span>{label || 'study 01 · painting on canvas'}</span>
            </span>
            <span className="font-mono text-[10px] text-ink/65">+ [ 24° · 18° ] +</span>
          </div>

          {/* Studio Canvas / Vector Construction Scaffold */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <svg
              viewBox="0 0 420 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[190px]"
              aria-hidden="true"
            >
              {/* Studio Crop / Alignment Marks */}
              <line x1="20" y1="20" x2="35" y2="20" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="20" x2="20" y2="35" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="400" y1="20" x2="385" y2="20" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="400" y1="20" x2="400" y2="35" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="200" x2="35" y2="200" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="200" x2="20" y2="185" stroke="#24212A" strokeWidth="1" opacity="0.2" />

              {/* Expressive Abstract Design Shapes */}
              <path
                d="M 60 140 C 100 60, 180 50, 240 100 C 290 140, 340 90, 370 70"
                stroke="#E85D8E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 120 160 C 180 180, 260 160, 310 130"
                stroke="#55B9C6"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx="240" cy="100" r="28" fill="#F4C95D" opacity="0.35" />
              <circle cx="180" cy="110" r="5" fill="#B93668" />
              <path
                d="M 150 70 C 170 60, 195 62, 210 75"
                stroke="#24212A"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Bottom Annotation Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-soft-pink/30 text-xs text-ink/75">
            <span className="type-handwriting-note italic text-ink/85">
              building an image with brushwork, color & gesture
            </span>
            <span className="text-[10px] font-body tracking-[0.16em] uppercase text-ink/70">
              {caption || 'acrylic on canvas'}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'fragment': {
      return (
        <motion.div
          className={`relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-warm-ivory border border-soft-pink/50 shadow-xs p-5 sm:p-6 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between text-[10px] font-body tracking-[0.16em] uppercase text-ink/70 select-none">
            <span>{label || 'study 02 · hand-painted vase'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-warm-sun" />
          </div>

          {/* Abstract Sketch Construction */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <svg
              viewBox="0 0 240 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[120px]"
              aria-hidden="true"
            >
              {/* Organic contour outline */}
              <ellipse cx="120" cy="80" rx="70" ry="48" stroke="#B93668" strokeWidth="2" strokeDasharray="5 3" opacity="0.6" />
              <path
                d="M 80 95 C 105 60, 145 60, 165 95"
                stroke="#E85D8E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="120" cy="75" r="16" fill="#F6C4D3" opacity="0.5" />
            </svg>
          </div>

          {/* Bottom Caption */}
          <div className="pt-2 border-t border-soft-pink/25 flex items-center justify-between text-[11px] text-ink/75">
            <span className="type-handwriting-note italic text-ink/80">
              drawing directly onto an everyday object
            </span>
            <span className="text-[9px] uppercase tracking-widest text-ink/65">
              {caption || 'drawing on ceramic'}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'sketch': {
      return (
        <motion.div
          className={`relative w-full aspect-[5/4] rounded-[20px] overflow-hidden bg-warm-ivory/90 border border-soft-pink/40 p-4 sm:p-5 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between text-[10px] font-body tracking-[0.16em] uppercase text-ink/70 select-none">
            <span>{label || 'interface / logic'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sea" />
          </div>

          {/* Micro Wireframe / Interface Study */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <svg
              viewBox="0 0 200 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[90px]"
              aria-hidden="true"
            >
              <rect x="25" y="15" width="150" height="100" rx="10" stroke="#24212A" strokeWidth="1.5" opacity="0.3" />
              <line x1="25" y1="42" x2="175" y2="42" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <circle cx="45" cy="28" r="4" fill="#E85D8E" opacity="0.7" />
              <circle cx="60" cy="28" r="4" fill="#F4C95D" opacity="0.7" />
              <rect x="45" y="60" width="65" height="10" rx="3" fill="#F6C4D3" opacity="0.6" />
              <rect x="45" y="80" width="110" height="6" rx="2" fill="#24212A" opacity="0.15" />
              <rect x="45" y="93" width="85" height="6" rx="2" fill="#24212A" opacity="0.1" />
            </svg>
          </div>

          {/* Bottom Caption */}
          <div className="pt-2 border-t border-soft-pink/20 text-[10px] text-ink/75 flex items-center justify-between">
            <span className="type-handwriting-note italic text-ink/80">
              flow & hierarchy
            </span>
            <span className="uppercase tracking-widest text-[9px] text-ink/65">
              {caption || 'ui / ux concept'}
            </span>
          </div>
        </motion.div>
      );
    }

    default:
      return null;
  }
};
