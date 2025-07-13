import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { ContactUs } from '../pages/ContactUs';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import '../styles/global.scss';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCTvJErwf7LlxhDU-SyZuc4XdnVG8uTXyw",
  authDomain: "bytedevs-57983.firebaseapp.com",
  projectId: "bytedevs-57983",
  appId: "1:318533323510:web:4853e8a22e675242373ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function App() {
  useEffect(() => {
    console.log('App initialized');
    logEvent(analytics, 'app_opened');
  }, []);

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