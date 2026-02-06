import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * FUNDACIÓN LUMEN - BLOG PAGE
 * Design System: Warm & Dynamic
 */

export default function Blog() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const blogPosts = [
    {
      id: 1,
      title: 'El Viaje Interior: Primeros Pasos',
      excerpt: 'Descubre cómo comenzar tu camino de autoconocimiento con técnicas prácticas y accesibles para todos los niveles.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      date: 'Feb 15, 2025',
      category: 'Espiritualidad',
      author: 'A. Arellano',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Gratitud como Herramienta de Transformación',
      excerpt: 'Explora cómo la gratitud puede cambiar tu perspectiva y transformar tu relación con la vida.',
      content: 'La gratitud es más que un sentimiento; es una práctica transformadora que puede cambiar fundamentalmente cómo experimentamos la vida...',
      date: 'Feb 10, 2025',
      category: 'Mindfulness',
      author: 'A. Arellano',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Conexión Cósmica: Ciencia y Misticismo',
      excerpt: 'La intersección entre la física cuántica y la espiritualidad: descubre cómo la ciencia moderna valida la sabiduría antigua.',
      content: 'Durante siglos, la ciencia y la espiritualidad han sido vistas como disciplinas opuestas. Sin embargo, los descubrimientos recientes en física cuántica...',
      date: 'Feb 5, 2025',
      category: 'Ciencia',
      author: 'A. Arellano',
      readTime: '8 min'
    },
    {
      id: 4,
      title: 'Meditación para Principiantes',
      excerpt: 'Una guía completa para comenzar tu práctica de meditación sin experiencia previa.',
      content: 'La meditación es una práctica ancestral que ha sido utilizada durante miles de años para cultivar paz mental y claridad...',
      date: 'Ene 28, 2025',
      category: 'Mindfulness',
      author: 'A. Arellano',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'El Poder de la Intención',
      excerpt: 'Cómo establecer intenciones claras puede transformar tu realidad y acelerar tu crecimiento espiritual.',
      content: 'Las intenciones son como semillas que plantamos en el jardín de nuestra conciencia. Cuando las cultivamos con cuidado y atención...',
      date: 'Ene 20, 2025',
      category: 'Espiritualidad',
      author: 'A. Arellano',
      readTime: '6 min'
    },
    {
      id: 6,
      title: 'Neurociencia de la Conciencia',
      excerpt: 'Descubre qué dice la investigación neurocientífica sobre cómo funciona la conciencia en el cerebro.',
      content: 'La conciencia ha sido uno de los mayores misterios de la neuroquímica moderna. Pero gracias a avances recientes en tecnología de imagen cerebral...',
      date: 'Ene 15, 2025',
      category: 'Ciencia',
      author: 'A. Arellano',
      readTime: '9 min'
    }
  ];

  const categories = ['Todos', 'Espiritualidad', 'Mindfulness', 'Ciencia'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCF8' }}>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-orange-600"
            style={{ color: '#4A403A', fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h1
            className="text-2xl font-bold"
            style={{ color: '#4A403A', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Blog
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: '#4A403A', fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
        >
          Artículos sobre Conciencia
        </h1>
        <p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
        >
          Explora nuestras reflexiones sobre espiritualidad, mindfulness y la intersección entre ciencia y misticismo
        </p>
      </section>

      {/* SEARCH AND FILTERS */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#C25E3E' : undefined,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  {/* Header with gradient */}
                  <div
                    className="h-32 bg-gradient-to-br flex items-end p-6"
                    style={{
                      background: `linear-gradient(135deg, #C25E3E 0%, #FF8C42 100%)`
                    }}
                  >
                    <div
                      className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white"
                      style={{ color: '#C25E3E', fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold mb-3 line-clamp-2"
                      style={{ color: '#4A403A', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-gray-600 mb-4 line-clamp-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                        >
                          {post.date}
                        </p>
                        <p
                          className="text-xs text-gray-400"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                        >
                          {post.readTime}
                        </p>
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: '#C25E3E', fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                      >
                        Leer →
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p
                className="text-lg text-gray-600"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              >
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-gray-400"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            &copy; 2025 Fundación Lumen. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
