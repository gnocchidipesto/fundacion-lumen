import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary/20"></div>
          </div>
          <span className="font-serif text-lg font-semibold text-foreground">Lumen</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-sm font-light text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('libros')}
            className="text-sm font-light text-foreground hover:text-primary transition-colors"
          >
            La Trilogía
          </button>
          <button
            onClick={() => scrollToSection('autor')}
            className="text-sm font-light text-foreground hover:text-primary transition-colors"
          >
            El Autor
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-sm font-light text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="max-w-2xl mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-light text-foreground hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('libros')}
              className="text-sm font-light text-foreground hover:text-primary transition-colors text-left"
            >
              La Trilogía
            </button>
            <button
              onClick={() => scrollToSection('autor')}
              className="text-sm font-light text-foreground hover:text-primary transition-colors text-left"
            >
              El Autor
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-light text-foreground hover:text-primary transition-colors text-left"
            >
              Contacto
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
