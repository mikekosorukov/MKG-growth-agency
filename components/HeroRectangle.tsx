'use client';

import { motion, MotionValue } from 'motion/react';

interface HeroRectangleProps {
  dy: MotionValue<number>;
  blur: MotionValue<number>;
  strokeOpacity: MotionValue<number>;
  fillOpacity: MotionValue<number>;
  baseFillOpacity: MotionValue<number>;
}

export default function HeroRectangle({ dy, blur, strokeOpacity, fillOpacity, baseFillOpacity }: HeroRectangleProps) {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 167 113" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="object-contain"
    >
      <g filter="url(#filter0_d_3456_84728)">
        <motion.rect fillOpacity={baseFillOpacity} x="18" y="14" width="130.913" height="76.6318" fill="url(#paint1_linear_3456_84728)"/>
        {/* <rect x="18" y="14" width="130.913" height="76.6318" fill="#8c99eb" fillOpacity="0.15"/> */}
        <motion.rect fillOpacity={fillOpacity} x="18" y="14" width="130.913" height="76.6318" fill="url(#paint0_radial_3456_84728)" />
        <motion.rect strokeOpacity={strokeOpacity} x="18.75" y="14.75" width="129.413" height="75.1318" stroke="#8c99eb" strokeWidth="1.5"/>
      </g>
      <defs>
        <filter id="filter0_d_3456_84728" x="0" y="0" width="166.914" height="112.632" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <motion.feOffset dy={dy} />
          <motion.feGaussianBlur stdDeviation={blur} />
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0132843 0 0 0 0 0.0956468 0 0 0 0.6 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3456_84728"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3456_84728" result="shape"/>
        </filter>
        <linearGradient id="paint1_linear_3456_84728" x1="18" y1="14" x2="148.913" y2="90.6318" gradientUnits="userSpaceOnUse">
          <stop stopColor="#323966"/>
          <stop offset="1" stopColor="#232b5c"/>
        </linearGradient>
        <radialGradient id="paint0_radial_3456_84728" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.056 6.33681) rotate(131.537) scale(220.537 376.75)">
          <stop stopColor="#c9d1ff" stopOpacity="0.85"/>
          <stop offset="1" stopColor="#8c99eb" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}








