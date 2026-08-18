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
          
          {/* Left Column: Fixed Heading + Left Slide-in Paragraph + Animated Explore Link */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* 1. Heading (Fixed - No horizontal translation) */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight leading-[1.18] font-heading">
                Work With Top Notch Designers And Developers To Get Amazing Products.
              </h2>
            </div>

            {/* 2. Paragraph (Slides in smoothly from Left Side) */}
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
              Zweidevs is a service-oriented company providing creative and innovative solutions for your business domain. We believe in exceeding your expectations by delivering thoughtfully innovated eye-catching products on your desk. We take a pride in engineering your requirements into robust software using our mobile, web, cloud and e-commerce capabilities.
            </motion.p>

            {/* 3. Explore More Action with Hover Navigation to About Page, Arrow Motion & Underline Animation */}
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
                onMouseEnter={onNavigateToAbout}
                className="group relative inline-flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#E28743] hover:text-[#C86A28] transition-colors duration-300 pb-1 cursor-pointer font-heading"
              >
                <span>Explore More</span>

                {/* Animated Arrow Icon with Slide & Color Shift */}
                <span className="inline-flex items-center justify-center transition-transform duration-300 transform group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5 text-[#E28743] group-hover:text-[#C86A28] transition-colors duration-300" />
                </span>

                {/* Smooth Underline Expanding on Hover from Left to Right */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E28743] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Image (Slides in smoothly from Right Side) */}
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
              
              {/* Subtle Ambient Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
