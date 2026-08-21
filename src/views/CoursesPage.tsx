import React from 'react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { 
  Star, 
  Users, 
  BookOpen,
  Clock,
  Infinity as InfinityIcon,
  GraduationCap
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
    <div className="w-full bg-[#FAFDFE] min-h-screen text-[#1A314C] flex flex-col">
      
      {/* 1. Compact Hero Banner with Gradient & Layered Geometric Diamond Art */}
      <section className="relative w-full py-10 sm:py-14 bg-gradient-to-br from-[#10566E] via-[#107C8E] to-[#1A314C] text-white overflow-hidden shadow-lg">
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9E5ED_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Top-Right Signature Decorative Layered Geometric Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-12 w-56 h-56 sm:w-72 sm:h-72 z-0 opacity-75"
        >
          <div className="relative w-full h-full">
            {/* Outer Light Cyan & Teal diamond */}
            <div className="absolute top-0 right-4 w-40 h-40 sm:w-56 sm:h-56 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/30 to-[#1DA5B8]/10 backdrop-blur-[1px]" />
            {/* Middle Deep Teal diamond */}
            <div className="absolute top-4 right-8 w-32 h-32 sm:w-44 sm:h-44 rotate-45 rounded-2xl border-2 border-[#107C8E]/50 bg-gradient-to-br from-[#107C8E]/30 to-[#10566E]/30" />
            {/* Inner solid Dark Navy & Bright Teal gradient diamond */}
            <div className="absolute top-8 right-12 w-20 h-20 sm:w-30 sm:h-30 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-95 shadow-2xl shadow-[#107C8E]/30" />
            {/* Floating glowing cyan accent dots */}
            <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#1DA5B8] shadow-sm shadow-[#1DA5B8]" />
            <div className="absolute top-32 right-4 w-2 h-2 rounded-full bg-[#C9E5ED]" />
            <div className="absolute top-20 right-40 w-2 h-2 rounded-full bg-[#1DA5B8]/80" />
          </div>
        </div>

        {/* Bottom-Left Complementary Geometric Diamond Art */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-12 -left-10 w-52 h-52 sm:w-64 sm:h-64 z-0 opacity-40 hidden sm:block"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-4 left-4 w-36 h-36 rotate-45 rounded-2xl border border-[#1DA5B8]/30 bg-gradient-to-tr from-[#10566E]/20 to-[#1DA5B8]/10" />
            <div className="absolute bottom-8 left-8 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-[#1A314C]/40" />
            <div className="absolute bottom-10 left-10 w-16 h-16 rotate-45 rounded-lg bg-gradient-to-tr from-[#107C8E] to-[#1DA5B8] opacity-70" />
            <div className="absolute bottom-2 left-28 w-2 h-2 rounded-full bg-[#1DA5B8]" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading bg-gradient-to-r from-white via-[#D8F0F5] to-[#1DA5B8] bg-clip-text text-transparent drop-shadow-sm">
            All FinTech Edge Courses
          </h1>

          <p className="text-[#C9E5ED] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            Master high-demand skills in decentralized finance, Web3 marketing, crypto airdrops, and financial artificial intelligence with verified certifications and hands-on 1-on-1 mentorship.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 pt-1 text-xs sm:text-sm text-[#C9E5ED] font-medium">
            <div className="flex items-center gap-2 bg-white/5 border border-[#1DA5B8]/25 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#1DA5B8]" />
              <span>{courses.length} Comprehensive Programs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[#1DA5B8]/25 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs">
              <Clock className="w-4 h-4 text-[#1DA5B8]" />
              <span>Self-Paced & Cohort Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[#1DA5B8]/25 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs">
              <InfinityIcon className="w-4 h-4 text-[#1DA5B8]" />
              <span>Lifetime Project Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Courses Grid Section (Search bar & filter list removed as requested) */}
      <section className="w-full py-14 sm:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#C9E5ED]/80 hover:border-[#1DA5B8] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-[#1A314C]"
              >
                <div>
                  {/* Course Thumbnail Image */}
                  <div 
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-[#EBF4F7]"
                    onClick={() => onSelectCourse(course)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A314C]/85 via-transparent to-transparent opacity-75" />

                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="bg-[#1A314C]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#107C8E]/60 shadow-xs">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="bg-[#107C8E] text-white font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-md">
                          {course.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#5EA4AA]">
                      <div className="flex items-center gap-1.5 bg-[#1DA5B8]/15 text-[#10566E] px-2.5 py-0.5 rounded-md font-bold border border-[#1DA5B8]/30">
                        <Star className="w-3.5 h-3.5 fill-[#1DA5B8] text-[#1DA5B8]" />
                        <span>{course.rating}</span>
                        <span className="text-[#5EA4AA] font-normal">({course.reviewCount})</span>
                      </div>

                      <div className="flex items-center gap-1 text-[#5EA4AA]">
                        <Users className="w-3.5 h-3.5 text-[#107C8E]" />
                        <span>{course.studentCount.toLocaleString()} enrolled</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => onSelectCourse(course)}
                      className="text-base sm:text-lg font-bold font-heading text-[#1A314C] group-hover:text-[#107C8E] transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {course.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1A314C]/75 line-clamp-2 leading-relaxed font-sans">
                      {course.tagline}
                    </p>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-[#C9E5ED]/80">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                        }}
                        className="w-7 h-7 rounded-full object-cover border border-[#107C8E]/40"
                      />
                      <span className="text-xs text-[#1A314C] font-semibold">{course.instructor.name}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Price & CTA */}
                <div className="p-5 sm:p-6 pt-0 mt-2 border-t border-[#C9E5ED]/80 flex items-center justify-between">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#107C8E]">
                      ${course.priceUSD}
                    </div>
                    <div className="text-[11px] text-[#5EA4AA] font-medium">
                      Rs {course.pricePKR.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white font-extrabold text-xs transition-all cursor-pointer shadow-md shadow-[#107C8E]/20 hover:scale-105 active:scale-95"
                  >
                    View Course
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
