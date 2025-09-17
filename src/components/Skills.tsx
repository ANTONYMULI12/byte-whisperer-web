import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Database, BarChart3, Code, TrendingUp, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      skills: [
        { name: "AI Tools (ChatGPT)", level: 90 },
        { name: "Business Productivity", level: 95 },
        { name: "Process Automation", level: 85 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Database,
      skills: [
        { name: "Microsoft Office Suite", level: 95 },
        { name: "Google Workspace", level: 92 },
        { name: "Data Entry & Management", level: 98 },
        { name: "CRM Tools", level: 88 }
      ]
    },
    {
      title: "Web Development",
      icon: BarChart3,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Canva Design", level: 90 }
      ]
    }
  ];

  const tools = [
    { name: "Virtual Assistance", icon: Code },
    { name: "Customer Service", icon: TrendingUp },
    { name: "AI Integration", icon: Zap },
    { name: "Data Management", icon: Database }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diverse skill set combining technical expertise, AI tools, and business acumen 
            to drive data-driven solutions and organizational growth.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-smooth bg-card">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground mr-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-sm hover:shadow-md transition-smooth border border-border"
              >
                <tool.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-card-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;