import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart, Brain, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "Real-time dashboard for forecasting business metrics using machine learning models. Implements LSTM networks for time series prediction with 94% accuracy.",
      icon: BarChart,
      tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
      metrics: ["94% Accuracy", "Real-time", "12 Models"],
      gradient: "from-accent to-accent-secondary"
    },
    {
      title: "Customer Segmentation AI",
      description: "Advanced clustering algorithm that identifies customer segments for targeted marketing. Increased conversion rates by 35% through personalized recommendations.",
      icon: Brain,
      tags: ["Python", "Scikit-learn", "K-means", "RFM Analysis"],
      metrics: ["+35% Conversion", "8 Segments", "10K+ Customers"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Data Pipeline Automation",
      description: "Scalable ETL pipeline processing 10TB+ daily data from multiple sources. Automated data quality checks and anomaly detection with 99.9% uptime.",
      icon: Database,
      tags: ["Apache Spark", "AWS", "Docker", "Airflow"],
      metrics: ["10TB+ Daily", "99.9% Uptime", "5 Data Sources"],
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
            Discover how data-driven solutions solve real-world business challenges 
            and create measurable impact.
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
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-muted-foreground/20 hover:bg-muted"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;