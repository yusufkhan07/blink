import { FaSlack, FaClock, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Free Beta • No Credit Card Required</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Messages That <span className="gradient-text">Disappear</span>,<br />
              Security That Doesn't
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Send self-destructing messages in Slack. Perfect for sharing sensitive information that shouldn't stick around.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-primary-500" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary-500" />
                <span>Auto-delete messages</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={SLACK_OAUTH_URL}
                className="btn-primary text-lg"
              >
                <FaSlack className="text-xl" />
                Add to Slack
              </a>
              <a
                href="#how-it-works"
                className="btn-outline"
              >
                See How It Works
              </a>
            </div>

            {/* Demo Screenshot */}
            <div className="relative mt-16 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <img
                    src="/app-screenshot-1.png"
                    alt="Blink in action"
                    className="w-full rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg h-64 flex items-center justify-center text-gray-500">Screenshot Preview</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Teams Love Blink</h2>
            <p className="text-xl text-gray-600">Privacy-first messaging for modern teams</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClock className="w-8 h-8" />,
                title: 'Self-Destructing Messages',
                description: 'Set custom expiration times. Messages automatically delete after 24 hours by default.',
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: 'End-to-End Encrypted',
                description: 'Your messages are encrypted and never stored. We can\'t read what we don\'t have.',
              },
              {
                icon: <FaSlack className="w-8 h-8" />,
                title: 'Slack Native',
                description: 'Works seamlessly in your Slack workspace. No new tools to learn.',
              },
            ].map((feature, i) => (
              <div key={i} className="card text-center group hover:border-primary-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to secure messaging</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-secondary-300" />

            {[
              {
                step: '01',
                title: 'Type Your Message',
                description: 'Use the /blink command in any Slack channel',
                code: '/blink your secret message',
              },
              {
                step: '02',
                title: 'Set Expiration',
                description: 'Choose when the message should disappear (default: 24h)',
              },
              {
                step: '03',
                title: 'Auto-Delete',
                description: 'Message vanishes automatically. No trace left behind.',
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold flex items-center justify-center text-lg shadow-lg z-10">
                  {i + 1}
                </div>
                <div className="card mt-16 text-center">
                  <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  {step.code && (
                    <code className="inline-block bg-gray-900 text-green-400 px-4 py-2 rounded-lg text-sm font-mono">
                      {step.code}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Slack Messages?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join teams using Blink to share sensitive information safely. Free during beta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SLACK_OAUTH_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-primary-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              <FaSlack className="text-2xl" />
              Add to Slack - It's Free
            </a>
            <a
              href="mailto:hello@bytedevs.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
