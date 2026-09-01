import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Rocket, 
  Network, 
  Coins,
  Briefcase,
  Building
} from 'lucide-react';
import { motion } from 'motion/react';
import { CAREERS_DATA } from '../data/careers';
import { JobPosition } from '../types';
import { JobModal } from '../components/JobModal';

interface CareerPageProps {
  onContactUs: () => void;
  onExploreCourses: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({
  onContactUs,
  onExploreCourses,
}) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <div className="relative py-16 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C] space-y-16 overflow-hidden">
      
      {}
      <div className="absolute -top-12 -left-12 sm:-top-8 sm:-left-8 pointer-events-none z-0">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-[#107C8E]/20 via-[#1DA5B8]/10 to-transparent border-2 border-[#1DA5B8]/30 shadow-xl backdrop-blur-xs -rotate-12">
          {}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-[#10566E]/25 to-[#C9E5ED]/50 border border-[#107C8E]/40 shadow-md rotate-24" />
          {}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/60 border border-[#1DA5B8]/40 rotate-45 shadow-xs" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/80 border border-[#C9E5ED] shadow-2xs text-[#107C8E] text-xs font-bold"
          >
            <span>Join Fintech Edge Team & Ecosystem</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-[#10566E] via-[#107C8E] to-[#1DA5B8] bg-clip-text text-transparent pb-1"
          >
            Careers & Graduate Placements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="text-[#10566E] text-sm sm:text-base leading-relaxed"
          >
            Build your career at the forefront of financial technology and decentralized networks. We hire top instructors, researchers, and directly place certified graduates with partner Web3 firms.
          </motion.p>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#C9E5ED] shadow-sm hover:border-[#1DA5B8] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#107C8E] to-[#1DA5B8] text-white flex items-center justify-center font-bold shadow-md shadow-[#107C8E]/25 group-hover:scale-105 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A314C]">High-Impact Work</h3>
            <p className="text-xs text-[#1A314C]/75 leading-relaxed">
              Shape the next generation of financial leaders and crypto analysts across Pakistan and international markets.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#C9E5ED] shadow-sm hover:border-[#1DA5B8] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#10566E] to-[#107C8E] text-white flex items-center justify-center font-bold shadow-md shadow-[#10566E]/25 group-hover:scale-105 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A314C]">Graduate Placement Pipeline</h3>
            <p className="text-xs text-[#1A314C]/75 leading-relaxed">
              We connect top-performing course alumni directly with hiring Web3 startups, DeFi protocols, and VC funds.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#C9E5ED] shadow-sm hover:border-[#1DA5B8] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1DA5B8] to-[#107C8E] text-white flex items-center justify-center font-bold shadow-md shadow-[#1DA5B8]/25 group-hover:scale-105 transition-transform">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A314C]">Competitive Compensation</h3>
            <p className="text-xs text-[#1A314C]/75 leading-relaxed">
              Attractive USD & PKR remuneration packages, performance bonuses, and fully sponsored learning certifications.
            </p>
          </motion.div>
        </div>

        {}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A314C]">Open Positions & Internships</h2>
          </div>

          <div className="space-y-4">
            {CAREERS_DATA.map((job) => (
              <div 
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C9E5ED] hover:border-[#107C8E] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="space-y-2.5 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#107C8E]/10 text-[#107C8E] border border-[#107C8E]/25 text-xs font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="text-xs text-[#5EA4AA] hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10566E]">
                        <MapPin className="w-3.5 h-3.5 text-[#107C8E]" />
                        {job.location}
                      </span>
                      <span className="text-xs text-[#5EA4AA] hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5EA4AA] bg-[#C9E5ED]/20 px-2 py-0.5 rounded-md border border-[#C9E5ED]/50">
                        {job.workplaceType}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors pt-0.5">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A314C]/80 leading-relaxed max-w-3xl">
                      {job.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#107C8E] hover:bg-[#10566E] group-hover:bg-[#10566E] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#107C8E]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#C9E5ED]/70 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5EA4AA]">
                  <span className="text-[11px] sm:text-xs">Click position for full role details & responsibilities</span>
                  <span className="text-[11px] sm:text-xs">Send resume to <a href="mailto:careers@fintechedgeinstitute.com" onClick={(e) => e.stopPropagation()} className="font-bold text-[#107C8E] hover:underline">careers@fintechedgeinstitute.com</a></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {}
      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
};

