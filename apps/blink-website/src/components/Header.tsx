import { Link, useLocation } from 'react-router-dom';
import { FaSlack } from 'react-icons/fa';

export function Header() {
  const { pathname } = useLocation();
  
  return (
    <header className="bg-gradient-to-r from-white via-coral-50 to-turquoise-50 border-b-2 border-dashed border-gray-300 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        {/* Unique Vertical Stack Layout on Mobile, Asymmetric on Desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Logo Section - Uses actual icon */}
          <Link to="/" className="flex items-center gap-3 font-black text-gray-900 hover:opacity-80 transition-opacity">
            <img 
              src="/icon.png" 
              alt="Blink" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-2xl">Blink</span>
          </Link>

          {/* Spacer */}
          <div className="hidden md:block flex-1" />

          {/* Navigation - Right Aligned Group */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            {/* Nav Links */}
            <ul className="flex flex-wrap items-center gap-4 text-sm font-bold">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-coral-600 transition-colors underline decoration-2 decoration-transparent hover:decoration-coral-500 underline-offset-4"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-700 hover:text-coral-600 transition-colors underline decoration-2 decoration-transparent hover:decoration-coral-500 underline-offset-4"
                >
                  How It Works
                </a>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className={`transition-colors underline decoration-2 underline-offset-4 ${
                    pathname === '/privacy' 
                      ? 'text-coral-600 decoration-coral-500' 
                      : 'text-gray-700 hover:text-coral-600 decoration-transparent hover:decoration-coral-500'
                  }`}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`transition-colors underline decoration-2 underline-offset-4 ${
                    pathname === '/contact' 
                      ? 'text-coral-600 decoration-coral-500' 
                      : 'text-gray-700 hover:text-coral-600 decoration-transparent hover:decoration-coral-500'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,commands,chat:write.customize,users:read&client_id=819140066320.9092531390403"
              className="btn-slack gap-2 text-sm shadow-lg"
            >
              <FaSlack className="w-4 h-4" />
              Add to Slack
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}