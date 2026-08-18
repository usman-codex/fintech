import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Animated Running Number Component with smooth ease-out curve
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
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
      
      // High-precision smooth easeOutExpo curve
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
    <span ref={ref} className="tabular-nums font-poppins">
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}
      {suffix}
    </span>
  );
};

export const WhyFintechSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section 
      id="why-fintech-section" 
      ref={sectionRef}
      className="relative w-full pt-10 pb-14 sm:pt-14 sm:pb-20 bg-[#FAFDFE] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with compact, tight spacing */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4 sm:mb-6 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
            Fintech Edge <span className="text-[#107C8E] font-bold">Institute</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F58220] via-[#00C2CB] to-[#107C8E] rounded-full mt-2.5"></div>
        </motion.div>

        {/* 🌟 DESKTOP & TABLET: COMPACT 0-GAP RADIAL SHOWCASE WITH PERFECT CONCENTRIC RAINBOW GAUGE */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block select-none">
          <svg 
            viewBox="0 0 1000 550" 
            className="w-full h-auto drop-shadow-xs overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Premium Realistic Layered 3D Drop Shadow for Floating Cards */}
              <filter id="card-depth-shadow" x="-35%" y="-35%" width="170%" height="190%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#122A42" floodOpacity="0.12" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#122A42" floodOpacity="0.06" />
              </filter>

              {/* Elevated Center Hero Card Shadow */}
              <filter id="hero-depth-shadow" x="-40%" y="-40%" width="180%" height="200%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#122A42" floodOpacity="0.15" />
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#122A42" floodOpacity="0.08" />
              </filter>

              {/* Center Circle Shadow */}
              <filter id="center-badge-shadow" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#122A42" floodOpacity="0.11" />
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#122A42" floodOpacity="0.05" />
              </filter>

              {/* Rainbow Gradient for Concentric Gauge Arc */}
              <linearGradient id="rainbow-timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F58220" />
                <stop offset="25%" stopColor="#00C2CB" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="75%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              {/* Card Face Gradient */}
              <linearGradient id="card-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FAFCFD" />
              </linearGradient>
            </defs>

            {/* ========================================================================= */}
            {/* 1. SOLID CONNECTOR LINES (DIRECTLY TOUCHING BOTH THE CARDS AND NUMBERS)    */}
            {/* Color: #1A314C | Stroke: 2.2px solid                                      */}
            {/* ========================================================================= */}

            {/* LINE 1 (LEFT BRACKET): Touches the left edge of Card 1 at (285, 145) -> turns down to (200, 145) -> goes down to (200, 230) touching above 412+ */}
            <path
              d="M 285 145 L 200 145 L 200 230"
              stroke="#1A314C"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="square"
            />

            {/* LINE 2 (BOTTOM-LEFT): Touches the bottom tip of Card 2 at (365, 290) -> goes down to (340, 395) touching above 682+ */}
            <line
              x1="365"
              y1="290"
              x2="340"
              y2="395"
              stroke="#1A314C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* LINE 3 (BOTTOM-CENTER): Touches the bottom tip of Center Card 3 at (500, 345) -> goes straight down to (500, 430) touching above 95+ */}
            <line
              x1="500"
              y1="345"
              x2="500"
              y2="430"
              stroke="#1A314C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* LINE 4 (BOTTOM-RIGHT): Touches the bottom tip of Card 4 at (635, 290) -> goes down to (660, 395) touching above 3.5M$ */}
            <line
              x1="635"
              y1="290"
              x2="660"
              y2="395"
              stroke="#1A314C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* LINE 5 (RIGHT BRACKET): Touches the right edge of Card 5 at (715, 145) -> turns right to (800, 145) -> goes down to (800, 230) touching above 99% */}
            <path
              d="M 715 145 L 800 145 L 800 230"
              stroke="#1A314C"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="square"
            />

            {/* ========================================================================= */}
            {/* 2. CONCENTRIC RAINBOW GAUGE ARC (TIGHTLY HUGGING THE "SINCE 2020" CIRCLE)  */}
            {/* Center = (500, 95), Arc Radius = 76px (Hugging 68px Circle Perfectly)    */}
            {/* ========================================================================= */}
            <g>
              {/* Perfectly Concentric Curved Arc */}
              <path
                d="M 425 105 A 76 76 0 0 0 575 105"
                stroke="url(#rainbow-timeline-grad)"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
              />

              {/* 5 Concentric Nodes positioned along the Arc */}
              {/* Node 1: Orange (Left) */}
              <circle cx="425" cy="105" r="4.5" fill="#F58220" />
              <circle cx="425" cy="105" r="2" fill="white" />

              {/* Node 2: Cyan */}
              <circle cx="450" cy="151" r="4.5" fill="#00C2CB" />
              <circle cx="450" cy="151" r="2" fill="white" />

              {/* Node 3: Sky Blue (Bottom-Center) */}
              <circle cx="500" cy="171" r="5.5" fill="#0284C7" stroke="white" strokeWidth="1.5" />
              <circle cx="500" cy="171" r="2.5" fill="white" />

              {/* Node 4: Pink */}
              <circle cx="550" cy="151" r="4.5" fill="#EC4899" />
              <circle cx="550" cy="151" r="2" fill="white" />

              {/* Node 5: Purple (Right) */}
              <circle cx="575" cy="105" r="4.5" fill="#8B5CF6" />
              <circle cx="575" cy="105" r="2" fill="white" />
            </g>

            {/* ========================================================================= */}
            {/* 3. FIVE EXACT RADIALLY-POSITIONED 3D FLOATING CARDS                       */}
            {/* ========================================================================= */}

            {/* CARD 1 (`deg180`): Top-Left (Slanted Pencil Icon) - Center (335, 145) - Rotated -24 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(1)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(335, 145) rotate(-24) ${hoveredCard === 1 ? 'scale(1.05) translate(0, -6)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -48 -68
                   C -20 -75, 20 -75, 48 -68
                   C 58 -66, 64 -57, 61 -48
                   L 46 58
                   C 43 68, 33 74, 22 75
                   C 0 77, -22 77, -42 73
                   C -53 71, -59 63, -58 52
                   L -58 -52
                   C -58 -62, -54 -67, -48 -68 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-depth-shadow)"
              />

              {/* Icon 1: Charcoal Slanted Pencil */}
              <g transform="translate(-4, -2) rotate(-15) scale(1.15)">
                <path 
                  d="M 12 -14 L 18 -8 L -4 14 L -12 16 L -10 8 Z" 
                  fill="#1A314C" 
                />
                <path 
                  d="M 15 -17 L 21 -11 L 18 -8 L 12 -14 Z" 
                  fill="#1A314C" 
                />
              </g>
            </g>

            {/* CARD 2 (`deg135`): Middle-Left (Magnifying Glass Search Icon) - Center (395, 245) - Rotated -12 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(2)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(395, 245) rotate(-12) ${hoveredCard === 2 ? 'scale(1.05) translate(0, -6)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -48 -68
                   C -20 -75, 20 -75, 48 -68
                   C 58 -66, 64 -57, 61 -48
                   L 46 58
                   C 43 68, 33 74, 22 75
                   C 0 77, -22 77, -42 73
                   C -53 71, -59 63, -58 52
                   L -58 -52
                   C -58 -62, -54 -67, -48 -68 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-depth-shadow)"
              />

              {/* Icon 2: Charcoal Magnifying Glass */}
              <g transform="translate(-6, 2) rotate(-25) scale(1.15)">
                <circle cx="0" cy="0" r="13" stroke="#1A314C" strokeWidth="4.5" fill="none" />
                <line x1="9" y1="9" x2="21" y2="21" stroke="#1A314C" strokeWidth="5.5" strokeLinecap="round" />
              </g>
            </g>

            {/* CARD 4 (`deg45`): Middle-Right (Presentation Board Graph Icon) - Center (605, 245) - Rotated +12 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(4)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(605, 245) rotate(12) ${hoveredCard === 4 ? 'scale(1.05) translate(0, -6)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -48 -68
                   C -20 -75, 20 -75, 48 -68
                   C 58 -66, 64 -57, 61 -48
                   L 46 58
                   C 43 68, 33 74, 22 75
                   C 0 77, -22 77, -42 73
                   C -53 71, -59 63, -58 52
                   L -58 -52
                   C -58 -62, -54 -67, -48 -68 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-depth-shadow)"
              />

              {/* Icon 4: Presentation Board with Growth Line */}
              <g transform="translate(-2, 2) scale(1.15)">
                <rect x="-16" y="-13" width="32" height="21" rx="3" fill="#1A314C" />
                <line x1="0" y1="8" x2="0" y2="15" stroke="#1A314C" strokeWidth="3" />
                <line x1="-8" y1="15" x2="8" y2="15" stroke="#1A314C" strokeWidth="3" strokeLinecap="round" />
                <path d="M -10 1 L -4 -5 L 2 -2 L 10 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* CARD 5 (`deg0`): Top-Right (Checklist with Checks Icon) - Center (665, 145) - Rotated +24 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(5)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(665, 145) rotate(24) ${hoveredCard === 5 ? 'scale(1.05) translate(0, -6)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -48 -68
                   C -20 -75, 20 -75, 48 -68
                   C 58 -66, 64 -57, 61 -48
                   L 46 58
                   C 43 68, 33 74, 22 75
                   C 0 77, -22 77, -42 73
                   C -53 71, -59 63, -58 52
                   L -58 -52
                   C -58 -62, -54 -67, -48 -68 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-depth-shadow)"
              />

              {/* Icon 5: Task List with Checks */}
              <g transform="translate(-2, 0) scale(1.15)">
                <circle cx="-10" cy="-10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="-12" width="20" height="4.5" rx="2.25" fill="#1A314C" />
                <circle cx="-10" cy="0" r="3.6" fill="#1A314C" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4.5" rx="2.25" fill="#1A314C" />
                <circle cx="-10" cy="10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="8" width="20" height="4.5" rx="2.25" fill="#1A314C" />
              </g>
            </g>

            {/* CARD 3 (`deg90`): Center-Bottom (Team Member with Suit & Tie) - Center (500, 275) - Placed in Front Layer */}
            <g 
              onMouseEnter={() => setHoveredCard(3)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 275) ${hoveredCard === 3 ? 'scale(1.05) translate(0, -6)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -52 -74
                   C -22 -82, 22 -82, 52 -74
                   C 64 -71, 70 -62, 66 -52
                   L 48 66
                   C 44 76, 34 82, 23 83
                   C 0 85, -23 85, -45 81
                   C -56 78, -63 70, -62 58
                   L -62 -58
                   C -62 -68, -58 -73, -52 -74 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#hero-depth-shadow)"
              />

              {/* Icon 3: Professional Person with Tie Silhouette */}
              <g transform="translate(0, 5) scale(1.35)">
                <circle cx="0" cy="-14" r="8" fill="#1A314C" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill="#1A314C" />
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill="#1A314C" />
              </g>
            </g>

            {/* ========================================================================= */}
            {/* 4. CENTRAL CIRCULAR BADGE ("Since 2020")                                  */}
            {/* ========================================================================= */}
            <g transform="translate(500, 95)">
              <circle 
                cx="0" 
                cy="0" 
                r="68" 
                fill="#FFFFFF" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                filter="url(#center-badge-shadow)" 
              />
              
              <text 
                x="0" 
                y="-15" 
                textAnchor="middle" 
                fill="#4A5D6E" 
                fontSize="14" 
                fontWeight="700"
                fontFamily="Poppins, sans-serif"
              >
                Since
              </text>
              <text 
                x="0" 
                y="18" 
                textAnchor="middle" 
                fill="#F58220" 
                fontSize="28" 
                fontWeight="900"
                fontFamily="Poppins, sans-serif"
                letterSpacing="-0.5px"
              >
                2020
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 5. PRECISE RUNNING NUMBER STATS (PERFECTLY CONNECTED TO LINES)           */}
            {/* ========================================================================= */}

            {/* STAT 1: Left - 412+ Projects Completed */}
            <foreignObject x="120" y="240" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-poppins">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Projects<br />Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Bottom-Left - 682+ Positive Reviews */}
            <foreignObject x="260" y="405" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-poppins">
                  <AnimatedNumber value={682} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Positive<br />Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Bottom-Center - 95+ Team Members */}
            <foreignObject x="420" y="440" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-poppins">
                  <AnimatedNumber value={95} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Team<br />Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Bottom-Right - 3.5M$ Funding Raised */}
            <foreignObject x="580" y="405" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-poppins">
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Funding<br />Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right - 99% Customer Satisfaction */}
            <foreignObject x="720" y="240" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-poppins">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Customer<br />Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE ADAPTATION */}
        <div className="md:hidden space-y-6">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-white shadow-xl border border-[#C9E5ED] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#4A5D6E] font-poppins">Since</span>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile 5 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Projects Completed</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={682} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Positive Reviews</span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="6.5" r="4.5" />
                <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={95} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Team Members</span>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="13" rx="2" fill="#1A314C" />
                <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Funding Raised</span>
            </div>

            {/* Card 5 */}
            <div className="col-span-2 sm:col-span-1 bg-white p-4 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="6" r="2" />
                <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                <circle cx="5" cy="12" r="2.2" />
                <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" />
                <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-poppins">
                <AnimatedNumber value={99} suffix="%" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Customer Satisfaction</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
