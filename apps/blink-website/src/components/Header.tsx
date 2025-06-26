import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary text-xl">
          <span>Blink</span>
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/" className={pathname === '/' ? 'text-primary' : 'text-text hover:text-primary'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/privacy" className={pathname === '/privacy' ? 'text-primary' : 'text-text hover:text-primary'}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className={pathname === '/contact' ? 'text-primary' : 'text-text hover:text-primary'}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}