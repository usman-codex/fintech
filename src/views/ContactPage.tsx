import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// Layered Geometric Diamond Art (Rotated Boxes)
const LayeredDiamondArt: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const config = {
    sm: { outer: 'w-24 h-24 sm:w-32 sm:h-32', middle: 'w-16 h-16 sm:w-22 sm:h-22', inner: 'w-10 h-10 sm:w-14 sm:h-14', outerRadius: 'rounded-2xl', midRadius: 'rounded-xl', innerRadius: 'rounded-lg' },
    md: { outer: 'w-40 h-40 sm:w-52 sm:h-52', middle: 'w-28 h-28 sm:w-36 sm:h-36', inner: 'w-16 h-16 sm:w-22 sm:h-22', outerRadius: 'rounded-3xl', midRadius: 'rounded-2xl', innerRadius: 'rounded-xl' },
    lg: { outer: 'w-56 h-56 sm:w-72 sm:h-72', middle: 'w-40 h-40 sm:w-52 sm:h-52', inner: 'w-24 h-24 sm:w-32 sm:h-32', outerRadius: 'rounded-[2.5rem]', midRadius: 'rounded-3xl', innerRadius: 'rounded-2xl' },
  }[size];

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[#1DA5B8]/15 blur-2xl rounded-full" />

      {/* Outer Rotated Diamond Layer */}
      <motion.div
        animate={{ rotate: [45, 52, 45], scale: [1, 1.02, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.outer} rotate-45 ${config.outerRadius} border-2 border-[#1DA5B8]/35 bg-gradient-to-br from-[#C9E5ED]/40 via-[#1DA5B8]/10 to-transparent backdrop-blur-xs shadow-lg shadow-[#107C8E]/10`}
      />

      {/* Middle Rotated Diamond Layer */}
      <motion.div
        animate={{ rotate: [45, 38, 45], scale: [1, 0.98, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.middle} rotate-45 ${config.midRadius} border-2 border-[#107C8E]/45 bg-gradient-to-br from-[#107C8E]/25 via-[#5EA4AA]/20 to-[#10566E]/15 backdrop-blur-sm shadow-md shadow-[#1A314C]/10`}
      />

      {/* Inner Rotated Diamond Core */}
      <motion.div
        animate={{ rotate: [45, 49, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.inner} rotate-45 ${config.innerRadius} bg-gradient-to-br from-[#1A314C] via-[#10566E] to-[#107C8E] border border-[#C9E5ED]/50 shadow-xl shadow-[#107C8E]/30 flex items-center justify-center`}
      >
        <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-md bg-[#1DA5B8]/50 border border-[#C9E5ED]/70" />
      </motion.div>

      {/* Floating Accent Sparkle Dots */}
      <div className="absolute -top-2 right-4 w-3 h-3 rounded-full bg-[#1DA5B8] shadow-sm shadow-[#1DA5B8] animate-pulse" />
      <div className="absolute -bottom-2 left-5 w-2.5 h-2.5 rounded-full bg-[#C9E5ED] border border-[#107C8E]/40" />
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="relative py-16 bg-[#C9E5ED]/10 min-h-screen text-[#1A314C] overflow-hidden">
      {/* 1. Top Right Corner - Layered Geometric Diamond Art */}
      <div className="absolute -top-10 -right-10 sm:right-6 lg:right-12 pointer-events-none opacity-60 lg:opacity-80 z-0">
        <LayeredDiamondArt size="lg" />
      </div>

      {/* 2. Left Middle (Left Med) - Layered Geometric Diamond Art */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-6 lg:left-4 pointer-events-none opacity-50 lg:opacity-70 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      {/* 3. Bottom Left - Layered Geometric Diamond Art */}
      <div className="absolute -bottom-10 -left-10 sm:left-4 lg:left-8 pointer-events-none opacity-55 lg:opacity-75 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      {/* 4. Bottom Right - Layered Geometric Diamond Art */}
      <div className="absolute -bottom-10 -right-10 sm:right-4 lg:right-8 pointer-events-none opacity-55 lg:opacity-75 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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
                        placeholder="e.g. Usman Ahmad"
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
                        placeholder="mailaddress@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl px-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                      />
                    </div>
                  </div>

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

        {/* Google Map Section */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#C9E5ED] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[#1A314C]">
            <MapPin className="w-5 h-5 text-[#107C8E]" />
            <h3 className="text-lg sm:text-xl font-bold">Fintech Edge Institute on Google Maps</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#C9E5ED] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.086374625946!2d74.31367667397876!3d31.463017849976318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190797f8f15237%3A0xe0a05440b31ae90a!2sFintech%20Edge%20Institute!5e1!3m2!1sen!2s!4v1787652954202!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Fintech Edge Institute Location Map"
              className="w-full h-[350px] sm:h-[450px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
