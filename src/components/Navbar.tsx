import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f2318]/95 backdrop-blur-md shadow-xl border-b border-[#c59e47]/30 py-2.5'
            : 'bg-[#0f2318]/85 backdrop-blur-sm border-b border-[#c59e47]/20 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo Link */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <Logo variant="light" size="sm" showText={false} />
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-[#e8ca6b] transition-colors leading-tight">
                VAN WYK
              </span>
              <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#c59e47] font-semibold">
                KRIPPE &bull; LIVESTOCK
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-neutral-200">
            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
            >
              Feeding Troughs
            </button>
            <button
              onClick={() => handleNavClick('pillars')}
              className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
            >
              Why Van Wyk
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer flex items-center gap-1 text-[#e8ca6b]"
            >
              <span>Herd Sizing Tool</span>
              <span className="text-[10px] bg-[#c59e47]/20 border border-[#c59e47]/50 text-[#f3dc98] px-1.5 py-0.5 rounded font-mono">
                CALC
              </span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
            >
              Contact & Depot
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/27783644383?text=${encodeURIComponent(
                'Goeiedag Frans, ek stel belang in Van Wyk Krippe vir my plaas.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded border border-[#25D366]/40 text-[#55e088] hover:bg-[#25D366]/15 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] text-[#0e1f15] shadow-md hover:brightness-110 active:scale-98 transition-all cursor-pointer font-cinzel"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Get Farm Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#c59e47] text-[#0e1f15] font-cinzel"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white rounded-md border border-neutral-700/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1b12] border-b border-[#c59e47]/30 px-5 py-6 space-y-4 shadow-2xl text-neutral-200">
          <div className="flex flex-col space-y-3 font-medium text-base">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between text-[#e8ca6b]"
            >
              <span>Home & Welcome</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between"
            >
              <span>Feeding & Water Troughs</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
            <button
              onClick={() => handleNavClick('pillars')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between"
            >
              <span>Strong. Practical. Reliable.</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between text-[#f3dc98]"
            >
              <span>Herd Sizing Calculator</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between"
            >
              <span>Crafted in Kroonstad</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-neutral-800 flex items-center justify-between"
            >
              <span>Contact & Depot Location</span>
              <ChevronRight className="w-4 h-4 text-[#c59e47]" />
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 text-center font-cinzel font-bold text-sm uppercase tracking-wider rounded bg-gradient-to-r from-[#c59e47] via-[#e8ca6b] to-[#a57a2a] text-[#0e1f15]"
            >
              Request a Farm Quote
            </button>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
              <a
                href="tel:0783644383"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#163323] text-[#e8ca6b] border border-[#c59e47]/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Frans</span>
              </a>
              <a
                href="tel:0810883945"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#163323] text-[#e8ca6b] border border-[#c59e47]/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Steven</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
