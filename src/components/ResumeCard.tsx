// src/components/ResumeCard.tsx
'use client';

import { Download } from 'lucide-react';

export default function ResumeCard() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-xl rounded-xl p-8 flex flex-col items-center gap-6 text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
        <img src="/profil.jpg" alt="Essia" className="w-full h-full object-cover" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900">Mon CV en un clic</h2>
      <p className="text-gray-600 max-w-md">
        Retrouve mon parcours, mes expériences, mes compétences et ce que je peux t’apporter dans un seul PDF !
      </p>

      <a
        href="/cv.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        <Download size={18} />
        Télécharger le CV
      </a>
    </div>
  );
}
