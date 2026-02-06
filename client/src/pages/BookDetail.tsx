'use client';

import { useRoute } from 'wouter';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'wouter';

const bookDetails: Record<number, any> = {
  1: {
    id: 1,
    title: 'El Susurro de la Conciencia',
    subtitle: 'El despertar',
    author: 'A. Arellano',
    image: '/capa_elsusurrodelaconciencia.png',
    rating: 4.8,
    reviews: 124,
    price: '$24.99',
    description: 'Todo gran viaje comienza con una pausa. Con una pregunta silenciosa en medio del ruido. Este libro te invita a detenerte. A escuchar la voz olvidada que vive bajo el bullicio del mundo moderno.',
    synopsis: 'No es una colección de respuestas. Es un espejo que refleja quién eres cuando apagas todas las pantallas. A través de filosofía, neurociencia y mística, descubrirás que la conciencia no es una meta… es tu punto de partida. Y una vez que la oyes —ese susurro— ya no puedes volver atrás. Porque así comienza el viaje. Y este… es solo el primer paso.',
    excerpt: 'La conciencia es el lenguaje más antiguo del universo. Cuando aprendes a escucharla, todo cambia. No es un cambio externo, sino una transformación interna que resuena en cada aspecto de tu vida.',
    chapters: [
      'Capítulo 1: El Silencio Primordial',
      'Capítulo 2: Despertando la Escucha Interior',
      'Capítulo 3: El Espejo de la Conciencia',
      'Capítulo 4: Más Allá del Ruido'
    ],
    buyLinks: [
      { platform: 'Letrame', url: 'https://letrame.com' },
      { platform: 'Amazon', url: 'https://amazon.com' }
    ]
  },
  2: {
    id: 2,
    title: 'El Poder de la Gratitud',
    subtitle: 'La integración, vivir despierto',
    author: 'A. Arellano',
    image: '/capa_elpoderdelagratitud.jpg',
    rating: 4.9,
    reviews: 156,
    price: '$26.99',
    description: 'Despertar es solo el principio. Pero vivir despierto… es la verdadera transformación. Este libro te recuerda que no necesitas seguir aprendiendo a través del dolor.',
    synopsis: 'Hemos creído que el sufrimiento era el precio del crecimiento. Pero ¿y si la gratitud fuera un atajo directo al alma? Aquí, el amor se vuelve brújula, y el presente se transforma en altar. Porque cuando dejas de resistirte y comienzas a agradecer, lo que antes dolía… comienza a sanar.',
    excerpt: 'La gratitud no es un sentimiento pasivo. Es una fuerza activa que transforma la realidad. Cuando practicas la gratitud genuina, invitas a la abundancia a fluir naturalmente en tu vida.',
    chapters: [
      'Capítulo 1: Más Allá del Sufrimiento',
      'Capítulo 2: La Alquimia de la Gratitud',
      'Capítulo 3: Vivir en Presencia',
      'Capítulo 4: El Corazón Despierto'
    ],
    buyLinks: [
      { platform: 'Letrame', url: 'https://letrame.com' },
      { platform: 'Amazon', url: 'https://amazon.com' }
    ]
  },
  3: {
    id: 3,
    title: 'El Universo Consciente',
    subtitle: 'La expansión, el regreso al Todo',
    author: 'A. Arellano',
    image: '/capa_eluniversoconsciente.jpg',
    rating: 4.7,
    reviews: 98,
    price: '$28.99',
    description: '¿Y si no estuvieras dentro del universo… sino que el universo estuviera dentro de ti? Este libro cierra el ciclo revelando que no estamos separados del cosmos: somos su reflejo consciente.',
    synopsis: 'La ciencia, la mística y la experiencia interior se entrelazan para mostrarnos una verdad profunda: la conciencia no es un fenómeno biológico. Es el lenguaje oculto del universo. Cada pensamiento es una estrella. Cada intuición, una galaxia.',
    excerpt: 'Al final del viaje, ya no hay búsqueda. Solo hay reconocimiento. Y ese es el paso final: entender que nunca estuviste separado del Todo. Solo habías olvidado… que también eres parte del misterio.',
    chapters: [
      'Capítulo 1: La Ilusión de la Separación',
      'Capítulo 2: Ciencia y Espiritualidad Unidas',
      'Capítulo 3: El Universo Dentro de Ti',
      'Capítulo 4: El Retorno al Todo'
    ],
    buyLinks: [
      { platform: 'Amazon', url: 'https://amazon.com' },
      { platform: 'Letrame', url: 'https://letrame.com' }
    ]
  }
};

const testimonials = [
  {
    author: 'María García',
    text: 'Este libro cambió completamente mi perspectiva sobre la vida. La forma en que el autor explica conceptos complejos es sencilla y profunda al mismo tiempo.',
    rating: 5
  },
  {
    author: 'Juan López',
    text: 'Una lectura transformadora. Recomiendo este libro a todos los que buscan un cambio real en sus vidas.',
    rating: 5
  },
  {
    author: 'Sofia Martínez',
    text: 'Hermoso, inspirador y muy bien escrito. Definitivamente uno de los mejores libros que he leído sobre conciencia.',
    rating: 5
  }
];

export default function BookDetail() {
  const [match, params] = useRoute('/libros/:id');
  const bookId = parseInt(params?.id || '1');
  const book = bookDetails[bookId];

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#4A403A' }}>
            Libro no encontrado
          </h1>
          <Link href="/">
            <a className="text-lg font-semibold" style={{ color: '#C25E3E' }}>
              Volver al inicio
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 py-4 px-4 md:px-8" style={{ backgroundColor: '#FFF9F3', borderBottom: '1px solid #E8DFD3' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft size={24} style={{ color: '#C25E3E' }} />
              <span className="font-semibold" style={{ color: '#4A403A' }}>Volver</span>
            </a>
          </Link>
          <img src="/logo.png" alt="Fundación Lumen" className="h-8 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Book Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
              <div
                className="absolute -inset-8 rounded-lg blur-2xl opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(194, 94, 62, 0.5) 0%, transparent 70%)',
                  zIndex: -1
                }}
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="text-lg font-light italic mb-2" style={{ color: '#C25E3E' }}>
                {book.subtitle}
              </p>
              <h1 className="text-5xl font-bold mb-2" style={{ color: '#4A403A' }}>
                {book.title}
              </h1>
              <p className="text-xl font-light" style={{ color: '#4A403A' }}>
                por {book.author}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(book.rating) ? '#C25E3E' : '#E8DFD3'}
                    style={{ color: '#C25E3E' }}
                  />
                ))}
              </div>
              <span className="text-sm font-light" style={{ color: '#4A403A' }}>
                {book.rating} ({book.reviews} reseñas)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: '#4A403A' }}>
              {book.description}
            </p>

            {/* Price and CTA */}
            <div className="mb-8">
              <p className="text-3xl font-bold mb-6" style={{ color: '#C25E3E' }}>
                {book.price}
              </p>
              <div className="flex flex-col gap-3">
                {book.buyLinks.map((link: any) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#C25E3E' }}
                  >
                    <ShoppingCart size={20} />
                    Comprar en {link.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Chapters */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A403A' }}>
                Capítulos
              </h3>
              <ul className="space-y-2">
                {book.chapters.map((chapter: string, i: number) => (
                  <li key={i} className="text-base font-light" style={{ color: '#4A403A' }}>
                    • {chapter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Extended Synopsis */}
        <div className="mt-16 p-12 rounded-2xl" style={{ backgroundColor: '#FFF9F3' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#4A403A' }}>
            Sinopsis Completa
          </h2>
          <p className="text-lg font-light leading-relaxed mb-6" style={{ color: '#4A403A' }}>
            {book.synopsis}
          </p>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#4A403A' }}>
            {book.excerpt}
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#4A403A' }}>
            Lo que dicen los lectores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, i: number) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFF9F3' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="#C25E3E"
                      style={{ color: '#C25E3E' }}
                    />
                  ))}
                </div>
                <p className="text-base font-light mb-4 italic" style={{ color: '#4A403A' }}>
                  "{testimonial.text}"
                </p>
                <p className="font-semibold" style={{ color: '#C25E3E' }}>
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#4A403A' }}>
            Otros libros de la trilogía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(bookDetails)
              .filter((b: any) => b.id !== bookId)
              .map((relatedBook: any) => (
                <Link key={relatedBook.id} href={`/libros/${relatedBook.id}`}>
                  <a className="group cursor-pointer">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={relatedBook.image}
                        alt={relatedBook.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-bold text-lg group-hover:underline" style={{ color: '#4A403A' }}>
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm font-light italic" style={{ color: '#C25E3E' }}>
                      {relatedBook.subtitle}
                    </p>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="mt-20 py-12 px-4 md:px-8 border-t"
        style={{ backgroundColor: '#FFF9F3', borderColor: '#E8DFD3' }}
      >
        <div className="max-w-7xl mx-auto text-center text-sm font-light" style={{ color: '#4A403A' }}>
          <p>&copy; 2025 Fundación Lumen. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
