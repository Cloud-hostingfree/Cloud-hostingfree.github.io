import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
            <p className="mb-8 text-muted-foreground">Last updated: October 7, 2025</p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using DevNexus services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">2. Services Description</h2>
                <p className="text-muted-foreground">
                  DevNexus provides professional software development services including APK development, web application creation, and ongoing maintenance and monitoring services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">3. User Responsibilities</h2>
                <p className="mb-4 text-muted-foreground">As a user of our services, you agree to:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">4. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of our services are owned by DevNexus and are protected by international copyright, trademark, and other intellectual property laws. Upon full payment for custom development work, you will own the deliverables as specified in your project agreement.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">5. Payment Terms</h2>
                <p className="mb-4 text-muted-foreground">Payment terms include:</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Prices are subject to change with notice</li>
                  <li>Payment is due as specified in project agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">6. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground">
                  While we strive to provide high-quality services, our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  DevNexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">8. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We will maintain the confidentiality of any proprietary information shared with us during the course of providing services. Both parties agree not to disclose confidential information without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">9. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:<br />
                  Email: legal@devnexus.dev<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Tech Street, San Francisco, CA 94102
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

export default Terms;
