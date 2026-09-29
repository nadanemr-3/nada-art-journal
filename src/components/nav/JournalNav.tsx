import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NadaSymbol } from '../visual/NadaSymbol';
import { NadaLogo } from '../visual/NadaLogo';

export interface JournalNavProps {
  className?: string;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'see', label: 'SEE' },
  { id: 'make', label: 'MAKE' },
  { id: 'live', label: 'LIVE' },
  { id: 'three', label: 'THREE THINGS' },
  { id: 'loop', label: 'LOOP' },
  { id: 'archive', label: 'ARCHIVE' },
  { id: 'ending', label: 'END' },
];

/**
 * JournalNav — Editorial Navigation & Living Masthead
 * 
 * Embodies the core Phase 2A identity:
 * "A digital journal that happens to be a website."
 * 
 * Provides clear wayfinding across the continuous cycle:
 * SEE → MAKE → LIVE → SEE
 * 
 * Prioritizes: CONTENT > EDITORIAL STRUCTURE > DECORATION
 * - Subtle, translucent warm ivory strip with delicate border
 * - Active section tracking with quiet signature pink waypoint
 * - Accessible keyboard navigation and skip link
 */
export const JournalNav: React.FC<JournalNavProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Determine active section based on scroll position
      const sections = ['ending', 'archive', 'loop', 'three', 'live', 'make', 'see'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#see"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-warm-ivory focus:rounded-md focus:text-xs focus:font-mono focus:tracking-wider focus:outline-2 focus:outline-signature-pink"
      >
        Skip to journal entries
      </a>

      {/* Living Editorial Masthead */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF9F2]/90 backdrop-blur-md border-b border-soft-pink/40 shadow-[0_2px_16px_rgba(36,33,42,0.04)] py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-5'
        } ${className}`}
      >
        <div className="editorial-container flex items-center justify-between">
          
          {/* Brand Identity / Home Anchor */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-2 sm:gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-signature-pink rounded-sm py-1 cursor-pointer shrink-0"
              aria-label="Return to top of NADA Art Journal"
            >
              <div className="flex items-center shrink-0 min-w-fit">
                <NadaLogo
                  size="sm"
                  className="text-ink group-hover:text-deep-pink transition-colors duration-200 shrink-0"
                />
              </div>
              <span className="text-soft-pink select-none text-xs shrink-0" aria-hidden="true">/</span>
              <span className="hidden sm:inline text-[10px] font-mono tracking-[0.2em] uppercase text-ink/75 shrink-0">
                VOL. 01 · ART JOURNAL
              </span>
            </button>

            {/* Mobile Active Section Tag */}
            <div className="flex sm:hidden items-center gap-1 px-2 py-0.5 rounded-full bg-soft-pink/30 text-[9px] font-mono tracking-wider text-deep-pink font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-pink" />
              <span>{activeSection === 'hero' ? 'START' : activeSection.toUpperCase()}</span>
            </div>
          </div>

          {/* Editorial Cycle Navigation Track */}
          <nav
            role="navigation"
            aria-label="Journal Cycle Navigation"
            className="hidden md:flex items-center gap-1.5 lg:gap-2.5 bg-[#FFFDF9]/80 border border-soft-pink/40 rounded-full px-3.5 py-1.5 shadow-2xs"
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <React.Fragment key={item.id}>
                  {idx > 0 && (
                    <span className="text-ink/20 text-[10px] select-none pointer-events-none" aria-hidden="true">
                      →
                    </span>
                  )}
                  <button
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-2 py-0.5 text-[11px] font-mono tracking-wider transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-signature-pink ${
                      isActive
                        ? 'text-deep-pink font-semibold'
                        : 'text-ink/75 hover:text-ink hover:bg-soft-pink/20'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-soft-pink/35 rounded-full -z-10"
                        transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                </React.Fragment>
              );
            })}
          </nav>

          {/* Quick Say Hi Whisper / Cycle Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('ending')}
              className="min-h-[36px] sm:min-h-0 text-[11px] sm:text-xs font-mono font-medium tracking-widest text-deep-pink hover:text-ink px-3 py-1.5 border border-soft-pink/50 hover:border-signature-pink/50 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-signature-pink flex items-center gap-1.5 cursor-pointer"
            >
              <span>Say hi</span>
              <span className="text-signature-pink">♡</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
