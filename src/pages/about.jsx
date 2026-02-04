import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award } from 'lucide-react';

// --- IMAGE IMPORT ---
import ownerImg from '../assets/owner/owner.webp';

const About = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-20 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Story Section & Owner Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          
          {/* LEFT: Text Content - High Z-Index to stay on top */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-20 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <div className="h-[2px] w-8 bg-yellow-500"></div>
              <h2 className="text-yellow-600 font-bold uppercase tracking-[0.4em] text-[10px]">Our Legacy</h2>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black italic uppercase tracking-tighter leading-[0.9] text-center lg:text-left">
              BORN IN <br /> <span className="text-yellow-500">KHALILABAD</span>
            </h1>
            <p className="text-gray-500 mt-8 text-lg md:text-xl leading-relaxed italic text-center lg:text-left max-w-xl">
              "Hello11 is not just a taxi service; it's a promise of safety and punctuality that started in the heart of Sant Kabir Nagar."
            </p>
          </motion.div>
          
          {/* RIGHT: Owner Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 order-1 lg:order-2"
          >
            {/* Image Frame with Yellow Border */}
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-white border-2 border-yellow-400 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden group shadow-2xl">
              <img 
                src={ownerImg} 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Hello11 Owner" 
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="text-white font-black italic text-3xl md:text-5xl leading-none">10+ YEARS</p>
                <p className="text-yellow-400 font-bold tracking-widest text-[9px] md:text-[10px] uppercase mt-1">Of Trust in UP & Bihar</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <ShieldCheck className="text-black" />, title: "Safety First", desc: "Every driver is background verified and trained for long routes." },
            { icon: <Target className="text-black" />, title: "Precision", desc: "We value your time. 99% of our rides arrive 5 mins before time." },
            { icon: <Award className="text-black" />, title: "Elite Quality", desc: "From smell to comfort, every car passes a 20-point check daily." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 border-yellow-400 shadow-lg flex flex-col items-center text-center group transition-all"
            >
              <div className="mb-6 p-4 bg-yellow-400 rounded-2xl group-hover:bg-black group-hover:text-yellow-400 transition-colors shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-black italic uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center p-8 md:p-16 border-2 border-yellow-400 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <p className="text-gray-600 font-medium text-xl md:text-3xl max-w-3xl mx-auto leading-tight uppercase tracking-tighter italic relative z-10">
            "Our mission is to make premium travel <span className="text-black font-black underline decoration-yellow-400 decoration-4 underline-offset-8">affordable</span> for every family in Khalilabad."
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;