import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

/**
 * ABOUT PAGE - NOSOTROS
 * Design System: Warm & Dynamic
 * Primary: #C25E3E (Terracotta)
 * Background: #F5F1E8 (Linen/Beige)
 * Text: #4A403A (Warm Brown)
 */

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 shadow-lg" style={{ backgroundColor: '#F5F1E8' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img src="/english.png" alt="Fundación Lumen" className="h-16 w-auto" />
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2 text-sm font-medium" style={{ color: '#4A403A' }}>
              <ArrowLeft size={18} /> Volver
            </a>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Quiénes Somos */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                Quiénes Somos
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                En Fundación Lumen, creemos que cada persona tiene dentro de sí una luz propia, lista para brillar. Nuestro propósito es acompañarte en tu camino de autoconocimiento, brindándote herramientas que nutran tu espíritu y expandan tu conciencia.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
                Somos un espacio de encuentro donde la ciencia y la espiritualidad dialogan sin barreras, donde cada persona es invitada a explorar su propia verdad y descubrir el poder transformador que reside en su interior.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl flex items-center justify-center">
                <span style={{ color: '#C25E3E', fontFamily: 'Poppins' }} className="text-center">
                  <p className="text-2xl font-bold">Luz Propia</p>
                  <p className="text-sm mt-2">Autoconocimiento</p>
                  <p className="text-sm">Expansión</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-l-4" style={{ borderColor: '#C25E3E' }}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#C25E3E', fontFamily: 'Poppins' }}>
                Misión
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                Facilitar la expansión de la conciencia a través del conocimiento, la exploración personal y la comunidad. En Fundación Lumen, creemos en un despertar libre, sin imposiciones, basado en la gratitud, el autoconocimiento y la integración de la ciencia y la espiritualidad.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-l-4" style={{ borderColor: '#C25E3E' }}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#C25E3E', fontFamily: 'Poppins' }}>
                Visión
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                Un mundo donde la conciencia se cultive con la misma importancia que el conocimiento. Un espacio donde la ciencia y la espiritualidad dialoguen sin barreras, permitiendo que cada persona explore su camino de transformación sin limitaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre el Autor */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
            Sobre el Autor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/alexarellano.jpg" 
                  alt="A. Arellano" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Biografía */}
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#C25E3E', fontFamily: 'Poppins' }}>
                A. Arellano
              </h3>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                A. Arellano ha recorrido el camino entre la lógica y la intuición, entre el pensamiento estructurado y la expansión interior. Su vida ha sido dedicada a construir puentes entre el mundo de la razón y el mundo del alma.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                Ha integrado conocimientos ancestrales, ciencia moderna y experiencias de transformación interior, transitando desde la tecnología y los sistemas complejos hasta las medicinas de la floresta, las tradiciones orientales y las escuelas iniciáticas.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
                Cofundador de la Fundación Lumen, sediada en Brasil, junto con su esposa Larissa, impulsa proyectos que entrelazan neurociencia, espiritualidad práctica y comunidad viva.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
                Su propósito no es enseñar, sino traducir, integrar y recordar. No para imponer verdades, sino para ofrecer herramientas que devuelvan a cada persona su poder de autotransformación.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>
              Descubre la Trilogía de la Conciencia
            </h3>
            <p className="text-lg mb-8" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
              Explora los tres libros que transformarán tu comprensión de la conciencia, la gratitud y el universo.
            </p>
            <Link href="/libros">
              <a 
                className="inline-block px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: '#C25E3E' }}
              >
                Ver Libros
              </a>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: '#E8DDD0', backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>Fundación Lumen</h4>
              <p className="text-sm" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>Ilumina tu camino, transforma tu vida.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>Enlaces</h4>
              <ul className="text-sm space-y-2" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
                <li><Link href="/"><a>Inicio</a></Link></li>
                <li><Link href="/libros"><a>Libros</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>Soporte</h4>
              <ul className="text-sm space-y-2" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
                <li><Link href="/contacto"><a>Contacto</a></Link></li>
                <li><Link href="/faq"><a>FAQ</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#4A403A', fontFamily: 'Poppins' }}>Redes</h4>
              <ul className="text-sm space-y-2" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
                <li><a href="https://tiktok.com/@f.lumen" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href="https://instagram.com/fundacionlumen" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: '#E8DDD0' }}>
            <p className="text-sm" style={{ color: '#6B5F54', fontFamily: 'Poppins' }}>
              © 2025 Fundación Lumen. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
