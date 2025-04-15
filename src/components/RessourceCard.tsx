'use client';

type Ressource = {
  title: string;
  description: string;
  link: string;
};

export default function RessourceCard({ title, description, link }: Ressource) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition hover:border-blue-600 bg-white"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
