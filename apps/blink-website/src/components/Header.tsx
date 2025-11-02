import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-primary text-xl"
        >
          <img src="/icon.png" alt="Blink Logo" className="h-8 w-auto" />
          <span>Blink</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className={
                  pathname === '/'
                    ? 'text-primary'
                    : 'text-text hover:text-primary'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className={
                  pathname === '/privacy'
                    ? 'text-primary'
                    : 'text-text hover:text-primary'
                }
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  pathname === '/contact'
                    ? 'text-primary'
                    : 'text-text hover:text-primary'
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            to="/dashboard"
            className="bg-primary text-white font-semibold rounded-lg px-4 md:px-5 py-2 transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm whitespace-nowrap"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
