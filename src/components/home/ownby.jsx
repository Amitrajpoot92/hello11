import React from 'react';
import { ShieldCheck, Award, Quote, Instagram, Linkedin, Star } from 'lucide-react';
// Sahi path se image import karein
import ownerImg from '../../assets/owner/owner.webp'; 

const OwnBy = () => {
  return (
    <section className="py-20 px-4 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative Background Glow */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#d3a12a]/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative z-10 group">
            {/* Image Frame with New Green Shadow on Hover */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] md:border-[12px] border-white shadow-2xl transition-all duration-700 group-hover:shadow-[#0f2d2a]/20">
              <img 
                src={ownerImg} 
                className="w-full h-[400px] md:h-[600px] object-cover object-top transition-all duration-1000" 
                alt="Rajesh Sharma - Owner" 
              />
              
              {/* Mobile Info Overlay - Using New #0f2d2a */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d2a]/95 via-[#0f2d2a]/20 to-transparent flex flex-col justify-end p-6 md:hidden">
                 <h3 className="text-[#f5d54e] text-2xl font-serif">Mr. Rajesh Sharma</h3>
                 <p className="text-white/80 text-sm tracking-widest uppercase font-medium">Founder & Visionary</p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-8 -right-4 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 hidden sm:block border-b-4 border-[#d3a12a]">
               <div className="flex items-center gap-4">
                  <div className="bg-[#0f2d2a] text-[#f5d54e] w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-[#0f2d2a]/30">30</div>
                  <div>
                    <p className="text-[#1a1a1a] font-bold leading-tight">Years of <br/> Legacy</p>
                    <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-[#d3a12a] fill-[#d3a12a]" />)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full lg:w-1/2 space-y-8 mt-10 lg:mt-0 text-center lg:text-left">
          {/* Badge with New Green Background */}
          <div className="inline-flex items-center gap-3 bg-[#0f2d2a]/5 px-4 py-2 rounded-full border border-[#0f2d2a]/10">
             <div className="w-2 h-2 rounded-full bg-[#d3a12a] animate-ping"></div>
             <span className="text-[#0f2d2a] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">The Heart of JewelCraft</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#1a1a1a]">
            Crafting Dreams into <br/> 
            <span className="italic text-[#0f2d2a]">Golden Reality</span>
          </h2>
          
          <div className="relative">
            <Quote className="absolute -top-4 -left-2 text-[#d3a12a]/20 w-12 h-12 rotate-180" />
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic pl-6 relative z-10">
              "Humara vishwas hai ki har gehna ek kahani sunata hai. 1996 se Rajesh Sharma ke netritva mein humne shuddhata aur vishwas ki parampara ko banaye rakha hai."
            </p>
          </div>

          {/* Trust Certifications - Using New Green for Icons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
               <ShieldCheck className="text-[#0f2d2a]" size={20}/>
               <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider text-[#1a1a1a]">BIS 916 Pure</span>
             </div>
             <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
               <Award className="text-[#0f2d2a]" size={20}/>
               <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider text-[#1a1a1a]">IGI Certified</span>
             </div>
          </div>

          {/* Footer of Section */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100">
            <div className="text-center md:text-left">
               <p className="text-[#1a1a1a] font-serif text-3xl">Rajesh Sharma</p>
               <p className="text-[#d3a12a] text-xs font-bold uppercase tracking-[0.3em] mt-1">Founder & CEO</p>
            </div>
            
            {/* Social Links with New Green Hover */}
            <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-[#0f2d2a] hover:shadow-lg transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-[#0f2d2a] hover:shadow-lg transition-all">
                    <Linkedin size={18} />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnBy;