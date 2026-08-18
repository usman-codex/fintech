import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export const OurFoundersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const founders: Founder[] = [
    {
      id: 'abdul-rehman',
      name: 'Abdul Rehman Sarohy',
      role: 'Co Founder',
      // High-quality modern professional avatar
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      initials: 'AR',
      socials: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 'ali-zain',
      name: 'Ali Zain',
      role: 'Co Founder',
      // High-quality portrait matching the screenshot
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      initials: 'AZ',
      socials: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <section 
      id="our-founders-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER WITH SMOOTH ANIMATION                                  */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          {/* Top Badge: Our Founders —— in signature brand Teal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="text-base sm:text-lg font-bold text-[#107C8E] font-poppins">
              Our Founders
            </span>
            <span className="text-[#107C8E] font-bold tracking-widest text-lg">——</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins mb-4"
          >
            Our Expertise Will Help You
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins"
          >
            Collectively, we bring deep expertise across quantitative financial markets, blockchain protocols, and modern software engineering. We engage in hands-on mentorship, continuous research, and rigorous curriculum development to establish FinTech Edge Institute as the premier launchpad for future financial technologists.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 2. FOUNDER CARDS WITH BRAND CYAN BORDERS & DYNAMIC HOVER EFFECTS          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.85, opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.25 + index * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -7 }}
              className="group relative bg-white hover:bg-[#F0F8FA] rounded-3xl p-8 sm:p-10 border border-[#C9E5ED] hover:border-[#1DA5B8] shadow-sm hover:shadow-[0_20px_35px_-10px_rgba(16,124,142,0.16)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Circular Avatar Frame with Brand Border */}
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C9E5ED] group-hover:border-[#1DA5B8] shadow-md bg-gradient-to-br from-[#107C8E]/10 to-[#1DA5B8]/20 flex items-center justify-center transition-colors duration-300">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback initials avatar if image fails
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<span class="text-2xl font-bold text-[#1A314C] font-poppins">${founder.initials}</span>`;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Founder Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors duration-300 font-poppins mb-1">
                {founder.name}
              </h3>

              {/* Founder Role */}
              <p className="text-sm sm:text-base font-semibold text-[#107C8E] font-poppins mb-6">
                {founder.role}
              </p>

              {/* Social Media Links with Unique Distinct Hover Colors & Shadows */}
              <div className="flex items-center justify-center gap-3.5">
                
                {/* 1. Instagram: Distinct Pink/Purple Gradient Hover */}
                {founder.socials.instagram && (
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} Instagram`}
                    className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#E4405F] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-pink-500/25 hover:scale-115 transition-all duration-300"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                  </a>
                )}

                {/* 2. Facebook: Distinct Facebook Blue Hover */}
                {founder.socials.facebook && (
                  <a
                    href={founder.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} Facebook`}
                    className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#1877F2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-blue-500/25 hover:scale-115 transition-all duration-300"
                  >
                    <Facebook className="w-4.5 h-4.5 fill-current" />
                  </a>
                )}

                {/* 3. LinkedIn: Distinct LinkedIn Blue Hover */}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} LinkedIn`}
                    className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-sky-600/25 hover:scale-115 transition-all duration-300"
                  >
                    <Linkedin className="w-4.5 h-4.5 fill-current" />
                  </a>
                )}

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
