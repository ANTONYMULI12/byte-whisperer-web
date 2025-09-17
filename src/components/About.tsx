import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "M.S. in Data Science from Stanford University, B.S. in Statistics from UC Berkeley"
    },
    {
      icon: Award,
      title: "Certifications",
      content: "AWS Certified ML Specialist, Google Cloud Professional Data Engineer"
    },
    {
      icon: Users,
      title: "Experience",
      content: "5+ years leading data science teams at Fortune 500 companies"
    },
    {
      icon: Target,
      title: "Impact",
      content: "Delivered $10M+ in business value through data-driven solutions"
    }
  ];

  const expertise = [
    "Machine Learning & AI",
    "Statistical Modeling", 
    "Big Data Analytics",
    "Data Visualization",
    "MLOps & Deployment",
    "Business Intelligence"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate data scientist with a mission to unlock the hidden potential 
                in data and transform it into actionable business insights. With over 5 years 
                of experience in the field, I specialize in building end-to-end machine learning 
                solutions that drive real business impact.
              </p>
              <p className="text-lg">
                My expertise spans the entire data science lifecycle, from data collection and 
                preprocessing to model development, deployment, and monitoring. I believe in the 
                power of data to solve complex problems and create meaningful change in organizations.
              </p>
              <p className="text-lg">
                When I'm not diving deep into datasets, you can find me contributing to open-source 
                projects, mentoring aspiring data scientists, or exploring the latest developments 
                in AI and machine learning.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((area, index) => (
                  <Badge 
                    key={index}
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 border-0 shadow-md hover:shadow-lg transition-smooth bg-card group hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground mb-4 group-hover:shadow-data transition-smooth">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.content}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "10M+", label: "Business Value Created" },
            { number: "15", label: "ML Models in Production" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;