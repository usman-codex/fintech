import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  PenTool, 
  Search, 
  UserCheck, 
  TrendingUp, 
  CheckSquare,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFCFD] overflow-hidden border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. SECTION TITLE                                                          */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins"
          >
            <span className="text-[#107C8E]">FinTech Edge Institute</span> Achievements Since 2020
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#64748B] font-poppins"
          >
            Empowering students, developers, and institutions with cutting-edge financial engineering and proven global outcomes.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 2. ACHIEVEMENTS GRAPHIC DISPLAY (RADIAL FAN ARCH WITH STATS)              */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto pt-6 pb-12">
          
          {/* Main Container Grid with Left Stat, Center Fan Graphic, and Right Stat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT STAT: 412+ Projects Completed */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 flex lg:justify-start justify-center"
            >
              <div className="relative pl-6 py-4 border-l-4 border-[#107C8E] rounded-l-xs bg-white/70 backdrop-blur-xs p-5 rounded-2xl shadow-xs border border-[#E2E8F0]">
                <div className="text-4xl sm:text-5xl font-black text-[#107C8E] font-poppins tracking-tight">
                  412+
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1A314C] font-poppins mt-1">
                  Projects & Audits Completed
                </div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">
                  DeFi, Web3, & AI Trading Labs
                </div>
              </div>
            </motion.div>

            {/* CENTER RADIAL FAN DIAGRAM (Image 2 Archetype) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center my-4">
              
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#1DA5B8]/10 blur-3xl pointer-events-none" />

              {/* Center "Since 2020" Round Badge */}
              <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative z-20 w-36 h-36 rounded-full bg-white shadow-xl border-4 border-[#F1F5F9] flex flex-col items-center justify-center text-center p-3"
              >
                <span className="text-xs font-semibold text-[#64748B] tracking-wider uppercase font-poppins">
                  Since
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#107C8E] font-poppins">
                  2020
                </span>
                
                {/* Colorful semi-circle dot ring */}
                <div className="absolute -bottom-2 flex items-center justify-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-xs border border-[#E2E8F0]">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                </div>
              </motion.div>

              {/* 5 Radial Fan Shield Cards around the center */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-8 w-full max-w-xl z-10">
                
                {/* 1. Pen / Design */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white shadow-md border border-[#E2E8F0] hover:border-[#107C8E] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A314C] leading-tight">
                    Smart Contracts
                  </span>
                </motion.div>

                {/* 2. Search / Research */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white shadow-md border border-[#E2E8F0] hover:border-[#06B6D4] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ECFEFF] text-[#0891B2] flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A314C] leading-tight">
                    Market Research
                  </span>
                </motion.div>

                {/* 3. User / Mentorship */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white shadow-md border border-[#E2E8F0] hover:border-[#3B82F6] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A314C] leading-tight">
                    1-on-1 Mentorship
                  </span>
                </motion.div>

                {/* 4. Chart / Trading Analytics */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white shadow-md border border-[#E2E8F0] hover:border-[#107C8E] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A314C] leading-tight">
                    Algo Trading
                  </span>
                </motion.div>

                {/* 5. Checklist / Audits */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white shadow-md border border-[#E2E8F0] hover:border-[#8B5CF6] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A314C] leading-tight">
                    Security Audits
                  </span>
                </motion.div>

              </div>

            </div>

            {/* RIGHT STAT: 99% Customer / Learner Satisfaction */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 flex lg:justify-end justify-center"
            >
              <div className="relative pr-6 py-4 border-r-4 border-[#1DA5B8] rounded-r-xs bg-white/70 backdrop-blur-xs p-5 rounded-2xl shadow-xs border border-[#E2E8F0] text-right">
                <div className="text-4xl sm:text-5xl font-black text-[#1DA5B8] font-poppins tracking-tight">
                  99%
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1A314C] font-poppins mt-1">
                  Learner & Client Satisfaction
                </div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">
                  Verified Global Career Placements
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
