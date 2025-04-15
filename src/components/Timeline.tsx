// src/components/Timeline.tsx
type Experience = {
    date: string;
    title: string;
    description: string;
  };
  
  const experiences: Experience[] = [
    {
      date: '2019 - 2021',
      title: 'Chargée de com & marketing',
      description:
        "J’ai bossé dans une plateforme de freelancing tech, en contact quotidien avec des développeurs. Ça a tout déclenché.",
    },
    {
      date: '2021 - 2022',
      title: 'Startup @ Station F',
      description:
        "J’ai découvert l’écosystème startup et compris le pouvoir de l’autonomie via la tech et les produits digitaux.",
    },
    {
      date: '2023',
      title: 'Formation Développement Web',
      description:
        'HTML, CSS, JavaScript, React, Next.js, MongoDB... j’ai plongé dedans à fond.',
    },
    {
      date: '2024 - Aujourd’hui',
      title: 'Freelance & Création de contenu',
      description:
        "Je crée des sites pour des clients, je construis mon image en ligne, et j’aide d’autres personnes à apprendre.",
    },
  ];
  
  export default function Timeline() {
    return (
      <div className="mt-12 border-l-2 border-gray-200 pl-6">
        {experiences.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-[1.1rem] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
            <p className="text-sm text-gray-500">{item.date}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
  