export function PrivacyPolicy() {
  return (
    <section className="container mx-auto py-16 px-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-primary">Privacy Policy</h2>
      <p className="mb-4 text-sm text-secondary">Effective Date: July 1, 2025</p>
      <p className="mb-4">
        At Blink, operated by Bytedevs Inc. (“Blink”, “we”, “our”, or “us”), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website at{" "}
        <a href="https://blink.bytedevs.com" className="text-primary underline">
          https://blink.bytedevs.com
        </a>{" "}
        and our Slack application ("the Service").
      </p>
      <p className="mb-4">By using Blink, you agree to the terms outlined in this Privacy Policy.</p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">1. Information We Collect</h3>
      <p className="mb-2">We are committed to collecting only the data necessary to deliver our services. Blink is designed with privacy and minimal data collection in mind.</p>
      <p className="font-medium">a. Information Provided by Slack</p>
      <ul className="list-disc ml-6 mb-2">
        <li>Workspace and user IDs</li>
        <li>Channel IDs where the app is installed</li>
        <li>Basic installation metadata</li>
      </ul>
      <p className="mb-2">We do not collect or store message content.</p>
      <p className="font-medium">b. Message Metadata (Temporarily Stored)</p>
      <ul className="list-disc ml-6 mb-2">
        <li>Message IDs</li>
        <li>Expiration timestamps</li>
      </ul>
      <p className="mb-2">These are securely deleted after the message has been removed.</p>
      <p className="font-medium">c. Billing Information (Future Plans)</p>
      <p className="mb-2">
        Blink is currently free. When paid plans are introduced, billing data (such as name, email, and payment information) may be collected and processed through a secure, third-party payment provider. We will update this policy when that occurs.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">2. How We Use Your Information</h3>
      <ul className="list-disc ml-6 mb-2">
        <li>To operate and maintain the Blink Slack app</li>
        <li>To automatically delete messages after they expire</li>
        <li>To improve functionality, security, and user experience</li>
        <li>To provide customer support and respond to requests</li>
        <li>To communicate updates or new features (when opted in)</li>
      </ul>
      <p className="mb-2">We do not use your data for advertising or profiling.</p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">3. What We Don’t Do</h3>
      <ul className="list-disc ml-6 mb-2">
        <li>We do not store message content</li>
        <li>We do not log message history or user activity</li>
        <li>We do not track or profile users</li>
        <li>We do not share or sell your data to third parties</li>
      </ul>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">4. Data Security</h3>
      <p className="mb-2">
        We apply industry-standard security practices to safeguard all data. Communications between Blink and Slack are encrypted using HTTPS. Any data stored (such as message IDs) is protected with strict access controls and is automatically removed when no longer needed.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">5. Data Retention</h3>
      <p className="mb-2">
        We retain message IDs and expiration timestamps only until the message has been deleted. After that, all related data is permanently removed from our systems.
      </p>
      <p className="mb-2">
        If billing is introduced, account-level information may be retained as required by law or for ongoing customer support.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">6. Your Rights</h3>
      <p className="mb-2">
        Depending on your location, you may have rights under privacy laws such as GDPR or CCPA, including the right to:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Access your data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent or object to processing</li>
      </ul>
      <p className="mb-2">
        To exercise your rights, please contact us at{" "}
        <a href="mailto:hello@bytedevs.com" className="text-primary underline">
          hello@bytedevs.com
        </a>
        .
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">7. Third-Party Services</h3>
      <p className="mb-2">
        Blink integrates with third-party services like Slack and, in the future, payment platforms. Your use of these services is governed by their respective privacy policies. We are not responsible for their data practices.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">8. Changes to This Privacy Policy</h3>
      <p className="mb-2">
        We may update this Privacy Policy to reflect product updates, legal requirements, or feedback. If any material changes are made, we will notify users through Slack or email. Continued use of the Service after changes constitutes acceptance of the revised policy.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2 text-primary">9. Contact Us</h3>
      <p>
        If you have questions or concerns about this Privacy Policy or our data practices, please reach out:
        <br />
        Email:{" "}
        <a href="mailto:hello@bytedevs.com" className="text-primary underline">
          hello@bytedevs.com
        </a>
        <br />
        Website:{" "}
        <a href="https://blink.bytedevs.com" className="text-primary underline">
          https://blink.bytedevs.com
        </a>
      </p>
    </section>
  );
}