import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { 
  Search, 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Copy, 
  Check, 
  BookOpen, 
  Tag, 
  ChevronRight,
  TrendingUp,
  User
} from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPageProps {
  blogs: BlogPost[];
  selectedBlogSlug?: string | null;
  onSelectBlogSlug?: (slug: string | null) => void;
  onSelectBlog?: (blog: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  blogs, 
  selectedBlogSlug = null,
  onSelectBlogSlug,
  onSelectBlog
}) => {
  // Active post state (can be initialized from props)
  const [activeSlug, setActiveSlug] = useState<string | null>(selectedBlogSlug);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync with prop if it changes from external navigation
  useEffect(() => {
    setActiveSlug(selectedBlogSlug);
  }, [selectedBlogSlug]);

  const handleOpenPost = (post: BlogPost) => {
    setActiveSlug(post.slug || post.id);
    if (onSelectBlogSlug) {
      onSelectBlogSlug(post.slug || post.id);
    }
    if (onSelectBlog) {
      onSelectBlog(post);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveSlug(null);
    if (onSelectBlogSlug) {
      onSelectBlogSlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Find currently active post
  const currentPost = activeSlug 
    ? blogs.find((b) => b.slug === activeSlug || b.id === activeSlug) || null 
    : null;

  // Filtered posts for list view based on search query
  const filtered = blogs.filter((b) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q)) ||
      b.author.toLowerCase().includes(q)
    );
  });

  // Other 4 posts when viewing a single post detail
  const otherPosts = currentPost 
    ? blogs.filter((b) => b.id !== currentPost.id).slice(0, 4)
    : [];

  // ==========================================
  // VIEW 1: SINGLE POST FULL DETAILS VIEW
  // ==========================================
  if (currentPost) {
    return (
      <div className="py-10 sm:py-16 bg-[#FAFDFE] min-h-screen text-[#1A314C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top Breadcrumb / Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#C9E5ED]">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#C9E5ED]/30 text-[#107C8E] hover:text-[#1A314C] text-xs font-bold border border-[#C9E5ED] shadow-xs transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-[#107C8E] group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Articles</span>
            </button>

            {/* Social Share & Copy Link */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                title="Copy Article Link"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#C9E5ED] text-xs text-[#10566E] hover:text-[#1A314C] hover:bg-[#C9E5ED]/30 shadow-xs transition-all cursor-pointer font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#5EA4AA]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#5EA4AA]">
              <Calendar className="w-3.5 h-3.5 text-[#107C8E]" />
              <span>{currentPost.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight leading-[1.15]">
              {currentPost.title}
            </h1>

            {/* Author Profile Block */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={currentPost.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                alt={currentPost.author}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                }}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#1DA5B8]/40 shadow-xs"
              />
              <div>
                <div className="text-sm font-bold text-[#1A314C]">
                  {currentPost.author}
                </div>
                <div className="text-xs text-[#10566E] font-medium">
                  {currentPost.authorRole}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="rounded-3xl overflow-hidden border border-[#C9E5ED] shadow-xl relative group">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full max-h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A314C]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Key Excerpt Highlight Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#C9E5ED]/35 via-[#C9E5ED]/15 to-transparent border-l-4 border-[#107C8E] text-[#1A314C] shadow-xs space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#107C8E]">
              Key Article Brief
            </div>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-[#1A314C]">
              {currentPost.excerpt}
            </p>
          </div>

          {/* Main Formatted Article Body with Rich Typography & Highlighted Text */}
          <div className="prose prose-slate max-w-none text-[#1A314C] leading-relaxed space-y-6 text-sm sm:text-base">
            {(() => {
              // Normalize content: ensure headings and list items have line breaks
              const normalized = currentPost.content
                .replace(/(###\s+[^\n]+)/g, '\n\n$1\n\n')
                .replace(/(##\s+[^\n]+)/g, '\n\n$1\n\n')
                .replace(/(\n\d+\.\s+\*\*)/g, '\n\n$1')
                .replace(/\n{3,}/g, '\n\n');

              const sections = normalized.split('\n\n');

              const formatHtmlText = (text: string) => {
                return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#107C8E] bg-[#C9E5ED]/40 px-1.5 py-0.5 rounded-md">$1</strong>');
              };

              return sections.map((sec, sIdx) => {
                const trimmed = sec.trim();
                if (!trimmed) return null;

                // H3 Heading
                if (trimmed.startsWith('### ')) {
                  const headingText = trimmed.replace('### ', '');
                  return (
                    <h3 key={sIdx} className="text-xl sm:text-2xl font-black text-[#1A314C] pt-6 pb-2 border-b border-[#C9E5ED]/70 flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#107C8E]" />
                      <span>{headingText}</span>
                    </h3>
                  );
                }

                // H2 Heading
                if (trimmed.startsWith('## ')) {
                  const headingText = trimmed.replace('## ', '');
                  return (
                    <h2 key={sIdx} className="text-2xl sm:text-3xl font-black text-[#1A314C] pt-8 pb-3 border-b-2 border-[#C9E5ED]">
                      {headingText}
                    </h2>
                  );
                }

                // Bullet List (e.g. - item or * item)
                if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                  const lines = trimmed.split('\n').filter(l => l.trim().length > 0);
                  return (
                    <div key={sIdx} className="space-y-3 my-4">
                      {lines.map((line, lIdx) => {
                        const clean = line.replace(/^[-*•]\s+/, '');
                        return (
                          <div key={lIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C9E5ED]/70 shadow-2xs hover:border-[#1DA5B8]/50 transition-colors">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#107C8E] shrink-0" />
                            <div
                              className="text-sm sm:text-base text-[#1A314C] leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: formatHtmlText(clean) }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                // Numbered List (e.g. 1. item)
                if (/^\d+\.\s+/.test(trimmed)) {
                  const lines = trimmed.split('\n').filter(l => l.trim().length > 0);
                  return (
                    <div key={sIdx} className="space-y-3 my-4">
                      {lines.map((line, lIdx) => {
                        const match = line.match(/^(\d+)\.\s+(.*)$/);
                        const num = match ? match[1] : `${lIdx + 1}`;
                        const content = match ? match[2] : line;
                        return (
                          <div key={lIdx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#C9E5ED]/15 border border-[#C9E5ED] shadow-2xs hover:bg-[#C9E5ED]/25 transition-colors">
                            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#107C8E] text-white text-xs font-black shrink-0 shadow-xs">
                              {num}
                            </span>
                            <div
                              className="text-sm sm:text-base text-[#1A314C] leading-relaxed pt-0.5"
                              dangerouslySetInnerHTML={{ __html: formatHtmlText(content) }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                // Standard Paragraph with highlighted keywords
                return (
                  <p
                    key={sIdx}
                    className="text-sm sm:text-base leading-relaxed text-[#1A314C]/90 font-normal"
                    dangerouslySetInnerHTML={{ __html: formatHtmlText(trimmed) }}
                  />
                );
              });
            })()}
          </div>

          {/* Tags Section */}
          <div className="pt-6 border-t border-[#C9E5ED] flex flex-wrap items-center gap-2">
            <div className="text-xs font-bold text-[#5EA4AA] flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Related Topics:</span>
            </div>
            {currentPost.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-[#C9E5ED]/25 hover:bg-[#C9E5ED]/50 border border-[#C9E5ED] text-[#10566E] text-xs font-semibold px-3 py-1 rounded-lg transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#C9E5ED] shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={currentPost.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={currentPost.author}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-2xl object-cover border border-[#107C8E]/30 shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="text-xs font-bold text-[#107C8E] uppercase tracking-wider">
                Written by
              </div>
              <h4 className="text-base font-bold text-[#1A314C]">
                {currentPost.author}
              </h4>
              <p className="text-xs text-[#10566E]">
                {currentPost.authorRole} at Fintech Edge Institute. Passionate about empowering the next generation of Web3 engineers and fintech founders.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM ROW: OTHER 4 BLOG POSTS SECTION                       */}
          {/* ============================================================ */}
          <div className="pt-12 border-t-2 border-[#C9E5ED] space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#1A314C] tracking-tight">
                  Other Articles You Might Like
                </h3>
                <p className="text-xs sm:text-sm text-[#10566E]">
                  Discover more expert guides, tokenomics deep-dives, and Web3 insights
                </p>
              </div>

              <button
                onClick={handleBackToList}
                className="flex items-center gap-1.5 text-xs font-bold text-[#107C8E] hover:text-[#1A314C] transition-colors cursor-pointer"
              >
                <span>View All Articles</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Exactly 4 other posts in a clean responsive row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleOpenPost(post)}
                  className="group bg-white rounded-2xl border border-[#C9E5ED] hover:border-[#1DA5B8] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-[#1A314C]"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#5EA4AA]">
                        <Calendar className="w-3 h-3 text-[#107C8E]" />
                        <span>{post.date}</span>
                      </div>

                      <h4 className="text-xs font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-[11px] text-[#1A314C]/70 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 pt-1 border-t border-[#C9E5ED]/50 flex items-center justify-between text-[11px] font-bold text-[#107C8E] group-hover:text-[#1DA5B8]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: MAIN BLOG LISTING & HERO VIEW
  // ==========================================
  return (
    <div className="min-h-screen bg-[#FAFDFE] text-[#1A314C]">
      
      {/* 1. HERO SECTION (Deep Navy/Teal Palette with Layered Rotated Diamond Art & Smooth Bottom-to-Top Animation) */}
      <section className="relative w-full bg-gradient-to-r from-[#1A314C] via-[#10566E] to-[#107C8E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-lg">
        
        {/* Signature Layered Rounded Diamond Graphic at Top Right */}
        <div className="absolute right-[-30px] sm:right-2 lg:right-8 top-[-30px] sm:top-[-20px] lg:top-[-10px] pointer-events-none opacity-40 lg:opacity-60 overflow-hidden w-72 h-72 sm:w-96 sm:h-96">
          {/* Outer Light Cyan & Teal diamond */}
          <div className="absolute top-4 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/30 to-[#1DA5B8]/20 backdrop-blur-xs" />
          {/* Middle Deep Teal diamond */}
          <div className="absolute top-10 right-10 w-38 h-38 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-br from-[#107C8E]/30 to-[#10566E]/30" />
          {/* Inner solid Dark Navy & Bright Teal gradient diamond */}
          <div className="absolute top-16 right-16 w-26 h-26 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#1DA5B8] opacity-90 shadow-xl shadow-[#107C8E]/30" />
          {/* Floating cyan dots */}
          <div className="absolute top-6 right-36 w-3 h-3 rounded-full bg-[#1DA5B8] animate-pulse" />
          <div className="absolute top-48 right-8 w-2.5 h-2.5 rounded-full bg-[#C9E5ED]" />
        </div>

        {/* Subtle mirrored rotated accent on Left */}
        <div className="absolute left-[-40px] sm:left-[-15px] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 lg:opacity-30 overflow-hidden w-56 h-56">
          <div className="w-40 h-40 rotate-45 rounded-3xl border border-[#1DA5B8]/35 bg-[#1DA5B8]/10" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          
          {/* Eyebrow Badge (Icon Removed, Smooth Entrance) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05,
            }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9E5ED]/25 shadow-xs text-xs font-semibold text-[#C9E5ED]"
          >
            <span>Fintech Edge Insights & Research</span>
          </motion.div>

          {/* Main Hero Heading (Smooth Bottom-to-Top Animation) */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-sm font-poppins"
          >
            Web3, FinTech & AI <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9E5ED] via-[#8EE3EF] to-[#1DA5B8]">
              Engineering Insights
            </span>
          </motion.h1>

          {/* Main Hero Paragraph (Smooth Bottom-to-Top Animation) */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-xs font-poppins"
          >
            Explore curated analyses, airdrop strategies, smart contract engineering guides, and AI quantitative models written by industry practitioners and Fintech Edge mentors.
          </motion.p>

          {/* Quick Stats Pill (Smooth Bottom-to-Top Animation) */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.35,
            }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#C9E5ED] font-medium"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10">
              <BookOpen className="w-4 h-4 text-[#8EE3EF]" />
              <span>{blogs.length} Deep-Dive Articles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10">
              <TrendingUp className="w-4 h-4 text-[#8EE3EF]" />
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10">
              <User className="w-4 h-4 text-[#8EE3EF]" />
              <span>Verified On-Chain Analysts</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. NEXT SECTION: SEARCHBAR & BLOG POSTS GRID */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Clean Search Input Bar */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#C9E5ED] shadow-sm">
            <div className="relative w-full">
              <Search className="w-5 h-5 text-[#5EA4AA] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, tags, author, or topic..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED]/80 rounded-xl pl-12 pr-10 py-3 text-sm text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E] focus:bg-white transition-all font-medium"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5EA4AA] hover:text-[#1A314C] p-1 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#C9E5ED] p-8 space-y-3 shadow-xs">
              <BookOpen className="w-10 h-10 text-[#5EA4AA] mx-auto opacity-50" />
              <h3 className="text-lg font-bold text-[#1A314C]">No articles found</h3>
              <p className="text-xs text-[#10566E]">Try searching for other keywords, topics, or tags.</p>
              <button
                onClick={() => setSearch('')}
                className="mt-2 px-4 py-2 rounded-xl bg-[#107C8E] text-white text-xs font-bold cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleOpenPost(post)}
                  className="group bg-white rounded-3xl border border-[#C9E5ED] hover:border-[#1DA5B8] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer text-[#1A314C]"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-[#5EA4AA]">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="font-semibold text-[#10566E]">{post.author}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#1A314C]/75 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tag preview */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-semibold bg-[#C9E5ED]/20 text-[#10566E] px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-[#C9E5ED]/10 border-t border-[#C9E5ED] flex items-center justify-between text-xs font-bold text-[#107C8E] group-hover:text-[#1DA5B8]">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
