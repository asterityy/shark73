import { Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Contacts = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефоны",
      lines: ["8 927 820 17 30", "8 922 618 76 79"],
    },
    {
      icon: Clock,
      title: "График работы",
      lines: ["Пн–Пт: 9:00 – 22:00", "Сб: 9:00 – 15:00", "Вс: выходной"],
    },
    {
      icon: MapPin,
      title: "Адрес",
      lines: ["пр-т Нариманова 83/1", "Ульяновск"],
    },
  ];

  return (
    <>
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Map */}
          <div className="rounded-xl overflow-hidden mb-8 border border-border">
            <div className="relative">
              <iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=48.351506%2C54.357568&mode=poi&poi%5Bpoint%5D=48.351506%2C54.357568&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1296685816&source=mapframe&z=17.76"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                className="w-full"
                title="Карта"
              />
              <div className="absolute bottom-4 left-4 bg-card border border-border rounded-lg p-4 max-w-xs">
                <h3 className="font-display text-primary font-bold mb-1">
                  SHARK Fight Club
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  пр-т Нариманова 83/1, Ульяновск
                </p>
                <a
                  href="https://yandex.ru/maps/-/CDH7aMGi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 inline-block"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-dark text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 uppercase">
                  {info.title}
                </h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {info.title === "Телефоны" ? (
                      <a href={`tel:${line.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-card to-secondary rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase">
              Готовы начать тренировки?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Запишитесь на бесплатное пробное занятие и убедитесь сами в качестве
              наших тренировок
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Позвонить и записаться
            </button>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Contacts;
