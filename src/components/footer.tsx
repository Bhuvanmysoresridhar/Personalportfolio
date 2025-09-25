import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Bhuvan Mysore Sridhar</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Data Engineer passionate about building scalable data solutions 
              and real-time analytics platforms that drive business value.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-slate-700 hover:bg-slate-600 text-slate-100"
                asChild
              >
                <a href="https://github.com/Bhuvanmysoresridhar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-slate-700 hover:bg-slate-600 text-slate-100"
                asChild
              >
                <a href="https://www.linkedin.com/in/bhuvan-ms-731349226" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-slate-700 hover:bg-slate-600 text-slate-100"
                asChild
              >
                <a href="mailto:Bhuvanmysoresridhar@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-slate-700 hover:bg-slate-600 text-slate-100"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>by Bhuvan Mysore Sridhar</span>
          </div>
          
          <div className="text-xs text-slate-400">
            © 2025 Bhuvan Mysore Sridhar. All rights reserved. | Currently seeking opportunities in Data Engineering
          </div>
          
          <div className="text-xs text-slate-400">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}