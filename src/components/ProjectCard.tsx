import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

const ProjectCard = ({ title, description, technologies, features }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-cyber-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border border-cyber-teal/20 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="font-orbitron text-lg text-cyber-dark group-hover:text-cyber-teal transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-cyber-teal/10 text-cyber-teal border border-cyber-teal/30 hover:bg-cyber-teal hover:text-white transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-cyber-dark">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-cyber-teal mr-2">▶</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;