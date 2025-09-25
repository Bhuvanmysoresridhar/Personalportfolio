import { ResumeViewer } from './resume-viewer';

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 resume-header-entrance">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Professional Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume with detailed information about my experience, 
            education, skills, and projects in data engineering and cloud architecture.
          </p>
        </div>

        <ResumeViewer showPreview={true} />

        <div className="mt-12 resume-content-entrance">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">📄 Interactive PDF Resume</h3>
              <p className="text-muted-foreground mb-4">
                My resume includes clickable links to projects, LinkedIn, GitHub, and email. 
                All links are fully functional in the PDF version for easy navigation.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Clickable Links</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Mobile Optimized</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>ATS Friendly</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border">
              <h3 className="text-xl font-semibold mb-4">📋 Resume Contents</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Master's in IT & Management (Current)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>2+ Years Data Analytics Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>3 Major Data Engineering Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Cloud Technologies & Big Data Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Professional Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}