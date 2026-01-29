 import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Star, Share2, Heart, Sparkles, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bestsellImg from '../assets/bestsell/bestsell.png';

const Signature = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax background text - Reduced range for mobile performance
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const masterpieces = Array(6).fill({
    name: "Royal Polki Choker",
    price: "₹12,50,000",
    desc: "Handcrafted 22K Gold with uncut diamonds and emerald drops. A legacy piece from 1996.",
    img: bestsellImg,
    tag: "Exquisite Heritage"
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#faf9f6] min-h-screen pb-20 overflow-x-hidden"
    >
      {/* --- COMPACT TOP BAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 flex items-center justify-between backdrop-blur-md bg-white/60 border-b border-black/5">
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0f2d2a] text-white shadow-lg"
        >
          <ArrowLeft size={18} />
        </motion.button>
        <div className="text-center">
            <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#0f2d2a]">Signature</h2>
            <div className="h-[1px] w-3 bg-[#d3a12a] mx-auto mt-0.5"></div>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-black/5 shadow-sm">
          <Share2 size={16} className="text-[#0f2d2a]" />
        </motion.button>
      </nav>

      {/* --- ADJUSTED HERO SECTION (No extra white space) --- */}
      <section className="relative min-h-[60vh] md:h-[80vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Parallax Background Text - Adjusted for Mobile View */}
        <motion.div style={{ x: xLeft }} className="absolute top-1/3 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[25vw] md:text-[20vw] font-serif leading-none uppercase italic">Signature Signature Signature</h1>
        </motion.div>
        <motion.div style={{ x: xRight }} className="absolute bottom-1/3 right-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[25vw] md:text-[20vw] font-serif leading-none uppercase">Heritage Heritage Heritage</h1>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center space-y-4 md:space-y-6"
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
             <Sparkles className="text-[#d3a12a]" size={28} />
          </motion.div>
          <h1 className="text-5xl md:text-9xl font-serif text-[#1a1a1a] tracking-tighter leading-none">
            The <span className="italic font-light">Bespoke</span> <br/>
            <span className="text-[#0f2d2a] font-bold uppercase">Gallery</span>
          </h1>
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.5em] font-medium">Curated Masterpieces • Since 1996</p>
        </motion.div>
      </section>

      {/* --- VERTICAL EXHIBITION LIST --- */}
      <main className="max-w-7xl mx-auto px-4 space-y-16 md:space-y-32">
        {masterpieces.map((item, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-24`}
          >
            {/* Image Box */}
            <motion.div 
              variants={fadeInUp}
              className="w-full lg:w-3/5 relative group"
            >
              <div className="absolute -inset-2 md:-inset-4 border border-[#d3a12a]/10 rounded-[2.5rem] md:rounded-[3rem]"></div>
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                  src={item.img} 
                  className="w-full h-full object-cover" 
                  alt={item.name} 
                />
                
                {/* Wishlist Button */}
                <motion.button 
                  whileTap={{ scale: 0.8 }} 
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg text-[#0f2d2a] z-20"
                >
                  <Heart size={20} />
                </motion.button>

                {/* Info Gradient for Mobile */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f2d2a] to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                    <p className="text-2xl font-serif">{item.name}</p>
                    <p className="text-[#f5d54e] font-black text-xl tracking-tighter">{item.price}</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop & Detailed Content */}
            <motion.div 
              variants={fadeInUp}
              className="w-full lg:w-2/5 space-y-6 text-center lg:text-left px-4"
            >
              <div className="hidden lg:block space-y-4">
                <span className="text-[#d3a12a] text-[10px] font-bold uppercase tracking-[0.4em] block">{item.tag}</span>
                <h2 className="text-5xl font-serif text-[#1a1a1a] leading-tight">{item.name}</h2>
              </div>

              <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed italic">
                "{item.desc}"
              </p>

              <div className="hidden lg:flex flex-col gap-1">
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Investment Value</span>
                <span className="text-4xl font-black text-[#0f2d2a] tracking-tighter">{item.price}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="flex-grow bg-[#0f2d2a] text-white py-5 rounded-full font-bold tracking-widest text-[10px] uppercase flex items-center justify-center gap-3 shadow-xl"
                >
                  <ShoppingBag size={16} /> Request Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </main>

      {/* --- MINIMAL FOOTER DECOR --- */}
      <footer className="py-24 text-center px-8 relative">
        <div className="w-px h-20 bg-[#d3a12a]/30 mx-auto mb-8"></div>
        <p className="text-[#0f2d2a] text-sm font-serif italic max-w-xs mx-auto opacity-70 leading-loose">
          "Purity is not an act, it is a habit."
        </p>
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] mt-6 font-bold">JewelCraft Heritage Collection</p>
      </footer>
    </motion.div>
  );
};

export default Signature;