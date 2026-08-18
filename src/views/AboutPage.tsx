import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { 
  Sparkles, 
  ShieldCheck, 
  Compass,
  CheckCircle,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Target,
  DollarSign,
  Headphones
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Ref for Mission & Who We Are Section
  const missionRef = useRef<HTMLDivElement>(null);
  const isMissionInView = useInView(missionRef, { once: false, amount: 0.2 });

  // Ref for Team Interpersonal Skills Section
  const teamSkillsRef = useRef<HTMLDivElement>(null);
  const isTeamSkillsInView = useInView(teamSkillsRef, { once: false, amount: 0.15 });

  return (
    <div className="min-h-screen bg-white text-[#1A314C] font-poppins overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP "OUR VISION" HERO BANNER WITH BRAND DEEP NAVY/TEAL PALETTE        */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-lg">
        
        {/* Signature Layered Rounded Diamond Graphic on the Right (Same as Home) */}
        <div className="absolute right-[-40px] sm:right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-60 overflow-hidden w-72 h-72 sm:w-96 sm:h-96">
          {/* Outer Light Cyan & Teal diamond */}
          <div className="absolute top-0 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/30 to-[#1DA5B8]/20 backdrop-blur-xs" />
          {/* Middle Deep Teal diamond */}
          <div className="absolute top-6 right-10 w-38 h-38 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-br from-[#107C8E]/30 to-[#10566E]/30" />
          {/* Inner solid Dark Navy & Bright Teal gradient diamond */}
          <div className="absolute top-12 right-16 w-26 h-26 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#1DA5B8] opacity-90 shadow-xl shadow-[#107C8E]/30" />
          {/* Floating cyan dots */}
          <div className="absolute top-4 right-36 w-3 h-3 rounded-full bg-[#1DA5B8] animate-pulse" />
          <div className="absolute top-44 right-8 w-2.5 h-2.5 rounded-full bg-[#C9E5ED]" />
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
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-poppins font-normal max-w-3xl drop-shadow-xs"
            >
              With a relentless focus on practical mastery, financial technology innovation, and decentralized architecture, <strong className="font-extrabold text-white underline decoration-[#1DA5B8] underline-offset-4">FinTech Edge Institute</strong> empowers the next generation of fintech engineers, Web3 developers, and digital finance leaders. We bridge cutting-edge blockchain protocols, quantitative trading algorithms, and modern software engineering to prepare ambitious professionals for global fintech careers and high-impact digital ventures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "WHO WE ARE" & "OUR MISSION" (IMAGE FROM LEFT, TEXT FROM RIGHT)        */}
      {/* ========================================================================= */}
      <section 
        ref={missionRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Image with Signature Concentric Layered Diamonds (Same as Home) */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                
                {/* 1. TOP-RIGHT LAYERED CONCENTRIC DIAMOND (Home Section Style in Brand Teal/Cyan) */}
                <div className="absolute -top-12 -right-8 w-44 h-44 pointer-events-none z-0">
                  {/* Outer Diamond */}
                  <div className="absolute top-0 right-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/50 to-[#1DA5B8]/20 backdrop-blur-xs" />
                  {/* Middle Diamond */}
                  <div className="absolute top-4 right-4 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/25 to-[#10566E]/20" />
                  {/* Inner Diamond */}
                  <div className="absolute top-8 right-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-md shadow-[#107C8E]/20" />
                  {/* Floating Cyan Accent Dot */}
                  <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#1DA5B8]" />
                </div>

                {/* 2. BOTTOM-LEFT LAYERED CONCENTRIC DIAMOND (Home Section Style in Brand Teal/Cyan) */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 pointer-events-none z-0">
                  {/* Outer Diamond */}
                  <div className="absolute bottom-0 left-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/50 to-[#1DA5B8]/20 backdrop-blur-xs" />
                  {/* Middle Diamond */}
                  <div className="absolute bottom-4 left-4 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/25 to-[#10566E]/20" />
                  {/* Inner Diamond */}
                  <div className="absolute bottom-8 left-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-md shadow-[#107C8E]/20" />
                  {/* Floating Cyan Accent Dot */}
                  <div className="absolute bottom-2 left-28 w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
                </div>

                {/* Main Team Image Container with Custom Stylized Asymmetric Rounded Corners */}
                <div className="relative z-10 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl shadow-xl border-4 border-white bg-[#F8FAFC]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                    alt="FinTech Edge Institute Mentorship & Labs"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#C9E5ED] z-20 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#107C8E] animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-[#1A314C] font-poppins">
                    FinTech & Web3 Institute
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
                <span className="text-base sm:text-lg font-bold text-[#107C8E] font-poppins">
                  Who We Are
                </span>
                
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
                  Our Mission
                </h2>
              </div>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong> stands as a premier specialized education institute and technology hub dedicated to decentralized finance (DeFi), algorithmic trading, blockchain engineering, and modern full-stack financial software. Our commitment to rigorous practical training, live testnet simulations, and verified industry mentorship defines our core essence.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong>, we go beyond conventional theory. We immerse our students in real-world smart contract development, quantitative market modeling, automated bot algorithms, and institutional financial security protocols. Our dedicated faculty and industry practitioners take immense pride in engineering career-ready skills that empower learners to secure top global remote roles and build groundbreaking fintech solutions.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#107C8E]/10 text-[#107C8E] flex items-center justify-center font-bold">
                    <CheckCircle className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A314C]">
                    Hands-on FinTech & DeFi Labs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1DA5B8]/15 text-[#107C8E] flex items-center justify-center font-bold">
                    <Zap className="w-4.5 h-4.5 text-[#1DA5B8]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A314C]">
                    1-on-1 Industry Mentorship
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TEAM WITH STRONG INTERPERSONAL SKILLS (ALTERNATING LEFT/RIGHT ANIMATIONS) */}
      {/* ========================================================================= */}
      <section
        ref={teamSkillsRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="space-y-4">
            {/* Top Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-base sm:text-lg font-bold text-[#E5A83B] font-poppins">
                FinTech Edge Institute
              </span>
              <span className="text-[#E5A83B] font-bold tracking-widest text-lg">——</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins"
            >
              Team With Strong Interpersonal Skills
            </motion.h2>

            {/* Lead Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-poppins"
            >
              We have managed to build a team of developers with exceptional interpersonal skills. Here are some qualities of our fintech engineers and developers that you would love to learn about:
            </motion.p>
          </div>

          {/* Interactive Feature Paragraphs with Alternating Left/Right Animations */}
          <div className="space-y-10 pt-4">

            {/* 1. DEDICATION & FOCUS — SLIDES IN FROM LEFT (Screen Left side se nikal k ai) */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#107C8E] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#107C8E]/10 text-[#107C8E] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] font-poppins">
                  Dedication & Focus
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong>, we have curated a team of blockchain and software engineers who consistently deliver their best work. They invest their time and effort into your project to meet your specific needs. By hiring professional developers with practical knowledge, you gain an advantage over your competitors, enabling you to grow and reach potential customers in more innovative ways.
              </p>
            </motion.div>

            {/* 2. BUDGET FRIENDLY — SLIDES IN FROM RIGHT (Screen Right side se nikal k ai) */}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1DA5B8] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1DA5B8]/15 text-[#107C8E] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5 text-[#1DA5B8]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] font-poppins">
                  Budget Friendly
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                Our services and institutional programs are designed to be cost-effective without compromising on quality. We understand the importance of budget constraints, and our team works diligently to provide solutions that align with your financial resources. We strive to deliver excellent value for your investment, ensuring that you receive high-quality development and education services within your budget.
              </p>
            </motion.div>

            {/* 3. 24/7 SUPPORT TEAM — SLIDES IN FROM LEFT (Screen Left side se nikal k ai) */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#107C8E] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#107C8E]/10 text-[#107C8E] flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5 text-[#107C8E]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A314C] font-poppins">
                  24/7 Support Team
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                We have a dedicated support team available round-the-clock to address any concerns or queries you may have. Whether its technical assistance or general inquiries, our support team is committed to providing prompt and reliable assistance. We understand the importance of uninterrupted support, and our team is always ready to assist you, ensuring a smooth and hassle-free experience throughout your fintech development journey.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "OUR FOUNDERS" SECTION                                                 */}
      {/* ========================================================================= */}
      <OurFoundersSection />

      {/* ========================================================================= */}
      {/* 5. COMPANY CORE VALUES & GUIDING PRINCIPLES                               */}
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
              Every training module and research track is powered by systematic execution, modern engineering standards, and unmatched dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-[#1DA5B8]" />,
                title: 'Applied FinTech Mastery',
                desc: 'Immersive hands-on bootcamps with real-world smart contracts, algorithmic trading bots, and API integrations.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#107C8E]" />,
                title: 'Institutional Standards & Security',
                desc: 'Industry-grade security frameworks, smart contract auditing methodologies, and quantitative risk management.',
              },
              {
                icon: <Compass className="w-6 h-6 text-[#1A314C]" />,
                title: 'Career & Venture Incubation',
                desc: 'Direct global job placement assistance, portfolio reviews, and decentralized venture capital networking.',
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
