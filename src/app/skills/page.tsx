'use client';

import Image from 'next/image';

const skills = [
  {
    name: 'React',
    logo: '/logos/react.svg',
    level: 'Avancé',
  },
  {
    name: 'Next.js',
    logo: '/logos/nextjs.svg',
    level: 'Intermédiaire',
  },
  {
    name: 'Tailwind CSS',
    logo: '/logos/tailwind.svg',
    level: 'Avancé',
  },
  {
    name: 'TypeScript',
    logo: '/logos/typescript.svg',
    level: 'Intermédiaire',
  },
  {
    name: 'Figma',
    logo: '/logos/figma.svg',
    level: 'Bon feeling 😎',
  },
];

export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Compétences techniques</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 bg-white border rounded-lg shadow hover:shadow-md transition"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={60}
              height={60}
              className="mb-3"
            />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-500">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
