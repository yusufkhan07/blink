export function PrivacyPolicy() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            <span className="font-medium">Effective Date:</span> July 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            At Blink, operated by Bytedevs Inc. ("Blink", "we", "our", or "us"), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website at{" "}
            <a href="https://blink.bytedevs.com" className="text-primary-600 hover:text-primary-700 underline">
              https://blink.bytedevs.com
            </a>{" "}
            and our Slack application ("the Service").
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By using Blink, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We are committed to collecting only the data necessary to deliver our services. Blink is designed with privacy and minimal data collection in mind.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">a. Information Provided by Slack</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Workspace and user IDs</li>
                  <li>Channel IDs where the app is installed</li>
                  <li>Basic installation metadata</li>
                </ul>
                <p className="text-gray-700 mt-2 font-medium">We do not collect or store message content.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">b. Message Metadata (Temporarily Stored)</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Message IDs</li>
                  <li>Expiration timestamps</li>
                </ul>
                <p className="text-gray-700 mt-2">These are securely deleted after the message has been removed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">c. Billing Information (Future Plans)</h3>
                <p className="text-gray-700">
                  Blink is currently free. When paid plans are introduced, billing data (such as name, email, and payment information) may be collected and processed through a secure, third-party payment provider. We will update this policy when that occurs.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>To operate and maintain the Blink Slack app</li>
              <li>To automatically delete messages after they expire</li>
              <li>To improve functionality, security, and user experience</li>
              <li>To provide customer support and respond to requests</li>
              <li>To communicate updates or new features (when opted in)</li>
            </ul>
            <p className="text-gray-700 mt-4 font-medium">We do not use your data for advertising or profiling.</p>
          </div>

          {/* Section 3 */}
          <div className="card bg-primary-50 border-primary-200">
            <h2 className="text-2xl font-bold mb-4 text-primary-700">3. What We Don't Do</h2>
            <ul className="space-y-2">
              {[
                'We do not store message content',
                'We do not log message history or user activity',
                'We do not track or profile users',
                'We do not share or sell your data to third parties',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">4. Data Security</h2>
            <p className="text-gray-700">
              We apply industry-standard security practices to safeguard all data. Communications between Blink and Slack are encrypted using HTTPS. Any data stored (such as message IDs) is protected with strict access controls and is automatically removed when no longer needed.
            </p>
          </div>

          {/* Section 5 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain message IDs and expiration timestamps only until the message has been deleted. After that, all related data is permanently removed from our systems.
            </p>
            <p className="text-gray-700">
              If billing is introduced, account-level information may be retained as required by law or for ongoing customer support.
            </p>
          </div>

          {/* Section 6 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have rights under privacy laws such as GDPR or CCPA, including the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent or object to processing</li>
            </ul>
            <p className="text-gray-700">
              To exercise your rights, please contact us at{" "}
              <a href="mailto:hello@bytedevs.com" className="text-primary-600 hover:text-primary-700 underline font-medium">
                hello@bytedevs.com
              </a>
              .
            </p>
          </div>

          {/* Section 7 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">7. Third-Party Services</h2>
            <p className="text-gray-700">
              Blink integrates with third-party services like Slack and, in the future, payment platforms. Your use of these services is governed by their respective privacy policies. We are not responsible for their data practices.
            </p>
          </div>

          {/* Section 8 */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy to reflect product updates, legal requirements, or feedback. If any material changes are made, we will notify users through Slack or email. Continued use of the Service after changes constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* Section 9 */}
          <div className="card bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-0">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please reach out:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:hello@bytedevs.com" className="underline hover:opacity-80">
                  hello@bytedevs.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://blink.bytedevs.com" className="underline hover:opacity-80">
                  https://blink.bytedevs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}