import sharkLogo from "@/assets/shark-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { value: "5+", label: "лет опыта" },
    { value: "200+", label: "учеников" },
    { value: "50+", label: "побед" },
  ];

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(220 25% 8% / 0.7), hsl(220 25% 8% / 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <div className="inline-block p-6 bg-card/80 border border-border rounded-xl glow-box">
              <img 
                src={sharkLogo} 
                alt="Shark Fight Club" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-primary text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
            Ульяновск
          </p>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
            КЛУБ
          </h1>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
            ЕДИНОБОРСТВ
          </h1>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-8">
            SHARK
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Кикбоксинг и бокс для детей и взрослых. Персональные и групповые
            тренировки с гарантией результата
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="btn-primary text-base"
            >
              Записаться на тренировку
            </button>
            <a href="#programs" className="btn-outline text-base">
              Наши программы
            </a>
          </div>

          {/* Application Form Button */}
          <div className="mb-16">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-primary/30 hover:border-primary/60"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Оставить заявку
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-primary font-bold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Hero;
