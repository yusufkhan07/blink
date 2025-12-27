export function TermsOfService() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            <span className="font-medium">Effective Date:</span> July 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Blink! These Terms of Service ("Terms") govern your use of the Blink website at{" "}
            <a href="https://blink.bytedevs.com" className="text-primary-600 hover:text-primary-700 underline">
              https://blink.bytedevs.com
            </a>{" "}
            and our Slack application (collectively, the "Service"), operated by Bytedevs Inc. ("we", "us", or "our").
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">1. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Blink is a Slack application that allows users to send self-destructing messages. We do not store message content permanently. Once a message expires, it is deleted from our systems and from Slack.
            </p>
          </div>

          {/* Section 2 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">2. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for your use of the Service and for any content you provide, including compliance with applicable laws, rules, and regulations. You agree not to use the Service to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Violate any laws or regulations.</li>
              <li>Infringe the rights of any third party, including intellectual property rights.</li>
              <li>Distribute malware, viruses, or other harmful software.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">3. Intellectual Property</h2>
            <p className="text-gray-700">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Bytedevs Inc. and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
          </div>

          {/* Section 4 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">4. Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Bytedevs Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </div>

          {/* Section 6 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">6. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          {/* Section 7 */}
          <div className="card bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-0">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:hello@bytedevs.com" className="underline hover:opacity-80">
                  hello@bytedevs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
