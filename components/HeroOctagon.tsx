'use client';

import { motion, MotionValue } from 'motion/react';

interface HeroOctagonProps {
  dy: MotionValue<number>;
  blur: MotionValue<number>;
  strokeOpacity: MotionValue<number>;
  fillOpacity: MotionValue<number>;
  baseFillOpacity: MotionValue<number>;
}

export default function HeroOctagon({ dy, blur, strokeOpacity, fillOpacity, baseFillOpacity }: HeroOctagonProps) {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 133 148" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="object-contain"
    >
      <g filter="url(#filter0_d_3456_84726)">
        <motion.path fillOpacity={baseFillOpacity} d="M66.1127 14L114.227 41.779V97.3371L66.1127 125.116L17.9981 97.3371V41.779L66.1127 14Z" fill="url(#paint1_linear_3456_84726)"/>
        {/* <path d="M66.1127 14L114.227 41.779V97.3371L66.1127 125.116L17.9981 97.3371V41.779L66.1127 14Z" fill="#8c99eb" fillOpacity="0.15"/> */}
        <motion.path fillOpacity={fillOpacity} d="M66.1127 14L114.227 41.779V97.3371L66.1127 125.116L17.9981 97.3371V41.779L66.1127 14Z" fill="url(#paint0_radial_3456_84726)" />
        <motion.path strokeOpacity={strokeOpacity} d="M113.478 42.2119V96.9033L66.1123 124.25L18.748 96.9033V42.2119L66.1123 14.8652L113.478 42.2119Z" stroke="#8c99eb" strokeWidth="1.5"/>
      </g>
      <defs>
        <filter id="filter0_d_3456_84726" x="0" y="0" width="132.227" height="147.116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <motion.feOffset dy={dy} />
          <motion.feGaussianBlur stdDeviation={blur} />
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0132843 0 0 0 0 0.0956468 0 0 0 0.6 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3456_84726"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3456_84726" result="shape"/>
        </filter>
        <linearGradient id="paint1_linear_3456_84726" x1="17.9981" y1="14" x2="114.227" y2="125.116" gradientUnits="userSpaceOnUse">
          <stop stopColor="#323966"/>
          <stop offset="1" stopColor="#232b5c"/>
        </linearGradient>
        <radialGradient id="paint0_radial_3456_84726" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.5547 112.983) rotate(-25.1172) scale(220.403 220.403)">
          <stop stopColor="#c9d1ff" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#8c99eb" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

