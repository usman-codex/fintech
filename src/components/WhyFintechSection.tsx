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
      
      // Smooth easeOutExpo curve for realistic counting
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="why-fintech-section" 
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-[#FAFDFE] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching screenshots */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight font-heading">
            Why FinTech
          </h2>
        </div>

        {/* 🌟 100% EXACT MATCH: 3D FAN PETAL CARDS & CONNECTOR SYSTEM (DESKTOP & TABLET) */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block select-none">
          <svg 
            viewBox="0 0 1000 680" 
            className="w-full h-auto drop-shadow-sm overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Deep 3D Ambient Card Drop Shadow matching zweidevs.com */}
              <filter id="card-3d-shadow" x="-30%" y="-30%" width="160%" height="180%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#102A45" floodOpacity="0.13" />
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#102A45" floodOpacity="0.08" />
              </filter>

              {/* Center Circle Shadow */}
              <filter id="center-circle-shadow" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#102A45" floodOpacity="0.14" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#102A45" floodOpacity="0.06" />
              </filter>

              {/* Prominent Center Bottom Card Shadow */}
              <filter id="hero-card-shadow" x="-35%" y="-35%" width="170%" height="190%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="28" stdDeviation="24" floodColor="#102A45" floodOpacity="0.17" />
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#102A45" floodOpacity="0.10" />
              </filter>

              {/* Rainbow Gradient for Arc Under Center Circle */}
              <linearGradient id="rainbow-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F58220" />
                <stop offset="25%" stopColor="#00C2CB" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="75%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              {/* Card Face Gradient */}
              <linearGradient id="card-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FAFCFD" />
              </linearGradient>
            </defs>

            {/* ============================================================ */}
            {/* 1. RAINBOW GAUGE ARC & 5 NODES (BEHIND CARDS)                */}
            {/* ============================================================ */}
            <g>
              {/* Rainbow Curved Arc */}
              <path
                d="M 420 180 C 415 285, 585 285, 580 180"
                stroke="url(#rainbow-arc)"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
              />

              {/* 5 Color Nodes on Rainbow Arc */}
              {/* Node 1: Orange */}
              <circle cx="420" cy="180" r="4.5" fill="#F58220" />
              {/* Node 2: Cyan */}
              <circle cx="436" cy="235" r="4.5" fill="#00C2CB" />
              {/* Node 3: Center Sky Blue */}
              <circle cx="500" cy="265" r="5.5" fill="#0284C7" stroke="white" strokeWidth="1.5" />
              {/* Node 4: Pink */}
              <circle cx="564" cy="235" r="4.5" fill="#EC4899" />
              {/* Node 5: Purple */}
              <circle cx="580" cy="180" r="4.5" fill="#8B5CF6" />
            </g>

            {/* ============================================================ */}
            {/* 2. FIVE ROUNDED 3D TRAPEZOID FAN CARDS                       */}
            {/* ============================================================ */}

            {/* CARD 1: Top-Left (Pencil Icon) */}
            <g 
              onMouseEnter={() => setHoveredCard(1)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(325, 230) rotate(-26) ${hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              {/* Rounded Trapezoid Shape */}
              <path
                d="M -50 -75
                   C -20 -82, 20 -82, 50 -75
                   C 60 -73, 65 -64, 62 -55
                   L 46 65
                   C 43 75, 33 80, 22 81
                   C 0 83, -22 83, -42 79
                   C -53 77, -59 69, -58 58
                   L -58 -58
                   C -58 -68, -54 -74, -50 -75 Z"
                fill="url(#card-bg)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-3d-shadow)"
              />

              {/* Icon 1: Slanted Pencil SVG */}
              <g transform="translate(-5, 0) rotate(-15) scale(1.15)">
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

            {/* CARD 2: Mid-Left (Magnifying Glass Icon) */}
            <g 
              onMouseEnter={() => setHoveredCard(2)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(385, 345) rotate(-13) ${hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -50 -75
                   C -20 -82, 20 -82, 50 -75
                   C 60 -73, 65 -64, 62 -55
                   L 46 65
                   C 43 75, 33 80, 22 81
                   C 0 83, -22 83, -42 79
                   C -53 77, -59 69, -58 58
                   L -58 -58
                   C -58 -68, -54 -74, -50 -75 Z"
                fill="url(#card-bg)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-3d-shadow)"
              />

              {/* Icon 2: Magnifying Glass */}
              <g transform="translate(-6, 2) rotate(-25) scale(1.15)">
                <circle cx="0" cy="0" r="13" stroke="#1A314C" strokeWidth="4.5" fill="none" />
                <line x1="9" y1="9" x2="21" y2="21" stroke="#1A314C" strokeWidth="5.5" strokeLinecap="round" />
              </g>
            </g>

            {/* CARD 4: Mid-Right (Presentation Chart Icon) */}
            <g 
              onMouseEnter={() => setHoveredCard(4)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(615, 345) rotate(13) ${hoveredCard === 4 ? 'scale(1.05)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -50 -75
                   C -20 -82, 20 -82, 50 -75
                   C 60 -73, 65 -64, 62 -55
                   L 46 65
                   C 43 75, 33 80, 22 81
                   C 0 83, -22 83, -42 79
                   C -53 77, -59 69, -58 58
                   L -58 -58
                   C -58 -68, -54 -74, -50 -75 Z"
                fill="url(#card-bg)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-3d-shadow)"
              />

              {/* Icon 4: Presentation Board with Trend Line */}
              <g transform="translate(-2, 2) scale(1.15)">
                <rect x="-16" y="-13" width="32" height="21" rx="3" fill="#1A314C" />
                {/* Stand */}
                <line x1="0" y1="8" x2="0" y2="15" stroke="#1A314C" strokeWidth="3" />
                <line x1="-8" y1="15" x2="8" y2="15" stroke="#1A314C" strokeWidth="3" strokeLinecap="round" />
                {/* White Trend Arrow inside */}
                <path d="M -10 1 L -4 -5 L 2 -2 L 10 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* CARD 5: Top-Right (Checklist with Checkmark Icon) */}
            <g 
              onMouseEnter={() => setHoveredCard(5)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(675, 230) rotate(26) ${hoveredCard === 5 ? 'scale(1.05)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -50 -75
                   C -20 -82, 20 -82, 50 -75
                   C 60 -73, 65 -64, 62 -55
                   L 46 65
                   C 43 75, 33 80, 22 81
                   C 0 83, -22 83, -42 79
                   C -53 77, -59 69, -58 58
                   L -58 -58
                   C -58 -68, -54 -74, -50 -75 Z"
                fill="url(#card-bg)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#card-3d-shadow)"
              />

              {/* Icon 5: Task List with Checks */}
              <g transform="translate(-2, 0) scale(1.15)">
                {/* Row 1 */}
                <circle cx="-10" cy="-10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="-12" width="20" height="4.5" rx="2.25" fill="#1A314C" />
                {/* Row 2 (Checked) */}
                <circle cx="-10" cy="0" r="3.6" fill="#1A314C" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4.5" rx="2.25" fill="#1A314C" />
                {/* Row 3 */}
                <circle cx="-10" cy="10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="8" width="20" height="4.5" rx="2.25" fill="#1A314C" />
              </g>
            </g>

            {/* CARD 3: Center Bottom (Hero Avatar with Suit & Tie) - Placed in front with strongest shadow */}
            <g 
              onMouseEnter={() => setHoveredCard(3)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 395) ${hoveredCard === 3 ? 'scale(1.06)' : 'scale(1)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              <path
                d="M -54 -80
                   C -22 -88, 22 -88, 54 -80
                   C 66 -77, 72 -67, 68 -56
                   L 50 72
                   C 46 83, 35 89, 23 90
                   C 0 92, -23 92, -45 88
                   C -57 85, -64 76, -63 64
                   L -63 -63
                   C -63 -74, -59 -79, -54 -80 Z"
                fill="url(#card-bg)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#hero-card-shadow)"
              />

              {/* Icon 3: Professional Person with Tie Silhouette */}
              <g transform="translate(0, 5) scale(1.35)">
                <circle cx="0" cy="-14" r="8" fill="#1A314C" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill="#1A314C" />
                {/* Collar & Tie cutout */}
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill="#1A314C" />
              </g>
            </g>

            {/* ============================================================ */}
            {/* 3. CENTER CIRCLE ("Since 2020")                               */}
            {/* ============================================================ */}
            <g transform="translate(500, 180)">
              <circle 
                cx="0" 
                cy="0" 
                r="74" 
                fill="#FFFFFF" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                filter="url(#center-circle-shadow)" 
              />
              
              <text 
                x="0" 
                y="-18" 
                textAnchor="middle" 
                fill="#4A5D6E" 
                fontSize="15" 
                fontWeight="700"
                fontFamily="sans-serif"
              >
                Since
              </text>
              <text 
                x="0" 
                y="18" 
                textAnchor="middle" 
                fill="#F58220" 
                fontSize="30" 
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="-0.5px"
              >
                2020
              </text>
            </g>

            {/* ============================================================ */}
            {/* 4. EXACT CONNECTOR LINES MATCHING ZWEIDEVS.COM               */}
            {/* ============================================================ */}

            {/* LINE 1: Left Bracket Line above 412+ Projects Completed */}
            {/* Goes UP from above 412+ then turns RIGHT towards Card 1 */}
            <path
              d="M 210 320 L 210 240 L 260 240"
              stroke="#1A314C"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* LINE 2: Bottom-Left Vertical Line from Card 2 down to 682+ */}
            <line 
              x1="340" 
              y1="415" 
              x2="340" 
              y2="520" 
              stroke="#1A314C" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* LINE 3: Bottom-Center Vertical Line from Card 3 down to 95+ */}
            <line 
              x1="500" 
              y1="495" 
              x2="500" 
              y2="555" 
              stroke="#1A314C" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* LINE 4: Bottom-Right Vertical Line from Card 4 down to 3.5M$ */}
            <line 
              x1="660" 
              y1="415" 
              x2="660" 
              y2="520" 
              stroke="#1A314C" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* LINE 5: Right Bracket Line above 99% Customer Satisfaction */}
            {/* Goes UP from above 99% then turns LEFT towards Card 5 */}
            <path
              d="M 790 320 L 790 240 L 740 240"
              stroke="#1A314C"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* ============================================================ */}
            {/* 5. STATS & RUNNING NUMBERS AT EXACT LOCATIONS                */}
            {/* ============================================================ */}

            {/* STAT 1: Left - 412+ Projects Completed */}
            <foreignObject x="130" y="335" width="160" height="140">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1">
                  Projects<br />Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Bottom-Left - 682+ Positive Reviews */}
            <foreignObject x="260" y="530" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={682} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1">
                  Positive<br />Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Bottom-Center - 95+ Team Members */}
            <foreignObject x="420" y="565" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={95} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1">
                  Team<br />Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Bottom-Right - 3.5M$ Funding Raised */}
            <foreignObject x="580" y="530" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1">
                  Funding<br />Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right - 99% Customer Satisfaction */}
            <foreignObject x="710" y="335" width="160" height="140">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-tight mt-1">
                  Customer<br />Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE VIEW WITH EXACT RUNNING COUNTERS */}
        <div className="md:hidden space-y-8">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-[#C9E5ED] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#4A5D6E]">Since</span>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile 5 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#C9E5ED]/70 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#1A314C] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#F58220] font-heading">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#1A314C] mt-1">Projects Completed</span>
            </div>

            {/* Card 2 */}
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

            {/* Card 3 */}
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

            {/* Card 4 */}
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

            {/* Card 5 */}
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
