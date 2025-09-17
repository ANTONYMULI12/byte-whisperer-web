import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Database, BarChart3, Code, TrendingUp, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Python/R", level: 95 },
        { name: "TensorFlow/PyTorch", level: 90 },
        { name: "Scikit-learn", level: 92 },
        { name: "Deep Learning", level: 88 }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        { name: "SQL/NoSQL", level: 94 },
        { name: "Apache Spark", level: 85 },
        { name: "ETL Pipelines", level: 90 },
        { name: "Cloud Platforms", level: 87 }
      ]
    },
    {
      title: "Visualization",
      icon: BarChart3,
      skills: [
        { name: "Tableau/PowerBI", level: 92 },
        { name: "D3.js", level: 80 },
        { name: "Matplotlib/Seaborn", level: 95 },
        { name: "Plotly", level: 88 }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: Code },
    { name: "Statistics", icon: TrendingUp },
    { name: "MLOps", icon: Zap },
    { name: "Big Data", icon: Database }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire data science lifecycle, 
            from data collection to model deployment.
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