import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Check, 
  Info, 
  X, 
  RotateCcw
} from 'lucide-react';
import { MENU_CATEGORIES, DIETARY_FILTERS, MENU_ITEMS } from '../data/menuData';

export default function MenuDiscovery({ setActivePage, selectedMenuDraft, setSelectedMenuDraft }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemModal, setActiveItemModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter items dynamically
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchDiet = selectedDietary === 'all' || item.dietary === selectedDietary;
      const matchQuery = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase())));
      
      return matchCat && matchDiet && matchQuery;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  const toggleDraftItem = (itemName) => {
    if (selectedMenuDraft.includes(itemName)) {
      setSelectedMenuDraft(selectedMenuDraft.filter(i => i !== itemName));
    } else {
      setSelectedMenuDraft([...selectedMenuDraft, itemName]);
    }
  };

  const handleCategorySelect = (catId) => {
    setIsLoading(true);
    setSelectedCategory(catId);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleDietarySelect = (dietId) => {
    setIsLoading(true);
    setSelectedDietary(dietId);
    setTimeout(() => setIsLoading(false), 200);
  };

  return (
    <div className="animate-fadeIn">
      {/* 1. EDITORIAL HEADER BANNER */}
      <section className="bg-surface-container-low border-b border-primary/15 py-16 px-6 md:px-margin">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-editorial text-secondary mb-2 block">
                Food Discovery Catalog
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary">
                Culinary Menus & Pricing
              </h1>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-xl mt-2 leading-relaxed">
                Explore our authentic Hyderabadi dum delicacies, traditional Satvik veg dishes, live chef grills, and heritage sweets. Select items to build your custom event menu draft.
              </p>
            </div>

            {/* Sticky Selected Draft Pill */}
            {selectedMenuDraft.length > 0 && (
              <div className="bg-primary text-background p-4 flex items-center gap-6 shadow-md border-l-2 border-secondary animate-fadeIn">
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-editorial text-brand-gold">Current Draft</div>
                  <div className="font-serif text-xl font-bold text-white">
                    {selectedMenuDraft.length} Dishes Selected
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActivePage('planner');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-secondary text-white font-sans text-xs uppercase font-bold tracking-widest px-5 py-3 hover:bg-brand-gold hover:text-primary transition-all flex items-center gap-2"
                >
                  Proceed to Event Planner →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. FEATURED DISH STORYTELLING SPOTLIGHT */}
      <section className="py-16 px-6 md:px-margin border-b border-primary/15 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-editorial text-secondary mb-2 block">
              Signature Royal Specialty
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary mb-3">
              Hyderabadi Shahi Zafrani Mutton Biryani
            </h2>
            
            {/* Price Leader Dot */}
            <div className="flex items-center justify-between font-serif text-xl font-bold text-secondary my-3 max-w-md">
              <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-normal">Base Rate</span>
              <div className="flex-1 dotted-leader h-3 mx-3 opacity-40"></div>
              <span>₹480 <span className="font-sans text-xs text-on-surface-variant font-normal">/ per plate</span></span>
            </div>

            <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4">
              Slow dum-cooked tender prime mutton marinated in Kashmir saffron, caramelized onions, mint, and aged basmati rice. Sealed in hand-drawn copper handis over charcoal.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 font-sans text-[11px]">
              <span className="bg-surface-container-low border border-primary/20 px-2.5 py-1 font-bold text-primary">• Prime Mutton Thigh</span>
              <span className="bg-surface-container-low border border-primary/20 px-2.5 py-1 font-bold text-primary">• Kashmiri Saffron</span>
              <span className="bg-surface-container-low border border-primary/20 px-2.5 py-1 font-bold text-primary">• 2-Year Aged Basmati</span>
              <span className="bg-surface-container-low border border-primary/20 px-2.5 py-1 font-bold text-primary">• Pure Desi Ghee</span>
            </div>

            <button
              onClick={() => toggleDraftItem('Hyderabadi Shahi Zafrani Mutton Biryani')}
              className={`font-sans text-xs uppercase font-bold tracking-widest px-6 py-3 border transition-all ${
                selectedMenuDraft.includes('Hyderabadi Shahi Zafrani Mutton Biryani')
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-primary text-background border-primary hover:bg-secondary'
              }`}
            >
              {selectedMenuDraft.includes('Hyderabadi Shahi Zafrani Mutton Biryani') ? '✓ Added to Event Draft' : '+ Add Signature Biryani to Event'}
            </button>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/assets/images/hero_biryani.jpg"
              alt="Shahi Zafrani Mutton Biryani in Copper Handi"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. FILTER & SEARCH TOOLBAR */}
      <section className="bg-background border-b border-primary/15 py-6 px-6 md:px-margin sticky top-[73px] z-40 backdrop-blur-md bg-background/95 shadow-sm">
        <div className="max-w-[1440px] mx-auto space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="w-4 h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Biryani, Kebabs, Paneer, Saffron, Desserts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container-low border border-primary/30 pl-10 pr-4 py-2 font-sans text-xs focus:outline-none focus:border-secondary text-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-secondary"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="lg:col-span-7 flex flex-wrap items-center gap-2 justify-start lg:justify-end font-sans">
              <span className="text-xs uppercase tracking-wider font-bold text-primary mr-2">Dietary:</span>
              {DIETARY_FILTERS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleDietarySelect(d.id)}
                  className={`text-xs uppercase tracking-wider px-3 py-1 border transition-all ${
                    selectedDietary === d.id
                      ? 'bg-primary text-background border-primary font-bold'
                      : 'border-primary/20 text-on-surface-variant hover:border-primary'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-primary/10 pt-4">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`font-sans text-xs uppercase tracking-widest px-5 py-2 whitespace-nowrap border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-white border-secondary font-bold'
                    : 'bg-surface-container-low border-primary/15 text-primary hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISH GRID & OPEN LISTINGS */}
      <section className="py-16 px-6 md:px-margin max-w-[1440px] mx-auto min-h-[500px]">
        
        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-surface-container-low h-80 p-4">
                <div className="w-full h-40 bg-primary/10 mb-4"></div>
                <div className="h-6 bg-primary/20 w-3/4 mb-2"></div>
                <div className="h-4 bg-primary/10 w-full mb-4"></div>
              </div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          /* Empty Search State */
          <div className="py-20 text-center border-t border-b border-primary/20 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-secondary mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              No Dishes Found for "{searchQuery || selectedCategory}"
            </h3>
            <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed">
              We couldn't find any dishes matching your active search or dietary filter. Try clearing your search parameters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-6 py-3 flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters & Search
            </button>
          </div>
        ) : (
          /* Open Dish Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item) => {
              const isSelected = selectedMenuDraft.includes(item.name);
              return (
                <div 
                  key={item.id}
                  className="flex flex-col justify-between pt-4 border-t border-primary/15"
                >
                  <div>
                    <div className="relative mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`text-[9px] font-sans px-2 py-0.5 uppercase tracking-wider font-bold border ${
                          item.dietary === 'veg' ? 'bg-green-50 text-green-900 border-green-800' : 'bg-red-50 text-red-900 border-red-800'
                        }`}>
                          {item.dietary}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveItemModal(item)}
                        className="absolute bottom-2 right-2 bg-background/90 border border-primary/30 p-1.5 hover:bg-primary hover:text-white transition-colors"
                        title="View Dish Ingredients & Specs"
                      >
                        <Info className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary mb-1">
                      {item.name}
                    </h3>

                    {/* Editorial Dotted Leader */}
                    <div className="flex items-center justify-between font-serif text-base font-bold text-secondary my-2">
                      <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-normal">Rate</span>
                      <div className="flex-1 dotted-leader h-3 mx-2 opacity-40"></div>
                      <span>₹{item.price} <span className="font-sans text-[11px] text-on-surface-variant font-normal">/ {item.unit}</span></span>
                    </div>

                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => toggleDraftItem(item.name)}
                      className={`w-full font-sans text-xs uppercase font-bold tracking-widest py-2.5 flex items-center justify-center gap-2 border transition-all ${
                        isSelected 
                          ? 'bg-secondary text-white border-secondary' 
                          : 'bg-background border-primary/40 text-primary hover:border-primary'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added to Event Menu
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add to Event Menu
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. DISH DETAIL MODAL */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-background border border-primary w-full max-w-lg p-6 relative shadow-xl">
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 p-2 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeItemModal.image}
              alt={activeItemModal.name}
              className="w-full h-56 object-cover mb-4"
            />

            <span className="font-sans text-xs uppercase tracking-editorial font-bold text-secondary mb-1 block">
              {activeItemModal.category.replace('-', ' ')}
            </span>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              {activeItemModal.name}
            </h3>

            {/* Dotted Leader */}
            <div className="flex items-center justify-between font-serif text-lg font-bold text-secondary my-3">
              <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-normal">Pricing Rate</span>
              <div className="flex-1 dotted-leader h-3 mx-3 opacity-40"></div>
              <span>₹{activeItemModal.price} <span className="font-sans text-xs text-on-surface-variant font-normal">/ {activeItemModal.unit}</span></span>
            </div>

            <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4">
              {activeItemModal.description}
            </p>

            {activeItemModal.ingredients && (
              <div className="mb-6 bg-surface-container-low p-4 border border-primary/15 font-sans">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Key Ingredients & Heritage Spices:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeItemModal.ingredients.map((ing, i) => (
                    <span key={i} className="bg-background px-2.5 py-1 border border-primary/20 text-primary font-medium">
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                toggleDraftItem(activeItemModal.name);
                setActiveItemModal(null);
              }}
              className="w-full bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest py-3 hover:bg-secondary transition-colors"
            >
              {selectedMenuDraft.includes(activeItemModal.name) ? 'Remove Dish from Selection' : 'Add Dish to Selection'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
