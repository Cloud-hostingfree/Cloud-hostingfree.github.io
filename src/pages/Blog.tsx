import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "How to Build Your First Android App",
      excerpt: "A comprehensive guide for beginners to start developing Android applications using modern tools and best practices.",
      category: "Tutorial",
      date: "2025-09-15",
      readTime: "8 min read",
    },
    {
      title: "Top 10 APK Tools for Developers in 2025",
      excerpt: "Discover the essential tools that every Android developer should have in their toolkit for efficient app development.",
      category: "Resources",
      date: "2025-09-10",
      readTime: "6 min read",
    },
    {
      title: "Understanding Mobile App Security Best Practices",
      excerpt: "Learn how to secure your mobile applications against common vulnerabilities and protect user data.",
      category: "Security",
      date: "2025-09-05",
      readTime: "10 min read",
    },
    {
      title: "The Future of Progressive Web Apps",
      excerpt: "Explore how PWAs are revolutionizing mobile web experiences and why they're becoming increasingly popular.",
      category: "Industry Trends",
      date: "2025-08-28",
      readTime: "7 min read",
    },
    {
      title: "Optimizing App Performance: Tips and Tricks",
      excerpt: "Practical strategies to improve your mobile app's performance, reduce load times, and enhance user experience.",
      category: "Performance",
      date: "2025-08-20",
      readTime: "9 min read",
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
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Developer Blog</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Insights, tutorials, and best practices from our team of experts
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Card key={index} className="flex flex-col transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Popular Categories</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Explore articles by topic
              </p>
            </div>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
              {["Tutorial", "Resources", "Security", "Performance", "Industry Trends", "Case Studies"].map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
