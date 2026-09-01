import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BusinessNeedsSection } from '../components/BusinessNeedsSection';
import { DesignersDevelopersSection } from '../components/DesignersDevelopersSection';
import { TopProjectsSection } from '../components/TopProjectsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { WhyFintechSection } from '../components/WhyFintechSection';
import { GrowBusinessSection } from '../components/GrowBusinessSection';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { BundleSection } from '../components/BundleSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaSection } from '../components/CtaSection';

import { Course, BlogPost, Testimonial, FaqItem, ServiceItem } from '../types';

interface HomePageProps {
  courses: Course[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  onSelectCourse: (course: Course) => void;
  onSelectBlog: (blog: BlogPost) => void;
  onExploreCourses: () => void;
  onViewAllBlogs: () => void;
  onOpenPromptModal: () => void;
  onNavigateToServices: () => void;
  onSelectService: (service: ServiceItem) => void;
  onNavigateToAbout: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  courses,
  blogs,
  testimonials,
  faqs,
  onSelectCourse,
  onSelectBlog,
  onExploreCourses,
  onViewAllBlogs,
  onOpenPromptModal,
  onNavigateToServices,
  onSelectService,
  onNavigateToAbout,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  const featuredCourse = courses.find((c) => c.id === 'airdrop-mastery-course') || courses[0];
  const bundleCourse = courses.find((c) => c.id === 'all-access-bundle-coaching') || courses[courses.length - 1];

  return (
    <div className="space-y-0">
      {}
      <HeroSection
        onExploreCourses={onExploreCourses}
        onSelectCourse={onSelectCourse}
        featuredCourse={featuredCourse}
      />

      {}
      <BusinessNeedsSection
        onNavigateToServices={onNavigateToServices}
        onSelectService={onSelectService}
      />

      {}
      <DesignersDevelopersSection
        onNavigateToAbout={onNavigateToAbout}
      />

      {}
      <TopProjectsSection
        onNavigateToProjects={onNavigateToProjects}
      />

      {}
      <AchievementsSection
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToContact={onNavigateToContact}
      />

      {}
      <WhyFintechSection />

      {}
      <GrowBusinessSection />

      {}
      <OurFoundersSection />

      {}
      <BundleSection
        bundleCourse={bundleCourse}
        onSelectCourse={onSelectCourse}
      />

      {}
      <TestimonialsSection testimonials={testimonials} />

      {}
      <FaqSection faqs={faqs} />

      {}
      <CtaSection
        onExploreCourses={onExploreCourses}
        onContactUs={onNavigateToContact}
      />
    </div>
  );
};
