import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas e arquitetura escalável.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas para a melhor experiência do usuário.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe eficiente e comunicação clara em projetos.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. 
            Com expertise em React e TypeScript, transformo ideias em aplicações web modernas, 
            responsivas e de alta performance. Meu foco é sempre entregar código de qualidade 
            que não apenas funciona, mas que é sustentável e escalável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-background border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
