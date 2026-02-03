import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-32 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 text-center md:text-left">Our Legacy</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none text-center md:text-left">
              BORN IN <br /> <span className="text-yellow-400 text-6xl md:text-8xl">KHALILABAD</span>
            </h1>
            <p className="text-gray-400 mt-8 text-lg leading-relaxed italic text-center md:text-left">
              "Hello11 is not just a taxi service; it's a promise of safety and punctuality that started in the heart of Sant Kabir Nagar."
            </p>
          </motion.div>
          
          <div className="relative">
             <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group">
                <img src="/car4.webp" className="w-full h-full object-contain scale-125 translate-x-10 group-hover:translate-x-0 transition-transform duration-700" alt="About" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                   <p className="text-white font-black italic text-4xl italic">10+ YEARS</p>
                   <p className="text-yellow-400 font-bold tracking-widest text-[10px] uppercase">Of Trust in UP & Bihar</p>
                </div>
             </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="text-yellow-400" />, title: "Safety First", desc: "Every driver is background verified and trained for long routes." },
            { icon: <Target className="text-yellow-400" />, title: "Precision", desc: "We value your time. 99% of our rides arrive 5 mins before time." },
            { icon: <Award className="text-yellow-400" />, title: "Elite Quality", desc: "From smell to comfort, every car passes a 20-point check daily." }
          ].map((item, i) => (
            <div key={i} className="bg-[#0c0c0c] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:border-yellow-400/20 transition-all">
              <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white italic uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-32 text-center p-12 border border-white/5 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent">
           <p className="text-gray-400 font-medium text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed uppercase tracking-tighter italic">
             "Our mission is to make premium travel <span className="text-white font-black underline decoration-yellow-400 underline-offset-8">affordable</span> for every family in Khalilabad."
           </p>
        </div>

      </div>
    </div>
  );
};

export default About;