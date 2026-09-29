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

  return (
    <motion.article
      aria-label={`${item.category}: ${item.title}`}
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#FFFDF9] border border-soft-pink/55 shadow-[0_4px_18px_rgba(36,33,42,0.04)] p-4 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(36,33,42,0.07)] ${className}`}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: (index % 6) * 0.08 }}
    >
      {/* Corner registration crosshairs for authentic archival feel */}
      <div className="absolute top-2 left-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌜</div>
      <div className="absolute top-2 right-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌝</div>
      <div className="absolute bottom-2 left-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌞</div>
      <div className="absolute bottom-2 right-2 text-ink/20 text-[9px] font-mono pointer-events-none select-none z-10" aria-hidden="true">⌟</div>

      {/* Tactile Washi Tape tab on corner */}
      <WashiTape
        color={getTapeColor()}
        angle={index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
        width="w-10 sm:w-11"
        height="h-4"
        className="absolute -top-2.5 right-6 transition-transform duration-300 group-hover:rotate-2"
      />

      <div>
        {/* Archival Folio Header */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-soft-pink/35 text-[10px] font-mono tracking-wider text-ink/75 select-none">
          <div className="flex items-center gap-1.5">
            <NadaSymbol name={item.symbol} size={13} color="#E85D8E" className="shrink-0 transition-transform duration-200 group-hover:scale-115" />
            <span className="font-semibold text-deep-pink uppercase">
              {item.tag}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {item.date && (
              <span className="font-mono text-[9px] text-ink/60 tabular-nums">
                [{item.date}]
              </span>
            )}
            {item.domain && (
              <span className="text-[9px] font-body text-ink/70 uppercase tracking-widest font-medium hidden sm:inline">
                · {item.domain}
              </span>
            )}
          </div>
        </div>

        {/* Specimen Visual / Image Frame */}
        {item.src && (
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-soft-pink/40 bg-warm-ivory/40 mb-3.5 select-none">
            <img
              src={item.src}
              alt={item.alt || item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Placeholder Frame for Unfilled Future Additions */}
        {item.isPlaceholder && (
          <div className="relative aspect-[16/9] w-full rounded-xl border border-dashed border-soft-pink/60 bg-warm-ivory/50 mb-3.5 flex flex-col items-center justify-center p-4 text-center select-none">
            <NadaSymbol name="spark" size={14} color="#E85D8E" className="opacity-60 mb-1" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-deep-pink font-semibold">
              [CONTENT TO BE ADDED]
            </span>
            <span className="text-[9px] font-mono text-ink/50 mt-0.5">
              archival entry reserved
            </span>
          </div>
        )}

        {/* Content Title */}
        <h4 className="font-display font-medium text-base sm:text-lg text-ink tracking-tight group-hover:text-deep-pink transition-colors duration-200 leading-snug">
          {item.title}
        </h4>

        {/* One-Line Note / Marginalia */}
        <p className="type-handwriting-note text-xs sm:text-[13px] text-ink/80 italic mt-1.5 leading-relaxed">
          {item.note}
        </p>
      </div>

      {/* Card Footer Ledger */}
      <div className="mt-4 pt-2.5 border-t border-soft-pink/30 flex items-center justify-between text-[10px] font-mono text-ink/65 uppercase tracking-wider select-none">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink/70 inline-block" />
          <span>{item.category.toUpperCase()}</span>
        </span>
        <span className="text-ink/45 text-[9px]">
          {item.isPlaceholder ? 'OPEN SLOT' : 'PRESERVED'}
        </span>
      </div>
    </motion.article>
  );
};
