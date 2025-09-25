import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-blue-50/30" />

      {/* Static particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full float"
            style={{
              left: `${10 + ((i * 5) % 80)}%`,
              top: `${15 + ((i * 7) % 70)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-muted-foreground">Hello, I&apos;m</div>

              <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
                Bhuvan Mysore Sridhar
              </h1>

              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Data Engineer & Real-Time Pipeline Builder
                </p>
                <p className="text-lg text-muted-foreground/80">
                  Master&apos;s Student | Problem Solver | Cloud Architecture Enthusiast
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Transforming raw data into actionable insights through modern big data technologies,
              real-time streaming solutions, and scalable cloud-native architectures.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12" asChild>
                  <a
                    href="https://github.com/Bhuvanmysoresridhar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12" asChild>
                  <a
                    href="https://www.linkedin.com/in/bhuvan-ms-731349226"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12" asChild>
                  <a href="mailto:Bhuvanmysoresridhar@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: avatar + badges */}
          <div className="relative flex justify-center">
            <div className="relative float">
              {/* Decorative glows behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full rotate-6 blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full" />

              {/* Profile image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full glass rounded-full p-2 shadow-2xl border-2 border-white/20 pulse-glow">
                  {/* wrapper clips to circle */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/profile.jpeg" /* file must be at public/profile.jpg */
                      alt="Bhuvan Mysore Sridhar"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 glass bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Data Engineer
                </div>

                <div className="absolute -bottom-2 -left-2 glass bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Problem Solver
                </div>

                <div className="absolute top-1/2 -right-6 glass bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg -translate-y-1/2">
                  Cloud Expert
                </div>
              </div>

              {/* Availability chip */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 glass bg-green-500/20 text-green-700 px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" />
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-15 pulse-glow" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 pulse-glow" />
      </div>
    </section>
  );
}
