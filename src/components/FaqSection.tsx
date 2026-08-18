import React, { useState } from 'react';
import { FaqItem } from '../types';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#C9E5ED]/15 text-[#1A314C] relative border-b border-[#C9E5ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#10566E] text-sm">
            Everything you need to know about course access, certificates, drip schedules, and payment options.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#C9E5ED] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#1A314C] hover:text-[#107C8E] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-[#C9E5ED]/30 border border-[#C9E5ED] text-[#107C8E] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#1A314C]/80 leading-relaxed border-t border-[#C9E5ED] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
