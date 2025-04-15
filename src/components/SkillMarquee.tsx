'use client';

import Image from 'next/image';

const logos = [
  { name: 'React', src: '/logos/react.svg' },
  { name: 'Next.js', src: '/logos/nextjs.svg' },
  { name: 'Tailwind', src: '/logos/tailwind.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'Figma', src: '/logos/figma.svg' },
];

export default function SkillMarquee() {
  return (
    <div className="overflow-hidden py-6 bg-white border-y border-gray-200">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.name}
            width={60}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
