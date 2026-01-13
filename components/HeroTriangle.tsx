'use client';

import { motion, MotionValue } from 'motion/react';

interface HeroTriangleProps {
  dy: MotionValue<number>;
  blur: MotionValue<number>;
  strokeOpacity: MotionValue<number>;
  fillOpacity: MotionValue<number>;
  baseFillOpacity: MotionValue<number>;
}

export default function HeroTriangle({ dy, blur, strokeOpacity, fillOpacity, baseFillOpacity }: HeroTriangleProps) {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 146 131" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="object-contain"
    >
      <g filter="url(#filter0_d_3456_84727)">
        <motion.path fillOpacity={baseFillOpacity} d="M72.7525 14L127.504 108.832H18.0013L72.7525 14Z" fill="url(#paint1_linear_3456_84727)"/>
        {/* <path d="M72.7525 14L127.504 108.832H18.0013L72.7525 14Z" fill="#8c99eb" fillOpacity="0.15"/> */}
        <motion.path fillOpacity={fillOpacity} d="M72.7525 14L127.504 108.832H18.0013L72.7525 14Z" fill="url(#paint0_radial_3456_84727)" />
        <motion.path strokeOpacity={strokeOpacity} d="M126.205 108.082H19.2998L72.752 15.5L126.205 108.082Z" stroke="#8c99eb" strokeWidth="1.5"/>
      </g>
      <defs>
        <filter id="filter0_d_3456_84727" x="0" y="0" width="145.504" height="130.832" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <motion.feOffset dy={dy} />
          <motion.feGaussianBlur stdDeviation={blur} />
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0132843 0 0 0 0 0.0956468 0 0 0 0.6 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3456_84727"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3456_84727" result="shape"/>
        </filter>
        <linearGradient id="paint1_linear_3456_84727" x1="18" y1="14" x2="127.504" y2="108.832" gradientUnits="userSpaceOnUse">
          <stop stopColor="#323966"/>
          <stop offset="1" stopColor="#232b5c"/>
        </linearGradient>
        <radialGradient id="paint0_radial_3456_84727" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1944 26.1334) rotate(43.6407) scale(199.87 199.87)">
          <stop stopColor="#c9d1ff" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#8c99eb" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

