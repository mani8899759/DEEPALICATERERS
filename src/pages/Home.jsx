import React from 'react';
import { 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Utensils, 
  Clock, 
  Heart, 
  ArrowRight, 
  Users
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

export default function Home({ setActivePage, openConsultation }) {
  // Select 6 teaser items for menu preview
  const teaserMenu = MENU_ITEMS.slice(0, 6);

  return (
    <div className="animate-fadeIn">
      
      {/* 1. MAGAZINE-COVER EDITORIAL HERO SECTION */}
      <section className="border-b border-primary/15 py-16 md:py-24 px-6 md:px-margin max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Hero Text Composition */}
          <div className="lg:col-span-7 pr-0 lg:pr-8">
            
            {/* Social Proof Eyebrow Line */}
            <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-editorial text-secondary mb-6">
              <div className="flex text-amber-700 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-serif font-bold text-primary">4.7 ★ Rating</span>
              <span className="opacity-40">•</span>
              <span>Based on 213 Verified Reviews</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-bold text-primary leading-[1.05] tracking-tight mb-8">
              Taste That Brings Families Together.
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Curating authentic Hyderabadi feasts, balanced traditional flavours, and spotless hygiene for weddings, housewarmings, and cherished family celebrations across Telangana.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <button
                onClick={() => {
                  setActivePage('planner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-4 h-4 text-brand-gold" />
                Plan My Event
              </button>

              <button
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-primary/40 text-primary font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                Order Catering & Menus
              </button>
            </div>

            {/* Quiet Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/15 font-sans text-xs text-on-surface-variant">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>100% Fresh Daily Produce</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>Guaranteed Punctual Delivery</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>Spotless Kitchen Hygiene</span>
              </div>
            </div>
          </div>

          {/* Right Hero Food Portrait Composition */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="/assets/images/hero_biryani.jpg"
                alt="Authentic Hyderabadi Zafrani Mutton Biryani in Copper Handi"
                className="w-full h-[520px] object-cover"
              />
              <div className="pt-4 flex items-center justify-between border-t border-primary/15 mt-3">
                <div>
                  <div className="font-serif text-lg font-bold text-primary">Hyderabadi Zafrani Mutton Biryani</div>
                  <div className="font-sans text-xs text-on-surface-variant">Slow-cooked in hand-drawn copper handis</div>
                </div>
                <div className="text-right font-serif text-base font-bold text-secondary">
                  4.7 ★ <span className="font-sans text-[10px] font-normal text-on-surface-variant uppercase block">Signature Dish</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST & SOCIAL PROOF NARRATIVE LINE */}
      <section className="bg-surface-container-low py-12 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">
            
            <div className="border-b md:border-b-0 md:border-r border-primary/15 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-700 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="font-serif text-2xl font-bold text-primary">4.7 out of 5.0</div>
              <div className="font-sans text-[11px] text-on-surface-variant uppercase tracking-widest mt-0.5">213 Verified Customer Reviews</div>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-primary/15 pb-6 md:pb-0 md:pr-6">
              <div className="font-serif text-xl font-bold text-primary">98% Recommendation</div>
              <div className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                Hosts praised our delicious food, punctual delivery, and attentive team.
              </div>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-primary/15 pb-6 md:pb-0 md:pr-6">
              <div className="font-serif text-xl font-bold text-primary">Pure & Homely Spicing</div>
              <div className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                Balanced flavours crafted for both young children and family elders.
              </div>
            </div>

            <div>
              <div className="font-serif text-xl font-bold text-primary">Veg & Non-Veg Kitchens</div>
              <div className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                Dedicated separate cooking lines for satvik veg & traditional dum non-veg.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOD EXPERIENCE — ASYMMETRICAL EDITORIAL STORY */}
      <section className="py-24 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
            The Heart of Our Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
            Food Cooked with Passion, Served with Warmth
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Great celebrations live forever in the memories of your guests through the taste of the food. At Deepali Caterers, we treat every dish as an offering of respect to your family and friends.
          </p>
        </div>

        {/* Asymmetrical Grid: 1 Large Hero Story + 3 Side Editorial Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Focal Food Hero */}
          <div className="lg:col-span-7 space-y-4">
            <img
              src="/assets/images/hero_biryani.jpg"
              alt="Authentic Hyderabadi Zafrani Dum Biryani"
              className="w-full h-[440px] object-cover"
            />
            <div className="pt-2 flex items-baseline justify-between border-b border-primary/15 pb-4">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-editorial text-secondary font-bold block mb-1">
                  Signature Specialty
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Aromatic Hyderabadi Dum Biryani
                </h3>
                <p className="font-sans text-xs text-on-surface-variant mt-2 max-w-xl leading-relaxed">
                  Aged long-grain basmati rice, Kashmiri saffron, and prime tender meat slow-cooked in handis under dough-sealed lids over charcoal embers.
                </p>
              </div>
              <div className="font-serif text-lg font-bold text-secondary shrink-0">
                ₹480 <span className="font-sans text-xs text-on-surface-variant font-normal">/ plate</span>
              </div>
            </div>
          </div>

          {/* 3 Secondary Food Stories */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Story 1 */}
            <div className="flex gap-4 items-center pb-6 border-b border-primary/15">
              <img
                src="/assets/images/kebab_starter.jpg"
                alt="Nizami Shikampuri Kebabs"
                className="w-28 h-28 object-cover shrink-0"
              />
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-secondary font-bold block mb-0.5">Live Charcoal Station</span>
                <h4 className="font-serif text-lg font-bold text-primary">Nizami Kebabs & Starters</h4>
                <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Melts-in-mouth Shikampuri kebabs grilled live over charcoal.
                </p>
                <div className="font-serif text-xs font-bold text-secondary mt-1">₹380 / portion</div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex gap-4 items-center pb-6 border-b border-primary/15">
              <img
                src="/assets/images/veg_specialty.jpg"
                alt="Traditional Veg Paneer Makhani"
                className="w-28 h-28 object-cover shrink-0"
              />
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-green-800 font-bold block mb-0.5">Pure Satvik Veg</span>
                <h4 className="font-serif text-lg font-bold text-primary">Traditional Veg Specialties</h4>
                <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Rich Paneer Makhani & Dal Deewan-e-Khas in dedicated veg vessels.
                </p>
                <div className="font-serif text-xs font-bold text-secondary mt-1">₹340 / portion</div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex gap-4 items-center">
              <img
                src="/assets/images/royal_dessert.jpg"
                alt="Shahi Tukda & Warm Rabri"
                className="w-28 h-28 object-cover shrink-0"
              />
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-secondary font-bold block mb-0.5">Royal Desserts</span>
                <h4 className="font-serif text-lg font-bold text-primary">Shahi Tukda & Khubani</h4>
                <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Warm saffron rabri and stewed Turkish apricots with clotted cream.
                </p>
                <div className="font-serif text-xs font-bold text-secondary mt-1">₹220 / serving</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY DEEPALI — OPEN 3-COLUMN EDITORIAL PILLARS */}
      <section className="bg-surface-container-low py-24 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Why Hosts Trust Deepali Caterers
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
              Real Quality You & Your Guests Will Feel
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Every pillar of our service is grounded in what our patrons consistently highlight in their 213 verified reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {/* Pillar 1 */}
            <div className="pt-6 border-t border-primary/15">
              <Heart className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Homely & Traditional Feel
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Our food tastes like a lavish feast prepared at home—rich in warmth and authentic tradition, never synthetic or overly oily.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pt-6 border-t border-primary/15">
              <ShieldCheck className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Spotless Kitchen Hygiene
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Strict cleanliness standards, fresh ingredients sourced daily, and sanitized food preparation for complete peace of mind.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pt-6 border-t border-primary/15">
              <Utensils className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Balanced Flavours for All Ages
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Spiced with care so that elders, adults, and children alike enjoy every bite comfortably without heaviness.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="pt-6 border-t border-primary/15">
              <Clock className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Punctual & Hot Delivery
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Food arrives piping hot precisely when scheduled, ensuring your buffet setup is ready before your first guest arrives.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="pt-6 border-t border-primary/15">
              <Users className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Helpful & Courteous Staff
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Our uniformed service team treats your guests with traditional Indian hospitality and attentive care throughout the event.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="pt-6 border-t border-primary/15">
              <CheckCircle2 className="w-6 h-6 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Reasonable & Transparent Pricing
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Honest pricing packages with zero hidden fees. Generous portion sizes that ensure no guest leaves dissatisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OCCASIONS SPOTLIGHT */}
      <section className="py-24 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Tailored Event Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary">
              Catering Designed for Your Specific Occasion
            </h2>
          </div>
          <button
            onClick={() => setActivePage('occasions')}
            className="font-sans text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary flex items-center gap-2 mt-4 md:mt-0"
          >
            View All Services & Specifications →
          </button>
        </div>

        <div className="space-y-16">
          {/* Row 1: Weddings & Receptions Hero Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
                200 to 5,000+ Guests • Silver Thali & Buffet
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
                Weddings & Grand Receptions
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                From Sangeet night live chat stalls to grand reception banquets. Elaborate multi-cuisine buffets, silver-plated thali service, and dedicated VVIP table attendants.
              </p>
              <button
                onClick={() => setActivePage('planner')}
                className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
              >
                Plan Wedding Catering →
              </button>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/assets/images/wedding_catering.jpg"
                alt="Grand Wedding Banquet Catering"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Row 2: Gruhapravesam & Family Functions Side-by-Side Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-primary/15">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
                50 to 500 Guests • Satvik Veg Options
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Gruhapravesam & Housewarming Feasts
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                Traditional South Indian banana leaf feasts or elegant buffet setups. Prepared in dedicated vegetarian cooking vessels with authentic homestyle flavors.
              </p>
              <button
                onClick={() => setActivePage('planner')}
                className="font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
              >
                Plan Housewarming Catering →
              </button>
            </div>

            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
                Interactive Food Stations
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Sangeet, Mehendi & Family Gatherings
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                Vibrant live chat stalls, charcoal kebab bars, and customizable dessert stations that keep guests entertained and delighted.
              </p>
              <button
                onClick={() => setActivePage('planner')}
                className="font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
              >
                Plan Family Celebration →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MENU PREVIEW */}
      <section className="bg-surface-container-low py-24 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Curated Menu Sample
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
              A Taste of Our Specialties
            </h2>
            <p className="font-sans text-sm text-on-surface-variant">
              A brief preview of our most requested dishes. Explore our full menu catalog for over 60+ regional & Nizami selections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {teaserMenu.map((item) => (
              <div key={item.id} className="border-b border-primary/15 pb-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                    {item.name}
                    <span className={`text-[9px] font-sans px-2 py-0.5 uppercase tracking-wider font-bold border ${
                      item.dietary === 'veg' ? 'border-green-800 text-green-900 bg-green-50' : 'border-red-800 text-red-900 bg-red-50'
                    }`}>
                      {item.dietary}
                    </span>
                  </h3>
                  <div className="flex-1 hidden sm:block dotted-leader h-3 mx-2 opacity-40"></div>
                  <div className="font-serif text-lg font-bold text-secondary shrink-0">
                    ₹{item.price} <span className="font-sans text-xs text-on-surface-variant font-normal">/ {item.unit}</span>
                  </div>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => setActivePage('menu')}
              className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              Explore Full 60+ Item Menu Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-24 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
            Seamless & Transparent Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
            How We Prepare Your Event
          </h2>
          <p className="font-sans text-sm text-on-surface-variant">
            From initial enquiry to hot service on your event day, we ensure a stress-free experience for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: '01', title: 'Enquiry & Brief', desc: 'Share your event date, venue, and guest scale online.' },
            { step: '02', title: 'Menu Planning', desc: 'Customize food items with our Jubilee Hills consultant.' },
            { step: '03', title: 'Tasting & Lock', desc: 'Sample selected dishes and lock transparent pricing.' },
            { step: '04', title: 'Fresh Cooking', desc: 'Dishes cooked fresh on event day using farm ingredients.' },
            { step: '05', title: 'Punctual Service', desc: 'Piping hot delivery & courteous uniformed stewards.' }
          ].map((item, idx) => (
            <div key={idx} className="pt-4 border-t border-primary/20">
              <div className="font-serif text-2xl font-bold text-secondary mb-2">{item.step}</div>
              <h3 className="font-serif text-base font-bold text-primary mb-2">{item.title}</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CUSTOMER STORIES & REVIEWS */}
      <section className="bg-surface-container-low py-24 border-b border-primary/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-3 block">
              Verified Patron Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary mb-4">
              Stories from Real Celebrations
            </h2>
            <p className="font-sans text-sm text-on-surface-variant">
              Highlights from our 4.7 ★ rating based on 213 Google customer reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="pt-6 border-t border-primary/15">
              <div className="flex text-amber-700 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-base text-primary leading-relaxed mb-6">
                "All 300 guests at our Gruhapravesam complimented the food! The Veg Biryani was delicious, and food arrived piping hot on schedule. Deepali Caterers made our housewarming memorable."
              </p>
              <div className="font-sans text-xs font-bold uppercase tracking-wider text-primary">Venkat & Swathi K.</div>
              <div className="font-sans text-[11px] text-secondary">Kukatpally • Housewarming</div>
            </div>

            <div className="pt-6 border-t border-primary/15">
              <div className="flex text-amber-700 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-base text-primary leading-relaxed mb-6">
                "The food tasted just like a homestyle feast—neither overly spicy nor heavy. My elderly parents enjoyed every dish comfortably. Courteous staff and very reasonable pricing."
              </p>
              <div className="font-sans text-xs font-bold uppercase tracking-wider text-primary">Srikanth Reddy</div>
              <div className="font-sans text-[11px] text-secondary">Banjara Hills • Family Function</div>
            </div>

            <div className="pt-6 border-t border-primary/15">
              <div className="flex text-amber-700 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-base text-primary leading-relaxed mb-6">
                "This is our third time booking Deepali Caterers for a family occasion. Always punctual, spotless kitchen hygiene, and helpful service. Highly recommended to anyone in Hyderabad!"
              </p>
              <div className="font-sans text-xs font-bold uppercase tracking-wider text-primary">Dr. Farooq Ali Khan</div>
              <div className="font-sans text-[11px] text-secondary">Jubilee Hills • Repeat Patron</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL EMOTIONAL CONVERSION CONCIERGE MOMENT */}
      <section className="bg-primary text-background py-24 px-6 md:px-margin text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-editorial text-brand-gold mb-4 block">
            Your Event Matters
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Make the Food for Your Special Occasion Unforgettable.
          </h2>
          <p className="font-sans text-base text-background/80 leading-relaxed mb-10">
            Trust your guests with the warm, authentic, and hygienic catering of Deepali Caterers. Estimate your pricing online in minutes or speak directly with our team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setActivePage('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-secondary text-white font-sans text-xs font-bold uppercase tracking-widest px-10 py-5 hover:bg-brand-gold hover:text-primary transition-all duration-300"
            >
              Plan My Event Now →
            </button>
            <button
              onClick={openConsultation}
              className="border border-background/40 text-background font-sans text-xs font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-primary transition-all duration-300"
            >
              Book a Food Tasting Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
