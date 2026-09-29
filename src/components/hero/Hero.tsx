import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { NadaSymbol } from '../visual/NadaSymbol';
import { CompassMark, ObservationCircleMark, HandDrawnArrow, RegistrationCrossMark } from '../visual/EditorialMarks';
import { HeroArtwork } from './HeroArtwork';
import signatureUrl from '../../assets/images/signature.png';

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
  const heroLineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroLineRef,
    offset: ['start end', 'end start'],
  });

  const heroLineProgress = useTransform(scrollYProgress, [0.0, 0.5], [0, 1]);

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
            <CompassMark size={14} color="#E85D8E" />
            <span>[ 29°58'N · 31°15'E ]</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
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
          <motion.div
            className="group/hero-title relative inline-block cursor-default"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            whileHover={shouldReduceMotion ? undefined : { x: 2, transition: { duration: 0.2, ease: 'easeOut' } }}
          >
            <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
              <h1 className="type-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink font-semibold tracking-[-0.035em] leading-[0.95] transition-colors duration-300 group-hover/hero-title:text-ink/95">
                NADA
              </h1>
              <motion.span
                className="type-handwriting-note text-sm sm:text-base lg:text-lg text-ink/75 italic select-none pb-2 sm:pb-3 transition-colors duration-200 group-hover/hero-title:text-deep-pink"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                (a personal notebook)
              </motion.span>
            </div>
            {/* Subtle organic curiosity scribble next to identity */}
            <motion.div
              className="absolute -top-3 sm:-top-5 -right-8 sm:-right-12 pointer-events-none transition-transform duration-300 group-hover/hero-title:rotate-6 group-hover/hero-title:scale-105"
              initial={shouldReduceMotion ? { opacity: 0.85 } : { opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
            >
              <HandDrawnStroke variant="scribble" color="#E85D8E" strokeWidth={2.2} />
            </motion.div>
          </motion.div>

          {/* Central Statement: I NOTICE THINGS. */}
          <motion.div
            className="group/notice mt-6 sm:mt-8 max-w-xl cursor-default"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          >
            <h2 className="type-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink/90 font-normal tracking-[-0.02em] leading-[1.12] transition-colors duration-200 group-hover/notice:text-ink">
              I NOTICE THINGS.
            </h2>
            <motion.div
              className="w-36 sm:w-48 mt-2 pointer-events-none transition-transform duration-300 group-hover/notice:scale-x-105"
              initial={shouldReduceMotion ? { opacity: 0.85 } : { opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.85, scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
              style={{ originX: 0 }}
            >
              <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={2.8} />
            </motion.div>
          </motion.div>

          {/* Supporting Micro Narrative Fragment */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-6 sm:mt-7 flex items-baseline gap-3 text-sm sm:text-base text-ink/75 max-w-md relative"
          >
            <NadaSymbol name="thought" size={15} color="#E85D8E" className="select-none shrink-0" />
            <p className="type-body text-xs sm:text-sm tracking-wide text-ink/80 font-medium leading-relaxed">
              the unexpected patterns, the overlooked details, the way light shifts, and why things are the way they are.
            </p>
            {/* Subtle intentional observation mark */}
            <div className="hidden sm:inline-flex items-center gap-1.5 absolute -right-16 top-0 opacity-70 pointer-events-none select-none text-[9px] font-mono text-deep-pink">
              <HandDrawnArrow direction="right" size={24} color="#E85D8E" strokeWidth={1.5} />
              <span>[noticing]</span>
            </div>
          </motion.div>

          {/* Art Journal Tactile Marginalia & Swatch Strip */}
          <motion.div
            {...fadeUp(0.8)}
            className="mt-8 sm:mt-10 pt-5 border-t border-soft-pink/35 flex flex-wrap items-center justify-between gap-y-3.5 gap-x-6 text-xs text-ink/75"
          >
            {/* Left Cluster: Micro Palette Swatch Chips & Artist Note */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5">
              {/* Micro Palette Swatch Chips */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-body font-semibold tracking-[0.16em] uppercase text-deep-pink">
                  PALETTE
                </span>
                <div className="flex items-center gap-1.5" title="Journal ink colors">
                  <button type="button" aria-label="Signature Pink pigment" className="w-2.5 h-2.5 rounded-full bg-signature-pink shadow-xs hover:scale-130 focus-visible:scale-130 focus-visible:outline-2 focus-visible:outline-signature-pink transition-transform duration-200 cursor-pointer" />
                  <button type="button" aria-label="Soft Pink pigment" className="w-2.5 h-2.5 rounded-full bg-soft-pink border border-signature-pink/30 shadow-xs hover:scale-130 focus-visible:scale-130 focus-visible:outline-2 focus-visible:outline-signature-pink transition-transform duration-200 cursor-pointer" />
                  <button type="button" aria-label="Warm Sun pigment" className="w-2.5 h-2.5 rounded-full bg-warm-sun shadow-xs hover:scale-130 focus-visible:scale-130 focus-visible:outline-2 focus-visible:outline-warm-sun transition-transform duration-200 cursor-pointer" />
                  <button type="button" aria-label="Sea pigment" className="w-2.5 h-2.5 rounded-full bg-sea shadow-xs hover:scale-130 focus-visible:scale-130 focus-visible:outline-2 focus-visible:outline-sea transition-transform duration-200 cursor-pointer" />
                  <button type="button" aria-label="Ink pigment" className="w-2.5 h-2.5 rounded-full bg-ink shadow-xs hover:scale-130 focus-visible:scale-130 focus-visible:outline-2 focus-visible:outline-ink transition-transform duration-200 cursor-pointer" />
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
            </div>

            {/* Authentic artist signature — tiny handwritten personal mark (10px mobile, 11px tablet, 12px desktop) */}
            <div className="inline-flex items-center pl-1 select-none pointer-events-none" aria-hidden="true">
              <img
                src={signatureUrl}
                alt="Nada Nemr signature"
                className="h-[10px] sm:h-[11px] md:h-[12px] w-auto object-contain select-none pointer-events-none"
              />
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
        ref={heroLineRef}
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
            progress={shouldReduceMotion ? undefined : heroLineProgress}
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
