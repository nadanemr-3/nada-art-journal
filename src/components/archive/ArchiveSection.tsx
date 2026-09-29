import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HandDrawnStroke } from '../visual/HandDrawnStroke';
import { NadaSymbol } from '../visual/NadaSymbol';
import { ArchiveCard } from './ArchiveCard';
import { ArchiveCategoryKey, ArchiveItem } from './types';

import mapUrl from '../../../map.jpg';
import aswanUrl from '../../../aswan.jpg';
import designUrl from '../../../design.png';
import peopleUrl from '../../../people.jpg';
import whyUrl from '../../../why.jpg';
import musicUrl from '../../../music.jpg';
import paintingUrl from '../../../painting.jpg';
import boardUrl from '../../../board.jpg';
import runUrl from '../../../run.jpg';
import mangoUrl from '../../../mango.jpg';
import cakeUrl from '../../../cake.jpg';
import bimUrl from '../../../bim.png';
import brushesUrl from '../../../brushes.jpg';
import geoUrl from '../../../geo.png';
import gradUrl from '../../../grad.jpg';
import coffeeUrl from '../../../coffee.jpg';
import rainUrl from '../../../rain.jpg';
import artUrl from '../../../art.jpg';
import sketchUrl from '../../../sketch.jpg';
import babyUrl from '../../../baby.jpg';
import doorUrl from '../../../door.jpg';

export interface ArchiveSectionProps {
  className?: string;
}

const CATEGORIES: { key: ArchiveCategoryKey; label: string; symbol: 'noticed' | 'spark' | 'thought' | 'return'; count: number }[] = [
  { key: 'all', label: 'ALL ENTRIES', symbol: 'noticed', count: 21 },
  { key: 'notice', label: 'THINGS I NOTICE', symbol: 'noticed', count: 6 },
  { key: 'keep', label: 'THINGS I KEEP', symbol: 'spark', count: 5 },
  { key: 'fascinations', label: 'CURRENT FASCINATIONS', symbol: 'thought', count: 5 },
  { key: 'return', label: 'THINGS I RETURN TO', symbol: 'return', count: 5 },
];

const ARCHIVE_ITEMS: ArchiveItem[] = [
  // ==========================================
  // 1. THINGS I NOTICE (Observations)
  // ==========================================
  {
    id: 'notice-maps',
    category: 'notice',
    symbol: 'noticed',
    title: 'Routes & Spatial Logic',
    note: 'Where paths cross and stories begin; observing how layout quietly guides movement.',
    domain: 'MAPS',
    tag: 'OBS-01',
    date: '2026',
    src: mapUrl,
    aspect: 'landscape',
  },
  {
    id: 'notice-science',
    category: 'notice',
    symbol: 'noticed',
    title: 'Patterns in Nature',
    note: 'Observing subtle rhythmic laws at play in everyday organic forms.',
    domain: 'SCIENCE',
    tag: 'OBS-02',
    date: '2026',
    src: aswanUrl,
    aspect: 'landscape',
  },
  {
    id: 'notice-technology',
    category: 'notice',
    symbol: 'noticed',
    title: 'Tools & Architecture',
    note: 'How we shape ideas into function; the invisible frameworks we live inside.',
    domain: 'TECH',
    tag: 'OBS-03',
    date: '2026',
    src: designUrl,
    aspect: 'landscape',
  },
  {
    id: 'notice-people',
    category: 'notice',
    symbol: 'noticed',
    title: 'Connection & Culture',
    note: 'The warmth of everyday life, shared laughter, and spontaneous gestures.',
    domain: 'PEOPLE',
    tag: 'OBS-04',
    date: '2026',
    src: peopleUrl,
    aspect: 'landscape',
  },
  {
    id: 'notice-why',
    category: 'notice',
    symbol: 'noticed',
    title: 'The Unasked Question',
    note: 'Always looking beneath the surface; asking why things are the way they are.',
    domain: 'INQUIRY',
    tag: 'OBS-05',
    date: '2026',
    src: whyUrl,
    aspect: 'landscape',
  },
  {
    id: 'notice-natural',
    category: 'notice',
    symbol: 'noticed',
    title: '[CONTENT TO BE ADDED]',
    note: '[natural pattern observation to be cataloged]',
    domain: 'NATURAL',
    tag: 'OBS-06',
    date: '2026',
    src: musicUrl,
    aspect: 'portrait',
  },

  // ==========================================
  // 2. THINGS I KEEP (Preserved Fragments)
  // ==========================================
  {
    id: 'keep-drawing',
    category: 'keep',
    symbol: 'spark',
    title: 'Composition & Gesture Study',
    note: 'Pencil, ink, and vector lines testing weight, color harmony, and negative space.',
    domain: 'DRAWING',
    tag: 'KEEP-01',
    date: '2026',
    src: paintingUrl,
    aspect: 'landscape',
  },
  {
    id: 'keep-stay',
    category: 'keep',
    symbol: 'spark',
    title: 'Made to Stay',
    note: 'Something I made with my own hands and chose to keep.',
    domain: 'MADE',
    tag: 'KEEP-02',
    date: '2026',
    src: boardUrl,
    aspect: 'landscape',
  },
  {
    id: 'keep-passing',
    category: 'keep',
    symbol: 'spark',
    title: 'Kept in Passing',
    note: 'A fleeting moment from everyday life that caught my attention and stayed with me.',
    domain: 'EVERYDAY',
    tag: 'KEEP-03',
    date: '2026',
    src: runUrl,
    aspect: 'portrait',
  },
  {
    id: 'keep-curls',
    category: 'keep',
    symbol: 'spark',
    title: 'Personal Memory Snapshot',
    note: 'One of those quiet, spontaneous captures preserved from ordinary life.',
    domain: 'MOMENTS',
    tag: 'KEEP-04',
    date: '2026',
    src: mangoUrl,
    aspect: 'portrait',
  },
  {
    id: 'keep-story',
    category: 'keep',
    symbol: 'spark',
    title: 'A Thing With a Story',
    note: 'A simple thing carrying a story I still remember.',
    domain: 'STORY',
    tag: 'KEEP-05',
    date: '2026',
    src: cakeUrl,
    aspect: 'portrait',
  },

  // ==========================================
  // 3. CURRENT FASCINATIONS (Active Inquiry)
  // ==========================================
  {
    id: 'fasc-spatial',
    category: 'fascinations',
    symbol: 'thought',
    title: 'Spatial Systems & Why Paths Cross',
    note: 'Examining how routes, maps, and spatial logic shape human encounters.',
    domain: 'SPATIAL LOGIC',
    tag: 'FASC-01',
    date: 'ACTIVE',
    src: bimUrl,
    aspect: 'landscape',
  },
  {
    id: 'fasc-marks',
    category: 'fascinations',
    symbol: 'thought',
    title: 'Tension & Balance in Mark-Making',
    note: 'How a line on paper holds weight, intention, and quiet stillness.',
    domain: 'STUDIO CRAFT',
    tag: 'FASC-02',
    date: 'ACTIVE',
    src: brushesUrl,
    aspect: 'portrait',
  },
  {
    id: 'fasc-system',
    category: 'fascinations',
    symbol: 'thought',
    title: 'From Object Curve to Viewport Layout',
    note: 'Translating three-dimensional physical volume into digital interface structure.',
    domain: 'DIGITAL CRAFT',
    tag: 'FASC-03',
    date: 'ACTIVE',
    src: geoUrl,
    aspect: 'landscape',
  },
  {
    id: 'fasc-structure',
    category: 'fascinations',
    symbol: 'thought',
    title: 'From Screen to Structure',
    note: 'Exploring how ideas move from a digital screen into something tangible.',
    domain: 'STRUCTURE',
    tag: 'FASC-04',
    date: 'ACTIVE',
    src: gradUrl,
    aspect: 'landscape',
  },
  {
    id: 'fasc-placeholder',
    category: 'fascinations',
    symbol: 'thought',
    title: 'The Space Between Thoughts',
    note: 'Observing how quiet intervals and simple routines often bring clarity to complex ideas.',
    domain: 'INQUIRY',
    tag: 'FASC-05',
    date: 'OPEN',
    src: coffeeUrl,
    aspect: 'landscape',
  },

  // ==========================================
  // 4. THINGS I RETURN TO (Recurrent Cycles)
  // ==========================================
  {
    id: 'return-stay',
    category: 'return',
    symbol: 'return',
    title: 'Things That Stay With Me',
    note: 'Small details, ideas, and moments that quietly find their way back.',
    domain: 'RECURRENT',
    tag: 'RETURN-01',
    date: 'RECURRENT',
    src: rainUrl,
    aspect: 'landscape',
  },
  {
    id: 'return-look',
    category: 'return',
    symbol: 'return',
    title: 'Things I Look At Again',
    note: 'Art, images, and small visual details that I enjoy returning to and seeing differently each time.',
    domain: 'VISUAL',
    tag: 'RETURN-02',
    date: 'RECURRENT',
    src: artUrl,
    aspect: 'landscape',
  },
  {
    id: 'return-sketch',
    category: 'return',
    symbol: 'return',
    title: 'Sketching to Understand How Things Work',
    note: 'Drawing as an instrument of curiosity rather than a final destination.',
    domain: 'CRAFT',
    tag: 'RETURN-03',
    date: 'RECURRENT',
    src: sketchUrl,
    aspect: 'portrait',
  },
  {
    id: 'return-people',
    category: 'return',
    symbol: 'return',
    title: 'Everyday Warmth with People',
    note: 'The warmth of life outside the studio — sunshine, games, and laughter.',
    domain: 'PEOPLE',
    tag: 'RETURN-04',
    date: 'RECURRENT',
    src: babyUrl,
    aspect: 'portrait',
  },
  {
    id: 'return-placeholder',
    category: 'return',
    symbol: 'return',
    title: 'Entrances and Spaces in Between',
    note: 'How doorways frame light, guide movement, and quietly mark transitions from one space into another.',
    domain: 'CYCLE',
    tag: 'RETURN-05',
    date: 'RECURRENT',
    src: doorUrl,
    aspect: 'portrait',
  },
];

/**
 * ArchiveSection — "Things I have noticed, made, kept, or returned to."
 * 
 * Structural foundation for NADA's living digital archive.
 * Formatted as an evolving personal notebook and collection of fragments:
 * - Things I Notice (Observations & inquiries)
 * - Things I Keep (Preserved artifacts & moments)
 * - Current Fascinations (Active inquiries)
 * - Things I Return To (Cycles connected to NOTICE AGAIN)
 */
export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ArchiveCategoryKey>('all');

  const filteredItems = activeCategory === 'all'
    ? ARCHIVE_ITEMS
    : ARCHIVE_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="archive"
      aria-label="Archive — Personal Collection"
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
            ARCHIVE
          </span>
          <span className="text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-[11px] font-body font-medium tracking-[0.16em] uppercase text-ink/75">
            PERSONAL COLLECTION // EVOLVING NOTEBOOK
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-body tracking-[0.16em] uppercase text-ink/75">
          <span className="hidden md:inline-flex items-center gap-1.5 text-ink/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block shadow-2xs" />
            <span>COLLECTED OVER TIME</span>
          </span>
          <span className="hidden md:inline text-soft-pink select-none" aria-hidden="true">/</span>
          <span className="text-ink/80 font-medium tracking-[0.18em]">
            21 FRAGMENTS
          </span>
        </div>
      </motion.div>

      {/* Main Section Statement Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-14">
        <motion.div
          className="lg:col-span-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-deep-pink font-semibold tracking-[0.18em] uppercase">
              ARCHIVAL FOLIO // SPREAD 08
            </span>
            <span className="text-soft-pink select-none font-mono text-xs">/</span>
            <span className="text-[10px] font-mono text-ink/65 tracking-widest uppercase hidden sm:inline">
              [ REF: NOTICED · KEPT · RETURNED ]
            </span>
          </div>

          <h2 className="type-section-heading text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-[-0.025em] leading-[1.1]">
            Things I have noticed, made, kept, or returned to.
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={2.8} className="w-36 sm:w-48" />
            <p className="type-handwriting-note text-sm sm:text-base text-ink/85 italic">
              "an evolving notebook of visual fragments and questions worth keeping"
            </p>
          </div>
        </motion.div>

        {/* Marginalia Archive Note */}
        <motion.div
          className="lg:col-span-4 flex flex-col lg:items-end gap-2 text-xs font-mono text-ink/70"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-soft-pink/40 bg-warm-ivory/80 shadow-2xs">
            <NadaSymbol name="spark" size={13} color="#E85D8E" className="shrink-0" />
            <span className="type-handwriting-note text-[12px] sm:text-[13px] text-ink/85 italic">
              "not a database — a memory chest."
            </span>
          </div>
          <span className="text-[10px] text-ink/55 tracking-widest uppercase pr-2">
            [ UNFINISHED THOUGHTS WELCOME ]
          </span>
        </motion.div>
      </div>

      {/* Tactile Folio Category Ribbon (Paper Bookmark Selector) */}
      <motion.nav
        role="tablist"
        aria-label="Archive Categories"
        className="flex flex-wrap items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-warm-ivory/90 border border-soft-pink/45 shadow-2xs mb-8 sm:mb-12"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              aria-controls="archive-grid"
              onClick={() => setActiveCategory(cat.key)}
              className={`group/tab relative px-2.5 sm:px-4 py-1.5 sm:py-2 min-h-[36px] sm:min-h-0 rounded-xl text-[10px] sm:text-xs font-mono tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-signature-pink flex items-center gap-1.5 sm:gap-2 select-none cursor-pointer ${
                isActive
                  ? 'bg-[#FFFDF9] text-deep-pink font-semibold border border-soft-pink/60 shadow-xs'
                  : 'text-ink/75 hover:text-ink hover:bg-soft-pink/20'
              }`}
            >
              <NadaSymbol name={cat.symbol} size={12} color={isActive ? '#E85D8E' : 'currentColor'} className="shrink-0" />
              <span>{cat.label}</span>
              <span className={`text-[10px] tabular-nums ${isActive ? 'text-deep-pink/80 font-bold' : 'text-ink/45'}`}>
                ({cat.count})
              </span>
            </button>
          );
        })}
      </motion.nav>

      {/* Archive Items Grid (Responsive, Editorial Layout) */}
      <div
        id="archive-grid"
        role="region"
        aria-label="Archive Items"
        className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10 items-stretch"
      >
        {filteredItems.map((item, idx) => (
          <ArchiveCard key={item.id} item={item} index={idx} />
        ))}
      </div>

      {/* Tactile Archival Summary Ledger Ribbon */}
      <motion.div
        className="mt-14 sm:mt-18 p-4 sm:p-5 rounded-2xl border border-soft-pink/40 bg-warm-ivory/70 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-ink/75 shadow-xs"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-semibold text-deep-pink tracking-widest uppercase">
            REGISTRY // 08
          </span>
          <span className="text-soft-pink select-none">·</span>
          <span className="text-[11px] font-body text-ink/80 font-medium uppercase tracking-wider">
            {filteredItems.length} fragments in active viewing
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-ink/70">
          <span className="hidden sm:inline">notice · keep · fascinations · return</span>
          <div className="flex items-center gap-1.5" title="Archive category inks">
            <span className="w-2 h-2 rounded-full bg-signature-pink" title="Notice" />
            <span className="w-2 h-2 rounded-full bg-soft-pink" title="Keep" />
            <span className="w-2 h-2 rounded-full bg-sea" title="Fascinations" />
            <span className="w-2 h-2 rounded-full bg-warm-sun" title="Return" />
          </div>
          <span className="font-semibold text-deep-pink">[ OPEN LEDGER ]</span>
        </div>
      </motion.div>

      {/* Section Bottom Synthesis Marker leading to Final Spread */}
      <motion.div
        className="mt-12 sm:mt-16 pt-6 border-t border-soft-pink/25 flex items-center justify-between text-ink/75 font-medium text-[10px] sm:text-[11px] font-body tracking-[0.2em] uppercase"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signature-pink inline-block shadow-2xs" />
          <span>PAGE 08 · ARCHIVE</span>
          <span className="hidden sm:inline text-soft-pink">·</span>
          <span className="hidden sm:inline text-ink/65 font-normal">THE COLLECTION CONTINUES</span>
        </div>
        <div className="flex items-center gap-1.5 text-deep-pink font-semibold">
          <span>toward the closing page</span>
          <span className="text-signature-pink select-none font-display">→</span>
        </div>
      </motion.div>
    </section>
  );
};
export default ArchiveSection;
