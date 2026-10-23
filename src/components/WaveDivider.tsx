import React from 'react';

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  invert?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#F3F6FA',
  className = '',
  invert = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        invert ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32C240 68 480 8 720 40C960 72 1200 24 1440 50V96H0V32Z"
          fill={fillColor}
        />
        <path
          d="M0 50C240 20 480 72 720 48C960 24 1200 68 1440 38V96H0V50Z"
          fill={fillColor}
          opacity="0.3"
        />
      </svg>
    </div>
  );
};
