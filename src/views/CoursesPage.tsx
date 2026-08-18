import React, { useState } from 'react';
import { Course } from '../types';
import { 
  Search, 
  Filter, 
  Layers, 
  Star, 
  Clock, 
  BookOpen, 
  Users, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  onSelectCourse,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories = ['All', 'Trading & Airdrops', 'Web3 & Blockchain', 'FinTech & AI', 'All Access'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesLvl = selectedLevel === 'All' || c.level === selectedLevel;
    return matchesSearch && matchesCat && matchesLvl;
  });

  return (
    <div className="py-12 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9E5ED]/60 text-[#107C8E] text-xs font-bold border border-[#107C8E]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Official Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
            All Fintech Edge Courses
          </h1>
          <p className="text-[#10566E] text-sm">
            Master high-demand skills in decentralized finance, Web3 marketing, crypto airdrops, and financial artificial intelligence.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#C9E5ED] space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#5EA4AA] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by course title, topic or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
              />
            </div>

            {/* Level Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] text-[#1A314C] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#107C8E]"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    Level: {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Result Counter */}
            <div className="md:col-span-3 flex items-center justify-end text-xs text-[#5EA4AA] font-medium">
              Showing <span className="font-bold text-[#107C8E] mx-1">{filtered.length}</span> programs
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#C9E5ED] scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#107C8E] text-white font-bold shadow-sm'
                    : 'bg-[#C9E5ED]/20 text-[#10566E] hover:bg-[#C9E5ED]/50 border border-[#C9E5ED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-2xl border border-[#C9E5ED] hover:border-[#1DA5B8] overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 transition-all duration-300 flex flex-col justify-between text-[#1A314C]"
            >
              <div>
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A314C]/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="bg-[#1A314C]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#107C8E]">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="bg-[#107C8E] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full shadow-md">
                        {course.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5EA4AA]">
                    <div className="flex items-center gap-1 bg-[#1DA5B8]/15 text-[#10566E] px-2 py-0.5 rounded font-bold border border-[#1DA5B8]/30">
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
                    className="text-base font-bold text-[#1A314C] group-hover:text-[#107C8E] transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#1A314C]/75 line-clamp-2 leading-relaxed">
                    {course.tagline}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#C9E5ED]">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                      }}
                      className="w-6 h-6 rounded-full object-cover border border-[#107C8E]"
                    />
                    <span className="text-xs text-[#1A314C] font-medium">{course.instructor.name}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 mt-2 border-t border-[#C9E5ED] flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-[#107C8E]">
                    ${course.priceUSD}
                  </div>
                  <div className="text-[10px] text-[#5EA4AA]">
                    Rs {course.pricePKR.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white font-extrabold text-xs transition-all cursor-pointer shadow-md shadow-[#107C8E]/20"
                >
                  View Course
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
