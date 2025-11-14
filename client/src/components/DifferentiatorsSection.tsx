import { Card, CardContent } from "@/components/ui/card";
import { Target, Briefcase, Users2, TrendingUp } from "lucide-react";

export default function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Target,
      title: "Especialização Exclusiva em Direito Criminal",
      description: "Foco total e dedicação à área criminal, garantindo conhecimento profundo e atualizado da legislação e jurisprudência.",
    },
    {
      icon: Briefcase,
      title: "Experiência Consolidada em Tribunal do Júri",
      description: "Vasta experiência em sustentações orais e defesas perante júri popular, com técnica apurada para sensibilizar e convencer.",
    },
    {
      icon: Users2,
      title: "Atuação Estratégica e Personalizada",
      description: "Cada caso é único e recebe atenção individualizada, com estratégia desenvolvida especificamente para as particularidades de cada situação.",
    },
    {
      icon: TrendingUp,
      title: "Compromisso com Resultados",
      description: "Busca incansável pela melhor solução jurídica possível, sempre com ética, transparência e dedicação total à causa do cliente.",
    },
  ];

  return (
    <section className="py-24 bg-card" data-testid="section-differentiators">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-differentiators-title">
            Diferenciais do Escritório
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-differentiators-subtitle">
            O que torna nossa atuação única e eficaz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-differentiator-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`text-differentiator-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-differentiator-description-${index}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
