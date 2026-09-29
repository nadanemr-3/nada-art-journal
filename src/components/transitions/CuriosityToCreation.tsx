import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ContinuousLine } from '../visual/ContinuousLine';
import { ObservationCircleMark, PencilRulerTicks, RegistrationCrossMark } from '../visual/EditorialMarks';

export interface CuriosityToCreationProps {
  className?: string;
}

/**
 * CuriosityToCreation (SEE → MAKE Transition)
 * 
 * Narrative visual transformation:
 * OBSERVATION (field-note line & node)
 *   ↓
 * TURNING (idea loops around)
 *   ↓
 * METAMORPHOSIS (curiosity becomes creation)
 *   ↓
 * BRUSH & MAKING (expressive thicker stroke of physical studio craft)
 * 
 * Acts as an intentional, spacious breathing page between SEE and MAKE.
 */
export const CuriosityToCreation: React.FC<CuriosityToCreationProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const loopProgress = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const brushProgress = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-label="Transition — Curiosity to Creation"
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
            FIELD NOTE → SKETCHBOOK
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-ink/65">
          <span className="hidden sm:inline">FROM OBSERVATION TO CREATION</span>
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/70 inline-block" />
        </div>
      </motion.div>

      {/* Visual Transformation Canvas */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Stage A & B: Observation Node turns into Loop Line */}
        <motion.div
          className="w-full relative"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Subtle observation node mark echoing SEE with measurement scale */}
          <div className="flex flex-col items-center gap-1 mb-3">
            <div className="flex items-center justify-center gap-2">
              <ObservationCircleMark size={14} color="#E85D8E" />
              <span className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.2em] uppercase text-ink/75">
                the idea turns
              </span>
              <span className="text-[9px] font-mono text-deep-pink/70">[ 3.2px ]</span>
            </div>
            <PencilRulerTicks length="sm" color="#E85D8E" className="opacity-30" />
          </div>

          <ContinuousLine
            state="loop"
            color="#E85D8E"
            strokeWidth={3.2}
            progress={shouldReduceMotion ? undefined : loopProgress}
            animated={!shouldReduceMotion}
            className="w-full max-h-[160px] sm:max-h-[190px]"
          />
        </motion.div>

        {/* Central Metamorphosis Badge: "curiosity becomes creation →" */}
        <motion.div
          className="my-6 sm:my-8 flex flex-col items-center gap-2 z-10"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Tactile paper card tab */}
          <div className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FFFDF9] border border-soft-pink/60 shadow-xs flex items-center gap-2.5 transform -rotate-[0.8deg] transition-transform duration-300 hover:rotate-0 hover:shadow-md">
            <span className="text-signature-pink text-xs select-none" aria-hidden="true">✦</span>
            <span className="type-handwriting-note text-base sm:text-lg lg:text-xl text-ink/90 italic">
              curiosity becomes creation
            </span>
            <span className="text-signature-pink text-lg sm:text-xl select-none font-display font-medium">
              →
            </span>
          </div>

          {/* Understated marginalia whisper */}
          <span className="text-[9px] sm:text-[10px] font-mono text-ink/55 tracking-widest uppercase">
            [ an observation takes physical form ]
          </span>
        </motion.div>

        {/* Stage C: Loop Transforms into Thicker Expressive Brush Stroke */}
        <motion.div
          className="w-full relative -mt-2 sm:-mt-4"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
        >
          <ContinuousLine
            state="brush"
            color="#E85D8E"
            strokeWidth={5.5}
            progress={shouldReduceMotion ? undefined : brushProgress}
            animated={!shouldReduceMotion}
            className="w-full max-h-[140px] sm:max-h-[170px]"
          />

          {/* Threshold marker entering MAKE */}
          <div className="flex items-center justify-between px-4 sm:px-8 -mt-2 text-[10px] sm:text-[11px] font-body tracking-[0.18em] uppercase text-ink/75">
            <div className="flex items-center gap-2 text-ink/65 font-mono text-[9px] sm:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-pink" />
              <span>INK DENSITY: 5.5PX BRUSH</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
              <span>[ toward making ]</span>
              <span className="text-signature-pink select-none font-display">↓</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default CuriosityToCreation;
