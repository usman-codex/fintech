import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


import img5 from '../assets/img5.jpg';
import img5 from '../assets/img6.jpg';
import img7 from '../assets/img7.JPG';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.JPG'; 
import img12 from '../assets/img12.JPG';




export interface GalleryHexagon {
  id: string;
  image: string;
  alt: string;
}

export const HEXAGON_GALLERY: GalleryHexagon[] = [
  // Left Wing (Top raised)
  {
    id: 'hex-1',
    image: img1,
    alt: 'FinTech Edge Mentor',
  },
  // Left Column (Office / Campus)
  {
    id: 'hex-2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'FinTech Edge Innovation Lab',
  },
  // Left Middle
  {
    id: 'hex-3',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Lead Blockchain Engineer',
  },
  // Left Building / Exterior
  {
    id: 'hex-4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    alt: 'FinTech Edge Headquarters',
  },
  // Left Bottom
  {
    id: 'hex-5',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    alt: 'Executive Director',
  },
  // Center-Left Upper
  {
    id: 'hex-6',
    image: img12,
    alt: 'Full Stack Tech Lead',
  },
  // Center-Left Lower
  {
    id: 'hex-7',
    image: img11,
    alt: 'Smart Contract Developer',
  },
  // Center Raised
  {
    id: 'hex-8',
    image: img9,
    alt: 'AI Researcher & Faculty',
  },
  // Center
  {
    id: 'hex-9',
    image: img7,
    alt: 'Product Manager & Fellow',
  },
  // Center Bottom
  {
    id: 'hex-10',
    image: img6,
    alt: 'FinTech Founder & Strategist',
  },
  // Center-Right Upper
  {
    id: 'hex-11',
    image: img5,
    alt: 'UI/UX Design Director',
  },
  // Center-Right Lower
  {
    id: 'hex-12',
    image: img10,
    alt: 'DevOps & Cloud Architect',
  },
  // Right Wing Upper
  {
    id: 'hex-13',
    image: img4,
    alt: 'Senior Web3 Specialist',
  },
  // Right Wing Middle
  {
    id: 'hex-14',
    image: img3,
    alt: 'Cybersecurity Analyst',
  },
  // Right Wing Bottom
  {
    id: 'hex-15',
    image: img2,
    alt: 'Corporate Partner',
  },
  // Right Column (Office interior)
  {
    id: 'hex-16',
    image: img1,
    alt: 'Annual Conference Hall',
  },
];
