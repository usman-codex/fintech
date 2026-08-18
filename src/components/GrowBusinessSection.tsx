import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FeatureCard {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const GrowBusinessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const features: FeatureCard[] = [
    {
      id: 'automations',
      category: 'Automations for your operations',
      title: 'Providing you with rule based process automation',
      description:
        'Rule based process automation makes your business more scalable and efficient. The system implements the rules you set up, through automation thus being more accurate.',
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Large Cog / Gear */}
          <path
            d="M32 14c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18zm0 28c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"
            fill="#C9E5ED"
            fillOpacity="0.4"
          />
          {/* Gear teeth outline in Dark Navy */}
          <path
            d="M35.2 8.4l-.8-3.4c-.2-.8-.9-1.4-1.7-1.4h-1.4c-.8 0-1.5.6-1.7 1.4l-.8 3.4c-1.8.4-3.5 1.1-5 2l-3-1.8c-.7-.4-1.6-.3-2.2.3l-1 1c-.6.6-.7 1.5-.3 2.2l1.8 3c-.9 1.5-1.6 3.2-2 5l-3.4.8c-.8.2-1.4.9-1.4 1.7v1.4c0 .8.6 1.5 1.4 1.7l3.4.8c.4 1.8 1.1 3.5 2 5l-1.8 3c-.4.7-.3 1.6.3 2.2l1 1c.6.6 1.5.7 2.2.3l3-1.8c1.5.9 3.2 1.6 5 2l.8 3.4c.2.8.9 1.4 1.7 1.4h1.4c.8 0 1.5-.6 1.7-1.4l.8-3.4c1.8-.4 3.5-1.1 5-2l3 1.8c.7.4 1.6.3 2.2-.3l1-1c.6-.6.7-1.5.3-2.2l-1.8-3c.9-1.5 1.6-3.2 2-5l3.4-.8c.8-.2 1.4-.9 1.4-1.7v-1.4c0-.8-.6-1.5-1.4-1.7l-3.4-.8c-.4-1.8-1.1-3.5-2-5l1.8-3c.4-.7.3-1.6-.3-2.2l-1-1c-.6-.6-1.5-.7-2.2-.3l-3 1.8c-1.5-.9-3.2-1.6-5-2z"
            stroke="#1A314C"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner small gear / circle */}
          <circle cx="32" cy="32" r="7.5" stroke="#1A314C" strokeWidth="2.5" fill="#FFFFFF" />
          {/* Bright Cyan center node */}
          <circle cx="32" cy="32" r="4" fill="#1DA5B8" />
        </svg>
      ),
    },
    {
      id: 'control',
      category: 'Maintain control',
      title: 'Analyze your business performance and plan ahead',
      description:
        'Getting insights allows you to assess your business and maintain control. It gives you a data-driven approach to plan your business and take advantage of every revenue opportunity.',
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer rectangular container */}
          <rect
            x="12"
            y="10"
            width="40"
            height="44"
            rx="4"
            stroke="#1A314C"
            strokeWidth="2.5"
            fill="#FFFFFF"
          />
          {/* 3 Slider Tracks */}
          <line x1="22" y1="16" x2="22" y2="48" stroke="#1A314C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="32" y1="16" x2="32" y2="48" stroke="#1A314C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="42" y1="16" x2="42" y2="48" stroke="#1A314C" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Slider 1 Thumb: High */}
          <circle cx="22" cy="24" r="4.5" fill="#5EA4AA" stroke="#1A314C" strokeWidth="2" />
          
          {/* Slider 2 Thumb: Low */}
          <circle cx="32" cy="38" r="4.5" fill="#1DA5B8" stroke="#1A314C" strokeWidth="2" />
          
          {/* Slider 3 Thumb: Mid */}
          <circle cx="42" cy="28" r="4.5" fill="#107C8E" stroke="#1A314C" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'channels',
      category: 'Connecting sale channels',
      title: 'The fall of complex commerce',
      description:
        'Connect multiple channels in a seamless way, enabling businesses to enjoy a single interface to manage all their channels through automations.',
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting Cross / Diagonal Lines in Dark Navy */}
          <line x1="20" y1="20" x2="44" y2="44" stroke="#1A314C" strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="20" x2="20" y2="44" stroke="#1A314C" strokeWidth="3" strokeLinecap="round" />
          
          {/* Central Intersection Link */}
          <circle cx="32" cy="32" r="5.5" fill="#1A314C" />
          <circle cx="32" cy="32" r="2.5" fill="#FFFFFF" />

          {/* 4 Green/Cyan Outer Channel Nodes */}
          <circle cx="20" cy="20" r="5" fill="#5EA4AA" stroke="#1A314C" strokeWidth="2" />
          <circle cx="44" cy="20" r="5" fill="#1DA5B8" stroke="#1A314C" strokeWidth="2" />
          <circle cx="20" cy="44" r="5" fill="#1DA5B8" stroke="#1A314C" strokeWidth="2" />
          <circle cx="44" cy="44" r="5" fill="#5EA4AA" stroke="#1A314C" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="grow-business-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 bg-white overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER WITH SMOOTH FADE-UP ANIMATION                          */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          {/* Top Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-base sm:text-lg font-bold text-[#107C8E] tracking-wide font-poppins inline-block mb-3">
              Grow your business
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A314C] leading-snug sm:leading-tight font-poppins mb-5"
          >
            Establish control throughout your business so that you can sell better by sitting almost anywhere.
          </motion.h2>

          {/* Sub-paragraph Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl mx-auto font-poppins"
          >
            Ginkgo Retail is the master key to all your doors! You can manage order cycles and inventory across all sale channels without breaking a sweat. Don't miss out on any selling opportunity due to the lack of efficiency or control.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 2. 3 ZOOM-IN CARDS (SCALE 0 -> 100%) WITH SOFT BACKGROUND HOVER TRANSITION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.25 + index * 0.18,
                ease: [0.34, 1.56, 0.64, 1], // Springy zoom-out to 100%
              }}
              whileHover={{ y: -6 }}
              className="group relative bg-white hover:bg-[#F0F8FA] p-8 lg:p-10 rounded-2xl border border-transparent hover:border-[#C9E5ED] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Container with subtle animation on hover */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Blue Category Title */}
              <span className="text-base font-bold text-[#107C8E] group-hover:text-[#1DA5B8] transition-colors duration-300 font-poppins mb-3">
                {feature.category}
              </span>

              {/* Bold Sub-heading */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1A314C] leading-snug font-poppins mb-4">
                {feature.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-sm text-[#475569] leading-relaxed font-poppins">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
