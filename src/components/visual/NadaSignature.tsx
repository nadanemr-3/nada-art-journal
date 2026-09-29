import React from 'react';
import { HandDrawnStroke } from './HandDrawnStroke';
import { NadaLogo } from './NadaLogo';

export interface NadaSignatureProps {
  /** Optional path to authentic vector signature asset (e.g. nada-signature.svg) */
  src?: string;
  /** Scale variant for signature placement */
  size?: 'sm' | 'md' | 'lg';
  /** Optional secondary editorial whisper below signature */
  subtitle?: string;
  className?: string;
}

/**
 * NadaSignature
 * 
 * Subtle, organic signature treatment for the NADA visual identity.
 * Designed with a clean structure ready to accept authentic `nada-signature.svg`
 * assets when provided, while rendering an elegant, quiet editorial wordmark
 * with hand-drawn stroke underline in the interim.
 */
export const NadaSignature: React.FC<NadaSignatureProps> = ({
  src,
  size = 'md',
  subtitle,
  className = '',
}) => {
  // If an authentic signature asset exists in the future, render it cleanly
  if (src) {
    const sizeClasses = {
      sm: 'h-6 sm:h-7',
      md: 'h-8 sm:h-10',
      lg: 'h-11 sm:h-14',
    }[size];

    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={src}
          alt="Nada"
          className={`${sizeClasses} w-auto object-contain select-none`}
        />
        {subtitle && (
          <span className="type-handwriting-note text-xs text-ink/75 italic mt-1 select-none">
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  // Restrained typographic and hand-drawn treatment
  const titleSizes = {
    sm: 'text-xl tracking-[0.22em]',
    md: 'text-2xl sm:text-3xl tracking-[0.25em]',
    lg: 'text-3xl sm:text-4xl tracking-[0.28em]',
  }[size];

  const strokeWidths = {
    sm: 'w-12 sm:w-14',
    md: 'w-16 sm:w-20',
    lg: 'w-20 sm:w-28',
  }[size];

  const logoSizes: Record<'sm' | 'md' | 'lg', 'sm' | 'md' | 'lg'> = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <NadaLogo size={logoSizes[size]} className="text-ink" />
      <div className={`${strokeWidths} mt-1 sm:mt-1.5`}>
        <HandDrawnStroke variant="underline" color="#E85D8E" strokeWidth={size === 'lg' ? 2.75 : 2.2} animated />
      </div>
      {subtitle && (
        <span className="type-handwriting-note text-xs sm:text-sm text-ink/75 italic mt-1.5">
          {subtitle}
        </span>
      )}
    </div>
  );
};
