import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', size = 'md' }) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: {
      southern: 'text-[11px] tracking-[0.2em]',
      shore: 'text-lg -mt-1',
      painting: 'text-[7px] tracking-[0.25em]',
    },
    md: {
      southern: 'text-[14px] tracking-[0.22em]',
      shore: 'text-2xl -mt-1.5',
      painting: 'text-[8.5px] tracking-[0.28em]',
    },
    lg: {
      southern: 'text-[18px] tracking-[0.25em]',
      shore: 'text-3xl -mt-2',
      painting: 'text-[10px] tracking-[0.3em]',
    },
  };

  const currentText = textSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon: Navy house outline + flowing coastal wave swoosh + paintbrush on the right */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* House Outline */}
          <path
            d="M50 16L18 42V78C18 79.1 18.9 80 20 80H42M50 16L82 42V60"
            stroke={isDark ? '#F3F6FA' : '#1F3A5F'}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle Roof Ridge / Chimney detail */}
          <path
            d="M66 28V20H74V34"
            stroke={isDark ? '#F3F6FA' : '#1F3A5F'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* House Window accent */}
          <rect
            x="32"
            y="48"
            width="12"
            height="12"
            rx="1.5"
            stroke={isDark ? '#6B8CAE' : '#6B8CAE'}
            strokeWidth="3.5"
          />

          {/* Flowing Coastal Wave Swoosh underneath */}
          <path
            d="M10 74C25 67 38 85 58 75C74 67 86 78 94 72"
            stroke="#6B8CAE"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M16 83C32 77 44 91 62 83C76 77 86 85 92 82"
            stroke={isDark ? '#D9A441' : '#D9A441'}
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Paintbrush on the right leaning slightly */}
          <g transform="translate(68, 44) rotate(15)">
            {/* Wooden Handle */}
            <path
              d="M7 2L10 18C10 20 8.5 22 7.5 24H6.5C5.5 22 4 20 4 18L7 2Z"
              fill={isDark ? '#E2EAF2' : '#8B5A2B'}
              stroke={isDark ? '#FFFFFF' : '#5C3814'}
              strokeWidth="1.5"
            />
            {/* Silver Ferrule */}
            <rect
              x="3.5"
              y="23"
              width="7"
              height="8"
              rx="1"
              fill={isDark ? '#CBD5E1' : '#94A3B8'}
              stroke={isDark ? '#F3F6FA' : '#64748B'}
              strokeWidth="1"
            />
            {/* Bristles with Paint Tip */}
            <path
              d="M3.5 31H10.5L9.5 42C9.5 43.5 8.5 44.5 7 44.5C5.5 44.5 4.5 43.5 4.5 42L3.5 31Z"
              fill="#D9A441"
              stroke={isDark ? '#F3F6FA' : '#1F3A5F'}
              strokeWidth="1.2"
            />
            {/* Fresh paint drip accent */}
            <circle cx="7" cy="47" r="1.5" fill="#D9A441" />
          </g>
        </svg>
      </div>

      {/* Stacked Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        {/* SOUTHERN: bold serif capitals */}
        <span
          className={`font-serif-heading font-bold uppercase ${currentText.southern} ${
            isDark ? 'text-white' : 'text-[#1F3A5F]'
          }`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          SOUTHERN
        </span>

        {/* Shore: elegant script with thin gray-blue underline */}
        <div className="relative inline-block my-0.5">
          <span
            className={`font-script block transform -rotate-1 ${currentText.shore} ${
              isDark ? 'text-[#D9A441]' : 'text-[#1F3A5F]'
            }`}
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Shore
          </span>
          <div className="w-full h-[1.5px] bg-[#6B8CAE]/50 -mt-1 rounded-full"></div>
        </div>

        {/* PAINTING: small widely letter-spaced capitals flanked by thin horizontal lines */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`h-[1px] flex-1 ${isDark ? 'bg-[#6B8CAE]/60' : 'bg-[#6B8CAE]/50'}`}></span>
          <span
            className={`font-sans font-semibold tracking-widest ${currentText.painting} ${
              isDark ? 'text-gray-300' : 'text-[#6B8CAE]'
            }`}
          >
            PAINTING
          </span>
          <span className={`h-[1px] flex-1 ${isDark ? 'bg-[#6B8CAE]/60' : 'bg-[#6B8CAE]/50'}`}></span>
        </div>
      </div>
    </div>
  );
};
