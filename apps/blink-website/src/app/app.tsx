import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { ContactUs } from '../pages/ContactUs';
import '../styles/global.scss';

export function App() {
  return (
      <div className="flex flex-col min-h-screen bg-background text-text">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;