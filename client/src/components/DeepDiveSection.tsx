import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center mb-12"
            >
              <img
                src={logoImage}
                alt="Logo Marcelo Camargo"
                className="h-56 w-56 object-contain"
                loading="lazy"
                decoding="async"
                data-testid="img-logo"
              />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" 
              data-testid="text-deep-dive-title"
            >
              Por Que Escolher Marcelo Camargo
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed" 
              data-testid="text-deep-dive-description"
            >
              A experiência de quase 20 anos em Direito Criminal trouxe um conhecimento profundo dos tribunais, dos procedimentos e das melhores práticas para a defesa eficaz de cada cliente.
            </motion.p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-3" 
                  data-testid={`item-highlight-${index}`}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-base text-foreground">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={secondaryImage}
              alt="Marcelo Camargo trabalhando"
              className="rounded-md w-[75%] md:w-[70%] h-auto object-contain"
              loading="lazy"
              decoding="async"
              data-testid="img-deep-dive"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
