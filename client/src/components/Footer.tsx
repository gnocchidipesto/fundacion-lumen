export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Fundación Lumen</h3>
            <p className="text-background/80 font-light text-sm leading-relaxed">
              Dedicada a iluminar el camino del despertar de la conciencia a través de la literatura y la filosofía.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors font-light">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#libros" className="text-background/70 hover:text-background transition-colors font-light">
                  La Trilogía
                </a>
              </li>
              <li>
                <a href="#autor" className="text-background/70 hover:text-background transition-colors font-light">
                  El Autor
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors font-light">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors font-light">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors font-light">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors font-light">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 font-light text-sm">
            © {currentYear} Fundación Lumen. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
