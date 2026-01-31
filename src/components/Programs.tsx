import kidsTraining from "@/assets/kids-training.jpg";
import adultTraining from "@/assets/adult-training.jpg";
import womenTraining from "@/assets/women-training.jpg";

const Programs = () => {
  const programs = [
    {
      image: kidsTraining,
      age: "от 3 лет",
      title: "Детские группы",
      description: "Развитие координации, дисциплины и уверенности в себе. Безопасные тренировки под контролем опытных тренеров.",
      features: [
        "Общая физическая подготовка",
        "Основы техники бокса",
        "Развитие ловкости",
        "Работа в команде",
      ],
    },
    {
      image: adultTraining,
      age: "от 18 лет",
      title: "Взрослые группы",
      description: "Интенсивные тренировки для достижения спортивных целей. Подготовка к соревнованиям или занятия для здоровья.",
      features: [
        "Кикбоксинг и бокс",
        "Спарринги",
        "Силовая подготовка",
        "Работа на снарядах",
      ],
    },
    {
      image: womenTraining,
      age: "для женщин",
      title: "Женская группа",
      description: "Специальные тренировки для девушек и женщин. Эффективные занятия для фигуры, самообороны и уверенности в себе.",
      features: [
        "Фитнес-бокс",
        "Кардио тренировки",
        "Техника самообороны",
        "Работа в парах",
      ],
    },
  ];

  const offerings = [
    { title: "Персональные", subtitle: "тренировки" },
    { title: "Групповые", subtitle: "занятия" },
    { title: "Женская", subtitle: "группа" },
    { title: "Пробное", subtitle: "бесплатно" },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Выберите свою программу</p>
          <h2 className="section-title">
            НАШИ <span className="text-gradient">ПРОГРАММЫ</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="card-dark overflow-hidden group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold uppercase">
                    {program.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 uppercase">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-outline w-full">
                Узнать подробнее
              </button>
            </div>
          ))}
        </div>

        {/* Offerings */}
        <div className="card-dark">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center py-6 md:py-8">
                <div className="font-display text-2xl md:text-3xl text-primary font-bold">
                  {offering.title}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide text-sm">
                  {offering.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
