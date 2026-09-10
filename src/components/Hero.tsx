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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-3 sm:px-6 overflow-hidden">
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

        {/* Subtle, crystal-clear overlay to ensure the farm wallpaper is seen clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-[#09150e]/80" />
      </div>

      {/* Luxury Gold Border Frame (Faithfully replicating the golden frame with bottom diamond in the flyers) */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#c59e47]/40 pointer-events-none z-10 hidden sm:block">
        {/* Subtle Corner Diamond Accents */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rotate-45 bg-[#c59e47]" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rotate-45 bg-[#c59e47]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rotate-45 bg-[#c59e47]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rotate-45 bg-[#c59e47]" />

        {/* Signature Center Diamond at Bottom (As seen on flyer 1 & landing page) */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0a1710] px-3 py-0.5 border border-[#c59e47]/60">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#c59e47]" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#c59e47] bg-[#e8ca6b]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#c59e47]" />
        </div>
      </div>

      {/* Main Hero Content (Without logo overlay, so the wallpaper is seen clearly) */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center justify-center px-2 sm:px-4">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 my-2 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c59e47]" />
          <div className="w-2 h-2 rotate-45 bg-[#c59e47]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c59e47]" />
        </div>

        {/* Cursive Welcome & Serif Title (Exact copy from flyer 1) */}
        <div className="my-2">
          <span className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e8ca6b] block tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Welcome
          </span>
          <h1 className="font-cinzel text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.25em] text-white uppercase mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            TO VAN WYK KRIPPE
          </h1>
        </div>

        {/* Diamond Accent */}
        <div className="w-1.5 h-1.5 rotate-45 bg-[#c59e47] my-2" />

        {/* Core Description Quote */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-100 font-light leading-relaxed my-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
          We are proud to bring practical, durable and thoughtfully designed feeding solutions to the livestock industry — built with the demands of the farm in mind.
        </p>

        {/* 4 Pillars Grid from Flyer 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 my-6 w-full max-w-4xl">
          {/* Pillar 1: Quality Products */}
          <div className="bg-[#0e2116]/80 backdrop-blur-sm border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/90 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-2 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              QUALITY PRODUCTS
            </h2>
            <span className="text-[11px] text-[#c59e47] mt-0.5">Tested Longevity</span>
          </div>

          {/* Pillar 2: Practical Solutions */}
          <div className="bg-[#0e2116]/80 backdrop-blur-sm border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/90 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-2 group-hover:scale-110 transition-transform">
              <Settings className="w-5 h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              PRACTICAL SOLUTIONS
            </h2>
            <span className="text-[11px] text-[#c59e47] mt-0.5">Farmer-Engineered</span>
          </div>

          {/* Pillar 3: Strong Construction */}
          <div className="bg-[#0e2116]/80 backdrop-blur-sm border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/90 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-2 group-hover:scale-110 transition-transform">
              <LinkIcon className="w-5 h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              STRONG CONSTRUCTION
            </h2>
            <span className="text-[11px] text-[#c59e47] mt-0.5">Heavy Gauge Steel</span>
          </div>

          {/* Pillar 4: Built for the Farm */}
          <div className="bg-[#0e2116]/80 backdrop-blur-sm border border-[#c59e47]/40 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-[#c59e47] hover:bg-[#132c1e]/90 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-full border border-[#c59e47]/60 flex items-center justify-center text-[#e8ca6b] mb-2 group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5" />
            </div>
            <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              BUILT FOR THE FARM
            </h2>
            <span className="text-[11px] text-[#c59e47] mt-0.5">South African Soil</span>
          </div>
        </div>

        {/* Slogan Banner from Flyer 1 */}
        <div className="w-full max-w-xl py-2 px-4 border-y border-[#c59e47]/50 my-2">
          <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-[#f3dc98] uppercase">
            LIVESTOCK SOLUTIONS YOU CAN RELY ON.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 w-full max-w-md">
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-300 font-medium">
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
