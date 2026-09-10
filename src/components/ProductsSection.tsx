import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_DETAILS } from '../data/products';
import { Check, Info, MessageSquare, Phone, Shield, ArrowRight, Filter, ChevronRight } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForQuote: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Livestock Solutions', afrikaans: 'Alle Modelle' },
    { id: 'cattle', label: 'Cattle Troughs', afrikaans: 'Beeskrippe' },
    { id: 'sheep', label: 'Sheep & Small Stock', afrikaans: 'Skaapkrippe' },
    { id: 'water', label: 'Water Reservoirs', afrikaans: 'Waterkrippe' },
    { id: 'lick', label: 'Mineral & Lick', afrikaans: 'Likkrippe' },
    { id: 'custom', label: 'Custom Fabrication', afrikaans: 'Pasgemaak' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-[#f4efe6] text-[#14261b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#c59e47]" />
            <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
            <span className="w-8 h-[1px] bg-[#c59e47]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#9b7528] uppercase">
            Heavy-Duty Agricultural Equipment
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#12281b] mt-2 mb-4">
            FEEDING & WATER TROUGHS
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Engineered specifically for South African conditions. Built for durability, ease of relocation, feed conservation, and livestock health.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex flex-col items-center leading-tight ${
                  isActive
                    ? 'bg-[#152b1e] text-[#f3dc98] shadow-md border border-[#c59e47]'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-[#c59e47]' : 'text-neutral-400'}`}>
                  {cat.afrikaans}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-[#c59e47]/30 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#c59e47] transition-all flex flex-col"
            >
              {/* Product Visual Container */}
              <div className="relative h-56 bg-neutral-900 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = './Landing page.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2.5 py-1 text-[11px] font-cinzel font-semibold tracking-wider uppercase rounded bg-[#152b1e]/90 text-[#f3dc98] border border-[#c59e47]/40 backdrop-blur-xs">
                    {product.category.toUpperCase()}
                  </span>
                  {product.featured && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#c59e47] text-[#0f2318] shadow-xs">
                      Popular Choice
                    </span>
                  )}
                </div>

                {/* Capacity badge */}
                {product.capacity && (
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 flex items-center justify-between">
                    <span>Capacity:</span>
                    <span className="font-semibold text-[#f3dc98]">{product.capacity}</span>
                  </div>
                )}
              </div>

              {/* Product Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#9b7528] tracking-wider uppercase mb-1">
                    {product.afrikaansName}
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-[#14261b] mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Key specs highlight */}
                  <div className="bg-[#fbf9f5] p-3 rounded-lg border border-neutral-200 text-xs space-y-1.5 mb-5">
                    <div className="flex items-center justify-between text-neutral-700">
                      <span className="text-neutral-500">Dimensions:</span>
                      <span className="font-semibold text-[#14261b]">{product.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-700">
                      <span className="text-neutral-500">Suitable For:</span>
                      <span className="font-medium text-[#14261b]">{product.suitableFor}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-700">
                      <span className="text-neutral-500">Frame:</span>
                      <span className="font-medium text-[#14261b]">Heavy Skid Runner Base</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductDetails(product)}
                      className="px-3 py-2 text-xs font-semibold rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#9b7528]" />
                      <span>Full Specs</span>
                    </button>

                    <a
                      href={`https://wa.me/27783644383?text=${encodeURIComponent(
                        `Goeiedag Frans, ek stel belang in pryse vir die "${product.name}". Kan jy asseblief 'n kwotasie stuur?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs font-semibold rounded border border-[#25D366]/40 bg-[#25D366]/10 text-[#127a3c] hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-1 text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onSelectProductForQuote(product)}
                    className="w-full py-2.5 px-4 rounded text-xs font-cinzel font-bold uppercase tracking-wider text-[#0e1f15] bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Request Farm Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-14 bg-gradient-to-r from-[#14281c] to-[#0d1d14] rounded-xl p-8 border border-[#c59e47]/40 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-semibold text-[#e8ca6b] tracking-[0.2em] uppercase">
              Custom Sizes & Quantities
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 mb-2">
              NEED CUSTOM SIZES OR BULK FEEDLOT TROUGHS?
            </h3>
            <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
              We fabricate bespoke dimensions, mobile camp trailers, and feedlot battery lines directly in our Kroonstad workshop. Talk to Frans or Steven directly for custom farm orders.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0783644383"
              className="px-5 py-3 rounded text-xs font-cinzel font-bold tracking-wider uppercase bg-[#c59e47] text-[#0d1d14] hover:bg-[#e8ca6b] transition-colors flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Frans: 078 364 4383</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal: Full Product Specs */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#c59e47] max-w-xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedProductDetails(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100"
            >
              &times;
            </button>

            <div className="text-xs text-[#9b7528] font-semibold uppercase tracking-wider mb-1">
              {selectedProductDetails.afrikaansName}
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#14261b] mb-3">
              {selectedProductDetails.name}
            </h3>
            <p className="text-sm text-neutral-700 mb-5 leading-relaxed">
              {selectedProductDetails.description}
            </p>

            <div className="bg-[#fbf9f5] border border-neutral-200 rounded-lg p-4 space-y-2 text-xs mb-6">
              <div className="font-cinzel font-bold text-sm text-[#14261b] mb-2 border-b border-neutral-200 pb-1">
                Technical Specifications
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-neutral-500 block">Total Length:</span>
                  <span className="font-semibold text-neutral-900">{selectedProductDetails.specs.length}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Trough Width:</span>
                  <span className="font-semibold text-neutral-900">{selectedProductDetails.specs.width}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Depth:</span>
                  <span className="font-semibold text-neutral-900">{selectedProductDetails.specs.depth}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Drainage Plug:</span>
                  <span className="font-semibold text-neutral-900">
                    {selectedProductDetails.specs.drainPlug ? 'Included (Brass Plug)' : 'N/A'}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-200">
                <span className="text-neutral-500 block">Steel Subframe:</span>
                <span className="font-medium text-neutral-900">{selectedProductDetails.specs.steelFrame}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Trough Liner Composition:</span>
                <span className="font-medium text-neutral-900">{selectedProductDetails.specs.troughMaterial}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  const p = selectedProductDetails;
                  setSelectedProductDetails(null);
                  onSelectProductForQuote(p);
                }}
                className="flex-1 py-3 text-center rounded font-cinzel font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] text-[#0e1f15] hover:brightness-110"
              >
                Inquire For This Trough
              </button>
              <a
                href={`https://wa.me/27783644383?text=${encodeURIComponent(
                  `Goeiedag Frans, ek benodig inligting oor die ${selectedProductDetails.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded text-center text-xs font-semibold border border-[#25D366] text-[#127a3c] hover:bg-[#25D366]/10 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Frans</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
