import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { SunBurstMark, WaveletMark } from '../visual/EditorialMarks';

export interface MakeToLiveProps {
  className?: string;
}

/**
 * MakeToLive (MAKE → LIVE Transition)
 * 
 * Narrative visual transformation:
 * "I made something → then I went out and lived."
 * 
 * Studio / sketchbook atmosphere of MAKE gradually loosens into the open,
 * sensory world of LIVE:
 * - Controlled studio line & graphite marks loosen
 * - Warm Ivory, Ink, and Pink introduce Sea #55B9C6 with Sun #F4C95D accent
 * - Continuous line transforms from physical brush stroke into undulating wave
 * - Preserves the signature core copy: "making becomes living →"
 * 
 * Designed as an editorial breathing page between MAKE and LIVE.
 */
export const MakeToLive: React.FC<MakeToLiveProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const brushProgress = useTransform(scrollYProgress, [0.15, 0.48], [0, 1]);
  const waveProgress = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-label="Transition — Making to Living"
      className={`relative py-14 sm:py-18 lg:py-24 overflow-hidden editorial-container ${className}`}
    >
      {/* Editorial Journal Folio Threshold Header */}
      <motion.div
        className="flex items-center justify-between pb-3 sm:pb-4 border-b border-soft-pink/30 max-w-4xl mx-auto mb-10 sm:mb-14"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[10px] sm:text-[11px] font-body font-semibold tracking-[0.16em] uppercase text-deep-pink">
            STUDIO → WORLD
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-ink/65">
          <span className="hidden sm:inline">OUT INTO THE FIELD</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sea/85 inline-block shadow-2xs" title="Sea accent" />
        </div>
      </motion.div>

      {/* Visual Transformation Canvas */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Stage A: Studio brush line begins to loosen and release */}
        <motion.div
          className="w-full relative"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Subtle studio indicator connecting from MAKE with paper drift fragment */}
          <div className="flex items-center justify-between px-2 sm:px-6 mb-3 text-[10px] sm:text-[11px] font-body tracking-[0.18em] uppercase text-ink/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
              <span className="font-medium text-ink/75">the studio line loosens</span>
            </div>

            {/* Drifting paper scrap tag */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-warm-ivory border border-soft-pink/40 text-[9px] font-mono text-ink/60 shadow-2xs transform -rotate-2 hover:rotate-0 transition-transform">
              <span>REF: STUDIO EXIT</span>
              <span className="text-signature-pink font-display">↗</span>
            </div>
          </div>

          {/* Expressive Brush Line continuation */}
          <ContinuousLine
            state="brush"
            color="#E85D8E"
            strokeWidth={4.5}
            progress={shouldReduceMotion ? undefined : brushProgress}
            animated={!shouldReduceMotion}
            className="w-full max-h-[130px] sm:max-h-[160px] opacity-90"
          />
        </motion.div>

        {/* Stage B: Central Metamorphosis Badge: "making becomes living →" */}
        <motion.div
          className="my-6 sm:my-8 flex flex-col items-center gap-2 z-10"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Tactile paper card tab */}
          <div className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FFFDF9] border border-soft-pink/55 shadow-xs flex items-center gap-2.5 transform rotate-[0.6deg] transition-transform duration-300 hover:rotate-0 hover:shadow-md">
            <span className="text-sea text-xs select-none" aria-hidden="true">✦</span>
            <span className="type-handwriting-note text-base sm:text-lg lg:text-xl text-ink/90 italic">
              making becomes living
            </span>
            <span className="text-signature-pink text-lg sm:text-xl select-none font-display font-medium">
              →
            </span>
          </div>

          {/* Understated marginalia whisper */}
          <span className="text-[9px] sm:text-[10px] font-mono text-ink/55 tracking-widest uppercase">
            [ the sketchbook closes · stepping into the open air ]
          </span>
        </motion.div>

        {/* Stage C: Wave into open flow (Palette introduces Sea #55B9C6 with Sun accent) */}
        <motion.div
          className="w-full relative -mt-2 sm:-mt-4"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.35 }}
        >
          {/* Wave line: renders Sea blue (#55B9C6) alongside Signature Pink with subtle sun & wavelet marks */}
          <div className="relative">
            <ContinuousLine
              state="wave"
              color="#E85D8E"
              strokeWidth={3.5}
              progress={shouldReduceMotion ? undefined : waveProgress}
              animated={!shouldReduceMotion}
              className="w-full max-h-[150px] sm:max-h-[180px]"
            />
            {/* Subtle floating sun burst and sea wavelet marks */}
            <div className="absolute top-2 right-12 sm:right-24 opacity-75 pointer-events-none select-none">
              <SunBurstMark size={24} color="#F4C95D" />
            </div>
            <div className="absolute bottom-4 left-8 sm:left-16 opacity-60 pointer-events-none select-none">
              <WaveletMark size={32} color="#55B9C6" />
            </div>
          </div>

          {/* Quiet narrative threshold marker leading into LIVE */}
          <div className="flex items-center justify-between px-3 sm:px-8 -mt-2 text-[10px] sm:text-[11px] font-body tracking-[0.18em] uppercase text-ink/75">
            <div className="flex items-center gap-2 text-ink/65 font-mono text-[9px] sm:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-sea" />
              <span>HORIZON SHIFT: SEA & LIGHT</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
              <span>[ toward the open world ]</span>
              <span className="text-signature-pink select-none font-display">↓</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MakeToLive;
