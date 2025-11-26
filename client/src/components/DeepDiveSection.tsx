import { CheckCircle } from "lucide-react";
import secondaryImage from "@assets/WhatsApp_Image_2025-11-13_at_22.08.42_1763082545333.jpg";
import logoImage from "@assets/WhatsApp_Image_2025-11-13_at_22.18.11-Photoroom_1763085413586.png";

export default function DeepDiveSection() {
  const highlights = [
    "Análise detalhada de cada caso com estratégia personalizada",
    "Acompanhamento integral em todas as fases processuais",
    "Comunicação transparente e constante com o cliente",
    "Compromisso com resultados e defesa dos direitos constitucionais",
  ];

  return (
    <section className="py-24 bg-background" data-testid="section-deep-dive">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex justify-center mb-12">
              <img
                src={logoImage}
                alt="Logo Marcelo Camargo"
                className="h-56 w-56 object-contain"
                data-testid="img-logo"
              />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-deep-dive-title">
              Por Que Escolher Marcelo Camargo
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-deep-dive-description">
              A experiência de quase 20 anos em Direito Criminal trouxe um conhecimento profundo dos tribunais, dos procedimentos e das melhores práticas para a defesa eficaz de cada cliente.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`item-highlight-${index}`}>
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-base text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <img
              src={secondaryImage}
              alt="Marcelo Camargo trabalhando"
              className="rounded-md w-full max-h-[280px] md:max-h-none h-auto object-cover"
              data-testid="img-deep-dive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
