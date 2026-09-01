import React from 'react';
import { Phone, Mail, MapPin, Award, Clock } from 'lucide-react';

export default function Footer({ setActivePage, openConsultation }) {
  return (
    <footer className="bg-primary text-background border-t border-primary">
      {/* Top Consultation Callout Banner */}
      <div className="border-b border-background/15 py-16 px-6 md:px-margin max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-brand-gold mb-3 block">
              Bespoke Culinary Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold leading-tight max-w-2xl">
              Ready to Craft an Unforgettable Royal Feast for Your Event?
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-secondary text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-gold hover:text-primary transition-all duration-300 text-center"
            >
              Plan Event Online
            </button>
            <button
              onClick={openConsultation}
              className="border border-background/40 text-background font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-primary transition-all duration-300 text-center"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content Columns */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Heritage Column */}
          <div className="lg:col-span-4 pr-4">
            <div className="font-serif text-2xl font-bold tracking-tight text-white mb-2 uppercase">
              DEEPALI CATERERS
            </div>
            <div className="font-sans text-xs uppercase tracking-editorial text-brand-gold font-semibold mb-6">
              HYDERABAD • EST. 1984
            </div>
            <p className="font-sans text-xs sm:text-sm text-background/70 leading-relaxed mb-6">
              Hyderabad’s premier luxury catering house. For four decades, we have honored authentic royal recipes, silver-standard service, and timeless hospitality for weddings and major family occasions.
            </p>
            <div className="flex items-center gap-3 text-xs font-sans text-brand-gold">
              <Award className="w-4 h-4" />
              <span>Certified Royal Caterers • ISO 22000 Food Safety Standards</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-background/15 pb-2">
              Website Navigation
            </h3>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-background/70">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-gold transition-colors">
                  Heritage & Story
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('occasions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-gold transition-colors">
                  Services & Occasions
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-gold transition-colors">
                  Culinary Menus & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('planner'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-gold transition-colors">
                  Interactive Event Planner
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('tracker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-gold transition-colors">
                  Check Booking Status
                </button>
              </li>
            </ul>
          </div>

          {/* Hyderabad Outlets & Contacts */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-background/15 pb-2">
              Hyderabad Outlets & Kitchens
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans text-background/75">
              <div>
                <div className="font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  Jubilee Hills Flagship
                </div>
                <p className="leading-relaxed mb-2">
                  Plot 482, Road No. 36, Jubilee Hills,<br />
                  Hyderabad, Telangana 500033
                </p>
                <div className="text-brand-gold font-medium flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91 40 2355 8899
                </div>
              </div>

              <div>
                <div className="font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  Banjara Hills Kitchen
                </div>
                <p className="leading-relaxed mb-2">
                  Royal Plaza, Road No. 12, Banjara Hills,<br />
                  Hyderabad, Telangana 500034
                </p>
                <div className="text-brand-gold font-medium flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91 98490 12345
                </div>
              </div>
            </div>

            {/* Email & Working Hours */}
            <div className="mt-8 pt-4 border-t border-background/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-background/70 gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>events@deepalicaterers.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Open Daily: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-background/50 gap-4">
          <div>
            © {new Date().getFullYear()} Deepali Caterers (Pvt) Ltd. All rights reserved. Hyderabad, India.
          </div>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Food Safety Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
