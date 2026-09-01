import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle, 
  Edit3, 
  Phone, 
  ShieldCheck,
  Check,
  Search,
  Loader2
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { saveNewBooking } from '../data/bookingStore';

export default function EventPlanner({ setActivePage, selectedMenuDraft, setSelectedMenuDraft, setCreatedBookingId }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submittedBooking, setSubmittedBooking] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [menuSearch, setMenuSearch] = useState('');

  // Main Form State
  const [formData, setFormData] = useState({
    occasion: 'Grand Wedding & Reception',
    eventDate: '2026-11-20',
    eventTime: 'Dinner (7:30 PM – 11:00 PM)',
    venue: 'Jubilee Hills / Banjara Hills Palace Venue, Hyderabad',
    guestCount: 350,
    foodPreference: 'Mixed (Veg & Non-Veg Counters)',
    name: '',
    phone: '',
    whatsappOptIn: true,
    specialRequests: 'Include live chat counter and saffron rabri dessert station.'
  });

  const calculateEstimateTotal = () => {
    let ratePerPlate = 950;
    if (formData.foodPreference.includes('Satvik')) ratePerPlate = 850;
    if (formData.foodPreference.includes('Non-Veg')) ratePerPlate = 1050;
    return formData.guestCount * ratePerPlate;
  };

  const handleToggleMenuDish = (itemName) => {
    if (selectedMenuDraft.includes(itemName)) {
      setSelectedMenuDraft(selectedMenuDraft.filter(i => i !== itemName));
    } else {
      setSelectedMenuDraft([...selectedMenuDraft, itemName]);
    }
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.eventDate) errors.eventDate = 'Please select an event date.';
    if (!formData.venue || formData.venue.trim().length < 3) errors.venue = 'Please enter a venue address or area in Hyderabad.';
    if (!formData.guestCount || formData.guestCount < 10) errors.guestCount = 'Guest count must be at least 10.';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep5 = () => {
    const errors = {};
    if (!formData.name || formData.name.trim().length < 2) errors.name = 'Please enter your full name.';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFinalSubmission = (e) => {
    e.preventDefault();
    setSubmissionError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const result = saveNewBooking({
          name: formData.name,
          phone: formData.phone,
          email: `${formData.name.toLowerCase().replace(/\s+/g, '.')}@eventhost.in`,
          occasion: formData.occasion,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          venue: `${formData.venue} (${formData.eventTime})`,
          serviceStyle: `${formData.foodPreference} • Royal Buffet`,
          selectedItems: selectedMenuDraft.length > 0 ? selectedMenuDraft : ['Hyderabadi Shahi Zafrani Mutton Biryani', 'Nizami Shikampuri Kebab', 'Live Chat Counter'],
          specialRequests: `${formData.specialRequests} ${formData.whatsappOptIn ? '[WhatsApp Opt-In: Yes]' : ''}`
        });

        setSubmittedBooking(result);
        setCreatedBookingId(result.bookingId);
        setIsSubmitting(false);
        setStep(7);
      } catch (err) {
        setIsSubmitting(false);
        setSubmissionError('Submission failed due to a temporary network issue. Please try again.');
      }
    }, 1200);
  };

  const filteredMenuItems = MENU_ITEMS.filter(item => 
    menuSearch === '' || 
    item.name.toLowerCase().includes(menuSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(menuSearch.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      {/* HEADER BANNER */}
      <section className="bg-surface-container-low border-b border-primary/15 py-12 px-6 md:px-margin">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
                Guided Concierge System
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary">
                Plan My Event
              </h1>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-xl mt-1 leading-relaxed">
                Complete your catering request step-by-step. We preserve your choices at every stage so you can navigate freely.
              </p>
            </div>

            {/* Live Estimate Floating Box */}
            {step < 7 && (
              <div className="bg-primary text-background p-4 border-l-2 border-secondary flex items-center gap-6 shadow-md">
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-editorial text-brand-gold">Estimated Investment</div>
                  <div className="font-serif text-2xl font-bold text-white">
                    ₹{calculateEstimateTotal().toLocaleString('en-IN')} <span className="font-sans text-xs text-background/70 font-normal">INR</span>
                  </div>
                </div>
                <div className="border-l border-background/15 pl-4 text-xs font-sans text-background/80">
                  <div>{formData.guestCount} Guests</div>
                  <div className="text-brand-gold font-bold">{formData.occasion}</div>
                </div>
              </div>
            )}
          </div>

          {/* PROGRESS STEPS BAR (STEPS 1 TO 6) */}
          {step < 7 && (
            <div className="grid grid-cols-6 gap-2 mt-8 pt-6 border-t border-primary/15">
              {[
                { s: 1, label: '1. Occasion' },
                { s: 2, label: '2. Details' },
                { s: 3, label: '3. Food Pref' },
                { s: 4, label: '4. Menu' },
                { s: 5, label: '5. Contact' },
                { s: 6, label: '6. Review' }
              ].map((item) => (
                <button
                  key={item.s}
                  onClick={() => {
                    if (item.s < step) setStep(item.s);
                  }}
                  className={`text-center py-2 border-b-2 font-sans text-[11px] font-bold uppercase tracking-wider transition-all ${
                    step === item.s 
                      ? 'border-secondary text-primary font-bold' 
                      : step > item.s 
                        ? 'border-primary/40 text-secondary cursor-pointer hover:underline' 
                        : 'border-primary/10 text-on-surface-variant opacity-40 cursor-not-allowed'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FORM CONTAINER */}
      <section className="py-16 px-6 md:px-margin max-w-3xl mx-auto min-h-[550px]">
        <div className="bg-background relative">

          {/* STEP 1 — OCCASION */}
          {step === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Step 1 of 6 • Function Selection
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary pb-3 border-b border-primary/15">
                  What are you organizing?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Grand Wedding & Reception', desc: 'Silver thali banquets for 200–5,000+ guests' },
                  { title: 'Gruhapravesam / Housewarming', desc: 'Satvik vegetarian feasts & banana leaf service' },
                  { title: 'Sangeet & Mehendi Night', desc: 'Interactive live chat & charcoal kebab stations' },
                  { title: 'Family Function & Anniversary', desc: 'Homely traditional feasts for family milestones' },
                  { title: 'Small Intimate Gathering', desc: 'Private dining for 20–50 guests with home butler' },
                  { title: 'Corporate Gala & Summit', desc: 'Punctual, formal executive buffet catering' }
                ].map((occ) => {
                  const isSelected = formData.occasion === occ.title;
                  return (
                    <div
                      key={occ.title}
                      onClick={() => setFormData({ ...formData, occasion: occ.title })}
                      className={`p-5 cursor-pointer transition-all border ${
                        isSelected 
                          ? 'bg-primary text-background border-primary shadow-xs' 
                          : 'bg-surface-container-low border-primary/20 text-primary hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-lg font-bold">{occ.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-gold" />}
                      </div>
                      <p className={`font-sans text-xs ${isSelected ? 'text-background/80' : 'text-on-surface-variant'}`}>
                        {occ.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-primary/15 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  Continue to Event Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — EVENT DETAILS */}
          {step === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Step 2 of 6 • Logistics & Guest Scale
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary pb-3 border-b border-primary/15">
                  When & Where is Your Event?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full bg-surface-container-low border p-3 font-sans text-sm focus:outline-none text-primary ${
                      validationErrors.eventDate ? 'border-red-600 bg-red-50' : 'border-primary/30 focus:border-primary'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Time Slot *
                  </label>
                  <select
                    value={formData.eventTime}
                    onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary/30 p-3 font-sans text-sm focus:outline-none focus:border-primary text-primary"
                  >
                    <option value="Lunch (12:00 PM – 3:30 PM)">Lunch (12:00 PM – 3:30 PM)</option>
                    <option value="Afternoon High Tea (4:00 PM – 6:30 PM)">Afternoon High Tea (4:00 PM – 6:30 PM)</option>
                    <option value="Dinner (7:30 PM – 11:00 PM)">Dinner (7:30 PM – 11:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Guest Count Slider */}
              <div className="bg-surface-container-low p-6 border border-primary/20 space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
                    Approximate Guest Count *
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="5000"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-24 bg-background border border-primary/30 p-2 text-center font-serif text-lg font-bold text-secondary"
                  />
                </div>

                <input
                  type="range"
                  min="20"
                  max="2500"
                  step="10"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Venue Location / Sector in Hyderabad *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Taj Falaknuma Palace / Jubilee Hills Road 36"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full bg-surface-container-low border border-primary/30 p-3 font-sans text-sm focus:outline-none focus:border-primary text-primary"
                />
              </div>

              <div className="pt-6 border-t border-primary/15 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-6 py-3.5 hover:border-primary"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => { if (validateStep2()) setStep(3); }}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
                >
                  Continue to Food Preference →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — FOOD PREFERENCE */}
          {step === 3 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Step 3 of 6 • Dietary & Style
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary pb-3 border-b border-primary/15">
                  Food Preference & Requirements
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Pure Vegetarian (Satvik)', badge: 'Dedicated Veg Vessels', desc: '100% vegetarian preparation in dedicated vessels for Gruhapravesams.' },
                  { title: 'Non-Vegetarian (Traditional)', badge: 'Authentic Nizami Dum', desc: 'Royal Hyderabadi mutton biryani and live charcoal kebabs.' },
                  { title: 'Mixed (Veg & Non-Veg Counters)', badge: 'Separate Counter Lines', desc: 'Dedicated separate vegetarian and non-vegetarian buffet stations.' },
                  { title: 'Custom Requirement (Jain / Mild)', badge: 'Custom Formulation', desc: 'Jain satvik recipes without onion/garlic or custom mild spicing.' }
                ].map((pref) => {
                  const isSelected = formData.foodPreference === pref.title;
                  return (
                    <div
                      key={pref.title}
                      onClick={() => setFormData({ ...formData, foodPreference: pref.title })}
                      className={`p-5 border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-primary text-background border-primary shadow-xs' 
                          : 'bg-surface-container-low border-primary/20 text-primary hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-lg font-bold">{pref.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-gold" />}
                      </div>
                      <p className={`font-sans text-xs ${isSelected ? 'text-background/80' : 'text-on-surface-variant'}`}>
                        {pref.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-primary/15 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-6 py-3.5 hover:border-primary"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
                >
                  Continue to Menu Selection →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 — MENU SELECTION */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-primary/15 pb-3">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block">
                    Step 4 of 6 • Selection
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Select Menu Items
                  </h2>
                </div>
                <div className="font-sans text-xs font-bold text-secondary">
                  {selectedMenuDraft.length} Items Selected
                </div>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Biryani, Kebabs, Desserts..."
                  value={menuSearch}
                  onChange={(e) => setMenuSearch(e.target.value)}
                  className="w-full bg-surface-container-low border border-primary/30 pl-10 pr-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-2">
                {filteredMenuItems.map((item) => {
                  const isChecked = selectedMenuDraft.includes(item.name);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleMenuDish(item.name)}
                      className={`p-3.5 border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isChecked 
                          ? 'bg-surface-container-low border-secondary font-bold' 
                          : 'bg-background border-primary/15 hover:border-primary'
                      }`}
                    >
                      <div>
                        <div className="font-serif text-sm text-primary">{item.name}</div>
                        <div className="font-sans text-xs text-secondary font-bold mt-0.5">₹{item.price} / {item.unit}</div>
                      </div>
                      <div className={`w-5 h-5 border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-secondary text-white border-secondary' : 'border-primary/30'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-primary/15 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-6 py-3.5 hover:border-primary"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
                >
                  Continue to Host Contact →
                </button>
              </div>
            </div>
          )}

          {/* STEP 5 — CONTACT */}
          {step === 5 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Step 5 of 6 • Host Contact
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary pb-3 border-b border-primary/15">
                  Your Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth & Ananya Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary/30 p-3 font-sans text-sm focus:outline-none text-primary"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Mobile Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9849012345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary/30 p-3 font-sans text-sm focus:outline-none text-primary"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-primary/15 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-6 py-3.5 hover:border-primary"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => { if (validateStep5()) setStep(6); }}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
                >
                  Review Summary & Estimate →
                </button>
              </div>
            </div>
          )}

          {/* STEP 6 — REVIEW */}
          {step === 6 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Step 6 of 6 • Verification
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary pb-3 border-b border-primary/15">
                  Review Your Request Summary
                </h2>
              </div>

              <div className="bg-surface-container-low p-6 space-y-6 font-sans text-xs border border-primary/15">
                <div className="flex justify-between pb-4 border-b border-primary/15">
                  <div>
                    <span className="text-on-surface-variant uppercase block font-semibold mb-1">Function & Scale:</span>
                    <div className="font-serif text-xl font-bold text-primary">{formData.occasion}</div>
                    <div className="text-secondary font-bold">{formData.guestCount} Guests</div>
                  </div>
                  <button onClick={() => setStep(1)} className="text-primary font-bold uppercase tracking-wider">Edit</button>
                </div>

                <div className="flex justify-between pb-4 border-b border-primary/15">
                  <div>
                    <span className="text-on-surface-variant uppercase block font-semibold mb-1">Date & Venue:</span>
                    <div className="font-bold text-primary">{formData.eventDate} • {formData.eventTime}</div>
                    <div className="text-on-surface-variant">{formData.venue}</div>
                  </div>
                  <button onClick={() => setStep(2)} className="text-primary font-bold uppercase tracking-wider">Edit</button>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-on-surface-variant uppercase block font-semibold mb-1">Host Contact:</span>
                    <div className="font-bold text-primary">{formData.name} ({formData.phone})</div>
                  </div>
                  <button onClick={() => setStep(5)} className="text-primary font-bold uppercase tracking-wider">Edit</button>
                </div>
              </div>

              <div className="bg-primary text-background p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-sans text-xs uppercase tracking-editorial text-brand-gold font-bold block">
                    Estimated Royal Catering Investment
                  </span>
                  <div className="font-serif text-3xl font-bold text-white">
                    ₹{calculateEstimateTotal().toLocaleString('en-IN')} <span className="font-sans text-xs text-background/70 font-normal">INR</span>
                  </div>
                </div>
                <div className="text-xs font-sans text-background/80">
                  Includes full cutlery, live chefs, and service stewards.
                </div>
              </div>

              <div className="pt-6 border-t border-primary/15 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  disabled={isSubmitting}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-6 py-3.5 hover:border-primary"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleFinalSubmission}
                  disabled={isSubmitting}
                  className="bg-secondary text-white font-sans text-xs uppercase font-bold tracking-widest px-10 py-4 hover:bg-brand-gold hover:text-primary transition-all flex items-center gap-2"
                >
                  {isSubmitting ? 'Recording Request...' : 'Confirm & Generate Booking Reference →'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 7 — CONFIRMATION */}
          {step === 7 && submittedBooking && (
            <div className="text-center py-12 space-y-8 animate-fadeIn">
              <div className="w-16 h-16 bg-secondary text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary block mb-1">
                  Request Successfully Recorded
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary">
                  Thank You, {submittedBooking.customerName}
                </h2>
              </div>

              <div className="bg-surface-container-low border border-primary/20 p-6 max-w-md mx-auto">
                <div className="font-sans text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                  Your Official Booking Reference ID
                </div>
                <div className="font-serif text-3xl font-bold text-secondary font-mono tracking-widest mb-2">
                  {submittedBooking.bookingId}
                </div>
                <div className="font-sans text-xs text-primary font-bold">
                  Save this reference code to track real-time preparation online.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setActivePage('tracker');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-secondary transition-colors"
                >
                  Check My Booking Status →
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActivePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:border-primary"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
