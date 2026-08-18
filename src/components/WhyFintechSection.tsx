import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Animated Running Number Component
interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}
      {suffix}
    </span>
  );
};

export const WhyFintechSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="why-fintech-section" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-[#FAFDFE] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight font-heading">
            Why FinTech
          </h2>
        </motion.div>

        {/* 🌟 DESKTOP & TABLET: Pixel-Perfect Radial Fan Showcase with Exact Geometry & Connectors */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          
          {/* Main Visual Container */}
          <div className="relative w-full h-[520px] lg:h-[560px]">

            {/* 1. Center Circle: "Since 2020" with Colorful Arc & Dots */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[4%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
            >
              <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-white shadow-[0_12px_40px_rgba(26,49,76,0.12)] border border-[#C9E5ED]/60 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105">
                <span className="text-sm font-bold text-[#4A5D6E] tracking-tight">Since</span>
                <span className="text-2xl lg:text-3xl font-black text-[#F58220] tracking-tight font-heading mt-0.5">
                  <AnimatedNumber value={2020} duration={1500} />
                </span>
              </div>

              {/* Rainbow Bottom Arc with 5 Colored Nodes */}
              <div className="relative -mt-10 w-48 h-20 pointer-events-none">
                <svg viewBox="0 0 192 80" fill="none" className="w-full h-full">
                  <path
                    d="M 16 10 C 24 55, 168 55, 176 10"
                    stroke="url(#rainbow-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F58220" />
                      <stop offset="25%" stopColor="#00C2CB" />
                      <stop offset="50%" stopColor="#0284C7" />
                      <stop offset="75%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Node 1: Orange */}
                  <circle cx="16" cy="10" r="3.5" fill="#F58220" />
                  {/* Node 2: Cyan */}
                  <circle cx="38" cy="38" r="3.5" fill="#00C2CB" />
                  {/* Node 3: Sky Blue */}
                  <circle cx="96" cy="54" r="4.5" fill="#0284C7" stroke="white" strokeWidth="1.5" />
                  {/* Node 4: Pink */}
                  <circle cx="154" cy="38" r="3.5" fill="#EC4899" />
                  {/* Node 5: Purple */}
                  <circle cx="176" cy="10" r="3.5" fill="#8B5CF6" />
                </svg>
              </div>
            </motion.div>

            {/* 2. FIVE RADIAL FAN PETAL CARDS (ARRANGED IN A SEMI-CIRCLE ARC) */}
            
            {/* Petal 1: Top-Left (Pencil Icon) */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -25 }}
              whileInView={{ opacity: 1, x: 0, rotate: -18 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[8%] left-[23%] lg:left-[24%] z-20"
            >
              <div className="w-28 h-36 lg:w-32 lg:h-40 bg-white rounded-3xl shadow-[0_16px_36px_rgba(26,49,76,0.11)] border border-[#C9E5ED]/70 flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300 group cursor-pointer">
                {/* Pencil SVG */}
                <svg className="w-9 h-9 lg:w-10 lg:h-10 text-[#1A314C] group-hover:text-[#F58220] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" fill="#1A314C" className="group-hover:fill-[#F58220] transition-colors" />
                </svg>
              </div>
            </motion.div>

            {/* Petal 2: Mid-Left (Magnifying Glass Icon) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 40, rotate: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: -9 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[28%] left-[30%] lg:left-[31%] z-20"
            >
              <div className="w-28 h-36 lg:w-32 lg:h-40 bg-white rounded-3xl shadow-[0_16px_36px_rgba(26,49,76,0.11)] border border-[#C9E5ED]/70 flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300 group cursor-pointer">
                {/* Search Magnifying Glass SVG */}
                <svg className="w-9 h-9 lg:w-10 lg:h-10 text-[#1A314C] group-hover:text-[#00C2CB] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </motion.div>

            {/* Petal 3: Bottom-Center (Professional Team Member Icon) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[38%] left-1/2 -translate-x-1/2 z-20"
            >
              <div className="w-28 h-36 lg:w-32 lg:h-40 bg-white rounded-3xl shadow-[0_16px_36px_rgba(26,49,76,0.13)] border border-[#C9E5ED]/70 flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300 group cursor-pointer">
                {/* Person in Suit / Tie Silhouette SVG */}
                <svg className="w-10 h-10 lg:w-11 lg:h-11 text-[#1A314C] group-hover:text-[#0284C7] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="6.5" r="4.5" />
                  <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
                </svg>
              </div>
            </motion.div>

            {/* Petal 4: Mid-Right (Growth Presentation Chart Icon) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 40, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 9 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[28%] right-[30%] lg:right-[31%] z-20"
            >
              <div className="w-28 h-36 lg:w-32 lg:h-40 bg-white rounded-3xl shadow-[0_16px_36px_rgba(26,49,76,0.11)] border border-[#C9E5ED]/70 flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300 group cursor-pointer">
                {/* Presentation Board with Upward Trend Graph */}
                <svg className="w-9 h-9 lg:w-10 lg:h-10 text-[#1A314C] group-hover:text-[#EC4899] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="13" rx="2" fill="#1A314C" className="group-hover:fill-[#EC4899] transition-colors" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="16" x2="12" y2="21" />
                  {/* White Trend Arrow */}
                  <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
                  <polyline points="14 6 17 6 17 9" stroke="white" strokeWidth="1.8" />
                </svg>
              </div>
            </motion.div>

            {/* Petal 5: Top-Right (Task Checklist with Checkmarks Icon) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 25 }}
              whileInView={{ opacity: 1, x: 0, rotate: 18 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[8%] right-[23%] lg:right-[24%] z-20"
            >
              <div className="w-28 h-36 lg:w-32 lg:h-40 bg-white rounded-3xl shadow-[0_16px_36px_rgba(26,49,76,0.11)] border border-[#C9E5ED]/70 flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300 group cursor-pointer">
                {/* Checklist with Bullets & Checkmarks SVG */}
                <svg className="w-9 h-9 lg:w-10 lg:h-10 text-[#1A314C] group-hover:text-[#8B5CF6] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  {/* Item 1 */}
                  <circle cx="5" cy="6" r="2" />
                  <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                  {/* Item 2 with check */}
                  <circle cx="5" cy="12" r="2.2" />
                  <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
                  <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
                  {/* Item 3 */}
                  <circle cx="5" cy="18" r="2" />
                  <rect x="9" y="16.8" width="11" height="2.4" rx="1.2" />
                </svg>
              </div>
            </motion.div>

            {/* 3. CONNECTING BRACKET LINES AND 5 RUNNING NUMBER STATS */}

            {/* Stat 1: 412+ Projects Completed (Far Left with Bracket Connector) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[28%] left-[2%] lg:left-[5%] flex items-center gap-3 z-10"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[110px]">
                  Projects Completed
                </span>
              </div>

              {/* Bracket Connector Line to Petal 1 */}
              <div className="w-8 h-18 border-t-2 border-r-2 border-b-2 border-[#1A314C]/70 rounded-r-lg" />
            </motion.div>

            {/* Stat 2: 682+ Positive Reviews (Bottom Left with Angled Connector) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[2%] left-[26%] lg:left-[28%] flex flex-col items-center text-center z-10"
            >
              {/* Connector Line pointing to Petal 2 */}
              <div className="w-[2px] h-10 bg-[#1A314C]/70 mb-2 transform -rotate-12" />
              <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                <AnimatedNumber value={682} suffix="+" />
              </span>
              <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                Positive Reviews
              </span>
            </motion.div>

            {/* Stat 3: 95+ Team Members (Bottom Center with Vertical Connector) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10"
            >
              {/* Vertical Connector Line pointing to Petal 3 */}
              <div className="w-[2px] h-10 bg-[#1A314C]/70 mb-2" />
              <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                <AnimatedNumber value={95} suffix="+" />
              </span>
              <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                Team Members
              </span>
            </motion.div>

            {/* Stat 4: 3.5M$ Funding Raised (Bottom Right with Angled Connector) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[2%] right-[26%] lg:right-[28%] flex flex-col items-center text-center z-10"
            >
              {/* Connector Line pointing to Petal 4 */}
              <div className="w-[2px] h-10 bg-[#1A314C]/70 mb-2 transform rotate-12" />
              <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                Funding Raised
              </span>
            </motion.div>

            {/* Stat 5: 99% Customer Satisfaction (Far Right with Bracket Connector) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[28%] right-[2%] lg:right-[5%] flex items-center gap-3 z-10"
            >
              {/* Bracket Connector Line to Petal 5 */}
              <div className="w-8 h-18 border-t-2 border-l-2 border-b-2 border-[#1A314C]/70 rounded-l-lg" />
              
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[110px]">
                  Customer Satisfaction
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 📱 MOBILE VIEW: Clean Responsive Stack with Same Running Numbers & Card Icons */}
        <div className="md:hidden space-y-10">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-[#C9E5ED] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#4A5D6E]">Since</span>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Projects Completed</span>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={682} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Positive Reviews</span>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="6.5" r="4.5" />
                <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={95} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Team Members</span>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="13" rx="2" fill="#1A314C" />
                <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Funding Raised</span>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="6" r="2" />
                <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                <circle cx="5" cy="12" r="2.2" />
                <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" />
                <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={99} suffix="%" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Customer Satisfaction</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
