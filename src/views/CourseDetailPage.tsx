import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  FileText, 
  Award, 
  Users, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Layers,
  Share2
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
  const [openModuleId, setOpenModuleId] = useState<string | null>(
    course.modules?.[0]?.id || null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [course.id]);

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  const discountPercent = Math.round(
    ((course.originalPriceUSD - course.priceUSD) / course.originalPriceUSD) * 100
  );

  return (
    <div className="w-full bg-[#FAFDFE] min-h-screen text-[#1A314C] flex flex-col font-sans">
      
      {/* 1. Hero Section with Course-Specific Heading, Tagline & Rotated Decorative Diamond Art */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#10566E] via-[#107C8E] to-[#1A314C] text-white overflow-hidden shadow-lg border-b border-[#107C8E]/30">
        
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9E5ED_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Rotated Box Art: Top-Right Layered Geometric Diamonds (Brand Identity) */}
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
            
            {/* Left Content Area: Course Title, Short Description, Badges & Meta */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              
              {/* Badge & Level Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                {course.badge && (
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg text-white shadow-sm flex items-center gap-1.5 ${
                    course.badge === 'Best Seller' 
                      ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]' 
                      : course.badge === 'Hot'
                      ? 'bg-gradient-to-r from-[#E65100] to-[#F57C00]'
                      : 'bg-gradient-to-r from-[#107C8E] to-[#1DA5B8]'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {course.badge}
                  </span>
                )}
                
                <span className="bg-[#1A314C]/80 backdrop-blur-md text-[#C9E5ED] text-xs font-semibold px-3 py-1 rounded-lg border border-[#107C8E]/50">
                  Level: {course.level}
                </span>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-xs font-bold text-[#D8F0F5]">
                  <Star className="w-3.5 h-3.5 fill-[#1DA5B8] text-[#1DA5B8]" />
                  <span>{course.rating}</span>
                  <span className="text-[#C9E5ED] font-normal">({course.reviewCount} reviews)</span>
                </div>
              </div>

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

            {/* Right Featured Image / Quick Action Preview */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A314C] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold bg-[#107C8E]/90 px-2.5 py-1 rounded-md">
                    {course.instructor.name}
                  </span>
                  <span className="bg-emerald-500 font-black px-2 py-0.5 rounded text-[11px]">
                    {discountPercent}% OFF
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Main Course Detailed Content & Curriculum Breakdown */}
      <section className="relative w-full py-12 sm:py-16">
        
        {/* Rotated Box Art: Middle Section Accent (Subtle) */}
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
            
            {/* Left Main Details Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Comprehensive Description */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C] flex items-center gap-2.5">
                  <Zap className="w-6 h-6 text-[#107C8E]" />
                  <span>Course Overview & Learning Scope</span>
                </h2>
                
                <p className="text-sm sm:text-base text-[#1A314C]/85 leading-relaxed">
                  {course.description}
                </p>

                {/* Tools & Tech Chips */}
                {course.tools && course.tools.length > 0 && (
                  <div className="pt-4 border-t border-[#C9E5ED]/60">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#5EA4AA] mb-3">
                      Key Tools, Frameworks & Technologies Covered:
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

              {/* What You Will Learn Grid */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-5">
                <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C] flex items-center gap-2.5">
                  <CheckCircle2 className="w-6 h-6 text-[#107C8E]" />
                  <span>What You Will Master in this Program</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFDFE] border border-[#C9E5ED]/80 hover:border-[#1DA5B8] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#107C8E] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1A314C] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Curriculum & Module Breakdown Accordions */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C9E5ED] pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1A314C] flex items-center gap-2.5">
                      <BookOpen className="w-6 h-6 text-[#107C8E]" />
                      <span>Full Course Syllabus</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5EA4AA] mt-1">
                      {course.modules?.length || 0} Modules • {course.lessonsCount} Total Lessons • {course.durationHours} Hours On-Demand
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-[#107C8E] bg-[#1DA5B8]/10 px-3 py-1 rounded-full border border-[#1DA5B8]/20">
                    Step-by-Step Hands-on Labs
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {course.modules?.map((mod, mIdx) => {
                    const isOpen = openModuleId === mod.id;
                    return (
                      <div 
                        key={mod.id}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isOpen 
                            ? 'border-[#107C8E] bg-[#FAFDFE] shadow-sm' 
                            : 'border-[#C9E5ED] bg-white hover:border-[#1DA5B8]'
                        }`}
                      >
                        {/* Module Header Button */}
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                              isOpen ? 'bg-[#107C8E] text-white' : 'bg-[#EBF4F7] text-[#10566E]'
                            }`}>
                              {mIdx + 1}
                            </span>
                            <div>
                              <h3 className="font-bold text-sm sm:text-base text-[#1A314C]">
                                {mod.title}
                              </h3>
                              <p className="text-xs text-[#5EA4AA] font-medium mt-0.5">
                                {mod.lessonsCount} lessons • {mod.duration}
                              </p>
                            </div>
                          </div>

                          <div className="text-[#107C8E] p-1 rounded-lg hover:bg-[#EBF4F7] transition-colors">
                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </button>

                        {/* Module Lessons List */}
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 pt-1 space-y-2 border-t border-[#C9E5ED]/60">
                            {mod.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-[#C9E5ED]/70 text-xs sm:text-sm"
                              >
                                <div className="flex items-center gap-2.5">
                                  {lesson.type === 'video' ? (
                                    <PlayCircle className="w-4 h-4 text-[#107C8E] shrink-0" />
                                  ) : (
                                    <FileText className="w-4 h-4 text-[#10566E] shrink-0" />
                                  )}
                                  <span className="font-medium text-[#1A314C] line-clamp-1">
                                    {lesson.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  {lesson.isPreview && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#107C8E] bg-[#1DA5B8]/15 px-2 py-0.5 rounded border border-[#1DA5B8]/30">
                                      Preview
                                    </span>
                                  )}
                                  <span className="text-xs text-[#5EA4AA] font-semibold">
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Requirements & Target Audience */}
              {course.requirements && course.requirements.length > 0 && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                  <h2 className="text-lg sm:text-xl font-black font-heading text-[#1A314C] flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#107C8E]" />
                    <span>Prerequisites & Requirements</span>
                  </h2>

                  <ul className="space-y-2">
                    {course.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A314C]/85">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#107C8E]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructor Information */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-4">
                <h2 className="text-lg sm:text-xl font-black font-heading text-[#1A314C] flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#107C8E]" />
                  <span>Lead Program Instructor</span>
                </h2>

                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    }}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#107C8E]/40 shadow-sm"
                  />
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A314C]">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#107C8E] font-bold">
                      {course.instructor.role}
                    </p>
                    <p className="text-xs text-[#5EA4AA] mt-1">
                      Mentored 5,000+ engineers, marketers & creators at FinTech Edge Institute.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Enrollment Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border-2 border-[#107C8E]/30 shadow-xl space-y-6">
                
                {/* Price Header */}
                <div className="space-y-1 pb-4 border-b border-[#C9E5ED]">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#107C8E]">
                      ${course.priceUSD}
                    </span>
                    <span className="text-base line-through text-[#5EA4AA] font-semibold">
                      ${course.originalPriceUSD}
                    </span>
                    <span className="text-xs font-black bg-emerald-500 text-white px-2 py-0.5 rounded-md">
                      {discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#5EA4AA]">
                    Rs {course.pricePKR.toLocaleString()} PKR (One-time investment)
                  </p>
                </div>

                {/* Direct Action Buttons */}
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

                {/* Course Inclusions Checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#1A314C]">
                    This Program Includes:
                  </p>
                  
                  <div className="space-y-2 text-xs text-[#1A314C]/90">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#107C8E]" />
                      <span>{course.durationHours} hours full on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#107C8E]" />
                      <span>{course.lessonsCount} downloadable resources & code labs</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#107C8E]" />
                      <span>Official FinTech Edge Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#107C8E]" />
                      <span>1-on-1 Mentorship & QA support access</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#107C8E]" />
                      <span>Lifetime access with continuous updates</span>
                    </div>
                  </div>
                </div>

                {/* 100% Satisfaction Guarantee Note */}
                <div className="p-3.5 rounded-xl bg-[#FAFDFE] border border-[#C9E5ED] text-center text-xs text-[#5EA4AA]">
                  <p className="font-semibold text-[#10566E]">Need corporate or group billing?</p>
                  <p className="text-[11px] mt-0.5">Contact our counselor team for custom cohorts.</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Bottom Rotated Box Art Call To Action Card */}
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
