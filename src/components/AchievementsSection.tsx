import React from 'react';
import { motion } from 'motion/react';
import { HEXAGON_GALLERY } from '../data/achievements';

interface AchievementsSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = () => {
  // Hexagon mask clip path
  const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  return (
    <section 
      id="fintech-achievements-section" 
      className="relative w-full py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header with exact typography styling from screenshot */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A314C] tracking-tight font-heading">
            FinTech Edge Achievements
          </h2>
          
          <p className="text-[#334A60] text-lg sm:text-2xl lg:text-3xl font-sans italic font-light max-w-3xl mx-auto leading-relaxed">
            Our commitment goes beyond serving our own business and clients as we strive to have a positive impact on people and communities.
          </p>
        </div>

        {/* 2. Exact Interlocking Honeycomb Hexagonal Wall (Pure Clean Photos - No text on images) */}
        
        {/* Desktop / Tablet View: Continuous Interlocking Honeycomb Wall */}
        <div className="hidden lg:block w-full overflow-x-auto pb-6">
          <div className="min-w-[1100px] max-w-[1300px] mx-auto relative pt-8 pb-4">
            
            {/* COLUMN 1: Far Left (Building / Campus) */}
            <div className="absolute left-[0%] top-[45px] w-[140px] h-[162px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[3].image}
                    alt={HEXAGON_GALLERY[3].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute left-[0%] top-[215px] w-[140px] h-[162px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[1].image}
                    alt={HEXAGON_GALLERY[1].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 2: Top Left Prominent Leader (Raised Hexagon) */}
            <div className="absolute left-[105px] -top-[40px] w-[190px] h-[220px] z-20">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="FinTech Edge Executive"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[105px] top-[130px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[2].image}
                    alt={HEXAGON_GALLERY[2].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[105px] top-[300px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[4].image}
                    alt={HEXAGON_GALLERY[4].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 3: Left-Center */}
            <div className="absolute left-[250px] top-[215px] w-[180px] h-[208px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[5].image}
                    alt={HEXAGON_GALLERY[5].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 4: Center-Left Upper */}
            <div className="absolute left-[385px] top-[130px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[7].image}
                    alt={HEXAGON_GALLERY[7].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[385px] top-[300px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[6].image}
                    alt={HEXAGON_GALLERY[6].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 5: Center Center */}
            <div className="absolute left-[530px] top-[215px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[8].image}
                    alt={HEXAGON_GALLERY[8].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 6: Center-Right Upper & Lower */}
            <div className="absolute left-[675px] top-[130px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[10].image}
                    alt={HEXAGON_GALLERY[10].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[675px] top-[300px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[9].image}
                    alt={HEXAGON_GALLERY[9].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 7: Right Middle */}
            <div className="absolute left-[820px] top-[215px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[11].image}
                    alt={HEXAGON_GALLERY[11].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 8: Right Prominent Leader (Raised Hexagon) */}
            <div className="absolute left-[965px] -top-[40px] w-[190px] h-[220px] z-20">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[12].image}
                    alt={HEXAGON_GALLERY[12].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[965px] top-[130px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[13].image}
                    alt={HEXAGON_GALLERY[13].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[965px] top-[300px] w-[190px] h-[220px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3.5px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[14].image}
                    alt={HEXAGON_GALLERY[14].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 9: Far Right (Office Space) */}
            <div className="absolute left-[1110px] top-[45px] w-[140px] h-[162px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[15].image}
                    alt={HEXAGON_GALLERY[15].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[1110px] top-[215px] w-[140px] h-[162px] z-10">
              <div 
                style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                className="w-full h-full bg-white p-[3px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                  <img
                    src={HEXAGON_GALLERY[0].image}
                    alt={HEXAGON_GALLERY[0].alt}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Spacer to maintain container height */}
            <div className="h-[520px]" />
          </div>
        </div>

        {/* Medium & Mobile View: Staggered Honeycomb Responsive Flow */}
        <div className="lg:hidden w-full py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
            {HEXAGON_GALLERY.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="w-36 h-42 sm:w-44 sm:h-52"
              >
                <div 
                  style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                  className="w-full h-full bg-white p-[2.5px] shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  <div style={{ clipPath: hexClip, WebkitClipPath: hexClip }} className="w-full h-full bg-[#1A314C]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
