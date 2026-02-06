interface BookCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  isReverse?: boolean;
}

export default function BookCard({
  number,
  title,
  subtitle,
  description,
  imageUrl,
  isReverse = false,
}: BookCardProps) {
  return (
    <div className="py-24 border-b border-border last:border-b-0">
      <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xs">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Number */}
          <div className="mb-6">
            <span className="text-6xl font-serif font-light text-primary/20">{number}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-primary font-light mb-8 italic">
            {subtitle}
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-primary mb-8" />

          {/* Description */}
          <div className="space-y-6">
            {description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-light tracking-wide"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
