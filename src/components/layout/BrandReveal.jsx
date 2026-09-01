import React, { useState, useEffect } from 'react';

export default function BrandReveal({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: Calm background, 1: Welcome To, 2: Brand Name, 3: Subtitle, 4: Transition Out
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Check if user already saw reveal in this session
    try {
      const hasSeen = sessionStorage.getItem('hasSeenBrandReveal');
      if (hasSeen === 'true') {
        setIsVisible(false);
        if (onComplete) onComplete();
        return;
      }
    } catch (e) {
      // Fallback if sessionStorage is disabled
    }

    // 2. Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // 3. Sequence Progression Timers
    const timer1 = setTimeout(() => setPhase(1), 400);   // 0.4s: Welcome To
    const timer2 = setTimeout(() => setPhase(2), 1000);  // 1.0s: DEEPALI CATERERS
    const timer3 = setTimeout(() => setPhase(3), 1700);  // 1.7s: Subtitle
    const timer4 = setTimeout(() => setPhase(4), 2200);  // 2.2s: Soft Transition Out
    const timer5 = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('hasSeenBrandReveal', 'true');
      } catch (e) {}
      if (onComplete) onComplete();
    }, 2800);                                            // 2.8s: Complete & Remove Overlay

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center p-6 transition-opacity duration-700 ease-in-out pointer-events-none select-none ${
        phase === 4 ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
      }`}
      aria-hidden="true"
    >
      <div className="text-center max-w-xl mx-auto space-y-3">
        
        {/* Step 1: WELCOME TO */}
        <div 
          className={`font-sans text-xs sm:text-sm font-semibold uppercase tracking-editorial text-secondary transition-all duration-700 transform ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Welcome to
        </div>

        {/* Step 2: DEEPALI CATERERS HERO BRAND */}
        <div 
          className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary uppercase transition-all duration-800 ease-out transform ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          DEEPALI CATERERS
        </div>

        {/* Step 3: SUBTITLE FACTUAL LINE */}
        <div 
          className={`font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-all duration-700 transform pt-2 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          HYDERABAD • CELEBRATIONS • CATERING
        </div>

      </div>
    </div>
  );
}
