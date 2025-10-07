import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional software solutions that empower businesses to succeed.",
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Our diverse team of experts brings years of experience in mobile and web development.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards of code quality, security, and performance.",
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships with our clients.",
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
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">About DevNexus</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We are a team of passionate developers, designers, and strategists dedicated to creating innovative software solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, DevNexus emerged from a simple vision: to bridge the gap between innovative ideas and powerful, scalable applications. What started as a small team of three developers has grown into a full-service development agency with over 50 talented professionals.
                </p>
                <p>
                  Over the years, we've worked with startups, SMBs, and enterprise clients across various industries. From simple Android apps to complex enterprise solutions, we've tackled challenges of all sizes with the same dedication and attention to detail.
                </p>
                <p>
                  Today, DevNexus stands at the forefront of modern application development, combining cutting-edge technologies with time-tested development methodologies to deliver solutions that not only meet but exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Our Leadership</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Experienced professionals leading the way
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Sarah Johnson", role: "CEO & Founder", bio: "15+ years in software development and business strategy." },
                { name: "Michael Chen", role: "CTO", bio: "Expert in mobile and web technologies with 12+ years experience." },
                { name: "Emily Rodriguez", role: "Head of Design", bio: "Award-winning designer specializing in UX/UI for mobile apps." },
              ].map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto" />
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
