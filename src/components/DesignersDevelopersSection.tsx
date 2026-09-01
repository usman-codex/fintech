import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import teamImage from '../assets/images/team_collaboration.jpg';

interface DesignersDevelopersSectionProps {
  onNavigateToAbout: () => void;
}

export const DesignersDevelopersSection: React.FC<DesignersDevelopersSectionProps> = ({
  onNavigateToAbout,
}) => {
  return (
    <section 
      id="designers-developers-section" 
      className="relative w-full py-16 sm:py-24 bg-white overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight leading-[1.18] font-heading">
                Work With Top Notch Designers And Developers To Get Amazing Products.
              </h2>
            </div>

            {}
            <motion.p
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#4A5D6E] text-base sm:text-lg leading-relaxed font-sans"
            >
              <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong> is a premier technology institute providing creative and innovative education and software solutions for modern financial domains. We believe in exceeding expectations by delivering thoughtfully engineered, cutting-edge products and training. We take immense pride in engineering your requirements into robust software using our mobile, web, cloud, blockchain, and financial technology capabilities.
            </motion.p>

            {}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2"
            >
              <button
                id="explore-more-about-btn"
                onClick={onNavigateToAbout}
                className="group relative inline-flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#107C8E] hover:text-[#1DA5B8] transition-colors duration-300 pb-1.5 cursor-pointer font-heading"
              >
                <span className="tracking-wide">Explore More</span>

                {}
                <span className="inline-flex items-center justify-center transition-transform duration-300 ease-out transform group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5 text-[#107C8E] group-hover:text-[#1DA5B8] transition-colors duration-300" />
                </span>

                {}
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#107C8E] group-hover:bg-[#1DA5B8] origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out rounded-full" />
              </button>
            </motion.div>

          </div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#C9E5ED]/80 group">
              <img
                src={teamImage}
                alt="Top Notch Designers And Developers Collaborating"
                className="w-full h-auto max-h-[460px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
