import { ChevronDown } from 'lucide-react';

interface HeroProps {
  imageUrl: string;
}

export default function Hero({ imageUrl }: HeroProps) {
  const scrollToNext = () => {
    const element = document.getElementById('libros');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block mb-6">
            <span className="text-primary font-serif text-sm tracking-widest">FUNDACIÓN LUMEN</span>
          </div>
        </div>

        <h1 className="text-white font-serif font-bold text-5xl md:text-6xl mb-8 opacity-0 animate-fade-in leading-tight" style={{ animationDelay: '0.4s' }}>
          El Susurro de la Conciencia
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Un viaje transformador hacia el despertar de la conciencia, la gratitud y la expansión universal
        </p>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <span className="text-sm font-light">Descubre la trilogía</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:border-white/50 transition-colors" onClick={scrollToNext}>
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
