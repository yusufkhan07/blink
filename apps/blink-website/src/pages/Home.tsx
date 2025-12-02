import { FaSlack, FaClock, FaShieldAlt, FaLock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Screen Design */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Left Side - Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-right">
              {/* Timer Badge */}
              <div className="timer-badge inline-flex">
                <FaClock className="w-5 h-5" />
                <span>Messages that vanish in 24h</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Send Secrets.<br />
                <span className="text-gradient-coral">Not Receipts.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Blink lets you share sensitive info in Slack that automatically disappears. No screenshots, no traces, no worries.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SLACK_OAUTH_URL} className="btn-slack gap-2">
                  <FaSlack className="w-5 h-5" />
                  Add to Slack
                </a>
                <a href="#how-it-works" className="btn-outline-dashed">
                  See How It Works →
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-turquoise-500" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-turquoise-500" />
                  <span>Free beta</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              {/* Animated Message Bubbles */}
              <div className="space-y-4">
                <div className="message-bubble ml-auto max-w-md">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-coral-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">You</p>
                      <p className="text-gray-700">Here's the password: <code className="bg-gray-100 px-2 py-1 rounded">secret123</code></p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <FaClock />
                        <span>Expires in 23h 59m</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="message-bubble max-w-sm opacity-70">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-turquoise-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Teammate</p>
                      <p className="text-gray-700">Got it, thanks! 👍</p>
                    </div>
                  </div>
                </div>

                {/* Fading Message Indicator */}
                <div className="message-bubble max-w-md ml-auto bg-gray-100 border-dashed opacity-50">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gray-400 w-5 h-5" />
                    <p className="text-gray-500 italic">This message has expired and been deleted</p>
                  </div>
                </div>
              </div>

              {/* Floating Timer */}
              <div className="absolute -top-8 -right-8 text-8xl opacity-10 animate-pulse-slow">
                ⏱️
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-coral-50 to-turquoise-50 -z-10 diagonal-split" />
      </section>

      {/* Features - Bento Box Grid */}
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Blink?</h2>
            <p className="text-xl text-gray-600">Privacy-first messaging for modern teams</p>
          </div>

          <div className="bento-grid">
            {/* Large Feature */}
            <div className="bento-box bento-box-large bg-gradient-to-br from-coral-50 to-coral-100 flex flex-col justify-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Self-Destructing Messages</h3>
              <p className="text-gray-700 text-lg">
                Share passwords, API keys, or sensitive data that automatically vanishes after 24 hours. No manual cleanup needed.
              </p>
            </div>

            {/* Medium Feature */}
            <div className="bento-box bg-turquoise-50">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">Zero Storage</h3>
              <p className="text-gray-700">
                We never store your messages. What we don't have, we can't leak.
              </p>
            </div>

            {/* Medium Feature */}
            <div className="bento-box bg-yellow-50">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-700">
                One click to add to Slack. Start sending secure messages immediately.
              </p>
            </div>

            {/* Wide Feature */}
            <div className="bento-box bento-box-wide bg-gradient-to-r from-turquoise-50 to-turquoise-100">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Encrypted</h3>
                  <p className="text-gray-700">
                    Your messages are encrypted from the moment you send them until they're deleted. Not even we can read them.
                  </p>
                </div>
              </div>
            </div>

            {/* Tall Feature */}
            <div className="bento-box bento-box-tall bg-gradient-to-b from-coral-50 to-yellow-50 flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-bold mb-2">Slack Native</h3>
                <p className="text-gray-700 mb-4">
                  Works seamlessly in your existing Slack workspace. No new apps to learn.
                </p>
              </div>
              <code className="bg-gray-900 text-green-400 px-3 py-2 rounded-lg text-sm font-mono">
                /blink your message
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Timeline */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three steps to secure messaging</p>
          </div>

          {/* Horizontal Flow */}
          <div className="relative">
            {/* Dotted Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 border-t-4 border-dashed border-gray-300 -z-10" />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-coral-500 text-white text-6xl mb-6 shadow-lg">
                  📝
                </div>
                <h3 className="text-2xl font-bold mb-3">Type Your Message</h3>
                <p className="text-gray-600 mb-4">
                  Use the <code className="bg-gray-200 px-2 py-1 rounded">/blink</code> command in any Slack channel
                </p>
                <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                  <code className="text-sm text-gray-700">/blink Here's the API key: abc123</code>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-turquoise-500 text-white text-6xl mb-6 shadow-lg">
                  ⏱️
                </div>
                <h3 className="text-2xl font-bold mb-3">Auto-Timer Starts</h3>
                <p className="text-gray-600 mb-4">
                  Message is sent with a 24-hour countdown timer
                </p>
                <div className="timer-badge">
                  <FaClock />
                  <span>Expires in 23h 59m</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-yellow-500 text-white text-6xl mb-6 shadow-lg">
                  💨
                </div>
                <h3 className="text-2xl font-bold mb-3">Poof! It's Gone</h3>
                <p className="text-gray-600 mb-4">
                  Message automatically deletes. No trace left behind.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 italic text-sm">This message has expired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Security Badge */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-turquoise-500 to-turquoise-700 text-white shadow-2xl mb-6">
                <FaLock className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-black mb-4">Privacy First</h3>
              <p className="text-gray-600 text-lg">
                Built with security and privacy as the foundation, not an afterthought.
              </p>
            </div>

            {/* Right - What We Do/Don't */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-turquoise-500" />
                  What We Do
                </h4>
                <ul className="space-y-3">
                  {[
                    'Encrypt all messages end-to-end',
                    'Auto-delete after expiration',
                    'Comply with GDPR & privacy laws',
                    'Keep your data secure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-turquoise-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FaTimesCircle className="text-coral-500" />
                  What We Don't Do
                </h4>
                <ul className="space-y-3">
                  {[
                    'Store message content',
                    'Track or profile users',
                    'Share data with third parties',
                    'Keep logs of your messages',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaTimesCircle className="text-coral-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal Floating Card */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-turquoise-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-turquoise-500 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Secure Your Slack?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join teams using Blink to share sensitive info safely. Free during beta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={SLACK_OAUTH_URL} className="btn-slack gap-2 text-lg">
                <FaSlack className="w-6 h-6" />
                Add to Slack - It's Free
              </a>
              <a href="mailto:hello@bytedevs.com" className="btn-outline-dashed">
                Request a Demo
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Free during beta • 2-minute setup
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
