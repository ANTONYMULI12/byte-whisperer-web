import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education & Certifications",
      content: "ALX Virtual Assistant Programme, AI Skills Certificate, Web Development Certificate from Zindua School"
    },
    {
      icon: Award,
      title: "Professional Training",
      content: "Currently enrolled in ALX Pathway College Programme (2025), focusing on cloud computing and leadership"
    },
    {
      icon: Users,
      title: "Experience",
      content: "2+ years in customer service and virtual assistance at Quest Holdings Limited"
    },
    {
      icon: Target,
      title: "Impact",
      content: "Improved client response times by 20% through efficient administrative support and process optimization"
    }
  ];

  const expertise = [
    "Virtual Assistance & Admin Support",
    "AI Tools & Business Productivity", 
    "Customer Service Excellence",
    "Data Entry & Management",
    "Web Development (HTML/CSS/JS)",
    "Digital Content Creation"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Antony
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm an ambitious and adaptable professional building a career in Data Science and Business. 
                My goal is to leverage skills in AI tools, data-driven decision-making, and digital solutions 
                to deliver actionable insights, improve business outcomes, and support organizational growth.
              </p>
              <p className="text-lg">
                With a strong background in virtual assistance, customer service, and administrative support, 
                I bring a unique perspective to data science. My experience at Quest Holdings Limited has honed 
                my skills in client communications, data management, and process optimization - achieving a 20% 
                improvement in client response times.
              </p>
              <p className="text-lg">
                Currently advancing through the ALX Pathway College Programme, I'm passionate about combining 
                technology, analytics, and entrepreneurship to create innovative solutions that address real-world 
                business challenges and drive measurable impact.
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
            { number: "15+", label: "Projects Completed" },
            { number: "20%", label: "Efficiency Improvement" },
            { number: "4", label: "Certifications Earned" },
            { number: "2+", label: "Years Experience" }
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