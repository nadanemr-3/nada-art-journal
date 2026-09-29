import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { ContinuousLine } from '../visual/ContinuousLine';
import { PencilRulerTicks, RegistrationCrossMark, HandDrawnArrow } from '../visual/EditorialMarks';
import { MakeArtwork } from './MakeArtwork';
import drawingUrl from '../../../drawing.jpg';
import vaseUrl from '../../../vase-opt.webp';
import websiteUrl from '../../../website.png';

export interface MakeSectionProps {
  className?: string;
}

const DISCIPLINES = [
  'DRAWING',
  'DESIGN',
  'VISUAL EXPERIMENTS',
  'ILLUSTRATOR',
  'UI / UX',
  'IDEAS',
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'IDEA',
    subtitle: 'OBSERVE & SPARK',
    description: 'an unexpected curve or rhythm noticed in ordinary life',
  },
  {
    step: '02',
    title: 'EXPERIMENT',
    subtitle: 'SKETCH & TEST',
    description: 'loose lines testing weight, gesture, and negative space',
  },
  {
    step: '03',
    title: 'PROCESS',
    subtitle: 'REFINE & SHAPE',
    description: 'translating gesture into silhouette, surface, or digital grid',
  },
  {
    step: '04',
    title: 'THING',
    subtitle: 'TANGIBLE FORM',
    description: 'a finished drawing, a crafted object, or an interactive system',
  },
];

/**
 * MakeSection — "I like making things."
 * 
 * Second major movement of the NADA narrative:
 * SEE (Curiosity) → SEE→MAKE (Curiosity becomes creation) → MAKE (Physical creation)
 * 
 * Art Journal Visual Enrichment:
 * Styled like opening Nada's personal creative studio / sketchbook on a work table:
 * IDEA → EXPERIMENT → PROCESS → THING.
 * Layered with tactile washi tape tabs, registration crop marks, colorway swatches,
 * studio marginalia, and physical-to-digital process bridges.
 */
export const MakeSection: React.FC<MakeSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const spineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: spineScroll } = useScroll({
    target: spineRef,
    offset: ['start end', 'end start'],
  });

  const spineOpacity = useTransform(spineScroll, [0.05, 0.25], [0, 1]);

  return (
    <section
      id="make"
      aria-label="Make — Physical Creation"
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
            MAKE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            MAKING STUDIO // SKETCHBOOK SPREAD
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block" />
            <span>STUDIO TABLE NO. 03</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            THREE STUDIES
          </span>
        </div>
      </motion.div>

      {/* Asymmetric Header Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
        <motion.div
          className="lg:col-span-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-deep-pink font-semibold tracking-[0.18em] uppercase">
              STUDIO LOG // PROCESS, EXPERIMENT & CRAFT
            </span>
            <span className="text-soft-pink select-none font-mono text-xs">/</span>
            <span className="text-[10px] font-mono text-ink/65 tracking-widest uppercase hidden sm:inline">
              [ REF: NADA-MAKE-SPREAD ]
            </span>
          </div>

          <h2 className="type-section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink font-normal tracking-[-0.03em] leading-[1.08]">
            I like making things.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={3} className="w-40 sm:w-56" />
            <span className="type-handwriting-note text-sm sm:text-base text-ink/85 italic">
              where ideas take tangible form
            </span>
          </div>

          {/* Conceptual Spine: IDEA → EXPERIMENT → PROCESS → THING */}
          <motion.div
            ref={spineRef}
            className="mt-6 flex flex-col gap-2 pt-2"
            style={shouldReduceMotion ? undefined : { opacity: spineOpacity }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-ink/75">
              {['IDEA', 'EXPERIMENT', 'PROCESS', 'THING'].map((step, idx) => (
                <React.Fragment key={step}>
                  <motion.span
                    className={`uppercase tracking-wider ${
                      idx === 0 || idx === 3 ? 'text-deep-pink font-semibold' : 'text-ink/85 font-medium'
                    }`}
                    initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.12 }}
                  >
                    {step}
                  </motion.span>
                  {idx < 3 && (
                    <motion.span
                      className="text-signature-pink select-none font-display"
                      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.3, delay: idx * 0.12 + 0.08 }}
                    >
                      →
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
              <span className="hidden md:inline text-soft-pink select-none mx-1">·</span>
              <span className="hidden md:inline type-handwriting-note text-xs text-ink/80 italic">
                (from an observation to something you can hold or use)
              </span>
            </div>
            {/* Studio pencil ruler ticks */}
            <div className="flex items-center gap-2 pt-1 opacity-60">
              <PencilRulerTicks length="md" color="#B93668" />
              <span className="text-[9px] font-mono text-ink/50 tracking-wider">[ 01-04 WORKBENCH SCALE ]</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Quiet Discipline Rhythm Strip & Process Note */}
        <motion.div
          className="lg:col-span-4 flex flex-col lg:items-end gap-3.5 text-xs font-body select-none"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Discipline Tags */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 lg:justify-end text-[11px] font-medium tracking-[0.16em] uppercase text-ink/75">
            {DISCIPLINES.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-ink/80 hover:text-deep-pink transition-colors">{item}</span>
                {index < DISCIPLINES.length - 1 && <span className="text-signature-pink/50">·</span>}
              </span>
            ))}
          </div>

          {/* Tactile Studio Desk Note */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-pink/40 bg-warm-ivory/80 shadow-xs">
            <span className="text-signature-pink font-display text-xs" aria-hidden="true">✦</span>
            <span className="type-handwriting-note text-[12px] sm:text-[13px] text-ink/85 italic">
              "thinking through lines, forms, and digital space."
            </span>
          </div>
        </motion.div>
      </div>

      {/* Creative Field: Asymmetric Studio / Sketchbook Table Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative">
        
        {/* Left Column (Primary Artwork Territory - Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          
          {/* Study 01: Painting on Canvas */}
          <MakeArtwork
            variant="primary"
            src={drawingUrl}
            alt="Painting in progress on canvas by Nada, building an image with brushwork and color"
            label="study 01 · painting on canvas"
            caption="acrylic & brush on canvas"
            note="building the image with loose marks, color, and gesture"
          />

          {/* Micro Annotation & Handwritten Thought beneath primary study */}
          <motion.div
            className="flex flex-col gap-3 pl-4 sm:pl-6 text-ink/75 border-l-2 border-soft-pink/60 relative"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Thought paragraph */}
            <div className="flex items-baseline gap-2.5">
              <span className="type-handwriting-note text-signature-pink text-base select-none">~</span>
              <p className="type-body text-xs sm:text-sm font-medium text-ink/85 leading-relaxed">
                working directly on canvas; letting brushwork and color find their way together. testing how an image builds through loose marks, gesture, and raw pigment.
              </p>
            </div>

            {/* Tactile Studio Margin Note Card */}
            <div className="p-3.5 rounded-xl border border-soft-pink/35 bg-warm-ivory/70 flex flex-col gap-1.5 shadow-2xs">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-deep-pink font-semibold">
                <span>STUDIO NOTE // 01 · BRUSH & CANVAS</span>
                <span className="text-ink/50">[ STUDIO CANVAS // WORK IN PROGRESS ]</span>
              </div>
              <p className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic leading-snug">
                "painting is an act of seeing in real time — each brushstroke answers the last one until the image emerges."
              </p>
              <div className="flex items-center gap-2 pt-1 text-[9px] font-mono tracking-widest uppercase text-ink/65">
                <span>MATERIALS:</span>
                <span className="text-ink/80 font-medium">ACRYLIC · BRUSHES · CANVAS · PALETTE KNIFE</span>
              </div>
            </div>

            {/* Connecting link leading to form and object in the right column */}
            <div className="flex items-center gap-2 pt-1 text-[10px] font-mono tracking-wider uppercase text-deep-pink font-semibold">
              <span>↳ FROM CANVAS MARKS TO THREE-DIMENSIONAL OBJECT</span>
              <span className="text-signature-pink select-none font-display">→</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Secondary Studies & Studio Fragments - Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 lg:pt-2">
          
          {/* Fragment Study 02 (Hand-Painted Vase) */}
          <div className="relative">
            <MakeArtwork
              variant="fragment"
              src={vaseUrl}
              alt="Ceramic vase with hand-drawn marks and painted artwork by Nada"
              label="study 02 · hand-painted vase"
              caption="drawing on ceramic"
              note="drawing directly onto the vase — turning an ordinary object into something personal"
            />
          </div>

          {/* Connecting process hint bridging physical form into digital structure */}
          <motion.div
            className="flex flex-col gap-2 p-3 rounded-xl border border-soft-pink/35 bg-warm-ivory/60 shadow-2xs text-ink/75"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-deep-pink font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sea" />
                <span>TRANSFORMATION // 02 → 03</span>
              </span>
              <span className="text-ink/50">[ OBJECT → INTERFACE ]</span>
            </div>
            <p className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic leading-snug">
              "drawing on an everyday object makes it tactile and alive — that same personal care carries over into how a digital space is made."
            </p>
            <div className="flex items-center justify-end gap-1.5 text-[9px] font-mono tracking-wider uppercase text-ink/65 pt-0.5">
              <span>↳ FROM PHYSICAL OBJECT TO DIGITAL SPACE</span>
              <span className="text-sea font-display">→</span>
            </div>
          </motion.div>

          {/* Sketch Study 03 (Interface & Flow / Digital System) */}
          <div className="relative">
            <MakeArtwork
              variant="sketch"
              src={websiteUrl}
              alt="Digital interface design and user flow study"
              label="study 03 · flow"
              caption="ui / ux structure"
              note="hierarchy & interaction logic"
            />
          </div>

          {/* Studio Marker Tag */}
          <div className="flex items-center justify-between px-4 py-2.5 rounded-full border border-soft-pink/40 bg-warm-ivory/80 text-[11px] font-body font-medium text-ink/75 select-none shadow-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
              <span>studio space · nada</span>
            </span>
            <span className="italic font-display text-ink/80 text-xs">work in exploration</span>
          </div>
        </div>

      </div>

      {/* The Four Movements of Making (Tactile Process Strip) */}
      <motion.div
        className="mt-14 sm:mt-20 p-5 sm:p-6 rounded-2xl border border-soft-pink/40 bg-warm-ivory/70 shadow-xs"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.7 }}
      >
        {/* Strip Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-soft-pink/30 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signature-pink" />
            <span className="font-semibold text-deep-pink">STUDIO CHRONICLE</span>
            <span className="text-soft-pink select-none">/</span>
            <span className="text-ink/80 font-medium">HOW AN OBSERVATION BECOMES A WORK</span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] text-ink/60 uppercase hidden sm:inline">
            PROCESS BLUEPRINT
          </span>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              tabIndex={0}
              role="region"
              aria-label={`${step.step} ${step.title}: ${step.subtitle}`}
              className="group/step flex flex-col gap-1.5 relative p-2.5 -m-1 sm:-m-2 rounded-xl transition-all duration-200 hover:bg-warm-ivory/95 hover:shadow-2xs focus-visible:bg-warm-ivory/95 focus-visible:outline-2 focus-visible:outline-signature-pink/60 cursor-default"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs font-semibold text-deep-pink tracking-wider group-hover/step:text-signature-pink transition-colors">
                  {step.step}. {step.title}
                </span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <motion.span
                    className="hidden lg:inline text-signature-pink font-display select-none transition-transform duration-200 group-hover/step:translate-x-1"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                  >
                    →
                  </motion.span>
                )}
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-ink/65">
                {step.subtitle}
              </span>
              <p className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic leading-snug">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tactile Studio Registry Ribbon (Archival summary strip) */}
      <motion.div
        className="mt-6 mb-4 p-4 rounded-2xl border border-soft-pink/40 bg-warm-ivory/70 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-ink/75 shadow-xs"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-semibold text-deep-pink tracking-widest uppercase">
            REGISTRY // 03
          </span>
          <span className="text-soft-pink select-none">·</span>
          <span className="text-[11px] font-body text-ink/80 font-medium uppercase tracking-wider">
            painting → object → system
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-body tracking-wider uppercase text-ink/70">
          <span className="hidden sm:inline">canvas · object · interface</span>
          <div className="flex items-center gap-1.5" title="Studio disciplines">
            <span className="w-2 h-2 rounded-full bg-signature-pink" title="Canvas" />
            <span className="w-2 h-2 rounded-full bg-warm-sun" title="Object" />
            <span className="w-2 h-2 rounded-full bg-sea" title="System" />
          </div>
          <span className="font-medium text-deep-pink">ACTIVE STUDIO</span>
        </div>
      </motion.div>

      {/* Editorial Section Bottom Bridge */}
      <motion.div
        className="mt-10 sm:mt-14 pt-6 border-t border-soft-pink/25 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/80 inline-block" />
          <span>PAGE 03 · MAKING STUDIO</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">THREE FIELDS EXPLORED</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>toward lived experience</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
