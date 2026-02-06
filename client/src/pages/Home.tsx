'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Instagram, Music, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

/**
 * FUNDACIÓN LUMEN - LANDING PAGE
 * Design System: Warm & Dynamic (Awwwwards Style)
 * Primary: #C25E3E (Terracotta)
 * Background: #F5F1E8 (Linen/Beige)
 * Text: #4A403A (Warm Brown)
 * Typography: Poppins (all weights)
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('ES');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lightGlow, setLightGlow] = useState({ x: 0, y: 0, opacity: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const trilogyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto de luz interactivo en hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setLightGlow({ x, y, opacity: 0.6 });
      }
    };

    const handleMouseLeave = () => {
      setLightGlow(prev => ({ ...prev, opacity: 0 }));
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animación sutil de libros
  const [bookRotation, setBookRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      setBookRotation({
        x: Math.sin(time) * 3,
        y: Math.cos(time * 0.7) * 5
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // --- CAPAS DOS LIVROS ---
  const books = [
    {
      id: 1,
      title: 'El Susurro de la Conciencia',
      // Imagem atualizada:
      image: '/livro.elsusurro.jpg',
      link: 'https://letrame.com',
      description: 'El despertar',
      color: 'from-green-100 to-green-50'
    },
    {
      id: 2,
      title: 'El Poder de la Gratitud',
      // Imagem atualizada:
      image: '/livro.elpoder.jpg',
      link: 'https://letrame.com',
      description: 'La integración',
      color: 'from-amber-100 to-amber-50'
    },
    {
      id: 3,
      title: 'El Universo Consciente',
      // Imagem atualizada:
      image: '/livro.eluniverso.jpg',
      link: 'https://amazon.com',
      description: 'La expansión',
      color: 'from-orange-100 to-orange-50'
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: 'El Viaje Interior: Primeros Pasos',
      excerpt: 'Descubre cómo comenzar tu camino de autoconocimiento...',
      date: 'Feb 2025',
      category: 'Espiritualidad'
    },
    {
      id: 2,
      title: 'Gratitud como Herramienta de Transformación',
      excerpt: 'Explora cómo la gratitud puede cambiar tu perspectiva...',
      date: 'Ene 2025',
      category: 'Mindfulness'
    },
    {
      id: 3,
      title: 'Conexión Cósmica: Ciencia y Misticismo',
      excerpt: 'La intersección entre la física cuántica y la espiritualidad...',
      date: 'Dic 2024',
      category: 'Ciencia'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{ backgroundColor: isScrolled ? '#F5F1E8' : 'rgba(245, 241, 232, 0.95)' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo - ATUALIZADO */}
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="Fundación Lumen" className="h-24 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-sm font-medium" style={{ color: '#4A403A' }}>
              Inicio
            </button>
            <Link href="/nosotros">
              <a className="text-sm font-medium" style={{ color: '#4A403A' }}>
                Nosotros
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm font-medium flex items-center gap-1" style={{ color: '#4A403A' }}>
                Blog <ChevronDown size={16} />
              </a>
            </Link>
            <Link href="/libros">
              <a className="text-sm font-medium" style={{ color: '#4A403A' }}>
                Libros
              </a>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: '#4A403A' }}
              >
                🇪🇸 <ChevronDown size={16} />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg p-2">
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">🇪🇸 Español</button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">🇬🇧 English</button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">🇵🇹 Português</button>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link href="/contacto">
              <a
                className="px-6 py-2 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg inline-block"
                style={{ backgroundColor: '#C25E3E' }}
              >
                Contacto
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-sm font-medium">
              Inicio
            </button>
            <Link href="/nosotros">
              <a className="block w-full text-left py-2 text-sm font-medium">Nosotros</a>
            </Link>
            <Link href="/blog">
              <a className="block w-full text-left py-2 text-sm font-medium">Blog</a>
            </Link>
            <Link href="/libros">
              <a className="block w-full text-left py-2 text-sm font-medium">Libros</a>
            </Link>
          </div>
        )}
      </header>

      {/* HERO SECTION - Awwwwards Style */}
      <section
        ref={heroRef}
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        {/* Background Image with Hand */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="/hero-sky-cosmos.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Interactive Light Glow */}
        <div
          className="absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '400px',
            height: '400px',
            left: `${lightGlow.x - 200}px`,
            top: `${lightGlow.y - 200}px`,
            background: 'radial-gradient(circle, rgba(194, 94, 62, 0.3) 0%, transparent 70%)',
            opacity: lightGlow.opacity,
            pointerEvents: 'none'
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#4A403A' }}
          >
            Ilumina tu camino,
            <br />
            <span style={{ color: '#C25E3E' }}>transforma tu vida</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 font-light"
            style={{ color: '#4A403A' }}
          >
            Inspiramos una vida más plena a través del autoconocimiento y la comunidad
          </p>
          <button
            onClick={() => scrollToSection('trilogia')}
            className="px-8 py-3 rounded-full text-white font-semibold text-lg transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#C25E3E' }}
          >
            Conoce la Trilogía
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm font-medium" style={{ color: '#4A403A' }}>Desplázate</span>
            <svg className="w-6 h-6" style={{ color: '#C25E3E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS - MISIÓN - VISIÓN */}
      <section id="nosotros" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            style={{ color: '#4A403A' }}
          >
            Nuestra Esencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Quiénes Somos - 1/2 */}
            <div
              className="p-12 rounded-2xl flex flex-col justify-center"
              style={{ backgroundColor: '#FFF9F3' }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: '#C25E3E' }}
              >
                Quiénes Somos
              </h3>
              <p
                className="text-lg leading-relaxed font-light"
                style={{ color: '#4A403A' }}
              >
                En Fundación Lumen, creemos que cada persona tiene dentro de sí una luz propia, lista para brillar. Nuestro propósito es acompañarte en tu camino de autoconocimiento, brindándote herramientas que nutran tu espíritu y expandan tu conciencia.
              </p>
            </div>

            {/* Misión y Visión - 1/2 dividido en 1/4 + 1/4 */}
            <div className="flex flex-col gap-8">
              {/* Misión - 1/4 */}
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFF9F3' }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#C25E3E' }}
                >
                  Misión
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: '#4A403A' }}
                >
                  Facilitar la expansión de la conciencia a través del conocimiento, la exploración personal y la comunidad. Creemos en un despertar libre, sin imposiciones, basado en la gratitud, el autoconocimiento y la integración de la ciencia y la espiritualidad.
                </p>
              </div>

              {/* Visión - 1/4 */}
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFF9F3' }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#C25E3E' }}
                >
                  Visión
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: '#4A403A' }}
                >
                  Un mundo donde la conciencia se cultive con la misma importancia que el conocimiento. Un espacio donde la ciencia y la espiritualidad dialoguen sin barreras, permitiendo que cada persona explore su camino de transformación sin limitaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRILOGÍA - LIBROS 3D */}
      <section id="trilogia" className="py-20 px-4 md:px-8" style={{ backgroundColor: '#FFF9F3' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-4 text-center"
            style={{ color: '#4A403A' }}
          >
            Nuestra Trilogía
          </h2>
          <p
            className="text-center text-lg mb-16 font-light"
            style={{ color: '#4A403A' }}
          >
            Un viaje en tres actos hacia la transformación de la conciencia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {books.map((book, index) => (
              <div key={book.id} className="flex flex-col items-center">
                {/* 3D Book Container */}
                {/* PADRONIZAÇÃO AQUI: Tamanho fixo de 280x420px */}
                <div
                  className="relative w-[280px] h-[420px] mb-8 perspective mx-auto"
                  style={{
                    transform: `rotateX(${bookRotation.x}deg) rotateY(${bookRotation.y}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  {/* Book Image */}
                  <div
                    className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
                    style={{
                      background: 'transparent',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Light Glow Behind Book */}
                  <div
                    className="absolute -inset-8 rounded-full blur-2xl opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(194, 94, 62, 0.4) 0%, transparent 70%)',
                      zIndex: -1
                    }}
                  />
                </div>

                {/* Book Info */}
                <h3
                  className="text-2xl font-bold text-center mb-2"
                  style={{ color: '#4A403A' }}
                >
                  {book.title}
                </h3>
                <p
                  className="text-center mb-6 font-light italic"
                  style={{ color: '#C25E3E' }}
                >
                  {book.description}
                </p>

                {/* CTA Button */}
                <Link href="/libros">
                  <a
                    className="px-6 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 inline-block"
                    style={{ backgroundColor: '#C25E3E' }}
                  >
                    Adquirir <ArrowRight size={16} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMAS PUBLICACIONES */}
      <section id="blog" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-4 text-center"
            style={{ color: '#4A403A' }}
          >
            Últimas Publicaciones
          </h2>
          <p
            className="text-center text-lg mb-12 font-light"
            style={{ color: '#4A403A' }}
          >
            Reflexiones y conocimientos para tu camino espiritual
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogArticles.map((article) => (
              <div
                key={article.id}
                className="p-8 rounded-2xl hover:shadow-lg transition-all"
                style={{ backgroundColor: '#FFF9F3' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#C25E3E', color: 'white' }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="text-xs font-light"
                    style={{ color: '#4A403A' }}
                  >
                    {article.date}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#4A403A' }}
                >
                  {article.title}
                </h3>
                <p
                  className="font-light mb-4"
                  style={{ color: '#4A403A' }}
                >
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
                  style={{ color: '#C25E3E' }}
                >
                  Leer más <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <a
                className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg inline-block"
                style={{ backgroundColor: '#C25E3E' }}
              >
                Ver Todos los Artículos
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA CAROUSEL - TikTok */}
      <section id="redes-sociales" className="py-20 px-4 md:px-8" style={{ backgroundColor: '#FFF9F3' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-4 text-center"
            style={{ color: '#4A403A' }}
          >
            Síguenos en TikTok
          </h2>
          <p
            className="text-center text-lg mb-12 font-light"
            style={{ color: '#4A403A' }}
          >
            Momentos inspiradores y reflexiones diarias
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#000' }}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7601993613974752523"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full"
                />
              </div>
              {/* Video 2 */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#000' }}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7599396884876250424"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full"
                />
              </div>
              {/* Video 3 */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#000' }}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7596058497356254520"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.tiktok.com/@f.lumen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg inline-block"
              style={{ backgroundColor: '#C25E3E' }}
            >
              Ver más en TikTok
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
     <footer
        className="py-12 px-4 md:px-8 border-t"
        style={{ backgroundColor: '#FFF9F3', borderColor: '#E8DFD3' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Fundación Lumen" className="h-12 w-auto mb-4" />
              <p className="text-sm font-light" style={{ color: '#4A403A' }}>
                Iluminando caminos hacia la conciencia
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A' }}>Navegación</h4>
              <ul className="space-y-2 text-sm font-light" style={{ color: '#4A403A' }}>
                <li><Link href="/"><a className="hover:underline">Inicio</a></Link></li>
                <li><Link href="/nosotros"><a className="hover:underline">Nosotros</a></Link></li>
                <li><Link href="/libros"><a className="hover:underline">Libros</a></Link></li>
                <li><Link href="/blog"><a className="hover:underline">Blog</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A' }}>Síguenos</h4>
              <div className="flex gap-4">
                {/* Link Instagram Corrigido */}
                <a 
                  href="https://instagram.com/fundacion.lumen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Instagram size={24} style={{ color: '#C25E3E' }} />
                </a>
                {/* Link TikTok Corrigido */}
                <a 
                  href="https://www.tiktok.com/@f.lumen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Music size={24} style={{ color: '#C25E3E' }} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A' }}>Contacto</h4>
              <p className="text-sm font-light" style={{ color: '#4A403A' }}>
                created@fundacionlumen.com
              </p>
            </div>
          </div>

          <div
            className="border-t pt-8 text-center text-sm font-light"
            style={{ borderColor: '#E8DFD3', color: '#4A403A' }}
          >
            <p>&copy; 2025 Fundación Lumen. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
