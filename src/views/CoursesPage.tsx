import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { 
  ArrowRight, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  onSelectCourse,
}) => {
  return (
    <div className="w-full bg-[#FAFDFE] min-h-screen text-[#1A314C] flex flex-col font-sans">
      
      {/* 1. Hero Banner with Brand Gradient & Rotated Layered Geometric Diamond Art */}
      <section className="relative w-full py-14 sm:py-16 bg-gradient-to-br from-[#10566E] via-[#107C8E] to-[#1A314C] text-white overflow-hidden shadow-lg">
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9E5ED_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Rotated Box Art: Top-Right Layered Geometric Diamonds */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-14 w-60 h-60 sm:w-80 sm:h-80 z-0 opacity-80"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-4 w-44 h-44 sm:w-60 sm:w-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/25 to-[#1DA5B8]/10 backdrop-blur-[2px]" />
            <div className="absolute top-5 right-9 w-36 h-36 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/60 bg-gradient-to-br from-[#107C8E]/40 to-[#10566E]/40" />
            <div className="absolute top-10 right-14 w-24 h-24 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-95 shadow-2xl shadow-[#107C8E]/40" />
            <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#1DA5B8] shadow-sm shadow-[#1DA5B8]" />
            <div className="absolute top-32 right-4 w-2 h-2 rounded-full bg-[#C9E5ED]" />
            <div className="absolute top-20 right-40 w-2 h-2 rounded-full bg-[#1DA5B8]/80" />
          </div>
        </div>

        {/* Rotated Box Art: Bottom-Left Layered Geometric Diamonds */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-12 -left-10 w-52 h-52 sm:w-64 sm:h-64 z-0 opacity-40 hidden sm:block"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-4 left-4 w-36 h-36 rotate-45 rounded-2xl border border-[#1DA5B8]/30 bg-gradient-to-tr from-[#10566E]/20 to-[#1DA5B8]/10" />
            <div className="absolute bottom-8 left-8 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-[#1A314C]/40" />
            <div className="absolute bottom-10 left-10 w-16 h-16 rotate-45 rounded-lg bg-gradient-to-tr from-[#107C8E] to-[#1DA5B8] opacity-70" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#1DA5B8]/30 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs text-[#C9E5ED] font-semibold">
            <GraduationCap className="w-4 h-4 text-[#1DA5B8]" />
            <span>FinTech Edge Learning Tracks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading bg-gradient-to-r from-white via-[#D8F0F5] to-[#1DA5B8] bg-clip-text text-transparent drop-shadow-sm">
            Explore All Courses
          </h1>

          <p className="text-[#C9E5ED] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            Master practical software engineering, cloud infrastructure, AI models, growth marketing, and digital monetization with industry-certified mentors.
          </p>
        </div>
      </section>

      {/* 2. Simple & Stylish Course Cards Section */}
      <section className="relative w-full py-16 sm:py-20 flex-1 overflow-hidden">
        
        {/* 1. Rotated Box: Top-Right Layered Geometric Diamond Art (Pushed to corner behind content) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 -right-12 sm:-right-6 md:right-4 lg:right-8 w-48 h-48 sm:w-64 sm:h-64 z-0 opacity-40 lg:opacity-60"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-2 right-4 w-36 h-36 sm:w-48 sm:h-48 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/30 to-[#1DA5B8]/10 backdrop-blur-[2px]" />
            <div className="absolute top-6 right-8 w-28 h-28 sm:w-36 sm:h-36 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-br from-[#107C8E]/30 to-[#10566E]/20" />
            <div className="absolute top-10 right-12 w-16 h-16 sm:w-24 sm:h-24 rotate-45 rounded-xl bg-gradient-to-br from-[#107C8E] to-[#10566E] opacity-90 shadow-xl shadow-[#107C8E]/30" />
            <div className="absolute top-3 right-20 w-2 h-2 rounded-full bg-[#1DA5B8] shadow-sm shadow-[#1DA5B8]" />
            <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-[#107C8E]" />
          </div>
        </div>

        {/* 2. Rotated Box: Bottom-Left Layered Geometric Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-10 -left-12 sm:-left-6 md:left-4 w-52 h-52 sm:w-72 sm:h-72 z-0 opacity-40 lg:opacity-60"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-4 left-4 w-38 h-38 sm:w-50 sm:h-50 rotate-45 rounded-3xl border-2 border-[#107C8E]/35 bg-gradient-to-tr from-[#C9E5ED]/30 to-[#107C8E]/10" />
            <div className="absolute bottom-8 left-8 w-30 h-30 sm:w-40 sm:h-40 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/50 bg-gradient-to-tr from-[#1DA5B8]/25 to-[#107C8E]/30" />
            <div className="absolute bottom-12 left-12 w-20 h-20 sm:w-28 sm:h-28 rotate-45 rounded-xl bg-gradient-to-tr from-[#10566E] to-[#107C8E] opacity-85 shadow-xl shadow-[#107C8E]/25" />
            <div className="absolute bottom-2 left-24 w-2 h-2 rounded-full bg-[#107C8E]" />
          </div>
        </div>

        {/* 3. Rotated Box: Section Middle / Center Layered Geometric Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 z-0 opacity-15"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rotate-45 rounded-3xl border-2 border-dashed border-[#107C8E]/40 bg-[#C9E5ED]/10 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/50 bg-gradient-to-br from-[#1DA5B8]/15 to-[#107C8E]/15" />
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rotate-45 rounded-xl border border-[#107C8E]/60 bg-[#10566E]/20" />
          </div>
        </div>

        {/* 4. Random Placement Accent: Mid-Right Floating Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 -right-10 w-36 h-36 z-0 opacity-30 hidden md:block"
        >
          <div className="w-28 h-28 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/60 bg-gradient-to-bl from-[#C9E5ED]/40 to-[#1DA5B8]/20" />
          <div className="absolute top-4 left-4 w-16 h-16 rotate-45 rounded-xl bg-[#107C8E]/40" />
        </div>

        {/* 5. Random Placement Accent: Mid-Left Floating Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-2/3 -left-10 w-40 h-40 z-0 opacity-25 hidden lg:block"
        >
          <div className="w-32 h-32 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-tr from-[#EBF4F7] to-[#107C8E]/20" />
          <div className="absolute top-6 left-6 w-16 h-16 rotate-45 rounded-lg bg-gradient-to-tr from-[#107C8E] to-[#1DA5B8] opacity-60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Gradient Heading and Short Paragraph with ample spacing */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-heading tracking-tight leading-[1.25] pb-1 bg-gradient-to-r from-[#10566E] via-[#107C8E] to-[#1DA5B8] bg-clip-text text-transparent">
              Our Professional Training Programs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#1A314C]/80 leading-relaxed font-sans max-w-2xl mx-auto font-normal">
              Hands-on, project-driven learning tracks built to help you master high-income digital skills, modern engineering, and scalable monetization strategies.
            </p>
          </div>

          {/* Simple & Stylish Card Grid: ONLY Image, Heading, Paragraph, and Read More (with hover arrow + left-to-right underline) */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => onSelectCourse(course)}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#C9E5ED] hover:border-[#107C8E] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* 1. Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF4F7]">
                      <img
                        src={course.image}
                        alt={course.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A314C]/60 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* 2. Heading & 3. Paragraph */}
                    <div className="p-6 space-y-3">
                      {/* Heading */}
                      <h3 className="text-lg sm:text-xl font-black font-heading text-[#1A314C] group-hover:text-[#107C8E] transition-colors leading-snug line-clamp-2">
                        {course.title}
                      </h3>

                      {/* Paragraph */}
                      <p className="text-sm text-[#1A314C]/75 line-clamp-3 leading-relaxed">
                        {course.tagline || course.description}
                      </p>
                    </div>
                  </div>

                  {/* 4. Read More Link with Left-to-Right Hover Underline & Hover Arrow */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-3 border-t border-[#C9E5ED]/60 flex items-center justify-between">
                      <span className="relative inline-flex items-center gap-2 text-sm font-bold text-[#107C8E] group-hover:text-[#10566E] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#107C8E] group-hover:after:w-full after:transition-all after:duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#107C8E] group-hover:text-[#10566E]" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

