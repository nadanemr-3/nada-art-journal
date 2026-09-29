import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { NadaSymbol } from '../visual/NadaSymbol';

export interface LoopSectionProps {
  className?: string;
}

interface LoopMoment {
  number: string;
  title: string;
  sentence: string;
  themeColor: string;
  scaleClass: string;
}

const MOMENTS: LoopMoment[] = [
  {
    number: '01',
    title: 'NOTICE',
    sentence: 'Something catches my eye.',
    themeColor: '#E85D8E', // Signature Pink
    scaleClass: 'sm:w-[17%] lg:w-[16%]',
  },
  {
    number: '02',
    title: 'WONDER',
    sentence: 'I want to know why.',
    themeColor: '#B93668', // Deep Pink
    scaleClass: 'sm:w-[19%] lg:w-[18%]',
  },
  {
    number: '03',
    title: 'MAKE',
    sentence: 'So I make something from it.',
    themeColor: '#B93668', // Deep Pink / Studio
    scaleClass: 'sm:w-[25%] lg:w-[26%]',
  },
  {
    number: '04',
    title: 'LIVE',
    sentence: 'Then I take it into the world.',
    themeColor: '#55B9C6', // Sea
    scaleClass: 'sm:w-[21%] lg:w-[22%]',
  },
  {
    number: '05',
    title: 'NOTICE AGAIN',
    sentence: 'And the world gives me something new to notice.',
    themeColor: '#E85D8E', // Signature Pink
    scaleClass: 'sm:w-[18%] lg:w-[18%]',
  },
];

/**
 * LoopSection — "I NOTICE → I WONDER → I MAKE → I LIVE → I NOTICE SOMETHING NEW"
 * 
 * An open-ended cycle of attention and curiosity:
 * What she notices becomes what she explores.
 * What she explores becomes what she makes.
 * What she makes becomes part of what she experiences.
 * What she experiences changes what she notices next.
 * 
 * Not a closed circular diagram or four symmetric cards.
 * A single continuous visual thought:
 * thin/precise → exploratory → rich brush/studio → open wave → new open observation.
 */
export const LoopSection: React.FC<LoopSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="loop"
      aria-label="The Continuous Cycle — Notice, Wonder, Make, Live, Notice Again"
      className={`relative py-20 sm:py-28 lg:py-36 overflow-hidden editorial-container ${className}`}
    >
      {/* Editorial Journal Folio Header Spread */}
      <motion.div
        className="flex items-center justify-between pb-4 sm:pb-5 border-b border-soft-pink/35 mb-10 sm:mb-16"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-deep-pink">
            THE OPEN CYCLE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            ATTENTION & CURIOSITY
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block shadow-2xs" />
            <span>NOT A CLOSED CIRCLE</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            THE LINE CONTINUES
          </span>
        </div>
      </motion.div>

      {/* Central Statement: Editorial & Quiet */}
      <motion.div
        className="max-w-2xl mx-auto text-center px-4 mb-14 sm:mb-20"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 mb-3 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-deep-pink font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
          <span>A LIVING PHILOSOPHY</span>
        </div>

        <h2 className="type-section-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal tracking-[-0.025em] leading-[1.15]">
          I notice things.
        </h2>
        <p className="type-handwriting-note text-lg sm:text-xl lg:text-2xl text-ink/75 italic mt-2">
          And then I notice again.
        </p>
      </motion.div>

      {/* Desktop / Tablet: One Continuous Visual Thought (Horizontal Evolving Path) */}
      <div className="hidden md:block relative max-w-6xl mx-auto mb-16">
        
        {/* The Continuous Evolving SVG Line */}
        <div className="w-full relative h-[140px] pointer-events-none select-none">
          <svg
            viewBox="0 0 1000 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* 01 NOTICE: Thin, crisp, precise line */}
            <path
              d="M 60 70 L 190 70"
              stroke="#E85D8E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* 01 Node: Small observation circle */}
            <circle cx="50" cy="70" r="7" stroke="#E85D8E" strokeWidth="2.2" fill="#FFF9F2" />
            <circle cx="50" cy="70" r="2.5" fill="#E85D8E" />

            {/* 02 WONDER: Line becomes exploratory, curving upward into curiosity */}
            <path
              d="M 190 70 C 230 70, 250 45, 290 55 C 330 65, 360 85, 400 70"
              stroke="#B93668"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Subtle curiosity question/inquiry mark floating above */}
            <path
              d="M 292 32 C 292 24, 304 22, 305 30 C 305 36, 298 38, 298 44"
              stroke="#B93668"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="298" cy="49" r="1.2" fill="#B93668" />

            {/* 03 MAKE: Thicker, tactile studio brush stroke & registration mark */}
            <path
              d="M 400 70 C 440 55, 470 95, 520 80 C 560 68, 580 75, 610 70"
              stroke="#B93668"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Studio craft tick */}
            <path
              d="M 505 52 L 515 52 L 515 62"
              stroke="#B93668"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.65"
            />

            {/* 04 LIVE: Looser wave curve transitioning from Deep Pink into Sea Blue */}
            <path
              d="M 610 70 C 650 65, 680 100, 730 85 C 770 72, 800 62, 840 70"
              stroke="#55B9C6"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Sun spark floating in open air */}
            <path
              d="M 728 42 C 728 46, 731 49, 735 50 C 731 51, 728 54, 728 58 C 728 54, 725 51, 721 50 C 725 49, 728 46, 728 42 Z"
              fill="#F4C95D"
            />

            {/* 05 NOTICE AGAIN: Smooth arc arriving at a NEW, distinct observation circle */}
            <path
              d="M 840 70 C 880 78, 910 65, 940 70"
              stroke="#E85D8E"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* New observation circle (open-ended arc rather than a sealed loop) */}
            <path
              d="M 945 64 A 8 8 0 1 1 941 74"
              stroke="#E85D8E"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="945" cy="70" r="2.2" fill="#E85D8E" />

            {/* Open-ended continuation line extending toward ENDING */}
            <path
              d="M 953 72 C 968 76, 980 90, 988 108"
              stroke="#E85D8E"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="3 3"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Five Visual Moments Aligned Under the Continuous Line */}
        <div className="flex justify-between items-start pt-4 px-2">
          
          {/* 01 NOTICE */}
          <div className="group/moment w-[16%] flex flex-col text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1.5">
              <span>01</span>
              <span className="text-soft-pink">/</span>
              <span className="group-hover/moment:text-signature-pink transition-colors">NOTICE</span>
            </div>
            <p className="type-handwriting-note text-sm text-ink/80 italic leading-snug">
              "Something catches my eye."
            </p>
            <span className="text-[10px] font-mono text-ink/45 tracking-widest uppercase mt-2">
              visually quiet
            </span>
          </div>

          {/* 02 WONDER */}
          <div className="group/moment w-[18%] flex flex-col text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1.5">
              <span>02</span>
              <span className="text-soft-pink">/</span>
              <span className="group-hover/moment:text-signature-pink transition-colors">WONDER</span>
            </div>
            <p className="type-handwriting-note text-sm text-ink/85 italic leading-snug">
              "I want to know why."
            </p>
            <span className="text-[10px] font-mono text-ink/45 tracking-widest uppercase mt-2">
              curiosity bridge
            </span>
          </div>

          {/* 03 MAKE — Richest / Largest visual moment */}
          <div className="group/moment w-[26%] flex flex-col text-left p-4 -mt-2 rounded-2xl bg-[#FFFDF9] border border-soft-pink/45 shadow-[0_4px_16px_rgba(36,33,42,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(36,33,42,0.06)] cursor-default">
            <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1.5">
              <div className="flex items-center gap-1.5">
                <span>03</span>
                <span className="text-soft-pink">/</span>
                <span className="group-hover/moment:text-signature-pink transition-colors">MAKE</span>
              </div>
              <span className="text-[9px] font-mono text-ink/50 uppercase tracking-widest">STUDIO</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/90 italic font-medium leading-snug">
              "So I make something from it."
            </p>
            <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-soft-pink/30 text-[9px] font-mono text-ink/65 tracking-wider uppercase">
              <span>brush</span>
              <span className="text-soft-pink">·</span>
              <span>sketch</span>
              <span className="text-soft-pink">·</span>
              <span>form</span>
            </div>
          </div>

          {/* 04 LIVE — Open / Sensory moment */}
          <div className="group/moment w-[20%] flex flex-col text-left pl-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-sea tracking-wider mb-1.5">
              <span>04</span>
              <span className="text-soft-pink">/</span>
              <span className="text-[#287D8A] group-hover/moment:text-sea transition-colors">LIVE</span>
            </div>
            <p className="type-handwriting-note text-sm text-ink/85 italic leading-snug">
              "Then I take it into the world."
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-sea font-medium tracking-widest uppercase">
              <span>sea</span>
              <span className="text-warm-sun font-display">✦</span>
              <span>sun</span>
            </div>
          </div>

          {/* 05 NOTICE AGAIN — The New Beginning & Discovery 2 */}
          <div className="group/moment w-[18%] flex flex-col text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1.5">
              <span>05</span>
              <span className="text-soft-pink">/</span>
              <span className="group-hover/moment:text-signature-pink transition-colors">NOTICE AGAIN</span>
            </div>
            <p className="type-handwriting-note text-sm text-ink/85 italic leading-snug">
              "And the world gives me something new to notice."
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-deep-pink font-semibold tracking-wider">
              <span>new cycle</span>
              <span className="text-signature-pink font-display group-hover/moment:translate-x-0.5 group-hover/moment:-translate-y-0.5 transition-transform duration-200">↗</span>
              <span className="opacity-0 group-hover/moment:opacity-100 transition-opacity duration-300 text-[9px] font-mono font-normal text-deep-pink ml-1">
                [ open ↺ ]
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Mobile: Vertical Continuous Thread (390×844 & 430×932) */}
      <div className="block md:hidden relative max-w-md mx-auto mb-14 pl-8">
        
        {/* Continuous Vertical Guide Line */}
        <div 
          className="absolute left-3 top-4 bottom-8 w-[2px] bg-gradient-to-b from-signature-pink via-deep-pink to-sea"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-9">
          
          {/* 01 NOTICE */}
          <div className="relative">
            <span 
              className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2 border-signature-pink bg-warm-ivory shadow-xs" 
              aria-hidden="true"
            />
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1">
              <span>01</span>
              <span className="text-soft-pink">/</span>
              <span>NOTICE</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/85 italic">
              "Something catches my eye."
            </p>
          </div>

          {/* 02 WONDER */}
          <div className="relative">
            <span 
              className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-deep-pink shadow-xs" 
              aria-hidden="true"
            />
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1">
              <span>02</span>
              <span className="text-soft-pink">/</span>
              <span>WONDER</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/85 italic">
              "I want to know why."
            </p>
            <span className="text-[10px] font-mono text-ink/50 tracking-wider uppercase block mt-0.5">
              curiosity bridge
            </span>
          </div>

          {/* 03 MAKE — Rich studio moment */}
          <div className="relative p-4 rounded-xl bg-[#FFFDF9] border border-soft-pink/50 shadow-xs -ml-2">
            <span 
              className="absolute -left-[19px] top-4 w-3.5 h-3.5 rounded-sm bg-deep-pink shadow-xs" 
              aria-hidden="true"
            />
            <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1">
              <div className="flex items-center gap-1.5">
                <span>03</span>
                <span className="text-soft-pink">/</span>
                <span>MAKE</span>
              </div>
              <span className="text-[9px] text-ink/50 uppercase tracking-widest">STUDIO</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/90 italic font-medium">
              "So I make something from it."
            </p>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-soft-pink/30 text-[9px] font-mono text-ink/65 uppercase tracking-wider">
              <span>brush</span>
              <span className="text-soft-pink">·</span>
              <span>process</span>
              <span className="text-soft-pink">·</span>
              <span>thing</span>
            </div>
          </div>

          {/* 04 LIVE */}
          <div className="relative">
            <span 
              className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-sea shadow-xs" 
              aria-hidden="true"
            />
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-sea tracking-wider mb-1">
              <span>04</span>
              <span className="text-soft-pink">/</span>
              <span className="text-[#287D8A]">LIVE</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/85 italic">
              "Then I take it into the world."
            </p>
            <span className="text-[10px] font-mono text-sea tracking-wider uppercase block mt-0.5">
              sunshine · open sea
            </span>
          </div>

          {/* 05 NOTICE AGAIN */}
          <div className="relative">
            <span 
              className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2 border-signature-pink bg-warm-ivory shadow-xs" 
              aria-hidden="true"
            />
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-deep-pink tracking-wider mb-1">
              <span>05</span>
              <span className="text-soft-pink">/</span>
              <span>NOTICE AGAIN</span>
            </div>
            <p className="type-handwriting-note text-base text-ink/85 italic">
              "And the world gives me something new to notice."
            </p>
            <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-mono text-deep-pink font-semibold tracking-wider">
              <span>cycle continues forward</span>
              <span className="text-signature-pink">↓</span>
            </div>
          </div>

        </div>

      </div>

      {/* Synthesis Footnote: The Open Loop Philosophy */}
      <motion.div
        className="max-w-2xl mx-auto text-center pt-8 border-t border-soft-pink/30"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs sm:text-sm font-body text-ink/75 leading-relaxed">
          The loop never truly closes. What we experience changes what we notice next,
          leaving the observation point open to the world.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-deep-pink font-medium">
          <span>NOTICE</span>
          <span className="text-soft-pink">→</span>
          <span>WONDER</span>
          <span className="text-soft-pink">→</span>
          <span>MAKE</span>
          <span className="text-soft-pink">→</span>
          <span>LIVE</span>
          <span className="text-soft-pink">→</span>
          <span className="font-bold underline decoration-signature-pink decoration-2 underline-offset-4">
            SOMETHING NEW
          </span>
        </div>
      </motion.div>

      {/* Section Bottom Synthesis Marker */}
      <motion.div
        className="mt-14 sm:mt-20 pt-6 border-t border-soft-pink/25 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block shadow-2xs" />
          <span>PAGE 07 · THE OPEN CYCLE</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">ATTENTION EXPANDS</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>toward the archive</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
