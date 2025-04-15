// src/app/about/page.tsx
'use client';

import Image from 'next/image';
import Timeline from '@/components/Timeline'; // ou '../components/Timeline' si pas d’alias


export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">À propos de moi</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <Image
            src="/profil.jpg" // 📸 Mets ton image dans /public/profil.jpg
            alt="Photo d'Essia"
            width={250}
            height={250}
            className="rounded-full object-cover shadow-md"
          />
        </div>

        {/* Texte de présentation */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-5">
          <p>
            Hello ! Moi c’est <strong>Essia</strong>. Je suis développeuse web avec une vraie passion pour
            le design, l’UX et les interfaces qui claquent.
          </p>
          <p>
            Mon parcours m’a menée du marketing au code, avec une seule idée en tête : rendre le web plus
            humain, plus fluide, et plus beau. Je suis curieuse, autodidacte et toujours partante pour un nouveau projet.
          </p>
          <p>
            Mon objectif ? Créer des expériences digitales percutantes, avec une attention aux détails
            (même les plus petits 🪡).
          </p>
          <p>
            Ce portfolio, c’est mon espace d’expression, de test et de démonstration.
            Si tu veux échanger ou bosser ensemble, contacte-moi !
          </p>
        </div>
      </div>
      
      <Timeline />

    </section>
  );
}
