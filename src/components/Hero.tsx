import React from 'react';
import { Shield, Settings, Link as LinkIcon, Leaf, Phone, ArrowDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';
import wallpaperDesktop from '../assets/images/Landing page.jpg';
import wallpaperMobile from '../assets/images/Landing page mobile.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 overflow-hidden">
      {/* Responsive Background Wallpaper:
          - Uses 'Landing page mobile.jpg' on screens < 768px
          - Uses 'Landing page.jpg' on screens >= 768px
      */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={wallpaperMobile} />
          <source media="(min-width: 768px)" srcSet={wallpaperDesktop} />
          <img
            src={wallpaperDesktop}
            alt="Van Wyk Krippe Livestock Pasture at Golden Hour"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if space-encoded filename behaves differently on certain static hosts
              const target = e.currentTarget;
              if (!target.src.includes('landing-page')) {
                target.src = './landing-page.jpg';
              }
            }}
          />
        </picture>

        {/* Clear transparent overlay allowing the background wallpaper and its embedded logo to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#09150e]/95 pointer-events-none" />
      </div>

      {/* Spacious viewing window dedicated to viewing the wallpaper and its embedded logo clearly */}
      <div className="w-full flex-1 min-h-[34vh] sm:min-h-[42vh] md:min-h-[48vh] pointer-events-none" aria-hidden="true" />

      {/* Main Content Area: Spaced nicely below the background logo */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center justify-center px-2 sm:px-4 w-full">
        {/* Core Description Quote */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-100 font-light leading-relaxed my-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          We are proud to bring practical, durable and thoughtfully designed feeding solutions to the livestock industry — built with the demands of the farm in mind.
        </p>

        {/* 4 Pillars Grid from Flyer 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 my-5 w-full max-w-4xl">
          {/* Pillar 1: Quality Products */}
          <div className="bg-[#0e2116]/85 backdrop-blur-md border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/95 transition-all shadow-lg">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-1.5 group-hover:scale-110 transition-transform">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              QUALITY PRODUCTS
            </h2>
            <span className="text-[10px] sm:text-[11px] text-[#c59e47] mt-0.5">Tested Longevity</span>
          </div>

          {/* Pillar 2: Practical Solutions */}
          <div className="bg-[#0e2116]/85 backdrop-blur-md border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/95 transition-all shadow-lg">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-1.5 group-hover:scale-110 transition-transform">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              PRACTICAL SOLUTIONS
            </h2>
            <span className="text-[10px] sm:text-[11px] text-[#c59e47] mt-0.5">Farmer-Engineered</span>
          </div>

          {/* Pillar 3: Strong Construction */}
          <div className="bg-[#0e2116]/85 backdrop-blur-md border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/95 transition-all shadow-lg">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-1.5 group-hover:scale-110 transition-transform">
              <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              STRONG CONSTRUCTION
            </h2>
            <span className="text-[10px] sm:text-[11px] text-[#c59e47] mt-0.5">Heavy Gauge Steel</span>
          </div>

          {/* Pillar 4: Built for the Farm */}
          <div className="bg-[#0e2116]/85 backdrop-blur-md border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/95 transition-all shadow-lg">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-1.5 group-hover:scale-110 transition-transform">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              BUILT FOR THE FARM
            </h2>
            <span className="text-[10px] sm:text-[11px] text-[#c59e47] mt-0.5">South African Soil</span>
          </div>
        </div>

        {/* Slogan Banner from Flyer 1 */}
        <div className="w-full max-w-xl py-2 px-4 border-y border-[#c59e47]/50 bg-[#09150e]/50 backdrop-blur-sm my-2">
          <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-[#f3dc98] uppercase">
            LIVESTOCK SOLUTIONS YOU CAN RELY ON.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5 w-full max-w-md">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded font-cinzel font-bold text-xs sm:text-sm uppercase tracking-widest text-[#0c1b12] bg-gradient-to-r from-[#d4af37] via-[#e8ca6b] to-[#c59e47] shadow-xl hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#f3dc98]"
          >
            <span>Request Farm Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded font-cinzel font-semibold text-xs sm:text-sm uppercase tracking-widest text-white border border-[#c59e47]/60 bg-[#0e2116]/60 backdrop-blur-sm hover:bg-[#c59e47]/20 hover:border-[#c59e47] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Browse Troughs</span>
            <ArrowDown className="w-4 h-4 text-[#e8ca6b]" />
          </button>
        </div>

        {/* Direct Farmer Hotline Banner */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-300 font-medium">
          <span className="text-[#c59e47] uppercase tracking-wider font-semibold">Direct Farm Contacts:</span>
          <a
            href="tel:0783644383"
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0e2116]/70 border border-[#c59e47]/30 hover:border-[#c59e47] text-neutral-100 hover:text-[#e8ca6b] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#c59e47]" />
            <span>Frans: <strong>078 364-4383</strong></span>
          </a>
          <a
            href="tel:0810883945"
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0e2116]/70 border border-[#c59e47]/30 hover:border-[#c59e47] text-neutral-100 hover:text-[#e8ca6b] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#c59e47]" />
            <span>Steven: <strong>081 088 3945</strong></span>
          </a>
        </div>
      </div>
    </section>
  );
};
