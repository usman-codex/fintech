import React, { useState, useEffect } from 'react';
import logoAsset from '../assets/fintech-logo.png';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  BookOpen, 
  Info, 
  Layers, 
  Briefcase, 
  Sparkles, 
  Menu, 
  X,
  LayoutGrid
} from 'lucide-react';

// 💡 LOGO IMAGE LINK: Imported PNG logo from assets
export const LOGO_IMAGE_URL = logoAsset;

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPromptModal?: () => void;
  onOpenAuthModal?: (mode: 'login' | 'signup') => void;
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPromptModal,
  onOpenAuthModal,
  user,
  onLogout,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Detect window scroll to toggle white vs dark transparent background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'courses', label: 'Course', icon: Layers },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
  ];

  // The displayed tab indicator targets hovered tab if mouse is over, otherwise falls back to activeTab
  const currentPillTarget = hoveredTab || activeTab;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#1A314C]/90 backdrop-blur-xl border-b border-[#107C8E]/40 text-white shadow-2xl py-2'
          : 'bg-white border-b border-[#C9E5ED] text-[#1A314C] shadow-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo Image + FinTech Edge / Institute Typography */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center gap-3 cursor-pointer group shrink-0 select-none"
        >
          <div className="relative flex items-center justify-center">
            <img 
              src={LOGO_IMAGE_URL} 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/fintech-logo.png') {
                  target.src = '/fintech-logo.png';
                }
              }}
              alt="Fintech Edge Logo" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span 
              className={`text-base sm:text-lg font-black tracking-tight transition-colors duration-200 ${
                isScrolled 
                  ? 'text-white group-hover:text-[#1DA5B8]' 
                  : 'text-[#1A314C] group-hover:text-[#107C8E]'
              }`}
            >
              FinTech Edge
            </span>
            <span 
              className={`text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] uppercase transition-colors duration-200 ${
                isScrolled 
                  ? 'text-[#1DA5B8]' 
                  : 'text-[#107C8E]'
              }`}
            >
              INSTITUTE
            </span>
          </div>
        </div>

        {/* Middle Navigation with Smooth Floating / Sliding Hover and Active Indicator */}
        <nav 
          onMouseLeave={() => setHoveredTab(null)}
          className={`hidden lg:flex items-center p-1 rounded-full border transition-all duration-300 relative ${
            isScrolled
              ? 'bg-[#10566E]/40 border-[#107C8E]/40 backdrop-blur-md shadow-inner'
              : 'bg-[#C9E5ED]/35 border-[#C9E5ED] shadow-sm'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;
            const isHighlighted = currentPillTarget === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setHoveredTab(null);
                }}
                onMouseEnter={() => setHoveredTab(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer z-10 whitespace-nowrap ${
                  isScrolled
                    ? isHighlighted
                      ? 'text-white'
                      : 'text-[#C9E5ED] hover:text-white'
                    : isHighlighted
                    ? 'text-white'
                    : 'text-[#1A314C] hover:text-[#107C8E]'
                }`}
              >
                {/* Smooth Animated Sliding Indicator Pill */}
                {isHighlighted && (
                  <motion.div
                    layoutId="navAnimatedPill"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                    className={`absolute inset-0 rounded-full -z-10 shadow-md ${
                      isScrolled
                        ? 'bg-gradient-to-r from-[#107C8E] to-[#1DA5B8] shadow-[#107C8E]/40'
                        : 'bg-[#107C8E] shadow-[#107C8E]/25'
                    }`}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side: Contact Us Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#1DA5B8] text-[#1A314C] ring-2 ring-white shadow-lg'
                : isScrolled
                ? 'bg-[#107C8E] hover:bg-[#1DA5B8] text-white hover:text-[#1A314C] shadow-[#107C8E]/30 hover:scale-105'
                : 'bg-[#107C8E] hover:bg-[#10566E] text-white shadow-[#107C8E]/25 hover:scale-105'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'bg-[#10566E]/50 border-[#107C8E]/40 text-white'
                : 'bg-white border-[#C9E5ED] text-[#1A314C]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 mt-2 transition-all ${
            isScrolled
              ? 'bg-[#1A314C] border-[#107C8E]/40 text-white'
              : 'bg-white border-[#C9E5ED] text-[#1A314C]'
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-all ${
                  activeTab === item.id
                    ? 'bg-[#107C8E] text-white shadow-md'
                    : isScrolled
                    ? 'text-[#C9E5ED] hover:bg-[#10566E]/50'
                    : 'text-[#1A314C] hover:bg-[#C9E5ED]/30'
                }`}
              >
                <item.icon className="w-4 h-4 text-[#1DA5B8]" />
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-all ${
                activeTab === 'contact'
                  ? 'bg-[#1DA5B8] text-[#1A314C] font-black'
                  : 'bg-[#107C8E] text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
