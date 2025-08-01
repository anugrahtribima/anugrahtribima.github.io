import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    company?: string;
    images: string[];
    featured: boolean;
    category: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className={`group overflow-hidden gradient-card border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 shadow-card hover:shadow-elegant animate-slide-up flex flex-col h-full ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]} // Hapus Navigation
          autoplay={{
            delay: 3000, // delay 3 detik
            disableOnInteraction: false,
          }}
          loop={true} // aktifkan loop
          pagination={{ clickable: true }}
          className="aspect-video"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img 
                  src={img} 
                  alt={`${project.title} - ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-tech-orange/20 text-tech-orange border-tech-orange/50">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <i className="text-primary">{project.company}</i>
          </div>
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-6">
          {!project.githubUrl && !project.liveUrl && (
            <i className="text-muted-foreground mb-4 flex-grow">⚠️ This is an internal enterprise/government system and not available as a public demo.</i>
          )}
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 hover:bg-primary/10"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 shadow-glow hover:shadow-elegant"
              asChild
              >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </a>
            </Button>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 text-muted-foreground cursor-not-allowed"
              disabled
              title="This is an internal system and has no public demo"
            >
              🔒 No Public Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export const Projects = () => {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in building scalable backend systems and full-stack applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">Other Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index + featuredProjects.length} 
                />
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
