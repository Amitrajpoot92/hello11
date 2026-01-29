import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// Sahi path se image import
import collectionImg from '../../assets/collection/collection.png';

const Collection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 10 items array
  const categories = Array(10).fill({
    title: 'Bridal Couture',
    img: collectionImg
  });

  // Scroll handle karke active dot calculate karna
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Laptop pe 3 items hain aur Mobile pe 1, isliye percentage se index nikalna best hai
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const totalDots = 5; // Hame 5 dots chahiye
      const newIndex = Math.round(scrollPercentage * (totalDots - 1));
      
      setActiveIndex(newIndex);
    }
  };

  // Dots par click karke scroll karne ke liye (Desktop feature)
  const scrollToPercent = (dotIndex) => {
    if (scrollRef.current) {
      const totalDots = 5;
      const { scrollWidth, clientWidth } = scrollRef.current;
      const targetScroll = (dotIndex / (totalDots - 1)) * (scrollWidth - clientWidth);
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collection" className="py-20 md:py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4 gap-6">
          <div>
            <h2 className="text-[#f5d54e] font-bold tracking-[0.3em] mb-4 uppercase text-[10px] md:text-sm">Curated For You</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Explore Collections</h3>
          </div>
          <button className="w-fit border border-[#d3a12a] text-[#d3a12a] px-8 py-3 rounded-full hover:bg-[#d3a12a] hover:text-[#1a1a1a] transition-all text-sm font-bold">
            View All
          </button>
        </div>
        
        {/* --- SCROLLABLE CAROUSEL --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-10 px-4 gap-6 snap-x snap-mandatory no-scrollbar"
        >
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[45%] md:min-w-[calc(33.333%-16px)] snap-center group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
            >
              {/* Image */}
              <img 
                src={cat.img} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                alt={`${cat.title} ${i + 1}`}
              />
              
              {/* Gradient Overlay #0f2d2a */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d2a] via-transparent to-transparent opacity-90"></div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                 <h4 className="text-2xl font-serif mb-4 leading-tight">{cat.title}</h4>
                 
                 <div className="w-10 h-10 bg-[#d3a12a] rounded-full flex items-center justify-center group-hover:w-36 transition-all duration-500 overflow-hidden shadow-lg shadow-[#d3a12a]/20">
                    <ArrowRight className="min-w-[20px] text-[#1a1a1a]"/>
                    <span className="ml-3 text-[#1a1a1a] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                      EXPLORE NOW
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DOTTED PROGRESS BAR (For Both Mobile & Laptop) --- */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex gap-3 items-center">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPercent(i)}
                className={`transition-all duration-500 rounded-full ${
                  activeIndex === i 
                  ? 'w-8 h-2 bg-[#d3a12a]' 
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Subtle percentage text for modern look */}
          <span className="mt-4 text-[10px] text-[#f5d54e] font-bold tracking-[0.3em] uppercase opacity-40">
            Slide {activeIndex + 1} / 5
          </span>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Collection;