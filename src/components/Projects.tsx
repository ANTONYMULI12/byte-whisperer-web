import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart, Brain, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Service Analytics Dashboard",
      description: "Built an analytics dashboard to track and improve customer service metrics. Implemented data visualization to monitor response times, leading to 20% improvement in efficiency.",
      icon: BarChart,
      tags: ["Data Analysis", "Excel", "Dashboard", "KPI Tracking"],
      metrics: ["20% Improvement", "Real-time", "Multi-metrics"],
      gradient: "from-accent to-accent-secondary"
    },
    {
      title: "AI-Powered Virtual Assistant System",
      description: "Designed and implemented AI tool integration for business productivity. Streamlined administrative processes using ChatGPT and automation tools for enhanced client support.",
      icon: Brain,
      tags: ["AI Tools", "ChatGPT", "Automation", "Process Optimization"],
      metrics: ["95% Accuracy", "Automated", "Multi-client"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Web Development Portfolio",
      description: "Developed responsive web applications using HTML, CSS, and JavaScript. Projects hosted on GitHub showcasing front-end development skills and modern design principles.",
      icon: Users,
      tags: ["HTML", "CSS", "JavaScript", "GitHub"],
      metrics: ["Responsive", "Modern UI", "Version Controlled"],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how I apply data analysis, AI tools, and technical skills 
            to solve business challenges and drive measurable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-md hover:shadow-data transition-smooth overflow-hidden bg-card hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <Badge 
                      key={metricIndex}
                      variant="secondary" 
                      className="bg-muted text-muted-foreground font-medium"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="data" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open('https://github.com/ANTONYMULI12', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-muted-foreground/20 hover:bg-muted"
                    onClick={() => window.open('https://github.com/ANTONYMULI12', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8"
            onClick={() => window.open('https://github.com/ANTONYMULI12', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;