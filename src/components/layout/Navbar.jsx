import React, { useState } from 'react';
import { Menu, X, Search, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Heritage' },
    { id: 'occasions', label: 'Services & Occasions' },
    { id: 'menu', label: 'Culinary Menus' },
    { id: 'planner', label: 'Plan My Event' },
    { id: 'tracker', label: 'Check Booking' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-primary/15 sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Notice - Quiet Luxury Style */}
      <div className="bg-primary text-background py-1.5 px-6 text-[11px] font-sans tracking-editorial text-center uppercase flex items-center justify-center gap-3">
        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
        <span>Curating Royal Celebrations & Weddings in Hyderabad Since 1984</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span className="hidden sm:inline font-semibold cursor-pointer hover:underline text-background/90" onClick={openConsultation}>
          Book Tasting Session →
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-margin py-5 flex items-center justify-between">
        {/* Brand Logo & Editorial Title */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none"
        >
          <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary uppercase group-hover:opacity-80 transition-opacity">
            DEEPALI CATERERS
          </div>
          <div className="font-sans text-[10px] uppercase tracking-editorial text-secondary font-semibold">
            HYDERABAD • A LEGACY OF TASTE
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 font-sans text-xs font-semibold uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary font-bold border-b border-primary' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('tracker')}
            className="font-sans text-xs uppercase font-bold tracking-widest border border-primary/40 px-5 py-2.5 text-primary hover:border-primary transition-all duration-300 flex items-center gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            Check Booking
          </button>
          <button
            onClick={() => handleNavClick('planner')}
            className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-6 py-2.5 hover:bg-secondary transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Plan Event
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => handleNavClick('planner')}
            className="bg-primary text-background text-[11px] font-sans font-bold uppercase tracking-wider px-3.5 py-2"
          >
            Plan Event
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-primary/30 text-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-primary/20 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col gap-4 font-sans text-xs font-bold uppercase tracking-widest mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 border-b border-primary/10 flex items-center justify-between ${
                  activePage === item.id ? 'text-secondary font-bold pl-2 border-secondary' : 'text-primary'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-40">→</span>
              </button>
            ))}
          </nav>
          
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => handleNavClick('tracker')}
              className="w-full text-center font-sans text-xs uppercase font-bold tracking-widest border border-primary/40 py-3 text-primary"
            >
              Check Booking
            </button>
            <button
              onClick={openConsultation}
              className="w-full text-center font-sans text-xs uppercase font-bold tracking-widest bg-secondary text-white py-3"
            >
              Direct Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
