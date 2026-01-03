import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, updateDoc, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, MessageSquare, Calendar, CheckCircle2, 
  X, Users, Code, Palette, Zap, Trash2, 
  GripVertical, Info, ShieldCheck, Fingerprint, Plus, User, Phone, GraduationCap,
  ArrowRight, Eye, Mail, Target, BookOpen, School, Search, ChevronDown
} from 'lucide-react';

export default function TalentAcquisition() {
  const [candidates, setCandidates] = useState([]);
  const [teamsList, setTeamsList] = useState([]);
  const [activeStage, setActiveStage] = useState('Applied'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // name, college, domain
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  // Naya State Candidate Details Modal ke liye
  const [selectedCandidateDetails, setSelectedCandidateDetails] = useState(null);

  // Team Builder & Details State
  const [draggedUser, setDraggedUser] = useState(null);
  const [tempTeam, setTempTeam] = useState({ name: '', type: 'Developers', members: [] });
  const [selectedTeamInfo, setSelectedTeamInfo] = useState(null); 
  const [selectedMemberInfo, setSelectedMemberInfo] = useState(null); 

  const [newCandidate, setNewCandidate] = useState({ name: '', role: '', phone: '', email: '', college: '' });

  useEffect(() => {
    const unsubInterns = onSnapshot(collection(db, "interns"), (snapshot) => {
      setCandidates(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    const unsubTeams = onSnapshot(collection(db, "teams"), (snapshot) => {
      setTeamsList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => { unsubInterns(); unsubTeams(); };
  }, []);

  const updateStatus = async (id, newStatus) => {
    await updateDoc(doc(db, "interns", id), { status: newStatus });
  };

  const handleAddCandidate = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "interns"), {
      ...newCandidate,
      status: 'Applied',
      joinedAt: serverTimestamp(),
      isDeployed: false
    });
    setIsModalOpen(false);
    setNewCandidate({ name: '', role: '', phone: '', email: '', college: '' });
  };

  const sendWhatsApp = (phone, name, status) => {
    let msg = `Hello ${name}, CodeWebX HR team here. Regarding your application status: ${status}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const addToTempTeam = (user, type) => {
    if (tempTeam.members.find(m => m.id === user.id)) return;
    setTempTeam({ ...tempTeam, type: type, members: [...tempTeam.members, user] });
  };

  const removeFromTempTeam = (userId) => {
    setTempTeam({ ...tempTeam, members: tempTeam.members.filter(m => m.id !== userId) });
  };

  const finalizeTeam = async () => {
    if (!tempTeam.name || tempTeam.members.length === 0) return alert("Enter Team Name & Add Members");
    const teamId = `CWX-${Math.floor(1000 + Math.random() * 9000)}`;
    
    await addDoc(collection(db, "teams"), { ...tempTeam, teamId, createdAt: new Date().toISOString() });
    
    for (let member of tempTeam.members) {
      await updateDoc(doc(db, "interns", member.id), { 
        status: 'Deployed', 
        teamId: teamId, 
        isDeployed: true 
      });
    }
    
    setTempTeam({ name: '', type: 'Developers', members: [] });
    setDraggedUser(null);
  };

  const selectedCandidates = candidates.filter(c => c.status === 'Selected' && !c.isDeployed);
  
  // Improved filtering logic for search
  const filteredData = candidates.filter(c => {
    const matchesStage = c.status === activeStage;
    const query = searchQuery.toLowerCase();
    
    if (activeStage === 'Team_Builder') return matchesStage; // No search in team builder

    if (!searchQuery) return matchesStage;

    if (searchType === 'name') {
      return matchesStage && c.name?.toLowerCase().includes(query);
    } else if (searchType === 'college') {
      return matchesStage && c.college?.toLowerCase().includes(query);
    } else if (searchType === 'domain') {
      const domainVal = c.domain || c.role;
      return matchesStage && domainVal?.toLowerCase().includes(query);
    }
    return matchesStage;
  });

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700 pb-20 relative z-10 font-sans">
      
      {/* --- NAVIGATION & HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/[0.02] p-6 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-wrap gap-2">
          {['Applied', 'Interview', 'Selected', 'Team_Builder'].map((stage) => (
            <button
              key={stage}
              onClick={() => {
                setActiveStage(stage);
                setSearchQuery(""); // Clear search on tab switch
              }}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                activeStage === stage 
                ? 'bg-[#05e823] text-black border-[#05e823] shadow-[0_0_20px_rgba(5,232,35,0.4)] scale-105' 
                : 'text-slate-500 border-white/10 hover:border-[#05e823]/50 hover:text-white'
              }`}
            >
              {stage.replace('_', ' ')}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="group bg-white text-black px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl hover:bg-[#05e823] transition-all duration-500"
        >
          <UserPlus size={16} className="group-hover:rotate-12 transition-transform"/> 
          Inject_Candidate
        </button>
      </div>

      {/* --- SEARCH BAR (Hidden in Team Builder) --- */}
      {activeStage !== 'Team_Builder' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 items-center bg-white/[0.01] border border-white/5 p-4 rounded-[2.5rem] backdrop-blur-md"
        >
          {/* Custom Dropdown */}
          <div className="relative min-w-[160px]">
            <button 
              onClick={() => setIsSearchDropdownOpen(!isSearchDropdownOpen)}
              className="w-full flex items-center justify-between gap-3 px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#05e823] hover:border-[#05e823]/50 transition-all"
            >
              {searchType === 'name' ? 'By Name' : searchType === 'college' ? 'By College' : 'By Domain'}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isSearchDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isSearchDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-full bg-[#020617] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                >
                  {['name', 'college', 'domain'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSearchType(type);
                        setIsSearchDropdownOpen(false);
                      }}
                      className="w-full px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-[#05e823] hover:text-black transition-all"
                    >
                      {type}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Input */}
          <div className="flex-1 relative group w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#05e823] transition-colors" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search for ${searchType === 'domain' ? 'MERN, Video Editor...' : searchType}...`}
              className="w-full bg-black/20 border border-white/10 p-5 pl-16 rounded-2xl text-white text-xs font-bold outline-none focus:border-[#05e823]/30 transition-all placeholder:text-slate-800"
            />
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {activeStage !== 'Team_Builder' ? (
          <motion.div 
            key="pipeline" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
          >
            {filteredData.length > 0 ? filteredData.map(c => (
              <div key={c.id} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-[#05e823]/30 shadow-xl">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-black rounded-xl border border-white/10 flex items-center justify-center text-lg font-black text-[#05e823] shadow-inner">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-md font-black text-white italic tracking-tight">{c.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="text-[9px] text-[#05e823] font-bold uppercase tracking-tighter bg-[#05e823]/10 px-2 py-0.5 rounded-md">{c.domain || c.role}</span>
                         <span className="text-[9px] text-slate-500 font-bold uppercase truncate max-w-[100px]">{c.college}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => setSelectedCandidateDetails(c)} className="p-2 bg-[#05e823]/10 text-[#05e823] rounded-lg hover:bg-[#05e823] hover:text-black transition-all">
                      <Eye size={14}/>
                    </button>
                    <button onClick={() => deleteDoc(doc(db, "interns", c.id))} className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={14}/>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button onClick={() => sendWhatsApp(c.phone, c.name, c.status)} className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-[#05e823] border border-white/5 hover:border-[#05e823]/30 transition-all">
                      <MessageSquare size={18}/>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {activeStage === 'Applied' && (
                      <button onClick={() => updateStatus(c.id, 'Interview')} className="flex items-center gap-2 px-4 py-2 bg-white text-black text-[10px] font-black uppercase rounded-xl hover:bg-[#05e823] transition-all shadow-lg shadow-white/5">
                        Move to Interview <ArrowRight size={14}/>
                      </button>
                    )}
                    {activeStage === 'Interview' && (
                      <button onClick={() => updateStatus(c.id, 'Selected')} className="flex items-center gap-2 px-4 py-2 bg-[#05e823] text-black text-[10px] font-black uppercase rounded-xl hover:shadow-[0_0_15px_rgba(5,232,35,0.4)] transition-all">
                        Accept Candidate <CheckCircle2 size={14}/>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[4rem]">
                 <p className="text-slate-600 font-black uppercase tracking-[0.5em] text-xs">No_Candidates_Matching_Filter</p>
              </div>
            )}
          </motion.div>
        ) : (
          /* --- TEAM BUILDER UI --- */
          <motion.div key="builder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* ASSETS BOX */}
              <div className="xl:col-span-3 bg-black/40 border border-white/5 rounded-[3rem] p-8 flex flex-col shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-[#05e823]/10 rounded-lg text-[#05e823]"><Fingerprint size={18}/></div>
                  <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Available_Pool</h3>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 max-h-[600px]">
                  {selectedCandidates.filter(c => !tempTeam.members.find(m => m.id === c.id)).map(c => (
                    <motion.div 
                      drag 
                      dragSnapToOrigin 
                      onDragStart={() => setDraggedUser(c)} 
                      key={c.id} 
                      className="p-4 bg-white/5 border border-white/5 rounded-2xl cursor-grab active:cursor-grabbing hover:bg-white/10 hover:border-[#05e823]/20 transition-all"
                    >
                      <div className="flex items-center gap-3 text-white font-bold italic text-[11px]">
                        <GripVertical size={14} className="text-slate-600"/> {c.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ROLE GRID */}
              <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Developers', 'Designers', 'Marketing', 'Sales'].map(type => (
                  <div 
                    key={type} 
                    onMouseUp={() => draggedUser && addToTempTeam(draggedUser, type)} 
                    className={`relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 min-h-[250px] flex flex-col transition-all duration-500 ${tempTeam.type === type && tempTeam.members.length > 0 ? 'border-[#05e823]/40 bg-[#05e823]/5 shadow-2xl' : ''}`}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4 text-white font-black italic uppercase tracking-tighter text-sm">
                        <div className="p-3 bg-black rounded-2xl border border-white/10 text-[#05e823] shadow-lg">
                          {type === 'Developers' ? <Code size={20}/> : type === 'Designers' ? <Palette size={20}/> : <Zap size={20}/>}
                        </div>
                        {type}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{tempTeam.type === type ? tempTeam.members.length : 0} Members</span>
                    </div>

                    <div className="flex-1 space-y-2 mb-6">
                      {tempTeam.type === type && tempTeam.members.map(m => (
                        <div key={m.id} className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-white/5 animate-in slide-in-from-left-4">
                          <span className="text-xs font-bold text-white italic">{m.name}</span>
                          <button onClick={() => removeFromTempTeam(m.id)} className="text-red-500/50 hover:text-red-500 p-1 transition-all"><X size={14}/></button>
                        </div>
                      ))}
                    </div>

                    {tempTeam.type === type && tempTeam.members.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-white/5">
                        <input 
                          placeholder="CONFIG_TEAM_ID..." 
                          className="w-full bg-black/80 border border-white/10 p-4 rounded-xl text-[10px] text-[#05e823] outline-none font-mono focus:border-[#05e823]/50 transition-all" 
                          onChange={(e) => setTempTeam({...tempTeam, name: e.target.value})}
                        />
                        <button onClick={finalizeTeam} className="w-full bg-[#05e823] text-black font-black py-4 rounded-xl text-[10px] uppercase tracking-widest shadow-lg shadow-[#05e823]/10 hover:scale-[1.02] active:scale-95 transition-all">
                          Deploy_Unit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ARCHIVE UI */}
            <div className="bg-black/20 border border-white/5 rounded-[3.5rem] p-10 shadow-inner">
               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-10 italic flex items-center gap-4">
                  <ShieldCheck size={16}/> Active_Deployments_Log
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {teamsList.map(t => (
                    <div key={t.id} className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex justify-between items-center hover:bg-white/[0.04] transition-all group border-l-4 border-l-[#05e823]/40">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center text-[#05e823] border border-white/10"><Users size={20}/></div>
                        <div>
                          <h4 className="text-sm font-black text-white italic">{t.name || t.teamName}</h4>
                          <p className="text-[9px] text-slate-500 font-mono">HASH_{t.teamId}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {t.members?.slice(0, 3).map((m, idx) => (
                            <div key={idx} className="h-8 w-8 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-[10px] font-black text-[#05e823]" title={m.name}>{m.name.charAt(0)}</div>
                          ))}
                        </div>
                        <button onClick={() => setSelectedTeamInfo(t)} className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#05e823] hover:bg-[#05e823]/10 transition-all">
                          <Info size={18}/>
                        </button>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODALS UI --- */}

      {/* 1. NEW CANDIDATE FULL DETAILS MODAL */}
      <AnimatePresence>
        {selectedCandidateDetails && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#020617] border border-white/10 p-10 rounded-[4rem] w-full max-w-2xl relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#05e823]/40"></div>
              <button onClick={() => setSelectedCandidateDetails(null)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all"><X size={20}/></button>
              
              <div className="flex items-center gap-6 mb-10 border-b border-white/5 pb-8">
                <div className="h-20 w-20 bg-black rounded-3xl border border-[#05e823]/20 flex items-center justify-center text-3xl font-black text-[#05e823] shadow-inner">
                  {selectedCandidateDetails.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">{selectedCandidateDetails.name}</h3>
                  <p className="text-[#05e823] font-bold text-[10px] uppercase tracking-[0.3em] mt-2">{selectedCandidateDetails.domain || selectedCandidateDetails.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Mail size={12}/> Email_Address</p>
                    <p className="text-white text-sm font-bold italic">{selectedCandidateDetails.email || "N/A"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Phone size={12}/> Phone_Contact</p>
                    <p className="text-white text-sm font-bold italic">{selectedCandidateDetails.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><School size={12}/> Academic_Institution</p>
                    <p className="text-white text-sm font-bold italic">{selectedCandidateDetails.college}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><BookOpen size={12}/> Course_Phase</p>
                    <p className="text-white text-sm font-bold italic">{selectedCandidateDetails.course} ({selectedCandidateDetails.year})</p>
                  </div>
                  <div className="space-y-1 bg-white/[0.03] p-5 rounded-3xl border border-white/5">
                    <p className="text-[9px] font-black text-[#05e823] uppercase tracking-widest flex items-center gap-2 mb-2"><Zap size={12}/> Intent_Logic</p>
                    <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">"{selectedCandidateDetails.whyJoin || "No intent data provided."}"</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4 pt-6 border-t border-white/5">
                 <button onClick={() => sendWhatsApp(selectedCandidateDetails.phone, selectedCandidateDetails.name, selectedCandidateDetails.status)} className="flex-1 bg-[#05e823] text-black font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-[#05e823]/10">Establish_Comm_Link</button>
                 <button onClick={() => setSelectedCandidateDetails(null)} className="px-10 bg-white/5 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Close_Profile</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. TEAM DETAILS MODAL */}
      <AnimatePresence>
        {selectedTeamInfo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#020617] border border-white/10 p-10 rounded-[3rem] w-full max-w-3xl relative shadow-2xl">
              <button onClick={() => {setSelectedTeamInfo(null); setSelectedMemberInfo(null);}} className="absolute top-8 right-8 text-slate-500 hover:text-white"><X size={20}/></button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-6 border-b border-[#05e823]/20 pb-4">Manifest</h3>
                  <div className="space-y-3">
                    {selectedTeamInfo.members.map(m => (
                      <button key={m.id} onClick={() => setSelectedMemberInfo(m)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${selectedMemberInfo?.id === m.id ? 'bg-[#05e823] text-black border-transparent shadow-lg shadow-[#05e823]/20' : 'bg-white/5 border-white/5 text-white hover:bg-white/10'}`}>
                        <div className="h-8 w-8 rounded-lg bg-black/40 flex items-center justify-center font-black text-[#05e823]">{m.name.charAt(0)}</div>
                        <span className="font-black italic text-xs uppercase">{m.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 flex flex-col justify-center text-center">
                  {selectedMemberInfo ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="h-20 w-20 bg-[#05e823]/10 rounded-full flex items-center justify-center mx-auto text-[#05e823] border border-[#05e823]/20 shadow-inner">
                        <User size={32}/>
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-white italic uppercase">{selectedMemberInfo.name}</h4>
                        <p className="text-[10px] text-[#05e823] font-bold tracking-widest uppercase mt-1">{selectedMemberInfo.role}</p>
                      </div>
                      <div className="space-y-3 text-left bg-black/40 p-5 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px] uppercase tracking-tighter"><Phone size={14} className="text-[#05e823]"/> {selectedMemberInfo.phone}</div>
                        <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px] uppercase tracking-tighter"><GraduationCap size={14} className="text-[#05e823]"/> {selectedMemberInfo.college}</div>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest italic">Select_Agent_Profile</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. ADD CANDIDATE MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#020617] border border-white/10 p-12 rounded-[4rem] w-full max-w-xl relative shadow-2xl overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#05e823]/40"></div>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-slate-500 hover:text-white transition-all"><X size={24}/></button>
              <h3 className="text-3xl font-black text-white italic uppercase mb-10 tracking-tighter">New_Injection</h3>
              <form onSubmit={handleAddCandidate} className="grid grid-cols-2 gap-6 font-sans">
                 <div className="col-span-2 space-y-2">
                   <label className="text-[9px] font-black text-slate-500 uppercase ml-4 tracking-widest">Full Name / Identity</label>
                   <input required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 focus:bg-white/10 transition-all font-bold placeholder:text-slate-700" onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}/>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[9px] font-black text-slate-500 uppercase ml-4 tracking-widest">Role</label>
                   <input required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setNewCandidate({...newCandidate, role: e.target.value})}/>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[9px] font-black text-slate-500 uppercase ml-4 tracking-widest">Phone</label>
                   <input required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setNewCandidate({...newCandidate, phone: e.target.value})}/>
                 </div>
                 <div className="col-span-2 space-y-2">
                   <label className="text-[9px] font-black text-slate-500 uppercase ml-4 tracking-widest">Institution / College</label>
                   <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setNewCandidate({...newCandidate, college: e.target.value})}/>
                 </div>
                 <button className="col-span-2 bg-white text-black font-black py-5 rounded-2xl mt-4 uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-[#05e823] transition-all active:scale-95 shadow-white/5">Initialize_Sequence</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(5, 232, 35, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #05e823; }
      `}</style>
    </div>
  );
}