import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { CuriosityPoint, CuriosityPointKey } from './CuriosityPoint';

export interface SeeSectionProps {
  className?: string;
}

interface CuriosityData {
  id: CuriosityPointKey;
  label: string;
  annotation: string;
  note?: string;
}

const CURIOSITY_ITEMS: CuriosityData[] = [
  {
    id: 'maps',
    label: 'MAPS',
    annotation: 'routes & spatial logic',
    note: 'where paths cross and stories begin',
  },
  {
    id: 'science',
    label: 'SCIENCE',
    annotation: 'patterns in nature',
    note: 'observing subtle laws at play',
  },
  {
    id: 'technology',
    label: 'TECHNOLOGY',
    annotation: 'tools & architecture',
    note: 'how we shape ideas into function',
  },
  {
    id: 'people',
    label: 'PEOPLE',
    annotation: 'connection & culture',
    note: 'the warmth of everyday life',
  },
  {
    id: 'art',
    label: 'ART',
    annotation: 'visual expression',
    note: 'noticing composition, color, and marks',
  },
  {
    id: 'why',
    label: 'WHY?',
    annotation: 'the unasked question',
    note: 'always looking beneath the surface',
  },
];

/**
 * SeeSection — "Some things make me curious."
 * 
 * First movement of the NADA narrative:
 * I NOTICE THINGS. → Some things make me curious.
 * 
 * Combines map-like route logic with organic hand-drawn personality.
 * Features an editorial journey through 6 curiosity waypoints:
 * MAPS, SCIENCE, TECHNOLOGY, PEOPLE, ART, and WHY?
 */
export const SeeSection: React.FC<SeeSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="see"
      aria-label="See — Curiosity"
      className={`relative py-20 sm:py-28 lg:py-36 overflow-hidden editorial-container ${className}`}
    >
      {/* Editorial Journal Folio Header Spread */}
      <motion.div
        className="flex items-center justify-between pb-4 sm:pb-5 border-b border-soft-pink/35 mb-8 sm:mb-12"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-deep-pink">
            SEE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            OBSERVATION FIELD
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block" />
            <span>FIELD NOTE NO. 01</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            6 INQUIRIES
          </span>
        </div>
      </motion.div>

      {/* Main Section Statement & Observation Marginalia */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14 lg:mb-16">
        <motion.div
          className="lg:col-span-8 max-w-2xl"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-deep-pink font-semibold tracking-[0.18em] uppercase">
              FIELD OBSERVATIONS // ENTRY 01
            </span>
          </div>

          <h2 className="type-section-heading text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-[-0.025em]">
            Some things make me curious.
          </h2>

          <div className="mt-4 flex items-center gap-3">
            <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={2.8} className="w-44 sm:w-56" />
            <span className="type-handwriting-note text-sm sm:text-base text-ink/80 italic">
              following an idea down its path
            </span>
          </div>
        </motion.div>

        {/* Tactile Margin Note (Desktop) */}
        <motion.div
          className="lg:col-span-4 flex flex-col lg:items-end gap-1.5 text-xs text-ink/75"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-soft-pink/40 bg-warm-ivory/80 shadow-xs">
            <span className="text-signature-pink font-display text-xs" aria-hidden="true">✦</span>
            <span className="type-handwriting-note text-[12px] sm:text-[13px] text-ink/85 italic">
              "ordinary things hold unexpected patterns."
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink/55 pr-2">
            notice · mark · connect
          </span>
        </motion.div>
      </div>

      {/* Continuous Route Spine (Desktop / Tablet view) */}
      <div className="relative my-6 sm:my-8 hidden lg:block">
        <ContinuousLine
          state="route"
          color="#E85D8E"
          strokeWidth={2.75}
          animated={!shouldReduceMotion}
          className="w-full max-w-5xl mx-auto"
        />
      </div>

      {/* Desktop Editorial Waypoints (Asymmetric placement along the route) */}
      <div className="hidden lg:grid grid-cols-6 gap-3.5 xl:gap-5 pt-4 pb-8 relative z-10">
        {CURIOSITY_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className={`flex flex-col ${
              idx === 0
                ? 'translate-y-2'
                : idx === 1
                ? 'translate-y-8'
                : idx === 2
                ? 'translate-y-1'
                : idx === 3
                ? 'translate-y-7'
                : idx === 4
                ? 'translate-y-5'
                : '-translate-y-1'
            }`}
          >
            <CuriosityPoint
              id={item.id}
              label={item.label}
              annotation={item.annotation}
              note={item.note}
              index={idx}
            />
          </div>
        ))}
      </div>

      {/* Tactile Observation Summary Strip (Archival field ribbon) */}
      <motion.div
        className="mt-4 sm:mt-8 mb-4 p-4 rounded-2xl border border-soft-pink/40 bg-warm-ivory/70 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-ink/75"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-semibold text-deep-pink tracking-widest uppercase">
            REGISTRY // 06
          </span>
          <span className="text-soft-pink select-none">·</span>
          <span className="text-[11px] font-body text-ink/80 font-medium uppercase tracking-wider">
            6 curiosities mapped into memory
          </span>
        </div>

        <div className="group/inquiry flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-body tracking-wider uppercase text-ink/70">
          <span className="hidden sm:inline">notice → mark → connect</span>
          <div className="flex items-center gap-1.5" title="Curiosity spectrum">
            <span className="w-2 h-2 rounded-full bg-signature-pink hover:scale-125 transition-transform duration-200 cursor-pointer" />
            <span className="w-2 h-2 rounded-full bg-warm-sun hover:scale-125 transition-transform duration-200 cursor-pointer" />
            <span className="w-2 h-2 rounded-full bg-sea hover:scale-125 transition-transform duration-200 cursor-pointer" />
            <span className="w-2 h-2 rounded-full bg-deep-pink hover:scale-125 transition-transform duration-200 cursor-pointer" />
          </div>
          <span className="font-medium text-deep-pink group-hover/inquiry:text-signature-pink transition-colors">OPEN INQUIRY</span>
          <span className="opacity-0 group-hover/inquiry:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-deep-pink lowercase tracking-normal hidden md:inline">
            [inquiry never stops ✦]
          </span>
        </div>
      </motion.div>

      {/* Mobile / Tablet Vertical Path Flow (< 1024px) */}
      <div className="lg:hidden relative pl-6 sm:pl-10 space-y-10 my-8">
        {/* Vertical organic route guideline */}
        <div
          className="absolute left-2 sm:left-4 top-2 bottom-6 w-[2px] bg-soft-pink"
          aria-hidden="true"
        />

        {CURIOSITY_ITEMS.map((item, idx) => (
          <div key={item.id} className="relative">
            {/* Small waypoint node on the vertical path */}
            <div
              className="absolute -left-[23px] sm:-left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-warm-ivory border-2 border-signature-pink flex items-center justify-center z-10"
              aria-hidden="true"
            >
              <div className="w-1 h-1 rounded-full bg-signature-pink" />
            </div>

            <CuriosityPoint
              id={item.id}
              label={item.label}
              annotation={item.annotation}
              note={item.note}
              index={idx}
            />
          </div>
        ))}
      </div>

      {/* Section Bottom Ledger Exit into Transition */}
      <motion.div
        className="mt-14 sm:mt-20 pt-6 border-t border-soft-pink/30 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block" />
          <span>PAGE 02 · OBSERVATION FIELD</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">6 INQUIRIES CATALOGED</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>toward creation</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
