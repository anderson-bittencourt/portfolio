import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+55 51 98636-7053",
      link: "",
      description: "Envie uma mensagem",
    },
    {
      icon: Mail,
      title: "Email",
      value: "anderson.r.andrade01@gmail.com",
      link: "mailto:anderson.r.andrade01@gmail.com",
      description: "Envie um email",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Entre em Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Vamos trabalhar juntos? Estou sempre aberto a novos projetos e oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium break-all"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 animate-fade-in">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button 
                key={index}
                variant="outline"
                size="lg"
                asChild
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <Icon className="mr-2" size={20} />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
