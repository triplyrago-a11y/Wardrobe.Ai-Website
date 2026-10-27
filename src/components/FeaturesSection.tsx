import React from 'react';
import { motion } from 'motion/react';
import { GarmentIllustration } from './GarmentIllustration';
import { BrandSymbol } from './BrandLogo';

interface FeatureItem {
  index: string;
  title: string;
  description: string;
  contextNote: string;
  spanClass: string;
  visualType:
    | 'capture'
    | 'bg-removal'
    | 'clean-hanger'
    | 'wardrobe'
    | 'styling'
    | 'mobile';
}

const FEATURES_IN_DEV: FeatureItem[] = [
  {
    index: '01',
    title: 'AI Clothing Capture',
    description:
      'A planned workflow for photographing individual garments and preparing them for digital wardrobe entry.',
    contextNote: 'Single-garment framing · Guided mobile capture',
    spanClass: 'md:col-span-7',
    visualType: 'capture',
  },
  {
    index: '02',
    title: 'Automatic Background Removal',
    description:
      'AI-assisted separation of clothing from the original photo background.',
    contextNote: 'Edge-aware garment isolation · Planned pipeline',
    spanClass: 'md:col-span-5',
    visualType: 'bg-removal',
  },
  {
    index: '03',
    title: 'Clean Garment Images',
    description:
      'Professional-looking clothing images presented on hangers without mannequins.',
    contextNote: 'Signature hanger standardization · Zero mannequin clutter',
    spanClass: 'md:col-span-5',
    visualType: 'clean-hanger',
  },
  {
    index: '04',
    title: 'Digital Wardrobe',
    description:
      'A visual collection of clothing items organized in one place.',
    contextNote: 'Category, fabric & tone indexing · Personal catalog',
    spanClass: 'md:col-span-7',
    visualType: 'wardrobe',
  },
  {
    index: '05',
    title: 'AI Outfit Suggestions',
    description:
      "Potential outfit combinations based on garments saved in the user's wardrobe.",
    contextNote: 'Built strictly around clothes you already own',
    spanClass: 'md:col-span-7',
    visualType: 'styling',
  },
  {
    index: '06',
    title: 'Modern Mobile Experience',
    description:
      'A carefully designed interface with intuitive navigation, elegant transitions, and a smooth wardrobe-browsing experience.',
    contextNote: 'Liquid-glass surfaces · Light & Dark themes',
    spanClass: 'md:col-span-5',
    visualType: 'mobile',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F7] dark:bg-[#09090B] border-y border-[#1D1D1F]/6 dark:border-white/8 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium text-[#0071E3] dark:text-[#2997FF]">
            <span>Features in Development</span>
            <span
              className="text-[#1D1D1F]/30 dark:text-[#FFFFFF]/30"
              aria-hidden="true"
            >
              ·
            </span>
            <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal">
              Planned Capabilities
            </span>
          </div>

          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]"
            style={{ textWrap: 'balance' }}
          >
            Built around the clothes you already own.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
            Each capability below is currently under active development for the
            upcoming Wardrobe.AI mobile application.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
          {FEATURES_IN_DEV.map((feat, idx) => (
            <motion.article
              key={feat.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: idx * 0.05,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${feat.spanClass} liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#0071E3]/40 dark:hover:border-[#2997FF]/40 transition-colors duration-200`}
            >
              <div>
                {/* Top Editorial Index + Title */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                    <span className="font-mono text-xs text-[#0071E3] dark:text-[#2997FF] mr-2.5 tabular-nums">
                      {feat.index}.
                    </span>
                    {feat.title}
                  </h3>
                  <span className="text-[11px] text-[#1D1D1F]/50 dark:text-[#FFFFFF]/50 whitespace-nowrap shrink-0">
                    In Development
                  </span>
                </div>

                <p className="mt-2.5 text-sm sm:text-base text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Custom Concept Visual inside each Bento Card */}
              <div className="mt-6 rounded-2xl bg-[#FFFFFF]/80 dark:bg-[#111114]/90 border border-[#1D1D1F]/6 dark:border-white/8 p-4 overflow-hidden">
                {feat.visualType === 'capture' && (
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border border-[#1D1D1F]/10 dark:border-white/10 shrink-0">
                      <GarmentIllustration
                        id="poplin"
                        mode="raw"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                        Guided Garment Alignment
                      </p>
                      <p className="mt-1 text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 leading-relaxed">
                        Designed to capture shirts, outerwear, and trousers from
                        everyday phone photos without special lighting.
                      </p>
                    </div>
                  </div>
                )}

                {feat.visualType === 'bg-removal' && (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#1D1D1F]/8 dark:border-white/10">
                      <GarmentIllustration
                        id="knit"
                        mode="raw"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF]">
                      →
                    </span>
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#0071E3]/30 dark:border-[#2997FF]/35 bg-[#F5F5F7] dark:bg-black">
                      <GarmentIllustration
                        id="knit"
                        mode="scanning"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {feat.visualType === 'clean-hanger' && (
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-[#F5F5F7] dark:bg-[#18181C] p-1.5 shrink-0">
                      <GarmentIllustration
                        id="trench"
                        mode="processed"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-xs text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
                      <p className="font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                        Hanger Presentation
                      </p>
                      <p className="mt-0.5">
                        Uniform collar & shoulder geometry without synthetic
                        mannequin bodies.
                      </p>
                    </div>
                  </div>
                )}

                {feat.visualType === 'wardrobe' && (
                  <div className="grid grid-cols-4 gap-2.5">
                    {(['overshirt', 'poplin', 'blazer', 'trousers'] as const).map(
                      (id) => (
                        <div
                          key={id}
                          className="aspect-square rounded-xl bg-[#F5F5F7] dark:bg-[#18181C] p-1.5 flex items-center justify-center"
                        >
                          <GarmentIllustration
                            id={id}
                            mode="processed"
                            className="w-full h-full"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}

                {feat.visualType === 'styling' && (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {(['blazer', 'knit', 'trousers'] as const).map((id) => (
                        <div
                          key={id}
                          className="w-16 h-16 rounded-xl bg-[#F5F5F7] dark:bg-[#18181C] p-1"
                        >
                          <GarmentIllustration
                            id={id}
                            mode="processed"
                            className="w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-right">
                      <BrandSymbol className="w-6 h-5 ml-auto" />
                      <p className="mt-1 text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF]">
                        3-Piece Pairing
                      </p>
                    </div>
                  </div>
                )}

                {feat.visualType === 'mobile' && (
                  <div className="flex items-center justify-between gap-3 py-2">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                        Native-Feel Liquid Glass UI
                      </p>
                      <p className="text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
                        Spring motion, tactile bottom bar & adaptive dark mode.
                      </p>
                    </div>
                    <BrandSymbol
                      variant="app-icon-squircle"
                      className="w-12 h-12 shrink-0"
                    />
                  </div>
                )}
              </div>

              {/* Unboxed Metadata Footer */}
              <div className="mt-4 pt-3 border-t border-[#1D1D1F]/6 dark:border-white/8 text-xs text-[#1D1D1F]/55 dark:text-[#FFFFFF]/55">
                {feat.contextNote}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
