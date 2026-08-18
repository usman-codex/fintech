import React, { useState } from 'react';
import { LOGO_IMAGE_URL } from './Header';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Shield, 
  Heart
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenPromptModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenPromptModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1A314C] text-[#C9E5ED] border-t border-[#10566E] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Glow Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#107C8E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-3 cursor-pointer group w-fit select-none"
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
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-[#1DA5B8] transition-colors">
                  FinTech Edge
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] uppercase text-[#1DA5B8]">
                  INSTITUTE
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C9E5ED]/80 leading-relaxed max-w-sm">
              Empowering the next generation of financial technologists, Web3 pioneers, and AI innovators through industry-driven self-paced education, hands-on projects, and 1-on-1 mentorship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#10566E] text-[#C9E5ED] border border-[#107C8E] shadow-sm">
                <Globe className="w-3.5 h-3.5 text-[#1DA5B8]" />
                Global Platform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#10566E] text-[#C9E5ED] border border-[#107C8E]">
                <Shield className="w-3.5 h-3.5 text-[#1DA5B8]" />
                Verified Certificates
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1DA5B8] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Top Projects', id: 'projects' },
                { label: 'Courses', id: 'courses' },
                { label: 'Careers', id: 'career' },
                { label: 'Blog & Insights', id: 'blog' },
                { label: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveTab(link.id)}
                    className="hover:text-[#1DA5B8] transition-colors flex items-center gap-1.5 cursor-pointer group text-[#C9E5ED]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1DA5B8]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1DA5B8] pl-2">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-[#C9E5ED]">
                <Mail className="w-4 h-4 text-[#1DA5B8] shrink-0 mt-1" />
                <a href="mailto:info@fintechedgeinstitute.com" className="hover:text-[#1DA5B8] break-all">
                  info@fintechedgeinstitute.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#C9E5ED]">
                <Phone className="w-4 h-4 text-[#1DA5B8] shrink-0" />
                <a href="tel:+923111222595" className="hover:text-[#1DA5B8]">
                  +92 311 1222 595
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#C9E5ED]">
                <MapPin className="w-4 h-4 text-[#1DA5B8] shrink-0 mt-1" />
                <span>Lahore, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1DA5B8] pl-2">
              Newsletter
            </h4>
            <p className="text-xs text-[#C9E5ED]/80 mb-3">
              Subscribe for weekly Web3 airdrop guides, market research & course discounts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#10566E] border border-[#1DA5B8] text-[#C9E5ED] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1DA5B8]" />
                <span>Subscribed successfully! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#10566E]/40 border border-[#107C8E] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#C9E5ED]/60 focus:outline-none focus:border-[#1DA5B8]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-bold rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-[#10566E]">
              <button
                onClick={onOpenPromptModal}
                className="text-xs text-[#1DA5B8] hover:underline flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                <span>Export Claude Website Prompt</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#10566E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5EA4AA]">
          <p>© 2026 Fintech Edge Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('about')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-white">Terms of Service</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-white">Help & Support</button>
          </div>
          <div className="flex items-center gap-1 text-[#5EA4AA]">
            <span>Powered by</span>
            <span className="font-semibold text-[#C9E5ED]">EzyCourse</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
