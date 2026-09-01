import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Users, 
  ChefHat
} from 'lucide-react';

export default function Occasions({ setActivePage, openConsultation }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="animate-fadeIn">
      {/* EDITORIAL HERO SECTION */}
      <section className="bg-surface-container-low border-b border-primary/15 py-20 px-6 md:px-margin">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Catering Solutions for Every Scale & Tradition
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-primary leading-tight mb-6">
              Can Deepali Caterers Handle My Event?
            </h1>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8">
              Yes. Whether you are hosting an intimate family dinner for 20 guests, a traditional Gruhapravesam housewarming, or a grand wedding banquet for 5,000+, we bring silver-standard hospitality, authentic homestyle recipes, and 100% on-time delivery across Hyderabad.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('planner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-gold" />
                Plan My Event Now
              </button>

              <button
                onClick={openConsultation}
                className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:border-primary transition-colors"
              >
                Speak with Catering Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — WEDDINGS & RECEPTIONS (OPEN EDITORIAL SPLIT LAYOUT) */}
      <section className="py-24 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
              200 to 5,000+ Guests • Grand Banquets
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-6">
              Weddings & Royal Receptions
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
              Your wedding day is one of the most important milestones in your family's life. We execute multi-course royal buffets, silver-plated thali arrangements, live dum biryani handis, and elaborate sweet counters that earn glowing compliments from every single guest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pt-6 border-t border-primary/15">
              <div>
                <h4 className="font-serif text-base font-bold text-primary mb-1">Silver Thali & Buffet Options</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">Traditional silver-standard presentation for VVIP guests.</p>
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-primary mb-1">Dedicated Service Staff</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">Uniformed servers, head captains, and table stewards.</p>
              </div>
            </div>

            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              Plan Wedding Catering →
            </button>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/assets/images/wedding_catering.jpg"
              alt="Grand Wedding Banquet Catering"
              className="w-full h-[440px] object-cover"
            />
            <div className="pt-3 flex items-center justify-between text-xs font-sans text-on-surface-variant border-t border-primary/15 mt-3">
              <span>Empaneled with Taj Falaknuma & Top Venues</span>
              <span className="text-secondary font-bold">200–5000+ Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GRUHAPRAVESAM & SATVIK VEGETARIAN FEASTS */}
      <section className="bg-surface-container-low py-24 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <img
                src="/assets/images/housewarming_satvik.jpg"
                alt="Pure Satvik Banana Leaf Feast"
                className="w-full h-[400px] object-cover"
              />
              <div className="pt-3 flex items-center justify-between text-xs font-sans text-on-surface-variant border-t border-primary/15 mt-3">
                <span>100% Dedicated Veg Preparation Utensils</span>
                <span className="text-green-800 font-bold">Satvik & Jain Options</span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-green-900 mb-2 block">
                50 to 500 Guests • Homely Satvik Veg
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-6">
                Gruhapravesam & Housewarming Catering
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                Housewarming functions call for auspicious, pure, and comforting vegetarian food. We prepare traditional South & North Indian satvik veg feasts, banana leaf service, or clean buffet setups—all cooked in dedicated vegetarian cooking vessels with zero non-veg cross-contamination.
              </p>

              <div className="space-y-3 font-sans text-xs text-primary font-bold mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Strict separate vegetarian kitchen lines in Jubilee Hills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Homely, balanced spices suitable for elders and pooja guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Punctual morning or afternoon delivery for auspicious thithis</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setActivePage('planner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:border-primary transition-colors"
              >
                Plan Housewarming Menu →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — SMALL GATHERINGS vs LARGE BANQUETS */}
      <section className="py-24 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
            Guest Scale Flexibility
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
            From Intimate 20 Guests to Grand 5,000+ Banquets
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            We adapt our culinary preparation and service team to match the exact size of your function.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Intimate Gatherings */}
          <div className="pt-6 border-t border-primary/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold text-primary">Small & Intimate Gatherings</h3>
              </div>
              <div className="font-sans text-xs uppercase tracking-wider font-bold text-secondary mb-4">
                20 to 100 Guests • Family Dinners & Anniversaries
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                Perfect for private home celebrations, milestone birthdays, or intimate family lunches. Delivered hot in insulated containers or served with a dedicated home butler.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors self-start"
            >
              Plan Intimate Event →
            </button>
          </div>

          {/* Large Banquets */}
          <div className="pt-6 border-t border-primary/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ChefHat className="w-6 h-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold text-primary">Large Banquets & Conventions</h3>
              </div>
              <div className="font-sans text-xs uppercase tracking-wider font-bold text-secondary mb-4">
                500 to 5,000+ Guests • Corporate & Weddings
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                Full-scale catering infrastructure designed for massive crowds without compromising taste, temperature, or hygiene standards.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors self-start"
            >
              Plan Large Banquet →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CUSTOMER CONCERN Q&A MATRIX */}
      <section className="bg-surface-container-low py-24 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Addressing Your Key Concerns
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
              Common Questions
            </h2>
            <p className="font-sans text-sm text-on-surface-variant">
              Clear, transparent answers regarding delivery, hygiene, and custom menu requirements.
            </p>
          </div>

          <div className="max-w-3xl space-y-6 font-sans">
            {[
              {
                q: "Can Deepali Caterers accommodate both Vegetarian & Non-Vegetarian guests at the same event?",
                a: "Yes, absolutely. We maintain strict separation between vegetarian and non-vegetarian food preparation. Vegetarian dishes are prepared in separate cooking vessels and served at distinct buffet stations to respect all dietary preferences."
              },
              {
                q: "Can I customize the menu based on my family's traditional regional recipes?",
                a: "Yes! While we offer a comprehensive menu catalog of Hyderabadi, North Indian, and South Indian specialties, our culinary team happily customizes spice levels, ingredients, and traditional dishes according to your family's preferences."
              },
              {
                q: "How do you ensure food arrives hot and on time for our event?",
                a: "We use insulated food-grade thermal handis and specialized transport vehicles equipped with warming units. Our team arrives at your venue 90 minutes prior to service time to ensure everything is set up and piping hot before your first guest arrives."
              },
              {
                q: "Can we schedule a food tasting session before finalizing our wedding booking?",
                a: "Yes! We encourage prospective wedding and banquet hosts to visit our Jubilee Hills kitchen for a private food tasting session to sample selected dishes and finalize menu items with our Head Chef."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="pt-6 border-t border-primary/20 cursor-pointer transition-all"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between font-serif text-lg md:text-xl font-bold text-primary">
                  <span>{faq.q}</span>
                  <span className="text-secondary font-sans text-base ml-4">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && (
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-3 pt-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION CTA */}
      <section className="bg-primary text-background py-20 px-6 md:px-margin text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-brand-gold mb-3 block">
            Ready to Begin?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Let Us Take Care of the Food for Your Event
          </h2>
          <p className="font-sans text-sm text-background/80 mb-8">
            Select your guest count and preferred service style online or call our Hyderabad desk directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-secondary text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-gold hover:text-primary transition-all"
            >
              Launch Interactive Event Planner →
            </button>
            <button
              onClick={openConsultation}
              className="border border-background/40 text-background font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-primary transition-all"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
