import { Link } from 'react-router-dom';
import { FaClock, FaTwitter, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-turquoise-500">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center text-white">
                <FaClock className="w-6 h-6" />
              </div>
              <span className="font-display font-black text-2xl">Blink</span>
            </div>
            <p className="text-gray-600 max-w-md mb-4 leading-relaxed">
              Send secrets, not receipts. Secure, self-destructing messages for Slack teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-turquoise-500 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise-500 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#features" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-coral-500 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@bytedevs.com" className="text-gray-600 hover:text-coral-500 transition-colors">
                  hello@bytedevs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blink by ByteDevs. All rights reserved.</p>
          <p className="text-gray-500">
            Made with ⏱️ by <a href="https://bytedevs.com" className="text-turquoise-600 hover:underline font-semibold">ByteDevs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}