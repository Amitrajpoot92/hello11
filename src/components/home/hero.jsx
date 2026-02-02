import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar, Search } from 'lucide-react';
import bgVideo from '../../assets/cars/bgcar.mp4';

const Hero = () => {
  return (
    <section className="relative min-h-screen md:h-screen w-full bg-[#0a0a0a] flex items-center overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#fbbf2415_0%,transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* --- LEFT SIDE: Content & Chat (Desktop) | Bottom (Mobile) --- */}
          {/* Mobile Order: 3 */}
          <div className="w-full lg:w-1/2 order-3 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 mb-6 text-[11px] font-black tracking-[0.3em] text-black uppercase bg-yellow-400 rounded-sm">
              Elite Transport
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase italic tracking-tighter mb-6">
              Duri Pata <br /> 
              <span className="text-yellow-400">Na Chale</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
              Premium Khalilabad taxi service. Your comfort is our priority, every single mile.
            </p>

            {/* Chat/Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/91XXXXXXXXXX"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-black hover:scale-105 transition-all shadow-xl"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all"
              >
                <Phone size={20} className="text-yellow-400" />
                Quick Call
              </a>
            </div>
          </div>

          {/* --- RIGHT SIDE: Search & Video --- */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 order-1 lg:order-2">
            
            {/* 1. Search Bar / Booking Card (Mobile Order: 1) */}
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl order-1">
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Pickup Location" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <button className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg uppercase tracking-wider">
                  Find Best Ride
                </button>
              </div>
            </div>

            {/* 2. Video Frame (Mobile Order: 2) */}
            <div className="relative w-full aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={bgVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" /> Live Fleet
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;