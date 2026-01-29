 import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-28 md:pb-10 border-t border-[#d3a12a]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* 1. Brand Identity */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-[#d3a12a] text-2xl font-serif font-bold mb-6 uppercase tracking-[0.2em]">
              Jewel<span className="text-white">Craft</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Serving brilliance since 1996. We specialize in handcrafted heritage jewelry and bespoke bridal collections.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d3a12a] hover:text-[#1a1a1a] transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#f5d54e] font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#collection" className="hover:text-[#d3a12a] transition-colors">Collections</a></li>
              <li><a href="#rates" className="hover:text-[#d3a12a] transition-colors">Live Rates</a></li>
              <li><a href="#" className="hover:text-[#d3a12a] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 3. Support */}
          <div className="text-center md:text-left">
            <h3 className="text-[#f5d54e] font-bold uppercase tracking-widest text-xs mb-8">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#d3a12a] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#d3a12a] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#d3a12a] transition-colors">Care Guide</a></li>
            </ul>
          </div>

          {/* 4. Contact Box with New Green #0f2d2a */}
          <div className="bg-[#0f2d2a] p-8 rounded-[2rem] border border-[#d3a12a]/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <ShieldCheck size={80} className="text-white" />
            </div>
            
            <h3 className="text-[#f5d54e] font-bold mb-6 text-sm uppercase tracking-widest">Visit Us</h3>
            
            <div className="space-y-4 relative z-10 text-left">
              <div className="flex items-start gap-4 text-gray-300">
                <MapPin className="text-[#d3a12a] shrink-0" size={18} />
                <p className="text-xs">401 Diamond Tower, Bandra West, Mumbai 400050</p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-[#d3a12a] shrink-0" size={18} />
                <p className="text-xs">+91 99887 76655</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] font-bold text-[#f5d54e] uppercase tracking-[0.2em] flex items-center gap-2">
                <ShieldCheck size={14} /> BIS 916 Hallmarked
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} JewelCraft. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Powered by</span>
            <span className="text-[#d3a12a] font-bold text-xs uppercase tracking-tighter">CodeWebX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;