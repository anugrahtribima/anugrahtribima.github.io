import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-y-110"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${index * 0.1 + 0.5}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in backend development with strong full-stack capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Backend Skills */}
          <Card className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 shadow-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-tech-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Backend</h3>
              <p className="text-muted-foreground">Server-side development & architecture</p>
            </div>
            <div className="space-y-4">
              {portfolioData.skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Card>

          {/* Frontend Skills */}
          <Card className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 shadow-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-tech-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Frontend</h3>
              <p className="text-muted-foreground">User interface & experience</p>
            </div>
            <div className="space-y-4">
              {portfolioData.skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Card>

          {/* Tools & DevOps */}
          <Card className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 shadow-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-tech-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Tools</h3>
              <p className="text-muted-foreground">Development & deployment tools</p>
            </div>
            <div className="space-y-4">
              {portfolioData.skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Card>
        </div>
        
        {/* Additional badges for quick overview */}
        <div className="mt-12 text-center animate-fade-in">
          <h4 className="text-xl font-semibold mb-6 text-foreground">Technologies I Work With</h4>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              ...portfolioData.skills.backend,
              ...portfolioData.skills.frontend,
              ...portfolioData.skills.tools
            ].map((skill) => (
              <Badge 
                key={skill.name} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {skill.icon} {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};