import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.JPG';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.JPG';
import img12 from '../assets/images/img12.JPG';

export interface GalleryHexagon {
  id: string;
  image: string;
  alt: string;
}

export const HEXAGON_GALLERY: GalleryHexagon[] = [
  
  {
    id: 'hex-1',
    image: img1,
    alt: 'FinTech Edge Mentor',
  },
  
  {
    id: 'hex-2',
    image: img2,
    alt: 'FinTech Edge Innovation Lab',
  },
  
  {
    id: 'hex-3',
    image: img3,
    alt: 'Lead Blockchain Engineer',
  },
  
  {
    id: 'hex-4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    alt: 'FinTech Edge Headquarters',
  },
  
  {
    id: 'hex-5',
    image: img5,
    alt: 'Executive Director',
  },
  
  {
    id: 'hex-6',
    image: img6,
    alt: 'Full Stack Tech Lead',
  },
  
  {
    id: 'hex-7',
    image: img7,
    alt: 'Smart Contract Developer',
  },
  
  {
    id: 'hex-8',
    image: img8,
    alt: 'AI Researcher & Faculty',
  },
  
  {
    id: 'hex-9',
    image: img9,
    alt: 'Product Manager & Fellow',
  },
  
  {
    id: 'hex-10',
    image: img10,
    alt: 'FinTech Founder & Strategist',
  },
  
  {
    id: 'hex-11',
    image: img11,
    alt: 'UI/UX Design Director',
  },
  
  {
    id: 'hex-12',
    image: img12,
    alt: 'DevOps & Cloud Architect',
  },
  
  {
    id: 'hex-13',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Senior Web3 Specialist',
  },
  
  {
    id: 'hex-14',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    alt: 'Cybersecurity Analyst',
  },
  
  {
    id: 'hex-15',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    alt: 'Corporate Partner',
  },
  
  {
    id: 'hex-16',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    alt: 'Annual Conference Hall',
  },
];
