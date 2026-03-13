import Image from 'next/image';

const logos = [
  { src: '/Voximplant_logo.png', alt: 'Voximplant' },
  { src: '/aqua_logo.png', alt: 'Aqua' },
  { src: '/capture_logo.png', alt: 'Capture' },
  { src: '/jet_logo.png', alt: 'Jet' },
  { src: '/grotech_logo.png', alt: 'Grotech' },
  { src: '/yc_logo.png', alt: 'YC' },
  { src: '/rent_logo.png', alt: 'Rent' },
  { src: '/drivt_logo.png', alt: 'Drivt' },
  { src: '/andagon_logo.png', alt: 'Andagon' },
];

const track = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div
      className="bg-[#1d2241] box-border flex flex-col items-center justify-center relative w-full isolate z-10 py-10 overflow-hidden"
    >
      <div
        className="w-full max-w-[1280px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex animate-marquee pointer-events-none" style={{ width: 'max-content' }}>
          {track.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="mx-[22px] flex items-center">
              <div className="relative h-10 w-36 opacity-65">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
