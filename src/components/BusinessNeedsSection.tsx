import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface BusinessNeedsSectionProps {
  onNavigateToServices: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const BusinessNeedsSection: React.FC<BusinessNeedsSectionProps> = ({
  onNavigateToServices,
  onSelectService,
}) => {
  // 5 featured services
  const featuredServices = [
    SERVICES_DATA.find((s) => s.id === 'digital-marketing') || SERVICES_DATA[0],
    SERVICES_DATA.find((s) => s.id === 'facebook-monetization') || SERVICES_DATA[1],
    SERVICES_DATA.find((s) => s.id === 'web-development') || SERVICES_DATA[2],
    SERVICES_DATA.find((s) => s.id === 'ecommerce-development') || SERVICES_DATA[3],
    SERVICES_DATA.find((s) => s.id === 'mobile-app-development') || SERVICES_DATA[4],
  ];

  // Track hovered card for 3D flip animation
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  return (
    <section 
      id="business-needs-section" 
      className="relative w-full py-16 sm:py-24 bg-[#FAFDFE] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      {/* Top Right Decorative Geometric Diamond Art in Official Brand Palette */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-12 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-88 sm:h-88 z-0 opacity-70"
      >
        <div className="relative w-full h-full">
          {/* Outer Light Cyan & Teal diamond */}
          <div className="absolute top-0 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/40 to-[#1DA5B8]/10 backdrop-blur-[1px]" />
          {/* Middle Deep Teal diamond */}
          <div className="absolute top-6 right-10 w-38 h-38 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/20 to-[#10566E]/20" />
          {/* Inner solid Dark Navy & Bright Teal gradient diamond */}
          <div className="absolute top-12 right-16 w-26 h-26 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-xl shadow-[#107C8E]/20" />
          {/* Floating cyan dots */}
          <div className="absolute top-2 right-36 w-3 h-3 rounded-full bg-[#1DA5B8]" />
          <div className="absolute top-40 right-6 w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left-Entering Scaling Heading and See All on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          
          {/* Left: Heading with Dynamic Slide-in & Scale-up Animation */}
          <motion.div
            initial={{ x: -180, scale: 0.68, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-2xl origin-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A314C] tracking-tight leading-tight font-heading">
              We Offer Everything That Your Business Needs
            </h2>
          </motion.div>

          {/* Right: See All Link with Smooth Left-to-Right Underline and Arrow Animation */}
          <div className="flex items-center">
            <button
              id="see-all-services-btn"
              onClick={onNavigateToServices}
              className="group relative inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#1A314C] hover:text-[#107C8E] transition-colors duration-300 pb-1.5 cursor-pointer font-heading"
            >
              <span>See All</span>
              
              {/* Animated Arrow Icon */}
              <span className="w-7 h-7 rounded-full bg-[#C9E5ED]/50 group-hover:bg-[#107C8E] text-[#1A314C] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1.5 shadow-xs">
                <ChevronRight className="w-4 h-4 transition-transform duration-300" />
              </span>

              {/* Animated Line drawing smoothly from Left to Right on Hover */}
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#107C8E] to-[#1DA5B8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
            </button>
          </div>
        </div>

        {/* 5 Larger Cards Row with Staggered Scroll-up, Clean Background-Free Icon, Delayed Heading Reveal, and 3D Brand Flip on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredServices.map((service, index) => {
            const isFlipped = flippedCardId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`business-card-${service.id}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-80 sm:h-84 lg:h-88 w-full [perspective:1200px] group cursor-pointer"
                onMouseEnter={() => setFlippedCardId(service.id)}
                onMouseLeave={() => setFlippedCardId(null)}
                onClick={() => onSelectService(service)}
              >
                {/* 3D Flip Inner Container */}
                <div
                  className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] shadow-sm hover:shadow-xl ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  
                  {/* FRONT FACE OF CARD: Clean White, Transparent Icon (No Background Box), Stylish Typography */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-[#C9E5ED] hover:border-[#1DA5B8] p-7 sm:p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] transition-colors duration-300">
                    
                    {/* Clean Larger Icon Container without any background box */}
                    <div className="flex items-center justify-center mb-6 text-[#1A314C] transition-transform duration-300 group-hover:scale-110">
                      <ServiceIcon 
                        name={service.iconName} 
                        size={84} 
                        className="w-20 h-20 sm:w-22 sm:h-22"
                        color="#1A314C" 
                        accentColor="#1DA5B8"
                      />
                    </div>

                    {/* Heading Text inside Card: Animates upwards from bottom after scroll with ~0.8s delay */}
                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.75 + index * 0.12,
                        ease: 'easeOut',
                      }}
                      className="w-full"
                    >
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#1A314C] leading-snug tracking-tight font-heading group-hover:text-[#107C8E] transition-colors">
                        {service.shortTitle}
                      </h3>
                    </motion.div>
                  </div>

                  {/* BACK FACE OF CARD: Official Brand Color Scheme (#1A314C Dark Navy to #10566E Deep Blue with #1DA5B8 Bright Cyan Accents) */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1A314C] via-[#10566E] to-[#107C8E] rounded-3xl p-7 sm:p-8 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl border border-[#1DA5B8]/40">
                    
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between border-b border-[#C9E5ED]/20 pb-2.5">
                        <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight font-heading">
                          {service.shortTitle}
                        </h3>
                        <span className="w-2 h-2 rounded-full bg-[#1DA5B8] animate-pulse" />
                      </div>

                      <p className="text-xs sm:text-sm text-[#C9E5ED] leading-relaxed font-normal line-clamp-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* View Details Link on Back Face */}
                    <div className="pt-3.5 border-t border-[#C9E5ED]/20 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-[#1DA5B8] hover:text-white underline underline-offset-4 flex items-center gap-1.5 group-hover:gap-2.5 transition-all font-heading">
                        View Details
                        <ArrowRight className="w-4 h-4 text-[#1DA5B8]" />
                      </span>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
