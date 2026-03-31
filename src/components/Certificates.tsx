import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import certAI from "@/assets/cert-ai-career-essentials.png";
import certPF from "@/assets/cert-professional-foundations.png";
import certVA from "@/assets/cert-virtual-assistant.png";
import certSQL from "@/assets/cert-sql-data-science.jpg";

const certificates = [
  {
    title: "AI Career Essentials",
    issuer: "ALX",
    date: "July 2024",
    description: "AI Augmented Professional Development Skills in the Digital Age",
    image: certAI,
    verifyUrl: "https://intranet.alxswe.com/certificates/5JExNympBF",
  },
  {
    title: "Professional Foundations",
    issuer: "ALX",
    date: "September 2024",
    description: "Professional Development Skills for the Digital Age",
    image: certPF,
    verifyUrl: "https://intranet.alxswe.com/certificates/mHr9YxZ3FC",
  },
  {
    title: "Virtual Assistant",
    issuer: "ALX",
    date: "April 2025",
    description: "Virtual Assistance Skills in the Digital Age",
    image: certVA,
    verifyUrl: "https://savanna.alxafrica.com/certificates/52N3FfTGBy",
  },
  {
    title: "SQL Data Science Foundations",
    issuer: "JandSinate",
    date: "January 2025",
    description: "SQL Data Science Foundations online course",
    image: certSQL,
    verifyUrl: "/certificates/cert-sql-data-science.pdf",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Award className="w-3 h-3 mr-1" />
            Credentials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-smooth group hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate - ${cert.issuer}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-card-foreground text-lg">
                    {cert.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">
                    Issued by {cert.issuer}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-smooth"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
