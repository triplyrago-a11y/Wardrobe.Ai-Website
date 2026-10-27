import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlidersHorizontal } from 'lucide-react';
import { GarmentIllustration } from './GarmentIllustration';
import { BrandSymbol } from './BrandLogo';

const VISION_PILLARS = [
  {
    number: '01',
    title: 'Turn physical garments into digital wardrobe items',
    description:
      'Instead of forgetting clothes tucked away in drawers or closets, Wardrobe.AI is designed to bring every garment into a clear personal catalog.',
  },
  {
    number: '02',
    title: 'Keep a visual collection of clothing',
    description:
      'Browse shirts, outerwear, knitwear, and trousers in one calm, organized space designed around your own wardrobe rather than a store catalog.',
  },
  {
    number: '03',
    title: 'Create clean garment images',
    description:
      'The planned AI image pipeline removes cluttered room backgrounds and presents garments neatly on hangers without mannequins.',
  },
  {
    number: '04',
    title: 'Discover possible outfit combinations',
    description:
      'Explore thoughtful outfit ideas generated from the pieces you already own, helping you notice combinations you might otherwise overlook.',
  },
  {
    number: '05',
    title: 'Make better use of clothes already owned',
    description:
      'By making your full wardrobe visible at a glance, getting dressed becomes simpler and existing garments get worn more intentionally.',
  },
];

export const AboutSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(62);

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F7] dark:bg-[#09090B] border-y border-[#1D1D1F]/6 dark:border-white/8 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium text-[#0071E3] dark:text-[#2997FF]">
            <span>Product Vision</span>
            <span
              className="text-[#1D1D1F]/30 dark:text-[#FFFFFF]/30"
              aria-hidden="true"
            >
              ·
            </span>
            <span className="text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60 font-normal">
              About Wardrobe.AI
            </span>
          </div>

          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#FFFFFF]"
            style={{ textWrap: 'balance' }}
          >
            Your clothes deserve a smarter system.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
            Most wardrobes are full of great clothes that rarely get worn simply
            because they are out of sight. Wardrobe.AI is being developed to
            help people digitize, organize, and explore their personal clothing
            collections with clarity.
          </p>
        </div>

        {/* Main 2-Column Split: Interactive Transformation Concept + 5 Vision Pillars */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Before / After Garment Digitization Concept */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between liquid-glass rounded-3xl p-6"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                    Planned Garment Standardization
                  </h3>
                  <p className="text-xs text-[#1D1D1F]/60 dark:text-[#FFFFFF]/60">
                    Drag slider to compare raw photo vs. hanger output
                  </p>
                </div>
                <BrandSymbol className="w-7 h-6" />
              </div>

              {/* Interactive Split Comparison Viewport */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] border border-[#1D1D1F]/8 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#121215] select-none">
                {/* Base Layer: Processed Clean Hanger Garment */}
                <div className="absolute inset-0 p-6 flex items-center justify-center bg-[#FFFFFF] dark:bg-[#111114]">
                  <GarmentIllustration
                    id="blazer"
                    mode="processed"
                    className="w-full h-full"
                  />
                  <span className="absolute bottom-3 right-3 text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF]">
                    Planned Hanger Output
                  </span>
                </div>

                {/* Clipped Foreground Layer: Raw Room Snapshot */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div className="w-full h-full p-6 flex items-center justify-center">
                    <GarmentIllustration
                      id="blazer"
                      mode="raw"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-[#1D1D1F]/80 dark:text-[#FFFFFF]/80 bg-white/80 dark:bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    Original Phone Capture
                  </span>
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="absolute inset-y-0 w-[2px] bg-[#0071E3] dark:bg-[#2997FF] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0071E3] dark:bg-[#2997FF] text-white dark:text-black flex items-center justify-center shadow-md">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Accessible Range Input Overlay */}
                <input
                  type="range"
                  min={10}
                  max={90}
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Compare original garment photo and processed hanger image"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#1D1D1F]/8 dark:border-white/10 flex items-center justify-between text-xs text-[#1D1D1F]/65 dark:text-[#FFFFFF]/65">
              <span>No mannequins required</span>
              <span aria-hidden="true">·</span>
              <span>Consistent hanger presentation</span>
            </div>
          </motion.div>

          {/* Right Column: The 5 Core Vision Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-[#1D1D1F]/8 dark:divide-white/10 liquid-glass rounded-3xl px-6 py-2 sm:px-8 sm:py-4">
            {VISION_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-4 sm:py-5 flex items-start gap-4"
              >
                <span className="font-mono text-xs font-medium text-[#0071E3] dark:text-[#2997FF] pt-1 tabular-nums shrink-0">
                  {pillar.number}.
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#1D1D1F]/70 dark:text-[#FFFFFF]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
