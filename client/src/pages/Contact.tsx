import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'wouter';

/**
 * FUNDACIÓN LUMEN - CONTACT PAGE
 * Design System: Warm & Dynamic
 */

export default function Contact() {
  // Mantive apenas o estado simples para você poder digitar nos campos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCF8' }}>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8"
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
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#4A403A' }}
          >
            Ponte en Contacto
          </h1>
          <p
            className="text-xl font-light mb-8"
            style={{ color: '#4A403A' }}
          >
            Nos encantaría escucharte. Comparte tus preguntas, sugerencias o simplemente cuéntanos sobre tu camino espiritual.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* CONTACT INFO */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FFF9F3' }}
                >
                  <Mail size={24} style={{ color: '#C25E3E' }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: '#4A403A' }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:created@fundacionlumen.com"
                    className="font-light hover:underline"
                    style={{ color: '#4A403A' }}
                  >
                    created@fundacionlumen.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FFF9F3' }}
                >
                  <Phone size={24} style={{ color: '#C25E3E' }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: '#4A403A' }}
                  >
                    Teléfono
                  </h3>
                  <a
                    href="tel:+5548998681376"
                    className="font-light hover:underline"
                    style={{ color: '#4A403A' }}
                  >
                    +55 48 99868-1376
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FFF9F3' }}
                >
                  <MapPin size={24} style={{ color: '#C25E3E' }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: '#4A403A' }}
                  >
                    Ubicación
                  </h3>
                  <p
                    className="font-light"
                    style={{ color: '#4A403A' }}
                  >
                    Florianópolis, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-2">
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#FFF9F3' }}
              >
                {/* AQUI ESTÁ A ALTERAÇÃO: FormSubmit Real */}
                <form
                  action="https://formsubmit.co/created@fundacionlumen.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Configurações ocultas (Anti-spam e Template) */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name */}
                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: '#4A403A' }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                      style={{
                        borderColor: '#E8DFD3',
                        backgroundColor: '#FDFCF8',
                        color: '#4A403A',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: '#4A403A' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                      style={{
                        borderColor: '#E8DFD3',
                        backgroundColor: '#FDFCF8',
                        color: '#4A403A',
                      }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: '#4A403A' }}
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿Cuál es tu consulta?"
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                      style={{
                        borderColor: '#E8DFD3',
                        backgroundColor: '#FDFCF8',
                        color: '#4A403A',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: '#4A403A' }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos más..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none resize-none"
                      style={{
                        borderColor: '#E8DFD3',
                        backgroundColor: '#FDFCF8',
                        color: '#4A403A',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#C25E3E' }}
                  >
                    Enviar Mensaje <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-4 md:px-8 border-t"
        style={{ backgroundColor: '#FFF9F3', borderColor: '#E8DFD3' }}
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
