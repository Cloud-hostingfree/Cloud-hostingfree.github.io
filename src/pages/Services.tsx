import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Code, Wrench, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "APK Development",
      description: "Professional Android application development tailored to your needs.",
      features: [
        "Native Android development",
        "Cross-platform solutions",
        "UI/UX design integration",
        "App Store optimization",
        "Performance optimization",
        "Third-party integrations",
      ],
    },
    {
      icon: Code,
      title: "Web App Creation",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js development",
        "Progressive Web Apps (PWA)",
        "Responsive design",
        "API development & integration",
        "Database architecture",
        "Cloud deployment",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Monitoring",
      description: "24/7 support and monitoring to ensure your applications run smoothly.",
      features: [
        "24/7 system monitoring",
        "Regular security updates",
        "Performance optimization",
        "Bug fixes & patches",
        "Feature enhancements",
        "Technical support",
      ],
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
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprehensive development and maintenance solutions for your business
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="grid gap-8 md:grid-cols-2">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Key Features</h3>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Let's discuss your project requirements and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/contact">
                  <Button size="lg" className="shadow-glow">
                    Get a Quote
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
