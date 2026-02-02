 import React from 'react';
import { Shield, Zap, Clock, Star, MapPin, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: <Shield size={24} />, 
    title: "Maximum Safety", 
    desc: "Real-time GPS Tracking", 
    gradient: "from-blue-600 to-cyan-400", 
    shadow: "shadow-blue-500/20" 
  },
  { 
    icon: <Zap size={24} />, 
    title: "Instant Pickup", 
    desc: "Zero Waiting Time", 
    gradient: "from-yellow-500 to-orange-400", 
    shadow: "shadow-yellow-500/20" 
  },
  { 
    icon: <Clock size={24} />, 
    title: "24/7 Availability", 
    desc: "Day & Night Service", 
    gradient: "from-green-500 to-emerald-400", 
    shadow: "shadow-green-500/20" 
  },
  { 
    icon: <Star size={24} />, 
    title: "Premium Fleet", 
    desc: "Luxury & Comfort", 
    gradient: "from-purple-600 to-pink-500", 
    shadow: "shadow-purple-500/20" 
  },
  { 
    icon: <MapPin size={24} />, 
    title: "Global Reach", 
    desc: "Local & Outstation", 
    gradient: "from-red-600 to-rose-400", 
    shadow: "shadow-red-500/20" 
  },
  { 
    icon: <Smartphone size={24} />, 
    title: "Smart Booking", 
    desc: "One Tap Connection", 
    gradient: "from-indigo-600 to-violet-400", 
    shadow: "shadow-indigo-500/20" 
  },
];

const Features = () => {
  return (
    <section className="bg-black py-10 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        {/* Compact Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Elite Standards</h2>
            <h3 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
              Why Choose <span className="text-yellow-400">Us?</span>
            </h3>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent ml-6 hidden md:block"></div>
        </div>

        {/* Multi-Color Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className={`relative group p-4 md:p-6 rounded-[1.5rem] bg-[#0c0c0c] border border-white/5 overflow-hidden transition-all duration-300 ${item.shadow} hover:shadow-2xl`}
            >
              {/* Subtle Background Gradient Glow */}
              <div className={`absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />

              {/* Icon with Dynamic Gradient */}
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              {/* Content - Sharp & Professional */}
              <h4 className="text-white font-black text-sm md:text-lg italic uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-widest mt-0.5">
                {item.desc}
              </p>
              
              {/* Animated Progress Line */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;