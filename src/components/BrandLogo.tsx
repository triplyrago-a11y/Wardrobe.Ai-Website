import React from 'react';
import { motion } from 'motion/react';

export type LogoVariant =
  | 'auto'
  | 'light'
  | 'dark'
  | 'monochrome'
  | 'monochrome-invert'
  | 'app-icon-squircle'
  | 'app-icon-circle'
  | 'app-icon-rounded';

interface BrandLogoProps {
  variant?: LogoVariant;
  showWordmark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Pixel-faithful recreation of the uploaded Wardrobe.AI Logo System:
 * - Single-stroke rounded hanger with top hook loop
 * - Subtle translucent interior fill on Light/Dark primary variants
 * - 4-point concave AI sparkle star at upper-left
 * - Wordmark "Wardrobe" + ".AI" in official brand colours
 */
export const BrandSymbol: React.FC<{
  variant?: LogoVariant;
  className?: string;
  animateStroke?: boolean;
}> = ({ variant = 'auto', className = 'w-9 h-9', animateStroke = false }) => {
  const isAppIcon =
    variant === 'app-icon-squircle' ||
    variant === 'app-icon-circle' ||
    variant === 'app-icon-rounded';

  if (isAppIcon) {
    const rx =
      variant === 'app-icon-circle'
        ? 50
        : variant === 'app-icon-squircle'
        ? 26
        : 18;

    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
      >
        <rect
          width="100"
          height="100"
          rx={rx}
          className="fill-[#0071E3] dark:fill-[#2997FF] transition-colors duration-300"
        />
        {/* Subtle inner fill of hanger triangle */}
        <path
          d="M50 44 L21 67 L79 67 Z"
          fill="rgba(255, 255, 255, 0.16)"
        />
        {/* Hanger triangle base */}
        <path
          d="M50 44 L21 67 L79 67 Z"
          stroke="#FFFFFF"
          strokeWidth="6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Single-stroke hanger hook */}
        <path
          d="M50 44 C46.5 39 46 25.5 56.5 25.5 C64.5 25.5 66.5 32 65.5 35.5"
          stroke="#FFFFFF"
          strokeWidth="6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 4-point AI Sparkle */}
        <path
          d="M30 20 C30 26.5 32 28.5 38.5 28.5 C32 28.5 30 30.5 30 37 C30 30.5 28 28.5 21.5 28.5 C28 28.5 30 26.5 30 20 Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Determine colors based on variant
  const strokeColorClass =
    variant === 'light' || variant === 'monochrome'
      ? 'stroke-[#1D1D1F]'
      : variant === 'dark' || variant === 'monochrome-invert'
      ? 'stroke-[#FFFFFF]'
      : 'stroke-[#1D1D1F] dark:stroke-[#FFFFFF]';

  const sparkleColorClass =
    variant === 'monochrome'
      ? 'fill-[#1D1D1F]'
      : variant === 'monochrome-invert'
      ? 'fill-[#FFFFFF]'
      : variant === 'light'
      ? 'fill-[#0071E3]'
      : variant === 'dark'
      ? 'fill-[#2997FF]'
      : 'fill-[#0071E3] dark:fill-[#2997FF]';

  const triangleFillClass =
    variant === 'monochrome' || variant === 'monochrome-invert'
      ? 'fill-transparent'
      : variant === 'light'
      ? 'fill-[#0071E3]/14'
      : variant === 'dark'
      ? 'fill-[#2997FF]/18'
      : 'fill-[#0071E3]/14 dark:fill-[#2997FF]/18';

  if (animateStroke) {
    return (
      <svg
        viewBox="0 0 100 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
      >
        {/* Subtle triangle interior fill */}
        <motion.path
          d="M52 36 L14 66 L90 66 Z"
          className={triangleFillClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Hanger triangle & hook */}
        <motion.path
          d="M69 26.5 C70 21.5 67 14 57.5 14 C46.5 14 47.5 29.5 52 36 L14 66 L90 66 L52 36"
          className={strokeColorClass}
          strokeWidth="6.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* AI Sparkle with subtle light bloom */}
        <motion.g
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            delay: 0.48,
            type: 'spring',
            stiffness: 320,
            damping: 18,
          }}
          style={{ transformOrigin: '26px 21px' }}
        >
          <circle
            cx="26"
            cy="21"
            r="14"
            className="fill-[#0071E3]/20 dark:fill-[#2997FF]/25 blur-[4px]"
          />
          <path
            d="M26 9 C26 17.5 28.5 20 37 20 C28.5 20 26 22.5 26 31 C26 22.5 23.5 20 15 20 C23.5 20 26 17.5 26 9 Z"
            className={sparkleColorClass}
          />
        </motion.g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Subtle triangle interior tint matching brand sheet */}
      <path
        d="M52 36 L14 66 L90 66 Z"
        className={`${triangleFillClass} transition-colors duration-300`}
      />
      {/* Hanger triangle base */}
      <path
        d="M52 36 L14 66 L90 66 Z"
        className={`${strokeColorClass} transition-colors duration-300`}
        strokeWidth="6.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Single-stroke hanger hook */}
      <path
        d="M52 36 C47.5 29.5 46.5 14 57.5 14 C67 14 70 21.5 69 26.5"
        className={`${strokeColorClass} transition-colors duration-300`}
        strokeWidth="6.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 4-point AI Sparkle */}
      <path
        d="M26 9 C26 17.5 28.5 20 37 20 C28.5 20 26 22.5 26 31 C26 22.5 23.5 20 15 20 C23.5 20 26 17.5 26 9 Z"
        className={`${sparkleColorClass} transition-colors duration-300`}
      />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'auto',
  showWordmark = true,
  size = 'md',
  className = '',
}) => {
  const sizeConfig = {
    xs: { icon: 'w-6 h-5', text: 'text-sm', gap: 'gap-2' },
    sm: { icon: 'w-8 h-6.5', text: 'text-base', gap: 'gap-2.5' },
    md: { icon: 'w-9 h-7.5', text: 'text-lg', gap: 'gap-2.5' },
    lg: { icon: 'w-12 h-10', text: 'text-2xl', gap: 'gap-3.5' },
    xl: { icon: 'w-16 h-13', text: 'text-3xl sm:text-4xl', gap: 'gap-4' },
  }[size];

  const primaryTextColor =
    variant === 'light' || variant === 'monochrome'
      ? 'text-[#1D1D1F]'
      : variant === 'dark' || variant === 'monochrome-invert'
      ? 'text-[#FFFFFF]'
      : 'text-[#1D1D1F] dark:text-[#FFFFFF]';

  const accentTextColor =
    variant === 'monochrome'
      ? 'text-[#1D1D1F]'
      : variant === 'monochrome-invert'
      ? 'text-[#FFFFFF]'
      : variant === 'light'
      ? 'text-[#0071E3]'
      : variant === 'dark'
      ? 'text-[#2997FF]'
      : 'text-[#0071E3] dark:text-[#2997FF]';

  return (
    <span
      className={`inline-flex items-center ${sizeConfig.gap} whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <BrandSymbol variant={variant} className={sizeConfig.icon} />
      {showWordmark && (
        <span
          className={`font-bold tracking-tight leading-none ${sizeConfig.text} ${primaryTextColor} transition-colors duration-300`}
        >
          Wardrobe<span className={accentTextColor}>.AI</span>
        </span>
      )}
    </span>
  );
};
