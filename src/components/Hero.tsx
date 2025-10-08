import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg text-primary font-semibold tracking-wider uppercase">
              Desenvolvedor Full Stack
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Anderson
              <span className="block text-gradient glow-text">Andrade</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Criando experiências digitais excepcionais com React, TypeScript e tecnologias modernas.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Entre em Contato
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary/50 hover:bg-primary/10"
              >
                Ver Projetos
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Anderson Andrade"
                className="relative rounded-2xl shadow-elegant hover-lift w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
