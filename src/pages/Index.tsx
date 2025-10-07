import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Smartphone, Code, Wrench, CheckCircle2, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Smartphone,
      title: "APK Development",
      description: "Custom Android applications built with cutting-edge technologies and best practices.",
    },
    {
      icon: Code,
      title: "Web App Creation",
      description: "Modern, responsive web applications tailored to your business needs.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Monitoring",
      description: "24/7 support and monitoring to keep your applications running smoothly.",
    },
  ];

  const features = [
    "Expert Development Team",
    "Agile Development Process",
    "Quality Assurance Testing",
    "Post-Launch Support",
    "Scalable Architecture",
    "Security Best Practices",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-[var(--gradient-hero)]" />
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Expert APK Development &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Maintenance Services
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Transform your ideas into powerful mobile and web applications. Professional development services with ongoing support.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact">
                <Button size="lg" className="shadow-glow">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive development solutions for your business needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Why Choose DevNexus?
              </h2>
              <p className="mb-8 text-muted-foreground">
                We combine technical excellence with business understanding to deliver applications that drive results.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>500+</CardTitle>
                      <CardDescription>Projects Delivered</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle>99.9%</CardTitle>
                      <CardDescription>Uptime Guarantee</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="bg-[var(--gradient-primary)] p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center text-primary-foreground">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Start Your Project?
                </h2>
                <p className="mb-8 text-primary-foreground/90">
                  Let's build something amazing together. Get in touch with our team today.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="shadow-lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      Sign Up Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
