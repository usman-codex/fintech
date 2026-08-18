import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Search } from 'lucide-react';

interface BlogPageProps {
  blogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ blogs, onSelectBlog }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Airdrop Guides', 'Web3 Marketing', 'FinTech Trends'];

  const filtered = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || b.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-12 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
            Fintech Edge Blog & Insights
          </h1>
          <p className="text-[#10566E] text-sm">
            Expert analyses on Airdrop farming, Web3 quest mechanics, and AI in quantitative financial modeling.
          </p>
        </div>

        {/* Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-[#C9E5ED] flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#5EA4AA] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl pl-9 pr-3 py-2 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat ? 'bg-[#107C8E] text-white shadow-sm' : 'bg-[#C9E5ED]/20 text-[#10566E] hover:text-[#1A314C] hover:bg-[#C9E5ED]/50 border border-[#C9E5ED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectBlog(post)}
              className="group bg-white rounded-2xl border border-[#C9E5ED] hover:border-[#1DA5B8] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-[#1A314C]"
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
    </div>
  );
};
