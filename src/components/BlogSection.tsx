import React from 'react';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  blogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
  onViewAllBlogs: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  blogs,
  onSelectBlog,
  onViewAllBlogs,
}) => {
  return (
    <section className="py-20 bg-[#C9E5ED]/20 text-[#1A314C] relative border-b border-[#C9E5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#107C8E] text-xs font-bold border border-[#C9E5ED] shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-[#107C8E]" />
              <span>Latest Research & Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
              Web3 & FinTech Insights
            </h2>
            <p className="text-[#10566E] text-sm max-w-xl">
              Stay ahead with deep dives on airdrop strategies, growth marketing, and AI financial models written by Fintech Edge mentors.
            </p>
          </div>

          <button
            onClick={onViewAllBlogs}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#C9E5ED]/40 text-[#107C8E] font-bold text-xs border border-[#C9E5ED] shadow-sm transition-all cursor-pointer w-fit"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#107C8E]" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectBlog(post)}
              className="group bg-white rounded-2xl border border-[#C9E5ED] hover:border-[#1DA5B8] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-[#1A314C]"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A314C]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#107C8E]">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#1A314C]/75 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
