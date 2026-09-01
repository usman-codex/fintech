import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  
  {
    id: 'facebook-monetization',
    title: 'Facebook Page Monetization & In-Stream Ads Blueprint',
    slug: 'facebook-monetization',
    tagline: 'Earn sustainable monthly revenue through In-Stream Ads, Reels Performance Bonus, Stars, and Brand Collaborations.',
    description: 'Learn the exact systems to create, optimize, and monetize Facebook Pages. Master original and curated video editing, copyright policies, viral distribution loops, payout setups, and scaling multiple monetized assets globally.',
    category: 'Facebook Monetization',
    level: 'Beginner to Advanced',
    rating: 4.95,
    reviewCount: 420,
    studentCount: 3150,
    durationHours: 20,
    lessonsCount: 38,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
    badge: 'Hot & Trending',
    tools: ['Meta Creator Studio', 'Business Suite', 'CapCut Pro', 'Premiere Pro', 'Payout Bank Setups'],
    instructor: {
      name: 'Usman & Monetization Experts',
      role: 'Facebook Asset Scaling Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Complete eligibility criteria (60k minutes & 5k followers) fast-track roadmap',
      'Original & fair-use content creation and video editing techniques',
      'Fix Policy Issues (Limited Originality of Content, Yellow/Red flags, Unoriginal Content)',
      'Setup eligible international bank accounts and W-8BEN tax forms',
      'Run low-cost viral campaigns for organic reach and watch-time acceleration',
      'Manage high-ticket brand sponsorships and Stars subscriptions'
    ],
    requirements: [
      'A computer or smartphone with internet connection',
      'Basic video editing interest (tools taught from scratch)'
    ],
    modules: [
      {
        id: 'fb-mod-1',
        title: 'Module 1: Facebook Monetization Ecosystem & Policies',
        duration: '4 Hours',
        lessonsCount: 8,
        lessons: [
          { id: 'fb-l1', title: 'Partner Monetization Policies (PMP) & Content Guidelines', duration: '25m', type: 'video', isPreview: true },
          { id: 'fb-l2', title: 'In-Stream Ads vs Reels Bonus vs Subscriptions', duration: '30m', type: 'video' },
          { id: 'fb-l3', title: 'Setting Up Eligible Profiles and Pages Correctly', duration: '35m', type: 'video' },
          { id: 'fb-l4', title: 'Bypassing Geographic Restrictions & RDP/VPS Setup', duration: '40m', type: 'video' }
        ]
      },
      {
        id: 'fb-mod-2',
        title: 'Module 2: High-Retention Video Production & Viral Frameworks',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'fb-l5', title: 'The First 3-Second Hook Strategy for 70%+ Retention', duration: '35m', type: 'video' },
          { id: 'fb-l6', title: 'Editing Video Content to Pass Copyright Detection', duration: '45m', type: 'video' },
          { id: 'fb-l7', title: 'Reels Automation & Daily 3x Posting Workflows', duration: '30m', type: 'video' }
        ]
      },
      {
        id: 'fb-mod-3',
        title: 'Module 3: Payouts, Tax Clearance & Scaling Multiple Pages',
        duration: '5 Hours',
        lessonsCount: 10,
        lessons: [
          { id: 'fb-l8', title: 'Connecting Wise/Payoneer/Stripe Payouts Safely', duration: '30m', type: 'video' },
          { id: 'fb-l9', title: 'Resolving Red Flags & Appealing Disabled Monetization', duration: '40m', type: 'video' },
          { id: 'fb-l10', title: 'Automating Content Teams for 10+ Pages', duration: '35m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'seo-mastery',
    title: 'Advanced SEO Mastery: Technical, On-Page & AI Search Optimization',
    slug: 'seo-mastery',
    tagline: 'Rank #1 on Google with data-driven keyword strategies, programmatic SEO, and AI search visibility (GEO).',
    description: 'A master-level SEO curriculum covering Core Web Vitals, semantic entity-based content architecture, programmatic SEO page generation, high-authority backlink building, and optimizing for Google AI Overviews.',
    category: 'SEO Mastery',
    level: 'All Levels',
    rating: 4.92,
    reviewCount: 310,
    studentCount: 2450,
    durationHours: 22,
    lessonsCount: 44,
    priceUSD: 85,
    originalPriceUSD: 170,
    pricePKR: 24000,
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1000&q=80',
    badge: 'High ROI',
    tools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Surfer SEO', 'Google Analytics 4'],
    instructor: {
      name: 'FinTech SEO Specialists',
      role: 'Principal Search Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Master high-intent keyword clustering and search intent mapping',
      'Technical SEO audits: indexing, crawl budget, canonicalization, structured schema markup',
      'Generative Engine Optimization (GEO) for ChatGPT and Google AI Overviews',
      'Automated programmatic SEO for thousands of high-traffic landing pages',
      'White-hat guest posting, digital PR, and skyscraper link outreach'
    ],
    requirements: [
      'Basic understanding of websites or blogs',
      'No coding background required'
    ],
    modules: [
      {
        id: 'seo-mod-1',
        title: 'Module 1: Search Architecture & Modern Google Algorithms',
        duration: '5 Hours',
        lessonsCount: 10,
        lessons: [
          { id: 'seo-l1', title: 'How Google Ranks Content in the Era of AI Overviews', duration: '30m', type: 'video', isPreview: true },
          { id: 'seo-l2', title: 'Semantic Search, Entities, and Knowledge Graph Integration', duration: '40m', type: 'video' },
          { id: 'seo-l3', title: 'Keyword Clustering with Python & Sheet Formulas', duration: '35m', type: 'video' }
        ]
      },
      {
        id: 'seo-mod-2',
        title: 'Module 2: Technical Audits, Core Web Vitals & Schema',
        duration: '7 Hours',
        lessonsCount: 14,
        lessons: [
          { id: 'seo-l4', title: 'Deep Crawling with Screaming Frog & Log File Analysis', duration: '45m', type: 'video' },
          { id: 'seo-l5', title: 'JSON-LD Rich Snippet Schema Implementation', duration: '35m', type: 'video' },
          { id: 'seo-l6', title: 'Fixing Core Web Vitals (LCP, INP, CLS)', duration: '40m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'wordpress-development',
    title: 'Complete WordPress & WooCommerce Development Bootcamp',
    slug: 'wordpress-development',
    tagline: 'Build custom responsive websites, dynamic eCommerce stores, and custom Elementor/FSE themes without limits.',
    description: 'Learn WordPress from fundamental site building to advanced custom theme editing, plugin integration, WooCommerce payment gateways, speed optimization, and malware security hardening.',
    category: 'WordPress Development',
    level: 'Beginner to Intermediate',
    rating: 4.88,
    reviewCount: 290,
    studentCount: 2800,
    durationHours: 26,
    lessonsCount: 50,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    badge: 'Popular',
    tools: ['WordPress', 'Elementor Pro', 'WooCommerce', 'ACF Pro', 'WP Rocket', 'Cloudflare'],
    instructor: {
      name: 'WordPress Engineering Team',
      role: 'Senior Web Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Design modern, lightning-fast business websites using Elementor Pro and Full Site Editing',
      'Set up full WooCommerce stores with international payment gateways (Stripe, PayPal, JazzCash, EasyPaisa)',
      'Custom post types, advanced custom fields (ACF), and dynamic templates',
      '90+ Google PageSpeed optimization (caching, CDN, image WebP compression)',
      'WordPress security, backup automation, and migration across hosting servers'
    ],
    requirements: [
      'A computer with Chrome browser installed',
      'No prior coding or PHP knowledge required'
    ],
    modules: [
      {
        id: 'wp-mod-1',
        title: 'Module 1: WordPress Core Architecture & Hosting Setup',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'wp-l1', title: 'Domain, DNS, and Fast Cloud Hosting Configuration', duration: '30m', type: 'video', isPreview: true },
          { id: 'wp-l2', title: 'WordPress Dashboard, Gutenberg vs Elementor Deep Dive', duration: '40m', type: 'video' },
          { id: 'wp-l3', title: 'Building Pixel-Perfect Hero, About & Contact Pages', duration: '50m', type: 'video' }
        ]
      },
      {
        id: 'wp-mod-2',
        title: 'Module 2: Complete WooCommerce Store & Checkout Flow',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'wp-l4', title: 'Product Catalog, Variations, Inventory & Tax Rules', duration: '45m', type: 'video' },
          { id: 'wp-l5', title: 'Integrating Multi-Currency & International Payment Gateways', duration: '40m', type: 'video' },
          { id: 'wp-l6', title: 'One-Click Checkout & Abandoned Cart Recovery Sequences', duration: '35m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'digital-marketing',
    title: 'Complete Digital Marketing & Performance Growth Masterclass',
    slug: 'digital-marketing',
    tagline: 'Master high-ROI Google Ads, Meta Ads, SEO, content funnels, and data analytics to scale online revenue.',
    description: 'Transform into a full-funnel growth marketer. Learn hands-on media buying on Meta & Google Ads, technical SEO architecture, conversion rate optimization (CRO), GA4 attribution modeling, and automated email nurturing funnels.',
    category: 'Digital Marketing',
    level: 'All Levels',
    rating: 4.93,
    reviewCount: 380,
    studentCount: 3200,
    durationHours: 24,
    lessonsCount: 48,
    priceUSD: 89,
    originalPriceUSD: 180,
    pricePKR: 25000,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller',
    tools: ['Google Ads', 'Meta Ads', 'GA4', 'SEMrush', 'HubSpot', 'Mailchimp'],
    instructor: {
      name: 'Growth & Strategy Team',
      role: 'Head of Growth Marketing',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Build and scale high-converting Meta (Facebook & Instagram) & Google Search campaigns with 5x+ ROAS',
      'Conduct deep keyword research, technical SEO audits, and backlink outreach strategies',
      'Setup Google Analytics 4, Tag Manager, and custom conversion tracking dashboards',
      'Design high-converting landing pages with psychological sales copywriting and A/B split testing',
      'Automate email marketing sequences and customer relationship management (CRM) workflows'
    ],
    requirements: [
      'Basic computer and internet browsing skills',
      'No prior marketing or advertising experience needed'
    ],
    modules: [
      {
        id: 'dm-mod-1',
        title: 'Module 1: Market Research & High-Converting Offer Creation',
        duration: '4 Hours',
        lessonsCount: 8,
        lessons: [
          { id: 'dm-l1', title: 'Customer Avatars, Pain Points & Value Propositions', duration: '30m', type: 'video', isPreview: true },
          { id: 'dm-l2', title: 'Competitor Intelligence & Ad Spying Frameworks', duration: '35m', type: 'video' }
        ]
      },
      {
        id: 'dm-mod-2',
        title: 'Module 2: Media Buying on Meta & Google Ads',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'dm-l3', title: 'Campaign Budget Optimization (CBO) & Advantage+ Placements', duration: '45m', type: 'video' },
          { id: 'dm-l4', title: 'Google Performance Max (PMax) Setup & Keyword Bidding', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'fullstack-web-dev',
    title: 'Full-Stack Web Development Bootcamp (React, Next.js & Node)',
    slug: 'fullstack-web-dev',
    tagline: 'Become a job-ready full-stack software engineer building enterprise web applications with modern TypeScript.',
    description: 'Learn modern full-stack web development from scratch to production deployment. Master React 19, Next.js App Router, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, RESTful APIs, and cloud deployments.',
    category: 'Full-Stack Web Development',
    level: 'Beginner to Advanced',
    rating: 4.96,
    reviewCount: 450,
    studentCount: 3900,
    durationHours: 36,
    lessonsCount: 72,
    priceUSD: 119,
    originalPriceUSD: 240,
    pricePKR: 33000,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Career Track',
    tools: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker'],
    instructor: {
      name: 'Software Engineering Faculty',
      role: 'Principal Full-Stack Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Build reactive, fast UI interfaces using React 19, TypeScript, and Tailwind CSS',
      'Master Next.js Server Components, Server Actions, Dynamic Routing, and SEO optimization',
      'Design relational schemas with PostgreSQL and ORMs (Prisma / Drizzle)',
      'Implement JWT token authentication, OAuth 2.0 social logins, and Stripe billing',
      'Write unit tests, automated CI/CD pipelines, and containerize apps with Docker'
    ],
    requirements: [
      'Basic familiarity with HTML/CSS fundamentals',
      'A computer with minimum 8GB RAM'
    ],
    modules: [
      {
        id: 'fs-mod-1',
        title: 'Module 1: Modern React 19 & TypeScript Foundations',
        duration: '10 Hours',
        lessonsCount: 20,
        lessons: [
          { id: 'fs-l1', title: 'Modern JavaScript (ES6+), Closures, and Async/Await', duration: '40m', type: 'video', isPreview: true },
          { id: 'fs-l2', title: 'React Hooks, Custom State Management & Context API', duration: '50m', type: 'video' },
          { id: 'fs-l3', title: 'TypeScript Interfaces, Generics, and Type Safety in React', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'fs-mod-2',
        title: 'Module 2: Next.js 15 Full-Stack Architecture & Databases',
        duration: '14 Hours',
        lessonsCount: 28,
        lessons: [
          { id: 'fs-l4', title: 'App Router, Server Components & Streaming SSR', duration: '55m', type: 'video' },
          { id: 'fs-l5', title: 'PostgreSQL Relational Modeling & Prisma Migrations', duration: '60m', type: 'video' },
          { id: 'fs-l6', title: 'Securing API Endpoints, Rate Limiting & Auth Middleware', duration: '45m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'blockchain-web3',
    title: 'Full-Stack Blockchain & Smart Contract Engineering',
    slug: 'blockchain-web3',
    tagline: 'Architect decentralized protocols, DeFi vaults, NFTs, and cross-chain dApps with battle-tested security.',
    description: 'Master Solidity, EVM internals, Hardhat/Foundry development environments, gas optimization, smart contract security audits, and connecting web frontends with Wagmi and Ethers.js.',
    category: 'Blockchain & Web3',
    level: 'Intermediate to Advanced',
    rating: 4.91,
    reviewCount: 260,
    studentCount: 1850,
    durationHours: 30,
    lessonsCount: 56,
    priceUSD: 109,
    originalPriceUSD: 220,
    pricePKR: 30000,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80',
    badge: 'High Demand',
    tools: ['Solidity', 'Foundry', 'Hardhat', 'Ethers.js', 'Wagmi', 'IPFS', 'The Graph'],
    instructor: {
      name: 'Web3 Protocol Architects',
      role: 'Lead Blockchain Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Write secure, gas-efficient Solidity smart contracts (ERC-20, ERC-721, ERC-1155, ERC-4337)',
      'Automated testing & fuzzing with Foundry and Hardhat',
      'DeFi mechanisms: AMMs, staking pools, yield farming, and flash loans',
      'Smart contract audit frameworks & preventing re-entrancy and arithmetic attacks',
      'Integrate Web3 wallets (MetaMask, Coinbase, Rainbow) into modern React dApps'
    ],
    requirements: [
      'Basic JavaScript or programming experience',
      'Curiosity for decentralized financial systems'
    ],
    modules: [
      {
        id: 'bc-mod-1',
        title: 'Module 1: Blockchain Architecture, EVM & Solidity Basics',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'bc-l1', title: 'Cryptography, Wallets, and How the EVM Executes Bytecode', duration: '40m', type: 'video', isPreview: true },
          { id: 'bc-l2', title: 'Solidity Syntax, Data Types, Modifiers, and Memory Layout', duration: '50m', type: 'video' }
        ]
      },
      {
        id: 'bc-mod-2',
        title: 'Module 2: DeFi Protocols, Auditing & Frontend dApp Integration',
        duration: '12 Hours',
        lessonsCount: 24,
        lessons: [
          { id: 'bc-l3', title: 'Building an Automated Market Maker (Uniswap v2 Fork)', duration: '60m', type: 'video' },
          { id: 'bc-l4', title: 'Connecting React with Wagmi, Viem, and WalletConnect', duration: '45m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'meta-ads-mastery',
    title: 'Meta Ads & Direct-Response Media Buying Masterclass',
    slug: 'meta-ads-mastery',
    tagline: 'Master Facebook and Instagram advertising with high-converting creative testing, CBO scaling, and pixel tracking.',
    description: 'Deep dive into Meta Ads Manager. Master campaign budgeting, Advantage+ shopping campaigns, custom audience lookalikes, creative UGC scriptwriting, ROAS analytics, and scaling e-commerce & lead gen campaigns to $10k+/day spend.',
    category: 'Meta Ads',
    level: 'All Levels',
    rating: 4.94,
    reviewCount: 360,
    studentCount: 2950,
    durationHours: 18,
    lessonsCount: 36,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    badge: 'Top Rated',
    tools: ['Meta Ads Manager', 'Conversions API (CAPI)', 'Foreplay.co', 'Triple Whale', 'Canva Pro'],
    instructor: {
      name: 'Media Buying Leaders',
      role: 'Meta Certified Media Buying Professional',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Account structure: Top of Funnel (TOF), Middle (MOF), and Bottom of Funnel (BOF) setups',
      'Setting up Meta Pixel & Server-Side Conversions API (CAPI) with 10/10 Event Match Quality',
      'Creative strategy: Hooks, UGC scripts, and dynamic split testing frameworks',
      'Horizontal and vertical scaling techniques without resetting the learning phase',
      'Bypassing ad account bans, warm-up procedures, and agency BM structures'
    ],
    requirements: [
      'A Facebook account and willingness to learn advertising tools',
      'No prior ad spend experience required'
    ],
    modules: [
      {
        id: 'ma-mod-1',
        title: 'Module 1: Meta Ad Account Setup, CAPI & Pixel Tracking',
        duration: '5 Hours',
        lessonsCount: 10,
        lessons: [
          { id: 'ma-l1', title: 'Business Manager Hierarchy & Asset Protection Setup', duration: '30m', type: 'video', isPreview: true },
          { id: 'ma-l2', title: 'Server-Side Conversions API (CAPI) via Cloudflare/Stape', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'ma-mod-2',
        title: 'Module 2: Creative Testing & Scaling Strategies',
        duration: '7 Hours',
        lessonsCount: 14,
        lessons: [
          { id: 'ma-l3', title: 'Dynamic Creative Testing (DCT) for Winning Hooks', duration: '40m', type: 'video' },
          { id: 'ma-l4', title: 'Advantage+ Campaigns & Scaling Budgets with 4x+ ROAS', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'frontend-backend-web-dev',
    title: 'Frontend & Backend Web Architecture & Engineering',
    slug: 'frontend-backend-web-dev',
    tagline: 'Master both client-side modern UI frameworks and high-performance distributed backend microservices.',
    description: 'Learn modern frontend state management, CSS architectures, accessible UI systems, paired with resilient backend architecture, Node/Go APIs, relational & NoSQL databases, caching layers, and web security protocols.',
    category: 'Frontend & Backend Web',
    level: 'Intermediate',
    rating: 4.89,
    reviewCount: 220,
    studentCount: 1950,
    durationHours: 32,
    lessonsCount: 64,
    priceUSD: 105,
    originalPriceUSD: 210,
    pricePKR: 29000,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=80',
    badge: 'Comprehensive',
    tools: ['React', 'Vue.js', 'Node.js', 'Express', 'Redis', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    instructor: {
      name: 'System Architects Team',
      role: 'Senior Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Craft responsive, component-driven client applications with strict type guarantees',
      'Build high-throughput RESTful and GraphQL backend endpoints',
      'Optimize database queries with indexes, connection pooling, and Redis caching',
      'Implement OAuth2, WebSockets, background job queues (BullMQ), and file uploads',
      'Deploy scalable architectures on cloud containers'
    ],
    requirements: [
      'Basic understanding of JavaScript and web concepts',
      'Computer with code editor (VS Code)'
    ],
    modules: [
      {
        id: 'fbw-mod-1',
        title: 'Module 1: Advanced Frontend Engineering & State Systems',
        duration: '10 Hours',
        lessonsCount: 20,
        lessons: [
          { id: 'fbw-l1', title: 'Deep Dive: Virtual DOM, Hydration & Rendering Patterns', duration: '40m', type: 'video', isPreview: true },
          { id: 'fbw-l2', title: 'Global State Management: Zustand vs Redux Toolkit', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'fbw-mod-2',
        title: 'Module 2: Scalable Backend Services & Database Tuning',
        duration: '12 Hours',
        lessonsCount: 24,
        lessons: [
          { id: 'fbw-l3', title: 'Designing REST & GraphQL APIs with Express & TypeScript', duration: '50m', type: 'video' },
          { id: 'fbw-l4', title: 'Redis In-Memory Caching & Distributed Session Storage', duration: '40m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'devops-cloud',
    title: 'DevOps, Docker, Kubernetes & Multi-Cloud Infrastructure',
    slug: 'devops-cloud',
    tagline: 'Master continuous deployment, container orchestration, Terraform infrastructure as code, and cloud monitoring.',
    description: 'Learn modern DevOps automation from scratch. Master Linux server administration, Docker containerization, Kubernetes clusters, GitHub Actions CI/CD pipelines, Terraform IaC, AWS/GCP architecture, and Prometheus/Grafana observability.',
    category: 'DevOps & Cloud',
    level: 'Intermediate to Advanced',
    rating: 4.95,
    reviewCount: 310,
    studentCount: 2100,
    durationHours: 28,
    lessonsCount: 52,
    priceUSD: 109,
    originalPriceUSD: 220,
    pricePKR: 30000,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1000&q=80',
    badge: 'Enterprise',
    tools: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'GCP', 'Prometheus', 'Grafana'],
    instructor: {
      name: 'Cloud Infrastructure Guild',
      role: 'Principal DevOps Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Containerize full-stack apps with multi-stage production Dockerfiles',
      'Deploy and scale resilient Kubernetes pods, services, ingress, and Helm charts',
      'Build end-to-end GitHub Actions pipelines with automated test suites & zero-downtime rollouts',
      'Provision reproducible cloud resources with Terraform on AWS and Google Cloud',
      'Setup real-time metrics, log aggregation, and alert monitors with Grafana & Loki'
    ],
    requirements: [
      'Basic knowledge of command-line terminal and Linux commands',
      'An AWS or GCP free tier account'
    ],
    modules: [
      {
        id: 'do-mod-1',
        title: 'Module 1: Linux Administration & Production Docker',
        duration: '8 Hours',
        lessonsCount: 14,
        lessons: [
          { id: 'do-l1', title: 'Linux CLI, Bash Scripting, Permissions & SSH Keys', duration: '40m', type: 'video', isPreview: true },
          { id: 'do-l2', title: 'Building Lean Multi-Stage Docker Images for Node & Python', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'do-mod-2',
        title: 'Module 2: Kubernetes Clusters & CI/CD Pipelines',
        duration: '12 Hours',
        lessonsCount: 22,
        lessons: [
          { id: 'do-l3', title: 'K8s Deployments, ConfigMaps, Secrets, and Ingress NGINX', duration: '55m', type: 'video' },
          { id: 'do-l4', title: 'Automated CI/CD with GitHub Actions to Production Clusters', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Store Development & Shopify Mastery',
    slug: 'ecommerce-development',
    tagline: 'Launch high-converting Shopify & custom headless e-commerce stores with automated order fulfillment.',
    description: 'Learn to build, customize, and scale high-earning e-commerce stores. Master Shopify Liquid theme customization, custom apps, payment gateway setups, dropshipping logistics, inventory sync, and conversion rate optimization.',
    category: 'E-Commerce Development',
    level: 'All Levels',
    rating: 4.91,
    reviewCount: 340,
    studentCount: 2750,
    durationHours: 22,
    lessonsCount: 42,
    priceUSD: 85,
    originalPriceUSD: 170,
    pricePKR: 24000,
    image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1000&q=80',
    badge: 'High Earning',
    tools: ['Shopify', 'Liquid', 'WooCommerce', 'Klaviyo', 'Judge.me', 'Stripe'],
    instructor: {
      name: 'E-Commerce Specialists',
      role: 'Shopify Plus Partner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Build customized Shopify stores with 2.0 sections, metafields, and Liquid code',
      'Optimize product landing pages for 4%+ conversion rates and high average order value (AOV)',
      'Connect international payment gateways (Stripe, PayPal, local cod gateways)',
      'Set up automated email flows (Abandoned cart, Welcome series, Post-purchase upsell) with Klaviyo',
      'Source winning products and automate fulfillment with reliable suppliers'
    ],
    requirements: [
      'A computer with web browser',
      'No prior programming knowledge required'
    ],
    modules: [
      {
        id: 'ec-mod-1',
        title: 'Module 1: Shopify 2.0 Theme Customization & Store Setup',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'ec-l1', title: 'Store Creation, Domain Setup, and High-Converting Theme Selection', duration: '35m', type: 'video', isPreview: true },
          { id: 'ec-l2', title: 'Editing Shopify Liquid Code & Custom CSS Styling', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'ec-mod-2',
        title: 'Module 2: Conversions, Gateways & Retention Email Marketing',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'ec-l3', title: 'Payment Gateways & International Checkout Optimization', duration: '40m', type: 'video' },
          { id: 'ec-l4', title: 'Building Automated Klaviyo Revenue Flows', duration: '45m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'b2b-business-lead-gen',
    title: 'B2B Business Acquisition & Cold Outreach Lead Generation',
    slug: 'b2b-business-lead-gen',
    tagline: 'Book qualified client meetings on autopilot through LinkedIn, automated cold email, and sales pipelines.',
    description: 'Master B2B client acquisition. Learn list building, email deliverability protocols (DKIM/DMARC/SPF), cold outreach copywriting that gets 30%+ open rates, LinkedIn automation, high-ticket sales closing, and CRM management.',
    category: 'B2B Business',
    level: 'All Levels',
    rating: 4.93,
    reviewCount: 280,
    studentCount: 2300,
    durationHours: 18,
    lessonsCount: 34,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    badge: 'Agency Track',
    tools: ['Apollo.io', 'Instantly.ai', 'LinkedIn Sales Navigator', 'HubSpot CRM', 'Lemlist'],
    instructor: {
      name: 'B2B Sales Executives',
      role: 'Enterprise Client Acquisition Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Scrape targeted decision-maker emails using Apollo.io and Sales Navigator',
      'Set up secondary domains, Google Workspace/Outlook inboxes, and warm-up engines',
      'Write personalized cold email scripts with high response rates and zero spam triggers',
      'Conduct effective discovery calls and close $2,000+ monthly retainer contracts',
      'Build automated CRM pipelines to nurture prospects from lead to closed-won'
    ],
    requirements: [
      'Basic communication skills in English',
      'A computer and an email account'
    ],
    modules: [
      {
        id: 'b2b-mod-1',
        title: 'Module 1: Prospecting & Lead Data Scraping',
        duration: '5 Hours',
        lessonsCount: 10,
        lessons: [
          { id: 'b2b-l1', title: 'Defining Ideal Customer Profile (ICP) & Offer Positioning', duration: '30m', type: 'video', isPreview: true },
          { id: 'b2b-l2', title: 'Scraping Verified Emails with Apollo.io and Clay.com', duration: '40m', type: 'video' }
        ]
      },
      {
        id: 'b2b-mod-2',
        title: 'Module 2: Cold Email Infrastructure & Sales Closing',
        duration: '7 Hours',
        lessonsCount: 14,
        lessons: [
          { id: 'b2b-l3', title: 'Domain DNS Setup (SPF, DKIM, DMARC, MX) & Instantly Warmup', duration: '45m', type: 'video' },
          { id: 'b2b-l4', title: 'Cold Call & Discovery Call Script to Close $3k+ Clients', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'ai-creation-automation',
    title: 'AI Automation & No-Code Workflow Engineering',
    slug: 'ai-creation-automation',
    tagline: 'Build intelligent automated business workflows, AI voice agents, and AI chatbots with Make.com and n8n.',
    description: 'Learn to automate business operations using AI models and workflow engines. Master Make.com, Zapier, n8n, OpenAI/Gemini API integrations, Webhooks, automated CRM updates, and autonomous AI customer support bots.',
    category: 'AI Creation',
    level: 'Beginner to Intermediate',
    rating: 4.96,
    reviewCount: 390,
    studentCount: 3400,
    durationHours: 22,
    lessonsCount: 42,
    priceUSD: 89,
    originalPriceUSD: 180,
    pricePKR: 25000,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80',
    badge: 'Futuristic',
    tools: ['Make.com', 'n8n', 'OpenAI API', 'Gemini API', 'Voiceflow', 'Vapi.ai', 'Airtable'],
    instructor: {
      name: 'AI Solutions Team',
      role: 'Lead AI Automation Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Connect 100+ business apps without code using Make.com, n8n, and webhooks',
      'Integrate LLM API calls to process, summarize, and route customer queries dynamically',
      'Build conversational AI chatbots on WhatsApp, Instagram DM, and website widgets',
      'Deploy autonomous AI voice callers for appointment booking with Vapi.ai',
      'Package and sell AI Automation Agency (AAA) services to global businesses'
    ],
    requirements: [
      'No programming background required',
      'Computer with internet connection'
    ],
    modules: [
      {
        id: 'ai-aut-mod-1',
        title: 'Module 1: Workflow Engines & Webhook Fundamentals',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'ai-l1', title: 'Make.com & n8n Architecture, Triggers & Routers', duration: '35m', type: 'video', isPreview: true },
          { id: 'ai-l2', title: 'JSON Data Structures, Webhooks, and API Requests', duration: '40m', type: 'video' }
        ]
      },
      {
        id: 'ai-aut-mod-2',
        title: 'Module 2: Custom AI Agents & Client Deployments',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'ai-l3', title: 'Building Multi-Step AI Customer Support Bots with Voiceflow', duration: '50m', type: 'video' },
          { id: 'ai-l4', title: 'Connecting AI Calling Agents with Twilio & Cal.com', duration: '45m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'content-creation-video-editing',
    title: 'Content Creation & Pro Video Editing (Premiere Pro & CapCut)',
    slug: 'content-creation-video-editing',
    tagline: 'Master storytelling, viral short-form editing, color grading, sound design, and YouTube channel growth.',
    description: 'Transform raw footage into viral masterpieces. Learn Adobe Premiere Pro, After Effects motion graphics, CapCut Pro short-form hacks, sound design with Foley, audio mastering, and building a sustainable creator brand across TikTok & YouTube.',
    category: 'Content Creation',
    level: 'All Levels',
    rating: 4.90,
    reviewCount: 310,
    studentCount: 2600,
    durationHours: 24,
    lessonsCount: 46,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
    badge: 'Creator Special',
    tools: ['Adobe Premiere Pro', 'After Effects', 'CapCut Pro', 'DaVinci Resolve', 'Audition'],
    instructor: {
      name: 'Creative Studio Leads',
      role: 'Executive Video Producer & Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Master video pacing, visual rhythm, jump cuts, and smooth J/L cuts',
      'Animate dynamic captions, kinetic typography, and sound effects for viral Reels & TikToks',
      'Professional color correction and cinematic LUT grading',
      'Create YouTube thumbnails with high CTR and design narrative video scripts',
      'Monetize video editing skills as a high-earning freelance remote editor'
    ],
    requirements: [
      'A computer or laptop capable of running editing software',
      'Premiere Pro or CapCut (Free version is suitable to start)'
    ],
    modules: [
      {
        id: 'cc-mod-1',
        title: 'Module 1: Video Editing Foundations & Storyboarding',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'cc-l1', title: 'Timeline Setup, Keyframing, and Keyboard Shortcuts', duration: '35m', type: 'video', isPreview: true },
          { id: 'cc-l2', title: 'The Retention Editing Playbook: Zooms, B-Roll & Transitions', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'cc-mod-2',
        title: 'Module 2: Sound Design, Kinetic Text & Color Grading',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'cc-l3', title: 'Audio Layering, EQ, Whooshes, and Risers', duration: '40m', type: 'video' },
          { id: 'cc-l4', title: 'Cinematic Color Grading in DaVinci Resolve & Premiere', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'graphic-design-mastery',
    title: 'Professional Graphic Design & Brand Identity Mastery',
    slug: 'graphic-design-mastery',
    tagline: 'Master Photoshop, Illustrator, Figma, typography, color theory, and corporate brand identity design.',
    description: 'Learn graphic design from artistic principles to industry-grade client deliverables. Master Adobe Photoshop manipulation, Adobe Illustrator vector branding, logo design, packaging, marketing creatives, and modern UI mockups in Figma.',
    category: 'Graphic Designing',
    level: 'All Levels',
    rating: 4.92,
    reviewCount: 350,
    studentCount: 3100,
    durationHours: 26,
    lessonsCount: 50,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
    badge: 'Creative Arts',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'InDesign', 'Canva Pro'],
    instructor: {
      name: 'Design Studio Directors',
      role: 'Senior Brand Identity Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Master typography hierarchies, color harmonies, grids, and composition theory',
      'Create modern logos, vector icons, and comprehensive brand identity style guides',
      'Perform advanced photo manipulation, retouching, and lighting effects in Photoshop',
      'Design high-converting social media creatives, ad banners, and pitch decks',
      'Build a standout design portfolio and attract international clients on Upwork/Fiverr'
    ],
    requirements: [
      'A computer with Adobe Creative Cloud or Figma installed',
      'No prior art or drawing talent needed'
    ],
    modules: [
      {
        id: 'gd-mod-1',
        title: 'Module 1: Design Principles, Color & Typography',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'gd-l1', title: 'Visual Hierarchy, Balance, and Grid Systems', duration: '30m', type: 'video', isPreview: true },
          { id: 'gd-l2', title: 'Vector Illustration & Pen Tool Mastery in Illustrator', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'gd-mod-2',
        title: 'Module 2: Photo Manipulation & Corporate Branding',
        duration: '10 Hours',
        lessonsCount: 20,
        lessons: [
          { id: 'gd-l3', title: 'Photoshop Masking, Retouching, and Lighting Compositing', duration: '50m', type: 'video' },
          { id: 'gd-l4', title: 'Designing a Complete Brand Identity Kit (Logo, Colors, Stationery)', duration: '55m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'ai-llm-agents',
    title: 'AI Engineering, LLMs & Autonomous Agents Bootcamp',
    slug: 'ai-llm-agents',
    tagline: 'Build real-world generative AI applications with LangChain, LlamaIndex, RAG architectures, and fine-tuned models.',
    description: 'A hands-on AI engineering bootcamp. Master Gemini and OpenAI APIs, prompt engineering, vector databases (Pinecone/Chroma), Retrieval-Augmented Generation (RAG), LangChain, LangGraph multi-agent teams, and deploying AI models to production.',
    category: 'AI & LLM',
    level: 'Intermediate to Advanced',
    rating: 4.97,
    reviewCount: 380,
    studentCount: 2900,
    durationHours: 32,
    lessonsCount: 60,
    priceUSD: 119,
    originalPriceUSD: 240,
    pricePKR: 33000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    badge: 'Next-Gen AI',
    tools: ['Gemini 2.5/3.0', 'OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB', 'Python', 'FastAPI'],
    instructor: {
      name: 'AI Research Faculty',
      role: 'Principal Generative AI Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Master prompt engineering techniques (Few-Shot, Chain-of-Thought, ReAct pattern)',
      'Build production RAG pipelines over company PDFs, databases, and private docs',
      'Implement multi-agent autonomous teams with LangGraph and CrewAI',
      'Optimize vector embeddings, hybrid semantic search, and re-ranking algorithms',
      'Deploy performant AI microservices with FastAPI, streaming responses, and token cost caching'
    ],
    requirements: [
      'Basic Python programming knowledge',
      'Familiarity with fundamental API concepts'
    ],
    modules: [
      {
        id: 'llm-mod-1',
        title: 'Module 1: LLM APIs, Embeddings & RAG Architecture',
        duration: '10 Hours',
        lessonsCount: 20,
        lessons: [
          { id: 'llm-l1', title: 'Gemini & OpenAI API Integration, Structured JSON Outputs', duration: '40m', type: 'video', isPreview: true },
          { id: 'llm-l2', title: 'Vector Embeddings, Chunking Strategies & Pinecone Indexing', duration: '50m', type: 'video' },
          { id: 'llm-l3', title: 'Production RAG: Context Windows, Re-Ranking, and Hallucination Checks', duration: '55m', type: 'video' }
        ]
      },
      {
        id: 'llm-mod-2',
        title: 'Module 2: Autonomous Agents & Multi-Agent Workflows',
        duration: '12 Hours',
        lessonsCount: 24,
        lessons: [
          { id: 'llm-l4', title: 'Building Tool-Calling Agents with Function Calling', duration: '50m', type: 'video' },
          { id: 'llm-l5', title: 'LangGraph & CrewAI: Collaborative Multi-Agent Systems', duration: '60m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'mobile-app-dev',
    title: 'Cross-Platform Mobile App Development (React Native & Flutter)',
    slug: 'mobile-app-dev',
    tagline: 'Build and deploy native iOS & Android applications with seamless animations, offline sync, and app store deployment.',
    description: 'Learn cross-platform mobile engineering. Master React Native (Expo) and Flutter, state management, native camera/location device APIs, push notifications, offline local SQLite storage, Firebase backend integration, and publishing to Apple App Store & Google Play.',
    category: 'Mobile App Development',
    level: 'Beginner to Advanced',
    rating: 4.93,
    reviewCount: 310,
    studentCount: 2400,
    durationHours: 30,
    lessonsCount: 58,
    priceUSD: 105,
    originalPriceUSD: 210,
    pricePKR: 29000,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Mobile Pro',
    tools: ['React Native', 'Expo', 'Flutter', 'Dart', 'Firebase', 'Redux', 'Xcode', 'Android Studio'],
    instructor: {
      name: 'Mobile Engineering Team',
      role: 'Lead iOS & Android Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Build native iOS and Android apps with a single modern codebase',
      'Implement smooth touch gestures, physics animations, and dark/light modes',
      'Integrate device hardware (Camera, GPS Location, Biometric FaceID, Accelerometer)',
      'Setup real-time push notifications with Firebase Cloud Messaging (FCM)',
      'Prepare and submit apps to Apple App Store and Google Play Store'
    ],
    requirements: [
      'Basic JavaScript or Dart programming knowledge',
      'A Windows, Mac, or Linux computer'
    ],
    modules: [
      {
        id: 'mob-mod-1',
        title: 'Module 1: React Native / Expo Fundamentals & Navigation',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'mob-l1', title: 'Expo CLI, Component Styling, and Flexbox Mobile Layouts', duration: '35m', type: 'video', isPreview: true },
          { id: 'mob-l2', title: 'React Navigation: Tabs, Stack & Drawer Navigation', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'mob-mod-2',
        title: 'Module 2: Device APIs, Firebase & App Store Deployment',
        duration: '12 Hours',
        lessonsCount: 24,
        lessons: [
          { id: 'mob-l3', title: 'Device Camera, Image Pickers & Geolocation Permissions', duration: '40m', type: 'video' },
          { id: 'mob-l4', title: 'Building Production APK / IPA & Play Store Submissions', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'paid-ads-fb-tiktok',
    title: 'Paid Advertising Omnichannel Mastery (Meta, TikTok & Google Ads)',
    slug: 'paid-ads-fb-tiktok',
    tagline: 'Dominate multi-channel paid traffic. Scale e-commerce and lead funnels profitably on Facebook, TikTok & Google.',
    description: 'A complete paid traffic masterclass. Master media buying across Facebook, Instagram, TikTok Ads Manager, and Google Search/Shopping. Learn viral Spark Ads, bid strategies, cross-channel attribution, pixel setups, and scaling campaigns profitably.',
    category: 'Paid Ads',
    level: 'All Levels',
    rating: 4.95,
    reviewCount: 370,
    studentCount: 3100,
    durationHours: 24,
    lessonsCount: 48,
    priceUSD: 89,
    originalPriceUSD: 180,
    pricePKR: 25000,
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=80',
    badge: 'High Impact',
    tools: ['TikTok Ads Manager', 'Meta Ads Manager', 'Google Ads', 'Triple Whale', 'Canva'],
    instructor: {
      name: 'Paid Media Strategists',
      role: 'Senior Media Buyer & Growth Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Launch viral TikTok Spark Ads that blend seamlessly with organic user content',
      'Scale Meta Advantage+ campaigns with disciplined bidding and budget scaling rules',
      'Capture high-intent buyers on Google Search and Performance Max networks',
      'Solve iOS tracking discrepancies with first-party server-side tracking and attribution tools',
      'Structure profitable client media buying retainers and charge percentage of ad spend'
    ],
    requirements: [
      'Basic understanding of online shopping and social media',
      'No prior ad management background required'
    ],
    modules: [
      {
        id: 'pa-mod-1',
        title: 'Module 1: TikTok Ads Strategy & Viral Creative Testing',
        duration: '6 Hours',
        lessonsCount: 12,
        lessons: [
          { id: 'pa-l1', title: 'TikTok Ads Manager Structure, Pixel Setup & Event Tracking', duration: '35m', type: 'video', isPreview: true },
          { id: 'pa-l2', title: 'Scripting Organic-Style TikTok Ads with High Conversions', duration: '40m', type: 'video' }
        ]
      },
      {
        id: 'pa-mod-2',
        title: 'Module 2: Multi-Platform Scaling & Attribution Systems',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'pa-l3', title: 'Cross-Channel Retargeting & Omnichannel Audience Sync', duration: '45m', type: 'video' },
          { id: 'pa-l4', title: 'Scaling to $5,000+/Day Spend while Maintaining Positive ROAS', duration: '50m', type: 'video' }
        ]
      }
    ]
  },

  
  {
    id: 'web-development-architecture',
    title: 'Modern Web Development & Software Architecture',
    slug: 'web-development-architecture',
    tagline: 'Master semantic web architecture, modern CSS, JavaScript, performance optimization, and responsive design.',
    description: 'A thorough engineering foundation in modern web development. Master HTML5 semantic structures, CSS3 responsive grid/flexbox systems, modern JavaScript (ES6+), clean code principles, browser developer tools, accessibility (a11y), and web performance metrics.',
    category: 'Web Development',
    level: 'Beginner to Intermediate',
    rating: 4.88,
    reviewCount: 290,
    studentCount: 2700,
    durationHours: 24,
    lessonsCount: 48,
    priceUSD: 79,
    originalPriceUSD: 160,
    pricePKR: 22000,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
    badge: 'Foundation',
    tools: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Git', 'GitHub', 'Tailwind CSS', 'Vite'],
    instructor: {
      name: 'Web Engineering Faculty',
      role: 'Lead Web Technology Instructor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Write clean, accessible, and semantic HTML5 and modern CSS3 layouts',
      'Master JavaScript logic: loops, DOM manipulation, events, promises, and fetch API',
      'Utilize Git and GitHub for version control and collaborative team development',
      'Build responsive, mobile-first web pages using Tailwind CSS and CSS Grid',
      'Optimize web performance, asset compression, and deploy static sites for free'
    ],
    requirements: [
      'A computer with internet access',
      'No prior programming knowledge required'
    ],
    modules: [
      {
        id: 'wd-mod-1',
        title: 'Module 1: Semantic HTML5, Modern CSS3 & Tailwind CSS',
        duration: '8 Hours',
        lessonsCount: 16,
        lessons: [
          { id: 'wd-l1', title: 'Semantic Web, Document Object Model (DOM), and SEO Basics', duration: '35m', type: 'video', isPreview: true },
          { id: 'wd-l2', title: 'Flexbox vs CSS Grid: Building Responsive Layouts', duration: '45m', type: 'video' }
        ]
      },
      {
        id: 'wd-mod-2',
        title: 'Module 2: JavaScript Mastery & Real-World Projects',
        duration: '10 Hours',
        lessonsCount: 20,
        lessons: [
          { id: 'wd-l3', title: 'Variables, Functions, Arrays, Objects & ES6 Modules', duration: '45m', type: 'video' },
          { id: 'wd-l4', title: 'Fetching REST APIs, Async Operations & DOM Manipulation', duration: '50m', type: 'video' }
        ]
      }
    ]
  }
];
