import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
                  "Backend Development",
                  "API Development",
                  "System Architecture",
                  "Database Optimization",
                  "Task Automation",
                  "Fullstack Integration",
                  "Deployment & Server Configuration"
                ];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-accent bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.personal.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="shadow-glow hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};