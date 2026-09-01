import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles, Globe } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types';

interface TopProjectsSectionProps {
  onNavigateToProjects: () => void;
}

export const TopProjectsSection: React.FC<TopProjectsSectionProps> = ({
  onNavigateToProjects,
}) => {
  const topProjects = projects.filter((p) => p.featured).slice(0, 6);

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  
  const cardVariants = {
    hidden: { opacity: 0, y: 55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleOpenLiveSite = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="top-projects-section" 
      className="relative w-full py-16 sm:py-24 bg-[#F8FAFB] overflow-hidden border-b border-[#C9E5ED]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A314C] tracking-tight font-heading">
              Our Top Projects
            </h2>
          </div>

          {}
          <button
            id="more-projects-header-btn"
            onClick={onNavigateToProjects}
            className="group relative inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#107C8E] hover:text-[#1DA5B8] transition-colors duration-300 pb-1 cursor-pointer font-heading self-start sm:self-auto"
          >
            <span>More Projects</span>
            <span className="inline-flex items-center justify-center transition-transform duration-300 transform group-hover:translate-x-1.5">
              <ArrowRight className="w-5 h-5 text-[#107C8E] group-hover:text-[#1DA5B8] transition-colors duration-300" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#107C8E] group-hover:bg-[#1DA5B8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </button>
        </div>

        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {topProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={(e) => handleOpenLiveSite(e, project.liveUrl)}
              className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#C9E5ED]/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#EBF4F7]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {}
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <button
                    id={`view-project-btn-${project.id}`}
                    onClick={(e) => handleOpenLiveSite(e, project.liveUrl)}
                    className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#107C8E] hover:bg-[#1DA5B8] text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-200 cursor-pointer font-heading"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {}
              <div className="relative -mt-6 sm:-mt-7 mx-auto z-10 px-4">
                <div className="bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-lg border border-[#C9E5ED]/90 text-center min-w-[200px]">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A314C] tracking-tight font-heading">
                    {project.title}
                  </h3>
                </div>
              </div>

              {}
              <div className="p-6 sm:p-8 pt-4 sm:pt-5 flex-1 flex flex-col justify-start">
                <p className="text-[#4A5D6E] text-sm sm:text-base leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
