import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://wa.link/ueom1n", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Avenida Luiz Rosseto, nº 352\nJardim Caravele - Londrina - PR",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "marceloapcsouza@bol.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(43) 98402-4725",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Estamos prontos para atendê-lo e discutir seu caso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle data-testid="text-form-title">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="input-email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    data-testid="input-phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    data-testid="input-message"
                    placeholder="Descreva brevemente seu caso..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-contact-info-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground" data-testid={`text-contact-info-title-${index}`}>
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line" data-testid={`text-contact-info-content-${index}`}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://maps.google.com/maps?q=Avenida+Luiz+Rosseto+352+Jardim+Caravele+Londrina+PR+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                  className="h-64"
                  data-testid="map-location"
                />
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card 
                className="hover-elevate cursor-pointer" 
                data-testid="card-instagram-personal"
                onClick={() => window.open("https://www.instagram.com/marcelo.camarg0", "_blank")}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-md">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">Instagram Pessoal</h3>
                      <p className="text-xs text-muted-foreground">@marcelo.camarg0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="hover-elevate cursor-pointer" 
                data-testid="card-instagram-professional"
                onClick={() => window.open("https://www.instagram.com/marcelocamargoadv", "_blank")}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-md">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">Instagram Profissional</h3>
                      <p className="text-xs text-muted-foreground">@marcelocamargoadv</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
