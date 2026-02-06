import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

/**
 * FUNDACIÓN LUMEN - CONTACT PAGE
 * Design System: Warm & Dynamic
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Email inválido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setLoading(false);
    }
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
                    href="mailto:info@fundacionlumen.com"
                    className="font-light hover:underline"
                    style={{ color: '#4A403A' }}
                  >
                    info@fundacionlumen.com
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
                    href="tel:+34123456789"
                    className="font-light hover:underline"
                    style={{ color: '#4A403A' }}
                  >
                    +34 123 456 789
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
                    Madrid, España
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
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} style={{ color: '#C25E3E' }} className="mx-auto mb-4" />
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: '#4A403A' }}
                    >
                      ¡Mensaje Enviado!
                    </h3>
                    <p
                      className="font-light"
                      style={{ color: '#4A403A' }}
                    >
                      Gracias por contactarnos. Nos pondremos en contacto pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.name ? '#C25E3E' : '#E8DFD3',
                          backgroundColor: '#FDFCF8',
                          color: '#4A403A',
                        }}
                      />
                      {errors.name && (
                        <p className="text-sm mt-1" style={{ color: '#C25E3E' }}>
                          {errors.name}
                        </p>
                      )}
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.email ? '#C25E3E' : '#E8DFD3',
                          backgroundColor: '#FDFCF8',
                          color: '#4A403A',
                        }}
                      />
                      {errors.email && (
                        <p className="text-sm mt-1" style={{ color: '#C25E3E' }}>
                          {errors.email}
                        </p>
                      )}
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
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿Cuál es tu consulta?"
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.subject ? '#C25E3E' : '#E8DFD3',
                          backgroundColor: '#FDFCF8',
                          color: '#4A403A',
                        }}
                      />
                      {errors.subject && (
                        <p className="text-sm mt-1" style={{ color: '#C25E3E' }}>
                          {errors.subject}
                        </p>
                      )}
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
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos más..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none resize-none"
                        style={{
                          borderColor: errors.message ? '#C25E3E' : '#E8DFD3',
                          backgroundColor: '#FDFCF8',
                          color: '#4A403A',
                        }}
                      />
                      {errors.message && (
                        <p className="text-sm mt-1" style={{ color: '#C25E3E' }}>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-full text-white font-semibold transition-all hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#C25E3E' }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
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
