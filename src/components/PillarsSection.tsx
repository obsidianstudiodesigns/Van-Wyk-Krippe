import React from 'react';
import { ShieldCheck, Wrench, Hammer, Award, CheckCircle2, Truck, RefreshCw, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-20 bg-[#fbf9f5] border-t border-[#e2d8c3] text-[#14261b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Luxury Aesthetics */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#c59e47]" />
            <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
            <span className="w-8 h-[1px] bg-[#c59e47]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#9b7528] uppercase">
            Built For The Demands Of The Farm
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#12281b] mt-2 mb-4">
            LIVESTOCK SOLUTIONS YOU CAN RELY ON
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            From cattle to sheep, our focus is simple: <strong className="text-[#12281b]">quality products</strong>, <strong className="text-[#12281b]">strong construction</strong>, and solutions that make everyday farming easier.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-xl border border-[#c59e47]/30 shadow-sm hover:shadow-xl hover:border-[#c59e47] transition-all group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c59e47] to-[#e8ca6b]" />
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform inline-block">
              🌾
            </div>
            <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-2 tracking-wide">
              Strong. Practical. Reliable.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Every weld, bracket, and curve is stress-tested against the realities of livestock behavior. Built with heavy-gauge steel framing to withstand rough bumping, crowding, and harsh weathering season after season.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#9b7528]">
              <CheckCircle2 className="w-4 h-4 text-[#c59e47]" />
              <span>Zero warping or brittle sun cracking</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-xl border border-[#c59e47]/30 shadow-sm hover:shadow-xl hover:border-[#c59e47] transition-all group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#14261b] via-[#c59e47] to-[#14261b]" />
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform inline-block">
              🐄
            </div>
            <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-2 tracking-wide">
              Made for Livestock.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Carefully engineered with rounded tongue-safe rims, optimum animal feeding heights, and anti-waste curved edges that prevent animals from flicking precious feed onto dirty camp ground.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#9b7528]">
              <CheckCircle2 className="w-4 h-4 text-[#c59e47]" />
              <span>Protects animal muzzles & saves feed</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-8 rounded-xl border border-[#c59e47]/30 shadow-sm hover:shadow-xl hover:border-[#c59e47] transition-all group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#e8ca6b] to-[#c59e47]" />
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform inline-block">
              🤎
            </div>
            <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-2 tracking-wide">
              Built for the People Who Work the Land.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Designed for practical farm routine. Featuring built-in skid runners for easy camp rotation with your bakkie, fast clean-out drainage plugs, and low-maintenance construction that saves labor.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#9b7528]">
              <CheckCircle2 className="w-4 h-4 text-[#c59e47]" />
              <span>Easy towing across veld & paddocks</span>
            </div>
          </div>
        </div>

        {/* Engineering Highlights Banner */}
        <div className="bg-[#0f2318] text-white rounded-2xl p-8 sm:p-10 border border-[#c59e47]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59e47]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#e8ca6b] uppercase">
                Direct From Kroonstad Workshop
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wide mt-2 mb-4">
                WHY SOUTH AFRICAN FARMERS CHOOSE VAN WYK KRIPPE
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Unlike mass-market thin plastic tubs that disintegrate under UV rays or cheap sheet metal that rusts out in three seasons, our troughs are fabricated with the utmost structural integrity.
              </p>
              <div className="flex items-center gap-4 text-xs tracking-wider text-[#e8ca6b]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Award className="w-4 h-4" /> 100% Proudly South African
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <Truck className="w-4 h-4" /> Farm Delivery Available
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#142f20] border border-[#c59e47]/25 p-4 rounded-lg">
                <h4 className="font-cinzel text-sm font-bold text-[#f3dc98] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rotate-45 bg-[#c59e47]" /> Anti-Wasting Lip
                </h4>
                <p className="text-xs text-neutral-300 leading-normal">
                  Specially formed inward deflection curl ensures animals cannot sweep grain, silage, or pellets out with their heads.
                </p>
              </div>

              <div className="bg-[#142f20] border border-[#c59e47]/25 p-4 rounded-lg">
                <h4 className="font-cinzel text-sm font-bold text-[#f3dc98] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rotate-45 bg-[#c59e47]" /> Towable Base Skids
                </h4>
                <p className="text-xs text-neutral-300 leading-normal">
                  Heavy-duty tubular ground skids glide smoothly over rocks and pasture without digging deep furrows into topsoil.
                </p>
              </div>

              <div className="bg-[#142f20] border border-[#c59e47]/25 p-4 rounded-lg">
                <h4 className="font-cinzel text-sm font-bold text-[#f3dc98] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rotate-45 bg-[#c59e47]" /> High Impact UV Resistance
                </h4>
                <p className="text-xs text-neutral-300 leading-normal">
                  Formulated with high concentrations of UV-stabilizing compounds to resist intense Free State and Karoo sun without turning brittle.
                </p>
              </div>

              <div className="bg-[#142f20] border border-[#c59e47]/25 p-4 rounded-lg">
                <h4 className="font-cinzel text-sm font-bold text-[#f3dc98] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rotate-45 bg-[#c59e47]" /> Fast Drain & Hygiene
                </h4>
                <p className="text-xs text-neutral-300 leading-normal">
                  Smooth non-porous interior surfaces with oversized brass drainage plugs ensure swift hose downs and eliminate algae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
