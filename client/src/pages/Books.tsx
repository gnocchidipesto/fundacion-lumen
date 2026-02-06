import { ArrowRight, ExternalLink, Heart } from 'lucide-react';
import { Link } from 'wouter';

/**
 * FUNDACIÓN LUMEN - BOOKS PAGE
 * Design System: Warm & Dynamic
 */

export default function Books() {
  const books = [
    {
      id: 1,
      title: 'El Susurro de la Conciencia',
      subtitle: 'El Despertar',
      // CORREÇÃO: Nome do arquivo novo
      image: '/livro.elsusurro.jpg',
      synopsis: `No es una voz nueva. Es la más antigua. Solo que habías olvidado cómo escucharla.

En medio del ruido constante, las pantallas encendidas y la exigencia de ser siempre más, A. Arellano propone una pausa radical: silenciar el mundo para volver a escucharte. Esta obra entrelaza neurociencia, física cuántica, sabiduría ancestral y práctica contemplativa en un mapa dirigido a quienes intuyen que la conciencia no es un misterio… sino un recuerdo.

Con una mirada lúcida y una escritura que une precisión y profundidad, el autor revela cómo ciencia y espiritualidad no se oponen: son lenguajes distintos que describen la misma verdad. Y en ese cruce —entre lo medible y lo invisible— nace este susurro.

El susurro de la conciencia inaugura su Trilogía de la conciencia, una obra que abre la puerta a una nueva forma de mirar: donde la ciencia no niega el misterio, y el misterio no excluye la razón. Es un llamado a integrar, a despertar… y a dejarse guiar por lo más silencioso: la conciencia que siempre estuvo esperando ser escuchada.`,
      pages: 246,
      year: 2025,
      links: [
        { platform: 'Letrame', url: 'https://letrame.com/catalogo/producto/el-susurro-de-la-conciencia/' },
        { platform: 'Amazon', url: 'https://www.amazon.com/-/es/El-susurro-conciencia-Spanish-Arellano/dp/B0FDKYVSDV' },
      ]
    },
    {
      id: 2,
      title: 'El Poder de la Gratitud',
      subtitle: 'La Integración',
      // CORREÇÃO: Nome do arquivo novo
      image: '/livro.elpoder.jpg',
      synopsis: `No es un libro. Es un mapa. Uno que empieza en lo humano… y te lleva a lo eterno.

A. Arellano construye una travesía que avanza paso a paso, con precisión y propósito, uniendo ciencia y espiritualidad para revelar una verdad olvidada: la gratitud no es solo una emoción, es una fuerza capaz de rediseñar tu manera de vivir.

A lo largo de seis etapas progresivas —del ego al amor, del sufrimiento a lo eterno— el lector es guiado de forma didáctica, clara y profundamente humana, a través de meditaciones, reflexiones y ejercicios prácticos que abren el camino hacia el asombro, la expansión y la reconfiguración de la percepción.

Este viaje culmina con un programa de práctica consciente que se extiende a lo largo de un año, donde cada mes propone una experiencia concreta para integrar la gratitud como herramienta transformadora en la vida cotidiana.

El poder de la gratitud entrelaza física, neurociencia, mitología y sabiduría ancestral con una pedagogía suave, que respeta los ritmos del lector y entrega claves para comenzar a despertar de manera real y vivencial. No es autoayuda. No es religión. Es un regreso a la memoria original del alma.`,
      pages: 188,
      year: 2025,
      links: [
        { platform: 'Letrame', url: 'https://letrame.com/catalogo/producto/el-poder-de-la-gratitud/' },
        { platform: 'Amazon', url: 'https://www.amazon.com/-/es/Arellano-ebook/dp/B0FXM3SRDT' },
      ]
    },
    {
      id: 3,
      title: 'El Universo Consciente',
      subtitle: 'La Expansión',
      // CORREÇÃO: Nome do arquivo novo
      image: '/livro.eluniverso.jpg',
      synopsis: `¿Y si no estuvieras dentro del universo… sino que el universo estuviera dentro de ti?

Este libro cierra el ciclo revelando que no estamos separados del cosmos: somos su reflejo consciente.

La ciencia, la mística y la experiencia interior se entrelazan para mostrarnos una verdad profunda: la conciencia no es un fenómeno biológico. Es el lenguaje oculto del universo.

Cada pensamiento es una estrella. Cada intuición, una galaxia.

Este no es un libro para entender el cosmos. Es un libro para sentirte parte de él.

Porque al final del viaje, ya no hay búsqueda. Solo hay reconocimiento. Y ese es el paso final: entender que nunca estuviste separado del Todo. Solo habías olvidado… que también eres parte del misterio.`,
      pages: 200,
      year: 2025,
      links: [
        { platform: 'Amazon', url: 'https://www.amazon.com/-/es/Arellano-ebook/dp/B0FXG96NJW' },
        { platform: 'Kobo', url: 'https://www.kobo.com/es/es/ebook/el-universo-consciente-2' },
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCF8' }}>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8"
        style={{ backgroundColor: '#FDFCF8' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              {/* CORREÇÃO: Logo certa e tamanho maior (h-24) */}
              <img src="/logo.png" alt="Fundación Lumen" className="h-24 w-auto object-contain" />
            </a>
          </Link>
          <Link href="/">
            <a
              className="px-6 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: '#C25E3E' }}
            >
              Volver
            </a>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#4A403A' }}
          >
            La Trilogía de la Conciencia
          </h1>
          <p
            className="text-xl font-light"
            style={{ color: '#4A403A' }}
          >
            Tres libros que te guiarán en tu camino de despertar, integración y expansión.
          </p>
        </div>
      </section>

      {/* BOOKS SECTION */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Book Image */}
              <div className="flex justify-center">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ maxWidth: '300px', width: '100%' }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <div className="mb-4">
                  <span
                    className="text-sm font-semibold px-4 py-2 rounded-full inline-block"
                    style={{ backgroundColor: '#FFF9F3', color: '#C25E3E' }}
                  >
                    {book.subtitle}
                  </span>
                </div>

                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#4A403A' }}
                >
                  {book.title}
                </h2>

                <div className="flex gap-6 mb-6 text-sm font-light" style={{ color: '#4A403A' }}>
                  <span>📖 {book.pages} páginas</span>
                  <span>📅 {book.year}</span>
                </div>

                <p
                  className="font-light leading-relaxed mb-8 text-justify"
                  style={{ color: '#4A403A', lineHeight: '1.8' }}
                >
                  {book.synopsis}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {book.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg flex items-center gap-2"
                      style={{ backgroundColor: '#C25E3E' }}
                    >
                      {link.platform} <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-20 px-4 md:px-8"
        style={{ backgroundColor: '#FFF9F3' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: '#4A403A' }}
          >
            Comienza tu Trilogía Hoy
          </h2>
          <p
            className="text-lg font-light mb-8"
            style={{ color: '#4A403A' }}
          >
            Cada libro es un paso en tu camino de transformación. Elige por dónde empezar.
          </p>
          <Link href="/">
            <a
              className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg inline-flex items-center gap-2"
              style={{ backgroundColor: '#C25E3E' }}
            >
              Volver a Inicio <ArrowRight size={16} />
            </a>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-4 md:px-8 border-t"
        style={{ backgroundColor: '#FDFCF8', borderColor: '#E8DFD3' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-sm font-light"
            style={{ color: '#4A403A' }}
          >
            &copy; 2025 Fundación Lumen. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
