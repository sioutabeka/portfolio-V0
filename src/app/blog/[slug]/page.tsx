// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';

// Simule une base de données d’articles
const articles = [
  {
    slug: 'apprendre-nextjs',
    title: 'Comment j’ai appris Next.js en 30 jours',
    content: 'Voici tout ce que j’ai appris pendant 30 jours...',
    tag: 'Dev',
  },
  {
    slug: 'guide-freelance-dev',
    title: 'Devenir freelance développeuse : mon guide',
    content: 'Ce guide te donne mes étapes pour me lancer...',
    tag: 'Freelance',
  },
];


export default async function ArticlePage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
  
    const article = articles.find((a) => a.slug === slug);
  
    if (!article) return notFound();
  
    return (
      <section className="max-w-3xl mx-auto px-4 py-16">
        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block mb-4">
          {article.tag}
        </span>
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <p className="text-gray-700 text-lg whitespace-pre-line">
          {article.content}
        </p>
      </section>
    );
  }
