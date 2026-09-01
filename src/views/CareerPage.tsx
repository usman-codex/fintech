import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Rocket, 
  Network, 
  Coins,
  ChevronRight
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
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: 'job-1',
      title: 'Web3 Community & Growth Strategist',
      department: 'Marketing & Community',
      type: 'Full-time / Remote',
      location: 'Remote (Pakistan / Global)',
      salary: '$1,200 - $2,500 / mo',
      tags: ['Discord Management', 'Zealy/Galxe Campaigns', 'Tokenomics', 'KOL Outreach'],
      description: 'Lead engagement and airdrop campaign management for partner decentralized protocols. Coordinate ambassador incentives and moderate active Web3 communities.',
      requirements: [
        'Demonstrated track record running Web3 Discord/Telegram communities',
        'Familiarity with Galxe, Layer3, and Zealy quest infrastructures',
        'Strong English writing and voice-chat communication skills',
        'Completion of Fintech Edge Web3 Marketing / Airdrop course is a plus'
      ]
    },
    {
      id: 'job-2',
      title: 'Junior DeFi Research Analyst',
      department: 'Analytics & Research',
      type: 'Full-time / Hybrid',
      location: 'Lahore, Pakistan / Hybrid',
      salary: 'Rs 120,000 - 220,000 / mo',
      tags: ['Dune Analytics', 'DeFi Llama', 'Yield Farming', 'Risk Analysis'],
      description: 'Perform quantitative on-chain data research, analyze emerging liquidity pools, and author detailed weekly token alpha reports for student members.',
      requirements: [
        'Proficiency in Dune Analytics SQL queries and DeFi protocol mechanisms',
        'Strong analytical mindset and deep understanding of Impermanent Loss & APY math',
        'Ability to present clear findings in weekly live webinars'
      ]
    },
    {
      id: 'job-3',
      title: 'Solidity & Smart Contract Teaching Assistant',
      department: 'Academic & Mentorship',
      type: 'Part-time / Remote',
      location: 'Remote',
      salary: 'Hourly / $25 - $40 per hr',
      tags: ['Solidity', 'Hardhat', 'Foundry', 'Code Review'],
      description: 'Assist senior instructors in conducting student code reviews, debugging testnet deployments, and answering technical questions in the student portal.',
      requirements: [
        'Experience building & testing ERC-20 / ERC-721 smart contracts',
        'Familiarity with Foundry / Hardhat unit testing workflows',
        'Passion for teaching and helping junior developers grow'
      ]
    },
    {
      id: 'job-4',
      title: 'Fintech Edge Student Placement Intern',
      department: 'Graduates Incubator',
      type: 'Paid Internship (3 Months)',
      location: 'Lahore / Remote',
      salary: 'Stipend + Fast-track Full-time Offer',
      tags: ['Mentorship', 'Portfolio Building', 'Live Projects'],
      description: 'Exclusive placement internship for Fintech Edge graduates to work on real commercial partner projects, earning hands-on experience and verifiable references.',
      requirements: [
        'Must have completed at least one course at Fintech Edge Institute',
        'Commitment of 20 hours/week towards live client deliverables',
        'High motivation to transition into remote Web3 tech jobs'
      ]
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
        
        {/* Header with Color Gradient Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/80 border border-[#C9E5ED] shadow-2xs text-[#107C8E] text-xs font-bold">
            <span>Join Fintech Edge Team & Ecosystem</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-[#10566E] via-[#107C8E] to-[#1DA5B8] bg-clip-text text-transparent pb-1">
            Careers & Graduate Placements
          </h1>
          <p className="text-[#10566E] text-sm sm:text-base leading-relaxed">
            Build your career at the forefront of financial technology and decentralized networks. We hire top instructors, researchers, and directly place certified graduates with partner Web3 firms.
          </p>
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
            <h2 className="text-2xl font-bold text-[#1A314C]">Open Positions & Internships</h2>
            <span className="text-xs font-semibold text-[#107C8E]">{jobs.length} Active Openings</span>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-[#C9E5ED] hover:border-[#1DA5B8] shadow-sm hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="bg-[#C9E5ED]/50 text-[#107C8E] text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase">
                        {job.department}
                      </span>
                      <span className="text-xs text-[#5EA4AA]">•</span>
                      <span className="text-xs font-medium text-[#10566E] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="text-xs text-[#5EA4AA]">•</span>
                      <span className="text-xs font-medium text-[#10566E] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1A314C]">{job.title}</h3>
                    <p className="text-xs text-[#1A314C]/75 mt-1">{job.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-2 shrink-0">
                    <div className="text-xs font-extrabold text-[#107C8E] bg-[#C9E5ED]/30 px-3 py-1 rounded-xl border border-[#C9E5ED]">
                      {job.salary}
                    </div>
                    <button
                      onClick={onContactUs}
                      className="px-5 py-2 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white text-xs font-bold transition-all shadow-md shadow-[#107C8E]/20 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#C9E5ED] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {job.tags.map((t, idx) => (
                      <span key={idx} className="bg-[#C9E5ED]/20 text-[#10566E] px-2.5 py-1 rounded-lg text-[11px] font-medium border border-[#C9E5ED]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#5EA4AA]">
                    Send resume to <a href="mailto:careers@fintechedgeinstitute.com" className="font-bold text-[#107C8E] hover:underline">careers@fintechedgeinstitute.com</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

