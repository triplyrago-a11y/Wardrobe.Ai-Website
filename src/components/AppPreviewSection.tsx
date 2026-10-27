import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Grid,
  Camera,
  Sparkles,
  Layers,
  Shirt,
  ChevronLeft,
} from 'lucide-react';
import { BrandLogo, BrandSymbol } from './BrandLogo';
import {
  GarmentIllustration,
  GARMENT_CATALOG,
  GarmentId,
} from './GarmentIllustration';

type ConceptScreenId =
  | 'wardrobe-grid'
  | 'garment-detail'
  | 'capture-screen'
  | 'processing-concept'
  | 'outfit-suggestions';

interface ConceptScreenMeta {
  id: ConceptScreenId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const CONCEPT_SCREENS: ConceptScreenMeta[] = [
  {
    id: 'wardrobe-grid',
    number: '01',
    title: 'Main Digital Wardrobe Grid',
    subtitle: 'Organized personal catalog',
    description:
      'Displays saved clothing items on clean hangers with category filters for Outerwear, Tops, and Bottoms.',
  },
  {
    id: 'garment-detail',
    number: '02',
    title: 'Individual Garment Card & Details',
    subtitle: 'Fabric, tone & pairing view',
    description:
      'Shows the isolated hanger garment alongside material notes, color tone, and compatible items from the wardrobe.',
  },
  {
    id: 'capture-screen',
    number: '03',
    title: 'Clothing Capture Screen',
    subtitle: 'Guided mobile framing',
    description:
      'Concept camera viewfinder with alignment guides to help users photograph individual garments clearly.',
  },
  {
    id: 'processing-concept',
    number: '04',
    title: 'Garment Image-Processing Concept',
    subtitle: 'Background isolation & hanger mount',
    description:
      'Visualizes how an ordinary phone photo is separated from its background and standardized onto a hanger.',
  },
  {
    id: 'outfit-suggestions',
    number: '05',
    title: 'AI Outfit Suggestion Screen',
    subtitle: 'Combinations from owned items',
    description:
      'Presents curated multi-piece outfit concepts assembled exclusively from garments already in the user’s wardrobe.',
  },
];

export const AppPreviewSection: React.FC = () => {
  const [activeScreen, setActiveScreen] =
    useState<ConceptScreenId>('wardrobe-grid');
  const [categoryFilter, setCategoryFilter] = useState<
    'All' | 'Outerwear' | 'Tops' | 'Bottoms'
  >('All');
  const [inspectedGarmentId, setInspectedGarmentId] =
    useState<GarmentId>('overshirt');

  const inspectedGarment =
    GARMENT_CATALOG.find((g) => g.id === inspectedGarmentId) ||
    GARMENT_CATALOG[0];

  const filteredGarments =
    categoryFilter === 'All'
      ? GARMENT_CATALOG
      : GARMENT_CATALOG.filter((g) => g.category === categoryFilter);

  const handleSelectGarmentFromGrid = (id: GarmentId) => {
    setInspectedGarmentId(id);
    setActiveScreen('garment-detail');
  };

  return (
    <section id="preview" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            {/* Required Explicit Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0071E3] dark:text-[#2997FF]">
              <span>App Concept Preview — Under Development</span>
            </div>

            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              A closer look at the planned mobile experience.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
              Explore the five core interface concepts being designed for the
              upcoming Wardrobe.AI mobile application, complete with interactive
              bottom navigation.
            </p>
          </div>

          <div className="text-xs text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55 shrink-0">
            Visual concept representations · Not a live production app
          </div>
        </div>

        {/* Main Interactive Concept Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 5 Screen Concept Selectors */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {CONCEPT_SCREENS.map((screen) => {
              const isSelected = activeScreen === screen.id;
              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0071E3] ${
                    isSelected
                      ? 'liquid-glass ring-1 ring-[#0071E3] dark:ring-[#2997FF]'
                      : 'liquid-glass-subtle hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                      <span
                        className={`font-mono text-xs mr-2.5 tabular-nums ${
                          isSelected
                            ? 'text-[#0071E3] dark:text-[#2997FF]'
                            : 'text-[#1D1D1F]/45 dark:text-[#FFFFFF]/45'
                        }`}
                      >
                        {screen.number}.
                      </span>
                      {screen.title}
                    </h3>
                    <span className="text-xs text-[#1D1D1F]/50 dark:text-[#FFFFFF]/50 whitespace-nowrap shrink-0">
                      {screen.subtitle}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed pl-6">
                    {screen.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Craft Mobile Device Concept Frame */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[370px] rounded-[42px] p-3 bg-[#1D1D1F] dark:bg-[#18181B] shadow-2xl border border-[#1D1D1F]/15 dark:border-white/15">
              {/* Inner Mobile Screen */}
              <div className="rounded-[32px] bg-[#FFFFFF] dark:bg-[#09090B] text-[#1D1D1F] dark:text-[#FFFFFF] overflow-hidden flex flex-col h-[620px] border border-black/5 dark:border-white/5 relative">
                {/* Mobile Top Status & Concept Header */}
                <div className="px-5 pt-4 pb-3 border-b border-[#1D1D1F]/8 dark:border-white/10 flex items-center justify-between bg-[#FFFFFF]/90 dark:bg-[#09090B]/90 backdrop-blur-md z-10">
                  <BrandLogo size="xs" />
                  <span className="text-[10px] font-medium text-[#0071E3] dark:text-[#2997FF]">
                    Concept Preview
                  </span>
                </div>

                {/* Screen Viewport Body */}
                <div className="flex-1 overflow-y-auto p-4">
                  <AnimatePresence mode="wait">
                    {/* SCREEN 1: MAIN DIGITAL WARDROBE GRID */}
                    {activeScreen === 'wardrobe-grid' && (
                      <motion.div
                        key="wardrobe-grid"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold">
                              My Digital Wardrobe
                            </h4>
                            <p className="text-[11px] text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
                              Tap any garment to inspect details
                            </p>
                          </div>
                          <span className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF] tabular-nums">
                            {filteredGarments.length} items
                          </span>
                        </div>

                        {/* Interactive Category Segmented Filter */}
                        <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F5F5F7] dark:bg-white/[0.06]">
                          {(
                            ['All', 'Outerwear', 'Tops', 'Bottoms'] as const
                          ).map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setCategoryFilter(cat)}
                              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                                categoryFilter === cat
                                  ? 'bg-[#FFFFFF] dark:bg-[#1D1D1F] text-[#0071E3] dark:text-[#2997FF] shadow-2xs'
                                  : 'text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>

                        {/* Garment Thumbnail Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {filteredGarments.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                handleSelectGarmentFromGrid(item.id)
                              }
                              className="group text-left rounded-2xl p-2.5 bg-[#F5F5F7]/80 dark:bg-white/[0.04] border border-[#1D1D1F]/6 dark:border-white/8 hover:border-[#0071E3] dark:hover:border-[#2997FF] transition-colors cursor-pointer"
                            >
                              <div className="aspect-square rounded-xl bg-[#FFFFFF] dark:bg-[#121216] p-2 flex items-center justify-center">
                                <GarmentIllustration
                                  id={item.id}
                                  mode="processed"
                                  className="w-full h-full"
                                />
                              </div>
                              <p className="mt-2 text-xs font-semibold truncate">
                                {item.name}
                              </p>
                              <p className="text-[10px] text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                                {item.category} · {item.tone}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 2: INDIVIDUAL GARMENT CARD & DETAILS */}
                    {activeScreen === 'garment-detail' && (
                      <motion.div
                        key="garment-detail"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveScreen('wardrobe-grid')}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#0071E3] dark:text-[#2997FF] cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Back to Wardrobe Grid</span>
                        </button>

                        <div className="aspect-[4/3.6] rounded-2xl bg-[#F5F5F7] dark:bg-[#121216] border border-[#1D1D1F]/8 dark:border-white/10 p-4 flex items-center justify-center relative">
                          <GarmentIllustration
                            id={inspectedGarment.id}
                            mode="processed"
                            className="w-full h-full"
                          />
                          <span className="absolute bottom-2.5 right-3 text-[10px] text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                            Hanger View · No Mannequin
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold">
                              {inspectedGarment.name}
                            </h4>
                            <span
                              className="w-4 h-4 rounded-full border border-black/15 dark:border-white/25 shrink-0"
                              style={{
                                backgroundColor: inspectedGarment.swatchHex,
                              }}
                              title={inspectedGarment.tone}
                            />
                          </div>
                          <p className="mt-1 text-xs text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
                            {inspectedGarment.category} ·{' '}
                            {inspectedGarment.fabric}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/6 dark:border-white/8 space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                              Color Tone
                            </span>
                            <span className="font-medium">
                              {inspectedGarment.tone}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                              Seasonality
                            </span>
                            <span className="font-medium">
                              {inspectedGarment.season}
                            </span>
                          </div>
                        </div>

                        {/* Quick Garment Switcher */}
                        <div>
                          <p className="text-[11px] font-medium text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 mb-2">
                            Switch Garment Card
                          </p>
                          <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {GARMENT_CATALOG.map((g) => (
                              <button
                                key={g.id}
                                type="button"
                                onClick={() => setInspectedGarmentId(g.id)}
                                className={`w-12 h-12 rounded-xl p-1 shrink-0 border cursor-pointer ${
                                  inspectedGarmentId === g.id
                                    ? 'border-[#0071E3] dark:border-[#2997FF] bg-[#0071E3]/10'
                                    : 'border-[#1D1D1F]/10 dark:border-white/10 bg-[#F5F5F7] dark:bg-white/5'
                                }`}
                              >
                                <GarmentIllustration
                                  id={g.id}
                                  mode="processed"
                                  className="w-full h-full"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 3: CLOTHING CAPTURE SCREEN */}
                    {activeScreen === 'capture-screen' && (
                      <motion.div
                        key="capture-screen"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold">
                            Clothing Capture Concept
                          </h4>
                          <span className="text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF]">
                            STEP 01
                          </span>
                        </div>

                        <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-[#1D1D1F] border border-white/15">
                          <GarmentIllustration
                            id="poplin"
                            mode="raw"
                            className="w-full h-full"
                          />
                          {/* Viewfinder Guide */}
                          <div className="absolute inset-5 border-2 border-dashed border-white/75 rounded-2xl pointer-events-none flex flex-col justify-between p-3">
                            <div className="text-[10px] font-medium text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded self-center">
                              Align garment shoulders within frame
                            </div>
                            <div className="text-[10px] text-white/85 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded self-center">
                              Background will be removed automatically
                            </div>
                          </div>
                        </div>

                        {/* Simulated Shutter Concept Bar */}
                        <div className="p-3 rounded-2xl bg-[#F5F5F7] dark:bg-white/[0.04] flex items-center justify-between">
                          <span className="text-xs text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70">
                            Ready to test processing stage?
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveScreen('processing-concept')
                            }
                            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white dark:text-black bg-[#0071E3] dark:bg-[#2997FF] cursor-pointer"
                          >
                            Preview AI Process →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 4: GARMENT IMAGE-PROCESSING CONCEPT */}
                    {activeScreen === 'processing-concept' && (
                      <motion.div
                        key="processing-concept"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold">
                            AI Garment Isolation
                          </h4>
                          <span className="text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF]">
                            STEP 02
                          </span>
                        </div>

                        <div className="aspect-square rounded-2xl overflow-hidden border border-[#0071E3]/30 dark:border-[#2997FF]/35 bg-[#F5F5F7] dark:bg-[#121216] p-3">
                          <GarmentIllustration
                            id="poplin"
                            mode="scanning"
                            className="w-full h-full"
                          />
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/6 dark:border-white/8 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
                              1. Background Separation
                            </span>
                            <span className="font-mono text-[#0071E3] dark:text-[#2997FF]">
                              Planned
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
                              2. Mannequin-Free Hanger Mount
                            </span>
                            <span className="font-mono text-[#0071E3] dark:text-[#2997FF]">
                              Planned
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 5: AI OUTFIT SUGGESTION SCREEN */}
                    {activeScreen === 'outfit-suggestions' && (
                      <motion.div
                        key="outfit-suggestions"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold">
                              AI Outfit Suggestions
                            </h4>
                            <p className="text-[11px] text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
                              Built from your saved wardrobe items
                            </p>
                          </div>
                          <BrandSymbol className="w-6 h-5" />
                        </div>

                        {/* Outfit Combination Card 1 */}
                        <div className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10 space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold">
                              Combination 01 · Layered Minimal
                            </span>
                            <span className="text-[10px] text-[#0071E3] dark:text-[#2997FF] font-mono">
                              3 Owned Items
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {(['overshirt', 'poplin', 'trousers'] as const).map(
                              (id) => (
                                <button
                                  key={id}
                                  type="button"
                                  onClick={() =>
                                    handleSelectGarmentFromGrid(id)
                                  }
                                  className="aspect-square rounded-xl bg-white dark:bg-[#121216] p-1.5 border border-black/5 dark:border-white/5 cursor-pointer"
                                >
                                  <GarmentIllustration
                                    id={id}
                                    mode="processed"
                                    className="w-full h-full"
                                  />
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* Outfit Combination Card 2 */}
                        <div className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10 space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold">
                              Combination 02 · Tailored Smart
                            </span>
                            <span className="text-[10px] text-[#0071E3] dark:text-[#2997FF] font-mono">
                              3 Owned Items
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {(['blazer', 'knit', 'trousers'] as const).map(
                              (id) => (
                                <button
                                  key={id}
                                  type="button"
                                  onClick={() =>
                                    handleSelectGarmentFromGrid(id)
                                  }
                                  className="aspect-square rounded-xl bg-white dark:bg-[#121216] p-1.5 border border-black/5 dark:border-white/5 cursor-pointer"
                                >
                                  <GarmentIllustration
                                    id={id}
                                    mode="processed"
                                    className="w-full h-full"
                                  />
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* SCREEN 6 REQUIREMENT: INTERACTIVE BOTTOM NAVIGATION BAR */}
                <div className="px-3 py-2.5 bg-[#FFFFFF]/90 dark:bg-[#121215]/90 backdrop-blur-lg border-t border-[#1D1D1F]/8 dark:border-white/10">
                  <div
                    role="tablist"
                    aria-label="Concept App Bottom Navigation"
                    className="grid grid-cols-5 gap-1"
                  >
                    {(
                      [
                        {
                          id: 'wardrobe-grid',
                          label: 'Wardrobe',
                          icon: Grid,
                        },
                        {
                          id: 'garment-detail',
                          label: 'Garment',
                          icon: Shirt,
                        },
                        {
                          id: 'capture-screen',
                          label: 'Capture',
                          icon: Camera,
                        },
                        {
                          id: 'processing-concept',
                          label: 'Process',
                          icon: Sparkles,
                        },
                        {
                          id: 'outfit-suggestions',
                          label: 'Outfits',
                          icon: Layers,
                        },
                      ] as const
                    ).map((nav) => {
                      const Icon = nav.icon;
                      const active = activeScreen === nav.id;
                      return (
                        <button
                          key={nav.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setActiveScreen(nav.id)}
                          className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-colors cursor-pointer ${
                            active
                              ? 'text-[#0071E3] dark:text-[#2997FF] bg-[#0071E3]/8 dark:bg-[#2997FF]/15'
                              : 'text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55 hover:text-[#1D1D1F] dark:hover:text-[#FFFFFF]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="mt-1 text-[10px] font-medium leading-none">
                            {nav.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-center text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
              App Concept Preview — Under Development · Interactive Prototype
              Navigation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
