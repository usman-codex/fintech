import React from 'react';
import { motion } from 'motion/react';
import { HEXAGON_GALLERY } from '../data/achievements';

interface AchievementsSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = () => {
  
  const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  
  const columns = [
    
    {
      shift: 'down',
      items: [HEXAGON_GALLERY[3], HEXAGON_GALLERY[1]],
    },
    
    {
      shift: 'top',
      items: [
        {
          id: 'lead-exec-1',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
          alt: 'FinTech Executive Leadership',
        },
        HEXAGON_GALLERY[2],
        HEXAGON_GALLERY[4],
      ],
    },
    
    {
      shift: 'down',
      items: [HEXAGON_GALLERY[5], HEXAGON_GALLERY[6]],
    },
    
    {
      shift: 'top',
      items: [HEXAGON_GALLERY[7], HEXAGON_GALLERY[8]],
    },
    
    {
      shift: 'down',
      items: [HEXAGON_GALLERY[9], HEXAGON_GALLERY[10]],
    },
    
    {
      shift: 'top',
      items: [HEXAGON_GALLERY[11], HEXAGON_GALLERY[12]],
    },
    
    {
      shift: 'down',
      items: [HEXAGON_GALLERY[13], HEXAGON_GALLERY[14]],
    },
    
    {
      shift: 'top',
      items: [
        {
          id: 'lead-exec-2',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
          alt: 'Senior Web3 Specialist',
        },
        HEXAGON_GALLERY[15],
        HEXAGON_GALLERY[0],
      ],
    },
  ];

  return (
    <section 
      id="fintech-achievements-section" 
      className="relative w-full pt-8 pb-8 sm:pt-12 sm:pb-12 bg-white overflow-hidden"
    >
      {}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 -left-10 sm:-left-4 md:left-2 w-48 h-48 sm:w-64 sm:h-64 z-0 opacity-60"
      >
        <div className="relative w-full h-full">
          {}
          <div className="absolute top-0 left-4 w-32 h-32 sm:w-44 sm:h-44 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/40 to-[#1DA5B8]/10 backdrop-blur-xs" />
          {}
          <div className="absolute top-4 left-8 w-24 h-24 sm:w-34 sm:h-34 rotate-45 rounded-2xl border border-[#107C8E]/30 bg-gradient-to-br from-[#107C8E]/15 to-[#10566E]/10" />
          {}
          <div className="absolute top-8 left-12 w-16 h-16 sm:w-22 sm:h-22 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-80 shadow-md shadow-[#107C8E]/20" />
          {}
          <div className="absolute top-2 left-24 w-2.5 h-2.5 rounded-full bg-[#1DA5B8]" />
          <div className="absolute top-28 left-6 w-2 h-2 rounded-full bg-[#107C8E]" />
        </div>
      </div>

      {}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-10 -right-10 sm:-right-4 md:right-2 w-48 h-48 sm:w-64 sm:h-64 z-0 opacity-60"
      >
        <div className="relative w-full h-full">
          {}
          <div className="absolute bottom-0 right-4 w-32 h-32 sm:w-44 sm:h-44 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/40 to-[#1DA5B8]/10 backdrop-blur-xs" />
          {}
          <div className="absolute bottom-4 right-8 w-24 h-24 sm:w-34 sm:h-34 rotate-45 rounded-2xl border border-[#107C8E]/30 bg-gradient-to-br from-[#107C8E]/15 to-[#10566E]/10" />
          {}
          <div className="absolute bottom-8 right-12 w-16 h-16 sm:w-22 sm:h-22 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-80 shadow-md shadow-[#107C8E]/20" />
          {}
          <div className="absolute bottom-2 right-24 w-2.5 h-2.5 rounded-full bg-[#1DA5B8]" />
          <div className="absolute bottom-28 right-6 w-2 h-2 rounded-full bg-[#107C8E]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {}
        <div className="text-center max-w-4xl mx-auto space-y-2.5 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
            <span className="bg-gradient-to-r from-[#107C8E] via-[#1DA5B8] to-[#10566E] bg-clip-text text-transparent">
              FinTech Edge
            </span>{' '}
            <span className="text-[#1A314C]">Achievements</span>
          </h2>
          
          <p className="text-[#334A60] text-base sm:text-xl lg:text-2xl font-sans italic font-normal max-w-3xl mx-auto leading-relaxed px-2">
            Our commitment goes beyond serving our own business and clients as we strive to have a positive impact on people and communities.
          </p>
        </div>

        {}
        <div className="w-full flex justify-center items-start overflow-hidden py-2">
          
          {}
          <div className="hidden sm:flex justify-center items-start -space-x-3 md:-space-x-4 lg:-space-x-5 xl:-space-x-6 w-full max-w-6xl mx-auto">
            {columns.map((col, colIdx) => (
              <div 
                key={`col-${colIdx}`}
                className={`flex flex-col gap-2 md:gap-3 lg:gap-4 shrink-0 transition-transform duration-300 ${
                  col.shift === 'down' ? 'mt-8 md:mt-11 lg:mt-14' : 'mt-0'
                }`}
              >
                {col.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.id || `hex-${colIdx}-${itemIdx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: (colIdx * 0.04) + (itemIdx * 0.03) }}
                    className="w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-38 lg:w-38 lg:h-44 xl:w-42 xl:h-48 group cursor-pointer"
                  >
                    <div 
                      style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                      className="w-full h-full bg-white p-[2px] md:p-[3px] shadow-sm group-hover:scale-106 group-hover:z-30 transition-all duration-300"
                    >
                      <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C] relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover object-center group-hover:scale-112 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {}
          <div className="flex sm:hidden justify-center items-start -space-x-2.5 w-full overflow-hidden">
            {columns.slice(0, 5).map((col, colIdx) => (
              <div 
                key={`mob-col-${colIdx}`}
                className={`flex flex-col gap-1.5 shrink-0 ${
                  col.shift === 'down' ? 'mt-5' : 'mt-0'
                }`}
              >
                {col.items.slice(0, 2).map((item, itemIdx) => (
                  <div
                    key={`mob-hex-${colIdx}-${itemIdx}`}
                    className="w-18 h-21 group"
                  >
                    <div 
                      style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                      className="w-full h-full bg-white p-[1.5px] shadow-xs"
                    >
                      <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C] relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
