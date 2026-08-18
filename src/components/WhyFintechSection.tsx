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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section 
      id="why-fintech-section" 
      ref={sectionRef}
      className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-24 bg-[#FAFCFD] overflow-hidden border-b border-[#C9E5ED]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Official Brand Colors & Google Font Poppins */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
            Fintech Edge <span className="text-[#107C8E] font-bold">Institute</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#10566E] via-[#107C8E] to-[#1DA5B8] rounded-full mt-3"></div>
        </motion.div>

        {/* 🌟 DESKTOP & TABLET: SPATIAL PIXEL-PERFECT RADIAL FAN WITH BRAND COLOR HOVER SYSTEM */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block select-none">
          <svg 
            viewBox="0 0 1000 620" 
            className="w-full h-auto overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Premium 3D Drop Shadow */}
              <filter id="brand-card-shadow" x="-35%" y="-35%" width="170%" height="185%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#1A314C" floodOpacity="0.10" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1A314C" floodOpacity="0.05" />
              </filter>

              {/* Active Hover Card Glow */}
              <filter id="brand-card-hover-shadow" x="-45%" y="-45%" width="190%" height="200%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#1DA5B8" floodOpacity="0.25" />
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#107C8E" floodOpacity="0.12" />
              </filter>

              {/* Center Circle Shadow */}
              <filter id="brand-center-shadow" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#1A314C" floodOpacity="0.10" />
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1A314C" floodOpacity="0.05" />
              </filter>

              {/* Official Brand Gradient for Arc: #1A314C -> #10566E -> #107C8E -> #1DA5B8 -> #5EA4AA */}
              <linearGradient id="brand-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10566E" />
                <stop offset="25%" stopColor="#107C8E" />
                <stop offset="50%" stopColor="#1DA5B8" />
                <stop offset="75%" stopColor="#5EA4AA" />
                <stop offset="100%" stopColor="#1DA5B8" />
              </linearGradient>
            </defs>

            {/* ========================================================================= */}
            {/* 1. SOLID CONNECTOR LINES (DIRECTLY TOUCHING CARDS & NUMBERS)              */}
            {/* ========================================================================= */}

            {/* LINE 1 (LEFT BRACKET -> 412+ Projects Completed) */}
            <path
              d="M 245 190 L 175 190 L 175 270"
              stroke={activeCard === 1 ? "#1DA5B8" : "#1A314C"}
              strokeWidth={activeCard === 1 ? "3" : "2.2"}
              fill="none"
              strokeLinecap="square"
              className="transition-all duration-300"
            />

            {/* LINE 2 (BOTTOM-LEFT -> 682+ Positive Reviews) */}
            <line
              x1="355"
              y1="375"
              x2="325"
              y2="455"
              stroke={activeCard === 2 ? "#1DA5B8" : "#1A314C"}
              strokeWidth={activeCard === 2 ? "3" : "2.2"}
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* LINE 3 (BOTTOM-CENTER -> 95+ Team Members) */}
            <line
              x1="500"
              y1="430"
              x2="500"
              y2="495"
              stroke={activeCard === 3 ? "#1DA5B8" : "#1A314C"}
              strokeWidth={activeCard === 3 ? "3" : "2.2"}
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* LINE 4 (BOTTOM-RIGHT -> 3.5M$ Funding Raised) */}
            <line
              x1="645"
              y1="375"
              x2="675"
              y2="455"
              stroke={activeCard === 4 ? "#1DA5B8" : "#1A314C"}
              strokeWidth={activeCard === 4 ? "3" : "2.2"}
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* LINE 5 (RIGHT BRACKET -> 99% Customer Satisfaction) */}
            <path
              d="M 755 190 L 825 190 L 825 270"
              stroke={activeCard === 5 ? "#1DA5B8" : "#1A314C"}
              strokeWidth={activeCard === 5 ? "3" : "2.2"}
              fill="none"
              strokeLinecap="square"
              className="transition-all duration-300"
            />

            {/* ========================================================================= */}
            {/* 2. THE 5 RADIALLY-DISTRIBUTED 3D FLOATING CARDS                           */}
            {/* ========================================================================= */}

            {/* CARD 1 (Top-Left): Pencil / Projects Completed */}
            <g 
              onMouseEnter={() => setActiveCard(1)} 
              onMouseLeave={() => setActiveCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(300, 190) rotate(-24) ${activeCard === 1 ? 'scale(1.08) translate(0, -6)' : 'scale(1)'}`}
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
                fill="#FFFFFF"
                stroke={activeCard === 1 ? "#1DA5B8" : "#C9E5ED"}
                strokeWidth={activeCard === 1 ? "2.5" : "1.5"}
                filter={activeCard === 1 ? "url(#brand-card-hover-shadow)" : "url(#brand-card-shadow)"}
              />
              {/* Icon: Pencil */}
              <g transform="translate(-4, -2) rotate(-15) scale(1.15)">
                <path 
                  d="M 12 -14 L 18 -8 L -4 14 L -12 16 L -10 8 Z" 
                  fill={activeCard === 1 ? "#1DA5B8" : "#1A314C"}
                  className="transition-colors duration-300"
                />
                <path 
                  d="M 15 -17 L 21 -11 L 18 -8 L 12 -14 Z" 
                  fill={activeCard === 1 ? "#1DA5B8" : "#1A314C"}
                  className="transition-colors duration-300"
                />
              </g>
            </g>

            {/* CARD 2 (Middle-Left): Search / Positive Reviews */}
            <g 
              onMouseEnter={() => setActiveCard(2)} 
              onMouseLeave={() => setActiveCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(385, 310) rotate(-12) ${activeCard === 2 ? 'scale(1.08) translate(0, -6)' : 'scale(1)'}`}
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
                fill="#FFFFFF"
                stroke={activeCard === 2 ? "#1DA5B8" : "#C9E5ED"}
                strokeWidth={activeCard === 2 ? "2.5" : "1.5"}
                filter={activeCard === 2 ? "url(#brand-card-hover-shadow)" : "url(#brand-card-shadow)"}
              />
              {/* Icon: Search */}
              <g transform="translate(-6, 2) rotate(-25) scale(1.15)">
                <circle 
                  cx="0" 
                  cy="0" 
                  r="13" 
                  stroke={activeCard === 2 ? "#1DA5B8" : "#1A314C"} 
                  strokeWidth="4.5" 
                  fill="none" 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="9" 
                  y1="9" 
                  x2="21" 
                  y2="21" 
                  stroke={activeCard === 2 ? "#1DA5B8" : "#1A314C"} 
                  strokeWidth="5.5" 
                  strokeLinecap="round" 
                  className="transition-colors duration-300"
                />
              </g>
            </g>

            {/* CARD 4 (Middle-Right): Presentation / Funding Raised */}
            <g 
              onMouseEnter={() => setActiveCard(4)} 
              onMouseLeave={() => setActiveCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(615, 310) rotate(12) ${activeCard === 4 ? 'scale(1.08) translate(0, -6)' : 'scale(1)'}`}
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
                fill="#FFFFFF"
                stroke={activeCard === 4 ? "#1DA5B8" : "#C9E5ED"}
                strokeWidth={activeCard === 4 ? "2.5" : "1.5"}
                filter={activeCard === 4 ? "url(#brand-card-hover-shadow)" : "url(#brand-card-shadow)"}
              />
              {/* Icon: Presentation */}
              <g transform="translate(-2, 2) scale(1.15)">
                <rect 
                  x="-16" 
                  y="-13" 
                  width="32" 
                  height="21" 
                  rx="3" 
                  fill={activeCard === 4 ? "#1DA5B8" : "#1A314C"} 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="0" 
                  y1="8" 
                  x2="0" 
                  y2="15" 
                  stroke={activeCard === 4 ? "#1DA5B8" : "#1A314C"} 
                  strokeWidth="3" 
                  className="transition-colors duration-300"
                />
                <line 
                  x1="-8" 
                  y1="15" 
                  x2="8" 
                  y2="15" 
                  stroke={activeCard === 4 ? "#1DA5B8" : "#1A314C"} 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="transition-colors duration-300"
                />
                <path d="M -10 1 L -4 -5 L 2 -2 L 10 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* CARD 5 (Top-Right): Checklist / Customer Satisfaction */}
            <g 
              onMouseEnter={() => setActiveCard(5)} 
              onMouseLeave={() => setActiveCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(700, 190) rotate(24) ${activeCard === 5 ? 'scale(1.08) translate(0, -6)' : 'scale(1)'}`}
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
                fill="#FFFFFF"
                stroke={activeCard === 5 ? "#1DA5B8" : "#C9E5ED"}
                strokeWidth={activeCard === 5 ? "2.5" : "1.5"}
                filter={activeCard === 5 ? "url(#brand-card-hover-shadow)" : "url(#brand-card-shadow)"}
              />
              {/* Icon: Checklist */}
              <g transform="translate(-2, 0) scale(1.15)">
                <circle cx="-10" cy="-10" r="3.2" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <rect x="-3" y="-12" width="20" height="4.5" rx="2.25" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <circle cx="-10" cy="0" r="3.6" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4.5" rx="2.25" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <circle cx="-10" cy="10" r="3.2" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <rect x="-3" y="8" width="20" height="4.5" rx="2.25" fill={activeCard === 5 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
              </g>
            </g>

            {/* CARD 3 (Center-Bottom): Team Member / Team Members (Foreground Layer) */}
            <g 
              onMouseEnter={() => setActiveCard(3)} 
              onMouseLeave={() => setActiveCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 350) ${activeCard === 3 ? 'scale(1.08) translate(0, -6)' : 'scale(1)'}`}
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
                fill="#FFFFFF"
                stroke={activeCard === 3 ? "#1DA5B8" : "#C9E5ED"}
                strokeWidth={activeCard === 3 ? "2.5" : "1.6"}
                filter={activeCard === 3 ? "url(#brand-card-hover-shadow)" : "url(#brand-card-shadow)"}
              />
              {/* Icon: Person with Suit & Tie */}
              <g transform="translate(0, 5) scale(1.35)">
                <circle cx="0" cy="-14" r="8" fill={activeCard === 3 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill={activeCard === 3 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill={activeCard === 3 ? "#1DA5B8" : "#1A314C"} className="transition-colors duration-300" />
              </g>
            </g>

            {/* ========================================================================= */}
            {/* 3. CONCENTRIC RAINBOW GAUGE ARC & 5 NODES (BRAND GRADIENT)                */}
            {/* ========================================================================= */}
            <g>
              <path
                d="M 425 155 A 76 76 0 0 0 575 155"
                stroke="url(#brand-arc-grad)"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Node 1: Deep Blue */}
              <circle cx="425" cy="155" r="4.5" fill="#10566E" />
              <circle cx="425" cy="155" r="2" fill="white" />

              {/* Node 2: Teal Blue */}
              <circle cx="450" cy="201" r="4.5" fill="#107C8E" />
              <circle cx="450" cy="201" r="2" fill="white" />

              {/* Node 3: Bright Cyan (Bottom-Center) */}
              <circle cx="500" cy="221" r="5.5" fill="#1DA5B8" stroke="white" strokeWidth="1.5" />
              <circle cx="500" cy="221" r="2.5" fill="white" />

              {/* Node 4: Muted Teal */}
              <circle cx="550" cy="201" r="4.5" fill="#5EA4AA" />
              <circle cx="550" cy="201" r="2" fill="white" />

              {/* Node 5: Bright Cyan (Right) */}
              <circle cx="575" cy="155" r="4.5" fill="#1DA5B8" />
              <circle cx="575" cy="155" r="2" fill="white" />
            </g>

            {/* ========================================================================= */}
            {/* 4. CENTRAL BADGE ("Since 2020")                                           */}
            {/* ========================================================================= */}
            <g transform="translate(500, 145)">
              <circle 
                cx="0" 
                cy="0" 
                r="68" 
                fill="#FFFFFF" 
                stroke="#C9E5ED" 
                strokeWidth="1.5" 
                filter="url(#brand-center-shadow)" 
              />
              
              <text 
                x="0" 
                y="-15" 
                textAnchor="middle" 
                fill="#10566E" 
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
                fill="#1DA5B8" 
                fontSize="28" 
                fontWeight="900"
                fontFamily="Poppins, sans-serif"
                letterSpacing="-0.5px"
              >
                2020
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 5. METRIC STATS WITH BRAND COLORS & HOVER STATE                           */}
            {/* ========================================================================= */}

            {/* STAT 1: Left - 412+ Projects Completed */}
            <foreignObject x="95" y="280" width="160" height="130">
              <div 
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
                className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <span className={`text-3xl lg:text-4xl font-black tracking-tight font-poppins transition-colors duration-300 ${activeCard === 1 ? 'text-[#1DA5B8]' : 'text-[#107C8E]'}`}>
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Projects<br />Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Bottom-Left - 682+ Positive Reviews */}
            <foreignObject x="245" y="465" width="160" height="130">
              <div 
                onMouseEnter={() => setActiveCard(2)}
                onMouseLeave={() => setActiveCard(null)}
                className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <span className={`text-3xl lg:text-4xl font-black tracking-tight font-poppins transition-colors duration-300 ${activeCard === 2 ? 'text-[#1DA5B8]' : 'text-[#107C8E]'}`}>
                  <AnimatedNumber value={682} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Positive<br />Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Bottom-Center - 95+ Team Members */}
            <foreignObject x="420" y="505" width="160" height="130">
              <div 
                onMouseEnter={() => setActiveCard(3)}
                onMouseLeave={() => setActiveCard(null)}
                className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <span className={`text-3xl lg:text-4xl font-black tracking-tight font-poppins transition-colors duration-300 ${activeCard === 3 ? 'text-[#1DA5B8]' : 'text-[#107C8E]'}`}>
                  <AnimatedNumber value={95} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Team<br />Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Bottom-Right - 3.5M$ Funding Raised */}
            <foreignObject x="595" y="465" width="160" height="130">
              <div 
                onMouseEnter={() => setActiveCard(4)}
                onMouseLeave={() => setActiveCard(null)}
                className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <span className={`text-3xl lg:text-4xl font-black tracking-tight font-poppins transition-colors duration-300 ${activeCard === 4 ? 'text-[#1DA5B8]' : 'text-[#107C8E]'}`}>
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Funding<br />Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right - 99% Customer Satisfaction */}
            <foreignObject x="745" y="280" width="160" height="130">
              <div 
                onMouseEnter={() => setActiveCard(5)}
                onMouseLeave={() => setActiveCard(null)}
                className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <span className={`text-3xl lg:text-4xl font-black tracking-tight font-poppins transition-colors duration-300 ${activeCard === 5 ? 'text-[#1DA5B8]' : 'text-[#107C8E]'}`}>
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1 font-poppins">
                  Customer<br />Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE ADAPTATION (FULL BRAND PALETTE) */}
        <div className="md:hidden space-y-6">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-white shadow-lg border border-[#C9E5ED] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#10566E] font-poppins">Since</span>
              <span className="text-2xl font-black text-[#1DA5B8] font-poppins">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile 5 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#107C8E] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#107C8E] font-poppins">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Projects Completed</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#107C8E] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-2xl font-black text-[#107C8E] font-poppins">
                <AnimatedNumber value={682} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Positive Reviews</span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#107C8E] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="6.5" r="4.5" />
                <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
              </svg>
              <span className="text-2xl font-black text-[#107C8E] font-poppins">
                <AnimatedNumber value={95} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Team Members</span>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#107C8E] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="13" rx="2" fill="#107C8E" />
                <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
              </svg>
              <span className="text-2xl font-black text-[#107C8E] font-poppins">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1 font-poppins">Funding Raised</span>
            </div>

            {/* Card 5 */}
            <div className="col-span-2 sm:col-span-1 bg-white p-4 rounded-2xl shadow-sm border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all flex flex-col items-center text-center">
              <svg className="w-7 h-7 text-[#107C8E] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="6" r="2" />
                <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                <circle cx="5" cy="12" r="2.2" />
                <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" />
                <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
              </svg>
              <span className="text-2xl font-black text-[#107C8E] font-poppins">
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
