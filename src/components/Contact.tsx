import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "muliantony146@gmail.com",
      href: "mailto:muliantony146@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 112 327 787",
      href: "tel:+254112327787"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/antony-muli-45304933a",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub", 
      href: "https://github.com/ANTONYMULI12",
      color: "hover:text-gray-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss data science opportunities or collaboration? Let's connect 
            and explore how we can work together to create data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-md bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-border focus:ring-primary"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-border focus:ring-primary resize-none"
                />
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm actively seeking opportunities in data science and open to discussing 
                new projects, collaborations, or just connecting with fellow professionals 
                in the field. Let's explore how we can work together!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-smooth group"
                >
                  <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground mr-4 group-hover:shadow-data transition-smooth">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;