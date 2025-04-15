// src/components/Footer.tsx
'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Siouta. Tous droits réservés.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/ton-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ton-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
