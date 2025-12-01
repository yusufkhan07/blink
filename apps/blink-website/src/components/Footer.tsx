import { Link } from 'react-router-dom';
import { FaClock, FaGithub, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                <FaClock className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl">Blink</span>
            </div>
            <p className="text-gray-600 max-w-md mb-4">
              Secure, self-destructing messages for Slack. Share sensitive information without leaving a trace.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@bytedevs.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                  hello@bytedevs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blink by ByteDevs. All rights reserved.</p>
          <p className="text-gray-500">
            Made with 💜 by <a href="https://bytedevs.com" className="text-primary-600 hover:underline">ByteDevs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}