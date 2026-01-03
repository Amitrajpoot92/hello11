 import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Zap, GraduationCap, 
  Package, Bell, Search, Cpu
} from 'lucide-react';

// COMPONENTS IMPORT
import Overview from '../components/Dashboard/Overview'; // <--- NEW IMPORT
import TalentAcquisition from '../components/Dashboard/TalentAcquisition';
import ServiceOperations from '../components/Dashboard/ServiceOperations';
import AcademicPartners from '../components/Dashboard/AcademicPartners';
import ProductEcosystem from '../components/Dashboard/ProductEcosystem';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const menuItems = [
    { id: 'Overview', name: 'Command Center', icon: LayoutDashboard },
    { id: 'HR', name: 'Talent Acquisition', icon: Users },
    { id: 'Services', name: 'Service Operations', icon: Zap },
    { id: 'Collab', name: 'Academic Partners', icon: GraduationCap },
    { id: 'Products', name: 'Product Ecosystem', icon: Package },
  ];

  const renderView = () => {
    switch(activeTab) {
      case 'Overview': return <Overview />; // <--- USING COMPONENT NOW
      case 'HR': return <TalentAcquisition />;
      case 'Services': return <ServiceOperations />;
      case 'Collab': return <AcademicPartners />;
      case 'Products': return <ProductEcosystem />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans relative">
      {/* Background Dynamics */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#05e823]/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* SIDEBAR */}
      <aside className="w-72 bg-white/[0.01] backdrop-blur-3xl border-r border-white/5 flex flex-col z-30 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="p-8">
          <div className="flex items-center gap-3 group">
            <div className="h-12 w-12 bg-black border border-[#05e823]/40 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(5,232,35,0.2)]">
              <Cpu className="text-[#05e823]" size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic leading-none">CodeWebX</h2>
              <p className="text-[9px] text-[#05e823] font-bold tracking-[0.3em] mt-1">CORE_KERNEL_v4</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-8 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                activeTab === item.id 
                ? 'bg-[#05e823]/10 text-white border border-[#05e823]/20 shadow-[0_0_20px_rgba(5,232,35,0.05)]' 
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              <item.icon size={20} className={activeTab === item.id ? 'text-[#05e823]' : 'group-hover:text-[#05e823] transition-colors'} />
              <span className="font-black text-[10px] uppercase tracking-wider text-left">{item.name}</span>
              {activeTab === item.id && (
                <div className="absolute right-0 w-1.5 h-6 bg-[#05e823] rounded-l-full shadow-[0_0_15px_#05e823]"></div>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTENT ENGINE */}
      <div className="flex-1 flex flex-col relative z-20 overflow-hidden">
        <header className="h-24 flex items-center justify-between px-12 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl focus-within:border-[#05e823]/40 transition-all duration-500">
            <Search size={18} className="text-slate-500" />
            <input type="text" placeholder="QUERY_SYSTEM..." className="bg-transparent border-none focus:ring-0 text-xs w-64 text-[#05e823] font-mono" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 bg-black/40 p-1.5 pr-6 border border-white/5 rounded-2xl">
              <div className="h-10 w-10 bg-[#05e823] rounded-xl flex items-center justify-center font-black text-black">AS</div>
              <div className="hidden sm:block text-right">
                <p className="text-xs font-black text-white leading-none uppercase">Amit Singh</p>
                <p className="text-[9px] text-[#05e823] font-bold uppercase mt-1 italic tracking-tighter">Root_Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-12 pb-12">
          <div className="max-w-7xl mx-auto pt-4">
            <div className="mb-12">
               <span className="text-[10px] font-black text-[#05e823]/50 tracking-[0.5em] uppercase italic">System_Path: root/{activeTab}</span>
               <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl">
                 {activeTab === 'Overview' ? 'Command_Center' : activeTab.replace(' ', '_')}
               </h1>
            </div>
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;