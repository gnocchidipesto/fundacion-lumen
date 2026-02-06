interface AuthorProps {
  imageUrl: string;
}

export default function Author({ imageUrl }: AuthorProps) {
  return (
    <section id="autor" className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-full max-w-sm">
              <img
                src={imageUrl}
                alt="A. Arellano"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <span className="text-sm text-primary font-light tracking-widest">EL AUTOR</span>
            </div>

            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              A. Arellano
            </h2>

            <div className="w-12 h-px bg-primary mb-8" />

            <div className="space-y-6 text-foreground/80 font-light">
              <p>
                A. Arellano es un escritor y filósofo dedicado a explorar los misterios de la conciencia humana. Su obra integra filosofía antigua, neurociencia contemporánea y sabiduría mística para ofrecer una perspectiva única sobre el despertar espiritual.
              </p>

              <p>
                A través de la trilogía "El Susurro de la Conciencia", "Una Jornada hacia la Gratitud" y "El Universo Consciente", Arellano invita a los lectores a un viaje transformador que cuestiona nuestras percepciones más profundas sobre la realidad y nuestro lugar en el universo.
              </p>

              <p>
                Su enfoque combina la accesibilidad con la profundidad, permitiendo que lectores de todos los niveles encuentren significado y transformación en sus palabras.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-6">
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-primary transition-colors font-light"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-primary transition-colors font-light"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-primary transition-colors font-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
