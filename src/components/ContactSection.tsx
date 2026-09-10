import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';
import { QuoteInquiry } from '../types';

interface ContactSectionProps {
  initialProduct?: string;
  initialQuantity?: number;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProduct = '',
  initialQuantity = 2,
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState<QuoteInquiry>({
    farmerName: '',
    farmName: '',
    phone: '',
    email: '',
    locationTown: 'Kroonstad District',
    province: 'Free State',
    selectedProduct: initialProduct || PRODUCTS[0].name,
    quantity: initialQuantity,
    livestockType: 'cattle',
    notes: initialNotes,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto fallback
    const subject = encodeURIComponent(`Van Wyk Krippe Quote Request: ${formData.farmerName}`);
    const body = encodeURIComponent(
      `Goeiedag Van Wyk Krippe,\n\nEk wil asseblief 'n kwotasie aanvra:\n` +
        `Naam: ${formData.farmerName}\n` +
        `Plaas: ${formData.farmName || 'N/A'}\n` +
        `Dorp/Distrik: ${formData.locationTown}, ${formData.province}\n` +
        `Selfoon: ${formData.phone}\n` +
        `E-pos: ${formData.email}\n` +
        `Produk: ${formData.selectedProduct}\n` +
        `Aantal: ${formData.quantity}\n` +
        `Veesoort: ${formData.livestockType}\n` +
        `Notas: ${formData.notes || 'Geen'}\n\n` +
        `Vriendelike groete,\n${formData.farmerName}`
    );

    // Try triggering email client
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `*VAN WYK KRIPPE KWOTASIE AANVRAAG*\n` +
        `👤 *Naam:* ${formData.farmerName || 'Boer'}\n` +
        `🏡 *Plaas:* ${formData.farmName || 'N/A'}\n` +
        `📍 *Distrik:* ${formData.locationTown || 'Vrystaat'}\n` +
        `📞 *Kontak:* ${formData.phone || 'N/A'}\n` +
        `📦 *Produk:* ${formData.selectedProduct || 'Beeskrippe'}\n` +
        `🔢 *Aantal:* ${formData.quantity}\n` +
        `🐄 *Veesoort:* ${formData.livestockType}\n` +
        `💬 *Notas:* ${formData.notes || 'Stuur asseblief pryse en afleweringsopsies.'}`
    );

    window.open(`https://wa.me/27783644383?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#f4efe6] text-[#14261b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#c59e47]" />
            <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
            <span className="w-8 h-[1px] bg-[#c59e47]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#9b7528] uppercase">
            Direct Farm Inquiries & Orders
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#12281b] mt-2 mb-4">
            TALK TO US OR REQUEST A QUOTE
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Get straightforward advice, stock availability, and immediate pricing for collection at our Kroonstad depot or farm gate delivery.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Frans van Wyk */}
          <div className="bg-white rounded-xl p-6 border border-[#c59e47]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9b7528]">
                  Sales & Farm Quotes
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-1">
                Frans van Wyk
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                Client relations, product advice, volume discounts, and custom specifications.
              </p>
              <div className="text-lg font-bold font-mono text-[#14261b] mb-4">
                078 364 4383
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="tel:0783644383"
                className="flex-1 py-2.5 rounded-lg bg-[#14261b] text-white text-xs font-semibold text-center hover:bg-[#203c2b] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c59e47]" />
                <span>Call Frans</span>
              </a>
              <a
                href={`https://wa.me/27783644383?text=${encodeURIComponent(
                  'Goeiedag Frans, ek stel belang in Van Wyk Krippe vir my plaas.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366]/15 text-[#127a3c] hover:bg-[#25D366]/25 transition-colors flex items-center justify-center"
                title="Chat op WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Steven */}
          <div className="bg-white rounded-xl p-6 border border-[#c59e47]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9b7528]">
                  Technical & Logistics
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-1">
                Steven
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                Workshop dispatch, collection scheduling, transport loading, and fabrication updates.
              </p>
              <div className="text-lg font-bold font-mono text-[#14261b] mb-4">
                081 088 3945
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="tel:0810883945"
                className="flex-1 py-2.5 rounded-lg bg-[#14261b] text-white text-xs font-semibold text-center hover:bg-[#203c2b] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c59e47]" />
                <span>Call Steven</span>
              </a>
              <a
                href={`https://wa.me/27810883945?text=${encodeURIComponent(
                  'Goeiedag Steven, ek benodig inligting rakende Van Wyk Krippe versending en voorraad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366]/15 text-[#127a3c] hover:bg-[#25D366]/25 transition-colors flex items-center justify-center"
                title="Chat op WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Depot & Email */}
          <div className="bg-white rounded-xl p-6 border border-[#c59e47]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9b7528]">
                  Location & Administration
                </span>
                <MapPin className="w-4 h-4 text-[#c59e47]" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#14261b] mb-1">
                Kroonstad Depot
              </h3>
              <p className="text-xs text-neutral-600 mb-2">
                No. 32 9de Weg, Industria, Kroonstad, Free State, South Africa.
              </p>
              <div className="text-xs font-semibold text-neutral-800 mb-4">
                Email: <a href="mailto:admin@vanwykkrippe.co.za" className="text-[#9b7528] hover:underline">admin@vanwykkrippe.co.za</a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=No.+32+9de+Weg,+Industria,+Kroonstad,+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 rounded-lg border border-[#c59e47] text-[#14261b] text-xs font-semibold text-center hover:bg-[#c59e47]/10 transition-colors flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c59e47]" />
              <span>Get Depot Directions</span>
            </a>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quote Form (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#c59e47]/40 shadow-xl">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#14261b] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
              Get Quote
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6">
              Complete the quick form below. You can send it directly via email or submit via instant WhatsApp to Frans.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center text-emerald-900 my-6">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-cinzel text-xl font-bold mb-1">
                  Thank You, {formData.farmerName}!
                </h4>
                <p className="text-sm text-emerald-800 mb-4">
                  Your quote inquiry has been drafted for <strong className="font-semibold">{formData.selectedProduct}</strong>. We will be in touch shortly!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Farmer Full Name / Naam *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van der Merwe"
                      value={formData.farmerName}
                      onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Farm Name / Plaasnaam
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Brakfontein"
                      value={formData.farmName}
                      onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. johan@boerdery.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Town / District / Dorp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kroonstad / Bethlehem"
                      value={formData.locationTown}
                      onChange={(e) => setFormData({ ...formData, locationTown: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Province / Provinsie
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900 bg-white"
                    >
                      <option value="Free State">Free State / Vrystaat</option>
                      <option value="North West">North West / Noordwes</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape / Noord-Kaap</option>
                      <option value="Eastern Cape">Eastern Cape / Oos-Kaap</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Western Cape">Western Cape / Wes-Kaap</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Trough Model / Produk
                    </label>
                    <select
                      value={formData.selectedProduct}
                      onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900 bg-white"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Quantity / Aantal
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, Number(e.target.value)) })}
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Special Requirements / Delivery or Camp Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any delivery requirements or questions regarding pasture trailer attachments, camp gates, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] focus:outline-none text-sm text-neutral-900"
                  />
                </div>

                {/* Submit buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-lg font-cinzel font-bold text-xs uppercase tracking-wider text-[#0e1f15] bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Quote Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-6 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1faa53] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quote via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Map & Depot Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#c59e47]/30 shadow-lg">
              <h4 className="font-cinzel text-lg font-bold text-[#14261b] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9b7528]" />
                Kroonstad Workshop Location
              </h4>
              <p className="text-xs text-neutral-600 mb-4">
                Conveniently located in the Industria zone of Kroonstad, right in the Free State agricultural hub with direct access to the N1 highway.
              </p>

              {/* Styled Interactive Map Container */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-neutral-300 shadow-inner bg-neutral-100">
                <iframe
                  title="Van Wyk Krippe Kroonstad Workshop Location"
                  src="https://maps.google.com/maps?q=32%209de%20Weg,%20Industria,%20Kroonstad,%20South%20Africa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
                <span>Free State Farm Logistics</span>
                <span className="font-semibold text-[#14261b]">Bakkie & Trailer Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
