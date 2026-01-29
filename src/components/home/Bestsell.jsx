 import React, { useRef, useState } from 'react';
import { Star, ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
// Sahi path se image import
import bestsellImg from '../../assets/bestsell/bestsell.png';

const Bestsell = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const bestSellers = Array(8).fill({
    name: "Royal Polki Set",
    price: "₹4,50,000",
    img: bestsellImg,
    tag: "Handcrafted"
  });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Header - Compact & Elegant */}
        <div className="px-6 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-[#d3a12a]" />
            <span className="text-[#d3a12a] uppercase tracking-[0.4em] text-[10px] font-bold">The Signature Collection</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-serif text-[#1a1a1a] leading-tight">
            Our <span className="italic text-[#0f2d2a]">Masterpieces</span>
          </h2>
        </div>

        {/* --- MOBILE FIRST SNAP CAROUSEL --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 px-6 pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {bestSellers.map((prod, idx) => (
            <div 
              key={idx} 
              className="min-w-[88vw] md:min-w-[30%] snap-center group relative"
            >
              {/* Image Container - Tall Portrait for Mobile */}
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white">
                <img 
                  src={prod.img} 
                  className="w-full h-full object-cover" 
                  alt={prod.name} 
                />
                
                {/* Top Badge */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#0f2d2a]/90 backdrop-blur-md text-[#f5d54e] px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-white/10">
                    {prod.tag}
                  </span>
                </div>

                {/* Glassmorphism Price Overlay - Bottom Right */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-lg px-5 py-2.5 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[#0b9c42] font-black text-lg tracking-tighter leading-none">{prod.price}</p>
                </div>
              </div>
              
              {/* Product Info - Below Image for Mobile Clarity */}
              <div className="mt-6 px-2 flex justify-between items-center">
                <div className="space-y-1">
                  <h4 className="text-2xl font-serif text-[#1a1a1a]">{prod.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#d3a12a]">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest underline decoration-[#d3a12a]">Details</span>
                  </div>
                </div>
                
                {/* Minimalist Action Button */}
                <button className="bg-[#0f2d2a] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODERN MOBILE PROGRESS BAR --- */}
        <div className="px-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            {bestSellers.map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeIndex === i ? 'w-8 bg-[#0f2d2a]' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="text-[10px] font-bold text-[#d3a12a] tracking-widest uppercase italic">
            Swipe To Explore
          </div>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Bestsell;