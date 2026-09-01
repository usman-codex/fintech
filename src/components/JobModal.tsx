import React, { useState } from 'react';
import { JobPosition } from '../types';
import { 
  X, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Mail, 
  Phone, 
  User, 
  Link as LinkIcon, 
  Send,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface JobModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    coverNote: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state clean
    }, 4000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#1A314C]/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white border border-[#C9E5ED] text-[#1A314C] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#C9E5ED] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white bg-[#107C8E] px-3 py-1 rounded-full shadow-xs">
              {job.department}
            </span>
            <span className="text-xs text-[#10566E] font-semibold bg-[#C9E5ED]/30 px-2.5 py-1 rounded-full border border-[#C9E5ED]">
              {job.workplaceType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#C9E5ED]/30 text-[#1A314C] hover:bg-[#C9E5ED] border border-[#C9E5ED] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Header Banner info */}
          <div className="space-y-3 pb-5 border-b border-[#C9E5ED]/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-[#107C8E] bg-[#C9E5ED]/30 px-3 py-1 rounded-lg border border-[#C9E5ED] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
              <span className="text-xs font-medium text-[#10566E] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#107C8E]" />
                {job.location}
              </span>
              <span className="text-xs text-[#5EA4AA]">•</span>
              <span className="text-xs font-medium text-[#10566E] flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#107C8E]" />
                Experience: {job.experienceLevel}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A314C] tracking-tight pt-1">
              {job.title}
            </h1>

            <p className="text-sm sm:text-base text-[#10566E] leading-relaxed">
              {job.description}
            </p>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 pt-3">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'details'
                    ? 'bg-[#107C8E] text-white shadow-md shadow-[#107C8E]/20'
                    : 'bg-[#C9E5ED]/20 text-[#10566E] hover:bg-[#C9E5ED]/40 border border-[#C9E5ED]'
                }`}
              >
                Job Specifications
              </button>
              <button
                onClick={() => setActiveTab('apply')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'apply'
                    ? 'bg-[#107C8E] text-white shadow-md shadow-[#107C8E]/20'
                    : 'bg-[#C9E5ED]/20 text-[#10566E] hover:bg-[#C9E5ED]/40 border border-[#C9E5ED]'
                }`}
              >
                <span>Apply for this Role</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tab 1: Details */}
          {activeTab === 'details' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-7 text-[#1A314C]"
            >
              {/* Role Overview */}
              <div className="space-y-2 bg-[#C9E5ED]/15 p-5 rounded-2xl border border-[#C9E5ED]/80">
                <h3 className="text-sm sm:text-base font-bold text-[#1A314C] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#107C8E]" />
                  <span>Role Overview</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#1A314C]/85 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#1A314C] flex items-center gap-2 border-b border-[#C9E5ED]/60 pb-2">
                  <Sparkles className="w-4 h-4 text-[#107C8E]" />
                  <span>Key Responsibilities</span>
                </h3>
                <div className="space-y-2.5">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#C9E5ED]/70 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#107C8E] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1A314C]/90 leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#1A314C] flex items-center gap-2 border-b border-[#C9E5ED]/60 pb-2">
                  <GraduationCap className="w-4 h-4 text-[#107C8E]" />
                  <span>Qualifications & Requirements</span>
                </h3>
                <div className="space-y-2.5">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#C9E5ED]/10 border border-[#C9E5ED]/60">
                      <span className="w-2 h-2 rounded-full bg-[#107C8E] shrink-0 mt-1.5" />
                      <span className="text-xs sm:text-sm text-[#1A314C]/90 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferred Skills */}
              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#10566E]">Preferred / Good to Have:</h3>
                  <div className="space-y-2">
                    {job.preferredSkills.map((pref, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A314C]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1DA5B8] shrink-0 mt-1.5" />
                        <span>{pref}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits & Perks */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#1A314C] border-b border-[#C9E5ED]/60 pb-2">
                  Benefits & Perks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.perks.map((perk, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#C9E5ED]/20 border border-[#C9E5ED] flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1A314C]">
                      <span className="w-2 h-2 rounded-full bg-[#107C8E] shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#10566E] to-[#107C8E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-base">Ready to build your career with us?</h4>
                  <p className="text-xs text-[#C9E5ED]">Submit your credentials or email your resume directly.</p>
                </div>
                <button
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-2.5 rounded-xl bg-white text-[#10566E] hover:bg-[#C9E5ED] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Apply Form */}
          {activeTab === 'apply' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-[#C9E5ED]/20 rounded-3xl border border-[#C9E5ED]">
                  <div className="w-14 h-14 bg-[#107C8E] text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#1A314C]">Application Submitted!</h3>
                  <p className="text-xs sm:text-sm text-[#10566E] max-w-md mx-auto leading-relaxed">
                    Thank you for applying for the <strong>{job.title}</strong> position. Our talent acquisition team in Lahore will review your details and reach out within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#107C8E] text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer hover:bg-[#10566E] transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-[#C9E5ED]/15 p-4 rounded-2xl border border-[#C9E5ED] text-xs text-[#10566E] flex items-center justify-between gap-2">
                    <span>Applying for: <strong className="text-[#1A314C]">{job.title}</strong></span>
                    <span className="font-semibold text-[#107C8E]">{job.location}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A314C] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#107C8E]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Usman Ali"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9E5ED] bg-white text-[#1A314C] text-xs sm:text-sm focus:outline-none focus:border-[#107C8E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A314C] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#107C8E]" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="usman@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9E5ED] bg-white text-[#1A314C] text-xs sm:text-sm focus:outline-none focus:border-[#107C8E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A314C] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#107C8E]" />
                        <span>Phone / WhatsApp *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9E5ED] bg-white text-[#1A314C] text-xs sm:text-sm focus:outline-none focus:border-[#107C8E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A314C] flex items-center gap-1.5">
                        <LinkIcon className="w-3.5 h-3.5 text-[#107C8E]" />
                        <span>Resume / LinkedIn / Portfolio Link *</span>
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/... or Google Drive CV"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9E5ED] bg-white text-[#1A314C] text-xs sm:text-sm focus:outline-none focus:border-[#107C8E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A314C] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#107C8E]" />
                      <span>Short Cover Note / Relevant Experience</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Briefly highlight your past projects or relevant skills..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9E5ED] bg-white text-[#1A314C] text-xs sm:text-sm focus:outline-none focus:border-[#107C8E] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#107C8E]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <div className="text-[11px] text-[#5EA4AA]">
                      Or email CV to <a href="mailto:careers@fintechedgeinstitute.com" className="text-[#107C8E] font-bold hover:underline">careers@fintechedgeinstitute.com</a>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          )}

        </div>

      </motion.div>
    </div>
  );
};
