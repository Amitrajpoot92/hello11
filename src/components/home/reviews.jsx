import React, { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Deshmukh",
      role: "Verified Bride",
      content: "JewelCraft ne meri wedding jewelry ko bilkul waisa hi banaya jaisa maine dream kiya tha. Rajesh ji ka personal involvement aur finishing bemisaal hai!",
      rating: 5,
      date: "Dec 2025"
    },
    {
      name: "Ananya Iyer",
      role: "Regular Client",
      content: "Main pichle 10 salon se yahan se jewelry le rahi hoon. Hallmark purity aur transparency ke maamle mein inka koi muqabla nahi hai. Best in Mumbai!",
      rating: 5,
      date: "Jan 2026"
    },
    {
      name: "Vikram Mehta",
      role: "Gift Purchase",
      content: "Anniversary ke liye maine custom diamond ring banwayi thi. Unhone 3D design pehle dikhaya aur final product usse bhi zyada sundar tha. Highly recommended!",
      rating: 5,
      date: "Nov 2025"
    },
    {
      name: "Sneha Kapoor",
      role: "Engagement",
      content: "The solitaire collection is just breathtaking. Professional staff and very peaceful environment for choosing such important pieces.",
      rating: 5,
      date: "Oct 2025"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-[#0f2d2a] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d3a12a]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d3a12a]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center gap-1 text-[#f5d54e]">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Stories of <span className="italic text-[#f5d54e]">Trust</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
            Real Reviews from our Royal Clients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-12"
          >
            {testimonials.map((rev, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[45%] lg:min-w-[31%] snap-center"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] h-full relative transition-all duration-500 hover:bg-white/10 group/card">
                  
                  {/* Floating Quote Icon */}
                  <div className="absolute -top-5 -right-5 bg-[#d3a12a] text-[#0f2d2a] p-4 rounded-2xl shadow-xl transform rotate-12 group-hover/card:rotate-0 transition-transform duration-500">
                    <Quote fill="currentColor" size={24} />
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/80 text-lg leading-relaxed italic font-light">
                      "{rev.content}"
                    </p>
                    
                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                      <div>
                        <h4 className="text-[#f5d54e] font-serif text-xl font-bold">{rev.name}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">{rev.role}</p>
                      </div>
                      <span className="text-white/20 text-[10px] font-bold">{rev.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dotted Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  activeIndex === i ? 'w-12 bg-[#d3a12a]' : 'w-3 bg-white/20'
                }`}
              />
            ))}
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

export default Reviews;