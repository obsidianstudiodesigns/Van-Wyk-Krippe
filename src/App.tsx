import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { ProductsSection } from './components/ProductsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './types';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | undefined>();
  const [quoteQuantity, setQuoteQuantity] = useState<number>(2);
  const [quoteNotes, setQuoteNotes] = useState<string>('');

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForModal(productName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProductForQuote = (product: Product) => {
    setSelectedProductForModal(product.name);
    setQuoteQuantity(2);
    setQuoteNotes(`Interested in ${product.name} (${product.afrikaansName}). Please provide pricing for depot collection and farm delivery.`);
    setIsQuoteModalOpen(true);
  };

  const handleApplyRecommendationToQuote = (details: {
    productName: string;
    quantity: number;
    notes: string;
  }) => {
    setSelectedProductForModal(details.productName);
    setQuoteQuantity(details.quantity);
    setQuoteNotes(details.notes);
    setIsQuoteModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#14261b] selection:bg-[#c59e47]/30 selection:text-[#14261b]">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section with Dual Wallpaper (Landing page.jpg / Landing page mobile.jpg) */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreClick={() => scrollToSection('products')}
        />

        {/* 3 Core Pillars & Engineering Standards from Flyer 1 */}
        <PillarsSection />

        {/* Feeding & Water Troughs Product Lineup */}
        <ProductsSection onSelectProductForQuote={handleSelectProductForQuote} />

        {/* Interactive Herd Trough Sizing Tool */}
        <CalculatorSection onApplyRecommendationToQuote={handleApplyRecommendationToQuote} />

        {/* Kroonstad Free State Fabrication & Story */}
        <AboutSection />

        {/* Contact, Depot Details & Quote Form */}
        <ContactSection
          initialProduct={selectedProductForModal}
          initialQuantity={quoteQuantity}
          initialNotes={quoteNotes}
        />
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Farm Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedProduct={selectedProductForModal}
        preselectedQuantity={quoteQuantity}
        preselectedNotes={quoteNotes}
      />

      {/* Floating Speed Contact Bar for Mobile Devices */}
      <aside aria-label="Quick contact" className="fixed bottom-3 right-3 z-40 flex items-center gap-2 md:hidden">
        <a
          href={`https://wa.me/27783644383?text=${encodeURIComponent(
            'Goeiedag Frans, ek stel belang in Van Wyk Krippe vir my plaas.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center border-2 border-white active:scale-95 transition-transform"
          aria-label="WhatsApp Frans"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href="tel:0783644383"
          className="w-12 h-12 rounded-full bg-[#0f2318] text-[#e8ca6b] shadow-2xl flex items-center justify-center border-2 border-[#c59e47] active:scale-95 transition-transform"
          aria-label="Call Frans 078 364 4383"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}
