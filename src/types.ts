export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  type: 'video' | 'quiz' | 'assignment' | 'resource';
}

export interface Module {
  id: string;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  durationHours: number;
  lessonsCount: number;
  priceUSD: number;
  originalPriceUSD: number;
  pricePKR: number;
  image: string;
  badge?: string;
  tools?: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  whatYouWillLearn: string[];
  requirements: string[];
  modules: Module[];
  updatedDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Web3 Marketing' | 'FinTech Trends' | 'Airdrop Guides' | 'Career' | 'AI in Finance' | 'DeFi & Trading' | string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  courseTaken: string;
  content: string;
  location: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Courses' | 'Payment' | 'Coaching';
}

export interface ToolTechnology {
  name: string;
  category?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  client?: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  fullDescription: string;
  bannerHeadline: string;
  bannerDescription: string;
  accentColor?: string;
  iconName: 'blockchain' | 'devops' | 'web' | 'ecommerce' | 'mobile' | 'ai' | 'uiux' | 'digital-marketing' | 'facebook-monetization' | string;
  tools: ToolTechnology[];
  deliverablesHeading: string;
  deliverablesDescription: string;
  keyFeatures: string[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
}
