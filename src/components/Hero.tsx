import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-data-science.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">DS</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Data Science</span>
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Transforming complex data into actionable insights through advanced analytics, 
          machine learning, and statistical modeling.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 text-lg border-white/30 text-white hover:bg-white/10"
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-primary rounded-full opacity-15 blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;