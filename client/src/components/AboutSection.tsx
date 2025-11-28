import { Scale, Users, Award, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import oabLogo from "@assets/Design_sem_nome_(8)-Photoroom_1764345536562.png";

type StatItem = {
  icon?: LucideIcon;
  image?: string;
  label: string;
  value: string;
};

export default function AboutSection() {
  const stats: StatItem[] = [
    { icon: Award, label: "Anos de Experiência", value: "Quase 20" },
    { icon: Scale, label: "Tribunal do Júri", value: "Especialista" },
    { icon: Users, label: "Defesa Criminal", value: "Estratégica" },
    { image: oabLogo, label: "no Londrina Esporte Clube", value: "Conselheiro da OAB" },
  ];

  return (
    <section id="sobre" className="py-24 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-about-title">
              Experiência e Dedicação em Direito Criminal
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
              Com quase duas décadas de atuação exclusiva em Direito Criminal, Marcelo Camargo construiu uma carreira sólida baseada na defesa estratégica e comprometida de seus clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Especializado e com vasta experiência na defesa criminal e em plenário do Tribunal do Júri oferece uma defesa técnica e humanizada, sempre atento aos detalhes que podem fazer a diferença em cada caso.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sua atuação abrange desde crimes contra a pessoa até defesas complexas em processos de grande repercussão, sempre com o objetivo de garantir os direitos constitucionais de cada cliente. Atuando em vários Tribunais dos Estados da Federação e inclusive junto ao Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF).
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card
                  className="p-6 hover-elevate"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      {stat.icon && <stat.icon className="h-6 w-6 text-primary" />}
                      {stat.image && <img src={stat.image} alt="OAB" className="h-6 w-6 object-contain" />}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
