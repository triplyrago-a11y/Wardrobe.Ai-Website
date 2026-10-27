import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers, Eye } from 'lucide-react';
import { BrandLogo, BrandSymbol } from './BrandLogo';
import {
  GarmentIllustration,
  GARMENT_CATALOG,
  GarmentId,
} from './GarmentIllustration';

export const HeroSection: React.FC = () => {
  const [selectedGarmentId, setSelectedGarmentId] =
    useState<GarmentId>('overshirt');
  const [viewMode, setViewMode] = useState<'processed' | 'scanning' | 'raw'>(
    'processed'
  );

  const activeGarment =
    GARMENT_CATALOG.find((g) => g.id === selectedGarmentId) ||
    GARMENT_CATALOG[0];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle ambient background refraction light */}
      <div
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full bg-[#0071E3]/[0.06] dark:bg-[#2997FF]/[0.09] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Status Label: Unboxed clean metadata per Zero-Pill rule */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-5">
              <span>CURRENTLY IN DEVELOPMENT</span>
              <span
                className="text-[#1D1D1F]/30 dark:text-[#FFFFFF]/30"
                aria-hidden="true"
              >
                ·
              </span>
              <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal tracking-normal">
                Product Vision Showcase
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[clamp(2.35rem,4.5vw,3.85rem)] font-bold tracking-tight leading-[1.08] text-[#1D1D1F] dark:text-[#FFFFFF] max-w-xl"
              style={{ textWrap: 'balance' }}
            >
              Your Wardrobe.{' '}
              <span className="text-[#0071E3] dark:text-[#2997FF]">
                Reimagined with AI.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 max-w-lg">
              A smarter way to organize what you own, discover new combinations,
              and make getting dressed feel effortless.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection('#about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[46px] rounded-xl text-sm font-semibold text-white bg-[#0071E3] dark:bg-[#2997FF] dark:text-[#000000] hover:opacity-92 active:scale-[0.98] transition-all duration-150 shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
              >
                <span>Explore the Vision</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#how-it-works')}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[46px] rounded-xl text-sm font-semibold text-[#1D1D1F] dark:text-[#FFFFFF] liquid-glass hover:bg-[#F5F5F7] dark:hover:bg-white/10 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
              >
                <span>How It Works</span>
              </button>
            </div>

            {/* Unboxed Metadata Summary */}
            <div className="mt-10 pt-6 border-t border-[#1D1D1F]/8 dark:border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
              <span>AI Garment Isolation</span>
              <span aria-hidden="true">·</span>
              <span>Mannequin-Free Hanger Output</span>
              <span aria-hidden="true">·</span>
              <span>Personal Outfit Styling</span>
            </div>
          </motion.div>

          {/* Right Column: Original Liquid-Glass Mobile & Garment Composition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 relative"
          >
            <div className="liquid-glass rounded-3xl p-5 sm:p-7 relative overflow-hidden">
              {/* Top App Concept Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1D1D1F]/8 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <BrandLogo size="xs" />
                  <span className="text-xs text-[#1D1D1F]/40 dark:text-[#FFFFFF]/40">
                    /
                  </span>
                  <span className="text-xs text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 font-medium">
                    Concept Studio Preview
                  </span>
                </div>

                {/* Interactive Stage Mode Selector (Functional Segmented Control) */}
                <div
                  role="group"
                  aria-label="Garment processing stage preview"
                  className="flex items-center gap-1 p-1 rounded-xl bg-[#F5F5F7] dark:bg-white/[0.07] border border-[#1D1D1F]/6 dark:border-white/8"
                >
                  {(
                    [
                      { id: 'raw', label: '1. Original Photo', icon: Eye },
                      { id: 'scanning', label: '2. AI Isolate', icon: Sparkles },
                      {
                        id: 'processed',
                        label: '3. Hanger View',
                        icon: Layers,
                      },
                    ] as const
                  ).map((tab) => {
                    const Icon = tab.icon;
                    const active = viewMode === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setViewMode(tab.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-[#FFFFFF] dark:bg-[#1D1D1F] text-[#0071E3] dark:text-[#2997FF] shadow-xs'
                            : 'text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65 hover:text-[#1D1D1F] dark:hover:text-[#FFFFFF]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Centerpiece Studio Garment Stage */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Main Garment Canvas */}
                <div className="sm:col-span-7 relative rounded-2xl bg-[#F5F5F7] dark:bg-[#0B0B0E] border border-[#1D1D1F]/6 dark:border-white/8 aspect-[4/4.3] flex flex-col justify-between overflow-hidden">
                  <div className="relative flex-1 flex items-center justify-center p-4">
                    <GarmentIllustration
                      id={activeGarment.id}
                      mode={viewMode}
                      className="w-full h-full max-h-[250px] rounded-xl"
                    />
                  </div>

                  {/* Bottom Garment Caption inside Stage */}
                  <div className="px-4 py-3 bg-white/75 dark:bg-black/65 backdrop-blur-md border-t border-[#1D1D1F]/6 dark:border-white/8 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF] truncate">
                        {activeGarment.name}
                      </p>
                      <p className="text-[11px] text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 truncate">
                        {viewMode === 'raw'
                          ? 'Unprocessed phone photo on room surface'
                          : viewMode === 'scanning'
                          ? 'Planned AI background separation & hanger mount'
                          : 'Clean garment on hanger · No mannequin'}
                      </p>
                    </div>
                    <BrandSymbol className="w-6 h-5 shrink-0" />
                  </div>
                </div>

                {/* Right Side: Interactive Digital Wardrobe Selector + Planned Styling Note */}
                <div className="sm:col-span-5 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 mb-2.5">
                      <span>Sample Wardrobe Items</span>
                      <span className="font-mono tabular-nums">04 items</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {GARMENT_CATALOG.slice(0, 4).map((item) => {
                        const isSelected = item.id === selectedGarmentId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedGarmentId(item.id)}
                            className={`group p-2 rounded-xl border text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0071E3] ${
                              isSelected
                                ? 'bg-[#0071E3]/[0.07] dark:bg-[#2997FF]/[0.12] border-[#0071E3] dark:border-[#2997FF]'
                                : 'bg-[#F5F5F7]/70 dark:bg-white/[0.04] border-[#1D1D1F]/8 dark:border-white/8 hover:border-[#1D1D1F]/25 dark:hover:border-white/25'
                            }`}
                          >
                            <div className="aspect-square rounded-lg bg-white dark:bg-[#121215] p-1.5 flex items-center justify-center">
                              <GarmentIllustration
                                id={item.id}
                                mode="processed"
                                className="w-full h-full"
                              />
                            </div>
                            <p className="mt-1.5 text-[11px] font-medium text-[#1D1D1F] dark:text-[#FFFFFF] truncate">
                              {item.name.split(' ').slice(-2).join(' ')}
                            </p>
                            <p className="text-[10px] text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55 truncate">
                              {item.category}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Planned AI Styling Context Note */}
                  <div className="p-3.5 rounded-xl bg-[#F5F5F7]/90 dark:bg-white/[0.05] border border-[#1D1D1F]/6 dark:border-white/8">
                    <div className="flex items-center justify-between text-[11px] text-[#0071E3] dark:text-[#2997FF] font-medium">
                      <span>Planned AI Styling Concept</span>
                      <span className="font-mono">Vision</span>
                    </div>
                    <p className="mt-1 text-xs text-[#1D1D1F]/75 dark:text-[#FFFFFF]/75 leading-relaxed">
                      Pairs{' '}
                      <span className="font-medium text-[#1D1D1F] dark:text-[#FFFFFF]">
                        {activeGarment.name}
                      </span>{' '}
                      with items already saved in your personal collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
