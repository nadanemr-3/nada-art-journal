import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NadaSymbol } from '../visual/NadaSymbol';
import { WashiTape } from '../visual/WashiTape';
import { ArchiveItem } from './types';

export interface ArchiveCardProps {
  item: ArchiveItem;
  index: number;
  className?: string;
}

/**
 * ArchiveCard
 * 
 * Individual tactile specimen card within the NADA personal archive.
 * Formatted like an archival field plate or tipped-in notebook scrap:
 * - Corner registration marks (⌜ ⌝ ⌞ ⌟)
 * - Semantic NadaSymbol vocabulary
 * - Tactile paper texture and washi tape tab
 * - Dedicated handling for real fragments vs clearly marked [CONTENT TO BE ADDED] placeholders
 */
export const ArchiveCard: React.FC<ArchiveCardProps> = ({
  item,
  index,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle tape color based on category
  const getTapeColor = (): 'sun' | 'sea' | 'pink' | 'ivory' => {
    switch (item.category) {
      case 'notice':
        return 'sun';
      case 'keep':
        return 'pink';
      case 'fascinations':
        return 'sea';
      case 'return':
        return 'ivory';
      default:
        return 'sun';
    }
  };

  // Orientation-aware aspect ratio to prevent aggressive cropping & maximize visual presence
  const getAspectClass = () => {
    switch (item.aspect) {
      case 'portrait':
        return 'aspect-[4/5] max-h-[460px] sm:max-h-[520px]';
      case 'square':
        return 'aspect-square max-h-[440px]';
      case 'landscape':
      default:
        return 'aspect-[4/3] max-h-[380px] sm:max-h-[440px]';
    }
  };

  return (
    <motion.article
      tabIndex={0}
      role="article"
      aria-label={`${item.category}: ${item.title}`}
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_22px_rgba(36,33,42,0.04)] p-5 sm:p-6 lg:p-7 transition-all duration-300 ease-out hover:shadow-[0_12px_32px_rgba(36,33,42,0.08)] focus-visible:outline-2 focus-visible:outline-signature-pink/70 focus-visible:shadow-[0_8px_28px_rgba(232,93,142,0.12)] ${className}`}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.008, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Corner registration crosshairs for authentic archival feel with subtle group interaction */}
      <div className="absolute top-2.5 left-2.5 text-ink/20 group-hover:text-deep-pink/50 group-focus-visible:text-deep-pink/50 text-[9px] font-mono pointer-events-none select-none z-10 transition-colors duration-200" aria-hidden="true">⌜</div>
      <div className="absolute top-2.5 right-2.5 text-ink/20 group-hover:text-deep-pink/50 group-focus-visible:text-deep-pink/50 text-[9px] font-mono pointer-events-none select-none z-10 transition-colors duration-200" aria-hidden="true">⌝</div>
      <div className="absolute bottom-2.5 left-2.5 text-ink/20 group-hover:text-deep-pink/50 group-focus-visible:text-deep-pink/50 text-[9px] font-mono pointer-events-none select-none z-10 transition-colors duration-200" aria-hidden="true">⌞</div>
      <div className="absolute bottom-2.5 right-2.5 text-ink/20 group-hover:text-deep-pink/50 group-focus-visible:text-deep-pink/50 text-[9px] font-mono pointer-events-none select-none z-10 transition-colors duration-200" aria-hidden="true">⌟</div>

      {/* Tactile Washi Tape tab on corner */}
      <WashiTape
        color={getTapeColor()}
        angle={index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
        width="w-10 sm:w-11"
        height="h-4"
        className="absolute -top-2.5 right-6 transition-transform duration-300 group-hover:rotate-2 group-focus-visible:rotate-2"
      />

      <div>
        {/* Archival Folio Header */}
        <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-soft-pink/35 text-[10px] sm:text-[11px] font-mono tracking-wider text-ink/75 select-none">
          <div className="flex items-center gap-1.5">
            <NadaSymbol name={item.symbol} size={14} color="#E85D8E" className="shrink-0 transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110" />
            <span className="font-semibold text-deep-pink uppercase">
              {item.tag}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {item.date && (
              <span className="font-mono text-[9px] sm:text-[10px] text-ink/60 tabular-nums">
                [{item.date}]
              </span>
            )}
            {item.domain && (
              <span className="text-[9px] sm:text-[10px] font-body text-ink/70 uppercase tracking-widest font-medium hidden sm:inline">
                · {item.domain}
              </span>
            )}
          </div>
        </div>

        {/* Specimen Visual / Image Frame */}
        {item.src && (
          <div className={`relative ${getAspectClass()} w-full rounded-xl overflow-hidden border border-soft-pink/40 bg-[#F9F6F0] mb-4 sm:mb-5 select-none flex items-center justify-center`}>
            <motion.img
              src={item.src}
              alt={item.alt || item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
            />
          </div>
        )}

        {/* Placeholder Frame for Unfilled Future Additions */}
        {item.isPlaceholder && (
          <div className="relative aspect-[4/3] w-full rounded-xl border border-dashed border-soft-pink/60 bg-warm-ivory/50 mb-4 sm:mb-5 flex flex-col items-center justify-center p-6 text-center select-none">
            <NadaSymbol name="spark" size={16} color="#E85D8E" className="opacity-60 mb-1.5" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-deep-pink font-semibold">
              [CONTENT TO BE ADDED]
            </span>
            <span className="text-[10px] font-mono text-ink/50 mt-1">
              archival entry reserved
            </span>
          </div>
        )}

        {/* Content Title */}
        <h4 className="font-display font-medium text-lg sm:text-xl text-ink tracking-tight group-hover:text-deep-pink transition-colors duration-200 leading-snug">
          {item.title}
        </h4>

        {/* One-Line Note / Marginalia */}
        <p className="type-handwriting-note text-sm sm:text-[14px] text-ink/85 italic mt-2 leading-relaxed">
          {item.note}
        </p>
      </div>

      {/* Card Footer Ledger */}
      <div className="mt-5 sm:mt-6 pt-3 border-t border-soft-pink/30 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-ink/65 uppercase tracking-wider select-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/70 inline-block" />
          <span>{item.category.toUpperCase()}</span>
        </span>
        <span className="text-ink/45 text-[9px] sm:text-[10px]">
          {item.isPlaceholder ? 'OPEN SLOT' : 'PRESERVED'}
        </span>
      </div>
    </motion.article>
  );
};
