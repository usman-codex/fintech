import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-[#C9E5ED]/15 text-[#1A314C] relative border-b border-[#C9E5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A314C]">
            Hear From Our Grads
          </h2>
          <p className="text-[#10566E] text-sm">
            Discover how students, traders, and engineers transformed their career paths through Fintech Edge Institute.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#C9E5ED] hover:border-[#1DA5B8] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between text-[#1A314C]"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1DA5B8] text-[#1DA5B8]" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-[#1A314C]/80 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-[#C9E5ED] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    }}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#107C8E]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1A314C] flex items-center gap-1">
                      {t.name}
                      <CheckCircle className="w-3.5 h-3.5 text-[#107C8E]" />
                    </h4>
                    <p className="text-[11px] text-[#5EA4AA]">
                      {t.role} • <span className="text-[#107C8E] font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-[#5EA4AA] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#5EA4AA]" />
                  <span>{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
