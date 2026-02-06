import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-light tracking-widest">CONECTA CON NOSOTROS</span>
          <h2 className="text-4xl font-serif font-bold text-foreground mt-4">
            Inicia tu Viaje
          </h2>
          <p className="text-foreground/60 font-light mt-6 max-w-lg mx-auto">
            Descubre cómo la Fundación Lumen puede acompañarte en tu despertar de conciencia
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto: created@fundacionlumen.com"
              className="text-foreground/60 hover:text-primary transition-colors font-light text-sm"
            >
              created@fundacionlumen.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2">Teléfono</h3>
            <a
              href="tel:+5548998681376"
              className="text-foreground/60 hover:text-primary transition-colors font-light text-sm"
            >
              +55 (48) 99868-1376
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="text-foreground/60 font-light text-sm">
              Florianópolis, Brasil
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-border mx-auto mb-16" />

        {/* Newsletter */}
        <div className="bg-secondary/50 p-12 rounded-sm">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
            Suscríbete a nuestro boletín
          </h3>
          <p className="text-foreground/60 font-light text-center mb-8">
            Recibe actualizaciones sobre nuevos libros, eventos y reflexiones espirituales
          </p>

          
          <form 
            action="https://formsubmit.co/created@fundacionlumen.com" 
            method="POST" 
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="email" 
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 bg-background border border-border rounded-sm text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary font-light"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm font-light tracking-wide whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
