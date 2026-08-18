import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'blockchain-development',
    slug: 'blockchain-development',
    shortTitle: 'Blockchain Development',
    title: 'Blockchain Development',
    shortDescription: 'Blockchain is the backbone technology of digital cryptocurrency Bitcoin. We have a team of blockchain developers dedicated to ensuring accurate deployment.',
    fullDescription: 'Blockchain is the backbone Technology of Digital CryptoCurrency BitCoin. A distributed database of records of all transactions. We have a team of Blockchain developers to make the deployment correct.',
    bannerHeadline: 'Decentralized Infrastructure: Enterprise Smart Contracts & Blockchain Engineering',
    bannerDescription: 'Accelerate your transition into Web3 with institutional-grade decentralized protocols, audited smart contracts, tokenized asset ecosystems, and cross-chain dApps built for scale, compliance, and impenetrable security.',
    accentColor: '#107C8E',
    iconName: 'blockchain',
    tools: [
      { name: 'Solana', color: '#14F195' },
      { name: 'Avalanche', color: '#E84142' },
      { name: 'Ethereum', color: '#627EEA' },
      { name: 'Cardano', color: '#0033AD' },
      { name: 'Polkadot', color: '#E6007A' },
      { name: 'Polygon', color: '#8247E5' }
    ],
    deliverablesHeading: 'Next-Generation Web3 Architectures & Audited Smart Contract Deployment',
    deliverablesDescription: 'We deliver comprehensive blockchain development services ranging from layer-1/layer-2 custom smart contract architectures to decentralized finance (DeFi) primitives, token staking platforms, and institutional custody integrations.',
    keyFeatures: [
      'Custom EVM and Rust Smart Contract Architecture & Security Auditing',
      'Decentralized Autonomous Organization (DAO) Governance & Voting Frameworks',
      'High-Throughput Liquidity Vaults, Yield Optimizers & Staking Protocols',
      'Gas-Optimized Token Standards (ERC-20, ERC-721, ERC-1155, SPL)',
      'Cross-Chain Bridge Interfaces & Secure Multi-Sig Wallet Infrastructure',
      'Institutional Web3 Compliance, AML On-Chain Monitoring & Verification'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Protocol Architecture & Tokenomics',
        description: 'Mathematical modeling of economic incentives, governance mechanics, consensus selection, and threat surface modeling.'
      },
      {
        number: '02',
        title: 'Smart Contract Engineering',
        description: 'Writing gas-efficient, battle-tested Solidity/Rust contracts with 100% automated branch and mutation test coverage.'
      },
      {
        number: '03',
        title: 'Formal Verification & Security Audit',
        description: 'Static analysis, symbolic execution, and peer manual code audits to eliminate reentrancy and oracle vector risks.'
      },
      {
        number: '04',
        title: 'Testnet Staging & Mainnet Launch',
        description: 'Multi-stage testnet validation with simulated traffic, oracle feeds, and coordinated zero-downtime mainnet deployment.'
      }
    ]
  },
  {
    id: 'devops-development',
    slug: 'devops-development',
    shortTitle: 'DevOps Development',
    title: 'DevOps & Cloud Services',
    shortDescription: 'We possess deep knowledge and extensive experience with cloud services, CI/CD pipelines, containerization, and automated infrastructure deployment.',
    fullDescription: 'We possess deep knowledge and extensive experience with cloud services, CI/CD pipelines, automated testing, container orchestration and robust cloud infrastructure.',
    bannerHeadline: 'Accelerate Delivery with Resilient Cloud Infrastructure & Automated CI/CD',
    bannerDescription: 'Eliminate downtime, streamline feature shipping, and scale infrastructure on demand with automated Kubernetes clusters, zero-trust cloud security, and robust DevOps automation.',
    accentColor: '#107C8E',
    iconName: 'devops',
    tools: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Kubernetes', color: '#326CE5' },
      { name: 'Jenkins', color: '#D24939' },
      { name: 'Terraform', color: '#844FBA' },
      { name: 'GitHub Actions', color: '#2088FF' }
    ],
    deliverablesHeading: 'Enterprise Cloud Modernization and Zero-Downtime Pipeline Engineering',
    deliverablesDescription: 'Our cloud architects design and maintain fault-tolerant, auto-scaling infrastructure pipelines that empower your engineering teams to ship code with velocity and confidence.',
    keyFeatures: [
      'Automated Multi-Stage CI/CD Deployment Pipelines (GitHub Actions / Jenkins)',
      'Infrastructure as Code (IaC) with Terraform, CloudFormation, and Pulumi',
      'Kubernetes (EKS/GKE) Cluster Orchestration & Microservice Service Meshes',
      'Zero-Trust Cloud Security Architecture, IAM Policies, and Secret Management',
      '24/7 Centralized Observability, APM Metrics, Distributed Tracing & Alerting',
      'Multi-Cloud Disaster Recovery Strategies & Auto-Scaling Cost Optimization'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Infrastructure & Bottleneck Audit',
        description: 'Detailed assessment of current deployment cadence, server utilization, security postures, and downtime vulnerabilities.'
      },
      {
        number: '02',
        title: 'IaC & Containerization Blueprint',
        description: 'Declarative definition of all cloud resources using Terraform and containerizing microservices with Docker.'
      },
      {
        number: '03',
        title: 'Automated CI/CD Pipeline Build',
        description: 'Configuring automated linting, security scans, unit tests, artifact caching, and zero-downtime rolling deployments.'
      },
      {
        number: '04',
        title: 'Monitoring & Continuous Reliability',
        description: 'Deploying real-time Prometheus, Grafana, and Datadog dashboards with automated anomaly alerts.'
      }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    shortTitle: 'Web Development',
    title: 'Web Development',
    shortDescription: 'We are a creative web development team, who aim to leverage the latest technological advances with thoughtful design and serious engineering to build tailored solutions for our clients.',
    fullDescription: 'We are a creative web development team, who aim to leverage the latest technological advances with thoughtful design and serious engineering to build tailored solutions for our clients.',
    bannerHeadline: 'Elevate Your Online Presence: Expert Web App Development Services',
    bannerDescription: 'Transform your ideas into reality with our exceptional web app development services. Our seasoned team crafts tailored solutions that seamlessly blend innovation and functionality. From concept to deployment, we prioritize cutting-edge technologies and rigorous quality assurance to ensure your web app stands out. Trust Zweidevs to deliver a robust and user-centric online experience, enhancing your brand\'s digital footprint.',
    accentColor: '#107C8E',
    iconName: 'web',
    tools: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Python', color: '#3776AB' },
      { name: 'React', color: '#61DAFB' },
      { name: 'SQLite', color: '#003B57' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'Ionic', color: '#3880FF' },
      { name: 'Ruby on Rails', color: '#CC0000' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'Next.js', color: '#000000' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Nuxt', color: '#00DC82' }
    ],
    deliverablesHeading: 'Custom Web Applications and Dedicated Support for Your Success!',
    deliverablesDescription: 'From high-traffic portals to real-time financial dashboards and complex SaaS platforms, we architect robust web applications with clean modular codebases, lightning-fast rendering, and intuitive user experiences.',
    keyFeatures: [
      'High-Performance Single Page Applications (SPAs) & Server-Side Rendered Portals',
      'Resilient RESTful & GraphQL API Architectures with Microservice Connectivity',
      'Real-Time WebSocket Data Streams for Financial Charts & Collaborative Tools',
      'Rigorous Web Accessibility (WCAG 2.1 AA) and Cross-Browser Optimization',
      'Database Modeling, Index Tuning & High-Concurrency Caching Layers',
      'Enterprise Role-Based Access Control (RBAC), OAuth 2.0 & Multi-Factor Auth'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Discovery & System Architecture',
        description: 'Mapping user personas, technical requirements, data flow schemas, and selecting the optimal technology stack.'
      },
      {
        number: '02',
        title: 'Interactive UI/UX & Prototyping',
        description: 'Crafting responsive wireframes and pixel-perfect design systems with interactive usability previews.'
      },
      {
        number: '03',
        title: 'Full-Stack Agile Development',
        description: 'Iterative sprint delivery with continuous client feedback, rigorous type safety, and clean code standards.'
      },
      {
        number: '04',
        title: 'Quality Assurance & Production Release',
        description: 'End-to-end automated testing, load testing under peak concurrency, SEO optimization, and live deployment.'
      }
    ]
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    shortTitle: 'Ecommerce Development',
    title: 'Ecommerce Development',
    shortDescription: 'Build high-converting, scalable e-commerce platforms and automated payment gateways tailored to modern digital trade and customer satisfaction.',
    fullDescription: 'Build high-converting, scalable e-commerce platforms and automated payment gateways tailored to modern digital trade, global checkout performance, and frictionless buyer experiences.',
    bannerHeadline: 'High-Velocity Online Storefronts & Secure Global Merchant Infrastructure',
    bannerDescription: 'Drive exponential conversion rates, integrate real-time inventory systems, and deploy headless commerce experiences customized for high-volume transactions, multi-currency checkouts, and seamless customer engagement.',
    accentColor: '#107C8E',
    iconName: 'ecommerce',
    tools: [
      { name: 'Shopify', color: '#96BF48' },
      { name: 'WooCommerce', color: '#96588A' },
      { name: 'Magento', color: '#EE672F' },
      { name: 'Stripe', color: '#635BFF' },
      { name: 'PayPal', color: '#00457C' },
      { name: 'BigCommerce', color: '#121118' }
    ],
    deliverablesHeading: 'Scalable Merchant Platforms and Multi-Currency Checkout Architectures',
    deliverablesDescription: 'We build enterprise online stores engineered for frictionless user experiences, high-speed page loads, instant search & filtering, and conversion-optimized checkout funnels.',
    keyFeatures: [
      'Headless & Custom E-Commerce Architectures with Sub-Second Page Speeds',
      'Global Multi-Currency Payment Gateway Integration (Stripe, Apple Pay, PayPal)',
      'Automated Real-Time Inventory Tracking, ERP & Warehouse Synchronization',
      'AI-Powered Product Recommendations, Smart Search & Upsell Funnels',
      'PCI-DSS Compliant Security, Fraud Detection & Tokenized Checkout Flows',
      'Custom B2B / B2C Wholesale Portals with Tiered Pricing & Invoicing'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Commerce Strategy & Funnel Mapping',
        description: 'Analyzing buyer behavior, product catalog architecture, tax/shipping logic, and conversion optimization targets.'
      },
      {
        number: '02',
        title: 'Storefront Design & Cart UX',
        description: 'Designing intuitive product grids, 1-click checkout mechanisms, and frictionless mobile purchasing flows.'
      },
      {
        number: '03',
        title: 'Backend Integration & Gateway Setup',
        description: 'Integrating inventory feeds, payment gateways, CRM tools, shipping APIs, and automated transactional emails.'
      },
      {
        number: '04',
        title: 'Stress Testing & Launch',
        description: 'Simulating flash-sale traffic spikes, verifying end-to-end payment settlement, and launching the store live.'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    shortTitle: 'Mobile App Development',
    title: 'Mobile App Development',
    shortDescription: 'We develop sleek looking native and hybrid mobile apps for iOS & Android to ensure customer satisfaction and performance at the core.',
    fullDescription: 'We develop sleek looking native and hybrid mobile apps for iOS & Android to ensure the customer satisfaction and performance at the core.',
    bannerHeadline: 'Intuitive Mobile Engineering: Native & Cross-Platform iOS & Android Apps',
    bannerDescription: 'From consumer fintech wallets to enterprise operational dashboards, we engineer fluid, high-performance mobile applications designed to captivate and retain users across both App Store and Google Play.',
    accentColor: '#107C8E',
    iconName: 'mobile',
    tools: [
      { name: 'Android', color: '#3DDC84' },
      { name: 'iOS', color: '#000000' },
      { name: 'React Native', color: '#61DAFB' },
      { name: 'SQLite', color: '#003B57' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Ionic', color: '#3880FF' },
      { name: 'Flutter', color: '#02569B' }
    ],
    deliverablesHeading: 'Feature-Rich Mobile Applications with Offline-First Reliability',
    deliverablesDescription: 'Our mobile engineers build fluid, responsive apps that leverage hardware sensors, biometric authentication, push notifications, and offline-first state synchronization for maximum engagement.',
    keyFeatures: [
      'Cross-Platform Codebases with React Native & Flutter for Rapid Market Entry',
      'Native Swift & Kotlin Module Optimization for High-Compute Tasks',
      'Biometric Authentication (FaceID / Fingerprint) & Hardware Key Storage',
      'Offline-First Data Caching with Background Cloud Synchronization',
      'Interactive Push Notifications, In-App Messaging & Deep Linking',
      'App Store (iOS) & Google Play Store Submission and Compliance Management'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Mobile Architecture & Platform Strategy',
        description: 'Evaluating native vs. cross-platform trade-offs, device compatibility, and offline sync requirements.'
      },
      {
        number: '02',
        title: 'Native-Feel Mobile UX & Gestures',
        description: 'Prototyping fluid micro-interactions, haptic feedback, and responsive touch layouts conforming to Apple & Material guidelines.'
      },
      {
        number: '03',
        title: 'Iterative Mobile App Build',
        description: 'Building features in testable milestones with regular TestFlight and APK test builds distributed to your team.'
      },
      {
        number: '04',
        title: 'Store Publishing & Analytics',
        description: 'Handling store review submissions, screenshot assets, crash monitoring setup, and post-launch updates.'
      }
    ]
  },
  {
    id: 'ai-ml-development',
    slug: 'ai-ml-development',
    shortTitle: 'AI & Machine Learning',
    title: 'Artificial Intelligence & Machine Learning',
    shortDescription: 'We provide services to augment your existing platforms and solutions with the power of computer vision, data visualizations, predictive analysis and more.',
    fullDescription: 'We provide services to augment your existing platforms and solutions with the power of computer vision, data visualizations, predictive analysis and more.',
    bannerHeadline: 'Intelligent Systems: Custom Generative AI & Predictive Machine Learning',
    bannerDescription: 'Harness enterprise AI models, autonomous agents, computer vision, and real-time predictive analytics to automate complex business workflows and deliver personalized customer intelligence.',
    accentColor: '#107C8E',
    iconName: 'ai',
    tools: [
      { name: 'PyTorch', color: '#EE4C2C' },
      { name: 'Keras', color: '#D00000' },
      { name: 'OpenNN', color: '#2B84D2' },
      { name: 'OpenAI', color: '#412991' },
      { name: 'TensorFlow', color: '#FF6F00' },
      { name: 'Scikit-Learn', color: '#F7931E' }
    ],
    deliverablesHeading: 'Custom AI Agents, Neural Networks, and Predictive Big Data Systems',
    deliverablesDescription: 'We transform raw organizational data into proactive decision engines, natural language interfaces, automated document extractors, and predictive financial models.',
    keyFeatures: [
      'Custom LLM Fine-Tuning, Retrieval-Augmented Generation (RAG) & Vector Stores',
      'Predictive Financial Time-Series Modeling & Risk Forecasting Algorithms',
      'Computer Vision for Automated Document Inspection, OCR & Biometric ID',
      'Autonomous Multi-Agent Systems for Workflow Automation & Customer Care',
      'Real-Time Anomaly Detection for Anti-Fraud & Cyber Security Monitoring',
      'Secure On-Premise & Cloud AI Model Serving with Low-Latency Inference'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Data Ingestion & Feasibility Analysis',
        description: 'Auditing available data pipelines, cleaning datasets, and validating model performance benchmarks.'
      },
      {
        number: '02',
        title: 'Model Training & Hyperparameter Tuning',
        description: 'Developing tailored deep learning architectures using PyTorch and TensorFlow with cross-validation.'
      },
      {
        number: '03',
        title: 'API Integration & Containerized Serving',
        description: 'Wrapping trained models into scalable REST/gRPC endpoints with GPU acceleration and caching.'
      },
      {
        number: '04',
        title: 'Continuous Monitoring & Drift Detection',
        description: 'Tracking accuracy drift over time with automated retraining pipelines and human-in-the-loop validation.'
      }
    ]
  },
  {
    id: 'ui-ux-development',
    slug: 'ui-ux-development',
    shortTitle: 'UI/UX Development',
    title: 'UI/UX Development',
    shortDescription: 'The UI/UX Design brings a design-centric approach to user interface and user experience to solve problems by following an entire UX lifecycle.',
    fullDescription: 'The UI/UX Design brings a design-centric approach to user interface and user experience. Our team is trained to solve problems and provide innovative solutions by following an entire process of UI/UX development.',
    bannerHeadline: 'Human-Centered Digital Product Design & Interactive Prototyping',
    bannerDescription: 'Transform complex interfaces into delightful, frictionless user journeys with research-backed wireframing, high-fidelity prototypes, design systems, and usability testing.',
    accentColor: '#107C8E',
    iconName: 'uiux',
    tools: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Adobe XD', color: '#FF61F6' },
      { name: 'Sketch', color: '#F7B500' },
      { name: 'Photoshop', color: '#31A8FF' },
      { name: 'Illustrator', color: '#FF9A00' },
      { name: 'InVision', color: '#FF3366' }
    ],
    deliverablesHeading: 'Conversion-Optimized Design Systems & Interactive Experience Design',
    deliverablesDescription: 'Our design team combines cognitive psychology, user research, and modern aesthetic standards to build product interfaces that captivate users and drive measurable business conversions.',
    keyFeatures: [
      'Comprehensive User Journey Mapping, Persona Definition & User Flow Diagrams',
      'Scalable Design Systems & Component Libraries Built in Figma',
      'High-Fidelity Interactive Clickable Prototypes for Stakeholder Validation',
      'Data-Driven Usability Testing, Heatmap Audits & Conversion Rate Optimization (CRO)',
      'Multi-Device Responsive Layouts for Mobile, Tablet, Desktop, and Ultra-Wide',
      'Developer-Ready Design Handoffs with Tokens, Spacing Specs, and Assets'
    ],
    processSteps: [
      {
        number: '01',
        title: 'User Research & Competitive Benchmarking',
        description: 'Conducting user interviews, mapping pain points, and identifying market differentiation opportunities.'
      },
      {
        number: '02',
        title: 'Information Architecture & Wireframes',
        description: 'Structuring clear content hierarchies and low-fidelity structural blueprints for key user flows.'
      },
      {
        number: '03',
        title: 'Visual Identity & High-Fidelity UI',
        description: 'Applying refined typography, color theory, iconography, and responsive layouts to establish a cohesive brand identity.'
      },
      {
        number: '04',
        title: 'Interactive Prototype & Dev Handoff',
        description: 'Building full clickable prototypes for user testing and generating complete code-ready component specifications.'
      }
    ]
  }
];
