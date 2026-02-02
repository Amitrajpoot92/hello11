import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const reviews = [
  { id: 1, name: "Rahul Singh", location: "Khalilabad", text: "Best taxi service in town. The Innova was super clean and the driver was professional.", rating: 5, color: "from-blue-500/20" },
  { id: 2, name: "Anjali Gupta", location: "Lucknow", text: "I book Hello11 every time I travel to Basti. Always on time and very safe for solo travelers.", rating: 5, color: "from-purple-500/20" },
  { id: 3, name: "Mohd. Zaid", location: "Gorakhpur", text: "Highly recommended for outstation trips. Affordable rates and no hidden charges.", rating: 5, color: "from-green-500/20" },
  { id: 4, name: "Vicky Khanna", location: "Basti", text: "Elite experience indeed. The booking process was seamless and the car arrived exactly on time.", rating: 5, color: "from-orange-500/20" },
  { id: 5, name: "Sana Khan", location: "Khalilabad", text: "Safe and reliable. The driver was very polite and knew all the short routes.", rating: 5, color: "from-pink-500/20" },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  
  // Progress bar logic
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-black py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-2">Wall of Fame</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
            Elite <span className="text-yellow-400">Feedback</span>
          </h3>
        </div>
        
        {/* Scroll Hint */}
        <div className="flex items-center gap-3 text-white/30 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
          Drag to explore <ChevronRight size={14} className="animate-pulse" />
        </div>
      </div>

      {/* Draggable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-[10%] pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reviews.map((rev, index) => (
          <motion.div 
            key={index}
            className="w-[85vw] md:w-[450px] flex-shrink-0 relative group"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="h-full bg-[#0c0c0c] p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-500 group-hover:border-yellow-400/30">
              
              {/* Neon Glow on Hover */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${rev.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-3xl`} />

              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-yellow-400/10 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic mb-10 relative z-10 group-hover:text-gray-200 transition-colors">
                "{rev.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-black">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-black text-md italic uppercase tracking-wider">{rev.name}</h4>
                  <p className="text-yellow-400/60 text-[10px] font-bold uppercase tracking-[0.2em]">{rev.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Progress Indicator */}
      <div className="container mx-auto px-6 mt-4 max-w-xs">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-yellow-400 origin-left"
            style={{ scaleX }}
          />
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials;