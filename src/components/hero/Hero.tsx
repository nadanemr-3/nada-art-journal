import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { NadaSymbol } from '../visual/NadaSymbol';
import { HeroArtwork } from './HeroArtwork';

export interface HeroProps {
  className?: string;
  portraitSrc?: string;
}

/**
 * Hero Section — "I NOTICE THINGS."
 * 
 * Introduces Nada as an observant, creative, curious human being.
 * Editorial, asymmetric composition featuring generous whitespace,
 * primary typography ("NADA" and "I NOTICE THINGS."), dedicated
 * artwork territory, and the signature continuous pink line.
 */
export const Hero: React.FC<HeroProps> = ({ className = '', portraitSrc }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants calibrated for editorial restraint
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: 'easeOut' as const, delay },
        };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className={`relative min-h-[92vh] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-28 pb-16 overflow-hidden editorial-container ${className}`}
    >
      {/* Editorial Journal Folio Header Spread */}
      <motion.div
        className="flex items-center justify-between pb-4 sm:pb-5 border-b border-soft-pink/35 mb-8 sm:mb-12"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Left: Journal ID & Volume Tag */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-signature-pink inline-block shadow-xs" />
          <span className="text-[11px] font-body font-semibold tracking-[0.22em] uppercase text-deep-pink">
            NADA
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            PERSONAL ART JOURNAL
          </span>
          <span className="hidden sm:inline text-soft-pink select-none" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-ink/65 uppercase">
            VOL. 01 [2026]
          </span>
        </div>

        {/* Right: Folio Entry Stamp & Observation Coordinates */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-sun inline-block" />
            <span>FOLIO ENTRY 01</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            LOOK CLOSER
          </span>
        </div>
      </motion.div>

      {/* Main Asymmetric Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center my-auto">
        {/* Editorial Text Territory (Cols 1-7 on desktop) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          
          {/* Micro Entry Kicker */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono text-deep-pink font-semibold tracking-[0.18em] uppercase">
              01 // OPENING SPREAD
            </span>
            <HandDrawnStroke variant="dash" color="#E85D8E" strokeWidth={2} className="w-6 sm:w-8" />
            <span className="text-[10px] sm:text-[11px] font-body font-medium text-ink/70 tracking-[0.14em] uppercase">
              OBSERVATION NO. 01
            </span>
          </motion.div>

          {/* Identity: NADA */}
          <motion.div {...fadeUp(0.35)} className="relative inline-block">
            <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
              <h1 className="type-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink font-semibold tracking-[-0.035em] leading-[0.95]">
                NADA
              </h1>
              <span className="type-handwriting-note text-sm sm:text-base lg:text-lg text-ink/75 italic select-none pb-2 sm:pb-3">
                (a personal notebook)
              </span>
            </div>
            {/* Subtle organic curiosity scribble next to identity */}
            <div className="absolute -top-3 sm:-top-5 -right-8 sm:-right-12 pointer-events-none opacity-85">
              <HandDrawnStroke variant="scribble" color="#E85D8E" strokeWidth={2.2} />
            </div>
          </motion.div>

          {/* Central Statement: I NOTICE THINGS. */}
          <motion.div {...fadeUp(0.5)} className="mt-6 sm:mt-8 max-w-xl">
            <h2 className="type-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink/90 font-normal tracking-[-0.02em] leading-[1.12]">
              I NOTICE THINGS.
            </h2>
            <div className="w-36 sm:w-48 mt-2 opacity-85 pointer-events-none">
              <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={2.8} />
            </div>
          </motion.div>

          {/* Supporting Micro Narrative Fragment */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-6 sm:mt-7 flex items-baseline gap-3 text-sm sm:text-base text-ink/75 max-w-md"
          >
            <NadaSymbol name="thought" size={15} color="#E85D8E" className="select-none shrink-0" />
            <p className="type-body text-xs sm:text-sm tracking-wide text-ink/80 font-medium leading-relaxed">
              the unexpected patterns, the overlooked details, the way light shifts, and why things are the way they are.
            </p>
          </motion.div>

          {/* Art Journal Tactile Marginalia & Swatch Strip */}
          <motion.div
            {...fadeUp(0.8)}
            className="mt-8 sm:mt-10 pt-5 border-t border-soft-pink/35 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-ink/75"
          >
            {/* Micro Palette Swatch Chips */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-body font-semibold tracking-[0.16em] uppercase text-deep-pink">
                PALETTE
              </span>
              <div className="flex items-center gap-1.5" title="Journal ink colors">
                <span className="w-2.5 h-2.5 rounded-full bg-signature-pink shadow-xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Signature Pink" />
                <span className="w-2.5 h-2.5 rounded-full bg-soft-pink border border-signature-pink/30 shadow-xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Soft Pink" />
                <span className="w-2.5 h-2.5 rounded-full bg-warm-sun shadow-xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Warm Sun" />
                <span className="w-2.5 h-2.5 rounded-full bg-sea shadow-xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Sea" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink shadow-xs hover:scale-125 transition-transform duration-200 cursor-pointer" title="Ink" />
              </div>
              <span className="text-[10px] font-body text-ink/65 tracking-wider font-medium">
                [ inks & notes ]
              </span>
            </div>

            {/* Handwritten artist note — Discovery 1 */}
            <div className="group flex items-center gap-1.5 cursor-default">
              <NadaSymbol name="spark" size={13} color="#E85D8E" className="select-none shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic group-hover:text-deep-pink transition-colors">
                "paying attention is an act of love."
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono text-deep-pink tracking-wider select-none hidden sm:inline">
                [ noticed ✦ ]
              </span>
            </div>
          </motion.div>

        </div>

        {/* Artwork Territory (Cols 8-12 on desktop) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <HeroArtwork src={portraitSrc} />
        </div>
      </div>

      {/* Signature Continuous Pink Line leading downward with Journal Ledger Bar */}
      <motion.div
        className="w-full mt-10 sm:mt-16 pt-4"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <div className="relative">
          <ContinuousLine
            state="hero"
            color="#E85D8E"
            strokeWidth={3}
            animated={!shouldReduceMotion}
            className="w-full max-w-4xl mx-auto"
          />

          {/* Journal Ledger Bar below the line */}
          <div className="flex items-center justify-between px-2 sm:px-4 mt-2 text-[10px] sm:text-[11px] font-body tracking-[0.18em] uppercase text-ink/75">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/80 inline-block" />
              <span className="font-medium">PAGE 01 · OVERVIEW</span>
              <span className="hidden sm:inline text-soft-pink">·</span>
              <span className="hidden sm:inline text-ink/65 font-normal">ROUTE: SEE → MAKE → LIVE</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
              <span>curiosity begins</span>
              <span className="text-signature-pink select-none font-display">↓</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
