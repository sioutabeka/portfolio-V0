// src/app/merci/page.tsx
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function MerciPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Merci pour ton message 💌</h1>
      <p className="text-gray-600 mb-10">Je te réponds dès que possible ! En attendant, retrouve-moi ici 👇</p>

      <div className="flex gap-6 text-blue-600">
        <a href="https://github.com/tongithub" target="_blank" rel="noopener noreferrer">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/tonlinkedin" target="_blank" rel="noopener noreferrer">
          <Linkedin size={28} />
        </a>
        <a href="https://instagram.com/toninsta" target="_blank" rel="noopener noreferrer">
          <Instagram size={28} />
        </a>
      </div>
    </section>
  );
}
