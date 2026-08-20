import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './views/HomePage';
import { CoursesPage } from './views/CoursesPage';
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

// Helper to parse current path/hash into active tab and service slug
function parseCurrentRoute(): { tab: string; serviceSlug: string | null } {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const pathname = window.location.pathname.replace(/^\//, '');

  const fullPath = hash || pathname || 'home';
  const segments = fullPath.split('/').filter(Boolean);

  const mainSegment = segments[0]?.toLowerCase() || 'home';
  const subSegment = segments[1] || null;

  if (mainSegment === 'service' || mainSegment === 'services') {
    return {
      tab: 'services',
      serviceSlug: subSegment,
    };
  }

  const validTabs = ['home', 'about', 'services', 'projects', 'courses', 'career', 'blog', 'contact'];
  const tab = validTabs.includes(mainSegment) ? mainSegment : 'home';

  return { tab, serviceSlug: null };
}

export default function App() {
  const initialRoute = parseCurrentRoute();
  const [activeTab, setActiveTabState] = useState<string>(initialRoute.tab);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(initialRoute.serviceSlug);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [promptModalOpen, setPromptModalOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Synchronize URL when tab or service slug changes
  const navigateTo = useCallback((tab: string, serviceSlug: string | null = null) => {
    setActiveTabState(tab);
    setSelectedServiceSlug(serviceSlug);

    let newUrl = tab === 'home' ? '/' : `/${tab}`;
    let newHash = `#${tab}`;

    if (tab === 'services' && serviceSlug) {
      newUrl = `/services/${serviceSlug}`;
      newHash = `#services/${serviceSlug}`;
    }

    try {
      window.history.pushState({ tab, serviceSlug }, '', newUrl);
    } catch {
      // Fallback if pushState restricted in certain iframe contexts
      window.location.hash = newHash;
    }
  }, []);

  // Listen to browser navigation (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const { tab, serviceSlug } = parseCurrentRoute();
      setActiveTabState(tab);
      setSelectedServiceSlug(serviceSlug);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Scroll to top on route switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedServiceSlug]);

  const handleEnrollCourse = (course: Course) => {
    if (!user) {
      setSelectedCourse(null);
      setAuthMode('login');
      setAuthModalOpen(true);
    } else {
      alert(`Success! You have initiated enrollment in "${course.title}". Check your email (${user.email}) for portal access.`);
      setSelectedCourse(null);
    }
  };

  const handleSelectService = (service: ServiceItem | null) => {
    if (service) {
      navigateTo('services', service.slug || service.id);
    } else {
      navigateTo('services', null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFDFE] text-[#1A314C] flex flex-col font-sans antialiased selection:bg-[#107C8E] selection:text-white">
      
      {/* Global Header */}
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

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            courses={COURSES_DATA}
            blogs={BLOGS_DATA}
            testimonials={TESTIMONIALS_DATA}
            faqs={FAQS_DATA}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectBlog={(blog) => setSelectedBlog(blog)}
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
          <CoursesPage
            courses={COURSES_DATA}
            onSelectCourse={(course) => setSelectedCourse(course)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'services' && (
          <ServicesPage
            selectedServiceSlug={selectedServiceSlug}
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
            onSelectBlog={(blog) => setSelectedBlog(blog)}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={(tab) => navigateTo(tab, null)}
        onOpenPromptModal={() => setPromptModalOpen(true)}
      />

      {/* Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
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
