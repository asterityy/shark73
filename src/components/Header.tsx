import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import sharkLogo from "@/assets/shark-logo.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О нас" },
    { id: "programs", label: "Программы" },
    { id: "advantages", label: "Преимущества" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img src={sharkLogo} alt="Shark Fight Club" className="h-10 w-10 object-contain" />
              <div>
                <div className="font-display text-xl font-bold tracking-wide">SHARK</div>
                <div className="text-primary text-xs tracking-widest">FIGHT CLUB</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="text-sm font-medium tracking-wide hover:text-primary transition-colors uppercase bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:89278201730" className="flex items-center gap-2 text-primary hover:text-cyan-glow transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Позвонить</span>
              </a>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold px-4 py-2 rounded-md transition-all border border-primary/30 hover:border-primary/60"
              >
                Оставить заявку
              </button>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="btn-primary text-sm"
              >
                Записаться
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => {
                      handleNavClick(link.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-sm font-medium tracking-wide hover:text-primary transition-colors uppercase bg-transparent border-none cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <a href="tel:89278201730" className="flex items-center gap-2 text-primary">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">89278201730</span>
                </a>
                <button 
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary text-sm w-full"
                >
                  Записаться
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
