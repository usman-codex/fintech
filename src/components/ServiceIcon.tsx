import React from 'react';

interface ServiceIconProps {
  name: 'blockchain' | 'devops' | 'web' | 'ecommerce' | 'mobile' | 'ai' | 'uiux' | 'digital-marketing' | 'facebook-monetization' | 'graphic-design' | 'wordpress' | string;
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  className = '',
  size = 64,
  color = '#1A314C',
  accentColor = '#1DA5B8'
}) => {
  switch (name) {
    case 'graphic-design':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Pen Tool / Vector Art Anchor Path */}
          <path
            d="M24 6L32 14L18 28L10 30L12 22L24 6Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 10L28 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Vector Handle Points */}
          <circle cx="10" cy="30" r="2.5" fill={accentColor} />
          {/* Color Palette Arc */}
          <path
            d="M16 38C20 42 34 42 38 34C41 28 39 20 35 17"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          <circle cx="36" cy="36" r="2" fill={accentColor} />
          <circle cx="28" cy="40" r="2" fill={accentColor} />
        </svg>
      );

    case 'wordpress':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Circular Badge */}
          <circle
            cx="24"
            cy="24"
            r="17"
            stroke={color}
            strokeWidth="2.5"
          />
          {/* WordPress Signature 'W' Legs */}
          <path
            d="M15 18L21 34L25 24L28 32L33 18"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top serif subtle strokes */}
          <path
            d="M13 18H17M31 18H35"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Accent dot */}
          <circle cx="24" cy="24" r="1.5" fill={accentColor} />
        </svg>
      );
    case 'digital-marketing':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Bullhorn / Megaphone Outline */}
          <path
            d="M8 20V28H14L26 36V12L14 20H8Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Handle */}
          <path
            d="M12 28V36C12 37.1046 12.8954 38 14 38H16C17.1046 38 18 37.1046 18 36V28"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Sound / Growth Broadcast Waves */}
          <path
            d="M32 18C34 20 35 22 35 24C35 26 34 28 32 30"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M37 13C40.5 16.5 42 20 42 24C42 28 40.5 31.5 37 35"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Marketing Sparkle / Target Star */}
          <circle cx="18" cy="24" r="2" fill={accentColor} />
        </svg>
      );

    case 'facebook-monetization':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Modern Facebook Card / Rounded Frame */}
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="8"
            stroke={color}
            strokeWidth="2.5"
          />
          {/* Facebook 'f' path */}
          <path
            d="M26 15C23.7909 15 22 16.7909 22 19V23H18V27H22V36H26V27H30L31 23H26V19.5C26 19.2239 26.2239 19 26.5 19H30V15H26Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'blockchain':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Central Cube / Block */}
          <path
            d="M24 6L40 15V33L24 42L8 33V15L24 6Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 6V42"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 15L24 24L40 15"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Distributed network nodes */}
          <circle cx="24" cy="24" r="3.5" fill={accentColor} stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="15" r="2.5" fill={color} />
          <circle cx="40" cy="15" r="2.5" fill={color} />
          <circle cx="8" cy="33" r="2.5" fill={color} />
          <circle cx="40" cy="33" r="2.5" fill={color} />
          <circle cx="24" cy="6" r="2.5" fill={color} />
          <circle cx="24" cy="42" r="2.5" fill={color} />
        </svg>
      );

    case 'devops':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Infinity Cycle Loop with Code and Gear */}
          <path
            d="M16 16C11.5817 16 8 19.5817 8 24C8 28.4183 11.5817 32 16 32C21 32 27 16 32 16C36.4183 16 40 19.5817 40 24C40 28.4183 36.4183 32 32 32C27 32 21 16 16 16Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Code brackets inside left loop */}
          <path
            d="M14 21L11 24L14 27"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 21L21 24L18 27"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Gear teeth on right loop */}
          <circle cx="32" cy="24" r="3" stroke={accentColor} strokeWidth="2.2" />
        </svg>
      );

    case 'web':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Desktop Monitor Screen */}
          <rect
            x="6"
            y="8"
            width="36"
            height="24"
            rx="3"
            stroke={color}
            strokeWidth="2.5"
          />
          <path
            d="M6 14H42"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx="11" cy="11" r="1.5" fill={accentColor} />
          <circle cx="16" cy="11" r="1.5" fill={color} />
          <circle cx="21" cy="11" r="1.5" fill={color} />
          {/* Stand */}
          <path
            d="M20 32L17 40H31L28 32"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Code Window inside Monitor */}
          <path
            d="M17 20L13 23L17 26"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 20L35 23L31 26"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 19L22 27"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'ecommerce':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Shopping Store Bag & Security Lock */}
          <path
            d="M10 16H38L35 40H13L10 16Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 16V12C18 8.68629 20.6863 6 24 6C27.3137 6 30 8.68629 30 12V16"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Lock / Tag in Center */}
          <rect
            x="20"
            y="24"
            width="8"
            height="8"
            rx="1.5"
            stroke={accentColor}
            strokeWidth="2"
          />
          <path
            d="M22 24V21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21V24"
            stroke={accentColor}
            strokeWidth="1.75"
          />
        </svg>
      );

    case 'mobile':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Smartphone Frame */}
          <rect
            x="12"
            y="6"
            width="24"
            height="36"
            rx="4"
            stroke={color}
            strokeWidth="2.5"
          />
          {/* Camera Notch / Line */}
          <path
            d="M21 11H27"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Home Indicator */}
          <circle cx="24" cy="37" r="1.5" fill={accentColor} />
          {/* Code Window inside Phone */}
          <path
            d="M19 21L16 24L19 27"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 21L32 24L29 27"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 20L23 28"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'ai':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* AI Neural Chip / Brain */}
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            stroke={color}
            strokeWidth="2.5"
          />
          {/* Outer Pins */}
          <path d="M18 6V12M24 6V12M30 6V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M18 36V42M24 36V42M30 36V42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M6 18H12M6 24H12M6 30H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M36 18H42M36 24H42M36 30H42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          {/* Center Neural Core */}
          <circle cx="24" cy="24" r="4" fill={accentColor} />
          <circle cx="18" cy="18" r="1.5" fill={color} />
          <circle cx="30" cy="18" r="1.5" fill={color} />
          <circle cx="18" cy="30" r="1.5" fill={color} />
          <circle cx="30" cy="30" r="1.5" fill={color} />
        </svg>
      );

    case 'uiux':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* UI Layer Planes */}
          <path
            d="M24 8L40 16L24 24L8 16L24 8Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 24L24 32L40 24"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 32L24 40L40 32"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="16" r="2" fill={accentColor} />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect x="10" y="10" width="28" height="28" rx="4" stroke={color} strokeWidth="2.5" />
          <path d="M18 24L22 28L30 20" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
