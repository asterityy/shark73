import { Users, Target, Award, UserCheck, Clock, Heart } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Users,
      title: "Дети и взрослые",
      description: "Программы для всех возрастов — от 3 лет и старше. Индивидуальный подход к каждому ученику.",
    },
    {
      icon: Target,
      title: "Учим с нуля",
      description: "Начните свой путь в единоборствах без страха. Наши тренеры научат правильной технике с самых основ.",
    },
    {
      icon: Award,
      title: "Гарантия результата",
      description: "Программы тренировок, доказавшие свою эффективность. Видимые результаты уже через месяц занятий.",
    },
    {
      icon: UserCheck,
      title: "Внимательные тренеры",
      description: "Опытные наставники с профессиональным спортивным прошлым и педагогическим образованием.",
    },
    {
      icon: Clock,
      title: "Удобное расписание",
      description: "Гибкий график тренировок: утренние, дневные и вечерние группы. Выбирайте удобное время.",
    },
    {
      icon: Heart,
      title: "Бокс доступен всем",
      description: "Демократичные цены и система скидок. Первое пробное занятие бесплатно.",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Почему выбирают нас</p>
          <h2 className="section-title">
            НАШИ <span className="text-gradient">ПРЕИМУЩЕСТВА</span>
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="card-dark hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2 uppercase">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
