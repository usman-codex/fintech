import React from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Rocket, 
  Network, 
  Coins
} from 'lucide-react';
import { motion } from 'motion/react';

interface CareerPageProps {
  onContactUs: () => void;
  onExploreCourses: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({
  onContactUs,
  onExploreCourses,
}) => {
  const jobs = [
    {
      id: 'job-ai',
      title: 'AI & Automation Specialist',
      type: 'Full-time / Remote',
      location: 'Remote (Pakistan / Global)',
      description: 'Design and deploy generative AI workflows, intelligent chatbots, and custom LLM integrations for enterprise clients and fintech platforms.'
    },
    {
      id: 'job-fb-monetization',
      title: 'Facebook Monetization & Video Content Expert',
      type: 'Full-time / Hybrid',
      location: 'Lahore, Pakistan / Remote',
      description: 'Manage high-traffic Facebook Pages, oversee in-stream video editing workflows, optimize Reel retention, and scale payout-eligible digital assets.'
    },
    {
      id: 'job-web-dev',
      title: 'Full Stack Web Developer (React / Next.js)',
      type: 'Full-time / Remote',
      location: 'Remote / Hybrid',
      description: 'Build fast, responsive modern web applications, interactive student portals, and robust API endpoints with clean UI/UX and seamless integrations.'
    },
    {
      id: 'job-digital-marketing',
      title: 'Digital Marketing & Performance Strategist',
      type: 'Full-time / Remote',
      location: 'Remote (Pakistan / Global)',
      description: 'Execute high-ROI Meta & Google ad campaigns, optimize multi-channel conversion funnels, and drive targeted growth across digital platforms.'
    }
  ];

  return (
    <div className="relative py-16 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C] space-y-16 overflow-hidden">
      
      {/* Decorative Fixed Rotated Box Layers on Left Top */}
      <div className="absolute -top-12 -left-12 sm:-top-8 sm:-left-8 pointer-events-none z-0">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-[#107C8E]/20 via-[#1DA5B8]/10 to-transparent border-2 border-[#1DA5B8]/30 shadow-xl backdrop-blur-xs -rotate-12">
          {/* Inner secondary rotated box */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-[#10566E]/25 to-[#C9E5ED]/50 border border-[#107C8E]/40 shadow-md rotate-24" />
          {/* Tiny accent box */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/60 border border-[#1DA5B8]/40 rotate-45 shadow-xs" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Animated Color Gradient Text */}
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

        {/* Benefits Grid with New Icons & Gradient Badges */}
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

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A314C]">Open Positions & Internships</h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C9E5ED] hover:border-[#1DA5B8] shadow-sm hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold text-[#107C8E] flex items-center gap-1.5 bg-[#C9E5ED]/20 px-2.5 py-1 rounded-lg border border-[#C9E5ED]/60">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="text-xs text-[#5EA4AA]">•</span>
                      <span className="text-xs font-medium text-[#10566E] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] pt-0.5">{job.title}</h3>
                    <p className="text-xs sm:text-sm text-[#1A314C]/75 leading-relaxed max-w-3xl">{job.description}</p>
                  </div>

                  <div className="shrink-0 flex items-center">
                    <button
                      onClick={onContactUs}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#107C8E]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#C9E5ED]/70 flex items-center justify-between text-xs text-[#5EA4AA]">
                  <span>Submit application via form or email</span>
                  <span>Send resume to <a href="mailto:careers@fintechedgeinstitute.com" className="font-bold text-[#107C8E] hover:underline">careers@fintechedgeinstitute.com</a></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

