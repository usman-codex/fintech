import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Building2, 
  GraduationCap, 
  Users, 
  Sparkles, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ACHIEVEMENTS_DATA, AchievementItem } from '../data/achievements';

interface AchievementsSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<AchievementItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Achievements', icon: Sparkles },
    { id: 'opening', label: 'Company Opening & Labs', icon: Building2 },
    { id: 'certificate', label: 'Internship Certificates', icon: Award },
    { id: 'students', label: 'Student Excellence', icon: GraduationCap },
    { id: 'leadership', label: 'Leadership & Mentors', icon: Users },
  ];

  const filteredAchievements = activeCategory === 'all'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((item) => item.category === activeCategory);

  // Hexagon clip path string
  const hexClipStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  };

  return (
    <section 
      id="fintech-achievements-section" 
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#C9E5ED]/60 overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#107C8E_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      {/* Decorative Brand Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#1DA5B8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#107C8E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header with Stylish Typography matching screenshot */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#107C8E]/10 text-[#107C8E] text-xs sm:text-sm font-extrabold font-heading tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-[#1DA5B8]" />
            <span>Excellence & Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A314C] tracking-tight font-heading leading-tight">
            FinTech Edge Institute Achievements
          </h2>

          {/* Stylish Italicized Subtitle / Paragraph */}
          <p className="text-[#334A60] text-base sm:text-xl lg:text-2xl font-sans italic font-normal max-w-3xl mx-auto leading-relaxed pt-1">
            "Our commitment goes beyond serving our own business and clients as we strive to have a positive impact on people and communities through verified certifications, state-of-the-art campus expansions, and world-class technology mentorship."
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-heading transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#107C8E] text-white shadow-md shadow-[#107C8E]/25 scale-105'
                      : 'bg-[#F0F6F8] text-[#4A5D6E] hover:bg-[#E2F0F4] hover:text-[#107C8E]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#107C8E]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interlocking Honeycomb / Hexagon Mosaic Grid (Inspired by Screenshot) */}
        {activeCategory === 'all' ? (
          <div className="relative w-full max-w-6xl mx-auto py-6 sm:py-10">
            
            {/* Desktop / Tablet Interlocking Honeycomb Layout */}
            <div className="hidden md:block">
              {/* TOP APEX ROW: Center prominent hexagon */}
              <div className="flex justify-center -mb-10 sm:-mb-14 relative z-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedItem(ACHIEVEMENTS_DATA[0])}
                  className="group relative cursor-pointer"
                >
                  {/* Outer Glowing Hexagon Border */}
                  <div 
                    style={hexClipStyle} 
                    className="w-48 h-56 lg:w-56 lg:h-64 p-[3px] bg-gradient-to-b from-[#1DA5B8] via-[#107C8E] to-[#1A314C] group-hover:from-[#1DA5B8] group-hover:to-[#1DA5B8] transition-all duration-500 shadow-xl group-hover:scale-105"
                  >
                    {/* Inner Hexagon Container */}
                    <div 
                      style={hexClipStyle} 
                      className="w-full h-full bg-[#1A314C] relative overflow-hidden"
                    >
                      <img
                        src={ACHIEVEMENTS_DATA[0].image}
                        alt={ACHIEVEMENTS_DATA[0].title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-115"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1DA5B8] bg-black/40 px-2 py-0.5 rounded-full mx-auto mb-1">
                          {ACHIEVEMENTS_DATA[0].categoryLabel}
                        </span>
                        <h4 className="text-xs lg:text-sm font-extrabold text-white leading-tight font-heading">
                          {ACHIEVEMENTS_DATA[0].title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* MIDDLE ROW: Staggered Interlocking Hexagons */}
              <div className="flex justify-center items-center gap-3 sm:gap-4 -mb-10 sm:-mb-14 relative z-10">
                {ACHIEVEMENTS_DATA.slice(1, 6).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    onClick={() => setSelectedItem(item)}
                    className="group relative cursor-pointer"
                  >
                    <div 
                      style={hexClipStyle} 
                      className="w-40 h-48 lg:w-48 lg:h-56 p-[2.5px] bg-gradient-to-b from-[#C9E5ED] via-[#107C8E] to-[#1A314C] group-hover:from-[#1DA5B8] group-hover:to-[#107C8E] transition-all duration-300 shadow-lg group-hover:scale-108 group-hover:z-30"
                    >
                      <div 
                        style={hexClipStyle} 
                        className="w-full h-full bg-[#1A314C] relative overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-115"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-3 text-center">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#1DA5B8] mb-0.5">
                            {item.categoryLabel}
                          </span>
                          <h4 className="text-[11px] lg:text-xs font-bold text-white leading-tight font-heading line-clamp-2">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM ROW: Complementary Interlocking Hexagons */}
              <div className="flex justify-center items-center gap-3 sm:gap-4 relative z-0">
                {ACHIEVEMENTS_DATA.slice(6, 12).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    onClick={() => setSelectedItem(item)}
                    className="group relative cursor-pointer"
                  >
                    <div 
                      style={hexClipStyle} 
                      className="w-36 h-44 lg:w-44 lg:h-52 p-[2px] bg-gradient-to-b from-[#C9E5ED] via-[#107C8E] to-[#1A314C] group-hover:from-[#1DA5B8] group-hover:to-[#107C8E] transition-all duration-300 shadow-md group-hover:scale-108 group-hover:z-30"
                    >
                      <div 
                        style={hexClipStyle} 
                        className="w-full h-full bg-[#1A314C] relative overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-115"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-center">
                          <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#1DA5B8] mb-0.5">
                            {item.categoryLabel}
                          </span>
                          <h4 className="text-[10px] lg:text-[11px] font-bold text-white leading-tight font-heading line-clamp-2">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile / Small Screen Fluid Hexagonal Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden py-4">
              {ACHIEVEMENTS_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer flex justify-center"
                >
                  <div 
                    style={hexClipStyle} 
                    className="w-36 h-42 p-[2px] bg-gradient-to-b from-[#1DA5B8] via-[#107C8E] to-[#1A314C] shadow-md group-hover:scale-105 transition-transform duration-200"
                  >
                    <div 
                      style={hexClipStyle} 
                      className="w-full h-full bg-[#1A314C] relative overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 flex flex-col justify-end p-2 text-center">
                        <span className="text-[8px] font-extrabold uppercase text-[#1DA5B8] leading-tight">
                          {item.categoryLabel}
                        </span>
                        <h4 className="text-[10px] font-bold text-white leading-tight font-heading line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ) : (
          /* Filtered View: Interactive Hexagonal Grid for specific category */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto py-8"
          >
            {filteredAchievements.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-[#FAFDFE] rounded-3xl p-5 border border-[#C9E5ED] hover:border-[#107C8E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Hexagon Box Preview */}
                  <div className="flex items-center gap-4">
                    <div 
                      style={hexClipStyle} 
                      className="w-20 h-24 p-[2px] bg-gradient-to-b from-[#1DA5B8] via-[#107C8E] to-[#1A314C] shrink-0"
                    >
                      <div style={hexClipStyle} className="w-full h-full bg-[#1A314C] relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#E6F7FA] text-[#107C8E] text-xs font-bold font-heading">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-base font-extrabold text-[#1A314C] group-hover:text-[#107C8E] transition-colors font-heading leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#6A8197] flex items-center gap-1 font-sans">
                        <Calendar className="w-3 h-3 text-[#107C8E]" />
                        <span>{item.date}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E8F3F6] flex items-center justify-between text-xs text-[#107C8E] font-bold font-heading">
                  <span className="text-[#107C8E] font-extrabold">{item.stats || 'Verified Milestone'}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Bottom Callout & Stats Strip */}
        <div className="mt-14 sm:mt-18 max-w-4xl mx-auto bg-[#F0F8FA] rounded-2xl sm:rounded-3xl border border-[#C9E5ED] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#107C8E] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#107C8E]/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#1A314C] font-heading">
                Recognized Web3 & Financial Engineering Institute
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] font-sans">
                Over 1,200+ certified graduates, 45+ enterprise corporate partners, and national hackathon winners.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={onNavigateToAbout}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white text-xs sm:text-sm font-extrabold font-heading shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>Explore Institute Journey</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 3. Interactive Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#C9E5ED] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Image */}
              <div className="relative aspect-[16/9] w-full bg-[#1A314C] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#107C8E] text-white text-xs font-bold font-heading">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedItem.categoryLabel}</span>
                  </span>
                  <span className="text-xs text-white/80 flex items-center gap-1 font-sans">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedItem.date}</span>
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A314C] font-heading">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.stats && (
                    <span className="inline-block text-xs font-extrabold text-[#107C8E] bg-[#E6F7FA] px-2.5 py-0.5 rounded-md font-heading">
                      Key Highlight: {selectedItem.stats}
                    </span>
                  )}
                </div>

                <p className="text-[#334A60] text-sm sm:text-base leading-relaxed font-sans">
                  {selectedItem.fullDesc}
                </p>

                <div className="pt-4 border-t border-[#E8F3F6] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#6A8197] font-sans">
                    Verified milestone archived by FinTech Edge Institute
                  </span>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      if (onNavigateToContact) onNavigateToContact();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer"
                  >
                    <span>Connect With Our Team</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
