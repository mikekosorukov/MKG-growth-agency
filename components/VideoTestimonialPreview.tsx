'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const VIDEO_TESTIMONIAL_EMBED_URL = 'https://www.youtube-nocookie.com/embed/nDM8yZnmESU?autoplay=1&rel=0&modestbranding=1';

interface VideoTestimonialPreviewProps {
  className?: string;
}

export default function VideoTestimonialPreview({ className = '' }: VideoTestimonialPreviewProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!isVideoModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoModalOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsVideoModalOpen(true)}
        className={`group/video relative aspect-video w-full cursor-pointer overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#10152f] text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#8c99eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c99eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d2241] ${className}`}
        aria-label="Play Dhruv Yadav video testimonial"
      >
        <Image
          src="/noclickthumbnail.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative size-[51px] transition-transform duration-300 group-hover/video:scale-110">
            <Image
              src="/play-circle-icon.svg"
              alt=""
              fill
              className="block max-w-none"
            />
          </span>
        </div>
      </button>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0a0e1f]/85 px-[20px] py-[32px] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video testimonial"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[960px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#0a0e1f] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute right-[12px] top-[12px] z-10 flex size-[40px] cursor-pointer items-center justify-center rounded-full border border-[#7078B8] bg-[#171c39]/90 text-[#dcdff2] transition-all hover:border-[#8c99eb] hover:bg-[#1f2446] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c99eb]"
              aria-label="Close video testimonial"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 size-full"
                src={VIDEO_TESTIMONIAL_EMBED_URL}
                title="Dhruv Yadav video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
