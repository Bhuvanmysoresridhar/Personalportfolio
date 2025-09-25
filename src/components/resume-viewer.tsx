import { Download, ExternalLink, Eye, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ResumeViewerProps {
  showPreview?: boolean;
}

export function ResumeViewer({ showPreview = false }: ResumeViewerProps) {
  const handleDownload = () => {
    // Create a download link for the PDF
    const link = document.createElement('a');
    link.href = '/assets/Bhuvan_Mysore_Sridhar_Resume.pdf';
    link.download = 'Bhuvan_Mysore_Sridhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    // Open PDF in a new tab
    window.open('/assets/Bhuvan_Mysore_Sridhar_Resume.pdf', '_blank');
  };

  if (!showPreview) {
    return (
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleDownload} size="lg">
          <Download className="h-5 w-5 mr-2" />
          Download Resume
        </Button>
        <Button onClick={handleViewPDF} variant="outline" size="lg">
          <Eye className="h-5 w-5 mr-2" />
          View PDF
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto resume-viewer-entrance">
      <Card className="overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          {/* Resume Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Professional Resume</h3>
                <p className="text-primary-foreground/90">
                  Complete overview of my experience, skills, and achievements
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleDownload} 
                  variant="secondary" 
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  onClick={handleViewPDF} 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Full PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="p-6 bg-muted/30">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg bg-white border-2 border-dashed border-primary/20">
                <div className="h-96 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/5 to-accent/10">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Professional Resume</h4>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Complete PDF resume with detailed experience, skills, and project information. 
                    All links are clickable and optimized for ATS systems.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button 
                      onClick={handleDownload} 
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </Button>
                    <Button 
                      onClick={handleViewPDF} 
                      variant="outline"
                      size="lg"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View Online
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>

            {/* Key Skills Summary */}
            <div className="mt-6 p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-3 text-center">Key Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="text-center p-2 bg-primary/5 rounded">Data Engineering</div>
                <div className="text-center p-2 bg-primary/5 rounded">Apache Kafka</div>
                <div className="text-center p-2 bg-primary/5 rounded">AWS Cloud</div>
                <div className="text-center p-2 bg-primary/5 rounded">Python & SQL</div>
                <div className="text-center p-2 bg-primary/5 rounded">Delta Lake</div>
                <div className="text-center p-2 bg-primary/5 rounded">Apache Spark</div>
                <div className="text-center p-2 bg-primary/5 rounded">Real-time Streaming</div>
                <div className="text-center p-2 bg-primary/5 rounded">Lakehouse Architecture</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResumeViewer;