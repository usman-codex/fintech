import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Layers,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types';

interface ProjectsPageProps {
  onNavigateToContact: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateToContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web3 & Financial Analytics', 'Ed-Tech & Gaming', 'Mobile App & Event Ops', 'DeFi & Smart Contracts', 'FinTech & Payments', 'HealthTech & AI'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading">
            Our Portfolio & Top Projects
          </h1>
          <p className="text-[#C9E5ED] text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our curated showcase of production-grade decentralized protocols, institutional FinTech applications, enterprise mobile ecosystems, and high-performance Web3 solutions.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A5D6E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, technology, or category..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-[#1A314C] placeholder-[#8CA0B3] shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1DA5B8] text-sm sm:text-base font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="w-full py-8 border-b border-[#C9E5ED]/60 bg-white sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#107C8E] text-white shadow-md'
                    : 'bg-[#F0F6F8] text-[#4A5D6E] hover:bg-[#C9E5ED]/50 hover:text-[#1A314C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Grid Listing */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#C9E5ED] p-8 max-w-lg mx-auto">
              <p className="text-lg font-bold text-[#1A314C]">No projects found</p>
              <p className="text-sm text-[#4A5D6E] mt-1">Try searching with a different keyword or category.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-5 py-2 rounded-xl bg-[#107C8E] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredProjects.map((project, idx) => (
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
                  <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
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

                      {/* Key Stats if available */}
                      {project.stats && (
                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#C9E5ED]/50">
                          {project.stats.slice(0, 2).map((stat) => (
                            <div key={stat.label} className="bg-[#F8FAFB] p-2.5 rounded-xl border border-[#C9E5ED]/40">
                              <p className="text-xs text-[#8CA0B3] font-medium">{stat.label}</p>
                              <p className="text-sm font-black text-[#107C8E]">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Link */}
                    <div className="pt-4 border-t border-[#C9E5ED]/60 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#8CA0B3]">
                        {project.client || 'Enterprise Client'}
                      </span>
                      <button
                        onClick={(e) => handleOpenLiveSite(e, project.liveUrl)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#107C8E] hover:text-[#1DA5B8] transition-colors cursor-pointer"
                      >
                        <span>Open Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Bottom CTA for Custom Project Inquiries */}
      <section className="w-full py-16 bg-white border-t border-[#C9E5ED]/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A314C] font-heading">
            Have a Project in Mind? Let's Build Something Exceptional.
          </h2>
          <p className="text-[#4A5D6E] text-base sm:text-lg">
            Our expert engineers, UI/UX designers, and smart contract architects are ready to turn your vision into high-impact software.
          </p>
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white font-extrabold text-base shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer font-heading"
          >
            <span>Start a Project Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
};
