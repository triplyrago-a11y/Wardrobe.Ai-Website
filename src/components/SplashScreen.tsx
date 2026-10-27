import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandSymbol } from './BrandLogo';

interface SplashScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  isVisible,
  onComplete,
}) => {
  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const duration = prefersReducedMotion ? 150 : 1750;
    const timer = window.setTimeout(() => {
      onComplete();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="wardrobe-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFFFF] dark:bg-[#000000] px-6 select-none"
          role="dialog"
          aria-label="Wardrobe.AI Introduction"
        >
          {/* Ambient liquid-glass radial glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute w-80 h-80 rounded-full bg-[#0071E3]/10 dark:bg-[#2997FF]/14 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Step 2 & 3: Official Hanger Symbol + AI Sparkle with light effect */}
            <div className="flex items-center gap-4 sm:gap-5">
              <BrandSymbol
                animateStroke={true}
                className="w-16 h-14 sm:w-20 sm:h-16"
              />

              {/* Step 4: Reveal the Wardrobe.AI wordmark */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.62,
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                className="overflow-hidden"
              >
                <span className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]">
                  Wardrobe
                  <span className="text-[#0071E3] dark:text-[#2997FF]">
                    .AI
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-xs sm:text-sm text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 tracking-normal"
            >
              Personal Digital Wardrobe · Currently in Development
            </motion.p>
          </div>

          {/* Accessible immediate skip control */}
          <button
            type="button"
            onClick={onComplete}
            className="absolute bottom-8 right-8 px-4 py-2 text-xs font-medium text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 hover:text-[#1D1D1F] dark:hover:text-[#FFFFFF] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
