import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Code2,
  TrendingUp,
  Cpu,
  Layers,
  ShoppingBag,
  Smartphone,
  Palette,
  Layout,
  Globe
} from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  onNavigateToContact: () => void;
  onSelectService?: (serviceSlug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateToContact,
  onSelectService
}) => {
  const handleOpenLiveSite = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full bg-[#F8FAFB] min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#10566E] via-[#107C8E] to-[#1A314C] text-white overflow-hidden">
        {/* Ambient Grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9E5ED_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Top Right Signature Decorative Geometric Diamond Art in Official Brand Palette */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-80 sm:h-80 z-0 opacity-70"
        >
          <div className="relative w-full h-full">
            {/* Outer Light Cyan & Teal diamond */}
            <div className="absolute top-0 right-4 w-44 h-44 sm:w-56 sm:h-56 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/30 bg-gradient-to-br from-[#C9E5ED]/40 to-[#1DA5B8]/10 backdrop-blur-[1px]" />
            {/* Middle Deep Teal diamond */}
            <div className="absolute top-5 right-9 w-36 h-36 sm:w-44 sm:h-44 rotate-45 rounded-2xl border-2 border-[#107C8E]/40 bg-gradient-to-br from-[#107C8E]/20 to-[#10566E]/20" />
            {/* Inner solid Dark Navy & Bright Teal gradient diamond */}
            <div className="absolute top-10 right-14 w-24 h-24 sm:w-30 sm:h-30 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-90 shadow-xl shadow-[#107C8E]/20" />
            {/* Floating cyan dots */}
            <div className="absolute top-2 right-32 w-3 h-3 rounded-full bg-[#1DA5B8]" />
            <div className="absolute top-36 right-6 w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading">
            Our Portfolio & Top Projects
          </h1>
          <p className="text-[#C9E5ED] text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
            Explore our curated showcase of production-grade decentralized protocols, institutional FinTech applications, enterprise mobile ecosystems, and high-performance Web3 solutions.
          </p>
        </div>
      </section>

      {/* 2. Projects Grid Listing */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#C9E5ED]/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Top Image & Hover Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF4F7]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Hover Overlay with View Project Button */}
                  <div className="absolute inset-0 bg-black/55 backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={(e) => handleOpenLiveSite(e, project.liveUrl)}
                      className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-200 cursor-pointer font-heading"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Title Pill */}
                <div className="relative -mt-6 mx-auto z-10 px-4">
                  <div className="bg-white px-6 py-2.5 rounded-xl shadow-lg border border-[#C9E5ED]/90 text-center min-w-[200px]">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1A314C] tracking-tight font-heading">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Details */}
                <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-[#4A5D6E] text-sm sm:text-base leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F0F6F8] text-[#107C8E] text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Have a Project in Mind CTA Section with Short Paragraphs for All Our Services */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[#C9E5ED]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#107C8E]/10 text-[#107C8E] text-xs sm:text-sm font-bold font-heading">
              <span>Full-Stack Engineering & Growth Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A314C] tracking-tight font-heading">
              Have a Project in Mind? Let's Build Something Exceptional.
            </h2>
            <p className="text-[#4A5D6E] text-base sm:text-lg leading-relaxed font-sans">
              Our expert engineers, smart contract architects, AI researchers, and digital marketing specialists deliver end-to-end technology solutions tailored to scale your vision.
            </p>
          </div>

          {/* Detailed Paragraph Breakdown Covering All Our Services */}
          <div className="bg-[#FAFDFE] rounded-3xl border border-[#C9E5ED] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="border-b border-[#C9E5ED]/80 pb-4">
              <h3 className="text-xl font-extrabold text-[#1A314C] font-heading">
                What We Build Across Our Specialized Domains:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              {/* Digital Marketing */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Digital Marketing & SEO Growth</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Data-driven organic search engine optimization (SEO), Meta & Google ad campaigns, high-converting funnel architectures, and quantitative ROI tracking to scale market presence.
                  </p>
                </div>
              </div>

              {/* Facebook Monetization */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Facebook & Content Monetization</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    End-to-end Facebook page audience scaling, In-Stream Ads compliance, viral content strategy, policy violation troubleshooting, and automated banking payout structures.
                  </p>
                </div>
              </div>

              {/* Blockchain Development */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Blockchain & Web3 Engineering</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Audited Solidity & Rust smart contracts, decentralized finance (DeFi) protocols, EVM/Solana cross-chain integrations, and custom tokenomics for institutional-grade reliability.
                  </p>
                </div>
              </div>

              {/* DevOps Development */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">DevOps & Cloud Infrastructure</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Containerized microservices via Kubernetes & Docker, automated CI/CD deployment pipelines on AWS/GCP, Terraform IaC, and 24/7 high-availability system monitoring.
                  </p>
                </div>
              </div>

              {/* Full-Stack Web Development */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Full-Stack Web Development</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    High-performance modern web platforms using React, Next.js, Node.js, and TypeScript, engineered with micro-frontend architectures, top-tier security, and fast page speeds.
                  </p>
                </div>
              </div>

              {/* Ecommerce & Shopify */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Ecommerce & Custom Storefronts</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Scalable Shopify Plus and custom headless ecommerce platforms integrated with multi-currency payment gateways, inventory sync, and seamless 1-click checkout experiences.
                  </p>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">iOS & Android Mobile Apps</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Native-performance mobile applications built with Flutter and React Native, featuring real-time push notifications, offline data caching, and frictionless UX design.
                  </p>
                </div>
              </div>

              {/* AI & Machine Learning */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">AI & Machine Learning Solutions</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Custom Large Language Model (LLM) fine-tuning, automated AI agents, predictive business analytics, and computer vision pipelines to eliminate manual operational friction.
                  </p>
                </div>
              </div>

              {/* UI/UX Product Design */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Layout className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">UI/UX Product Design & Prototyping</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Figma design systems, interactive wireframing, heuristic evaluations, and human-centered design principles that reduce churn and turn casual visitors into loyal users.
                  </p>
                </div>
              </div>

              {/* Graphic & Brand Identity */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#107C8E] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7FA] text-[#107C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Palette className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#1A314C] font-heading">Graphic Design & Brand Identity</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                    Cohesive visual identities, typography guidelines, vector assets, marketing collaterals, and 3D digital illustrations crafted for modern tech and financial brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white font-extrabold text-base shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer font-heading"
            >
              <span>Start a Project Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
