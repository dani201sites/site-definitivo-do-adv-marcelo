import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground" data-testid="section-cta">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl font-bold mb-6" 
          data-testid="text-cta-title"
        >
          Precisa de Defesa Criminal?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xl mb-8 text-primary-foreground/90" 
          data-testid="text-cta-description"
        >
          Entre em contato agora e agende uma consulta para discutir seu caso com um especialista
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
            data-testid="button-cta-whatsapp"
            onClick={() => window.open("https://wa.link/ueom1n", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
            data-testid="button-cta-phone"
            onClick={() => window.location.href = "tel:+5543984024725"}
          >
            <Phone className="mr-2 h-5 w-5" />
            Ligar Agora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
