import { FaSlack, FaClock, FaShieldAlt, FaLock, FaCheckCircle, FaTimesCircle, FaArrowRight } from 'react-icons/fa';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Screen Design */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Left Side - Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-in-right">
              {/* Timer Badge */}
              <div className="timer-badge inline-flex">
                <FaClock className="w-5 h-5" />
                <span>Messages that vanish in 24h</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Send secrets in Slack that <span className="text-gradient-coral">self-destruct.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
                (passwords, tokens, one-time links).<br/>
                No more pasting creds in chat.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,commands,chat:write.customize,users:read&client_id=819140066320.9092531390403"
                  className="btn-slack gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <FaSlack className="w-5 h-5" />
                  Add to Slack
                </a>
                <a href="#how-it-works" className="btn-outline-dashed">
                  See How It Works <FaArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-gray-500">
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

            {/* Right Side - Lifecycle Visual */}
            <div className="relative flex justify-center items-center">
              {/* Final Lifecycle Illustration */}
              <div className="relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/blink_lifecycle_clean.png"
                  alt="Blink message lifecycle in Slack: Send Secret -> Auto-Delete"
                  className="relative w-full max-w-lg rounded-xl shadow-2xl border border-gray-200/50"
                />
                
                {/* Slack Icon Overlay */}
                <div className="absolute -top-4 -right-4 bg-white p-2 rounded-xl shadow-lg border border-gray-100 animate-float">
                  <FaSlack className="w-8 h-8 text-[#4A154B]" />
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
            {/* Large Feature - Spans 2 columns */}
            <div className="md:col-span-2 bento-box bg-gradient-to-br from-coral-50 to-coral-100 flex flex-col justify-center min-h-[280px]">
              <div className="text-6xl mb-4">💥</div>
              <h3 className="text-2xl font-bold mb-3">It's Gone Forever</h3>
              <p className="text-gray-700 text-lg">
                Once the timer hits zero, the message is wiped from Slack and our servers. No logs, no backups, no trace.
              </p>
            </div>

            {/* Medium Feature */}
            <div className="bento-box bg-turquoise-50 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="text-4xl mb-3">🔑</div>
                <h3 className="text-xl font-bold mb-2">Share Keys Safely</h3>
                <p className="text-gray-700">
                  Stop DMing API keys. Send them via Blink so they don't live in your chat history forever.
                </p>
              </div>
            </div>

            {/* Medium Feature */}
            <div className="bento-box bg-yellow-50 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold mb-2">Zero Friction</h3>
                <p className="text-gray-700">
                  No new logins. No external portals. Just type <code>/blink</code> right where you work.
                </p>
              </div>
            </div>

            {/* Wide Feature - Spans 3 columns */}
            <div className="md:col-span-3 bento-box bg-gradient-to-r from-turquoise-50 to-turquoise-100">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Encrypted</h3>
                  <p className="text-gray-700">
                    Your secrets are encrypted before they leave your device. We can't read them, and neither can Slack.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Feature with Code */}
            <div className="bento-box bg-gradient-to-b from-coral-50 to-yellow-50 flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-3">👨‍💻</div>
                <h3 className="text-lg font-bold mb-2">Dev Friendly</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Built for engineering teams.
                </p>
              </div>
              <code className="bg-gray-900 text-green-400 px-3 py-2 rounded-lg text-xs font-mono block">
                /blink sk_live_...
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
