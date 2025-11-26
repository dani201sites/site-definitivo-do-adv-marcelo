import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@assets/WhatsApp_Image_2025-11-13_at_18.23.27_1763082446079.jpg";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-[90vh] min-h-[750px] md:h-[80vh] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" data-testid="text-hero-title">
          Marcelo Camargo Advocacia
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-white/95" data-testid="text-hero-subtitle">
          20 Anos Defendendo Seus Direitos no Direito Criminal
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto" data-testid="text-hero-description">
          Especialista em Tribunal do Júri e Defesa Criminal com atuação estratégica e personalizada
        </p>
        <Button
          size="lg"
          className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
          data-testid="button-hero-contact"
          onClick={() => window.open("https://wa.link/ueom1n", "_blank")}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Agende uma Consulta
        </Button>
      </div>
    </section>
  );
}
