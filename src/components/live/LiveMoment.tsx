import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { OrganicShape } from '../visual/OrganicShape';
import { WashiTape } from '../visual/WashiTape';

export type LiveMomentVariant = 'primary' | 'portrait' | 'landscape' | 'fragment';

export interface LiveMomentProps {
  /** Optional source path for real personal photograph asset when available */
  src?: string;
  /** Accessible alt description for the photograph */
  alt?: string;
  /** Visual scale and aspect variant */
  variant?: LiveMomentVariant;
  /** Minimal handwritten-style caption or note */
  caption?: string;
  /** Location or contextual note */
  location?: string;
  /** Narrative theme tag */
  theme?: 'PEOPLE' | 'PLACES' | 'MOMENTS';
  className?: string;
}

/**
 * LiveMoment
 * 
 * Reusable editorial memory frame for the LIVE field diary section.
 * Designed like photographic prints pasted into a personal travel/field journal:
 * - Varied aspect ratios and tactile photo-mount cues
 * - Translucent washi tape tabs (Sea #55B9C6 and Sun #F4C95D)
 * - Corner crop marks and registration ticks
 * - Offset handwritten captions and unboxed field metadata
 */
export const LiveMoment: React.FC<LiveMomentProps> = ({
  src,
  alt = 'Personal memory frame by Nada',
  variant = 'primary',
  caption,
  location,
  theme,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If real photograph is provided, render each with tailored photo-print mounting
  if (src) {
    switch (variant) {
      case 'primary': {
        // Dominant Hero Photograph: Outdoor Volleyball in Sunshine
        return (
          <div
            tabIndex={0}
            role="region"
            aria-label="Moment 01: Outdoor volleyball game in the sunlight"
            className={`relative group rounded-2xl sm:rounded-3xl focus-visible:outline-2 focus-visible:outline-sea/70 ${className}`}
          >
            {/* Subtle paper shadow sheet beneath for tactile journal depth */}
            <div
              className="absolute inset-1 sm:inset-2 -z-10 rounded-2xl sm:rounded-3xl bg-warm-ivory border border-soft-pink/40 shadow-xs pointer-events-none transform -rotate-[1deg] transition-transform duration-300 group-hover:-rotate-[1.5deg] group-focus-visible:-rotate-[1.5deg]"
              aria-hidden="true"
            />

            {/* Front Photo Mount */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_8px_28px_rgba(36,33,42,0.06)] p-3.5 sm:p-5 flex flex-col justify-between transform rotate-[0.5deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-focus-visible:rotate-0 group-focus-visible:-translate-y-1 group-hover:shadow-[0_14px_40px_rgba(36,33,42,0.09)]">
              
              {/* Sun-gold angled washi tape tab at top center-right */}
              <WashiTape color="sun" angle="tilt-right" width="w-12 sm:w-14" className="absolute -top-3 right-8 sm:right-12 transition-transform duration-300 group-hover:rotate-3 group-focus-visible:rotate-3" />

              {/* Archival Journal Folio Header */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-soft-pink/35 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sea inline-block transition-transform duration-200 group-hover:scale-125" />
                  <span className="font-semibold text-deep-pink">MOMENT 01</span>
                  <span className="text-soft-pink select-none" aria-hidden="true">/</span>
                  <span className="font-medium text-ink/80">{theme || 'MOMENTS'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-deep-pink font-semibold hidden sm:inline">
                    [ ✦ SUN & OPEN AIR ]
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-ink/65 uppercase tracking-wide">
                    OUTSIDE · SUNSHINE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-warm-sun shadow-2xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Sunlight" />
                </div>
              </div>

              {/* Photo Viewport with Corner Registration Ticks */}
              <div className="relative aspect-[16/11] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                {/* Photo crop ticks */}
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

                {/* Micro Outdoor Tag */}
                <div className="absolute bottom-2.5 right-2.5 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  OPEN AIR · GAME
                </div>
              </div>

              {/* Caption Bar */}
              <div className="mt-3 pt-2.5 border-t border-soft-pink/35 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/75">
                <div className="flex flex-col">
                  <span className="type-handwriting-note text-sm sm:text-base text-ink/90 italic font-normal group-hover:text-deep-pink transition-colors">
                    {caption || 'somewhere sunny · a good day'}
                  </span>
                  <span className="text-[10px] font-mono text-ink/55 tracking-wider uppercase">
                    [ afternoon in the open air ]
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-ink/80 font-body font-medium">
                  {location && <span>{location}</span>}
                  {theme && <span className="text-deep-pink font-semibold">· {theme}</span>}
                </div>
              </div>

            </div>
          </div>
        );
      }

      case 'landscape': {
        // Landscape Photo: Ships on the Open Sea Horizon
        return (
          <div
            tabIndex={0}
            role="region"
            aria-label="Moment 02: Ships navigating on the open sea horizon"
            className={`relative group rounded-2xl focus-visible:outline-2 focus-visible:outline-sea/70 ${className}`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_20px_rgba(36,33,42,0.05)] p-3.5 sm:p-4.5 flex flex-col justify-between transform -rotate-[0.8deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-focus-visible:rotate-0 group-focus-visible:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(36,33,42,0.08)]">
              
              {/* Sea-blue washi tape tab at top left */}
              <WashiTape color="sea" angle="tilt-left" width="w-11" className="absolute -top-2.5 left-6 sm:left-10 transition-transform duration-300 group-hover:-rotate-3 group-focus-visible:-rotate-3" />

              {/* Top Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider select-none text-ink/75">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sea transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125" />
                  <span className="font-semibold text-deep-pink">MOMENT 02</span>
                  <span className="text-soft-pink select-none" aria-hidden="true">/</span>
                  <span className="font-medium text-ink/80 font-body uppercase text-[9px]">{theme || 'PLACES'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-sea font-semibold hidden sm:inline">
                    [ ~ COASTAL HORIZON ]
                  </span>
                  <span className="text-[9px] text-sea font-semibold uppercase tracking-wide">
                    COASTAL HORIZON
                  </span>
                </div>
              </div>

              {/* Photo Viewport */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                {/* Crop marks */}
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

                {/* Horizon indicator */}
                <div className="absolute bottom-2 left-2 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  OPEN WATER · SHIPS
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="mt-2.5 pt-2 border-t border-soft-pink/35 flex items-center justify-between text-xs text-ink/75">
                <span className="type-handwriting-note italic text-ink/85 text-xs sm:text-sm group-hover:text-deep-pink group-focus-visible:text-deep-pink transition-colors">
                  {caption || 'looking out · the sea'}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-ink/70">
                  <span>{location || 'horizon'}</span>
                  <span className="text-soft-pink">·</span>
                  <span className="text-deep-pink font-semibold">{theme || 'PLACES'}</span>
                </div>
              </div>

            </div>
          </div>
        );
      }

      case 'portrait': {
        // Vertical Portrait Moment: Quiet by the Water
        return (
          <div
            tabIndex={0}
            role="region"
            aria-label="Moment 03: Calm sea waters extending to the horizon"
            className={`relative group rounded-2xl focus-visible:outline-2 focus-visible:outline-sea/70 ${className}`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_20px_rgba(36,33,42,0.05)] p-3.5 sm:p-4.5 flex flex-col justify-between transform rotate-[1.2deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-focus-visible:rotate-0 group-focus-visible:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(36,33,42,0.08)]">
              
              {/* Sun-gold corner tab */}
              <WashiTape color="sun" angle="tilt-right" width="w-9" height="h-4" className="absolute -top-2.5 right-6 transition-transform duration-300 group-hover:rotate-3 group-focus-visible:rotate-3" />

              {/* Top Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider select-none text-ink/75">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signature-pink transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125" />
                  <span className="font-semibold text-deep-pink">MOMENT 03</span>
                  <span className="text-soft-pink select-none" aria-hidden="true">/</span>
                  <span className="font-medium text-ink/80 font-body uppercase text-[9px]">{theme || 'MOMENTS'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-deep-pink font-semibold hidden sm:inline">
                    [ ○ QUIET WATER ]
                  </span>
                  <span className="text-[9px] text-ink/65 uppercase tracking-wide">
                    COASTAL LIGHT
                  </span>
                </div>
              </div>

              {/* Photo Viewport */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                {/* Crop marks */}
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

                {/* Micro Stamp */}
                <div className="absolute bottom-2 right-2 bg-warm-ivory/95 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-ink/75 border border-soft-pink/40 shadow-xs pointer-events-none z-10">
                  WATER & CALM
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="mt-2.5 pt-2 border-t border-soft-pink/35 flex items-center justify-between text-xs text-ink/75">
                <span className="type-handwriting-note italic text-ink/85 text-xs sm:text-sm group-hover:text-deep-pink group-focus-visible:text-deep-pink transition-colors">
                  {caption || 'quiet by the water'}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-deep-pink font-semibold">
                  {theme || 'MOMENTS'}
                </span>
              </div>

            </div>
          </div>
        );
      }

      case 'fragment': {
        // Intimate Snapshot: Curls Detail / Personal Moment
        return (
          <div
            tabIndex={0}
            role="region"
            aria-label="Moment 04: Close-up detail of dark curls"
            className={`relative group rounded-2xl focus-visible:outline-2 focus-visible:outline-sea/70 ${className}`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_16px_rgba(36,33,42,0.04)] p-3 sm:p-3.5 flex flex-col justify-between transform -rotate-[1.5deg] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 group-focus-visible:rotate-0 group-focus-visible:-translate-y-1 group-hover:shadow-[0_10px_28px_rgba(36,33,42,0.07)]">
              
              {/* Sea-tinted tape tab */}
              <WashiTape color="sea" angle="tilt-left" width="w-9" height="h-4" className="absolute -top-2.5 left-4 transition-transform duration-300 group-hover:-rotate-3 group-focus-visible:-rotate-3" />

              {/* Top Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-soft-pink/30 text-[9px] font-mono tracking-wider select-none text-ink/75">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-sun transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125" />
                  <span className="font-semibold text-deep-pink">MOMENT 04</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 font-mono text-[8px] text-deep-pink font-semibold hidden sm:inline">
                    [ ✦ SPONTANEOUS ]
                  </span>
                  <span className="text-[9px] text-ink/60 uppercase">
                    SNAPSHOT
                  </span>
                </div>
              </div>

              {/* Photo Viewport */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-warm-ivory border border-soft-pink/30 flex items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.018]"
                />
              </div>

              {/* Bottom Caption */}
              <div className="mt-2 pt-1.5 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
                <span className="type-handwriting-note italic text-ink/80 text-[11px] sm:text-xs group-hover:text-deep-pink group-focus-visible:text-deep-pink transition-colors">
                  {caption || 'one of those moments'}
                </span>
                <span className="text-[9px] font-mono uppercase text-deep-pink font-semibold">
                  {theme || 'MOMENTS'}
                </span>
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
            {(caption || location || theme) && (
              <div className="p-3 bg-warm-ivory/95 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
                {caption && <span className="type-handwriting-note italic">{caption}</span>}
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-ink/80 font-body font-medium">
                  {location && <span>{location}</span>}
                  {theme && <span className="text-deep-pink font-semibold">· {theme}</span>}
                </div>
              </div>
            )}
          </div>
        );
      }
    }
  }

  // Designed memory frame scaffolding when real photograph is in preparation
  switch (variant) {
    case 'primary': {
      return (
        <motion.div
          className={`relative w-full aspect-[16/11] rounded-[28px] overflow-hidden bg-warm-ivory border border-soft-pink/50 shadow-xs p-6 sm:p-8 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {/* Subtle Sunshine & Sea Accents in background */}
          <div className="absolute -top-6 -right-6 -z-10 w-44 h-44 opacity-25 pointer-events-none">
            <OrganicShape variant="circle" fill="#55B9C6" className="w-full h-full" />
          </div>
          <div className="absolute -bottom-8 -left-8 -z-10 w-36 h-36 opacity-30 pointer-events-none">
            <OrganicShape variant="circle" fill="#F4C95D" className="w-full h-full" />
          </div>

          {/* Top Metadata Bar */}
          <div className="flex items-center justify-between text-[11px] font-body tracking-[0.18em] uppercase text-ink/70 select-none">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sea" />
              <span>{theme || 'PLACES · MOMENTS'}</span>
            </span>
            <span className="text-[10px] text-ink/65">frame 01 · memory</span>
          </div>

          {/* Designed Abstract Horizon / Memory Study */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <svg
              viewBox="0 0 440 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[190px]"
              aria-hidden="true"
            >
              {/* Studio Corner Crop Marks */}
              <line x1="20" y1="20" x2="35" y2="20" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="20" x2="20" y2="35" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="420" y1="20" x2="405" y2="20" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="420" y1="20" x2="420" y2="35" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="200" x2="35" y2="200" stroke="#24212A" strokeWidth="1" opacity="0.2" />
              <line x1="20" y1="200" x2="20" y2="185" stroke="#24212A" strokeWidth="1" opacity="0.2" />

              {/* Sun / Light Circle */}
              <circle cx="280" cy="80" r="34" fill="#F4C95D" opacity="0.4" />

              {/* Horizon & Sea Waves */}
              <path
                d="M 40 135 C 120 125, 200 145, 280 130 C 340 120, 380 132, 400 128"
                stroke="#55B9C6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 60 160 C 140 152, 220 168, 300 155 C 360 145, 390 155, 410 150"
                stroke="#55B9C6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Wandering Path / Contour of a good day */}
              <path
                d="M 50 180 C 130 170, 180 120, 240 110 C 310 100, 360 140, 390 160"
                stroke="#E85D8E"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Bottom Caption Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-soft-pink/30 text-xs text-ink/75">
            <span className="type-handwriting-note italic text-sm text-ink/85">
              {caption || 'somewhere sunny · a good day'}
            </span>
            <span className="text-[10px] font-body tracking-[0.16em] uppercase text-ink/65">
              {location || 'by the water'}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'portrait': {
      return (
        <motion.div
          className={`relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-warm-ivory border border-soft-pink/50 shadow-xs p-5 sm:p-6 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Top Header */}
          <div className="flex items-center justify-between text-[10px] font-body tracking-[0.16em] uppercase text-ink/70 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
              <span>{theme || 'PEOPLE'}</span>
            </span>
            <span>portrait</span>
          </div>

          {/* Social Presence / Organic Silhouettes */}
          <div className="relative flex-1 flex items-center justify-center my-3">
            <svg
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[160px]"
              aria-hidden="true"
            >
              {/* Clustered conversation points (warm social presence) */}
              <circle cx="95" cy="95" r="28" fill="#F6C4D3" opacity="0.6" />
              <circle cx="130" cy="115" r="24" fill="#F4C95D" opacity="0.5" />
              <circle cx="105" cy="85" r="5" fill="#E85D8E" />
              <circle cx="135" cy="105" r="4.5" fill="#B93668" />
              <path
                d="M 75 145 C 95 130, 135 130, 155 145"
                stroke="#24212A"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Bottom Caption */}
          <div className="pt-2.5 border-t border-soft-pink/25 flex items-center justify-between text-xs text-ink/75">
            <span className="type-handwriting-note italic text-ink/85">
              {caption || 'with my people'}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-ink/65">
              {location || 'laughter'}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'landscape': {
      return (
        <motion.div
          className={`relative w-full aspect-[16/9] rounded-[22px] overflow-hidden bg-warm-ivory border border-soft-pink/40 shadow-xs p-4 sm:p-5 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between text-[10px] font-body tracking-[0.16em] uppercase text-ink/70 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sea" />
              <span>{theme || 'PLACES'}</span>
            </span>
            <span>open space</span>
          </div>

          {/* Landscape / Sea Horizon Study */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <svg
              viewBox="0 0 300 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[90px]"
              aria-hidden="true"
            >
              <line x1="20" y1="70" x2="280" y2="70" stroke="#55B9C6" strokeWidth="1.5" opacity="0.6" />
              <path
                d="M 30 90 C 90 82, 160 98, 230 85 C 260 80, 275 84, 280 82"
                stroke="#55B9C6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="210" cy="50" r="16" fill="#F4C95D" opacity="0.5" />
            </svg>
          </div>

          {/* Bottom Caption */}
          <div className="pt-2 border-t border-soft-pink/20 flex items-center justify-between text-xs text-ink/75">
            <span className="type-handwriting-note italic text-ink/85">
              {caption || 'looking out · the sea'}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-ink/65">
              {location || 'horizon'}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'fragment': {
      return (
        <motion.div
          className={`relative w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-warm-ivory border border-soft-pink/40 shadow-xs p-4 flex flex-col justify-between ${className}`}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between text-[9px] font-body tracking-[0.16em] uppercase text-ink/70 select-none">
            <span>{theme || 'MOMENTS'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-warm-sun" />
          </div>

          {/* Quick Memory Snapshot Mark */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[75px]"
              aria-hidden="true"
            >
              <rect x="20" y="20" width="80" height="80" rx="8" stroke="#E85D8E" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
              <circle cx="60" cy="60" r="14" fill="#F6C4D3" opacity="0.7" />
              <path d="M 45 65 C 55 50, 68 50, 75 65" stroke="#24212A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom Caption */}
          <div className="pt-2 border-t border-soft-pink/20 text-[11px] text-ink/75 flex items-center justify-between">
            <span className="type-handwriting-note italic text-ink/85">
              {caption || 'one of those moments'}
            </span>
          </div>
        </motion.div>
      );
    }

    default:
      return null;
  }
};
