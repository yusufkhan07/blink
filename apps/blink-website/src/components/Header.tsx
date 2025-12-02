import { Link, useLocation } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

export function Header() {
  const { pathname } = useLocation();
  
  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-black text-gray-900 text-2xl hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center text-white shadow-lg">
            <FaClock className="w-6 h-6" />
          </div>
          <span className="font-display">Blink</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          <li>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-coral-500 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-coral-500 transition-colors"
            >
              How It Works
            </a>
          </li>
          <li>
            <Link 
              to="/privacy" 
              className={pathname === '/privacy' ? 'text-coral-500' : 'text-gray-600 hover:text-coral-500 transition-colors'}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={pathname === '/contact' ? 'text-coral-500' : 'text-gray-600 hover:text-coral-500 transition-colors'}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,commands,chat:write.customize,users:read&client_id=819140066320.9092531390403"
            className="btn-coral text-sm"
          >
            Add to Slack
          </a>
        </div>
      </nav>
    </header>
  );
}