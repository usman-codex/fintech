import { ProjectItem } from '../types';
import cyberLegendsImg from '../assets/images/cyber_legends.jpg';
import neverleftImg from '../assets/images/neverleft.jpg';
import blockcircleImg from '../assets/images/blockcircle.jpg';
import apexfiImg from '../assets/images/apexfi.jpg';
import paysprintImg from '../assets/images/paysprint.jpg';
import auroraImg from '../assets/images/aurora.jpg';

export const projects: ProjectItem[] = [
  {
    id: 'cyber-legends',
    slug: 'cyber-legends',
    title: 'Cyber Legends',
    category: 'Ed-Tech & Gaming',
    description: 'Ed-Tech and Gaming platform offering online cyber security learning services, equipping educators, parents and kids with interactive tools and content for enhanced learning experiences.',
    image: cyberLegendsImg,
    tags: ['Web Application', 'Gamification', 'Cybersecurity', 'React', 'Node.js'],
    liveUrl: 'https://cyberlegends.com',
    client: 'Cyber Legends Inc.',
    featured: true,
    stats: [
      { label: 'Active Learners', value: '120K+' },
      { label: 'Schools Integrated', value: '450+' },
      { label: 'Safety Badges Awarded', value: '1.2M' },
    ],
  },
  {
    id: 'neverleft',
    slug: 'neverleft',
    title: 'Neverleft',
    category: 'Mobile App & Event Ops',
    description: 'A more efficient method for managing venue operations that incorporates data analytics, enhanced event ticketing, and digital cloakroom ticketing.',
    image: neverleftImg,
    tags: ['Mobile App', 'QR Scanner', 'Event Ticketing', 'Real-time Analytics', 'iOS & Android'],
    liveUrl: 'https://neverleft.io',
    client: 'Neverleft Hospitality Group',
    featured: true,
    stats: [
      { label: 'Venues Managed', value: '85+' },
      { label: 'Tickets Processed', value: '3.5M+' },
      { label: 'Queue Time Reduced', value: '74%' },
    ],
  },
  {
    id: 'blockcircle',
    slug: 'blockcircle',
    title: 'Blockcircle',
    category: 'Web3 & Financial Analytics',
    description: 'Blockcircle provides competitive data, proprietary tools, and dynamic investing analytics to enable them to make well-informed decisions in the turbulent cryptocurrency market.',
    image: blockcircleImg,
    tags: ['Cryptocurrency', 'Trading Terminal', 'DeFi Analytics', 'Algorithmic Tools', 'Web3'],
    liveUrl: 'https://blockcircle.com',
    client: 'Blockcircle Digital Assets',
    featured: true,
    stats: [
      { label: 'Tracked Assets', value: '$450M+' },
      { label: 'Trading Signals', value: '99.4% Uptime' },
      { label: 'Institutional Traders', value: '15,000+' },
    ],
  },
  {
    id: 'apexfi-liquidity',
    slug: 'apexfi-liquidity',
    title: 'ApexFi Liquidity',
    category: 'DeFi & Smart Contracts',
    description: 'High-speed institutional decentralized liquidity aggregator with multi-chain yield optimization and automated treasury hedging.',
    image: apexfiImg,
    tags: ['Solidity', 'Smart Contracts', 'DeFi', 'Web3', 'Liquidity Pools'],
    liveUrl: 'https://apexfi.finance',
    client: 'Apex Capital DAO',
    featured: true,
    stats: [
      { label: 'Total Volume Locked', value: '$1.2B+' },
      { label: 'Gas Optimization', value: '38%' },
    ],
  },
  {
    id: 'paysprint-global',
    slug: 'paysprint-global',
    title: 'PaySprint Gateway',
    category: 'FinTech & Payments',
    description: 'Cross-border multi-currency payment rails and real-time compliance gateway for enterprise merchant settlement and instant FX conversion.',
    image: paysprintImg,
    tags: ['Payments API', 'ISO 20022', 'Fintech', 'Stripe', 'Banking API'],
    liveUrl: 'https://paysprint.io',
    client: 'PaySprint Financial',
    featured: true,
    stats: [
      { label: 'Daily Transactions', value: '$12M+' },
      { label: 'Settlement Latency', value: '< 2.5s' },
    ],
  },
  {
    id: 'aurora-health-ai',
    slug: 'aurora-health-ai',
    title: 'Aurora Health AI',
    category: 'HealthTech & AI',
    description: 'HIPAA-compliant predictive wellness analytics platform utilizing real-time biometric telemetry and smart diagnosis assistants.',
    image: auroraImg,
    tags: ['Healthcare', 'Predictive AI', 'Mobile UI', 'Cloud Telemetry'],
    liveUrl: 'https://aurorahealth.ai',
    client: 'Aurora MedTech Inc.',
    featured: true,
    stats: [
      { label: 'Patients Monitored', value: '250K+' },
      { label: 'Early Detection Rate', value: '94.2%' },
    ],
  },
];
