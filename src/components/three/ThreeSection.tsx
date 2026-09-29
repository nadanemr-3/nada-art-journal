import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { WashiTape } from '../visual/WashiTape';
import { NadaSymbol } from '../visual/NadaSymbol';

export interface ThreeSectionProps {
  className?: string;
}

interface Territory {
  number: string;
  title: string;
  subtitle: string;
  items: string[];
  themeColor: string;
  accentColor: string;
  note: string;
  tag: string;
  echo: 'see' | 'make' | 'live';
}

const TERRITORIES: Territory[] = [
  {
    number: '01',
    title: 'CURIOUS ABOUT',
    subtitle: 'observing & questioning',
    items: ['Science', 'Technology', 'Maps', 'Why things work'],
    themeColor: '#E85D8E', // Signature Pink
    accentColor: '#24212A', // Ink
    note: 'looking beneath the surface of everyday systems',
    tag: 'OBSERVATION LOG · ENTRY 01',
    echo: 'see',
  },
  {
    number: '02',
    title: 'MAKING',
    subtitle: 'ideas into tangible form',
    items: ['Drawing', 'Design', 'Visual experiments', 'Ideas'],
    themeColor: '#B93668', // Deep Pink
    accentColor: '#F6C4D3', // Soft Pink
    note: 'where a thought takes physical weight, color & edge',
    tag: 'STUDIO BENCH · CRAFT',
    echo: 'make',
  },
  {
    number: '03',
    title: 'LOVING',
    subtitle: 'people, places & warmth',
    items: ['The sea', 'Sunshine', 'Friends', 'Fashion', 'Little moments'],
    themeColor: '#55B9C6', // Sea
    accentColor: '#F4C95D', // Warm Sun
    note: 'the warmth of life that happens outside the studio',
    tag: 'FIELD DIARY · RETURN TO THIS',
    echo: 'live',
  },
];

/**
 * ThreeSection — "Three things I keep noticing."
 * 
 * Fifth major spread of the NADA Art Journal:
 * A reflective synthesis of the three narrative worlds:
 * World 01: CURIOUS ABOUT (The Observation Field)
 * World 02: MAKING (The Studio Artifact)
 * World 03: LOVING (The Sensory / Open World)
 * 
 * Asymmetrical editorial spread with varied scales, distinct visual motifs,
 * tactile paper cues, and unboxed typography.
 */
export const ThreeSection: React.FC<ThreeSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="three"
      aria-label="Three Things I Keep Noticing"
      className={`relative py-16 sm:py-22 lg:py-28 overflow-hidden editorial-container ${className}`}
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
            THREE THINGS
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            CURRENT INDEX // THREE WORLDS
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-sun inline-block shadow-2xs" />
            <span>THREE WAYS OF SEEING</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            RECURRENT THEMES
          </span>
        </div>
      </motion.div>

      {/* Main Reflective Heading Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-14 sm:mb-20">
        <motion.div
          className="lg:col-span-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-deep-pink font-semibold tracking-[0.18em] uppercase">
              RECURRENT OBSERVATIONS // SPREAD 05
            </span>
          </div>

          <h2 className="type-section-heading text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-[-0.025em] leading-[1.1]">
            Three things I keep noticing.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={2.5} className="w-28 sm:w-36" />
            <p className="type-handwriting-note text-sm sm:text-base text-ink/85 italic">
              "a quiet index of what holds my attention right now"
            </p>
          </div>
        </motion.div>

        {/* Narrative Synthesis Micro Strip */}
        <motion.div
          className="lg:col-span-4 flex flex-col lg:items-end gap-2 text-xs font-mono text-ink/70"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 tracking-wider uppercase text-[11px]">
            <span className="text-deep-pink font-semibold">01 CURIOSITY</span>
            <span className="text-soft-pink">→</span>
            <span className="text-ink font-medium">02 CRAFT</span>
            <span className="text-soft-pink">→</span>
            <span className="text-sea font-semibold">03 LIFE</span>
          </div>
          <span className="text-[10px] text-ink/55 tracking-widest uppercase">
            [ THREE SIDES OF THE SAME CYCLE ]
          </span>
        </motion.div>
      </div>

      {/* The Three Worlds Spread (Asymmetric Editorial Composition) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch relative">
        
        {/* WORLD 01: CURIOUS ABOUT (The Observation Field — Dominant Anchor, Cols 1-6) */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_6px_24px_rgba(36,33,42,0.04)] relative group transition-all duration-300 hover:shadow-[0_12px_36px_rgba(36,33,42,0.07)] hover:-translate-y-1"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Subtle Sun-gold washi tape tab on top corner */}
          <WashiTape color="sun" angle="tilt-left" className="absolute -top-3 left-10 transition-transform duration-300 group-hover:-rotate-3" />

          <div>
            {/* World 01 Header & Identification */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-soft-pink/35 text-[10px] sm:text-[11px] font-mono tracking-wider text-ink/75">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold text-deep-pink transition-transform duration-200 group-hover:scale-110">
                  {TERRITORIES[0].number}
                </span>
                <span className="text-soft-pink select-none">/</span>
                <span className="font-semibold text-deep-pink tracking-widest uppercase">
                  WORLD 01
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] text-deep-pink font-semibold hidden sm:inline">
                  [ ↳ SPATIAL CURIOSITY ]
                </span>
                <span className="text-ink/60 uppercase font-mono text-[9px] sm:text-[10px]">
                  {TERRITORIES[0].tag}
                </span>
              </div>
            </div>

            {/* Title & Philosophy */}
            <div className="flex flex-col gap-1.5 mb-6">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink font-medium tracking-tight group-hover:text-deep-pink transition-colors">
                {TERRITORIES[0].title}
              </h3>
              <p className="type-handwriting-note text-base sm:text-lg text-ink/80 italic">
                {TERRITORIES[0].subtitle}
              </p>
            </div>

            {/* Visual Route Motif echoing SEE */}
            <div className="p-3.5 rounded-xl bg-warm-ivory/70 border border-soft-pink/35 mb-8 flex items-center justify-between transition-colors duration-200 group-hover:bg-warm-ivory/95">
              <div className="flex items-center gap-2">
                <NadaSymbol name="noticed" size={16} color="#E85D8E" className="transition-transform duration-200 group-hover:scale-110" />
                <span className="w-8 sm:w-12 h-[1.5px] bg-signature-pink" />
                <span className="w-2 h-2 rounded-full bg-signature-pink" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-ink/65 ml-2">
                  EXPLORATION NODE
                </span>
              </div>
              <span className="text-[9px] font-mono text-deep-pink font-semibold uppercase">
                [ SPATIAL LOGIC ]
              </span>
            </div>

            {/* Inquiries / Observed Themes List */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-ink/60 block mb-2">
                RECURRENT INQUIRIES:
              </span>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {TERRITORIES[0].items.map((item, idx) => (
                  <li
                    key={item}
                    className="group/item flex items-baseline gap-3 text-base sm:text-lg text-ink/85 font-body font-medium cursor-default"
                    style={{ paddingLeft: `${idx * 6}px` }}
                  >
                    <span className="text-signature-pink font-mono text-xs select-none transition-transform duration-200 group-hover/item:translate-x-1">↳</span>
                    <span className="tracking-wide group-hover/item:text-deep-pink transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* World 01 Marginalia Footnote */}
          <div className="mt-8 pt-4 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
            <span className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic">
              "{TERRITORIES[0].note}"
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-deep-pink font-semibold">
              KEPT IN LOG
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: WORLDS 02 & 03 (Cols 7-12) */}
        <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
          
          {/* WORLD 02: MAKING (The Studio Artifact World) */}
          <motion.div
            className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_20px_rgba(36,33,42,0.04)] relative group transition-all duration-300 hover:shadow-[0_10px_32px_rgba(36,33,42,0.07)] hover:-translate-y-1 transform sm:rotate-[0.6deg] hover:rotate-0"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Corner registration crop marks */}
            <div className="absolute top-2 left-2 text-ink/25 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌜</div>
            <div className="absolute top-2 right-2 text-ink/25 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌝</div>
            <div className="absolute bottom-2 left-2 text-ink/25 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌞</div>
            <div className="absolute bottom-2 right-2 text-ink/25 text-[9px] font-mono pointer-events-none select-none" aria-hidden="true">⌟</div>

            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider text-ink/75">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold text-deep-pink transition-transform duration-200 group-hover:scale-110">
                  {TERRITORIES[1].number}
                </span>
                <span className="text-soft-pink select-none">/</span>
                <span className="font-semibold text-deep-pink tracking-widest uppercase">
                  WORLD 02
                </span>
              </div>
              <span className="text-ink/60 uppercase text-[9px]">
                {TERRITORIES[1].tag}
              </span>
            </div>

            {/* Title & Philosophy */}
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-ink font-medium tracking-tight group-hover:text-deep-pink transition-colors">
                  {TERRITORIES[1].title}
                </h3>
                <p className="type-handwriting-note text-sm sm:text-base text-ink/80 italic">
                  {TERRITORIES[1].subtitle}
                </p>
              </div>

              {/* Hand-drawn craft stroke */}
              <div className="w-14 sm:w-16 shrink-0" aria-hidden="true">
                <HandDrawnStroke variant="underline" color="#B93668" strokeWidth={2.5} />
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-4">
              {TERRITORIES[1].items.map((item) => (
                <div
                  key={item}
                  className="group/item flex items-center gap-2 p-2.5 rounded-xl bg-warm-ivory/60 border border-soft-pink/30 text-xs sm:text-sm font-body font-medium text-ink/85 transition-all duration-200 hover:bg-warm-ivory/95 hover:border-soft-pink/60 hover:-translate-y-0.5 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-deep-pink transition-transform duration-200 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-deep-pink transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="pt-3 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
              <span className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic">
                "{TERRITORIES[1].note}"
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/65">
                TANGIBLE FORM
              </span>
            </div>
          </motion.div>

          {/* WORLD 03: LOVING (The Sensory & Open World) */}
          <motion.div
            className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_20px_rgba(36,33,42,0.04)] relative group transition-all duration-300 hover:shadow-[0_10px_32px_rgba(36,33,42,0.07)] hover:-translate-y-1 transform sm:-rotate-[0.6deg] hover:rotate-0"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Sea-tinted washi tape tab on top right */}
            <WashiTape color="sea" angle="tilt-right" width="w-11" className="absolute -top-2.5 right-8 transition-transform duration-300 group-hover:rotate-3" />

            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider text-ink/75">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold text-[#287D8A] transition-transform duration-200 group-hover:scale-110">
                  {TERRITORIES[2].number}
                </span>
                <span className="text-soft-pink select-none">/</span>
                <span className="font-semibold text-[#287D8A] tracking-widest uppercase">
                  WORLD 03
                </span>
              </div>
              <span className="text-ink/60 uppercase text-[9px]">
                {TERRITORIES[2].tag}
              </span>
            </div>

            {/* Title & Philosophy */}
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-ink font-medium tracking-tight group-hover:text-sea transition-colors">
                  {TERRITORIES[2].title}
                </h3>
                <p className="type-handwriting-note text-sm sm:text-base text-ink/80 italic">
                  {TERRITORIES[2].subtitle}
                </p>
              </div>

              {/* Coastal wave motif */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <svg viewBox="0 0 36 12" fill="none" className="w-10 h-3">
                  <path
                    d="M 2 8 C 8 3, 16 11, 24 6 C 28 3, 32 7, 34 6"
                    stroke="#55B9C6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <NadaSymbol name="spark" size={13} color="#F4C95D" className="shadow-2xs transition-transform duration-200 group-hover:scale-125" />
              </div>
            </div>

            {/* Items Flow Strip */}
            <div className="flex flex-wrap gap-2 my-4">
              {TERRITORIES[2].items.map((item, idx) => (
                <span
                  key={item}
                  className="group/item px-3 py-1.5 rounded-full bg-warm-ivory/70 border border-soft-pink/30 text-xs sm:text-sm font-body font-medium text-ink/85 flex items-center gap-1.5 transition-all duration-200 hover:bg-warm-ivory/95 hover:border-sea/60 hover:-translate-y-0.5 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sea transition-transform duration-200 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-sea transition-colors">{item}</span>
                  {idx === 0 && <span className="text-[9px] font-mono text-sea font-semibold ml-0.5">· SEA</span>}
                </span>
              ))}
            </div>

            {/* Footnote */}
            <div className="pt-3 border-t border-soft-pink/30 flex items-center justify-between text-xs text-ink/75">
              <span className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic">
                "{TERRITORIES[2].note}"
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-sea font-semibold">
                SENSORY & OPEN
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Section Bottom Synthesis Marker */}
      <motion.div
        className="mt-16 sm:mt-24 pt-6 border-t border-soft-pink/25 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/70 inline-block" />
          <span>PAGE 05 · THREE THINGS</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">CURIOSITY · CRAFT · LIFE</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>into the continuous loop</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
