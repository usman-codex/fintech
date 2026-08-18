import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Compass
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Ref for Mission & Who We Are Section
  const missionRef = useRef<HTMLDivElement>(null);
  const isMissionInView = useInView(missionRef, { once: false, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white text-[#1A314C] font-poppins overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP "OUR VISION" HERO BANNER WITH RIGHT-TO-LEFT TEXT ANIMATION        */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-r from-[#F59E0B] via-[#FF9700] to-[#E68A00] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md">
        {/* Background Geometric Diamond / Rhombus Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-25 overflow-hidden flex items-center justify-end">
          <div className="relative w-96 h-96 mr-[-50px]">
            {/* Diamond 1 */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-white/30 rounded-3xl transform rotate-45 backdrop-blur-xs" />
            {/* Diamond 2 */}
            <div className="absolute top-28 right-32 w-56 h-56 bg-white/20 rounded-3xl transform rotate-45 backdrop-blur-xs" />
            {/* Diamond 3 */}
            <div className="absolute -top-10 right-52 w-40 h-40 bg-white/15 rounded-3xl transform rotate-45" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl space-y-5">
            {/* Fixed / Static "Our Vision" Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-poppins drop-shadow-sm">
              Our Vision
            </h1>

            {/* Paragraph animated from RIGHT to LEFT onto screen */}
            <motion.p
              initial={{ x: '80vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1], // Smooth custom ease curve
                delay: 0.15,
              }}
              className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-poppins font-normal max-w-3xl drop-shadow-xs"
            >
              With a focus on creative ideas, innovation, and determination, Zweidevs strives to facilitate your marketing journey. We utilize advanced technology and robust business strategies that your company requires in this digital age. As a professional marketing agency, we are dedicated to bringing the future into the present.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "WHO WE ARE" & "OUR MISSION" (IMAGE FROM LEFT, TEXT FROM RIGHT)        */}
      {/* ========================================================================= */}
      <section 
        ref={missionRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Image with Custom Triangles (Animates from LEFT of screen) */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                
                {/* 1. TOP TRIANGLE SHAPE (Soft Peach/Gold pointing up behind image) */}
                <div 
                  className="absolute -top-10 left-1/3 w-32 h-24 bg-[#FED7AA] z-0"
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    borderRadius: '8px',
                  }}
                />

                {/* 2. LEFT TRIANGLE SHAPE (Vibrant Orange pointing left behind image) */}
                <div 
                  className="absolute top-1/4 -left-10 w-24 h-32 bg-[#FF9700] z-0"
                  style={{
                    clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
                    borderRadius: '8px',
                  }}
                />

                {/* Main Team Image Container with Custom Stylized Asymmetric Rounded Corners */}
                <div className="relative z-10 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl shadow-xl border-4 border-white bg-[#F8FAFC]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                    alt="Zweidevs Team Collaboration"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Small floating decorative pill accent */}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#FDBA74] z-20 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#107C8E] animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-[#1A314C] font-poppins">
                    Innovative Digital Agency
                  </span>
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN: Mission Content (Animates from RIGHT of screen) */}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Category Badge */}
              <div className="space-y-1">
                <span className="text-base sm:text-lg font-bold text-[#FF9700] font-poppins">
                  Who We Are
                </span>
                
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
                  Our Mission
                </h2>
              </div>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                Zweidevs stands as the preeminent digital agency in the realm of business solutions. Our commitment to excellence and a service-oriented approach defines our very essence. We specialize in providing dynamic and groundbreaking solutions meticulously crafted to suit your unique business domain.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At Zweidevs, we not only meet but exceed your expectations, driven by a passion for delivering thoughtfully innovated, eye-catching products that leave a lasting impression. Our dedicated team of professionals takes immense pride in their ability to engineer your requirements into robust software solutions, harnessing the full potential of cutting-edge technologies spanning mobile, web, cloud, and e-commerce. We go beyond mere solutions; we are your strategic partner, committed to propelling your business forward in the digital landscape.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#107C8E]/10 text-[#107C8E] flex items-center justify-center font-bold">
                    <CheckCircle className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A314C]">
                    Next-Gen Web & Mobile
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF9700]/10 text-[#FF9700] flex items-center justify-center font-bold">
                    <Zap className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A314C]">
                    Rapid Digital Scale
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "OUR FOUNDERS" SECTION (INTEGRATED ON ABOUT PAGE AS WELL)              */}
      {/* ========================================================================= */}
      <OurFoundersSection />

      {/* ========================================================================= */}
      {/* 4. COMPANY CORE VALUES & STRENGTHS                                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sm sm:text-base font-bold text-[#107C8E] font-poppins">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
              How We Deliver Groundbreaking Impact
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-poppins">
              Every project is powered by systematic execution, modern engineering standards, and unmatched dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-[#FF9700]" />,
                title: 'Thoughtful Innovation',
                desc: 'Crafting user experiences and technical architectures that solve core market bottlenecks effectively.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#107C8E]" />,
                title: 'Unwavering Reliability',
                desc: 'Building resilient cloud structures, robust security layers, and enterprise-grade performance benchmarks.',
              },
              {
                icon: <Compass className="w-6 h-6 text-[#1DA5B8]" />,
                title: 'Strategic Partnership',
                desc: 'Co-creating roadmaps and providing ongoing advisory to maximize long-term client expansion.',
              },
            ].map((v, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#1DA5B8] hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shadow-xs">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A314C] font-poppins">{v.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed font-poppins">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
