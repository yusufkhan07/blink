import { Link, useLocation } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

export function Header() {
  const { pathname } = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-bold text-gray-900 text-xl hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg">
            <FaClock className="w-5 h-5" />
          </div>
          <span className="font-display">Blink</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
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
            <Link 
              to="/privacy" 
              className={pathname === '/privacy' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600 transition-colors'}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={pathname === '/contact' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600 transition-colors'}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,commands,chat:write.customize,users:read&client_id=819140066320.9092531390403"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
          >
            Add to Slack
          </a>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-primary-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}