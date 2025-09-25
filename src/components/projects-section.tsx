import { ExternalLink, Github, Database, Zap, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Stock & Crypto Streaming Data Lakehouse on AWS",
      description: "Built a comprehensive real-time pipeline to ingest live crypto/stock data into Kafka, process it with Apache Spark Structured Streaming, and store curated Bronze–Silver–Gold layers in Delta Lake on AWS S3. Implemented advanced transformations including rolling averages, Bollinger Bands, and Top-5 gainers to enable fast analytics and reporting.",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&h=600&fit=crop&crop=entropy",
      technologies: ["Apache Kafka", "Apache Spark", "Delta Lake", "AWS S3", "Python", "PySpark", "Docker"],
      highlights: [
        "Real-time data ingestion and processing",
        "Multi-layer data architecture (Bronze-Silver-Gold)",
        "Advanced financial analytics transformations",
        "Scalable cloud-native infrastructure"
      ],
      icon: Database,
      color: "bg-blue-500",
      githubUrl: "https://github.com/Bhuvanmysoresridhar/Real-Time-Stock-Crypto-Streaming-Data-Lakehouse-on-AWS"
    },
    {
      title: "Event-Driven Delta Lakehouse with Real-Time Aggregations",
      description: "Built a local-first Delta Lakehouse that ingests CDC-style events into a Bronze layer, cleans/merges them into Silver, and maintains Gold facts and real-time daily aggregates using Delta Change Data Feed. Added comprehensive data-quality checks, reconciliation, and smoke tests for reliability.",
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=800&h=600&fit=crop&crop=entropy",
      technologies: ["PySpark", "Delta Lake", "Kafka", "Great Expectations", "Debezium Connector", "CDC"],
      highlights: [
        "Change Data Capture (CDC) implementation",
        "Data quality and reliability framework",
        "Real-time aggregation pipeline",
        "Comprehensive testing and monitoring"
      ],
      icon: Zap,
      color: "bg-green-500",
      githubUrl: "https://github.com/Bhuvanmysoresridhar/Event-Driven-Delta-Lakehouse-with-Real-Time-Aggregations-Data-Quality-PySpark-Delta-Lake-"
    },
    {
      title: "Serverless Lakehouse using Polars, DuckDB and Delta-rs on AWS",
      description: "Designed a fully serverless data lakehouse on AWS with Firehose, S3, Lambda (Docker), and CDK. Used Polars + Delta Lake (via delta-rs) to enforce schema, perform ACID-compliant transforms, and write Delta tables. Queried S3-based Delta tables using DuckDB for lightning-fast analytics with zero Spark or cluster overhead.",
      image: "https://images.unsplash.com/photo-1644757256739-7782a59712aa?w=800&h=600&fit=crop&crop=entropy",
      technologies: ["AWS CDK", "AWS S3", "AWS Lambda", "AWS Firehose", "Delta Lake", "DuckDB", "Polars", "CloudWatch"],
      highlights: [
        "100% serverless architecture",
        "Cost-efficient data processing",
        "Lightning-fast analytics with DuckDB",
        "Infrastructure as Code with CDK"
      ],
      icon: Cloud,
      color: "bg-purple-500",
      githubUrl: "https://github.com/Bhuvanmysoresridhar/Serverless-Lakehouse-using-Polars-on-AWS"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of modern data engineering principles, 
            showcasing expertise in building scalable, reliable data solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-80"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${project.color} p-3 rounded-full text-white`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/Bhuvanmysoresridhar" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}