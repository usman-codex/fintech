import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { AchievementsSection } from '../components/AchievementsSection';
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
  Headphones,
  Cpu,
  Lock,
  Rocket,
  Layers
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  
  const missionRef = useRef<HTMLDivElement>(null);
  const isMissionInView = useInView(missionRef, { once: false, amount: 0.2 });

  
  const teamSkillsRef = useRef<HTMLDivElement>(null);
  const isTeamSkillsInView = useInView(teamSkillsRef, { once: false, amount: 0.15 });

  return (
    <div className="min-h-screen bg-white text-[#1A314C] font-poppins overflow-x-hidden">
      
      {}
      {}
      {}
      <section className="relative w-full bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-lg">
        
        {}
        <div className="absolute right-[-40px] sm:right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-60 overflow-hidden w-72 h-72 sm:w-96 sm:h-96">
          {}
          <div className="absolute top-0 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/30 to-[#1DA5B8]/20 backdrop-blur-xs" />
          {}
          <div className="absolute top-6 right-10 w-38 h-38 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-br from-[#107C8E]/30 to-[#10566E]/30" />
          {}
          <div className="absolute top-12 right-16 w-26 h-26 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#1DA5B8] opacity-90 shadow-xl shadow-[#107C8E]/30" />
          {}
          <div className="absolute top-4 right-36 w-3 h-3 rounded-full bg-[#1DA5B8] animate-pulse" />
          <div className="absolute top-44 right-8 w-2.5 h-2.5 rounded-full bg-[#C9E5ED]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl space-y-5">
            {}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-poppins drop-shadow-sm">
              Our Vision
            </h1>

            {}
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

      {}
      {}
      {}
      <section 
        ref={missionRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                
                {}
                <div className="absolute -top-12 -right-8 w-44 h-44 pointer-events-none z-0">
                  {}
                  <div className="absolute top-0 right-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/50 to-[#1DA5B8]/20 backdrop-blur-xs" />
                  {}
                  <div className="absolute top-4 right-4 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/25 to-[#10566E]/20" />
                  {}
                  <div className="absolute top-8 right-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-md shadow-[#107C8E]/20" />
                  {}
                  <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#1DA5B8]" />
                </div>

                {}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 pointer-events-none z-0">
                  {}
                  <div className="absolute bottom-0 left-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/50 to-[#1DA5B8]/20 backdrop-blur-xs" />
                  {}
                  <div className="absolute bottom-4 left-4 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/25 to-[#10566E]/20" />
                  {}
                  <div className="absolute bottom-8 left-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-md shadow-[#107C8E]/20" />
                  {}
                  <div className="absolute bottom-2 left-28 w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
                </div>

                {}
                <div className="relative z-10 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl shadow-xl border-4 border-white bg-[#F8FAFC]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                    alt="FinTech Edge Institute Mentorship & Labs"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#C9E5ED] z-20 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#107C8E] animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-[#1A314C] font-poppins">
                    FinTech & Web3 Institute
                  </span>
                </div>

              </div>
            </motion.div>

            {}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              {}
              <div className="space-y-1">
                <span className="text-base sm:text-lg font-bold text-[#107C8E] font-poppins">
                  Who We Are
                </span>
                
                {}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins">
                  Our Mission
                </h2>
              </div>

              {}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong> stands as a premier specialized education institute and technology hub dedicated to decentralized finance (DeFi), algorithmic trading, blockchain engineering, and modern full-stack financial software. Our commitment to rigorous practical training, live testnet simulations, and verified industry mentorship defines our core essence.
              </p>

              {}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At <strong className="font-bold text-[#107C8E] bg-[#107C8E]/10 px-1.5 py-0.5 rounded-md">FinTech Edge Institute</strong>, we go beyond conventional theory. We immerse our students in real-world smart contract development, quantitative market modeling, automated bot algorithms, and institutional financial security protocols. Our dedicated faculty and industry practitioners take immense pride in engineering career-ready skills that empower learners to secure top global remote roles and build groundbreaking fintech solutions.
              </p>

              {}
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

      {}
      {}
      {}
      <section
        ref={teamSkillsRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          {}
          <div className="space-y-4">
            {}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-base sm:text-lg font-bold text-[#107C8E] font-poppins">
                FinTech Edge Institute
              </span>
              <span className="text-[#1DA5B8] font-bold tracking-widest text-lg">——</span>
            </motion.div>

            {}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A314C] tracking-tight font-poppins"
            >
              Team With Strong Interpersonal Skills
            </motion.h2>

            {}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-poppins"
            >
              We have managed to build a team of developers with exceptional interpersonal skills. Here are some qualities of our fintech engineers and developers that you would love to learn about:
            </motion.p>
          </div>

          {}
          <div className="space-y-10 pt-4">

            {}
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

            {}
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

            {}
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

      {}
      {}
      {}
      <AchievementsSection />

      {}
      {}
      {}
      <OurFoundersSection />

      {}
      {}
      {}
      <section className="relative py-16 sm:py-24 bg-[#FAFAFA] border-t border-[#E2E8F0] overflow-hidden">
        
        {}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-80 sm:h-80 z-0 opacity-70"
        >
          <div className="relative w-full h-full">
            {}
            <div className="absolute top-0 right-4 w-44 h-44 sm:w-56 sm:h-56 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/40 to-[#1DA5B8]/10 backdrop-blur-[1px]" />
            {}
            <div className="absolute top-5 right-9 w-36 h-36 sm:w-44 sm:h-44 rotate-45 rounded-2xl border-2 border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/20 to-[#10566E]/20" />
            {}
            <div className="absolute top-10 right-14 w-24 h-24 sm:w-30 sm:h-30 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-xl shadow-[#107C8E]/20" />
            {}
            <div className="absolute top-2 right-32 w-3 h-3 rounded-full bg-[#1DA5B8]" />
            <div className="absolute top-36 right-6 w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                icon: <Cpu className="w-6 h-6 text-[#107C8E]" />,
                iconBg: 'bg-[#E6F7FA] border-[#1DA5B8]/40 shadow-xs text-[#107C8E]',
                title: 'Applied FinTech Mastery',
                desc: 'Immersive hands-on bootcamps with real-world smart contracts, algorithmic trading bots, and API integrations.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#10566E]" />,
                iconBg: 'bg-[#EBF3F7] border-[#107C8E]/30 shadow-xs text-[#10566E]',
                title: 'Institutional Standards & Security',
                desc: 'Industry-grade security frameworks, smart contract auditing methodologies, and quantitative risk management.',
              },
              {
                icon: <Rocket className="w-6 h-6 text-[#1DA5B8]" />,
                iconBg: 'bg-[#F0FAFC] border-[#1DA5B8]/40 shadow-xs text-[#1DA5B8]',
                title: 'Career & Venture Incubation',
                desc: 'Direct global job placement assistance, portfolio reviews, and decentralized venture capital networking.',
              },
            ].map((v, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#1DA5B8] hover:shadow-lg transition-all duration-300 space-y-5 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${v.iconBg}`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A314C] font-poppins group-hover:text-[#107C8E] transition-colors">{v.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed font-poppins">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
