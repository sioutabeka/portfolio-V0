// src/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Projets')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Ressources')).toBeInTheDocument();
  });
});
