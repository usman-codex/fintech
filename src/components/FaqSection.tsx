import React, { useState } from 'react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#C9E5ED]/15 text-[#1A314C] relative border-b border-[#C9E5ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C] font-poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-[#10566E] text-sm sm:text-base font-poppins">
            Everything you need to know about course access, certificates, drip schedules, and payment options.
          </p>
        </div>

        {}
        <div 
          className="space-y-3.5"
          onMouseLeave={() => setOpenId(null)}
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                onMouseEnter={() => setOpenId(faq.id)}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'border-[#107C8E] shadow-md ring-1 ring-[#107C8E]/20 bg-[#FAFCFD]' 
                    : 'border-[#C9E5ED] hover:border-[#107C8E]/40 hover:bg-[#F8FAFC]'
                }`}
              >
                {}
                <div className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-bold transition-colors duration-200">
                  <span className={`${isOpen ? 'text-[#107C8E]' : 'text-[#1A314C]'} font-poppins transition-colors duration-200`}>
                    {faq.question}
                  </span>
                </div>

                {}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4 font-poppins">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

