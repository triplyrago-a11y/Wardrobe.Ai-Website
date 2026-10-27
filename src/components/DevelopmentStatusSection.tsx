import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, X, Check, Copy } from 'lucide-react';
import { BrandLogo, BrandSymbol } from './BrandLogo';

interface DevelopmentStatusSectionProps {
  onReplaySplash: () => void;
}

const BRAND_SWATCHES = [
  { hex: '#0071E3', name: 'Accent (light)', role: 'Primary Blue' },
  { hex: '#2997FF', name: 'Accent (dark)', role: 'Dark-Mode Blue' },
  { hex: '#1D1D1F', name: 'Ink', role: 'Primary Ink' },
  { hex: '#F5F5F7', name: 'Secondary bg', role: 'Secondary Surface' },
  { hex: '#FFFFFF', name: 'Background', role: 'Light Canvas' },
  { hex: '#000000', name: 'Dark bg', role: 'Dark Canvas' },
];

export const DevelopmentStatusSection: React.FC<
  DevelopmentStatusSectionProps
> = ({ onReplaySplash }) => {
  const [brandSheetModalOpen, setBrandSheetModalOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    window.setTimeout(() => setCopiedHex(null), 1600);
  };

  return (
    <>
      {/* SECTION 12: DEVELOPMENT STATUS SECTION */}
      <section
        id="development"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F7] dark:bg-[#09090B] border-t border-[#1D1D1F]/6 dark:border-white/8 transition-colors duration-300"
      >
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Primary Development Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-3xl p-8 sm:p-12"
          >
            <div className="max-w-3xl">
              {/* Subtle Status Indicator (Unboxed text per Zero-Pill & No-Pulsing-Dot rules) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[#0071E3] dark:text-[#2997FF]">
                <span>Development in Progress</span>
                <span
                  className="text-[#1D1D1F]/30 dark:text-[#FFFFFF]/30"
                  aria-hidden="true"
                >
                  ·
                </span>
                <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal">
                  By @dhruv.codes
                </span>
              </div>

              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]"
                style={{ textWrap: 'balance' }}
              >
                We&apos;re Building Something Worth Wearing.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#1D1D1F]/75 dark:text-[#FFFFFF]/75 leading-relaxed">
                Wardrobe.AI is currently under development. We&apos;re working
                toward a smarter way to organize your wardrobe, process clothing
                images, and discover outfit combinations with AI.
              </p>
            </div>

            {/* Honest Scope & Design Focus Grid */}
            <div className="mt-10 pt-8 border-t border-[#1D1D1F]/8 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                  01. Garment Image Pipeline
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 leading-relaxed">
                  Focusing on clean background removal and consistent
                  hanger-based clothing visuals without mannequins.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                  02. Personal Wardrobe System
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 leading-relaxed">
                  Designing a calm, tactile interface for organizing garments you
                  already own rather than pushing store catalogs.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                  03. Thoughtful Outfit Pairing
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 leading-relaxed">
                  Developing AI-assisted styling suggestions that combine pieces
                  from your personal digital wardrobe.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Official Brand Identity & Logo System Interactive Showcase */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1D1D1F]/8 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0071E3] dark:text-[#2997FF]">
                  <span>Official Brand Identity</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal">
                    Wardrobe.AI Logo System
                  </span>
                </div>
                <h3 className="mt-1.5 text-xl font-bold text-[#1D1D1F] dark:text-[#FFFFFF]">
                  Single-stroke hanger with AI sparkle
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={onReplaySplash}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-[#1D1D1F] dark:text-[#FFFFFF] bg-[#F5F5F7] dark:bg-white/10 hover:bg-[#0071E3]/10 dark:hover:bg-[#2997FF]/15 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Play className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                  <span>Replay Splash Intro</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBrandSheetModalOpen(true)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-white dark:text-black bg-[#0071E3] dark:bg-[#2997FF] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Official Brand Sheet</span>
                </button>
              </div>
            </div>

            {/* Logo Lockups & App Icon Masks Preview */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Primary Horizontal Light Lockup */}
              <div className="md:col-span-4 rounded-2xl bg-[#FFFFFF] border border-[#1D1D1F]/10 p-6 flex flex-col justify-between min-h-[130px]">
                <div className="flex items-center justify-center flex-1">
                  <BrandLogo variant="light" size="md" />
                </div>
                <span className="text-[11px] text-[#1D1D1F]/50">
                  Primary Light Lockup
                </span>
              </div>

              {/* Primary Horizontal Dark Lockup */}
              <div className="md:col-span-4 rounded-2xl bg-[#000000] border border-white/15 p-6 flex flex-col justify-between min-h-[130px]">
                <div className="flex items-center justify-center flex-1">
                  <BrandLogo variant="dark" size="md" />
                </div>
                <span className="text-[11px] text-white/50">
                  Primary Dark Lockup
                </span>
              </div>

              {/* App Icon Masks & Small-Size Legibility */}
              <div className="md:col-span-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#121216] border border-[#1D1D1F]/10 dark:border-white/10 p-6 flex flex-col justify-between min-h-[130px]">
                <div className="flex items-center justify-center gap-3.5 flex-1">
                  <BrandSymbol
                    variant="app-icon-circle"
                    className="w-12 h-12"
                  />
                  <BrandSymbol
                    variant="app-icon-squircle"
                    className="w-12 h-12"
                  />
                  <BrandSymbol
                    variant="app-icon-rounded"
                    className="w-12 h-12"
                  />
                  <div className="flex items-end gap-1.5 pl-1">
                    <BrandSymbol
                      variant="app-icon-squircle"
                      className="w-7 h-7"
                    />
                    <BrandSymbol
                      variant="app-icon-squircle"
                      className="w-5 h-5"
                    />
                    <BrandSymbol
                      variant="app-icon-squircle"
                      className="w-3.5 h-3.5"
                    />
                  </div>
                </div>
                <span className="text-[11px] text-[#1D1D1F]/50 dark:text-[#FFFFFF]/50">
                  App Icon Masks & Small-Size Legibility
                </span>
              </div>
            </div>

            {/* Official Colour Palette Swatches (Click to copy exact HEX) */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {BRAND_SWATCHES.map((swatch) => {
                const isCopied = copiedHex === swatch.hex;
                return (
                  <button
                    key={swatch.hex}
                    type="button"
                    onClick={() => handleCopyHex(swatch.hex)}
                    className="group text-left rounded-2xl p-2.5 bg-[#FFFFFF]/80 dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10 hover:border-[#0071E3] dark:hover:border-[#2997FF] transition-colors cursor-pointer"
                    title={`Copy ${swatch.hex}`}
                  >
                    <div
                      className="h-11 rounded-xl border border-black/10 dark:border-white/15 mb-2"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                        {swatch.hex}
                      </span>
                      {isCopied ? (
                        <Check className="w-3 h-3 text-[#0071E3] dark:text-[#2997FF]" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                      )}
                    </div>
                    <p className="text-[11px] text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55 truncate">
                      {swatch.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 13: FINAL CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center"
          >
            <BrandSymbol
              variant="app-icon-squircle"
              className="w-14 h-14 mb-5 shadow-md"
            />

            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF] max-w-xl"
              style={{ textWrap: 'balance' }}
            >
              A new way to see your wardrobe is taking shape.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 max-w-lg leading-relaxed">
              Follow the journey as Wardrobe.AI develops into a smarter digital
              wardrobe experience.
            </p>

            {/* Honest Follow Development Placeholder & Action Controls */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#home')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold text-white dark:text-black bg-[#0071E3] dark:bg-[#2997FF] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
              >
                <span>Back to Top</span>
              </a>

              <div
                aria-label="Follow Development Status Placeholder"
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl text-xs font-medium text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 bg-[#F5F5F7] dark:bg-white/[0.06] border border-[#1D1D1F]/10 dark:border-white/10"
              >
                <span>Follow Development · @dhruv.codes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 14: MINIMAL PREMIUM FOOTER */}
      <footer className="bg-[#FFFFFF] dark:bg-[#000000] border-t border-[#1D1D1F]/8 dark:border-white/10 py-12 px-4 sm:px-6 transition-colors duration-300">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-sm">
            <BrandLogo size="sm" />
            <p className="text-xs sm:text-sm text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 leading-relaxed">
              An AI-powered digital wardrobe and outfit styling application
              being built to help people digitize, organize, and rediscover the
              clothes they already own.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 text-xs text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                Created by @dhruv.codes
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0071E3] dark:text-[#2997FF] font-medium">
                Currently in Development
              </span>
            </div>
            <p className="text-[#1D1D1F]/50 dark:text-[#FFFFFF]/50">
              © {new Date().getFullYear()} Wardrobe.AI. Official Product
              Showcase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal to Inspect Official Uploaded Brand Sheet Image */}
      <AnimatePresence>
        {brandSheetModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setBrandSheetModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Official Wardrobe.AI Logo System Brand Sheet"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl bg-[#FFFFFF] dark:bg-[#121215] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#1D1D1F]/10 dark:border-white/10">
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F] dark:text-[#FFFFFF]">
                    Official Wardrobe.AI Logo System Reference Sheet
                  </h4>
                  <p className="text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
                    Single-stroke hanger with AI sparkle · Official colour
                    tokens
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBrandSheetModalOpen(false)}
                  aria-label="Close brand sheet preview"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#1D1D1F] dark:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 rounded-2xl overflow-hidden bg-[#F5F5F7] border border-black/5 max-h-[75vh] overflow-y-auto">
                <img
                  src="/assets/aistudio/brand-sheet_a5a9729a.png"
                  alt="Official Wardrobe.AI Logo System showing primary horizontal logos, light and dark variants, app icon masks, and colour swatches"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
