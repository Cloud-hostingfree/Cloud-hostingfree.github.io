import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
            <p className="mb-8 text-muted-foreground">Last updated: October 7, 2025</p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  DevNexus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
                <p className="mb-4 text-muted-foreground">We collect information that you provide directly to us, including:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Project details and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
                <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">4. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
                <p className="mb-4 text-muted-foreground">You have the right to:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">7. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">8. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:<br />
                  Email: privacy@devnexus.dev<br />
                  Phone: +1 (555) 123-4567
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
