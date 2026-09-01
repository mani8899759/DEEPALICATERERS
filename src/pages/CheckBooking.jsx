import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Phone, 
  AlertCircle, 
  Download, 
  ShieldCheck,
  Star,
  RefreshCw,
  XCircle,
  Loader2,
  Lock
} from 'lucide-react';
import { secureVerifyBooking } from '../data/bookingStore';

export default function CheckBooking({ createdBookingId }) {
  const [bookingIdInput, setBookingIdInput] = useState(createdBookingId || '');
  const [phoneInput, setPhoneInput] = useState('');
  const [lookupResult, setLookupResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (createdBookingId) {
      setBookingIdInput(createdBookingId);
      handleVerification(createdBookingId, '');
    }
  }, [createdBookingId]);

  const handleVerification = (idToUse, phoneToUse) => {
    const id = idToUse !== undefined ? idToUse : bookingIdInput;
    const phone = phoneToUse !== undefined ? phoneToUse : phoneInput;

    if (!id || id.trim().length === 0) return;

    setServerError(false);
    setIsVerifying(true);

    setTimeout(() => {
      try {
        const result = secureVerifyBooking(id, phone);
        setLookupResult(result);
        setIsVerifying(false);
      } catch (err) {
        setIsVerifying(false);
        setServerError(true);
      }
    }, 400);
  };

  const handlePresetSearch = (presetId, presetPhone = '') => {
    setBookingIdInput(presetId);
    setPhoneInput(presetPhone);
    handleVerification(presetId, presetPhone);
  };

  return (
    <div className="animate-fadeIn">
      {/* 1. HEADER BANNER */}
      <section className="bg-surface-container-low border-b border-primary/15 py-16 px-6 md:px-margin">
        <div className="max-w-[1440px] mx-auto text-center max-w-3xl">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
            Concierge Tracking Gateway
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-3">
            Check Booking Status
          </h1>
          <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Enter your booking reference code (e.g. <span className="font-bold text-primary">DPL-2026-6227</span>) and registered mobile number to view your real-time preparation timeline and culinary specifications.
          </p>
        </div>
      </section>

      {/* 2. VERIFICATION INPUT */}
      <section className="py-16 px-6 md:px-margin max-w-3xl mx-auto">
        <div className="bg-background border border-primary/20 p-8 shadow-xs mb-12">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-secondary mb-4">
            <Lock className="w-4 h-4 text-brand-gold" />
            Secure Verification Gateway
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleVerification(); }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Booking Reference ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. DPL-2026-6227"
                  value={bookingIdInput}
                  onChange={(e) => setBookingIdInput(e.target.value)}
                  className="w-full bg-surface-container-low border border-primary/30 px-4 py-3 font-sans text-sm font-bold uppercase focus:outline-none focus:border-primary text-primary"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Registered Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9849012345"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full bg-surface-container-low border border-primary/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary text-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest py-4 hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Verifying Reference Code...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  Verify & Open Concierge Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-primary/15 flex flex-wrap items-center gap-2 font-sans text-xs">
            <span className="text-on-surface-variant uppercase tracking-wider font-semibold">Demo Reference States:</span>
            <button onClick={() => handlePresetSearch('DPL-2026-8942', '9849012345')} className="bg-surface-container-low border border-primary/20 px-2 py-0.5 text-primary font-mono text-[11px]">DPL-2026-8942 (Confirmed)</button>
            <button onClick={() => handlePresetSearch('DPL-2026-4109', '9701298765')} className="bg-surface-container-low border border-primary/20 px-2 py-0.5 text-primary font-mono text-[11px]">DPL-2026-4109 (Pending)</button>
            <button onClick={() => handlePresetSearch('DPL-2026-9901', '9885098850')} className="bg-surface-container-low border border-primary/20 px-2 py-0.5 text-primary font-mono text-[11px]">DPL-2026-9901 (Updated)</button>
            <button onClick={() => handlePresetSearch('DPL-2026-1102', '9849099999')} className="bg-surface-container-low border border-primary/20 px-2 py-0.5 text-primary font-mono text-[11px]">DPL-2026-1102 (Completed)</button>
          </div>
        </div>

        {/* VERIFICATION DASHBOARD */}
        {lookupResult && lookupResult.status === 'VERIFIED' && lookupResult.booking && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Pill */}
            <div className="bg-primary text-background p-8 border-l-2 border-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xl font-bold text-brand-gold">{lookupResult.booking.bookingId}</span>
                  <span className="font-sans text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 border border-brand-gold text-brand-gold">
                    STATUS: {lookupResult.booking.status.toUpperCase()}
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-1">
                  {lookupResult.booking.occasion}
                </h2>
                <div className="font-sans text-xs text-background/80">
                  Host: <span className="font-bold text-white">{lookupResult.booking.customerName}</span> ({lookupResult.booking.phone})
                </div>
              </div>

              <div className="text-left md:text-right font-sans text-xs text-background/80">
                <div>Event Date: <span className="font-bold text-white block">{lookupResult.booking.eventDate}</span></div>
                <div className="mt-1">Timing: <span className="font-bold text-white">{lookupResult.booking.eventTime}</span></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-background border border-primary/20 p-8">
              <h3 className="font-serif text-xl font-bold text-primary mb-6 border-b border-primary/15 pb-3">
                Preparation & Service Timeline
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {lookupResult.booking.timeline.map((stepItem) => (
                  <div 
                    key={stepItem.step}
                    className={`p-3 border text-center ${
                      stepItem.completed 
                        ? 'bg-surface-container-low border-secondary font-bold' 
                        : 'bg-background border-primary/15 opacity-50'
                    }`}
                  >
                    <div className="font-serif text-sm font-bold text-secondary mb-1">
                      Step {stepItem.step}
                    </div>
                    <div className="font-sans text-[11px] font-bold uppercase tracking-wider mb-1">
                      {stepItem.title}
                    </div>
                    <div className="font-sans text-[10px] text-secondary">
                      {stepItem.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications & Menu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-primary/20 bg-background p-6 space-y-3 font-sans text-xs">
                <h3 className="font-serif text-lg font-bold text-primary border-b border-primary/15 pb-2">
                  Event Specifications
                </h3>
                <div className="flex justify-between py-1 border-b border-primary/10">
                  <span className="text-on-surface-variant">Occasion:</span>
                  <span className="font-bold text-primary">{lookupResult.booking.occasion}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-primary/10">
                  <span className="text-on-surface-variant">Guest Scale:</span>
                  <span className="font-bold text-primary">{lookupResult.booking.guestCount} Guests</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">Venue Address:</span>
                  <span className="font-bold text-primary">{lookupResult.booking.venue}</span>
                </div>
              </div>

              <div className="border border-primary/20 bg-background p-6 space-y-3 font-sans text-xs">
                <h3 className="font-serif text-lg font-bold text-primary border-b border-primary/15 pb-2">
                  Agreed Culinary Menu
                </h3>
                <div className="space-y-1.5">
                  {lookupResult.booking.menuSelections.map((dish, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-surface-container-low font-bold text-primary">
                      <span>• {dish}</span>
                      <span className="text-[10px] uppercase text-secondary">Included</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Hotline */}
            <div className="bg-primary text-background p-6 border-l-2 border-secondary flex items-center justify-between font-sans text-xs">
              <div>
                <div className="font-serif text-lg font-bold text-white mb-1">
                  Questions About Your Booking?
                </div>
                <div className="text-background/80">
                  Speak directly with Chef Mir Zeeshan Ali or our Jubilee Hills desk.
                </div>
              </div>
              <a
                href="tel:+919849012345"
                className="bg-secondary text-white font-bold uppercase tracking-widest px-5 py-3 hover:bg-brand-gold hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" /> Call: +91 98490 12345
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
