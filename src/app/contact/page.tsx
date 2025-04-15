'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      router.push('/merci'); // ✅ Redirection
    }, 1500); // Simule un envoi de formulaire
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Me contacter</h1>
      <p className="text-gray-600 text-center mb-10">
        Une idée de projet ? Une question ? Je suis dispo ✨
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            required
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            required
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Ton message..."
          required
          className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSending ? 'Envoi en cours...' : 'Envoyer ✉️'}
        </button>
      </form>
    </section>
  );
}
