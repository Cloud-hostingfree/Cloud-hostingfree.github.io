import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "HealthTrack Pro",
      category: "Mobile App",
      description: "A comprehensive health and fitness tracking application with AI-powered insights.",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      results: "50K+ downloads, 4.8★ rating",
    },
    {
      title: "E-Commerce Platform",
      category: "Web App",
      description: "Scalable e-commerce solution with real-time inventory management.",
      technologies: ["React", "Next.js", "PostgreSQL", "Stripe"],
      results: "Processing $2M+ monthly",
    },
    {
      title: "TaskFlow Manager",
      category: "Mobile & Web",
      description: "Cross-platform project management tool for distributed teams.",
      technologies: ["Flutter", "Firebase", "GraphQL", "AWS"],
      results: "10K+ active users",
    },
    {
      title: "SmartHome Controller",
      category: "IoT App",
      description: "Unified control interface for smart home devices and automation.",
      technologies: ["Android", "Kotlin", "MQTT", "Azure IoT"],
      results: "Integration with 50+ devices",
    },
    {
      title: "EduLearn Platform",
      category: "Web App",
      description: "Interactive learning platform with live video streaming and assessments.",
      technologies: ["React", "WebRTC", "Express", "Redis"],
      results: "Used by 100+ institutions",
    },
    {
      title: "Finance Tracker",
      category: "Mobile App",
      description: "Personal finance management with automated categorization and insights.",
      technologies: ["Swift", "Core Data", "Chart.js", "Plaid API"],
      results: "Featured in App Store",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Explore our portfolio of successful applications and solutions
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Results</h4>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "200+", label: "Happy Clients" },
                { value: "50+", label: "Team Members" },
                { value: "15+", label: "Countries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
