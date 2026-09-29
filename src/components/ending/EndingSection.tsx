import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { NadaSignature } from '../visual/NadaSignature';
import { NadaSymbol } from '../visual/NadaSymbol';

export interface EndingSectionProps {
  className?: string;
}

/**
 * EndingSection — "There’s always something new to notice."
 * 
 * Final page of the NADA Art Journal.
 * Not a corporate footer or contact form.
 * Represents the calm, resolved conclusion where the journal closes,
 * but the continuous cycle remains open to observation.
 * 
 * Visual Language:
 * - Generous warm ivory space and quiet contemplation
 * - Tactile paper sheet cues with corner ticks and archival stamp
 * - Visual echoes of the route line and signature pink underline
 * - Preserves the authentic closing: "NADA", "Say hi ♡", and "see · make · live"
 */
export const EndingSection: React.FC<EndingSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="ending"
      aria-labelledby="ending-heading"
      className={`relative pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-30 lg:pb-36 overflow-hidden editorial-container ${className}`}
    >
      {/* Editorial Journal Folio Header Spread */}
      <motion.div
        className="flex items-center justify-between pb-4 sm:pb-5 border-b border-soft-pink/35 max-w-4xl mx-auto mb-12 sm:mb-16"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-deep-pink">
            FINAL PAGE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            END / BEGIN AGAIN
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block shadow-2xs" />
            <span>NADA // ARCHIVE</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            THE LINE REMAINS OPEN
          </span>
        </div>
      </motion.div>

      {/* Final Journal Page Mount */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative">
        
        {/* Tactile Final Sheet Wrapper */}
        <motion.div
          className="w-full rounded-3xl bg-[#FFFDF9] border border-soft-pink/50 shadow-[0_6px_28px_rgba(36,33,42,0.03)] p-8 sm:p-12 lg:p-16 relative"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Tactile corner crop marks */}
          <div className="absolute top-3 left-3 text-ink/20 text-[10px] font-mono pointer-events-none select-none" aria-hidden="true">⌜</div>
          <div className="absolute top-3 right-3 text-ink/20 text-[10px] font-mono pointer-events-none select-none" aria-hidden="true">⌝</div>
          <div className="absolute bottom-3 left-3 text-ink/20 text-[10px] font-mono pointer-events-none select-none" aria-hidden="true">⌞</div>
          <div className="absolute bottom-3 right-3 text-ink/20 text-[10px] font-mono pointer-events-none select-none" aria-hidden="true">⌟</div>

          {/* Top Marker: Visual Callback to Route Line & Observation Node */}
          <motion.div
            className="w-full flex flex-col items-center mb-8 sm:mb-12"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.22em] uppercase text-ink/75">
                THE LINE REMAINS OPEN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sea" />
            </div>

            <ContinuousLine
              state="route"
              color="#E85D8E"
              strokeWidth={2.2}
              animated={!shouldReduceMotion}
              className="w-full max-w-md max-h-[90px] sm:max-h-[110px] opacity-75"
            />
          </motion.div>

          {/* Primary Statement */}
          <motion.div
            className="mb-10 sm:mb-14 px-2"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            <h2
              id="ending-heading"
              className="type-section-heading text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-[-0.03em] leading-[1.14]"
            >
              There’s always something <br className="hidden sm:inline" />
              <span className="italic font-normal">new to notice.</span>
            </h2>
          </motion.div>

          {/* Signature & Personal Closing */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-5"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          >
            {/* Standardized NADA Signature Treatment */}
            <NadaSignature size="md" />

            {/* Say hi ♡ (Warm, human note) */}
            <motion.div
              className="mt-2 text-lg sm:text-xl text-ink/80 type-handwriting-note italic select-none"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="mailto:nadanemr23@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-deep-pink hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-signature-pink rounded-sm"
                title="Send a note to Nada"
              >
                <span>Say hi</span>
                <span className="text-signature-pink">♡</span>
              </a>
            </motion.div>

            {/* Quiet Continuation Whispers with NadaSymbol Return — Discovery 3 */}
            <div className="mt-4 pt-4 border-t border-soft-pink/30 flex items-center gap-2 text-[10px] font-mono text-ink/65 tracking-widest uppercase">
              <span>[ JOURNAL CLOSED</span>
              <span className="text-soft-pink">·</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group/return inline-flex items-center gap-1.5 text-deep-pink hover:text-signature-pink transition-colors focus-visible:outline-2 focus-visible:outline-signature-pink rounded px-1 py-0.5 cursor-pointer"
                title="Return to page 01"
                aria-label="Return to beginning of journal"
              >
                <span>LOOKING BEGINS AGAIN</span>
                <NadaSymbol name="return" size={13} color="currentColor" className="inline-block transition-transform duration-300 group-hover/return:-rotate-90" />
                <span className="opacity-0 group-hover/return:opacity-100 transition-opacity duration-300 text-[9px] lowercase font-normal hidden sm:inline">[page 01]</span>
              </button>
              <span>]</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Quiet Loop Continuation Horizon */}
        <motion.div
          className="mt-12 sm:mt-16 pt-5 border-t border-soft-pink/25 w-full flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase select-none"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-pink inline-block" />
            <span>PAGE 09 · FINAL SPREAD</span>
            <span className="hidden sm:inline text-soft-pink select-none">·</span>
            <span className="hidden sm:inline text-ink/60">SEE · MAKE · LIVE</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group/open flex items-center gap-1.5 text-deep-pink hover:text-signature-pink transition-colors cursor-pointer"
            title="Return to the beginning"
          >
            <span>cycle remains open</span>
            <NadaSymbol name="return" size={13} color="#E85D8E" className="inline-block transition-transform duration-300 group-hover/open:-rotate-90" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
