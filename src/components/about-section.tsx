import { GraduationCap, Code, Database, Brain } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutSection() {
  const journey = [
    {
      icon: Code,
      title: "High School Coder",
      description: "Started as a curious coder, building console applications and discovering the power of programming."
    },
    {
      icon: GraduationCap,
      title: "Bachelor's in CS",
      description: "Earned Bachelor's in Computer Science, diving deep into algorithms, data structures, and software engineering."
    },
    {
      icon: Database,
      title: "Data Engineering Focus",
      description: "Specialized in building real-time streaming data pipelines and serverless lakehouse architectures."
    },
    {
      icon: Brain,
      title: "Master's in IT & Management",
      description: "Currently pursuing Master's at Illinois Institute of Technology, combining technical expertise with business acumen."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From console apps to building real-time streaming data pipelines and serverless lakehouses, 
            my journey reflects a deep commitment to scalable data engineering, cloud architecture, 
            and meaningful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {journey.map((step, index) => (
            <Card key={index} className="h-full glass border-slate-600/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:shadow-2xl backdrop-blur-xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg border border-blue-400/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  <step.icon className="h-8 w-8 text-blue-300 relative z-10" />
                </div>
                <h3 className="font-semibold text-slate-100">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 shadow-2xl border-slate-600/40 hover:shadow-blue-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Passion & Mission</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about <span className="gradient-text font-semibold">Data Engineering</span>, 
                  <span className="gradient-text font-semibold"> Data Analysis</span>, and 
                  <span className="gradient-text font-semibold"> Business Analysis</span>. 
                  My mission is to bridge the gap between raw data and actionable business insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently in my 2nd year of Master's in Information Technology & Management, 
                  I'm constantly learning and applying cutting-edge technologies to solve 
                  real-world data challenges.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 text-center border border-slate-600/40 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">1.5</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="glass bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 text-center border border-slate-600/40 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-300">Major Projects</div>
              </div>
              <div className="glass bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center border border-slate-600/40 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-slate-300">Technologies</div>
              </div>
              <div className="glass bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-4 text-center border border-slate-600/40 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-slate-300">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}