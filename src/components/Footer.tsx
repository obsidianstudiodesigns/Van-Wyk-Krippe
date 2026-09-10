import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09150e] text-[#d6c7a1] border-t border-[#c59e47]/40 relative overflow-hidden">
      {/* Decorative Gold Top Line Accent */}
      <div className="h-1 bg-gradient-to-r from-[#09150e] via-[#c59e47] to-[#09150e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#c59e47]/20">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="mb-4">
              <Logo variant="light" size="lg" showText={true} />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
              Durable, reliable feeding and water troughs built for South African farms. Practical agricultural livestock solutions designed to last for generations on the land.
            </p>
            <div className="text-xs text-[#e8ca6b] font-cinzel font-semibold tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
              <span>LIVESTOCK SOLUTIONS YOU CAN RELY ON.</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-[#c59e47]/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Home & Welcome
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Feeding & Water Troughs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pillars')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Strong. Practical. Reliable.
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Herd Sizing Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Crafted in Kroonstad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#e8ca6b] transition-colors focus:outline-none cursor-pointer"
                >
                  Quotes & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-[#c59e47]/30 pb-2 inline-block">
              Workshop & Depot
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59e47] shrink-0 mt-0.5" />
                <span>
                  No. 32 9de Weg, Industria, <br />
                  Kroonstad, Free State, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c59e47] shrink-0" />
                <div>
                  <a href="tel:0783644383" className="hover:text-[#e8ca6b] transition-colors block">
                    Frans: <strong>078 364 4383</strong>
                  </a>
                  <a href="tel:0810883945" className="hover:text-[#e8ca6b] transition-colors block">
                    Steven: <strong>081 088 3945</strong>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c59e47] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-[#e8ca6b] transition-colors hover:underline"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#c59e47]" />
              <span>Full structural welding & UV warranty</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits and Obsidian Studio Designs Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-neutral-200">Van Wyk Krippe</strong>. All Rights Reserved. Built with pride for South African livestock farming.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Designed by Obsidian Studio Designs */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#12241a] border border-[#c59e47]/30 text-neutral-300 shadow-sm">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400">Designed by</span>
              <a
                href="https://obsidianstudiodesigns.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#e8ca6b] hover:text-white transition-colors underline decoration-[#c59e47]/60 underline-offset-2 hover:decoration-white inline-flex items-center gap-1"
                title="Visit Obsidian Studio Designs"
              >
                <span>Obsidian Studio Designs</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#c59e47]" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#c59e47] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
