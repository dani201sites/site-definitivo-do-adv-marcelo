import { Card, CardContent } from "@/components/ui/card";
import { Building2, UserCheck, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerNetworkSection() {
  const partners = [
    {
      icon: Building2,
      area: "Direito Cível",
      description: "Questões contratuais, indenizações e litígios patrimoniais",
    },
    {
      icon: UserCheck,
      area: "Direito Trabalhista",
      description: "Relações de trabalho e questões previdenciárias",
    },
    {
      icon: Landmark,
      area: "Direito Previdenciário",
      description: "Benefícios, aposentadorias e questões do INSS",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="section-partners">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-partners-title">
            Rede de Parceiros Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-partners-subtitle">
            Através de nossa rede de parceiros especializados, oferecemos soluções jurídicas integradas em outras áreas do direito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card className="hover-elevate h-full" data-testid={`card-partner-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-md">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground" data-testid={`text-partner-area-${index}`}>
                      {partner.area}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-partner-description-${index}`}>
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
