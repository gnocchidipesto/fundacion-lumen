import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'wouter';

/**
 * FUNDACIÓN LUMEN - FAQ PAGE
 * Design System: Warm & Dynamic
 */

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    // SOBRE LOS LIBROS
    {
      id: 1,
      category: 'Sobre los Libros',
      question: '¿Cuál es el orden recomendado para leer la trilogía?',
      answer: 'Se recomienda leer los libros en orden: primero "El Susurro de la Conciencia", luego "El Poder de la Gratitud" y finalmente "El Universo Consciente". Cada libro construye sobre los conceptos del anterior, creando una experiencia de transformación progresiva.'
    },
    {
      id: 2,
      category: 'Sobre los Libros',
      question: '¿Puedo leer los libros de forma independiente?',
      answer: 'Sí, cada libro puede leerse de forma independiente. Sin embargo, leerlos en orden proporciona una experiencia más profunda y coherente. Los tres libros forman parte de la "Trilogía de la Conciencia" y se complementan entre sí.'
    },
    {
      id: 3,
      category: 'Sobre los Libros',
      question: '¿Para quién están dirigidos estos libros?',
      answer: 'Los libros están dirigidos a cualquier persona interesada en el autoconocimiento, la espiritualidad y la transformación personal. No requieren conocimientos previos. Son accesibles tanto para principiantes como para lectores avanzados en temas de conciencia y crecimiento espiritual.'
    },
    {
      id: 4,
      category: 'Sobre los Libros',
      question: '¿Cuántas páginas tiene cada libro?',
      answer: '"El Susurro de la Conciencia" tiene 246 páginas, "El Poder de la Gratitud" tiene 188 páginas, y "El Universo Consciente" tiene 256 páginas. El tiempo de lectura promedio es de 6-8 horas por libro, dependiendo de tu ritmo.'
    },
    {
      id: 5,
      category: 'Sobre los Libros',
      question: '¿Los libros incluyen ejercicios prácticos?',
      answer: 'Sí, cada libro incluye reflexiones, ejercicios prácticos y meditaciones guiadas que complementan el contenido teórico. Están diseñados para facilitar la integración de los conceptos en tu vida cotidiana.'
    },
    {
      id: 6,
      category: 'Sobre los Libros',
      question: '¿Hay versiones en otros idiomas?',
      answer: 'Actualmente los libros están disponibles en español. Estamos trabajando en traducir la trilogía a otros idiomas. Si deseas recibir notificaciones sobre nuevas versiones, puedes suscribirte a nuestro newsletter.'
    },

    // ENVÍOS Y ENTREGAS
    {
      id: 7,
      category: 'Envíos y Entregas',
      question: '¿Cuáles son los tiempos de envío?',
      answer: 'Los tiempos de envío varían según tu ubicación: España (3-5 días hábiles), América Latina (7-15 días hábiles), Europa (5-10 días hábiles). Los pedidos se procesan en 24-48 horas después de la confirmación del pago.'
    },
    {
      id: 8,
      category: 'Envíos y Entregas',
      question: '¿Cuál es el costo del envío?',
      answer: 'El costo del envío depende de tu ubicación y el peso del pedido. Ofrecemos envío gratuito para pedidos superiores a €50 en España. Para otros países, los costos se calculan automáticamente al momento del checkout.'
    },
    {
      id: 9,
      category: 'Envíos y Entregas',
      question: '¿Puedo rastrear mi pedido?',
      answer: 'Sí, una vez que tu pedido sea enviado, recibirás un número de seguimiento por correo electrónico. Podrás rastrear tu paquete en tiempo real a través del sitio del transportista.'
    },
    {
      id: 10,
      category: 'Envíos y Entregas',
      question: '¿Ofrecen envío internacional?',
      answer: 'Sí, realizamos envíos a la mayoría de países del mundo. Los costos y tiempos de entrega varían según el destino. Calcula el costo en el carrito antes de finalizar tu compra.'
    },
    {
      id: 11,
      category: 'Envíos y Entregas',
      question: '¿Qué pasa si mi paquete se pierde?',
      answer: 'Todos nuestros envíos están asegurados. Si tu paquete se pierde o no llega en el tiempo estimado, contáctanos inmediatamente. Investigaremos el caso y, si es necesario, realizaremos un reembolso o enviaremos un nuevo paquete sin costo adicional.'
    },

    // POLÍTICAS DE DEVOLUCIÓN
    {
      id: 12,
      category: 'Políticas de Devolución',
      question: '¿Cuál es la política de devolución?',
      answer: 'Aceptamos devoluciones dentro de 30 días desde la fecha de entrega. El producto debe estar en perfecto estado, sin marcas de lectura, con el empaque original intacto. Los costos de envío de devolución corren por cuenta del cliente, a menos que se trate de un error nuestro.'
    },
    {
      id: 13,
      category: 'Políticas de Devolución',
      question: '¿Cómo inicio una devolución?',
      answer: 'Para iniciar una devolución, contacta a nuestro equipo de atención al cliente en info@fundacionlumen.com con tu número de pedido. Te proporcionaremos las instrucciones de envío y una etiqueta de devolución si corresponde.'
    },
    {
      id: 14,
      category: 'Políticas de Devolución',
      question: '¿Cuánto tiempo tarda el reembolso?',
      answer: 'Una vez que recibimos y verificamos tu devolución, procesamos el reembolso en 5-7 días hábiles. El dinero se acreditará en tu cuenta bancaria o método de pago original.'
    },
    {
      id: 15,
      category: 'Políticas de Devolución',
      question: '¿Puedo cambiar un libro por otro?',
      answer: 'Sí, ofrecemos cambios dentro de 30 días. Simplemente contacta con nosotros indicando qué libro deseas cambiar. Los costos de envío del cambio corren por tu cuenta, a menos que sea un error nuestro.'
    },
    {
      id: 16,
      category: 'Políticas de Devolución',
      question: '¿Qué pasa si recibo un libro dañado?',
      answer: 'Si recibes un libro dañado, contáctanos inmediatamente con fotos del daño. Reemplazaremos el libro sin costo alguno y cubriremos los gastos de envío de devolución.'
    },

    // PAGOS Y SEGURIDAD
    {
      id: 17,
      category: 'Pagos y Seguridad',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), PayPal, transferencia bancaria y billeteras digitales. Todos los pagos son procesados de forma segura con encriptación SSL.'
    },
    {
      id: 18,
      category: 'Pagos y Seguridad',
      question: '¿Es seguro comprar en el sitio?',
      answer: 'Sí, nuestro sitio utiliza tecnología de encriptación SSL de 256 bits para proteger tus datos personales y financieros. No almacenamos información de tarjetas de crédito en nuestros servidores.'
    },
    {
      id: 19,
      category: 'Pagos y Seguridad',
      question: '¿Puedo comprar con factura?',
      answer: 'Sí, podemos emitir facturas para compras corporativas o si lo requieres. Contacta con nosotros después de realizar tu compra para solicitar la factura.'
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

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
              <img src="/logo.png" alt="Fundación Lumen" className="h-8 w-auto" />
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
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle size={48} style={{ color: '#C25E3E' }} />
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#4A403A' }}
          >
            Preguntas Frecuentes
          </h1>
          <p
            className="text-xl font-light"
            style={{ color: '#4A403A' }}
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros libros, envíos y políticas.
          </p>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#C25E3E' }} />
            <input
              type="text"
              placeholder="Busca una pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
              style={{
                borderColor: '#E8DFD3',
                backgroundColor: '#FFF9F3',
                color: '#4A403A'
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {categories.map(category => {
            const categoryItems = filteredFAQ.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#4A403A' }}
                >
                  {category}
                </h2>

                <div className="space-y-4">
                  {categoryItems.map(item => (
                    <div
                      key={item.id}
                      className="rounded-lg border-2 transition-all"
                      style={{
                        borderColor: expandedId === item.id ? '#C25E3E' : '#E8DFD3',
                        backgroundColor: expandedId === item.id ? '#FFF9F3' : '#FDFCF8'
                      }}
                    >
                      <button
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-50 transition-all"
                      >
                        <span
                          className="text-left font-semibold"
                          style={{ color: '#4A403A' }}
                        >
                          {item.question}
                        </span>
                        <ChevronDown
                          size={20}
                          style={{
                            color: '#C25E3E',
                            transform: expandedId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      </button>

                      {expandedId === item.id && (
                        <div
                          className="px-6 pb-4 border-t-2"
                          style={{ borderColor: '#E8DFD3', color: '#4A403A' }}
                        >
                          <p className="font-light leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <p
                className="text-lg font-light"
                style={{ color: '#4A403A' }}
              >
                No encontramos preguntas que coincidan con tu búsqueda. Intenta con otros términos o contacta con nosotros.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-16 px-4 md:px-8"
        style={{ backgroundColor: '#FFF9F3' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#4A403A' }}
          >
            ¿No encontraste tu respuesta?
          </h2>
          <p
            className="text-lg font-light mb-8"
            style={{ color: '#4A403A' }}
          >
            Estamos aquí para ayudarte. Contacta con nuestro equipo directamente.
          </p>
          <Link href="/contacto">
            <a
              className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg inline-block"
              style={{ backgroundColor: '#C25E3E' }}
            >
              Contactar Soporte
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
