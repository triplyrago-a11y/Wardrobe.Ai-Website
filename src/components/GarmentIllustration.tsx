import React from 'react';

export type GarmentId =
  | 'overshirt'
  | 'knit'
  | 'blazer'
  | 'poplin'
  | 'trench'
  | 'trousers';

export interface GarmentItem {
  id: GarmentId;
  name: string;
  category: 'Outerwear' | 'Tops' | 'Bottoms';
  fabric: string;
  tone: string;
  swatchHex: string;
  season: string;
  pairWithIds: GarmentId[];
  notes: string;
}

export const GARMENT_CATALOG: GarmentItem[] = [
  {
    id: 'overshirt',
    name: 'Structured Wool Overshirt',
    category: 'Outerwear',
    fabric: 'Brushed Italian Virgin Wool',
    tone: 'Slate Charcoal',
    swatchHex: '#33363B',
    season: 'Autumn / Winter',
    pairWithIds: ['poplin', 'trousers'],
    notes: 'Isolated from bedroom doorway photo · Mounted on studio hanger',
  },
  {
    id: 'poplin',
    name: 'Crisp Cotton Poplin Shirt',
    category: 'Tops',
    fabric: 'Organic Compact Poplin',
    tone: 'Ice Blue-White',
    swatchHex: '#E6EEF8',
    season: 'All Seasons',
    pairWithIds: ['blazer', 'trousers'],
    notes: 'Isolated from flat-lay capture · Collar & cuff geometry preserved',
  },
  {
    id: 'blazer',
    name: 'Unstructured Linen Jacket',
    category: 'Outerwear',
    fabric: 'Washed Belgian Herringbone Linen',
    tone: 'Warm Stone',
    swatchHex: '#C8C2B8',
    season: 'Spring / Summer',
    pairWithIds: ['knit', 'trousers'],
    notes: 'Background removed · Presented on contoured hanger without mannequin',
  },
  {
    id: 'knit',
    name: 'Fine-Gauge Merino Crewneck',
    category: 'Tops',
    fabric: 'Extra-Fine 18.5 Micron Merino',
    tone: 'Deep Navy Ink',
    swatchHex: '#1D293D',
    season: 'Autumn / Spring',
    pairWithIds: ['blazer', 'trousers'],
    notes: 'Ribbed hem and neckline edge-refined · Clean studio lighting',
  },
  {
    id: 'trench',
    name: 'Water-Repellent Gabardine Coat',
    category: 'Outerwear',
    fabric: 'Double-Weave Cotton Gabardine',
    tone: 'Obsidian Ink',
    swatchHex: '#1D1D1F',
    season: 'Transition / Rain',
    pairWithIds: ['poplin', 'trousers'],
    notes: 'Full-length silhouette balanced on minimalist hanger',
  },
  {
    id: 'trousers',
    name: 'Pleated Tailored Trousers',
    category: 'Bottoms',
    fabric: 'Midweight Tropical Wool',
    tone: 'Graphite Grey',
    swatchHex: '#4A4D52',
    season: 'All Seasons',
    pairWithIds: ['overshirt', 'poplin', 'knit'],
    notes: 'Clipped hanger bar presentation · Crease line preserved',
  },
];

interface GarmentIllustrationProps {
  id: GarmentId;
  mode?: 'processed' | 'raw' | 'scanning';
  className?: string;
}

/**
 * Studio-grade vector garment renders mounted on a clean, mannequin-free hanger.
 * Supports:
 * - 'raw': simulates an unedited phone snapshot on a textured warm room surface with shadows
 * - 'scanning': shows AI segmentation mask wireframe and hanger alignment
 * - 'processed': clean, isolated garment on a signature hanger without a mannequin
 */
export const GarmentIllustration: React.FC<GarmentIllustrationProps> = ({
  id,
  mode = 'processed',
  className = 'w-full h-full',
}) => {
  const uid = React.useId();

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      {/* Background surface depending on mode */}
      {mode === 'raw' && (
        <div
          className="absolute inset-0 bg-[#E5E0D8] dark:bg-[#262320]"
          aria-hidden="true"
        >
          {/* Simulated room wood/linen texture & uneven indoor shadow */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_55%),linear-gradient(125deg,rgba(0,0,0,0.08)_0%,transparent_45%,rgba(0,0,0,0.18)_100%)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/15 to-transparent skew-x-6" />
        </div>
      )}

      {mode === 'scanning' && (
        <div
          className="absolute inset-0 bg-[#F5F5F7] dark:bg-[#0B0B0D]"
          aria-hidden="true"
        >
          {/* Subtle technical grid */}
          <div
            className="absolute inset-0 opacity-35 dark:opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(#0071E3 0.75px, transparent 0.75px)',
              backgroundSize: '14px 14px',
            }}
          />
        </div>
      )}

      <svg
        viewBox="0 0 240 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 w-full h-full transition-transform duration-500 ${
          mode === 'raw' ? 'rotate-[-3.5deg] scale-[0.95]' : ''
        }`}
        aria-label={id}
      >
        <defs>
          {/* Soft studio drop shadow */}
          <filter
            id={`shadow-${uid}`}
            x="-15%"
            y="-10%"
            width="130%"
            height="130%"
          >
            <feDropShadow
              dx={mode === 'raw' ? '8' : '0'}
              dy={mode === 'raw' ? '12' : '10'}
              stdDeviation={mode === 'raw' ? '7' : '9'}
              floodColor="#000000"
              floodOpacity={mode === 'raw' ? '0.28' : '0.14'}
            />
          </filter>

          {/* Fabric Gradients */}
          <linearGradient id={`overshirt-${uid}`} x1="50" y1="50" x2="190" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#43474E" />
            <stop offset="50%" stopColor="#32353B" />
            <stop offset="100%" stopColor="#23252A" />
          </linearGradient>

          <linearGradient id={`poplin-${uid}`} x1="55" y1="50" x2="185" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8FBFF" />
            <stop offset="55%" stopColor="#E7EFF9" />
            <stop offset="100%" stopColor="#D3E1F2" />
          </linearGradient>

          <linearGradient id={`blazer-${uid}`} x1="50" y1="50" x2="190" y2="235" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DCD7CE" />
            <stop offset="55%" stopColor="#C8C1B6" />
            <stop offset="100%" stopColor="#B2AA9E" />
          </linearGradient>

          <linearGradient id={`knit-${uid}`} x1="50" y1="55" x2="190" y2="225" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#27364F" />
            <stop offset="55%" stopColor="#1B2639" />
            <stop offset="100%" stopColor="#121A28" />
          </linearGradient>

          <linearGradient id={`trench-${uid}`} x1="45" y1="50" x2="195" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E2E32" />
            <stop offset="50%" stopColor="#1D1D20" />
            <stop offset="100%" stopColor="#111113" />
          </linearGradient>

          <linearGradient id={`trousers-${uid}`} x1="65" y1="55" x2="175" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5A5E65" />
            <stop offset="55%" stopColor="#46494F" />
            <stop offset="100%" stopColor="#34373C" />
          </linearGradient>

          <linearGradient id={`hanger-metal-${uid}`} x1="95" y1="15" x2="145" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8E8E93" />
            <stop offset="50%" stopColor="#AEAEB2" />
            <stop offset="100%" stopColor="#636366" />
          </linearGradient>
        </defs>

        {/* Signature Mannequin-Free Studio Hanger (shown in processed & scanning modes) */}
        {mode !== 'raw' && (
          <g>
            {/* Hanger Hook */}
            <path
              d="M120 44 C115 37 115 21 125 21 C133 21 135 28 134 32"
              stroke={`url(#hanger-metal-${uid})`}
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            {/* Hanger Shoulder Arms */}
            <path
              d="M120 44 L66 72 L174 72 Z"
              className="fill-[#0071E3]/10 dark:fill-[#2997FF]/15"
              stroke="#52525B"
              strokeWidth="4.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* GARMENT 1: STRUCTURED WOOL OVERSHIRT */}
        {id === 'overshirt' && (
          <g filter={`url(#shadow-${uid})`}>
            {/* Main body & sleeves */}
            <path
              d="M86 58 L154 58 L192 84 L208 188 L178 193 L168 112 L166 226 L74 226 L72 112 L62 193 L32 188 L48 84 Z"
              fill={`url(#overshirt-${uid})`}
              stroke="#222428"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Inside Neck & Label Area (No mannequin neck!) */}
            <path
              d="M96 58 Q120 74 144 58 L138 78 Q120 84 102 78 Z"
              fill="#1E2024"
            />
            <rect x="113" y="65" width="14" height="5" rx="1" fill="#F5F5F7" opacity="0.7" />
            {/* Pointed Collar */}
            <path
              d="M86 58 L106 86 L120 74 L96 56 Z"
              fill="#3D4148"
              stroke="#25272C"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M154 58 L134 86 L120 74 L144 56 Z"
              fill="#373B42"
              stroke="#25272C"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Center Placket & Buttons */}
            <line x1="116" y1="76" x2="116" y2="226" stroke="#222428" strokeWidth="1.2" />
            <line x1="124" y1="76" x2="124" y2="226" stroke="#4D525A" strokeWidth="1" />
            {[94, 120, 146, 172, 198].map((cy) => (
              <circle key={cy} cx="120" cy={cy} r="2.6" fill="#18191C" stroke="#575C66" strokeWidth="0.8" />
            ))}
            {/* Dual Utility Chest Pockets */}
            <rect x="82" y="102" width="26" height="30" rx="2" fill="#2E3137" stroke="#484C54" strokeWidth="1" />
            <path d="M82 102 L95 111 L108 102" fill="none" stroke="#484C54" strokeWidth="1" />
            <rect x="132" y="102" width="26" height="30" rx="2" fill="#2E3137" stroke="#484C54" strokeWidth="1" />
            <path d="M132 102 L145 111 L158 102" fill="none" stroke="#484C54" strokeWidth="1" />
          </g>
        )}

        {/* GARMENT 2: CRISP COTTON POPLIN SHIRT */}
        {id === 'poplin' && (
          <g filter={`url(#shadow-${uid})`}>
            <path
              d="M88 58 L152 58 L188 82 L204 186 L176 191 L166 110 L165 224 C140 231 100 231 75 224 L74 110 L64 191 L36 186 L52 82 Z"
              fill={`url(#poplin-${uid})`}
              stroke="#C5D4E6"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Subtle vertical poplin weave lines */}
            <path
              d="M95 85 L95 224 M145 85 L145 224 M82 95 L82 220 M158 95 L158 220"
              stroke="#D5E3F3"
              strokeWidth="0.75"
              opacity="0.7"
            />
            {/* Inner Collar Yoke */}
            <path d="M96 58 Q120 72 144 58 L138 75 Q120 80 102 75 Z" fill="#CBD9EB" />
            {/* Spread Collar */}
            <path
              d="M88 57 L106 83 L120 72 L96 55 Z"
              fill="#FFFFFF"
              stroke="#BDD0E6"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M152 57 L134 83 L120 72 L144 55 Z"
              fill="#F5F9FF"
              stroke="#BDD0E6"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Placket */}
            <rect x="116.5" y="72" width="7" height="155" fill="#F4F8FE" stroke="#C6D6E8" strokeWidth="0.9" />
            {[90, 114, 138, 162, 186, 210].map((cy) => (
              <circle key={cy} cx="120" cy={cy} r="2" fill="#FFFFFF" stroke="#9EB4CE" strokeWidth="0.9" />
            ))}
            {/* Pocket */}
            <path d="M132 104 L156 104 L156 130 L144 136 L132 130 Z" fill="#EDF3FC" stroke="#C2D2E6" strokeWidth="1" />
          </g>
        )}

        {/* GARMENT 3: UNSTRUCTURED LINEN BLAZER */}
        {id === 'blazer' && (
          <g filter={`url(#shadow-${uid})`}>
            <path
              d="M84 56 L156 56 L192 80 L208 192 L178 196 L168 112 L168 228 C152 230 132 226 122 216 C112 226 88 230 72 228 L72 112 L62 196 L32 192 L48 80 Z"
              fill={`url(#blazer-${uid})`}
              stroke="#9E9689"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Back lining neck */}
            <path d="M98 56 Q120 70 142 56 L120 135 Z" fill="#ABA396" />
            {/* Notched Lapels */}
            <path
              d="M86 56 L98 56 L120 136 L98 110 L103 102 L94 96 Z"
              fill="#E3DED6"
              stroke="#9E9689"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M154 56 L142 56 L120 136 L142 110 L137 102 L146 96 Z"
              fill="#D9D3C9"
              stroke="#9E9689"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            {/* Two Horn Buttons */}
            <circle cx="120" cy="148" r="3.2" fill="#52473B" />
            <circle cx="120" cy="176" r="3.2" fill="#52473B" />
            {/* Patch Pockets */}
            <rect x="78" y="162" width="30" height="36" rx="4" fill="#BFB8AC" stroke="#9B9386" strokeWidth="1" />
            <rect x="132" y="162" width="30" height="36" rx="4" fill="#BFB8AC" stroke="#9B9386" strokeWidth="1" />
            {/* Welt Breast Pocket */}
            <line x1="134" y1="106" x2="156" y2="104" stroke="#8F877A" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* GARMENT 4: FINE-GAUGE MERINO CREWNECK */}
        {id === 'knit' && (
          <g filter={`url(#shadow-${uid})`}>
            <path
              d="M84 60 L156 60 L192 86 L204 190 L176 194 L166 114 L164 218 L76 218 L74 114 L64 194 L36 190 L48 86 Z"
              fill={`url(#knit-${uid})`}
              stroke="#0F1726"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Crewneck Ribbed Collar */}
            <path
              d="M92 60 Q120 82 148 60 Q120 68 92 60 Z"
              fill="#111A2B"
              stroke="#314361"
              strokeWidth="1.2"
            />
            <path
              d="M86 62 Q120 90 154 62"
              fill="none"
              stroke="#314361"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Saddle shoulder seam details */}
            <path d="M88 64 L74 114 M152 64 L166 114" stroke="#2D3E5A" strokeWidth="1.2" />
            {/* Ribbed Hem & Cuffs */}
            <rect x="76" y="208" width="88" height="10" rx="1" fill="#131C2E" stroke="#2A3B56" strokeWidth="0.9" />
          </g>
        )}

        {/* GARMENT 5: WATER-REPELLENT GABARDINE COAT */}
        {id === 'trench' && (
          <g filter={`url(#shadow-${uid})`}>
            <path
              d="M82 54 L158 54 L194 78 L208 192 L180 196 L170 112 L174 240 L66 240 L70 112 L60 196 L32 192 L46 78 Z"
              fill={`url(#trench-${uid})`}
              stroke="#38383D"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Storm flaps & Double-breasted lapels */}
            <path
              d="M84 54 L112 118 L76 112 L48 78 Z"
              fill="#27272B"
              stroke="#3E3E44"
              strokeWidth="1"
            />
            <path
              d="M156 54 L120 124 L164 112 L192 78 Z"
              fill="#2B2B30"
              stroke="#3E3E44"
              strokeWidth="1"
            />
            {/* Waist Belt */}
            <rect x="69" y="152" width="102" height="12" rx="2" fill="#161618" stroke="#3D3D43" strokeWidth="1" />
            <rect x="114" y="150" width="12" height="16" rx="2" fill="none" stroke="#8E8E93" strokeWidth="1.8" />
            {/* Double-breasted button grid */}
            {[118, 138, 178].map((cy) => (
              <React.Fragment key={cy}>
                <circle cx="106" cy={cy} r="2.6" fill="#3F3F46" />
                <circle cx="134" cy={cy} r="2.6" fill="#3F3F46" />
              </React.Fragment>
            ))}
          </g>
        )}

        {/* GARMENT 6: PLEATED TAILORED TROUSERS */}
        {id === 'trousers' && (
          <g filter={`url(#shadow-${uid})`}>
            {/* Clipped trouser hanger bar */}
            {mode !== 'raw' && (
              <g>
                <rect x="64" y="67" width="112" height="6" rx="3" fill="#3F3F46" />
                <rect x="78" y="63" width="10" height="14" rx="2" fill="#0071E3" />
                <rect x="152" y="63" width="10" height="14" rx="2" fill="#0071E3" />
              </g>
            )}
            {/* Trouser Waistband & Pleated Legs */}
            <path
              d="M74 74 L166 74 L174 236 L130 236 L120 128 L110 236 L66 236 Z"
              fill={`url(#trousers-${uid})`}
              stroke="#2E3035"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Waistband */}
            <rect x="74" y="74" width="92" height="12" fill="#3D4046" stroke="#2E3035" strokeWidth="1" />
            {/* Double Pleats & Sharp Center Crease Lines */}
            <line x1="95" y1="86" x2="88" y2="236" stroke="#686C75" strokeWidth="1.1" strokeDasharray="1 0" />
            <line x1="145" y1="86" x2="152" y2="236" stroke="#686C75" strokeWidth="1.1" />
            <path d="M120 86 L120 124" stroke="#2E3035" strokeWidth="1.2" />
            {/* Slanted Side Pockets */}
            <line x1="74" y1="92" x2="86" y2="122" stroke="#2E3035" strokeWidth="1.1" />
            <line x1="166" y1="92" x2="154" y2="122" stroke="#2E3035" strokeWidth="1.1" />
          </g>
        )}

        {/* AI Scanning Bounding Frame Overlay when mode === 'scanning' */}
        {mode === 'scanning' && (
          <g>
            {/* Corner brackets in brand blue */}
            <path
              d="M34 38 L34 22 L50 22 M190 22 L206 22 L206 38 M34 222 L34 238 L50 238 M190 238 L206 238 L206 222"
              stroke="#0071E3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Horizontal scan line */}
            <line
              x1="30"
              y1="128"
              x2="210"
              y2="128"
              stroke="#0071E3"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            {/* AI Sparkle node */}
            <path
              d="M192 42 C192 47 193.5 48.5 198.5 48.5 C193.5 48.5 192 50 192 55 C192 50 190.5 48.5 185.5 48.5 C190.5 48.5 192 47 192 42 Z"
              fill="#0071E3"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
