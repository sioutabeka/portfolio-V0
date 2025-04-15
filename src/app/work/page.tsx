'use client';

import ProjectCard from '@/components/ProjectCard';
 
const projects = [
  {
    title: 'Portfolio Essia',
    description: 'Mon site personnel développé avec Next.js, TypeScript et Tailwind CSS.',
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://ton-site.com',
  },
  {
    title: 'Site client - Boutique bio',
    description: 'Création d’un e-commerce pour un client bio. Intégration Stripe et CMS.',
    image: '/projects/boutique.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://boutique-client.com',
  },
];

export default function WorkPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Mes projets</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
