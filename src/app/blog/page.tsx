'use client';

import Link from 'next/link';

type Article = {
  title: string;
  description: string;
  slug: string;
  tag: string;
};

const articles: Article[] = [
  {
    title: 'Comment j’ai appris Next.js en 30 jours',
    description: 'Un retour d’expérience sur mon apprentissage de Next.js.',
    slug: 'apprendre-nextjs',
    tag: 'Dev',
  },
  {
    title: 'Devenir freelance développeuse : mon guide',
    description: 'Tout ce que j’aurais aimé savoir avant de me lancer.',
    slug: 'guide-freelance-dev',
    tag: 'Freelance',
  },
  {
    title: 'Le mindset pour apprendre le dev web',
    description: 'Quelques vérités sur la patience et la régularité.',
    slug: 'mindset-apprentissage',
    tag: 'Mindset',
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/blog/${article.slug}`}
            className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition hover:border-blue-600 bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {article.tag}
              </span>
            </div>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
