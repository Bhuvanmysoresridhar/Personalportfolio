import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "Bhuvanmysoresridhar@gmail.com",
      href: "mailto:Bhuvanmysoresridhar@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "bhuvan-ms-731349226",
      href: "https://www.linkedin.com/in/bhuvan-ms-731349226",
      description: "Connect professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Bhuvanmysoresridhar",
      href: "https://github.com/Bhuvanmysoresridhar",
      description: "View my code"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chicago, IL",
      description: "Available for opportunities"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just talking about data engineering and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-400/30">
                    <method.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-blue-400 hover:text-blue-300 hover:underline block break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{method.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="glass bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 text-center space-y-6 border border-slate-600/40">
            <h3 className="text-2xl font-semibold">Ready to Collaborate?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for a data engineer, have an exciting project, 
              or want to discuss the latest in data technology, I'd love to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:Bhuvanmysoresridhar@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/bhuvan-ms-731349226" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="build/Resume__1.pdf" download="Bhuvan_Mysore_Sridhar_Resume.pdf">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Card className="glass bg-slate-800/30 border-dashed border-slate-600/40">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <h4 className="font-semibold">Current Status</h4>
                </div>
                <p className="text-muted-foreground">
                  🎓 Full-time Master's student (2nd year) at Illinois Institute of Technology
                  <br />
                  🚀 Actively seeking internships and full-time opportunities in Data Engineering
                  <br />
                  💡 Available for freelance projects and consulting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}