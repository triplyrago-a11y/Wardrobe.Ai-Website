import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, Grid, Layers } from 'lucide-react';
import { GarmentIllustration, GARMENT_CATALOG } from './GarmentIllustration';
import { BrandSymbol } from './BrandLogo';

interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  icon: React.FC<{ className?: string }>;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Capture Your Clothes',
    description:
      'Users will be able to photograph individual garments using their phone.',
    detail:
      'Snap a quick photo of a shirt, jacket, or pair of trousers laid flat or hung on a door—no studio lighting setup required.',
    icon: Camera,
  },
  {
    stepNumber: '02',
    title: 'Process Garment Images',
    description:
      'The planned AI workflow will isolate clothing from its original background and produce a clean, hanger-based image without a mannequin.',
    detail:
      'Background clutter is removed and the garment is standardized onto a clean hanger presentation for visual consistency.',
    icon: Sparkles,
  },
  {
    stepNumber: '03',
    title: 'Build Your Digital Wardrobe',
    description:
      'Users will be able to save processed garments and browse their personal clothing collection.',
    detail:
      'Every processed piece is organized into a calm visual catalog sorted by category, fabric, and color tone.',
    icon: Grid,
  },
  {
    stepNumber: '04',
    title: 'Discover Outfit Combinations',
    description:
      "The planned AI styling experience will suggest potential combinations using items saved in the user's wardrobe.",
    detail:
      'See how outerwear, tops, and trousers already in your closet come together into balanced everyday outfits.',
    icon: Layers,
  },
];

export const HowItWorksSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium text-[#0071E3] dark:text-[#2997FF]">
            <span>Planned Workflow</span>
            <span
              className="text-[#1D1D1F]/30 dark:text-[#FFFFFF]/30"
              aria-hidden="true"
            >
              ·
            </span>
            <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal">
              Four-Step Concept
            </span>
          </div>

          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]"
            style={{ textWrap: 'balance' }}
          >
            From a phone snapshot to a structured digital wardrobe.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
            Every step of Wardrobe.AI is being designed to keep the focus on the
            clothes you already own. Select any stage below to inspect the
            planned workflow.
          </p>
        </div>

        {/* Connected 4-Step Grid + Visual Stage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Interactive Step Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0071E3] ${
                    isSelected
                      ? 'liquid-glass ring-1 ring-[#0071E3] dark:ring-[#2997FF]'
                      : 'liquid-glass-subtle hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`font-mono text-xs font-semibold pt-1 tabular-nums ${
                          isSelected
                            ? 'text-[#0071E3] dark:text-[#2997FF]'
                            : 'text-[#1D1D1F]/45 dark:text-[#FFFFFF]/45'
                        }`}
                      >
                        {step.stepNumber}.
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-[#1D1D1F]/75 dark:text-[#FFFFFF]/75 leading-relaxed">
                          {step.description}
                        </p>
                        {isSelected && (
                          <p className="mt-2.5 text-xs text-[#0071E3] dark:text-[#2997FF] leading-relaxed">
                            {step.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Connected Visual Illustration Stage */}
          <div className="lg:col-span-6 liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#1D1D1F]/8 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
                <span className="font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">
                  Step {WORKFLOW_STEPS[activeStepIndex].stepNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-[#1D1D1F] dark:text-[#FFFFFF]">
                  {WORKFLOW_STEPS[activeStepIndex].title}
                </span>
              </div>
              <span className="text-xs text-[#1D1D1F]/50 dark:text-[#FFFFFF]/50">
                Planned Concept View
              </span>
            </div>

            {/* Dynamic Stage Content for Steps 01 - 04 */}
            <div className="my-6 flex-1 flex items-center justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeStepIndex === 0 && (
                  <motion.div
                    key="step-01"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#1D1D1F]/10 dark:border-white/10 bg-[#1D1D1F] p-4 text-white"
                  >
                    <div className="flex items-center justify-between text-[11px] text-white/70 mb-3">
                      <span>Phone Camera Capture Concept</span>
                      <span className="font-mono">RAW PHOTO</span>
                    </div>
                    <div className="relative aspect-[4/3.6] rounded-xl overflow-hidden">
                      <GarmentIllustration
                        id="overshirt"
                        mode="raw"
                        className="w-full h-full"
                      />
                      {/* Viewfinder framing guide */}
                      <div className="absolute inset-4 border border-dashed border-white/60 rounded-lg pointer-events-none flex items-end justify-center pb-2">
                        <span className="text-[10px] bg-black/65 px-2.5 py-1 rounded text-white/90">
                          Center single garment in frame
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStepIndex === 1 && (
                  <motion.div
                    key="step-02"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full grid grid-cols-2 gap-4 items-center"
                  >
                    <div className="rounded-2xl p-3 bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10">
                      <p className="text-[11px] font-medium text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 mb-2">
                        1. AI Background Isolation
                      </p>
                      <div className="aspect-square rounded-xl overflow-hidden bg-white dark:bg-[#121215]">
                        <GarmentIllustration
                          id="overshirt"
                          mode="scanning"
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="rounded-2xl p-3 bg-[#0071E3]/[0.06] dark:bg-[#2997FF]/[0.1] border border-[#0071E3]/30 dark:border-[#2997FF]/35">
                      <p className="text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF] mb-2">
                        2. Clean Hanger Output
                      </p>
                      <div className="aspect-square rounded-xl overflow-hidden bg-white dark:bg-[#121215] p-2">
                        <GarmentIllustration
                          id="overshirt"
                          mode="processed"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStepIndex === 2 && (
                  <motion.div
                    key="step-03"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full grid grid-cols-3 gap-3"
                  >
                    {GARMENT_CATALOG.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl p-2.5 bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10"
                      >
                        <div className="aspect-square rounded-lg bg-white dark:bg-[#121215] p-1.5">
                          <GarmentIllustration
                            id={item.id}
                            mode="processed"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="mt-1.5 text-[11px] font-medium text-[#1D1D1F] dark:text-[#FFFFFF] truncate">
                          {item.name.split(' ').slice(-2).join(' ')}
                        </p>
                        <p className="text-[10px] text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                          {item.category}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeStepIndex === 3 && (
                  <motion.div
                    key="step-04"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full space-y-4"
                  >
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0071E3]/[0.08] dark:bg-[#2997FF]/[0.12] border border-[#0071E3]/25 dark:border-[#2997FF]/30">
                      <div className="flex items-center gap-2">
                        <BrandSymbol className="w-5 h-4" />
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                          Planned Outfit Combination · Autumn Smart-Casual
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF]">
                        3 Owned Pieces
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {(['overshirt', 'poplin', 'trousers'] as const).map(
                        (gid, i) => {
                          const g = GARMENT_CATALOG.find(
                            (item) => item.id === gid
                          )!;
                          return (
                            <div
                              key={gid}
                              className="rounded-2xl p-3 bg-[#F5F5F7] dark:bg-white/[0.04] border border-[#1D1D1F]/8 dark:border-white/10 text-center"
                            >
                              <div className="aspect-square rounded-xl bg-white dark:bg-[#121215] p-2">
                                <GarmentIllustration
                                  id={gid}
                                  mode="processed"
                                  className="w-full h-full"
                                />
                              </div>
                              <p className="mt-2 text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF] truncate">
                                {i + 1}. {g.category}
                              </p>
                              <p className="text-[11px] text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 truncate">
                                {g.tone}
                              </p>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step Navigation Footer */}
            <div className="pt-4 border-t border-[#1D1D1F]/8 dark:border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {WORKFLOW_STEPS.map((s, idx) => (
                  <button
                    key={s.stepNumber}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    aria-label={`View step ${s.stepNumber}`}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      activeStepIndex === idx
                        ? 'w-7 bg-[#0071E3] dark:bg-[#2997FF]'
                        : 'w-2 bg-[#1D1D1F]/20 dark:bg-white/20 hover:bg-[#1D1D1F]/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev === 0 ? WORKFLOW_STEPS.length - 1 : prev - 1
                    )
                  }
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 hover:text-[#1D1D1F] dark:hover:text-[#FFFFFF] bg-[#F5F5F7] dark:bg-white/10 transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex(
                      (prev) => (prev + 1) % WORKFLOW_STEPS.length
                    )
                  }
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white dark:text-black bg-[#0071E3] dark:bg-[#2997FF] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
