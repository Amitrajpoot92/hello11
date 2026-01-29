import React from 'react';
import { Award, History, Users, ShieldCheck, Heart, Sparkles } from 'lucide-react';
// Sahi path se image import karein
import ownerImg from '../assets/owner/owner.webp'; 

const About = () => {
  const stats = [
    { label: "Years of Legacy", value: "30+", icon: <History size={20} /> },
    { label: "Happy Clients", value: "10K+", icon: <Users size={20} /> },
    { label: "Master Artisans", value: "50+", icon: <Sparkles size={20} /> },
    { label: "Store Locations", value: "03", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      
      {/* --- HERO SECTION: THE PHILOSOPHY --- */}
      <section className="relative pt-32 pb-20 px-6 bg-[#0f2d2a] overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
           <h2 className="text-[20vw] font-serif font-black uppercase leading-none">Heritage</h2>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#f5d54e] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Established 1996</span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">
            The Soul of <br/> <span className="italic text-[#f5d54e]">JewelCraft</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Humara vishwas hai ki har gehna ek kahani sunata hai. Teen dashako se humne shuddhata aur vishwas ki parampara ko banaye rakha hai.
          </p>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 text-center group hover:bg-[#0f2d2a] transition-all duration-500">
              <div className="text-[#d3a12a] mb-4 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-3xl font-black text-[#1a1a1a] group-hover:text-white transition-colors">{stat.value}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 group-hover:text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- THE FOUNDER'S JOURNEY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 border border-[#d3a12a]/20 rounded-[3rem] rotate-3 -z-10"></div>
             <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src={ownerImg} alt="Mr. Rajesh Sharma" className="w-full h-auto object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-[#d3a12a] p-6 rounded-3xl shadow-xl hidden md:block">
                <Award size={40} className="text-[#0f2d2a]" />
             </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-tight">
              A Legacy Crafted by <br/> <span className="italic text-[#0f2d2a]">Rajesh Sharma</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                1996 mein ek choti si workshop se shuru hua ye safar, aaj vishwas ka doosra naam ban gaya hai. Rajesh Sharma ji ka manna hai ki jewelry sirf ek metal nahi, balki emotions ka ek hissa hai.
              </p>
              <p>
                Unke netritva mein JewelCraft ne hamesha **BIS Hallmarked** gold aur certified stones ki purity ko priority di hai, taaki aapka har investment surakshit rahe.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-6">
               <div className="h-[1px] w-20 bg-[#d3a12a]"></div>
               <span className="font-serif text-2xl italic text-[#0f2d2a]">Rajesh Sharma</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CORE VALUES (MODERN GRID) --- */}
      <section className="py-20 bg-[#0f2d2a] rounded-[4rem] mx-4 md:mx-10 px-8 md:px-20 relative overflow-hidden text-white">
        <div className="absolute bottom-0 right-0 p-20 opacity-5 rotate-12">
           <Heart size={300} fill="white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-serif mb-4">The Pillars of <span className="italic text-[#f5d54e]">Excellence</span></h2>
             <p className="text-white/40 uppercase tracking-widest text-xs">Commitments that define us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Transparency", desc: "Har transaction aur billing mein 100% shuddhata aur clarity.", icon: <ShieldCheck /> },
              { title: "Artisanship", desc: "Humaray karigar purani paramparaon ko modern design ke sath jodte hain.", icon: <Sparkles /> },
              { title: "Customization", desc: "Aapke sapno ko 3D design ke zariye reality mein badalna.", icon: <Heart /> }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-[#f5d54e]">{value.icon}</div>
                <h4 className="text-2xl font-serif">{value.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH PARTNERSHIP (CODEWEBX) --- */}
      <section className="py-20 text-center px-6">
         <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] mb-4 font-bold">Digital Innovation Partner</p>
         <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-widest">
           JEWELCRAFT <span className="text-[#d3a12a]">×</span> CODEWEBX
         </h3>
         <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto italic">
           Combining 30 years of offline trust with cutting-edge digital experiences for the modern era.
         </p>
      </section>

    </div>
  );
};

export default About;