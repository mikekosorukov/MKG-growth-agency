import Image from 'next/image';

export default function CaseImage({
  src,
  alt,
  caption,
  width = 900,
  height = 500,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-[32px] flex flex-col items-center gap-[12px]">
      <div className="relative w-full overflow-hidden rounded-[4px] border border-solid border-[#3f4367]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
        />
      </div>
      {caption && (
        <figcaption className="text-[13px] font-normal leading-[1.4] text-[#7078B8] text-center sm:text-[14px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
