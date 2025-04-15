// src/app/page.tsx
import SkillMarquee from '@/components/SkillMarquee';


export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, moi c’est <span className="text-blue-600">Essia</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Développeuse web passionnée par les belles interfaces, l’UX et le design intuitif.
      </p>
      <a
        href="/work"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
      >
        Voir mes projets
      </a>

      <div className="mt-16 w-full">
      <SkillMarquee />
      </div>
      
    </section>
  );
}