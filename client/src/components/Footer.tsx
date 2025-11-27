import { Scale } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">Marcelo Camargo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advocacia especializada em Direito Criminal com quase 20 anos de experiência.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground" data-testid="text-footer-links-title">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-home">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-services">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground" data-testid="text-footer-contact-title">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-footer-email">marceloapcsouza@bol.com.br</li>
              <li data-testid="text-footer-phone">(43) 98402-4725</li>
              <li data-testid="text-footer-address">Av. Luiz Rosseto, 352 - Londrina - PR</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {currentYear} Marcelo Camargo Advocacia. Todos os direitos reservados.
          </p>
          <p className="mt-2" data-testid="text-footer-oab">
            OAB Pr 53.582
          </p>
        </div>
      </div>
    </footer>
  );
}
