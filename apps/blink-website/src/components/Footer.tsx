import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-secondary">
        <span>&copy; {new Date().getFullYear()} Blink</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}