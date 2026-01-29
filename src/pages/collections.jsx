import React, { useState } from 'react';
import { 
  Filter, 
  SlidersHorizontal, 
  ChevronRight, 
  Heart, 
  ShoppingBag, 
  Search, 
  Star 
} from 'lucide-react';
import collectionImg from '../assets/collection/collection.png';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Bridal', 'Diamonds', 'Antique Gold', 'Daily Wear', 'Polki'];

  // Mock data with different categories to test filtering
  const allProducts = [
    { id: 1, name: "Royal Heritage Choker", price: "₹8,50,000", category: "Bridal", img: collectionImg, tag: "Trending" },
    { id: 2, name: "Diamond Solitaire Ring", price: "₹2,10,000", category: "Diamonds", img: collectionImg, tag: "New" },
    { id: 3, name: "Temple Gold Jhumkas", price: "₹1,45,000", category: "Antique Gold", img: collectionImg, tag: "Classic" },
    { id: 4, name: "Daily Diamond Studs", price: "₹45,000", category: "Daily Wear", img: collectionImg, tag: "Best Seller" },
    { id: 5, name: "Polki Necklace Set", price: "₹5,20,000", category: "Polki", img: collectionImg, tag: "Exclusive" },
    { id: 6, name: "Bridal Bangles Set", price: "₹3,75,000", category: "Bridal", img: collectionImg, tag: "Trending" },
  ];

  // Logic: Filter products based on category and search text
  const filteredProducts = allProducts.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-32 md:pb-12">
      
      {/* --- PAGE HEADER --- */}
      <section className="relative pt-20 pb-12 px-6 bg-[#0f2d2a] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d3a12a]/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-[#f5d54e]">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">The Vault</span>
            <div className="h-[1px] w-8 bg-[#d3a12a]/40"></div>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">
            Our <span className="italic text-[#f5d54e]">Collections</span>
          </h1>
          
          <div className="relative max-w-md mx-auto md:mx-0">
            <input 
              type="text" 
              placeholder="Search masterpieces..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 backdrop-blur-md focus:outline-none focus:border-[#d3a12a]/50 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          </div>
        </div>
      </section>

      {/* --- CATEGORY FILTER --- */}
      <div className="sticky top-20 z-40 bg-[#faf9f6]/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="bg-[#0f2d2a] text-white p-3 rounded-xl shrink-0">
            <SlidersHorizontal size={20} />
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-[#d3a12a] text-[#0f2d2a] shadow-lg shadow-[#d3a12a]/20' 
                : 'bg-white text-gray-400 border border-gray-100 hover:border-[#d3a12a]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-gray-50 mb-6">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] shadow-lg hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>

                  <div className="absolute top-6 left-6">
                    <span className="bg-[#0f2d2a] text-[#f5d54e] text-[8px] font-bold px-3 py-1.5 rounded-full tracking-[0.2em] uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-[#0f2d2a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <button className="w-full bg-white text-[#0f2d2a] py-4 rounded-2xl font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                       <ShoppingBag size={14} /> Quick View
                     </button>
                  </div>
                </div>

                <div className="space-y-2 px-2 text-center md:text-left">
                  <div className="flex justify-between items-center text-[10px] font-bold text-[#d3a12a] uppercase tracking-[0.2em]">
                    <span>{item.category}</span>
                    <div className="flex">
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-[#1a1a1a] group-hover:text-[#0f2d2a] transition-colors">{item.name}</h3>
                  <p className="text-2xl font-black text-[#0f2d2a] tracking-tighter">{item.price}</p>
                  
                  <button className="w-full md:hidden bg-[#0f2d2a] text-white py-4 rounded-2xl mt-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform">
                     <ShoppingBag size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 font-serif italic text-xl">No masterpieces found in this category...</p>
          </div>
        )}

        <div className="mt-20 text-center">
           <button className="border-b-2 border-[#d3a12a] pb-2 text-[#1a1a1a] font-bold tracking-[0.3em] text-xs hover:text-[#d3a12a] transition-all uppercase">
             Discover More Pieces
           </button>
        </div>
      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Collections;