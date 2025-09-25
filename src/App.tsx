import { useState } from 'react';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { ProjectsSection } from './components/projects-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { SimpleWelcome } from './components/simple-welcome';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <SimpleWelcome onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-background portfolio-entrance">
      <Navigation />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}