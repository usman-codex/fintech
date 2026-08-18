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
      className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-24 bg-[#FAFAFA] overflow-hidden border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Google Font Poppins */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] tracking-tight font-poppins">
            Fintech Edge <span className="text-[#107C8E] font-bold">Institute</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF9700] via-[#00C2CB] to-[#107C8E] rounded-full mt-2.5"></div>
        </motion.div>

        {/* 🌟 100% EXACT PIXEL-PERFECT RADIAL FAN SHOWCASE (MATCHING SCREENSHOT) */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block select-none">
          <svg 
            viewBox="0 0 1000 580" 
            className="w-full h-auto overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Premium Realistic Layered 3D Drop Shadow matching the screenshot */}
              <filter id="petal-shadow" x="-40%" y="-40%" width="180%" height="190%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.13" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.07" />
              </filter>

              {/* Elevated Center Hero Card Shadow */}
              <filter id="hero-petal-shadow" x="-45%" y="-45%" width="190%" height="200%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.17" />
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.09" />
              </filter>

              {/* Center Circle Shadow */}
              <filter id="center-badge-shadow" x="-35%" y="-35%" width="170%" height="170%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.14" />
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.06" />
              </filter>

              {/* Multi-Color Rainbow Arc Gradient */}
              <linearGradient id="rainbow-timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9700" />
                <stop offset="25%" stopColor="#00C2CB" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="75%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              {/* Card Surface Gradient */}
              <linearGradient id="card-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* ========================================================================= */}
            {/* 1. THIN SHARP CONNECTOR LINES (DIRECTLY TOUCHING BOTH CARDS & NUMBERS)    */}
            {/* Color: #334155 | Width: 2px                                               */}
            {/* ========================================================================= */}

            {/* LINE 1 (LEFT BRACKET): 
                Touches outer edge of Card 1 at (280, 160) -> goes left to (195, 160) -> goes down to (195, 245) touching above 412+ */}
            <path
              d="M 280 160 L 195 160 L 195 245"
              stroke="#334155"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* LINE 2 (BOTTOM-LEFT): 
                Touches bottom edge of Card 2 at (360, 315) -> goes down-left to (330, 420) touching above 682+ */}
            <line
              x1="360"
              y1="315"
              x2="330"
              y2="420"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* LINE 3 (BOTTOM-CENTER): 
                Touches bottom tip of Center Card 3 at (500, 360) -> goes straight down to (500, 455) touching above 95+ */}
            <line
              x1="500"
              y1="360"
              x2="500"
              y2="455"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* LINE 4 (BOTTOM-RIGHT): 
                Touches bottom edge of Card 4 at (640, 315) -> goes down-right to (670, 420) touching above 3.5M$ */}
            <line
              x1="640"
              y1="315"
              x2="670"
              y2="420"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* LINE 5 (RIGHT BRACKET): 
                Touches outer edge of Card 5 at (720, 160) -> goes right to (805, 160) -> goes down to (805, 245) touching above 99% */}
            <path
              d="M 720 160 L 805 160 L 805 245"
              stroke="#334155"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* ========================================================================= */}
            {/* 2. THE 5 EXACT CURVED RADIAL FAN PETALS / CARDS                           */}
            {/* Center Origin: (500, 110)                                                 */}
            {/* Petal Dimensions: Top Width 78px, Bottom Width 118px, Height 118px        */}
            {/* ========================================================================= */}

            {/* PETAL 1 (`deg180`): Top-Left (Slanted Pencil Icon) - Angle -70 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(1)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 110) rotate(-70) translate(0, 112) ${hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)'}`}
            >
              {/* Rounded 3D Fan Wedge Geometry */}
              <path
                d="M -39 -58
                   C -18 -64, 18 -64, 39 -58
                   C 48 -55, 54 -47, 51 -38
                   L 42 46
                   C 39 55, 30 60, 20 61
                   C 0 63, -20 63, -38 59
                   C -48 57, -54 49, -53 39
                   L -51 -40
                   C -51 -49, -47 -55, -39 -58 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                filter="url(#petal-shadow)"
              />

              {/* Icon 1: Slanted Pencil (Hover Color: Vibrant Orange #FF9700) */}
              <g transform="rotate(70) translate(-3, 0) rotate(-20) scale(1.15)">
                <path 
                  d="M 12 -14 L 18 -8 L -4 14 L -12 16 L -10 8 Z" 
                  fill={hoveredCard === 1 ? "#FF9700" : "#1E293B"} 
                  className="transition-colors duration-300"
                />
                <path 
                  d="M 15 -17 L 21 -11 L 18 -8 L 12 -14 Z" 
                  fill={hoveredCard === 1 ? "#FF9700" : "#1E293B"} 
                  className="transition-colors duration-300"
                />
              </g>
            </g>

            {/* PETAL 2 (`deg135`): Bottom-Left (Magnifying Glass Search Icon) - Angle -35 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(2)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 110) rotate(-35) translate(0, 115) ${hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)'}`}
            >
              <path
                d="M -39 -58
                   C -18 -64, 18 -64, 39 -58
                   C 48 -55, 54 -47, 51 -38
                   L 42 46
                   C 39 55, 30 60, 20 61
                   C 0 63, -20 63, -38 59
                   C -48 57, -54 49, -53 39
                   L -51 -40
                   C -51 -49, -47 -55, -39 -58 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                filter="url(#petal-shadow)"
              />

              {/* Icon 2: Magnifying Glass (Hover Color: Vibrant Cyan #00C2CB) */}
              <g transform="rotate(35) translate(-4, 2) rotate(-25) scale(1.15)">
                <circle 
                  cx="0" 
                  cy="0" 
                  r="13" 
                  stroke={hoveredCard === 2 ? "#00C2CB" : "#1E293B"} 
                  strokeWidth="4.5" 
                  fill="none" 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="9" 
                  y1="9" 
                  x2="21" 
                  y2="21" 
                  stroke={hoveredCard === 2 ? "#00C2CB" : "#1E293B"} 
                  strokeWidth="5.5" 
                  strokeLinecap="round" 
                  className="transition-colors duration-300"
                />
              </g>
            </g>

            {/* PETAL 4 (`deg45`): Bottom-Right (Presentation Board Graph Icon) - Angle +35 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(4)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 110) rotate(35) translate(0, 115) ${hoveredCard === 4 ? 'scale(1.05)' : 'scale(1)'}`}
            >
              <path
                d="M -39 -58
                   C -18 -64, 18 -64, 39 -58
                   C 48 -55, 54 -47, 51 -38
                   L 42 46
                   C 39 55, 30 60, 20 61
                   C 0 63, -20 63, -38 59
                   C -48 57, -54 49, -53 39
                   L -51 -40
                   C -51 -49, -47 -55, -39 -58 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                filter="url(#petal-shadow)"
              />

              {/* Icon 4: Presentation Board with Growth Line (Hover Color: Vibrant Rose/Pink #EC4899) */}
              <g transform="rotate(-35) translate(-2, 2) scale(1.15)">
                <rect 
                  x="-16" 
                  y="-13" 
                  width="32" 
                  height="21" 
                  rx="3" 
                  fill={hoveredCard === 4 ? "#EC4899" : "#1E293B"} 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="0" 
                  y1="8" 
                  x2="0" 
                  y2="15" 
                  stroke={hoveredCard === 4 ? "#EC4899" : "#1E293B"} 
                  strokeWidth="3" 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="-8" 
                  y1="15" 
                  x2="8" 
                  y2="15" 
                  stroke={hoveredCard === 4 ? "#EC4899" : "#1E293B"} 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="transition-colors duration-300"
                />
                <path d="M -10 1 L -4 -5 L 2 -2 L 10 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* PETAL 5 (`deg0`): Top-Right (Checklist with Checks Icon) - Angle +70 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(5)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 110) rotate(70) translate(0, 112) ${hoveredCard === 5 ? 'scale(1.05)' : 'scale(1)'}`}
            >
              <path
                d="M -39 -58
                   C -18 -64, 18 -64, 39 -58
                   C 48 -55, 54 -47, 51 -38
                   L 42 46
                   C 39 55, 30 60, 20 61
                   C 0 63, -20 63, -38 59
                   C -48 57, -54 49, -53 39
                   L -51 -40
                   C -51 -49, -47 -55, -39 -58 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                filter="url(#petal-shadow)"
              />

              {/* Icon 5: Task List with Checks (Hover Color: Vibrant Purple #8B5CF6) */}
              <g transform="rotate(-70) translate(-2, 0) scale(1.15)">
                <circle cx="-10" cy="-10" r="3.2" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
                <rect x="-3" y="-12" width="20" height="4.5" rx="2.25" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
                <circle cx="-10" cy="0" r="3.6" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4.5" rx="2.25" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
                <circle cx="-10" cy="10" r="3.2" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
                <rect x="-3" y="8" width="20" height="4.5" rx="2.25" fill={hoveredCard === 5 ? "#8B5CF6" : "#1E293B"} className="transition-colors duration-300" />
              </g>
            </g>

            {/* PETAL 3 (`deg90`): Center-Bottom (Team Member in Suit & Tie) - Angle 0 deg (Straight Down & Elevated) */}
            <g 
              onMouseEnter={() => setHoveredCard(3)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 110) translate(0, 120) ${hoveredCard === 3 ? 'scale(1.06)' : 'scale(1)'}`}
            >
              <path
                d="M -42 -62
                   C -20 -68, 20 -68, 42 -62
                   C 52 -59, 58 -51, 55 -41
                   L 46 50
                   C 43 60, 32 66, 22 67
                   C 0 69, -22 69, -42 65
                   C -52 63, -58 55, -57 44
                   L -55 -43
                   C -55 -53, -50 -59, -42 -62 Z"
                fill="url(#card-surface-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.4"
                filter="url(#hero-petal-shadow)"
              />

              {/* Icon 3: Professional Person with Tie Silhouette (Hover Color: Sky Blue #0284C7) */}
              <g transform="translate(0, 4) scale(1.35)">
                <circle cx="0" cy="-14" r="8" fill={hoveredCard === 3 ? "#0284C7" : "#1E293B"} className="transition-colors duration-300" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill={hoveredCard === 3 ? "#0284C7" : "#1E293B"} className="transition-colors duration-300" />
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill={hoveredCard === 3 ? "#0284C7" : "#1E293B"} className="transition-colors duration-300" />
              </g>
            </g>

            {/* ========================================================================= */}
            {/* 3. CONCENTRIC RAINBOW GAUGE ARC & 5 NODES (HUGGING CENTER CIRCLE)         */}
            {/* ========================================================================= */}
            <g>
              {/* Concentric Rainbow Curved Path */}
              <path
                d="M 426 118 A 78 78 0 0 0 574 118"
                stroke="url(#rainbow-timeline-grad)"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
              />

              {/* Node 1: Orange (Left) */}
              <circle cx="426" cy="118" r="4.5" fill="#FF9700" />
              <circle cx="426" cy="118" r="2" fill="white" />

              {/* Node 2: Cyan */}
              <circle cx="448" cy="164" r="4.5" fill="#00C2CB" />
              <circle cx="448" cy="164" r="2" fill="white" />

              {/* Node 3: Sky Blue (Bottom-Center) */}
              <circle cx="500" cy="188" r="5.5" fill="#0284C7" stroke="white" strokeWidth="1.5" />
              <circle cx="500" cy="188" r="2.5" fill="white" />

              {/* Node 4: Pink */}
              <circle cx="552" cy="164" r="4.5" fill="#EC4899" />
              <circle cx="552" cy="164" r="2" fill="white" />

              {/* Node 5: Purple (Right) */}
              <circle cx="574" cy="118" r="4.5" fill="#8B5CF6" />
              <circle cx="574" cy="118" r="2" fill="white" />
            </g>

            {/* ========================================================================= */}
            {/* 4. CENTRAL CIRCULAR BADGE ("Since 2020")                                  */}
            {/* ========================================================================= */}
            <g transform="translate(500, 110)">
              <circle 
                cx="0" 
                cy="0" 
                r="70" 
                fill="#FFFFFF" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                filter="url(#center-badge-shadow)" 
              />
              
              <text 
                x="0" 
                y="-15" 
                textAnchor="middle" 
                fill="#475569" 
                fontSize="15" 
                fontWeight="700"
                fontFamily="Poppins, sans-serif"
              >
                Since
              </text>
              <text 
                x="0" 
                y="19" 
                textAnchor="middle" 
                fill="#FF9700" 
                fontSize="29" 
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
            <foreignObject x="115" y="255" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-poppins">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1E293B] leading-tight mt-1 font-poppins">
                  Projects<br />Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Bottom-Left - 682+ Positive Reviews */}
            <foreignObject x="250" y="430" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-poppins">
                  <AnimatedNumber value={682} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1E293B] leading-tight mt-1 font-poppins">
                  Positive<br />Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Bottom-Center - 95+ Team Members */}
            <foreignObject x="420" y="465" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-poppins">
                  <AnimatedNumber value={95} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1E293B] leading-tight mt-1 font-poppins">
                  Team<br />Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Bottom-Right - 3.5M$ Funding Raised */}
            <foreignObject x="590" y="430" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-poppins">
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#1E293B] leading-tight mt-1 font-poppins">
                  Funding<br />Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right - 99% Customer Satisfaction */}
            <foreignObject x="725" y="255" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-poppins">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1E293B] leading-tight mt-1 font-poppins">
                  Customer<br />Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE ADAPTATION (CLEAN GRID WITH HOVER COLOR TRANSITIONS) */}
        <div className="md:hidden space-y-6">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-white shadow-xl border border-[#E2E8F0] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#475569] font-poppins">Since</span>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile 5 Cards Grid with Individual Hover Colors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            
            {/* Card 1 */}
            <div className="group bg-white p-4 rounded-2xl shadow-md border border-[#E2E8F0] flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <svg className="w-7 h-7 text-[#1E293B] group-hover:text-[#FF9700] transition-colors duration-300 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1E293B] mt-1 font-poppins">Projects Completed</span>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-4 rounded-2xl shadow-md border border-[#E2E8F0] flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <svg className="w-7 h-7 text-[#1E293B] group-hover:text-[#00C2CB] transition-colors duration-300 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={682} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1E293B] mt-1 font-poppins">Positive Reviews</span>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-4 rounded-2xl shadow-md border border-[#E2E8F0] flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <svg className="w-7 h-7 text-[#1E293B] group-hover:text-[#0284C7] transition-colors duration-300 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="6.5" r="4.5" />
                <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={95} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1E293B] mt-1 font-poppins">Team Members</span>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-4 rounded-2xl shadow-md border border-[#E2E8F0] flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <svg className="w-7 h-7 text-[#1E293B] group-hover:text-[#EC4899] transition-colors duration-300 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="13" rx="2" fill="currentColor" />
                <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-xs font-bold text-[#1E293B] mt-1 font-poppins">Funding Raised</span>
            </div>

            {/* Card 5 */}
            <div className="col-span-2 sm:col-span-1 group bg-white p-4 rounded-2xl shadow-md border border-[#E2E8F0] flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <svg className="w-7 h-7 text-[#1E293B] group-hover:text-[#8B5CF6] transition-colors duration-300 mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="6" r="2" />
                <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                <circle cx="5" cy="12" r="2.2" />
                <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" />
                <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-poppins">
                <AnimatedNumber value={99} suffix="%" />
              </span>
              <span className="text-xs font-bold text-[#1E293B] mt-1 font-poppins">Customer Satisfaction</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
