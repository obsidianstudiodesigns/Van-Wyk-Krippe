import React from 'react';
import logoNewImg from '../assets/images/logo new.jpg';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showText = true,
}) => {
  const isLight = variant === 'light';

  // Dimension scaling for the logo image - enlarged so the emblem and details are clear and prominent
  const sizeClasses = {
    sm: 'w-14 h-14 sm:w-16 sm:h-16',
    md: 'w-22 h-22 sm:w-26 sm:h-26',
    lg: 'w-32 h-32 sm:w-40 sm:h-40',
    xl: 'w-48 h-48 sm:w-60 sm:h-60',
  };

  const primaryTextColor = isLight ? '#F5F5F0' : '#14271B';
  const subtitleTextColor = isLight ? '#E5D6A7' : '#1F3426';
  const goldPrimary = '#C59E47';

  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Brand Logo Image from src/assets/images/logo new.jpg */}
      <div
        className={`relative flex items-center justify-center ${sizeClasses[size]} transition-transform duration-300 hover:scale-105`}
      >
        <img
          src={logoNewImg}
          alt="Van Wyk Krippe Official Logo"
          className="w-full h-full object-contain filter drop-shadow-md"
          onError={(e) => {
            // Fallback to static public path if needed
            e.currentTarget.src = './logo-new.jpg';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col items-center mt-2">
          {/* Divider with Center Diamond */}
          <div className="flex items-center justify-center gap-2 w-full my-0.5 opacity-85">
            <span
              className="h-[1px] w-8 md:w-12"
              style={{
                background: `linear-gradient(to right, transparent, ${goldPrimary})`,
              }}
            />
            <span
              className="w-1.5 h-1.5 rotate-45"
              style={{ backgroundColor: goldPrimary }}
            />
            <span
              className="h-[1px] w-8 md:w-12"
              style={{
                background: `linear-gradient(to left, transparent, ${goldPrimary})`,
              }}
            />
          </div>

          {/* Business Title: VAN WYK */}
          <span
            className={`font-cinzel tracking-[0.22em] font-bold uppercase transition-colors ${
              size === 'sm'
                ? 'text-sm'
                : size === 'md'
                ? 'text-lg md:text-xl'
                : size === 'lg'
                ? 'text-2xl md:text-3xl'
                : 'text-3xl md:text-4xl'
            }`}
            style={{ color: primaryTextColor }}
          >
            VAN WYK
          </span>

          {/* Subheading: KRIPPE with flanking hairline accents */}
          <div className="flex items-center justify-center gap-2 -mt-0.5">
            <span className="w-4 md:w-6 h-[1px]" style={{ backgroundColor: goldPrimary }} />
            <span
              className={`font-cinzel tracking-[0.25em] font-semibold ${
                size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'
              }`}
              style={{ color: subtitleTextColor }}
            >
              KRIPPE
            </span>
            <span className="w-4 md:w-6 h-[1px]" style={{ backgroundColor: goldPrimary }} />
          </div>

          {/* Sub-label: LIVESTOCK SOLUTIONS */}
          <span
            className={`tracking-[0.3em] font-medium uppercase mt-0.5 opacity-90 ${
              size === 'sm'
                ? 'text-[8px]'
                : size === 'md'
                ? 'text-[9px] md:text-[10px]'
                : 'text-[11px] md:text-xs'
            }`}
            style={{ color: isLight ? '#D7C79A' : '#1D3525' }}
          >
            LIVESTOCK SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};
