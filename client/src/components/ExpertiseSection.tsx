import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Gavel, Shield, FileText } from "lucide-react";

export default function ExpertiseSection() {
  const services = [
    {
      icon: Gavel,
      title: "Tribunal do Júri",
      description: "Experiência consolidada na defesa perante o Tribunal do Júri, com sustentação oral estratégica e técnica refinada para garantir a melhor apresentação do caso aos jurados.",
    },
    {
      icon: Shield,
      title: "Defesa Criminal Estratégica",
      description: "Atuação completa em todas as fases do processo criminal, desde a investigação policial até os recursos em tribunais superiores, com análise criteriosa de cada etapa processual.",
    },
    {
      icon: FileText,
      title: "Atuação em Plenário",
      description: "Presença ativa e preparada em audiências e sessões plenárias, com argumentação sólida e conhecimento aprofundado da legislação penal e processual penal.",
    },
  ];

  return (
    <section className="py-24 bg-card" data-testid="section-expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-expertise-title">
            Áreas de Especialização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-expertise-subtitle">
            Atuação focada e especializada em Direito Criminal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
