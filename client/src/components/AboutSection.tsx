import { Scale, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { icon: Award, label: "Anos de Experiência", value: "20+" },
    { icon: Scale, label: "Tribunal do Júri", value: "Especialista" },
    { icon: Users, label: "Defesa Criminal", value: "Estratégica" },
  ];

  return (
    <section className="py-24 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-about-title">
              Experiência e Dedicação em Direito Criminal
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
              Com quase duas décadas de atuação exclusiva em Direito Criminal, Marcelo Camargo construiu uma carreira sólida baseada na defesa estratégica e comprometida de seus clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Especializado em Tribunal do Júri e com vasta experiência em plenário, oferece uma defesa técnica e humanizada, sempre atento aos detalhes que podem fazer a diferença em cada caso.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sua atuação abrange desde crimes contra a pessoa até defesas complexas em processos de grande repercussão, sempre com o objetivo de garantir os direitos constitucionais de cada cliente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground" data-testid={`text-stat-value-${index}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
