import { Database, Cloud, Zap, BarChart3, Cpu, Code2, GitBranch, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function SkillsSection() {
  const technicalSkills = [
    {
      category: "Data Engineering",
      icon: Database,
      skills: ["Apache Kafka", "Apache Spark", "Delta Lake", "PySpark", "Debezium", "CDC"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS S3", "AWS Lambda", "AWS CDK", "AWS Firehose", "Docker", "Serverless"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      category: "Analytics & Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Tableau", "Python Analytics", "SQL", "Data Modeling", "ETL"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      category: "Programming & Development",
      icon: Code2,
      skills: ["Python", "SQL", "Pandas", "NumPy", "DuckDB", "Polars"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      category: "Big Data & Streaming",
      icon: Zap,
      skills: ["Real-time Processing", "Stream Analytics", "Event-driven Architecture", "Microservices"],
      color: "bg-cyan-500/10 text-cyan-600"
    },
    {
      category: "Tools & Collaboration",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Jira", "Agile", "CI/CD", "Code Review"],
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  const softSkills = [
    { skill: "Problem Solving", level: 95 },
    { skill: "Team Collaboration", level: 90 },
    { skill: "Technical Communication", level: 88 },
    { skill: "Project Management", level: 85 },
    { skill: "Leadership", level: 82 },
    { skill: "Mentoring", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-blue-800/10 to-purple-800/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning data engineering, cloud infrastructure, 
            and modern development practices to build scalable, efficient solutions.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <Card key={index} className="h-full glass border-slate-600/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-400/30">
                    <category.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-slate-100">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`${category.color} border-0 hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="glass rounded-3xl p-8 shadow-2xl border-slate-600/40">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center border border-green-400/30">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Core Competencies</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Beyond technical skills, I bring strong soft skills that enable effective collaboration, 
                clear communication, and successful project delivery in dynamic team environments.
              </p>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-200 font-medium">{item.skill}</span>
                    <span className="text-blue-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}