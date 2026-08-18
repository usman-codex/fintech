import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle, 
  Globe, 
  Sparkles 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A314C]">
            Bridging Financial Tech & Web3 Innovation
          </h1>
          <p className="text-[#10566E] text-sm sm:text-base leading-relaxed">
            Fintech Edge Institute is a premier education institute based in Lahore, Pakistan, delivering world-class practical training in decentralized finance, blockchain protocols, Web3 marketing, and AI algorithms.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#C9E5ED] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#107C8E] text-white flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A314C]">Our Core Mission</h3>
            <p className="text-xs sm:text-sm text-[#1A314C]/80 leading-relaxed">
              To equip ambitious students, developers, and financial professionals with verified hands-on skills to navigate, build, and earn safely in the rapidly expanding Web3 and FinTech ecosystems.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#C9E5ED] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#10566E] text-white flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A314C]">Our Strategic Vision</h3>
            <p className="text-xs sm:text-sm text-[#1A314C]/80 leading-relaxed">
              To establish a global learning hub and incubator where practical knowledge directly converts into remote careers, startup ventures, and financial independence.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-white rounded-3xl p-8 border border-[#C9E5ED] shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#107C8E]">5,000+</div>
            <div className="text-xs text-[#5EA4AA] mt-1 font-medium">Students Enrolled</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#10566E]">98%</div>
            <div className="text-xs text-[#5EA4AA] mt-1 font-medium">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1DA5B8]">20+</div>
            <div className="text-xs text-[#5EA4AA] mt-1 font-medium">Practical Modules</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#107C8E]">100%</div>
            <div className="text-xs text-[#5EA4AA] mt-1 font-medium">Direct Mentorship</div>
          </div>
        </div>

        {/* Mentors Team */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A314C]">Leadership & Industry Mentors</h2>
            <p className="text-xs sm:text-sm text-[#10566E]">Guided by active founders, Web3 growth managers, and financial analysts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Mentors Team', role: 'Lead Web3 On-Chain Analyst', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
              { name: 'Fintech Edge Marketers', role: 'Head of Web3 Growth', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
              { name: 'Tech Lead Fellows', role: 'Blockchain & AI Architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
            ].map((m, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#C9E5ED] text-center space-y-3 shadow-sm hover:border-[#1DA5B8] transition-all">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                  }}
                  className="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-[#107C8E] shadow-md" 
                />
                <h4 className="text-base font-bold text-[#1A314C]">{m.name}</h4>
                <p className="text-xs text-[#107C8E] font-semibold">{m.role}</p>
                <p className="text-xs text-[#1A314C]/75">Dedicated to guiding student roadmaps and conducting 1-on-1 wallet audits.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
