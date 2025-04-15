// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}: Props) {
  return (
    <div className="rounded-lg shadow border overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 my-2">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
}
