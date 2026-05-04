'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Notification from './Notification';

interface Testimonial {
  authorName: string;
  authorRole: string;
  testimonialText: React.ReactNode;
  authorTitle: string;
  employmentType: string;
  avatarUrl: string;
}

const INITIAL_VISIBLE_TESTIMONIALS = 6;
const LOAD_MORE_INCREMENT = 3;

export default function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_TESTIMONIALS);
  const [showNotification, setShowNotification] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const testimonials: Testimonial[] = [
    {
      authorName: 'Jonathan Kite',
      authorRole: 'CEO at Rent Ready, a Real Estate Marketplace',
      testimonialText: <>&ldquo;From discovery through execution, ... Mike&apos;s contributions significantly elevated our product, and his dedication to <strong className="font-semibold text-[#dcdff2]">customer-driven innovation</strong> was evident in every project he touched.&rdquo;</>,
      authorTitle: 'Fractional Product Growth Lead',
      employmentType: 'Contractor',
      avatarUrl: '/testimonial-1.png',
    },
    {
      authorName: 'Kateryna Hornysh',
      authorRole: 'Head of Product at aqua-cloud',
      testimonialText: <>&ldquo;Mike consistently impressed me with his strong focus on the customer needs and his commitment to driving <strong className="font-semibold text-[#dcdff2]">growth for key metrics</strong>. If you&apos;re looking for someone who truly knows how to deliver results, Mike is your guy :)&rdquo;</>,
      authorTitle: '',
      employmentType: '',
      avatarUrl: '/kate.png',
    },
    {
      authorName: 'Leonid Netrebskii',
      authorRole: 'Head of Software Engineering at Rent Ready, a Real Estate Marketplace',
      testimonialText: <>&ldquo;Mike <strong className="font-semibold text-[#dcdff2]">revolutionized our product approach</strong>: development teams are now happy to see the goals and values of their work, and product managers are focused on business impact.&rdquo;</>,
      authorTitle: 'Fractional Product Growth Lead',
      employmentType: 'Contractor',
      avatarUrl: '/testimonial-icon-3.png',
    },
    {
      authorName: 'Heather DeAcosta',
      authorRole: 'Head of Product and Technology at Rent Ready',
      testimonialText: <>&ldquo;Mike&apos;s approach to testing ideas helped us make informed product decisions. He was especially skilled in leading effective customer interviews, providing us with valuable <strong className="font-semibold text-[#dcdff2]">insights that shaped our strategies</strong>.&rdquo;</>,
      authorTitle: '',
      employmentType: '',
      avatarUrl: '/heather.png',
    },
    {
      authorName: 'Kirill Chabanov',
      authorRole: 'COO at aqua cloud, a Test Management SaaS',
      testimonialText: <>&ldquo;Mike&apos;s sharp in understanding the market and the customers, often diving deep into research and data analysis. That helped us a lot with <strong className="font-semibold text-[#dcdff2]">better positioning of our product</strong>.&rdquo;</>,
      authorTitle: 'Product Manager: Digital Innovation',
      employmentType: 'Full-time',
      avatarUrl: '/testimonial-icon-2.jpeg',
    },
    {
      authorName: 'Dhruv Yadav',
      authorRole: 'Founder at NoClick',
      testimonialText: <>&ldquo;The diagnostic gave us clarity we had been missing for months — a clear picture of where to focus and why. Mike&apos;s ability to cut through the noise and surface the <strong className="font-semibold text-[#dcdff2]">highest-leverage GTM priorities</strong> was exactly what we needed.&rdquo;</>,
      authorTitle: 'Founder',
      employmentType: 'Advisor',
      avatarUrl: '/dhruv.png',
    },
  ];
  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMoreTestimonials = visibleCount < testimonials.length;

  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-[64px] bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Noise texture overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/300-60-15-monochrome.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '350px 350px',
          mixBlendMode: 'soft-light',
          opacity: 0.85,
        }}
      />
      
      {/* Cards grid */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
        {visibleTestimonials.map((testimonial, index) => (
          <article
            key={index}
            className="relative flex min-w-0 flex-col overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#171c39] px-[40px] py-[24px]"
          >
            <div className="relative z-10 flex flex-grow flex-col gap-[16px]">
              <div className="flex h-[64px] items-center justify-start gap-[8px]">
                <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#1d2241]">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col items-start">
                  <p className="w-full text-[14px] font-medium leading-[1.1] text-[#dcdff2]">
                    {testimonial.authorName}
                  </p>
                  <p className="w-full text-[10px] font-normal leading-[1.4] text-[#a5aee9]">
                    {testimonial.authorRole}
                  </p>
                </div>
              </div>

              <blockquote className="text-center font-normal leading-[1.4] text-[#a5aee9]" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
                <p>{testimonial.testimonialText}</p>
              </blockquote>

              <div className="mt-auto flex justify-start pt-[24px]">
                <Link
                  href="https://www.linkedin.com/in/mkosorukov/details/recommendations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative z-10 flex w-fit shrink-0 cursor-pointer items-center justify-center border border-solid border-[#7078B8] bg-[rgba(112,120,184,0.01)] px-[12px] py-[6px] transition-all hover:border-[#8c99eb] hover:bg-[#1f2446]"
                  aria-label="View recommendation on LinkedIn"
                >
                  <div className="flex items-center justify-center gap-[6px] px-[4px] py-0">
                    <span className="whitespace-pre text-[12px] font-medium leading-none tracking-[0.5px] text-[#7078B8] transition-colors group-hover:text-[#8c99eb]">
                      View on Ln
                    </span>
                  </div>
                  <div className="relative h-[12px] w-[12px] overflow-hidden text-[#7078B8] transition-all group-hover:text-[#8c99eb]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-full translate-x-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-full -translate-x-full transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          if (isExpanded) {
            setVisibleCount(INITIAL_VISIBLE_TESTIMONIALS);
            setIsExpanded(false);
            return;
          }
          if (!hasMoreTestimonials) { setShowNotification(true); return; }
          setVisibleCount((count) => Math.min(count + LOAD_MORE_INCREMENT, testimonials.length));
          setIsExpanded(true);
        }}
        className="group relative z-10 h-[46px] shrink-0 flex items-center justify-center gap-[8px] px-4 sm:px-7 border border-[#8c99eb] bg-transparent hover:bg-[#1f2446] transition-all cursor-pointer"
      >
        <span className="text-sm sm:text-base font-medium tracking-wide bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
          {isExpanded ? 'Collapse' : 'Load more'}
        </span>
        <svg width="14" height="14" viewBox="0 0 12 10" fill="none" className={`text-[#8c99eb] transition-transform ${isExpanded ? 'rotate-180 group-hover:-translate-y-0.5' : 'group-hover:translate-y-0.5'}`}>
          <path d="M1 2L6 7L11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <Notification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </section>
  );
}

