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
  duration = 2200,
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
    <span ref={ref} className="tabular-nums">
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
      id="why-zweidevs-section" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-[#FAFAFA] overflow-hidden border-b border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: "Why Zweidevs" matching exact typography & weight */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2F303B] tracking-tight font-heading">
            Why Zweidevs
          </h2>
        </motion.div>

        {/* 🌟 DESKTOP & TABLET: PIXEL-EXACT VECTOR RADIAL TIMELINE COMPOSITION */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block select-none">
          <svg 
            viewBox="0 0 1000 690" 
            className="w-full h-auto drop-shadow-xs overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Premium Realistic Layered 3D Drop Shadows matching exact reference */}
              <filter id="soft-card-shadow" x="-35%" y="-35%" width="170%" height="190%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#182A3A" floodOpacity="0.11" />
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#182A3A" floodOpacity="0.06" />
              </filter>

              {/* Elevated Center Hero Card Shadow */}
              <filter id="hero-card-shadow" x="-40%" y="-40%" width="180%" height="200%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="26" stdDeviation="22" floodColor="#182A3A" floodOpacity="0.14" />
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#182A3A" floodOpacity="0.08" />
              </filter>

              {/* Center Circle Shadow */}
              <filter id="center-badge-shadow" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#182A3A" floodOpacity="0.12" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#182A3A" floodOpacity="0.05" />
              </filter>

              {/* Multi-color Gradient for Timeline Arc */}
              <linearGradient id="timeline-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9700" />
                <stop offset="26%" stopColor="#18C4D9" />
                <stop offset="52%" stopColor="#3F9FF5" />
                <stop offset="78%" stopColor="#F23B7A" />
                <stop offset="100%" stopColor="#7040D8" />
              </linearGradient>

              {/* Pure Clean White Card Fill */}
              <linearGradient id="card-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* ========================================================================= */}
            {/* 1. THIN DARK CHARCOAL CONNECTOR LINES (POSITIONED BEHIND CARDS)           */}
            {/* Color: #4A4A4A | Width: 2px                                               */}
            {/* ========================================================================= */}

            {/* Line 1: Left Angular Bracket for 412+ Projects Completed */}
            <path
              d="M 210 325 L 210 240 L 260 240"
              stroke="#4A4A4A"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* Line 2: Bottom-Left Angled/Vertical Line from Petal 2 to 469+ */}
            <path
              d="M 338 415 L 322 470 L 322 525"
              stroke="#4A4A4A"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Line 3: Bottom-Center Vertical Line from Center Hero Card to 83+ */}
            <line 
              x1="500" 
              y1="500" 
              x2="500" 
              y2="560" 
              stroke="#4A4A4A" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* Line 4: Bottom-Right Angled/Vertical Line from Petal 4 to 3.5M$ */}
            <path
              d="M 662 415 L 678 470 L 678 525"
              stroke="#4A4A4A"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Line 5: Right Angular Bracket for 99% Customer Satisfaction */}
            <path
              d="M 790 325 L 790 240 L 740 240"
              stroke="#4A4A4A"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
            />

            {/* ========================================================================= */}
            {/* 2. CENTRAL CURVED TIMELINE ARC & 5 WHITE-CENTERED COLOR NODES             */}
            {/* ========================================================================= */}
            <g className="transition-opacity duration-500">
              {/* Smooth Segmented Timeline Arc */}
              <path
                d="M 420 182 C 414 290, 586 290, 580 182"
                stroke="url(#timeline-arc-grad)"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
              />

              {/* Node 1: Orange */}
              <circle cx="420" cy="182" r="4.5" fill="#FF9700" />
              <circle cx="420" cy="182" r="2" fill="white" />

              {/* Node 2: Cyan */}
              <circle cx="436" cy="238" r="4.5" fill="#18C4D9" />
              <circle cx="436" cy="238" r="2" fill="white" />

              {/* Node 3: Center Sky Blue */}
              <circle cx="500" cy="270" r="5.5" fill="#3F9FF5" />
              <circle cx="500" cy="270" r="2.5" fill="white" />

              {/* Node 4: Pink */}
              <circle cx="564" cy="238" r="4.5" fill="#F23B7A" />
              <circle cx="564" cy="238" r="2" fill="white" />

              {/* Node 5: Purple */}
              <circle cx="580" cy="182" r="4.5" fill="#7040D8" />
              <circle cx="580" cy="182" r="2" fill="white" />
            </g>

            {/* ========================================================================= */}
            {/* 3. FIVE FLOATING WHITE CARDS WITH SOFT BLUE/GRAY SHADOWS & DARK ICONS    */}
            {/* ========================================================================= */}

            {/* CARD 1: Top-Left (Pencil / Pen Design Icon) - Rotated -26 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(1)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(325, 230) rotate(-26) ${hoveredCard === 1 ? 'translate(0, -6)' : 'translate(0, 0)'}`}
              style={{ transformOrigin: '0px 0px' }}
            >
              {/* Rounded 3D Fan Petal Geometry */}
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
                fill="url(#card-surface-grad)"
                stroke="#ECEFF2"
                strokeWidth="1.2"
                filter="url(#soft-card-shadow)"
              />

              {/* Icon 1: Charcoal Pencil SVG */}
              <g transform="translate(-4, -2) rotate(-15) scale(1.2)">
                <path 
                  d="M 12 -14 L 18 -8 L -4 14 L -12 16 L -10 8 Z" 
                  fill="#2F303B" 
                />
                <path 
                  d="M 15 -17 L 21 -11 L 18 -8 L 12 -14 Z" 
                  fill="#2F303B" 
                />
              </g>
            </g>

            {/* CARD 2: Middle-Left (Magnifying Glass Search Icon) - Rotated -13 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(2)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(385, 345) rotate(-13) ${hoveredCard === 2 ? 'translate(0, -6)' : 'translate(0, 0)'}`}
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
                fill="url(#card-surface-grad)"
                stroke="#ECEFF2"
                strokeWidth="1.2"
                filter="url(#soft-card-shadow)"
              />

              {/* Icon 2: Charcoal Magnifying Glass */}
              <g transform="translate(-6, 2) rotate(-25) scale(1.2)">
                <circle cx="0" cy="0" r="13" stroke="#2F303B" strokeWidth="4.5" fill="none" />
                <line x1="9" y1="9" x2="21" y2="21" stroke="#2F303B" strokeWidth="5.5" strokeLinecap="round" />
              </g>
            </g>

            {/* CARD 4: Middle-Right (Analytics / Chart Monitor Icon) - Rotated +13 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(4)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(615, 345) rotate(13) ${hoveredCard === 4 ? 'translate(0, -6)' : 'translate(0, 0)'}`}
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
                fill="url(#card-surface-grad)"
                stroke="#ECEFF2"
                strokeWidth="1.2"
                filter="url(#soft-card-shadow)"
              />

              {/* Icon 4: Charcoal Presentation Board with Upward Growth Graph */}
              <g transform="translate(-2, 2) scale(1.2)">
                <rect x="-16" y="-13" width="32" height="21" rx="3" fill="#2F303B" />
                {/* Monitor Stand */}
                <line x1="0" y1="8" x2="0" y2="15" stroke="#2F303B" strokeWidth="3" />
                <line x1="-8" y1="15" x2="8" y2="15" stroke="#2F303B" strokeWidth="3" strokeLinecap="round" />
                {/* White Growth Arrow */}
                <path d="M -10 1 L -4 -5 L 2 -2 L 10 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* CARD 5: Top-Right (Checklist / List Checks Icon) - Rotated +26 deg */}
            <g 
              onMouseEnter={() => setHoveredCard(5)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(675, 230) rotate(26) ${hoveredCard === 5 ? 'translate(0, -6)' : 'translate(0, 0)'}`}
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
                fill="url(#card-surface-grad)"
                stroke="#ECEFF2"
                strokeWidth="1.2"
                filter="url(#soft-card-shadow)"
              />

              {/* Icon 5: Charcoal Checklist with Bullets and Checks */}
              <g transform="translate(-2, -2) scale(1.2)">
                {/* Row 1 */}
                <circle cx="-10" cy="-10" r="3.2" fill="#2F303B" />
                <rect x="-3" y="-12" width="20" height="4.5" rx="2.25" fill="#2F303B" />
                {/* Row 2 (Checked) */}
                <circle cx="-10" cy="0" r="3.6" fill="#2F303B" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4.5" rx="2.25" fill="#2F303B" />
                {/* Row 3 */}
                <circle cx="-10" cy="10" r="3.2" fill="#2F303B" />
                <rect x="-3" y="8" width="20" height="4.5" rx="2.25" fill="#2F303B" />
              </g>
            </g>

            {/* CARD 3: Bottom Center (Hero Business/Team/Person Icon) - Overlapping Foreground Card */}
            <g 
              onMouseEnter={() => setHoveredCard(3)} 
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer transition-all duration-300"
              transform={`translate(500, 395) ${hoveredCard === 3 ? 'translate(0, -6)' : 'translate(0, 0)'}`}
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
                fill="url(#card-surface-grad)"
                stroke="#ECEFF2"
                strokeWidth="1.2"
                filter="url(#hero-card-shadow)"
              />

              {/* Icon 3: Charcoal Professional Avatar with Tie */}
              <g transform="translate(0, 5) scale(1.4)">
                <circle cx="0" cy="-14" r="8" fill="#2F303B" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill="#2F303B" />
                {/* Collar & Tie cutout */}
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill="#2F303B" />
              </g>
            </g>

            {/* ========================================================================= */}
            {/* 4. CENTRAL CIRCULAR BADGE ("Since 2020")                                  */}
            {/* ========================================================================= */}
            <g transform="translate(500, 180)">
              <circle 
                cx="0" 
                cy="0" 
                r="74" 
                fill="#FFFFFF" 
                stroke="#ECEFF2" 
                strokeWidth="1.5" 
                filter="url(#center-badge-shadow)" 
              />
              
              <text 
                x="0" 
                y="-18" 
                textAnchor="middle" 
                fill="#2F303B" 
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
                fill="#FF9700" 
                fontSize="30" 
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="-0.5px"
              >
                2020
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 5. RUNNING STATISTICS LABELS WITH EXACT REFERENCE TEXT & ORANGE NUMBERS  */}
            {/* ========================================================================= */}

            {/* STAT 1: Left Top - 412+ Projects Completed */}
            <foreignObject x="130" y="335" width="160" height="140">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-heading">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#2F303B] leading-tight mt-1">
                  Projects<br />Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Left Bottom - 469+ Positive Reviews */}
            <foreignObject x="242" y="535" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-heading">
                  <AnimatedNumber value={469} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#2F303B] leading-tight mt-1">
                  Positive<br />Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Center Bottom - 83+ Team Members */}
            <foreignObject x="420" y="570" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-heading">
                  <AnimatedNumber value={83} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#2F303B] leading-tight mt-1">
                  Team<br />Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Right Bottom - 3.5M$ Funding Raised */}
            <foreignObject x="598" y="535" width="160" height="130">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-heading">
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#2F303B] leading-tight mt-1">
                  Funding<br />Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right Top - 99% Customer Satisfaction */}
            <foreignObject x="710" y="335" width="160" height="140">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#FF9700] tracking-tight font-heading">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#2F303B] leading-tight mt-1">
                  Customer<br />Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE COMPACT VIEW (NO HORIZONTAL OVERFLOW) */}
        <div className="md:hidden space-y-8">
          
          {/* Mobile Center Circle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-[#ECEFF2] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xs font-bold text-[#2F303B]">Since</span>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={2020} duration={1500} />
              </span>
            </div>
          </div>

          {/* Mobile 5 Clean Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#ECEFF2] flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#2F303B] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={412} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#2F303B] mt-1">Projects Completed</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#ECEFF2] flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#2F303B] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={469} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#2F303B] mt-1">Positive Reviews</span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#ECEFF2] flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#2F303B] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="6.5" r="4.5" />
                <path d="M12 12.5c-4.5 0-8 3-8 7.5h16c0-4.5-3.5-7.5-8-7.5zm-1 3.5h2l-.5 4h-1l-.5-4z" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={83} suffix="+" />
              </span>
              <span className="text-xs font-bold text-[#2F303B] mt-1">Team Members</span>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-[#ECEFF2] flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#2F303B] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="13" rx="2" fill="#2F303B" />
                <path d="m6 12 3-3 3 2 5-5" stroke="white" strokeWidth="1.8" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
              </span>
              <span className="text-xs font-bold text-[#2F303B] mt-1">Funding Raised</span>
            </div>

            {/* Card 5 */}
            <div className="col-span-2 sm:col-span-1 bg-white p-5 rounded-2xl shadow-md border border-[#ECEFF2] flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-[#2F303B] mb-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="6" r="2" />
                <rect x="9" y="4.8" width="11" height="2.4" rx="1.2" />
                <circle cx="5" cy="12" r="2.2" />
                <path d="M4 12l.8.8 1.4-1.6" stroke="white" strokeWidth="1" fill="none" />
                <rect x="9" y="10.8" width="11" height="2.4" rx="1.2" />
              </svg>
              <span className="text-2xl font-black text-[#FF9700] font-heading">
                <AnimatedNumber value={99} suffix="%" />
              </span>
              <span className="text-xs font-bold text-[#2F303B] mt-1">Customer Satisfaction</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
