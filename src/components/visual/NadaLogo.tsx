import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface NadaLogoProps {
  /**
   * 'wordmark': Full handwritten four-letter NADA.
   * 'mark': Extracted handwritten initial.
   */
  variant?: 'wordmark' | 'mark';
  /**
   * Predefined scale variants or 'custom' to control via className
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  /** Main ink color (defaults to ink / currentColor) */
  color?: string;
  /** Signature accent color (optional, defaults to #E85D8E) */
  accentColor?: string;
  /** Whether to show subtle accent */
  showAccent?: boolean;
  className?: string;
}

/**
 * NADA Expressive Handwritten Identity
 * 
 * Powered by Caveat:
 * - Fluid, natural pen slant and organic stroke movement
 * - Authentic handwriting rhythm with subtle baseline bounce
 * - Confident medium-to-bold felt-tip/gel pen weight
 * - Personal, artistic, and clearly handwritten
 */
export const NadaLogo: React.FC<NadaLogoProps> = ({
  variant = 'wordmark',
  size = 'md',
  color = 'currentColor',
  accentColor = '#E85D8E',
  showAccent = false,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'text-[34px] sm:text-[40px] tracking-[0.05em]',
    md: 'text-[44px] sm:text-[52px] tracking-[0.06em]',
    lg: 'text-[56px] sm:text-[66px] tracking-[0.07em]',
    xl: 'text-[68px] sm:text-[80px] tracking-[0.08em]',
    custom: '',
  }[size];

  const text = variant === 'mark' ? 'N' : 'NADA';
  const letters = text.split('');

  return (
    <motion.span
      className={`font-handwriting font-bold leading-none select-none inline-flex items-center overflow-visible ${sizeClasses} ${className}`}
      style={{
        color: color === 'currentColor' ? undefined : color,
        fontFamily: '"Caveat", cursive',
      }}
      role="img"
      aria-label={variant === 'mark' ? 'N' : 'NADA'}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -1.5,
              scale: 1.012,
              transition: {
                duration: 0.25,
                ease: [0.25, 1, 0.5, 1],
              },
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <span className="inline-flex items-baseline" aria-hidden="true">
        {letters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            style={{ letterSpacing: 'inherit' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.38,
                    delay: 0.04 + index * 0.038,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            {char}
          </motion.span>
        ))}
      </span>

      {showAccent && (
        <motion.span
          className="inline-block rounded-full ml-1 select-none"
          style={{
            width: '0.14em',
            height: '0.14em',
            backgroundColor: accentColor,
            verticalAlign: '0.08em',
          }}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: [0.85, 1, 0.85],
                  scale: [0.96, 1.05, 0.96],
                  y: [0, -0.4, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      )}
    </motion.span>
  );
};

export default NadaLogo;
