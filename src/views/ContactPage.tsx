import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Enrollment',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: 'Course Enrollment', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="py-16 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
            Contact Fintech Edge Institute
          </h1>
          <p className="text-[#10566E] text-sm">
            Have questions regarding course curriculum, bank transfer payments, or 1-on-1 mentorship sessions? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A314C] border-b border-[#C9E5ED] pb-4">
                Get In Touch
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9E5ED]/40 text-[#107C8E] flex items-center justify-center shrink-0 border border-[#107C8E]/30">
                    <Mail className="w-5 h-5 text-[#107C8E]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5EA4AA] font-medium">Email Support</div>
                    <a href="mailto:info@fintechedgeinstitute.com" className="font-bold text-[#1A314C] hover:text-[#107C8E] text-xs sm:text-sm break-all">
                      info@fintechedgeinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9E5ED]/40 text-[#107C8E] flex items-center justify-center shrink-0 border border-[#107C8E]/30">
                    <Phone className="w-5 h-5 text-[#107C8E]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5EA4AA] font-medium">Phone & WhatsApp</div>
                    <a href="tel:+923111222595" className="font-bold text-[#1A314C] hover:text-[#107C8E] text-xs sm:text-sm">
                      +92 311 1222 595
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9E5ED]/40 text-[#107C8E] flex items-center justify-center shrink-0 border border-[#107C8E]/30">
                    <MapPin className="w-5 h-5 text-[#107C8E]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5EA4AA] font-medium">Institute Location</div>
                    <div className="font-bold text-[#1A314C] text-xs sm:text-sm">
                      Lahore, Punjab, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C9E5ED] text-xs text-[#5EA4AA]">
                Support Hours: Monday – Saturday, 9:00 AM – 7:00 PM (PKT).
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C9E5ED] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#1A314C]">Send Us A Message</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#C9E5ED]/30 border border-[#1DA5B8] text-[#1A314C] text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#107C8E] mx-auto" />
                  <h4 className="text-base font-bold text-[#1A314C]">Message Sent Successfully!</h4>
                  <p className="text-xs text-[#10566E]">
                    Thank you for contacting Fintech Edge Institute. A team mentor will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1A314C]">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Usama Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl px-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1A314C]">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl px-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1A314C]">Phone / WhatsApp Number</label>
                      <input
                        type="text"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl px-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1A314C]">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] text-[#1A314C] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#107C8E]"
                      >
                        <option value="Course Enrollment">Course Enrollment</option>
                        <option value="All Access Bundle Inquiry">All Access Bundle Inquiry</option>
                        <option value="Payment / Bank Transfer">Payment / Bank Transfer</option>
                        <option value="Mentorship Booking">1-on-1 Mentorship Booking</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1A314C]">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl p-3.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white font-extrabold text-xs transition-all shadow-md shadow-[#107C8E]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
