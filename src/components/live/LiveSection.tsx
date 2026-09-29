import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { LiveMoment } from './LiveMoment';
import volleyballUrl from '../../../volleyball.jpg';
import shipsUrl from '../../../ships.jpg';
import seaUrl from '../../../sea.jpg';
import curlsUrl from '../../../curls-opt.webp';

export interface LiveSectionProps {
  className?: string;
}

const THEMES = ['PEOPLE', 'PLACES', 'MOMENTS'];

/**
 * LiveSection — "I like experiencing things."
 * 
 * Third major narrative territory of NADA:
 * Experiencing things — friends, travel, sunshine, the sea, fashion, laughter,
 * and everyday moments.
 * 
 * Art Journal Visual Enrichment:
 * Styled like opening Nada's personal visual diary / field journal:
 * - Open, warm, sensory, and spontaneous atmosphere
 * - Dominant hero photograph (volleyball in the sunshine) paired with supporting horizons
 * - Asymmetrical layout with varied scales and subtle 1–2° photo tilts
 * - Sea #55B9C6 as primary atmospheric color with Sun #F4C95D sparks
 * - Tactile washi tape cues, corner crop ticks, and field log marginalia
 */
export const LiveSection: React.FC<LiveSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="live"
      aria-label="Live — Experiences"
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
            LIVE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            FIELD DIARY // OPEN WORLD
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sea inline-block shadow-2xs" />
            <span>COLLECTED MOMENTS</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            OUTSIDE
          </span>
        </div>
      </motion.div>

      {/* Section Header Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-16">
        <motion.div
          className="lg:col-span-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-sea font-semibold tracking-[0.18em] uppercase">
              FIELD LOG // SENSORY ARCHIVE & LIVED EXPERIENCE
            </span>
            <span className="text-soft-pink select-none font-mono text-xs">/</span>
            <span className="text-[10px] font-mono text-ink/65 tracking-widest uppercase hidden sm:inline">
              [ REF: SUNSHINE & WATER ]
            </span>
          </div>

          <h2 className="type-section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink font-normal tracking-[-0.03em] leading-[1.08]">
            I like experiencing things.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <HandDrawnStroke variant="arc" color="#55B9C6" strokeWidth={2.5} className="w-16 sm:w-20" />
            <p className="type-display text-xl sm:text-2xl md:text-3xl text-ink/85 font-medium tracking-tight">
              PEOPLE · PLACES · MOMENTS
            </p>
          </div>
        </motion.div>

        {/* Supporting Editorial Whisper */}
        <motion.div
          className="lg:col-span-4 flex items-baseline gap-2 lg:justify-end text-xs sm:text-sm text-ink/75"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="type-handwriting-note text-signature-pink select-none text-base">~</span>
          <span className="type-handwriting-note italic text-ink/85">
            "collecting experiences rather than achievements"
          </span>
        </motion.div>
      </div>

      {/* Atmospheric Wave Line Continuing from the Transition */}
      <div className="relative my-4 sm:my-8">
        <ContinuousLine
          state="wave"
          color="#E85D8E"
          strokeWidth={3}
          animated={!shouldReduceMotion}
          className="w-full max-w-5xl mx-auto max-h-[70px] sm:max-h-none opacity-60"
        />
      </div>

      {/* Editorial Field Diary Grid (Asymmetric, Sensory Spread) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative z-10">
        
        {/* Left Column (Primary Memory Anchor & Landscape Horizon - Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
          
          {/* Dominant Hero Photograph: Volleyball in the Sunshine */}
          <LiveMoment
            variant="primary"
            src={volleyballUrl}
            alt="Outdoor volleyball game in the sunlight"
            caption="somewhere sunny · a good day"
            location="by the water"
            theme="MOMENTS"
          />

          {/* Micro Field Note beneath primary hero photo */}
          <motion.div
            className="flex flex-col gap-2.5 pl-4 sm:pl-6 text-ink/75 border-l-2 border-sea/40"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-mono text-sea font-semibold tracking-wider uppercase">
              <span>FIELD LOG // ENTRY 01 · OUTSIDE</span>
              <span className="text-soft-pink select-none font-display">·</span>
              <span className="text-ink/55">[ WARM LIGHT ]</span>
            </div>
            <p className="type-body text-xs sm:text-sm font-medium text-ink/85 leading-relaxed">
              the studio is behind us — sunshine, sea air, movement, and the warmth of being outside.
            </p>
          </motion.div>

          {/* Secondary Landscape Moment: Ships on the Open Horizon */}
          <div className="relative">
            <LiveMoment
              variant="landscape"
              src={shipsUrl}
              alt="Ships navigating on the open sea horizon"
              caption="looking out · the sea"
              location="horizon"
              theme="PLACES"
            />
          </div>

        </div>

        {/* Right Column (Portraits, Coastal Light & Field Notes - Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10 lg:pt-4">
          
          {/* Portrait Moment: Quiet by the Water */}
          <div className="relative">
            <LiveMoment
              variant="portrait"
              src={seaUrl}
              alt="Calm sea waters extending to the horizon"
              caption="quiet by the water"
              location="coastal"
              theme="MOMENTS"
            />
          </div>

          {/* Bottom Cluster: Curls Snapshot + Tactile Visual Diary Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Snapshot Moment: Curls Detail */}
            <div className="relative">
              <LiveMoment
                variant="fragment"
                src={curlsUrl}
                alt="Close-up detail of dark curls"
                caption="one of those moments"
                theme="MOMENTS"
              />
            </div>

            {/* Tactile Memory Tag Note Card */}
            <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 rounded-2xl border border-soft-pink/35 bg-warm-ivory/80 shadow-xs text-xs font-body font-medium text-ink/75">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-semibold text-deep-pink">
                <span>VISUAL DIARY</span>
                <span className="text-sea font-mono text-[9px]">REF 04</span>
              </div>
              <p className="type-handwriting-note italic text-sm text-ink/85 leading-snug">
                "life is made of little things worth noticing."
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-soft-pink/25 text-[10px] uppercase tracking-wider text-ink/80 font-medium">
                {THEMES.map((theme, i) => (
                  <span key={theme} className="flex items-center gap-1.5">
                    <span>{theme}</span>
                    {i < THEMES.length - 1 && <span className="text-sea">·</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Field Marker Tag */}
          <div className="flex items-center justify-between px-4 py-2.5 rounded-full border border-soft-pink/40 bg-warm-ivory/80 text-[11px] font-body font-medium text-ink/75 select-none shadow-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sea" />
              <span>open field · nada</span>
            </span>
            <span className="italic font-display text-ink/80 text-xs">experienced in the open</span>
          </div>

        </div>

      </div>

      {/* Section Bottom Border Marker */}
      <motion.div
        className="mt-16 sm:mt-24 pt-6 border-t border-soft-pink/25 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sea inline-block" />
          <span>PAGE 04 · FIELD DIARY</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">LIVED EXPERIENCE</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>into three things noticed</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
