import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Award,
  Target,
  Layers,
  Briefcase
} from 'lucide-react';
import { Course } from '../types';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onBack,
  onEnroll,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [course.id]);

  return (
    <div className="w-full bg-[#FAFDFE] min-h-screen text-[#1A314C] flex flex-col font-sans">
      
      {/* 1. Hero Section with Clean Heading, Tagline & Layered Geometric Diamond Art */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#10566E] via-[#107C8E] to-[#1A314C] text-white overflow-hidden shadow-lg border-b border-[#107C8E]/30">
        
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9E5ED_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Rotated Box Art: Top-Right Layered Geometric Diamonds */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-12 right-0 sm:right-6 md:right-16 w-64 h-64 sm:w-80 sm:h-80 z-0 opacity-80"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#1DA5B8]/40 bg-gradient-to-br from-[#C9E5ED]/25 to-[#1DA5B8]/10 backdrop-blur-[2px]" />
            <div className="absolute top-6 right-10 w-36 h-36 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#107C8E]/60 bg-gradient-to-br from-[#107C8E]/40 to-[#10566E]/40" />
            <div className="absolute top-12 right-16 w-24 h-24 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#1A314C] to-[#107C8E] opacity-95 shadow-2xl shadow-[#107C8E]/40" />
            <div className="absolute top-2 right-32 w-3 h-3 rounded-full bg-[#1DA5B8] shadow-sm shadow-[#1DA5B8]" />
            <div className="absolute top-36 right-4 w-2 h-2 rounded-full bg-[#C9E5ED]" />
            <div className="absolute top-24 right-48 w-2 h-2 rounded-full bg-[#1DA5B8]/80" />
          </div>
        </div>

        {/* Rotated Box Art: Bottom-Left Layered Geometric Diamonds */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-16 -left-12 w-60 h-60 sm:w-72 sm:h-72 z-0 opacity-40 hidden sm:block"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-4 left-4 w-40 h-40 rotate-45 rounded-2xl border border-[#1DA5B8]/30 bg-gradient-to-tr from-[#10566E]/30 to-[#1DA5B8]/10" />
            <div className="absolute bottom-10 left-10 w-28 h-28 rotate-45 rounded-xl border border-[#107C8E]/40 bg-[#1A314C]/40" />
            <div className="absolute bottom-14 left-14 w-16 h-16 rotate-45 rounded-lg bg-gradient-to-tr from-[#107C8E] to-[#1DA5B8] opacity-70" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 text-xs sm:text-sm">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#C9E5ED] hover:text-white transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-semibold">Back to All Courses</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-[#C9E5ED] font-medium">
              <span className="cursor-pointer hover:underline" onClick={onBack}>Courses</span>
              <span>/</span>
              <span className="bg-[#1DA5B8]/20 text-white px-2.5 py-0.5 rounded-md border border-[#1DA5B8]/30 font-semibold">
                {course.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area: Course Title, Short Description & Quick Meta */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              
              {/* Main Course Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black font-heading leading-tight tracking-tight bg-gradient-to-r from-white via-[#D8F0F5] to-[#1DA5B8] bg-clip-text text-transparent drop-shadow-sm">
                {course.title}
              </h1>

              {/* Short Course Paragraph */}
              <p className="text-[#C9E5ED] text-base sm:text-lg leading-relaxed max-w-3xl font-sans">
                {course.tagline}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-xs border border-[#1DA5B8]/30 rounded-xl p-3 text-center">
                  <Clock className="w-4 h-4 text-[#1DA5B8] mx-auto mb-1" />
                  <p className="text-[11px] text-[#C9E5ED]">Duration</p>
                  <p className="text-sm font-bold text-white">{course.durationHours} Hours</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-[#1DA5B8]/30 rounded-xl p-3 text-center">
                  <BookOpen className="w-4 h-4 text-[#1DA5B8] mx-auto mb-1" />
                  <p className="text-[11px] text-[#C9E5ED]">Curriculum</p>
                  <p className="text-sm font-bold text-white">{course.lessonsCount} Lessons</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-[#1DA5B8]/30 rounded-xl p-3 text-center">
                  <Users className="w-4 h-4 text-[#1DA5B8] mx-auto mb-1" />
                  <p className="text-[11px] text-[#C9E5ED]">Enrolled</p>
                  <p className="text-sm font-bold text-white">{course.studentCount.toLocaleString()}+</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-[#1DA5B8]/30 rounded-xl p-3 text-center">
                  <GraduationCap className="w-4 h-4 text-[#1DA5B8] mx-auto mb-1" />
                  <p className="text-[11px] text-[#C9E5ED]">Certificate</p>
                  <p className="text-sm font-bold text-white">Verified</p>
                </div>
              </div>

            </div>

            {/* Right Featured Image Frame (Clean, without badges or price overlays) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#1DA5B8]/50 shadow-2xl bg-[#1A314C] group">
                <img
                  src={course.image}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Main Course Detail Cards Section */}
      <section className="relative w-full py-12 sm:py-16">
        
        {/* Rotated Box Art: Middle Section Accent */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-40 right-4 w-44 h-44 z-0 opacity-20 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#107C8E] bg-[#C9E5ED]/30" />
            <div className="absolute top-6 right-6 w-20 h-20 rotate-45 rounded-xl bg-[#1DA5B8]/40" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Heading & Paragraph Detail Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Detail Card 1: Course Overview & Learning Scope */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#107C8E] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C]">
                      Course Overview & Learning Scope
                    </h2>
                    <p className="text-xs text-[#5EA4AA] font-medium">Program summary and structural scope</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-[#1A314C]/85 leading-relaxed font-sans">
                  {course.description}
                </p>

                {/* Tools & Technologies */}
                {course.tools && course.tools.length > 0 && (
                  <div className="pt-4 border-t border-[#C9E5ED]/60 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#107C8E]">
                      Key Tools & Technologies Covered:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-bold bg-[#EBF4F7] text-[#10566E] px-3 py-1.5 rounded-xl border border-[#C9E5ED] shadow-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Detail Card 2: Core Learning Pillars */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#107C8E] flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C]">
                      Core Competencies & Learning Outcomes
                    </h2>
                    <p className="text-xs text-[#5EA4AA] font-medium">Skills and practical methodologies you will gain</p>
                  </div>
                </div>

                <p className="text-sm text-[#1A314C]/80 leading-relaxed">
                  Every concept is delivered through applied exercises designed to transition you from foundational understanding to full operational execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAFDFE] border border-[#C9E5ED] space-y-1.5"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-[#107C8E]">
                        Pillar {idx + 1}: Key Objective
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1A314C]/85 leading-relaxed font-sans">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail Cards 3+: Structured Module Detail Cards (Heading & Paragraph format replacing accordion) */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#107C8E] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C]">
                      Comprehensive Program Modules
                    </h2>
                    <p className="text-xs text-[#5EA4AA] font-medium">In-depth overview of each progressive training phase</p>
                  </div>
                </div>

                {course.modules?.map((mod, mIdx) => (
                  <div 
                    key={mod.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#C9E5ED] shadow-sm hover:border-[#107C8E] transition-all space-y-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-[#107C8E] text-white flex items-center justify-center font-black text-xs shrink-0">
                        {mIdx + 1}
                      </span>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#1A314C]">
                        {mod.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#1A314C]/80 leading-relaxed">
                      This module focuses on the practical workflows, architectural principles, and execution strategies required to build and scale production-ready systems in this domain.
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EA4AA] mb-2">
                        Lessons Covered in this Phase:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.lessons.map((lesson) => (
                          <div 
                            key={lesson.id}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFDFE] border border-[#C9E5ED]/70 text-xs text-[#1A314C]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#107C8E] shrink-0" />
                            <span className="font-medium line-clamp-1">{lesson.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detail Card: Prerequisites & Who Should Enroll */}
              {course.requirements && course.requirements.length > 0 && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#107C8E] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C]">
                        Prerequisites & Target Audience
                      </h2>
                      <p className="text-xs text-[#5EA4AA] font-medium">Recommended baseline knowledge and hardware setup</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#1A314C]/85 leading-relaxed font-sans">
                    This training program is structured to accommodate ambitious learners who want to develop verified skills from scratch or level up their existing workflow.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {course.requirements.map((req, rIdx) => (
                      <div 
                        key={rIdx}
                        className="p-3 rounded-xl bg-[#FAFDFE] border border-[#C9E5ED] flex items-start gap-2.5 text-xs sm:text-sm text-[#1A314C]/85"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#107C8E] shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detail Card: Career Pathways & Industry Application */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#107C8E] flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C]">
                      Career Pathways & Monetization Opportunities
                    </h2>
                    <p className="text-xs text-[#5EA4AA] font-medium">Real-world commercial relevance and earning potential</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#1A314C]/85 leading-relaxed font-sans">
                  Graduates of this program leverage their hands-on portfolio to secure high-paying remote roles, launch scalable agency services, or monetize independent digital assets worldwide.
                </p>
              </div>

            </div>

            {/* Right Sticky Enrollment Sidebar (4 cols - Clean & Without Price) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border-2 border-[#107C8E]/30 shadow-xl space-y-6">
                
                {/* Program Access Header */}
                <div className="space-y-2 pb-4 border-b border-[#C9E5ED]">
                  <h3 className="text-xl font-black font-heading text-[#1A314C]">
                    Program Enrollment
                  </h3>
                  <p className="text-xs text-[#1A314C]/75 leading-relaxed font-sans">
                    Get immediate lifetime access to full video lectures, hands-on labs, resource files, and 1-on-1 mentor guidance.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => onEnroll(course)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white font-black text-sm transition-all shadow-lg shadow-[#107C8E]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Enroll in this Program</span>
                  </button>

                  <button
                    onClick={onBack}
                    className="w-full py-3 px-4 rounded-xl border border-[#107C8E] text-[#107C8E] hover:bg-[#107C8E]/10 font-bold text-xs transition-all cursor-pointer text-center"
                  >
                    Explore Other Courses
                  </button>
                </div>

                {/* Program Inclusions */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#1A314C]">
                    This Program Includes:
                  </p>
                  
                  <div className="space-y-2.5 text-xs text-[#1A314C]/90">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#107C8E] shrink-0" />
                      <span>{course.durationHours} hours full on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#107C8E] shrink-0" />
                      <span>{course.lessonsCount} downloadable resources & code labs</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#107C8E] shrink-0" />
                      <span>Official FinTech Edge Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#107C8E] shrink-0" />
                      <span>1-on-1 Mentorship & QA support access</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#107C8E] shrink-0" />
                      <span>Lifetime access with continuous updates</span>
                    </div>
                  </div>
                </div>

                {/* Consultation Note */}
                <div className="p-3.5 rounded-xl bg-[#FAFDFE] border border-[#C9E5ED] text-center text-xs text-[#5EA4AA]">
                  <p className="font-semibold text-[#10566E]">Need corporate or group cohorts?</p>
                  <p className="text-[11px] mt-0.5">Contact our counselor team for custom training batches.</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Bottom Call To Action Card */}
      <section className="relative w-full py-12 bg-gradient-to-r from-[#10566E] to-[#1A314C] text-white overflow-hidden shadow-inner mt-8">
        
        {/* Rotated Box Art: Bottom Right Layered Diamonds */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-10 right-0 sm:right-10 w-52 h-52 sm:w-64 sm:h-64 z-0 opacity-60"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-4 w-40 h-40 rotate-45 rounded-2xl border-2 border-[#1DA5B8]/40 bg-[#1DA5B8]/10" />
            <div className="absolute bottom-6 right-10 w-28 h-28 rotate-45 rounded-xl border border-[#C9E5ED]/50 bg-[#107C8E]/40" />
            <div className="absolute bottom-10 right-14 w-16 h-16 rotate-45 rounded-lg bg-[#1DA5B8] opacity-80" />
          </div>
        </div>

        {/* Rotated Box Art: Bottom Left Diamond Accent */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-8 -left-8 w-40 h-40 z-0 opacity-40"
        >
          <div className="w-32 h-32 rotate-45 rounded-2xl border border-[#1DA5B8]/40 bg-[#1DA5B8]/10" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Ready to Master {course.title}?
          </h2>
          <p className="text-[#C9E5ED] text-sm sm:text-base max-w-xl mx-auto">
            Join {course.studentCount.toLocaleString()}+ students already advancing their career with FinTech Edge Institute.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onEnroll(course)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1DA5B8] hover:bg-[#107C8E] text-[#1A314C] hover:text-white font-black text-sm transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Get Immediate Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
