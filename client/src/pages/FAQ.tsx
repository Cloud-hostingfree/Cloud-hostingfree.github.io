import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of applications do you develop?",
      answer: "We specialize in Android (APK) applications, progressive web apps (PWA), and custom web applications. Our expertise covers native Android development, cross-platform solutions using React Native and Flutter, as well as modern web technologies like React, Next.js, and Node.js.",
    },
    {
      question: "How long does it take to develop an app?",
      answer: "Development timelines vary based on project complexity. A simple app might take 4-6 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed timeline estimates during the initial consultation phase.",
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular sprints and client check-ins. The process typically includes: Discovery & Planning, Design & Prototyping, Development, Testing & QA, Deployment, and ongoing Maintenance & Support.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance packages that include 24/7 monitoring, regular updates, security patches, performance optimization, and technical support. Our maintenance plans are customizable based on your specific needs.",
    },
    {
      question: "How much does it cost to develop an app?",
      answer: "Project costs vary based on complexity, features, and timeline. Simple apps start from $10,000, while complex enterprise solutions can range from $50,000 to $200,000+. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "Will I own the source code?",
      answer: "Yes, upon full payment, you will have complete ownership of the source code and all project deliverables. We provide comprehensive documentation and can assist with knowledge transfer if needed.",
    },
    {
      question: "Can you help publish my app to app stores?",
      answer: "Absolutely! We handle the entire app store submission process, including preparing all required assets, writing descriptions, and ensuring compliance with Apple App Store and Google Play Store guidelines.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign Non-Disclosure Agreements to protect your intellectual property and confidential information. We take client confidentiality very seriously.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, React Native, Flutter, Node.js, Python, Java, Kotlin, Swift, PostgreSQL, MongoDB, AWS, and Azure. We select technologies based on project requirements and long-term sustainability.",
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes, we have extensive experience integrating various third-party services including payment gateways (Stripe, PayPal), social media APIs, analytics platforms, cloud services, and custom APIs.",
    },
    {
      question: "What happens if I need changes after launch?",
      answer: "We provide post-launch support and can implement updates and new features as needed. Changes can be handled through our maintenance packages or as separate project agreements depending on scope.",
    },
    {
      question: "How do you ensure app security?",
      answer: "Security is a top priority. We implement industry best practices including secure coding standards, encryption, secure API communications, regular security audits, and compliance with GDPR, CCPA, and other relevant regulations.",
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
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
              <p className="mb-6 text-muted-foreground">
                Can't find the answer you're looking for? Please get in touch with our team.
              </p>
              <a href="/contact" className="inline-block">
                <button className="rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90">
                  Contact Support
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
