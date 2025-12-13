import { FaEnvelope, FaSlack, FaArrowRight, FaQuestionCircle } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-turquoise-50 rounded-2xl mb-6">
            <FaEnvelope className="w-8 h-8 text-turquoise-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            How can we <span className="text-gradient-coral">help?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about features, pricing, or security, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl -mt-10 relative z-10">
        {/* Contact Cards Grid */}
        <div className="max-w-2xl mx-auto mb-24">
          {/* Email Support */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-turquoise-400 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-turquoise-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <FaEnvelope className="w-8 h-8 text-turquoise-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Email Support</h3>
            <p className="text-gray-600 mb-8">
              For general inquiries, security questions, or partnership opportunities.
            </p>
            <a 
              href="mailto:hello@bytedevs.com" 
              className="inline-flex items-center gap-2 text-turquoise-600 font-bold hover:gap-3 transition-all text-lg"
            >
              hello@bytedevs.com <FaArrowRight />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about Blink.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-coral-200 transition-colors duration-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                  <span className="bg-gray-50 p-2 rounded-full group-open:bg-coral-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-400 group-open:text-coral-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}