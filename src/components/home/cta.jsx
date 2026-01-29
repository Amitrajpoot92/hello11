import React from 'react';
import { MessageCircle, Gem, Sparkles, PenTool } from 'lucide-react';

const CTA = () => {
  // WhatsApp Logic
  const handleWhatsAppClick = () => {
    const phoneNumber = "8873873269";
    const message = "Hello Sri Lakshmi Jewellers  Team, I am interested in a private consultation for a better jewelry piece. Please guide me through the process.";
    
    // URL encoding the message to handle spaces and special characters
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto relative group">
        
        {/* --- LUXURY BORDER DECORATION (Desktop Only) --- */}
        <div className="absolute -inset-4 border border-[#d3a12a]/20 rounded-[4rem] -z-10 group-hover:scale-[1.02] transition-transform duration-700"></div>

        <div className="bg-[#0f2d2a] rounded-[3.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,45,42,0.3)] border border-white/5">
          
          {/* --- AMBIENT GOLDEN LIGHTING --- */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d3a12a]/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#d3a12a]/5 rounded-full blur-[120px]"></div>

          {/* --- DECORATIVE ICONS --- */}
          <div className="absolute top-12 left-12 opacity-10 hidden md:block rotate-12">
            <PenTool size={100} className="text-white" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Exclusive Badge */}
            <div className="flex justify-center mb-8">
              <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#d3a12a]/30 bg-[#d3a12a]/10 text-[#f5d54e] text-[10px] font-bold tracking-[0.4em] uppercase backdrop-blur-md">
                <Sparkles size={12} /> Bespoke Experience
              </span>
            </div>

            <h2 className="text-white text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">
              Your Vision, <br /> 
              <span className="italic text-[#f5d54e]">Our Craftsmanship</span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Collaborate with our head artisans to transform your personal story into a <span className="text-white font-medium">one-of-a-kind</span> jewelry piece. From sketch to 3D render, we define excellence.
            </p>

            {/* --- THE SIGNATURE WHATSAPP BUTTON (With Logic) --- */}
            <button 
              onClick={handleWhatsAppClick}
              className="relative group/btn inline-flex flex-col md:flex-row items-center gap-4 bg-[#d3a12a] text-[#0f2d2a] px-8 md:px-12 py-5 rounded-[2rem] md:rounded-full font-bold text-base md:text-lg hover:bg-[#f5d54e] transition-all duration-500 shadow-[0_20px_40px_rgba(211,161,42,0.2)] active:scale-95"
            >
              <div className="bg-[#0f2d2a] text-white p-2 rounded-full group-hover/btn:rotate-[360deg] transition-transform duration-700">
                <MessageCircle size={20} fill="white" />
              </div>
              <span className="tracking-tight">REQUEST PRIVATE CONSULTATION</span>
            </button>

            {/* Subtle trust text */}
            <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">
              Priority design support included
            </p>
          </div>

          {/* Background Gem Logo */}
          <div className="absolute bottom-10 right-10 opacity-5">
            <Gem size={180} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;