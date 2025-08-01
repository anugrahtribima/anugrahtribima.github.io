import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, UserRoundSearchIcon } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating robust backend systems and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {portfolioData.personal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-foreground">2+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground">Available for Projects</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">What I Do Best:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "API Development",
                  "System Architecture",
                  "Database Optimization",
                  "Backend Development",
                  "Task Automation",
                  "Fullstack Integration",
                  "Deployment & Server Configuration"
                ].map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 shadow-card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-foreground">{exp.position}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};