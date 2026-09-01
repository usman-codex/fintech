import React, { useState, useRef } from 'react';
import { JobPosition } from '../types';
import { 
  X, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  ListChecks, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Upload, 
  FileText, 
  Trash2, 
  Send,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface JobModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    setUploadError(null);
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size exceeds 10MB limit. Please upload a smaller PDF or Word document.');
      return;
    }

    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (!validTypes.includes(file.type) && !['pdf', 'doc', 'docx'].includes(fileExt || '')) {
      setUploadError('Invalid format. Please upload your resume in PDF, DOC, or DOCX format.');
      return;
    }

    setSelectedFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError('Please select or upload your resume file before submitting.');
      return;
    }
    setIsSubmitted(true);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
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
        
        {}
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

        {}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          
          {}
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

            {}
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

          {}
          {activeTab === 'details' && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-7 text-[#1A314C]"
            >
              {}
              <div className="space-y-2 bg-[#C9E5ED]/15 p-5 rounded-2xl border border-[#C9E5ED]/80">
                <h3 className="text-sm sm:text-base font-bold text-[#1A314C] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#107C8E]" />
                  <span>Role Overview</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#1A314C]/85 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#1A314C] flex items-center gap-2 border-b border-[#C9E5ED]/60 pb-2">
                  <ListChecks className="w-4 h-4 text-[#107C8E]" />
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

              {}
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

              {}
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

              {}
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

              {}
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

          {}
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
                  <h3 className="text-xl font-black text-[#1A314C]">Resume Submitted!</h3>
                  <p className="text-xs sm:text-sm text-[#10566E] max-w-md mx-auto leading-relaxed">
                    Thank you for applying for the <strong>{job.title}</strong> position. Your resume (<strong>{selectedFile?.name}</strong>) has been received. Our recruitment team in Lahore will review it and contact you soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSelectedFile(null);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#107C8E] text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer hover:bg-[#10566E] transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="bg-[#C9E5ED]/15 p-4 rounded-2xl border border-[#C9E5ED] text-xs text-[#10566E] flex items-center justify-between gap-2">
                    <span>Applying for: <strong className="text-[#1A314C]">{job.title}</strong></span>
                    <span className="font-semibold text-[#107C8E]">{job.location}</span>
                  </div>

                  {}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload-input"
                  />

                  {}
                  {!selectedFile ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-10 text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-3 ${
                        isDragging 
                          ? 'border-[#107C8E] bg-[#C9E5ED]/40 scale-[0.99]' 
                          : 'border-[#107C8E]/40 hover:border-[#107C8E] bg-[#C9E5ED]/10 hover:bg-[#C9E5ED]/20'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#107C8E]/10 border border-[#107C8E]/20 text-[#107C8E] flex items-center justify-center shadow-xs">
                        <Upload className="w-7 h-7" />
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm sm:text-base font-bold text-[#1A314C]">
                          Click to upload your Resume / CV, or drag & drop
                        </p>
                        <p className="text-xs text-[#10566E]">
                          Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                        </p>
                      </div>

                      <button
                        type="button"
                        className="mt-2 px-5 py-2 rounded-xl bg-white border border-[#C9E5ED] hover:border-[#107C8E] text-[#107C8E] text-xs font-bold shadow-2xs transition-all pointer-events-none"
                      >
                        Browse Resume File
                      </button>
                    </div>
                  ) : (
                    
                    <div className="bg-[#C9E5ED]/20 border border-[#107C8E]/40 rounded-2xl p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-[#107C8E] text-white flex items-center justify-center shrink-0 shadow-md">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="min-w-0 space-y-0.5">
                            <p className="text-sm font-bold text-[#1A314C] truncate max-w-xs sm:max-w-md">
                              {selectedFile.name}
                            </p>
                            <p className="text-xs text-[#10566E] flex items-center gap-2">
                              <span>{formatFileSize(selectedFile.size)}</span>
                              <span>•</span>
                              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" />
                                Ready to upload
                              </span>
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-2.5 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer shrink-0"
                          title="Remove and change file"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {}
                  {uploadError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {uploadError}
                    </div>
                  )}

                  {}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={!selectedFile}
                      className={`w-full sm:w-auto px-8 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                        selectedFile
                          ? 'bg-[#107C8E] hover:bg-[#10566E] text-white shadow-[#107C8E]/25 cursor-pointer'
                          : 'bg-[#C9E5ED] text-[#10566E]/60 cursor-not-allowed shadow-none'
                      }`}
                    >
                      <span>Submit Resume</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <div className="text-[11px] text-[#5EA4AA]">
                      Or email resume to <a href="mailto:careers@fintechedgeinstitute.com" className="text-[#107C8E] font-bold hover:underline">careers@fintechedgeinstitute.com</a>
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
