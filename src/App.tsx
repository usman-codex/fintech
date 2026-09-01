import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './views/HomePage';
import { CoursesPage } from './views/CoursesPage';
import { CourseDetailPage } from './views/CourseDetailPage';
import { AboutPage } from './views/AboutPage';
import { ServicesPage } from './views/ServicesPage';
import { CareerPage } from './views/CareerPage';
import { BlogPage } from './views/BlogPage';
import { ContactPage } from './views/ContactPage';
import { ProjectsPage } from './views/ProjectsPage';

import { CourseModal } from './components/CourseModal';
import { ClaudePromptModal } from './components/ClaudePromptModal';
import { AuthModal } from './components/AuthModal';
import { BlogModal } from './components/BlogModal';

import { COURSES_DATA } from './data/courses';
import { BLOGS_DATA } from './data/blogs';
import { TESTIMONIALS_DATA, FAQS_DATA } from './data/faqs';
import { SERVICES_DATA } from './data/services';
import { Course, BlogPost, ServiceItem } from './types';


function parseCurrentRoute(): { tab: string; slug: string | null } {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const pathname = window.location.pathname.replace(/^\//, '');

  const fullPath = hash || pathname || 'home';
  const segments = fullPath.split('/').filter(Boolean);

  const mainSegment = segments[0]?.toLowerCase() || 'home';
  const subSegment = segments[1] || null;

  if (mainSegment === 'service' || mainSegment === 'services') {
    return {
      tab: 'services',
      slug: subSegment,
    };
  }

  if (mainSegment === 'course' || mainSegment === 'courses') {
    return {
      tab: 'courses',
      slug: subSegment,
    };
  }

  if (mainSegment === 'blog' || mainSegment === 'blogs') {
    return {
      tab: 'blog',
      slug: subSegment,
    };
  }

  const validTabs = ['home', 'about', 'services', 'projects', 'courses', 'career', 'blog', 'contact'];
  const tab = validTabs.includes(mainSegment) ? mainSegment : 'home';

  return { tab, slug: null };
}

export default function App() {
  const initialRoute = parseCurrentRoute();
  const [activeTab, setActiveTabState] = useState<string>(initialRoute.tab);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialRoute.slug);

  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [promptModalOpen, setPromptModalOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  
  const navigateTo = useCallback((tab: string, slug: string | null = null) => {
    setActiveTabState(tab);
    setSelectedSlug(slug);

    let newUrl = tab === 'home' ? '/' : `/${tab}`;
    let newHash = `#${tab}`;

    if (tab === 'services' && slug) {
      newUrl = `/services/${slug}`;
      newHash = `#services/${slug}`;
    } else if (tab === 'courses' && slug) {
      newUrl = `/courses/${slug}`;
      newHash = `#courses/${slug}`;
    } else if (tab === 'blog' && slug) {
      newUrl = `/blog/${slug}`;
      newHash = `#blog/${slug}`;
    }

    try {
      window.history.pushState({ tab, slug }, '', newUrl);
    } catch {
      
      window.location.hash = newHash;
    }
  }, []);

  
  useEffect(() => {
    const handlePopState = () => {
      const { tab, slug } = parseCurrentRoute();
      setActiveTabState(tab);
      setSelectedSlug(slug);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedSlug]);

  const handleEnrollCourse = (_course?: Course) => {
    setSelectedCourseModal(null);
    setAuthModalOpen(false);
    navigateTo('contact', null);
  };

  const handleSelectService = (service: ServiceItem | null) => {
    if (service) {
      navigateTo('services', service.slug || service.id);
    } else {
      navigateTo('services', null);
    }
  };

  
  const matchedCourse = (activeTab === 'courses' && selectedSlug)
    ? COURSES_DATA.find((c) => c.slug === selectedSlug || c.id === selectedSlug) || null
    : null;

  return (
    <div className="min-h-screen bg-[#FAFDFE] text-[#1A314C] flex flex-col font-sans antialiased selection:bg-[#107C8E] selection:text-white overflow-x-clip w-full max-w-full">
      
      {}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => navigateTo(tab, null)}
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onOpenAuthModal={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        user={user}
        onLogout={() => setUser(null)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            courses={COURSES_DATA}
            blogs={BLOGS_DATA}
            testimonials={TESTIMONIALS_DATA}
            faqs={FAQS_DATA}
            onSelectCourse={(course) => navigateTo('courses', course.slug || course.id)}
            onSelectBlog={(blog) => navigateTo('blog', blog.slug || blog.id)}
            onExploreCourses={() => navigateTo('courses', null)}
            onViewAllBlogs={() => navigateTo('blog', null)}
            onOpenPromptModal={() => setPromptModalOpen(true)}
            onNavigateToServices={() => navigateTo('services', null)}
            onSelectService={(service) => navigateTo('services', service.slug || service.id)}
            onNavigateToAbout={() => navigateTo('about', null)}
            onNavigateToProjects={() => navigateTo('projects', null)}
            onNavigateToContact={() => navigateTo('contact', null)}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
            onNavigateToContact={() => navigateTo('contact', null)}
            onSelectService={(slug) => navigateTo('services', slug)}
          />
        )}

        {activeTab === 'courses' && (
          matchedCourse ? (
            <CourseDetailPage
              course={matchedCourse}
              onBack={() => navigateTo('courses', null)}
              onEnroll={handleEnrollCourse}
            />
          ) : (
            <CoursesPage
              courses={COURSES_DATA}
              onSelectCourse={(course) => navigateTo('courses', course.slug || course.id)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )
        )}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'services' && (
          <ServicesPage
            selectedServiceSlug={selectedSlug}
            onSelectService={handleSelectService}
            onExploreCourses={() => navigateTo('courses', null)}
            onContactUs={() => navigateTo('contact', null)}
          />
        )}

        {activeTab === 'career' && (
          <CareerPage
            onContactUs={() => navigateTo('contact', null)}
            onExploreCourses={() => navigateTo('courses', null)}
          />
        )}

        {activeTab === 'blog' && (
          <BlogPage
            blogs={BLOGS_DATA}
            selectedBlogSlug={selectedSlug}
            onSelectBlogSlug={(slug) => navigateTo('blog', slug)}
            onSelectBlog={(blog) => navigateTo('blog', blog.slug || blog.id)}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {}
      <Footer
        setActiveTab={(tab) => navigateTo(tab, null)}
        onOpenPromptModal={() => setPromptModalOpen(true)}
      />

      {}
      <CourseModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onEnroll={handleEnrollCourse}
      />

      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <ClaudePromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(u) => setUser(u)}
      />

    </div>
  );
}
