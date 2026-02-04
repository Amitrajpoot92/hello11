import React, { useRef } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const reviews = [
  { id: 1, name: "Rahul Singh", location: "Khalilabad", text: "Best taxi service in town. The Innova was super clean and the driver was professional.", rating: 5, color: "from-yellow-400/20" },
  { id: 2, name: "Anjali Gupta", location: "Lucknow", text: "I book Hello11 every time I travel to Basti. Always on time and very safe for solo travelers.", rating: 5, color: "from-yellow-400/20" },
  { id: 3, name: "Mohd. Zaid", location: "Gorakhpur", text: "Highly recommended for outstation trips. Affordable rates and no hidden charges.", rating: 5, color: "from-yellow-400/20" },
  { id: 4, name: "Vicky Khanna", location: "Basti", text: "Elite experience indeed. The booking process was seamless and the car arrived exactly on time.", rating: 5, color: "from-yellow-400/20" },
  { id: 5, name: "Sana Khan", location: "Khalilabad", text: "Safe and reliable. The driver was very polite and knew all the short routes.", rating: 5, color: "from-yellow-400/20" },
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
    <section className="bg-white py-10 md:py-24 overflow-hidden relative">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto px-6 mb-8 md:mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1 md:mb-2">
            <div className="h-[2px] w-8 md:w-12 bg-black"></div>
            <h2 className="text-black font-bold uppercase tracking-[0.4em] text-[10px]">Wall of Fame</h2>
          </div>
          <h3 className="text-3xl md:text-6xl font-black text-black italic uppercase tracking-tighter">
            Elite <span className="text-yellow-500 underline decoration-black decoration-4">Feedback</span>
          </h3>
        </div>
        
        {/* Scroll Hint */}
        <div className="flex w-fit items-center gap-3 text-black/40 text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
          Swipe <ChevronRight size={14} className="text-yellow-500 animate-pulse" />
        </div>
      </div>

      {/* Draggable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-5 md:gap-8 px-6 md:px-[10%] pb-8 md:pb-12 no-scrollbar cursor-grab active:cursor-grabbing relative z-10"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reviews.map((rev, index) => (
          <motion.div 
            key={index}
            className="w-[85vw] md:w-[450px] flex-shrink-0 relative group"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Card Body - Black with Yellow Accents */}
            <div className="h-full bg-black p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
              
              {/* Subtle Yellow Corner Glow */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <Quote className="absolute top-6 right-6 md:top-10 md:right-10 text-white/10 group-hover:text-yellow-400/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6 md:mb-8 relative z-10">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-base md:text-xl leading-relaxed italic mb-8 md:mb-12 relative z-10 font-medium">
                "{rev.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-black font-black text-lg md:text-xl shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-black text-sm md:text-lg italic uppercase tracking-wider leading-none mb-1">{rev.name}</h4>
                  <p className="text-yellow-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{rev.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Progress Indicator */}
      <div className="container mx-auto px-6 mt-2 md:mt-6 max-w-[200px] md:max-w-sm">
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-black origin-left"
            style={{ scaleX }}
          />
        </div>
      </div>

      {/* Global CSS for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Testimonials;