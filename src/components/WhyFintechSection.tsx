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
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="why-fintech-section" 
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-[#FAFDFE] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight font-heading">
            Why FinTech
          </h2>
        </div>

        {/* 🌟 100% EXACT VECTOR FAN ARCHITECTURE (DESKTOP & TABLET) */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block">
          <svg 
            viewBox="0 0 1000 620" 
            className="w-full h-auto drop-shadow-sm select-none overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft Drop Shadow for Petals & Center Circle */}
              <filter id="fan-shadow" x="-15%" y="-15%" width="130%" height="140%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#1A314C" floodOpacity="0.10" />
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1A314C" floodOpacity="0.06" />
              </filter>

              <filter id="petal-shadow" x="-20%" y="-20%" width="140%" height="150%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#1A314C" floodOpacity="0.11" />
              </filter>

              <filter id="center-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1A314C" floodOpacity="0.12" />
              </filter>

              {/* Rainbow Gradient for Arc Under Center Circle */}
              <linearGradient id="rainbow-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F58220" />
                <stop offset="25%" stopColor="#00C2CB" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="75%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              {/* Subtle White-to-Soft-Gray Petal Gradient */}
              <linearGradient id="petal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </linearGradient>
            </defs>

            {/* ============================================================ */}
            {/* 1. FAN PETALS (5 SEGMENTS IN A FAN ARC)                       */}
            {/* Center = (500, 200), Inner Radius = 90, Outer Radius = 245  */}
            {/* ============================================================ */}

            {/* PETAL 1: Leftmost (Pencil Icon) -> Angles 168° to 138° */}
            <g 
              onMouseEnter={() => setHoveredPetal(1)} 
              onMouseLeave={() => setHoveredPetal(null)}
              className="cursor-pointer transition-transform duration-300 transform origin-[500px_200px]"
              style={{ transform: hoveredPetal === 1 ? 'scale(1.03)' : 'scale(1)' }}
            >
              {/* Petal Wedge Path */}
              <path
                d="M 412 181 
                   L 261 149 
                   A 245 245 0 0 1 318 364 
                   L 433 260 
                   A 90 90 0 0 0 412 181 Z"
                fill="url(#petal-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#petal-shadow)"
                rx="14"
              />
              
              {/* Icon 1: Slanted Pencil SVG */}
              <g transform="translate(325, 235) rotate(-35)">
                <path 
                  d="M 0 -18 L 6 -12 L -8 16 L -14 18 L -12 12 Z" 
                  fill="#1A314C" 
                />
                <path 
                  d="M 3 -21 L 9 -15 L 6 -12 L 0 -18 Z" 
                  fill="#1A314C" 
                />
              </g>
            </g>

            {/* PETAL 2: Mid-Left (Magnifying Glass Icon) -> Angles 134° to 106° */}
            <g 
              onMouseEnter={() => setHoveredPetal(2)} 
              onMouseLeave={() => setHoveredPetal(null)}
              className="cursor-pointer transition-transform duration-300 transform origin-[500px_200px]"
              style={{ transform: hoveredPetal === 2 ? 'scale(1.03)' : 'scale(1)' }}
            >
              <path
                d="M 437 265 
                   L 330 376 
                   A 245 245 0 0 1 432 435 
                   L 475 287 
                   A 90 90 0 0 0 437 265 Z"
                fill="url(#petal-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#petal-shadow)"
              />

              {/* Icon 2: Magnifying Glass SVG */}
              <g transform="translate(390, 360) rotate(-20)">
                <circle cx="0" cy="0" r="13" stroke="#1A314C" strokeWidth="4.5" fill="none" />
                <line x1="9" y1="9" x2="20" y2="20" stroke="#1A314C" strokeWidth="5.5" strokeLinecap="round" />
              </g>
            </g>

            {/* PETAL 3: Center Bottom (Person / Tie Avatar Icon) -> Angles 102° to 78° */}
            <g 
              onMouseEnter={() => setHoveredPetal(3)} 
              onMouseLeave={() => setHoveredPetal(null)}
              className="cursor-pointer transition-transform duration-300 transform origin-[500px_200px]"
              style={{ transform: hoveredPetal === 3 ? 'scale(1.03)' : 'scale(1)' }}
            >
              <path
                d="M 481 289 
                   L 449 439 
                   A 245 245 0 0 1 551 439 
                   L 519 289 
                   A 90 90 0 0 0 481 289 Z"
                fill="url(#petal-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#petal-shadow)"
              />

              {/* Icon 3: Silhouette Avatar with Tie */}
              <g transform="translate(500, 385)">
                <circle cx="0" cy="-14" r="8" fill="#1A314C" />
                <path d="M -15 12 C -15 3 -8 0 0 0 C 8 0 15 3 15 12 Z" fill="#1A314C" />
                {/* White Shirt Collar & Tie */}
                <polygon points="-4,2 4,2 0,6" fill="white" />
                <polygon points="0,5 -2,12 0,14 2,12" fill="#1A314C" />
              </g>
            </g>

            {/* PETAL 4: Mid-Right (Presentation Chart Icon) -> Angles 74° to 46° */}
            <g 
              onMouseEnter={() => setHoveredPetal(4)} 
              onMouseLeave={() => setHoveredPetal(null)}
              className="cursor-pointer transition-transform duration-300 transform origin-[500px_200px]"
              style={{ transform: hoveredPetal === 4 ? 'scale(1.03)' : 'scale(1)' }}
            >
              <path
                d="M 525 287 
                   L 568 435 
                   A 245 245 0 0 1 670 376 
                   L 563 265 
                   A 90 90 0 0 0 525 287 Z"
                fill="url(#petal-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#petal-shadow)"
              />

              {/* Icon 4: Presentation Board with Upward Trend Graph */}
              <g transform="translate(610, 360) rotate(15)">
                <rect x="-16" y="-14" width="32" height="22" rx="3" fill="#1A314C" />
                {/* Stand */}
                <line x1="0" y1="8" x2="0" y2="15" stroke="#1A314C" strokeWidth="3" />
                <line x1="-8" y1="15" x2="8" y2="15" stroke="#1A314C" strokeWidth="3" strokeLinecap="round" />
                {/* Graph Trend Line */}
                <path d="M -10 2 L -4 -4 L 2 -1 L 10 -9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="5,-9 10,-9 10,-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>

            {/* PETAL 5: Rightmost (Checklist with Checks Icon) -> Angles 42° to 12° */}
            <g 
              onMouseEnter={() => setHoveredPetal(5)} 
              onMouseLeave={() => setHoveredPetal(null)}
              className="cursor-pointer transition-transform duration-300 transform origin-[500px_200px]"
              style={{ transform: hoveredPetal === 5 ? 'scale(1.03)' : 'scale(1)' }}
            >
              <path
                d="M 567 260 
                   L 682 364 
                   A 245 245 0 0 1 739 149 
                   L 588 181 
                   A 90 90 0 0 0 567 260 Z"
                fill="url(#petal-grad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#petal-shadow)"
              />

              {/* Icon 5: Task Checklist with Bullets and Checks */}
              <g transform="translate(675, 235) rotate(35)">
                {/* Row 1 */}
                <circle cx="-10" cy="-10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="-12" width="20" height="4" rx="2" fill="#1A314C" />
                {/* Row 2 (Checked) */}
                <circle cx="-10" cy="0" r="3.6" fill="#1A314C" />
                <path d="M -12 -0.5 L -10.5 1 L -7.5 -2" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="-3" y="-2" width="20" height="4" rx="2" fill="#1A314C" />
                {/* Row 3 */}
                <circle cx="-10" cy="10" r="3.2" fill="#1A314C" />
                <rect x="-3" y="8" width="20" height="4" rx="2" fill="#1A314C" />
              </g>
            </g>

            {/* ============================================================ */}
            {/* 2. CENTER CIRCLE ("Since 2020") + RAINBOW ARC + 5 DOTS       */}
            {/* ============================================================ */}
            
            {/* Center Circular Card */}
            <circle 
              cx="500" 
              cy="200" 
              r="80" 
              fill="#FFFFFF" 
              stroke="#E2E8F0" 
              strokeWidth="1.5" 
              filter="url(#center-shadow)" 
            />

            {/* Center Typography */}
            <text 
              x="500" 
              y="180" 
              textAnchor="middle" 
              fill="#4A5D6E" 
              fontSize="16" 
              fontWeight="600"
              fontFamily="sans-serif"
            >
              Since
            </text>
            <text 
              x="500" 
              y="218" 
              textAnchor="middle" 
              fill="#F58220" 
              fontSize="30" 
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="-0.5px"
            >
              2020
            </text>

            {/* Rainbow Arc below Center Circle */}
            <path
              d="M 428 200 A 74 74 0 0 0 572 200"
              stroke="url(#rainbow-arc)"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
            />

            {/* 5 Color Nodes on the Rainbow Arc */}
            {/* Node 1: Left Orange */}
            <circle cx="428" cy="200" r="4" fill="#F58220" />
            {/* Node 2: Cyan */}
            <circle cx="448" cy="245" r="4.2" fill="#00C2CB" />
            {/* Node 3: Center Sky Blue */}
            <circle cx="500" cy="274" r="5" fill="#0284C7" stroke="white" strokeWidth="1.5" />
            {/* Node 4: Pink */}
            <circle cx="552" cy="245" r="4.2" fill="#EC4899" />
            {/* Node 5: Right Purple */}
            <circle cx="572" cy="200" r="4" fill="#8B5CF6" />

            {/* ============================================================ */}
            {/* 3. EXACT CONNECTING LINES                                    */}
            {/* ============================================================ */}

            {/* Line 1: Left Angular Bracket for 412+ Projects Completed */}
            <path
              d="M 240 280 L 215 280 L 215 375 L 230 375"
              stroke="#1A314C"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="square"
            />

            {/* Line 2: Bottom-Left Vertical Connector from Petal 2 to 682+ Positive Reviews */}
            <line 
              x1="385" 
              y1="410" 
              x2="385" 
              y2="495" 
              stroke="#1A314C" 
              strokeWidth="1.8" 
              strokeLinecap="round"
            />

            {/* Line 3: Bottom-Center Vertical Connector from Petal 3 to 95+ Team Members */}
            <line 
              x1="500" 
              y1="450" 
              x2="500" 
              y2="495" 
              stroke="#1A314C" 
              strokeWidth="1.8" 
              strokeLinecap="round"
            />

            {/* Line 4: Bottom-Right Vertical Connector from Petal 4 to 3.5M$ Funding Raised */}
            <line 
              x1="615" 
              y1="410" 
              x2="615" 
              y2="495" 
              stroke="#1A314C" 
              strokeWidth="1.8" 
              strokeLinecap="round"
            />

            {/* Line 5: Right Angular Bracket for 99% Customer Satisfaction */}
            <path
              d="M 760 280 L 785 280 L 785 375 L 770 375"
              stroke="#1A314C"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="square"
            />

            {/* ============================================================ */}
            {/* 4. RUNNING NUMBER LABELS AND STATS IN EXACT POSITIONS       */}
            {/* ============================================================ */}

            {/* STAT 1: Left - 412+ Projects Completed */}
            <foreignObject x="60" y="325" width="150" height="150">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={412} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                  Projects Completed
                </span>
              </div>
            </foreignObject>

            {/* STAT 2: Bottom Left - 682+ Positive Reviews */}
            <foreignObject x="310" y="505" width="150" height="110">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={682} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                  Positive Reviews
                </span>
              </div>
            </foreignObject>

            {/* STAT 3: Bottom Center - 95+ Team Members */}
            <foreignObject x="425" y="505" width="150" height="110">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={95} suffix="+" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                  Team Members
                </span>
              </div>
            </foreignObject>

            {/* STAT 4: Bottom Right - 3.5M$ Funding Raised */}
            <foreignObject x="540" y="505" width="150" height="110">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={3.5} decimals={1} suffix="M$" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[100px]">
                  Funding Raised
                </span>
              </div>
            </foreignObject>

            {/* STAT 5: Right - 99% Customer Satisfaction */}
            <foreignObject x="790" y="325" width="150" height="150">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-black text-[#F58220] tracking-tight font-heading">
                  <AnimatedNumber value={99} suffix="%" />
                </span>
                <span className="text-sm font-bold text-[#1A314C] leading-snug mt-1 max-w-[110px]">
                  Customer Satisfaction
                </span>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* 📱 MOBILE RESPONSIVE ADAPTATION WITH EXACT SAME ICONS & RUNNING NUMBERS */}
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
