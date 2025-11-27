import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Especialização", href: "#especializacao" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold text-foreground" data-testid="text-logo">
              Marcelo Camargo Advocacia
            </span>
          </div>

          {!isScrolled && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-opacity duration-300"
                  data-testid="button-menu-toggle"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                    <span className="font-serif text-lg font-bold text-foreground">
                      Menu
                    </span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                        data-testid={`link-menu-${index}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </motion.header>
  );
}
