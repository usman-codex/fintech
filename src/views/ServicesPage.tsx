import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft,
  Calendar,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ServiceIcon } from '../components/ServiceIcon';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  selectedServiceSlug?: string | null;
  onSelectService: (service: ServiceItem | null) => void;
  onExploreCourses: () => void;
  onContactUs: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceSlug,
  onSelectService,
  onExploreCourses,
  onContactUs,
}) => {
  
  const currentService = selectedServiceSlug
    ? SERVICES_DATA.find((s) => s.slug === selectedServiceSlug || s.id === selectedServiceSlug) || null
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedServiceSlug]);

  
  if (currentService) {
    return (
      <div className="min-h-screen bg-[#FAFDFE] text-[#1A314C] pb-24">
        
        {}
        <div className="relative bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] text-white overflow-hidden py-16 sm:py-22 border-b border-[#107C8E]/30">
          
          {}
          <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 sm:right-10 w-72 h-72 sm:w-96 sm:h-96 opacity-60">
            <div className="relative w-full h-full">
              <div className="absolute top-0 right-4 w-52 h-52 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-[#1DA5B8]/10 backdrop-blur-xs" />
              <div className="absolute top-8 right-12 w-40 h-40 rotate-45 rounded-2xl border-2 border-[#C9E5ED]/50 bg-[#C9E5ED]/15" />
              <div className="absolute top-14 right-20 w-28 h-28 rotate-45 rounded-xl bg-gradient-to-br from-[#107C8E] to-[#1DA5B8] shadow-2xl opacity-90" />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C9E5ED] font-heading">
              <button
                onClick={() => onSelectService(null)}
                className="hover:text-white underline underline-offset-4 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Services</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              <span className="text-white font-bold">{currentService.shortTitle}</span>
            </div>

            {}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                {currentService.bannerHeadline}
              </h1>
              <p className="text-[#C9E5ED] text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                {currentService.bannerDescription}
              </p>
            </div>

            {}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onContactUs}
                className="px-6 py-3 rounded-2xl bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-2 font-heading"
              >
                <span>Request a Quote / Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectService(null)}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all cursor-pointer font-heading"
              >
                Browse All Services
              </button>
            </div>

          </div>
        </div>

        {}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
          
          {}
          <div className="bg-white rounded-3xl border border-[#C9E5ED] p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-start gap-6">
              {}
              <div className="shrink-0 flex items-center justify-center">
                <ServiceIcon 
                  name={currentService.iconName} 
                  size={52} 
                  color="#1A314C" 
                  accentColor="#1DA5B8"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#1A314C] leading-snug font-heading">
                  {currentService.deliverablesHeading}
                </h2>
                <p className="text-sm sm:text-base text-[#10566E] leading-relaxed font-sans">
                  {currentService.deliverablesDescription}
                </p>
              </div>
            </div>

            {}
            <div className="pt-6 border-t border-[#C9E5ED]/60">
              <h3 className="text-base font-bold text-[#1A314C] mb-4 font-heading">Core Capabilities & Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.keyFeatures.map((feat, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#C9E5ED]/15 border border-[#C9E5ED]/60 hover:border-[#1DA5B8] transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#107C8E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#1A314C] leading-relaxed font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="pt-6 border-t border-[#C9E5ED]/60 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-extrabold text-[#107C8E] uppercase tracking-wider font-heading">
                  Tools & Technologies:
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentService.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C9E5ED]/25 hover:bg-[#C9E5ED]/50 text-[#1A314C] text-xs font-bold border border-[#C9E5ED] transition-all font-heading"
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: t.color || '#1DA5B8' }} 
                    />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A314C] font-heading">
                Our Development Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-[#107C8E] font-medium font-sans">
                Transparent, sprint-based delivery with continuous verification and dedicated team support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#C9E5ED] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="text-4xl font-extrabold text-[#107C8E]/10 absolute top-4 right-4 font-heading">
                    {step.number}
                  </div>
                  <div className="space-y-3 relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#107C8E]/10 text-[#107C8E] font-bold text-xs flex items-center justify-center font-heading">
                      {step.number}
                    </div>
                    <h4 className="text-base font-bold text-[#1A314C] font-heading">{step.title}</h4>
                    <p className="text-xs text-[#10566E] leading-relaxed font-sans">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] rounded-3xl p-8 sm:p-12 text-white border border-[#1DA5B8]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Ready to build with our {currentService.shortTitle} team?
              </h3>
              <p className="text-sm sm:text-base text-[#C9E5ED] leading-relaxed font-sans font-medium">
                Schedule a technical architecture consultation call or submit your project requirements for an estimate.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3.5 relative z-10">
              <button
                onClick={onContactUs}
                className="px-6 py-3.5 rounded-xl bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-extrabold text-sm transition-all shadow-lg cursor-pointer flex items-center gap-2 font-heading"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Meeting</span>
              </button>
              <button
                onClick={() => onSelectService(null)}
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-[#C9E5ED]/40 transition-all cursor-pointer font-heading"
              >
                Back to All Services
              </button>
            </div>
          </div>

          {}
          <div className="bg-white rounded-3xl border border-[#C9E5ED] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#1A314C] font-heading">
                  Explore Other Specialized Services
                </h4>
                <p className="text-xs sm:text-sm text-[#10566E] font-medium font-sans">
                  Switch to any of our specialized service tracks.
                </p>
              </div>
              <button
                onClick={() => onSelectService(null)}
                className="text-xs sm:text-sm font-bold text-[#107C8E] hover:underline cursor-pointer font-heading shrink-0"
              >
                View Full Catalog →
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
              {SERVICES_DATA.filter((s) => s.id !== currentService.id).map((other) => (
                <button
                  key={other.id}
                  onClick={() => {
                    onSelectService(other);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#FAFDFE] hover:bg-[#F0F8FA] p-4 sm:p-5 rounded-2xl border border-[#C9E5ED] hover:border-[#107C8E] text-center flex flex-col items-center justify-center gap-3 group transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-1 min-h-[135px]"
                >
                  <div className="flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-200 text-[#1A314C]">
                    <ServiceIcon 
                      name={other.iconName} 
                      size={40} 
                      color="#1A314C" 
                      accentColor="#1DA5B8"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors leading-snug font-heading text-center line-clamp-2">
                    {other.shortTitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-[#FAFDFE] text-[#1A314C] pb-24">
      
      {}
      <div className="relative bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] text-white overflow-hidden py-16 sm:py-24 border-b border-[#107C8E]/30">
        
        {}
        <div aria-hidden="true" className="pointer-events-none absolute -top-12 right-0 sm:right-10 w-72 h-72 sm:w-96 sm:h-96 opacity-65">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-4 w-52 h-52 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-[#1DA5B8]/10 backdrop-blur-xs" />
            <div className="absolute top-8 right-12 w-40 h-40 rotate-45 rounded-2xl border-2 border-[#C9E5ED]/50 bg-[#C9E5ED]/15" />
            <div className="absolute top-14 right-20 w-28 h-28 rotate-45 rounded-xl bg-gradient-to-br from-[#107C8E] to-[#1DA5B8] shadow-2xl opacity-90" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Everything Your Business Needs Under One Roof
            </h1>
            <p className="text-[#C9E5ED] text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              <strong className="font-bold text-white">FinTech Edge Institute</strong> provides cutting-edge technology training, development, and innovative solutions for your digital journey. We leverage blockchain architectures, algorithmic trading, Web3 systems, and modern full-stack development to empower your financial technology capabilities.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 font-heading">
            <span className="text-lg sm:text-xl font-extrabold text-white">Our Services</span>
            <span className="h-[2px] w-16 bg-gradient-to-r from-[#1DA5B8] to-transparent rounded-full" />
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="bg-white rounded-3xl border border-[#C9E5ED] p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#1A314C] font-heading">
              Explore Our Core Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#10566E] font-medium font-sans">
              Select any service to view comprehensive technical specifications, tools, and workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => onSelectService(srv)}
                className="bg-[#FAFDFE] hover:bg-[#F0F8FA] p-4 sm:p-5 rounded-2xl border border-[#C9E5ED] hover:border-[#107C8E] text-center flex flex-col items-center justify-center gap-3 group transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-1 min-h-[135px]"
              >
                <div className="flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-200 text-[#1A314C]">
                  <ServiceIcon
                    name={srv.iconName}
                    size={40}
                    color="#1A314C"
                    accentColor="#1DA5B8"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors leading-snug font-heading text-center line-clamp-2">
                  {srv.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-8">
        {SERVICES_DATA.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              id={`service-row-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl border border-[#C9E5ED] hover:border-[#1DA5B8] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 group"
            >
              
              {}
              <div className="w-full md:w-56 shrink-0 flex flex-col items-center justify-center text-center p-6 bg-[#FAFDFE] rounded-2xl border border-[#C9E5ED] group-hover:border-[#1DA5B8]/60 transition-colors">
                <div className="flex items-center justify-center mb-3 text-[#1A314C] group-hover:scale-110 transition-transform">
                  <ServiceIcon 
                    name={service.iconName} 
                    size={48} 
                    color="#1A314C" 
                    accentColor="#1DA5B8"
                  />
                </div>
                <span className="text-sm font-extrabold text-[#1A314C] leading-snug font-heading">
                  {service.shortTitle}
                </span>
              </div>

              {}
              <div className="flex-1 w-full space-y-4">
                
                {}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A314C] group-hover:text-[#107C8E] transition-colors font-heading">
                    {service.title}
                  </h3>

                  {}
                  <button
                    onClick={() => onSelectService(service)}
                    className="relative group/btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1A314C] hover:text-[#107C8E] transition-colors cursor-pointer self-start sm:self-auto font-heading"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 text-[#107C8E] transform group-hover/btn:translate-x-1.5 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#107C8E] to-[#1DA5B8] origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 rounded-full" />
                  </button>
                </div>

                {}
                <p className="text-xs sm:text-sm text-[#10566E] leading-relaxed font-sans">
                  {service.fullDescription}
                </p>

                {}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-extrabold text-[#107C8E] uppercase tracking-wide mr-1 font-heading">
                      Tools & Technologies:
                    </span>
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#C9E5ED]/25 text-[#1A314C] text-[11px] sm:text-xs font-semibold border border-[#C9E5ED] hover:bg-[#C9E5ED]/50 transition-colors font-heading"
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: tool.color || '#1DA5B8' }}
                        />
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] rounded-3xl p-8 sm:p-12 text-white border border-[#107C8E]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              Need a custom technical roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-[#C9E5ED] font-sans">
              Our lead engineers are available to review your architecture, conduct security audits, and build tailored enterprise solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onContactUs}
              className="px-6 py-3.5 rounded-2xl bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg cursor-pointer font-heading"
            >
              Contact Our Engineers
            </button>
            <button
              onClick={onExploreCourses}
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer font-heading"
            >
              Browse Training Courses
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
