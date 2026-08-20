import React from 'react';
import { ArrowRight, GraduationCap, Mail } from 'lucide-react';

interface CtaSectionProps {
  onExploreCourses: () => void;
  onContactUs?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onExploreCourses,
  onContactUs,
}) => {
  return (
    <section className="py-10 sm:py-12 bg-[#C9E5ED]/20 text-[#1A314C] relative overflow-hidden border-b border-[#C9E5ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] rounded-2xl p-6 sm:p-8 lg:p-10 text-center space-y-4 shadow-lg relative overflow-hidden border border-[#1DA5B8]/30">
          
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-white border border-[#C9E5ED]/30 shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight font-poppins">
            Start Learning FinTech & Web3 Today
          </h2>

          <p className="text-[#C9E5ED] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-poppins">
            Master high-demand skills with our hands-on courses, industry projects, and expert mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group font-poppins"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactUs}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-[#C9E5ED]/40 transition-all flex items-center justify-center gap-2 cursor-pointer font-poppins"
            >
              <Mail className="w-4 h-4 text-[#C9E5ED]" />
              <span>Contact Us</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

