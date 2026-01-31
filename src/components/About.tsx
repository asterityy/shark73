import { Check } from "lucide-react";
import sharkLogo from "@/assets/shark-logo.png";
import ContactForm from "./ContactForm";
import { useState } from "react";

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    "Профессиональные тренеры с опытом выступлений",
    "Современное оборудование и инвентарь",
    "Дружелюбная атмосфера для начинающих",
    "Подготовка к соревнованиям любого уровня",
    "Индивидуальный подход к каждому ученику",
  ];

  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-card border border-border rounded-xl p-8 glow-box">
                <img 
                  src={sharkLogo} 
                  alt="Shark Fight Club Logo" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-lg">
                <div className="font-display text-2xl font-bold">5+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-subtitle">О клубе</p>
              <h2 className="section-title mb-2">
                <span className="text-gradient">SHARK FIGHT CLUB</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6">
                Мы — команда профессионалов, объединённых любовью к боевым
                искусствам. Наша миссия — сделать единоборства доступными для каждого,
                независимо от возраста и уровня подготовки.
              </p>
              
              <p className="text-muted-foreground mb-8">
                В нашем клубе царит атмосфера взаимоуважения и поддержки. Здесь новички
                становятся чемпионами, а каждая тренировка — это шаг к лучшей версии себя.
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Присоединиться к нам
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default About;
