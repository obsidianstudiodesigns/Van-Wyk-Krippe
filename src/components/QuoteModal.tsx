import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, Phone, CheckCircle } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
  preselectedQuantity?: number;
  preselectedNotes?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
  preselectedQuantity = 2,
  preselectedNotes = '',
}) => {
  const [productName, setProductName] = useState(preselectedProduct || PRODUCTS[0].name);
  const [quantity, setQuantity] = useState(preselectedQuantity);
  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('');
  const [notes, setNotes] = useState(preselectedNotes);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setProductName(preselectedProduct);
    }
    if (preselectedQuantity) {
      setQuantity(preselectedQuantity);
    }
    if (preselectedNotes) {
      setNotes(preselectedNotes);
    }
  }, [preselectedProduct, preselectedQuantity, preselectedNotes]);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*VAN WYK KRIPPE - KWOTASIE AANVRAAG*\n\n` +
        `👤 *Naam:* ${name || 'Boer'}\n` +
        `🏡 *Plaas:* ${farmName || 'N/A'}\n` +
        `📍 *Dorp/Distrik:* ${town || 'Vrystaat'}\n` +
        `📞 *Selfoon:* ${phone || 'N/A'}\n` +
        `✉️ *E-pos:* ${email || 'N/A'}\n` +
        `📦 *Produk:* ${productName}\n` +
        `🔢 *Aantal:* ${quantity}\n` +
        `💬 *Notas:* ${notes || 'Stuur asseblief pryse en beskikbaarheid.'}`
    );
    window.open(`https://wa.me/27783644383?text=${text}`, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Van Wyk Krippe Quote Request: ${name}`);
    const body = encodeURIComponent(
      `Goeiedag Frans & Steven,\n\nEk wil asseblief 'n kwotasie aanvra vir Van Wyk Krippe:\n\n` +
        `Naam: ${name}\n` +
        `Plaas: ${farmName}\n` +
        `Dorp: ${town}\n` +
        `Selfoon: ${phone}\n` +
        `E-pos: ${email}\n\n` +
        `Produk: ${productName}\n` +
        `Aantal: ${quantity}\n` +
        `Notas / Spesifikasies: ${notes}\n\n` +
        `Dankie,\n${name}`
    );

    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-[#c59e47] max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9b7528]">
            Van Wyk Krippe &bull; Kroonstad
          </span>
        </div>

        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#14261b] mb-2">
          Request a Farm Quote
        </h3>
        <p className="text-xs text-neutral-600 mb-6">
          Direct pricing with transport options across the Free State and South Africa.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center text-emerald-900">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-cinzel text-lg font-bold mb-1">Inquiry Prepared!</h4>
            <p className="text-xs text-emerald-800 mb-4">
              Your inquiry has been compiled. You can also send this instantly to Frans on WhatsApp for immediate feedback:
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat to Frans on WhatsApp (078 364 4383)</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 rounded-lg border border-neutral-300 text-neutral-700 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                Selected Trough Model
              </label>
              <select
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c59e47] text-sm text-neutral-900 bg-white"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm font-semibold text-neutral-900"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-semibold text-neutral-700 mb-1">Farmer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="078 364 4383"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Town / Dorp</label>
                <input
                  type="text"
                  placeholder="e.g. Kroonstad"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="boer@plaas.co.za"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Additional Notes</label>
              <textarea
                rows={2}
                placeholder="Special delivery notes, farm gate access, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-lg font-cinzel font-bold text-xs uppercase tracking-wider text-[#0e1f15] bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Email Quote</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1faa53] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
