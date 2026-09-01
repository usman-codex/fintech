import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_IMAGE_URL } from './Header';
import { 
  Mail,
  Phone, 
  MapPin, 
  Globe, 
  Shield, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Briefcase,
  X,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lock
} from 'lucide-react';

interface FooterProps {
  setActiveTab?: (tab: string) => void;
  onOpenPromptModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'help' | null>(null);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/fintech-edge-institute', 
      color: 'hover:bg-[#0077B5] hover:border-[#0077B5]' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/FinTechEdge/', 
      color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/fintechedgeinstitute/', 
      color: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://www.youtube.com/@fintechedgeinstitute', 
      color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' 
    },
    { 
      name: 'beBee', 
      icon: Briefcase, 
      href: 'https://bebee.com/pk/companies/fintech-edge-institute', 
      color: 'hover:bg-[#FF9900] hover:border-[#FF9900]' 
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: 'https://wa.me/923111222595', 
      color: 'hover:bg-[#25D366] hover:border-[#25D366]' 
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#0F1E2E] via-[#162A40] to-[#10566E] text-[#C9E5ED] border-t border-[#1DA5B8]/30 py-8 sm:py-10 overflow-hidden shadow-2xl">
      {/* Decorative ambient glowing accents */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#1DA5B8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#107C8E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Compact 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center pb-8 border-b border-[#1DA5B8]/20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-3 text-center md:text-left">
            <div 
              onClick={() => setActiveTab && setActiveTab('home')} 
              className="inline-flex items-center gap-3 cursor-pointer group select-none"
            >
              <img 
                src={LOGO_IMAGE_URL} 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/fintech-logo.png') {
                    target.src = '/fintech-logo.png';
                  }
                }}
                alt="Fintech Edge Institute Logo" 
                referrerPolicy="no-referrer"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-[#1DA5B8] transition-colors">
                  FinTech Edge
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] uppercase text-[#1DA5B8]">
                  INSTITUTE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C9E5ED]/80 leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering next-gen financial technologists, Web3 pioneers, and AI innovators with verified certifications and hands-on mentorship.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#10566E]/60 text-[#C9E5ED] border border-[#1DA5B8]/40 shadow-xs">
                <Globe className="w-3 h-3 text-[#1DA5B8]" />
                Global Platform
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#10566E]/60 text-[#C9E5ED] border border-[#1DA5B8]/40 shadow-xs">
                <Shield className="w-3 h-3 text-[#1DA5B8]" />
                Verified Certs
              </span>
            </div>
          </div>

          {/* Column 2: Exact Physical Address, Phone & Email */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1DA5B8]" />
              <span>Campus & Head Office</span>
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start justify-center md:justify-start gap-2.5 text-[#C9E5ED]">
                <MapPin className="w-4 h-4 text-[#1DA5B8] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Plot #40, Sector B1, Block 1, Abubakar Rd, Township, Lahore.
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#C9E5ED]">
                <Mail className="w-4 h-4 text-[#1DA5B8] shrink-0" />
                <a 
                  href="mailto:info@fintechedgeinstitute.com" 
                  className="hover:text-[#1DA5B8] text-white/90 hover:underline transition-colors"
                >
                  info@fintechedgeinstitute.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#C9E5ED] pt-0.5">
                <Phone className="w-4 h-4 text-[#1DA5B8] shrink-0" />
                <a 
                  href="tel:+923111222595" 
                  className="hover:text-[#1DA5B8] font-bold text-white transition-colors tracking-wide"
                >
                  +92 311 1222 595
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Social Media Icons with Smooth Hover Animations */}
          <div className="space-y-3 text-center md:text-right flex flex-col items-center md:items-end justify-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <p className="text-xs text-[#C9E5ED]/70 max-w-xs">
              Follow our verified community channels for announcements & updates.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-[#10566E]/50 border border-[#1DA5B8]/30 flex items-center justify-center text-[#C9E5ED] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA5B8]/20 cursor-pointer ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Interactive Popups for Privacy, Terms, Help */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9E5ED]/70">
          <p>© 2026 FinTech Edge Institute. All rights reserved.</p>

          <div className="flex items-center gap-5 sm:gap-6 font-semibold">
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="text-[#C9E5ED] hover:text-[#1DA5B8] transition-colors cursor-pointer hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-[#1DA5B8]/40">•</span>
            <button 
              onClick={() => setActiveModal('terms')} 
              className="text-[#C9E5ED] hover:text-[#1DA5B8] transition-colors cursor-pointer hover:underline"
            >
              Terms of Service
            </button>
            <span className="text-[#1DA5B8]/40">•</span>
            <button 
              onClick={() => setActiveModal('help')} 
              className="text-[#C9E5ED] hover:text-[#1DA5B8] transition-colors cursor-pointer hover:underline"
            >
              Help & Support
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#C9E5ED]/70">
            <span>Powered by</span>
            <span className="font-extrabold text-[#1DA5B8]">FinTech Developer</span>
          </div>
        </div>

      </div>

      {/* Interactive Popups / Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-[#1A314C] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1DA5B8]/40 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#107C8E] text-[#1DA5B8] flex items-center justify-center shadow-md">
                  {activeModal === 'privacy' && <Lock className="w-5 h-5 text-white" />}
                  {activeModal === 'terms' && <FileText className="w-5 h-5 text-white" />}
                  {activeModal === 'help' && <HelpCircle className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                    {activeModal === 'privacy' && 'Privacy Policy'}
                    {activeModal === 'terms' && 'Terms of Service'}
                    {activeModal === 'help' && 'Help & Student Support'}
                  </h3>
                  <span className="text-xs text-[#1DA5B8] font-bold">
                    FinTech Edge Institute Official Document
                  </span>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="space-y-3 text-xs sm:text-sm text-[#C9E5ED]/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {activeModal === 'privacy' && (
                  <>
                    <p>
                      At <strong>FinTech Edge Institute</strong>, we are committed to protecting your personal data and digital privacy in compliance with international data standards.
                    </p>
                    <div className="p-3 rounded-xl bg-black/20 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1DA5B8]" />
                        Data Encryption & Security
                      </h5>
                      <p className="text-xs text-[#C9E5ED]/80">
                        All student records, course evaluations, and certification hashes are encrypted using modern cryptographic protocols.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/20 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1DA5B8]" />
                        No Third-Party Data Sharing
                      </h5>
                      <p className="text-xs text-[#C9E5ED]/80">
                        We never sell or monetize user contact information or academic performance logs to unauthorized third-party advertisers.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'terms' && (
                  <>
                    <p>
                      By enrolling in courses or accessing services at <strong>FinTech Edge Institute</strong>, you agree to adhere to our academic integrity and institutional terms.
                    </p>
                    <div className="p-3 rounded-xl bg-black/20 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1DA5B8]" />
                        Verified Certification Issuance
                      </h5>
                      <p className="text-xs text-[#C9E5ED]/80">
                        Official certificates are awarded only upon meeting verified project submission benchmarks, code review criteria, and attendance quotas.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/20 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1DA5B8]" />
                        Intellectual Property & Code Rights
                      </h5>
                      <p className="text-xs text-[#C9E5ED]/80">
                        Students retain 100% full commercial and copyright ownership of applications, smart contracts, and projects built during their internship cohorts.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'help' && (
                  <>
                    <p>
                      Need assistance with enrollment, curriculum mentorship, or technical labs? Our student support desk is available to assist you.
                    </p>
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#107C8E]/30 to-[#10566E]/30 border border-[#1DA5B8]/30 space-y-2">
                      <div className="flex items-center gap-2 text-white font-bold">
                        <Phone className="w-4 h-4 text-[#1DA5B8]" />
                        <span>Direct Help Hotline:</span>
                        <a href="tel:+923111222595" className="text-[#1DA5B8] underline">+92 311 1222 595</a>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#C9E5ED]">
                        <MapPin className="w-4 h-4 text-[#1DA5B8] shrink-0 mt-0.5" />
                        <span>Physical Helpdesk: Plot #40, Sector B1, Block 1, Abubakar Rd, Township, Lahore.</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#C9E5ED]/70">
                      Support hours: Monday – Saturday (9:00 AM – 7:00 PM PKT). Walk-in campus inquiries are welcome during operating hours.
                    </p>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 rounded-xl bg-[#107C8E] hover:bg-[#1DA5B8] text-white text-xs font-bold font-heading transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
};

