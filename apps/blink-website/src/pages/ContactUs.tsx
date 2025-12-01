export function ContactUs() {
  const faqs = [
    {
      q: 'What is Blink?',
      a: 'Blink is a Slack app that allows users to send private, self-destructing messages within Slack channels—perfect for sharing sensitive or time-limited information.',
    },
    {
      q: 'How long do Blink messages last?',
      a: 'By default, Blink messages disappear after 24 hours. Custom expiration settings will be available soon.',
    },
    {
      q: 'Is Blink free?',
      a: 'Yes, Blink is currently free to use during our beta period. Paid plans with advanced features may be introduced in the future.',
    },
    {
      q: 'Why can\'t I use Blink in personal conversations?',
      a: 'Currently, Blink only works in public and private Slack channels. It does not support direct messages.',
    },
    {
      q: 'Why can\'t I use Blink in a private channel?',
      a: 'You need to invite the Blink app to a private channel before using it. This is a Slack requirement for apps to access private conversations.',
    },
    {
      q: 'Which platforms does Blink support?',
      a: 'Blink is currently available for Slack. Support for other platforms is under consideration.',
    },
    {
      q: 'Is Blink secure?',
      a: 'Yes. Blink uses end-to-end encryption and never stores message content. Messages are designed to disappear without a trace.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        {/* Contact Card */}
        <div className="card bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 opacity-90">
              For support, feedback, or partnership inquiries, reach out to our team:
            </p>
            <a
              href="mailto:hello@bytedevs.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-primary-600 hover:bg-gray-50 transition-all duration-200 shadow-lg text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@bytedevs.com
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            We're happy to help! Send us an email and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:hello@bytedevs.com"
            className="text-primary-600 hover:text-primary-700 font-semibold underline"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}