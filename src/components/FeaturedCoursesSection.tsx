import React, { useState } from 'react';
import { Course } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturedCoursesSectionProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onViewAllCourses: () => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({
  courses,
  onSelectCourse,
  onViewAllCourses,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = React.useMemo(() => {
    const unique = Array.from(new Set(courses.map(c => c.category)));
    return ['All', ...unique.slice(0, 5)];
  }, [courses]);

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-20 bg-[#C9E5ED]/20 text-[#1A314C] relative border-b border-[#C9E5ED]">
      
      {}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-4 w-44 h-44 z-0 opacity-15 hidden lg:block"
      >
        <div className="w-36 h-36 rotate-45 rounded-2xl border-2 border-[#107C8E] bg-[#C9E5ED]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
              Explore Our Featured Courses
            </h2>
            <p className="text-[#10566E] text-sm max-w-xl">
              Gain verifiable skills in modern web development, cloud DevOps, machine learning, and digital monetization.
            </p>
          </div>

          <button
            onClick={onViewAllCourses}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#C9E5ED]/40 text-[#107C8E] font-bold text-xs border border-[#C9E5ED] shadow-sm transition-all cursor-pointer w-fit"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#107C8E]" />
          </button>
        </div>

        {}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#107C8E] text-white font-bold shadow-md shadow-[#107C8E]/20'
                  : 'bg-white text-[#1A314C] hover:text-[#107C8E] hover:bg-[#C9E5ED]/30 border border-[#C9E5ED]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#C9E5ED] hover:border-[#107C8E] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-[#1A314C] cursor-pointer"
            >
              <div>
                {}
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

                {}
                <div className="p-6 space-y-3">
                  {}
                  <h3 className="text-lg sm:text-xl font-black font-heading text-[#1A314C] group-hover:text-[#107C8E] transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {}
                  <p className="text-sm text-[#1A314C]/75 line-clamp-3 leading-relaxed">
                    {course.tagline || course.description}
                  </p>
                </div>
              </div>

              {}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-[#C9E5ED]/60 flex items-center justify-between">
                  <span className="relative inline-flex items-center gap-2 text-sm font-bold text-[#107C8E] group-hover:text-[#10566E] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#107C8E] group-hover:after:w-full after:transition-all after:duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#107C8E] group-hover:text-[#10566E]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
