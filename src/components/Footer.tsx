import { Github, Linkedin, Mail, Heart } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-muted-foreground mb-4">
              {portfolioData.personal.subtitle}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                {portfolioData.personal.email}
              </p>
              <p className="text-muted-foreground text-sm">
                {portfolioData.personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} {portfolioData.personal.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};