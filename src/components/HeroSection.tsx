import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';
import aiHeroBgImage from '../assets/images/home-hero.jpg';

// 💡 HERO BACKGROUND IMAGE LINK: Apni background image ka import link / URL yahan paste ya change kar sakte hain:
export const HERO_BG_IMAGE_URL = aiHeroBgImage; // Or use: 'https://images.unsplash.com/...' or custom image path

interface CounterStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const CounterStat: React.FC<CounterStatProps> = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 1000, 
  className 
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const statRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          requestAnimationFrame(() => {
            setInView(true);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    setCount(0);
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth ease-out cubic curve
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentVal = Math.floor(easeOutCubic(progress) * end);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration]);

  return (
    <span ref={statRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface HeroSectionProps {
  onExploreCourses: () => void;
  onSelectCourse: (course: Course) => void;
  featuredCourse: Course;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
}) => {
  return (
    <section className="relative bg-[#1A314C] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#C9E5ED]/20 overflow-hidden">
      {/* Background Image & Clean Subtle Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={HERO_BG_IMAGE_URL}
          alt="AI & FinTech Hero Background"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('/home-hero.jpg')) {
              target.src = '/home-hero.jpg';
            } else if (!target.src.includes('unsplash')) {
              target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80';
            }
          }}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
        />
        {/* Clean soft overlay for image contrast */}
        <div className="absolute inset-0 bg-[#1A314C]/45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Transparent Matte Frosted Card with bottom-to-top smooth entry */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6 bg-black/35 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden"
        >

          {/* Top Badge without SVG icon */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C9E5ED] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
          >
            <span>Next-Gen Financial Intelligence</span>
          </motion.div>

          {/* Main Headline with Stylish Typography & Smooth Slide-up */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white"
          >
            Empowering <span className="bg-gradient-to-r from-[#C9E5ED] via-[#1DA5B8] to-[#107C8E] bg-clip-text text-transparent">FinTech</span>, Blockchain & <span className="text-[#1DA5B8]">AI Leaders</span>
          </motion.h1>

          {/* Upgraded Content Copy with Smooth Slide-up */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C9E5ED]/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal tracking-wide"
          >
            Bridge institutional finance with cutting-edge decentralized protocols. Master smart contract engineering, quantitative DeFi trading, airdrop strategies, and autonomous AI systems through immersive hands-on mentorship.
          </motion.p>

          {/* CTA Buttons with Smooth Slide-up */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#107C8E] hover:bg-[#10566E] text-white font-extrabold text-sm shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group border border-white/20"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C9E5ED]" />
            </button>
          </motion.div>

          {/* Trust Badges with Smooth Slide-up */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#C9E5ED] font-semibold"
          >
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-[#1DA5B8]" />
              <span>100% Practical Labs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-[#1DA5B8]" />
              <span>Institutional Mentorship</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-[#1DA5B8]" />
              <span>Verified Web3 Credentials</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Live Metrics Impact Strip with Scroll / Open In-View Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1DA5B8] hover:bg-black/40 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1DA5B8] group-hover:scale-105 transition-transform duration-300">
              <CounterStat end={5000} suffix="+" duration={1200} />
            </div>
            <div className="text-xs text-[#C9E5ED]/80 mt-1.5 font-bold group-hover:text-white transition-colors">Enrolled Students</div>
          </div>

          <div className="p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1DA5B8] hover:bg-black/40 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#C9E5ED] group-hover:scale-105 transition-transform duration-300">
              <CounterStat end={98} suffix="%" duration={1000} />
            </div>
            <div className="text-xs text-[#C9E5ED]/80 mt-1.5 font-bold group-hover:text-white transition-colors">Satisfaction Rate</div>
          </div>

          <div className="p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1DA5B8] hover:bg-black/40 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1DA5B8] group-hover:scale-105 transition-transform duration-300">
              <CounterStat end={20} suffix="+" duration={900} />
            </div>
            <div className="text-xs text-[#C9E5ED]/80 mt-1.5 font-bold group-hover:text-white transition-colors">Practical Modules</div>
          </div>

          <div className="p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1DA5B8] hover:bg-black/40 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#C9E5ED] group-hover:scale-105 transition-transform duration-300">
              <CounterStat end={100} suffix="%" duration={1000} />
            </div>
            <div className="text-xs text-[#C9E5ED]/80 mt-1.5 font-bold group-hover:text-white transition-colors">Industry Mentorship</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


