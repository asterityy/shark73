import sharkLogo from "@/assets/shark-logo.png";

const Footer = () => {
  const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#programs", label: "Программы" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={sharkLogo} alt="Shark Fight Club" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display text-lg font-bold tracking-wide">SHARK FIGHT CLUB</div>
              <div className="text-muted-foreground text-xs">Ульяновск</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Copyright */}
          <div className="text-center md:text-right">
            <a
              href="https://vk.com/shark_fight_club_73"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-cyan-glow transition-colors mb-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.58 4 8.102c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.49 2.27 4.675 2.854 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/>
              </svg>
              shark_fight_club_73
            </a>
            <p className="text-xs text-muted-foreground">
              © 2025 SHARK Fight Club
            </p>
            <p className="text-xs text-muted-foreground">
              Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
