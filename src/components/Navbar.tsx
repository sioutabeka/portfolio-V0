// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Projets', href: '/work' },
  { label: 'CV', href: '/resume' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ressources', href: '/resources' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Essia 👩‍💻</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu icon for mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block hover:text-blue-600 transition-colors"
                onClick={() => setOpen(false)} // Ferme le menu après clic
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
