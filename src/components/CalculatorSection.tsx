import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Droplets, Scale, HelpCircle } from 'lucide-react';

interface CalculatorSectionProps {
  onApplyRecommendationToQuote: (details: {
    productName: string;
    quantity: number;
    notes: string;
  }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  onApplyRecommendationToQuote,
}) => {
  const [animalType, setAnimalType] = useState<'cattle' | 'sheep'>('cattle');
  const [headCount, setHeadCount] = useState<number>(80);
  const [feedingType, setFeedingType] = useState<'simultaneous' | 'adlib'>('simultaneous');

  // Calculation parameters:
  // Cattle:
  // - Simultaneous feeding: 0.65m per head (trough feeds both sides or single side? Usually linear accessible length)
  // - Ad lib feeding (lick/creep): 0.20m per head
  // - Daily water requirement: ~55 Liters / head / day
  //
  // Sheep:
  // - Simultaneous feeding: 0.35m per head
  // - Ad lib feeding: 0.10m per head
  // - Daily water requirement: ~6.5 Liters / head / day

  const spacePerAnimal =
    animalType === 'cattle'
      ? feedingType === 'simultaneous'
        ? 0.65
        : 0.20
      : feedingType === 'simultaneous'
      ? 0.35
      : 0.10;

  // Double-sided feeding trough provides 2x the length of linear access
  const effectiveAccessFactor = 2.0;
  const requiredLinearLengthMeters = Math.ceil(
    (headCount * spacePerAnimal) / effectiveAccessFactor
  );

  // Recommended unit sizing
  const unitSize = 4.5; // 4.5m is the flagship Van Wyk Krippe trough length
  const recommendedQuantity = Math.max(1, Math.ceil(requiredLinearLengthMeters / unitSize));

  const recommendedModelName =
    animalType === 'cattle'
      ? 'Heavy-Duty Cattle Feeding Trough (4.5m)'
      : 'Sheep & Small Stock Feeding Trough (4.5m)';

  const waterRequirementPerDay =
    animalType === 'cattle' ? headCount * 55 : headCount * 6.5;

  const handleApply = () => {
    onApplyRecommendationToQuote({
      productName: recommendedModelName,
      quantity: recommendedQuantity,
      notes: `Based on Calculator: ${headCount} ${animalType} with ${
        feedingType === 'simultaneous' ? 'all-at-once' : 'ad-lib'
      } feeding (~${requiredLinearLengthMeters}m required).`,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#122419] text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c59e47]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c59e47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b3827] border border-[#c59e47]/40 text-[#f3dc98] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Practical Farm Planning Tool</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white">
            HERD TROUGH SIZING CALCULATOR
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2">
            Calculate exactly how many meters of feeding and water troughs your herd requires to prevent crowding, feed trampling, and loss.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-6 bg-[#0c1a11] border border-[#c59e47]/40 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-cinzel text-lg font-bold text-[#f3dc98] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
              Step 1: Select Livestock Parameters
            </h3>

            {/* Animal Type Toggle */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Livestock Species / Veesoort
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAnimalType('cattle')}
                  className={`p-3.5 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    animalType === 'cattle'
                      ? 'bg-[#1b3b27] border-[#c59e47] text-[#f3dc98] shadow-md'
                      : 'bg-[#102317] border-neutral-700 text-neutral-400 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xl">🐄</span>
                  <span>Cattle / Beeste</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAnimalType('sheep')}
                  className={`p-3.5 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    animalType === 'sheep'
                      ? 'bg-[#1b3b27] border-[#c59e47] text-[#f3dc98] shadow-md'
                      : 'bg-[#102317] border-neutral-700 text-neutral-400 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xl">🐑</span>
                  <span>Sheep / Skape & Bokke</span>
                </button>
              </div>
            </div>

            {/* Head Count Slider & Input */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Total Herd Head Count / Aantal Diere
                </label>
                <div className="flex items-center gap-1 bg-[#1b3827] px-3 py-1 rounded-md border border-[#c59e47]/50 text-[#f3dc98] font-mono text-base font-bold">
                  <span>{headCount}</span>
                  <span className="text-xs text-neutral-400 font-sans">head</span>
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={headCount}
                onChange={(e) => setHeadCount(Number(e.target.value))}
                className="w-full accent-[#c59e47] h-2 bg-[#1b3827] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>10 head</span>
                <span>150 head</span>
                <span>300 head</span>
                <span>500+ head</span>
              </div>
            </div>

            {/* Feeding Style */}
            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Feeding Method / Voer Strategie
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFeedingType('simultaneous')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    feedingType === 'simultaneous'
                      ? 'bg-[#1b3b27] border-[#c59e47] text-white shadow'
                      : 'bg-[#102317] border-neutral-700 text-neutral-400'
                  }`}
                >
                  <div className="font-semibold text-xs text-[#f3dc98]">Simultaneous Feeding</div>
                  <div className="text-[11px] text-neutral-300 mt-0.5">
                    All animals eat together (concentrate / silage).
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFeedingType('adlib')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    feedingType === 'adlib'
                      ? 'bg-[#1b3b27] border-[#c59e47] text-white shadow'
                      : 'bg-[#102317] border-neutral-700 text-neutral-400'
                  }`}
                >
                  <div className="font-semibold text-xs text-[#f3dc98]">Ad-Lib / Free Choice</div>
                  <div className="text-[11px] text-neutral-300 mt-0.5">
                    Continuous dry lick / block / creep feeding.
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Card (Right) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#163322] to-[#0c1c12] border-2 border-[#c59e47] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#e8ca6b] mb-1">
              Engineered Recommendation
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-6">
              Optimal Camp Setup For Your Herd
            </h3>

            {/* Metrics Breakdown */}
            <div className="space-y-4 mb-8">
              <div className="bg-[#0b1710]/80 p-4 rounded-xl border border-[#c59e47]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400">Total Trough Length Needed:</div>
                  <div className="text-sm font-medium text-neutral-200">
                    Double-sided feeding access
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#f3dc98] font-cinzel">
                    {requiredLinearLengthMeters} meters
                  </div>
                  <div className="text-[10px] text-neutral-400">linear trough run</div>
                </div>
              </div>

              {/* Recommended Van Wyk Units */}
              <div className="bg-[#0b1710]/80 p-4 rounded-xl border border-[#c59e47]/50 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#e8ca6b] font-semibold">Recommended Model:</div>
                  <div className="text-sm font-bold text-white mt-0.5">{recommendedModelName}</div>
                  <div className="text-[11px] text-neutral-300">
                    Heavy structural tubular skid frame
                  </div>
                </div>
                <div className="text-right pl-4">
                  <div className="text-3xl font-bold text-[#e8ca6b] font-cinzel">
                    {recommendedQuantity}
                  </div>
                  <div className="text-xs text-neutral-300 uppercase tracking-wider font-semibold">
                    {recommendedQuantity === 1 ? 'Unit' : 'Units'}
                  </div>
                </div>
              </div>

              {/* Estimated Herd Water Requirement */}
              <div className="bg-[#0b1710]/80 p-4 rounded-xl border border-[#c59e47]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1b3d29] flex items-center justify-center text-[#58bbf5]">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Estimated Daily Water Need:</div>
                    <div className="text-[11px] text-neutral-400">
                      Based on summer peak consumption
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#58bbf5]">
                    {waterRequirementPerDay.toLocaleString()} L / day
                  </div>
                  <div className="text-[10px] text-neutral-400">requires float valve supply</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-6 rounded-xl font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0c1b12] bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Add {recommendedQuantity} Troughs to Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-neutral-400">
                Need advice on camp layout? Call Frans directly at{' '}
                <a href="tel:0783644383" className="text-[#f3dc98] underline">
                  078 364 4383
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
