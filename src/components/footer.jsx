import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Twitter, ShieldCheck, ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const wpNumber = "8873873269";

  // Social Media Redirection Logic
  const socialLinks = {
    instagram: "", 
    facebook: "",  
    twitter: ""    
  };

  const handleSocialClick = (platform) => {
    const url = socialLinks[platform];
    if (url) window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-32 md:pb-12 border-t border-[#d3a12a]/30 relative overflow-hidden">
      
      {/* Background Decor for Mobile Feel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d3a12a]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-[#d3a12a] text-2xl font-serif font-bold mb-4 uppercase tracking-tighter">
              Shree Laxmi <span className="text-white block md:inline">Jewellers & Sons</span>
            </h2>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Defining purity and heritage since 1996. Every piece tells a story of craftsmanship.
            </p>
            
            {/* Social Icons - Bigger Touch Targets for Mobile */}
            <div className="flex justify-center md:justify-start gap-5">
              {['instagram', 'facebook', 'twitter'].map((platform) => (
                <button 
                  key={platform}
                  onClick={() => handleSocialClick(platform)}
                  className="w-12 h-12 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center hover:bg-[#d3a12a] hover:text-[#1a1a1a] transition-all duration-300 active:scale-90"
                >
                  {platform === 'instagram' && <Instagram size={20} />}
                  {platform === 'facebook' && <Facebook size={20} />}
                  {platform === 'twitter' && <Twitter size={20} />}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Navigation - Mobile Accordion Style feel */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:col-span-2">
            <div className="text-left">
              <h3 className="text-[#f5d54e] font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navigation</h3>
              <ul className="space-y-4 text-gray-300 text-[11px] font-bold tracking-widest uppercase">
                <li><button onClick={() => navigate('/')} className="flex items-center gap-2 hover:text-[#d3a12a] transition-all"><ChevronRight size={10} className="text-[#d3a12a]"/> Home</button></li>
                <li><button onClick={() => navigate('/signature')} className="flex items-center gap-2 hover:text-[#d3a12a] transition-all"><ChevronRight size={10} className="text-[#d3a12a]"/> Signature</button></li>
                <li><button onClick={() => navigate('/collections')} className="flex items-center gap-2 hover:text-[#d3a12a] transition-all"><ChevronRight size={10} className="text-[#d3a12a]"/> Collection</button></li>
                <li><button onClick={() => navigate('/about')} className="flex items-center gap-2 hover:text-[#d3a12a] transition-all"><ChevronRight size={10} className="text-[#d3a12a]"/> About</button></li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-[#f5d54e] font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Legal</h3>
              <ul className="space-y-4 text-gray-400 text-[11px] uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-all">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-all">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-all">Returns</a></li>
              </ul>
            </div>
          </div>

          {/* 3. Contact Card - ADVANCED PHONE VIEW */}
          <div className="bg-gradient-to-br from-[#0f2d2a] to-[#071a18] p-8 rounded-[2.5rem] border border-[#d3a12a]/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 p-4 opacity-5 rotate-12">
               <ShieldCheck size={120} className="text-white" />
            </div>
            
            <h3 className="text-[#f5d54e] font-bold mb-6 text-[10px] uppercase tracking-widest text-left">Visit Our Store</h3>
            
            <div className="space-y-6 relative z-10 text-left">
              {/* Address */}
              <div className="flex items-start gap-4 text-gray-300 group/loc">
                <div className="w-8 h-8 rounded-full bg-[#d3a12a]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#d3a12a]" size={16} />
                </div>
                <p className="text-[11px] leading-relaxed group-hover:text-white transition-colors">
                  Mandir Road, Mairwa <br/> Siwan (Bihar) - 841239
                </p>
              </div>

              {/* Click-to-Call Feature */}
              <a 
                href={`tel:+91${wpNumber}`} 
                className="flex items-center gap-4 text-gray-300 group/phone active:scale-95 transition-transform"
              >
                <div className="w-8 h-8 rounded-full bg-[#0b9c42]/20 flex items-center justify-center shrink-0 animate-pulse">
                  <Phone className="text-[#0b9c42]" size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-black tracking-widest">+91 {wpNumber.slice(0,5)} {wpNumber.slice(5)}</p>
                  <p className="text-[8px] text-[#0b9c42] uppercase font-bold tracking-tighter">Tap to call now</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f5d54e] animate-ping"></div>
                <span className="text-[9px] font-bold text-[#f5d54e] uppercase tracking-widest">BIS 916 Hallmarked Store</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. Bottom Branding Area */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-8">
          
          <div className="text-center space-y-2">
            <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Shree Laxmi Jewellers.
            </p>
          </div>

          {/* Highlighted CodeWebX Logo Section */}
          <a 
            href="https://www.codewebx.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex flex-col items-center p-4 rounded-3xl transition-all duration-500"
          >
            <span className="text-[8px] text-yellow-500 uppercase tracking-[0.5em] mb-2 group-hover:text-[#d3a12a] transition-colors">Developed & Managed By</span>
            <div className="flex items-center gap-2 bg-white/[0.03] px-6 py-3 rounded-2xl border border-white/5 group-hover:border-[#d3a12a]/30 group-hover:bg-[#d3a12a]/5 transition-all">
               <span className="text-white font-black text-lg tracking-tighter group-hover:text-[#d3a12a] transition-colors italic">CODEWEBX</span>
               <div className="w-1.5 h-1.5 rounded-full bg-[#d3a12a] shadow-[0_0_10px_#d3a12a]"></div>
               <ExternalLink size={12} className="text-gray-700 group-hover:text-white ml-2" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;